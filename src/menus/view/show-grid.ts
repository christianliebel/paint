import { MIN_GRID_MAGNIFICATION } from '../../data/magnifier-sizes';
import { updateContext } from '../../helpers/update-context';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class ShowGridAction implements MenuAction {
  canExecute(drawingContext: DrawingContext): boolean {
    return drawingContext.magnifierSize >= MIN_GRID_MAGNIFICATION;
  }

  isChecked(drawingContext: DrawingContext): boolean {
    return this.canExecute(drawingContext) && drawingContext.showGrid == true;
  }

  execute(drawingContext: DrawingContext): void {
    drawingContext.showGrid = !drawingContext.showGrid;
    updateContext(drawingContext.element);
  }
}
