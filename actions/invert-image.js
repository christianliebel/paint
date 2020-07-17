export function invertImage({ canvas, context }) {
  const previousCompositeOperation = context.globalCompositeOperation;
  context.globalCompositeOperation = 'difference';
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = previousCompositeOperation;
}
