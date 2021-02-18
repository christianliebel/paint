import { css, html, LitElement } from '../../_snowpack/pkg/lit-element.js';
import { updateContext } from '../helpers/update-context.js';
export class ToolDrawOpaque extends LitElement {
  static get properties() {
    return {
      drawingContext: {
        type: Object
      }
    };
  }

  static get styles() {
    return css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px 0;
      }

      li {
        box-sizing: border-box;
        height: 29px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        margin-bottom: 3px;
        image-rendering: pixelated;
        background-repeat: no-repeat;
      }

      li.selected {
        background-color: var(--highlight);
      }

      li.opaque {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXAQMAAAC7/GShAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAGRJREFUCFtjuJ277XYCQwMDA4MCAwQ0W1nOUWBoWaTkocDAoqTEARKx4lBgaFikBCRZgOJAEeudHQoouiDsnscS0xUYhKYsmcLAMAlIKjBMer4EJNKyBiTSAhLpaZmVjqoL7AYAf/8iQr5WGX0AAAAASUVORK5CYII=');
        background-position: 2px 3px;
      }

      li.transparent {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXAQMAAAC7/GShAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAGlJREFUCFtjuJ277XYCQwMDA4MCAwQ0W1nOUWBoWaTkocDAoqTEARKx4lBgaFikBCRZgOJAEeudHQoouiDsuZN8TiowcEatWsvA0BnVtVaBoXOaz2mgSJjGaqBI0IqVQJEgj5WousBuAABA1CB3t6hRhgAAAABJRU5ErkJggg==');
        background-position: 1px 3px;
      }

      img {
        image-rendering: pixelated;
      }
    `;
  }

  render() {
    return html`
      <ul>
        <li
          class="${this.getClasses(true)}"
          @click="${() => this.selectValue(true)}"
        ></li>
        <li
          class="${this.getClasses(false)}"
          @click="${() => this.selectValue(false)}"
        ></li>
      </ul>
    `;
  }

  getClasses(value) {
    return [...(value === this.drawingContext.drawOpaque ? ['selected'] : []), ...(value ? ['opaque'] : ['transparent'])].join(' ');
  }

  selectValue(value) {
    this.drawingContext.drawOpaque = value;
    updateContext(this);
  }

}
customElements.define('paint-tool-draw-opaque', ToolDrawOpaque);