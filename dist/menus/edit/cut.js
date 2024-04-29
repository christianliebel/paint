function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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