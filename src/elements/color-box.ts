import { css, CSSResult, customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import { DRAWING_CONTEXT } from '../data/drawing-context';

@customElement('paint-color-box')
export class ColorBox extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;

  static get styles(): CSSResult {
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
}
