// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileSave = (async (e, t = [{}], a = null, i = !1) => {
  Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
  const s = [];
  if (t.forEach((t, a) => {
    s[a] = {
      description: t.description || "",
      accept: {}
    }, t.mimeTypes ? (0 === a && t.mimeTypes.push(e.type), t.mimeTypes.map(e => {
      s[a].accept[e] = t.extensions || [];
    })) : s[a].accept[e.type] = t.extensions || [];
  }), a) try {
    await a.getFile();
  } catch (e) {
    if (a = null, i) throw e;
  }
  const r = a || (await window.showSaveFilePicker({
    suggestedName: t[0].fileName,
    id: t[0].id,
    startIn: t[0].startIn,
    types: s
  })),
        c = await r.createWritable();
  return await c.write(e), await c.close(), r;
});

export default fileSave;
