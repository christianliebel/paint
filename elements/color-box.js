import { css, html, LitElement } from '../web_modules/lit-element.js';

class ColorBox extends LitElement {
  static get properties() {
    return {
      drawingContext: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        box-sizing: border-box;
        width: 256px;
        height: 33px;
        grid-template-columns: 15px repeat(15, 16px);
        grid-template-rows: 16px 16px;
      }

      paint-color-switcher {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <paint-color-switcher
        primaryColor="${this.drawingContext.colors.primary}"
        secondaryColor="${this.drawingContext.colors.secondary}"
      >
      </paint-color-switcher>
      ${this.drawingContext.palette.map(
        (color) =>
          html` <paint-color-picker
            color="${color}"
            .drawingContext="${this.drawingContext}"
          >
          </paint-color-picker>`,
      )}
    `;
  }
}

customElements.define('paint-color-box', ColorBox);
