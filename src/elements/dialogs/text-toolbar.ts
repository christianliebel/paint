import {
  css,
  CSSResult,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  PropertyValues,
  TemplateResult,
} from 'lit-element';
import { DRAWING_CONTEXT } from '../../data/drawing-context';
import { FONT_SIZES } from '../../data/font-sizes';
import { evaluateTextToolbarVisibility } from '../../helpers/evaluate-text-toolbar-visibility';
import { getLocalFonts } from '../../helpers/get-local-fonts';
import { updateContext } from '../../helpers/update-context';

@customElement('paint-dialog-text-toolbar')
export class TextToolbarDialog extends LitElement {
  @property({ type: Object }) drawingContext = DRAWING_CONTEXT;

  @internalProperty() fonts: string[] = [];
  readonly fontSizes = FONT_SIZES;

  static get styles(): CSSResult {
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

  protected async firstUpdated(
    _changedProperties: PropertyValues,
  ): Promise<void> {
    super.firstUpdated(_changedProperties);

    this.fonts = await getLocalFonts();
    this.addEventListener('close', () => {
      this.drawingContext.text.showToolbar = false;
      evaluateTextToolbarVisibility(this.drawingContext);
      updateContext(this);
    });
  }

  updateFont(event: Event): void {
    this.drawingContext.text.font = (event.target as HTMLSelectElement).value;
    updateContext(this);
  }

  updateSize(event: Event): void {
    this.drawingContext.text.size = parseInt(
      (event.target as HTMLSelectElement).value,
    );
    updateContext(this);
  }

  toggle(key: 'bold' | 'italic' | 'underline'): void {
    this.drawingContext.text[key] = !this.drawingContext.text[key];
    updateContext(this);
  }

  render(): TemplateResult {
    if (!this.drawingContext.view.textToolbar) {
      return html``;
    }

    return html`
      <paint-window caption="Fonts" tool close>
        <div class="content">
          <select
            class="font-list"
            @change="${(event: Event) => this.updateFont(event)}"
          >
            ${this.fonts.map(
              (font) => html` <option
                value="${font}"
                ?selected="${font === this.drawingContext.text.font}"
              >
                ${font}
              </option>`,
            )}
          </select>
          <select
            class="font-sizes"
            @change="${(event: Event) => this.updateSize(event)}"
          >
            ${this.fontSizes.map(
              (size) =>
                html` <option
                  value="${size}"
                  ?selected="${size === this.drawingContext.text.size}"
                >
                  ${size}
                </option>`,
            )}
          </select>
          <button @click="${() => this.toggle('bold')}">B</button>
          <button @click="${() => this.toggle('italic')}">I</button>
          <button @click="${() => this.toggle('underline')}">U</button>
        </div>
      </paint-window>
    `;
  }
}
