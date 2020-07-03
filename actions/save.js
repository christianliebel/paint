import {fileSave} from '../web_modules/browser-nativefs.js';

export function save({ canvas }) {
    canvas.toBlob(blob => fileSave(blob, { fileName: 'Untitled.png', extensions: ['png'] }), 'image/png');
}
