import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class ViewBitmapAction implements MenuAction {
  async execute({ canvas }: DrawingContext): Promise<void> {
    if (canvas) {
      await canvas.requestFullscreen();
    }
  }
}
