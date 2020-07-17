import { updateContext } from '../helpers/update-context.js';

export class SelectTool {
  onPointerDown(x, y, { previewContext }) {
    this.startPosition = { x, y };

    previewContext.setLineDash([4]);
  }

  onPointerMove(x, y, { element, canvas, previewContext }) {
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

  onPointerUp(x, y, drawingContext) {
    const { canvas, element, previewContext } = drawingContext;
    previewContext.setLineDash([]);
    previewContext.clearRect(0, 0, canvas.width, canvas.height);

    element.dispatchEvent(new CustomEvent('area', { bubbles: true, composed: true }));

    drawingContext.selection = {
      x: this.startPosition.x,
      y: this.startPosition.y,
      width: x - this.startPosition.x,
      height: y - this.startPosition.y,
    };
    updateContext(element);
  }
}
