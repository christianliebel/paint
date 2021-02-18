import FloodFill from '../../_snowpack/pkg/q-floodfill.js';
export class FillTool {
  onPointerDown(x, y, {
    canvas,
    context
  }, color) {
    const floodFill = new FloodFill.default(context.getImageData(0, 0, canvas.width, canvas.height));
    floodFill.fill(color.stroke.value, x, y, 0);
    context.putImageData(floodFill.imageData, 0, 0);
  }

}