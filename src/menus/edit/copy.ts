import type { DrawingContext } from '../../models/drawing-context';
import { getBlobFromSelection } from '../../helpers/get-blob-from-selection';
import type { MenuAction } from '../../models/menu-action';

export class CopyAction implements MenuAction {
  canExecute({ selection }: DrawingContext): boolean {
    return 'write' in navigator.clipboard && !!selection;
  }

  async execute({ context, selection }: DrawingContext): Promise<void> {
    if (context && selection) {
      const blob = await getBlobFromSelection(context, selection);
      await navigator.clipboard.write([
        // TODO: Workaround for wrong typings in TypeScript 4.4.2
        new ClipboardItem({
          [blob.type]: blob as unknown as ClipboardItemData,
        }),
      ]);
    }
  }
}
