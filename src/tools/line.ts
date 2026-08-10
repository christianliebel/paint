import { line } from 'bresenham-zingl';
import { clearContext } from '../helpers/clear-context';
import { drawCircle } from '../helpers/draw-circle';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { ToolColor, Tool } from '../models/tool';

export class LineTool implements Tool {
  private startPosition: Point = { x: 0, y: 0 };

  onPointerDown(
    x: number,
    y: number,
    { previewContext }: DrawingContext,
    color: ToolColor,
  ): void {
    if (previewContext) {
      this.startPosition = { x, y };
      previewContext.fillStyle = color.stroke.value;
    }
  }

  onPointerMove(
    x: number,
    y: number,
    { previewContext, lineWidth }: DrawingContext,
  ): void {
    if (previewContext) {
      this.drawLine(x, y, previewContext, lineWidth);
    }
  }

  onPointerUp(x: number, y: number, drawingContext: DrawingContext): void {
    this.onPointerMove(x, y, drawingContext);
  }

  drawLine(
    x: number,
    y: number,
    previewContext: CanvasRenderingContext2D,
    lineWidth: number,
  ): void {
    clearContext(previewContext);
    line(x, y, this.startPosition.x, this.startPosition.y, (x, y) => {
      drawCircle(x, y, lineWidth, previewContext);
    });
  }
}
