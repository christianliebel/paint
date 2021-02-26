import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { Tool, ToolColor } from '../models/tool';

// 9x9
// 17x17
// 25x25

export class Airbrush implements Tool {
  private intervalHandle?: NodeJS.Timeout;
  private currentPosition?: Point;

  onPointerDown(
    x: number,
    y: number,
    drawingContext: DrawingContext,
    color: ToolColor,
  ): void {
    if (drawingContext.context) {
      drawingContext.context.fillStyle = color.stroke.value;
    }

    this.currentPosition = { x, y };
    // TODO: Guess that mousedown paints!
    this.spray(drawingContext);
    this.intervalHandle = setInterval(() => this.spray(drawingContext), 300);
  }

  spray({ airbrushSize, context }: DrawingContext): void {
    if (this.currentPosition && context) {
      // TODO: Generate circle of according size
      // TODO: 10 sprays per frame
      const { x, y } = this.currentPosition;
      context.fillRect(x + airbrushSize - airbrushSize, y, 2, 2);
    }
  }

  onPointerMove(x: number, y: number, drawingContext: DrawingContext): void {
    if (typeof this.intervalHandle !== 'undefined') {
      // TODO: Guess that moving repaints
      this.spray(drawingContext);
      this.currentPosition = { x, y };
    }
  }

  onPointerUp(): void {
    if (typeof this.intervalHandle !== 'undefined') {
      clearInterval(this.intervalHandle);
      this.intervalHandle = this.currentPosition = undefined;
    }
  }
}
