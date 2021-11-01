// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileSave = (async (e, t = {}) => {
  Array.isArray(t) && (t = t[0]);
  const c = document.createElement("a");
  c.download = t.fileName || "Untitled", c.href = URL.createObjectURL(e);

  const r = () => {
    "function" == typeof n && n();
  },
        n = t.legacySetup && t.legacySetup(r, () => n(reject), c);

  return c.addEventListener("click", () => {
    setTimeout(() => URL.revokeObjectURL(c.href), 3e4), r();
  }), c.click(), null;
});

export default fileSave;
