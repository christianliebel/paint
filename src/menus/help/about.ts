import { showDialog } from '../../helpers/dialog';
import type { MenuAction } from '../../models/menu-action';

export class AboutAction implements MenuAction {
  execute(): void {
    showDialog('paint-dialog-about');
  }
}
