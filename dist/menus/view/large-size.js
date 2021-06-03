import { updateContext } from '../../helpers/update-context.js';
export class LargeSizeAction {
  execute(drawingContext) {
    drawingContext.magnifierSize = 4;
    updateContext(drawingContext.element);
  }

}