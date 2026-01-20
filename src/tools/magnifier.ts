import { updateContext } from '../helpers/update-context';
import { DrawingContext } from '../models/drawing-context';
import { Tool } from '../models/tool';

export class MagnifierTool implements Tool {
  onPointerDown(_x: number, _y: number, drawingContext: DrawingContext): void {
    if (drawingContext.magnifierSize === 1) {
      drawingContext.magnifierSize = drawingContext.previousMagnifierSize;
    } else {
      drawingContext.previousMagnifierSize = drawingContext.magnifierSize;
      drawingContext.magnifierSize = 1;
    }

    updateContext(drawingContext.element);
  }

  onPointerUp(_x: number, _y: number, drawingContext: DrawingContext): void {
    drawingContext.tool = drawingContext.previousEditingTool;
    updateContext(drawingContext.element);
  }
}
