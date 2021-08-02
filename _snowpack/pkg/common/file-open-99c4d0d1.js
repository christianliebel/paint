// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileOpen = (async (e = {}) => new Promise((t, n) => {
  const i = document.createElement("input");
  i.type = "file";
  const c = [...(e.mimeTypes ? e.mimeTypes : []), e.extensions ? e.extensions : []].join();
  let s;
  i.multiple = e.multiple || !1, i.accept = c || "";

  const l = () => s(n);

  e.setupLegacyCleanupAndRejection && (s = e.setupLegacyCleanupAndRejection(l)), i.addEventListener("change", () => {
    "function" == typeof s && s(), t(i.multiple ? Array.from(i.files) : i.files[0]);
  }), i.click();
}));

export default fileOpen;
