import { ExitAction } from './exit';
import { NewAction } from './new';
import { OpenAction } from './open';
import { SaveAction } from './save';
import { SaveAsAction } from './save-as';
import { PrintAction } from './print';
import { SendAction } from './send';
import type { MenuEntry } from '../../models/menu';

export const fileMenu: MenuEntry = {
  caption: 'File',
  mnemonic: 'F',
  helpText: '',
  entries: [
    {
      caption: 'New',
      mnemonic: 'N',
      shortcut: 'Ctrl+N',
      helpText: 'Creates a new document.',
      instance: new NewAction(),
    },
    {
      caption: 'Open…',
      mnemonic: 'O',
      shortcut: 'Ctrl+O',
      helpText: 'Opens an existing document.',
      instance: new OpenAction(),
    },
    {
      caption: 'Save',
      mnemonic: 'S',
      shortcut: 'Ctrl+S',
      helpText: 'Saves the active document.',
      instance: new SaveAction(),
    },
    {
      caption: 'Save As…',
      mnemonic: 'A',
      helpText: 'Saves the active document with a new name.',
      instance: new SaveAsAction(),
    },
    {
      separator: true,
    },
    {
      caption: 'Print Preview',
      mnemonic: 'v',
      helpText: 'Displays full pages.',
      instance: new PrintAction(),
    },
    {
      caption: 'Page Setup…',
      mnemonic: 't',
      helpText: 'Changes the page layout.',
      instance: new PrintAction(),
    },
    {
      caption: 'Print…',
      mnemonic: 'P',
      shortcut: 'Ctrl+P',
      helpText: 'Prints the active document and sets printing options.',
      instance: new PrintAction(),
    },
    {
      separator: true,
    },
    {
      caption: 'Send…',
      mnemonic: 'e',
      helpText: 'Sends a picture by using mail or fax.',
      instance: new SendAction(),
    },
    {
      separator: true,
    },
    {
      caption: 'Set As Wallpaper (Tiled)',
      mnemonic: 'W',
      helpText: 'Tiles this bitmap as the desktop wallpaper.',
      instance: null, // not exposed to web
    },
    {
      caption: 'Set As Wallpaper (Centered)',
      mnemonic: 'l',
      helpText: 'Centers this bitmap as the desktop wallpaper.',
      instance: null, // not exposed to web
    },
    {
      separator: true,
    },
    {
      caption: 'Recent File',
      instance: null, // TODO: Recent files/NativeFS
      helpText: 'Opens this document.',
    },
    {
      separator: true,
    },
    {
      caption: 'Exit',
      mnemonic: 'x',
      shortcut: 'Alt+F4',
      helpText: 'Quits Paint.',
      instance: new ExitAction(),
    },
  ],
};
