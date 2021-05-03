import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class RedoAction implements MenuAction {
  canExecute(drawingContext?: DrawingContext): boolean {
    return drawingContext?.history?.canRedo() ?? false;
  }

  execute(drawingContext?: DrawingContext): void {
    drawingContext?.history?.redo();
  }
}
