import { css, html, LitElement } from '../web_modules/lit-element.js';

class ColorSwitcher extends LitElement {
  static get properties() {
    return {
      primaryColor: { type: String },
      secondaryColor: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        border: 1px solid var(--highlight-text);
        border-top-color: var(--canvas);
        border-left-color: var(--canvas);
        background: var(--selected-background);
        image-rendering: pixelated;
      }

      div.frame {
        box-sizing: border-box;
        border: 1px solid var(--button-face);
        border-top-color: var(--button-text);
        border-left-color: var(--button-text);
        height: 100%;
        padding: 3px 2px;
        position: relative;
      }

      div.color {
        box-sizing: border-box;
        width: 15px;
        height: 15px;
        border: 1px solid var(--canvas);
        border-top-color: var(--highlight-text);
        border-left-color: var(--highlight-text);
        position: absolute;
        z-index: 2;
      }

      div.color.secondary {
        z-index: 1;
        left: 9px;
        top: 10px;
      }

      div.color > div {
        box-sizing: border-box;
        border: 1px solid var(--button-face);
        height: 100%;
      }
    `;
  }

  render() {
    return html`
      <div class="frame">
        <div class="color primary">
          <div style="background-color: ${this.primaryColor}"></div>
        </div>
        <div class="color secondary">
          <div style="background-color: ${this.secondaryColor}"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('paint-color-switcher', ColorSwitcher);
