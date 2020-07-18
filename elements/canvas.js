import { css, html, LitElement } from '../web_modules/lit-element.js';
import { updateContext } from '../helpers/update-context.js';

class Canvas extends LitElement {
  static get properties() {
    return {
      drawingContext: { type: Object },

      inCanvas: { attribute: false },
      canvasWidth: { attribute: false },
      canvasHeight: { attribute: false },
      tool: { attribute: false },
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
        grid-row: 2;
        grid-column: 2;
        image-rendering: pixelated;
      }

      canvas.preview {
        pointer-events: none;
      }

      @media print {
        :host,
        * {
          border: 0 !important;
        }

        canvas.main {
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
    this.tool = this.drawingContext.tool.instance;
    return html`
      <div class="frame">
        <div class="scroll-container">
          <div class="document">
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <!-- contains the actual drawing -->
            <canvas
              class="main"
              width="${this.canvasWidth}"
              height="${this.canvasHeight}"
              @pointerdown="${this.onPointerDown}"
              @contextmenu="${(event) => event.preventDefault()}"
              @pointerenter="${this.onPointerEnter}"
              @pointerleave="${this.onPointerLeave}"
            ></canvas>
            <!-- for operations with previews (line, rectangle, brush, …) -->
            <canvas
              class="preview"
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
    const canvas = this.shadowRoot.querySelector('canvas.main');
    const previewCanvas = this.shadowRoot.querySelector('canvas.preview');
    const context = canvas.getContext('2d', { desynchronized: true });
    const previewContext = previewCanvas.getContext('2d', {
      desynchronized: true,
    });
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = false;
    this.drawingContext.canvas = canvas;
    this.drawingContext.context = context;
    this.drawingContext.previewCanvas = previewCanvas;
    this.drawingContext.previewContext = previewContext;
    this.drawingContext.element = this;
    updateContext(this);

    document.addEventListener('pointermove', (event) =>
      this.onPointerMove(event),
    );
    document.addEventListener('pointerup', (event) => this.onPointerUp(event));
  }

  getToolEventArgs(x, y) {
    const strokeKey = this.pointerDown ? this.previewColor : 'primary';
    const fillKey = strokeKey === 'primary' ? 'secondary' : 'primary';
    const color = {
      stroke: {
        key: strokeKey,
        value: this.drawingContext.colors[strokeKey],
      },
      fill: {
        key: fillKey,
        value: this.drawingContext.colors[fillKey],
      },
    };
    return [x, y, this.drawingContext, color];
  }

  onPointerDown(event) {
    this.pointerDown = true;
    this.previewColor = event.button !== 2 ? 'primary' : 'secondary';
    if (this.tool.onPointerDown) {
      const { x, y } = this.getCoordinates(event);
      this.tool.onPointerDown(...this.getToolEventArgs(x, y));
    }
    event.preventDefault();
  }

  onPointerMove(event) {
    const { x, y } = this.getCoordinates(event);
    if (this.inCanvas) {
      this.dispatchEvent(
        new CustomEvent('coordinate', {
          detail: {
            x: Math.max(0, Math.min(this.drawingContext.canvas.width, x)),
            y: Math.max(0, Math.min(this.drawingContext.canvas.height, y)),
          },
          bubbles: true,
          composed: true,
        }),
      );
    }

    if (this.tool.onPointerHover) {
      this.tool.onPointerHover(...this.getToolEventArgs(x, y));
    }

    if (this.pointerDown && this.tool.onPointerMove) {
      this.tool.onPointerMove(...this.getToolEventArgs(x, y));
    }
  }

  onPointerUp(event) {
    if (!this.pointerDown) {
      return;
    }

    const { x, y } = this.getCoordinates(event);
    if (this.tool.onPointerUp) {
      this.tool.onPointerUp(...this.getToolEventArgs(x, y));
    }

    // This position is important for correct preview behavior
    // -> after the right-click pointer (secondary tool color) is up,
    //    tools should preview the primary color again
    this.pointerDown = false;

    if (this.tool.onPointerHover) {
      this.tool.onPointerHover(...this.getToolEventArgs(x, y));
    }

    // TODO: Switch to previous tool after picker action
  }

  onPointerEnter() {
    this.inCanvas = true;
    const { canvas, tool } = this.drawingContext;
    canvas.style.cursor = tool.cursor ?? 'default';
  }

  onPointerLeave() {
    this.inCanvas = false;
    this.dispatchEvent(
      new CustomEvent('coordinate', { bubbles: true, composed: true }),
    );
  }

  getCoordinates({ clientX, clientY }) {
    const { left, top } = this.drawingContext.canvas.getBoundingClientRect();
    const x = Math.floor(clientX - left);
    const y = Math.floor(clientY - top);
    return { x, y };
  }
}

customElements.define('paint-canvas', Canvas);
