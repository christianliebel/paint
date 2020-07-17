import bresenhamLine from '../web_modules/bresenham-line.js';

export class LineTool {
  onPointerDown(x, y, { event, previewContext, context }, color) {
    this.startPosition = {x, y};
    previewContext.fillStyle = context.fillStyle = color.value;
  }

  onPointerMove(x, y, { previewContext, canvas, lineWidth }) {
    this.drawLine(x, y, previewContext, previewContext, canvas, lineWidth);
  }

  onPointerUp(x, y, { previewContext, context, canvas, lineWidth }) {
    this.drawLine(x, y, context, previewContext, canvas, lineWidth);
  }

  drawLine(x, y, targetContext, previewContext, canvas, lineWidth) {
    // TODO: Midpoint, circle
    // TODO: Tool selection
    // TODO: Tool pixel perfectness
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    for(let point of bresenhamLine({ x,y }, this.startPosition)) {
      targetContext.fillRect(point.x, point.y, 1, 1);
    }
  }
}
