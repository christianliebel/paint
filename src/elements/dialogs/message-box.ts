import {
  css,
  CSSResultGroup,
  html,
  LitElement,
  PropertyValues,
  TemplateResult,
} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { renderMnemonic } from '../../helpers/render-mnemonic';
import { Window } from '../window/window';

export type MessageBoxIcon = 'warning' | null;
export type CloseReason = 'ok' | 'yes' | 'no' | 'cancel';
export type DialogLayout = 'ok' | 'yes-no-cancel';

@customElement('paint-dialog-message-box')
export class MessageBox extends LitElement {
  @property({ type: String }) prompt = '';
  @property({ type: String }) title = '';
  @property({ type: String }) icon: MessageBoxIcon = null;
  @property({ type: String }) layout: DialogLayout = 'ok';

  @query('paint-window') window?: Window;

  static get styles(): CSSResultGroup {
    return css`
      paint-window {
        position: absolute;
        top: 0;

        max-width: 400px;
      }

      paint-window .content {
        margin: 11px;
        display: grid;

        grid-template-columns: auto 1fr;
        grid-row-gap: 17px;
        align-items: center;
      }

      paint-window img.icon {
        width: 32px;
        height: 32px;

        margin-right: 17px;

        image-rendering: pixelated;
      }

      paint-window .prompt {
        grid-column-start: 2;
        grid-column-end: 3;

        white-space: pre-wrap;
      }

      paint-window .buttons {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 3;

        display: flex;
        justify-content: center;
      }

      paint-window .buttons paint-button + paint-button {
        margin-left: 6px;
      }
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    requestAnimationFrame(() => this.window?.center());
  }

  render(): TemplateResult {
    return html`
      <paint-window caption="${this.title}" close>
        <div class="content">
          ${this.getIcon()}
          <div class="prompt">${this.prompt}</div>
          <div class="buttons">${this.getDialogLayout()}</div>
        </div>
      </paint-window>
    `;
  }

  getIcon(): TemplateResult {
    if (this.icon === 'warning') {
      return html` <img
        class="icon"
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAElBMVEUAAAAAAAAAgACAgIDAwMD//wCJvpKsAAAAAXRSTlMAQObYZgAAAIxJREFUKJFlj9EJAjAMREN1gXy4gf0vZAGhOoCQ7L+KNpWkZ+6vD+71QrRzJ0yzxz+YA0A3LUCwYTYLGNAwlDgQaDBImr35dkq6Ay1ADsUCKQkworGBFiC5W/mV5yywhoVk7TayPMeBZ0uaZWYCtpB4w7/9SQBIKDgkp9MlHYAWIHR9nplfq2CILvAeH0wjUtKxjmmsAAAAAElFTkSuQmCC"
      />`;
    }

    return html``;
  }

  getDialogLayout(): TemplateResult {
    if (this.layout === 'ok') {
      return html` <paint-button
        @click="${() => this.onClose('ok')}"
        tabindex="0"
        >OK
      </paint-button>`;
    }

    if (this.layout === 'yes-no-cancel') {
      return html`
        <paint-button @click="${() => this.onClose('yes')}" tabindex="0"
          >${renderMnemonic('Yes', 'Y')}
        </paint-button>
        <paint-button @click="${() => this.onClose('no')}" tabindex="0"
          >${renderMnemonic('No', 'N')}
        </paint-button>
        <paint-button @click="${() => this.onClose('cancel')}" tabindex="0"
          >Cancel
        </paint-button>
      `;
    }

    throw new Error('Unsupported Layout.');
  }

  onClose(reason: CloseReason): void {
    this.dispatchEvent(new CustomEvent('close', { detail: { reason } }));
  }
}
