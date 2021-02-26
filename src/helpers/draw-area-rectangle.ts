import type { Point } from '../models/point';
import { clearContext } from './clear-context';

export function drawAreaRectangle(
  startPosition: Point,
  endPosition: Point,
  previewContext: CanvasRenderingContext2D | null,
) {
  // TODO: Scope to canvas
  clearContext(previewContext);
  previewContext?.setLineDash([4]);
  previewContext?.strokeRect(
    startPosition.x + 0.5,
    startPosition.y + 0.5,
    endPosition.x - startPosition.x,
    endPosition.y - startPosition.y,
  );
  previewContext?.setLineDash([]);
}
