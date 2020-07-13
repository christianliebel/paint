import { copy } from './copy.js';

export async function cut(drawingContext) {
  await copy(drawingContext);
  const { context, selection: { x, y, width, height } } = drawingContext;
  context.fillStyle = 'green'; //secondaryColor;
  context.fillRect(x + 0.5, y + 0.5, width, height);
}
