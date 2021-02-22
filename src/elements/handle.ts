import { css, CSSResult, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('paint-handle')
export class Handle extends LitElement {
  static get styles(): CSSResult {
    return css`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 3px;
        height: 3px;
        border-top: 1px solid var(--highlight);
        border-left: 1px solid var(--highlight);
        background-color: var(--highlight);
      }

      :host([disabled]) {
        background-color: var(--highlight-text);
      }
    `;
  }

  render(): TemplateResult {
    return html``;
  }
}
