import { glMatrix, mat4, vec3 } from 'gl-matrix';
import {
  convertCssPerspectiveOriginToVec3,
  convertCssTransformOriginToVec3,
  convertMat4ToCssMatrix3dSubstring,
  getElementTransformMat4,
  getElementTransformOriginVec3,
  getRectPositionVec3,
} from './utils/transform-utils';

/**
 * an ActualClientRect is the true location, size, and shape of an element on the viewport, and is comprised of an
 * untransformed basis DOMRect, a computed transform origin, and a transform. the transform is provided in 3 formats:
 * css transform string, css transform's matrix3d substring, and gl-matrix mat4 array
 */
export type ActualClientRect = {
  basis: DOMRect;
  transformOrigin: string;
  transform: string;
  matrix3d: string;
  transformMat4: mat4;
};

/**
 * bakePositionIntoTransform (default = false): remove the position info from the basis DOMRect and add it to the transform.
 *    convenient for optimizing animations, but sometimes causes subpixel inaccuracies due to differences between
 *    offset subpixels and transform subpixels.
 *
 * useTransformOrigin: return the transform relative to this origin on the element, rather than the element's own origin.
 */
export type ACROptions = {
  bakePositionIntoTransform?: boolean;
  useTransformOrigin?: string;
};

type ElementInfo = {
  element: HTMLElement;
  inlineTransform: string;
  directOffset?: DOMRect;
  computedStyle: CSSStyleDeclaration;
};

/**
 * returns the element's ActualClientRect (ACR), i.e. its true location, size, and shape on the viewport
 *
 * its ACR is comprised of the element's untransformed basis DOMRect, its computed transform origin, and its transform.
 * the transform is provided in 3 formats: css transform string, css transform's matrix3d substring, and gl-matrix mat4 array
 *
 * options:
 *
 *    bakePositionIntoTransform (default = false): remove the position info from the basis DOMRect and add it to the transform.
 *       convenient for optimizing animations, but sometimes causes subpixel inaccuracies due to differences between
 *       offset subpixels and transform subpixels.
 *
 *    useTransformOrigin: return the transform relative to this origin on the element, rather than the element's own origin.
 */
export function getActualClientRect(element: HTMLElement, options?: ACROptions): ActualClientRect {
  if (!element) {
    throw new Error('getActualClientRect: null element');
  }

  glMatrix.setMatrixArrayType(Array);

  const inlineTransformOrigin = element.style.transformOrigin;
  element.style.transformOrigin = options?.useTransformOrigin ?? inlineTransformOrigin;

  const transformOrigin = window.getComputedStyle(element).transformOrigin;

  element.style.transformOrigin = inlineTransformOrigin;

  const elementInfos = disableAllTransforms(element);
  const basis = element.getBoundingClientRect();
  calculateDirectOffsets(elementInfos);
  enableAllTransforms(elementInfos);

  const transformMat4 = calculateTransformForBasis(basis, transformOrigin, elementInfos);

  if (options?.bakePositionIntoTransform) {
    bakePositionIntoTransform(basis, transformMat4);
  }

  const matrix3d = convertMat4ToCssMatrix3dSubstring(transformMat4);
  const transform = `matrix3d(${matrix3d})`;

  return {
    basis,
    transformOrigin,
    transform,
    matrix3d,
    transformMat4,
  };
}

