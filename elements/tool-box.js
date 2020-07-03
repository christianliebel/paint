import {css, html, LitElement} from '../web_modules/lit-element.js';
import {tools} from '../data/tools.js';

class ToolBox extends LitElement {
    static get properties() {
        return {
            tool: {attribute: false}
        };
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-flow: row wrap;
                align-content: flex-start;
                justify-content: center;
            }
            
            paint-inset-container {
                width: 41px;
                height: 66px;
                margin-top: 3px;
            }
        `;
    }

    constructor() {
        super();
        this.tool = 'pencil';
    }

    render() {
        return html`
            ${tools.map(tool => html`
            <paint-tool .tool=${tool} title="${tool.tooltip}"
                class="${this.tool === tool.id ? 'active' : ''}"
                @mouseup="${() => this.tool = tool.id}"></paint-tool>`)}
            <paint-inset-container></paint-inset-container>
        `;
    }
}

customElements.define('paint-tool-box', ToolBox);
