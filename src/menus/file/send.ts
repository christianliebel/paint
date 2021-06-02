import { toBlob } from '../../helpers/to-blob';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class SendAction implements MenuAction {
  private readonly fakePng = this.getFileFromPngBlob(new Blob(), 'fake.png');

  canExecute(): boolean {
    return (
      !!navigator.canShare && navigator.canShare({ files: [this.fakePng] })
    );
  }

  async execute({ canvas, document }: DrawingContext): Promise<void> {
    if (canvas) {
      const blob = await toBlob(canvas);
      await navigator.share({
        files: [this.getFileFromPngBlob(blob, `${document.title}.png`)],
        title: document.title,
      });
    }
  }

  getFileFromPngBlob(blob: Blob, title: string): File {
    return new File([blob], title, { type: 'image/png' });
  }
}
