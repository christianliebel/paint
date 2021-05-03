import { fileSave } from 'browser-fs-access';
import { toBlob } from '../../helpers/to-blob';
import { updateContext } from '../../helpers/update-context';
import type { MenuAction } from '../../models/menu-action';
import type { DrawingContext } from '../../models/drawing-context';

export class SaveAsAction implements MenuAction {
  async execute({ canvas, document, element }: DrawingContext): Promise<void> {
    if (canvas) {
      const blob = await toBlob(canvas);
      const file = await fileSave(blob, {
        fileName: document.title,
        extensions: ['.png'],
        description: 'PNG files',
      });
      if (file) {
        document.title = file.name;
        document.handle = file;
        updateContext(element);
      }
    }
  }
}
