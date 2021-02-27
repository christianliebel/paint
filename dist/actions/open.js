import { fileOpen } from '../../_snowpack/pkg/browser-fs-access.js';
import { loadFileAndAdjustCanvas } from '../helpers/load-file-and-adjust-canvas.js';
import { updateContext } from '../helpers/update-context.js';
export class OpenAction {
  async execute(drawingContext) {
    const file = await fileOpen({
      extensions: ['.png'],
      description: 'PNG Files'
    });
    drawingContext.document.handle = file.handle;
    drawingContext.document.title = file.name;
    updateContext(drawingContext.element);
    await loadFileAndAdjustCanvas(file, drawingContext);
  }

}