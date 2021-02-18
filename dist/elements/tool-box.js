import { css, html, LitElement } from '../../_snowpack/pkg/lit-element.js';
import { AIRBRUSH, BRUSH, CURVE, ERASER, FREE_FORM_SELECT, LINE, MAGNIFIER, PICK_COLOR, POLYGON, RECTANGLE, ROUNDED_RECTANGLE, SELECT, TEXT, tools } from '../tools/all.js';
import { updateContext } from '../helpers/update-context.js';

class ToolBox extends LitElement {
  static get properties() {
    return {
      drawingContext: {
        type: Object
      },
      tool: {
        attribute: false
      }
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
      ${tools.map(tool => html` <paint-tool
          .tool=${tool}
          title="${tool.tooltip}"
          class="${this.drawingContext.tool === tool ? 'active' : ''} ${tool.instance ? '' : 'unavailable'}"
          @pointerup="${() => this.selectTool(tool)}"
        ></paint-tool>`)}
      <paint-inset-container>
        ${this.getToolHtml(this.drawingContext.tool)}
      </paint-inset-container>
    `;
  }

  selectTool(tool) {
    this.drawingContext.tool = tool;
    updateContext(this);
  }

  getToolHtml(tool) {
    if (PICK_COLOR === tool) {
      return html`<paint-tool-color-preview
        .drawingContext="${this.drawingContext}"
      ></paint-tool-color-preview>`;
    }

    if ([LINE, CURVE].includes(tool)) {
      return html`<paint-tool-line-width
        .drawingContext="${this.drawingContext}"
      ></paint-tool-line-width>`;
    }

    if ([RECTANGLE,
    /* ELLIPSE, */
    POLYGON, ROUNDED_RECTANGLE, TEXT].includes(tool)) {
      return html`<paint-tool-fill-style
        .drawingContext="${this.drawingContext}"
      ></paint-tool-fill-style>`;
    }

    if ([FREE_FORM_SELECT, SELECT].includes(tool)) {
      return html`<paint-tool-draw-opaque
        .drawingContext="${this.drawingContext}"
      ></paint-tool-draw-opaque>`;
    }

    if (ERASER === tool) {
      return html`<paint-tool-eraser-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-eraser-size>`;
    }

    if (BRUSH === tool) {
      return html`<paint-tool-brush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-brush>`;
    }

    if (AIRBRUSH === tool) {
      return html`TBD`;
    }

    if (MAGNIFIER === tool) {
      return html`TBD`;
    }

    return '';
  }

}

customElements.define('paint-tool-box', ToolBox);