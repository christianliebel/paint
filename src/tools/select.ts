import { clearContext } from '../helpers/clear-context';
import { dispatchAreaEvent } from '../helpers/dispatch-area-event';
import { drawAreaRectangle } from '../helpers/draw-area-rectangle';
import { updateContext } from '../helpers/update-context';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { Tool } from '../models/tool';

export class SelectTool implements Tool {
  private startPosition: Point = { x: 0, y: 0 };

  onPointerDown(x: number, y: number): void {
    this.startPosition = { x, y };
  }

  onPointerMove(
    x: number,
    y: number,
    { element, previewContext }: DrawingContext,
  ): void {
    drawAreaRectangle(this.startPosition, { x, y }, previewContext);
    dispatchAreaEvent(this.startPosition, { x, y }, element);
  }

  onPointerUp(x: number, y: number, drawingContext: DrawingContext): void {
    const { element, previewContext } = drawingContext;
    clearContext(previewContext);

    element?.dispatchEvent(
      new CustomEvent('area', { bubbles: true, composed: true }),
    );

    const width = x - this.startPosition.x;
    const height = y - this.startPosition.y;
    drawingContext.selection =
      width === 0 && height === 0
        ? null
        : {
            x: this.startPosition.x,
            y: this.startPosition.y,
            width,
            height,
          };
    updateContext(element);
  }
}
