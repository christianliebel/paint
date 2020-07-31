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
  var err = dx + dy, e2; /* error value e_xy */

  for (;;) { /* loop */
    setPixel(x0, y0);
    e2 = 2 * err;
    if (e2 >= dy) { /* e_xy+e_x > 0 */
      if (x0 === x1) break;
      err += dy;
      x0 += sx;
    }
    if (e2 <= dx) { /* e_xy+e_y < 0 */
      if (y0 === y1) break;
      err += dx;
      y0 += sy;
    }
  }
}


/**
 * Draw a black (0) anti-aliased line on white (255) background
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {setPixelAlpha} setPixelAA
 * @return {number}
 */
function lineAA(x0, y0, x1, y1, setPixelAA) {
  var sx = x0 < x1 ? 1 : -1,
      sy = y0 < y1 ? 1 : -1,
      x2;
  var dx = Math.abs(x1 - x0),
      dy = Math.abs(y1 - y0),
      err = dx * dx + dy * dy;
  var e2 = err == 0 ? 1 : 0xffff7f / Math.sqrt(err); /* multiplication factor */

  dx *= e2;
  dy *= e2;
  err = dx - dy; /* error value e_xy */
  for (;;) { /* pixel loop */
    setPixelAA(x0, y0, Math.abs(err - dx + dy) >> 16);
    e2 = err;
    x2 = x0;
    if (2 * e2 >= -dx) { /* x step */
      if (x0 == x1) break;
      if (e2 + dy < 0xff0000) setPixelAA(x0, y0 + sy, (e2 + dy) >> 16);
      err -= dy;
      x0 += sx;
    }
    if (2 * e2 <= dy) { /* y step */
      if (y0 == y1) break;
      if (dx - e2 < 0xff0000) setPixelAA(x2 + sx, y0, (dx - e2) >> 16);
      err += dx;
      y0 += sy;
    }
  }
}


/**
 * Plot an anti-aliased line of width wd
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} wd
 * @param  {setPixel} setPixel
 */
function lineWidth(x0, y0, x1, y1, wd, setPixel) {
  let dx = Math.abs(x1 - x0),
      sx = x0 < x1 ? 1 : -1;
  let dy = Math.abs(y1 - y0),
      sy = y0 < y1 ? 1 : -1;
  let err = dx - dy,
      e2, x2, y2; /* error value e_xy */
  let ed = dx + dy == 0 ? 1 : Math.sqrt(dx * dx + dy * dy);

  for (wd = (wd + 1) / 2;;) { /* pixel loop */
    setPixel(x0, y0, Math.max(0, 255 * (Math.abs(err - dx + dy) / ed - wd + 1)));
    e2 = err;
    x2 = x0;
    if (2 * e2 >= -dx) { /* x step */
      for (e2 += dy, y2 = y0; e2 < ed * wd && (y1 != y2 || dx > dy); e2 += dx)
        setPixel(x0, y2 += sy, Math.max(0, 255 * (Math.abs(e2) / ed - wd + 1)));
      if (x0 == x1) break;
      e2 = err;
      err -= dy;
      x0 += sx;
    }
    if (2 * e2 <= dy) { /* y step */
      for (e2 = dx - e2; e2 < ed * wd && (x1 != x2 || dx < dy); e2 += dy)
        setPixel(x2 += sx, y0, Math.max(0, 255 * (Math.abs(e2) / ed - wd + 1)));
      if (y0 == y1) break;
      err += dx;
      y0 += sy;
    }
  }
}

function assert(d, m = 'assert error') {
  if (!d) throw new Error(m);
}

/**
 * plot any quadratic rational Bezier curve
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {number} w
 * @param  {setPixel} setPixel
 */
function quadRationalBezier(x0, y0, x1, y1, x2, y2, w, setPixel) {
  var x = x0 - 2 * x1 + x2,
      y = y0 - 2 * y1 + y2;
  var xx = x0 - x1,
      yy = y0 - y1,
      ww, t, q;

  assert(w >= 0.0, 'width is negative');

  if (xx * (x2 - x1) > 0) { /* horizontal cut at P4? */
    if (yy * (y2 - y1) > 0) /* vertical cut at P6 too? */
      if (Math.abs(xx * y) > Math.abs(yy * x)) { /* which first? */
        x0 = x2;
        x2 = xx + x1;
        y0 = y2;
        y2 = yy + y1; /* swap points */
      } /* now horizontal cut at P4 comes first */
    if (x0 == x2 || w == 1) t = (x0 - x1) / x;
    else { /* non-rational or rational case */
      q = Math.sqrt(4 * w * w * (x0 - x1) * (x2 - x1) + (x2 - x0) * (x2 - x0));
      if (x1 < x0) q = -q;
      t = (2 * w * (x0 - x1) - x0 + x2 + q) / (2 * (1 - w) * (x2 - x0)); /* t at P4 */
    }
    q = 1 / (2 * t * (1 - t) * (w - 1) + 1); /* sub-divide at t */
    xx = (t * t * (x0 - 2 * w * x1 + x2) + 2 * t * (w * x1 - x0) + x0) * q; /* = P4 */
    yy = (t * t * (y0 - 2 * w * y1 + y2) + 2 * t * (w * y1 - y0) + y0) * q;
    ww = t * (w - 1) + 1;
    ww *= ww * q; /* squared weight P3 */
    w = ((1 - t) * (w - 1) + 1) * Math.sqrt(q); /* weight P8 */
    x = Math.floor(xx + 0.5);
    y = Math.floor(yy + 0.5); /* P4 */
    yy = (xx - x0) * (y1 - y0) / (x1 - x0) + y0; /* intersect P3 | P0 P1 */
    quadRationalBezierSegment(x0, y0, x, Math.floor(yy + 0.5), x, y, ww, setPixel);
    yy = (xx - x2) * (y1 - y2) / (x1 - x2) + y2; /* intersect P4 | P1 P2 */
    y1 = Math.floor(yy + 0.5);
    x0 = x1 = x;
    y0 = y; /* P0 = P4, P1 = P8 */
  }
  if ((y0 - y1) * (y2 - y1) > 0) { /* vertical cut at P6? */
    if (y0 == y2 || w == 1) t = (y0 - y1) / (y0 - 2 * y1 + y2);
    else { /* non-rational or rational case */
      q = Math.sqrt(4 * w * w * (y0 - y1) * (y2 - y1) + (y2 - y0) * (y2 - y0));
      if (y1 < y0) q = -q;
      t = (2 * w * (y0 - y1) - y0 + y2 + q) / (2 * (1 - w) * (y2 - y0)); /* t at P6 */
    }
    q = 1 / (2 * t * (1 - t) * (w - 1) + 1); /* sub-divide at t */
    xx = (t * t * (x0 - 2 * w * x1 + x2) + 2 * t * (w * x1 - x0) + x0) * q; /* = P6 */
    yy = (t * t * (y0 - 2 * w * y1 + y2) + 2 * t * (w * y1 - y0) + y0) * q;
    ww = t * (w - 1) + 1;
    ww *= ww * q; /* squared weight P5 */
    w = ((1 - t) * (w - 1) + 1) * Math.sqrt(q); /* weight P7 */
    x = Math.floor(xx + 0.5);
    y = Math.floor(yy + 0.5); /* P6 */
    xx = (x1 - x0) * (yy - y0) / (y1 - y0) + x0; /* intersect P6 | P0 P1 */
    quadRationalBezierSegment(x0, y0, Math.floor(xx + 0.5), y, x, y, ww, setPixel);
    xx = (x1 - x2) * (yy - y2) / (y1 - y2) + x2; /* intersect P7 | P1 P2 */
    x1 = Math.floor(xx + 0.5);
    x0 = x;
    y0 = y1 = y; /* P0 = P6, P1 = P7 */
  }
  quadRationalBezierSegment(x0, y0, x1, y1, x2, y2, w * w, setPixel); /* remaining */
}

