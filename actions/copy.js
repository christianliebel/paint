export function copy({ canvas }) {
  // TODO: Copy selection
  canvas.toBlob((blob) =>
    // eslint-disable-next-line no-undef
    navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]),
  );
}
