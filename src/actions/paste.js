import { getImageFromBlob } from '../helpers/get-image-from-blob.js';

export class PasteAction {
  canExecute() {
    // TODO: Is there something we can paste?
    return navigator.clipboard?.read;
  }

  async execute({ context }) {
    // TODO: Selection
    const items = await navigator.clipboard.read();
    for (let item of items) {
      try {
        for (let type of item.types) {
          if (type.match(/^image\//)) {
            const blob = await item.getType(type);
            const image = await getImageFromBlob(blob);
            context.drawImage(image, 0, 0);
          }
        }
      } catch (e) {
        console.error('Clipboard API paste error', e);
      }
    }
  }
}
