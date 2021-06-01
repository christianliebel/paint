export function clearCanvas({
  canvas,
  context,
  colors,
  history
}) {
  if (canvas && context && history) {
    context.fillStyle = colors.secondary;
    context.fillRect(0, 0, canvas.width, canvas.height);
    history.commit();
  }
}