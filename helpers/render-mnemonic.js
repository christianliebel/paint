import { html } from '../web_modules/lit-element';

export function renderMnemonic(caption, mnemonic) {
  const index = caption.indexOf(mnemonic);
  return html`${caption.substring(0, index)}<span class="mnemonic"
      >${mnemonic}</span
    >${caption.substring(index + 1)}`;
}
