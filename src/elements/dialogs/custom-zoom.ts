import {
  css,
  CSSResultGroup,
  html,
  LitElement,
  PropertyValues,
  TemplateResult,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { renderMnemonic } from '../../helpers/render-mnemonic';

export interface CustomZoomResult {
  magnifierSize: number;
}

@customElement('paint-dialog-custom-zoom')
export class CustomZoom extends LitElement {
  @property({ type: Number, attribute: false }) currentMagnifierSize = 1;

  readonly magnifierSizes = [1, 2, 4, 6, 8] as const;
  @state() selectedMagnifierSize = 1;

  static get styles(): CSSResultGroup {
    return css`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      paint-window {
        width: 306px;
      }

      div.container {
        display: flex;
        margin: 11px;
      }

      div.container > form {
        flex: 1;
      }

      div.container > form > div.current-level {
        display: flex;
        margin-bottom: 6px;
      }

      div.container > form > div.current-level > span.label {
        margin-left: 10px;
        width: 128px;
      }

      div.container > form > fieldset {
        margin: 0;
      }

      div.container > form > fieldset > div.zoom-levels {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-auto-flow: column;
        align-items: center;
      }

      div.container > form > fieldset label {
        margin: 7px 0;
      }

      div.container > form > fieldset label input[type='radio'] {
        margin-left: 0;
        margin-right: 0;
      }

      div.container > div.buttons {
        display: flex;
        flex-direction: column;
        margin: 0 1px 0 11px;
      }

      div.container > div.buttons > paint-button {
        margin-bottom: 5px;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this.selectedMagnifierSize = this.currentMagnifierSize;
  }

  render(): TemplateResult {
    return html`
      <paint-window caption="Custom Zoom" help close>
        <div class="container">
          <form>
            <div class="current-level">
              <span class="label">Current zoom:</span>
              <span>${this.currentMagnifierSize * 100}</span>
            </div>
            <fieldset>
              <legend>Zoom to</legend>
              <div class="zoom-levels">
                ${this.magnifierSizes.map(
                  (size) => html`
                    <label>
                      <input
                        type="radio"
                        name="zoom"
                        value="${size}"
                        @change="${() => (this.selectedMagnifierSize = size)}"
                        .checked="${this.selectedMagnifierSize === size}"
                      />
                      ${renderMnemonic(
                        (size * 100).toString(),
                        size.toString(),
                      )}%
                    </label>
                  `,
                )}
              </div>
            </fieldset>
          </form>
          <div class="buttons">
            <paint-button @click="${() => this.onOk()}" tabindex="0"
              >OK</paint-button
            >
            <paint-button @click="${() => this.onCancel()}" tabindex="0"
              >Cancel
            </paint-button>
          </div>
        </div>
      </paint-window>
    `;
  }

  onOk(): void {
    this.dispatchEvent(
      new CustomEvent<CustomZoomResult>('close', {
        detail: { magnifierSize: this.selectedMagnifierSize },
      }),
    );
  }

  onCancel(): void {
    this.dispatchEvent(new CustomEvent('close'));
  }
}
