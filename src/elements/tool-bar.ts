import { css, CSSResult, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('paint-tool-bar')
export class ToolBar extends LitElement {
  static get styles(): CSSResult {
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
