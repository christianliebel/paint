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
      
      canvas {
        image-rendering: pixelated;
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
            <paint-handle disabled></paint-handle>
            <canvas class="main"
              width="${this.canvasWidth}"
              height="${this.canvasHeight}"
              @pointerdown="${this.onPointerDown}"
              @contextmenu="${(event) => event.preventDefault()}"
              @pointerenter="${this.onPointerEnter}"
              @pointerleave="${this.onPointerLeave}"
            ></canvas>
            <canvas class="preview"
              width="${this.canvasWidth}"
              height="${this.canvasHeight}"
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

  getDrawingContext(event, x, y) {
    return {
      event,
      x,
      y,
      canvas: this.canvas,
      context: this.context,
      previewCanvas: this.previewCanvas,
      previewContext: this.previewContext,
      pointerDown: this.pointerDown,
      primaryColor: this.primaryColor,
      secondaryColor: this.secondaryColor,
      element: this,
    };
  }

  onPointerDown(event) {
    this.pointerDown = true;
    if (this.tool.onPointerDown) {
      const { x, y } = this.getCoordinates(event);
      this.tool.onPointerDown(this.getDrawingContext(event, x, y));
    }
    event.preventDefault();
  }

  onPointerMove(event) {
    const { x, y } = this.getCoordinates(event);
    if (this.inCanvas) {
      this.dispatchEvent(
        new CustomEvent('coordinate', {
          detail: {
            x: Math.max(0, Math.min(this.canvas.width, x)),
            y: Math.max(0, Math.min(this.canvas.height, y)),
          },
          bubbles: true,
          composed: true,
        }),
      );
    }

    if (this.pointerDown && this.tool.onPointerMove) {
      this.tool.onPointerMove(this.getDrawingContext(event, x, y));
    }
  }

  onPointerUp(event) {
    if (this.pointerDown && this.tool.onPointerUp) {
      const { x, y } = this.getCoordinates(event);
      this.tool.onPointerUp(this.getDrawingContext(event, x, y));
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
    const x = Math.floor(clientX - left);
    const y = Math.floor(clientY - top);
    return { x, y };
  }
}

customElements.define('paint-canvas', Canvas);
