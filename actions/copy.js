export function copy({canvas}) {
    // TODO: Copy selection
    canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({[blob.type]: blob})]));
}
