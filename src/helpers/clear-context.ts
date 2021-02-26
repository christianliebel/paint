export function clearContext(context: CanvasRenderingContext2D | null) {
  context?.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
