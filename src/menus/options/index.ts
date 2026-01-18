import { SaveColorsAction } from './save-colors';
import { GetColorsAction } from './get-colors';
import { DrawOpaque } from './draw-opaque';
import { EditColorsAction } from './edit-colors';
import type { MenuEntry } from '../../models/menu';

export const optionsMenu: MenuEntry = {
  caption: 'Options',
  mnemonic: 'O',
  helpText: '',
  entries: [
    {
      caption: 'Edit Colors…',
      mnemonic: 'E',
      helpText: 'Creates a new color.',
      instance: new EditColorsAction(),
    },
    {
      caption: 'Get Colors…',
      mnemonic: 'G',
      helpText: 'Uses a previously saved palette of colors.',
      instance: new GetColorsAction(),
    },
    {
      caption: 'Save Colors…',
      mnemonic: 'S',
      helpText: 'Saves the current palette of colors to a file.',
      instance: new SaveColorsAction(),
    },
    {
      caption: 'Draw Opaque',
      mnemonic: 'D',
      helpText: 'Makes the current selection either opaque or transparent.',
      instance: new DrawOpaque(),
    },
  ],
};
