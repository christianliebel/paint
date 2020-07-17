import { css, html, LitElement } from '../web_modules/lit-element.js';
import { tools } from '../tools/all.js';
import { updateContext } from '../helpers/update-context.js';

class ToolBox extends LitElement {
  static get properties() {
    return {
      drawingContext: { type: Object },

      tool: { attribute: false },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        justify-content: center;
      }

      paint-inset-container {
        width: 41px;
        height: 66px;
        margin-top: 3px;
        display: block;
      }

      paint-inset-container * {
        height: 100%;
      }

      paint-tool.unavailable {
        filter: saturate(0%) opacity(50%);
        pointer-events: none;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      ${tools.map(
        (tool) => html` <paint-tool
          .tool=${tool}
          title="${tool.tooltip}"
          class="${this.drawingContext.tool === tool ? 'active' : ''} ${tool.instance
            ? ''
            : 'unavailable'}"
          @pointerup="${() => this.selectTool(tool)}"
        ></paint-tool>`,
      )}
      <paint-inset-container>
        ${this.getToolHtml(tools.indexOf(this.drawingContext.tool))}
      </paint-inset-container>
    `;
  }

  selectTool(tool) {
    this.drawingContext.tool = tool;
    updateContext(this);
  }

  getToolHtml(index) {
    if (index === 4) {
      return html`<paint-tool-color-preview .drawingContext="${this.drawingContext}"></paint-tool-color-preview>`;
    }

    if ([10, 11].includes(index)) {
      return html`<paint-tool-line-width .drawingContext="${this.drawingContext}"></paint-tool-line-width>`;
    }
  }
}

customElements.define('paint-tool-box', ToolBox);
