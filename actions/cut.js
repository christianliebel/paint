import { copy } from './copy.js';
import { clearSelection } from './clear-selection.js';

export async function cut(drawingContext) {
  await copy(drawingContext);
  clearSelection(drawingContext);
}
