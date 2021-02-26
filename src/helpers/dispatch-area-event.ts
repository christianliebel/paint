import type { Point } from '../models/point';

export function dispatchAreaEvent(
  startPosition: Point,
  endPosition: Point,
  element: HTMLElement | null,
) {
  element?.dispatchEvent(
    new CustomEvent('area', {
      detail: {
        width: Math.abs(endPosition.x - startPosition.x),
        height: Math.abs(endPosition.y - startPosition.y),
      },
      bubbles: true,
      composed: true,
    }),
  );
}
