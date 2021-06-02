import type { MenuAction } from './menu-action';

export interface MenuEntry {
  caption: string;
  mnemonic?: string;
  helpText: string;

  instance?: MenuAction | null;
  shortcut?: string;
  checked?: boolean;
  disabled?: boolean;

  entries?: (MenuEntry | MenuSeparator)[];
}

export interface MenuSeparator {
  separator: true;
}
