import { CustomAction } from './custom';
import { LargeSizeAction } from './large-size';
import { NormalSizeAction } from './normal-size';
import { TextToolbarAction } from './text-toolbar';
import { ViewBitmapAction } from './view-bitmap';
import { StatusBarAction } from './status-bar';
import { ToolBoxAction } from './tool-box';
import { ColorBoxAction } from './color-box';
import type { MenuEntry } from '../../models/menu';

export const viewMenu: MenuEntry = {
  caption: 'View',
  mnemonic: 'V',
  helpText: '',
  entries: [
    {
      caption: 'Tool Box',
      shortcut: 'Ctrl+T',
      mnemonic: 'T',
      helpText: 'Shows or hides the tool box.',
      instance: new ToolBoxAction(),
    },
    {
      caption: 'Color Box',
      shortcut: 'Ctrl+A',
      mnemonic: 'C',
      helpText: 'Shows or hides the color box.',
      instance: new ColorBoxAction(),
    },
    {
      caption: 'Status Bar',
      mnemonic: 'S',
      helpText: 'Shows or hides the status bar.',
      instance: new StatusBarAction(),
    },
    {
      separator: true,
    },
    {
      caption: 'Zoom',
      mnemonic: 'Z',
      helpText: '',
      entries: [
        {
          caption: 'Normal Size',
          mnemonic: 'N',
          shortcut: 'Ctrl+PgUp',
          helpText: 'Zooms the picture to 100%.',
          instance: new NormalSizeAction(),
        },
        {
          caption: 'Large Size',
          mnemonic: 'L',
          shortcut: 'Ctrl+PgDn',
          helpText: 'Zooms the picture to 400%.',
          instance: new LargeSizeAction(),
        },
        {
          caption: 'Custom…',
          mnemonic: 'u',
          helpText: 'Zooms the picture.',
          instance: new CustomAction(),
        },
        {
          separator: true,
        },
        {
          caption: 'Show Grid',
          mnemonic: 'G',
          shortcut: 'Ctrl+G',
          helpText: 'Shows or hides the grid.',
        },
        {
          caption: 'Show Thumbnail',
          mnemonic: 'h',
          helpText: 'Shows or hides the thumbnail view of the picture.',
          // TODO: checked by default
        },
      ],
    },
    {
      caption: 'View Bitmap',
      mnemonic: 'V',
      shortcut: 'Ctrl+F',
      helpText: 'Displays the entire picture.',
      instance: new ViewBitmapAction(),
    },
    {
      caption: 'Text Toolbar',
      mnemonic: 'e',
      helpText: 'Shows or hides the text toolbar.',
      instance: new TextToolbarAction(),
    },
  ],
};
