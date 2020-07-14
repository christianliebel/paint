import { css, html, LitElement } from '../web_modules/lit-element.js';
import { updateContext } from '../helpers/update-context.js';

export class ToolDrawOpaque extends LitElement {
  static get properties() {
    return {
      drawingContext: { type: Object },
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
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXBAMAAABzHOvRAAAAJ1BMVEX///8AAAAAAIAAAP8AgAAA/wCAgACAgIDAwMD/AAD/AP///wD///8PGWotAAAAAXRSTlMAQObYZgAAAMxJREFUGFdjEEQBDCAgvRsJbMQttENJqRrIFdwoLbhRQJBRACjUZGysDlRwBgpAQhrGxoYQIRcXl5ozII0azcaNQI1nzhxxcfGQgag60aEIVgVU1AIVOmwMFjoC0ioD0QgW2n3myNHQUBc0VahCGxgYYUJQjQoMKwUgQuLlUFUKXDMngoUcy2FCDCuhQuLlNSCNymChmWcOAgOnvBxsfJOSElgVkh93AEMOSQgaXgVcMwUYExGBAwQbGBgYxdKyUUK1UFA8LQNPQGPGEACpLq3hHORRXwAAAABJRU5ErkJggg==');
        background-position: 2px 3px;
      }
      
      li.transparent {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXBAMAAABzHOvRAAAAJ1BMVEX///8AAAAAAIAAAP8AgAAA/wCAgACAgIDAwMD/AAD/AP///wD///8PGWotAAAAAXRSTlMAQObYZgAAAMlJREFUGFdjEEQBDCAgvRsJbMQttENJqRrIFdwoLbhRQJBRACjUZGysDlQAUwUS0jA2NoQIubi4FIA1ajQbN4JN2uLi4iEAUXWiQxGsCqioBSp02BgstOXMmTMuAhCNYCGgvqOhoS5oqlCFNjAwwoSgGhUYVgpwb3FFVqXANXMiO0iVIwNMiGHlzImMICEBiB+VwUIzGTdCAgfsRyUlsKoMhB93ACVBQmnZyOFVwDVTgDEREThAsIGBgVEMVdXuQkHxtAw8AY0ZQwAX55Q9uT8mmQAAAABJRU5ErkJggg==');
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
    return [
      ...(value === this.drawingContext.drawOpaque ? ['selected'] : []),
      ...(value ? ['opaque'] : ['transparent']),
    ].join(' ');
  }

  selectValue(value) {
    this.drawingContext.drawOpaque = value;
    updateContext(this);
  }
}

customElements.define('paint-tool-draw-opaque', ToolDrawOpaque);
