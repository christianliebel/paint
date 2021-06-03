function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { updateContext } from './update-context.js';
const MAX_STACK_SIZE = 3;
// TODO: Support all actions (skew, selection moves, …)
export class History {
  constructor(drawingContext) {
    this.drawingContext = drawingContext;

    _defineProperty(this, "stack", []);

    _defineProperty(this, "stackPointer", -1);
  }

  clear() {
    this.stack.length = 0;
    this.stackPointer = -1;
  }

  commit() {
    this.drawingContext.document.dirty = true;
    this.stack.splice(this.stackPointer + 1);

    if (this.stack.length === MAX_STACK_SIZE + 1) {
      this.stack.shift();
    }

    const {
      canvas,
      context
    } = this.drawingContext;
    const width = canvas?.width ?? 0;
    const height = canvas?.height ?? 0;
    const imageData = context?.getImageData(0, 0, width, height);

    if (height && width && imageData) {
      const newLength = this.stack.push({
        height,
        width,
        imageData
      });
      this.stackPointer = newLength - 1;
    } // TODO: An external component should do this.


    updateContext(this.drawingContext.element);
  }

  undo() {
    if (!this.canUndo()) {
      throw new Error('No actions to undo.');
    }

    this.stackPointer--;
    this.restoreEntry();
  }

  redo() {
    if (!this.canRedo()) {
      throw new Error('No actions to redo.');
    }

    this.stackPointer++;
    this.restoreEntry();
  }

  restoreEntry() {
    const {
      height,
      width,
      imageData
    } = this.stack[this.stackPointer];
    const {
      canvas,
      context
    } = this.drawingContext;

    if (canvas && context) {
      canvas.height = height;
      canvas.width = width;
      context.putImageData(imageData, 0, 0);
    } // TODO: An external component should do this.


    updateContext(this.drawingContext.element);
  }

  canUndo() {
    return this.stackPointer > 0;
  }

  canRedo() {
    return this.stackPointer >= 0 && this.stackPointer < this.stack.length - 1;
  }

}