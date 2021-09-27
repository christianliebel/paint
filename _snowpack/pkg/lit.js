/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      e = Symbol(),
      n = new Map();

class s {
  constructor(t, n) {
    if (this._$cssResult$ = !0, n !== e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  get styleSheet() {
    let e = n.get(this.cssText);
    return t && void 0 === e && (n.set(this.cssText, e = new CSSStyleSheet()), e.replaceSync(this.cssText)), e;
  }

  toString() {
    return this.cssText;
  }

}

const o = t => new s("string" == typeof t ? t : t + "", e),
      r = (t, ...n) => {
  const o = 1 === t.length ? t[0] : n.reduce((e, n, s) => e + (t => {
    if (!0 === t._$cssResult$) return t.cssText;
    if ("number" == typeof t) return t;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[s + 1], t[0]);
  return new s(o, e);
},
      i = (e, n) => {
  t ? e.adoptedStyleSheets = n.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach(t => {
    const n = document.createElement("style"),
          s = window.litNonce;
    void 0 !== s && n.setAttribute("nonce", s), n.textContent = t.cssText, e.appendChild(n);
  });
},
      S = t ? t => t : t => t instanceof CSSStyleSheet ? (t => {
  let e = "";

  for (const n of t.cssRules) e += n.cssText;

  return o(e);
})(t) : t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var s$1, e$1;

const r$1 = {
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
      h = (t, i) => i !== t && (i == i || t == t),
      o$1 = {
  attribute: !0,
  type: String,
  converter: r$1,
  reflect: !1,
  hasChanged: h
};

class n$1 extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o();
  }

  static addInitializer(t) {
    var i;
    null !== (i = this.l) && void 0 !== i || (this.l = []), this.l.push(t);
  }

  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const e = this._$Eh(s, i);

      void 0 !== e && (this._$Eu.set(e, s), t.push(e));
    }), t;
  }

  static createProperty(t, i = o$1) {
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
    return this.elementProperties.get(t) || o$1;
  }

  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);

    if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
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

      for (const i of e) s.unshift(S(i));
    } else void 0 !== i && s.push(S(i));

    return s;
  }

  static _$Eh(t, i) {
    const s = i.attribute;
    return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
  }

  o() {
    var t;
    this._$Ev = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$Ep(), this.requestUpdate(), null === (t = this.constructor.l) || void 0 === t || t.forEach(t => t(this));
  }

  addController(t) {
    var i, s;
    (null !== (i = this._$Em) && void 0 !== i ? i : this._$Em = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }

  removeController(t) {
    var i;
    null === (i = this._$Em) || void 0 === i || i.splice(this._$Em.indexOf(t) >>> 0, 1);
  }

  _$Ep() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Et.set(i, this[i]), delete this[i]);
    });
  }

  createRenderRoot() {
    var t;
    const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return i(s, this.constructor.elementStyles), s;
  }

  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$Em) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
    });
  }

  enableUpdating(t) {}

  disconnectedCallback() {
    var t;
    null === (t = this._$Em) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
    });
  }

  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }

  _$Eg(t, i, s = o$1) {
    var e, h;

    const n = this.constructor._$Eh(t, s);

    if (void 0 !== n && !0 === s.reflect) {
      const o = (null !== (h = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== h ? h : r$1.toAttribute)(i, s.type);
      this._$Ei = t, null == o ? this.removeAttribute(n) : this.setAttribute(n, o), this._$Ei = null;
    }
  }

  _$AK(t, i) {
    var s, e, h;

    const o = this.constructor,
          n = o._$Eu.get(t);

    if (void 0 !== n && this._$Ei !== n) {
      const t = o.getPropertyOptions(n),
            l = t.converter,
            a = null !== (h = null !== (e = null === (s = l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof l ? l : null) && void 0 !== h ? h : r$1.fromAttribute;
      this._$Ei = n, this[n] = a(i, t.type), this._$Ei = null;
    }
  }

  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || h)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$Ei !== t && (void 0 === this._$ES && (this._$ES = new Map()), this._$ES.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$Ev = this._$EC());
  }

  async _$EC() {
    this.isUpdatePending = !0;

    try {
      await this._$Ev;
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
    this.hasUpdated, this._$Et && (this._$Et.forEach((t, i) => this[i] = t), this._$Et = void 0);
    let i = !1;
    const s = this._$AL;

    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$Em) || void 0 === t || t.forEach(t => {
        var i;
        return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
      }), this.update(s)) : this._$ET();
    } catch (t) {
      throw i = !1, this._$ET(), t;
    }

    i && this._$AE(s);
  }

  willUpdate(t) {}

  _$AE(t) {
    var i;
    null === (i = this._$Em) || void 0 === i || i.forEach(t => {
      var i;
      return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }

  _$ET() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }

  get updateComplete() {
    return this.getUpdateComplete();
  }

  getUpdateComplete() {
    return this._$Ev;
  }

  shouldUpdate(t) {
    return !0;
  }

  update(t) {
    void 0 !== this._$ES && (this._$ES.forEach((t, i) => this._$Eg(i, this[i], t)), this._$ES = void 0), this._$ET();
  }

  updated(t) {}

  firstUpdated(t) {}

}

