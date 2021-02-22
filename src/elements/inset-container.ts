import { css, CSSResult, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('paint-inset-container')
export class InsetContainer extends LitElement {
  // TODO: InsetContainer should not define align-items, maybe not even display: flex.
  // TODO: button-face pixels bottom left, top right via before/after
  static get styles(): CSSResult {
    return css`
      :host {
        box-sizing: border-box;
        border: 1px solid var(--button-dark);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);

        display: flex;
        align-items: flex-end;
      }
    `;
  }

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}
