import { SaveColorsAction } from '../actions/save-colors';
import { GetColorsAction } from '../actions/get-colors';
import { DrawOpaque } from '../actions/draw-opaque';
import type { MenuEntry } from '../models/menu';

export const optionsMenu: MenuEntry = {
  caption: 'Options',
  mnemonic: 'O',
  helpText: '',
  entries: [
    {
      caption: 'Edit Colors…',
      mnemonic: 'E',
      helpText: 'Creates a new color.',
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
