import { updateContext } from '../helpers/update-context';
import type { DrawingContext } from '../models/drawing-context';
import type { Action } from '../models/action';
import { ClearImageAction } from './clear-image';

export class NewAction implements Action {
  // TODO: Confirm to close document
  execute(drawingContext: DrawingContext): void {
    drawingContext.document.handle = undefined;
    drawingContext.document.title = 'untitled';
    updateContext(drawingContext.element);
    new ClearImageAction().execute(drawingContext);
  }
}
