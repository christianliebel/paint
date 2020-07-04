import {css, html, LitElement} from '../web_modules/lit-element.js';

class ColorPicker extends LitElement {
    static get properties() {
        return {
            color: {type: String}
        };
    }

    static get styles() {
        return css`
            :host {
                border: 1px solid var(--highlight-text);
                border-top-color: var(--canvas);
                border-left-color: var(--canvas);
            }
            
            div.frame {
                box-sizing: border-box;
                border: 1px solid var(--button-face);
                border-top-color: var(--button-text);
                border-left-color: var(--button-text);
                height: 100%;
            }
        `;
    }

    constructor() {
        super();
        this.addEventListener('click', () => {
            this.dispatchColorEvent('primary');
        });
        this.addEventListener('contextmenu', event => {
            this.dispatchColorEvent('secondary');
            event.preventDefault();
        })
    }

    dispatchColorEvent(type) {
        this.dispatchEvent(new CustomEvent(`${type}-color-selected`,
            { detail: this.color, bubbles: true, composed: true }));
    }

    render() {
        return html`<div class="frame" style="background-color: ${this.color};"></div>`;
    }
}

customElements.define('paint-color-picker', ColorPicker);
