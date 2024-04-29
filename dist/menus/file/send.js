function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { toBlob } from '../../helpers/to-blob.js';
export class SendAction {
  constructor() {
    _defineProperty(this, "fakePng", this.getFileFromPngBlob(new Blob(), 'fake.png'));
  }
  canExecute() {
    return !!navigator.canShare && navigator.canShare({
      files: [this.fakePng]
    });
  }
  async execute({
    canvas,
    document
  }) {
    if (canvas) {
      const blob = await toBlob(canvas);
      await navigator.share({
        files: [this.getFileFromPngBlob(blob, `${document.title}.png`)],
        title: document.title
      });
    }
  }
  getFileFromPngBlob(blob, title) {
    return new File([blob], title, {
      type: 'image/png'
    });
  }
}