// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = async (t, r, i = t.name, a) => {
  const n = [],
        o = [];

  for await (const s of t.values()) {
    const c = `${i}/${s.name}`;
    "file" === s.kind ? o.push(s.getFile().then(e => (e.directoryHandle = t, Object.defineProperty(e, "webkitRelativePath", {
      configurable: !0,
      enumerable: !0,
      get: () => c
    })))) : "directory" !== s.kind || !r || a && a(s) || n.push(e(s, r, c, a));
  }

  return [...(await Promise.all(n)).flat(), ...(await Promise.all(o))];
};

var directoryOpen = (async (t = {}) => {
  t.recursive = t.recursive || !1;
  const r = await window.showDirectoryPicker({
    id: t.id,
    startIn: t.startIn
  });
  return e(r, t.recursive, void 0, t.skipDirectory);
});

export default directoryOpen;
