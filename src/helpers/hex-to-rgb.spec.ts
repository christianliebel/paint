import { hexToRgb } from './hex-to-rgb';

describe('hexToRgb', () => {
  test('parses black', () => {
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  test('parses white', () => {
    expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 });
  });

  test.each([
    ['#FF0000', { r: 255, g: 0, b: 0 }],
    ['#00FF00', { r: 0, g: 255, b: 0 }],
    ['#0000FF', { r: 0, g: 0, b: 255 }],
  ])('parses the primary channel of %s', (hex, expected) => {
    expect(hexToRgb(hex)).toEqual(expected);
  });

  test('parses a mixed colour with per-channel values', () => {
    // #808040 is one of the default palette entries.
    expect(hexToRgb('#808040')).toEqual({ r: 128, g: 128, b: 64 });
  });

  test('parses the smallest non-zero value per channel', () => {
    expect(hexToRgb('#010203')).toEqual({ r: 1, g: 2, b: 3 });
  });

  test('is case-insensitive for the hex digits', () => {
    expect(hexToRgb('#ff8040')).toEqual(hexToRgb('#FF8040'));
    expect(hexToRgb('#ff8040')).toEqual({ r: 255, g: 128, b: 64 });
  });

  test('reads only the first three channels and ignores trailing characters', () => {
    // Documents the contract: an #RRGGBBAA string keeps R, G and B and
    // drops the alpha byte rather than throwing.
    expect(hexToRgb('#12345678')).toEqual({ r: 0x12, g: 0x34, b: 0x56 });
  });
});
