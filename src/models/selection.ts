import type { Point } from './point';

/**
 * Defines a selection on the canvas, created by the Select or Text tools.
 */
export interface Selection extends Point {
  /**
   * Contains the width of this selection.
   */
  width: number;

  /**
   * Contains the height of this selection.
   */
  height: number;
}
