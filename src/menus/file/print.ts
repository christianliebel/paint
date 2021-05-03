import type { MenuAction } from '../../models/menu-action';

export class PrintAction implements MenuAction {
  execute(): void {
    window.print();
  }
}
