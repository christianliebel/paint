import { updateDocumentContext } from '../../helpers/update-document-context.js';
import { ClearImageAction } from '../image/clear-image.js';
export class NewAction {
  // TODO: Confirm to close document
  execute(drawingContext) {
    updateDocumentContext(undefined, 'untitled', drawingContext);
    drawingContext.history?.clear(); // TODO: Reset colors?

    new ClearImageAction().execute(drawingContext);
  }

}