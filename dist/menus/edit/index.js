import { ClearSelectionAction } from './clear-selection.js';
import { CopyToAction } from './copy-to.js';
import { PasteFromAction } from './paste-from.js';
import { CutAction } from './cut.js';
import { CopyAction } from './copy.js';
import { PasteAction } from './paste.js';
import { SelectAllAction } from './select-all.js';
export const editMenu = {
  caption: 'Edit',
  mnemonic: 'E',
  helpText: '',
  entries: [{
    caption: 'Undo',
    mnemonic: 'U',
    shortcut: 'Ctrl+Z',
    helpText: 'Undoes the last action.'
  }, {
    caption: 'Repeat',
    mnemonic: 'R',
    shortcut: 'F4',
    helpText: 'Redoes the previously undone action.'
  }, {
    separator: true
  }, {
    caption: 'Cut',
    mnemonic: 't',
    shortcut: 'Ctrl+X',
    helpText: 'Cuts the selection and puts it on the Clipboard.',
    instance: new CutAction()
  }, {
    caption: 'Copy',
    mnemonic: 'C',
    shortcut: 'Ctrl+C',
    helpText: 'Copies the selection and puts it on the Clipboard.',
    instance: new CopyAction()
  }, {
    caption: 'Paste',
    mnemonic: 'P',
    shortcut: 'Ctrl+V',
    helpText: 'Inserts the contents of the Clipboard.',
    instance: new PasteAction()
  }, {
    caption: 'Clear Selection',
    mnemonic: 'l',
    shortcut: 'Del',
    helpText: 'Deletes the selection.',
    instance: new ClearSelectionAction()
  }, {
    caption: 'Select All',
    mnemonic: 'A',
    shortcut: 'Ctrl+L',
    helpText: 'Selects everything.',
    instance: new SelectAllAction()
  }, {
    separator: true
  }, {
    caption: 'Copy To…',
    mnemonic: 'o',
    helpText: 'Copies the selection to a file.',
    instance: new CopyToAction()
  }, {
    caption: 'Paste From…',
    mnemonic: 'F',
    helpText: 'Pastes a file into the selection.',
    instance: new PasteFromAction()
  }]
};