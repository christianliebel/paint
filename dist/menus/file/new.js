import { DEFAULT_COLORS, DEFAULT_PALETTE } from '../../data/colors.js';
import { handleUnsavedChanges } from '../../helpers/handle-unsaved-changes.js';
import { updateDocumentContext } from '../../helpers/update-document-context.js';
import { ClearImageAction } from '../image/clear-image.js';
export class NewAction {
  async execute(drawingContext) {
    try {
      await handleUnsavedChanges(drawingContext);
      updateDocumentContext(undefined, 'untitled', drawingContext);
      drawingContext.palette = [...DEFAULT_PALETTE];
      drawingContext.colors = {
        ...DEFAULT_COLORS
      };
      drawingContext.history?.clear();
      new ClearImageAction().execute(drawingContext);
      drawingContext.document.dirty = false;
    } catch {
      // Silently catch any errors
    }
  }
}