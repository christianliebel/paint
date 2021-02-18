import { css, html, LitElement } from 'lit-element';
import { renderMnemonic } from '../helpers/render-mnemonic';

class Menu extends LitElement {
  static get properties() {
    return {
      entries: { type: Array },
      drawingContext: { type: Object },
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
        border: 1px solid var(--button-darker);
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
        border-top: 1px solid var(--button-light);
        border-left: 1px solid var(--button-light);
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
        box-sizing: border-box;
        padding: 2px 0;
        position: relative;
      }

      .menu-entry span .mnemonic {
        text-decoration: underline;
      }

      .menu-entry:not(:hover) paint-menu {
        display: none;
      }

      .menu-entry .selection svg {
        height: 9px;
        width: 9px;
        margin-left: 6px;
      }

      .menu-entry .opener svg {
        height: 7px;
        width: 4px;
        margin-left: 10px;
      }

      .menu-entry span.shortcut {
        padding-left: 9px;
      }

      .menu-entry span {
        fill: var(--button-text);
      }

      .menu-entry:hover span {
        background-color: var(--highlight);
        color: var(--highlight-text);
        fill: var(--highlight-text);
      }

      .menu-entry.disabled:hover span {
        color: var(--highlight-disabled-text);
        fill: var(--highlight-disabled-text);
        text-shadow: none;
      }

      .menu-entry.disabled:hover svg .shadow {
        fill: transparent;
      }

      .menu-entry.disabled span {
        color: var(--disabled-text);
        fill: var(--disabled-text);
        text-shadow: 1px 1px 0 var(--disabled-text-backdrop);
      }

      .disabled svg .shadow {
        fill: var(--disabled-text-backdrop);
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
        class="menu-entry ${this.isDisabled(entry) ? 'disabled' : ''}"
        @click="${() => this.execute(entry)}"
        @pointerenter="${() => this.setHelpText(entry.helpText)}"
        @pointerleave="${() => this.setHelpText()}"
      >
        <span class="selection">
          ${this.isChecked(entry)
            ? html` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                <path
                  class="shadow"
                  fill="transparent"
                  d="M4,7v2h1V8h1V7h1V6h1V5h1V2H8L4,7z"
                />
                <path
                  d="M1,3v3h1v1h1v1h1V7h1V6h1V5h1V4h1V1H7v1H6v1H5v1H4v1H3V4H2V3H1z"
                />
              </svg>`
            : ''}
        </span>
        <span>${renderMnemonic(entry.caption, entry.mnemonic)}</span>
        <span class="${entry.shortcut ? 'shortcut' : ''}"
          >${entry.shortcut}</span
        >
        <span class="opener">
          ${entry.entries
            ? html` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 7">
                  <path d="M0,0v7h1V6h1V5h1V4h1V3H3V2H2V1H1V0H0z" />
                </svg>
                <paint-menu
                  class="submenu"
                  .entries="${entry.entries}"
                  .drawingContext="${this.drawingContext}"
                ></paint-menu>`
            : ''}
        </span>
      </div>
    `;
  }

  isChecked(entry) {
    // TODO: entry.checked should eventually go away
    return (
      entry.checked ||
      (entry.instance?.isChecked &&
        entry.instance.isChecked(this.drawingContext))
    );
  }

  isDisabled({ instance, entries }) {
    return !(
      entries ||
      (instance &&
        (!instance.canExecute || instance.canExecute(this.drawingContext)))
    );
  }

  execute(entry) {
    if (!this.isDisabled(entry) && entry.instance?.execute) {
      this.dispatchEvent(
        new CustomEvent('invoke-action', {
          detail: entry.instance.execute.bind(entry.instance),
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
}

customElements.define('paint-menu', Menu);
