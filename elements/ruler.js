import { css, html, LitElement } from '../web_modules/lit-element.js';

class Ruler extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border-top: 1px solid var(--button-dark);
        border-bottom: 1px solid var(--button-light);
      }
    `;
  }

  render() {
    return html``;
  }
}

customElements.define('paint-ruler', Ruler);
