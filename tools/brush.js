import bresenhamLine from '../web_modules/bresenham-line.js';

export class BrushTool {
  onPointerHover({ canvas, previewContext, x, y, primaryColor, secondaryColor }) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    previewContext.fillStyle = event.button === 2 ? secondaryColor : primaryColor;
    previewContext.fillRect(x - 2, y - 2, 5, 5);
  }

  onPointerDown({ event, context, primaryColor, secondaryColor, x, y }) {
    context.fillStyle = event.button === 2 ? secondaryColor : primaryColor;
    context.fillRect(x - 2, y - 2, 5, 5);
    this.previous = { x, y };
  }

  onPointerMove({ x, y, context }) {
    for (let point of bresenhamLine(this.previous, { x, y })) {
      context.fillRect(point.x - 2, point.y - 2, 5, 5);
    }
    this.previous = { x, y };
  }
}
