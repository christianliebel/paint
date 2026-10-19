import { line } from 'bresenham-zingl';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { ToolColor, Tool } from '../models/tool';

export class PencilTool implements Tool {
  private previous: Point = { x: 0, y: 0 };

  onPointerDown(
    x: number,
    y: number,
    { previewContext }: DrawingContext,
    color: ToolColor,
  ): void {
    if (previewContext) {
      previewContext.fillStyle = color.stroke.value;
      previewContext.fillRect(x, y, 1, 1);
      this.previous = { x, y };
    }
  }

  onPointerMove(
    x: number,
    y: number,
    { previewContext }: DrawingContext,
  ): void {
    line(this.previous.x, this.previous.y, x, y, (x, y) => {
      previewContext?.fillRect(x, y, 1, 1);
    });
    this.previous = { x, y };
  }
}
