import { evaluateTextToolbarVisibility } from '../../helpers/evaluate-text-toolbar-visibility';
import { updateContext } from '../../helpers/update-context';
import type { MenuAction } from '../../models/menu-action';
import type { DrawingContext } from '../../models/drawing-context';

export class TextToolbarAction implements MenuAction {
  isChecked(drawingContext: DrawingContext): boolean {
    return drawingContext.text.showToolbar ?? false;
  }

  canExecute(drawingContext: DrawingContext): boolean {
    return drawingContext.text.active;
  }

  execute(drawingContext: DrawingContext): void {
    drawingContext.text.showToolbar = !drawingContext.text.showToolbar;
    evaluateTextToolbarVisibility(drawingContext);
    updateContext(drawingContext.element);
  }
}
