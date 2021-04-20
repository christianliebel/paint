import {clearContext} from "../helpers/clear-context.js";
import {drawCircle} from "../helpers/draw-circle.js";
import {line} from "../../_snowpack/pkg/bresenham-zingl.js";
export class BrushTool {
  constructor() {
    this.previous = {x: 0, y: 0};
  }
  onPointerHover(x, y, {canvas, brush, previewContext}, color) {
    if (canvas && previewContext) {
      clearContext(previewContext);
      previewContext.fillStyle = color.stroke.value;
      this.drawBrush(x, y, brush, previewContext);
    }
  }
  onPointerDown(x, y, {brush, context}, color) {
    if (context) {
      context.fillStyle = color.stroke.value;
      this.drawBrush(x, y, brush, context);
      this.previous = {x, y};
    }
  }
  onPointerMove(x, y, {brush, context}) {
    if (context) {
      let previousBresenham = {...this.previous};
      line(this.previous.x, this.previous.y, x, y, (x2, y2) => {
        const diff = {x: x2 - previousBresenham.x, y: y2 - previousBresenham.y};
        this.drawBrush(x2, y2, brush, context, diff);
        previousBresenham = {x: x2, y: y2};
      });
      this.previous = {x, y};
    }
  }
  drawBrush(x, y, {type, size}, context, posDiff) {
    if (type === "circle") {
      return drawCircle(x, y, size, context);
    }
    const diff = Math.floor(size / 2);
    if (type === "square") {
      return this.drawSquare(x, y, diff, size, context);
    }
    const correction = size % 2 === 0 ? -1 : 0;
    const yCorr = posDiff ? y - Math.min(0, posDiff.y) : 0;
    if (type === "forward-diagonal") {
      if (posDiff && posDiff.y !== 0) {
        const xCorr = posDiff.y === -1 && posDiff.x === -1 ? x : x - 1;
        this.drawForwardLine(xCorr, yCorr, diff, correction, size, context);
      }
      this.drawForwardLine(x, y, diff, correction, size, context);
      return;
    }
    if (type === "backward-diagonal") {
      if (posDiff && posDiff.y !== 0) {
        const xCorr = posDiff.y === -1 && posDiff.x === 1 ? x : x + 1;
        this.drawBackwardLine(xCorr, yCorr, diff, correction, size, context);
      }
      this.drawBackwardLine(x, y, diff, correction, size, context);
      return;
    }
    throw new Error("Unknown brush type.");
  }
  drawSquare(x, y, diff, size, context) {
    context.fillRect(x - diff, y - diff, size, size);
  }
  drawForwardLine(x, y, diff, correction, size, context) {
    const start = {x: x - diff, y: y + diff + correction};
    const end = {x: x + diff + correction, y: y - diff};
    line(start.x, start.y, end.x, end.y, (x2, y2) => {
      context.fillRect(x2, y2, 1, 1);
    });
  }
  drawBackwardLine(x, y, diff, correction, size, context) {
    const start = {x: x - diff, y: y - diff};
    const end = {x: x + diff + correction, y: y + diff + correction};
    line(start.x, start.y, end.x, end.y, (x2, y2) => {
      context.fillRect(x2, y2, 1, 1);
    });
  }
}
