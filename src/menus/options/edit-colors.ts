import { DrawingContext } from '../../models/drawing-context';
import { MenuAction } from '../../models/menu-action';

export class EditColorsAction implements MenuAction {
  execute(drawingContext: DrawingContext): void {
    drawingContext.element?.dispatchEvent(new CustomEvent('edit-color'));
  }
}
