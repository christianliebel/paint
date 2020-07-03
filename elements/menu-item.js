import {css, html, LitElement} from '../web_modules/lit-element.js';

class MenuItem extends LitElement {
    static get properties() {
        return {
            caption: {type: String},
            shortcut: {type: String}
        };
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                height: 22px;
                align-items: center;
                justify-content: space-between;
                padding: 0 22px 0 19px;
            }
            
            :host(:hover:not(.disabled)) {
                background-color: var(--highlight);
                color: var(--highlight-text);
            }
        `;
    }

    render() {
        return html`
            <span>${this.caption}</span>
            <span>${this.shortcut}</span>
        `;
    }
}

customElements.define('paint-menu-item', MenuItem);
