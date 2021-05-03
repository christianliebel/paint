import type { DrawingContext } from '../../models/drawing-context';
import { updateContext } from '../../helpers/update-context';
import type { MenuAction } from '../../models/menu-action';

export class DrawOpaque implements MenuAction {
  isChecked({ drawOpaque }: DrawingContext): boolean {
    return drawOpaque;
  }

  execute(drawingContext: DrawingContext): void {
    drawingContext.drawOpaque = !drawingContext.drawOpaque;
    updateContext(drawingContext.element);
  }
}
