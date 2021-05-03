import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class ClearImageAction implements MenuAction {
  canExecute({ selection }: DrawingContext): boolean {
    return !selection;
  }

  execute({ canvas, context, colors }: DrawingContext): void {
    if (canvas && context) {
      context.fillStyle = colors.secondary;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  }
}
