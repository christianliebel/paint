import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { updateContext } from '../helpers/update-context';

@customElement('paint-color-picker')
export class ColorPicker extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;
  @property({ type: Number }) index = 0;

  @query('input') colorInput!: HTMLInputElement;

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

      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
      }
    `;
  }

  constructor() {
    super();
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
  }

  openColorPicker(): void {
    try {
      this.colorInput.showPicker();
    } catch {
      this.colorInput.focus();
      this.colorInput.click();
    }
  }

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.drawingContext.palette[this.index] = input.value;
    this.drawingContext.colors.primary = input.value;
    updateContext(this);
  }

  dispatchColorEvent(type: 'primary' | 'secondary'): void {
    this.drawingContext.colors[type] = this.color;
    updateContext(this);
  }

  render(): TemplateResult {
    return html`<div
      class="frame"
      style="background-color: ${this.color};"
    ></div>
    <input
      type="color"
      .value="${this.color}"
      @change="${this.onChange}"
    />`;
  }
}
