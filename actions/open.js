import { fileOpen } from '../web_modules/browser-nativefs.js';
import { getImageFromBlob } from '../helpers/get-image-from-blob.js';

export class OpenAction {
  async execute({ canvas, previewCanvas, context }) {
    const file = await fileOpen({ extensions: ['png'] });
    const image = await getImageFromBlob(file);
    canvas.width = previewCanvas.width = image.width;
    canvas.height = previewCanvas.height = image.height;
    context.fillStyle = 'white';
    context.fillRect(0, 0, image.width, image.height);
    context.drawImage(image, 0, 0);
  }
}
