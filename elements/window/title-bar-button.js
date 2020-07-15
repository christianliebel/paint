import { css, html, LitElement } from '../../web_modules/lit-element.js';

export class TitleBarButton extends LitElement {
  static get properties() {
    return {
      help: { type: Boolean },
      close: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        width: 16px;
        height: 14px;
        border: 1px solid var(--highlight-text);
        border-bottom-color: var(--button-text);
        border-right-color: var(--button-text);
        background-color: var(--button-face);
      }

      div.wrapper {
        box-sizing: border-box;
        height: 12px;
        border: 1px solid transparent;
        border-bottom-color: var(--canvas);
        border-right-color: var(--canvas);
        display: flex;
        justify-content: center;
      }

      :host(:active) {
        border: 1px solid var(--button-text);
        border-bottom-color: var(--highlight-text);
        border-right-color: var(--highlight-text);
      }

      :host(:active) div.wrapper {
        border: 1px solid var(--canvas);
        border-bottom-color: transparent;
        border-right-color: transparent;
      }

      :host(:active) svg {
        margin: 1px 0 0 1px;
      }

      path {
        fill: var(--button-text);
      }
    `;
  }

  constructor() {
    super();

    this.addEventListener('pointerdown', (evt) => {
      evt.stopPropagation();
    });
  }

  render() {
    return html` <div class="wrapper">${this.getButton()}</div> `;
  }

  getButton() {
    if (this.help) {
      return html`
        <svg viewBox="0 0 6 9" width="6" height="9">
          <path d="M0,1h1V0h4v1h1v2H5v1H4v2H2V4h1V3h1V1H2v2H0V1z" />
          <path d="M2,7h2v2H2V7z" />
        </svg>
      `;
    }

    if (this.close) {
      return html`
        <svg viewBox="0 0 8 9" width="8" height="9">
          <path
            d="M0,1h2v1h1v1h2V2h1V1h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V7H5V6H3v1H2v1H0V7h1V6h1V5h1V4H2V3H1V2H0V1z"
          />
        </svg>
      `;
    }
  }
}

customElements.define('paint-window-title-bar-button', TitleBarButton);
