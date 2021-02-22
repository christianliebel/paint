import type { DrawingContext } from '../models/drawing-context';
import { updateContext } from '../helpers/update-context';
import type { Action } from '../models/action';

export class DrawOpaque implements Action {
  isChecked({ drawOpaque }: DrawingContext): boolean {
    return drawOpaque;
  }

  execute(drawingContext: DrawingContext): void {
    drawingContext.drawOpaque = !drawingContext.drawOpaque;
    updateContext(drawingContext.element);
  }
}
