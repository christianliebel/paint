import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class ClearSelectionAction implements MenuAction {
  canExecute({ selection }: DrawingContext): boolean {
    return !!selection;
  }

  execute(drawingContext: DrawingContext): void {
    if (drawingContext.selection && drawingContext.context) {
      drawingContext.context.fillStyle = drawingContext.colors.secondary;
      const { x, y, width, height } = drawingContext.selection;
      drawingContext.context.fillRect(x, y, width, height);
      drawingContext.selection = null;
    }
  }
}
