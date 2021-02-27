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

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { css, customElement, html, LitElement, property } from '../../_snowpack/pkg/lit-element.js';
import { DRAWING_CONTEXT } from '../data/drawing-context.js';
import { updateContext } from '../helpers/update-context.js';
export let ToolAirbrush = _decorate([customElement('paint-tool-airbrush')], function (_initialize, _LitElement) {
  class ToolAirbrush extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ToolAirbrush,
    d: [{
      kind: "field",
      decorators: [property({
        type: Object
      })],
      key: "drawingContext",

      value() {
        return DRAWING_CONTEXT;
      }

    }, {
      kind: "field",
      key: "options",

      value() {
        return [{
          size: 9,
          selectionWidth: 17,
          width: 11,
          height: 10,
          path: 'M5,1h1v2h2V1h1v4h1V4h1v2H9V5H6v1h1V5h1v1h1v1h2v1h-1v1H9v1H8V8h1V7H7v1H6v1h1v1H6V9H4v1H3V9h1V8H3V7h2V6H4v1H3V5h2V4h1V3H5v1H4v1H3V4h1V3H3V2h1v1h1V1z'
        }, {
          size: 17,
          selectionWidth: 22,
          width: 18,
          height: 16,
          path: 'M8,0h1v1h1V0h3v1h-3v1h1v1h1V2h1v2h1V3h1V1h1v1h-1v2h-1v1h3V3h1v2h-1v2h-1v1h1v1h-3V7h1V6h-1V5h-2v1h1v3h1v7h-4v-2h1v2h1v-1h1v1h1v-3h-1v-1h1v-1h-2V7H9v1h2V7h1v2h-1v1h1v1h-1v1H9v-2H7v1H6v1h1v2h2v1H7v-1H6v-2H5v1H3v1H2v-1h1v-1h1v-1H3v-1h2v1h1v-1H5V9H4V8h1v1h3V8H6V7H3v1H2V7h1V6h3V4H4V3h1V2h1v2h1v3h1V4h1V3h1v2h1V3h-1V2H9V1H8V0z'
        }, {
          size: 25,
          selectionWidth: 24,
          width: 24,
          height: 24,
          path: 'M14,0v1h-1V0v2h1v2h3v1h2V4h3v1h-1V4h-1v1h-1v2h1v1h2V7h1v1h-2v1h1v1h-1V9h-1v1h-1V9h1V8h-2V6h-1v1h-2v2h-2V8h-1v2h2V9h2V7h1v1h1v1h-1v2h7v1h-1v-1h-2v1h1v2h1v1h-1v-2h-1v-1h-1v-1h-1v1h-1v1h-1v1h1v1h2v2h4v1h-2v4h-1v-2h-6v-2h1v1h-1v1h3v-1h1v1h2v1h1v-3h1v-1h-5v-1h1v-1h-3v-3h-1v2h-1v1h1v1h-2v3h1v1h-1v1h1v1h-1v-1h-2v-1h1v1h1v-2h-2v-1H9v1H8v1h1v1h1v1H8v-1H3v-2H2v-4h1v1H2v2h1v2h1v1h2v-2H4v-2h1v-2h1v-1H5v-1h1v1h1v-1h1v-1h3v1h1v1H9v-1H8v1H7v1H6v2H5v1h1v1h2v-1h1v-1H8v-1h1v-1H8v-1h1v1h3v1H9v1h2v1h1v-2h1v-1h-1v-1h1v-2h1v-1h-1v1h-2v-1H9v-1H8v1H5v1H2v1H1v-1h1v-1h1v1h1V9H0V8h1v1h2V5h3V3H4V2h4v1H7v3H4v2h1v2h3V8H7V7H6v1H5V6h2v1h1v1h1v2h1V9h1V7H9V6H7V5h2V4h1V2H9V1h2v3h2V0H14z'
        }];
      }

    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return css`
      ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
        margin: -4px 0 0 0;
      }

      li {
        margin-top: 8px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li.selected {
        background-color: var(--highlight);
      }

      path {
        fill: var(--button-text);
      }

      .selected path {
        fill: var(--highlight-text);
      }
    `;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          airbrushSize
        } = this.drawingContext;
        return html`
      <ul>
        ${this.options.map(({
          size,
          selectionWidth,
          width,
          height,
          path
        }) => html`
              <li
                class="${airbrushSize === size ? 'selected' : ''}"
                style="width: ${selectionWidth}px"
                @click="${() => this.setSize(size)}"
              >
                <svg style="width: ${width}px; height: ${height}px;">
                  <path d="${path}"></path>
                </svg>
              </li>
            `)}
      </ul>
    `;
      }
    }, {
      kind: "method",
      key: "setSize",
      value: function setSize(size) {
        this.drawingContext.airbrushSize = size;
        updateContext(this);
      }
    }]
  };
}, LitElement);