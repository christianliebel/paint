import {css, html, LitElement} from '../web_modules/lit-element.js';

class ToolBox extends LitElement {
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

    render() {
        return html`
            <paint-tool tool="freeform" title="Free-Form Select"></paint-tool>
            <paint-tool tool="select" title="Select"></paint-tool>
            <paint-tool tool="eraser" title="Eraser/Color Eraser"></paint-tool>
            <paint-tool tool="fill" title="Fill With Color"></paint-tool>
            <paint-tool tool="pick" title="Pick Color"></paint-tool>
            <paint-tool tool="magnifier" title="Magnifier"></paint-tool>
            <paint-tool tool="pencil" title="Pencil" class="active"></paint-tool>
            <paint-tool tool="brush" title="Brush"></paint-tool>            
            <paint-tool tool="paintbrush" title="Paintbrush"></paint-tool>
            <paint-tool tool="text" title="Text"></paint-tool>
            <paint-tool tool="line" title="Line"></paint-tool>
            <paint-tool tool="curve" title="Curve"></paint-tool>
            <paint-tool tool="rectangle" title="Rectangle"></paint-tool>
            <paint-tool tool="polygon" title="Polygon"></paint-tool>
            <paint-tool tool="ellipse" title="Ellipse"></paint-tool>
            <paint-tool tool="title" title="Rounded Rectangle"></paint-tool>
            <paint-inset-container></paint-inset-container>
        `;
    }
}
customElements.define('paint-tool-box', ToolBox);
