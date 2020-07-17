export class PickTool {
  onMouseDown(args) {
    this.onMouseMove(args);
  }

  onMouseMove({ x, y, context, element }) {
    element.dispatchEvent(
      new CustomEvent(`preview-color`, {
        detail: this.pickColor(x, y, context),
        bubbles: true,
        composed: true,
      }),
    );
  }

  onMouseUp({ event, x, y, context, element }) {
    element.dispatchEvent(
      new CustomEvent(`preview-color`, { bubbles: true, composed: true }),
    );
    element.dispatchEvent(
      new CustomEvent(
        `${event.button === 2 ? 'secondary' : 'primary'}-color-selected`,
        {
          detail: this.pickColor(x, y, context),
          bubbles: true,
          composed: true,
        },
      ),
    );
  }

  pickColor(x, y, context) {
    const [r, g, b] = context.getImageData(x, y, 1, 1).data;
    return `rgb(${r} ${g} ${b})`;
  }
}
