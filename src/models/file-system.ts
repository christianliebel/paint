import type { fileOpen, fileSave } from 'browser-fs-access';

/**
 * How Paint opens and saves files. By default, the user's own file system via
 * browser-fs-access. An application embedding `<paint-app>` can set its own on
 * the element's `fileSystem` property to keep images in its own storage. Both
 * functions take the arguments browser-fs-access's do; the handle a host's
 * `fileSave` returns is handed back to it, as is, on the next Save.
 */
export interface FileSystem {
  fileOpen: typeof fileOpen;
  fileSave: typeof fileSave;
}
