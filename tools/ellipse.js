import { ellipseRect } from '../web_modules/bresenham-zingl.js';

export class EllipseTool {
  onPointerDown(x, y, { previewContext, context }, color) {
    this.startPosition = { x, y };
    context.fillStyle = previewContext.fillStyle = color.stroke.value;
  }

  onPointerMove(x, y, { canvas, previewContext }) {
    this.drawEllipse(x, y, canvas, previewContext, previewContext);
  }

  onPointerUp(x, y, { canvas, context, previewContext }) {
    this.drawEllipse(x, y, canvas, context, previewContext);
  }

  drawEllipse(x, y, canvas, targetContext, previewContext) {
    // TODO: Fill style
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    ellipseRect(this.startPosition.x, this.startPosition.y, x, y, (x, y) => {
      targetContext.fillRect(x, y, 1, 1);
    });
  }
}
