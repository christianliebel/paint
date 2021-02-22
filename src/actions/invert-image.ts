import type { DrawingContext } from '../models/drawing-context';
import type { Action } from '../models/action';

export class InvertColorsAction implements Action {
  execute({ canvas, context, selection }: DrawingContext): void {
    if (context && canvas) {
      const previousCompositeOperation = context.globalCompositeOperation;
      context.globalCompositeOperation = 'difference';
      context.fillStyle = 'white';

      if (selection) {
        context.fillRect(
          selection.x,
          selection.y,
          selection.width,
          selection.height,
        );
      } else {
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      context.globalCompositeOperation = previousCompositeOperation;
    }
  }
}
