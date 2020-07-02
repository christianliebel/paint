import {css, html, LitElement} from '../web_modules/lit-element.js';

class Canvas extends LitElement {
    static get properties() {
        return {
            canvasWidth: {attribute: false},
            canvasHeight: {attribute: false},
        };
    }

    static get styles() {
        return css`
            :host {
                height: 100%;
                
                box-sizing: border-box;
                border: 1px solid var(--canvas);
                border-bottom-color: var(--highlight-text);
                border-right-color: var(--highlight-text);
                
                overflow: hidden;
            }
            
            div.frame {
                height: 100%;
                
                box-sizing: border-box;
                border: 1px solid var(--button-text);
                border-bottom-color: var(--button-face);
                border-right-color: var(--button-face);
                
                overflow: hidden;
            }
            
            div.scroll-container {
                height: 100%;
                overflow: auto;
            }
            
            div.document {
                vertical-align: top;
                display: inline-grid;
                grid-template-columns: 3px auto 3px;
                grid-template-rows: 3px auto 3px;
            }
            
            paint-handle { place-self: center; }
        `;
    }

    render() {
        return html`
            <div class="frame">
                <div class="scroll-container">
                    <div class="document">
                        <paint-handle disabled></paint-handle>
                        <paint-handle disabled></paint-handle>
                        <paint-handle></paint-handle>
                        <paint-handle disabled></paint-handle>
                        <canvas width="${this.canvasWidth}" height="${this.canvasHeight}"
                            @mousedown="${this.onMouseDown}" @contextmenu="${this.onMouseDown}"
                            @mouseenter="${this.onMouseEnter}" @mouseleave="${this.onMouseLeave}"></canvas>
                        <paint-handle></paint-handle>
                        <paint-handle disabled></paint-handle>
                        <paint-handle></paint-handle>
                        <paint-handle></paint-handle>
                    </div>
                </div>
            </div>
        `;
    }

    constructor() {
        super();

        // Canvas defaults to screen dimensions
        this.canvasWidth = screen.width;
        this.canvasHeight = screen.height;
    }

    firstUpdated() {
        const canvas = this.shadowRoot.querySelector('canvas');
        const context = canvas.getContext('2d', { desynchronized: true });
        context.fillStyle = 'white';
        context.fillRect(0, 0, 1024, 768);
    }

    onMouseMove({clientX, clientY}) {
        const {left, top} = this.shadowRoot.querySelector('canvas').getBoundingClientRect();
        this.dispatchEvent(new CustomEvent('coordinate', {
            x: clientX - left,
            y: clientY - top,
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('paint-canvas', Canvas);
