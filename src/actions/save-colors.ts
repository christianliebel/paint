import { fileSave } from 'browser-fs-access';
import type { Action } from '../models/action';
import type { DrawingContext } from '../models/drawing-context';

export class SaveColorsAction implements Action {
  async execute({ palette }: DrawingContext): Promise<void> {
    const count = palette.length;
    const chunkSize = 4 + count * 4;
    const size = 24 + count * 4;
    const buffer = new ArrayBuffer(size);
    const uint8View = new Uint8Array(buffer);
    const dataView = new DataView(buffer);
    const textEncoder = new TextEncoder();

    // RIFF header
    uint8View.set(textEncoder.encode('RIFF'));
    dataView.setUint32(4, size - 8, true);

    // PAL form type
    uint8View.set(textEncoder.encode('PAL '), 8);

    // Data chunk
    uint8View.set(textEncoder.encode('data'), 12); // ckID
    dataView.setUint32(16, chunkSize, true); // ckSize

    // LOGPALETTE
    dataView.setUint16(20, 0x300, true); // palVersion
    dataView.setUint16(22, count, true); // palNumEntries

    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    for (let i = 0; i < count; i++) {
      context.fillStyle = palette[i];
      context.fillRect(0, 0, 1, 1);
      const [r, g, b] = context.getImageData(0, 0, 1, 1).data;

      const offset = 24 + i * 4;
      // PALETTEENTRY
      dataView.setUint8(offset, r); // peRed
      dataView.setUint8(offset + 1, g); // peGreen
      dataView.setUint8(offset + 2, b); // peBlue
      dataView.setUint8(offset + 3, 0); // peFlags
    }

    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    await fileSave(blob, {
      fileName: 'untitled.pal',
      extensions: ['.pal'],
      description: 'Palette',
    });
  }
}
