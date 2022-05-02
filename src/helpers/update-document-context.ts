import type { DrawingContext } from '../models/drawing-context';
import { updateContext } from './update-context';

export function updateDocumentContext(
  handle: FileSystemFileHandle | undefined,
  filename: string,
  { document, element }: DrawingContext,
): void {
  document.handle = handle;
  document.title = filename;

  updateContext(element);
}
