export class ClearImageAction {
  canExecute({
    selection
  }) {
    return !selection;
  }

  execute({
    canvas,
    context,
    colors
  }) {
    if (canvas && context) {
      context.fillStyle = colors.secondary;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

}