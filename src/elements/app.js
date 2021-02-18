import { css, html, LitElement } from 'lit-element';
import { menus } from '../menus/all';
import hotkeys from 'hotkeys-js';
import { DRAWING_CONTEXT } from '../data/drawing-context';
import { getLaunchImage } from '../helpers/file-handling-api';

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
        --button-light: white;
        --button-dark: rgb(128 128 128);
        --button-darker: black;
        --button-text: black;
        --canvas: rgb(128 128 128);
        --disabled-text: rgb(128 128 128);
        --highlight: rgb(0 0 128);
        --highlight-text: white;
        --highlight-disabled-text: rgb(128 128 128);
        --disabled-text-backdrop: white;
        --selected-background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAAAAABX3VL4AAAADklEQVQIHWP4f4DhwH8ACoADf16N/DIAAAAASUVORK5CYII=');

        --z-index-menu: 10;
        --z-index-dialog: 20;

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

        -webkit-tap-highlight-color: transparent;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --button-face: rgb(64 64 64);
          --button-light: rgb(128 128 128);
          --button-dark: rgb(32 32 32);
          --button-text: white;
          --canvas: rgb(32 32 32);
          --disabled-text: rgb(64 64 64);
          --highlight: rgb(0 0 128);
          --highlight-text: white;
          --highlight-disabled-text: rgb(128 128 128);
          --disabled-text-backdrop: rgb(192 192 192);
          --selected-background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAAAAABX3VL4AAAADklEQVQIHWNocGBwaAAABIYBga3c92oAAAAASUVORK5CYII=');
        }
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
    this.drawingContext = DRAWING_CONTEXT;
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
    this.addEventListener('canvas-ready', () =>
      getLaunchImage(this.drawingContext),
    );
    this.registerHotkeys(menus);
  }

  registerHotkeys(menus) {
    (menus || []).forEach((entry) => {
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
    document.title = `${this.drawingContext.document.title} - Paint`;
    return html`
      <paint-menu-bar
        .entries="${menus}"
        .drawingContext="${this.drawingContext}"
      ></paint-menu-bar>
      <div>
        ${this.drawingContext.view.toolBox
          ? html` <paint-tool-bar>
              <paint-ruler></paint-ruler>
              <paint-tool-box
                .drawingContext="${this.drawingContext}"
              ></paint-tool-box>
              <paint-ruler></paint-ruler>
            </paint-tool-bar>`
          : ''}
        <paint-canvas .drawingContext="${this.drawingContext}"></paint-canvas>
      </div>
      ${this.drawingContext.view.colorBox
        ? html` <paint-tool-bar class="color-box">
            <paint-color-box .drawingContext="${this.drawingContext}">
            </paint-color-box>
            <paint-ruler></paint-ruler>
          </paint-tool-bar>`
        : ''}
      ${this.drawingContext.view.statusBar
        ? html` <paint-status-bar
            helpText="${this.helpText}"
            coordinateText="${this.coordinateText}"
            areaText="${this.areaText}"
          ></paint-status-bar>`
        : ''}
    `;
  }
}

customElements.define('paint-app', App);
