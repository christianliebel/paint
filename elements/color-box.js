import {css, html, LitElement} from '../web_modules/lit-element.js';

class ColorBox extends LitElement {
    static get properties() {
        return {
            primaryColor: {attribute: false},
            secondaryColor: {attribute: false}
        };
    }

    static get styles() {
        return css`
            :host {
                display: grid;
                box-sizing: border-box;
                width: 256px;
                height: 33px;
                grid-template-columns: 15px repeat(15, 16px);
                grid-template-rows: 16px 16px;
            }
            
            paint-color-switcher {
                grid-column: 1/span 2;
                grid-row: 1/span 2;
            }
        `;
    }

    constructor() {
        super();
        this.primaryColor = 'black';
        this.secondaryColor = 'white';
        this.addEventListener('primary-color-selected', e => this.primaryColor = e.detail.value);
        this.addEventListener('secondary-color-selected', e => this.secondaryColor = e.detail.value);
    }

    render() {
        return html`
            <paint-color-switcher primaryColor="${this.primaryColor}" secondaryColor="${this.secondaryColor}">
            </paint-color-switcher>
            <paint-color-picker color="black"></paint-color-picker>
            <paint-color-picker color="gray"></paint-color-picker>
            <paint-color-picker color="maroon"></paint-color-picker>
            <paint-color-picker color="olive"></paint-color-picker>
            <paint-color-picker color="green"></paint-color-picker>
            <paint-color-picker color="teal"></paint-color-picker>
            <paint-color-picker color="navy"></paint-color-picker>
            <paint-color-picker color="purple"></paint-color-picker>
            <paint-color-picker color="rgb(128 128 64)"></paint-color-picker>
            <paint-color-picker color="rgb(0 64 64)"></paint-color-picker>
            <paint-color-picker color="rgb(0 128 255)"></paint-color-picker>
            <paint-color-picker color="rgb(0 64 128)"></paint-color-picker>
            <paint-color-picker color="rgb(64 0 255)"></paint-color-picker>
            <paint-color-picker color="rgb(128 64 0)"></paint-color-picker>
            <paint-color-picker color="white"></paint-color-picker>
            <paint-color-picker color="silver"></paint-color-picker>
            <paint-color-picker color="red"></paint-color-picker>
            <paint-color-picker color="yellow"></paint-color-picker>
            <paint-color-picker color="lime"></paint-color-picker>
            <paint-color-picker color="aqua"></paint-color-picker>
            <paint-color-picker color="blue"></paint-color-picker>
            <paint-color-picker color="fuchsia"></paint-color-picker>
            <paint-color-picker color="rgb(255 255 128)"></paint-color-picker>
            <paint-color-picker color="rgb(0 255 128)"></paint-color-picker>
            <paint-color-picker color="rgb(128 255 255)"></paint-color-picker>
            <paint-color-picker color="rgb(128 128 255)"></paint-color-picker>
            <paint-color-picker color="rgb(255 0 128)"></paint-color-picker>
            <paint-color-picker color="rgb(255 128 64)"></paint-color-picker>
        `;
    }
}

customElements.define('paint-color-box', ColorBox);
