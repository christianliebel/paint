// TODO: When is it disabled?
export function clearImage({ canvas, context, colors }) {
  context.fillStyle = colors.secondary;
  context.fillRect(0, 0, canvas.width, canvas.height);
}
