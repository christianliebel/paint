import type { DrawingContext } from './drawing-context';

/**
 * Represents a command in the application's menu.
 */
export interface MenuAction {
  /**
   * Determines if the action is checked in the menu. Optional.
   * @param drawingContext
   */
  isChecked?(drawingContext?: DrawingContext): boolean;

  /**
   * Determines if the menu entry can be executed. When this method returns
   * false, the action will be disabled in the menu. If it returns true, or if
   * the method is not implemented, the action will be enabled. Optional.
   * @param drawingContext
   */
  canExecute?(drawingContext?: DrawingContext): boolean;

  /**
   * Called when the menu action should be executed.
   * @param drawingContext
   */
  execute(drawingContext?: DrawingContext): void | Promise<void>;
}
