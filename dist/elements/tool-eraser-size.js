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
export let ToolEraserSize = class extends LitElement {
  constructor() {
    super(...arguments);
    this.drawingContext = DRAWING_CONTEXT;
    this.eraserSizes = [4, 6, 8, 10];
  }
  static get styles() {
    return css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px;
      }

      li {
        margin-bottom: 2px;
      }

      li .selection-wrapper {
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
      }

      li.selected .selection-wrapper {
        background-color: var(--highlight);
      }

      li div.size {
        background-color: var(--button-text);
      }

      li.selected div.size {
        background-color: var(--highlight-text);
      }
    `;
  }
  render() {
    return html`
      <ul>
        ${this.eraserSizes.map((size) => html`
            <li
              class="${size === this.drawingContext.eraserSize ? "selected" : ""}"
              @click="${() => this.selectSize(size)}"
            >
              <div class="selection-wrapper">
                <div class="size" style="${this.getStyle(size)}"></div>
              </div>
            </li>
          `)}
      </ul>
    `;
  }
  getStyle(size) {
    return `width: ${size}px; height: ${size}px`;
  }
  selectSize(size) {
    this.drawingContext.eraserSize = size;
    updateContext(this);
  }
};
__decorate([
  property()
], ToolEraserSize.prototype, "drawingContext", 2);
ToolEraserSize = __decorate([
  customElement("paint-tool-eraser-size")
], ToolEraserSize);
