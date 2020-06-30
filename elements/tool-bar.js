import {html, LitElement} from '../web_modules/lit-element.js';
import {css} from "../web_modules/lit-element";

class ToolBar extends LitElement {
    static get styles() {
        return css`
            :host { background-color: var(--button-face); }
        `;
    }

    render() {
        return html`(Tool)`;
    }
}
customElements.define('paint-tool-bar', ToolBar);
