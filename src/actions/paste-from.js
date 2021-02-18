import { fileOpen } from 'browser-fs-access';
import { getImageFromBlob } from '../helpers/get-image-from-blob';

export class PasteFromAction {
  async execute({ context }) {
    // TODO: Paste to selection
    const blob = await fileOpen();
    const image = await getImageFromBlob(blob, context);
    context.drawImage(image, 0, 0);
  }
}
