var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {css, customElement, html, LitElement, property} from "../../../_snowpack/pkg/lit-element.js";
export let TitleBarButton = class extends LitElement {
  constructor() {
    super();
    this.help = false;
    this.close = false;
    this.addEventListener("pointerdown", (evt) => {
      evt.stopPropagation();
    });
  }
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        width: 16px;
        height: 14px;
        border: 1px solid var(--button-light);
        border-bottom-color: var(--button-darker);
        border-right-color: var(--button-darker);
        background-color: var(--button-face);
        color: var(--button-text);
      }

      div.wrapper {
        box-sizing: border-box;
        height: 12px;
        border: 1px solid transparent;
        border-bottom-color: var(--button-dark);
        border-right-color: var(--button-dark);
        display: flex;
        justify-content: center;
      }

      :host(:active) {
        border: 1px solid var(--button-darker);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);
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
        fill: currentColor;
      }
    `;
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
};
__decorate([
  property({type: Boolean})
], TitleBarButton.prototype, "help", 2);
__decorate([
  property({type: Boolean})
], TitleBarButton.prototype, "close", 2);
TitleBarButton = __decorate([
  customElement("paint-window-title-bar-button")
], TitleBarButton);
