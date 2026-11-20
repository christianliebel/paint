import type { DrawingContext } from '../../models/drawing-context';
import type { FileSystem } from '../../models/file-system';
import { SaveAsAction } from './save-as';

describe('SaveAsAction', () => {
  test('should save through the file system an embedding application provides, and keep its handle', async () => {
    const blob = new Blob(['png']);
    const handle = { name: 'drawing.png' } as unknown as FileSystemFileHandle;
    const saved: unknown[] = [];
    const fileSystem = {
      fileOpen: jest.fn(),
      fileSave: jest.fn(async (...args: unknown[]) => {
        saved.push(args);
        return handle;
      }),
    } as unknown as FileSystem;
    const canvas = {
      toBlob: (callback: BlobCallback) => callback(blob),
    } as unknown as HTMLCanvasElement;
    const context = {
      canvas,
      fileSystem,
      document: { title: 'untitled', dirty: true },
      element: null,
    } as unknown as DrawingContext;

    await new SaveAsAction().execute(context);

    expect(saved).toEqual([
      [
        blob,
        {
          fileName: 'untitled',
          extensions: ['.png'],
          description: 'PNG files',
        },
      ],
    ]);
    expect(context.document.handle).toBe(handle);
    expect(context.document.title).toBe('drawing.png');
  });
});
