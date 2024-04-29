function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { line } from '../../_snowpack/pkg/bresenham-zingl.js';
export class PencilTool {
  constructor() {
    _defineProperty(this, "previous", {
      x: 0,
      y: 0
    });
  }
  onPointerDown(x, y, {
    context
  }, color) {
    if (context) {
      context.fillStyle = color.stroke.value;
      context.fillRect(x, y, 1, 1);
      this.previous = {
        x,
        y
      };
    }
  }
  onPointerMove(x, y, {
    context
  }) {
    line(this.previous.x, this.previous.y, x, y, (x, y) => {
      context?.fillRect(x, y, 1, 1);
    });
    this.previous = {
      x,
      y
    };
  }
}