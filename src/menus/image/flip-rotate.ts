import type { MenuAction } from '../../models/menu-action';

export class FlipRotateAction implements MenuAction {
  execute(): void {
    const app = document.querySelector('paint-app')?.shadowRoot;
    const dialog = document.createElement('paint-dialog-flip-and-rotate');
    dialog.addEventListener('close', () => {
      app?.removeChild(dialog);
    });
    app?.appendChild(dialog);
  }
}
