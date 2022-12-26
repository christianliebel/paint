var qFloodFill = function (e) {
  var t = {};
  function o(i) {
    if (t[i]) {
      return t[i].exports;
    }
    var r = t[i] = {
      i: i,
      l: false,
      exports: {}
    };
    e[i].call(r.exports, r, r.exports, o);
    r.l = true;
    return r.exports;
  }
  o.m = e;
  o.c = t;
  o.d = function (e, t, i) {
    if (!o.o(e, t)) {
      Object.defineProperty(e, t, {
        enumerable: true,
        get: i
      });
    }
  };
  o.r = function (e) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  o.t = function (e, t) {
    if (t & 1) e = o(e);
    if (t & 8) return e;
    if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
    var i = Object.create(null);
    o.r(i);
    Object.defineProperty(i, "default", {
      enumerable: true,
      value: e
    });
    if (t & 2 && typeof e != "string") for (var r in e) o.d(i, r, function (t) {
      return e[t];
    }.bind(null, r));
    return i;
  };
  o.n = function (e) {
    var t = e && e.__esModule ? function t() {
      return e["default"];
    } : function t() {
      return e;
    };
    o.d(t, "a", t);
    return t;
  };
  o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  o.p = "";
  return o(o.s = 0);
}([function (e, t, o) {

  o.r(t);
  o.d(t, "isSameColor", function () {
    return l;
  });
  o.d(t, "setColorAtPixel", function () {
    return r;
  });
  o.d(t, "getColorAtPixel", function () {
    return i;
  });
  o.d(t, "colorToRGBA", function () {
    return a;
  });
  o.d(t, "hex2RGBA", function () {
    return n;
  });
  function i(e, t, o) {
    var i = e.width,
      r = e.data;
    var l = 4 * (o * i + t);
    if (r[l + 3] === undefined) {
      throw new Error("Invalid pixel coordinates: x=" + t + "; y=" + o);
    }
    return {
      r: r[l],
      g: r[l + 1],
      b: r[l + 2],
      a: r[l + 3]
    };
  }
  function r(e, t, o, i) {
    var r = e.width,
      l = e.data;
    var n = 4 * (i * r + o);
    if (l[n + 3] === undefined) {
      throw new Error("Invalid pixel coordinates. Cannot set color at: x=" + o + "; y=" + i);
    }
    l[n + 0] = t.r & 255;
    l[n + 1] = t.g & 255;
    l[n + 2] = t.b & 255;
    l[n + 3] = t.a & 255;
  }
  function l(e, t, o) {
    if (o === void 0) {
      o = 0;
    }
    return !(Math.abs(e.r - t.r) > o || Math.abs(e.g - t.g) > o || Math.abs(e.b - t.b) > o || Math.abs(e.a - t.a) > o);
  }
  function n(e, t) {
    if (t === void 0) {
      t = 255;
    }
    var o = e;
    if (e.indexOf("#") === 0) {
      o = e.slice(1);
    }
    if (o.length === 3) {
      o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2];
    }
    if (o.length !== 6) {
      throw new Error("Invalid HEX color " + o + ".");
    }
    var i = parseInt(o.slice(0, 2), 16);
    var r = parseInt(o.slice(2, 4), 16);
    var l = parseInt(o.slice(4, 6), 16);
    return {
      r: i,
      g: r,
      b: l,
      a: t
    };
  }
  function a(e) {
    if (e.indexOf("rgba") !== -1) {
      var t = /rgba\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9\.]{1,})/g.exec(e),
        o = t[0],
        i = t[1],
        r = t[2],
        l = t[3],
        a = t[4];
      return {
        r: parseInt(i),
        g: parseInt(r),
        b: parseInt(l),
        a: Math.ceil(parseFloat(a) * 255)
      };
    } else if (e.indexOf("rgb") !== -1) {
      var s = /rgb\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3})/g.exec(e),
        o = s[0],
        i = s[1],
        r = s[2],
        l = s[3];
      return {
        r: parseInt(i),
        g: parseInt(r),
        b: parseInt(l),
        a: 255
      };
    } else if (e.indexOf("#") !== -1) {
      return n(e);
    } else {
      throw new Error("Unsupported color format. Please use CSS rgba, rgb, or HEX!");
    }
  }
  var s = function () {
    function e(e) {
      this.collectModifiedPixels = false;
      this.modifiedPixelsCount = 0;
      this.modifiedPixels = new Set();
      this._tolerance = 0;
      this._queue = [];
      this.imageData = e;
      this.isSameColor = l;
      this.setColorAtPixel = r;
      this.getColorAtPixel = i;
      this.colorToRGBA = a;
    }
    e.prototype.fill = function (e, t, o, i) {
      this._newColor = this.colorToRGBA(e);
      this._replacedColor = this.getColorAtPixel(this.imageData, t, o);
      this._tolerance = i;
      if (this.isSameColor(this._replacedColor, this._newColor, this._tolerance)) {
        return;
      }
      this.addToQueue([t, t, o, -1]);
      this.fillQueue();
    };
    e.prototype.addToQueue = function (e) {
      this._queue.push(e);
    };
    e.prototype.popFromQueue = function () {
      if (!this._queue.length) {
        return null;
      }
      return this._queue.pop();
    };
    e.prototype.isValidTarget = function (e) {
      if (e === null) {
        return;
      }
      var t = this.getColorAtPixel(this.imageData, e.x, e.y);
      return this.isSameColor(this._replacedColor, t, this._tolerance);
    };
    e.prototype.fillLineAt = function (e, t) {
      if (!this.isValidTarget({
        x: e,
        y: t
      })) {
        return [-1, -1];
      }
      this.setPixelColor(this._newColor, {
        x: e,
        y: t
      });
      var o = e;
      var i = e;
      var r = this.getPixelNeighbour("left", o, t);
      while (r && this.isValidTarget(r)) {
        this.setPixelColor(this._newColor, r);
        o = r.x;
        r = this.getPixelNeighbour("left", o, t);
      }
      r = this.getPixelNeighbour("right", i, t);
      while (r && this.isValidTarget(r)) {
        this.setPixelColor(this._newColor, r);
        i = r.x;
        r = this.getPixelNeighbour("right", i, t);
      }
      return [o, i];
    };
    e.prototype.fillQueue = function () {
      var e = this.popFromQueue();
      while (e) {
        var t = e[0],
          o = e[1],
          i = e[2],
          r = e[3];
        var l = t;
        while (l !== -1 && l <= o) {
          var n = this.fillLineAt(l, i),
            a = n[0],
            s = n[1];
          if (a !== -1) {
            if (a >= t && s <= o && r !== -1) {
              if (r < i && i + 1 < this.imageData.height) {
                this.addToQueue([a, s, i + 1, i]);
              }
              if (r > i && i > 0) {
                this.addToQueue([a, s, i - 1, i]);
              }
            } else {
              if (i > 0) {
                this.addToQueue([a, s, i - 1, i]);
              }
              if (i + 1 < this.imageData.height) {
                this.addToQueue([a, s, i + 1, i]);
              }
            }
          }
          if (s === -1 && l <= o) {
            l += 1;
          } else {
            l = s + 1;
          }
        }
        e = this.popFromQueue();
      }
    };
    e.prototype.setPixelColor = function (e, t) {
      this.setColorAtPixel(this.imageData, e, t.x, t.y);
      this.modifiedPixelsCount++;
      this.collectModifiedPixels && this.modifiedPixels.add(t.x + "|" + t.y);
    };
    e.prototype.getPixelNeighbour = function (e, t, o) {
      t = t | 0;
      o = o | 0;
      var i;
      switch (e) {
        case "right":
          i = {
            x: t + 1 | 0,
            y: o
          };
          break;
        case "left":
          i = {
            x: t - 1 | 0,
            y: o
          };
          break;
      }
      if (i.x >= 0 && i.x < this.imageData.width) {
        return i;
      }
      return null;
    };
    return e;
  }();
  var u = s;
  var d = t["default"] = u;
}]);
qFloodFill === undefined && console.error("esm-webpack-plugin: nothing exported!");
var __pika_web_default_export_for_treeshaking__ = qFloodFill["default"];
const _qFloodFill$isSameColor = qFloodFill["isSameColor"];
const _qFloodFill$setColorAtPixel = qFloodFill["setColorAtPixel"];
const _qFloodFill$getColorAtPixel = qFloodFill["getColorAtPixel"];
const _qFloodFill$colorToRGBA = qFloodFill["colorToRGBA"];
const _qFloodFill$hex2RGBA = qFloodFill["hex2RGBA"];

export default __pika_web_default_export_for_treeshaking__;
