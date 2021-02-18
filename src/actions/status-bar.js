import { updateContext } from '../helpers/update-context';

export class StatusBarAction {
  isChecked({ view: { statusBar } }) {
    return statusBar;
  }

  execute(drawingContext) {
    drawingContext.view.statusBar = !drawingContext.view.statusBar;
    updateContext(drawingContext.element);
  }
}
