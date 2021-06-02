import { SaveAction } from '../menus/file/save';
import type { DrawingContext } from '../models/drawing-context';
import { showMessageBox } from './message-box';

export async function handleUnsavedChanges(
  drawingContext: DrawingContext,
): Promise<void> {
  if (!drawingContext.document.dirty) {
    return;
  }

  const result = await showMessageBox(
    `Save changes to ${drawingContext.document.title}?`,
    'warning',
    'Paint',
    'yes-no-cancel',
  );

  if (result === 'cancel') {
    throw Error('User cancelled operation.');
  }

  if (result === 'yes') {
    await new SaveAction().execute(drawingContext);
  }
}
