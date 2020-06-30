import {html, LitElement} from '../web_modules/lit-element.js';
import {css} from "../web_modules/lit-element";

class Ruler extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                border-top: 1px solid var(--canvas);
                border-bottom: 1px solid var(--highlight-text);
            }
        `;
    }

    render() {
        return html``;
    }
}

customElements.define('paint-ruler', Ruler);
