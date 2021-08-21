/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      e = Symbol();

class s {
  constructor(t, s) {
    if (s !== e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  get styleSheet() {
    return t && void 0 === this.t && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
  }

  toString() {
    return this.cssText;
  }

}

const n = new Map(),
      o = t => {
  let o = n.get(t);
  return void 0 === o && n.set(t, o = new s(t, e)), o;
},
      r = t => o("string" == typeof t ? t : t + ""),
      i = (t, ...e) => {
  const n = 1 === t.length ? t[0] : e.reduce((e, n, o) => e + (t => {
    if (t instanceof s) return t.cssText;
    if ("number" == typeof t) return t;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[o + 1], t[0]);
  return o(n);
},
      S = (e, s) => {
  t ? e.adoptedStyleSheets = s.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : s.forEach(t => {
    const s = document.createElement("style");
    s.textContent = t.cssText, e.appendChild(s);
  });
},
      u = t ? t => t : t => t instanceof CSSStyleSheet ? (t => {
  let e = "";

  for (const s of t.cssRules) e += s.cssText;

  return r(e);
})(t) : t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var s$1, e$1, h, r$1;

const o$1 = {
  toAttribute(t, i) {
    switch (i) {
      case Boolean:
        t = t ? "" : null;
        break;

      case Object:
      case Array:
        t = null == t ? t : JSON.stringify(t);
    }

    return t;
  },

  fromAttribute(t, i) {
    let s = t;

    switch (i) {
      case Boolean:
        s = null !== t;
        break;

      case Number:
        s = null === t ? null : Number(t);
        break;

      case Object:
      case Array:
        try {
          s = JSON.parse(t);
        } catch (t) {
          s = null;
        }

    }

    return s;
  }

},
      n$1 = (t, i) => i !== t && (i == i || t == t),
      l = {
  attribute: !0,
  type: String,
  converter: o$1,
  reflect: !1,
  hasChanged: n$1
};

class a extends HTMLElement {
  constructor() {
    super(), this.Πi = new Map(), this.Πo = void 0, this.Πl = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this.Πh = null, this.u();
  }

  static addInitializer(t) {
    var i;
    null !== (i = this.v) && void 0 !== i || (this.v = []), this.v.push(t);
  }

  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const e = this.Πp(s, i);
      void 0 !== e && (this.Πm.set(e, s), t.push(e));
    }), t;
  }

  static createProperty(t, i = l) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = "symbol" == typeof t ? Symbol() : "__" + t,
            e = this.getPropertyDescriptor(t, s, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }

  static getPropertyDescriptor(t, i, s) {
    return {
      get() {
        return this[i];
      },

      set(e) {
        const h = this[t];
        this[i] = e, this.requestUpdate(t, h, s);
      },

      configurable: !0,
      enumerable: !0
    };
  }

  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || l;
  }

  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);

    if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this.Πm = new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties,
            i = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];

      for (const s of i) this.createProperty(s, t[s]);
    }

    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }

  static finalizeStyles(i) {
    const s = [];

    if (Array.isArray(i)) {
      const e = new Set(i.flat(1 / 0).reverse());

      for (const i of e) s.unshift(u(i));
    } else void 0 !== i && s.push(u(i));

    return s;
  }

  static Πp(t, i) {
    const s = i.attribute;
    return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
  }

  u() {
    var t;
    this.Πg = new Promise(t => this.enableUpdating = t), this.L = new Map(), this.Π_(), this.requestUpdate(), null === (t = this.constructor.v) || void 0 === t || t.forEach(t => t(this));
  }

  addController(t) {
    var i, s;
    (null !== (i = this.ΠU) && void 0 !== i ? i : this.ΠU = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }

  removeController(t) {
    var i;
    null === (i = this.ΠU) || void 0 === i || i.splice(this.ΠU.indexOf(t) >>> 0, 1);
  }

  Π_() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this.Πi.set(i, this[i]), delete this[i]);
    });
  }

  createRenderRoot() {
    var t;
    const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return S(s, this.constructor.elementStyles), s;
  }

  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this.ΠU) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
    }), this.Πl && (this.Πl(), this.Πo = this.Πl = void 0);
  }

  enableUpdating(t) {}

  disconnectedCallback() {
    var t;
    null === (t = this.ΠU) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
    }), this.Πo = new Promise(t => this.Πl = t);
  }

  attributeChangedCallback(t, i, s) {
    this.K(t, s);
  }

  Πj(t, i, s = l) {
    var e, h;
    const r = this.constructor.Πp(t, s);

    if (void 0 !== r && !0 === s.reflect) {
      const n = (null !== (h = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== h ? h : o$1.toAttribute)(i, s.type);
      this.Πh = t, null == n ? this.removeAttribute(r) : this.setAttribute(r, n), this.Πh = null;
    }
  }

  K(t, i) {
    var s, e, h;
    const r = this.constructor,
          n = r.Πm.get(t);

    if (void 0 !== n && this.Πh !== n) {
      const t = r.getPropertyOptions(n),
            l = t.converter,
            a = null !== (h = null !== (e = null === (s = l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof l ? l : null) && void 0 !== h ? h : o$1.fromAttribute;
      this.Πh = n, this[n] = a(i, t.type), this.Πh = null;
    }
  }

  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || n$1)(this[t], i) ? (this.L.has(t) || this.L.set(t, i), !0 === s.reflect && this.Πh !== t && (void 0 === this.Πk && (this.Πk = new Map()), this.Πk.set(t, s))) : e = !1), !this.isUpdatePending && e && (this.Πg = this.Πq());
  }

  async Πq() {
    this.isUpdatePending = !0;

    try {
      for (await this.Πg; this.Πo;) await this.Πo;
    } catch (t) {
      Promise.reject(t);
    }

    const t = this.performUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }

  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this.Πi && (this.Πi.forEach((t, i) => this[i] = t), this.Πi = void 0);
    let i = !1;
    const s = this.L;

    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this.ΠU) || void 0 === t || t.forEach(t => {
        var i;
        return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
      }), this.update(s)) : this.Π$();
    } catch (t) {
      throw i = !1, this.Π$(), t;
    }

    i && this.E(s);
  }

  willUpdate(t) {}

  E(t) {
    var i;
    null === (i = this.ΠU) || void 0 === i || i.forEach(t => {
      var i;
      return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }

  Π$() {
    this.L = new Map(), this.isUpdatePending = !1;
  }

  get updateComplete() {
    return this.getUpdateComplete();
  }

  getUpdateComplete() {
    return this.Πg;
  }

  shouldUpdate(t) {
    return !0;
  }

  update(t) {
    void 0 !== this.Πk && (this.Πk.forEach((t, i) => this.Πj(i, this[i], t)), this.Πk = void 0), this.Π$();
  }

  updated(t) {}

  firstUpdated(t) {}

}

a.finalized = !0, a.elementProperties = new Map(), a.elementStyles = [], a.shadowRootOptions = {
  mode: "open"
}, null === (e$1 = (s$1 = globalThis).reactiveElementPlatformSupport) || void 0 === e$1 || e$1.call(s$1, {
  ReactiveElement: a
}), (null !== (h = (r$1 = globalThis).reactiveElementVersions) && void 0 !== h ? h : r$1.reactiveElementVersions = []).push("1.0.0-rc.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1, i$1, s$2, e$2;

const o$2 = globalThis.trustedTypes,
      n$2 = o$2 ? o$2.createPolicy("lit-html", {
  createHTML: t => t
}) : void 0,
      l$1 = `lit$${(Math.random() + "").slice(9)}$`,
      h$1 = "?" + l$1,
      r$2 = `<${h$1}>`,
      u$1 = document,
      c = (t = "") => u$1.createComment(t),
      d = t => null === t || "object" != typeof t && "function" != typeof t,
      v = Array.isArray,
      a$1 = t => {
  var i;
  return v(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
      f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      _ = /-->/g,
      m = />/g,
      $ = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      g = /'/g,
      p = /"/g,
      y = /^(?:script|style|textarea)$/i,
      b = t => (i, ...s) => ({
  _$litType$: t,
  strings: i,
  values: s
}),
      T = b(1),
      w = Symbol.for("lit-noChange"),
      A = Symbol.for("lit-nothing"),
      C = new WeakMap(),
      P = (t, i, s) => {
  var e, o;
  const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let l = n._$litPart$;

  if (void 0 === l) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    n._$litPart$ = l = new k(i.insertBefore(c(), t), t, void 0, null != s ? s : {});
  }

  return l._$AI(t), l;
},
      V = u$1.createTreeWalker(u$1, 129, null, !1),
      E = (t, i) => {
  const s = t.length - 1,
        e = [];
  let o,
      h = 2 === i ? "<svg>" : "",
      u = f;

  for (let i = 0; i < s; i++) {
    const s = t[i];
    let n,
        c,
        d = -1,
        v = 0;

    for (; v < s.length && (u.lastIndex = v, c = u.exec(s), null !== c);) v = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (o = RegExp("</" + c[2], "g")), u = $) : void 0 !== c[3] && (u = $) : u === $ ? ">" === c[0] ? (u = null != o ? o : f, d = -1) : void 0 === c[1] ? d = -2 : (d = u.lastIndex - c[2].length, n = c[1], u = void 0 === c[3] ? $ : '"' === c[3] ? p : g) : u === p || u === g ? u = $ : u === _ || u === m ? u = f : (u = $, o = void 0);

    const a = u === $ && t[i + 1].startsWith("/>") ? " " : "";
    h += u === f ? s + r$2 : d >= 0 ? (e.push(n), s.slice(0, d) + "$lit$" + s.slice(d) + l$1 + a) : s + l$1 + (-2 === d ? (e.push(void 0), i) : a);
  }

  const c = h + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
  return [void 0 !== n$2 ? n$2.createHTML(c) : c, e];
};

class M {
  constructor({
    strings: t,
    _$litType$: i
  }, s) {
    let e;
    this.parts = [];
    let n = 0,
        r = 0;
    const u = t.length - 1,
          d = this.parts,
          [v, a] = E(t, i);

    if (this.el = M.createElement(v, s), V.currentNode = this.el.content, 2 === i) {
      const t = this.el.content,
            i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }

    for (; null !== (e = V.nextNode()) && d.length < u;) {
      if (1 === e.nodeType) {
        if (e.hasAttributes()) {
          const t = [];

          for (const i of e.getAttributeNames()) if (i.endsWith("$lit$") || i.startsWith(l$1)) {
            const s = a[r++];

            if (t.push(i), void 0 !== s) {
              const t = e.getAttribute(s.toLowerCase() + "$lit$").split(l$1),
                    i = /([.?@])?(.*)/.exec(s);
              d.push({
                type: 1,
                index: n,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? I : "?" === i[1] ? L : "@" === i[1] ? R : H
              });
            } else d.push({
              type: 6,
              index: n
            });
          }

          for (const i of t) e.removeAttribute(i);
        }

        if (y.test(e.tagName)) {
          const t = e.textContent.split(l$1),
                i = t.length - 1;

          if (i > 0) {
            e.textContent = o$2 ? o$2.emptyScript : "";

            for (let s = 0; s < i; s++) e.append(t[s], c()), V.nextNode(), d.push({
              type: 2,
              index: ++n
            });

            e.append(t[i], c());
          }
        }
      } else if (8 === e.nodeType) if (e.data === h$1) d.push({
        type: 2,
        index: n
      });else {
        let t = -1;

        for (; -1 !== (t = e.data.indexOf(l$1, t + 1));) d.push({
          type: 7,
          index: n
        }), t += l$1.length - 1;
      }

      n++;
    }
  }

  static createElement(t, i) {
    const s = u$1.createElement("template");
    return s.innerHTML = t, s;
  }

}

function N(t, i, s = t, e) {
  var o, n, l, h;
  if (i === w) return i;
  let r = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu;
  const u = d(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = r : s._$Cu = r), void 0 !== r && (i = N(t, r._$AS(t, i.values), r, e)), i;
}

class S$1 {
  constructor(t, i) {
    this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  p(t) {
    var i;
    const {
      el: {
        content: s
      },
      parts: e
    } = this._$AD,
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : u$1).importNode(s, !0);
    V.currentNode = o;
    let n = V.nextNode(),
        l = 0,
        h = 0,
        r = e[0];

    for (; void 0 !== r;) {
      if (l === r.index) {
        let i;
        2 === r.type ? i = new k(n, n.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(n, r.name, r.strings, this, t) : 6 === r.type && (i = new z(n, this, t)), this.v.push(i), r = e[++h];
      }

      l !== (null == r ? void 0 : r.index) && (n = V.nextNode(), l++);
    }

    return o;
  }

  m(t) {
    let i = 0;

    for (const s of this.v) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }

}

class k {
  constructor(t, i, s, e) {
    this.type = 2, this._$C_ = !0, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e;
  }

  get _$AU() {
    var t, i;
    return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$C_;
  }

  get parentNode() {
    return this._$AA.parentNode;
  }

  get startNode() {
    return this._$AA;
  }

  get endNode() {
    return this._$AB;
  }

  _$AI(t, i = this) {
    t = N(this, t, i), d(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== w && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.A(t) : a$1(t) ? this.M(t) : this.$(t);
  }

  C(t, i = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, i);
  }

  A(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.C(t));
  }

  $(t) {
    const i = this._$AA.nextSibling;
    null !== i && 3 === i.nodeType && (null === this._$AB ? null === i.nextSibling : i === this._$AB.previousSibling) ? i.data = t : this.A(u$1.createTextNode(t)), this._$AH = t;
  }

  T(t) {
    var i;
    const {
      values: s,
      _$litType$: e
    } = t,
          o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = M.createElement(e.h, this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);else {
      const t = new S$1(o, this),
            i = t.p(this.options);
      t.m(s), this.A(i), this._$AH = t;
    }
  }

  _$AC(t) {
    let i = C.get(t.strings);
    return void 0 === i && C.set(t.strings, i = new M(t)), i;
  }

  M(t) {
    v(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
        e = 0;

    for (const o of t) e === i.length ? i.push(s = new k(this.C(c()), this.C(c()), this, this.options)) : s = i[e], s._$AI(o), e++;

    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
  }

  _$AR(t = this._$AA.nextSibling, i) {
    var s;

    for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }

  setConnected(t) {
    var i;
    void 0 === this._$AM && (this._$C_ = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }

}

class H {
  constructor(t, i, s, e, o) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(A), this.strings = s) : this._$AH = A;
  }

  get tagName() {
    return this.element.tagName;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AI(t, i = this, s, e) {
    const o = this.strings;
    let n = !1;
    if (void 0 === o) t = N(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== w, n && (this._$AH = t);else {
      const e = t;
      let l, h;

      for (t = o[0], l = 0; l < o.length - 1; l++) h = N(this, e[s + l], i, l), h === w && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
    }
    n && !e && this.P(t);
  }

  P(t) {
    t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }

}

class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }

  P(t) {
    this.element[this.name] = t === A ? void 0 : t;
  }

}

class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }

  P(t) {
    t && t !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }

}

