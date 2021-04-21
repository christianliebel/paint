import { getBlobFromSelection } from '../helpers/get-blob-from-selection.js';
import { fileSave } from '../../_snowpack/pkg/browser-fs-access.js';
export class CopyToAction {
  canExecute({
    selection
  }) {
    return !!selection;
  }

  async execute({
    context,
    selection
  }) {
    if (context && selection) {
      const blob = await getBlobFromSelection(context, selection);
      await fileSave(blob);
    }
  }

}