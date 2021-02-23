function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { line } from '../../_snowpack/pkg/bresenham-zingl.js';
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
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    line(x, y, this.startPosition.x, this.startPosition.y, (x, y) => {
      drawCircle(x, y, lineWidth, targetContext);
    });
  }

}