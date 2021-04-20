import {line} from "../../_snowpack/pkg/bresenham-zingl.js";
export class PencilTool {
  constructor() {
    this.previous = {x: 0, y: 0};
  }
  onPointerDown(x, y, {context}, color) {
    if (context) {
      context.fillStyle = color.stroke.value;
      context.fillRect(x, y, 1, 1);
      this.previous = {x, y};
    }
  }
  onPointerMove(x, y, {context}) {
    line(this.previous.x, this.previous.y, x, y, (x2, y2) => {
      context?.fillRect(x2, y2, 1, 1);
    });
    this.previous = {x, y};
  }
}
