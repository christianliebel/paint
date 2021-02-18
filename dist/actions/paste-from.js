import { fileOpen } from '../../_snowpack/pkg/browser-fs-access.js';
import { getImageFromBlob } from '../helpers/get-image-from-blob.js';
export class PasteFromAction {
  async execute({
    context
  }) {
    // TODO: Paste to selection
    const blob = await fileOpen();
    const image = await getImageFromBlob(blob, context);
    context.drawImage(image, 0, 0);
  }

}