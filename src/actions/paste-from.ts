import { fileOpen } from 'browser-fs-access';
import type { DrawingContext } from '../models/drawing-context';
import { getImageFromBlob } from '../helpers/get-image-from-blob';
import type { Action } from '../models/action';

export class PasteFromAction implements Action {
  async execute({ context }: DrawingContext): Promise<void> {
    if (context) {
      // TODO: Paste to selection
      const blob = await fileOpen();
      const image = await getImageFromBlob(blob);
      context.drawImage(image, 0, 0);
    }
  }
}