n$1.finalized = !0, n$1.elementProperties = new Map(), n$1.elementStyles = [], n$1.shadowRootOptions = {
  mode: "open"
}, null === (s$1 = globalThis.reactiveElementPolyfillSupport) || void 0 === s$1 || s$1.call(globalThis, {
  ReactiveElement: n$1
}), (null !== (e$1 = globalThis.reactiveElementVersions) && void 0 !== e$1 ? e$1 : globalThis.reactiveElementVersions = []).push("1.0.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1, i$1;

const s$2 = globalThis.trustedTypes,
      e$2 = s$2 ? s$2.createPolicy("lit-html", {
  createHTML: t => t
}) : void 0,
      o$2 = `lit$${(Math.random() + "").slice(9)}$`,
      n$2 = "?" + o$2,
      l = `<${n$2}>`,
      h$1 = document,
      r$2 = (t = "") => h$1.createComment(t),
      d = t => null === t || "object" != typeof t && "function" != typeof t,
      u = Array.isArray,
      v = t => {
  var i;
  return u(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
      c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      a = /-->/g,
      f = />/g,
      _ = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      g = /'/g,
      m = /"/g,
      $ = /^(?:script|style|textarea)$/i,
      p = t => (i, ...s) => ({
  _$litType$: t,
  strings: i,
  values: s
}),
      y = p(1),
      T = Symbol.for("lit-noChange"),
      x = Symbol.for("lit-nothing"),
      w = new WeakMap(),
      A = (t, i, s) => {
  var e, o;
  const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let l = n._$litPart$;

  if (void 0 === l) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    n._$litPart$ = l = new S$1(i.insertBefore(r$2(), t), t, void 0, null != s ? s : {});
  }

  return l._$AI(t), l;
},
      C = h$1.createTreeWalker(h$1, 129, null, !1),
      P = (t, i) => {
  const s = t.length - 1,
        n = [];
  let h,
      r = 2 === i ? "<svg>" : "",
      d = c;

  for (let i = 0; i < s; i++) {
    const s = t[i];
    let e,
        u,
        v = -1,
        p = 0;

    for (; p < s.length && (d.lastIndex = p, u = d.exec(s), null !== u);) p = d.lastIndex, d === c ? "!--" === u[1] ? d = a : void 0 !== u[1] ? d = f : void 0 !== u[2] ? ($.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = _) : void 0 !== u[3] && (d = _) : d === _ ? ">" === u[0] ? (d = null != h ? h : c, v = -1) : void 0 === u[1] ? v = -2 : (v = d.lastIndex - u[2].length, e = u[1], d = void 0 === u[3] ? _ : '"' === u[3] ? m : g) : d === m || d === g ? d = _ : d === a || d === f ? d = c : (d = _, h = void 0);

    const y = d === _ && t[i + 1].startsWith("/>") ? " " : "";
    r += d === c ? s + l : v >= 0 ? (n.push(e), s.slice(0, v) + "$lit$" + s.slice(v) + o$2 + y) : s + o$2 + (-2 === v ? (n.push(void 0), i) : y);
  }

  const u = r + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
  return [void 0 !== e$2 ? e$2.createHTML(u) : u, n];
};

class V {
  constructor({
    strings: t,
    _$litType$: i
  }, e) {
    let l;
    this.parts = [];
    let h = 0,
        d = 0;
    const u = t.length - 1,
          v = this.parts,
          [c, a] = P(t, i);

    if (this.el = V.createElement(c, e), C.currentNode = this.el.content, 2 === i) {
      const t = this.el.content,
            i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }

    for (; null !== (l = C.nextNode()) && v.length < u;) {
      if (1 === l.nodeType) {
        if (l.hasAttributes()) {
          const t = [];

          for (const i of l.getAttributeNames()) if (i.endsWith("$lit$") || i.startsWith(o$2)) {
            const s = a[d++];

            if (t.push(i), void 0 !== s) {
              const t = l.getAttribute(s.toLowerCase() + "$lit$").split(o$2),
                    i = /([.?@])?(.*)/.exec(s);
              v.push({
                type: 1,
                index: h,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? k : "?" === i[1] ? H : "@" === i[1] ? I : M
              });
            } else v.push({
              type: 6,
              index: h
            });
          }

          for (const i of t) l.removeAttribute(i);
        }

        if ($.test(l.tagName)) {
          const t = l.textContent.split(o$2),
                i = t.length - 1;

          if (i > 0) {
            l.textContent = s$2 ? s$2.emptyScript : "";

            for (let s = 0; s < i; s++) l.append(t[s], r$2()), C.nextNode(), v.push({
              type: 2,
              index: ++h
            });

            l.append(t[i], r$2());
          }
        }
      } else if (8 === l.nodeType) if (l.data === n$2) v.push({
        type: 2,
        index: h
      });else {
        let t = -1;

        for (; -1 !== (t = l.data.indexOf(o$2, t + 1));) v.push({
          type: 7,
          index: h
        }), t += o$2.length - 1;
      }

      h++;
    }
  }

  static createElement(t, i) {
    const s = h$1.createElement("template");
    return s.innerHTML = t, s;
  }

}

function E(t, i, s = t, e) {
  var o, n, l, h;
  if (i === T) return i;
  let r = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu;
  const u = d(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = r : s._$Cu = r), void 0 !== r && (i = E(t, r._$AS(t, i.values), r, e)), i;
}

class N {
  constructor(t, i) {
    this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }

  get parentNode() {
    return this._$AM.parentNode;
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
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : h$1).importNode(s, !0);
    C.currentNode = o;
    let n = C.nextNode(),
        l = 0,
        r = 0,
        d = e[0];

    for (; void 0 !== d;) {
      if (l === d.index) {
        let i;
        2 === d.type ? i = new S$1(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new L(n, this, t)), this.v.push(i), d = e[++r];
      }

      l !== (null == d ? void 0 : d.index) && (n = C.nextNode(), l++);
    }

    return o;
  }

  m(t) {
    let i = 0;

    for (const s of this.v) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }

}

class S$1 {
  constructor(t, i, s, e) {
    var o;
    this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }

  get _$AU() {
    var t, i;
    return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cg;
  }

  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
  }

  get startNode() {
    return this._$AA;
  }

  get endNode() {
    return this._$AB;
  }

  _$AI(t, i = this) {
    t = E(this, t, i), d(t) ? t === x || null == t || "" === t ? (this._$AH !== x && this._$AR(), this._$AH = x) : t !== this._$AH && t !== T && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.S(t) : v(t) ? this.M(t) : this.$(t);
  }

  A(t, i = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, i);
  }

  S(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.A(t));
  }

  $(t) {
    this._$AH !== x && d(this._$AH) ? this._$AA.nextSibling.data = t : this.S(h$1.createTextNode(t)), this._$AH = t;
  }

  T(t) {
    var i;
    const {
      values: s,
      _$litType$: e
    } = t,
          o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = V.createElement(e.h, this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);else {
      const t = new N(o, this),
            i = t.p(this.options);
      t.m(s), this.S(i), this._$AH = t;
    }
  }

  _$AC(t) {
    let i = w.get(t.strings);
    return void 0 === i && w.set(t.strings, i = new V(t)), i;
  }

  M(t) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
        e = 0;

    for (const o of t) e === i.length ? i.push(s = new S$1(this.A(r$2()), this.A(r$2()), this, this.options)) : s = i[e], s._$AI(o), e++;

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
    void 0 === this._$AM && (this._$Cg = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }

}

