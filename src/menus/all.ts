import { editMenu } from './edit';
import { fileMenu } from './file';
import { helpMenu } from './help';
import { imageMenu } from './image';
import type { MenuEntry } from '../models/menu';
import { optionsMenu } from './options';
import { viewMenu } from './view';

export const menus: MenuEntry[] = [
  fileMenu,
  editMenu,
  viewMenu,
  imageMenu,
  optionsMenu,
  helpMenu,
];
