import { toBlob } from '../../helpers/to-blob';
import { updateDocumentContext } from '../../helpers/update-document-context';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class SaveAsAction implements MenuAction {
  async execute(drawingContext: DrawingContext): Promise<void> {
    if (!drawingContext.canvas) {
      return;
    }

    const blob = await toBlob(drawingContext.canvas);
    const file = await drawingContext.fileSystem.fileSave(blob, {
      fileName: drawingContext.document.title,
      extensions: ['.png'],
      description: 'PNG files',
    });

    if (file) {
      updateDocumentContext(file, file.name, drawingContext);
    }
  }
}
