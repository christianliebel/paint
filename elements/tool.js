import {css, html, LitElement} from '../web_modules/lit-element.js';

class Tool extends LitElement {
    static get styles() {
        return css`
            :host {
                display: inline-block;
                box-sizing: border-box;
                width: 25px;
                height: 25px;
                border: 1px solid var(--button-text);
                border-top: 1px solid var(--highlight-text);
                border-left: 1px solid var(--highlight-text);
                background-color: var(--button-face);
                image-rendering: pixelated;
            }
            
            div {
                box-sizing: border-box;
                height: 100%;
                border: 1px solid var(--canvas);
                border-top: 1px solid var(--button-face);
                border-left: 1px solid var(--button-face);
            }
            
            :host(.active) {
                border: 1px solid var(--highlight-text);
                border-top: 1px solid var(--button-text);
                border-left: 1px solid var(--button-text);
                background: var(--selected-background);
            }
            
            :host(.active) div {
                border: 1px solid var(--button-face);
                border-top: 1px solid var(--canvas);
                border-left: 1px solid var(--canvas);
            }
        `;
    }

    render() {
        return html`
            <div></div>
        `;
    }
}
customElements.define('paint-tool', Tool);
