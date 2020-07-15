import { css, html, LitElement } from '../web_modules/lit-element.js';
import { updateContext } from '../helpers/update-context.js';

export class ToolFillStyle extends LitElement {
  static get properties() {
    return {
      drawingContext: { type: Object },
    };
  }

  static get styles() {
    return css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 3px 2px;
      }

      li {
        height: 18px;
        width: 35px;
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li.selected {
        background-color: var(--highlight);
      }

      li .item {
        width: 27px;
        height: 10px;
        box-sizing: border-box;
      }

      li .item.stroke {
        border: 1px solid var(--button-text);
      }

      li.selected .item.stroke {
        border-color: var(--highlight-text);
      }

      li .item.fill {
        background-color: var(--canvas);
      }
    `;
  }

  constructor() {
    super();
    this.fillStyles = [
      {
        stroke: true,
        fill: false,
      },
      {
        stroke: true,
        fill: true,
      },
      {
        stroke: false,
        fill: true,
      },
    ];
  }

  render() {
    return html`
      <ul>
        ${this.fillStyles.map(
          (fillStyle) => html`
            <li
              class="${this.isSelected(fillStyle) ? 'selected' : ''}"
              @click="${() => this.onSelect(fillStyle)}"
            >
              <div class="item ${this.getClasses(fillStyle)}"></div>
            </li>
          `,
        )}
      </ul>
    `;
  }

  isSelected({ stroke, fill }) {
    return (
      stroke === this.drawingContext.fillStyle.stroke &&
      fill === this.drawingContext.fillStyle.fill
    );
  }

  getClasses({ stroke, fill }) {
    return [...(stroke ? ['stroke'] : []), ...(fill ? ['fill'] : [])].join(' ');
  }

  onSelect(fillStyle) {
    this.drawingContext.fillStyle = fillStyle;
    updateContext(this);
  }
}

customElements.define('paint-tool-fill-style', ToolFillStyle);
