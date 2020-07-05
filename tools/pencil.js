import bresenhamLine from '../web_modules/bresenham-line.js';

export class PencilTool {
  onMouseDown({ event, context, x, y, secondaryColor, primaryColor }) {
    context.fillStyle = event.button === 2 ? secondaryColor : primaryColor;
    context.fillRect(x, y, 1, 1);
    this.previous = { x, y };
  }

  onMouseMove({ x, y, context }) {
    for (let point of bresenhamLine(this.previous, { x, y })) {
      context.fillRect(point.x, point.y, 1, 1);
    }
    this.previous = { x, y };
  }
}
