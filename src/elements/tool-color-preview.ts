import { css, CSSResultGroup, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DRAWING_CONTEXT } from '../data/drawing-context';

@customElement('paint-tool-color-preview')
export class ToolColorPreview extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render(): void {
    this.style.backgroundColor = this.drawingContext?.previewColor ?? 'transparent';
  }
}