/**
 * plot a limited rational Bezier segment, squared weight
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {number} w
 * @param  {setPixel} setPixel
 */
function quadRationalBezierSegment(x0, y0, x1, y1, x2, y2, w, setPixel) {
  var sx = x2 - x1,
      sy = y2 - y1; /* relative values for checks */
  var dx = x0 - x2,
      dy = y0 - y2,
      xx = x0 - x1,
      yy = y0 - y1;
  var xy = xx * sy + yy * sx,
      cur = xx * sy - yy * sx,
      err; /* curvature */

  assert(xx * sx <= 0.0 && yy * sy <= 0.0, 'sign of gradient must not change');

  if (cur != 0.0 && w > 0.0) { /* no straight line */
    if (sx * sx + sy * sy > xx * xx + yy * yy) { /* begin with longer part */
      x2 = x0;
      x0 -= dx;
      y2 = y0;
      y0 -= dy;
      cur = -cur; /* swap P0 P2 */
    }
    xx = 2 * (4 * w * sx * xx + dx * dx); /* differences 2nd degree */
    yy = 2 * (4 * w * sy * yy + dy * dy);
    sx = x0 < x2 ? 1 : -1; /* x step direction */
    sy = y0 < y2 ? 1 : -1; /* y step direction */
    xy = -2 * sx * sy * (2 * w * xy + dx * dy);

    if (cur * sx * sy < 0.0) { /* negated curvature? */
      xx = -xx;
      yy = -yy;
      xy = -xy;
      cur = -cur;
    }
    dx = 4 * w * (x1 - x0) * sy * cur + xx / 2 + xy; /* differences 1st degree */
    dy = 4 * w * (y0 - y1) * sx * cur + yy / 2 + xy;

    if (w < 0.5 && (dy > xy || dx < xy)) { /* flat ellipse, algorithm fails */
      cur = (w + 1) / 2;
      w = Math.sqrt(w);
      xy = 1 / (w + 1);
      sx = Math.floor((x0 + 2 * w * x1 + x2) * xy / 2 + 0.5); /* subdivide curve in half */
      sy = Math.floor((y0 + 2 * w * y1 + y2) * xy / 2 + 0.5);
      dx = Math.floor((w * x1 + x0) * xy + 0.5);
      dy = Math.floor((y1 * w + y0) * xy + 0.5, setPixel);
      quadRationalBezierSegment(x0, y0, dx, dy, sx, sy, cur); /* plot separately */
      dx = Math.floor((w * x1 + x2) * xy + 0.5);
      dy = Math.floor((y1 * w + y2) * xy + 0.5, setPixel);
      quadRationalBezierSegment(sx, sy, dx, dy, x2, y2, cur, setPixel);
      return;
    }
    err = dx + dy - xy; /* error 1.step */
    do {
      setPixel(x0, y0); /* plot curve */
      if (x0 == x2 && y0 == y2) return; /* last pixel -> curve finished */
      x1 = 2 * err > dy;
      y1 = 2 * (err + yy) < -dy; /* save value for test of x step */
      if (2 * err < dx || y1) {
        y0 += sy;
        dy += xy;
        err += dx += xx;
      } /* y step */
      if (2 * err > dx || x1) {
        x0 += sx;
        dx += xy;
        err += dy += yy;
      } /* x step */
    } while (dy <= xy && dx >= xy); /* gradient negates -> algorithm fails */
  }
  line(x0, y0, x2, y2, setPixel); /* plot remaining needle to end */
}


/**
 * draw an anti-aliased rational quadratic Bezier segment, squared weight
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {number} w
 * @param  {setPixelAlpha} setPixelAA
 */
