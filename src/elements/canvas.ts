import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { clearCanvas } from '../helpers/clear-canvas';
import { evaluateTextToolbarVisibility } from '../helpers/evaluate-text-toolbar-visibility';
import { updateContext } from '../helpers/update-context';
import type { DrawingContext } from '../models/drawing-context';
import type { Point } from '../models/point';
import type { PointerPosition } from '../models/pointer-position';
import type { Tool, ToolColor } from '../models/tool';

@customElement('paint-canvas')
export class Canvas extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;
  @property({ attribute: false }) inCanvas = false;
  @property({ attribute: false }) tool?: Tool;

  // Canvas defaults to screen dimensions
  @property({ attribute: false }) canvasWidth = screen.width;
  @property({ attribute: false }) canvasHeight = screen.height;

  private pointerDown = false;
  private previewColor: 'primary' | 'secondary' = 'primary';
  private lastPointerEventTime = 0;

  static get styles(): CSSResultGroup {
    return css`
      :host {
        height: 100%;

        box-sizing: border-box;
        border: 1px solid var(--button-dark);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);

        overflow: hidden;
      }

      div.frame {
        height: 100%;

        box-sizing: border-box;
        border: 1px solid var(--button-darker);
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

      canvas,
      paint-text-area {
        grid-row: 2;
        grid-column: 2;
      }

      canvas {
        image-rendering: pixelated;
        transform-origin: top left;
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

  render(): TemplateResult {
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
              style="transform: scale(${this.drawingContext.magnifierSize})"
              @pointerdown="${this.onPointerDown}"
              @contextmenu="${(event: Event) => event.preventDefault()}"
              @pointerenter="${this.onPointerEnter}"
              @pointerleave="${this.onPointerLeave}"
            ></canvas>
            <!-- for operations with previews (line, rectangle, brush, …) -->
            <canvas
              class="preview"
              style="transform: scale(${this.drawingContext.magnifierSize})"
              width="${this.canvasWidth}"
              height="${this.canvasHeight}"
            ></canvas>
            <paint-text-area
              .drawingContext="${this.drawingContext}"
            ></paint-text-area>
            <paint-handle></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle></paint-handle>
            <paint-handle></paint-handle>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated(): void {
    if (!this.shadowRoot) {
      throw new Error('Shadow root not present.');
    }

    const canvas = this.shadowRoot.querySelector(
      'canvas.main',
    ) as HTMLCanvasElement;
    const previewCanvas = this.shadowRoot.querySelector(
      'canvas.preview',
    ) as HTMLCanvasElement;
    const context = canvas.getContext('2d', {
      desynchronized: true,
      willReadFrequently: true,
    });
    const previewContext = previewCanvas.getContext('2d', {
      desynchronized: true,
    });

    if (!context || !previewContext) {
      throw new Error('Canvas context not present.');
    }

    context.imageSmoothingEnabled = false;
    this.drawingContext.canvas = canvas;
    this.drawingContext.context = context;
    this.drawingContext.previewCanvas = previewCanvas;
    this.drawingContext.previewContext = previewContext;
    this.drawingContext.element = this;
    clearCanvas(this.drawingContext);
    this.drawingContext.document.dirty = false;
    updateContext(this);
    document.addEventListener('pointermove', (event) => this.throttledPointerMove(event));

    document.addEventListener('pointerup', (event) => this.onPointerUp(event));

    this.dispatchEvent(
      new CustomEvent('canvas-ready', { bubbles: true, composed: true }),
    );
    
  }

  throttledPointerMove(event: PointerEvent): void {
    const currentTime = Date.now();
    if (currentTime - this.lastPointerEventTime < 8) { // Throttle mouse polling rate to ~125hz 1000/125 = 8
      return;
    }
    this.lastPointerEventTime = currentTime;
    this.onPointerMove(event);
  }

  getToolEventArgs(
    x: number,
    y: number,
  ): [number, number, DrawingContext, ToolColor] {
    const strokeKey = this.pointerDown ? this.previewColor : 'primary';
    const fillKey = strokeKey === 'primary' ? 'secondary' : 'primary';
    const color: ToolColor = {
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

  onPointerDown(event: PointerEvent): void {
    this.pointerDown = true;
    this.previewColor = event.button !== 2 ? 'primary' : 'secondary';

    this.drawingContext.text.active = false;
    evaluateTextToolbarVisibility(this.drawingContext);
    updateContext(this);

    if (this.tool?.onPointerDown) {
      const { x, y } = this.getCoordinates(event);
      this.tool.onPointerDown(...this.getToolEventArgs(x, y));
    }

    event.preventDefault();
  }

  onPointerMove(event: PointerEvent): void {
    const { x, y } = this.getCoordinates(event);
    if (this.inCanvas && this.drawingContext.canvas) {
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

    if (this.tool?.onPointerHover) {
      this.tool.onPointerHover(...this.getToolEventArgs(x, y));
    }

    if (this.pointerDown && this.tool?.onPointerMove) {
      this.tool.onPointerMove(...this.getToolEventArgs(x, y));
    }
  }

  onPointerUp(event: PointerEvent): void {
    if (!this.pointerDown) {
      return;
    }

    const { x, y } = this.getCoordinates(event);
    if (this.tool?.onPointerUp) {
      this.tool.onPointerUp(...this.getToolEventArgs(x, y));
    }

    this.drawingContext.history?.commit();

    // This position is important for correct preview behavior
    // -> after the right-click pointer (secondary tool color) is up,
    //    tools should preview the primary color again
    this.pointerDown = false;

    if (this.tool?.onPointerHover) {
      this.tool.onPointerHover(...this.getToolEventArgs(x, y));
    }
  }

  onPointerEnter(): void {
    this.inCanvas = true;
    const { canvas, tool } = this.drawingContext;
    if (canvas) {
      canvas.style.cursor = tool.cursor ?? 'default';
    }
  }

  onPointerLeave(): void {
    this.inCanvas = false;
    this.dispatchEvent(
      new CustomEvent('coordinate', { bubbles: true, composed: true }),
    );
  }

  getCoordinates({ clientX, clientY }: PointerPosition): Point {
    if (!this.drawingContext.canvas) {
      throw new Error('Canvas not initialized yet.');
    }

    const { left, top } = this.drawingContext.canvas.getBoundingClientRect();
    const x = Math.floor((clientX - left) / this.drawingContext.magnifierSize);
    const y = Math.floor((clientY - top) / this.drawingContext.magnifierSize);
    return { x, y };
  }
}
