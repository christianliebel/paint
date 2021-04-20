export function clearContext(context) {
  context?.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