function quadRationalBezierSegmentAA(x0, y0, x1, y1, x2, y2, w, setPixelAA) {
  var sx = x2 - x1,
      sy = y2 - y1; /* relative values for checks */
  var dx = x0 - x2,
      dy = y0 - y2,
      xx = x0 - x1,
      yy = y0 - y1;
  var xy = xx * sy + yy * sx,
      cur = xx * sy - yy * sx,
      err, ed; /* curvature */
  var f;

  assert(xx * sx <= 0.0 && yy * sy <= 0.0); /* sign of gradient must not change */

  if (cur != 0.0 && w > 0.0) { /* no straight line */
    if (sx * sx + sy * sy > xx * xx + yy * yy) { /* begin with longer part */
      x2 = x0;
      x0 -= dx;
      y2 = y0;
      y0 -= dy;
      cur = -cur; /* swap P0 P2 */
    }
    xx = 2 * (4 * w * sx * xx + dx * dx); /* differences 2nd degree */
    yy = 2 * (4 * w * sy * yy + dy * dy);
    sx = x0 < x2 ? 1 : -1; /* x step direction */
    sy = y0 < y2 ? 1 : -1; /* y step direction */
    xy = -2 * sx * sy * (2 * w * xy + dx * dy);

    if (cur * sx * sy < 0) { /* negated curvature? */
      xx = -xx;
      yy = -yy;
      cur = -cur;
      xy = -xy;
    }
    dx = 4 * w * (x1 - x0) * sy * cur + xx / 2 + xy; /* differences 1st degree */
    dy = 4 * w * (y0 - y1) * sx * cur + yy / 2 + xy;

    if (w < 0.5 && dy > dx) { /* flat ellipse, algorithm fails */
      cur = (w + 1) / 2;
      w = Math.sqrt(w);
      xy = 1 / (w + 1);
      sx = Math.floor((x0 + 2 * w * x1 + x2) * xy / 2 + 0.5); /* subdivide curve in half  */
      sy = Math.floor((y0 + 2 * w * y1 + y2) * xy / 2 + 0.5);
      dx = Math.floor((w * x1 + x0) * xy + 0.5);
      dy = Math.floor((y1 * w + y0) * xy + 0.5);
      quadRationalBezierSegmentAA(x0, y0, dx, dy, sx, sy, cur, setPixelAA); /* plot apart */
      dx = Math.floor((w * x1 + x2) * xy + 0.5);
      dy = Math.floor((y1 * w + y2) * xy + 0.5);
      return quadRationalBezierSegmentAA(sx, sy, dx, dy, x2, y2, cur,
        setPixelAA);
    }
    err = dx + dy - xy; /* error 1st step */
    do { /* pixel loop */
      cur = Math.min(dx - xy, xy - dy);
      ed = Math.max(dx - xy, xy - dy);
      ed += 2 * ed * cur * cur / (4. * ed * ed + cur * cur); /* approximate error distance */
      x1 = 255 * Math.abs(err - dx - dy + xy) / ed; /* get blend value by pixel error */
      if (x1 < 256) setPixelAA(x0, y0, x1); /* plot curve */
      if (f = 2 * err + dy < 0) { /* y step */
        if (y0 == y2) return; /* last pixel -> curve finished */
        if (dx - err < ed) setPixelAA(x0 + sx, y0, 255 * Math.abs(dx - err) / ed);
      }
      if (2 * err + dx > 0) { /* x step */
        if (x0 == x2) return; /* last pixel -> curve finished */
        if (err - dy < ed) setPixelAA(x0, y0 + sy, 255 * Math.abs(err - dy) / ed);
        x0 += sx;
        dx += xy;
        err += dy += yy;
      }
      if (f) {
        y0 += sy;
        dy += xy;
        err += dx += xx;
      } /* y step */
    } while (dy < dx); /* gradient negates -> algorithm fails */
  }
  lineAA(x0, y0, x2, y2, setPixelAA); /* plot remaining needle to end */
}

/**
 * Draws ellipse
 * @param  {number} xm
 * @param  {number} ym
 * @param  {number} a
 * @param  {number} b
 * @param  {setPixel} setPixel
 */
function ellipse(xm, ym, a, b, setPixel) {
  var x = -a, y = 0; /* II. quadrant from bottom left to top right */
  var e2 = b * b, err = x * (2 * e2 + x) + e2; /* error of 1.step */

  do {
    setPixel(xm - x, ym + y); /*   I. Quadrant */
    setPixel(xm + x, ym + y); /*  II. Quadrant */
    setPixel(xm + x, ym - y); /* III. Quadrant */
    setPixel(xm - x, ym - y); /*  IV. Quadrant */
    e2 = 2 * err;
    if (e2 >= (x * 2 + 1) * b * b) /* e_xy+e_x > 0 */
      err += (++x * 2 + 1) * b * b;
    if (e2 <= (y * 2 + 1) * a * a) /* e_xy+e_y < 0 */
      err += (++y * 2 + 1) * a * a;
  } while (x <= 0);

  while (y++ < b) { /* too early stop of flat ellipses a=1, */
    setPixel(xm, ym + y); /* -> finish tip of ellipse */
    setPixel(xm, ym - y);
  }
}

/**
 * Plot ellipse rotated by angle (radian)
 * @param  {number} x
 * @param  {number} y
 * @param  {number} a
 * @param  {number} b
 * @param  {number} angle
 * @param  {setPixel} setPixel
 */
function rotatedEllipse(x, y, a, b, angle, setPixel) {
  var xd = a * a,
      yd = b * b;
  var s = Math.sin(angle),
      zd = (xd - yd) * s; /* ellipse rotation */
  xd = Math.sqrt(xd - zd * s), yd = Math.sqrt(yd + zd * s); /* surrounding rectangle */
  a = xd + 0.5;
  b = yd + 0.5;
  zd = zd * a * b / (xd * yd); /* scale to integer */
  rotatedEllipseRect(x - a, y - b, x + a, y + b, (4 * zd * Math.cos(angle)), setPixel);
}


/**
 * Rectangle encloMath.sing the ellipse, integer rotation angle
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} zd
 * @param  {setPixel} setPixel
 */
function rotatedEllipseRect(x0, y0, x1, y1, zd, setPixel) {
   var xd = x1 - x0,
       yd = y1 - y0;
   var w = xd * yd;
   if (zd === 0) return ellipseRect(x0, y0, x1, y1, setPixel);          /* looks nicer */
   if (w !== 0.0) w = (w - zd) / (w + w);                    /* squared weight of P1 */
   assert(w <= 1 && w >= 0.0, 'limit angle to |zd|<=xd*yd');
   xd = Math.floor(xd * w + 0.5);
   yd = Math.floor(yd * w + 0.5);           /* snap xe,ye to int */
   quadRationalBezierSegment(x0, y0 + yd, x0, y0, x0 + xd, y0, 1 - w);
   quadRationalBezierSegment(x0, y0 + yd, x0, y1, x1 - xd, y1, w);
   quadRationalBezierSegment(x1, y1 - yd, x1, y1, x1 - xd, y1, 1 - w);
   quadRationalBezierSegment(x1, y1 - yd, x1, y0, x0 + xd, y0, w);
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

  while (y0 - y1 <= b) { /* too early stop of flat ellipses a=1 */
    setPixel(x0 - 1, y0); /* -> finish tip of ellipse */
    setPixel(x1 + 1, y0++);
    setPixel(x0 - 1, y1);
    setPixel(x1 + 1, y1--);
  }
}

