import breakLines from 'break-styled-lines';
import {
  css,
  CSSResultGroup,
  html,
  LitElement,
  PropertyValues,
  TemplateResult,
} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { clearContext } from '../helpers/clear-context';

// TODO: Draw select box around text area

@customElement('paint-text-area')
export class TextArea extends LitElement {
  editingActive = false;

  @property() drawingContext = DRAWING_CONTEXT;

  @query('textarea') textarea?: HTMLTextAreaElement;

  static get styles(): CSSResultGroup {
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

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);

    if (!this.textarea) {
      throw new Error('Textarea not found.');
    }

    const textarea = this.textarea;
    textarea.addEventListener('input', () => {
      requestAnimationFrame(() => (textarea.scrollTop = 0));
      this.drawPreview();
    });
  }

  render(): TemplateResult {
    const { context, previewContext, text } = this.drawingContext;

    this.style.display = text.active ? 'block' : 'none';

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

  getTextAreaStyle(): string {
    const { colors, text } = this.drawingContext;
    const { width, height, x, y, font, size, bold, italic, underline } = text;
    return `
      width: ${width}px;
      height: ${height}px;
      transform: translate(${x}px, ${y}px);
      font-family: "${font}"; 
      font-size: ${size}px;
      font-weight: ${bold ? 'bold' : 'normal'};
      font-style: ${italic ? 'italic' : 'normal'};
      text-decoration: ${underline ? 'underline' : 'none'};
      caret-color: ${colors.primary};
    `;
  }

  drawPreview(): void {
    if (this.drawingContext.previewContext) {
      clearContext(this.drawingContext.previewContext);
      this.drawTextBox(this.drawingContext.previewContext);
    }
  }

  commitTextBox(): void {
    if (
      this.editingActive &&
      !this.drawingContext.text.active &&
      this.textarea &&
      this.drawingContext.previewContext &&
      this.drawingContext.context
    ) {
      this.editingActive = false;
      clearContext(this.drawingContext.previewContext);
      this.drawTextBox(this.drawingContext.context);
      this.textarea.value = '';
    }
  }

  drawTextBox(context: CanvasRenderingContext2D): void {
    const { x, y, width, height, size, font, bold, italic, underline } =
      this.drawingContext.text;

    if (this.drawingContext.drawOpaque) {
      context.fillStyle = this.drawingContext.colors.secondary;
      context.fillRect(x ?? 0, y ?? 0, width ?? 0, height ?? 0);
    }

    context.fillStyle = this.drawingContext.colors.primary;
    const italicStyle = italic ? 'italic ' : '';
    const boldStyle = bold ? 'bold ' : '';
    context.font = `${italicStyle}${boldStyle}${size}px ${font}`;

    const padding = 1;
    const maxWidth = (width ?? 0) - padding * 2;
    const lineHeight = TextArea.getLineHeight(context, size);
    (this.textarea?.value ?? '')
      .split('\n')
      .map((line) => breakLines(line, maxWidth, context.font).split('\n'))
      .reduce((previous, current) => previous.concat(current), [])
      .forEach((line, index) => {
        const correctedX = (x ?? 0) + padding;
        const correctedY = (y ?? 0) + size + lineHeight * index;

        if (correctedY - (y ?? 0) >= (height ?? 0)) {
          return;
        }

        context.fillText(line, correctedX, correctedY);

        if (underline) {
          const { width } = context.measureText(line);
          context.fillRect(correctedX, correctedY + 1, width, 1);
        }
      });
  }

  private static getLineHeight(
    context: CanvasRenderingContext2D,
    size: number,
  ): number {
    const metrics = context.measureText('') as unknown as {
      fontBoundingBoxAscent?: number;
      fontBoundingBoxDescent?: number;
    };
    if (
      typeof metrics.fontBoundingBoxAscent === 'number' &&
      typeof metrics.fontBoundingBoxDescent === 'number'
    ) {
      return metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    }

    // Advanced text measurements not available. Roughly estimate line height.
    return size * 1.2;
  }
}
