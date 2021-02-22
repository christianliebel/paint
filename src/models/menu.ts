import type { Action } from './action';

export interface MenuEntry {
  caption: string,
  mnemonic?: string,
  helpText: string,

  instance?: Action | null;
  shortcut?: string;
  checked?: boolean;
  disabled?: boolean;

  entries?: (MenuEntry | MenuSeparator)[];
}

export interface MenuSeparator {
  separator: true;
}
