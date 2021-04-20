import {ellipseRect} from "../../_snowpack/pkg/bresenham-zingl.js";
import {clearContext} from "../helpers/clear-context.js";
export class EllipseTool {
  constructor() {
    this.startPosition = {x: 0, y: 0};
  }
  onPointerDown(x, y, {previewContext, context}, color) {
    if (context && previewContext) {
      this.startPosition = {x, y};
      context.fillStyle = previewContext.fillStyle = color.stroke.value;
    }
  }
  onPointerMove(x, y, {canvas, previewContext}) {
    if (canvas && previewContext) {
      this.drawEllipse(x, y, canvas, previewContext, previewContext);
    }
  }
  onPointerUp(x, y, {canvas, context, previewContext}) {
    if (canvas && context && previewContext) {
      this.drawEllipse(x, y, canvas, context, previewContext);
    }
  }
  drawEllipse(x, y, canvas, targetContext, previewContext) {
    clearContext(previewContext);
    ellipseRect(this.startPosition.x, this.startPosition.y, x, y, (x2, y2) => {
      targetContext.fillRect(x2, y2, 1, 1);
    });
  }
}
