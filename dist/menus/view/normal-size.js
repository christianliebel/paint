import { updateContext } from '../../helpers/update-context.js';
export class NormalSizeAction {
  execute(drawingContext) {
    drawingContext.magnifierSize = 1;
    updateContext(drawingContext.element);
  }
}