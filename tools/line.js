import bresenhamLine from '../web_modules/bresenham-line.js';

export class LineTool {
  onPointerDown(x, y, { previewContext, context }, color) {
    this.startPosition = { x, y };
    previewContext.fillStyle = context.fillStyle = color.stroke.value;
  }

  onPointerMove(x, y, { previewContext, canvas, lineWidth }) {
    this.drawLine(x, y, previewContext, previewContext, canvas, lineWidth);
  }

  onPointerUp(x, y, { previewContext, context, canvas, lineWidth }) {
    this.drawLine(x, y, context, previewContext, canvas, lineWidth);
  }

  drawLine(x, y, targetContext, previewContext, canvas, lineWidth) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    for (let point of bresenhamLine({ x, y }, this.startPosition)) {
      if (lineWidth === 1) {
        targetContext.fillRect(point.x, point.y, 1, 1);
      }

      if (lineWidth === 2) {
        targetContext.fillRect(point.x - 1, point.y - 1, 2, 2);
      }

      if (lineWidth === 3) {
        targetContext.fillRect(point.x - 1, point.y, 3, 1);
        targetContext.fillRect(point.x, point.y - 1, 1, 3);
      }

      if (lineWidth === 4) {
        targetContext.fillRect(point.x - 1, point.y - 2, 2, 4);
        targetContext.fillRect(point.x - 2, point.y - 1, 4, 2);
      }

      if (lineWidth === 5) {
        targetContext.fillRect(point.x - 1, point.y - 2, 3, 5);
        targetContext.fillRect(point.x - 2, point.y - 1, 5, 3);
      }
    }
  }
}
