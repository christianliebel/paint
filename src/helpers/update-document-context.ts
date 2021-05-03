import type { FileSystemHandle } from 'browser-fs-access';
import type { DrawingContext } from '../models/drawing-context';
import { updateContext } from './update-context';

export function updateDocumentContext(
  handle: FileSystemHandle | undefined,
  filename: string,
  { document, element }: DrawingContext,
): void {
  document.handle = handle;
  document.title = filename;

  updateContext(element);
}
