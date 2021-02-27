import type { FileSystemHandle } from 'browser-fs-access';
import type { DrawingContext } from '../models/drawing-context';
import { loadFileAndAdjustCanvas } from './load-file-and-adjust-canvas';

export function getLaunchImage(drawingContext: DrawingContext): void {
  if ('launchQueue' in window) {
    window.launchQueue.setConsumer(async (params) => {
      const [handle] = params.files;
      if (handle) {
        const file = await handle.getFile();
        drawingContext.document.title = file.name;
        drawingContext.document.handle = (handle as unknown) as FileSystemHandle;
        await loadFileAndAdjustCanvas(file, drawingContext);
      }
    });
  }
}
