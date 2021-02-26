import {
  css,
  CSSResult,
  customElement,
  html,
  LitElement,
  TemplateResult,
} from 'lit-element';

@customElement('paint-select-box')
export class SelectBox extends LitElement {
  static get styles(): CSSResult {
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
    return html`<div><slot></slot></div>`;
  }
}
