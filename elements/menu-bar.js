import { css, html, LitElement } from '../web_modules/lit-element.js';

class MenuBar extends LitElement {
  static get properties() {
    return {
      entries: { type: Array },
      activeMenu: { attribute: false },
    };
  }

  static get styles() {
    return css`
      :host {
        background-color: var(--button-face);
        display: flex;
        height: 20px;
      }

      ul {
        list-style-type: none;
        display: flex;
        margin: 0;
        padding: 1px 0;
      }

      li {
        padding: 1px 6px;
        position: relative;
      }

      li.active {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }

      li.disabled {
        color: var(--canvas);
        text-shadow: 1px 1px 0 var(--highlight-text);
      }

      li.active.disabled {
        color: var(--canvas);
        text-shadow: none;
      }

      paint-menu {
        display: none;
      }
      li.active paint-menu {
        display: block;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `;
  }

  constructor() {
    super();
    // TODO: removeEventListeners on destroy
    document.addEventListener('click', () => (this.activeMenu = null));
    this.addEventListener('action-executed', () => (this.activeMenu = null));
  }

  render() {
    // TODO: mnemonic support
    // TODO: Keyboard support
    // TODO: Shortcut support
    return html`
      <ul @click="${(event) => event.stopPropagation()}">
        ${this.entries.map(
          (entry) => html`
            <li
              @click="${() => this.onClick(entry)}"
              @pointerenter="${() => this.onPointerEnter(entry)}"
              @pointerleave="${() => this.onPointerLeave(entry)}"
              class="${this.activeMenu === entry
                ? 'active'
                : ''} ${entry.disabled ? 'disabled' : ''}"
            >
              ${entry.caption}
              ${!entry.disabled && entry.entries
                ? html`<paint-menu .entries="${entry.entries}"></paint-menu>`
                : ''}
            </li>
          `,
        )}
      </ul>
    `;
  }

  onClick(entry) {
    this.activeMenu = this.activeMenu === entry ? null : entry;
  }

  onPointerEnter(entry) {
    this.dispatchEvent(
      new CustomEvent('set-help-text', {
        detail: entry.helpText,
        bubbles: true,
        composed: true,
      }),
    );
    if (this.activeMenu) {
      this.activeMenu = entry;
    }
  }

  onPointerLeave() {
    this.dispatchEvent(
      new CustomEvent('set-help-text', { bubbles: true, composed: true }),
    );
  }
}

customElements.define('paint-menu-bar', MenuBar);
