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
import breakLines from "../../_snowpack/pkg/break-styled-lines.js";
import {
  css,
  customElement,
  html,
  LitElement,
  property,
  query
} from "../../_snowpack/pkg/lit-element.js";
import {DRAWING_CONTEXT} from "../data/drawing-context.js";
import {clearContext} from "../helpers/clear-context.js";
export let TextArea = class extends LitElement {
  constructor() {
    super(...arguments);
    this.editingActive = false;
    this.drawingContext = DRAWING_CONTEXT;
  }
  static get styles() {
    return css`
      textarea {
        position: absolute;
        box-sizing: border-box;
        border: 1px dashed var(--highlight);
        padding: 0;
        background-color: transparent;
        color: transparent;
        resize: none;
        outline: 0;
        overflow: hidden;
      }

      textarea::selection {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }
    `;
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    if (!this.textarea) {
      throw new Error("Textarea not found.");
    }
    const textarea = this.textarea;
    textarea.addEventListener("input", () => {
      requestAnimationFrame(() => textarea.scrollTop = 0);
      this.drawPreview();
    });
  }
  render() {
    const {context, previewContext, text} = this.drawingContext;
    this.style.display = text.active ? "block" : "none";
    if (this.editingActive && !text.active) {
      this.commitTextBox();
    }
    this.editingActive = text.active;
    if (context && previewContext && text.active) {
      this.textarea?.focus();
      this.textarea?.scroll(0, 0);
      this.drawPreview();
    }
    return html`<textarea style="${this.getTextAreaStyle()}"></textarea>`;
  }
  getTextAreaStyle() {
    const {colors, text} = this.drawingContext;
    const {width, height, x, y, font, size, bold, italic, underline} = text;
    return `
      width: ${width}px;
      height: ${height}px;
      transform: translate(${x}px, ${y}px);
      font-family: "${font}"; 
      font-size: ${size}px;
      font-weight: ${bold ? "bold" : "normal"};
      font-style: ${italic ? "italic" : "normal"};
      text-decoration: ${underline ? "underline" : "none"};
      caret-color: ${colors.primary};
    `;
  }
  drawPreview() {
    if (this.drawingContext.previewContext) {
      clearContext(this.drawingContext.previewContext);
      this.drawTextBox(this.drawingContext.previewContext);
    }
  }
  commitTextBox() {
    if (this.editingActive && !this.drawingContext.text.active && this.textarea && this.drawingContext.previewContext && this.drawingContext.context) {
      this.editingActive = false;
      clearContext(this.drawingContext.previewContext);
      this.drawTextBox(this.drawingContext.context);
      this.textarea.value = "";
    }
  }
  drawTextBox(context) {
    const {
      x,
      y,
      width,
      height,
      size,
      font,
      bold,
      italic,
      underline
    } = this.drawingContext.text;
    if (this.drawingContext.drawOpaque) {
      context.fillStyle = this.drawingContext.colors.secondary;
      context.fillRect(x ?? 0, y ?? 0, width ?? 0, height ?? 0);
    }
    context.fillStyle = this.drawingContext.colors.primary;
    const italicStyle = italic ? "italic " : "";
    const boldStyle = bold ? "bold " : "";
    context.font = `${italicStyle}${boldStyle}${size}px ${font}`;
    const padding = 1;
    const maxWidth = (width ?? 0) - padding * 2;
    const metrics = context.measureText("");
    const lineHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    (this.textarea?.value ?? "").split("\n").map((line) => breakLines(line, maxWidth, context.font).split("\n")).reduce((previous, current) => previous.concat(current), []).forEach((line, index) => {
      const correctedX = (x ?? 0) + padding;
      const correctedY = (y ?? 0) + size + lineHeight * index;
      if (correctedY - (y ?? 0) >= (height ?? 0)) {
        return;
      }
      context.fillText(line, correctedX, correctedY);
      if (underline) {
        const {width: width2} = context.measureText(line);
        context.fillRect(correctedX, correctedY + 1, width2, 1);
      }
    });
  }
};
__decorate([
  property()
], TextArea.prototype, "drawingContext", 2);
__decorate([
  query("textarea")
], TextArea.prototype, "textarea", 2);
TextArea = __decorate([
  customElement("paint-text-area")
], TextArea);
