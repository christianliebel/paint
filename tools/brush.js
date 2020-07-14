import bresenhamLine from '../web_modules/bresenham-line.js';

export class BrushTool {
  onPointerHover(x, y, { canvas, previewContext }, color) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    previewContext.fillStyle = color.value;
    previewContext.fillRect(x - 2, y - 2, 5, 5);
  }

  onPointerDown(x, y, { context }, color) {
    context.fillStyle = color.value;
    context.fillRect(x - 2, y - 2, 5, 5);
    this.previous = { x, y };
  }

  onPointerMove(x, y, { context }) {
    for (let point of bresenhamLine(this.previous, { x, y })) {
      context.fillRect(point.x - 2, point.y - 2, 5, 5);
    }
    this.previous = { x, y };
  }
}
