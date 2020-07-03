// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e="chooseFileSystemEntries"in self?import('./common/file-open-nativefs-11792c03.js'):import('./common/file-open-legacy-37886591.js');async function fileOpen(...i){return (await e).default(...i)}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e$1="chooseFileSystemEntries"in self?import('./common/directory-open-nativefs-7ac98f26.js'):import('./common/directory-open-legacy-8ad703f7.js');async function directoryOpen(...t){return (await e$1).default(...t)}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e$2="chooseFileSystemEntries"in self?import('./common/file-save-nativefs-b50a0318.js'):import('./common/file-save-legacy-df95654f.js');async function fileSave(...i){return (await e$2).default(...i)}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const t=async t=>new Promise(e=>{const a=document.createElement("canvas");a.width=t.naturalWidth,a.height=t.naturalHeight;a.getContext("2d").drawImage(t,0,0),a.toBlob(t=>{e(t);});});

export { directoryOpen, fileOpen, fileSave, t as imageToBlob };
