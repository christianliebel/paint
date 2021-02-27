import { fileOpen } from 'browser-fs-access';
import { loadFileAndAdjustCanvas } from '../helpers/load-file-and-adjust-canvas';
import { updateContext } from '../helpers/update-context';
import type { Action } from '../models/action';
import type { DrawingContext } from '../models/drawing-context';

export class OpenAction implements Action {
  async execute(drawingContext: DrawingContext): Promise<void> {
    const file = await fileOpen({
      extensions: ['.png'],
      description: 'PNG Files',
    });
    drawingContext.document.handle = file.handle;
    drawingContext.document.title = file.name;
    updateContext(drawingContext.element);

    await loadFileAndAdjustCanvas(file, drawingContext);
  }
}
