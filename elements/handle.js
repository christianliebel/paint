import {css, html, LitElement} from '../web_modules/lit-element.js';

class Handle extends LitElement {
    static get styles() {
        return css`
            :host {
                display: inline-block;
                box-sizing: border-box;
                width: 3px;
                height: 3px;
                border-top: 1px solid var(--highlight);
                border-left: 1px solid var(--highlight);
                background-color: var(--highlight);
            }
            
            :host([disabled]) {
                background-color: var(--highlight-text);
            }
        `;
    }

    render() {
        return html``;
    }
}
customElements.define('paint-handle', Handle);
