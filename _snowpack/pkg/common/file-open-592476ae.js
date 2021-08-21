// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = async e => {
  const t = await e.getFile();
  return t.handle = e, t;
};

var fileOpen = (async (t = [{}]) => {
  Array.isArray(t) || (t = [t]);
  const i = [];
  t.forEach((e, t) => {
    i[t] = {
      description: e.description || "",
      accept: {}
    }, e.mimeTypes ? e.mimeTypes.map(c => {
      i[t].accept[c] = e.extensions || [];
    }) : i[t].accept["*/*"] = e.extensions || [];
  });
  const c = await window.showOpenFilePicker({
    id: t[0].id,
    startIn: t[0].startIn,
    types: i,
    multiple: t[0].multiple || !1,
    excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
  }),
        a = await Promise.all(c.map(e));
  return t[0].multiple ? a : a[0];
});

export default fileOpen;
