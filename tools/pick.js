import { updateContext } from '../helpers/update-context.js';

export class PickTool {
  onPointerDown(...args) {
    this.onPointerMove(...args);
  }

  onPointerMove(x, y, drawingContext) {
    drawingContext.previewColor = this.pickColor(x, y, drawingContext.context);
    updateContext(drawingContext.element);
  }

  onPointerUp(x, y, drawingContext, color) {
    drawingContext.previewColor = null;
    console.log(color.key);
    drawingContext.colors[color.key] = this.pickColor(
      x,
      y,
      drawingContext.context,
    );
    updateContext(drawingContext.element);
  }

  pickColor(x, y, context) {
    const [r, g, b] = context.getImageData(x, y, 1, 1).data;
    return `rgb(${r} ${g} ${b})`;
  }
}
