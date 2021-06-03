export function showDialog(selector, propertyBag = {}) {
  return new Promise(res => {
    const app = document.querySelector('paint-app')?.shadowRoot;
    const dialog = document.createElement(selector);
    Object.entries(propertyBag).forEach(([key, value]) => dialog[key] = value);
    dialog.addEventListener('close', event => {
      app?.removeChild(dialog);
      res(event.detail);
    });
    app?.appendChild(dialog);
  });
}