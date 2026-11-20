import type { DrawingContext } from '../../models/drawing-context';
import { getBlobFromSelection } from '../../helpers/get-blob-from-selection';
import type { MenuAction } from '../../models/menu-action';

export class CopyToAction implements MenuAction {
  canExecute({ selection }: DrawingContext): boolean {
    return !!selection;
  }

  async execute({
    context,
    selection,
    fileSystem,
  }: DrawingContext): Promise<void> {
    if (context && selection) {
      const blob = await getBlobFromSelection(context, selection);
      await fileSystem.fileSave(blob);
    }
  }
}
