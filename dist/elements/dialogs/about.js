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
import {css, customElement, html, LitElement, property} from "../../../_snowpack/pkg/lit-element.js";
export let About = class extends LitElement {
  static get styles() {
    return css`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      .content {
        margin: 11px;
        display: grid;
        grid-template-columns: 67px 253px;
      }

      .info {
        margin-top: 6px;
      }

      .storage {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
      }

      button {
        width: 75px;
        height: 23px;
        margin-right: 1px;
        float: right;
      }

      a {
        color: var(--button-text);
      }
    `;
  }
  async firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    if ("storage" in navigator) {
      const {usage, quota} = await navigator.storage.estimate();
      this.totalFreeMemory = quota;
      this.freeMemoryPercentage = 100 - (usage ?? 1) / (quota ?? 1) * 100;
    }
  }
  render() {
    return html`
      <paint-window caption="About Paint" close>
        <div class="content">
          <img src="assets/icon.png" width="32" height="32" alt="" />
          <div class="info">
            Paint<br />
            <a
              href="https://github.com/christianliebel/paint"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/christianliebel/paint</a
            ><br />
            <a
              href="3rdpartylicenses.txt"
              target="_blank"
              rel="noopener noreferrer"
              >Made possible by third-party software</a
            ><br />
            <br />
            <br />
            This project is licensed under:<br />
            Apache 2.0
            <br />
            <br />
            <br />
            <paint-ruler></paint-ruler>
            <br />
            <div class="storage">
              <span>Storage Available to Paint:</span>
              <span>${this.getFreeMemoryInKB()} KB</span>
              <span>System Resources:</span>
              <span>${this.getFreeMemoryPercentage()}% Free</span>
            </div>
            <br />
            <button @click="${this.onOK}">OK</button>
          </div>
        </div>
      </paint-window>
    `;
  }
  getFreeMemoryInKB() {
    if (typeof this.totalFreeMemory === "undefined") {
      return "???";
    }
    const memory = Math.round(this.totalFreeMemory / 1024);
    return Intl.NumberFormat("en-US").format(memory);
  }
  getFreeMemoryPercentage() {
    if (typeof this.freeMemoryPercentage === "undefined") {
      return "???";
    }
    return Math.round(this.freeMemoryPercentage);
  }
  onOK() {
    this.dispatchEvent(new CustomEvent("close", {bubbles: true, composed: true}));
  }
};
__decorate([
  property({attribute: false})
], About.prototype, "totalFreeMemory", 2);
__decorate([
  property({attribute: false})
], About.prototype, "freeMemoryPercentage", 2);
About = __decorate([
  customElement("paint-dialog-about")
], About);
