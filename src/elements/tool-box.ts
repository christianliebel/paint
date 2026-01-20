import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { evaluateTextToolbarVisibility } from '../helpers/evaluate-text-toolbar-visibility';
import { updateContext } from '../helpers/update-context';
import type { ToolDefinition } from '../models/tool-definition';
import {
  AIRBRUSH,
  BRUSH,
  CURVE,
  ELLIPSE,
  ERASER,
  FREE_FORM_SELECT,
  LINE,
  MAGNIFIER,
  PENCIL,
  PICK_COLOR,
  POLYGON,
  RECTANGLE,
  ROUNDED_RECTANGLE,
  SELECT,
  TEXT,
  tools,
} from '../tools/all';

@customElement('paint-tool-box')
export class ToolBox extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;
  @property({ attribute: false }) tool?: ToolDefinition;

  static get styles(): CSSResultGroup {
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

  render(): TemplateResult {
    return html`
      ${tools.map(
        (tool) => html` <paint-tool
          .tool=${tool}
          title="${tool.tooltip}"
          class="${this.drawingContext?.tool === tool
            ? 'active'
            : ''} ${tool.instance ? '' : 'unavailable'}"
          @click="${() => this.selectTool(tool)}"
        ></paint-tool>`,
      )}
      <paint-inset-container>
        ${this.getToolHtml(this.drawingContext.tool)}
      </paint-inset-container>
    `;
  }

  selectTool(tool: ToolDefinition): void {
    this.drawingContext.text.active = false;
    evaluateTextToolbarVisibility(this.drawingContext);

    if (this.isEditingTool(this.drawingContext.tool)) {
      this.drawingContext.previousEditingTool = this.drawingContext.tool;
    }

    // Special case: Clicking pick color or magnifier twice resets to previous editing tool.
    if (this.drawingContext.tool === tool && [PICK_COLOR, MAGNIFIER].includes(tool)) {
      this.drawingContext.tool = this.drawingContext.previousEditingTool;
    } else {
      this.drawingContext.tool = tool;
    }

    updateContext(this);
  }

  isEditingTool(tool: ToolDefinition): boolean {
    return [
      AIRBRUSH,
      BRUSH,
      CURVE,
      ERASER,
      LINE,
      PENCIL,
      POLYGON,
      RECTANGLE,
      ROUNDED_RECTANGLE,
    ].includes(tool);
  }

  getToolHtml(tool: ToolDefinition): TemplateResult | '' {
    if (PICK_COLOR === tool) {
      return html` <paint-tool-color-preview
        .drawingContext="${this.drawingContext}"
      ></paint-tool-color-preview>`;
    }

    if ([LINE, CURVE].includes(tool)) {
      return html` <paint-tool-line-width
        .drawingContext="${this.drawingContext}"
      ></paint-tool-line-width>`;
    }

    if ([RECTANGLE, ELLIPSE, POLYGON, ROUNDED_RECTANGLE].includes(tool)) {
      return html` <paint-tool-fill-style
        .drawingContext="${this.drawingContext}"
      ></paint-tool-fill-style>`;
    }

    if ([FREE_FORM_SELECT, SELECT, TEXT].includes(tool)) {
      return html` <paint-tool-draw-opaque
        .drawingContext="${this.drawingContext}"
      ></paint-tool-draw-opaque>`;
    }

    if (ERASER === tool) {
      return html` <paint-tool-eraser-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-eraser-size>`;
    }

    if (BRUSH === tool) {
      return html` <paint-tool-brush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-brush>`;
    }

    if (AIRBRUSH === tool) {
      return html` <paint-tool-airbrush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-airbrush>`;
    }

    if (MAGNIFIER === tool) {
      return html` <paint-tool-magnifier-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-magnifier-size>`;
    }

    return '';
  }
}
