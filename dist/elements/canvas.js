var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {
  css,
  customElement,
  html,
  LitElement,
  property
} from "../../_snowpack/pkg/lit-element.js";
import {DRAWING_CONTEXT} from "../data/drawing-context.js";
import {evaluateTextToolbarVisibility} from "../helpers/evaluate-text-toolbar-visibility.js";
import {updateContext} from "../helpers/update-context.js";
export let Canvas = class extends LitElement {
  constructor() {
    super(...arguments);
    this.drawingContext = DRAWING_CONTEXT;
    this.inCanvas = false;
    this.canvasWidth = screen.width;
    this.canvasHeight = screen.height;
    this.pointerDown = false;
    this.previewColor = "primary";
  }
  static get styles() {
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

      canvas, paint-text-area {
        grid-row: 2;
        grid-column: 2;
      }

      canvas {
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
  firstUpdated() {
    if (!this.shadowRoot) {
      throw new Error("Shadow root not present.");
    }
    const canvas = this.shadowRoot.querySelector("canvas.main");
    const previewCanvas = this.shadowRoot.querySelector("canvas.preview");
    const context = canvas.getContext("2d", {desynchronized: true});
    const previewContext = previewCanvas.getContext("2d", {
      desynchronized: true
    });
    if (!context || !previewContext) {
      throw new Error("Canvas context not present.");
    }
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = false;
    this.drawingContext.canvas = canvas;
    this.drawingContext.context = context;
    this.drawingContext.previewCanvas = previewCanvas;
    this.drawingContext.previewContext = previewContext;
    this.drawingContext.element = this;
    updateContext(this);
    document.addEventListener("pointermove", (event) => this.onPointerMove(event));
    document.addEventListener("pointerup", (event) => this.onPointerUp(event));
    this.dispatchEvent(new CustomEvent("canvas-ready", {bubbles: true, composed: true}));
  }
  getToolEventArgs(x, y) {
    const strokeKey = this.pointerDown ? this.previewColor : "primary";
    const fillKey = strokeKey === "primary" ? "secondary" : "primary";
    const color = {
      stroke: {
        key: strokeKey,
        value: this.drawingContext.colors[strokeKey]
      },
      fill: {
        key: fillKey,
        value: this.drawingContext.colors[fillKey]
      }
    };
    return [x, y, this.drawingContext, color];
  }
  onPointerDown(event) {
    this.pointerDown = true;
    this.previewColor = event.button !== 2 ? "primary" : "secondary";
    this.drawingContext.text.active = false;
    evaluateTextToolbarVisibility(this.drawingContext);
    updateContext(this);
    if (this.tool?.onPointerDown) {
      const {x, y} = this.getCoordinates(event);
      this.tool.onPointerDown(...this.getToolEventArgs(x, y));
    }
    event.preventDefault();
  }
  onPointerMove(event) {
    const {x, y} = this.getCoordinates(event);
    if (this.inCanvas && this.drawingContext.canvas) {
      this.dispatchEvent(new CustomEvent("coordinate", {
        detail: {
          x: Math.max(0, Math.min(this.drawingContext.canvas.width, x)),
          y: Math.max(0, Math.min(this.drawingContext.canvas.height, y))
        },
        bubbles: true,
        composed: true
      }));
    }
    if (this.tool?.onPointerHover) {
      this.tool.onPointerHover(...this.getToolEventArgs(x, y));
    }
    if (this.pointerDown && this.tool?.onPointerMove) {
      this.tool.onPointerMove(...this.getToolEventArgs(x, y));
    }
  }
  onPointerUp(event) {
    if (!this.pointerDown) {
      return;
    }
    const {x, y} = this.getCoordinates(event);
    if (this.tool?.onPointerUp) {
      this.tool.onPointerUp(...this.getToolEventArgs(x, y));
    }
    this.pointerDown = false;
    if (this.tool?.onPointerHover) {
      this.tool.onPointerHover(...this.getToolEventArgs(x, y));
    }
  }
  onPointerEnter() {
    this.inCanvas = true;
    const {canvas, tool} = this.drawingContext;
    if (canvas) {
      canvas.style.cursor = tool.cursor ?? "default";
    }
  }
  onPointerLeave() {
    this.inCanvas = false;
    this.dispatchEvent(new CustomEvent("coordinate", {bubbles: true, composed: true}));
  }
  getCoordinates({clientX, clientY}) {
    if (!this.drawingContext.canvas) {
      throw new Error("Canvas not initialized yet.");
    }
    const {left, top} = this.drawingContext.canvas.getBoundingClientRect();
    const x = Math.floor(clientX - left);
    const y = Math.floor(clientY - top);
    return {x, y};
  }
};
__decorate([
  property()
], Canvas.prototype, "drawingContext", 2);
__decorate([
  property({attribute: false})
], Canvas.prototype, "inCanvas", 2);
__decorate([
  property({attribute: false})
], Canvas.prototype, "tool", 2);
__decorate([
  property({attribute: false})
], Canvas.prototype, "canvasWidth", 2);
__decorate([
  property({attribute: false})
], Canvas.prototype, "canvasHeight", 2);
Canvas = __decorate([
  customElement("paint-canvas")
], Canvas);
