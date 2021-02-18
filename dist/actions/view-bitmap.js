export class ViewBitmapAction {
  async execute({
    canvas
  }) {
    await canvas.requestFullscreen();
  }

}