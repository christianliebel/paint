import { fileSave } from '../../../_snowpack/pkg/browser-fs-access.js';
import { toBlob } from '../../helpers/to-blob.js';
import { updateDocumentContext } from '../../helpers/update-document-context.js';
export class SaveAsAction {
  async execute(drawingContext) {
    if (!drawingContext.canvas) {
      return;
    }
    const blob = await toBlob(drawingContext.canvas);
    const file = await fileSave(blob, {
      fileName: drawingContext.document.title,
      extensions: ['.png'],
      description: 'PNG files'
    });
    if (file) {
      updateDocumentContext(file, file.name, drawingContext);
    }
  }
}