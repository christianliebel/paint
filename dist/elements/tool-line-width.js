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
export let ToolLineWidth = class extends LitElement {
  constructor() {
    super(...arguments);
    this.drawingContext = DRAWING_CONTEXT;
    this.lineWidths = [1, 2, 3, 4, 5];
  }
  static get styles() {
    return css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px 2px;
      }

      li {
        margin-top: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10px;
        box-sizing: border-box;
      }

      li:nth-child(odd) {
        padding-bottom: 1px;
      }

      li div {
        width: 27px;
        background-color: var(--button-text);
      }

      li.selected {
        background-color: var(--highlight);
      }

      li.selected div {
        background-color: var(--highlight-text);
      }
    `;
  }
  render() {
    return html`
      <ul>
        ${this.lineWidths.map((lineWidth) => html` <li
            @click="${() => this.onUpdateWidth(lineWidth)}"
            class="${this.drawingContext.lineWidth === lineWidth ? "selected" : ""}"
          >
            <div style="height: ${lineWidth}px"></div>
          </li>`)}
      </ul>
    `;
  }
  onUpdateWidth(lineWidth) {
    this.drawingContext.lineWidth = lineWidth;
    updateContext(this);
  }
};
__decorate([
  property()
], ToolLineWidth.prototype, "drawingContext", 2);
ToolLineWidth = __decorate([
  customElement("paint-tool-line-width")
], ToolLineWidth);
