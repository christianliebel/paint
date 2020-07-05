import {css, html, LitElement} from '../web_modules/lit-element.js';

class Canvas extends LitElement {
    static get properties() {
        return {
            inCanvas: {attribute: false},
            canvasWidth: {attribute: false},
            canvasHeight: {attribute: false},
            primaryColor: {type: String},
            secondaryColor: {type: String},
            tool: {type: Object},
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
            
            @media print {
                :host, * { border: 0 !important; }
            
                canvas {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: auto;
                    height: auto;
                    max-width: 100%;
                    max-height: 100%;
                }
            }
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
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = false;
        this.canvas = canvas;
        this.context = context;

        document.addEventListener('mousemove', event => this.onMouseMove(event));
        document.addEventListener('mouseup', event => this.onMouseUp(event));

        this.dispatchEvent(new CustomEvent('drawing-context-created',
            { detail: { canvas, context }, bubbles: true, composed: true }));
    }

    onMouseDown(event) {
        this.mouseDown = true;
        if (this.tool && this.tool.onMouseDown) {
            const {x, y} = this.getCoordinates(event);
            this.tool.onMouseDown({event, x, y, context: this.context, primaryColor: this.primaryColor, secondaryColor: this.secondaryColor, element: this });
        }
        event.preventDefault();
    }

    onMouseMove(event) {
        const {x, y} = this.getCoordinates(event);
        if (this.inCanvas) {
            this.dispatchEvent(new CustomEvent('coordinate', { detail: { x, y }, bubbles: true, composed: true }));
        }

        if (this.mouseDown && this.tool && this.tool.onMouseMove) {
            this.tool.onMouseMove({ event, x, y, context: this.context, primaryColor: this.primaryColor, secondaryColor: this.secondaryColor, element: this });
        }
    }

    onMouseUp(event) {
        if (this.mouseDown && this.tool && this.tool.onMouseUp) {
            const {x, y} = this.getCoordinates(event);
            this.tool.onMouseUp({ event, x, y, context: this.context, primaryColor: this.primaryColor, secondaryColor: this.secondaryColor, element: this });
        }
        this.mouseDown = false;
    }

    onMouseEnter() {
        this.inCanvas = true;
    }

    onMouseLeave() {
        this.inCanvas = false;
        this.dispatchEvent(new CustomEvent('coordinate', {bubbles: true, composed: true}));
    }

    getCoordinates({clientX, clientY}) {
        const {left, top} = this.canvas.getBoundingClientRect();
        const x = Math.floor(Math.max(0, Math.min(this.canvas.width, clientX - left)));
        const y = Math.floor(Math.max(0, Math.min(this.canvas.height, clientY - top)));
        return {x, y};
    }
}

customElements.define('paint-canvas', Canvas);