function calculateTransformForBasis(
  basis: DOMRect,
  transformOrigin: string,
  elementInfos: ElementInfo[],
): mat4 {
  let accumulatedTransform = mat4.create();

  // shift the frame of reference to subject's transform origin
  const subjectOriginMat4 = mat4.create();
  mat4.fromTranslation(subjectOriginMat4, convertCssTransformOriginToVec3(transformOrigin));
  mat4.multiply(accumulatedTransform, subjectOriginMat4, accumulatedTransform);

  // calculate the transform starting at the basis element and going up to document root
  elementInfos.forEach(({ element, directOffset }, i) => {
    const parentInfo = i < elementInfos.length ? elementInfos[i + 1] : undefined;

    // shift the frame of reference to the current element's transform-origin
    const originMat4 = mat4.create();
    mat4.fromTranslation(originMat4, getElementTransformOriginVec3(element));
    mat4.invert(originMat4, originMat4);
    mat4.multiply(accumulatedTransform, originMat4, accumulatedTransform);

    // pre-multiply the accumulated transform with the current element's transform
    const transformMat4 = getElementTransformMat4(element);
    mat4.multiply(accumulatedTransform, transformMat4, accumulatedTransform);

    // unshift the frame of reference from the transform-origin
    mat4.invert(originMat4, originMat4);
    mat4.multiply(accumulatedTransform, originMat4, accumulatedTransform);

    // translate by the current element's offset from its direct parent
    const offsetMat4 = mat4.create();
    mat4.fromTranslation(offsetMat4, getRectPositionVec3(directOffset!));
    mat4.multiply(accumulatedTransform, offsetMat4, accumulatedTransform);

    // apply parent perspective
    const perspective = getParentPerspective(parentInfo);
    if (perspective !== 'none') {
      const parentPerspectiveMat4 = mat4.create();

      // shift the frame of reference to the perspective origin
      const perspectiveOriginMat4 = mat4.create();
      mat4.fromTranslation(perspectiveOriginMat4, getParentPerspectiveOrigin(parentInfo!));
      mat4.multiply(parentPerspectiveMat4, parentPerspectiveMat4, perspectiveOriginMat4);

      // multiply by the equivalent of "transform: perspective(d)"
      const d = Math.max(parseFloat(perspective), 1);
      const perspectiveFuncMat4 = mat4.create();
      perspectiveFuncMat4[11] = -1 / d;
      mat4.multiply(parentPerspectiveMat4, parentPerspectiveMat4, perspectiveFuncMat4);

      // unshift the frame of reference from the perspective origin
      mat4.invert(perspectiveOriginMat4, perspectiveOriginMat4);
      mat4.multiply(parentPerspectiveMat4, parentPerspectiveMat4, perspectiveOriginMat4);

      // pre-multiply the accumulated transform with the parent's perspective
      mat4.multiply(accumulatedTransform, parentPerspectiveMat4, accumulatedTransform);
    }

    // flatten transform onto xy plane if not preserving 3d
    if (!doesParentPreserve3d(parentInfo)) {
      accumulatedTransform[2] = 0;
      accumulatedTransform[6] = 0;
      accumulatedTransform[10] = 1;
      accumulatedTransform[14] = 0;
    }
  });

  // unshift the frame of reference from the subject's transform origin
  mat4.invert(subjectOriginMat4, subjectOriginMat4);
  mat4.multiply(accumulatedTransform, subjectOriginMat4, accumulatedTransform);

  // subtract the basis' position to get the final accumulated transform relative to the basis
  const basisPositionMat4 = mat4.create();
  mat4.fromTranslation(basisPositionMat4, getRectPositionVec3(basis));
  mat4.invert(basisPositionMat4, basisPositionMat4);
  mat4.multiply(accumulatedTransform, basisPositionMat4, accumulatedTransform);

  return accumulatedTransform;
}

function getParentPerspective(parentInfo: ElementInfo | undefined): string {
  if (!parentInfo) return 'none';
  return parentInfo.computedStyle.perspective;
}

function getParentPerspectiveOrigin(parentInfo: ElementInfo): vec3 {
  return convertCssPerspectiveOriginToVec3(parentInfo.computedStyle.perspectiveOrigin);
}

function doesParentPreserve3d(parentInfo: ElementInfo | undefined): boolean {
  if (!parentInfo) {
    return false;
  }

  if (getUsedTransformStyle(parentInfo) !== 'preserve-3d') {
    return false;
  }

  return true;
}

