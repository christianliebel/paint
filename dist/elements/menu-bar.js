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
import {renderMnemonic} from "../helpers/render-mnemonic.js";
export let MenuBar = class extends LitElement {
  constructor() {
    super();
    this.entries = [];
    this.drawingContext = DRAWING_CONTEXT;
    this.activeMenu = null;
    document.addEventListener("click", () => this.activeMenu = null);
    this.addEventListener("action-executed", () => this.activeMenu = null);
  }
  static get styles() {
    return css`
      :host {
        background-color: var(--button-face);
        display: flex;
        height: 20px;
      }

      ul {
        list-style-type: none;
        display: flex;
        margin: 0;
        padding: 1px 0;
      }

      li {
        padding: 1px 6px;
        position: relative;
      }

      li.active {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }

      li.disabled {
        color: var(--canvas);
        text-shadow: 1px 1px 0 var(--highlight-text);
      }

      li.active.disabled {
        color: var(--canvas);
        text-shadow: none;
      }

      paint-menu {
        display: none;
      }
      li.active paint-menu {
        display: block;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `;
  }
  render() {
    return html`
      <ul @click="${(event) => event.stopPropagation()}">
        ${this.entries.map((entry) => html`
            <li
              @click="${() => this.onClick(entry)}"
              @pointerenter="${() => this.onPointerEnter(entry)}"
              @pointerleave="${() => this.onPointerLeave()}"
              class="${this.activeMenu === entry ? "active" : ""} ${entry.disabled ? "disabled" : ""}"
            >
              ${renderMnemonic(entry.caption, entry.mnemonic)}
              ${!entry.disabled && entry.entries ? html`<paint-menu
                    .entries="${entry.entries}"
                    .drawingContext="${this.drawingContext}"
                  >
                  </paint-menu>` : ""}
            </li>
          `)}
      </ul>
    `;
  }
  onClick(entry) {
    this.activeMenu = this.activeMenu === entry ? null : entry;
  }
  onPointerEnter(entry) {
    this.dispatchEvent(new CustomEvent("set-help-text", {
      detail: entry.helpText,
      bubbles: true,
      composed: true
    }));
    if (this.activeMenu) {
      this.activeMenu = entry;
    }
  }
  onPointerLeave() {
    this.dispatchEvent(new CustomEvent("set-help-text", {bubbles: true, composed: true}));
  }
};
__decorate([
  property()
], MenuBar.prototype, "entries", 2);
__decorate([
  property()
], MenuBar.prototype, "drawingContext", 2);
__decorate([
  property({attribute: false})
], MenuBar.prototype, "activeMenu", 2);
MenuBar = __decorate([
  customElement("paint-menu-bar")
], MenuBar);
