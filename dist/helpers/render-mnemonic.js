import { html } from '../../_snowpack/pkg/lit.js';
export function renderMnemonic(caption, mnemonic) {
  const index = mnemonic ? caption.indexOf(mnemonic) : -1;
  return html`${caption.substring(0, index)}<span class="mnemonic"
      >${mnemonic}</span
    >${caption.substring(index + 1)}`;
}