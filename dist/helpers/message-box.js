import { showDialog } from './dialog.js';

// TODO: Allow to disable the close box

export function showMessageBox(prompt, icon = null, title = '', layout = 'ok') {
  return showDialog('paint-dialog-message-box', {
    prompt,
    icon,
    title,
    layout
  });
}