import { fileOpen } from 'browser-fs-access';
import type { DrawingContext } from '../models/drawing-context';
import { getImageFromBlob } from '../helpers/get-image-from-blob';
import type { Action } from '../models/action';

export class OpenAction implements Action {
  async execute({ canvas, previewCanvas, context }: DrawingContext): Promise<void> {
    if (canvas && previewCanvas && context) {
      const file = await fileOpen({ extensions: ['.png'] });
      const image = await getImageFromBlob(file);
      canvas.width = previewCanvas.width = image.width;
      canvas.height = previewCanvas.height = image.height;
      context.fillStyle = 'white';
      context.fillRect(0, 0, image.width, image.height);
      context.drawImage(image, 0, 0);
    }
  }
}
