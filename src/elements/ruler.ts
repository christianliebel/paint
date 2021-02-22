import { css, CSSResult, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('paint-ruler')
export class Ruler extends LitElement {
  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        border-top: 1px solid var(--button-dark);
        border-bottom: 1px solid var(--button-light);
      }
    `;
  }

  render(): TemplateResult {
    return html``;
  }
}
