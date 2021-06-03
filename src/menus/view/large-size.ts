import { updateContext } from '../../helpers/update-context';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class LargeSizeAction implements MenuAction {
  execute(drawingContext: DrawingContext): void {
    drawingContext.magnifierSize = 4;
    updateContext(drawingContext.element);
  }
}
