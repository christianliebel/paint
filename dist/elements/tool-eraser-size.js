import { css, html, LitElement } from '../../_snowpack/pkg/lit-element.js';
import { updateContext } from '../helpers/update-context.js';
export class ToolEraserSize extends LitElement {
  static get properties() {
    return {
      drawingContext: {
        type: Object
      }
    };
  }

  static get styles() {
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

  constructor() {
    super();
    this.eraserSizes = [4, 6, 8, 10];
  }

  render() {
    return html`
      <ul>
        ${this.eraserSizes.map(size => html`
            <li
              class="${size === this.drawingContext.eraserSize ? 'selected' : ''}"
              @click="${() => this.selectSize(size)}"
            >
              <div class="selection-wrapper">
                <div class="size" style="${this.getStyle(size)}"></div>
              </div>
            </li>
          `)}
      </ul>
    `;
  }

  getStyle(size) {
    return `width: ${size}px; height: ${size}px`;
  }

  selectSize(size) {
    this.drawingContext.eraserSize = size;
    updateContext(this);
  }

}
customElements.define('paint-tool-eraser-size', ToolEraserSize);