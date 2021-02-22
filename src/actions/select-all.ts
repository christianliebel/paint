import type { DrawingContext } from '../models/drawing-context';
import { updateContext } from '../helpers/update-context';
import type { Action } from '../models/action';

export class SelectAllAction implements Action {
  execute(drawingContext: DrawingContext): void {
    if (drawingContext.canvas) {
      const { width, height } = drawingContext.canvas;
      drawingContext.selection = { x: 0, y: 0, width, height };
      updateContext(drawingContext.element);
    }
  }
}
