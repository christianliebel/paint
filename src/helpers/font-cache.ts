import { FONTS } from '../data/fonts';

let fontsPromise: Promise<string[]> | undefined;

export async function getFonts(): Promise<string[]> {
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
export function requestLocalFonts(): boolean {
  if (fontsPromise) {
    return false;
  }

  if ('queryLocalFonts' in window) {
    fontsPromise = getFontsViaLocalFontAccess();
    return true;
  }

  return false;
}

async function getFontsViaLocalFontAccess(): Promise<string[]> {
  const fonts: string[] = [];
  for await (const font of await (window as any).queryLocalFonts()) {
    fonts.push(font.family);
  }

  return fonts.filter((value, index) => fonts.indexOf(value) === index);
}
