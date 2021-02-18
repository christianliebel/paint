import { css, html, LitElement } from 'lit-element';
import { updateContext } from '../helpers/update-context';

class ColorPicker extends LitElement {
  static get properties() {
    return {
      drawingContext: { type: Object },
      color: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        border: 1px solid var(--button-light);
        border-top-color: var(--button-dark);
        border-left-color: var(--button-dark);
      }

      div.frame {
        box-sizing: border-box;
        border: 1px solid var(--button-face);
        border-top-color: var(--button-darker);
        border-left-color: var(--button-darker);
        height: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.addEventListener('click', () => {
      this.dispatchColorEvent('primary');
    });
    this.addEventListener('contextmenu', (event) => {
      this.dispatchColorEvent('secondary');
      event.preventDefault();
    });
  }

  dispatchColorEvent(type) {
    this.drawingContext.colors[type] = this.color;
    updateContext(this);
  }

  render() {
    return html`<div
      class="frame"
      style="background-color: ${this.color};"
    ></div>`;
  }
}

customElements.define('paint-color-picker', ColorPicker);
