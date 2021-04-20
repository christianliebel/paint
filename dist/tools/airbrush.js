import {fillEllipse} from "../helpers/fill-ellipse.js";
export class Airbrush {
  onPointerDown(x, y, drawingContext, color) {
    if (drawingContext.context) {
      drawingContext.context.fillStyle = color.stroke.value;
    }
    this.currentPosition = {x, y};
    this.spray(drawingContext);
    this.intervalHandle = setInterval(() => this.spray(drawingContext), 30);
  }
  spray({airbrushSize, context}) {
    if (this.currentPosition && context) {
      const radius = Math.floor(airbrushSize / 2);
      const {x, y} = this.currentPosition;
      const points = [];
      fillEllipse(x, y, radius, radius, (point) => points.push(point));
      for (let i = 0; i < 10; i++) {
        const index = Math.round(Math.random() * (points.length - 1));
        const {x: x2, y: y2} = points[index];
        context.fillRect(x2, y2, 1, 1);
      }
    }
  }
  onPointerMove(x, y, drawingContext) {
    if (typeof this.intervalHandle !== "undefined") {
      this.spray(drawingContext);
      this.currentPosition = {x, y};
    }
  }
  onPointerUp() {
    if (typeof this.intervalHandle !== "undefined") {
      clearInterval(this.intervalHandle);
      this.intervalHandle = this.currentPosition = void 0;
    }
  }
}
