import {fileSave} from "../../_snowpack/pkg/browser-fs-access.js";
export class SaveColorsAction {
  async execute({palette}) {
    const count = palette.length;
    const chunkSize = 4 + count * 4;
    const size = 24 + count * 4;
    const buffer = new ArrayBuffer(size);
    const uint8View = new Uint8Array(buffer);
    const dataView = new DataView(buffer);
    const textEncoder = new TextEncoder();
    uint8View.set(textEncoder.encode("RIFF"));
    dataView.setUint32(4, size - 8, true);
    uint8View.set(textEncoder.encode("PAL "), 8);
    uint8View.set(textEncoder.encode("data"), 12);
    dataView.setUint32(16, chunkSize, true);
    dataView.setUint16(20, 768, true);
    dataView.setUint16(22, count, true);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    for (let i = 0; i < count; i++) {
      context.fillStyle = palette[i];
      context.fillRect(0, 0, 1, 1);
      const [r, g, b] = context.getImageData(0, 0, 1, 1).data;
      const offset = 24 + i * 4;
      dataView.setUint8(offset, r);
      dataView.setUint8(offset + 1, g);
      dataView.setUint8(offset + 2, b);
      dataView.setUint8(offset + 3, 0);
    }
    const blob = new Blob([buffer], {type: "application/octet-stream"});
    await fileSave(blob, {
      fileName: "untitled.pal",
      extensions: [".pal"],
      description: "Palette"
    });
  }
}
