export function getImageFromBlob(
  blob: Blob,
): Promise<ImageBitmap | HTMLImageElement> {
  if ('createImageBitmap' in self) {
    return createImageBitmap(blob);
  }

  return new Promise((res) => {
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(image.src);
      res(image);
    };
    image.src = URL.createObjectURL(blob);
  });
}
