import { handleUnsavedChanges } from '../../helpers/handle-unsaved-changes';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class ExitAction implements MenuAction {
  async execute(drawingContext: DrawingContext): Promise<void> {
    try {
      await handleUnsavedChanges(drawingContext);
      window.close();
    } catch {
      // Silently catch any errors
    }
  }
}
