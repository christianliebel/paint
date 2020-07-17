import { copy } from '../actions/copy.js';
import { paste } from '../actions/paste.js';

export const editMenu = {
  caption: 'Edit',
  mnemonic: 'E',
  helpText: '',
  entries: [
    {
      caption: 'Undo',
      mnemonic: 'U',
      shortcut: 'Ctrl+Z',
      helpText: 'Undoes the last action.',
      disabled: true,
    },
    {
      caption: 'Repeat',
      mnemonic: 'R',
      shortcut: 'F4',
      helpText: 'Redoes the previously undone action.',
      disabled: true,
    },
    {
      separator: true,
    },
    {
      caption: 'Cut',
      mnemonic: 't',
      shortcut: 'Ctrl+X',
      helpText: 'Cuts the selection and puts it on the Clipboard.',
      disabled: true,
    },
    {
      caption: 'Copy',
      mnemonic: 'C',
      shortcut: 'Ctrl+C',
      helpText: 'Copies the selection and puts it on the Clipboard.',
      disabled: !(navigator.clipboard && navigator.clipboard.write),
      action: copy,
    },
    {
      caption: 'Paste',
      mnemonic: 'P',
      shortcut: 'Ctrl+V',
      helpText: 'Inserts the contents of the Clipboard.',
      disabled: !(navigator.clipboard && navigator.clipboard.read),
      action: paste,
    },
    {
      caption: 'Clear Selection',
      mnemonic: 'l',
      shortcut: 'Del',
      helpText: 'Deletes the selection.',
      disabled: true,
    },
    {
      caption: 'Select All',
      mnemonic: 'A',
      shortcut: 'Ctrl+L',
      helpText: 'Selects everything.',
      disabled: true,
    },
    {
      separator: true,
    },
    {
      caption: 'Copy To…',
      mnemonic: 'o',
      helpText: 'Copies the selection to a file.',
      disabled: true,
    },
    {
      caption: 'Paste From…',
      mnemonic: 'F',
      helpText: 'Pastes a file into the selection.',
      disabled: true,
    },
  ],
};
