import { ViewBitmapAction } from '../actions/view-bitmap.js';

export const viewMenu = {
  caption: 'View',
  mnemonic: 'V',
  helpText: '',
  entries: [
    {
      caption: 'Tool Box',
      shortcut: 'Ctrl+T',
      mnemonic: 'T',
      checked: true,
      helpText: 'Shows or hides the tool box.',
    },
    {
      caption: 'Color Box',
      shortcut: 'Ctrl+A',
      mnemonic: 'C',
      checked: true,
      helpText: 'Shows or hides the color box.',
    },
    {
      caption: 'Status Bar',
      mnemonic: 'S',
      checked: true,
      helpText: 'Shows or hides the status bar.',
    },
    {
      separator: true,
    },
    {
      caption: 'Zoom',
      mnemonic: 'Z',
      helpText: '',
      entries: [{
        caption: 'Normal Size',
        mnemonic: 'N',
        shortcut: 'Ctrl+PgUp',
        helpText: 'Zooms the picture to 100%.',
      }, {
        caption: 'Large Size',
        mnemonic: 'L',
        shortcut: 'Ctrl+PgDn',
        helpText: 'Zooms the picture to 400%.',
      }, {
        caption: 'Custom…',
        mnemonic: 'u',
        helpText: 'Zooms the picture.',
      }, {
        separator: true,
      }, {
        caption: 'Show Grid',
        mnemonic: 'G',
        shortcut: 'Ctrl+G',
        helpText: 'Shows or hides the grid.',
      }, {
        caption: 'Show Thumbnail',
        mnemonic: 'h',
        helpText: 'Shows or hides the thumbnail view of the picture.',
        checked: true,
      }],
    },
    {
      caption: 'View Bitmap',
      mnemonic: 'V',
      shortcut: 'Ctrl+F',
      helpText: 'Displays the entire picture.',
      action: new ViewBitmapAction(),
    },
    {
      caption: 'Text Toolbar',
      mnemonic: 'e',
      checked: true,
      helpText: 'Shows or hides the text toolbar.',
      disabled: true,
    },
  ],
};
