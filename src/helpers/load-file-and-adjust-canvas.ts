import type { DrawingContext } from '../models/drawing-context';
import { getImageFromBlob } from './get-image-from-blob';

export async function loadFileAndAdjustCanvas(
  file: File,
  { canvas, previewCanvas, context }: DrawingContext,
): Promise<void> {
  const image = await getImageFromBlob(file);
  if (canvas && previewCanvas && context) {
    canvas.width = previewCanvas.width = image.width;
    canvas.height = previewCanvas.height = image.height;
    context.fillStyle = 'white';
    context.fillRect(0, 0, image.width, image.height);
    context.drawImage(image, 0, 0);
  }
}
