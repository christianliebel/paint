import type {
  CloseReason,
  DialogLayout,
  MessageBox,
  MessageBoxIcon,
} from '../elements/dialogs/message-box';

export function showMessageBox(
  prompt: string,
  icon: MessageBoxIcon = null,
  title = '',
  layout: DialogLayout = 'ok',
): Promise<CloseReason | undefined> {
  return new Promise<CloseReason | undefined>((res) => {
    const app = document.querySelector('paint-app')?.shadowRoot;
    const messageBox = document.createElement(
      'paint-dialog-message-box',
    ) as MessageBox;

    messageBox.prompt = prompt;
    messageBox.icon = icon;
    messageBox.title = title;
    messageBox.layout = layout;
    messageBox.addEventListener('close', (e) => {
      app?.removeChild(messageBox);
      res((e as CustomEvent<{ reason: CloseReason }>).detail.reason);
    });

    app?.appendChild(messageBox);
  });
}
