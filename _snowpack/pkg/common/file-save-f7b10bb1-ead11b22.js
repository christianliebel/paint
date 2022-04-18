var e = async (e, t = [{}], a = null, i = !1, n = null) => {
  Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
  const s = [];
  let c = null;
  if (e instanceof Blob && e.type ? c = e.type : e.headers && e.headers.get("content-type") && (c = e.headers.get("content-type")), t.forEach((e, t) => {
    s[t] = {
      description: e.description || "",
      accept: {}
    }, e.mimeTypes ? (0 === t && c && e.mimeTypes.push(c), e.mimeTypes.map(a => {
      s[t].accept[a] = e.extensions || [];
    })) : c && (s[t].accept[c] = e.extensions || []);
  }), a) try {
    await a.getFile();
  } catch (e) {
    if (a = null, i) throw e;
  }
  const l = a || (await window.showSaveFilePicker({
    suggestedName: t[0].fileName,
    id: t[0].id,
    startIn: t[0].startIn,
    types: s,
    excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
  }));
  !a && n && n();
  const r = await l.createWritable();

  if ("stream" in e) {
    const t = e.stream();
    return await t.pipeTo(r), l;
  }

  return "body" in e ? (await e.body.pipeTo(r), l) : (await r.write(blob), await r.close(), l);
};

export default e;
