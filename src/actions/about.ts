import type { Action } from '../models/action';

export class AboutAction implements Action {
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
