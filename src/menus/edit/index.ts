import { ClearSelectionAction } from './clear-selection';
import { CopyToAction } from './copy-to';
import { PasteFromAction } from './paste-from';
import { CutAction } from './cut';
import { CopyAction } from './copy';
import { PasteAction } from './paste';
import { SelectAllAction } from './select-all';
import type { MenuEntry } from '../../models/menu';

export const editMenu: MenuEntry = {
  caption: 'Edit',
  mnemonic: 'E',
  helpText: '',
  entries: [
    {
      caption: 'Undo',
      mnemonic: 'U',
      shortcut: 'Ctrl+Z',
      helpText: 'Undoes the last action.',
    },
    {
      caption: 'Repeat',
      mnemonic: 'R',
      shortcut: 'F4',
      helpText: 'Redoes the previously undone action.',
    },
    {
      separator: true,
    },
    {
      caption: 'Cut',
      mnemonic: 't',
      shortcut: 'Ctrl+X',
      helpText: 'Cuts the selection and puts it on the Clipboard.',
      instance: new CutAction(),
    },
    {
      caption: 'Copy',
      mnemonic: 'C',
      shortcut: 'Ctrl+C',
      helpText: 'Copies the selection and puts it on the Clipboard.',
      instance: new CopyAction(),
    },
    {
      caption: 'Paste',
      mnemonic: 'P',
      shortcut: 'Ctrl+V',
      helpText: 'Inserts the contents of the Clipboard.',
      instance: new PasteAction(),
    },
    {
      caption: 'Clear Selection',
      mnemonic: 'l',
      shortcut: 'Del',
      helpText: 'Deletes the selection.',
      instance: new ClearSelectionAction(),
    },
    {
      caption: 'Select All',
      mnemonic: 'A',
      shortcut: 'Ctrl+L',
      helpText: 'Selects everything.',
      instance: new SelectAllAction(),
    },
    {
      separator: true,
    },
    {
      caption: 'Copy To…',
      mnemonic: 'o',
      helpText: 'Copies the selection to a file.',
      instance: new CopyToAction(),
    },
    {
      caption: 'Paste From…',
      mnemonic: 'F',
      helpText: 'Pastes a file into the selection.',
      instance: new PasteFromAction(),
    },
  ],
};
