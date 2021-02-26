import { clearContext } from '../helpers/clear-context';
import { dispatchAreaEvent } from '../helpers/dispatch-area-event';
import { drawAreaRectangle } from '../helpers/draw-area-rectangle';
import { evaluateTextToolbarVisibility } from '../helpers/evaluate-text-toolbar-visibility';
import { updateContext } from '../helpers/update-context';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { Tool } from '../models/tool';

export class TextTool implements Tool {
  private startPosition: Point = { x: 0, y: 0 };

  onPointerDown(x: number, y: number): void {
    this.startPosition = { x, y };
  }

  onPointerMove(
    x: number,
    y: number,
    { previewContext, element }: DrawingContext,
  ): void {
    drawAreaRectangle(this.startPosition, { x, y }, previewContext);
    dispatchAreaEvent(this.startPosition, { x, y }, element);
  }

  onPointerUp(x: number, y: number, drawingContext: DrawingContext): void {
    clearContext(drawingContext.previewContext);

    const x1 = (drawingContext.text.x = Math.min(x, this.startPosition.x));
    const y1 = (drawingContext.text.y = Math.min(y, this.startPosition.y));
    const x2 = Math.max(x, this.startPosition.x);
    const y2 = Math.max(y, this.startPosition.y);
    const width = x2 - x1;
    const height = y2 - y1;

    // TODO: Default width/height? / depends on font size!
    // TODO: Scope to Canvas!
    if (width < 10 || height < 10) {
      return;
    }

    // TODO: In MS Paint, the area doesn't disappear. A single click shows a 1x1 area in the status bar
    drawingContext.element?.dispatchEvent(
      new CustomEvent('area', { bubbles: true, composed: true }),
    );

    drawingContext.text.active = true;
    evaluateTextToolbarVisibility(drawingContext);
    drawingContext.text.width = width;
    drawingContext.text.height = height;
    updateContext(drawingContext.element);
  }
}
