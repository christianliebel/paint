// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var directoryOpen = (async (e = {}) => (e.recursive = e.recursive || !1, new Promise((t, n) => {
  const i = document.createElement("input");
  let c;
  i.type = "file", i.webkitdirectory = !0;

  const r = () => c(n);

  e.setupLegacyCleanupAndRejection && (c = e.setupLegacyCleanupAndRejection(r)), i.addEventListener("change", () => {
    "function" == typeof c && c();
    let n = Array.from(i.files);
    e.recursive || (n = n.filter(e => 2 === e.webkitRelativePath.split("/").length)), t(n);
  }), i.click();
})));

export default directoryOpen;
