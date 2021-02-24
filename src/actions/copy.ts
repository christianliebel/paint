import type { DrawingContext } from '../models/drawing-context';
import { getBlobFromSelection } from '../helpers/get-blob-from-selection';
import type { Action } from '../models/action';

export class CopyAction implements Action {
  canExecute({ selection }: DrawingContext): boolean {
    return 'write' in navigator.clipboard && !!selection;
  }

  async execute({ context, selection }: DrawingContext): Promise<void> {
    if (context && selection) {
      const blob = await getBlobFromSelection(context, selection);
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
    }
  }
}
