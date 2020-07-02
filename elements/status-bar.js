import {css, html, LitElement} from '../web_modules/lit-element.js';

class StatusBar extends LitElement {
    static get properties() {
        return {
            coordinateText: {type: String}
        };
    }

    static get styles() {
        return css`
            :host {
                background-color: var(--button-face);
                height: 25px;
                display: flex;
                flex-direction: column;
            }
            
            paint-ruler {
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
                overflow: hidden;
                white-space: nowrap;
            }
            
            paint-inset-container.tool {
                max-width: 115px;
            }
            
            paint-inset-container.tool img {
                align-self: flex-start;
                margin-right: 3px;
                image-rendering: pixelated;
            }
        `;
    }

    render() {
        return html`
            <paint-ruler></paint-ruler>
            <div>
                <paint-inset-container>For Help, click Help Topics on the Help Menu.</paint-inset-container>
                <paint-inset-container class="tool">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAOklEQVQokWPAAv5jE8QGmIhVSHXNFIP/SJiBAZX+z4BdnIGUsCEaEGsiVnV0iapB5uchbjN+moHhPwBmmBjumUjVpgAAAABJRU5ErkJggg==" alt="">
                    ${this.coordinateText}
                </paint-inset-container>
                <paint-inset-container class="tool">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPAQMAAAABGAcJAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAChJREFUCB1jYBJiYOJiYPoHJoUYgODXKhCpxMSgACZXMDAUgdm/VgEAbW0GLYF8fC8AAAAASUVORK5CYII=" alt="">
                </paint-inset-container>
            </div>
        `;
    }
}
customElements.define('paint-status-bar', StatusBar);
