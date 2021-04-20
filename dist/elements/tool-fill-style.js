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
export let ToolFillStyle = class extends LitElement {
  constructor() {
    super(...arguments);
    this.drawingContext = DRAWING_CONTEXT;
    this.fillStyles = [
      {
        stroke: true,
        fill: false
      },
      {
        stroke: true,
        fill: true
      },
      {
        stroke: false,
        fill: true
      }
    ];
  }
  static get styles() {
    return css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 3px 2px;
      }

      li {
        height: 18px;
        width: 35px;
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li.selected {
        background-color: var(--highlight);
      }

      li .item {
        width: 27px;
        height: 10px;
        box-sizing: border-box;
      }

      li .item.stroke {
        border: 1px solid var(--button-text);
      }

      li.selected .item.stroke {
        border-color: var(--highlight-text);
      }

      li .item.fill {
        background-color: var(--button-dark);
      }
    `;
  }
  render() {
    return html`
      <ul>
        ${this.fillStyles.map((fillStyle) => html`
            <li
              class="${this.isSelected(fillStyle) ? "selected" : ""}"
              @click="${() => this.onSelect(fillStyle)}"
            >
              <div class="item ${this.getClasses(fillStyle)}"></div>
            </li>
          `)}
      </ul>
    `;
  }
  isSelected({stroke, fill}) {
    return stroke === this.drawingContext.fillStyle.stroke && fill === this.drawingContext.fillStyle.fill;
  }
  getClasses({stroke, fill}) {
    return [...stroke ? ["stroke"] : [], ...fill ? ["fill"] : []].join(" ");
  }
  onSelect(fillStyle) {
    this.drawingContext.fillStyle = fillStyle;
    updateContext(this);
  }
};
__decorate([
  property()
], ToolFillStyle.prototype, "drawingContext", 2);
ToolFillStyle = __decorate([
  customElement("paint-tool-fill-style")
], ToolFillStyle);
