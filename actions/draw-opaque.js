import { updateContext } from '../helpers/update-context';

export class DrawOpaque {
  isChecked({ drawOpaque }) {
    return drawOpaque;
  }

  execute(drawingContext) {
    drawingContext.drawOpaque = !drawingContext.drawOpaque;
    updateContext(drawingContext.element);
  }
}
