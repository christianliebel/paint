export function drawCircle(x, y, lineWidth, context) {
  if (lineWidth === 1) {
    context.fillRect(x, y, 1, 1);
  }
  if (lineWidth === 2) {
    context.fillRect(x - 1, y - 1, 2, 2);
  }
  if (lineWidth === 3) {
    context.fillRect(x - 1, y, 3, 1);
    context.fillRect(x, y - 1, 1, 3);
  }
  if (lineWidth === 4) {
    context.fillRect(x - 1, y - 2, 2, 4);
    context.fillRect(x - 2, y - 1, 4, 2);
  }
  if (lineWidth === 5) {
    context.fillRect(x - 1, y - 2, 3, 5);
    context.fillRect(x - 2, y - 1, 5, 3);
  }
  if (lineWidth === 7) {
    context.fillRect(x - 1, y - 3, 3, 7);
    context.fillRect(x - 3, y - 1, 7, 3);
    context.fillRect(x - 2, y - 2, 5, 5);
  }
}
