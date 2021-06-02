import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ToolDefinition } from '../models/tool-definition';

@customElement('paint-tool')
export class Tool extends LitElement {
  @property() tool?: ToolDefinition;

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        border: 1px solid var(--button-darker);
        border-top: 1px solid var(--button-light);
        border-left: 1px solid var(--button-light);
        background-color: var(--button-face);
        image-rendering: pixelated;
      }

      div.wrapper {
        height: 100%;
        border: 1px solid var(--button-dark);
        border-top: 1px solid var(--button-face);
        border-left: 1px solid var(--button-face);
        box-sizing: border-box;
      }

      div.tool {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url('assets/tools-light.png');
        background-repeat: no-repeat;
        margin: 2px;
      }

      @media (prefers-color-scheme: dark) {
        div.tool {
          background-image: url('assets/tools-dark.png');
        }
      }

      :host(.active),
      :host(:active:hover) {
        border: 1px solid var(--button-light);
        border-top: 1px solid var(--button-darker);
        border-left: 1px solid var(--button-darker);
        background-image: var(--selected-background);
      }

      :host(.active) div.wrapper,
      :host(:active:hover) div.wrapper {
        border: 1px solid var(--button-face);
        border-top: 1px solid var(--button-dark);
        border-left: 1px solid var(--button-dark);
      }

      :host(:active:hover) div.wrapper {
        background-color: var(--button-face);
      }

      :host(.active) div.tool {
        margin: 3px;
      }

      :host(:active:hover) div.tool {
        margin: 4px;
      }
    `;
  }

  constructor() {
    super();
    this.addEventListener('pointerenter', () =>
      this.dispatchEvent(
        new CustomEvent('set-help-text', {
          detail: this.tool?.helpText ?? '',
          bubbles: true,
          composed: true,
        }),
      ),
    );
    this.addEventListener('pointerleave', () =>
      this.dispatchEvent(
        new CustomEvent('set-help-text', { bubbles: true, composed: true }),
      ),
    );
  }

  render(): TemplateResult {
    return html`
      <div class="wrapper">
        <div
          class="tool"
          style="background-position: ${this.tool?.imagePosition}"
        ></div>
      </div>
    `;
  }
}
