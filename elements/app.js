import { css, html, LitElement } from '../web_modules/lit-element.js';
import { menus } from '../menus/all.js';
import hotkeys from '../web_modules/hotkeys-js.js';
import { PENCIL } from '../tools/all.js';

const defaultHelpText = 'For Help, click Help Topics on the Help Menu.';

class App extends LitElement {
  static get properties() {
    return {
      areaText: { attribute: false },
      coordinateText: { attribute: false },
      helpText: { attribute: false },
      drawingContext: { attribute: false },
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
        flex-direction: column;
      }

      paint-tool-bar.color-box {
        height: 49px;
        justify-content: space-between;
      }
      
      paint-tool-bar.color-box paint-color-box {
        margin-top: 7px;
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
    this.areaText = '';
    this.coordinateText = '';
    this.helpText = defaultHelpText;
    this.drawingContext = {
      lineWidth: 1,
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
      },
      palette: [
        '#000000', // black
        '#808080', // gray
        '#800000', // maroon
        '#808000', // olive
        '#008000', // green
        '#008080', // teal
        '#000080', // navy
        '#800080', // purple
        '#808040',
        '#004040',
        '#0080FF',
        '#004080',
        '#4000FF',
        '#804000',
        '#FFFFFF', // white
        '#C0C0C0', // silver
        '#FF0000', // red
        '#FFFF00', // yellow
        '#00FF00', // lime
        '#00FFFF', // aqua
        '#0000FF', // blue
        '#FF00FF', // fuchsia
        '#FFFF80',
        '#00FF80',
        '#80FFFF',
        '#8080FF',
        '#FF0080',
        '#FF8040',
      ],
      previewColor: null,
      transparentBackground: false,
      eraserSize: null,
      magnifierSize: null,
      brushType: null,
      airbrushSize: null,
      fillStyle: {
        stroke: true,
        fill: false,
      },
      tool: PENCIL,
      selection: null,
      view: {
        statusBar: true,
        colorBox: true,
        toolBox: true,
      },
    };
    this.addEventListener(
      'set-help-text',
      (event) => (this.helpText = event.detail ?? defaultHelpText),
    );
    this.addEventListener(
      'coordinate',
      (event) =>
        (this.coordinateText = event.detail
          ? `${event.detail.x},${event.detail.y}`
          : ''),
    );
    this.addEventListener(
      'area',
      (event) =>
        (this.areaText = event.detail
          ? `${event.detail.width}x${event.detail.height}`
          : ''),
    );
    this.addEventListener(
      'drawing-context-changed',
      (event) => (this.drawingContext = event.detail),
    );
    this.addEventListener('invoke-action', (event) =>
      event.detail(this.drawingContext),
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
        // TODO: Replace PgUp, PgDn + others…
        hotkeys(hotkey.replace('Shft', 'shift'), () => {
          if (entry.instance?.canExecute(this.drawingContext)) {
            this.dispatchEvent(
              new CustomEvent('invoke-action', {
                detail: entry.instance.execute.bind(entry.instance),
                bubbles: true,
                composed: true,
              }),
            );
          }
          return false;
        });
      }
    });
  }

  render() {
    return html`
      <paint-menu-bar
        .entries="${menus}"
        .drawingContext="${this.drawingContext}"
      ></paint-menu-bar>
      <div>
      ${this.drawingContext.view.toolBox ? html`
        <paint-tool-bar>
          <paint-ruler></paint-ruler>
          <paint-tool-box
            .drawingContext="${this.drawingContext}"
          ></paint-tool-box>
          <paint-ruler></paint-ruler>
        </paint-tool-bar>` : ''}
        <paint-canvas
            .drawingContext="${this.drawingContext}"
        ></paint-canvas>
      </div>
      ${this.drawingContext.view.colorBox ? html`
        <paint-tool-bar class="color-box">
          <paint-color-box .drawingContext="${this.drawingContext}">
          </paint-color-box>
          <paint-ruler></paint-ruler>
        </paint-tool-bar>` : ''}
      ${this.drawingContext.view.statusBar ? html`
        <paint-status-bar
          helpText="${this.helpText}"
          coordinateText="${this.coordinateText}"
          areaText="${this.areaText}"
        ></paint-status-bar>` : ''}
    `;
  }
}

customElements.define('paint-app', App);
