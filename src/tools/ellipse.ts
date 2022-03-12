import { ellipseRect } from 'bresenham-zingl';
import { clearContext } from '../helpers/clear-context';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { ToolColor, Tool } from '../models/tool';
import type { FillStyle } from '../models/fill-style';

export class EllipseTool implements Tool {
  private startPosition: Point = { x: 0, y: 0 };

  onPointerDown(x: number, y: number): void {
    this.startPosition = { x, y };
  }

  onPointerMove(
    x: number,
    y: number,
    { fillStyle, canvas, previewContext }: DrawingContext,
    color: ToolColor,
  ): void {
    if (canvas && previewContext) {
      this.drawEllipse(
        x,
        y,
        fillStyle,
        color,
        canvas,
        previewContext,
        previewContext,
      );
    }
  }

  onPointerUp(
    x: number,
    y: number,
    { fillStyle, canvas, context, previewContext }: DrawingContext,
    color: ToolColor,
  ): void {
    if (canvas && context && previewContext) {
      this.drawEllipse(x, y, fillStyle, color, canvas, context, previewContext);
    }
  }

  private drawEllipse(
    x: number,
    y: number,
    fillStyle: FillStyle,
    color: ToolColor,
    canvas: HTMLCanvasElement,
    targetContext: CanvasRenderingContext2D,
    previewContext: CanvasRenderingContext2D,
  ): void {
    clearContext(previewContext);

    const ellipsePixels: Point[] = [];
    ellipseRect(this.startPosition.x, this.startPosition.y, x, y, (x, y) => {
      ellipsePixels.push({ x, y });
    });

    if (fillStyle.fill) {
      targetContext.fillStyle = color.fill.value;
      ellipsePixels.sort((a, b) => a.y - b.y || a.x - b.x);
      const fillPixels = this.getFillPixels(ellipsePixels);
      Array.from(fillPixels).forEach((pixel) => {
        this.drawPixel(targetContext, pixel);
      });
    }

    if (fillStyle.stroke) {
      targetContext.fillStyle = color.stroke.value;
    }

    ellipsePixels.forEach((pixel) => {
      this.drawPixel(targetContext, pixel);
    });
  }

  private drawPixel(context: CanvasRenderingContext2D, { x, y }: Point) {
    context.fillRect(Math.floor(x), Math.floor(y), 1, 1);
  }

  private *getFillPixels(pixels: Point[]): Generator<Point> {
    let previousPixel: Point | undefined;

    for (const pixel of pixels) {
      if (previousPixel?.y === pixel.y && pixel.x - previousPixel.x > 1) {
        const minX = Math.min(previousPixel.x, pixel.x);
        const maxX = Math.max(previousPixel.x, pixel.x);
        for (let i = minX; i <= maxX; i++) {
          yield { x: i, y: pixel.y };
        }
      }

      previousPixel = pixel;
    }
  }
}
