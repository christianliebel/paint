/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = e => n => "function" == typeof n ? ((e, n) => (customElements.define(e, n), n))(e, n) : ((e, n) => {
  const {
    kind: t,
    elements: s
  } = n;
  return {
    kind: t,
    elements: s,
    finisher(n) {
      customElements.define(e, n);
    }
  };
})(e, n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = (i, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
  ...e,
  finisher(n) {
    n.createProperty(e.key, i);
  }
} : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  originalKey: e.key,
  initializer() {
    "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
  },
  finisher(n) {
    n.createProperty(e.key, i);
  }
};
function e$1(e) {
  return (n, t) => void 0 !== t ? ((i, e, n) => {
    e.constructor.createProperty(n, i);
  })(e, n, t) : i(e, n);
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t(t) {
  return e$1({
    ...t,
    state: !0
  });
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = ({
    finisher: e,
    descriptor: t
  }) => (o, n) => {
    var r;
    if (void 0 === n) {
      const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key,
        i = null != t ? {
          kind: "method",
          placement: "prototype",
          key: n,
          descriptor: t(o.key)
        } : {
          ...o,
          key: n
        };
      return null != e && (i.finisher = function (t) {
        e(t, n);
      }), i;
    }
    {
      const r = o.constructor;
      void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
    }
  };

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function i$1(i, n) {
  return o({
    descriptor: o => {
      const t = {
        get() {
          var o, n;
          return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
        },
        enumerable: !0,
        configurable: !0
      };
      if (n) {
        const n = "symbol" == typeof o ? Symbol() : "__" + o;
        t.get = function () {
          var o, t;
          return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
        };
      }
      return t;
    }
  });
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
const e$2 = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o, n) => o.assignedElements(n) : (o, n) => o.assignedNodes(n).filter(o => o.nodeType === Node.ELEMENT_NODE);

export { e as customElement, e$1 as property, i$1 as query, t as state };
