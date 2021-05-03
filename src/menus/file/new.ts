import { updateDocumentContext } from '../../helpers/update-document-context';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';
import { ClearImageAction } from '../image/clear-image';

export class NewAction implements MenuAction {
  // TODO: Confirm to close document
  execute(drawingContext: DrawingContext): void {
    updateDocumentContext(undefined, 'untitled', drawingContext);
    drawingContext.history?.clear();
    // TODO: Reset colors?
    new ClearImageAction().execute(drawingContext);
  }
}
