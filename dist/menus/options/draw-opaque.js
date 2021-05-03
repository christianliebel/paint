import { updateContext } from '../../helpers/update-context.js';
export class DrawOpaque {
  isChecked({
    drawOpaque
  }) {
    return drawOpaque;
  }

  execute(drawingContext) {
    drawingContext.drawOpaque = !drawingContext.drawOpaque;
    updateContext(drawingContext.element);
  }

}