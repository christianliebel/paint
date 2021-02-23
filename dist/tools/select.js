function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { updateContext } from '../helpers/update-context.js';
export class SelectTool {
  constructor() {
    _defineProperty(this, "startPosition", {
      x: 0,
      y: 0
    });
  }

  onPointerDown(x, y, {
    previewContext
  }) {
    this.startPosition = {
      x,
      y
    };
    previewContext?.setLineDash([4]);
  }

  onPointerMove(x, y, {
    element,
    canvas,
    previewContext
  }) {
    // TODO: Scope to canvas
    previewContext?.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
    previewContext?.strokeRect(this.startPosition.x + 0.5, this.startPosition.y + 0.5, x - this.startPosition.x, y - this.startPosition.y);
    element?.dispatchEvent(new CustomEvent('area', {
      detail: {
        width: Math.abs(x - this.startPosition.x),
        height: Math.abs(y - this.startPosition.y)
      },
      bubbles: true,
      composed: true
    }));
  }

  onPointerUp(x, y, drawingContext) {
    const {
      canvas,
      element,
      previewContext
    } = drawingContext;
    previewContext?.setLineDash([]);
    previewContext?.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
    element?.dispatchEvent(new CustomEvent('area', {
      bubbles: true,
      composed: true
    }));
    const width = x - this.startPosition.x;
    const height = y - this.startPosition.y;
    drawingContext.selection = width === 0 && height === 0 ? null : {
      x: this.startPosition.x,
      y: this.startPosition.y,
      width,
      height
    };
    updateContext(element);
  }

}