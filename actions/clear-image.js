// TODO: When is it disabled?
export function clearImage({ canvas, context, secondaryColor }) {
  context.fillStyle = secondaryColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}
