function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { clearContext } from '../helpers/clear-context.js';
import { dispatchAreaEvent } from '../helpers/dispatch-area-event.js';
import { drawAreaRectangle } from '../helpers/draw-area-rectangle.js';
import { updateContext } from '../helpers/update-context.js';
export class SelectTool {
  constructor() {
    _defineProperty(this, "startPosition", {
      x: 0,
      y: 0
    });
  }
  onPointerDown(x, y) {
    this.startPosition = {
      x,
      y
    };
  }
  onPointerMove(x, y, {
    element,
    previewContext
  }) {
    drawAreaRectangle(this.startPosition, {
      x,
      y
    }, previewContext);
    dispatchAreaEvent(this.startPosition, {
      x,
      y
    }, element);
  }
  onPointerUp(x, y, drawingContext) {
    const {
      element,
      previewContext
    } = drawingContext;
    clearContext(previewContext);
    element?.dispatchEvent(new CustomEvent('area', {
      bubbles: true,
      composed: true
    }));
    const width = x - this.startPosition.x;
    const height = y - this.startPosition.y;
    drawingContext.selection = width === 0 && height === 0 ? null : {
      x: this.startPosition.x,
      y: this.startPosition.y,
      width,
      height
    };
    updateContext(element);
  }
}