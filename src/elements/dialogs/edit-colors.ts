import {
  css,
  CSSResultGroup,
  html,
  LitElement,
  PropertyValues,
  TemplateResult,
} from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

export interface EditColorsResult {
  color: string;
}

// Windows 95 basic colors (48 colors, 8 columns × 6 rows)
const BASIC_COLORS: string[] = [
  '#FF8080',
  '#FFFF80',
  '#80FF80',
  '#00FF80',
  '#80FFFF',
  '#0080FF',
  '#FF80C0',
  '#FF80FF',
  '#FF0000',
  '#FFFF00',
  '#80FF00',
  '#00FF40',
  '#00FFFF',
  '#0080C0',
  '#8080C0',
  '#FF00FF',
  '#804040',
  '#FF8040',
  '#00FF00',
  '#008080',
  '#004080',
  '#8080FF',
  '#800040',
  '#FF0080',
  '#800000',
  '#FF8000',
  '#008000',
  '#008040',
  '#0000FF',
  '#0000A0',
  '#800080',
  '#8000FF',
  '#400000',
  '#804000',
  '#004000',
  '#004040',
  '#000080',
  '#000040',
  '#400040',
  '#400080',
  '#000000',
  '#808000',
  '#808040',
  '#808080',
  '#408080',
  '#C0C0C0',
  '#400080',
  '#FFFFFF',
];

// Custom colors persist across dialog openings within a session
const customColors: string[] = Array(16).fill('#FFFFFF');

const SPECTRUM_SIZE = 176;
const LUM_BAR_WIDTH = 12;
const LUM_BAR_HEIGHT = 176;
const BORDER = 2;

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((x) =>
        Math.max(0, Math.min(255, Math.round(x)))
          .toString(16)
          .padStart(2, '0'),
      )
      .join('')
      .toUpperCase()
  );
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  return [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];
}

@customElement('paint-dialog-edit-colors')
export class EditColors extends LitElement {
  @property() color = '#000000';

  @state() private selectedColor = '#000000';
  @state() private expanded = false;
  @state() private selectedCustomIndex = 0;
  @state() private hue = 0;
  @state() private sat = 0;
  @state() private lum = 0;
  @state() private red = 0;
  @state() private green = 0;
  @state() private blue = 0;

  @query('#spectrum') private spectrumCanvas?: HTMLCanvasElement;
  @query('#luminosity') private luminosityCanvas?: HTMLCanvasElement;

  private draggingSpectrum = false;
  private draggingLum = false;

  static get styles(): CSSResultGroup {
    return css`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      .content {
        display: flex;
        margin: 11px;
        gap: 12px;
      }

      h4 {
        margin: 0 0 4px;
        font-weight: normal;
        font-size: 11px;
      }

      .basic-grid,
      .custom-grid {
        display: grid;
        grid-template-columns: repeat(8, 16px);
        gap: 1px;
      }

      .custom-grid {
        margin-top: 2px;
      }

      .color-cell {
        width: 16px;
        height: 16px;
        border: 1px solid;
        border-color: var(--button-dark) var(--button-light)
          var(--button-light) var(--button-dark);
        box-sizing: border-box;
        cursor: pointer;
      }

      .color-cell.selected {
        border-color: #000;
        outline: 1px dotted #000;
        outline-offset: 1px;
      }

      .buttons {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .buttons paint-button {
        min-width: 75px;
      }

      .define-btn {
        margin-top: 5px;
      }

      .custom-panel {
        display: flex;
        gap: 8px;
      }

      .spectrum-area {
        display: flex;
        gap: 6px;
      }

      .spectrum-container {
        position: relative;
        cursor: crosshair;
      }

      canvas#spectrum {
        border: 2px solid;
        border-color: var(--button-dark) var(--button-light)
          var(--button-light) var(--button-dark);
        display: block;
      }

      .crosshair {
        position: absolute;
        width: 9px;
        height: 9px;
        border: 1px solid #000;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 0 1px #fff inset;
      }

      .lum-container {
        position: relative;
        cursor: pointer;
      }

      canvas#luminosity {
        border: 2px solid;
        border-color: var(--button-dark) var(--button-light)
          var(--button-light) var(--button-dark);
        display: block;
      }

      .lum-arrow-left,
      .lum-arrow-right {
        position: absolute;
        width: 0;
        height: 0;
        pointer-events: none;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        transform: translateY(-50%);
      }

      .lum-arrow-left {
        left: -8px;
        border-left: 6px solid #000;
      }

      .lum-arrow-right {
        right: -8px;
        border-right: 6px solid #000;
      }

      .color-details {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .inputs-group {
        display: grid;
        grid-template-columns: auto 34px;
        gap: 2px 4px;
        align-items: center;
        font-size: 11px;
      }

      .inputs-group label {
        text-align: right;
      }

      .inputs-group input[type='text'] {
        width: 34px;
        height: 18px;
        box-sizing: border-box;
        outline: none;
        text-align: right;
        padding: 0 2px;
      }

      .preview-area {
        font-size: 11px;
      }

      .preview-box {
        width: 56px;
        height: 28px;
        border: 2px solid;
        border-color: var(--button-dark) var(--button-light)
          var(--button-light) var(--button-dark);
        margin-top: 2px;
      }

      .add-btn {
        margin-top: 6px;
      }
    `;
  }

  firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this.selectedColor = this.color;
    this.updateFromHex(this.color);
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (!this.expanded) return;

    if (changedProperties.has('expanded') || changedProperties.has('lum')) {
      this.drawSpectrum();
    }
    if (
      changedProperties.has('expanded') ||
      changedProperties.has('hue') ||
      changedProperties.has('sat')
    ) {
      this.drawLuminosity();
    }
  }

  render(): TemplateResult {
    return html`
      <paint-window caption="Edit Colors" close>
        <div class="content">
          <div class="left">
            <h4>Basic colors:</h4>
            <div class="basic-grid">
              ${BASIC_COLORS.map(
                (color) => html`
                  <div
                    class="color-cell ${this.isSelected(color)
                      ? 'selected'
                      : ''}"
                    style="background-color: ${color}"
                    @click="${() => this.selectColor(color)}"
                  ></div>
                `,
              )}
            </div>
            <h4 style="margin-top: 8px">Custom colors:</h4>
            <div class="custom-grid">
              ${customColors.map(
                (color, i) => html`
                  <div
                    class="color-cell ${this.isCustomSelected(i)
                      ? 'selected'
                      : ''}"
                    style="background-color: ${color}"
                    @click="${() => this.selectCustomColor(i)}"
                  ></div>
                `,
              )}
            </div>
          </div>

          <div class="buttons">
            <paint-button tabindex="0" @click="${this.onOk}">OK</paint-button>
            <paint-button tabindex="0" @click="${this.onCancel}"
              >Cancel</paint-button
            >
            <paint-button
              class="define-btn"
              tabindex="0"
              @click="${this.toggleExpanded}"
            >
              ${this.expanded
                ? 'Define Custom Colors \u00AB'
                : 'Define Custom Colors \u00BB'}
            </paint-button>
            ${this.expanded
              ? html`
                  <div class="preview-area">
                    <span>Color|Solid</span>
                    <div
                      class="preview-box"
                      style="background-color: ${this.selectedColor}"
                    ></div>
                  </div>
                  <paint-button
                    class="add-btn"
                    tabindex="0"
                    @click="${this.addToCustomColors}"
                  >
                    Add to Custom Colors
                  </paint-button>
                `
              : ''}
          </div>

          ${this.expanded ? this.renderCustomPanel() : ''}
        </div>
      </paint-window>
    `;
  }

  private renderCustomPanel(): TemplateResult {
    const crosshairLeft = (this.hue / 360) * SPECTRUM_SIZE + BORDER;
    const crosshairTop = (1 - this.sat / 100) * SPECTRUM_SIZE + BORDER;
    const lumArrowTop = (1 - this.lum / 100) * LUM_BAR_HEIGHT + BORDER;

    return html`
      <div class="custom-panel">
        <div class="spectrum-area">
          <div
            class="spectrum-container"
            @pointerdown="${this.onSpectrumPointerDown}"
            @pointermove="${this.onSpectrumPointerMove}"
            @pointerup="${this.onSpectrumPointerUp}"
          >
            <canvas
              id="spectrum"
              width="${SPECTRUM_SIZE}"
              height="${SPECTRUM_SIZE}"
            ></canvas>
            <div
              class="crosshair"
              style="left: ${crosshairLeft}px; top: ${crosshairTop}px"
            ></div>
          </div>
          <div
            class="lum-container"
            @pointerdown="${this.onLumPointerDown}"
            @pointermove="${this.onLumPointerMove}"
            @pointerup="${this.onLumPointerUp}"
          >
            <canvas
              id="luminosity"
              width="${LUM_BAR_WIDTH}"
              height="${LUM_BAR_HEIGHT}"
            ></canvas>
            <div
              class="lum-arrow-left"
              style="top: ${lumArrowTop}px"
            ></div>
            <div
              class="lum-arrow-right"
              style="top: ${lumArrowTop}px"
            ></div>
          </div>
        </div>

        <div class="color-details">
          <div class="inputs-group">
            <label>Hue:</label>
            <input
              type="text"
              .value="${String(Math.round((this.hue / 360) * 239))}"
              @change="${this.onHueInput}"
            />
            <label>Sat:</label>
            <input
              type="text"
              .value="${String(Math.round((this.sat / 100) * 240))}"
              @change="${this.onSatInput}"
            />
            <label>Lum:</label>
            <input
              type="text"
              .value="${String(Math.round((this.lum / 100) * 240))}"
              @change="${this.onLumInput}"
            />
          </div>
          <div class="inputs-group">
            <label>Red:</label>
            <input
              type="text"
              .value="${String(this.red)}"
              @change="${this.onRedInput}"
            />
            <label>Green:</label>
            <input
              type="text"
              .value="${String(this.green)}"
              @change="${this.onGreenInput}"
            />
            <label>Blue:</label>
            <input
              type="text"
              .value="${String(this.blue)}"
              @change="${this.onBlueInput}"
            />
          </div>
        </div>
      </div>
    `;
  }

  private isSelected(color: string): boolean {
    return this.selectedColor.toUpperCase() === color.toUpperCase();
  }

  private isCustomSelected(index: number): boolean {
    return (
      this.selectedCustomIndex === index &&
      !BASIC_COLORS.some(
        (c) => c.toUpperCase() === this.selectedColor.toUpperCase(),
      )
    );
  }

  private selectColor(color: string): void {
    this.selectedColor = color.toUpperCase();
    this.updateFromHex(color);
  }

  private selectCustomColor(index: number): void {
    this.selectedCustomIndex = index;
    this.selectedColor = customColors[index].toUpperCase();
    this.updateFromHex(customColors[index]);
  }

  private toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  private addToCustomColors(): void {
    customColors[this.selectedCustomIndex] = this.selectedColor;
    this.requestUpdate();
  }

  private updateFromHex(hex: string): void {
    const [r, g, b] = hexToRgb(hex);
    this.red = r;
    this.green = g;
    this.blue = b;
    const [h, s, l] = rgbToHsl(r, g, b);
    this.hue = h;
    this.sat = s;
    this.lum = l;
    this.selectedColor = rgbToHex(r, g, b);
  }

  private updateFromRgb(): void {
    const [h, s, l] = rgbToHsl(this.red, this.green, this.blue);
    this.hue = h;
    this.sat = s;
    this.lum = l;
    this.selectedColor = rgbToHex(this.red, this.green, this.blue);
  }

  private updateFromHsl(): void {
    const [r, g, b] = hslToRgb(this.hue, this.sat, this.lum);
    this.red = r;
    this.green = g;
    this.blue = b;
    this.selectedColor = rgbToHex(r, g, b);
  }

  // --- Canvas rendering ---

  private drawSpectrum(): void {
    const canvas = this.spectrumCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.createImageData(SPECTRUM_SIZE, SPECTRUM_SIZE);
    for (let y = 0; y < SPECTRUM_SIZE; y++) {
      for (let x = 0; x < SPECTRUM_SIZE; x++) {
        const h = (x / SPECTRUM_SIZE) * 360;
        const s = 100 - (y / SPECTRUM_SIZE) * 100;
        const [r, g, b] = hslToRgb(h, s, this.lum);
        const i = (y * SPECTRUM_SIZE + x) * 4;
        imageData.data[i] = r;
        imageData.data[i + 1] = g;
        imageData.data[i + 2] = b;
        imageData.data[i + 3] = 255;
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  private drawLuminosity(): void {
    const canvas = this.luminosityCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.createImageData(LUM_BAR_WIDTH, LUM_BAR_HEIGHT);
    for (let y = 0; y < LUM_BAR_HEIGHT; y++) {
      const l = 100 - (y / LUM_BAR_HEIGHT) * 100;
      const [r, g, b] = hslToRgb(this.hue, this.sat, l);
      for (let x = 0; x < LUM_BAR_WIDTH; x++) {
        const i = (y * LUM_BAR_WIDTH + x) * 4;
        imageData.data[i] = r;
        imageData.data[i + 1] = g;
        imageData.data[i + 2] = b;
        imageData.data[i + 3] = 255;
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  // --- Spectrum pointer events ---

  private onSpectrumPointerDown(e: PointerEvent): void {
    this.draggingSpectrum = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this.updateSpectrumFromPointer(e);
  }

  private onSpectrumPointerMove(e: PointerEvent): void {
    if (this.draggingSpectrum) this.updateSpectrumFromPointer(e);
  }

  private onSpectrumPointerUp(): void {
    this.draggingSpectrum = false;
  }

  private updateSpectrumFromPointer(e: PointerEvent): void {
    const canvas = this.spectrumCanvas;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(SPECTRUM_SIZE - 1, e.clientX - rect.left - BORDER),
    );
    const y = Math.max(
      0,
      Math.min(SPECTRUM_SIZE - 1, e.clientY - rect.top - BORDER),
    );
    this.hue = (x / SPECTRUM_SIZE) * 360;
    this.sat = 100 - (y / SPECTRUM_SIZE) * 100;
    this.updateFromHsl();
  }

  // --- Luminosity pointer events ---

  private onLumPointerDown(e: PointerEvent): void {
    this.draggingLum = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this.updateLumFromPointer(e);
  }

  private onLumPointerMove(e: PointerEvent): void {
    if (this.draggingLum) this.updateLumFromPointer(e);
  }

  private onLumPointerUp(): void {
    this.draggingLum = false;
  }

  private updateLumFromPointer(e: PointerEvent): void {
    const canvas = this.luminosityCanvas;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const y = Math.max(
      0,
      Math.min(LUM_BAR_HEIGHT - 1, e.clientY - rect.top - BORDER),
    );
    this.lum = 100 - (y / LUM_BAR_HEIGHT) * 100;
    this.updateFromHsl();
  }

  // --- Input handlers (Win95 uses Hue: 0–239, Sat: 0–240, Lum: 0–240) ---

  private onHueInput(e: Event): void {
    const val = parseInt((e.target as HTMLInputElement).value);
    if (!isNaN(val)) {
      this.hue = Math.max(0, Math.min(360, (val / 239) * 360));
      this.updateFromHsl();
    }
  }

  private onSatInput(e: Event): void {
    const val = parseInt((e.target as HTMLInputElement).value);
    if (!isNaN(val)) {
      this.sat = Math.max(0, Math.min(100, (val / 240) * 100));
      this.updateFromHsl();
    }
  }

  private onLumInput(e: Event): void {
    const val = parseInt((e.target as HTMLInputElement).value);
    if (!isNaN(val)) {
      this.lum = Math.max(0, Math.min(100, (val / 240) * 100));
      this.updateFromHsl();
    }
  }

  private onRedInput(e: Event): void {
    const val = parseInt((e.target as HTMLInputElement).value);
    if (!isNaN(val)) {
      this.red = Math.max(0, Math.min(255, val));
      this.updateFromRgb();
    }
  }

  private onGreenInput(e: Event): void {
    const val = parseInt((e.target as HTMLInputElement).value);
    if (!isNaN(val)) {
      this.green = Math.max(0, Math.min(255, val));
      this.updateFromRgb();
    }
  }

  private onBlueInput(e: Event): void {
    const val = parseInt((e.target as HTMLInputElement).value);
    if (!isNaN(val)) {
      this.blue = Math.max(0, Math.min(255, val));
      this.updateFromRgb();
    }
  }

  // --- Dialog result ---

  private onOk(): void {
    this.dispatchEvent(
      new CustomEvent<EditColorsResult>('close', {
        detail: { color: this.selectedColor },
      }),
    );
  }

  private onCancel(): void {
    this.dispatchEvent(new CustomEvent('close'));
  }
}
