function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { ellipseRect } from '../../_snowpack/pkg/bresenham-zingl.js';
export class EllipseTool {
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
    if (context && previewContext) {
      this.startPosition = {
        x,
        y
      };
      context.fillStyle = previewContext.fillStyle = color.stroke.value;
    }
  }

  onPointerMove(x, y, {
    canvas,
    previewContext
  }) {
    if (canvas && previewContext) {
      this.drawEllipse(x, y, canvas, previewContext, previewContext);
    }
  }

  onPointerUp(x, y, {
    canvas,
    context,
    previewContext
  }) {
    if (canvas && context && previewContext) {
      this.drawEllipse(x, y, canvas, context, previewContext);
    }
  }

  drawEllipse(x, y, canvas, targetContext, previewContext) {
    // TODO: Fill styles, no anti-alias
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    ellipseRect(this.startPosition.x, this.startPosition.y, x, y, (x, y) => {
      targetContext.fillRect(x, y, 1, 1);
    });
  }

}