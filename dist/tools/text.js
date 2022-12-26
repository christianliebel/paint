function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { clearContext } from '../helpers/clear-context.js';
import { dispatchAreaEvent } from '../helpers/dispatch-area-event.js';
import { drawAreaRectangle } from '../helpers/draw-area-rectangle.js';
import { evaluateTextToolbarVisibility } from '../helpers/evaluate-text-toolbar-visibility.js';
import { updateContext } from '../helpers/update-context.js';
export class TextTool {
  constructor() {
    _defineProperty(this, "startPosition", {
      x: 0,
      y: 0
    });
  }
  onPointerDown(x, y) {
    this.startPosition = {
      x,
      y
    };
  }
  onPointerMove(x, y, {
    previewContext,
    element
  }) {
    drawAreaRectangle(this.startPosition, {
      x,
      y
    }, previewContext);
    dispatchAreaEvent(this.startPosition, {
      x,
      y
    }, element);
  }
  onPointerUp(x, y, drawingContext) {
    clearContext(drawingContext.previewContext);
    const x1 = drawingContext.text.x = Math.min(x, this.startPosition.x);
    const y1 = drawingContext.text.y = Math.min(y, this.startPosition.y);
    const x2 = Math.max(x, this.startPosition.x);
    const y2 = Math.max(y, this.startPosition.y);
    const width = x2 - x1;
    const height = y2 - y1;

    // TODO: Default width/height? / depends on font size!
    // TODO: Scope to Canvas!
    if (width < 10 || height < 10) {
      return;
    }

    // TODO: In MS Paint, the area doesn't disappear. A single click shows a 1x1 area in the status bar
    drawingContext.element?.dispatchEvent(new CustomEvent('area', {
      bubbles: true,
      composed: true
    }));
    drawingContext.text.active = true;
    evaluateTextToolbarVisibility(drawingContext);
    drawingContext.text.width = width;
    drawingContext.text.height = height;
    updateContext(drawingContext.element);
  }
}