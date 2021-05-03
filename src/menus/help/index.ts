import { AboutAction } from './about';
import type { MenuEntry } from '../../models/menu';

export const helpMenu: MenuEntry = {
  caption: 'Help',
  mnemonic: 'H',
  helpText: '',
  entries: [
    {
      caption: 'Help Topics',
      mnemonic: 'H',
      helpText: 'Displays Help for the current task or command.',
    },
    {
      separator: true,
    },
    {
      caption: 'About Paint',
      mnemonic: 'A',
      helpText: 'Displays program information, version number, and copyright.',
      instance: new AboutAction(),
    },
  ],
};
