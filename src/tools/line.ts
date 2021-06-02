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
    { previewContext, context }: DrawingContext,
    color: ToolColor,
  ): void {
    if (previewContext && context) {
      this.startPosition = { x, y };
      previewContext.fillStyle = context.fillStyle = color.stroke.value;
    }
  }

  onPointerMove(
    x: number,
    y: number,
    { previewContext, canvas, lineWidth }: DrawingContext,
  ): void {
    if (canvas && previewContext) {
      this.drawLine(x, y, previewContext, previewContext, canvas, lineWidth);
    }
  }

  onPointerUp(
    x: number,
    y: number,
    { previewContext, context, canvas, lineWidth }: DrawingContext,
  ): void {
    if (previewContext && context && canvas) {
      this.drawLine(x, y, context, previewContext, canvas, lineWidth);
    }
  }

  drawLine(
    x: number,
    y: number,
    targetContext: CanvasRenderingContext2D,
    previewContext: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    lineWidth: number,
  ): void {
    clearContext(previewContext);
    line(x, y, this.startPosition.x, this.startPosition.y, (x, y) => {
      drawCircle(x, y, lineWidth, targetContext);
    });
  }
}
