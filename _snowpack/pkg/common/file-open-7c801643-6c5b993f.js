var e = async (e = [{}]) => (Array.isArray(e) || (e = [e]), new Promise((t, n) => {
  const a = document.createElement("input");
  a.type = "file";
  const i = [...e.map(e => e.mimeTypes || []), ...e.map(e => e.extensions || [])].join();
  a.multiple = e[0].multiple || !1, a.accept = i || "";

  const c = e => {
    "function" == typeof l && l(), t(e);
  },
        l = e[0].legacySetup && e[0].legacySetup(c, () => l(n), a);

  a.addEventListener("change", () => {
    c(a.multiple ? Array.from(a.files) : a.files[0]);
  }), a.click();
}));

export default e;
