import {clearContext} from "./clear-context.js";
export function drawAreaRectangle(startPosition, endPosition, previewContext) {
  clearContext(previewContext);
  previewContext?.setLineDash([4]);
  previewContext?.strokeRect(startPosition.x + 0.5, startPosition.y + 0.5, endPosition.x - startPosition.x, endPosition.y - startPosition.y);
  previewContext?.setLineDash([]);
}