class R extends H {
  constructor() {
    super(...arguments), this.type = 5;
  }

  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = N(this, t, i, 0)) && void 0 !== s ? s : A) === w) return;
    const e = this._$AH,
          o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          n = t !== A && (e === A || o);
    o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }

  handleEvent(t) {
    var i, s;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
  }

}

class z {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AI(t) {
    N(this, t);
  }

}
null === (i$1 = (t$1 = globalThis).litHtmlPlatformSupport) || void 0 === i$1 || i$1.call(t$1, M, k), (null !== (s$2 = (e$2 = globalThis).litHtmlVersions) && void 0 !== s$2 ? s$2 : e$2.litHtmlVersions = []).push("2.0.0-rc.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var i$2, l$2, o$3, s$3, n$3, a$2;
(null !== (i$2 = (a$2 = globalThis).litElementVersions) && void 0 !== i$2 ? i$2 : a$2.litElementVersions = []).push("3.0.0-rc.2");

class h$2 extends a {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this.Φt = void 0;
  }

  createRenderRoot() {
    var t, e;
    const r = super.createRenderRoot();
    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = r.firstChild), r;
  }

  update(t) {
    const r = this.render();
    super.update(t), this.Φt = P(r, this.renderRoot, this.renderOptions);
  }

  connectedCallback() {
    var t;
    super.connectedCallback(), null === (t = this.Φt) || void 0 === t || t.setConnected(!0);
  }

  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), null === (t = this.Φt) || void 0 === t || t.setConnected(!1);
  }

  render() {
    return w;
  }

}

h$2.finalized = !0, h$2._$litElement$ = !0, null === (o$3 = (l$2 = globalThis).litElementHydrateSupport) || void 0 === o$3 || o$3.call(l$2, {
  LitElement: h$2
}), null === (n$3 = (s$3 = globalThis).litElementPlatformSupport) || void 0 === n$3 || n$3.call(s$3, {
  LitElement: h$2
});

export { h$2 as LitElement, i as css, T as html };
