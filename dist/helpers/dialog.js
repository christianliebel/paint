export function showDialog(selector) {
  return new Promise(res => {
    const app = document.querySelector('paint-app')?.shadowRoot;
    const dialog = document.createElement(selector);
    dialog.addEventListener('close', event => {
      app?.removeChild(dialog);
      res(event.detail);
    });
    app?.appendChild(dialog);
  });
}