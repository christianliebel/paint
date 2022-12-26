export class ClearSelectionAction {
  canExecute({
    selection
  }) {
    return !!selection;
  }
  execute({
    selection,
    context,
    colors
  }) {
    if (selection && context) {
      context.fillStyle = colors.secondary;
      const {
        x,
        y,
        width,
        height
      } = selection;
      context.fillRect(x, y, width, height);
    }
  }
}