import { fileOpen } from '../../../_snowpack/pkg/browser-fs-access.js';
import { showMessageBox } from '../../helpers/message-box.js';
import { updateContext } from '../../helpers/update-context.js';
export class GetColorsAction {
  async execute(drawingContext) {
    try {
      const file = await fileOpen({
        extensions: ['.pal'],
        description: 'Palette'
      });
      await this.updateContextFromFile(file, drawingContext);
    } catch {// silently catch any errors
    }
  }

  async updateContextFromFile(file, drawingContext) {
    try {
      const buffer = await file.arrayBuffer();
      this.readPalette(buffer).forEach((color, index) => drawingContext.palette[index] = color);
      updateContext(drawingContext.element);
    } catch {
      await showMessageBox(`${file.name}\nPaint cannot open this file.\nThis file is not in the correct format.`, 'warning', 'Paint');
    }
  }

  readPalette(buffer) {
    const dataView = new DataView(buffer);
    const textDecoder = new TextDecoder(); // RIFF header

    const header = textDecoder.decode(buffer.slice(0, 4));

    if (header !== 'RIFF') {
      throw new Error('Non-RIFF palettes are not supported.');
    } // PAL form type


    const formType = textDecoder.decode(buffer.slice(8, 12));

    if (formType !== 'PAL ') {
      throw new Error('Only PAL form types are supported.');
    } // Data chunk


    const chunkType = textDecoder.decode(buffer.slice(12, 16));

    if (chunkType !== 'data') {
      throw new Error('Expected a data chunk.');
    } // LOGPALETTE


    const palette = [];
    const count = dataView.getUint16(22, true);

    for (let i = 0; i < count; i++) {
      const offset = 24 + i * 4; // PALETTEENTRY

      const r = dataView.getUint8(offset); // peRed

      const g = dataView.getUint8(offset + 1); // peGreen

      const b = dataView.getUint8(offset + 2); // peBlue
      // peFlags skipped

      palette.push(`rgb(${r} ${g} ${b})`);
    }

    return palette.slice(0, 26);
  }

}