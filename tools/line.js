import bresenhamLine from '../web_modules/bresenham-line.js';

export class LineTool {
  onPointerDown({ event, x, y, previewContext, context, primaryColor }) {
    this.startPosition = {x, y};
    const color = event.button === 2 ? secondaryColor : primaryColor;
    previewContext.fillStyle = context.fillStyle = color;
  }

  onPointerMove({ x, y, previewContext, canvas, lineWidth }) {
    this.drawLine(x, y, previewContext, previewContext, canvas, lineWidth);
  }

  onPointerUp({ x, y, previewContext, context, canvas, lineWidth }) {
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
