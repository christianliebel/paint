import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class InvertColorsAction implements MenuAction {
  execute({ canvas, context, selection, history }: DrawingContext): void {
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

      history?.commit();
    }
  }
}
