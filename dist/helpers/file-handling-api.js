import {loadFileAndAdjustCanvas} from "./load-file-and-adjust-canvas.js";
export function getLaunchImage(drawingContext) {
  if ("launchQueue" in window) {
    window.launchQueue.setConsumer(async (params) => {
      const [handle] = params.files;
      if (handle) {
        const file = await handle.getFile();
        drawingContext.document.title = file.name;
        drawingContext.document.handle = handle;
        await loadFileAndAdjustCanvas(file, drawingContext);
      }
    });
  }
}
