import type { Point } from '../models/point';

// Filled Ellipse Algorithm 1 from:
// https://enchantia.com/software/graphapp/doc/tech/ellipses.html

export function fillEllipse(
  xc: number,
  yc: number,
  a: number,
  b: number,
  setPixel: (point: Point) => unknown,
): void {
  let x = 0;
  let y = b;
  let width = 1;
  const a2 = a * a;
  const b2 = b * b;
  const crit1 = -(a2 / 4 + (a % 2) + b2);
  const crit2 = -(b2 / 4 + (b % 2) + a2);
  const crit3 = -(b2 / 4 + (b % 2));
  let t = -a * y;
  let dxt = 2 * b2 * x,
    dyt = -2 * a2 * y;
  const d2xt = 2 * b2,
    d2yt = 2 * a2;

  function incx(): void {
    x++;
    dxt += d2xt;
    t += dxt;
  }

  function incy(): void {
    y--;
    dyt += d2yt;
    t += dyt;
  }

  function row(x: number, y: number, width: number): void {
    for (let i = 0; i < width; i++) {
      setPixel({ x: x + i, y });
    }
  }

  while (y >= 0 && x <= a) {
    if (t + b2 * x <= crit1 || t + a2 * y <= crit3) {
      incx();
      width += 2;
    } else if (t - a2 * y > crit2) {
      row(xc - x, yc - y, width);
      if (y != 0) row(xc - x, yc + y, width);
      incy();
    } else {
      row(xc - x, yc - y, width);
      if (y != 0) row(xc - x, yc + y, width);
      incx();
      incy();
      width += 2;
    }
  }
  if (b == 0) row(xc - a, yc, 2 * a + 1);
}