/**
 * Circle rasterisation
 * @param  {number} xm
 * @param  {number} ym
 * @param  {number} r
 * @param  {setPixel} setPixel
 */
function circle(xm, ym, r, setPixel) {
  var x = -r, y = 0, err = 2 - 2 * r; /* bottom left to top right */
  do {
    setPixel(xm - x, ym + y); /*   I. Quadrant +x +y */
    setPixel(xm - y, ym - x); /*  II. Quadrant -x +y */
    setPixel(xm + x, ym - y); /* III. Quadrant -x -y */
    setPixel(xm + y, ym + x); /*  IV. Quadrant +x -y */
    r = err;
    if (r <= y) err += ++y * 2 + 1; /* e_xy+e_y < 0 */
    if (r > x || err > y) /* e_xy+e_x > 0 or no 2nd y-step */
      err += ++x * 2 + 1; /* -> x-step now */
  } while (x < 0);
}

/**
 * Draw a black anti-aliased circle on white background
 * @param  {number} xm
 * @param  {number} ym
 * @param  {number} r
 * @param  {setPixelAlpha} setPixelAA
 */
function circleAA(xm, ym, r, setPixelAA) {
  var x = -r,
      y = 0; /* II. quadrant from bottom left to top right */
  var i, x2, e2, err = 2 - 2 * r; /* error of 1.step */
  r = 1 - err;
  do {
    i = 255 * Math.abs(err - 2 * (x + y) - 2) / r; /* get blend value of pixel */
    setPixelAA(xm - x, ym + y, i); /*   I. Quadrant */
    setPixelAA(xm - y, ym - x, i); /*  II. Quadrant */
    setPixelAA(xm + x, ym - y, i); /* III. Quadrant */
    setPixelAA(xm + y, ym + x, i); /*  IV. Quadrant */
    e2 = err;
    x2 = x; /* remember values */
    if (err + y > 0) { /* x step */
      i = 255 * (err - 2 * x - 1) / r; /* outward pixel */
      if (i < 256) {
        setPixelAA(xm - x, ym + y + 1, i);
        setPixelAA(xm - y - 1, ym - x, i);
        setPixelAA(xm + x, ym - y - 1, i);
        setPixelAA(xm + y + 1, ym + x, i);
      }
      err += ++x * 2 + 1;
    }
    if (e2 + x2 <= 0) { /* y step */
      i = 255 * (2 * y + 3 - e2) / r; /* inward pixel */
      if (i < 256) {
        setPixelAA(xm - x2 - 1, ym + y, i);
        setPixelAA(xm - y, ym - x2 - 1, i);
        setPixelAA(xm + x2 + 1, ym - y, i);
        setPixelAA(xm + y, ym + x2 + 1, i);
      }
      err += ++y * 2 + 1;
    }
  } while (x < 0);
}

/**
 * Plot any quadratic Bezier curve
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {setPixel} setPixel
 */
function quadBezier(x0, y0, x1, y1, x2, y2, setPixel) {
  var x = x0 - x1,
      y = y0 - y1;
  var t = x0 - 2 * x1 + x2, r;

  if (x * (x2 - x1) > 0) { /* horizontal cut at P4? */
    if (y * (y2 - y1) > 0) /* vertical cut at P6 too? */
      if (Math.abs((y0 - 2 * y1 + y2) / t * x) > Math.abs(y)) { /* which first? */
        x0 = x2;
        x2 = x + x1;
        y0 = y2;
        y2 = y + y1; /* swap points */
      } /* now horizontal cut at P4 comes first */
    t = (x0 - x1) / t;
    r = (1 - t) * ((1 - t) * y0 + 2 * t * y1) + t * t * y2; /* By(t=P4) */
    t = (x0 * x2 - x1 * x1) * t / (x0 - x1); /* gradient dP4/dx=0 */
    x = Math.floor(t + 0.5);
    y = Math.floor(r + 0.5);
    r = (y1 - y0) * (t - x0) / (x1 - x0) + y0; /* intersect P3 | P0 P1 */
    quadBezierSegment(x0, y0, x, Math.floor(r + 0.5), x, y, setPixel);
    r = (y1 - y2) * (t - x2) / (x1 - x2) + y2; /* intersect P4 | P1 P2 */
    x0 = x1 = x;
    y0 = y;
    y1 = Math.floor(r + 0.5); /* P0 = P4, P1 = P8 */
  }
  if ((y0 - y1) * (y2 - y1) > 0) { /* vertical cut at P6? */
    t = y0 - 2 * y1 + y2;
    t = (y0 - y1) / t;
    r = (1 - t) * ((1 - t) * x0 + 2 * t * x1) + t * t * x2; /* Bx(t=P6) */
    t = (y0 * y2 - y1 * y1) * t / (y0 - y1); /* gradient dP6/dy=0 */
    x = Math.floor(r + 0.5);
    y = Math.floor(t + 0.5);
    r = (x1 - x0) * (t - y0) / (y1 - y0) + x0; /* intersect P6 | P0 P1 */
    quadBezierSegment(x0, y0, Math.floor(r + 0.5), y, x, y, setPixel);
    r = (x1 - x2) * (t - y2) / (y1 - y2) + x2; /* intersect P7 | P1 P2 */
    x0 = x;
    x1 = Math.floor(r + 0.5);
    y0 = y1 = y; /* P0 = P6, P1 = P7 */
  }
  quadBezierSegment(x0, y0, x1, y1, x2, y2, setPixel); /* remaining part */
}

/**
 * plot a limited quadratic Bezier segment
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {setPixel} setPixel
 */
