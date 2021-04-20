export function updateContext(element) {
  element?.dispatchEvent(new CustomEvent("drawing-context-changed", {
    detail: {...element.drawingContext},
    bubbles: true,
    composed: true
  }));
}
