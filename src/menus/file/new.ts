import { DEFAULT_COLORS, DEFAULT_PALETTE } from '../../data/colors';
import { handleUnsavedChanges } from '../../helpers/handle-unsaved-changes';
import { updateDocumentContext } from '../../helpers/update-document-context';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';
import { ClearImageAction } from '../image/clear-image';

export class NewAction implements MenuAction {
  async execute(drawingContext: DrawingContext): Promise<void> {
    try {
      await handleUnsavedChanges(drawingContext);

      updateDocumentContext(undefined, 'untitled', drawingContext);
      drawingContext.palette = [...DEFAULT_PALETTE];
      drawingContext.colors = { ...DEFAULT_COLORS };
      drawingContext.history?.clear();
      new ClearImageAction().execute(drawingContext);
      drawingContext.document.dirty = false;
    } catch {
      // Silently catch any errors
    }
  }
}
