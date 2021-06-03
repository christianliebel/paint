import type { Selection } from './selection';

export interface TextContext extends Partial<Selection> {
  /**
   * Determines if text editing is currently active.
   */
  active: boolean;

  /**
   * Contains the current font family.
   */
  font: string;

  /**
   * Contains the font size.
   */
  size: number;

  /**
   * Determines if the text toolbar should be shown. Its actual visibility is
   * controlled by the view context.
   */
  showToolbar: boolean;

  /**
   * Determines if the text should be bold.
   */
  bold: boolean;

  /**
   * Determines if the text should be italic.
   */
  italic: boolean;

  /**
   * Determines if the text should be underlined.
   */
  underline: boolean;
}
