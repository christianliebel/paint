var e = async (e, t = [{}], a = null, i = !1) => {
  Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
  const s = [];
  if (t.forEach((t, a) => {
    s[a] = {
      description: t.description || "",
      accept: {}
    }, t.mimeTypes ? (0 === a && (e.type ? t.mimeTypes.push(e.type) : e.headers && e.headers.get("content-type") && t.mimeTypes.push(e.headers.get("content-type"))), t.mimeTypes.map(e => {
      s[a].accept[e] = t.extensions || [];
    })) : e.type && (s[a].accept[e.type] = t.extensions || []);
  }), a) try {
    await a.getFile();
  } catch (e) {
    if (a = null, i) throw e;
  }
  const p = a || (await window.showSaveFilePicker({
    suggestedName: t[0].fileName,
    id: t[0].id,
    startIn: t[0].startIn,
    types: s,
    excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
  })),
        c = await p.createWritable();

  if ("stream" in e) {
    const t = e.stream();
    return await t.pipeTo(c), p;
  }

  return "body" in e ? (await e.body.pipeTo(c), p) : (await c.write(blob), await c.close(), p);
};

export default e;
