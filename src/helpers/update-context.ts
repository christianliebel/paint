import type { DrawingContext } from '../models/drawing-context';

export function updateContext(element: HTMLElement & { drawingContext: DrawingContext } | null): void {
  element?.dispatchEvent(
    new CustomEvent('drawing-context-changed', {
      detail: { ...element.drawingContext },
      bubbles: true,
      composed: true,
    }),
  );
}
