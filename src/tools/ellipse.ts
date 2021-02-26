import { ellipseRect } from 'bresenham-zingl';
import { clearContext } from '../helpers/clear-context';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { ToolColor, Tool } from '../models/tool';

export class EllipseTool implements Tool {
  private startPosition: Point = { x: 0, y: 0 };

  onPointerDown(x: number, y: number, { previewContext, context }: DrawingContext, color: ToolColor): void {
    if (context && previewContext) {
      this.startPosition = { x, y };
      context.fillStyle = previewContext.fillStyle = color.stroke.value;
    }
  }

  onPointerMove(x: number, y: number, { canvas, previewContext }: DrawingContext): void {
    if (canvas && previewContext) {
      this.drawEllipse(x, y, canvas, previewContext, previewContext);
    }
  }

  onPointerUp(x: number, y: number, { canvas, context, previewContext }: DrawingContext): void {
    if (canvas && context && previewContext) {
      this.drawEllipse(x, y, canvas, context, previewContext);
    }
  }

  drawEllipse(x: number, y: number, canvas: HTMLCanvasElement, targetContext: CanvasRenderingContext2D, previewContext: CanvasRenderingContext2D): void {
    // TODO: Fill styles, no anti-alias
    clearContext(previewContext);
    ellipseRect(this.startPosition.x, this.startPosition.y, x, y, (x, y) => {
      targetContext.fillRect(x, y, 1, 1);
    });
  }
}
