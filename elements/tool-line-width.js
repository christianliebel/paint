import { css, html, LitElement } from '../web_modules/lit-element.js';

export class ToolLineWidth extends LitElement {
  static get properties() {
    return {
      lineWidth: {type: Number},
    };
  }

  static get styles() {
    return css`
      ul {
        display: flex;
        flex-direction: column;
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

  constructor() {
    super();
    this.lineWidths = [1, 2, 3, 4, 5];
  }

  render() {
    return html`
      <ul>
        ${this.lineWidths.map(lineWidth => html`
        <li @click="${() => this.onUpdateWidth(lineWidth)}"
            class="${this.lineWidth === lineWidth ? 'selected' : ''}">
          <div style="height: ${lineWidth}px"></div>
        </li>`)}
      </ul>
    `;
  }

  onUpdateWidth(lineWidth) {
    this.lineWidth = lineWidth;
    this.dispatchEvent(new CustomEvent('line-width-changed', {
      detail: lineWidth,
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('paint-tool-line-width', ToolLineWidth);
