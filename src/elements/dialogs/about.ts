import { css, CSSResult, customElement, html, LitElement, property, PropertyValues, TemplateResult } from 'lit-element';

@customElement('paint-dialog-about')
export class About extends LitElement {
  @property({ attribute: false }) totalFreeMemory?: number;
  @property({ attribute: false }) freeMemoryPercentage?: number;

  static get styles(): CSSResult {
    return css`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      .content {
        margin: 11px;
        display: grid;
        grid-template-columns: 67px 253px;
      }

      .info {
        margin-top: 6px;
      }

      .storage {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
      }

      button {
        width: 75px;
        height: 23px;
        margin-right: 1px;
        float: right;
      }

      a {
        color: var(--button-text);
      }
    `;
  }

  async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
    // TODO: Button style

    super.firstUpdated(_changedProperties);

    if ('storage' in navigator) {
      const { usage, quota } = await navigator.storage.estimate();
      this.totalFreeMemory = quota;
      this.freeMemoryPercentage = 100 - ((usage ?? 1) / (quota ?? 1)) * 100;
    }
  }

  render(): TemplateResult {
    return html`
      <paint-window caption="About Paint" close>
        <div class="content">
          <img src="assets/icon.png" width="32" height="32" alt="" />
          <div class="info">
            Paint<br />
            <a
              href="https://github.com/christianliebel/paint"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/christianliebel/paint</a
            ><br />
            <a
              href="3rdpartylicenses.txt"
              target="_blank"
              rel="noopener noreferrer"
              >Made possible by third-party software</a
            ><br />
            <br />
            <br />
            This project is licensed under:<br />
            Apache 2.0
            <br />
            <br />
            <br />
            <paint-ruler></paint-ruler>
            <br />
            <div class="storage">
              <span>Storage Available to Paint:</span>
              <span>${this.getFreeMemoryInKB()} KB</span>
              <span>System Resources:</span>
              <span>${this.getFreeMemoryPercentage()}% Free</span>
            </div>
            <br />
            <button @click="${this.onOK}">OK</button>
          </div>
        </div>
      </paint-window>
    `;
  }

  getFreeMemoryInKB(): string {
    if (typeof this.totalFreeMemory === 'undefined') {
      return '???';
    }

    const memory = Math.round(this.totalFreeMemory / 1024);
    return Intl.NumberFormat('en-US').format(memory);
  }

  getFreeMemoryPercentage(): number | '???' {
    if (typeof this.freeMemoryPercentage === 'undefined') {
      return '???';
    }

    return Math.round(this.freeMemoryPercentage);
  }

  onOK(): void {
    this.dispatchEvent(
      new CustomEvent('close', { bubbles: true, composed: true }),
    );
  }
}
