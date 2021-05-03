import type { DrawingContext } from '../../models/drawing-context';
import { updateContext } from '../../helpers/update-context';
import type { MenuAction } from '../../models/menu-action';

export class StatusBarAction implements MenuAction {
  isChecked({ view: { statusBar } }: DrawingContext): boolean {
    return statusBar;
  }

  execute(drawingContext: DrawingContext): void {
    drawingContext.view.statusBar = !drawingContext.view.statusBar;
    updateContext(drawingContext.element);
  }
}
