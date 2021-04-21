export function evaluateTextToolbarVisibility(drawingContext) {
  drawingContext.view.textToolbar = drawingContext.text.showToolbar && drawingContext.text.active;
}