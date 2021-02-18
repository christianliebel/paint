import { ClearSelectionAction } from './clear-selection';
import { CopyAction } from './copy';

export class CutAction {
  constructor() {
    this.copy = new CopyAction();
    this.clearSelection = new ClearSelectionAction();
  }

  canExecute(drawingContext) {
    return (
      this.copy.canExecute(drawingContext) &&
      this.clearSelection.canExecute(drawingContext)
    );
  }

  async execute(drawingContext) {
    await this.copy.execute(drawingContext);
    this.clearSelection.execute(drawingContext);
  }
}
