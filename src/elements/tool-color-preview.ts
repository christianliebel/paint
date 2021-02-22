import { css, CSSResult, customElement, LitElement, property } from 'lit-element';
import { DRAWING_CONTEXT } from '../data/drawing-context';

@customElement('paint-tool-color-preview')
export class ToolColorPreview extends LitElement {
  @property() drawingContext = DRAWING_CONTEXT;

  static get styles(): CSSResult {
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
