function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ellipseRect } from '../../_snowpack/pkg/bresenham-zingl.js';
import { clearContext } from '../helpers/clear-context.js';
export class EllipseTool {
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
    fillStyle,
    canvas,
    previewContext
  }, color) {
    if (canvas && previewContext) {
      this.drawEllipse(x, y, fillStyle, color, canvas, previewContext, previewContext);
    }
  }
  onPointerUp(x, y, {
    fillStyle,
    canvas,
    context,
    previewContext
  }, color) {
    if (canvas && context && previewContext) {
      this.drawEllipse(x, y, fillStyle, color, canvas, context, previewContext);
    }
  }
  drawEllipse(x, y, fillStyle, color, canvas, targetContext, previewContext) {
    clearContext(previewContext);
    const ellipsePixels = [];
    ellipseRect(this.startPosition.x, this.startPosition.y, x, y, (x, y) => {
      ellipsePixels.push({
        x,
        y
      });
    });
    if (fillStyle.fill) {
      targetContext.fillStyle = color.fill.value;
      ellipsePixels.sort((a, b) => a.y - b.y || a.x - b.x);
      const fillPixels = this.getFillPixels(ellipsePixels);
      Array.from(fillPixels).forEach(pixel => {
        this.drawPixel(targetContext, pixel);
      });
    }
    if (fillStyle.stroke) {
      targetContext.fillStyle = color.stroke.value;
    }
    ellipsePixels.forEach(pixel => {
      this.drawPixel(targetContext, pixel);
    });
  }
  drawPixel(context, {
    x,
    y
  }) {
    context.fillRect(Math.floor(x), Math.floor(y), 1, 1);
  }
  *getFillPixels(pixels) {
    let previousPixel;
    for (const pixel of pixels) {
      if (previousPixel?.y === pixel.y && pixel.x - previousPixel.x > 1) {
        const minX = Math.min(previousPixel.x, pixel.x);
        const maxX = Math.max(previousPixel.x, pixel.x);
        for (let i = minX; i <= maxX; i++) {
          yield {
            x: i,
            y: pixel.y
          };
        }
      }
      previousPixel = pixel;
    }
  }
}