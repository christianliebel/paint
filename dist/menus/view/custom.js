import { showDialog } from '../../helpers/dialog.js';
import { updateContext } from '../../helpers/update-context.js';
export class CustomAction {
  async execute(drawingContext) {
    const result = await showDialog('paint-dialog-custom-zoom', {
      currentMagnifierSize: drawingContext.magnifierSize
    });
    if (result?.magnifierSize) {
      drawingContext.magnifierSize = result.magnifierSize;
      updateContext(drawingContext.element);
    }
  }
}