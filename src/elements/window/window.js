import { css, html, LitElement } from 'lit-element';

export class Window extends LitElement {
  static get properties() {
    return {
      caption: { type: String },
      help: { type: Boolean },
      close: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        border: 1px solid var(--button-face);
        border-right-color: var(--button-darker);
        border-bottom-color: var(--button-darker);
        background-color: var(--button-face);
        display: flex;
        position: absolute;
        z-index: var(--z-index-dialog);
      }

      .wrapper {
        border: 1px solid var(--button-light);
        border-right-color: var(--button-dark);
        border-bottom-color: var(--button-dark);
        padding: 1px;
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      div.title-bar {
        background-color: var(--highlight);
        color: var(--highlight-text);
        height: 18px;
        display: flex;
        font-weight: bold;
        align-items: center;
        box-sizing: border-box;
        padding: 1px 2px;
        margin-bottom: 1px;
      }

      div.title-bar span.title {
        flex: 1;
      }

      paint-window-title-bar-button:last-of-type {
        margin-left: 2px;
      }
    `;
  }

  constructor() {
    super();

    this.pointerMoveListener = this.onPointerMove.bind(this);
    this.pointerUpListener = this.onPointerUp.bind(this);
    document.addEventListener('pointermove', this.pointerMoveListener);
    document.addEventListener('pointerup', this.pointerUpListener);

    this.position = { x: 100, y: 50 };
    this.moveWindow();
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="title-bar" @pointerdown="${this.onPointerDown}">
          <span class="title">${this.caption}</span>
          ${this.help
            ? html`<paint-window-title-bar-button
                help
              ></paint-window-title-bar-button>`
            : ''}
          ${this.close
            ? html`<paint-window-title-bar-button
                close
                @click="${this.onClose}"
              ></paint-window-title-bar-button>`
            : ''}
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    document.removeEventListener('pointermove', this.pointerMoveListener);
    document.removeEventListener('pointerup', this.pointerUpListener);
  }

  onPointerDown({ clientX, clientY }) {
    this.mousePosition = { clientX, clientY };
  }

  onPointerMove({ clientX, clientY }) {
    // TODO: Disallow moving out of bounds
    if (this.mousePosition) {
      const deltaX = clientX - this.mousePosition.clientX;
      const deltaY = clientY - this.mousePosition.clientY;
      this.position.x = this.position.x + deltaX;
      this.position.y = this.position.y + deltaY;
      this.mousePosition = { clientX, clientY };
      this.moveWindow();
    }
  }

  onPointerUp() {
    this.mousePosition = null;
  }

  moveWindow() {
    this.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
  }

  onClose() {
    this.dispatchEvent(
      new CustomEvent('close', { bubbles: true, composed: true }),
    );
  }
}

customElements.define('paint-window', Window);
