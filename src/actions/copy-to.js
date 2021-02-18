import { getBlobFromSelection } from '../helpers/get-blob-from-selection';
import { fileSave } from 'browser-fs-access';

export class CopyToAction {
  canExecute({ selection }) {
    return !!selection;
  }

  async execute({ context, selection }) {
    const blob = await getBlobFromSelection(context, selection);
    await fileSave(blob);
  }
}
