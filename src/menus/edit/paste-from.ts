import { fileOpen } from 'browser-fs-access';
import type { DrawingContext } from '../../models/drawing-context';
import { getImageFromBlob } from '../../helpers/get-image-from-blob';
import { pasteImage } from '../../helpers/paste-image';
import type { MenuAction } from '../../models/menu-action';

export class PasteFromAction implements MenuAction {
  async execute(context: DrawingContext): Promise<void> {
    // TODO: Paste to selection
    const blob = await fileOpen();
    const image = await getImageFromBlob(blob);
    await pasteImage(image, context);
  }
}
