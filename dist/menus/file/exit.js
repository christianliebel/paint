import { handleUnsavedChanges } from '../../helpers/handle-unsaved-changes.js';
export class ExitAction {
  async execute(drawingContext) {
    try {
      await handleUnsavedChanges(drawingContext); // suppress beforeunload handler

      drawingContext.document.dirty = false;
      window.close();
    } catch {// Silently catch any errors
    }
  }

}