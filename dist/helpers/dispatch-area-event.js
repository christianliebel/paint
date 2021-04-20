export function dispatchAreaEvent(startPosition, endPosition, element) {
  element?.dispatchEvent(new CustomEvent("area", {
    detail: {
      width: Math.abs(endPosition.x - startPosition.x),
      height: Math.abs(endPosition.y - startPosition.y)
    },
    bubbles: true,
    composed: true
  }));
}
