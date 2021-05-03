import type { MenuAction } from '../../models/menu-action';

export class AboutAction implements MenuAction {
  execute(): void {
    // TODO: probably refactor this
    const app = document.querySelector('paint-app')?.shadowRoot;
    const dialog = document.createElement('paint-dialog-about');
    dialog.addEventListener('close', () => {
      app?.removeChild(dialog);
    });
    app?.appendChild(dialog);
  }
}
