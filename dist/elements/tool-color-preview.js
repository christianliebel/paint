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
import {css, customElement, LitElement, property} from "../../_snowpack/pkg/lit-element.js";
import {DRAWING_CONTEXT} from "../data/drawing-context.js";
export let ToolColorPreview = class extends LitElement {
  constructor() {
    super(...arguments);
    this.drawingContext = DRAWING_CONTEXT;
  }
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
  render() {
    this.style.backgroundColor = this.drawingContext?.previewColor ?? "transparent";
  }
};
__decorate([
  property()
], ToolColorPreview.prototype, "drawingContext", 2);
ToolColorPreview = __decorate([
  customElement("paint-tool-color-preview")
], ToolColorPreview);
