import { clearCanvas } from '../../helpers/clear-canvas';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class ClearImageAction implements MenuAction {
  canExecute({ selection }: DrawingContext): boolean {
    return !selection;
  }

  execute(drawingContext: DrawingContext): void {
    clearCanvas(drawingContext);
  }
}
