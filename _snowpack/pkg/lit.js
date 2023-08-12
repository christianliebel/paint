/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = window,
  e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s = Symbol(),
  n = new WeakMap();
class o {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (e && void 0 === t) {
      const e = void 0 !== s && 1 === s.length;
      e && (t = n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && n.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const r = t => new o("string" == typeof t ? t : t + "", void 0, s),
  i = (t, ...e) => {
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n) => e + (t => {
      if (!0 === t._$cssResult$) return t.cssText;
      if ("number" == typeof t) return t;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s) + t[n + 1], t[0]);
    return new o(n, t, s);
  },
  S = (s, n) => {
    e ? s.adoptedStyleSheets = n.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach(e => {
      const n = document.createElement("style"),
        o = t.litNonce;
      void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
  },
  c = e ? t => t : t => t instanceof CSSStyleSheet ? (t => {
    let e = "";
    for (const s of t.cssRules) e += s.cssText;
    return r(e);
  })(t) : t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$1;
const e$1 = window,
  r$1 = e$1.trustedTypes,
  h = r$1 ? r$1.emptyScript : "",
  o$1 = e$1.reactiveElementPolyfillSupport,
  n$1 = {
    toAttribute(t, i) {
      switch (i) {
        case Boolean:
          t = t ? h : null;
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
  a = (t, i) => i !== t && (i == i || t == t),
  l = {
    attribute: !0,
    type: String,
    converter: n$1,
    reflect: !1,
    hasChanged: a
  };
class d extends HTMLElement {
  constructor() {
    super(), this._$Ei = new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var i;
    this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const e = this._$Ep(s, i);
      void 0 !== e && (this._$Ev.set(e, s), t.push(e));
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
        const r = this[t];
        this[i] = e, this.requestUpdate(t, r, s);
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
    if (t.finalize(), void 0 !== t.h && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map(), this.hasOwnProperty("properties")) {
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
      for (const i of e) s.unshift(c(i));
    } else void 0 !== i && s.push(c(i));
    return s;
  }
  static _$Ep(t, i) {
    const s = i.attribute;
    return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach(t => t(this));
  }
  addController(t) {
    var i, s;
    (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }
  removeController(t) {
    var i;
    null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var t;
    const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return S(s, this.constructor.elementStyles), s;
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
    });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    null === (t = this._$ES) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }
  _$EO(t, i, s = l) {
    var e;
    const r = this.constructor._$Ep(t, s);
    if (void 0 !== r && !0 === s.reflect) {
      const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n$1).toAttribute(i, s.type);
      this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
    }
  }
  _$AK(t, i) {
    var s;
    const e = this.constructor,
      r = e._$Ev.get(t);
    if (void 0 !== r && this._$El !== r) {
      const t = e.getPropertyOptions(r),
        h = "function" == typeof t.converter ? {
          fromAttribute: t.converter
        } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : n$1;
      this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
    }
  }
  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i) => this[i] = t), this._$Ei = void 0);
    let i = !1;
    const s = this._$AL;
    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
        var i;
        return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
      }), this.update(s)) : this._$Ek();
    } catch (t) {
      throw i = !1, this._$Ek(), t;
    }
    i && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    var i;
    null === (i = this._$ES) || void 0 === i || i.forEach(t => {
      var i;
      return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._$EC && (this._$EC.forEach((t, i) => this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {}
  firstUpdated(t) {}
}
d.finalized = !0, d.elementProperties = new Map(), d.elementStyles = [], d.shadowRootOptions = {
  mode: "open"
}, null == o$1 || o$1({
  ReactiveElement: d
}), (null !== (s$1 = e$1.reactiveElementVersions) && void 0 !== s$1 ? s$1 : e$1.reactiveElementVersions = []).push("1.6.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;
const i$1 = window,
  s$2 = i$1.trustedTypes,
  e$2 = s$2 ? s$2.createPolicy("lit-html", {
    createHTML: t => t
  }) : void 0,
  o$2 = "$lit$",
  n$2 = `lit$${(Math.random() + "").slice(9)}$`,
  l$1 = "?" + n$2,
  h$1 = `<${l$1}>`,
  r$2 = document,
  u = () => r$2.createComment(""),
  d$1 = t => null === t || "object" != typeof t && "function" != typeof t,
  c$1 = Array.isArray,
  v = t => c$1(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]),
  a$1 = "[ \t\n\f\r]",
  f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  _ = /-->/g,
  m = />/g,
  p = RegExp(`>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
  g = /'/g,
  $ = /"/g,
  y = /^(?:script|style|textarea|title)$/i,
  w = t => (i, ...s) => ({
    _$litType$: t,
    strings: i,
    values: s
  }),
  x = w(1),
  T = Symbol.for("lit-noChange"),
  A = Symbol.for("lit-nothing"),
  E = new WeakMap(),
  C = r$2.createTreeWalker(r$2, 129, null, !1);
function P(t, i) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e$2 ? e$2.createHTML(i) : i;
}
const V = (t, i) => {
  const s = t.length - 1,
    e = [];
  let l,
    r = 2 === i ? "<svg>" : "",
    u = f;
  for (let i = 0; i < s; i++) {
    const s = t[i];
    let d,
      c,
      v = -1,
      a = 0;
    for (; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);) a = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = p) : void 0 !== c[3] && (u = p) : u === p ? ">" === c[0] ? (u = null != l ? l : f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? p : '"' === c[3] ? $ : g) : u === $ || u === g ? u = p : u === _ || u === m ? u = f : (u = p, l = void 0);
    const w = u === p && t[i + 1].startsWith("/>") ? " " : "";
    r += u === f ? s + h$1 : v >= 0 ? (e.push(d), s.slice(0, v) + o$2 + s.slice(v) + n$2 + w) : s + n$2 + (-2 === v ? (e.push(void 0), i) : w);
  }
  return [P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")), e];
};
class N {
  constructor({
    strings: t,
    _$litType$: i
  }, e) {
    let h;
    this.parts = [];
    let r = 0,
      d = 0;
    const c = t.length - 1,
      v = this.parts,
      [a, f] = V(t, i);
    if (this.el = N.createElement(a, e), C.currentNode = this.el.content, 2 === i) {
      const t = this.el.content,
        i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }
    for (; null !== (h = C.nextNode()) && v.length < c;) {
      if (1 === h.nodeType) {
        if (h.hasAttributes()) {
          const t = [];
          for (const i of h.getAttributeNames()) if (i.endsWith(o$2) || i.startsWith(n$2)) {
            const s = f[d++];
            if (t.push(i), void 0 !== s) {
              const t = h.getAttribute(s.toLowerCase() + o$2).split(n$2),
                i = /([.?@])?(.*)/.exec(s);
              v.push({
                type: 1,
                index: r,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? H : "?" === i[1] ? L : "@" === i[1] ? z : k
              });
            } else v.push({
              type: 6,
              index: r
            });
          }
          for (const i of t) h.removeAttribute(i);
        }
        if (y.test(h.tagName)) {
          const t = h.textContent.split(n$2),
            i = t.length - 1;
          if (i > 0) {
            h.textContent = s$2 ? s$2.emptyScript : "";
            for (let s = 0; s < i; s++) h.append(t[s], u()), C.nextNode(), v.push({
              type: 2,
              index: ++r
            });
            h.append(t[i], u());
          }
        }
      } else if (8 === h.nodeType) if (h.data === l$1) v.push({
        type: 2,
        index: r
      });else {
        let t = -1;
        for (; -1 !== (t = h.data.indexOf(n$2, t + 1));) v.push({
          type: 7,
          index: r
        }), t += n$2.length - 1;
      }
      r++;
    }
  }
  static createElement(t, i) {
    const s = r$2.createElement("template");
    return s.innerHTML = t, s;
  }
}
function S$1(t, i, s = t, e) {
  var o, n, l, h;
  if (i === T) return i;
  let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
  const u = d$1(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = S$1(t, r._$AS(t, i.values), r, e)), i;
}
class M {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var i;
    const {
        el: {
          content: s
        },
        parts: e
      } = this._$AD,
      o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : r$2).importNode(s, !0);
    C.currentNode = o;
    let n = C.nextNode(),
      l = 0,
      h = 0,
      u = e[0];
    for (; void 0 !== u;) {
      if (l === u.index) {
        let i;
        2 === u.type ? i = new R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new Z(n, this, t)), this._$AV.push(i), u = e[++h];
      }
      l !== (null == u ? void 0 : u.index) && (n = C.nextNode(), l++);
    }
    return C.currentNode = r$2, o;
  }
  v(t) {
    let i = 0;
    for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
class R {
  constructor(t, i, s, e) {
    var o;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }
  get _$AU() {
    var t, i;
    return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = S$1(this, t, i), d$1(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : v(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== A && d$1(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r$2.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var i;
    const {
        values: s,
        _$litType$: e
      } = t,
      o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = N.createElement(P(e.h, e.h[0]), this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);else {
      const t = new M(o, this),
        i = t.u(this.options);
      t.v(s), this.$(i), this._$AH = t;
    }
  }
  _$AC(t) {
    let i = E.get(t.strings);
    return void 0 === i && E.set(t.strings, i = new N(t)), i;
  }
  T(t) {
    c$1(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const o of t) e === i.length ? i.push(s = new R(this.k(u()), this.k(u()), this, this.options)) : s = i[e], s._$AI(o), e++;
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
    void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }
}
class k {
  constructor(t, i, s, e, o) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = A;
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
    if (void 0 === o) t = S$1(this, t, i, 0), n = !d$1(t) || t !== this._$AH && t !== T, n && (this._$AH = t);else {
      const e = t;
      let l, h;
      for (t = o[0], l = 0; l < o.length - 1; l++) h = S$1(this, e[s + l], i, l), h === T && (h = this._$AH[l]), n || (n = !d$1(h) || h !== this._$AH[l]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
    }
    n && !e && this.j(t);
  }
  j(t) {
    t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }
}
class H extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === A ? void 0 : t;
  }
}
const I = s$2 ? s$2.emptyScript : "";
class L extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
}
class z extends k {
  constructor(t, i, s, e, o) {
    super(t, i, s, e, o), this.type = 5;
  }
  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = S$1(this, t, i, 0)) && void 0 !== s ? s : A) === T) return;
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
class Z {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    S$1(this, t);
  }
}
const B = i$1.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t$1 = i$1.litHtmlVersions) && void 0 !== t$1 ? t$1 : i$1.litHtmlVersions = []).push("2.8.0");
const D = (t, i, s) => {
  var e, o;
  const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let l = n._$litPart$;
  if (void 0 === l) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    n._$litPart$ = l = new R(i.insertBefore(u(), t), t, void 0, null != s ? s : {});
  }
  return l._$AI(t), l;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$2, o$3;
class s$3 extends d {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = D(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
  }
  render() {
    return T;
  }
}
s$3.finalized = !0, s$3._$litElement$ = !0, null === (l$2 = globalThis.litElementHydrateSupport) || void 0 === l$2 || l$2.call(globalThis, {
  LitElement: s$3
});
const n$3 = globalThis.litElementPolyfillSupport;
null == n$3 || n$3({
  LitElement: s$3
});
(null !== (o$3 = globalThis.litElementVersions) && void 0 !== o$3 ? o$3 : globalThis.litElementVersions = []).push("3.3.0");

export { s$3 as LitElement, i as css, x as html };
