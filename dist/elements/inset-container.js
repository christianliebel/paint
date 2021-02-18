import { css, html, LitElement } from '../../_snowpack/pkg/lit-element.js';

class InsetContainer extends LitElement {
  // TODO: InsetContainer should not define align-items, maybe not even display: flex.
  // TODO: button-face pixels bottom left, top right via before/after
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        border: 1px solid var(--button-dark);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);

        display: flex;
        align-items: flex-end;
      }
    `;
  }

  render() {
    return html`<slot></slot>`;
  }

}

customElements.define('paint-inset-container', InsetContainer);