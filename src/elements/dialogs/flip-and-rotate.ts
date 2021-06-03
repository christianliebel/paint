import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { renderMnemonic } from '../../helpers/render-mnemonic';

interface FlipParams {
  action: 'flip';
  param: 'vertical' | 'horizontal';
}

interface RotateParams {
  action: 'rotate';
  param: 90 | 180 | 270;
}

export type FlipRotateParams = FlipParams | RotateParams;

@customElement('paint-dialog-flip-and-rotate')
export class FlipAndRotate extends LitElement {
  static get styles(): CSSResultGroup {
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

      .buttons paint-button {
        margin-bottom: 5px;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `;
  }

  readonly modes = [
    {
      value: 'flip-horizontal',
      text: 'Flip horizontal',
      mnemonic: 'F',
    },
    {
      value: 'flip-vertical',
      text: 'Flip vertical',
      mnemonic: 'v',
    },
    {
      value: 'rotate',
      text: 'Rotate by angle',
      mnemonic: 'R',
    },
  ] as const;
  @state() selectedMode: string = this.modes[0].value;

  readonly degrees = [
    {
      value: 90,
      mnemonic: '9',
    },
    {
      value: 180,
      mnemonic: '1',
    },
    {
      value: 270,
      mnemonic: '2',
    },
  ] as const;
  @state() selectedDegree: 90 | 180 | 270 = this.degrees[0].value;

  render(): TemplateResult {
    return html`
      <paint-window caption="Flip and Rotate" help close>
        <div class="content">
          <div>
            <fieldset>
              <legend>Flip and Rotate</legend>
              <div class="options">
                ${this.modes.map(
                  (mode) => html`
                    <label
                      ><input
                        type="radio"
                        name="mode"
                        value="${mode.value}"
                        @change="${() => (this.selectedMode = mode.value)}"
                        .checked="${mode.value === this.selectedMode}"
                      />
                      ${renderMnemonic(mode.text, mode.mnemonic)}</label
                    >
                  `,
                )}
                ${this.degrees.map(
                  (degree) => html`
                    <label
                      ><input
                        type="radio"
                        name="degree"
                        value="${degree.value}"
                        @change="${() => this.selectedDegree = degree.value}"
                        .checked="${degree.value == this.selectedDegree}"
                        ?disabled="${this.selectedMode !== 'rotate'}"
                      />
                      ${renderMnemonic(
                        `${degree.value}°`,
                        degree.mnemonic,
                      )}</label
                    >
                  `,
                )}
              </div>
            </fieldset>
          </div>
          <div class="buttons">
            <paint-button @click="${() => this.onOk()}" tabindex="0">
              OK
            </paint-button>
            <paint-button @click="${() => this.onCancel()}" tabindex="0">
              Cancel
            </paint-button>
          </div>
        </div>
      </paint-window>
    `;
  }

  getFlipRotateParams(): FlipRotateParams {
    if (this.selectedMode === 'rotate') {
      return { action: 'rotate', param: this.selectedDegree };
    } else {
      const param =
        this.selectedMode === 'flip-horizontal' ? 'horizontal' : 'vertical';
      return { action: 'flip', param };
    }
  }

  onOk(): void {
    this.dispatchEvent(
      new CustomEvent<FlipRotateParams>('close', {
        detail: this.getFlipRotateParams(),
      }),
    );
  }

  onCancel(): void {
    this.dispatchEvent(new CustomEvent('close'));
  }
}
