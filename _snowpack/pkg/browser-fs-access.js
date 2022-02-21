var T = Object.defineProperty;

var f = (e, t) => () => (e && (t = e(e = 0)), t);

var d = (e, t) => {
  for (var i in t) T(e, i, {
    get: t[i],
    enumerable: !0
  });
};

var y = {};
d(y, {
  default: () => E
});
var E,
    p = f(() => {
  E = async (e = [{}]) => (Array.isArray(e) || (e = [e]), new Promise((t, i) => {
    let r = document.createElement("input");
    r.type = "file";
    let l = [...e.map(s => s.mimeTypes || []), ...e.map(s => s.extensions || [])].join();
    r.multiple = e[0].multiple || !1, r.accept = l || "";

    let n = () => c(i),
        a = s => {
      typeof c == "function" && c(), t(s);
    },
        c = e[0].legacySetup && e[0].legacySetup(a, n, r);

    r.addEventListener("change", () => {
      a(r.multiple ? Array.from(r.files) : r.files[0]);
    }), r.click();
  }));
});
var w = {};
d(w, {
  default: () => I
});
var N,
    I,
    h = f(() => {
  N = async e => {
    let t = await e.getFile();
    return t.handle = e, t;
  }, I = async (e = [{}]) => {
    Array.isArray(e) || (e = [e]);
    let t = [];
    e.forEach((l, n) => {
      t[n] = {
        description: l.description || "",
        accept: {}
      }, l.mimeTypes ? l.mimeTypes.map(a => {
        t[n].accept[a] = l.extensions || [];
      }) : t[n].accept["*/*"] = l.extensions || [];
    });
    let i = await window.showOpenFilePicker({
      id: e[0].id,
      startIn: e[0].startIn,
      types: t,
      multiple: e[0].multiple || !1,
      excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1
    }),
        r = await Promise.all(i.map(N));
    return e[0].multiple ? r : r[0];
  };
});
var o = {};
d(o, {
  default: () => M
});
var M,
    A = f(() => {
  M = async (e = [{}]) => (Array.isArray(e) || (e = [e]), e[0].recursive = e[0].recursive || !1, new Promise((t, i) => {
    let r = document.createElement("input");
    r.type = "file", r.webkitdirectory = !0;

    let l = () => a(i),
        n = c => {
      typeof a == "function" && a(), t(c);
    },
        a = e[0].legacySetup && e[0].legacySetup(n, l, r);

    r.addEventListener("change", () => {
      let c = Array.from(r.files);
      e[0].recursive ? e[0].recursive && e[0].skipDirectory && (c = c.filter(s => s.webkitRelativePath.split("/").every(S => !e[0].skipDirectory({
        name: S,
        kind: "directory"
      })))) : c = c.filter(s => s.webkitRelativePath.split("/").length === 2), n(c);
    }), r.click();
  }));
});
var x = {};
d(x, {
  default: () => B
});
var v,
    B,
    g = f(() => {
  v = async (e, t, i = e.name, r) => {
    let l = [],
        n = [];

    for await (let a of e.values()) {
      let c = `${i}/${a.name}`;
      a.kind === "file" ? n.push(a.getFile().then(s => (s.directoryHandle = e, s.handle = a, Object.defineProperty(s, "webkitRelativePath", {
        configurable: !0,
        enumerable: !0,
        get: () => c
      })))) : a.kind === "directory" && t && (!r || !r(a)) && l.push(v(a, t, c, r));
    }

    return [...(await Promise.all(l)).flat(), ...(await Promise.all(n))];
  }, B = async (e = {}) => {
    e.recursive = e.recursive || !1;
    let t = await window.showDirectoryPicker({
      id: e.id,
      startIn: e.startIn
    });
    return v(t, e.recursive, void 0, e.skipDirectory);
  };
});
var k = {};
d(k, {
  default: () => W
});

async function $(e, t) {
  let i = e.getReader(),
      r = new ReadableStream({
    start(n) {
      return a();

      async function a() {
        return i.read().then(({
          done: c,
          value: s
        }) => {
          if (c) {
            n.close();
            return;
          }

          return n.enqueue(s), a();
        });
      }
    }

  }),
      l = new Response(r);
  return i.releaseLock(), new Blob([await l.blob()], {
    type: t
  });
}

var W,
    P = f(() => {
  W = async (e, t = {}) => {
    Array.isArray(t) && (t = t[0]);
    let i = document.createElement("a"),
        r = e;
    "body" in e && (r = await $(e.body, e.headers.get("content-type"))), i.download = t.fileName || "Untitled", i.href = URL.createObjectURL(r);

    let l = () => a(reject),
        n = () => {
      typeof a == "function" && a();
    },
        a = t.legacySetup && t.legacySetup(n, l, i);

    return i.addEventListener("click", () => {
      setTimeout(() => URL.revokeObjectURL(i.href), 30 * 1e3), n();
    }), i.click(), null;
  };
});
var j = {};
d(j, {
  default: () => q
});
var q,
    L = f(() => {
  q = async (e, t = [{}], i = null, r = !1) => {
    Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
    let l = [];
    if (t.forEach((c, s) => {
      l[s] = {
        description: c.description || "",
        accept: {}
      }, c.mimeTypes ? (s === 0 && (e.type ? c.mimeTypes.push(e.type) : e.headers && e.headers.get("content-type") && c.mimeTypes.push(e.headers.get("content-type"))), c.mimeTypes.map(m => {
        l[s].accept[m] = c.extensions || [];
      })) : e.type && (l[s].accept[e.type] = c.extensions || []);
    }), i) try {
      await i.getFile();
    } catch (c) {
      if (i = null, r) throw c;
    }
    let n = i || (await window.showSaveFilePicker({
      suggestedName: t[0].fileName,
      id: t[0].id,
      startIn: t[0].startIn,
      types: l,
      excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
    })),
        a = await n.createWritable();
    return "stream" in e ? (await e.stream().pipeTo(a), n) : "body" in e ? (await e.body.pipeTo(a), n) : (await a.write(blob), await a.close(), n);
  };
});

var F = (() => {
  if (typeof self > "u") return !1;
  if ("top" in self && self !== top) try {
    top.location + "";
  } catch {
    return !1;
  } else if ("showOpenFilePicker" in self) return "showOpenFilePicker";
  return !1;
})(),
    u = F;

var U = u ? Promise.resolve().then(() => (h(), w)) : Promise.resolve().then(() => (p(), y));

async function _(...e) {
  return (await U).default(...e);
}

var D = u ? Promise.resolve().then(() => (g(), x)) : Promise.resolve().then(() => (A(), o));

var z = u ? Promise.resolve().then(() => (L(), j)) : Promise.resolve().then(() => (P(), k));

async function C(...e) {
  return (await z).default(...e);
}
 // @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.

export { _ as fileOpen, C as fileSave };
