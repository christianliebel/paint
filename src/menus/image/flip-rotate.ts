import { showDialog } from '../../helpers/dialog';
import type { MenuAction } from '../../models/menu-action';

export class FlipRotateAction implements MenuAction {
  execute(): void {
    showDialog('paint-dialog-flip-and-rotate');
  }
}
