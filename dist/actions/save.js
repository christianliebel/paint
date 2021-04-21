import { fileSave } from '../../_snowpack/pkg/browser-fs-access.js';
import { toBlob } from '../helpers/to-blob.js';
import { SaveAsAction } from './save-as.js';
export class SaveAction {
  async execute(drawingContext) {
    // TODO: Document Context
    if (drawingContext.canvas && drawingContext.document.handle) {
      const blob = await toBlob(drawingContext.canvas);
      await fileSave(blob, undefined, drawingContext.document.handle);
    } else {
      await new SaveAsAction().execute(drawingContext);
    }
  }

}