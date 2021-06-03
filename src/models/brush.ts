export type BrushType =
  | 'circle'
  | 'square'
  | 'forward-diagonal'
  | 'backward-diagonal';

/**
 * Determines the style of the Brush tool.
 */
export interface Brush {
  /**
   * Contains the type of the brush.
   */
  type: BrushType;

  /**
   * Contains the size of the brush.
   */
  size: number;
}
