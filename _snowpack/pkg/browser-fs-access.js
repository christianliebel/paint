// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = (() => {
  if ("top" in self && self !== top) try {
    top.location;
  } catch {
    return !1;
  } else {
    if ("chooseFileSystemEntries" in self) return "chooseFileSystemEntries";
    if ("showOpenFilePicker" in self) return "showOpenFilePicker";
  }
  return !1;
})();

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const s = e ? "chooseFileSystemEntries" === e ? import('./common/file-open-430cd9a7.js') : import('./common/file-open-02457eb1.js') : import('./common/file-open-2060affd.js');
async function fileOpen(...e) {
  return (await s).default(...e);
}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const o = e ? "chooseFileSystemEntries" === e ? import('./common/directory-open-b1926eca.js') : import('./common/directory-open-037507cf.js') : import('./common/directory-open-27d94dc1.js');

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const s$1 = e ? "chooseFileSystemEntries" === e ? import('./common/file-save-37f64574.js') : import('./common/file-save-43578d3f.js') : import('./common/file-save-9ebdfaae.js');
async function fileSave(...e) {
  return (await s$1).default(...e);
}

export { fileOpen, fileSave };
