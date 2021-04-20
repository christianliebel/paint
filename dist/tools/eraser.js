import {line} from "../../_snowpack/pkg/bresenham-zingl.js";
import {clearContext} from "../helpers/clear-context.js";
export class EraserTool {
  constructor() {
    this.previous = {x: 0, y: 0};
  }
  onPointerHover(x, y, {canvas, previewContext, eraserSize, colors}) {
    if (canvas && previewContext) {
      clearContext(previewContext);
      if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
        previewContext.fillStyle = "black";
        previewContext.fillRect(...this.getFillRectArgs(x, y, eraserSize));
        previewContext.fillStyle = colors.secondary;
        previewContext.fillRect(...this.getFillRectArgs(x, y, eraserSize - 2));
      }
    }
  }
  onPointerDown(x, y, {context, eraserSize, colors: {secondary}}) {
    if (context) {
      context.fillStyle = secondary;
      this.previous = {x, y};
      context.fillRect(...this.getFillRectArgs(x, y, eraserSize));
    }
  }
  onPointerMove(x, y, {eraserSize, context}) {
    line(this.previous.x, this.previous.y, x, y, (x2, y2) => {
      context?.fillRect(...this.getFillRectArgs(x2, y2, eraserSize));
    });
    this.previous = {x, y};
  }
  getFillRectArgs(x, y, eraserSize) {
    return [x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize];
  }
}