class M {
  constructor(t, i, s, e, o) {
    this.type = 1, this._$AH = x, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = x;
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
    if (void 0 === o) t = E(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== T, n && (this._$AH = t);else {
      const e = t;
      let l, h;

      for (t = o[0], l = 0; l < o.length - 1; l++) h = E(this, e[s + l], i, l), h === T && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === x ? t = x : t !== x && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
    }
    n && !e && this.k(t);
  }

  k(t) {
    t === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }

}

class k extends M {
  constructor() {
    super(...arguments), this.type = 3;
  }

  k(t) {
    this.element[this.name] = t === x ? void 0 : t;
  }

}

class H extends M {
  constructor() {
    super(...arguments), this.type = 4;
  }

  k(t) {
    t && t !== x ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }

}

class I extends M {
  constructor(t, i, s, e, o) {
    super(t, i, s, e, o), this.type = 5;
  }

  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = E(this, t, i, 0)) && void 0 !== s ? s : x) === T) return;
    const e = this._$AH,
          o = t === x && e !== x || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          n = t !== x && (e === x || o);
    o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }

  handleEvent(t) {
    var i, s;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
  }

}

class L {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }

  get _$AU() {
    return this._$AM._$AU;
  }

  _$AI(t) {
    E(this, t);
  }

}
null === (t$1 = globalThis.litHtmlPolyfillSupport) || void 0 === t$1 || t$1.call(globalThis, V, S$1), (null !== (i$1 = globalThis.litHtmlVersions) && void 0 !== i$1 ? i$1 : globalThis.litHtmlVersions = []).push("2.0.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var l$1, o$3, r$3;

class n$3 extends n$1 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Dt = void 0;
  }

  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
  }

  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Dt = A(i, this.renderRoot, this.renderOptions);
  }

  connectedCallback() {
    var t;
    super.connectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
  }

  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
  }

  render() {
    return T;
  }

}

n$3.finalized = !0, n$3._$litElement$ = !0, null === (l$1 = globalThis.litElementHydrateSupport) || void 0 === l$1 || l$1.call(globalThis, {
  LitElement: n$3
}), null === (o$3 = globalThis.litElementPolyfillSupport) || void 0 === o$3 || o$3.call(globalThis, {
  LitElement: n$3
});
(null !== (r$3 = globalThis.litElementVersions) && void 0 !== r$3 ? r$3 : globalThis.litElementVersions = []).push("3.0.0");

export { n$3 as LitElement, r as css, y as html };
