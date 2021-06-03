import { updateContext } from '../../helpers/update-context';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class NormalSizeAction implements MenuAction {
  execute(drawingContext: DrawingContext): void {
    drawingContext.magnifierSize = 1;
    updateContext(drawingContext.element);
  }
}