function quadBezierSegment(x0, y0, x1, y1, x2, y2, setPixel) {
  var sx = x2 - x1,
      sy = y2 - y1;
  var xx = x0 - x1,
      yy = y0 - y1,
      xy; /* relative values for checks */
  var dx, dy, err, cur = xx * sy - yy * sx; /* curvature */

  assert(xx * sx <= 0 && yy * sy <= 0, 'sign of gradient must not change');

  if (sx * sx + sy * sy > xx * xx + yy * yy) { /* begin with longer part */
    x2 = x0;
    x0 = sx + x1;
    y2 = y0;
    y0 = sy + y1;
    cur = -cur; /* swap P0 P2 */
  }
  if (cur != 0) { /* no straight line */
    xx += sx;
    xx *= sx = x0 < x2 ? 1 : -1; /* x step direction */
    yy += sy;
    yy *= sy = y0 < y2 ? 1 : -1; /* y step direction */
    xy = 2 * xx * yy;
    xx *= xx;
    yy *= yy; /* differences 2nd degree */
    if (cur * sx * sy < 0) { /* negated curvature? */
      xx = -xx;
      yy = -yy;
      xy = -xy;
      cur = -cur;
    }
    dx = 4 * sy * cur * (x1 - x0) + xx - xy; /* differences 1st degree */
    dy = 4 * sx * cur * (y0 - y1) + yy - xy;
    xx += xx;
    yy += yy;
    err = dx + dy + xy; /* error 1st step */
    do {
      setPixel(x0, y0); /* plot curve */
      if (x0 == x2 && y0 == y2) return; /* last pixel -> curve finished */
      y1 = 2 * err < dx; /* save value for test of y step */
      if (2 * err > dy) {
        x0 += sx;
        dx -= xy;
        err += dy += yy;
      } /* x step */
      if (y1) {
        y0 += sy;
        dy -= xy;
        err += dx += xx;
      } /* y step */
    } while (dy < 0 && dx > 0); /* gradient negates -> algorithm fails */
  }
  line(x0, y0, x2, y2, setPixel); /* plot remaining part to end */
}


/**
 * Plot any quadratic Bezier curve with anti-alias
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {setPixelAlpha} setPixelAA
 */
function quadBezierAA(x0, y0, x1, y1, x2, y2, setPixelAA) {
  var x = x0 - x1,
      y = y0 - y1;
  var t = x0 - 2 * x1 + x2, r;

  if (x * (x2 - x1) > 0) { /* horizontal cut at P4? */
    if (y * (y2 - y1) > 0) /* vertical cut at P6 too? */
      if (Math.abs((y0 - 2 * y1 + y2) / t * x) > Math.abs(y)) { /* which first? */
        x0 = x2;
        x2 = x + x1;
        y0 = y2;
        y2 = y + y1; /* swap points */
      } /* now horizontal cut at P4 comes first */
    t = (x0 - x1) / t;
    r = (1 - t) * ((1 - t) * y0 + 2 * t * y1) + t * t * y2; /* By(t=P4) */
    t = (x0 * x2 - x1 * x1) * t / (x0 - x1); /* gradient dP4/dx=0 */
    x = Math.floor(t + 0.5);
    y = Math.floor(r + 0.5);
    r = (y1 - y0) * (t - x0) / (x1 - x0) + y0; /* intersect P3 | P0 P1 */
    quadBezierSegmentAA(x0, y0, x, Math.floor(r + 0.5), x, y, setPixelAA);
    r = (y1 - y2) * (t - x2) / (x1 - x2) + y2; /* intersect P4 | P1 P2 */
    x0 = x1 = x;
    y0 = y;
    y1 = Math.floor(r + 0.5); /* P0 = P4, P1 = P8 */
  }
  if ((y0 - y1) * (y2 - y1) > 0) { /* vertical cut at P6? */
    t = y0 - 2 * y1 + y2;
    t = (y0 - y1) / t;
    r = (1 - t) * ((1 - t) * x0 + 2 * t * x1) + t * t * x2; /* Bx(t=P6) */
    t = (y0 * y2 - y1 * y1) * t / (y0 - y1); /* gradient dP6/dy=0 */
    x = Math.floor(r + 0.5);
    y = Math.floor(t + 0.5);
    r = (x1 - x0) * (t - y0) / (y1 - y0) + x0; /* intersect P6 | P0 P1 */
    quadBezierSegmentAA(x0, y0, Math.floor(r + 0.5), y, x, y, setPixelAA);
    r = (x1 - x2) * (t - y2) / (y1 - y2) + x2; /* intersect P7 | P1 P2 */
    x0 = x;
    x1 = Math.floor(r + 0.5);
    y0 = y1 = y; /* P0 = P6, P1 = P7 */
  }
  quadBezierSegmentAA(x0, y0, x1, y1, x2, y2, setPixelAA); /* remaining part */
}


/**
 * Draw an limited anti-aliased quadratic Bezier segment
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {setPixelAlpha} setPixelAA
 */
function quadBezierSegmentAA(x0, y0, x1, y1, x2, y2, setPixelAA) {
  var sx = x2 - x1,
      sy = y2 - y1;
  var xx = x0 - x1,
      yy = y0 - y1,
      xy; /* relative values for checks */
  var dx, dy, err, ed, cur = xx * sy - yy * sx; /* curvature */

  // assert(xx*sx <= 0 && yy*sy <= 0, 'sign of gradient must not change');

  if (sx * sx + sy * sy > xx * xx + yy * yy) { /* begin with longer part */
    x2 = x0;
    x0 = sx + x1;
    y2 = y0;
    y0 = sy + y1;
    cur = -cur; /* swap P0 P2 */
  }
  if (cur != 0) { /* no straight line */
    xx += sx;
    xx *= sx = x0 < x2 ? 1 : -1; /* x step direction */
    yy += sy;
    yy *= sy = y0 < y2 ? 1 : -1; /* y step direction */
    xy = 2 * xx * yy;
    xx *= xx;
    yy *= yy; /* differences 2nd degree */
    if (cur * sx * sy < 0) { /* negated curvature? */
      xx = -xx;
      yy = -yy;
      xy = -xy;
      cur = -cur;
    }
    dx = 4 * sy * (x1 - x0) * cur + xx - xy; /* differences 1st degree */
    dy = 4 * sx * (y0 - y1) * cur + yy - xy;
    xx += xx;
    yy += yy;
    err = dx + dy + xy; /* error 1st step */
    do {
      cur = Math.min(dx + xy, -xy - dy);
      ed = Math.max(dx + xy, -xy - dy); /* approximate error distance */
      ed += 2 * ed * cur * cur / (4 * ed * ed + cur * cur);
      setPixelAA(x0, y0, 255 * Math.abs(err - dx - dy - xy) / ed); /* plot curve */
      if (x0 == x2 || y0 == y2) break; /* last pixel -> curve finished */
      x1 = x0;
      cur = dx - err;
      y1 = 2 * err + dy < 0;
      if (2 * err + dx > 0) { /* x step */
        if (err - dy < ed) setPixelAA(x0, y0 + sy, 255 * Math.abs(err - dy) / ed);
        x0 += sx;
        dx -= xy;
        err += dy += yy;
      }
      if (y1) { /* y step */
        if (cur < ed) setPixelAA(x1 + sx, y0, 255 * Math.abs(cur) / ed);
        y0 += sy;
        dy -= xy;
        err += dx += xx;
      }
    } while (dy < dx); /* gradient negates -> close curves */
  }
  lineAA(x0, y0, x2, y2, setPixelAA); /* plot remaining needle to end */
}

