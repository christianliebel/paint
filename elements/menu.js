import { css, html, LitElement } from '../web_modules/lit-element.js';

class Menu extends LitElement {
  static get properties() {
    return {
      entries: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: var(--z-index-menu);
        display: inline-block;
        box-sizing: border-box;
        border: 1px solid var(--button-text);
        border-top: 1px solid var(--button-face);
        border-left: 1px solid var(--button-face);
        background-color: var(--button-face);
        color: var(--button-text);
      }

      :host(.submenu) {
        top: -3px;
        left: 100%;
      }

      div.frame {
        border: 1px solid var(--canvas);
        border-top: 1px solid var(--highlight-text);
        border-left: 1px solid var(--highlight-text);
        display: grid;
        grid-template-columns: 22px auto auto 19px;
        padding: 1px;
        white-space: nowrap;
      }

      paint-ruler {
        grid-column: 1 / span 4;
        margin: 1px 0;
      }

      .menu-entry {
        display: contents;
      }

      .menu-entry span {
        height: 20px;
        display: flex;
        align-items: center;
        position: relative;
      }
      
      .menu-entry span .mnemonic {
        text-decoration: underline;
      }
      
      .menu-entry:not(:hover) paint-menu {
        display: none;
      }

      .menu-entry span.shortcut {
        padding-left: 9px;
      }

      .menu-entry:hover span {
        background-color: var(--highlight);
        color: var(--highlight-text);
        text-shadow: none;
      }

      .menu-entry.disabled:hover span {
        color: var(--canvas);
      }

      .disabled {
        color: var(--canvas);
        text-shadow: 1px 1px 0 var(--highlight-text);
      }
    `;
  }

  constructor() {
    super();
    this.addEventListener('click', (event) => event.stopPropagation());
  }

  render() {
    return html`<div class="frame">
      ${this.entries.map((entry) => this.getMenuEntry(entry))}
    </div>`;
  }

  getMenuEntry(entry) {
    if (entry.separator) {
      return html`<paint-ruler></paint-ruler>`;
    }

    return html`
      <div
        class="menu-entry ${entry.disabled ? 'disabled' : ''}"
        @click="${() => this.execute(entry)}"
        @pointerenter="${() => this.setHelpText(entry.helpText)}"
        @pointerleave="${this.resetHelpText}"
      >
        <span></span>
        <span>${this.resolveMnemonic(entry.caption, entry.mnemonic)}</span>
        <span class="${entry.shortcut ? 'shortcut' : ''}"
          >${entry.shortcut}</span
        >
        <span class="opener">
          ${entry.entries
            ? html`<paint-menu
                class="submenu"
                .entries="${entry.entries}"
              ></paint-menu>`
            : ''}
        </span>
      </div>
    `;
  }

  resolveMnemonic(caption, mnemonic) {
    const index = caption.indexOf(mnemonic);
    return html`${caption.substring(0, index)}<span class="mnemonic">${mnemonic}</span>${caption.substring(index + 1)}`;
  }

  execute(entry) {
    if (!entry.disabled && entry.action) {
      this.dispatchEvent(
        new CustomEvent('invoke-action', {
          detail: entry.action,
          bubbles: true,
          composed: true,
        }),
      );
      this.dispatchEvent(
        new CustomEvent('action-executed', { bubbles: true, composed: true }),
      );
    }
  }

  setHelpText(value) {
    this.dispatchEvent(
      new CustomEvent('set-help-text', {
        detail: value,
        bubbles: true,
        composed: true,
      }),
    );
  }

  resetHelpText() {
    this.dispatchEvent(
      new CustomEvent('reset-help-text', { bubbles: true, composed: true }),
    );
  }
}

customElements.define('paint-menu', Menu);
