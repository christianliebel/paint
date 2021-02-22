function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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