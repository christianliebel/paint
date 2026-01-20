import { line } from 'bresenham-zingl';
import { clearContext } from '../helpers/clear-context';
import { hexToRgb } from '../helpers/hex-to-rgb';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { Tool, ToolColor } from '../models/tool';

export class EraserTool implements Tool {
  private previous: Point = { x: 0, y: 0 };

  onPointerHover(
    x: number,
    y: number,
    { canvas, previewContext, eraserSize, colors }: DrawingContext,
  ): void {
    // TODO: Eraser outline remains 1px when zoomed in, and above grid.
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
    drawingContext: DrawingContext,
    color: ToolColor,
  ): void {
    this.previous = { x, y };
    this.handleEraser(x, y, drawingContext, color);
  }

  onPointerMove(
    x: number,
    y: number,
    drawingContext: DrawingContext,
    color: ToolColor,
  ): void {
    line(this.previous.x, this.previous.y, x, y, (x, y) => {
      this.handleEraser(x, y, drawingContext, color);
    });
    this.previous = { x, y };
  }

  private handleEraser(
    x: number,
    y: number,
    { context, eraserSize, colors }: DrawingContext,
    color: ToolColor,
  ) {
    if (!context) {
      return;
    }

    if (color.stroke.key === 'primary') {
      // Normal eraser
      context.fillStyle = colors.secondary;
      context.fillRect(...this.getFillRectArgs(x, y, eraserSize));
    } else {
      // Color eraser
      const { r: matchR, g: matchG, b: matchB } = hexToRgb(colors.primary);
      const {
        r: replaceR,
        g: replaceG,
        b: replaceB,
      } = hexToRgb(colors.secondary);

      const [rectX, rectY, rectW, rectH] = this.getFillRectArgs(
        x,
        y,
        eraserSize,
      );

      const imageData = context.getImageData(rectX, rectY, rectW, rectH);
      const { data } = imageData;

      for (let i = 0; i < data.length; i += 4) {
        if (
          data[i] === matchR &&
          data[i + 1] === matchG &&
          data[i + 2] === matchB
        ) {
          data[i] = replaceR;
          data[i + 1] = replaceG;
          data[i + 2] = replaceB;
        }
      }

      context.putImageData(imageData, rectX, rectY);
    }
  }

  getFillRectArgs(
    x: number,
    y: number,
    eraserSize: number,
  ): [number, number, number, number] {
    return [x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize];
  }
}
