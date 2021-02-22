import { updateContext } from '../helpers/update-context.js';
export class PickTool {
  onPointerDown(x, y, drawingContext) {
    this.onPointerMove(x, y, drawingContext);
  }

  onPointerMove(x, y, drawingContext) {
    if (drawingContext.context) {
      drawingContext.previewColor = this.pickColor(x, y, drawingContext.context);
      updateContext(drawingContext.element);
    }
  }

  onPointerUp(x, y, drawingContext, color) {
    if (drawingContext.context) {
      drawingContext.previewColor = null;
      drawingContext.colors[color.stroke.key] = this.pickColor(x, y, drawingContext.context);
      updateContext(drawingContext.element);
    }
  }

  pickColor(x, y, context) {
    const [r, g, b] = context.getImageData(x, y, 1, 1).data;
    return `rgb(${r} ${g} ${b})`;
  }

}