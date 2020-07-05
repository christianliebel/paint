import { fileSave } from '../web_modules/browser-nativefs.js';

export function saveAs({ canvas }) {
  // TODO: File name from document context
  canvas.toBlob(
    (blob) => fileSave(blob, { fileName: 'Untitled.png', extensions: ['png'] }),
    'image/png',
  );
  // TODO: Update document context with saved file
}