/**
 * Plot limited cubic Bezier segment
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {number} x3
 * @param  {number} y3
 * @param  {setPixel} setPixel
 */
function cubicBezierSegment(x0, y0, x1, y1, x2, y2, x3, y3, setPixel) {
  var f, fx, fy, leg = 1;
  var sx = x0 < x3 ? 1 : -1,
      sy = y0 < y3 ? 1 : -1; /* step direction */
  var xc = -Math.abs(x0 + x1 - x2 - x3),
      xa = xc - 4 * sx * (x1 - x2),
      xb = sx * (x0 - x1 - x2 + x3);
  var yc = -Math.abs(y0 + y1 - y2 - y3),
      ya = yc - 4 * sy * (y1 - y2),
      yb = sy * (y0 - y1 - y2 + y3);
  var ab, ac, bc, cb, xx, xy, yy, dx, dy, ex, pxy, EP = 0.01;
  /* check for curve restrains */
  /* slope P0-P1 == P2-P3    and  (P0-P3 == P1-P2      or   no slope change) */
  assert((x1 - x0) * (x2 - x3) < EP && ((x3 - x0) * (x1 - x2) < EP || xb * xb <
    xa * xc + EP), 'slope change');
  assert((y1 - y0) * (y2 - y3) < EP && ((y3 - y0) * (y1 - y2) < EP || yb * yb <
    ya * yc + EP), 'slope change');

  if (xa == 0 && ya == 0) { /* quadratic Bezier */
    sx = Math.floor((3 * x1 - x0 + 1) / 2);
    sy = Math.floor((3 * y1 - y0 + 1) / 2); /* new midpoint */
    return quadBezierSegment(x0, y0, sx, sy, x3, y3, setPixel);
  }
  x1 = (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0) + 1; /* line lengths */
  x2 = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3) + 1;
  do { /* loop over both ends */
    ab = xa * yb - xb * ya;
    ac = xa * yc - xc * ya;
    bc = xb * yc - xc * yb;
    ex = ab * (ab + ac - 3 * bc) + ac * ac; /* P0 part of self-intersection loop? */
    f = ex > 0 ? 1 : Math.sqrt(1 + 1024 / x1); /* calculate resolution */
    ab *= f;
    ac *= f;
    bc *= f;
    ex *= f * f; /* increase resolution */
    xy = 9 * (ab + ac + bc) / 8;
    cb = 8 * (xa - ya); /* init differences of 1st degree */
    dx = 27 * (8 * ab * (yb * yb - ya * yc) + ex * (ya + 2 * yb + yc)) / 64 -
      ya * ya * (xy - ya);
    dy = 27 * (8 * ab * (xb * xb - xa * xc) - ex * (xa + 2 * xb + xc)) / 64 -
      xa * xa * (xy + xa);
    /* init differences of 2nd degree */
    xx = 3 * (3 * ab * (3 * yb * yb - ya * ya - 2 * ya * yc) - ya * (3 * ac * (
      ya + yb) + ya * cb)) / 4;
    yy = 3 * (3 * ab * (3 * xb * xb - xa * xa - 2 * xa * xc) - xa * (3 * ac * (
      xa + xb) + xa * cb)) / 4;
    xy = xa * ya * (6 * ab + 6 * ac - 3 * bc + cb);
    ac = ya * ya;
    cb = xa * xa;
    xy = 3 * (xy + 9 * f * (cb * yb * yc - xb * xc * ac) - 18 * xb * yb * ab) /
      8;

    if (ex < 0) { /* negate values if inside self-intersection loop */
      dx = -dx;
      dy = -dy;
      xx = -xx;
      yy = -yy;
      xy = -xy;
      ac = -ac;
      cb = -cb;
    } /* init differences of 3rd degree */
    ab = 6 * ya * ac;
    ac = -6 * xa * ac;
    bc = 6 * ya * cb;
    cb = -6 * xa * cb;
    dx += xy;
    ex = dx + dy;
    dy += xy; /* error of 1st step */

    outer:for (pxy = xy, fx = fy = f; x0 != x3 && y0 != y3;) {
      setPixel(x0, y0); /* plot curve */
      do { /* move sub-steps of one pixel */
        if (dx > pxy || dy < pxy) {
          break outer;
        } /* confuMath.sing values */
        y1 = 2 * ex - dy; /* save value for test of y step */
        if (2 * ex >= dx) { /* x sub-step */
          fx--;
          ex += dx += xx;
          dy += xy += ac;
          yy += bc;
          xx += ab;
        }
        if (y1 <= 0) { /* y sub-step */
          fy--;
          ex += dy += yy;
          dx += xy += bc;
          xx += ac;
          yy += cb;
        }
      } while (fx > 0 && fy > 0); /* pixel complete? */
      if (2 * fx <= f) {
        x0 += sx;
        fx += f;
      } /* x step */
      if (2 * fy <= f) {
        y0 += sy;
        fy += f;
      } /* y step */
      if (pxy == xy && dx < 0 && dy > 0) pxy = EP; /* pixel ahead valid */
    }
    //exit:
    xx = x0;
    x0 = x3;
    x3 = xx;
    sx = -sx;
    xb = -xb; /* swap legs */

    yy = y0;
    y0 = y3;
    y3 = yy;
    sy = -sy;
    yb = -yb;
    x1 = x2;
  } while (leg--); /* try other end */
  line(x0, y0, x3, y3, setPixel); /* remaining part in case of cusp or crunode */
}

