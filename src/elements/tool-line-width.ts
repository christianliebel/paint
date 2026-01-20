import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { updateContext } from '../helpers/update-context';

@customElement('paint-tool-line-width')
export class ToolLineWidth extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;

  private readonly lineWidths = [1, 2, 3, 4, 5];

  static get styles(): CSSResultGroup {
    return css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px 2px;
      }

      li {
        margin-top: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10px;
        box-sizing: border-box;
      }

      li:nth-child(odd) {
        padding-bottom: 1px;
      }

      li div {
        width: 27px;
        background-color: var(--button-text);
      }

      li.selected {
        background-color: var(--highlight);
      }

      li.selected div {
        background-color: var(--highlight-text);
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <ul>
        ${this.lineWidths.map(
          (lineWidth) =>
            html` <li
              @click="${() => this.onUpdateWidth(lineWidth)}"
              class="${this.drawingContext.lineWidth === lineWidth
                ? 'selected'
                : ''}"
            >
              <div style="height: ${lineWidth}px"></div>
            </li>`,
        )}
      </ul>
    `;
  }

  onUpdateWidth(lineWidth: number): void {
    this.drawingContext.lineWidth = lineWidth;
    updateContext(this);
  }
}
