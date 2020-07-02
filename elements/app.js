import {css, html, LitElement} from '../web_modules/lit-element.js';

class App extends LitElement {
    static get properties() {
        return {
            coordinateText: {attribute: false},
            primaryColor: {attribute: false},
            secondaryColor: {attribute: false}
        }
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
                
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size: 9pt;
 
                display: inline-flex;
                flex-direction: column;
                background-color: var(--canvas);
                color: var(--button-text);
                
                user-select: none;
                -webkit-user-select: none;
                cursor: default;
            }
            
            div {
                overflow: hidden;
                flex: 1;
                display: flex;
                flex-direction: row;
            }
            
            div > paint-canvas {
                flex: 1;
            }
            
            div > paint-tool-bar {
                min-width: 57px;
            }
            
            paint-tool-bar.color-bar {
                height: 47px;
            }
        `;
    }

    constructor() {
        super();
        this.primaryColor = 'black';
        this.secondaryColor = 'white';
    }

    render() {
        return html`
            <paint-menu-bar></paint-menu-bar>
            <div>
                <paint-tool-bar></paint-tool-bar>
                <paint-canvas></paint-canvas>
            </div>
            <paint-status-bar></paint-status-bar>
            <paint-tool-bar class="color-bar">
                <paint-color-box
                    primaryColor="${this.primaryColor}" secondaryColor="${this.secondaryColor}"
                    @primary-color-selected="${(e) => this.primaryColor = e.detail.value}"
                    @secondary-color-selected="${(e) => this.secondaryColor = e.detail.value}">
                </paint-color-box>
            </paint-tool-bar>
        `;
    }
}

customElements.define('paint-app', App);
