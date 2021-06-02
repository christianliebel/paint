import FloodFill from 'q-floodfill';
import type { DrawingContext } from '../models/drawing-context';
import type { ToolColor, Tool } from '../models/tool';

export class FillTool implements Tool {
  onPointerDown(
    x: number,
    y: number,
    { canvas, context }: DrawingContext,
    color: ToolColor,
  ): void {
    if (canvas && context) {
      const floodFill = new FloodFill(
        context.getImageData(0, 0, canvas.width, canvas.height),
      );
      floodFill.fill(color.stroke.value, x, y, 0);
      context.putImageData(floodFill.imageData, 0, 0);
    }
  }
}
