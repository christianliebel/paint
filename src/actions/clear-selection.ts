import type { DrawingContext } from '../models/drawing-context';
import type { Action } from '../models/action';

export class ClearSelectionAction implements Action {
  canExecute({ selection }: DrawingContext): boolean {
    return !!selection;
  }

  execute({ selection, context, colors }: DrawingContext): void {
    if (selection && context) {
      context.fillStyle = colors.secondary;
      const { x, y, width, height } = selection;
      context.fillRect(x, y, width, height);
    }
  }
}
