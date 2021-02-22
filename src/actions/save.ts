import type { DrawingContext } from '../models/drawing-context';
import type { Action } from '../models/action';
import { SaveAsAction } from './save-as';

export class SaveAction implements Action {
  execute(drawingContext: DrawingContext): void {
    // TODO: Document Context
    // TODO: Overwrite file if we have a handle, otherwise "save as"
    new SaveAsAction().execute(drawingContext);
  }
}
