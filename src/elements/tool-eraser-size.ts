import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { updateContext } from '../helpers/update-context';

@customElement('paint-tool-eraser-size')
export class ToolEraserSize extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;

  private readonly eraserSizes = [4, 6, 8, 10];

  static get styles(): CSSResultGroup {
    return css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px;
      }

      li {
        margin-bottom: 2px;
      }

      li .selection-wrapper {
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
      }

      li.selected .selection-wrapper {
        background-color: var(--highlight);
      }

      li div.size {
        background-color: var(--button-text);
      }

      li.selected div.size {
        background-color: var(--highlight-text);
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <ul>
        ${this.eraserSizes.map(
          (size) => html`
            <li
              class="${size === this.drawingContext.eraserSize
                ? 'selected'
                : ''}"
              @click="${() => this.selectSize(size)}"
            >
              <div class="selection-wrapper">
                <div class="size" style="${this.getStyle(size)}"></div>
              </div>
            </li>
          `,
        )}
      </ul>
    `;
  }

  getStyle(size: number): string {
    return `width: ${size}px; height: ${size}px`;
  }

  selectSize(size: number): void {
    this.drawingContext.eraserSize = size;
    updateContext(this);
  }
}
