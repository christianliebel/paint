import { css, html, LitElement } from '../web_modules/lit-element.js';

class Canvas extends LitElement {
  static get properties() {
    return {
      inCanvas: { attribute: false },
      canvasWidth: { attribute: false },
      canvasHeight: { attribute: false },
      primaryColor: { type: String },
      secondaryColor: { type: String },
      tool: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        height: 100%;

        box-sizing: border-box;
        border: 1px solid var(--canvas);
        border-bottom-color: var(--highlight-text);
        border-right-color: var(--highlight-text);

        overflow: hidden;
      }

      div.frame {
        height: 100%;

        box-sizing: border-box;
        border: 1px solid var(--button-text);
        border-bottom-color: var(--button-face);
        border-right-color: var(--button-face);

        overflow: hidden;
      }

      div.scroll-container {
        height: 100%;
        overflow: auto;
        touch-action: none;
      }

      div.document {
        vertical-align: top;
        display: inline-grid;
        grid-template-columns: 3px auto 3px;
        grid-template-rows: 3px auto 3px;
      }

      paint-handle {
        place-self: center;
      }

      @media print {
        :host,
        * {
          border: 0 !important;
        }

        canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          image-rendering: pixelated;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="frame">
        <div class="scroll-container">
          <div class="document">
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <canvas
            <paint-handle disabled></paint-handle>
              width="${this.canvasWidth}"
              height="${this.canvasHeight}"
              @pointerdown="${this.onPointerDown}"
              @contextmenu="${(event) => event.preventDefault()}"
              @pointerenter="${this.onPointerEnter}"
              @pointerleave="${this.onPointerLeave}"
            ></canvas>
            <paint-handle></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle></paint-handle>
            <paint-handle></paint-handle>
          </div>
        </div>
      </div>
    `;
  }

  constructor() {
    super();

    // Canvas defaults to screen dimensions
    this.canvasWidth = screen.width;
    this.canvasHeight = screen.height;
  }

  firstUpdated() {
    const canvas = this.shadowRoot.querySelector('canvas');
    const context = canvas.getContext('2d', { desynchronized: true });
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = false;
    this.canvas = canvas;
    this.context = context;

    document.addEventListener('pointermove', (event) =>
      this.onPointerMove(event),
    );
    document.addEventListener('pointerup', (event) => this.onPointerUp(event));

    this.dispatchEvent(
      new CustomEvent('drawing-context-created', {
        detail: { canvas, context },
        bubbles: true,
        composed: true,
      }),
    );
  }

  onPointerDown(event) {
    this.pointerDown = true;
    if (this.tool && this.tool.onPointerDown) {
      const { x, y } = this.getCoordinates(event);
      this.tool.onPointerDown({
        event,
        x,
        y,
        canvas: this.canvas,
        context: this.context,
        primaryColor: this.primaryColor,
        secondaryColor: this.secondaryColor,
        element: this,
      });
    }
    event.preventDefault();
  }

  onPointerMove(event) {
    const { x, y } = this.getCoordinates(event);
    if (this.inCanvas) {
      this.dispatchEvent(
        new CustomEvent('coordinate', {
          detail: { x, y },
          bubbles: true,
          composed: true,
        }),
      );
    }

    if (this.pointerDown && this.tool && this.tool.onPointerMove) {
      this.tool.onPointerMove({
        event,
        x,
        y,
        context: this.context,
        primaryColor: this.primaryColor,
        secondaryColor: this.secondaryColor,
        element: this,
      });
    }
  }

  onPointerUp(event) {
    if (this.pointerDown && this.tool && this.tool.onPointerUp) {
      const { x, y } = this.getCoordinates(event);
      this.tool.onPointerUp({
        event,
        x,
        y,
        context: this.context,
        primaryColor: this.primaryColor,
        secondaryColor: this.secondaryColor,
        element: this,
      });
    }
    this.pointerDown = false;
  }

  onPointerEnter() {
    this.inCanvas = true;
  }

  onPointerLeave() {
    this.inCanvas = false;
    this.dispatchEvent(
      new CustomEvent('coordinate', { bubbles: true, composed: true }),
    );
  }

  getCoordinates({ clientX, clientY }) {
    const { left, top } = this.canvas.getBoundingClientRect();
    const x = Math.floor(
      Math.max(0, Math.min(this.canvas.width, clientX - left)),
    );
    const y = Math.floor(
      Math.max(0, Math.min(this.canvas.height, clientY - top)),
    );
    return { x, y };
  }
}

customElements.define('paint-canvas', Canvas);
