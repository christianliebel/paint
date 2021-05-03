import { fileSave } from '../../../_snowpack/pkg/browser-fs-access.js';
import { toBlob } from '../../helpers/to-blob.js';
import { updateContext } from '../../helpers/update-context.js';
export class SaveAsAction {
  async execute({
    canvas,
    document,
    element
  }) {
    if (canvas) {
      const blob = await toBlob(canvas);
      const file = await fileSave(blob, {
        fileName: document.title,
        extensions: ['.png'],
        description: 'PNG files'
      });

      if (file) {
        document.title = file.name;
        document.handle = file;
        updateContext(element);
      }
    }
  }

}