// for element and all ancestors, records inline transform value into an ElementInfo
// then disables existing transforms by setting to identity matrix
function disableAllTransforms(element: HTMLElement): ElementInfo[] {
  let currentElement: HTMLElement | null = element;
  const elementInfos: ElementInfo[] = [];

  do {
    const computedStyle = getComputedStyle(currentElement);
    elementInfos.push({
      element: currentElement,
      inlineTransform: currentElement.style.transform,
      computedStyle,
    });
    const hasTransform = computedStyle.transform !== 'none';
    if (hasTransform) {
      currentElement.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
    currentElement = currentElement.parentElement;
  } while (currentElement);

  return elementInfos;
}

function enableAllTransforms(elementInfos: ElementInfo[]): void {
  elementInfos.forEach((info) => {
    info.element.style.transform = info.inlineTransform;
  });
}

// assumes elements have transforms disabled
function calculateDirectOffsets(elementInfos: ElementInfo[]): void {
  elementInfos.forEach((info) => {
    info.directOffset = getOffsetFromDirectParent(info.element);
  });
}

// assumes element and all ancestors have transforms disabled
function getOffsetFromDirectParent(element: HTMLElement): DOMRect {
  const offsetRect = element.getBoundingClientRect();
  if (element.parentElement) {
    const parentOffsetRect = element.parentElement.getBoundingClientRect();
    offsetRect.x -= parentOffsetRect.x;
    offsetRect.y -= parentOffsetRect.y;
  }
  return offsetRect;
}

function bakePositionIntoTransform(basis: DOMRect, transformMat4: mat4): void {
  const positionMat4 = mat4.create();
  mat4.fromTranslation(positionMat4, getRectPositionVec3(basis));
  mat4.multiply(transformMat4, positionMat4, transformMat4);
  basis.x = 0;
  basis.y = 0;
}

// https://www.w3.org/TR/css-transforms-2/#grouping-property-values
function getUsedTransformStyle(elementInfo: ElementInfo): string {
  const transformStyle = elementInfo.computedStyle.transformStyle;
  if (transformStyle === 'flat') {
    return transformStyle;
  }

  if (doesElementHaveGroupingProperty(elementInfo)) {
    return 'flat';
  }

  return transformStyle;
}

const NonGroupValuesByGroupProperty: [string, string[]][] = [
  ['overflow', ['visible']],
  ['opacity', ['1']],
  ['filter', ['none']],
  ['clip-path', ['none']],
  ['isolation', ['auto']],
  ['mask-image', ['none', '']],
  ['-webkit-mask-image', ['none', '']],
  ['mask-border-source', ['none', '']],
  ['-webkit-mask-box-image-source', ['none', '']],
  ['mix-blend-mode', ['normal']],
];

function doesElementHaveGroupingProperty(elementInfo: ElementInfo): boolean {
  for (let i = 0; i < NonGroupValuesByGroupProperty.length; i++) {
    const propertyName = NonGroupValuesByGroupProperty[i][0];
    const propertyValue = elementInfo.computedStyle.getPropertyValue(propertyName);
    const nonGroupValues = NonGroupValuesByGroupProperty[i][1];

    if (!nonGroupValues.includes(propertyValue)) {
      return true;
    }
  }

  if (doesElementContainPaint(elementInfo)) {
    return true;
  }

  if (doesElementCreateStackingContext(elementInfo)) {
    return true;
  }

  return false;
}

function doesElementContainPaint(elementInfo: ElementInfo): boolean {
  const containValue = elementInfo.computedStyle.contain;
  if (['strict', 'content'].includes(containValue)) {
    return true;
  }
  if (containValue.includes('paint')) {
    return true;
  }

  const contentVisibility = elementInfo.computedStyle.getPropertyValue('content-visibility');
  if (['hidden', 'auto'].includes(contentVisibility)) {
    return true;
  }

  return false;
}

// this function avoids redundantly checking properties in NonGroupValuesByGroupProperty,
// since it's used exclusively for determining if the element should preserve 3d
function doesElementCreateStackingContext(elementInfo: ElementInfo): boolean {
  const willChange = elementInfo.computedStyle.willChange;
  if (willChange.includes('opacity')) {
    return true;
  }
  if (willChange.includes('filter')) {
    return true;
  }

  const backdropFilter = elementInfo.computedStyle.getPropertyValue('backdrop-filter');
  if (!['none', ''].includes(backdropFilter)) {
    return true;
  }
  const webkitBackdropFilter =
    elementInfo.computedStyle.getPropertyValue('-webkit-backdrop-filter');
  if (!['none', ''].includes(webkitBackdropFilter)) {
    return true;
  }

  return false;
}
