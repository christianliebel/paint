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
import {css, customElement, html, LitElement, property} from "../../_snowpack/pkg/lit-element.js";
export let Tool = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        border: 1px solid var(--button-darker);
        border-top: 1px solid var(--button-light);
        border-left: 1px solid var(--button-light);
        background-color: var(--button-face);
        image-rendering: pixelated;
      }

      div.wrapper {
        height: 100%;
        border: 1px solid var(--button-dark);
        border-top: 1px solid var(--button-face);
        border-left: 1px solid var(--button-face);
        box-sizing: border-box;
      }

      div.tool {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url('assets/tools-light.png');
        background-repeat: no-repeat;
        margin: 2px;
      }

      @media (prefers-color-scheme: dark) {
        div.tool {
          background-image: url('assets/tools-dark.png');
        }
      }

      :host(.active),
      :host(:active) {
        border: 1px solid var(--button-light);
        border-top: 1px solid var(--button-darker);
        border-left: 1px solid var(--button-darker);
        background-image: var(--selected-background);
      }

      :host(.active) div.wrapper,
      :host(:active) div.wrapper {
        border: 1px solid var(--button-face);
        border-top: 1px solid var(--button-dark);
        border-left: 1px solid var(--button-dark);
      }

      :host(:active) div.wrapper {
        background-color: var(--button-face);
      }

      :host(.active) div.tool {
        margin: 3px;
      }

      :host(:active) div.tool {
        margin: 4px;
      }
    `;
  }
  constructor() {
    super();
    this.addEventListener("pointerenter", () => this.dispatchEvent(new CustomEvent("set-help-text", {
      detail: this.tool?.helpText ?? "",
      bubbles: true,
      composed: true
    })));
    this.addEventListener("pointerleave", () => this.dispatchEvent(new CustomEvent("set-help-text", {bubbles: true, composed: true})));
  }
  render() {
    return html`
      <div class="wrapper">
        <div
          class="tool"
          style="background-position: ${this.tool?.imagePosition}"
        ></div>
      </div>
    `;
  }
};
__decorate([
  property()
], Tool.prototype, "tool", 2);
Tool = __decorate([
  customElement("paint-tool")
], Tool);
