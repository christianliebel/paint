import type { DrawingContext } from '../models/drawing-context';
import type { Action } from '../models/action';
import { ClearImageAction } from './clear-image';

export class NewAction implements Action {
  // TODO: Document context
  // TODO: Confirm to close document
  execute(drawingContext: DrawingContext): void {
    new ClearImageAction().execute(drawingContext);
  }
}
