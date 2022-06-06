const e = (() => {
  if ("undefined" == typeof self) return !1;
  if ("top" in self && self !== top) try {
    top;
  } catch (e) {
    return !1;
  } else if ("showOpenFilePicker" in self) return "showOpenFilePicker";
  return !1;
})(),
      t = e ? Promise.resolve().then(function () {
  return l;
}) : Promise.resolve().then(function () {
  return h;
});

async function n(...e) {
  return (await t).default(...e);
}

const r = e ? Promise.resolve().then(function () {
  return f;
}) : Promise.resolve().then(function () {
  return b;
});

const a = e ? Promise.resolve().then(function () {
  return m;
}) : Promise.resolve().then(function () {
  return _;
});

async function o(...e) {
  return (await a).default(...e);
}

const s = async e => {
  const t = await e.getFile();
  return t.handle = e, t;
};

var c = async (e = [{}]) => {
  Array.isArray(e) || (e = [e]);
  const t = [];
  e.forEach((e, n) => {
    t[n] = {
      description: e.description || "",
      accept: {}
    }, e.mimeTypes ? e.mimeTypes.map(r => {
      t[n].accept[r] = e.extensions || [];
    }) : t[n].accept["*/*"] = e.extensions || [];
  });
  const n = await window.showOpenFilePicker({
    id: e[0].id,
    startIn: e[0].startIn,
    types: t,
    multiple: e[0].multiple || !1,
    excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1
  }),
        r = await Promise.all(n.map(s));
  return e[0].multiple ? r : r[0];
},
    l = {
  __proto__: null,
  default: c
};

function u(e) {
  function t(e) {
    if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
    var t = e.done;
    return Promise.resolve(e.value).then(function (e) {
      return {
        value: e,
        done: t
      };
    });
  }

  return u = function (e) {
    this.s = e, this.n = e.next;
  }, u.prototype = {
    s: null,
    n: null,
    next: function () {
      return t(this.n.apply(this.s, arguments));
    },
    return: function (e) {
      var n = this.s.return;
      return void 0 === n ? Promise.resolve({
        value: e,
        done: !0
      }) : t(n.apply(this.s, arguments));
    },
    throw: function (e) {
      var n = this.s.return;
      return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments));
    }
  }, new u(e);
}

const p = async (e, t, n = e.name, r) => {
  const i = [],
        a = [];
  var o,
      s = !1,
      c = !1;

  try {
    for (var l, y = function (e) {
      var t,
          n,
          r,
          i = 2;

      for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); i--;) {
        if (n && null != (t = e[n])) return t.call(e);
        if (r && null != (t = e[r])) return new u(t.call(e));
        n = "@@asyncIterator", r = "@@iterator";
      }

      throw new TypeError("Object is not async iterable");
    }(e.values()); s = !(l = await y.next()).done; s = !1) {
      const o = l.value,
            s = `${n}/${o.name}`;
      "file" === o.kind ? a.push(o.getFile().then(t => (t.directoryHandle = e, t.handle = o, Object.defineProperty(t, "webkitRelativePath", {
        configurable: !0,
        enumerable: !0,
        get: () => s
      })))) : "directory" !== o.kind || !t || r && r(o) || i.push(p(o, t, s, r));
    }
  } catch (e) {
    c = !0, o = e;
  } finally {
    try {
      s && null != y.return && (await y.return());
    } finally {
      if (c) throw o;
    }
  }

  return [...(await Promise.all(i)).flat(), ...(await Promise.all(a))];
};

var y = async (e = {}) => {
  e.recursive = e.recursive || !1;
  const t = await window.showDirectoryPicker({
    id: e.id,
    startIn: e.startIn
  });
  return p(t, e.recursive, void 0, e.skipDirectory);
},
    f = {
  __proto__: null,
  default: y
},
    d = async (e, t = [{}], n = null, r = !1, i = null) => {
  Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
  const a = [];
  let o = null;
  if (e instanceof Blob && e.type ? o = e.type : e.headers && e.headers.get("content-type") && (o = e.headers.get("content-type")), t.forEach((e, t) => {
    a[t] = {
      description: e.description || "",
      accept: {}
    }, e.mimeTypes ? (0 === t && o && e.mimeTypes.push(o), e.mimeTypes.map(n => {
      a[t].accept[n] = e.extensions || [];
    })) : o ? a[t].accept[o] = e.extensions || [] : a[t].accept["*/*"] = e.extensions || [];
  }), n) try {
    await n.getFile();
  } catch (e) {
    if (n = null, r) throw e;
  }
  const s = n || (await window.showSaveFilePicker({
    suggestedName: t[0].fileName,
    id: t[0].id,
    startIn: t[0].startIn,
    types: a,
    excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
  }));
  !n && i && i();
  const c = await s.createWritable();

  if ("stream" in e) {
    const t = e.stream();
    return await t.pipeTo(c), s;
  }

  return "body" in e ? (await e.body.pipeTo(c), s) : (await c.write(await e), await c.close(), s);
},
    m = {
  __proto__: null,
  default: d
},
    w = async (e = [{}]) => (Array.isArray(e) || (e = [e]), new Promise((t, n) => {
  const r = document.createElement("input");
  r.type = "file";
  const i = [...e.map(e => e.mimeTypes || []), ...e.map(e => e.extensions || [])].join();
  r.multiple = e[0].multiple || !1, r.accept = i || "";

  const a = e => {
    "function" == typeof o && o(), t(e);
  },
        o = e[0].legacySetup && e[0].legacySetup(a, () => o(n), r);

  r.addEventListener("change", () => {
    a(r.multiple ? Array.from(r.files) : r.files[0]);
  }), r.click();
})),
    h = {
  __proto__: null,
  default: w
},
    v = async (e = [{}]) => (Array.isArray(e) || (e = [e]), e[0].recursive = e[0].recursive || !1, new Promise((t, n) => {
  const r = document.createElement("input");
  r.type = "file", r.webkitdirectory = !0;

  const i = e => {
    "function" == typeof a && a(), t(e);
  },
        a = e[0].legacySetup && e[0].legacySetup(i, () => a(n), r);

  r.addEventListener("change", () => {
    let t = Array.from(r.files);
    e[0].recursive ? e[0].recursive && e[0].skipDirectory && (t = t.filter(t => t.webkitRelativePath.split("/").every(t => !e[0].skipDirectory({
      name: t,
      kind: "directory"
    })))) : t = t.filter(e => 2 === e.webkitRelativePath.split("/").length), i(t);
  }), r.click();
})),
    b = {
  __proto__: null,
  default: v
},
    P = async (e, t = {}) => {
  Array.isArray(t) && (t = t[0]);
  const n = document.createElement("a");
  let r = e;
  "body" in e && (r = await async function (e, t) {
    const n = e.getReader(),
          r = new ReadableStream({
      start: e => async function t() {
        return n.read().then(({
          done: n,
          value: r
        }) => {
          if (!n) return e.enqueue(r), t();
          e.close();
        });
      }()
    }),
          i = new Response(r),
          a = await i.blob();
    return n.releaseLock(), new Blob([a], {
      type: t
    });
  }(e.body, e.headers.get("content-type"))), n.download = t.fileName || "Untitled", n.href = URL.createObjectURL(await r);

  const i = () => {
    "function" == typeof a && a();
  },
        a = t.legacySetup && t.legacySetup(i, () => a(), n);

  return n.addEventListener("click", () => {
    setTimeout(() => URL.revokeObjectURL(n.href), 3e4), i();
  }), n.click(), null;
},
    _ = {
  __proto__: null,
  default: P
};

export { n as fileOpen, o as fileSave };
