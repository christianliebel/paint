import bresenhamLine from '../web_modules/bresenham-line.js';

export class EraserTool {
  onPointerHover(x, y, { canvas, previewContext, eraserSize, colors }) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);

    if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
      previewContext.fillStyle = 'black';
      previewContext.fillRect(...this.getFillRectArgs({ x, y }, eraserSize));
      previewContext.fillStyle = colors.secondary;
      previewContext.fillRect(...this.getFillRectArgs({ x, y }, eraserSize - 2));
    }
  }

  onPointerDown(x, y, { context, colors: { secondary } }) {
    context.fillStyle = secondary;
    this.previous = { x, y };
  }

  onPointerMove(x, y, { eraserSize, context }) {
    // TODO: Color eraser
    for (let point of bresenhamLine(this.previous, { x, y })) {
      context.fillRect(...this.getFillRectArgs(point, eraserSize));
    }
    this.previous = { x, y };
  }

  getFillRectArgs({ x, y }, eraserSize) {
    return [x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize];
  }
}
