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
export let ColorBox = class extends LitElement {
  constructor() {
    super(...arguments);
    this.drawingContext = DRAWING_CONTEXT;
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
  render() {
    return html`
      <paint-color-switcher
        primaryColor="${this.drawingContext.colors.primary}"
        secondaryColor="${this.drawingContext.colors.secondary}"
      >
      </paint-color-switcher>
      ${this.drawingContext.palette.map((color) => html` <paint-color-picker
            color="${color}"
            .drawingContext="${this.drawingContext}"
          >
          </paint-color-picker>`)}
    `;
  }
};
__decorate([
  property()
], ColorBox.prototype, "drawingContext", 2);
ColorBox = __decorate([
  customElement("paint-color-box")
], ColorBox);
