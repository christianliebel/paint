import { updateContext } from '../helpers/update-context.js';

export class StatusBarAction {
  isChecked({ view: { statusBar } }) {
    return statusBar;
  }

  execute(drawingContext) {
    drawingContext.view.statusBar = !drawingContext.view.statusBar;
    updateContext(drawingContext.element);
  }
}
