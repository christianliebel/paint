// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileOpen = (async (e = [{}]) => (Array.isArray(e) || (e = [e]), new Promise((n, t) => {
  const i = document.createElement("input");
  i.type = "file";
  const c = [...e.map(e => e.mimeTypes || []).join(), e.map(e => e.extensions || []).join()].join();
  let a;
  i.multiple = e[0].multiple || !1, i.accept = c || "";

  const l = () => a(t);

  e[0].setupLegacyCleanupAndRejection && (a = e[0].setupLegacyCleanupAndRejection(l)), i.addEventListener("change", () => {
    "function" == typeof a && a(), n(i.multiple ? Array.from(i.files) : i.files[0]);
  }), i.click();
})));

export default fileOpen;
