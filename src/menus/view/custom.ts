import { showDialog } from '../../helpers/dialog';
import { updateContext } from '../../helpers/update-context';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class CustomAction implements MenuAction {
  async execute(drawingContext: DrawingContext): Promise<void> {
    const result = await showDialog('paint-dialog-custom-zoom', {
      currentMagnifierSize: drawingContext.magnifierSize,
    });
    if (result?.magnifierSize) {
      drawingContext.magnifierSize = result.magnifierSize;
      updateContext(drawingContext.element);
    }
  }
}
