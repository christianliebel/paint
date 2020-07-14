export function clearSelection({ selection, context, secondaryColor }) {
  // TODO: Doesn't work reliably, too many contexts…
  context.fillStyle = secondaryColor;
  const { x, y, width, height } = selection;
  context.fillRect(x, y, width, height);
}
