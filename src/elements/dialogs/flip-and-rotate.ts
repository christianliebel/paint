import { css, CSSResult, html, LitElement, TemplateResult } from 'lit-element';
import { renderMnemonic } from '../../helpers/render-mnemonic';

export class FlipAndRotate extends LitElement {
  static get styles(): CSSResult {
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

  render(): TemplateResult {
    return html`
      <paint-window caption="Flip and Rotate" help close>
        <div class="content">
          <div>
            <fieldset>
              <legend>Flip and Rotate</legend>
              <div class="options">
                <label
                  ><input type="radio" name="mode" disabled /> ${renderMnemonic(
                    'Flip horizontal',
                    'F',
                  )}</label
                >
                <label
                  ><input type="radio" name="mode" disabled /> ${renderMnemonic(
                    'Flip vertical',
                    'v',
                  )}</label
                >
                <label
                  ><input type="radio" name="mode" disabled /> ${renderMnemonic(
                    'Rotate by angle',
                    'R',
                  )}</label
                >
                <label
                  ><input type="radio" name="degree" disabled />
                  ${renderMnemonic('90°', '9')}</label
                >
                <label
                  ><input type="radio" name="degree" disabled />
                  ${renderMnemonic('180°', '1')}</label
                >
                <label
                  ><input type="radio" name="degree" disabled />
                  ${renderMnemonic('270°', '2')}</label
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

  onCancel(): void {
    this.dispatchEvent(
      new CustomEvent('close', { bubbles: true, composed: true }),
    );
  }
}

customElements.define('paint-dialog-flip-and-rotate', FlipAndRotate);
