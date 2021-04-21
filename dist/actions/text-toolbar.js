import { evaluateTextToolbarVisibility } from '../helpers/evaluate-text-toolbar-visibility.js';
import { updateContext } from '../helpers/update-context.js';
export class TextToolbarAction {
  isChecked(drawingContext) {
    return drawingContext.text.showToolbar ?? false;
  }

  canExecute(drawingContext) {
    return drawingContext.text.active;
  }

  execute(drawingContext) {
    drawingContext.text.showToolbar = !drawingContext.text.showToolbar;
    evaluateTextToolbarVisibility(drawingContext);
    updateContext(drawingContext.element);
  }

}