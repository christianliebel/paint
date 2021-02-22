import type { DrawingContext } from '../models/drawing-context';
import { updateContext } from '../helpers/update-context';
import type { Action } from '../models/action';

export class StatusBarAction implements Action {
  isChecked({ view: { statusBar } }: DrawingContext): boolean {
    return statusBar;
  }

  execute(drawingContext: DrawingContext): void {
    drawingContext.view.statusBar = !drawingContext.view.statusBar;
    updateContext(drawingContext.element);
  }
}
