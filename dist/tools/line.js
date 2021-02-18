import { drawCircle } from '../helpers/draw-circle.js';
import { line } from '../../_snowpack/pkg/bresenham-zingl.js';
export class LineTool {
  onPointerDown(x, y, {
    previewContext,
    context
  }, color) {
    this.startPosition = {
      x,
      y
    };
    previewContext.fillStyle = context.fillStyle = color.stroke.value;
  }

  onPointerMove(x, y, {
    previewContext,
    canvas,
    lineWidth
  }) {
    this.drawLine(x, y, previewContext, previewContext, canvas, lineWidth);
  }

  onPointerUp(x, y, {
    previewContext,
    context,
    canvas,
    lineWidth
  }) {
    this.drawLine(x, y, context, previewContext, canvas, lineWidth);
  }

  drawLine(x, y, targetContext, previewContext, canvas, lineWidth) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    line(x, y, this.startPosition.x, this.startPosition.y, (x, y) => {
      drawCircle(x, y, lineWidth, targetContext);
    });
  }

}