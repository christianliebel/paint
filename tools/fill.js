import FloodFill from '../web_modules/q-floodfill.js';

export class FillTool {
  onPointerDown({
    event,
    canvas,
    context,
    x,
    y,
    primaryColor,
    secondaryColor,
  }) {
    const floodFill = new FloodFill(
      context.getImageData(0, 0, canvas.width, canvas.height),
    );
    floodFill.fill(event.button === 2 ? secondaryColor : primaryColor, x, y, 0);
    context.putImageData(floodFill.imageData, 0, 0);
  }
}
