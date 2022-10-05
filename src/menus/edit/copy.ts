import type { DrawingContext } from '../../models/drawing-context';
import { getBlobFromSelection } from '../../helpers/get-blob-from-selection';
import type { MenuAction } from '../../models/menu-action';

export class CopyAction implements MenuAction {
  canExecute({ selection }: DrawingContext): boolean {
    return 'write' in navigator.clipboard && !!selection;
  }

  async execute({ context, selection }: DrawingContext): Promise<void> {
    if (context && selection) {
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': getBlobFromSelection(context, selection),
        }),
      ]);
    }
  }
}
