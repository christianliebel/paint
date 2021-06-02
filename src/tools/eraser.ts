import { line } from 'bresenham-zingl';
import { clearContext } from '../helpers/clear-context';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { Tool } from '../models/tool';

export class EraserTool implements Tool {
  private previous: Point = { x: 0, y: 0 };

  onPointerHover(
    x: number,
    y: number,
    { canvas, previewContext, eraserSize, colors }: DrawingContext,
  ): void {
    if (canvas && previewContext) {
      clearContext(previewContext);

      if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
        previewContext.fillStyle = 'black';
        previewContext.fillRect(...this.getFillRectArgs(x, y, eraserSize));
        previewContext.fillStyle = colors.secondary;
        previewContext.fillRect(...this.getFillRectArgs(x, y, eraserSize - 2));
      }
    }
  }

  onPointerDown(
    x: number,
    y: number,
    { context, eraserSize, colors: { secondary } }: DrawingContext,
  ): void {
    if (context) {
      context.fillStyle = secondary;
      this.previous = { x, y };
      context.fillRect(...this.getFillRectArgs(x, y, eraserSize));
    }
  }

  onPointerMove(
    x: number,
    y: number,
    { eraserSize, context }: DrawingContext,
  ): void {
    // TODO: Color eraser
    line(this.previous.x, this.previous.y, x, y, (x, y) => {
      context?.fillRect(...this.getFillRectArgs(x, y, eraserSize));
    });
    this.previous = { x, y };
  }

  getFillRectArgs(
    x: number,
    y: number,
    eraserSize: number,
  ): [number, number, number, number] {
    return [x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize];
  }
}
