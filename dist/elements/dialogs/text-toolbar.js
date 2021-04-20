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
  internalProperty,
  LitElement,
  property
} from "../../../_snowpack/pkg/lit-element.js";
import {DRAWING_CONTEXT} from "../../data/drawing-context.js";
import {FONT_SIZES} from "../../data/font-sizes.js";
import {evaluateTextToolbarVisibility} from "../../helpers/evaluate-text-toolbar-visibility.js";
import {getLocalFonts} from "../../helpers/get-local-fonts.js";
import {updateContext} from "../../helpers/update-context.js";
export let TextToolbarDialog = class extends LitElement {
  constructor() {
    super(...arguments);
    this.drawingContext = DRAWING_CONTEXT;
    this.fonts = [];
    this.fontSizes = FONT_SIZES;
  }
  static get styles() {
    return css`
      paint-window {
        position: absolute;
        top: 0;
      }

      .content {
        display: flex;
        align-items: start;
        padding: 4px 7px 4px 5px;
      }

      .font-list {
        width: 164px;
        height: 20px;

        margin-right: 9px;
      }

      .font-sizes {
        width: 72px;
        height: 21px;

        margin-right: 11px;
      }

      button {
        height: 22px;
        width: 23px;
      }
    `;
  }
  async firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.fonts = await getLocalFonts();
    this.addEventListener("close", () => {
      this.drawingContext.text.showToolbar = false;
      evaluateTextToolbarVisibility(this.drawingContext);
      updateContext(this);
    });
  }
  updateFont(event) {
    this.drawingContext.text.font = event.target.value;
    updateContext(this);
  }
  updateSize(event) {
    this.drawingContext.text.size = parseInt(event.target.value);
    updateContext(this);
  }
  toggle(key) {
    this.drawingContext.text[key] = !this.drawingContext.text[key];
    updateContext(this);
  }
  render() {
    if (!this.drawingContext.view.textToolbar) {
      return html``;
    }
    return html`
      <paint-window caption="Fonts" tool close>
        <div class="content">
          <select
            class="font-list"
            @change="${(event) => this.updateFont(event)}"
          >
            ${this.fonts.map((font) => html` <option
                value="${font}"
                ?selected="${font === this.drawingContext.text.font}"
              >
                ${font}
              </option>`)}
          </select>
          <select
            class="font-sizes"
            @change="${(event) => this.updateSize(event)}"
          >
            ${this.fontSizes.map((size) => html` <option
                  value="${size}"
                  ?selected="${size === this.drawingContext.text.size}"
                >
                  ${size}
                </option>`)}
          </select>
          <button @click="${() => this.toggle("bold")}">B</button>
          <button @click="${() => this.toggle("italic")}">I</button>
          <button @click="${() => this.toggle("underline")}">U</button>
        </div>
      </paint-window>
    `;
  }
};
__decorate([
  property({type: Object})
], TextToolbarDialog.prototype, "drawingContext", 2);
__decorate([
  internalProperty()
], TextToolbarDialog.prototype, "fonts", 2);
TextToolbarDialog = __decorate([
  customElement("paint-dialog-text-toolbar")
], TextToolbarDialog);
