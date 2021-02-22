export function toBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(result => {
      if (result) {
        resolve(result);
      } else {
        reject('Blob callback returned null!');
      }
    });
  });
}