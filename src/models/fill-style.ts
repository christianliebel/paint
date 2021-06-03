/**
 * Contains the fill style selected by the user for the Rectangle, Polygon,
 * Ellipse and Rounded Rectangle tools.
 */
export interface FillStyle {
  /**
   * Determines if the shape stroke should be painted.
   */
  stroke: boolean;
  /**
   * Determines if the shape should be filled.
   */
  fill: boolean;
}
