export function showDialog<T>(selector: string): Promise<T | undefined> {
  return new Promise((res) => {
    const app = document.querySelector('paint-app')?.shadowRoot;
    const dialog = document.createElement(selector);
    dialog.addEventListener(
      'close' as any,
      (event: CustomEvent<T | undefined>) => {
        app?.removeChild(dialog);
        res(event.detail);
      },
    );
    app?.appendChild(dialog);
  });
}
