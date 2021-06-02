export function showMessageBox(prompt, icon = null, title = '', layout = 'ok') {
  return new Promise(res => {
    const app = document.querySelector('paint-app')?.shadowRoot;
    const messageBox = document.createElement('paint-dialog-message-box');
    messageBox.prompt = prompt;
    messageBox.icon = icon;
    messageBox.title = title;
    messageBox.layout = layout;
    messageBox.addEventListener('close', e => {
      app?.removeChild(messageBox);
      res(e.detail.reason);
    });
    app?.appendChild(messageBox);
  });
}