import { InvertColorsAction } from '../actions/invert-image.js';
import { ClearImageAction } from '../actions/clear-image.js';

export const imageMenu = {
  caption: 'Image',
  mnemonic: 'I',
  helpText: '',
  entries: [
    {
      caption: 'Flip/Rotate…',
      mnemonic: 'F',
      // shortcut: 'Ctrl+R', <- prevents reloading
      helpText: 'Flips or rotates the picture or a selection.',
    },
    {
      caption: 'Stretch/Skew…',
      mnemonic: 'S',
      shortcut: 'Ctrl+W',
      helpText: 'Stretches or skews the picture or a selection.',
    },
    {
      caption: 'Invert Colors',
      mnemonic: 'I',
      shortcut: 'Ctrl+I',
      helpText: 'Inverts the colors of the picture or a selection.',
      instance: new InvertColorsAction(),
    },
    {
      caption: 'Attributes…',
      mnemonic: 'A',
      shortcut: 'Ctrl+E',
      helpText: 'Changes the attributes of the picture.',
    },
    {
      caption: 'Clear Image',
      mnemonic: 'C',
      shortcut: 'Ctrl+Shft+N',
      helpText: 'Clears the picture or selection.',
      instance: new ClearImageAction(),
    },
  ],
};
