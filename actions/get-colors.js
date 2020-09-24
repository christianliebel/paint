import { fileOpen } from '../web_modules/browser-nativefs.js';
import { updateContext } from '../helpers/update-context.js';

export class GetColorsAction {
  async execute(drawingContext) {
    const file = await fileOpen({ extensions: ['.pal'] });
    const buffer = await file.arrayBuffer();
    const dataView = new DataView(buffer);
    const textDecoder = new TextDecoder();

    // RIFF header
    const header = textDecoder.decode(buffer.slice(0, 4));
    if (header !== 'RIFF') {
      alert('Non-RIFF palettes are not supported.');
      return;
    }

    // PAL form type
    const formType = textDecoder.decode(buffer.slice(8, 12));
    if (formType !== 'PAL ') {
      alert('Only PAL form types are supported.');
      return;
    }

    // Data chunk
    const chunkType = textDecoder.decode(buffer.slice(12, 16));
    if (chunkType !== 'data') {
      alert('Expected a data chunk.');
      return;
    }

    // LOGPALETTE
    const palette = [];
    const count = dataView.getUint16(22, true);
    for (let i = 0; i < count; i++) {
      const offset = 24 + i * 4;

      // PALETTEENTRY
      const r = dataView.getUint8(offset); // peRed
      const g = dataView.getUint8(offset + 1); // peGreen
      const b = dataView.getUint8(offset + 2); // peBlue
      // peFlags skipped

      palette.push(`rgb(${r} ${g} ${b})`);
    }

    palette
      .slice(0, 26)
      .forEach((color, index) => (drawingContext.palette[index] = color));
    updateContext(drawingContext.element);
  }
}
