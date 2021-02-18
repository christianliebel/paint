export async function getBlobFromSelection(context, {
  x,
  y,
  width,
  height
}) {
  const selectionData = context.getImageData(x, y, width, height);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.getContext('2d').putImageData(selectionData, 0, 0);
  return new Promise(res => canvas.toBlob(res));
}