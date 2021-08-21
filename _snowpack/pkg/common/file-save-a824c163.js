// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileSave = (async (e, t = {}) => {
  Array.isArray(t) && (t = t[0]);
  const c = document.createElement("a");
  let n;
  c.download = t.fileName || "Untitled", c.href = URL.createObjectURL(e);

  const a = () => n(reject);

  t.setupLegacyCleanupAndRejection && (n = t.setupLegacyCleanupAndRejection(a)), c.addEventListener("click", () => {
    "function" == typeof n && n(), setTimeout(() => URL.revokeObjectURL(c.href), 3e4);
  }), c.click();
});

export default fileSave;
