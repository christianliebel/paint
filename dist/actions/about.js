export class AboutAction {
  execute() {
    const app = document.querySelector("paint-app")?.shadowRoot;
    const dialog = document.createElement("paint-dialog-about");
    dialog.addEventListener("close", () => {
      app?.removeChild(dialog);
    });
    app?.appendChild(dialog);
  }
}
