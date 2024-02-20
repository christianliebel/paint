function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }
function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }
function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }
function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }
function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }
function _hasDecorators(element) { return element.decorators && element.decorators.length; }
function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }
function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { css, html, LitElement } from '../../_snowpack/pkg/lit.js';
import { customElement, property } from '../../_snowpack/pkg/lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context.js';
import { clearCanvas } from '../helpers/clear-canvas.js';
import { evaluateTextToolbarVisibility } from '../helpers/evaluate-text-toolbar-visibility.js';
import { updateContext } from '../helpers/update-context.js';
export let Canvas = _decorate([customElement('paint-canvas')], function (_initialize, _LitElement) {
  class Canvas extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: Canvas,
    d: [{
      kind: "field",
      decorators: [property()],
      key: "drawingContext",
      value() {
        return DRAWING_CONTEXT;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "inCanvas",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "tool",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "canvasWidth",
      value() {
        return screen.width;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "canvasHeight",
      value() {
        return screen.height;
      }
    }, {
      kind: "field",
      key: "pointerDown",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "previewColor",
      value() {
        return 'primary';
      }
    }, {
      kind: "field",
      key: "lastPointerEventTime",
      value() {
        return 0;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value:
      // Canvas defaults to screen dimensions

      function styles() {
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
    }, {
      kind: "method",
      key: "render",
      value: function render() {
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
              @contextmenu="${event => event.preventDefault()}"
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
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        if (!this.shadowRoot) {
          throw new Error('Shadow root not present.');
        }
        const canvas = this.shadowRoot.querySelector('canvas.main');
        const previewCanvas = this.shadowRoot.querySelector('canvas.preview');
        const context = canvas.getContext('2d', {
          desynchronized: true
        });
        const previewContext = previewCanvas.getContext('2d', {
          desynchronized: true
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
        document.addEventListener('pointermove', event => this.throttledPointerMove(event));
        document.addEventListener('pointerup', event => this.onPointerUp(event));
        this.dispatchEvent(new CustomEvent('canvas-ready', {
          bubbles: true,
          composed: true
        }));
      }
    }, {
      kind: "method",
      key: "throttledPointerMove",
      value: function throttledPointerMove(event) {
        const currentTime = Date.now();
        if (currentTime - this.lastPointerEventTime < 8) {
          // Throttle mouse polling rate to ~125hz 1000/125 = 8
          return;
        }
        this.lastPointerEventTime = currentTime;
        this.onPointerMove(event);
      }
    }, {
      kind: "method",
      key: "getToolEventArgs",
      value: function getToolEventArgs(x, y) {
        const strokeKey = this.pointerDown ? this.previewColor : 'primary';
        const fillKey = strokeKey === 'primary' ? 'secondary' : 'primary';
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
    }, {
      kind: "method",
      key: "onPointerDown",
      value: function onPointerDown(event) {
        this.pointerDown = true;
        this.previewColor = event.button !== 2 ? 'primary' : 'secondary';
        this.drawingContext.text.active = false;
        evaluateTextToolbarVisibility(this.drawingContext);
        updateContext(this);
        if (this.tool?.onPointerDown) {
          const {
            x,
            y
          } = this.getCoordinates(event);
          this.tool.onPointerDown(...this.getToolEventArgs(x, y));
        }
        event.preventDefault();
      }
    }, {
      kind: "method",
      key: "onPointerMove",
      value: function onPointerMove(event) {
        const {
          x,
          y
        } = this.getCoordinates(event);
        if (this.inCanvas && this.drawingContext.canvas) {
          this.dispatchEvent(new CustomEvent('coordinate', {
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
    }, {
      kind: "method",
      key: "onPointerUp",
      value: function onPointerUp(event) {
        if (!this.pointerDown) {
          return;
        }
        const {
          x,
          y
        } = this.getCoordinates(event);
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
    }, {
      kind: "method",
      key: "onPointerEnter",
      value: function onPointerEnter() {
        this.inCanvas = true;
        const {
          canvas,
          tool
        } = this.drawingContext;
        if (canvas) {
          canvas.style.cursor = tool.cursor ?? 'default';
        }
      }
    }, {
      kind: "method",
      key: "onPointerLeave",
      value: function onPointerLeave() {
        this.inCanvas = false;
        this.dispatchEvent(new CustomEvent('coordinate', {
          bubbles: true,
          composed: true
        }));
      }
    }, {
      kind: "method",
      key: "getCoordinates",
      value: function getCoordinates({
        clientX,
        clientY
      }) {
        if (!this.drawingContext.canvas) {
          throw new Error('Canvas not initialized yet.');
        }
        const {
          left,
          top
        } = this.drawingContext.canvas.getBoundingClientRect();
        const x = Math.floor((clientX - left) / this.drawingContext.magnifierSize);
        const y = Math.floor((clientY - top) / this.drawingContext.magnifierSize);
        return {
          x,
          y
        };
      }
    }]
  };
}, LitElement);