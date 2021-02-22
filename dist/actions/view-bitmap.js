export class ViewBitmapAction {
  async execute({
    canvas
  }) {
    if (canvas) {
      await canvas.requestFullscreen();
    }
  }

}