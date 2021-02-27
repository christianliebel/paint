import { updateContext } from '../helpers/update-context';
import type { DrawingContext } from '../models/drawing-context';
import type { ToolColor, Tool } from '../models/tool';

export class PickTool implements Tool {
  onPointerDown(x: number, y: number, drawingContext: DrawingContext): void {
    this.onPointerMove(x, y, drawingContext);
  }

  onPointerMove(x: number, y: number, drawingContext: DrawingContext): void {
    if (drawingContext.context) {
      drawingContext.previewColor = this.pickColor(x, y, drawingContext.context);
      updateContext(drawingContext.element);
    }
  }

  onPointerUp(x: number, y: number, drawingContext: DrawingContext, color: ToolColor): void {
    if (drawingContext.context) {
      drawingContext.previewColor = null;
      drawingContext.colors[color.stroke.key] = this.pickColor(
        x,
        y,
        drawingContext.context,
      );
      if (drawingContext.previousEditingTool) {
        drawingContext.tool = drawingContext.previousEditingTool;
      }
      updateContext(drawingContext.element);
    }
  }

  pickColor(x: number, y: number, context: CanvasRenderingContext2D): string {
    const [r, g, b] = context.getImageData(x, y, 1, 1).data;
    return `rgb(${r} ${g} ${b})`;
  }
}
