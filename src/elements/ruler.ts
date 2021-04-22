import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('paint-ruler')
export class Ruler extends LitElement {
  static get styles(): CSSResultGroup {
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
