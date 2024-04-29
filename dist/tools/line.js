function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { line } from '../../_snowpack/pkg/bresenham-zingl.js';
import { clearContext } from '../helpers/clear-context.js';
import { drawCircle } from '../helpers/draw-circle.js';
export class LineTool {
  constructor() {
    _defineProperty(this, "startPosition", {
      x: 0,
      y: 0
    });
  }
  onPointerDown(x, y, {
    previewContext,
    context
  }, color) {
    if (previewContext && context) {
      this.startPosition = {
        x,
        y
      };
      previewContext.fillStyle = context.fillStyle = color.stroke.value;
    }
  }
  onPointerMove(x, y, {
    previewContext,
    canvas,
    lineWidth
  }) {
    if (canvas && previewContext) {
      this.drawLine(x, y, previewContext, previewContext, canvas, lineWidth);
    }
  }
  onPointerUp(x, y, {
    previewContext,
    context,
    canvas,
    lineWidth
  }) {
    if (previewContext && context && canvas) {
      this.drawLine(x, y, context, previewContext, canvas, lineWidth);
    }
  }
  drawLine(x, y, targetContext, previewContext, canvas, lineWidth) {
    clearContext(previewContext);
    line(x, y, this.startPosition.x, this.startPosition.y, (x, y) => {
      drawCircle(x, y, lineWidth, targetContext);
    });
  }
}