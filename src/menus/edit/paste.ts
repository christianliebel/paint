import type { DrawingContext } from '../../models/drawing-context';
import { getImageFromBlob } from '../../helpers/get-image-from-blob.js';
import { pasteImage } from '../../helpers/paste-image.js';
import type { MenuAction } from '../../models/menu-action';

export class PasteAction implements MenuAction {
  canExecute(): boolean {
    // TODO: Is there something we can paste?
    return !!navigator.clipboard?.read;
  }

  async execute(context: DrawingContext): Promise<void> {
    // TODO: Selection
    const items = await navigator.clipboard.read();
    for (const item of items) {
      try {
        for (const type of item.types) {
          if (type.match(/^image\//)) {
            const blob = await item.getType(type);
            const image = await getImageFromBlob(blob);
            await pasteImage(image, context);
          }
        }
      } catch (e) {
        console.error('Clipboard API paste error', e);
      }
    }
  }
}
