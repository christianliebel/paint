import type { MenuAction } from '../../models/menu-action';

export class ExitAction implements MenuAction {
  execute(): void {
    window.close();
  }
}
