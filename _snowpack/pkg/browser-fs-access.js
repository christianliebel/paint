// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e="chooseFileSystemEntries"in self?"chooseFileSystemEntries":"showOpenFilePicker"in self&&"showOpenFilePicker";

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const s=e?"chooseFileSystemEntries"===e?import('./common/file-open-5eb48e45.js'):import('./common/file-open-aa0e13c8.js'):import('./common/file-open-e1660c35.js');async function fileOpen(...e){return (await s).default(...e)}

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
e?"chooseFileSystemEntries"===e?import('./common/directory-open-abd2ea6b.js'):import('./common/directory-open-15776d53.js'):import('./common/directory-open-affbc94a.js');

// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const s$1=e?"chooseFileSystemEntries"===e?import('./common/file-save-bedc4f3a.js'):import('./common/file-save-d64fc637.js'):import('./common/file-save-f0a9af4f.js');async function fileSave(...e){return (await s$1).default(...e)}

export { fileOpen, fileSave };
