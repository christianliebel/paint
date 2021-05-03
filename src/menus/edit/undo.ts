import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class UndoAction implements MenuAction {
  canExecute(drawingContext?: DrawingContext): boolean {
    return drawingContext?.history?.canUndo() ?? false;
  }

  execute(drawingContext?: DrawingContext): void {
    drawingContext?.history?.undo();
  }
}
