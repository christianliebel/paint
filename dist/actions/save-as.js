import { fileSave } from '../../_snowpack/pkg/browser-fs-access.js';
export class SaveAsAction {
  execute({
    canvas
  }) {
    // TODO: File name from document context
    canvas.toBlob(blob => fileSave(blob, {
      fileName: 'Untitled.png',
      extensions: ['.png']
    }), 'image/png'); // TODO: Update document context with saved file
  }

}