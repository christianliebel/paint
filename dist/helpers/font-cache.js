import { FONTS } from '../data/fonts.js';
let fontsPromise;
export async function getFonts() {
  if (!fontsPromise) {
    // no fonts requested yet, return default fonts
    return Promise.resolve([...FONTS]);
  }

  return fontsPromise;
}
/**
 * Returns true if local fonts have not been requested before, otherwise,
 * returns false.
 */

export function requestLocalFonts() {
  if (fontsPromise) {
    return false;
  }

  if ('queryLocalFonts' in window) {
    fontsPromise = getFontsViaLocalFontAccess();
    return true;
  }

  return false;
}

async function getFontsViaLocalFontAccess() {
  const fonts = [];

  for await (const font of await window.queryLocalFonts()) {
    fonts.push(font.family);
  }

  return fonts.filter((value, index) => fonts.indexOf(value) === index);
}