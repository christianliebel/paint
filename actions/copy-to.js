import { getBlobFromSelection } from '../helpers/get-blob-from-selection.js';
import { fileSave } from '../web_modules/browser-nativefs.js';

export class CopyToAction {
  canExecute({ selection }) {
    return !!selection;
  }

  async execute({ context, selection }) {
    const blob = await getBlobFromSelection(context, selection);
    await fileSave(blob);
  }
}
