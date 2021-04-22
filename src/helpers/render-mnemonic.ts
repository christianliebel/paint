import { TemplateResult, html } from 'lit';

export function renderMnemonic(caption: string, mnemonic?: string): TemplateResult {
  const index = mnemonic ? caption.indexOf(mnemonic) : -1;
  return html`${caption.substring(0, index)}<span class="mnemonic"
      >${mnemonic}</span
    >${caption.substring(index + 1)}`;
}
