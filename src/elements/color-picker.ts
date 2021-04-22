import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { updateContext } from '../helpers/update-context';

@customElement('paint-color-picker')
export class ColorPicker extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;
  @property() color = '';

  static get styles(): CSSResultGroup {
    return css`
      :host {
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

  constructor() {
    super();
    this.addEventListener('click', () => {
      this.dispatchColorEvent('primary');
    });
    this.addEventListener('contextmenu', (event) => {
      this.dispatchColorEvent('secondary');
      event.preventDefault();
    });
  }

  dispatchColorEvent(type: 'primary' | 'secondary'): void {
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
