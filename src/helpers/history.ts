import type { DrawingContext } from '../models/drawing-context';
import { updateContext } from './update-context';

const MAX_STACK_SIZE = 3;

interface CanvasHistoryEntry {
  imageData: ImageData;
  height: number;
  width: number;
}

// TODO: Support all actions (skew, rotate, selection moves, …)
export class History {
  private readonly stack: CanvasHistoryEntry[] = [];
  private stackPointer = -1;

  constructor(private readonly drawingContext: DrawingContext) {}

  clear(): void {
    this.stack.length = 0;
    this.stackPointer = -1;
  }

  commit(): void {
    this.drawingContext.document.dirty = true;
    this.stack.splice(this.stackPointer + 1);

    if (this.stack.length === MAX_STACK_SIZE + 1) {
      this.stack.shift();
    }

    const { canvas, context } = this.drawingContext;
    const width = canvas?.width ?? 0;
    const height = canvas?.height ?? 0;
    const imageData = context?.getImageData(0, 0, width, height);
    if (height && width && imageData) {
      const newLength = this.stack.push({ height, width, imageData });
      this.stackPointer = newLength - 1;
    }

    // TODO: An external component should do this.
    updateContext(this.drawingContext.element);
  }

  undo(): void {
    if (!this.canUndo()) {
      throw new Error('No actions to undo.');
    }

    this.stackPointer--;
    this.restoreEntry();
  }

  redo(): void {
    if (!this.canRedo()) {
      throw new Error('No actions to redo.');
    }

    this.stackPointer++;
    this.restoreEntry();
  }

  private restoreEntry(): void {
    const { height, width, imageData } = this.stack[this.stackPointer];
    const { canvas, context } = this.drawingContext;
    if (canvas && context) {
      canvas.height = height;
      canvas.width = width;
      context.putImageData(imageData, 0, 0);
    }

    // TODO: An external component should do this.
    updateContext(this.drawingContext.element);
  }

  canUndo(): boolean {
    return this.stackPointer > 0;
  }

  canRedo(): boolean {
    return this.stackPointer >= 0 && this.stackPointer < this.stack.length - 1;
  }
}
