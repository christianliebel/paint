import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { updateContext } from '../helpers/update-context';
import type { FillStyle } from '../models/fill-style';

@customElement('paint-tool-fill-style')
export class ToolFillStyle extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;

  private readonly fillStyles: FillStyle[] = [
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

  static get styles(): CSSResultGroup {
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
        background-color: var(--button-dark);
      }
    `;
  }

  render(): TemplateResult {
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

  isSelected({ stroke, fill }: FillStyle): boolean {
    return (
      stroke === this.drawingContext.fillStyle.stroke &&
      fill === this.drawingContext.fillStyle.fill
    );
  }

  getClasses({ stroke, fill }: FillStyle): string {
    return [...(stroke ? ['stroke'] : []), ...(fill ? ['fill'] : [])].join(' ');
  }

  onSelect(fillStyle: FillStyle): void {
    this.drawingContext.fillStyle = fillStyle;
    updateContext(this);
  }
}