/**
 * Plot limited anti-aliased cubic Bezier segment
 * @param  {Number} x0
 * @param  {Number} y0
 * @param  {Number} x1
 * @param  {Number} y1
 * @param  {Number} x2
 * @param  {Number} y2
 * @param  {Number} x3
 * @param  {Number} y3
 * @param  {setPixelAA} setPixelAA
 */
function cubicBezierSegmentAA(x0, y0, x1, y1, x2, y2, x3, y3, setPixelAA) {
   let f, fx, fy, leg = 1;
   let sx = x0 < x3 ? 1 : -1, sy = y0 < y3 ? 1 : -1;        /* step direction */
   let xc = -Math.abs(x0 + x1 - x2 - x3),
       xa = xc - 4 * sx * (x1 - x2),
       xb = sx * (x0 - x1 - x2 + x3);
   let yc = -Math.abs(y0 + y1 - y2 - y3),
       ya = yc - 4 * sy * (y1 - y2),
       yb = sy * (y0 - y1 - y2 + y3);
   let ab, ac, bc, ba, xx, xy, yy, dx, dy, ex, px, py, ed, ip;
   const EP = 0.01;

                                                 /* check for curve restrains */
   /* slope P0-P1 == P2-P3     and  (P0-P3 == P1-P2      or  no slope change) */
   assert((x1 - x0) * (x2 - x3) < EP &&
    ((x3 - x0) * (x1 - x2) < EP || xb * xb < xa * xc + EP));
   assert((y1 - y0) * (y2 - y3) < EP &&
    ((y3 - y0) * (y1 - y2) < EP || yb * yb < ya * yc + EP));

   if (xa === 0 && ya === 0) {                            /* quadratic Bezier */
      sx = Math.floor((3 * x1 - x0 + 1) / 2);
      sy = Math.floor((3 * y1 - y0 + 1) / 2);                 /* new midpoint */
      return quadBezierSegmentAA(x0,y0, sx,sy, x3,y3, setPixelAA);
   }
   x1 = (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0) + 1;    /* line lengths */
   x2 = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3) + 1;
   do {                                                /* loop over both ends */
      ab = xa * yb-xb * ya; ac = xa * yc-xc * ya; bc = xb * yc-xc * yb;
      ip = 4 * ab * bc - ac * ac;           /* self intersection loop at all? */
                                        /* P0 part of self-intersection loop? */
      ex = ab * (ab + ac - 3 * bc) + ac * ac;
      f = ex > 0 ? 1 : Math.sqrt(1 + 1024 / x1);      /* calculate resolution */
      ab *= f; ac *= f; bc  *= f; ex  *= f * f;        /* increase resolution */
      xy = 9 * (ab + ac + bc) / 8;
      ba = 8 * (xa - ya);                   /* init differences of 1st degree */
      dx = 27 * (8 * ab * (yb * yb-ya * yc) + ex * (ya + 2 * yb + yc)) / 64 - ya * ya * (xy - ya);
      dy = 27 * (8 * ab * (xb * xb-xa * xc) - ex * (xa + 2 * xb + xc)) / 64 - xa * xa * (xy + xa);
                                            /* init differences of 2nd degree */
      xx = 3 * (3 * ab * (3 * yb * yb - ya * ya - 2 * ya * yc) - ya * (3 * ac * (ya + yb) + ya * ba)) / 4;
      yy = 3 * (3 * ab * (3 * xb * xb - xa * xa - 2 * xa * xc) - xa * (3 * ac * (xa + xb) + xa * ba)) / 4;
      xy = xa * ya * (6 * ab + 6 * ac - 3 * bc + ba);
      ac = ya * ya;
      ba = xa * xa;
      xy = 3 * (xy + 9 * f * (ba * yb * yc-xb * xc * ac) - 18 * xb * yb * ab) / 8;

      if (ex < 0) {         /* negate values if inside self-intersection loop */
         dx = -dx; dy = -dy; xx = -xx; yy = -yy; xy = -xy; ac = -ac; ba = -ba;
      }                                     /* init differences of 3rd degree */
      ab = 6 * ya * ac; ac = -6 * xa * ac; bc = 6 * ya * ba; ba = -6 * xa * ba;
      dx += xy; ex = dx+dy; dy += xy;                    /* error of 1st step */

      let exit = false;
      outer: for (fx = fy = f; x0 !== x3 && y0 !== y3; ) {
         y1 = Math.min(Math.abs(xy-dx), Math.abs(dy-xy));
         /* approximate error distance */
         ed = Math.max(Math.abs(xy-dx), Math.abs(dy-xy));
         ed = f * (ed+2 * ed * y1 * y1 / (4 * ed * ed + y1 * y1));
         y1 = 255 * Math.abs(ex - (f - fx + 1) * dx - (f - fy + 1) * dy + f * xy) / ed;
         if (y1 < 256) setPixelAA(x0, y0, y1);                  /* plot curve */
         /* pixel intensity x move */
         px = Math.abs(ex - (f - fx + 1) * dx + (fy - 1) * dy);
         /* pixel intensity y move */
         py = Math.abs(ex + (fx - 1) * dx - (f - fy + 1) * dy);
         y2 = y0;
         do {                                  /* move sub-steps of one pixel */
            if (ip >= -EP)               /* intersection possible? -> check.. */
              if (dx+xx > xy || dy+yy < xy) {             /* two x or y steps */
                exit = true; break outer;
              }
            y1 = 2 * ex+dx;                  /* save value for test of y step */
            if (2 * ex+dy > 0) {                                /* x sub-step */
               fx--; ex += dx += xx; dy += xy += ac; yy += bc; xx += ab;
            } else if (y1 > 0) {                          /* tiny nearly cusp */
              exit = true; break outer;
            }
            if (y1 <= 0) {                                      /* y sub-step */
               fy--; ex += dy += yy; dx += xy += bc; xx += ac; yy += ba;
            }
         } while (fx > 0 && fy > 0);                       /* pixel complete? */
         if (2 * fy <= f) {                         /* x+ anti-aliasing pixel */
            if (py < ed) setPixelAA(x0 + sx, y0, 255 * py / ed);/* plot curve */
            y0 += sy; fy += f;                                      /* y step */
         }
         if (2 * fx <= f) {                         /* y+ anti-aliasing pixel */
            if (px < ed) setPixelAA(x0, y2 + sy, 255 * px / ed);/* plot curve */
            x0 += sx; fx += f;                                      /* x step */
         }
      }

      if (exit) {
        if (2 * ex < dy && 2 * fy <= f+2) {   /* round x+ approximation pixel */
           if (py < ed) setPixelAA(x0 + sx, y0, 255 * py / ed); /* plot curve */
           y0 += sy;
        }
        if (2 * ex > dx && 2 * fx <= f+2) {   /* round y+ approximation pixel */
           if (px < ed) setPixelAA(x0, y2 + sy, 255 * px / ed); /* plot curve */
           x0 += sx;
        }
        xx = x0; x0 = x3; x3 = xx; sx = -sx; xb = -xb;           /* swap legs */
        yy = y0; y0 = y3; y3 = yy; sy = -sy; yb = -yb; x1 = x2;
      }
      break;                                          /* finish curve by line */
   } while (leg--);                                          /* try other end */
   /* remaining part in case of cusp or crunode */
   lineAA(x0,y0, x3,y3, setPixelAA);
}

