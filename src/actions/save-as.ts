import { fileSave } from 'browser-fs-access';
import { toBlob } from '../helpers/to-blob';
import type { Action } from '../models/action';
import type { DrawingContext } from '../models/drawing-context';

export class SaveAsAction implements Action {
  async execute({ canvas }: DrawingContext): Promise<void> {
    if (canvas) {
      const blob = await toBlob(canvas);
      await fileSave(blob, { fileName: 'Untitled.png', extensions: ['.png'] });
      // TODO: Update document context with saved file
    }
  }
}
