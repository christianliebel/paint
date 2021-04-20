// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = async (t, r, a = t.name) => {
  const i = [], n = [];
  for await (const o of t.values()) {
    const t2 = `${a}/${o.name}`;
    o.kind === "file" ? n.push(o.getFile().then((e2) => Object.defineProperty(e2, "webkitRelativePath", {configurable: true, enumerable: true, get: () => t2}))) : o.kind === "directory" && r && i.push(e(o, r, t2));
  }
  return [...(await Promise.all(i)).flat(), ...await Promise.all(n)];
};
var directoryOpen = async (t = {}) => {
  t.recursive = t.recursive || false;
  const r = await window.showDirectoryPicker();
  return e(r, t.recursive);
};

export default directoryOpen;
