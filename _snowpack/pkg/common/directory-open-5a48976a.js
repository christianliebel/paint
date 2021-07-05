// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var directoryOpen = (async (e = {}) => (e.recursive = e.recursive || !1, new Promise((t, i) => {
  const n = document.createElement("input");
  let c;
  n.type = "file", n.webkitdirectory = !0;

  const r = () => c(i);

  e.setupLegacyCleanupAndRejection && (c = e.setupLegacyCleanupAndRejection(r)), n.addEventListener("change", () => {
    c?.();
    let i = Array.from(n.files);
    e.recursive || (i = i.filter(e => 2 === e.webkitRelativePath.split("/").length)), t(i);
  }), n.click();
})));

export default directoryOpen;
