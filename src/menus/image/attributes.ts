import { clearCanvas } from '../../helpers/clear-canvas';
import { showDialog } from '../../helpers/dialog';
import { showMessageBox } from '../../helpers/message-box';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class AttributesAction implements MenuAction {
  async execute(drawingContext: DrawingContext): Promise<void> {
    const { previewCanvas, context } = drawingContext;
    if (!previewCanvas || !context) {
      return;
    }

    const { canvas } = context;
    const result = await showDialog('paint-dialog-attributes', {
      width: canvas.width.toString(),
      height: canvas.height.toString(),
      unit: 'pels',
      color: 'colors',
    });

    if (!result) {
      return;
    }

    const newWidth = parseInt(result.width, 10);
    const newHeight = parseInt(result.height, 10);
    if (!this.isValidValue(newWidth) || !this.isValidValue(newHeight)) {
      await showMessageBox(
        'Bitmaps must be greater than one pixel on a side.',
        'warning',
        'Paint',
      );
      return;
    }

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    canvas.width = previewCanvas.width = newWidth;
    canvas.height = previewCanvas.height = newHeight;

    clearCanvas(drawingContext, false);
    context.putImageData(imageData, 0, 0);

    drawingContext.history?.commit();
  }

  private isValidValue(value: number) {
    return isFinite(value) && value > 0;
  }
}
