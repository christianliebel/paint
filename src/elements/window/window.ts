import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Point } from '../../models/point';
import type { PointerPosition } from '../../models/pointer-position';

@customElement('paint-window')
export class Window extends LitElement {
  @property({ type: String }) caption = '';
  @property({ type: Boolean }) help = false;
  @property({ type: Boolean }) close = false;

  position: Point = { x: 100, y: 50 };
  mousePosition: PointerPosition | null = null;

  pointerUpListener: (pointerPosition: PointerPosition) => void;
  pointerMoveListener: (pointerPosition: PointerPosition) => void;

  static get styles(): CSSResultGroup {
    return css`
      :host {
        border: 1px solid var(--button-face);
        border-right-color: var(--button-darker);
        border-bottom-color: var(--button-darker);
        background-color: var(--button-face);
        display: flex;
        position: absolute;
        z-index: var(--z-index-dialog);
        box-sizing: border-box;
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

      :host[tool] div.title-bar {
        height: 15px;
        font-size: 9px;
        /* TODO: More stuff */
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

    this.moveWindow();
  }

  render(): TemplateResult {
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

  disconnectedCallback(): void {
    super.disconnectedCallback();

    document.removeEventListener('pointermove', this.pointerMoveListener);
    document.removeEventListener('pointerup', this.pointerUpListener);
  }

  onPointerDown({ clientX, clientY }: PointerPosition): void {
    this.mousePosition = { clientX, clientY };
  }

  onPointerMove({ clientX, clientY }: PointerPosition): void {
    if (this.mousePosition) {
      clientX = Window.clamp(clientX, 0, innerWidth);
      clientY = Window.clamp(clientY, 0, innerHeight);
      const deltaX = clientX - this.mousePosition.clientX;
      const deltaY = clientY - this.mousePosition.clientY;
      this.position.x = this.position.x + deltaX;
      this.position.y = this.position.y + deltaY;
      this.mousePosition = { clientX, clientY };
      this.moveWindow();
    }
  }

  private static clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  onPointerUp(): void {
    this.mousePosition = null;
  }

  center(): void {
    const { width, height } = this.getBoundingClientRect();
    this.position = {
      x: (innerWidth - width) / 2,
      y: (innerHeight - height) / 2,
    };
    this.moveWindow();
  }

  moveWindow(): void {
    this.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
  }

  onClose(): void {
    this.dispatchEvent(
      new CustomEvent('close', { bubbles: true, composed: true }),
    );
  }
}
