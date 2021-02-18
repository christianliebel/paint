import { updateContext } from '../helpers/update-context';

export class SelectAllAction {
  execute(drawingContext) {
    const { width, height } = drawingContext.canvas;
    drawingContext.selection = { x: 0, y: 0, width, height };
    updateContext(drawingContext.element);
  }
}
