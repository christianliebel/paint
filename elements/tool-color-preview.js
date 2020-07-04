import {css, LitElement} from '../web_modules/lit-element.js';

export class ToolColorPreview extends LitElement {
    static get styles() {
        return css`:host { display: block; }`
    }

    static get properties() {
        return {
            previewColor: {type: String},
        }
    }

    render() {
        this.style.backgroundColor = this.previewColor;
    }
}

customElements.define('paint-tool-color-preview', ToolColorPreview);
