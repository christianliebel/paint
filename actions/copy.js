export async function copy({ context, selection: { x, y, width, height } }) {
  const selection = context.getImageData(x, y, width, height);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.getContext('2d').putImageData(selection, 0, 0);
  const blob = await new Promise((res) => canvas.toBlob(res));
  await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
}
