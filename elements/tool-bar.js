import { css, html, LitElement } from '../web_modules/lit-element.js';

class ToolBar extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: var(--button-face);
        padding-right: 1px;
      }
    `;
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('paint-tool-bar', ToolBar);
