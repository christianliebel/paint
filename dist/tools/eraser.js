function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { line } from '../../_snowpack/pkg/bresenham-zingl.js';
import { clearContext } from '../helpers/clear-context.js';
export class EraserTool {
  constructor() {
    _defineProperty(this, "previous", {
      x: 0,
      y: 0
    });
  }

  onPointerHover(x, y, {
    canvas,
    previewContext,
    eraserSize,
    colors
  }) {
    if (canvas && previewContext) {
      clearContext(previewContext);

      if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
        previewContext.fillStyle = 'black';
        previewContext.fillRect(...this.getFillRectArgs(x, y, eraserSize));
        previewContext.fillStyle = colors.secondary;
        previewContext.fillRect(...this.getFillRectArgs(x, y, eraserSize - 2));
      }
    }
  }

  onPointerDown(x, y, {
    context,
    eraserSize,
    colors: {
      secondary
    }
  }) {
    if (context) {
      context.fillStyle = secondary;
      this.previous = {
        x,
        y
      };
      context.fillRect(...this.getFillRectArgs(x, y, eraserSize));
    }
  }

  onPointerMove(x, y, {
    eraserSize,
    context
  }) {
    // TODO: Color eraser
    line(this.previous.x, this.previous.y, x, y, (x, y) => {
      context?.fillRect(...this.getFillRectArgs(x, y, eraserSize));
    });
    this.previous = {
      x,
      y
    };
  }

  getFillRectArgs(x, y, eraserSize) {
    return [x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize];
  }

}