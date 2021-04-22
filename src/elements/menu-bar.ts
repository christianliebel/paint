import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { renderMnemonic } from '../helpers/render-mnemonic';
import type { MenuEntry } from '../models/menu';

@customElement('paint-menu-bar')
export class MenuBar extends LitElement {
  @property() entries: MenuEntry[] = [];
  @property() drawingContext = DRAWING_CONTEXT;
  @property({ attribute: false }) activeMenu: MenuEntry | null = null;

  static get styles(): CSSResultGroup {
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

  render(): TemplateResult {
    // TODO: mnemonic support
    // TODO: Keyboard support
    // TODO: Shortcut support
    return html`
      <ul @click="${(event: Event) => event.stopPropagation()}">
        ${this.entries.map(
          (entry) => html`
            <li
              @click="${() => this.onClick(entry)}"
              @pointerenter="${() => this.onPointerEnter(entry)}"
              @pointerleave="${() => this.onPointerLeave()}"
              class="${this.activeMenu === entry
                ? 'active'
                : ''} ${entry.disabled ? 'disabled' : ''}"
            >
              ${renderMnemonic(entry.caption, entry.mnemonic)}
              ${!entry.disabled && entry.entries
                ? html`<paint-menu
                    .entries="${entry.entries}"
                    .drawingContext="${this.drawingContext}"
                  >
                  </paint-menu>`
                : ''}
            </li>
          `,
        )}
      </ul>
    `;
  }

  onClick(entry: MenuEntry): void {
    this.activeMenu = this.activeMenu === entry ? null : entry;
  }

  onPointerEnter(entry: MenuEntry): void {
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

  onPointerLeave(): void {
    this.dispatchEvent(
      new CustomEvent('set-help-text', { bubbles: true, composed: true }),
    );
  }
}
