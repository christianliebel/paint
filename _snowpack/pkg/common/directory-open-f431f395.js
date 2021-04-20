// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var directoryOpen = async (e = {}) => (e.recursive = e.recursive || false, new Promise((n, t) => {
  const r = document.createElement("input");
  r.type = "file", r.webkitdirectory = true;
  const o = () => {
    window.removeEventListener("pointermove", o), window.removeEventListener("pointerdown", o), window.removeEventListener("keydown", o), t(new DOMException("The user aborted a request.", "AbortError"));
  };
  window.addEventListener("pointermove", o), window.addEventListener("pointerdown", o), window.addEventListener("keydown", o), r.addEventListener("change", () => {
    window.removeEventListener("pointermove", o), window.removeEventListener("pointerdown", o), window.removeEventListener("keydown", o);
    let t2 = Array.from(r.files);
    e.recursive || (t2 = t2.filter((e2) => e2.webkitRelativePath.split("/").length === 2)), n(t2);
  }), r.click();
}));

export default directoryOpen;
