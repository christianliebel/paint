import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { updateContext } from '../helpers/update-context';

@customElement('paint-tool-magnifier-size')
export class ToolMagnifierSize extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;

  private selectedMagnifierSize = 0;
  private readonly selections = [
    {
      path: 'M3,0H4V9H3V2H1V1H3zM7,3V5H8V7H7V9H8V7h2V9h1V7H10V5h1V3H10V5H8V3zM19,5h1V6H19z',
      magnifierSize: 1,
    },
    {
      path: 'M0,1H1V0H4V1H5V4H4V5H3V6H2V7H1V8H5V9H0V7H1V6H2V5H3V4H4V1H1V2H0zM6,3V5H7V7H6V9H7V7H9V9h1V7H9V5h1V3H9V5H7V3zM18,4h2V6H18z',
      magnifierSize: 2,
    },
    {
      path: 'M1,0h3v1h1v1H4V1H1v3h3v1h1v3H4v1H1V8h3V5H1v3H0V1h1zM6,3V5H7V7H6V9H7V7H9V9h1V7H9V5h1V3H9V5H7V3zM16,2h6V8H16z',
      magnifierSize: 6,
    },
    {
      path: 'M1,0h3v1h1v3H4v1h1v3H4v1H1V8h3V5H1v3H0V5h1V4h3V1H1v3H0V1h1zM6,3V5H7V7H6V9H7V7H9V9h1V7H9V5h1V3H9V5H7V3zm9-2h8V9H15z',
      magnifierSize: 8,
    },
  ] as const;

  static get styles(): CSSResultGroup {
    return css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 2px 0 0;
      }

      li {
        margin: 0 0 3px;
        padding: 2px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 13px;
        box-sizing: border-box;
      }

      li.selected {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }

      svg {
        width: 23px;
        height: 9px;
      }

      svg path {
        fill: currentColor;
      }
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();

    // The selected magnifier size is only updated once when rendering this control.
    this.selectedMagnifierSize = this.drawingContext.magnifierSize;
  }

  render(): TemplateResult {
    return html` <ul>
      ${this.selections.map(
        (selection) =>
          html`<li
            @mousedown="${() =>
              this.onUpdateMagnifierSize(selection.magnifierSize)}"
            class="${this.selectedMagnifierSize === selection.magnifierSize
              ? 'selected'
              : ''}"
          >
            <svg viewBox="0 0 23 9"><path d="${selection.path}" /></svg>
          </li>`,
      )}
    </ul>`;
  }

  onUpdateMagnifierSize(magnifierSize: number): void {
    this.drawingContext.magnifierSize = magnifierSize;
    this.drawingContext.tool = this.drawingContext.previousEditingTool;
    updateContext(this);
  }
}
