import { mat4 } from "gl-matrix";

/** an ActualClientRect is the true location, size, and shape of an element on the viewport, and is comprised of a DOMRect
 * plus a transform. the transform is provided in 3 formats: a mat4 from gl-matrix, a css transform string, and a css matrix3d string
 */
export type ActualClientRect = {
  rect: DOMRect;
  transformMat4: mat4;
  transform: string;
  matrix3d: string;
};

/** an ACR (alias for ActualClientRect) is the true location, size, and shape of an element on the viewport, and is comprised of a DOMRect
 * plus a transform. the transform is provided in 3 formats: matrix3d string, gl-matrix mat4, and transform string. */
export type ACR = ActualClientRect;

/** gets the element's actual client rect, which is a DOMRect relative to the viewport, plus its transform.  */
export function getActualClientRect(element: HTMLElement): ActualClientRect {
  throw new Error("not implemented");
}

/** alias for getActualClientRect(); gets the element's actual client rect, which is a DOMRect relative to the viewport, plus its transform. */
export function getACR(el: HTMLElement): ACR {
  return getActualClientRect(el);
}

/** alias for getBoundingClientRect() */
export function getBCR(el: HTMLElement): DOMRect {
  return el.getBoundingClientRect();
}
