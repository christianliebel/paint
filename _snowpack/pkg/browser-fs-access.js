// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = (() => {
  if ("undefined" == typeof self) return !1;
  if ("top" in self && self !== top) try {
    top.location;
  } catch {
    return !1;
  } else if ("showOpenFilePicker" in self) return "showOpenFilePicker";
  return !1;
})();

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const o = e ? import('./common/file-open-592476ae.js') : import('./common/file-open-39f62fa4.js');
async function fileOpen(...e) {
  return (await o).default(...e);
}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const o$1 = e ? import('./common/directory-open-ae5779fa.js') : import('./common/directory-open-d681e165.js');

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const s = e ? import('./common/file-save-84fd15c1.js') : import('./common/file-save-a824c163.js');
async function fileSave(...e) {
  return (await s).default(...e);
}

export { fileOpen, fileSave };
