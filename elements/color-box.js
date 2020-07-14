import { css, html, LitElement } from '../web_modules/lit-element.js';

class ColorBox extends LitElement {
  static get properties() {
    return {
      drawingContext: { type: Object },

      palette: { attribute: false },
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
    this.palette = [
      '#000000', // black
      '#808080', // gray
      '#800000', // maroon
      '#808000', // olive
      '#008000', // green
      '#008080', // teal
      '#000080', // navy
      '#800080', // purple
      '#808040',
      '#004040',
      '#0080FF',
      '#004080',
      '#4000FF',
      '#804000',
      '#FFFFFF', // white
      '#C0C0C0', // silver
      '#FF0000', // red
      '#FFFF00', // yellow
      '#00FF00', // lime
      '#00FFFF', // aqua
      '#0000FF', // blue
      '#FF00FF', // fuchsia
      '#FFFF80',
      '#00FF80',
      '#80FFFF',
      '#8080FF',
      '#FF0080',
      '#FF8040',
    ];
  }

  render() {
    return html`
      <paint-color-switcher
        primaryColor="${this.drawingContext.colors.primary}"
        secondaryColor="${this.drawingContext.colors.secondary}"
      >
      </paint-color-switcher>
      ${this.palette.map(
      (color) =>
        html`
            <paint-color-picker
              color="${color}"
              .drawingContext="${this.drawingContext}"
            >
            </paint-color-picker>`,
    )}
    `;
  }
}

customElements.define('paint-color-box', ColorBox);
