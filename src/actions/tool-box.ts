import type { DrawingContext } from '../models/drawing-context';
import { updateContext } from '../helpers/update-context';
import type { Action } from '../models/action';

export class ToolBoxAction implements Action {
  isChecked({ view: { toolBox } }: DrawingContext): boolean {
    return toolBox;
  }

  execute(drawingContext: DrawingContext): void {
    drawingContext.view.toolBox = !drawingContext.view.toolBox;
    updateContext(drawingContext.element);
  }
}
