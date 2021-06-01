export class InvertColorsAction {
  execute({
    canvas,
    context,
    selection,
    history
  }) {
    if (context && canvas) {
      const previousCompositeOperation = context.globalCompositeOperation;
      context.globalCompositeOperation = 'difference';
      context.fillStyle = 'white';

      if (selection) {
        context.fillRect(selection.x, selection.y, selection.width, selection.height);
      } else {
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      context.globalCompositeOperation = previousCompositeOperation;
      history?.commit();
    }
  }

}