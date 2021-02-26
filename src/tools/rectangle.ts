import { line } from 'bresenham-zingl';
import { clearContext } from '../helpers/clear-context';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { Tool, ToolColor } from '../models/tool';

export class RectangleTool implements Tool {
  private startPosition: Point = { x: 0, y: 0 };

  onPointerDown(x: number, y: number): void {
    this.startPosition = { x, y };
  }

  onPointerMove(x: number, y: number, {
    canvas,
    lineWidth,
    fillStyle,
    previewContext,
  }: DrawingContext, color: ToolColor): void {
    if (canvas && previewContext) {
      this.drawRectangle(
        x,
        y,
        previewContext,
        previewContext,
        fillStyle,
        lineWidth,
        canvas,
        color,
      );
    }
  }

  onPointerUp(
    x: number,
    y: number,
    { canvas, context, lineWidth, fillStyle, previewContext }: DrawingContext,
    color: ToolColor,
  ): void {
    if (canvas && context && previewContext) {
      this.drawRectangle(
        x,
        y,
        context,
        previewContext,
        fillStyle,
        lineWidth,
        canvas,
        color,
      );
    }
  }

  drawRectangle(
    x: number,
    y: number,
    targetContext: CanvasRenderingContext2D,
    previewContext: CanvasRenderingContext2D,
    fillStyle: { fill: boolean, stroke: boolean },
    lineWidth: number,
    canvas: HTMLCanvasElement,
    color: ToolColor,
  ): void {
    clearContext(previewContext);

    const x1 = Math.min(this.startPosition.x, x);
    const x2 = Math.max(this.startPosition.x, x);
    const y1 = Math.min(this.startPosition.y, y);
    const y2 = Math.max(this.startPosition.y, y);
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);

    if (fillStyle.stroke && (width < lineWidth * 2 || height < lineWidth * 2)) {
      targetContext.fillStyle = color.stroke.value;
      targetContext.fillRect(x1, y1, width, height);
      return;
    }

    if (fillStyle.fill) {
      targetContext.fillStyle = color.fill.value;
      targetContext.fillRect(x1, y1, width, height);
    }

    if (fillStyle.stroke) {
      targetContext.fillStyle = color.stroke.value;
      this.getPointsForLine(x1, y1, x2, y2, lineWidth).forEach(({ x, y }) => {
        targetContext.fillRect(x, y, 1, 1);
      });
    }
  }

  getPointsForLine(x1: number, y1: number, x2: number, y2: number, lineWidth: number): Point[] {
    const points: Point[] = [];
    for (let i = 0; i < lineWidth; i++) {
      line(x1 + i, y1 + i, x2, y1 + i, (x, y) => points.push({ x, y }));
      line(x1 + i, y1 + i, x1 + i, y2, (x, y) => points.push({ x, y }));
      line(x2 - i, y2 - i, x2 - i, y1, (x, y) => points.push({ x, y }));
      line(x2 - i, y2 - i, x1, y2 - i, (x, y) => points.push({ x, y }));
    }
    return points;
  }
}
