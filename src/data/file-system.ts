import { fileOpen, fileSave } from 'browser-fs-access';
import type { FileSystem } from '../models/file-system';

export const BROWSER_FILE_SYSTEM: FileSystem = { fileOpen, fileSave };
