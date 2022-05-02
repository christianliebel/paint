const e = (() => {
  if ("undefined" == typeof self) return !1;
  if ("top" in self && self !== top) try {
    top;
  } catch (e) {
    return !1;
  } else if ("showOpenFilePicker" in self) return "showOpenFilePicker";
  return !1;
})(),
      t = e ? import('./common/file-open-002ab408-5b3009d8.js') : import('./common/file-open-7c801643-6c5b993f.js');

async function n(...e) {
  return (await t).default(...e);
}

const i = e ? import('./common/directory-open-4ed118d0-26f1a5bb.js') : import('./common/directory-open-01563666-fb6d297a.js');

const o = e ? import('./common/file-save-745eba88-7bec6e03.js') : import('./common/file-save-0bb4323c-e9f0e4f6.js');

async function s(...e) {
  return (await o).default(...e);
}

export { n as fileOpen, s as fileSave };
