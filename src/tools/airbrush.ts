import { fillEllipse } from '../helpers/fill-ellipse';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { Tool, ToolColor } from '../models/tool';

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
    this.spray(drawingContext);
    this.intervalHandle = setInterval(() => this.spray(drawingContext), 30);
  }

  spray({ airbrushSize, context }: DrawingContext): void {
    if (this.currentPosition && context) {
      const radius = Math.floor(airbrushSize / 2);
      const { x, y } = this.currentPosition;
      const points: Point[] = [];
      fillEllipse(x, y, radius, radius, (point) => points.push(point));

      for (let i = 0; i < 10; i++) {
        const index = Math.round(Math.random() * (points.length - 1));
        const { x, y } = points[index];
        context.fillRect(x, y, 1, 1);
      }
    }
  }

  onPointerMove(x: number, y: number, drawingContext: DrawingContext): void {
    if (typeof this.intervalHandle !== 'undefined') {
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
