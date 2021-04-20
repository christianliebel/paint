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
import {
  css,
  customElement,
  html,
  LitElement,
  property
} from "../../_snowpack/pkg/lit-element.js";
import {DRAWING_CONTEXT} from "../data/drawing-context.js";
import {evaluateTextToolbarVisibility} from "../helpers/evaluate-text-toolbar-visibility.js";
import {updateContext} from "../helpers/update-context.js";
import {
  AIRBRUSH,
  BRUSH,
  CURVE,
  ERASER,
  FREE_FORM_SELECT,
  LINE,
  MAGNIFIER,
  PENCIL,
  PICK_COLOR,
  POLYGON,
  RECTANGLE,
  ROUNDED_RECTANGLE,
  SELECT,
  TEXT,
  tools
} from "../tools/all.js";
export let ToolBox = class extends LitElement {
  constructor() {
    super(...arguments);
    this.drawingContext = DRAWING_CONTEXT;
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        justify-content: center;
      }

      paint-inset-container {
        width: 41px;
        height: 66px;
        margin-top: 3px;
        display: block;
      }

      paint-inset-container * {
        height: 100%;
      }

      paint-tool.unavailable {
        filter: saturate(0%) opacity(50%);
        pointer-events: none;
      }
    `;
  }
  render() {
    return html`
      ${tools.map((tool) => html` <paint-tool
          .tool=${tool}
          title="${tool.tooltip}"
          class="${this.drawingContext?.tool === tool ? "active" : ""} ${tool.instance ? "" : "unavailable"}"
          @pointerup="${() => this.selectTool(tool)}"
        ></paint-tool>`)}
      <paint-inset-container>
        ${this.getToolHtml(this.drawingContext.tool)}
      </paint-inset-container>
    `;
  }
  selectTool(tool) {
    this.drawingContext.text.active = false;
    evaluateTextToolbarVisibility(this.drawingContext);
    if (this.isEditingTool(this.drawingContext.tool)) {
      this.drawingContext.previousEditingTool = this.drawingContext.tool;
    }
    this.drawingContext.tool = tool;
    updateContext(this);
  }
  isEditingTool(tool) {
    return [
      AIRBRUSH,
      BRUSH,
      CURVE,
      ERASER,
      LINE,
      PENCIL,
      POLYGON,
      RECTANGLE,
      ROUNDED_RECTANGLE
    ].includes(tool);
  }
  getToolHtml(tool) {
    if (PICK_COLOR === tool) {
      return html`<paint-tool-color-preview
        .drawingContext="${this.drawingContext}"
      ></paint-tool-color-preview>`;
    }
    if ([LINE, CURVE].includes(tool)) {
      return html`<paint-tool-line-width
        .drawingContext="${this.drawingContext}"
      ></paint-tool-line-width>`;
    }
    if ([RECTANGLE, POLYGON, ROUNDED_RECTANGLE].includes(tool)) {
      return html` <paint-tool-fill-style
        .drawingContext="${this.drawingContext}"
      ></paint-tool-fill-style>`;
    }
    if ([FREE_FORM_SELECT, SELECT, TEXT].includes(tool)) {
      return html` <paint-tool-draw-opaque
        .drawingContext="${this.drawingContext}"
      ></paint-tool-draw-opaque>`;
    }
    if (ERASER === tool) {
      return html` <paint-tool-eraser-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-eraser-size>`;
    }
    if (BRUSH === tool) {
      return html` <paint-tool-brush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-brush>`;
    }
    if (AIRBRUSH === tool) {
      return html`
          <paint-tool-airbrush
                  .drawingContext="${this.drawingContext}"
          ></paint-tool-airbrush>`;
    }
    if (MAGNIFIER === tool) {
      return html`TBD`;
    }
    return "";
  }
};
__decorate([
  property()
], ToolBox.prototype, "drawingContext", 2);
__decorate([
  property({attribute: false})
], ToolBox.prototype, "tool", 2);
ToolBox = __decorate([
  customElement("paint-tool-box")
], ToolBox);
