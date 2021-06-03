import type { MenuAction } from './menu-action';

/**
 * Represents a menu entry.
 */
export interface MenuEntry {
  /**
   * Contains the caption of the entry in the menu.
   */
  caption: string;

  // TODO: Merge this into caption.
  /**
   * Contains the mnemonic of the entry in the menu.
   */
  mnemonic?: string;

  /**
   * Contains the help text for this entry that will be shown in the status bar.
   */
  helpText: string;

  /**
   * Contains an instance of a {@see MenuAction}. If this property is not set,
   * the menu entry will be disabled.
   */
  instance?: MenuAction | null;

  /**
   * Contains the shortcut key combination to run the action. Optional.
   */
  shortcut?: string;

  /**
   * Contains child entries.
   */
  entries?: (MenuEntry | MenuSeparator)[];
}

/**
 * Represents a separator.
 */
export interface MenuSeparator {
  separator: true;
}
