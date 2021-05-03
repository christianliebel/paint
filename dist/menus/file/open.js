import { fileOpen } from '../../../_snowpack/pkg/browser-fs-access.js';
import { loadFileAndAdjustCanvas } from '../../helpers/load-file-and-adjust-canvas.js';
import { updateDocumentContext } from '../../helpers/update-document-context.js';
export class OpenAction {
  async execute(drawingContext) {
    const file = await fileOpen({
      extensions: ['.png'],
      description: 'PNG Files'
    });
    updateDocumentContext(file.handle, file.name, drawingContext);
    await loadFileAndAdjustCanvas(file, drawingContext);
  }

}