import type { Selection } from '../models/selection';
import { toBlob } from './to-blob';

export async function getBlobFromSelection(
  context: CanvasRenderingContext2D,
  { x, y, width, height }: Selection,
): Promise<Blob> {
  const selectionData = context.getImageData(x, y, width, height);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.getContext('2d')?.putImageData(selectionData, 0, 0);
  return toBlob(canvas);
}
