import { SaveAction } from '../menus/file/save.js';
import { showMessageBox } from './message-box.js';
export async function handleUnsavedChanges(drawingContext) {
  if (!drawingContext.document.dirty) {
    return;
  }
  const result = await showMessageBox(`Save changes to ${drawingContext.document.title}?`, 'warning', 'Paint', 'yes-no-cancel');
  if (result === 'cancel') {
    throw Error('User cancelled operation.');
  }
  if (result === 'yes') {
    await new SaveAction().execute(drawingContext);
  }
}