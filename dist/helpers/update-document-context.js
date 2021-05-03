import { updateContext } from './update-context.js';
export function updateDocumentContext(handle, filename, {
  document,
  element
}) {
  document.handle = handle;
  document.title = filename;
  updateContext(element);
}