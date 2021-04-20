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
import {css, customElement, html, LitElement} from "../../../_snowpack/pkg/lit-element.js";
import {renderMnemonic} from "../../helpers/render-mnemonic.js";
export let FlipAndRotate = class extends LitElement {
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
        display: flex;
        padding: 13px;
      }

      .options {
        width: 174px;
        display: flex;
        flex-direction: column;
      }

      .options input[name='degree'] {
        margin-left: 50px;
      }

      .buttons {
        width: 75px;
        display: flex;
        flex-direction: column;
        margin-left: 8px;
      }

      .buttons button {
        margin-bottom: 5px;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `;
  }
  render() {
    return html`
      <paint-window caption="Flip and Rotate" help close>
        <div class="content">
          <div>
            <fieldset>
              <legend>Flip and Rotate</legend>
              <div class="options">
                <label
                  ><input type="radio" name="mode" disabled /> ${renderMnemonic("Flip horizontal", "F")}</label
                >
                <label
                  ><input type="radio" name="mode" disabled /> ${renderMnemonic("Flip vertical", "v")}</label
                >
                <label
                  ><input type="radio" name="mode" disabled /> ${renderMnemonic("Rotate by angle", "R")}</label
                >
                <label
                  ><input type="radio" name="degree" disabled />
                  ${renderMnemonic("90°", "9")}</label
                >
                <label
                  ><input type="radio" name="degree" disabled />
                  ${renderMnemonic("180°", "1")}</label
                >
                <label
                  ><input type="radio" name="degree" disabled />
                  ${renderMnemonic("270°", "2")}</label
                >
              </div>
            </fieldset>
          </div>
          <div class="buttons">
            <button @click="${this.onCancel}">OK</button>
            <button @click="${this.onCancel}">Cancel</button>
          </div>
        </div>
      </paint-window>
    `;
  }
  onCancel() {
    this.dispatchEvent(new CustomEvent("close", {bubbles: true, composed: true}));
  }
};
FlipAndRotate = __decorate([
  customElement("paint-dialog-flip-and-rotate")
], FlipAndRotate);
