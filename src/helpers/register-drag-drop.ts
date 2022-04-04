import type { DrawingContext } from '../models/drawing-context';
import { loadFileAndAdjustCanvas } from './load-file-and-adjust-canvas';
import { updateDocumentContext } from './update-document-context';

// Drag & drop support for File System Access API
export function registerDragDrop(
  element: HTMLElement & { drawingContext: DrawingContext },
): void {
  element.addEventListener('dragover', (event: DragEvent) => {
    // TODO: Determine if Paint accepts the dragged content

    event.preventDefault();
  });

  element.addEventListener('drop', async (event: DragEvent) => {
    event.preventDefault();

    const { drawingContext } = element;
    const files = [...(event.dataTransfer?.items ?? [])].filter(
      ({ kind }) => kind === 'file',
    );
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

function isFileHandle(
  handle: FileSystemHandle,
): handle is FileSystemFileHandle {
  return handle.kind === 'file';
}
