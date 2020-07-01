import {css, html, LitElement} from '../web_modules/lit-element.js';

class MenuBar extends LitElement {
    static get styles() {
        return css`
            :host {
                background-color: var(--button-face);
                display: flex;
                align-items: center;
                height: 20px;
            }
            
            ul {
                list-style-type: none;
                display: flex;
                padding: 0;
                margin: 0 6px;
            }
            
            li + li {
                margin-left: 12px;
            }
            
            span.mnemonic {
                text-decoration: underline;
            }
        `;
    }

    render() {
        return html`
            <ul>
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
