// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var directoryOpen = (async (e = [{}]) => (Array.isArray(e) || (e = [e]), e[0].recursive = e[0].recursive || !1, new Promise((t, r) => {
  const i = document.createElement("input");
  i.type = "file", i.webkitdirectory = !0;

  const c = e => {
    "function" == typeof n && n(), t(e);
  },
        n = e[0].legacySetup && e[0].legacySetup(c, () => n(r), i);

  i.addEventListener("change", () => {
    let t = Array.from(i.files);
    e[0].recursive || (t = t.filter(e => 2 === e.webkitRelativePath.split("/").length)), c(t);
  }), i.click();
})));

export default directoryOpen;
