export class RectangleTool {
  onPointerDown(x, y, { previewContext, context }, color) {
    this.startPosition = { x, y };
    context.strokeStyle = previewContext.strokeStyle = color.key;
  }

  onPointerMove(x, y, { canvas, previewContext }) {
    // TODO: Width depends on selected line width, not pixel-perfect yet
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    previewContext.strokeRect(
      this.startPosition.x + 0.5,
      this.startPosition.y + 0.5,
      x - this.startPosition.x,
      y - this.startPosition.y,
    );
  }

  onPointerUp(x, y, { canvas, context, previewContext }) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(
      this.startPosition.x + 0.5,
      this.startPosition.y + 0.5,
      x - this.startPosition.x,
      y - this.startPosition.y,
    );
  }
}