function cubicBezierGeneral(x0, y0, x1, y1, x2, y2, x3, y3, segment, setPixel) {
  var n = 0, i = 0;
  var xc = x0 + x1 - x2 - x3,
      xa = xc - 4 * (x1 - x2);
  var xb = x0 - x1 - x2 + x3,
      xd = xb + 4 * (x1 + x2);
  var yc = y0 + y1 - y2 - y3,
      ya = yc - 4 * (y1 - y2);
  var yb = y0 - y1 - y2 + y3,
      yd = yb + 4 * (y1 + y2);
  var fx0 = x0,
      fx1, fx2, fx3, fy0 = y0,
      fy1, fy2, fy3;
  var t1 = xb * xb - xa * xc,
      t2, t = [0, 0, 0, 0, 0];
  /* sub-divide curve at gradient sign changes */
  if (xa == 0) { /* horizontal */
    if (Math.abs(xc) < 2 * Math.abs(xb)) t[n++] = xc / (2 * xb); /* one change */
  } else if (t1 > 0.0) { /* two changes */
    t2 = Math.sqrt(t1);
    t1 = (xb - t2) / xa;
    if (Math.abs(t1) < 1) t[n++] = t1;
    t1 = (xb + t2) / xa;
    if (Math.abs(t1) < 1) t[n++] = t1;
  }
  t1 = yb * yb - ya * yc;
  if (ya == 0) { /* vertical */
    if (Math.abs(yc) < 2 * Math.abs(yb)) t[n++] = yc / (2 * yb); /* one change */
  } else if (t1 > 0.0) { /* two changes */
    t2 = Math.sqrt(t1);
    t1 = (yb - t2) / ya;
    if (Math.abs(t1) < 1) t[n++] = t1;
    t1 = (yb + t2) / ya;
    if (Math.abs(t1) < 1) t[n++] = t1;
  }
  for (i = 1; i < n; i++) /* bubble sort of 4 points */
    if ((t1 = t[i - 1]) > t[i]) {
      t[i - 1] = t[i];
      t[i] = t1;
      i = 0;
    }

  t1 = -1;
  t[n] = 1; /* begin / end point */
  for (i = 0; i <= n; i++) { /* plot each segment separately */
    t2 = t[i]; /* sub-divide at t[i-1], t[i] */
    fx1 = (t1 * (t1 * xb - 2 * xc) - t2 * (t1 * (t1 * xa - 2 * xb) + xc) + xd) / 8 - fx0;
    fy1 = (t1 * (t1 * yb - 2 * yc) - t2 * (t1 * (t1 * ya - 2 * yb) + yc) + yd) / 8 - fy0;
    fx2 = (t2 * (t2 * xb - 2 * xc) - t1 * (t2 * (t2 * xa - 2 * xb) + xc) + xd) / 8 - fx0;
    fy2 = (t2 * (t2 * yb - 2 * yc) - t1 * (t2 * (t2 * ya - 2 * yb) + yc) + yd) / 8 - fy0;
    fx0 -= fx3 = (t2 * (t2 * (3 * xb - t2 * xa) - 3 * xc) + xd) / 8;
    fy0 -= fy3 = (t2 * (t2 * (3 * yb - t2 * ya) - 3 * yc) + yd) / 8;
    x3 = Math.floor(fx3 + 0.5);
    y3 = Math.floor(fy3 + 0.5); /* scale bounds to int */
    if (fx0 != 0.0) {
      fx1 *= fx0 = (x0 - x3) / fx0;
      fx2 *= fx0;
    }
    if (fy0 != 0.0) {
      fy1 *= fy0 = (y0 - y3) / fy0;
      fy2 *= fy0;
    }
    if (x0 != x3 || y0 != y3) /* segment t1 - t2 */
      segment(x0, y0, x0 + fx1, y0 + fy1, x0 + fx2, y0 + fy2, x3, y3, setPixel);
    x0 = x3;
    y0 = y3;
    fx0 = fx3;
    fy0 = fy3;
    t1 = t2;
  }
}

/**
 * plot any cubic Bezier curve
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {number} x3
 * @param  {number} y3
 * @param  {setPixel} setPixel
 */
function cubicBezier(x0, y0, x1, y1, x2, y2, x3, y3, setPixel) {
  cubicBezierGeneral(x0, y0, x1, y1, x2, y2, x3, y3, cubicBezierSegment, setPixel);
}


/**
 * plot any cubic Bezier curve
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {number} x3
 * @param  {number} y3
 * @param  {setPixelAlpha} setPixelAA
 */
function cubicBezierAA(x0, y0, x1, y1, x2, y2, x3, y3, setPixelAA) {
  cubicBezierGeneral(x0, y0, x1, y1, x2, y2, x3, y3, cubicBezierSegmentAA, setPixelAA);
}

export { circle, circleAA, cubicBezier, cubicBezierAA, cubicBezierSegment, cubicBezierSegmentAA, ellipse, ellipseRect, line, lineAA, lineWidth, quadBezier, quadBezierAA, quadBezierSegment, quadBezierSegmentAA, quadRationalBezier, quadRationalBezierSegment, quadRationalBezierSegmentAA, rotatedEllipse, rotatedEllipseRect };
