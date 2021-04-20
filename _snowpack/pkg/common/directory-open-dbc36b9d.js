// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = async (t, r, i = t.name) => {
  const a = [], s = [];
  for await (const n of t.getEntries()) {
    const t2 = `${i}/${n.name}`;
    n.isFile ? s.push(n.getFile().then((e2) => Object.defineProperty(e2, "webkitRelativePath", {configurable: true, enumerable: true, get: () => t2}))) : n.isDirectory && r && a.push(e(n, r, t2));
  }
  return [...(await Promise.all(a)).flat(), ...await Promise.all(s)];
};
var directoryOpen = async (t = {}) => {
  t.recursive = t.recursive || false;
  const r = await window.chooseFileSystemEntries({type: "open-directory"});
  return e(r, t.recursive);
};

export default directoryOpen;
