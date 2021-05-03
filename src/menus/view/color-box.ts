import type { DrawingContext } from '../../models/drawing-context';
import { updateContext } from '../../helpers/update-context';
import type { MenuAction } from '../../models/menu-action';

export class ColorBoxAction implements MenuAction {
  isChecked({ view: { colorBox } }: DrawingContext): boolean {
    return colorBox;
  }

  execute(drawingContext: DrawingContext): void {
    drawingContext.view.colorBox = !drawingContext.view.colorBox;
    updateContext(drawingContext.element);
  }
}
