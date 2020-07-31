// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e="chooseFileSystemEntries"in self?"chooseFileSystemEntries":"showOpenFilePicker"in self&&"showOpenFilePicker";

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const t=e?"chooseFileSystemEntries"===e?import('./common/file-open-fac3d0b1.js'):import('./common/file-open-6ce9eb2c.js'):import('./common/file-open-f9a5f1c4.js');async function fileOpen(...e){return (await t).default(...e)}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const t$1=e?"chooseFileSystemEntries"===e?import('./common/directory-open-7bae6a7f.js'):import('./common/directory-open-eb3669c5.js'):import('./common/directory-open-50706e94.js');async function directoryOpen(...e){return (await t$1).default(...e)}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const s=e?"chooseFileSystemEntries"===e?import('./common/file-save-15adb038.js'):import('./common/file-save-3e74be39.js'):import('./common/file-save-70a78426.js');async function fileSave(...e){return (await s).default(...e)}

export { directoryOpen, fileOpen, fileSave };
