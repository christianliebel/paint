import { clearCanvas } from '../../helpers/clear-canvas.js';
export class ClearImageAction {
  canExecute({
    selection
  }) {
    return !selection;
  }

  execute(drawingContext) {
    clearCanvas(drawingContext);
  }

}