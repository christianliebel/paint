import { css, html, LitElement } from '../web_modules/lit-element.js';
import { tools } from '../tools/all.js';

class ToolBox extends LitElement {
  static get properties() {
    return {
      tool: { attribute: false },
      // TODO: Move to context
      previewColor: { type: String },
      lineWidth: { type: Number },
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

  firstUpdated() {
    this.selectTool(tools[6]);
  }

  render() {
    return html`
      ${tools.map(
        (tool) => html` <paint-tool
          .tool=${tool}
          title="${tool.tooltip}"
          class="${this.tool === tool ? 'active' : ''} ${tool.instance
            ? ''
            : 'unavailable'}"
          @pointerup="${() => this.selectTool(tool)}"
        ></paint-tool>`,
      )}
      <paint-inset-container>
        <!--<paint-tool-color-preview
          previewColor="${this.previewColor}"
        ></paint-tool-color-preview>-->
        <paint-tool-line-width
          lineWidth="${this.lineWidth}"
        ></paint-tool-line-width>
      </paint-inset-container>
    `;
  }

  selectTool(tool) {
    this.tool = tool;
    this.dispatchEvent(
      new CustomEvent('tool-selected', {
        detail: tool.instance,
        bubbles: true,
        composed: true,
      }),
    );
  }
}

customElements.define('paint-tool-box', ToolBox);
