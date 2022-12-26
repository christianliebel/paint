import { getImageFromBlob } from './get-image-from-blob.js';
export async function loadFileAndAdjustCanvas(file, {
  canvas,
  previewCanvas,
  context
}) {
  const image = await getImageFromBlob(file);
  if (canvas && previewCanvas && context) {
    canvas.width = previewCanvas.width = image.width;
    canvas.height = previewCanvas.height = image.height;
    context.fillStyle = 'white';
    context.fillRect(0, 0, image.width, image.height);
    context.drawImage(image, 0, 0);
  }
}