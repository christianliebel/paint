import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('paint-select-box')
export class SelectBox extends LitElement {
  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: grid;
      }

      div {
        border: 1px dashed var(--highlight);
      }
    `;
  }

  render(): TemplateResult {
    return html` <div>
      <slot></slot>
    </div>`;
  }
}
