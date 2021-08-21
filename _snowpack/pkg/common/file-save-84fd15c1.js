// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileSave = (async (e, t = [{}], i = null, a = !1) => {
  Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
  const c = [];
  if (t.forEach((t, i) => {
    c[i] = {
      description: t.description || "",
      accept: {}
    }, t.mimeTypes ? (0 === i && t.mimeTypes.push(e.type), t.mimeTypes.map(e => {
      c[i].accept[e] = t.extensions || [];
    })) : c[i].accept[e.type] = t.extensions || [];
  }), i) try {
    await i.getFile();
  } catch (e) {
    if (i = null, a) throw e;
  }
  const s = i || (await window.showSaveFilePicker({
    suggestedName: t[0].fileName,
    id: t[0].id,
    startIn: t[0].startIn,
    types: c,
    excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
  })),
        l = await s.createWritable();
  return await l.write(e), await l.close(), s;
});

export default fileSave;
