import { line } from '../web_modules/bresenham-zingl.js';

export class BrushTool {
  onPointerHover(x, y, { canvas, previewContext }, color) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    previewContext.fillStyle = color.stroke.value;
    previewContext.fillRect(x - 2, y - 2, 5, 5);
  }

  onPointerDown(x, y, { context }, color) {
    context.fillStyle = color.stroke.value;
    context.fillRect(x - 2, y - 2, 5, 5);
    this.previous = { x, y };
  }

  onPointerMove(x, y, { context }) {
    line(this.previous.x, this.previous.y, x, y, (x, y) => {
      context.fillRect(x - 2, y - 2, 5, 5);
    });
    this.previous = { x, y };
  }
}
