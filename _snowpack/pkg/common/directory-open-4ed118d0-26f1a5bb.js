function e(r) {
  function t(e) {
    if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
    var r = e.done;
    return Promise.resolve(e.value).then(function (e) {
      return {
        value: e,
        done: r
      };
    });
  }

  return e = function (e) {
    this.s = e, this.n = e.next;
  }, e.prototype = {
    s: null,
    n: null,
    next: function () {
      return t(this.n.apply(this.s, arguments));
    },
    return: function (e) {
      var r = this.s.return;
      return void 0 === r ? Promise.resolve({
        value: e,
        done: !0
      }) : t(r.apply(this.s, arguments));
    },
    throw: function (e) {
      var r = this.s.return;
      return void 0 === r ? Promise.reject(e) : t(r.apply(this.s, arguments));
    }
  }, new e(r);
}

const r = async (t, n, i = t.name, a) => {
  const o = [],
        l = [];
  var s,
      u = !1,
      c = !1;

  try {
    for (var y, f = function (r) {
      var t,
          n,
          i,
          a = 2;

      for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, i = Symbol.iterator); a--;) {
        if (n && null != (t = r[n])) return t.call(r);
        if (i && null != (t = r[i])) return new e(t.call(r));
        n = "@@asyncIterator", i = "@@iterator";
      }

      throw new TypeError("Object is not async iterable");
    }(t.values()); u = !(y = await f.next()).done; u = !1) {
      const e = y.value,
            s = `${i}/${e.name}`;
      "file" === e.kind ? l.push(e.getFile().then(r => (r.directoryHandle = t, r.handle = e, Object.defineProperty(r, "webkitRelativePath", {
        configurable: !0,
        enumerable: !0,
        get: () => s
      })))) : "directory" !== e.kind || !n || a && a(e) || o.push(r(e, n, s, a));
    }
  } catch (e) {
    c = !0, s = e;
  } finally {
    try {
      u && null != f.return && (await f.return());
    } finally {
      if (c) throw s;
    }
  }

  return [...(await Promise.all(o)).flat(), ...(await Promise.all(l))];
};

var t = async (e = {}) => {
  e.recursive = e.recursive || !1;
  const t = await window.showDirectoryPicker({
    id: e.id,
    startIn: e.startIn
  });
  return r(t, e.recursive, void 0, e.skipDirectory);
};

export default t;
