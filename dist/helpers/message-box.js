import { showDialog } from './dialog.js';
export function showMessageBox(prompt, icon = null, title = '', layout = 'ok') {
  return showDialog('paint-dialog-message-box', {
    prompt,
    icon,
    title,
    layout
  });
}