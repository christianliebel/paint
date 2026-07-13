import type { Point } from '../models/point';
import { fillEllipse } from './fill-ellipse';

/**
 * Collects every pixel produced by fillEllipse for the given parameters.
 */
function collect(xc: number, yc: number, a: number, b: number): Point[] {
  const points: Point[] = [];
  fillEllipse(xc, yc, a, b, (point) => points.push(point));
  return points;
}

function key({ x, y }: Point): string {
  return `${x},${y}`;
}

function keysOf(points: Point[]): string[] {
  return points.map(key);
}

describe('fillEllipse', () => {
  describe('exact output for known shapes', () => {
    test('a radius-2 circle renders the expected 13-pixel disc', () => {
      const expected = [
        [0, -2],
        [-1, -1],
        [0, -1],
        [1, -1],
        [-2, 0],
        [-1, 0],
        [0, 0],
        [1, 0],
        [2, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [0, 2],
      ].map(([x, y]) => `${x},${y}`);

      expect(keysOf(collect(0, 0, 2, 2)).sort()).toEqual(expected.sort());
    });

    test('an offset ellipse is rendered around its centre', () => {
      const expected = [
        [5, 3],
        [3, 4],
        [4, 4],
        [5, 4],
        [6, 4],
        [7, 4],
        [3, 5],
        [4, 5],
        [5, 5],
        [6, 5],
        [7, 5],
        [3, 6],
        [4, 6],
        [5, 6],
        [6, 6],
        [7, 6],
        [5, 7],
      ].map(([x, y]) => `${x},${y}`);

      expect(keysOf(collect(5, 5, 3, 2)).sort()).toEqual(expected.sort());
    });
  });

  describe('degenerate shapes', () => {
    test('b = 0 draws a single horizontal line of width 2a + 1', () => {
      const points = collect(0, 0, 3, 0);

      expect(points).toHaveLength(7);
      expect(points.every(({ y }) => y === 0)).toBe(true);
      expect(points.map(({ x }) => x).sort((m, n) => m - n)).toEqual([
        -3, -2, -1, 0, 1, 2, 3,
      ]);
    });

    test('a = 0 draws a single vertical line of height 2b + 1', () => {
      const points = collect(0, 0, 0, 3);

      expect(points).toHaveLength(7);
      expect(points.every(({ x }) => x === 0)).toBe(true);
      expect(points.map(({ y }) => y).sort((m, n) => m - n)).toEqual([
        -3, -2, -1, 0, 1, 2, 3,
      ]);
    });

    test('a = 0 and b = 0 draws exactly the centre pixel', () => {
      expect(collect(4, 7, 0, 0)).toEqual([{ x: 4, y: 7 }]);
    });

    test('a radius-1 circle produces a thin vertical run', () => {
      // The reference algorithm collapses a radius-1 circle to a 3-pixel
      // vertical run rather than a plus/3x3 block. This pins that behaviour.
      expect(keysOf(collect(0, 0, 1, 1)).sort()).toEqual(
        ['0,-1', '0,0', '0,1'].sort(),
      );
    });
  });

  describe('geometric invariants', () => {
    const cases: ReadonlyArray<[number, number, number, number]> = [
      [0, 0, 1, 1],
      [0, 0, 2, 2],
      [0, 0, 3, 3],
      [5, 5, 3, 2],
      [10, 4, 5, 4],
      [2, 9, 4, 6],
      [0, 0, 3, 0],
      [0, 0, 0, 3],
    ];

    test.each(cases)(
      'ellipse at (%i,%i) with a=%i b=%i keeps every pixel inside its bounding box',
      (xc, yc, a, b) => {
        for (const { x, y } of collect(xc, yc, a, b)) {
          expect(x).toBeGreaterThanOrEqual(xc - a);
          expect(x).toBeLessThanOrEqual(xc + a);
          expect(y).toBeGreaterThanOrEqual(yc - b);
          expect(y).toBeLessThanOrEqual(yc + b);
        }
      },
    );

    test.each(cases)(
      'ellipse at (%i,%i) with a=%i b=%i is duplicate-free and symmetric about both axes',
      (xc, yc, a, b) => {
        const points = collect(xc, yc, a, b);
        const keys = keysOf(points);
        const set = new Set(keys);

        // No pixel is emitted twice.
        expect(set.size).toBe(keys.length);

        for (const { x, y } of points) {
          // Mirror across the vertical axis x = xc.
          expect(set.has(`${2 * xc - x},${y}`)).toBe(true);
          // Mirror across the horizontal axis y = yc.
          expect(set.has(`${x},${2 * yc - y}`)).toBe(true);
        }

        // The centre pixel is always painted.
        expect(set.has(`${xc},${yc}`)).toBe(true);
      },
    );
  });
});
