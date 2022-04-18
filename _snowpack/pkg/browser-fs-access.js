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

const o = e ? import('./common/file-save-f7b10bb1-ead11b22.js') : import('./common/file-save-c8e3403f-4c88c01c.js');

async function f(...e) {
  return (await o).default(...e);
}

export { n as fileOpen, f as fileSave };
