import { fileSave } from '../../_snowpack/pkg/browser-fs-access.js';
import { toBlob } from '../helpers/to-blob.js';
export class SaveAsAction {
  async execute({
    canvas
  }) {
    if (canvas) {
      const blob = await toBlob(canvas);
      await fileSave(blob, {
        fileName: 'Untitled.png',
        extensions: ['.png']
      }); // TODO: Update document context with saved file
    }
  }

}