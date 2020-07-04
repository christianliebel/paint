import {css, html, LitElement} from '../web_modules/lit-element.js';

class InsetContainer extends LitElement {
    // TODO: InsetContainer should not define align-items, maybe not even display: flex.
    static get styles() {
        return css`
            :host {
                box-sizing: border-box;
                border: 1px solid var(--canvas);
                border-bottom-color: var(--highlight-text);
                border-right-color: var(--highlight-text);
                
                display: flex;
                align-items: flex-end;
            }
        `;
    }

    render() {
        return html`<slot></slot>`;
    }
}
customElements.define('paint-inset-container', InsetContainer);
