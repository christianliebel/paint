import { updateContext } from '../../helpers/update-context';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';
import { ClearImageAction } from '../image/clear-image';

export class NewAction implements MenuAction {
  // TODO: Confirm to close document
  execute(drawingContext: DrawingContext): void {
    drawingContext.document.handle = undefined;
    drawingContext.document.title = 'untitled';
    updateContext(drawingContext.element);
    new ClearImageAction().execute(drawingContext);
  }
}
