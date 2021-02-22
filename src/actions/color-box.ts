import type { DrawingContext } from '../models/drawing-context';
import { updateContext } from '../helpers/update-context';
import type { Action } from '../models/action';

export class ColorBoxAction implements Action {
  isChecked({ view: { colorBox } }: DrawingContext): boolean {
    return colorBox;
  }

  execute(drawingContext: DrawingContext): void {
    drawingContext.view.colorBox = !drawingContext.view.colorBox;
    updateContext(drawingContext.element);
  }
}
