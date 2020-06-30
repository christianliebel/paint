import {css, html, LitElement} from '../web_modules/lit-element.js';

class Canvas extends LitElement {
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
            
            canvas { width: 1024px; height: 768px; margin: 3px; }
        `;
    }

    render() {
        return html`
            <div class="frame">
                <div class="scroll-container">
                    <canvas @mousemove="${this.onMouseMove}"></canvas>
                </div>
            </div>
        `;
    }

    firstUpdated() {
        const canvas = this.shadowRoot.querySelector('canvas');
        const context = canvas.getContext('2d');
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
