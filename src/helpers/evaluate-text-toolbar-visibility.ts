import type { DrawingContext } from '../models/drawing-context';

export function evaluateTextToolbarVisibility(
  drawingContext: DrawingContext,
): void {
  drawingContext.view.textToolbar =
    drawingContext.text.showToolbar && drawingContext.text.active;
}
