// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileOpen = (async (e = [{}]) => (Array.isArray(e) || (e = [e]), new Promise((t, n) => {
  const i = document.createElement("input");
  i.type = "file";
  const c = [...e.map(e => e.mimeTypes || []).join(), e.map(e => e.extensions || []).join()].join();
  i.multiple = e[0].multiple || !1, i.accept = c || "";

  const l = e => {
    "function" == typeof a && a(), t(e);
  },
        a = e[0].legacySetup && e[0].legacySetup(l, () => a(n), i);

  i.addEventListener("change", () => {
    l(i.multiple ? Array.from(i.files) : i.files[0]);
  }), i.click();
})));

export default fileOpen;
