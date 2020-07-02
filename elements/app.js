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
            
            paint-ruler { z-index: 1; }
            
            paint-tool-box {
                margin-top: -2px;
                flex: 1;
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
                <paint-tool-bar class="tool-bar">
                    <paint-ruler></paint-ruler>
                    <paint-tool-box></paint-tool-box>
                    <paint-ruler></paint-ruler>
                </paint-tool-bar>
                <paint-canvas @coordinate="${this.onCoordinate}" primaryColor="${this.primaryColor}"
                    secondaryColor="${this.secondaryColor}"></paint-canvas>
            </div>
            <paint-tool-bar class="color-bar">
                <paint-color-box
                    primaryColor="${this.primaryColor}" secondaryColor="${this.secondaryColor}"
                    @primary-color-selected="${(e) => this.primaryColor = e.detail.value}"
                    @secondary-color-selected="${(e) => this.secondaryColor = e.detail.value}">
                </paint-color-box>
            </paint-tool-bar>
            <paint-status-bar coordinateText="${this.coordinateText || ''}"></paint-status-bar>
        `;
    }

    onCoordinate({detail}) {
        this.coordinateText = detail ? `${detail.x},${detail.y}` : undefined;
    }
}

customElements.define('paint-app', App);
