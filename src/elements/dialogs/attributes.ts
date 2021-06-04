import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { showMessageBox } from '../../helpers/message-box';
import { renderMnemonic } from '../../helpers/render-mnemonic';

type Unit = 'inches' | 'cm' | 'pels';
type Color = 'black-and-white' | 'colors';

export interface AttributesResult {
  width: string;
  height: string;
  unit: Unit;
  color: Color;
}

// TODO: Color and unit selection
// TODO: Form fields and radio buttons in Win95 UI
// TODO: Pixel-perfectness

@customElement('paint-dialog-attributes')
export class Attributes extends LitElement {
  @state() width = '';
  @state() height = '';
  @state() unit: Unit = 'pels';
  @state() color: Color = 'colors';

  readonly units = [
    { value: 'inches', label: 'Inches', mnemonic: 'I' },
    { value: 'cm', label: 'Cm', mnemonic: 'm' },
    { value: 'pels', label: 'Pels', mnemonic: 'P' },
  ] as const;

  readonly colors = [
    { value: 'black-and-white', label: 'Black and white', mnemonic: 'B' },
    { value: 'colors', label: 'Colors', mnemonic: 'l' },
  ] as const;

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
        margin: 11px 12px;
      }

      div.container > form {
        flex: 1;
      }

      div.container > form > div.dimensions {
        display: grid;
        grid-template-columns: 44px 45px 47px 50px;
        align-items: center;
      }

      div.container > form > div.dimensions > span {
        padding-left: 2px; /* 9px; */
      }

      div.container > form > div.dimensions > input[type='text'] {
        box-sizing: border-box;
        width: 100%;
        height: 23px;
        outline: none;
      }

      div.container > form > fieldset {
        margin: 8px 0 1px 0;
      }

      div.container > form > fieldset input[type='radio'] {
        margin: 0;
      }

      div.container > div.buttons {
        display: flex;
        flex-direction: column;
        margin-left: 12px;
      }

      div.container > div.buttons paint-button + paint-button {
        margin-top: 5px;
      }

      div.container > div.buttons paint-button:last-of-type {
        margin-top: 6px;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `;
  }

  render(): TemplateResult {
    return html` <paint-window caption="Attributes" help close>
      <div class="container">
        <form>
          <div class="dimensions">
            <span>${renderMnemonic('Width:', 'W')}</span>
            <input
              type="text"
              .value="${this.width}"
              @change="${(event: Event) =>
                (this.width = (event.target as HTMLInputElement).value)}"
            />
            <span>${renderMnemonic('Height:', 'H')}</span>
            <input
              type="text"
              .value="${this.height}"
              @change="${(event: Event) =>
                (this.height = (event.target as HTMLInputElement).value)}"
            />
          </div>

          <fieldset>
            <legend>Units</legend>
            ${this.units.map(
              ({ value, label, mnemonic }) => html`
                <label
                  ><input
                    type="radio"
                    name="unit"
                    value="${value}"
                    .checked="${this.unit === value}"
                    @change="${() => this.unit = value}"
                    disabled
                  />
                  ${renderMnemonic(label, mnemonic)}</label
                >
              `,
            )}
          </fieldset>

          <fieldset>
            <legend>Colors</legend>
            ${this.colors.map(
              ({ value, label, mnemonic }) => html`
                <label
                  ><input
                    type="radio"
                    name="color"
                    value="${value}"
                    .checked="${this.color === value}"
                    @change="${() => this.color = value}"
                    disabled
                  />
                  ${renderMnemonic(label, mnemonic)}</label
                >
              `,
            )}
          </fieldset>
        </form>

        <div class="buttons">
          <paint-button @click="${this.onOk}" tabindex="0">OK</paint-button>
          <paint-button @click="${this.onCancel}" tabindex="0"
            >Cancel
          </paint-button>
          <paint-button @click="${this.onDefault}" tabindex="0"
            >${renderMnemonic('Default', 'D')}
          </paint-button>
        </div>
      </div>
    </paint-window>`;
  }

  async onOk(): Promise<void> {
    const { width, height, unit, color } = this;

    if (width.length > 5 || height.length > 5) {
      await showMessageBox(
        'Please enter no more than 5 characters.',
        'warning',
        'Paint',
      );
      // TODO: Focus box that was responsible for this warning.
      return;
    }

    this.dispatchEvent(
      new CustomEvent<AttributesResult>('close', {
        detail: { width, height, unit, color },
      }),
    );
  }

  onCancel(): void {
    this.dispatchEvent(new CustomEvent('close'));
  }

  onDefault(): void {
    this.width = screen.width.toString();
    this.height = screen.height.toString();
    this.unit = 'pels';
    this.color = 'colors';
  }
}
