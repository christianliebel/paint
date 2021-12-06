var y = Object.defineProperty;

var F = e => y(e, "__esModule", {
  value: !0
});

var u = (e, t) => () => (e && (t = e(e = 0)), t);

var m = (e, t) => {
  F(e);

  for (var i in t) y(e, i, {
    get: t[i],
    enumerable: !0
  });
};

var p = {};
m(p, {
  default: () => N
});
var N,
    o = u(() => {
  N = async (e = [{}]) => (Array.isArray(e) || (e = [e]), new Promise((t, i) => {
    let r = document.createElement("input");
    r.type = "file";
    let n = [...e.map(s => s.mimeTypes || []).join(), e.map(s => s.extensions || []).join()].join();
    r.multiple = e[0].multiple || !1, r.accept = n || "";

    let l = () => c(i),
        a = s => {
      typeof c == "function" && c(), t(s);
    },
        c = e[0].legacySetup && e[0].legacySetup(a, l, r);

    r.addEventListener("change", () => {
      a(r.multiple ? Array.from(r.files) : r.files[0]);
    }), r.click();
  }));
});
var w = {};
m(w, {
  default: () => U
});
var I,
    U,
    h = u(() => {
  I = async e => {
    let t = await e.getFile();
    return t.handle = e, t;
  }, U = async (e = [{}]) => {
    Array.isArray(e) || (e = [e]);
    let t = [];
    e.forEach((n, l) => {
      t[l] = {
        description: n.description || "",
        accept: {}
      }, n.mimeTypes ? n.mimeTypes.map(a => {
        t[l].accept[a] = n.extensions || [];
      }) : t[l].accept["*/*"] = n.extensions || [];
    });
    let i = await window.showOpenFilePicker({
      id: e[0].id,
      startIn: e[0].startIn,
      types: t,
      multiple: e[0].multiple || !1,
      excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1
    }),
        r = await Promise.all(i.map(I));
    return e[0].multiple ? r : r[0];
  };
});
var j = {};
m(j, {
  default: () => B
});
var B,
    v = u(() => {
  B = async (e = [{}]) => (Array.isArray(e) || (e = [e]), e[0].recursive = e[0].recursive || !1, new Promise((t, i) => {
    let r = document.createElement("input");
    r.type = "file", r.webkitdirectory = !0;

    let n = () => a(i),
        l = c => {
      typeof a == "function" && a(), t(c);
    },
        a = e[0].legacySetup && e[0].legacySetup(l, n, r);

    r.addEventListener("change", () => {
      let c = Array.from(r.files);
      e[0].recursive ? e[0].recursive && e[0].skipDirectory && (c = c.filter(s => s.webkitRelativePath.split("/").every(T => !e[0].skipDirectory({
        name: T,
        kind: "directory"
      })))) : c = c.filter(s => s.webkitRelativePath.split("/").length === 2), l(c);
    }), r.click();
  }));
});
var g = {};
m(g, {
  default: () => D
});
var A,
    D,
    x = u(() => {
  A = async (e, t, i = e.name, r) => {
    let n = [],
        l = [];

    for await (let a of e.values()) {
      let c = `${i}/${a.name}`;
      a.kind === "file" ? l.push(a.getFile().then(s => (s.directoryHandle = e, Object.defineProperty(s, "webkitRelativePath", {
        configurable: !0,
        enumerable: !0,
        get: () => c
      })))) : a.kind === "directory" && t && (!r || !r(a)) && n.push(A(a, t, c, r));
    }

    return [...(await Promise.all(n)).flat(), ...(await Promise.all(l))];
  }, D = async (e = {}) => {
    e.recursive = e.recursive || !1;
    let t = await window.showDirectoryPicker({
      id: e.id,
      startIn: e.startIn
    });
    return A(t, e.recursive, void 0, e.skipDirectory);
  };
});
var k = {};
m(k, {
  default: () => $
});

async function q(e, t) {
  let i = e.getReader(),
      r = new ReadableStream({
    start(l) {
      return a();

      async function a() {
        return i.read().then(({
          done: c,
          value: s
        }) => {
          if (c) {
            l.close();
            return;
          }

          return l.enqueue(s), a();
        });
      }
    }

  }),
      n = new Response(r);
  return i.releaseLock(), new Blob([await n.blob()], {
    type: t
  });
}

var $,
    P = u(() => {
  $ = async (e, t = {}) => {
    Array.isArray(t) && (t = t[0]);
    let i = document.createElement("a"),
        r = e;
    "body" in e && (r = await q(e.body, e.headers.get("content-type"))), i.download = t.fileName || "Untitled", i.href = URL.createObjectURL(r);

    let n = () => a(reject),
        l = () => {
      typeof a == "function" && a();
    },
        a = t.legacySetup && t.legacySetup(l, n, i);

    return i.addEventListener("click", () => {
      setTimeout(() => URL.revokeObjectURL(i.href), 30 * 1e3), l();
    }), i.click(), null;
  };
});
var L = {};
m(L, {
  default: () => z
});
var z,
    S = u(() => {
  z = async (e, t = [{}], i = null, r = !1) => {
    Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
    let n = [];
    if (t.forEach((c, s) => {
      n[s] = {
        description: c.description || "",
        accept: {}
      }, c.mimeTypes ? (s === 0 && (e.type ? c.mimeTypes.push(e.type) : e.headers && e.headers.get("content-type") && c.mimeTypes.push(e.headers.get("content-type"))), c.mimeTypes.map(d => {
        n[s].accept[d] = c.extensions || [];
      })) : e.type && (n[s].accept[e.type] = c.extensions || []);
    }), i) try {
      await i.getFile();
    } catch (c) {
      if (i = null, r) throw c;
    }
    let l = i || (await window.showSaveFilePicker({
      suggestedName: t[0].fileName,
      id: t[0].id,
      startIn: t[0].startIn,
      types: n,
      excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
    })),
        a = await l.createWritable();
    return "stream" in e ? (await e.stream().pipeTo(a), l) : "body" in e ? (await e.body.pipeTo(a), l) : (await a.write(blob), await a.close(), l);
  };
});

var E = (() => {
  if (typeof self == "undefined") return !1;
  if ("top" in self && self !== top) try {
    top.location + "";
  } catch {
    return !1;
  } else if ("showOpenFilePicker" in self) return "showOpenFilePicker";
  return !1;
})(),
    f = E;

var _ = f ? Promise.resolve().then(() => (h(), w)) : Promise.resolve().then(() => (o(), p));

async function M(...e) {
  return (await _).default(...e);
}

var O = f ? Promise.resolve().then(() => (x(), g)) : Promise.resolve().then(() => (v(), j));

var C = f ? Promise.resolve().then(() => (S(), L)) : Promise.resolve().then(() => (P(), k));

async function G(...e) {
  return (await C).default(...e);
}
 // @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.

export { M as fileOpen, G as fileSave };
