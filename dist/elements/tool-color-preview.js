import { css, LitElement } from '../../_snowpack/pkg/lit-element.js';
export class ToolColorPreview extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      drawingContext: {
        type: Object
      }
    };
  }

  render() {
    this.style.backgroundColor = this.drawingContext.previewColor;
  }

}
customElements.define('paint-tool-color-preview', ToolColorPreview);