export function fillEllipse(xc, yc, a, b, setPixel) {
  let x = 0;
  let y = b;
  let width = 1;
  const a2 = a * a;
  const b2 = b * b;
  const crit1 = -(a2 / 4 + a % 2 + b2);
  const crit2 = -(b2 / 4 + b % 2 + a2);
  const crit3 = -(b2 / 4 + b % 2);
  let t = -a * y;
  let dxt = 2 * b2 * x, dyt = -2 * a2 * y;
  const d2xt = 2 * b2, d2yt = 2 * a2;
  function incx() {
    x++;
    dxt += d2xt;
    t += dxt;
  }
  function incy() {
    y--;
    dyt += d2yt;
    t += dyt;
  }
  function row(x2, y2, width2) {
    for (let i = 0; i < width2; i++) {
      setPixel({x: x2 + i, y: y2});
    }
  }
  while (y >= 0 && x <= a) {
    if (t + b2 * x <= crit1 || t + a2 * y <= crit3) {
      incx();
      width += 2;
    } else if (t - a2 * y > crit2) {
      row(xc - x, yc - y, width);
      if (y != 0)
        row(xc - x, yc + y, width);
      incy();
    } else {
      row(xc - x, yc - y, width);
      if (y != 0)
        row(xc - x, yc + y, width);
      incx();
      incy();
      width += 2;
    }
  }
  if (b == 0)
    row(xc - a, yc, 2 * a + 1);
}
