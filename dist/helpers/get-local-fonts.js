let fontsPromise;
export function getLocalFonts() {
  if (fontsPromise) {
    return fontsPromise;
  }

  return fontsPromise = 'fonts' in navigator ? getFontsViaLocalFontAccess().catch(() => getFallbackFonts()) : getFallbackFonts();
}

async function getFontsViaLocalFontAccess() {
  const status = await navigator.permissions.query({
    name: 'font-access'
  });
  if (status.state === 'denied') throw new Error('Cannot enumerate local fonts');
  const fonts = [];

  for await (const font of await navigator.fonts.query()) {
    fonts.push(font.family);
  }

  return fonts.filter((value, index) => fonts.indexOf(value) === index);
}

async function getFallbackFonts() {
  return ['Arial', 'Verdana', 'Tahoma', 'Trebuchet MS', 'Times New Roman', 'Georgia', 'Garamond', 'Courier New', 'Brush Script MT'];
}