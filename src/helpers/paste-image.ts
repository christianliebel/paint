import { clearCanvas } from './clear-canvas';
import { showMessageBox } from './message-box';
import type { DrawingContext } from '../models/drawing-context';

export async function pasteImage(
  image: HTMLImageElement | ImageBitmap,
  drawingContext: DrawingContext,
): Promise<void> {
  const { canvas, context, previewCanvas, history } = drawingContext;
  if (!canvas || !context || !previewCanvas) {
    return;
  }

  if (image.width > canvas.width || image.height > canvas.height) {
    // TODO: Windows flag in title bar
    const result = await showMessageBox(
      'The image in the clipboard is larger than the bitmap.\nWould you like the bitmap enlarged?',
      'question',
      'Paint',
      'yes-no-cancel',
    );

    if (result === 'cancel') {
      return;
    }

    if (result === 'yes') {
      const newWidth = Math.max(image.width, canvas.width);
      const newHeight = Math.max(image.height, canvas.height);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

      canvas.width = previewCanvas.width = newWidth;
      canvas.height = previewCanvas.height = newHeight;

      clearCanvas(drawingContext, false);
      context.putImageData(imageData, 0, 0);
    }
  }

  context.drawImage(image, 0, 0);
  history?.commit();
}
