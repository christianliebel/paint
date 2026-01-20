import { clearContext } from '../helpers/clear-context';
import { dispatchAreaEvent } from '../helpers/dispatch-area-event';
import { drawAreaRectangle } from '../helpers/draw-area-rectangle';
import { updateContext } from '../helpers/update-context';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { Tool } from '../models/tool';

export class SelectTool implements Tool {
  private startPosition: Point = { x: 0, y: 0 };

  onPointerDown(x: number, y: number, drawingContext: DrawingContext): void {
    this.startPosition = { x, y };

    drawingContext.selection = null;
    updateContext(drawingContext.element);
  }

  onPointerMove(
    x: number,
    y: number,
    { element, previewContext }: DrawingContext,
  ): void {
    // todo: +1
    // todo: zoom resets selection
    // todo: tool chg resets selection
    drawAreaRectangle(this.startPosition, { x, y }, previewContext);
    dispatchAreaEvent(this.startPosition, { x, y }, element);
  }

  onPointerUp(x: number, y: number, drawingContext: DrawingContext): void {
    const { element, previewContext } = drawingContext;
    clearContext(previewContext);

    element?.dispatchEvent(
      new CustomEvent('area', { bubbles: true, composed: true }),
    );

    const width = Math.abs(x - this.startPosition.x);
    const height = Math.abs(y - this.startPosition.y);
    const startX = Math.min(x, this.startPosition.x);
    const startY = Math.min(y, this.startPosition.y);

    if (width === 0 || height === 0) {
      return;
    }

    drawingContext.selection = {
      x: startX,
      y: startY,
      width,
      height,
    };
    updateContext(element);
  }
}
