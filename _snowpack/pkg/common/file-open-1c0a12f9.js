// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileOpen = (async (e = {}) => new Promise((t, n) => {
  const i = document.createElement("input");
  i.type = "file";
  const s = [...(e.mimeTypes ? e.mimeTypes : []), e.extensions ? e.extensions : []].join();
  let c;
  i.multiple = e.multiple || !1, i.accept = s || "";

  const l = () => c(n);

  e.setupLegacyCleanupAndRejection && (c = e.setupLegacyCleanupAndRejection(l)), i.addEventListener("change", () => {
    c?.(), t(i.multiple ? Array.from(i.files) : i.files[0]);
  }), i.click();
}));

export default fileOpen;
