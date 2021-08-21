// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var directoryOpen = (async (e = [{}]) => (Array.isArray(e) || (e = [e]), e[0].recursive = e[0].recursive || !1, new Promise((t, r) => {
  const i = document.createElement("input");
  let n;
  i.type = "file", i.webkitdirectory = !0;

  const c = () => n(r);

  e[0].setupLegacyCleanupAndRejection && (n = e[0].setupLegacyCleanupAndRejection(c)), i.addEventListener("change", () => {
    "function" == typeof n && n();
    let r = Array.from(i.files);
    e[0].recursive || (r = r.filter(e => 2 === e.webkitRelativePath.split("/").length)), t(r);
  }), i.click();
})));

export default directoryOpen;
