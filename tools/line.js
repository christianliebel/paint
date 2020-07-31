import { line } from '../web_modules/bresenham-zingl.js';

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
    line(x, y, this.startPosition.x, this.startPosition.y, (x, y) => {
      if (lineWidth === 1) {
        targetContext.fillRect(x, y, 1, 1);
      }

      if (lineWidth === 2) {
        targetContext.fillRect(x - 1, y - 1, 2, 2);
      }

      if (lineWidth === 3) {
        targetContext.fillRect(x - 1, y, 3, 1);
        targetContext.fillRect(x, y - 1, 1, 3);
      }

      if (lineWidth === 4) {
        targetContext.fillRect(x - 1, y - 2, 2, 4);
        targetContext.fillRect(x - 2, y - 1, 4, 2);
      }

      if (lineWidth === 5) {
        targetContext.fillRect(x - 1, y - 2, 3, 5);
        targetContext.fillRect(x - 2, y - 1, 5, 3);
      }
    });
  }
}
