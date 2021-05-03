function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { ClearSelectionAction } from './clear-selection.js';
import { CopyAction } from './copy.js';
export class CutAction {
  constructor() {
    _defineProperty(this, "copy", new CopyAction());

    _defineProperty(this, "clearSelection", new ClearSelectionAction());
  }

  canExecute(drawingContext) {
    return this.copy.canExecute(drawingContext) && this.clearSelection.canExecute(drawingContext);
  }

  async execute(drawingContext) {
    await this.copy.execute(drawingContext);
    this.clearSelection.execute(drawingContext);
  }

}