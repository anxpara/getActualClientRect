import { glMatrix, mat4 } from "gl-matrix";
import {
  convertCssTransformOriginToVec3,
  convertMat4ToCssMatrix3dSubstring,
  getElementTransformMat4,
  getElementTransformOriginVec3,
  getRectPositionVec3,
} from "./utils/transform-utils";

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
 */
export type ACROptions = {
  bakePositionIntoTransform?: boolean;
};

type ElementInfo = {
  element: HTMLElement;
  inlineTransform: string;
  directOffset?: DOMRect;
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
 * */
export function getActualClientRect(element: HTMLElement, options?: ACROptions): ActualClientRect {
  glMatrix.setMatrixArrayType(Array);

  const transformOrigin = window.getComputedStyle(element).transformOrigin;
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

function calculateTransformForBasis(basis: DOMRect, transformOrigin: string, elementInfos: ElementInfo[]): mat4 {
  let accumulatedTransform = mat4.create();
  mat4.identity(accumulatedTransform);

  // shift the frame of reference to subject's transform origin
  const subjectOriginMat4 = mat4.create();
  mat4.fromTranslation(subjectOriginMat4, convertCssTransformOriginToVec3(transformOrigin));
  mat4.multiply(accumulatedTransform, subjectOriginMat4, accumulatedTransform);

  // calculate the transform starting at the basis element and going up to document root
  elementInfos.forEach(({ element, directOffset }, i) => {
    // shift the frame of reference to the current element's transform-origin
    const originMat4 = mat4.create();
    mat4.fromTranslation(originMat4, getElementTransformOriginVec3(element));
    mat4.invert(originMat4, originMat4);
    mat4.multiply(accumulatedTransform, originMat4, accumulatedTransform);

    // pre-multiply the accumulated transform with the current element's transform
    const transformMat4 = getElementTransformMat4(element);
    mat4.multiply(accumulatedTransform, transformMat4, accumulatedTransform);

    // translate by the current element's offset from its direct parent
    const offsetMat4 = mat4.create();
    mat4.fromTranslation(offsetMat4, getRectPositionVec3(directOffset!));
    mat4.multiply(accumulatedTransform, offsetMat4, accumulatedTransform);

    // unshift the frame of reference from the transform-origin
    mat4.invert(originMat4, originMat4);
    mat4.multiply(accumulatedTransform, originMat4, accumulatedTransform);

    // flatten transform onto xy plane if not preserving 3d
    if (!shouldElementPreserve3d(element)) {
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

function shouldElementPreserve3d(element: HTMLElement): boolean {
  if (!element.parentElement) return false;
  return getComputedStyle(element.parentElement).transformStyle === "preserve-3d";
}

// for element and all ancestors, records existing inline transform into an ElementInfo, then disables with inline transform "unset"
function disableAllTransforms(element: HTMLElement): ElementInfo[] {
  let currentElement: HTMLElement | null = element;
  const elementInfos: ElementInfo[] = [];

  do {
    elementInfos.push({ element: currentElement, inlineTransform: currentElement.style.transform });
    currentElement.style.transform = "unset";
    currentElement = currentElement!.parentElement;
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
