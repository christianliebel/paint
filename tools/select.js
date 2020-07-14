export class SelectTool {
  onPointerDown({ previewContext, x, y }) {
    this.startPosition = { x, y };

    previewContext.setLineDash([4]);
  }

  onPointerMove({ element, canvas, previewContext, x, y }) {
    // TODO: Scope to canvas
    previewContext.clearRect(0, 0, canvas.width, canvas.height);
    previewContext.strokeRect(this.startPosition.x + 0.5, this.startPosition.y + 0.5, x - this.startPosition.x, y - this.startPosition.y);

    element.dispatchEvent(new CustomEvent('area', {
      detail: {
        width: Math.abs(x - this.startPosition.x),
        height: Math.abs(y - this.startPosition.y),
      },
      bubbles: true,
      composed: true,
    }));
  }

  onPointerUp({ canvas, element, selection, previewContext, x, y }) {
    previewContext.setLineDash([]);
    previewContext.clearRect(0, 0, canvas.width, canvas.height);

    element.dispatchEvent(new CustomEvent('area', { bubbles: true, composed: true }));

    selection.x = this.startPosition.x;
    selection.y = this.startPosition.y;
    selection.width = x - this.startPosition.x;
    selection.height = y - this.startPosition.y;
  }
}
