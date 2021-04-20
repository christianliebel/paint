// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = async (e2) => {
  const t = await e2.getFile();
  return t.handle = e2, t;
};
var fileOpen = async (t = {}) => {
  const i = await window.chooseFileSystemEntries({accepts: [{description: t.description || "", mimeTypes: t.mimeTypes || ["*/*"], extensions: t.extensions || [""]}], multiple: t.multiple || false});
  return t.multiple ? Promise.all(i.map(e)) : e(i);
};

export default fileOpen;
