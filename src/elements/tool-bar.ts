import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('paint-tool-bar')
export class ToolBar extends LitElement {
  static get styles(): CSSResultGroup {
    return css`
      :host {
        background-color: var(--button-face);
        padding-right: 1px;
      }
    `;
  }

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}
