import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('paint-grid')
export class Grid extends LitElement {
  static get styles(): CSSResultGroup {
    return css`
      :host {
        position: relative;
        pointer-events: none;
        background-image:
          conic-gradient(
            from 0deg at 1px 1px,
            #c0c0c0 0deg 90deg,
            transparent 90deg 270deg,
            #a0a0a0 270deg 360deg
          ),
          conic-gradient(
            from 0deg at 1px 1px,
            transparent 0deg 180deg,
            #c0c0c0 180deg 270deg,
            #a0a0a0 270deg 360deg
          );
        background-size:
          2px var(--grid-size),
          var(--grid-size) 2px;
      }
    `;
  }

  render(): TemplateResult {
    return html``;
  }
}
