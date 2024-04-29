function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { line } from '../../_snowpack/pkg/bresenham-zingl.js';
import { clearContext } from '../helpers/clear-context.js';
export class RectangleTool {
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
    canvas,
    lineWidth,
    fillStyle,
    previewContext
  }, color) {
    if (canvas && previewContext) {
      this.drawRectangle(x, y, previewContext, previewContext, fillStyle, lineWidth, canvas, color);
    }
  }
  onPointerUp(x, y, {
    canvas,
    context,
    lineWidth,
    fillStyle,
    previewContext
  }, color) {
    if (canvas && context && previewContext) {
      this.drawRectangle(x, y, context, previewContext, fillStyle, lineWidth, canvas, color);
    }
  }
  drawRectangle(x, y, targetContext, previewContext, fillStyle, lineWidth, canvas, color) {
    clearContext(previewContext);
    const x1 = Math.min(this.startPosition.x, x);
    const x2 = Math.max(this.startPosition.x, x);
    const y1 = Math.min(this.startPosition.y, y);
    const y2 = Math.max(this.startPosition.y, y);
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);
    if (fillStyle.stroke && (width < lineWidth * 2 || height < lineWidth * 2)) {
      targetContext.fillStyle = color.stroke.value;
      targetContext.fillRect(x1, y1, width, height);
      return;
    }
    if (fillStyle.fill) {
      targetContext.fillStyle = color.fill.value;
      targetContext.fillRect(x1, y1, width, height);
    }
    if (fillStyle.stroke) {
      targetContext.fillStyle = color.stroke.value;
      this.getPointsForLine(x1, y1, x2, y2, lineWidth).forEach(({
        x,
        y
      }) => {
        targetContext.fillRect(x, y, 1, 1);
      });
    }
  }
  getPointsForLine(x1, y1, x2, y2, lineWidth) {
    const points = [];
    for (let i = 0; i < lineWidth; i++) {
      line(x1 + i, y1 + i, x2, y1 + i, (x, y) => points.push({
        x,
        y
      }));
      line(x1 + i, y1 + i, x1 + i, y2, (x, y) => points.push({
        x,
        y
      }));
      line(x2 - i, y2 - i, x2 - i, y1, (x, y) => points.push({
        x,
        y
      }));
      line(x2 - i, y2 - i, x1, y2 - i, (x, y) => points.push({
        x,
        y
      }));
    }
    return points;
  }
}