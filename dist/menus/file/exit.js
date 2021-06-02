import { handleUnsavedChanges } from '../../helpers/handle-unsaved-changes.js';
export class ExitAction {
  async execute(drawingContext) {
    try {
      await handleUnsavedChanges(drawingContext);
      window.close();
    } catch {// Silently catch any errors
    }
  }

}