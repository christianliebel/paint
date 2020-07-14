import { getBlobFromSelection } from '../helpers/get-blob-from-selection.js';

export class CopyAction {
  canExecute({ selection }) {
    return navigator.clipboard?.write && selection;
  }

  async execute({ context, selection }) {
    const blob = await getBlobFromSelection(context, selection);
    // eslint-disable-next-line no-undef
    await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
  }
}
