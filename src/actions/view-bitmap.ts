import type { DrawingContext } from '../models/drawing-context';
import type { Action } from '../models/action';

export class ViewBitmapAction implements Action {
  async execute({ canvas }: DrawingContext): Promise<void> {
    if (canvas) {
      await canvas.requestFullscreen();
    }
  }
}
