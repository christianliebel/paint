export class ClearImageAction {
  canExecute({ selection }) {
    return !selection;
  }

  execute({ canvas, context, colors }) {
    context.fillStyle = colors.secondary;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}
