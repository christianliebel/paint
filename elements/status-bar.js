import {css, html, LitElement} from '../web_modules/lit-element.js';

class StatusBar extends LitElement {
    static get styles() {
        return css`
            :host {
                background-color: var(--button-face);
                height: 25px;
                display: flex;
                flex-direction: column;
            }
            
            hr {
                margin: 0 0 2px 0;
            }
            
            div {
                flex: 1;
                display: flex;
                padding-left: 2px;
            }
            
            paint-inset-container {
                margin-left: 2px;
                flex: 1;
            }
            
            paint-inset-container.tool {
                max-width: 115px;
            }
        `;
    }

    render() {
        return html`
            <hr>
            <div>
                <paint-inset-container>For Help, click Help Topics on the Help Menu.</paint-inset-container>
                <paint-inset-container class="tool">0,0</paint-inset-container>
                <paint-inset-container class="tool"></paint-inset-container>
            </div>
        `;
    }
}
customElements.define('paint-status-bar', StatusBar);
