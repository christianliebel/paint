// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e="chooseFileSystemEntries"in self?"chooseFileSystemEntries":"showOpenFilePicker"in self&&"showOpenFilePicker";

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const t=e?"chooseFileSystemEntries"===e?import('./common/file-open-nativefs-a9b57b6b.js'):import('./common/file-open-nativefs-539a2c46.js'):import('./common/file-open-legacy-37886591.js');async function fileOpen(...e){return (await t).default(...e)}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const t$1=e?"chooseFileSystemEntries"===e?import('./common/directory-open-nativefs-edd3f2a1.js'):import('./common/directory-open-nativefs-20e5d376.js'):import('./common/directory-open-legacy-aed60324.js');async function directoryOpen(...e){return (await t$1).default(...e)}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const s=e?"chooseFileSystemEntries"===e?import('./common/file-save-nativefs-2c1b0849.js'):import('./common/file-save-nativefs-403dc0ac.js'):import('./common/file-save-legacy-df95654f.js');async function fileSave(...e){return (await s).default(...e)}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const t$2=async t=>new Promise(e=>{const a=document.createElement("canvas");a.width=t.naturalWidth,a.height=t.naturalHeight;a.getContext("2d").drawImage(t,0,0),a.toBlob(t=>{e(t);});});

export { directoryOpen, fileOpen, fileSave, t$2 as imageToBlob };
