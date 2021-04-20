// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = async (e2) => {
  const t = await e2.getFile();
  return t.handle = e2, t;
};
var fileOpen = async (t = {}) => {
  const i = {};
  t.mimeTypes ? t.mimeTypes.map((e2) => {
    i[e2] = t.extensions || [];
  }) : i["*/*"] = t.extensions || [];
  const n = await window.showOpenFilePicker({types: [{description: t.description || "", accept: i}], multiple: t.multiple || false}), s = await Promise.all(n.map(e));
  return t.multiple ? s : s[0];
};

export default fileOpen;
