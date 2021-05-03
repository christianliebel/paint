import { updateContext } from '../../helpers/update-context.js';
import { ClearImageAction } from '../image/clear-image.js';
export class NewAction {
  // TODO: Confirm to close document
  execute(drawingContext) {
    drawingContext.document.handle = undefined;
    drawingContext.document.title = 'untitled';
    updateContext(drawingContext.element);
    new ClearImageAction().execute(drawingContext);
  }

}