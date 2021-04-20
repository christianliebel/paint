import {getBlobFromSelection} from "../helpers/get-blob-from-selection.js";
export class CopyAction {
  canExecute({selection}) {
    return "write" in navigator.clipboard && !!selection;
  }
  async execute({context, selection}) {
    if (context && selection) {
      const blob = await getBlobFromSelection(context, selection);
      await navigator.clipboard.write([new ClipboardItem({[blob.type]: blob})]);
    }
  }
}
