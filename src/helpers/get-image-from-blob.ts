export function getImageFromBlob(blob: Blob): Promise<HTMLImageElement> {
  return new Promise((res) => {
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(image.src);
      res(image);
    };
    image.src = URL.createObjectURL(blob);
  });
}
