export class RectangleTool {
  onPointerDown({ event, previewContext, context, x, y, primaryColor, secondaryColor }) {
    this.startPosition = { x, y };

    context.strokeStyle = previewContext.strokeStyle = event.button === 2 ? secondaryColor : primaryColor;
  }

  onPointerMove({ canvas, previewContext, x, y }) {
    // TODO: Width depends on selected line width
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    previewContext.strokeRect(this.startPosition.x + 0.5, this.startPosition.y + 0.5, x - this.startPosition.x, y - this.startPosition.y);
  }

  onPointerUp({ canvas, context, previewContext, x, y }) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(this.startPosition.x + 0.5, this.startPosition.y + 0.5, x - this.startPosition.x, y - this.startPosition.y);
  }
}
