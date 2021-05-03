import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { updateContext } from '../helpers/update-context';

@customElement('paint-color-box')
export class ColorBox extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: grid;
        box-sizing: border-box;
        width: 256px;
        height: 33px;
        grid-template-columns: 15px repeat(15, 16px);
        grid-template-rows: 16px 16px;
      }

      paint-color-switcher {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <paint-color-switcher
        primaryColor="${this.drawingContext.colors.primary}"
        secondaryColor="${this.drawingContext.colors.secondary}"
        @pointerdown="${(event: PointerEvent) => this.swapColors(event)}"
      >
      </paint-color-switcher>
      ${this.drawingContext.palette.map(
        (color) =>
          html` <paint-color-picker
            color="${color}"
            .drawingContext="${this.drawingContext}"
          >
          </paint-color-picker>`,
      )}
    `;
  }

  swapColors({ pointerType }: PointerEvent) {
    // Swap colors only for pen and touch presses, but not for the mouse.
    // Pen and touch don't have a secondary input mode, and classic Paint didn't
    // offer to swap the colors with the mouse.
    if (['pen', 'touch'].includes(pointerType)){
      const { primary, secondary } = this.drawingContext.colors;
      this.drawingContext.colors.primary = secondary;
      this.drawingContext.colors.secondary = primary;
      updateContext(this);
    }
  }
}
