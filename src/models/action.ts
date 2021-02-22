import type { DrawingContext } from './drawing-context';

export interface Action {
  isChecked?(drawingContext?: DrawingContext): boolean,
  canExecute?(drawingContext?: DrawingContext): boolean;
  execute(drawingContext?: DrawingContext): void | Promise<void>;
}
