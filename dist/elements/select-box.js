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
  LitElement
} from "../../_snowpack/pkg/lit-element.js";
export let SelectBox = class extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
      }
      
      div {
        border: 1px dashed var(--highlight);
      }
    `;
  }
  render() {
    return html`<div><slot></slot></div>`;
  }
};
SelectBox = __decorate([
  customElement("paint-select-box")
], SelectBox);
