import type { DrawingContext } from '../models/drawing-context';

export function clearCanvas({
  canvas,
  context,
  colors,
  history,
}: DrawingContext): void {
  if (canvas && context && history) {
    context.fillStyle = colors.secondary;
    context.fillRect(0, 0, canvas.width, canvas.height);

    history.commit();
  }
}
