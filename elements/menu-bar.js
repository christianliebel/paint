import {css, html, LitElement} from '../web_modules/lit-element.js';

class MenuBar extends LitElement {
    static get styles() {
        return css`
            :host {
                background-color: var(--button-face);
                display: flex;
                height: 20px;
            }
            
            ul {
                list-style-type: none;
                display: flex;
                margin: 0;
                padding: 1px 0;
            }
            
            li {
                padding: 1px 6px;
            }
            
            li.active {
                background-color: var(--highlight);
                color: var(--highlight-text);
            }
            
            span.mnemonic {
                text-decoration: underline;
            }
            
            .disabled {
                color: var(--canvas);
                text-shadow: 1px 1px 0 var(--highlight-text);
            }
        `;
    }

    render() {
        // TODO: Remove disabled from menu for first implementations
        return html`
            <ul class="disabled">
                <li><span class="mnemonic">F</span>ile</li>
                <li><span class="mnemonic">E</span>dit</li>
                <li><span class="mnemonic">V</span>iew</li>
                <li><span class="mnemonic">I</span>mage</li>
                <li><span class="mnemonic">O</span>ptions</li>
                <li><span class="mnemonic">H</span>elp</li>
            </ul>
        `;
    }
}
customElements.define('paint-menu-bar', MenuBar);
