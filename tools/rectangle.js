import bresenhamLine from '../web_modules/bresenham-line.js';

export class RectangleTool {
  onPointerDown(x, y) {
    this.startPosition = { x, y };
  }

  onPointerMove(x, y, { canvas, lineWidth, fillStyle, previewContext }, color) {
    this.drawRectangle(
      x,
      y,
      previewContext,
      previewContext,
      fillStyle,
      lineWidth,
      canvas,
      color,
    );
  }

  onPointerUp(
    x,
    y,
    { canvas, context, lineWidth, fillStyle, previewContext },
    color,
  ) {
    this.drawRectangle(
      x,
      y,
      context,
      previewContext,
      fillStyle,
      lineWidth,
      canvas,
      color,
    );
  }

  drawRectangle(
    x,
    y,
    targetContext,
    previewContext,
    fillStyle,
    lineWidth,
    canvas,
    color,
  ) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);

    let x1 = Math.min(this.startPosition.x, x);
    let x2 = Math.max(this.startPosition.x, x);
    let y1 = Math.min(this.startPosition.y, y);
    let y2 = Math.max(this.startPosition.y, y);
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);

    if (fillStyle.stroke && (width < lineWidth * 2 || height < lineWidth * 2)) {
      targetContext.fillStyle = color.stroke.value;
      targetContext.fillRect(x1, y1, width, height);
      return;
    }

    if (fillStyle.fill) {
      targetContext.fillStyle = color.fill.value;
      targetContext.fillRect(x1, y1, width, height);
    }

    if (fillStyle.stroke) {
      targetContext.fillStyle = color.stroke.value;
      this.getPointsForLine(x1, y1, x2, y2, lineWidth).forEach(({ x, y }) => {
        targetContext.fillRect(x, y, 1, 1);
      });
    }
  }

  getPointsForLine(x1, y1, x2, y2, lineWidth) {
    const points = [];
    for (let i = 0; i < lineWidth; i++) {
      points.push(
        ...bresenhamLine({ x: x1 + i, y: y1 + i }, { x: x2, y: y1 + i }),
        ...bresenhamLine({ x: x1 + i, y: y1 + i }, { x: x1 + i, y: y2 }),
        ...bresenhamLine({ x: x2 - i, y: y2 - i }, { x: x2 - i, y: y1 }),
        ...bresenhamLine({ x: x2 - i, y: y2 - i }, { x: x1, y: y2 - i }),
      );
    }
    return points;
  }
}
