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
export let ToolBrush = class extends LitElement {
  constructor() {
    super(...arguments);
    this.drawingContext = DRAWING_CONTEXT;
    this.brushConfigs = [
      {
        type: "circle",
        sizes: [
          {
            value: 7,
            path: "M3,0h3v1h1v1h1v3H7v1H6v1H3V6H2V5H1V2h1V1h1z"
          },
          {
            value: 4,
            path: "M3,2h2v1h1v2H5v1H3V5H2V3h1z"
          },
          {
            value: 1,
            path: "M4,3h1v1h-1z"
          }
        ]
      },
      {
        type: "square",
        sizes: [
          {
            value: 8,
            path: "M0,0H8V8H0z"
          },
          {
            value: 5,
            path: "M2,1H7V6H2z"
          },
          {
            value: 2,
            path: "M3,3H5V5H3z"
          }
        ]
      },
      {
        type: "forward-diagonal",
        sizes: [
          {
            value: 8,
            path: "M8,0H7v1H6v1H5v1H4v1H3v1H2v1H1v1H0v1h1V7h1V6h1V5h1V4h1V3h1V2h1V1h1V0z"
          },
          {
            value: 5,
            path: "M7,1H6v1H5v1H4v1H3v1H2v1h1V5h1V4h1V3h1V2h1z"
          },
          {
            value: 2,
            path: "M3,5H4V4H5V3H4V4H3z"
          }
        ]
      },
      {
        type: "backward-diagonal",
        sizes: [
          {
            value: 8,
            path: "M0,0h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H7V7H6V6H5V5H4V4H3V3H2V2H1V1H0V0z"
          },
          {
            value: 5,
            path: "M2,1h1v1h1v1h1v1h1v1h1v1H6V5H5V4H4V3H3V2H2z"
          },
          {
            value: 2,
            path: "M3,3h1v1h1v1H4V4H3z"
          }
        ]
      }
    ];
  }
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: repeat(3, 12px);
        grid-template-rows: repeat(4, 12px);
        grid-gap: 4px 1px;
        padding: 2px 0;
        position: relative;
      }

      .selection {
        width: 5px;
        height: 12px;
        margin-left: 4px;
      }

      div.selected {
        color: var(--highlight-text);
      }

      svg {
        margin: 2px;
        width: 8px;
        height: 8px;
        position: absolute;
      }

      path {
        fill: currentColor;
      }

      .selected .selection {
        background-color: var(--highlight);
      }
    `;
  }
  render() {
    return html`${this.brushConfigs.map(({type, sizes}) => sizes.map(({value: size, path}) => html`<div
            @click=${() => this.onSelect(type, size)}
            class="${this.drawingContext.brush.size === size && this.drawingContext.brush.type === type ? "selected" : ""}"
          ><svg viewBox="0 0 8 8"><path d="${path}"></svg>
          <div class="selection"></div>
        </div>`))}`;
  }
  onSelect(type, size) {
    this.drawingContext.brush.type = type;
    this.drawingContext.brush.size = size;
    updateContext(this);
  }
};
__decorate([
  property()
], ToolBrush.prototype, "drawingContext", 2);
ToolBrush = __decorate([
  customElement("paint-tool-brush")
], ToolBrush);
