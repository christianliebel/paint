export class SelectTool {
  onPointerDown({ x, y }) {
    this.startPosition = { x, y };
  }

  onPointerMove({ canvas, previewContext, x, y }) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    previewContext.strokeRect(this.startPosition.x + 0.5, this.startPosition.y + 0.5, x - this.startPosition.x, y - this.startPosition.y);
  }

  onPointerUp({ canvas, selection, previewContext, x, y }) {
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    selection.x = this.startPosition.x;
    selection.y = this.startPosition.y;
    selection.width = x - this.startPosition.x;
    selection.height = y - this.startPosition.y;
  }
}
