import { toBlob } from '../helpers/to-blob.js';
export class SendAction {
  constructor() {
    this.fakePng = this.getFileFromPngBlob(new Blob(), 'fake.png');
  }

  canExecute() {
    return !!navigator.canShare && navigator.canShare({
      files: [this.fakePng]
    });
  }

  async execute({
    canvas,
    document
  }) {
    if (canvas) {
      const blob = await toBlob(canvas);
      await navigator.share({
        files: [this.getFileFromPngBlob(blob, `${document.title}.png`)],
        title: document.title
      });
    }
  }

  getFileFromPngBlob(blob, title) {
    return new File([blob], title, {
      type: 'image/png'
    });
  }

}