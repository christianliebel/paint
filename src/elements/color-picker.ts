import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { showDialog } from '../helpers/dialog';
import { updateContext } from '../helpers/update-context';

@customElement('paint-color-picker')
export class ColorPicker extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;
  @property({ type: Number }) index = 0;

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('click', () => {
      this.dispatchColorEvent('primary');
    });
    this.addEventListener('contextmenu', (event) => {
      this.dispatchColorEvent('secondary');
      event.preventDefault();
    });
    this.addEventListener('dblclick', () => {
      this.openColorPicker();
    });

    this.drawingContext.element?.addEventListener(
      'edit-color',
      this.onEditColor,
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.drawingContext.element?.removeEventListener(
      'edit-color',
      this.onEditColor,
    );
  }

  private readonly onEditColor = () => {
    const selectedPaletteIndex = this.drawingContext.selectedPaletteIndex;
    if (this.index === selectedPaletteIndex) {
      this.openColorPicker();
    }
  };

  get color(): string {
    return this.drawingContext.palette[this.index];
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        position: relative;
        border: 1px solid var(--button-light);
        border-top-color: var(--button-dark);
        border-left-color: var(--button-dark);
      }

      div.frame {
        box-sizing: border-box;
        border: 1px solid var(--button-face);
        border-top-color: var(--button-darker);
        border-left-color: var(--button-darker);
        height: 100%;
      }
    `;
  }

  async openColorPicker(): Promise<void> {
    const result = await showDialog('paint-dialog-edit-colors', {
      color: this.color,
    });
    if (result) {
      this.drawingContext.palette[this.index] = result.color;
      this.drawingContext.colors.primary = result.color;
      updateContext(this);
    }
  }

  dispatchColorEvent(type: 'primary' | 'secondary'): void {
    this.drawingContext.selectedPaletteIndex = this.index;
    this.drawingContext.colors[type] = this.color;
    updateContext(this);
  }

  render(): TemplateResult {
    return html`<div
      class="frame"
      style="background-color: ${this.color};"
    ></div>`;
  }
}
