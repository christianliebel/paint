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
import {DRAWING_CONTEXT} from "../data/drawing-context.js";
import {updateContext} from "../helpers/update-context.js";
export let ColorPicker = class extends LitElement {
  constructor() {
    super();
    this.drawingContext = DRAWING_CONTEXT;
    this.color = "";
    this.addEventListener("click", () => {
      this.dispatchColorEvent("primary");
    });
    this.addEventListener("contextmenu", (event) => {
      this.dispatchColorEvent("secondary");
      event.preventDefault();
    });
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
};
__decorate([
  property()
], ColorPicker.prototype, "drawingContext", 2);
__decorate([
  property()
], ColorPicker.prototype, "color", 2);
ColorPicker = __decorate([
  customElement("paint-color-picker")
], ColorPicker);
