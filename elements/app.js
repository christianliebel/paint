import { css, html, LitElement } from '../web_modules/lit-element.js';
import { menus } from '../menus/all.js';
import hotkeys from '../web_modules/hotkeys-js.js';

const defaultHelpText = 'For Help, click Help Topics on the Help Menu.';

class App extends LitElement {
  static get properties() {
    return {
      coordinateText: { attribute: false },
      helpText: { attribute: false },
      primaryColor: { attribute: false },
      secondaryColor: { attribute: false },
      previewColor: { attribute: false },
      lineWidth: { attribute: false },
      transparentBackground: { attribute: false },
      eraserSize: { attribute: false },
      magnifierSize: { attribute: false },
      brushType: { attribute: false },
      airbrushSize: { attribute: false },
      fillStyle: { attribute: false },
      drawingContext: { attribute: false },
      tool: { attribute: false },
      selection: { attribute: false },
    };
  }

  static get styles() {
    return css`
      :host {
        --button-face: rgb(192 192 192);
        --canvas: rgb(128 128 128);
        --button-text: black;
        --highlight: rgb(0 0 128);
        --highlight-text: white;
        --selected-background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAAAAABX3VL4AAAADklEQVQIHWP4f4DhwH8ACoADf16N/DIAAAAASUVORK5CYII=');
        --z-index-menu: 10;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 9pt;

        display: inline-flex;
        flex-direction: column;
        background-color: var(--canvas);
        color: var(--button-text);

        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }

      @media print {
        * {
          display: none;
        }

        paint-canvas {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }

      div {
        overflow: hidden;
        flex: 1;
        display: flex;
      }

      div > paint-canvas {
        flex: 1;
      }

      div > paint-tool-bar {
        width: 57px;
        min-width: 57px;
      }

      paint-tool-bar {
        display: flex;
      }

      paint-tool-bar.tool-bar {
        display: flex;
        flex-direction: column;
      }

      paint-tool-bar.color-bar {
        height: 47px;
        align-items: center;
      }

      paint-ruler {
        z-index: 1;
      }

      paint-tool-box {
        margin-top: -2px;
        flex: 1;
      }
    `;
  }

  constructor() {
    super();
    this.coordinateText = '';
    this.helpText = defaultHelpText;
    this.lineWidth = 1;
    this.primaryColor = '#000000';
    this.secondaryColor = '#FFFFFF';
    this.previewColor = 'transparent';
    this.addEventListener(
      'set-help-text',
      (event) => (this.helpText = event.detail || ''),
    );
    this.addEventListener(
      'reset-help-text',
      () => (this.helpText = defaultHelpText),
    );
    this.addEventListener(
      'coordinate',
      (event) =>
        (this.coordinateText = event.detail
          ? `${event.detail.x},${event.detail.y}`
          : ''),
    );
    this.addEventListener(
      'drawing-context-created',
      (event) => (this.drawingContext = event.detail),
    );
    this.addEventListener('invoke-action', (event) =>
      event.detail(this.drawingContext),
    );
    this.addEventListener(
      'primary-color-selected',
      (event) => (this.primaryColor = event.detail),
    );
    this.addEventListener(
      'secondary-color-selected',
      (event) => (this.secondaryColor = event.detail),
    );
    this.addEventListener(
      'preview-color',
      (event) => (this.previewColor = event.detail || 'transparent'),
    );
    this.addEventListener(
      'line-width-changed',
      (event) => (this.lineWidth = event.detail),
    );
    this.registerHotkeys(menus);
  }

  registerHotkeys(menus) {
    (menus || []).forEach(entry => {
      this.registerHotkeys(entry.entries);

      if (entry.shortcut) {
        const hotkey = entry.shortcut.includes('Ctrl')
          ? `${entry.shortcut},${entry.shortcut.replace('Ctrl', '⌘')}`
          : entry.shortcut;
        hotkeys(hotkey.replace('Shft', 'shift'), () => {
          if (!entry.disabled && entry.action) {
            this.dispatchEvent(
              new CustomEvent('invoke-action', {
                detail: entry.action,
                bubbles: true,
                composed: true,
              }),
            );
          }
          return false;
        });
      }
    })
  }

  render() {
    return html`
      <paint-menu-bar .entries="${menus}"></paint-menu-bar>
      <div>
        <paint-tool-bar class="tool-bar">
          <paint-ruler></paint-ruler>
          <paint-tool-box
            @tool-selected="${(event) => (this.tool = event.detail)}"
            previewColor="${this.previewColor}"
            lineWidth="${this.lineWidth}"
          ></paint-tool-box>
          <paint-ruler></paint-ruler>
        </paint-tool-bar>
        <paint-canvas
          .tool="${this.tool}"
          primaryColor="${this.primaryColor}"
          secondaryColor="${this.secondaryColor}"
          lineWidth="${this.lineWidth}"
        ></paint-canvas>
      </div>
      <paint-tool-bar class="color-bar">
        <paint-color-box
          primaryColor="${this.primaryColor}"
          secondaryColor="${this.secondaryColor}"
        >
        </paint-color-box>
      </paint-tool-bar>
      <paint-status-bar
        helpText="${this.helpText}"
        coordinateText="${this.coordinateText}"
      ></paint-status-bar>
    `;
  }
}

customElements.define('paint-app', App);
