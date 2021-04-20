// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = (() => {
  if ("top" in self && self !== top)
    try {
      top.location;
    } catch {
      return false;
    }
  else {
    if ("chooseFileSystemEntries" in self)
      return "chooseFileSystemEntries";
    if ("showOpenFilePicker" in self)
      return "showOpenFilePicker";
  }
  return false;
})();

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const s = e ? e === "chooseFileSystemEntries" ? import('./common/file-open-8c73418b.js') : import('./common/file-open-a3930c46.js') : import('./common/file-open-85548c20.js');
async function fileOpen(...e2) {
  return (await s).default(...e2);
}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const o = e ? e === "chooseFileSystemEntries" ? import('./common/directory-open-dbc36b9d.js') : import('./common/directory-open-cded4e8b.js') : import('./common/directory-open-f431f395.js');

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const s$1 = e ? e === "chooseFileSystemEntries" ? import('./common/file-save-a93ed966.js') : import('./common/file-save-9a176833.js') : import('./common/file-save-e0516be4.js');
async function fileSave(...e2) {
  return (await s$1).default(...e2);
}

export { fileOpen, fileSave };
