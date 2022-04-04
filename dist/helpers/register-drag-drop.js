import { loadFileAndAdjustCanvas } from './load-file-and-adjust-canvas.js';
import { updateDocumentContext } from './update-document-context.js'; // Drag & drop support for File System Access API

export function registerDragDrop(element) {
  element.addEventListener('dragover', event => {
    // TODO: Determine if Paint accepts the dragged content
    event.preventDefault();
  });
  element.addEventListener('drop', async event => {
    event.preventDefault();
    const {
      drawingContext
    } = element;
    const files = [...(event.dataTransfer?.items ?? [])].filter(({
      kind
    }) => kind === 'file');

    for (const file of files) {
      const handle = await file.getAsFileSystemHandle();

      if (!handle || !isFileHandle(handle)) {
        continue;
      }

      const blob = await handle.getFile();
      await loadFileAndAdjustCanvas(blob, drawingContext);
      updateDocumentContext(handle, handle.name, drawingContext);
      return;
    }
  });
}

function isFileHandle(handle) {
  return handle.kind === 'file';
}