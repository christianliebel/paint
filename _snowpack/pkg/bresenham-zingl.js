/**
 * Line segment rasterisation
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {setPixel} setPixel
 */
function line(x0, y0, x1, y1, setPixel) {
  var dx = Math.abs(x1 - x0),
    sx = x0 < x1 ? 1 : -1;
  var dy = -Math.abs(y1 - y0),
    sy = y0 < y1 ? 1 : -1;
  var err = dx + dy,
    e2; /* error value e_xy */

  for (;;) {
    /* loop */
    setPixel(x0, y0);
    e2 = 2 * err;
    if (e2 >= dy) {
      /* e_xy+e_x > 0 */
      if (x0 === x1) break;
      err += dy;
      x0 += sx;
    }
    if (e2 <= dx) {
      /* e_xy+e_y < 0 */
      if (y0 === y1) break;
      err += dx;
      y0 += sy;
    }
  }
}

/**
 * Rectangular parameter encloMath.sing the ellipse
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {setPixel} setPixel
 */
function ellipseRect(x0, y0, x1, y1, setPixel) {
  var a = Math.abs(x1 - x0),
    b = Math.abs(y1 - y0),
    b1 = b & 1; /* diameter */
  var dx = 4 * (1 - a) * b * b,
    dy = 4 * (b1 + 1) * a * a; /* error increment */
  var err = dx + dy + b1 * a * a,
    e2; /* error of 1.step */

  if (x0 > x1) {
    x0 = x1;
    x1 += a;
  } /* if called with swapped points */
  if (y0 > y1) y0 = y1; /* .. exchange them */
  y0 += (b + 1) / 2;
  y1 = y0 - b1; /* starting pixel */
  a = 8 * a * a;
  b1 = 8 * b * b;
  do {
    setPixel(x1, y0); /*   I. Quadrant */
    setPixel(x0, y0); /*  II. Quadrant */
    setPixel(x0, y1); /* III. Quadrant */
    setPixel(x1, y1); /*  IV. Quadrant */
    e2 = 2 * err;
    if (e2 <= dy) {
      y0++;
      y1--;
      err += dy += a;
    } /* y step */
    if (e2 >= dx || 2 * err > dy) {
      x0++;
      x1--;
      err += dx += b1;
    } /* x step */
  } while (x0 <= x1);
  while (y0 - y1 <= b) {
    /* too early stop of flat ellipses a=1 */
    setPixel(x0 - 1, y0); /* -> finish tip of ellipse */
    setPixel(x1 + 1, y0++);
    setPixel(x0 - 1, y1);
    setPixel(x1 + 1, y1--);
  }
}

export { ellipseRect, line };
