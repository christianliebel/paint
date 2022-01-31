import type { FileSystemHandle } from 'browser-fs-access';
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
      if (handle?.kind !== 'file') {
        continue;
      }

      const blob = await (handle as FileSystemFileHandle).getFile();
      await loadFileAndAdjustCanvas(blob, drawingContext);

      updateDocumentContext(
        handle as unknown as FileSystemHandle,
        handle.name,
        drawingContext,
      );

      return;
    }
  });
}
