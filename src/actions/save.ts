import { fileSave } from 'browser-fs-access';
import { toBlob } from '../helpers/to-blob';
import type { DrawingContext } from '../models/drawing-context';
import type { Action } from '../models/action';
import { SaveAsAction } from './save-as';

export class SaveAction implements Action {
  async execute(drawingContext: DrawingContext): Promise<void> {
    // TODO: Document Context
    if (drawingContext.canvas && drawingContext.document.handle) {
      const blob = await toBlob(drawingContext.canvas);
      await fileSave(blob, undefined, drawingContext.document.handle);
    } else {
      await new SaveAsAction().execute(drawingContext);
    }
  }
}
