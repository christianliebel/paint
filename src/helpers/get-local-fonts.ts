let fontsPromise: Promise<string[]>;

export function getLocalFonts(): Promise<string[]> {
  if (fontsPromise) {
    return fontsPromise;
  }

  return (fontsPromise =
    'fonts' in navigator
      ? getFontsViaLocalFontAccess().catch(() => getFallbackFonts())
      : getFallbackFonts());
}

async function getFontsViaLocalFontAccess(): Promise<string[]> {
  const status = await navigator.permissions.query({
    name: 'font-access',
  } as unknown as PermissionDescriptor);
  if (status.state === 'denied')
    throw new Error('Cannot enumerate local fonts');

  const fonts: string[] = [];
  for await (const font of await navigator.fonts.query()) {
    fonts.push(font.family);
  }

  return fonts.filter((value, index) => fonts.indexOf(value) === index);
}

async function getFallbackFonts(): Promise<string[]> {
  return [
    'Arial',
    'Verdana',
    'Tahoma',
    'Trebuchet MS',
    'Times New Roman',
    'Georgia',
    'Garamond',
    'Courier New',
    'Brush Script MT',
  ];
}
