var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=globalThis,n=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap,a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=i.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(t,e))}return e}toString(){return this.cssText}},o=e=>new a(typeof e==`string`?e:e+``,void 0,r),s=(e,...t)=>new a(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,r),c=(e,r)=>{if(n)e.adoptedStyleSheets=r.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of r){let r=document.createElement(`style`),i=t.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=n.cssText,e.appendChild(r)}},l=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return o(t)})(e):e,{is:u,defineProperty:d,getOwnPropertyDescriptor:f,getOwnPropertyNames:p,getOwnPropertySymbols:m,getPrototypeOf:h}=Object,g=globalThis,_=g.trustedTypes,v=_?_.emptyScript:``,y=g.reactiveElementPolyfillSupport,b=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},S=(e,t)=>!u(e,t),C={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:S};Symbol.metadata??=Symbol(`metadata`),g.litPropertyMetadata??=new WeakMap;var w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C}static _$Ei(){if(this.hasOwnProperty(b(`elementProperties`)))return;let e=h(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b(`properties`))){let e=this.properties,t=[...p(e),...m(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(l(e))}else e!==void 0&&t.push(l(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?x:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?x:e.converter;this._$Em=r,this[r]=i.fromAttribute(t,e.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??S)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:`open`},w[b(`elementProperties`)]=new Map,w[b(`finalized`)]=new Map,y?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push(`2.1.0`);var T=globalThis,E=T.trustedTypes,D=E?E.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,O=`$lit$`,k=`lit$${Math.random().toFixed(9).slice(2)}$`,A=`?`+k,j=`<${A}>`,M=document,N=()=>M.createComment(``),P=e=>e===null||typeof e!=`object`&&typeof e!=`function`,F=Array.isArray,I=e=>F(e)||typeof e?.[Symbol.iterator]==`function`,ee=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,te=/-->/g,ne=/>/g,re=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ie=/'/g,ae=/"/g,oe=/^(?:script|style|textarea|title)$/i,R=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),se=Symbol.for(`lit-noChange`),z=Symbol.for(`lit-nothing`),ce=new WeakMap,le=M.createTreeWalker(M,129);function ue(e,t){if(!F(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return D===void 0?t:D.createHTML(t)}var de=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=L;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===L?c[1]===`!--`?o=te:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=re):(oe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=re):o=ne:o===re?c[0]===`>`?(o=i??L,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?re:c[3]===`"`?ae:ie):o===ae||o===ie?o=re:o===te||o===ne?o=L:(o=re,i=void 0);let d=o===re&&e[t+1].startsWith(`/>`)?` `:``;a+=o===L?n+j:l>=0?(r.push(s),n.slice(0,l)+O+n.slice(l)+k+d):n+k+(l===-2?t:d)}return[ue(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},fe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=de(t,n);if(this.el=e.createElement(l,r),le.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=le.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(O)){let t=u[o++],n=i.getAttribute(e).split(k),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?_e:r[1]===`?`?ve:r[1]===`@`?ye:ge}),i.removeAttribute(e)}else e.startsWith(k)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(oe.test(i.tagName)){let e=i.textContent.split(k),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],N()),le.nextNode(),c.push({type:2,index:++a});i.append(e[t],N())}}}else if(i.nodeType===8)if(i.data===A)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(k,e+1))!==-1;)c.push({type:7,index:a}),e+=k.length-1}a++}}static createElement(e,t){let n=M.createElement(`template`);return n.innerHTML=e,n}};function pe(e,t,n=e,r){if(t===se)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=P(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=pe(e,i._$AS(e,t.values),i,r)),t}var me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??M).importNode(t,!0);le.currentNode=r;let i=le.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new he(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new be(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=le.nextNode(),a++)}return le.currentNode=M,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},he=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),P(e)?e===z||e==null||e===``?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==se&&this._(e):e._$litType$===void 0?e.nodeType===void 0?I(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=fe.createElement(ue(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new me(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ce.get(e.strings);return t===void 0&&ce.set(e.strings,t=new fe(e)),t}k(t){F(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(N()),this.O(N()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ge=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=pe(this,e,t,0),a=!P(e)||e!==this._$AH&&e!==se,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=pe(this,r[n+o],t,o),s===se&&(s=this._$AH[o]),a||=!P(s)||s!==this._$AH[o],s===z?e=z:e!==z&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},_e=class extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}},ve=class extends ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}},ye=class extends ge{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??z)===se)return;let n=this._$AH,r=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==z&&(n===z||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},be=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}},xe=T.litHtmlPolyfillSupport;xe?.(fe,he),(T.litHtmlVersions??=[]).push(`3.3.0`);var Se=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new he(t.insertBefore(N(),e),e,void 0,n??{})}return i._$AI(e),i},Ce=globalThis,B=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Se(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return se}};B._$litElement$=!0,B.finalized=!0,Ce.litElementHydrateSupport?.({LitElement:B});var we=Ce.litElementPolyfillSupport;we?.({LitElement:B}),(Ce.litElementVersions??=[]).push(`4.2.0`);var V=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},Te={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:S},Ee=(e=Te,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function H(e){return(t,n)=>typeof n==`object`?Ee(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function U(e){return H({...e,state:!0,attribute:!1})}var De=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function Oe(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return De(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return De(n,r,{get(){return a(this)}})}}function W(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var ke=class extends B{static get styles(){return s`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      .content {
        margin: 11px;
        display: grid;
        grid-template-columns: 67px 253px;
      }

      .info {
        margin-top: 6px;
      }

      .storage {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
      }

      paint-button {
        margin-right: 1px;
        float: right;
      }

      a {
        color: var(--button-text);
      }
    `}async firstUpdated(e){if(super.firstUpdated(e),`storage`in navigator){let{usage:e,quota:t}=await navigator.storage.estimate();this.totalFreeMemory=t,this.freeMemoryPercentage=100-(e??1)/(t??1)*100}}render(){return R`
      <paint-window caption="About Paint" close>
        <div class="content">
          <img src="assets/icon.png" width="32" height="32" alt="" />
          <div class="info">
            Paint<br />
            <a
              href="https://github.com/christianliebel/paint"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/christianliebel/paint</a
            ><br />
            <a
              href="3rdpartylicenses.txt"
              target="_blank"
              rel="noopener noreferrer"
              >Made possible by third-party software</a
            ><br />
            <br />
            <br />
            This project is licensed under:<br />
            Apache 2.0
            <br />
            <br />
            <br />
            <paint-ruler></paint-ruler>
            <br />
            <div class="storage">
              <span>Storage Available to Paint:</span>
              <span>${this.getFreeMemoryInKB()} KB</span>
              <span>System Resources:</span>
              <span>${this.getFreeMemoryPercentage()}% Free</span>
            </div>
            <br />
            <paint-button tabindex="0" @click="${this.onOK}">OK</paint-button>
          </div>
        </div>
      </paint-window>
    `}getFreeMemoryInKB(){if(this.totalFreeMemory===void 0)return`???`;let e=Math.round(this.totalFreeMemory/1024);return Intl.NumberFormat(`en-US`).format(e)}getFreeMemoryPercentage(){return this.freeMemoryPercentage===void 0?`???`:Math.round(this.freeMemoryPercentage)}onOK(){this.dispatchEvent(new CustomEvent(`close`))}};W([H({attribute:!1})],ke.prototype,`totalFreeMemory`,void 0),W([H({attribute:!1})],ke.prototype,`freeMemoryPercentage`,void 0),ke=W([V(`paint-dialog-about`)],ke);function Ae(e,t={}){return new Promise(n=>{let r=document.querySelector(`paint-app`)?.shadowRoot,i=document.createElement(e);Object.entries(t).forEach(([e,t])=>i[e]=t),i.addEventListener(`close`,e=>{r?.removeChild(i),n(e.detail)}),r?.appendChild(i)})}function je(e,t=null,n=``,r=`ok`){return Ae(`paint-dialog-message-box`,{prompt:e,icon:t,title:n,layout:r})}function G(e,t){let n=t?e.indexOf(t):-1;return R`${e.substring(0,n)}<span class="mnemonic"
      >${t}</span
    >${e.substring(n+1)}`}var Me=class extends B{constructor(...e){super(...e),this.width=``,this.height=``,this.unit=`pels`,this.color=`colors`,this.units=[{value:`inches`,label:`Inches`,mnemonic:`I`},{value:`cm`,label:`Cm`,mnemonic:`m`},{value:`pels`,label:`Pels`,mnemonic:`P`}],this.colors=[{value:`black-and-white`,label:`Black and white`,mnemonic:`B`},{value:`colors`,label:`Colors`,mnemonic:`l`}]}static get styles(){return s`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      paint-window {
        width: 306px;
      }

      div.container {
        display: flex;
        margin: 11px 12px;
      }

      div.container > form {
        flex: 1;
      }

      div.container > form > div.dimensions {
        display: grid;
        grid-template-columns: 44px 45px 47px 50px;
        align-items: center;
      }

      div.container > form > div.dimensions > span {
        padding-left: 2px; /* 9px; */
      }

      div.container > form > div.dimensions > input[type='text'] {
        box-sizing: border-box;
        width: 100%;
        height: 23px;
        outline: none;
      }

      div.container > form > fieldset {
        margin: 8px 0 1px 0;
      }

      div.container > form > fieldset input[type='radio'] {
        margin: 0;
      }

      div.container > div.buttons {
        display: flex;
        flex-direction: column;
        margin-left: 12px;
      }

      div.container > div.buttons paint-button + paint-button {
        margin-top: 5px;
      }

      div.container > div.buttons paint-button:last-of-type {
        margin-top: 6px;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `}render(){return R` <paint-window caption="Attributes" help close>
      <div class="container">
        <form>
          <div class="dimensions">
            <span>${G(`Width:`,`W`)}</span>
            <input
              type="text"
              .value="${this.width}"
              @change="${e=>this.width=e.target.value}"
            />
            <span>${G(`Height:`,`H`)}</span>
            <input
              type="text"
              .value="${this.height}"
              @change="${e=>this.height=e.target.value}"
            />
          </div>

          <fieldset>
            <legend>Units</legend>
            ${this.units.map(({value:e,label:t,mnemonic:n})=>R`
                <label
                  ><input
                    type="radio"
                    name="unit"
                    value="${e}"
                    .checked="${this.unit===e}"
                    @change="${()=>this.unit=e}"
                    disabled
                  />
                  ${G(t,n)}</label
                >
              `)}
          </fieldset>

          <fieldset>
            <legend>Colors</legend>
            ${this.colors.map(({value:e,label:t,mnemonic:n})=>R`
                <label
                  ><input
                    type="radio"
                    name="color"
                    value="${e}"
                    .checked="${this.color===e}"
                    @change="${()=>this.color=e}"
                    disabled
                  />
                  ${G(t,n)}</label
                >
              `)}
          </fieldset>
        </form>

        <div class="buttons">
          <paint-button @click="${this.onOk}" tabindex="0">OK</paint-button>
          <paint-button @click="${this.onCancel}" tabindex="0"
            >Cancel
          </paint-button>
          <paint-button @click="${this.onDefault}" tabindex="0"
            >${G(`Default`,`D`)}
          </paint-button>
        </div>
      </div>
    </paint-window>`}async onOk(){let{width:e,height:t,unit:n,color:r}=this;if(e.length>5||t.length>5){await je(`Please enter no more than 5 characters.`,`warning`,`Paint`);return}this.dispatchEvent(new CustomEvent(`close`,{detail:{width:e,height:t,unit:n,color:r}}))}onCancel(){this.dispatchEvent(new CustomEvent(`close`))}onDefault(){this.width=screen.width.toString(),this.height=screen.height.toString(),this.unit=`pels`,this.color=`colors`}};W([U()],Me.prototype,`width`,void 0),W([U()],Me.prototype,`height`,void 0),W([U()],Me.prototype,`unit`,void 0),W([U()],Me.prototype,`color`,void 0),Me=W([V(`paint-dialog-attributes`)],Me);var Ne=[1,2,4,6,8],Pe=class extends B{constructor(...e){super(...e),this.currentMagnifierSize=1,this.selectedMagnifierSize=1}static get styles(){return s`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      paint-window {
        width: 306px;
      }

      div.container {
        display: flex;
        margin: 11px;
      }

      div.container > form {
        flex: 1;
      }

      div.container > form > div.current-level {
        display: flex;
        margin-bottom: 6px;
      }

      div.container > form > div.current-level > span.label {
        margin-left: 10px;
        width: 128px;
      }

      div.container > form > fieldset {
        margin: 0;
      }

      div.container > form > fieldset > div.zoom-levels {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-auto-flow: column;
        align-items: center;
      }

      div.container > form > fieldset label {
        margin: 7px 0;
      }

      div.container > form > fieldset label input[type='radio'] {
        margin-left: 0;
        margin-right: 0;
      }

      div.container > div.buttons {
        display: flex;
        flex-direction: column;
        margin: 0 1px 0 11px;
      }

      div.container > div.buttons > paint-button {
        margin-bottom: 5px;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `}firstUpdated(e){super.firstUpdated(e),this.selectedMagnifierSize=this.currentMagnifierSize}render(){return R`
      <paint-window caption="Custom Zoom" help close>
        <div class="container">
          <form>
            <div class="current-level">
              <span class="label">Current zoom:</span>
              <span>${this.currentMagnifierSize*100}</span>
            </div>
            <fieldset>
              <legend>Zoom to</legend>
              <div class="zoom-levels">
                ${Ne.map(e=>R`
                    <label>
                      <input
                        type="radio"
                        name="zoom"
                        value="${e}"
                        @change="${()=>this.selectedMagnifierSize=e}"
                        .checked="${this.selectedMagnifierSize===e}"
                      />
                      ${G((e*100).toString(),e.toString())}%
                    </label>
                  `)}
              </div>
            </fieldset>
          </form>
          <div class="buttons">
            <paint-button @click="${()=>this.onOk()}" tabindex="0"
              >OK</paint-button
            >
            <paint-button @click="${()=>this.onCancel()}" tabindex="0"
              >Cancel
            </paint-button>
          </div>
        </div>
      </paint-window>
    `}onOk(){this.dispatchEvent(new CustomEvent(`close`,{detail:{magnifierSize:this.selectedMagnifierSize}}))}onCancel(){this.dispatchEvent(new CustomEvent(`close`))}};W([H({type:Number,attribute:!1})],Pe.prototype,`currentMagnifierSize`,void 0),W([U()],Pe.prototype,`selectedMagnifierSize`,void 0),Pe=W([V(`paint-dialog-custom-zoom`)],Pe);var Fe=class extends B{constructor(...e){super(...e),this.modes=[{value:`flip-horizontal`,text:`Flip horizontal`,mnemonic:`F`},{value:`flip-vertical`,text:`Flip vertical`,mnemonic:`v`},{value:`rotate`,text:`Rotate by angle`,mnemonic:`R`}],this.selectedMode=this.modes[0].value,this.degrees=[{value:90,mnemonic:`9`},{value:180,mnemonic:`1`},{value:270,mnemonic:`2`}],this.selectedDegree=this.degrees[0].value}static get styles(){return s`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      .content {
        display: flex;
        padding: 13px;
      }

      .options {
        width: 174px;
        display: flex;
        flex-direction: column;
      }

      .options input[name='degree'] {
        margin-left: 50px;
      }

      .buttons {
        width: 75px;
        display: flex;
        flex-direction: column;
        margin-left: 8px;
      }

      .buttons paint-button {
        margin-bottom: 5px;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `}render(){return R`
      <paint-window caption="Flip and Rotate" help close>
        <div class="content">
          <div>
            <fieldset>
              <legend>Flip and Rotate</legend>
              <div class="options">
                ${this.modes.map(e=>R`
                    <label
                      ><input
                        type="radio"
                        name="mode"
                        value="${e.value}"
                        @change="${()=>this.selectedMode=e.value}"
                        .checked="${e.value===this.selectedMode}"
                      />
                      ${G(e.text,e.mnemonic)}</label
                    >
                  `)}
                ${this.degrees.map(e=>R`
                    <label
                      ><input
                        type="radio"
                        name="degree"
                        value="${e.value}"
                        @change="${()=>this.selectedDegree=e.value}"
                        .checked="${e.value==this.selectedDegree}"
                        ?disabled="${this.selectedMode!==`rotate`}"
                      />
                      ${G(`${e.value}°`,e.mnemonic)}</label
                    >
                  `)}
              </div>
            </fieldset>
          </div>
          <div class="buttons">
            <paint-button @click="${()=>this.onOk()}" tabindex="0">
              OK
            </paint-button>
            <paint-button @click="${()=>this.onCancel()}" tabindex="0">
              Cancel
            </paint-button>
          </div>
        </div>
      </paint-window>
    `}getFlipRotateParams(){return this.selectedMode===`rotate`?{action:`rotate`,param:this.selectedDegree}:{action:`flip`,param:this.selectedMode===`flip-horizontal`?`horizontal`:`vertical`}}onOk(){this.dispatchEvent(new CustomEvent(`close`,{detail:this.getFlipRotateParams()}))}onCancel(){this.dispatchEvent(new CustomEvent(`close`))}};W([U()],Fe.prototype,`selectedMode`,void 0),W([U()],Fe.prototype,`selectedDegree`,void 0),Fe=W([V(`paint-dialog-flip-and-rotate`)],Fe);function Ie(e,t,n,r,i){let a=0,o=r,s=1,c=n*n,l=r*r,u=-(c/4+n%2+l),d=-(l/4+r%2+c),f=-(l/4+r%2),p=-n*o,m=2*l*a,h=-2*c*o,g=2*l,_=2*c;function v(){a++,m+=g,p+=m}function y(){o--,h+=_,p+=h}function b(e,t,n){for(let r=0;r<n;r++)i({x:e+r,y:t})}for(;o>=0&&a<=n;)p+l*a<=u||p+c*o<=f?(v(),s+=2):p-c*o>d?(b(e-a,t-o,s),o!=0&&b(e-a,t+o,s),y()):(b(e-a,t-o,s),o!=0&&b(e-a,t+o,s),v(),y(),s+=2);r==0&&b(e-n,t,2*n+1)}var Le=class{onPointerDown(e,t,n,r){n.context&&(n.context.fillStyle=r.stroke.value),this.currentPosition={x:e,y:t},this.spray(n),this.intervalHandle=setInterval(()=>this.spray(n),30)}spray({airbrushSize:e,context:t}){if(this.currentPosition&&t){let n=Math.floor(e/2),{x:r,y:i}=this.currentPosition,a=[];Ie(r,i,n,n,e=>a.push(e));for(let e=0;e<10;e++){let{x:e,y:n}=a[Math.round(Math.random()*(a.length-1))];t.fillRect(e,n,1,1)}}}onPointerMove(e,t,n){this.intervalHandle!==void 0&&(this.spray(n),this.currentPosition={x:e,y:t})}onPointerUp(){this.intervalHandle!==void 0&&(clearInterval(this.intervalHandle),this.intervalHandle=this.currentPosition=void 0)}};function K(e){e?.dispatchEvent(new CustomEvent(`drawing-context-changed`,{detail:{...e.drawingContext},bubbles:!0,composed:!0}))}var Re=class{onPointerDown(e,t,n){this.onPointerMove(e,t,n)}onPointerMove(e,t,n){n.context&&(n.previewColor=this.pickColor(e,t,n.context),K(n.element))}onPointerUp(e,t,n,r){n.context&&(n.previewColor=null,n.colors[r.stroke.key]=this.pickColor(e,t,n.context),n.previousEditingTool&&(n.tool=n.previousEditingTool),K(n.element))}pickColor(e,t,n){let[r,i,a]=n.getImageData(e,t,1,1).data;return`rgb(${r} ${i} ${a})`}},q=e(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t<`u`?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.bresenham={}))})(e,(function(e){function t(e,t,n,r,i){let a=Math.abs(n-e),o=e<n?1:-1,s=-Math.abs(r-t),c=t<r?1:-1,l=a+s,u;for(;;){if(i(e,t),u=2*l,u>=s){if(e===n)break;l+=s,e+=o}if(u<=a){if(t===r)break;l+=a,t+=c}}}function n(e,t,n,r,i){let a=e<n?1:-1,o=t<r?1:-1,s,c=Math.abs(n-e),l=Math.abs(r-t),u=c*c+l*l,d=u===0?1:1/Math.sqrt(u);for(c*=d,l*=d,u=c-l;;){if(i(e,t,Math.abs(u-(c+l))>>16),d=u,s=e,2*d>=-c){if(e===n)break;d+l<16711680&&i(e,t+o,d+l>>16),u-=l,e+=a}if(2*d<=l){if(t===r)break;c-d<16711680&&i(s+a,t,c-d>>16),u+=c,t+=o}}}function r(e,t,n,r,i,a){let o=Math.abs(n-e),s=e<n?1:-1,c=Math.abs(r-t),l=t<r?1:-1,u=o-c,d,f,p,m=o+c==0?1:Math.sqrt(o*o+c*c);for(i=(i+1)/2;;){if(a(e,t,Math.max(0,255*(Math.abs(u-o+c)/m-i+1))),d=u,f=e,2*d>=-o){for(d+=c,p=t;d<m*i&&(r!=p||o>c);d+=o)a(e,p+=l,Math.max(0,255*(Math.abs(d)/m-i+1)));if(e==n)break;d=u,u-=c,e+=s}if(2*d<=c){for(d=o-d;d<m*i&&(n!=f||o<c);d+=c)a(f+=s,t,Math.max(0,255*(Math.abs(d)/m-i+1)));if(t==r)break;u+=o,t+=l}}}function i(e,t=`assert error`){if(!e)throw Error(t)}function a(e,t,n,r,a,s,c,l){var u=e-2*n+a,d=t-2*r+s,f=e-n,p=t-r,m,h,g;i(c>=0,`width is negative`),f*(a-n)>0&&(p*(s-r)>0&&Math.abs(f*d)>Math.abs(p*u)&&(e=a,a=f+n,t=s,s=p+r),e==a||c==1?h=(e-n)/u:(g=Math.sqrt(4*c*c*(e-n)*(a-n)+(a-e)*(a-e)),n<e&&(g=-g),h=(2*c*(e-n)-e+a+g)/(2*(1-c)*(a-e))),g=1/(2*h*(1-h)*(c-1)+1),f=(h*h*(e-2*c*n+a)+2*h*(c*n-e)+e)*g,p=(h*h*(t-2*c*r+s)+2*h*(c*r-t)+t)*g,m=h*(c-1)+1,m*=m*g,c=((1-h)*(c-1)+1)*Math.sqrt(g),u=Math.floor(f+.5),d=Math.floor(p+.5),p=(f-e)*(r-t)/(n-e)+t,o(e,t,u,Math.floor(p+.5),u,d,m,l),p=(f-a)*(r-s)/(n-a)+s,r=Math.floor(p+.5),e=n=u,t=d),(t-r)*(s-r)>0&&(t==s||c==1?h=(t-r)/(t-2*r+s):(g=Math.sqrt(4*c*c*(t-r)*(s-r)+(s-t)*(s-t)),r<t&&(g=-g),h=(2*c*(t-r)-t+s+g)/(2*(1-c)*(s-t))),g=1/(2*h*(1-h)*(c-1)+1),f=(h*h*(e-2*c*n+a)+2*h*(c*n-e)+e)*g,p=(h*h*(t-2*c*r+s)+2*h*(c*r-t)+t)*g,m=h*(c-1)+1,m*=m*g,c=((1-h)*(c-1)+1)*Math.sqrt(g),u=Math.floor(f+.5),d=Math.floor(p+.5),f=(n-e)*(p-t)/(r-t)+e,o(e,t,Math.floor(f+.5),d,u,d,m,l),f=(n-a)*(p-s)/(r-s)+a,n=Math.floor(f+.5),e=u,t=r=d),o(e,t,n,r,a,s,c*c,l)}function o(e,n,r,a,s,c,l,u){var d=s-r,f=c-a,p=e-s,m=n-c,h=e-r,g=n-a,_=h*f+g*d,v=h*f-g*d,y;if(i(h*d<=0&&g*f<=0,`sign of gradient must not change`),v!=0&&l>0){if(d*d+f*f>h*h+g*g&&(s=e,e-=p,c=n,n-=m,v=-v),h=2*(4*l*d*h+p*p),g=2*(4*l*f*g+m*m),d=e<s?1:-1,f=n<c?1:-1,_=-2*d*f*(2*l*_+p*m),v*d*f<0&&(h=-h,g=-g,_=-_,v=-v),p=4*l*(r-e)*f*v+h/2+_,m=4*l*(n-a)*d*v+g/2+_,l<.5&&(m>_||p<_)){v=(l+1)/2,l=Math.sqrt(l),_=1/(l+1),d=Math.floor((e+2*l*r+s)*_/2+.5),f=Math.floor((n+2*l*a+c)*_/2+.5),p=Math.floor((l*r+e)*_+.5),m=Math.floor((a*l+n)*_+.5),o(e,n,p,m,d,f,v,u),p=Math.floor((l*r+s)*_+.5),m=Math.floor((a*l+c)*_+.5),o(d,f,p,m,s,c,v,u);return}y=p+m-_;do{if(u(e,n),e==s&&n==c)return;r=+(2*y>m),a=+(2*(y+g)<-m),(2*y<p||a)&&(n+=f,m+=_,y+=p+=h),(2*y>p||r)&&(e+=d,p+=_,y+=m+=g)}while(m<=_&&p>=_)}t(e,n,s,c,u)}function s(e,t,r,a,o,c,l,u){var d=o-r,f=c-a,p=e-o,m=t-c,h=e-r,g=t-a,_=h*f+g*d,v=h*f-g*d,y,b,x;if(i(h*d<=0&&g*f<=0),v!=0&&l>0){if(d*d+f*f>h*h+g*g&&(o=e,e-=p,c=t,t-=m,v=-v),h=2*(4*l*d*h+p*p),g=2*(4*l*f*g+m*m),d=e<o?1:-1,f=t<c?1:-1,_=-2*d*f*(2*l*_+p*m),v*d*f<0&&(h=-h,g=-g,v=-v,_=-_),p=4*l*(r-e)*f*v+h/2+_,m=4*l*(t-a)*d*v+g/2+_,l<.5&&m>p)return v=(l+1)/2,l=Math.sqrt(l),_=1/(l+1),d=Math.floor((e+2*l*r+o)*_/2+.5),f=Math.floor((t+2*l*a+c)*_/2+.5),p=Math.floor((l*r+e)*_+.5),m=Math.floor((a*l+t)*_+.5),s(e,t,p,m,d,f,v,u),p=Math.floor((l*r+o)*_+.5),m=Math.floor((a*l+c)*_+.5),s(d,f,p,m,o,c,v,u);y=p+m-_;do{if(v=Math.min(p-_,_-m),b=Math.max(p-_,_-m),b+=2*b*v*v/(4*b*b+v*v),r=255*Math.abs(y-p-m+_)/b,r<256&&u(e,t,r),x=2*y+m<0){if(t==c)return;p-y<b&&u(e+d,t,255*Math.abs(p-y)/b)}if(2*y+p>0){if(e==o)return;y-m<b&&u(e,t+f,255*Math.abs(y-m)/b),e+=d,p+=_,y+=m+=g}x&&(t+=f,m+=_,y+=p+=h)}while(m<p)}n(e,t,o,c,u)}function c(e,t,n,r,i){let a=-n,o=0,s=r*r,c=a*(2*s+a)+s;do i(e-a,t+o),i(e+a,t+o),i(e+a,t-o),i(e-a,t-o),s=2*c,s>=(a*2+1)*r*r&&(c+=(++a*2+1)*r*r),s<=(o*2+1)*n*n&&(c+=(++o*2+1)*n*n);while(a<=0);for(;o++<r;)i(e,t+o),i(e,t-o)}function l(e,t,n,r,i,a){let o=n*n,s=r*r,c=Math.sin(i),l=(o-s)*c;o=Math.sqrt(o-l*c),s=Math.sqrt(s+l*c),n=o+.5,r=s+.5,l=l*n*r/(o*s),u(e-n,t-r,e+n,t+r,4*l*Math.cos(i),a)}function u(e,t,n,r,a,s){let c=n-e,l=r-t,u=c*l;if(a===0)return d(e,t,n,r,s);u!==0&&(u=(u-a)/(u+u)),i(u<=1&&u>=0,`limit angle to |zd|<=xd*yd`),c=Math.floor(c*u+.5),l=Math.floor(l*u+.5),o(e,t+l,e,t,e+c,t,1-u,s),o(e,t+l,e,r,n-c,r,u,s),o(n,r-l,n,r,n-c,r,1-u,s),o(n,r-l,n,t,e+c,t,u,s)}function d(e,t,n,r,i){let a=Math.abs(n-e),o=Math.abs(r-t),s=o&1,c=4*(1-a)*o*o,l=4*(s+1)*a*a,u=c+l+s*a*a,d;e>n&&(e=n,n+=a),t>r&&(t=r),t+=(o+1)/2,r=t-s,a=8*a*a,s=8*o*o;do i(n,t),i(e,t),i(e,r),i(n,r),d=2*u,d<=l&&(t++,r--,u+=l+=a),(d>=c||2*u>l)&&(e++,n--,u+=c+=s);while(e<=n);for(;t-r<=o;)i(e-1,t),i(n+1,t++),i(e-1,r),i(n+1,r--)}function f(e,t,n,r){var i=-n,a=0,o=2-2*n;do r(e-i,t+a),r(e-a,t-i),r(e+i,t-a),r(e+a,t+i),n=o,n<=a&&(o+=++a*2+1),(n>i||o>a)&&(o+=++i*2+1);while(i<0)}function p(e,t,n,r){var i=-n,a=0,o,s,c,l=2-2*n;n=1-l;do o=255*Math.abs(l-2*(i+a)-2)/n,r(e-i,t+a,o),r(e-a,t-i,o),r(e+i,t-a,o),r(e+a,t+i,o),c=l,s=i,l+a>0&&(o=255*(l-2*i-1)/n,o<256&&(r(e-i,t+a+1,o),r(e-a-1,t-i,o),r(e+i,t-a-1,o),r(e+a+1,t+i,o)),l+=++i*2+1),c+s<=0&&(o=255*(2*a+3-c)/n,o<256&&(r(e-s-1,t+a,o),r(e-a,t-s-1,o),r(e+s+1,t-a,o),r(e+a,t+s+1,o)),l+=++a*2+1);while(i<0)}function m(e,t,n,r,i,a,o){var s=e-n,c=t-r,l=e-2*n+i,u;s*(i-n)>0&&(c*(a-r)>0&&Math.abs((t-2*r+a)/l*s)>Math.abs(c)&&(e=i,i=s+n,t=a,a=c+r),l=(e-n)/l,u=(1-l)*((1-l)*t+2*l*r)+l*l*a,l=(e*i-n*n)*l/(e-n),s=Math.floor(l+.5),c=Math.floor(u+.5),u=(r-t)*(l-e)/(n-e)+t,h(e,t,s,Math.floor(u+.5),s,c,o),u=(r-a)*(l-i)/(n-i)+a,e=n=s,t=c,r=Math.floor(u+.5)),(t-r)*(a-r)>0&&(l=t-2*r+a,l=(t-r)/l,u=(1-l)*((1-l)*e+2*l*n)+l*l*i,l=(t*a-r*r)*l/(t-r),s=Math.floor(u+.5),c=Math.floor(l+.5),u=(n-e)*(l-t)/(r-t)+e,h(e,t,Math.floor(u+.5),c,s,c,o),u=(n-i)*(l-a)/(r-a)+i,e=s,n=Math.floor(u+.5),t=r=c),h(e,t,n,r,i,a,o)}function h(e,n,r,a,o,s,c){var l=o-r,u=s-a,d=e-r,f=n-a,p,m,h,g,_=d*u-f*l;if(i(d*l<=0&&f*u<=0,`sign of gradient must not change`),l*l+u*u>d*d+f*f&&(o=e,e=l+r,s=n,n=u+a,_=-_),_!=0){d+=l,d*=l=e<o?1:-1,f+=u,f*=u=n<s?1:-1,p=2*d*f,d*=d,f*=f,_*l*u<0&&(d=-d,f=-f,p=-p,_=-_),m=4*u*_*(r-e)+d-p,h=4*l*_*(n-a)+f-p,d+=d,f+=f,g=m+h+p;do{if(c(e,n),e==o&&n==s)return;a=+(2*g<m),2*g>h&&(e+=l,m-=p,g+=h+=f),a&&(n+=u,h-=p,g+=m+=d)}while(h<0&&m>0)}t(e,n,o,s,c)}function g(e,t,n,r,i,a,o){var s=e-n,c=t-r,l=e-2*n+i,u;s*(i-n)>0&&(c*(a-r)>0&&Math.abs((t-2*r+a)/l*s)>Math.abs(c)&&(e=i,i=s+n,t=a,a=c+r),l=(e-n)/l,u=(1-l)*((1-l)*t+2*l*r)+l*l*a,l=(e*i-n*n)*l/(e-n),s=Math.floor(l+.5),c=Math.floor(u+.5),u=(r-t)*(l-e)/(n-e)+t,_(e,t,s,Math.floor(u+.5),s,c,o),u=(r-a)*(l-i)/(n-i)+a,e=n=s,t=c,r=Math.floor(u+.5)),(t-r)*(a-r)>0&&(l=t-2*r+a,l=(t-r)/l,u=(1-l)*((1-l)*e+2*l*n)+l*l*i,l=(t*a-r*r)*l/(t-r),s=Math.floor(u+.5),c=Math.floor(l+.5),u=(n-e)*(l-t)/(r-t)+e,_(e,t,Math.floor(u+.5),c,s,c,o),u=(n-i)*(l-a)/(r-a)+i,e=s,n=Math.floor(u+.5),t=r=c),_(e,t,n,r,i,a,o)}function _(e,t,r,i,a,o,s){var c=a-r,l=o-i,u=e-r,d=t-i,f,p,m,h,g,_=u*l-d*c;if(c*c+l*l>u*u+d*d&&(a=e,e=c+r,o=t,t=l+i,_=-_),_!=0){u+=c,u*=c=e<a?1:-1,d+=l,d*=l=t<o?1:-1,f=2*u*d,u*=u,d*=d,_*c*l<0&&(u=-u,d=-d,f=-f,_=-_),p=4*l*(r-e)*_+u-f,m=4*c*(t-i)*_+d-f,u+=u,d+=d,h=p+m+f;do{if(_=Math.min(p+f,-f-m),g=Math.max(p+f,-f-m),g+=2*g*_*_/(4*g*g+_*_),s(e,t,255*Math.abs(h-p-m-f)/g),e==a||t==o)break;r=e,_=p-h,i=+(2*h+m<0),2*h+p>0&&(h-m<g&&s(e,t+l,255*Math.abs(h-m)/g),e+=c,p-=f,h+=m+=d),i&&(_<g&&s(r+c,t,255*Math.abs(_)/g),t+=l,m-=f,h+=p+=u)}while(m<p)}n(e,t,a,o,s)}function v(e,n,r,a,o,s,c,l,u){var d,f,p,m=1;let g=e<c?1:-1,_=n<l?1:-1,v=-Math.abs(e+r-o-c),y=v-4*g*(r-o),b=g*(e-r-o+c),x=-Math.abs(n+a-s-l),S=x-4*_*(a-s),C=_*(n-a-s+l),w,T,E,D,O,k,A,j,M,N,P,F=.01;if(i((r-e)*(o-c)<F&&((c-e)*(r-o)<F||b*b<y*v+F),`slope change`),i((a-n)*(s-l)<F&&((l-n)*(a-s)<F||C*C<S*x+F),`slope change`),y==0&&S==0)return g=Math.floor((3*r-e+1)/2),_=Math.floor((3*a-n+1)/2),h(e,n,g,_,c,l,u);r=(r-e)*(r-e)+(a-n)*(a-n)+1,o=(o-c)*(o-c)+(s-l)*(s-l)+1;do{w=y*C-b*S,T=y*x-v*S,E=b*x-v*C,N=w*(w+T-3*E)+T*T,d=N>0?1:Math.sqrt(1+1024/r),w*=d,T*=d,E*=d,N*=d*d,k=9*(w+T+E)/8,D=8*(y-S),j=27*(8*w*(C*C-S*x)+N*(S+2*C+x))/64-S*S*(k-S),M=27*(8*w*(b*b-y*v)-N*(y+2*b+v))/64-y*y*(k+y),O=3*(3*w*(3*C*C-S*S-2*S*x)-S*(3*T*(S+C)+S*D))/4,A=3*(3*w*(3*b*b-y*y-2*y*v)-y*(3*T*(y+b)+y*D))/4,k=y*S*(6*w+6*T-3*E+D),T=S*S,D=y*y,k=3*(k+9*d*(D*C*x-b*v*T)-18*b*C*w)/8,N<0&&(j=-j,M=-M,O=-O,A=-A,k=-k,T=-T,D=-D),w=6*S*T,T=-6*y*T,E=6*S*D,D=-6*y*D,j+=k,N=j+M,M+=k;a:for(P=k,f=p=d;e!=c&&n!=l;){u(e,n);do{if(j>P||M<P)break a;a=2*N-M,2*N>=j&&(f--,N+=j+=O,M+=k+=T,A+=E,O+=w),a<=0&&(p--,N+=M+=A,j+=k+=E,O+=T,A+=D)}while(f>0&&p>0);2*f<=d&&(e+=g,f+=d),2*p<=d&&(n+=_,p+=d),P==k&&j<0&&M>0&&(P=F)}O=e,e=c,c=O,g=-g,b=-b,A=n,n=l,l=A,_=-_,C=-C,r=o}while(m--);t(e,n,c,l,u)}function y(e,t,r,a,o,s,c,l,u){let d,f,p,m=1,h=e<c?1:-1,g=t<l?1:-1,v=-Math.abs(e+r-o-c),y=v-4*h*(r-o),b=h*(e-r-o+c),x=-Math.abs(t+a-s-l),S=x-4*g*(a-s),C=g*(t-a-s+l),w,T,E,D,O,k,A,j,M,N,P,F,I,ee,L=.01;if(i((r-e)*(o-c)<L&&((c-e)*(r-o)<L||b*b<y*v+L)),i((a-t)*(s-l)<L&&((l-t)*(a-s)<L||C*C<S*x+L)),y===0&&S===0)return h=Math.floor((3*r-e+1)/2),g=Math.floor((3*a-t+1)/2),_(e,t,h,g,c,l,u);r=(r-e)*(r-e)+(a-t)*(a-t)+1,o=(o-c)*(o-c)+(s-l)*(s-l)+1;do{w=y*C-b*S,T=y*x-v*S,E=b*x-v*C,ee=4*w*E-T*T,N=w*(w+T-3*E)+T*T,d=N>0?1:Math.sqrt(1+1024/r),w*=d,T*=d,E*=d,N*=d*d,k=9*(w+T+E)/8,D=8*(y-S),j=27*(8*w*(C*C-S*x)+N*(S+2*C+x))/64-S*S*(k-S),M=27*(8*w*(b*b-y*v)-N*(y+2*b+v))/64-y*y*(k+y),O=3*(3*w*(3*C*C-S*S-2*S*x)-S*(3*T*(S+C)+S*D))/4,A=3*(3*w*(3*b*b-y*y-2*y*v)-y*(3*T*(y+b)+y*D))/4,k=y*S*(6*w+6*T-3*E+D),T=S*S,D=y*y,k=3*(k+9*d*(D*C*x-b*v*T)-18*b*C*w)/8,N<0&&(j=-j,M=-M,O=-O,A=-A,k=-k,T=-T,D=-D),w=6*S*T,T=-6*y*T,E=6*S*D,D=-6*y*D,j+=k,N=j+M,M+=k;let n=!1;a:for(f=p=d;e!==c&&t!==l;){a=Math.min(Math.abs(k-j),Math.abs(M-k)),I=Math.max(Math.abs(k-j),Math.abs(M-k)),I=d*(I+2*I*a*a/(4*I*I+a*a)),a=255*Math.abs(N-(d-f+1)*j-(d-p+1)*M+d*k)/I,a<256&&u(e,t,a),P=Math.abs(N-(d-f+1)*j+(p-1)*M),F=Math.abs(N+(f-1)*j-(d-p+1)*M),s=t;do{if(ee>=-L&&(j+O>k||M+A<k)){n=!0;break a}if(a=2*N+j,2*N+M>0)f--,N+=j+=O,M+=k+=T,A+=E,O+=w;else if(a>0){n=!0;break a}a<=0&&(p--,N+=M+=A,j+=k+=E,O+=T,A+=D)}while(f>0&&p>0);2*p<=d&&(F<I&&u(e+h,t,255*F/I),t+=g,p+=d),2*f<=d&&(P<I&&u(e,s+g,255*P/I),e+=h,f+=d)}n&&(2*N<M&&2*p<=d+2&&(F<I&&u(e+h,t,255*F/I),t+=g),2*N>j&&2*f<=d+2&&(P<I&&u(e,s+g,255*P/I),e+=h),O=e,e=c,c=O,h=-h,b=-b,A=t,t=l,l=A,g=-g,C=-C,r=o);break}while(m--);n(Math.floor(e),Math.floor(t),Math.floor(c),Math.floor(l),u)}function b(e,t,n,r,i,a,o,s,c,l){let u=0,d=0,f=e+n-i-o,p=f-4*(n-i),m=e-n-i+o,h=m+4*(n+i),g=t+r-a-s,_=g-4*(r-a),v=t-r-a+s,y=v+4*(r+a);var b=e,x,S,C,w=t,T,E,D;let O=m*m-p*f,k,A=[0,0,0,0,0];for(p==0?Math.abs(f)<2*Math.abs(m)&&(A[u++]=f/(2*m)):O>0&&(k=Math.sqrt(O),O=(m-k)/p,Math.abs(O)<1&&(A[u++]=O),O=(m+k)/p,Math.abs(O)<1&&(A[u++]=O)),O=v*v-_*g,_==0?Math.abs(g)<2*Math.abs(v)&&(A[u++]=g/(2*v)):O>0&&(k=Math.sqrt(O),O=(v-k)/_,Math.abs(O)<1&&(A[u++]=O),O=(v+k)/_,Math.abs(O)<1&&(A[u++]=O)),d=1;d<u;d++)(O=A[d-1])>A[d]&&(A[d-1]=A[d],A[d]=O,d=0);for(O=-1,A[u]=1,d=0;d<=u;d++)k=A[d],x=(O*(O*m-2*f)-k*(O*(O*p-2*m)+f)+h)/8-b,T=(O*(O*v-2*g)-k*(O*(O*_-2*v)+g)+y)/8-w,S=(k*(k*m-2*f)-O*(k*(k*p-2*m)+f)+h)/8-b,E=(k*(k*v-2*g)-O*(k*(k*_-2*v)+g)+y)/8-w,b-=C=(k*(k*(3*m-k*p)-3*f)+h)/8,w-=D=(k*(k*(3*v-k*_)-3*g)+y)/8,o=Math.floor(C+.5),s=Math.floor(D+.5),b!=0&&(x*=b=(e-o)/b,S*=b),w!=0&&(T*=w=(t-s)/w,E*=w),(e!=o||t!=s)&&c(e,t,e+x,t+T,e+S,t+E,o,s,l),e=o,t=s,b=C,w=D,O=k}function x(e,t,n,r,i,a,o,s,c){b(e,t,n,r,i,a,o,s,v,c)}function S(e,t,n,r,i,a,o,s,c){b(e,t,n,r,i,a,o,s,y,c)}e.circle=f,e.circleAA=p,e.cubicBezier=x,e.cubicBezierAA=S,e.cubicBezierSegment=v,e.cubicBezierSegmentAA=y,e.ellipse=c,e.ellipseRect=d,e.line=t,e.lineAA=n,e.lineWidth=r,e.quadBezier=m,e.quadBezierAA=g,e.quadBezierSegment=h,e.quadBezierSegmentAA=_,e.quadRationalBezier=a,e.quadRationalBezierSegment=o,e.quadRationalBezierSegmentAA=s,e.rotatedEllipse=l,e.rotatedEllipseRect=u,Object.defineProperty(e,Symbol.toStringTag,{value:`Module`})}))}))(),ze=class{constructor(){this.previous={x:0,y:0}}onPointerDown(e,t,{context:n},r){n&&(n.fillStyle=r.stroke.value,n.fillRect(e,t,1,1),this.previous={x:e,y:t})}onPointerMove(e,t,{context:n}){(0,q.line)(this.previous.x,this.previous.y,e,t,(e,t)=>{n?.fillRect(e,t,1,1)}),this.previous={x:e,y:t}}},Be=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){typeof Symbol<`u`&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:`Module`}),Object.defineProperty(e,`__esModule`,{value:!0})},n.t=function(e,t){if(t&1&&(e=n(e)),t&8||t&4&&typeof e==`object`&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,`default`,{enumerable:!0,value:e}),t&2&&typeof e!=`string`)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,`a`,t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=``,n(n.s=0)}([function(e,t,n){n.r(t),n.d(t,`isSameColor`,(function(){return a})),n.d(t,`setColorAtPixel`,(function(){return i})),n.d(t,`getColorAtPixel`,(function(){return r})),n.d(t,`colorToRGBA`,(function(){return s})),n.d(t,`hex2RGBA`,(function(){return o}));function r(e,t,n){var r=e.width,i=e.data,a=4*(n*r+t);if(i[a+3]===void 0)throw Error(`Invalid pixel coordinates: x=`+t+`; y=`+n);return{r:i[a],g:i[a+1],b:i[a+2],a:i[a+3]}}function i(e,t,n,r){var i=e.width,a=e.data,o=4*(r*i+n);if(a[o+3]===void 0)throw Error(`Invalid pixel coordinates. Cannot set color at: x=`+n+`; y=`+r);a[o+0]=t.r&255,a[o+1]=t.g&255,a[o+2]=t.b&255,a[o+3]=t.a&255}function a(e,t,n){return n===void 0&&(n=0),!(Math.abs(e.r-t.r)>n||Math.abs(e.g-t.g)>n||Math.abs(e.b-t.b)>n||Math.abs(e.a-t.a)>n)}function o(e,t){t===void 0&&(t=255);var n=e;if(e.indexOf(`#`)===0&&(n=e.slice(1)),n.length===3&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]),n.length!==6)throw Error(`Invalid HEX color `+n+`.`);return{r:parseInt(n.slice(0,2),16),g:parseInt(n.slice(2,4),16),b:parseInt(n.slice(4,6),16),a:t}}function s(e){if(e.indexOf(`rgba`)!==-1){var t=/rgba\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9\.]{1,})/g.exec(e);t[0];var n=t[1],r=t[2],i=t[3],a=t[4];return{r:parseInt(n),g:parseInt(r),b:parseInt(i),a:Math.ceil(parseFloat(a)*255)}}else if(e.indexOf(`rgb`)!==-1){var s=/rgb\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3})/g.exec(e);s[0];var n=s[1],r=s[2],i=s[3];return{r:parseInt(n),g:parseInt(r),b:parseInt(i),a:255}}else if(e.indexOf(`#`)!==-1)return o(e);else throw Error(`Unsupported color format. Please use CSS rgba, rgb, or HEX!`)}t.default=function(){function e(e){this.collectModifiedPixels=!1,this.modifiedPixelsCount=0,this.modifiedPixels=new Set,this._tolerance=0,this._queue=[],this.imageData=e,this.isSameColor=a,this.setColorAtPixel=i,this.getColorAtPixel=r,this.colorToRGBA=s}return e.prototype.fill=function(e,t,n,r){this._newColor=this.colorToRGBA(e),this._replacedColor=this.getColorAtPixel(this.imageData,t,n),this._tolerance=r,!this.isSameColor(this._replacedColor,this._newColor,this._tolerance)&&(this.addToQueue([t,t,n,-1]),this.fillQueue())},e.prototype.addToQueue=function(e){this._queue.push(e)},e.prototype.popFromQueue=function(){return this._queue.length?this._queue.pop():null},e.prototype.isValidTarget=function(e){if(e!==null){var t=this.getColorAtPixel(this.imageData,e.x,e.y);return this.isSameColor(this._replacedColor,t,this._tolerance)}},e.prototype.fillLineAt=function(e,t){if(!this.isValidTarget({x:e,y:t}))return[-1,-1];this.setPixelColor(this._newColor,{x:e,y:t});for(var n=e,r=e,i=this.getPixelNeighbour(`left`,n,t);i&&this.isValidTarget(i);)this.setPixelColor(this._newColor,i),n=i.x,i=this.getPixelNeighbour(`left`,n,t);for(i=this.getPixelNeighbour(`right`,r,t);i&&this.isValidTarget(i);)this.setPixelColor(this._newColor,i),r=i.x,i=this.getPixelNeighbour(`right`,r,t);return[n,r]},e.prototype.fillQueue=function(){for(var e=this.popFromQueue();e;){for(var t=e[0],n=e[1],r=e[2],i=e[3],a=t;a!==-1&&a<=n;){var o=this.fillLineAt(a,r),s=o[0],c=o[1];s!==-1&&(s>=t&&c<=n&&i!==-1?(i<r&&r+1<this.imageData.height&&this.addToQueue([s,c,r+1,r]),i>r&&r>0&&this.addToQueue([s,c,r-1,r])):(r>0&&this.addToQueue([s,c,r-1,r]),r+1<this.imageData.height&&this.addToQueue([s,c,r+1,r]))),c===-1&&a<=n?a+=1:a=c+1}e=this.popFromQueue()}},e.prototype.setPixelColor=function(e,t){this.setColorAtPixel(this.imageData,e,t.x,t.y),this.modifiedPixelsCount++,this.collectModifiedPixels&&this.modifiedPixels.add(t.x+`|`+t.y)},e.prototype.getPixelNeighbour=function(e,t,n){t|=0,n|=0;var r;switch(e){case`right`:r={x:t+1|0,y:n};break;case`left`:r={x:t-1|0,y:n};break}return r.x>=0&&r.x<this.imageData.width?r:null},e}()}]);Be===void 0&&console.error(`esm-webpack-plugin: nothing exported!`);var Ve=Be.default;Be.isSameColor,Be.setColorAtPixel,Be.getColorAtPixel,Be.colorToRGBA,Be.hex2RGBA;var He=class{onPointerDown(e,t,{canvas:n,context:r},i){if(n&&r){let a=new Ve(r.getImageData(0,0,n.width,n.height));a.fill(i.stroke.value,e,t,0),r.putImageData(a.imageData,0,0)}}};function J(e){e?.clearRect(0,0,e.canvas.width,e.canvas.height)}function Ue(e,t,n,r){n===1&&r.fillRect(e,t,1,1),n===2&&r.fillRect(e-1,t-1,2,2),n===3&&(r.fillRect(e-1,t,3,1),r.fillRect(e,t-1,1,3)),n===4&&(r.fillRect(e-1,t-2,2,4),r.fillRect(e-2,t-1,4,2)),n===5&&(r.fillRect(e-1,t-2,3,5),r.fillRect(e-2,t-1,5,3)),n===7&&(r.fillRect(e-1,t-3,3,7),r.fillRect(e-3,t-1,7,3),r.fillRect(e-2,t-2,5,5))}var We=class{constructor(){this.previous={x:0,y:0}}onPointerHover(e,t,{canvas:n,brush:r,previewContext:i},a){n&&i&&(J(i),i.fillStyle=a.stroke.value,this.drawBrush(e,t,r,i))}onPointerDown(e,t,{brush:n,context:r},i){r&&(r.fillStyle=i.stroke.value,this.drawBrush(e,t,n,r),this.previous={x:e,y:t})}onPointerMove(e,t,{brush:n,context:r}){if(r){let i={...this.previous};(0,q.line)(this.previous.x,this.previous.y,e,t,(e,t)=>{let a={x:e-i.x,y:t-i.y};this.drawBrush(e,t,n,r,a),i={x:e,y:t}}),this.previous={x:e,y:t}}}drawBrush(e,t,{type:n,size:r},i,a){if(n===`circle`)return Ue(e,t,r,i);let o=Math.floor(r/2);if(n===`square`)return this.drawSquare(e,t,o,r,i);let s=r%2==0?-1:0,c=a?t-Math.min(0,a.y):0;if(n===`forward-diagonal`){if(a&&a.y!==0){let t=a.y===-1&&a.x===-1?e:e-1;this.drawForwardLine(t,c,o,s,i)}this.drawForwardLine(e,t,o,s,i);return}if(n===`backward-diagonal`){if(a&&a.y!==0){let t=a.y===-1&&a.x===1?e:e+1;this.drawBackwardLine(t,c,o,s,i)}this.drawBackwardLine(e,t,o,s,i);return}throw Error(`Unknown brush type.`)}drawSquare(e,t,n,r,i){i.fillRect(e-n,t-n,r,r)}drawForwardLine(e,t,n,r,i){let a={x:e-n,y:t+n+r},o={x:e+n+r,y:t-n};(0,q.line)(a.x,a.y,o.x,o.y,(e,t)=>{i.fillRect(e,t,1,1)})}drawBackwardLine(e,t,n,r,i){let a={x:e-n,y:t-n},o={x:e+n+r,y:t+n+r};(0,q.line)(a.x,a.y,o.x,o.y,(e,t)=>{i.fillRect(e,t,1,1)})}},Ge=class{constructor(){this.startPosition={x:0,y:0}}onPointerDown(e,t){this.startPosition={x:e,y:t}}onPointerMove(e,t,{canvas:n,lineWidth:r,fillStyle:i,previewContext:a},o){n&&a&&this.drawRectangle(e,t,a,a,i,r,o)}onPointerUp(e,t,{canvas:n,context:r,lineWidth:i,fillStyle:a,previewContext:o},s){n&&r&&o&&this.drawRectangle(e,t,r,o,a,i,s)}drawRectangle(e,t,n,r,i,a,o){J(r);let s=Math.min(this.startPosition.x,e),c=Math.max(this.startPosition.x,e),l=Math.min(this.startPosition.y,t),u=Math.max(this.startPosition.y,t),d=Math.abs(c-s),f=Math.abs(u-l);if(i.stroke&&(d<a*2||f<a*2)){n.fillStyle=o.stroke.value,n.fillRect(s,l,d,f);return}i.fill&&(n.fillStyle=o.fill.value,n.fillRect(s,l,d,f)),i.stroke&&(n.fillStyle=o.stroke.value,this.getPointsForLine(s,l,c,u,a).forEach(({x:e,y:t})=>{n.fillRect(e,t,1,1)}))}getPointsForLine(e,t,n,r,i){let a=[];for(let o=0;o<i;o++)(0,q.line)(e+o,t+o,n,t+o,(e,t)=>a.push({x:e,y:t})),(0,q.line)(e+o,t+o,e+o,r,(e,t)=>a.push({x:e,y:t})),(0,q.line)(n-o,r-o,n-o,t,(e,t)=>a.push({x:e,y:t})),(0,q.line)(n-o,r-o,e,r-o,(e,t)=>a.push({x:e,y:t}));return a}},Ke=class{constructor(){this.startPosition={x:0,y:0}}onPointerDown(e,t,{previewContext:n,context:r},i){n&&r&&(this.startPosition={x:e,y:t},n.fillStyle=r.fillStyle=i.stroke.value)}onPointerMove(e,t,{previewContext:n,canvas:r,lineWidth:i}){r&&n&&this.drawLine(e,t,n,n,i)}onPointerUp(e,t,{previewContext:n,context:r,canvas:i,lineWidth:a}){n&&r&&i&&this.drawLine(e,t,r,n,a)}drawLine(e,t,n,r,i){J(r),(0,q.line)(e,t,this.startPosition.x,this.startPosition.y,(e,t)=>{Ue(e,t,i,n)})}};function qe(e,t,n){n?.dispatchEvent(new CustomEvent(`area`,{detail:{width:Math.abs(t.x-e.x),height:Math.abs(t.y-e.y)},bubbles:!0,composed:!0}))}function Je(e,t,n){J(n),n?.setLineDash([4]),n?.strokeRect(e.x+.5,e.y+.5,t.x-e.x,t.y-e.y),n?.setLineDash([])}var Ye=class{constructor(){this.startPosition={x:0,y:0}}onPointerDown(e,t,n){this.startPosition={x:e,y:t},n.selection=null,K(n.element)}onPointerMove(e,t,{element:n,previewContext:r}){Je(this.startPosition,{x:e,y:t},r),qe(this.startPosition,{x:e,y:t},n)}onPointerUp(e,t,n){let{element:r,previewContext:i}=n;J(i),r?.dispatchEvent(new CustomEvent(`area`,{bubbles:!0,composed:!0}));let a=Math.abs(e-this.startPosition.x),o=Math.abs(t-this.startPosition.y),s=Math.min(e,this.startPosition.x),c=Math.min(t,this.startPosition.y);a===0||o===0||(n.selection={x:s,y:c,width:a,height:o},K(r))}};function Xe(e){return{r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16)}}var Ze=class{constructor(){this.previous={x:0,y:0}}onPointerHover(e,t,{canvas:n,previewContext:r,eraserSize:i,colors:a}){n&&r&&(J(r),e>0&&e<n.width&&t>0&&t<n.height&&(r.fillStyle=`black`,r.fillRect(...this.getFillRectArgs(e,t,i)),r.fillStyle=a.secondary,r.fillRect(...this.getFillRectArgs(e,t,i-2))))}onPointerDown(e,t,n,r){this.previous={x:e,y:t},this.handleEraser(e,t,n,r)}onPointerMove(e,t,n,r){(0,q.line)(this.previous.x,this.previous.y,e,t,(e,t)=>{this.handleEraser(e,t,n,r)}),this.previous={x:e,y:t}}handleEraser(e,t,{context:n,eraserSize:r,colors:i},a){if(n)if(a.stroke.key===`primary`)n.fillStyle=i.secondary,n.fillRect(...this.getFillRectArgs(e,t,r));else{let{r:a,g:o,b:s}=Xe(i.primary),{r:c,g:l,b:u}=Xe(i.secondary),[d,f,p,m]=this.getFillRectArgs(e,t,r),h=n.getImageData(d,f,p,m),{data:g}=h;for(let e=0;e<g.length;e+=4)g[e]===a&&g[e+1]===o&&g[e+2]===s&&(g[e]=c,g[e+1]=l,g[e+2]=u);n.putImageData(h,d,f)}}getFillRectArgs(e,t,n){return[e-n/2,t-n/2,n,n]}},Qe=class{constructor(){this.startPosition={x:0,y:0}}onPointerDown(e,t){this.startPosition={x:e,y:t}}onPointerMove(e,t,{fillStyle:n,canvas:r,previewContext:i},a){r&&i&&this.drawEllipse(e,t,n,a,i,i)}onPointerUp(e,t,{fillStyle:n,canvas:r,context:i,previewContext:a},o){r&&i&&a&&this.drawEllipse(e,t,n,o,i,a)}drawEllipse(e,t,n,r,i,a){J(a);let o=[];if((0,q.ellipseRect)(this.startPosition.x,this.startPosition.y,e,t,(e,t)=>{o.push({x:e,y:t})}),n.fill){i.fillStyle=r.fill.value,o.sort((e,t)=>e.y-t.y||e.x-t.x);let e=this.getFillPixels(o);Array.from(e).forEach(e=>{this.drawPixel(i,e)})}n.stroke&&(i.fillStyle=r.stroke.value),o.forEach(e=>{this.drawPixel(i,e)})}drawPixel(e,{x:t,y:n}){e.fillRect(Math.floor(t),Math.floor(n),1,1)}*getFillPixels(e){let t;for(let n of e){if(t?.y===n.y&&n.x-t.x>1){let e=Math.min(t.x,n.x),r=Math.max(t.x,n.x);for(let t=e;t<=r;t++)yield{x:t,y:n.y}}t=n}}};function $e(e){e.view.textToolbar=e.text.showToolbar&&e.text.active}var et=class{constructor(){this.startPosition={x:0,y:0}}onPointerDown(e,t){this.startPosition={x:e,y:t}}onPointerMove(e,t,{previewContext:n,element:r}){Je(this.startPosition,{x:e,y:t},n),qe(this.startPosition,{x:e,y:t},r)}onPointerUp(e,t,n){J(n.previewContext);let r=n.text.x=Math.min(e,this.startPosition.x),i=n.text.y=Math.min(t,this.startPosition.y),a=Math.max(e,this.startPosition.x),o=Math.max(t,this.startPosition.y),s=a-r,c=o-i;s<10||c<10||(n.element?.dispatchEvent(new CustomEvent(`area`,{bubbles:!0,composed:!0})),n.text.active=!0,$e(n),n.text.width=s,n.text.height=c,K(n.element))}},tt=class{onPointerDown(e,t,n){n.magnifierSize===1?n.magnifierSize=n.previousMagnifierSize:(n.previousMagnifierSize=n.magnifierSize,n.magnifierSize=1),K(n.element)}onPointerUp(e,t,n){n.tool=n.previousEditingTool,K(n.element)}},nt={tooltip:`Free-Form Select`,helpText:`Selects a free-form part of the picture to move, copy, or edit.`,imagePosition:`0 0`},rt={tooltip:`Select`,helpText:`Selects a rectangular part of the picture to move, copy, or edit.`,imagePosition:`-16px 0`,instance:new Ye},it={tooltip:`Eraser/Color Eraser`,helpText:`Erases a portion of the picture, using the selected eraser shape.`,imagePosition:`-32px 0`,instance:new Ze,cursor:`none`},at={tooltip:`Fill With Color`,helpText:`Fills an area with the current drawing color.`,imagePosition:`-48px 0`,instance:new He},ot={tooltip:`Pick Color`,helpText:`Picks up a color from the picture for drawing.`,imagePosition:`-64px 0`,instance:new Re},st={tooltip:`Magnifier`,helpText:`Changes the magnification.`,imagePosition:`-80px 0`,instance:new tt,cursor:`zoom-in`},ct={tooltip:`Pencil`,helpText:`Draws a free-form line one pixel wide.`,imagePosition:`-96px 0`,instance:new ze},lt={tooltip:`Brush`,helpText:`Draws using a brush with the selected shape and size.`,imagePosition:`-112px 0`,instance:new We},ut={tooltip:`Airbrush`,helpText:`Draws using an airbrush of the selected size.`,imagePosition:`-128px 0`,instance:new Le},dt={tooltip:`Text`,helpText:`Inserts text into the picture.`,imagePosition:`-144px 0`,instance:new et},ft={tooltip:`Line`,helpText:`Draws a straight line with the selected line width.`,imagePosition:`-160px 0`,instance:new Ke},pt={tooltip:`Curve`,helpText:`Draws a curved line with the selected line width.`,imagePosition:`-176px 0`},mt={tooltip:`Rectangle`,helpText:`Draws a rectangle with the selected fill style.`,imagePosition:`-192px 0`,instance:new Ge},ht={tooltip:`Polygon`,helpText:`Draws a polygon with the selected fill style.`,imagePosition:`-208px 0`},gt={tooltip:`Ellipse`,helpText:`Draws an ellipse with the selected fill style.`,imagePosition:`-224px 0`,instance:new Qe},_t={tooltip:`Rounded Rectangle`,helpText:`Draws a rounded rectangle with the selected fill style.`,imagePosition:`-240px 0`},vt=[nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t],yt={primary:`#000000`,secondary:`#FFFFFF`},bt=`#000000.#808080.#800000.#808000.#008000.#008080.#000080.#800080.#808040.#004040.#0080FF.#004080.#4000FF.#804000.#FFFFFF.#C0C0C0.#FF0000.#FFFF00.#00FF00.#00FFFF.#0000FF.#FF00FF.#FFFF80.#00FF80.#80FFFF.#8080FF.#FF0080.#FF8040`.split(`.`),Y={lineWidth:1,colors:{...yt},palette:[...bt],selectedPaletteIndex:0,previewColor:null,drawOpaque:!0,eraserSize:8,magnifierSize:1,previousMagnifierSize:4,showGrid:!1,brush:{type:`circle`,size:4},airbrushSize:9,fillStyle:{stroke:!0,fill:!1},tool:ct,previousEditingTool:ct,selection:null,view:{statusBar:!0,colorBox:!0,toolBox:!0,textToolbar:!1},document:{title:`untitled`,dirty:!1},text:{active:!1,font:`Arial`,size:12,showToolbar:!0,bold:!1,italic:!1,underline:!1},element:null,previewCanvas:null,previewContext:null,canvas:null,context:null,history:null},xt=[8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72],St=[`Arial`,`Verdana`,`Tahoma`,`Trebuchet MS`,`Times New Roman`,`Georgia`,`Garamond`,`Courier New`,`Brush Script MT`],Ct;async function wt(){return Ct||Promise.resolve([...St])}function Tt(){return Ct?!1:`queryLocalFonts`in window?(Ct=Et(),!0):!1}async function Et(){let e=[];for await(let t of await window.queryLocalFonts())e.push(t.family);return e.filter((t,n)=>e.indexOf(t)===n)}var Dt=class extends B{constructor(...e){super(...e),this.drawingContext=Y,this.fonts=[],this.fontSizes=xt}static get styles(){return s`
      paint-window {
        position: absolute;
        top: 0;
      }

      .content {
        display: flex;
        align-items: start;
        padding: 4px 7px 4px 5px;
      }

      .font-list {
        width: 164px;
        height: 20px;

        margin-right: 9px;
      }

      .font-sizes {
        width: 72px;
        height: 21px;

        margin-right: 11px;
      }

      paint-button {
        height: 22px;
        width: 23px;
      }

      paint-button svg {
        width: 10px;
        height: 10px;
      }

      paint-button svg path {
        fill: currentColor;
      }
    `}async firstUpdated(e){super.firstUpdated(e),this.fonts=await wt(),this.addEventListener(`close`,()=>{this.drawingContext.text.showToolbar=!1,$e(this.drawingContext),K(this)})}updateFont(e){this.drawingContext.text.font=e.target.value,K(this)}updateSize(e){this.drawingContext.text.size=parseInt(e.target.value),K(this)}toggle(e){this.drawingContext.text[e]=!this.drawingContext.text[e],K(this)}render(){return this.drawingContext.view.textToolbar?R`
      <paint-window caption="Fonts" tool close>
        <div class="content">
          <select
            class="font-list"
            @click="${()=>this.onFontListClick()}"
            @change="${e=>this.updateFont(e)}"
          >
            ${this.fonts.map(e=>R` <option
                  value="${e}"
                  ?selected="${e===this.drawingContext.text.font}"
                >
                  ${e}
                </option>`)}
          </select>
          <select
            class="font-sizes"
            @change="${e=>this.updateSize(e)}"
          >
            ${this.fontSizes.map(e=>R` <option
                  value="${e}"
                  ?selected="${e===this.drawingContext.text.size}"
                >
                  ${e}
                </option>`)}
          </select>
          <paint-button @click="${()=>this.toggle(`bold`)}" tabindex="0">
            <svg><path d="M0,0h7v1h1v3H7v1h1v3H7v1H0V8h5V1H4v3h1v1H4v3H1V1H0z"></svg>
          </paint-button>
          <paint-button @click="${()=>this.toggle(`italic`)}" tabindex="0">
            <svg><path d="M4,0h5v1H7v1H6v2H5v2H4v2h1v1H0V8h2V6h1V4h1V2h1V1H4z"></svg>
          </paint-button>
          <paint-button @click="${()=>this.toggle(`underline`)}" tabindex="0">
            <svg><path d="M0,0h3v5h2V0h2v9H1V8h6V7H2V6H1V1H0z"></svg>
          </paint-button>
        </div>
      </paint-window>
    `:R``}async onFontListClick(){Tt()&&(this.fonts=await wt())}};W([H({type:Object})],Dt.prototype,`drawingContext`,void 0),W([U()],Dt.prototype,`fonts`,void 0),Dt=W([V(`paint-dialog-text-toolbar`)],Dt);var Ot=class extends B{constructor(...e){super(...e),this.prompt=``,this.title=``,this.icon=null,this.layout=`ok`}static get styles(){return s`
      paint-window {
        position: absolute;
        top: 0;

        max-width: 400px;
      }

      paint-window .content {
        margin: 11px;
        display: grid;

        grid-template-columns: auto 1fr;
        grid-row-gap: 17px;
        align-items: center;
      }

      paint-window img.icon {
        width: 32px;
        height: 32px;

        margin-right: 17px;

        image-rendering: pixelated;
      }

      paint-window .prompt {
        grid-column-start: 2;
        grid-column-end: 3;

        white-space: pre-wrap;
      }

      paint-window .buttons {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 3;

        display: flex;
        justify-content: center;
      }

      paint-window .buttons paint-button + paint-button {
        margin-left: 6px;
      }
    `}firstUpdated(e){super.firstUpdated(e),requestAnimationFrame(()=>this.window?.center())}render(){return R`
      <paint-window caption="${this.title}" close>
        <div class="content">
          ${this.getIcon()}
          <div class="prompt">${this.prompt}</div>
          <div class="buttons">${this.getDialogLayout()}</div>
        </div>
      </paint-window>
    `}getIcon(){return this.icon===`warning`?R` <img
        class="icon"
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAElBMVEUAAAAAAAAAgACAgIDAwMD//wCJvpKsAAAAAXRSTlMAQObYZgAAAIxJREFUKJFlj9EJAjAMREN1gXy4gf0vZAGhOoCQ7L+KNpWkZ+6vD+71QrRzJ0yzxz+YA0A3LUCwYTYLGNAwlDgQaDBImr35dkq6Ay1ADsUCKQkworGBFiC5W/mV5yywhoVk7TayPMeBZ0uaZWYCtpB4w7/9SQBIKDgkp9MlHYAWIHR9nplfq2CILvAeH0wjUtKxjmmsAAAAAElFTkSuQmCC"
      />`:this.icon===`question`?R` <img
        class="icon"
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAD1BMVEX///////8AAP/AwMAAAACA2A1yAAAAAXRSTlMAQObYZgAAAIJJREFUeNqtk8EKwyAUBLPu/v83F5LQTacWC8lcPMyoCM/tOZIy1brwnUQg0+3jhIdE9S0UBoNBDI9AsXlB1500OIwY2NdA9Q2MYNQ3gF8HWgSaBKWeQWHAO+C9fRR4wz8Bx6k+9fOJ8s7PmawveUtoHHLKeiaBBkex+l8IiO2bBXkBpqwEhmxT96QAAAAASUVORK5CYII="
      />`:R``}getDialogLayout(){if(this.layout===`ok`)return R` <paint-button
        @click="${()=>this.onClose(`ok`)}"
        tabindex="0"
        >OK
      </paint-button>`;if(this.layout===`yes-no-cancel`)return R`
        <paint-button @click="${()=>this.onClose(`yes`)}" tabindex="0"
          >${G(`Yes`,`Y`)}
        </paint-button>
        <paint-button @click="${()=>this.onClose(`no`)}" tabindex="0"
          >${G(`No`,`N`)}
        </paint-button>
        <paint-button @click="${()=>this.onClose(`cancel`)}" tabindex="0"
          >Cancel
        </paint-button>
      `;throw Error(`Unsupported Layout.`)}onClose(e){this.dispatchEvent(new CustomEvent(`close`,{detail:e}))}};W([H({type:String})],Ot.prototype,`prompt`,void 0),W([H({type:String})],Ot.prototype,`title`,void 0),W([H({type:String})],Ot.prototype,`icon`,void 0),W([H({type:String})],Ot.prototype,`layout`,void 0),W([Oe(`paint-window`)],Ot.prototype,`window`,void 0),Ot=W([V(`paint-dialog-message-box`)],Ot);var kt,At=kt=class extends B{static get styles(){return s`
      :host {
        border: 1px solid var(--button-face);
        border-right-color: var(--button-darker);
        border-bottom-color: var(--button-darker);
        background-color: var(--button-face);
        display: flex;
        position: absolute;
        z-index: var(--z-index-dialog);
        box-sizing: border-box;
      }

      .wrapper {
        border: 1px solid var(--button-light);
        border-right-color: var(--button-dark);
        border-bottom-color: var(--button-dark);
        padding: 1px;
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      div.title-bar {
        background-color: var(--highlight);
        color: var(--highlight-text);
        height: 18px;
        display: flex;
        font-weight: bold;
        align-items: center;
        box-sizing: border-box;
        padding: 1px 2px;
        margin-bottom: 1px;
      }

      :host[tool] div.title-bar {
        height: 15px;
        font-size: 9px;
        /* TODO: More stuff */
      }

      div.title-bar span.title {
        flex: 1;
      }

      paint-window-title-bar-button:last-of-type {
        margin-left: 2px;
      }
    `}constructor(){super(),this.caption=``,this.help=!1,this.close=!1,this.position={x:100,y:50},this.mousePosition=null,this.pointerMoveListener=this.onPointerMove.bind(this),this.pointerUpListener=this.onPointerUp.bind(this),document.addEventListener(`pointermove`,this.pointerMoveListener),document.addEventListener(`pointerup`,this.pointerUpListener),this.moveWindow()}render(){return R`
      <div class="wrapper">
        <div class="title-bar" @pointerdown="${this.onPointerDown}">
          <span class="title">${this.caption}</span>
          ${this.help?R`<paint-window-title-bar-button
                help
              ></paint-window-title-bar-button>`:``}
          ${this.close?R`<paint-window-title-bar-button
                close
                @click="${this.onClose}"
              ></paint-window-title-bar-button>`:``}
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`pointermove`,this.pointerMoveListener),document.removeEventListener(`pointerup`,this.pointerUpListener)}onPointerDown({clientX:e,clientY:t}){this.mousePosition={clientX:e,clientY:t}}onPointerMove({clientX:e,clientY:t}){if(this.mousePosition){e=kt.clamp(e,0,innerWidth),t=kt.clamp(t,0,innerHeight);let n=e-this.mousePosition.clientX,r=t-this.mousePosition.clientY;this.position.x=this.position.x+n,this.position.y=this.position.y+r,this.mousePosition={clientX:e,clientY:t},this.moveWindow()}}static clamp(e,t,n){return Math.min(Math.max(e,t),n)}onPointerUp(){this.mousePosition=null}center(){let{width:e,height:t}=this.getBoundingClientRect();this.position={x:(innerWidth-e)/2,y:(innerHeight-t)/2},this.moveWindow()}moveWindow(){this.style.transform=`translate(${this.position.x}px, ${this.position.y}px)`}onClose(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}};W([H({type:String})],At.prototype,`caption`,void 0),W([H({type:Boolean})],At.prototype,`help`,void 0),W([H({type:Boolean})],At.prototype,`close`,void 0),At=kt=W([V(`paint-window`)],At);var jt=class extends B{static get styles(){return s`
      :host {
        box-sizing: border-box;
        width: 16px;
        height: 14px;
        border: 1px solid var(--button-light);
        border-bottom-color: var(--button-darker);
        border-right-color: var(--button-darker);
        background-color: var(--button-face);
        color: var(--button-text);
      }

      div.wrapper {
        box-sizing: border-box;
        height: 12px;
        border: 1px solid transparent;
        border-bottom-color: var(--button-dark);
        border-right-color: var(--button-dark);
        display: flex;
        justify-content: center;
      }

      :host(:active:hover) {
        border: 1px solid var(--button-darker);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);
      }

      :host(:active:hover) div.wrapper {
        border: 1px solid var(--canvas);
        border-bottom-color: transparent;
        border-right-color: transparent;
      }

      :host(:active:hover) svg {
        margin: 1px 0 0 1px;
      }

      path {
        fill: currentColor;
      }
    `}constructor(){super(),this.help=!1,this.close=!1,this.addEventListener(`pointerdown`,e=>{e.stopPropagation()})}render(){return R` <div class="wrapper">${this.getButton()}</div> `}getButton(){if(this.help)return R`
        <svg viewBox="0 0 6 9" width="6" height="9">
          <path d="M0,1h1V0h4v1h1v2H5v1H4v2H2V4h1V3h1V1H2v2H0V1z" />
          <path d="M2,7h2v2H2V7z" />
        </svg>
      `;if(this.close)return R`
        <svg viewBox="0 0 8 9" width="8" height="9">
          <path
            d="M0,1h2v1h1v1h2V2h1V1h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V7H5V6H3v1H2v1H0V7h1V6h1V5h1V4H2V3H1V2H0V1z"
          />
        </svg>
      `}};W([H({type:Boolean})],jt.prototype,`help`,void 0),W([H({type:Boolean})],jt.prototype,`close`,void 0),jt=W([V(`paint-window-title-bar-button`)],jt);var Mt=typeof navigator<`u`?navigator.userAgent.toLowerCase().indexOf(`firefox`)>0:!1;function Nt(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent(`on${t}`,n)}function Pt(e,t,n,r){e&&(e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent(`on${t}`,n))}function Ft(e,t){let n=t.slice(0,t.length-1),r=[];for(let t=0;t<n.length;t++)r.push(e[n[t].toLowerCase()]);return r}function It(e){typeof e!=`string`&&(e=``),e=e.replace(/\s/g,``);let t=e.split(`,`),n=t.lastIndexOf(``);for(;n>=0;)t[n-1]+=`,`,t.splice(n,1),n=t.lastIndexOf(``);return t}function Lt(e,t){let n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,i=!0;for(let e=0;e<n.length;e++)r.indexOf(n[e])===-1&&(i=!1);return i}function Rt(e){let t=e.keyCode||e.which||e.charCode;return e.key&&/^[a-z]$/i.test(e.key)?e.key.toUpperCase().charCodeAt(0):(e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t)}var zt={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Mt?173:189,"=":Mt?61:187,";":Mt?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},X={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},Bt={16:`shiftKey`,18:`altKey`,17:`ctrlKey`,91:`metaKey`,shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Z={16:!1,18:!1,17:!1,91:!1},Q={};for(let e=1;e<20;e++)zt[`f${e}`]=111+e;var $=[],Vt=null,Ht=null,Ut=`all`,Wt=new Map,Gt=e=>zt[e.toLowerCase()]||X[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),Kt=e=>Object.keys(zt).find(t=>zt[t]===e),qt=e=>Object.keys(X).find(t=>X[t]===e),Jt=e=>{Ut=e||`all`},Yt=()=>Ut||`all`,Xt=()=>$.slice(0),Zt=()=>$.map(e=>Kt(e)||qt(e)||String.fromCharCode(e)),Qt=()=>{let e=[];return Object.keys(Q).forEach(t=>{Q[t].forEach(({key:t,scope:n,mods:r,shortcut:i})=>{e.push({scope:n,shortcut:i,mods:r,keys:t.split(`+`).map(e=>Gt(e))})})}),e},$t=e=>{let t=e.target||e.srcElement,{tagName:n}=t,r=!0,i=n===`INPUT`&&![`checkbox`,`radio`,`range`,`button`,`file`,`reset`,`submit`,`color`].includes(t.type);return(t.isContentEditable||(i||n===`TEXTAREA`||n===`SELECT`)&&!t.readOnly)&&(r=!1),r},en=e=>(typeof e==`string`&&(e=Gt(e)),$.indexOf(e)!==-1),tn=(e,t)=>{let n,r;e||=Yt();for(let t in Q)if(Object.prototype.hasOwnProperty.call(Q,t))for(n=Q[t],r=0;r<n.length;)n[r].scope===e?n.splice(r,1).forEach(({element:e})=>un(e)):r++;Yt()===e&&Jt(t||`all`)};function nn(e){let t=Rt(e);e.key&&e.key.toLowerCase()===`capslock`&&(t=Gt(e.key));let n=$.indexOf(t);if(n>=0&&$.splice(n,1),e.key&&e.key.toLowerCase()===`meta`&&$.splice(0,$.length),(t===93||t===224)&&(t=91),t in Z){Z[t]=!1;for(let e in X)X[e]===t&&(cn[e]=!1)}}var rn=(e,...t)=>{if(e===void 0)Object.keys(Q).forEach(e=>{Array.isArray(Q[e])&&Q[e].forEach(e=>an(e)),delete Q[e]}),un(null);else if(Array.isArray(e))e.forEach(e=>{e.key&&an(e)});else if(typeof e==`object`)e.key&&an(e);else if(typeof e==`string`){let[n,r]=t;typeof n==`function`&&(r=n,n=``),an({key:e,scope:n,method:r,splitKey:`+`})}},an=({key:e,scope:t,method:n,splitKey:r=`+`})=>{It(e).forEach(e=>{let i=e.split(r),a=i.length,o=i[a-1],s=o===`*`?`*`:Gt(o);if(!Q[s])return;t||=Yt();let c=a>1?Ft(X,i):[],l=[];Q[s]=Q[s].filter(e=>{let r=(n?e.method===n:!0)&&e.scope===t&&Lt(e.mods,c);return r&&l.push(e.element),!r}),l.forEach(e=>un(e))})};function on(e,t,n,r){if(t.element!==r)return;let i;if(t.scope===n||t.scope===`all`){i=t.mods.length>0;for(let e in Z)Object.prototype.hasOwnProperty.call(Z,e)&&(!Z[e]&&t.mods.indexOf(+e)>-1||Z[e]&&t.mods.indexOf(+e)===-1)&&(i=!1);(t.mods.length===0&&!Z[16]&&!Z[18]&&!Z[17]&&!Z[91]||i||t.shortcut===`*`)&&(t.keys=[],t.keys=t.keys.concat($),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&=!0))}}function sn(e,t){let n=Q[`*`],r=Rt(e);if(e.key&&e.key.toLowerCase()===`capslock`||!(cn.filter||$t).call(this,e))return;if((r===93||r===224)&&(r=91),$.indexOf(r)===-1&&r!==229&&$.push(r),[`metaKey`,`ctrlKey`,`altKey`,`shiftKey`].forEach(t=>{let n=Bt[t];e[t]&&$.indexOf(n)===-1?$.push(n):!e[t]&&$.indexOf(n)>-1?$.splice($.indexOf(n),1):t===`metaKey`&&e[t]&&($=$.filter(e=>e in Bt||e===r))}),r in Z){Z[r]=!0;for(let t in X)Object.prototype.hasOwnProperty.call(X,t)&&(cn[t]=e[Bt[X[t]]]);if(!n)return}for(let t in Z)Object.prototype.hasOwnProperty.call(Z,t)&&(Z[t]=e[Bt[t]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState(`AltGraph`)&&($.indexOf(17)===-1&&$.push(17),$.indexOf(18)===-1&&$.push(18),Z[17]=!0,Z[18]=!0);let i=Yt();if(n)for(let r=0;r<n.length;r++)n[r].scope===i&&(e.type===`keydown`&&n[r].keydown||e.type===`keyup`&&n[r].keyup)&&on(e,n[r],i,t);if(!(r in Q))return;let a=Q[r],o=a.length;for(let n=0;n<o;n++)if((e.type===`keydown`&&a[n].keydown||e.type===`keyup`&&a[n].keyup)&&a[n].key){let r=a[n],{splitKey:o}=r,s=r.key.split(o),c=[];for(let e=0;e<s.length;e++)c.push(Gt(s[e]));c.sort().join(``)===$.sort().join(``)&&on(e,r,i,t)}}var cn=function e(t,n,r){$=[];let i=It(t),a=[],o=`all`,s=document,c=0,l=!1,u=!0,d=`+`,f=!1,p=!1;if(r===void 0&&typeof n==`function`&&(r=n),Object.prototype.toString.call(n)===`[object Object]`){let e=n;e.scope&&(o=e.scope),e.element&&(s=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(u=e.keydown),e.capture!==void 0&&(f=e.capture),typeof e.splitKey==`string`&&(d=e.splitKey),e.single===!0&&(p=!0)}for(typeof n==`string`&&(o=n),p&&rn(t,o);c<i.length;c++){let e=i[c].split(d);a=[],e.length>1&&(a=Ft(X,e));let t=e[e.length-1];t=t===`*`?`*`:Gt(t),t in Q||(Q[t]=[]),Q[t].push({keyup:l,keydown:u,scope:o,mods:a,shortcut:i[c],method:r,key:i[c],splitKey:d,element:s})}if(s!==void 0&&typeof window<`u`){if(!Wt.has(s)){let e=(e=window.event)=>sn(e,s),t=(e=window.event)=>{sn(e,s),nn(e)};Wt.set(s,{keydownListener:e,keyupListenr:t,capture:f}),Nt(s,`keydown`,e,f),Nt(s,`keyup`,t,f)}if(!Vt){let e=()=>{$=[]};Vt={listener:e,capture:f},Nt(window,`focus`,e,f)}if(!Ht&&typeof document<`u`){let t=()=>{$=[];for(let e in Z)Z[e]=!1;for(let t in X)e[t]=!1},n=t,r=t;document.addEventListener(`fullscreenchange`,n),document.addEventListener(`webkitfullscreenchange`,r),Ht={fullscreen:n,webkit:r}}}};function ln(e,t=`all`){Object.keys(Q).forEach(n=>{Q[n].filter(n=>n.scope===t&&n.shortcut===e).forEach(e=>{e&&e.method&&e.method({},e)})})}function un(e){let t=Object.values(Q).flat();if(t.findIndex(({element:t})=>t===e)<0&&e){let{keydownListener:t,keyupListenr:n,capture:r}=Wt.get(e)||{};t&&n&&(Pt(e,`keyup`,n,r),Pt(e,`keydown`,t,r),Wt.delete(e))}if(t.length<=0||Wt.size<=0){if(Array.from(Wt.keys()).forEach(e=>{let{keydownListener:t,keyupListenr:n,capture:r}=Wt.get(e)||{};t&&n&&(Pt(e,`keyup`,n,r),Pt(e,`keydown`,t,r),Wt.delete(e))}),Wt.clear(),Object.keys(Q).forEach(e=>delete Q[e]),Vt){let{listener:e,capture:t}=Vt;Pt(window,`focus`,e,t),Vt=null}Ht&&typeof document<`u`&&(document.removeEventListener(`fullscreenchange`,Ht.fullscreen),document.removeEventListener(`webkitfullscreenchange`,Ht.webkit),Ht=null)}}var dn={getPressedKeyString:Zt,setScope:Jt,getScope:Yt,deleteScope:tn,getPressedKeyCodes:Xt,getAllKeyCodes:Qt,isPressed:en,filter:$t,trigger:ln,unbind:rn,keyMap:zt,modifier:X,modifierMap:Bt};for(let e in dn){let t=e;Object.prototype.hasOwnProperty.call(dn,t)&&(cn[t]=dn[t])}if(typeof window<`u`){let e=window.hotkeys;cn.noConflict=t=>(t&&window.hotkeys===cn&&(window.hotkeys=e),cn),window.hotkeys=cn}function fn(e){e.magnifierSize!==1&&e.tool.instance instanceof et&&(e.tool=e.previousEditingTool,e.text.active=!1,$e(e))}function pn(e){return`createImageBitmap`in self?createImageBitmap(e):new Promise(t=>{let n=new Image;n.onload=()=>{URL.revokeObjectURL(n.src),t(n)},n.src=URL.createObjectURL(e)})}async function mn(e,{canvas:t,previewCanvas:n,context:r}){let i=await pn(e);t&&n&&r&&(t.width=n.width=i.width,t.height=n.height=i.height,r.fillStyle=`white`,r.fillRect(0,0,i.width,i.height),r.drawImage(i,0,0))}function hn(e){`launchQueue`in window&&window.launchQueue.setConsumer(async t=>{let[n]=t.files;if(n){let t=await n.getFile();e.document.title=t.name,e.document.handle=n,await mn(t,e)}})}var gn=3,_n=class{constructor(e){this.drawingContext=e,this.stack=[],this.stackPointer=-1}clear(){this.stack.length=0,this.stackPointer=-1}commit(){this.drawingContext.document.dirty=!0,this.stack.splice(this.stackPointer+1),this.stack.length===gn+1&&this.stack.shift();let{canvas:e,context:t}=this.drawingContext,n=e?.width??0,r=e?.height??0,i=t?.getImageData(0,0,n,r);if(r&&n&&i){let e=this.stack.push({height:r,width:n,imageData:i});this.stackPointer=e-1}K(this.drawingContext.element)}undo(){if(!this.canUndo())throw Error(`No actions to undo.`);this.stackPointer--,this.restoreEntry()}redo(){if(!this.canRedo())throw Error(`No actions to redo.`);this.stackPointer++,this.restoreEntry()}restoreEntry(){let{height:e,width:t,imageData:n}=this.stack[this.stackPointer],{canvas:r,previewCanvas:i,context:a}=this.drawingContext;r&&i&&a&&(r.height=i.height=e,r.width=i.width=t,a.putImageData(n,0,0)),K(this.drawingContext.element)}canUndo(){return this.stackPointer>0}canRedo(){return this.stackPointer>=0&&this.stackPointer<this.stack.length-1}};function vn(e){return e=e.replace(/(Ctrl\+(\S+))/g,`$1,⌘+$2`),e=e.replace(/Shft/g,`shift`),e=e.replace(/PgUp/g,`pageup`),e=e.replace(/PgDn/g,`pagedown`),e}function yn(e,t,{document:n,element:r}){n.handle=e,n.title=t,K(r)}function bn(e){e.addEventListener(`dragover`,e=>{e.preventDefault()}),e.addEventListener(`drop`,async t=>{t.preventDefault();let{drawingContext:n}=e,r=[...t.dataTransfer?.items??[]].filter(({kind:e})=>e===`file`);for(let e of r){let t=await e.getAsFileSystemHandle();if(!(!t||!xn(t))){await mn(await t.getFile(),n),yn(t,t.name,n);return}}})}function xn(e){return e.kind===`file`}var Sn=class{canExecute({selection:e}){return!!e}execute(e){if(e.selection&&e.context){e.context.fillStyle=e.colors.secondary;let{x:t,y:n,width:r,height:i}=e.selection;e.context.fillRect(t,n,r,i),e.selection=null}}};function Cn(e){return new Promise((t,n)=>{e.toBlob(e=>{e?t(e):n(`Blob callback returned null!`)})})}async function wn(e,{x:t,y:n,width:r,height:i}){let a=e.getImageData(t,n,r,i),o=document.createElement(`canvas`);return o.width=r,o.height=i,o.getContext(`2d`)?.putImageData(a,0,0),Cn(o)}var Tn=class{canExecute({selection:e}){return`write`in navigator.clipboard&&!!e}async execute({context:e,selection:t}){e&&t&&await navigator.clipboard.write([new ClipboardItem({"image/png":wn(e,t)})])}},En=(()=>{if(typeof self>`u`)return!1;if(`top`in self&&self!==top)try{top.window.document._=0}catch{return!1}return`showOpenFilePicker`in self})(),Dn=En?Promise.resolve().then(function(){return Mn}):Promise.resolve().then(function(){return Ln});async function On(...e){return(await Dn).default(...e)}En?Promise.resolve().then(function(){return Fn}):Promise.resolve().then(function(){return Rn});var kn=En?Promise.resolve().then(function(){return In}):Promise.resolve().then(function(){return zn});async function An(...e){return(await kn).default(...e)}var jn=async e=>{let t=await e.getFile();return t.handle=e,t},Mn={__proto__:null,default:async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((e,n)=>{t[n]={description:e.description||`Files`,accept:{}},e.mimeTypes?e.mimeTypes.map(r=>{t[n].accept[r]=e.extensions||[]}):t[n].accept[`*/*`]=e.extensions||[]});let n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),r=await Promise.all(n.map(jn));return e[0].multiple?r:r[0]}};function Nn(e){function t(e){if(Object(e)!==e)return Promise.reject(TypeError(e+` is not an object.`));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return Nn=function(e){this.s=e,this.n=e.next},Nn.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return n===void 0?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return n===void 0?Promise.reject(e):t(n.apply(this.s,arguments))}},new Nn(e)}var Pn=async(e,t,n=e.name,r)=>{let i=[],a=[];var o,s=!1,c=!1;try{for(var l,u=function(e){var t,n,r,i=2;for(typeof Symbol<`u`&&(n=Symbol.asyncIterator,r=Symbol.iterator);i--;){if(n&&(t=e[n])!=null)return t.call(e);if(r&&(t=e[r])!=null)return new Nn(t.call(e));n=`@@asyncIterator`,r=`@@iterator`}throw TypeError(`Object is not async iterable`)}(e.values());s=!(l=await u.next()).done;s=!1){let o=l.value,s=`${n}/${o.name}`;o.kind===`file`?a.push(o.getFile().then(t=>(t.directoryHandle=e,t.handle=o,Object.defineProperty(t,`webkitRelativePath`,{configurable:!0,enumerable:!0,get:()=>s})))):o.kind!==`directory`||!t||r&&r(o)||i.push(Pn(o,t,s,r))}}catch(e){c=!0,o=e}finally{try{s&&u.return!=null&&await u.return()}finally{if(c)throw o}}return[...(await Promise.all(i)).flat(),...await Promise.all(a)]},Fn={__proto__:null,default:async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||`read`;let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await t.values()).next()).done?[t]:Pn(t,e.recursive,void 0,e.skipDirectory)}},In={__proto__:null,default:async(e,t=[{}],n=null,r=!1,i=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||`Untitled`;let a=[],o=null;if(e instanceof Blob&&e.type?o=e.type:e.headers&&e.headers.get(`content-type`)&&(o=e.headers.get(`content-type`)),t.forEach((e,t)=>{a[t]={description:e.description||`Files`,accept:{}},e.mimeTypes?(t===0&&o&&e.mimeTypes.push(o),e.mimeTypes.map(n=>{a[t].accept[n]=e.extensions||[]})):o?a[t].accept[o]=e.extensions||[]:a[t].accept[`*/*`]=e.extensions||[]}),n)try{await n.getFile()}catch(e){if(n=null,r)throw e}let s=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:a,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&i&&i(s);let c=await s.createWritable();return`stream`in e?(await e.stream().pipeTo(c),s):`body`in e?(await e.body.pipeTo(c),s):(await c.write(await e),await c.close(),s)}},Ln={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,n)=>{let r=document.createElement(`input`);r.type=`file`;let i=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();r.multiple=e[0].multiple||!1,r.accept=i||``,r.style.display=`none`,document.body.append(r),r.addEventListener(`cancel`,()=>{r.remove(),n(new DOMException(`The user aborted a request.`,`AbortError`))}),r.addEventListener(`change`,()=>{r.remove(),t(r.multiple?Array.from(r.files):r.files[0])}),`showPicker`in HTMLInputElement.prototype?r.showPicker():r.click()}))},Rn={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,n)=>{let r=document.createElement(`input`);r.type=`file`,r.webkitdirectory=!0,r.style.display=`none`,document.body.append(r),r.addEventListener(`cancel`,()=>{r.remove(),n(new DOMException(`The user aborted a request.`,`AbortError`))}),r.addEventListener(`change`,()=>{r.remove();let n=Array.from(r.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(n=n.filter(t=>t.webkitRelativePath.split(`/`).every(t=>!e[0].skipDirectory({name:t,kind:`directory`})))):n=n.filter(e=>e.webkitRelativePath.split(`/`).length===2),t(n)}),`showPicker`in HTMLInputElement.prototype?r.showPicker():r.click()}))},zn={__proto__:null,default:async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let n=document.createElement(`a`),r=e;`body`in e&&(r=await async function(e,t){let n=e.getReader(),r=new ReadableStream({start:e=>async function t(){return n.read().then(({done:n,value:r})=>{if(!n)return e.enqueue(r),t();e.close()})}()}),i=await new Response(r).blob();return n.releaseLock(),new Blob([i],{type:t})}(e.body,e.headers.get(`content-type`))),n.download=t.fileName||`Untitled`,n.href=URL.createObjectURL(await r);let i=()=>{typeof a==`function`&&a()},a=t.legacySetup&&t.legacySetup(i,()=>a(),n);return n.addEventListener(`click`,()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),i()}),n.click(),null}},Bn=class{canExecute({selection:e}){return!!e}async execute({context:e,selection:t}){e&&t&&await An(await wn(e,t))}},Vn=class{constructor(){this.copy=new Tn,this.clearSelection=new Sn}canExecute(e){return this.copy.canExecute(e)&&this.clearSelection.canExecute(e)}async execute(e){await this.copy.execute(e),this.clearSelection.execute(e)}};function Hn({canvas:e,context:t,colors:n,history:r},i=!0){e&&t&&r&&(t.fillStyle=n.secondary,t.fillRect(0,0,e.width,e.height),i&&r.commit())}async function Un(e,t){let{canvas:n,context:r,previewCanvas:i,history:a}=t;if(!(!n||!r||!i)){if(e.width>n.width||e.height>n.height){let a=await je(`The image in the clipboard is larger than the bitmap.
Would you like the bitmap enlarged?`,`question`,`Paint`,`yes-no-cancel`);if(a===`cancel`)return;if(a===`yes`){let a=Math.max(e.width,n.width),o=Math.max(e.height,n.height),s=r.getImageData(0,0,n.width,n.height);n.width=i.width=a,n.height=i.height=o,Hn(t,!1),r.putImageData(s,0,0)}}r.drawImage(e,0,0),a?.commit()}}var Wn=class{canExecute(){return!!navigator.clipboard?.read}async execute(e){let t=await navigator.clipboard.read();for(let n of t)try{for(let t of n.types)t.match(/^image\//)&&await Un(await pn(await n.getType(t)),e)}catch(e){console.error(`Clipboard API paste error`,e)}}},Gn=class{async execute(e){await Un(await pn(await On()),e)}},Kn=class{canExecute(e){return e?.history?.canRedo()??!1}execute(e){e?.history?.redo()}},qn=class{execute(e){if(e.canvas){let{width:t,height:n}=e.canvas;e.selection={x:0,y:0,width:t,height:n},K(e.element)}}},Jn={caption:`Edit`,mnemonic:`E`,helpText:``,entries:[{caption:`Undo`,mnemonic:`U`,shortcut:`Ctrl+Z`,helpText:`Undoes the last action.`,instance:new class{canExecute(e){return e?.history?.canUndo()??!1}execute(e){e?.history?.undo()}}},{caption:`Repeat`,mnemonic:`R`,shortcut:`F4`,helpText:`Redoes the previously undone action.`,instance:new Kn},{separator:!0},{caption:`Cut`,mnemonic:`t`,shortcut:`Ctrl+X`,helpText:`Cuts the selection and puts it on the Clipboard.`,instance:new Vn},{caption:`Copy`,mnemonic:`C`,shortcut:`Ctrl+C`,helpText:`Copies the selection and puts it on the Clipboard.`,instance:new Tn},{caption:`Paste`,mnemonic:`P`,shortcut:`Ctrl+V`,helpText:`Inserts the contents of the Clipboard.`,instance:new Wn},{caption:`Clear Selection`,mnemonic:`l`,shortcut:`Del`,helpText:`Deletes the selection.`,instance:new Sn},{caption:`Select All`,mnemonic:`A`,shortcut:`Ctrl+L`,helpText:`Selects everything.`,instance:new qn},{separator:!0},{caption:`Copy To…`,mnemonic:`o`,helpText:`Copies the selection to a file.`,instance:new Bn},{caption:`Paste From…`,mnemonic:`F`,helpText:`Pastes a file into the selection.`,instance:new Gn}]},Yn=class{async execute(e){if(!e.canvas)return;let t=await An(await Cn(e.canvas),{fileName:e.document.title,extensions:[`.png`],description:`PNG files`});t&&yn(t,t.name,e)}},Xn=class{async execute(e){e.canvas&&e.document.handle?await An(await Cn(e.canvas),void 0,e.document.handle):await new Yn().execute(e)}};async function Zn(e){if(!e.document.dirty)return;let t=await je(`Save changes to ${e.document.title}?`,`warning`,`Paint`,`yes-no-cancel`);if(t===`cancel`)throw Error(`User cancelled operation.`);t===`yes`&&await new Xn().execute(e)}var Qn=class{async execute(e){try{await Zn(e),e.document.dirty=!1,window.close()}catch{}}},$n=class{canExecute({selection:e}){return!e}execute(e){Hn(e)}},er=class{async execute(e){try{await Zn(e),yn(void 0,`untitled`,e),e.palette=[...bt],e.colors={...yt},e.history?.clear(),new $n().execute(e),e.document.dirty=!1}catch{}}},tr=class{async execute(e){let t=await On({extensions:[`.png`],description:`PNG Files`});yn(t.handle,t.name,e),await mn(t,e)}},nr=class{execute(){window.print()}},rr=class{constructor(){this.fakePng=this.getFileFromPngBlob(new Blob,`fake.png`)}canExecute(){return!!navigator.canShare&&navigator.canShare({files:[this.fakePng]})}async execute({canvas:e,document:t}){if(e){let n=await Cn(e);await navigator.share({files:[this.getFileFromPngBlob(n,`${t.title}.png`)],title:t.title})}}getFileFromPngBlob(e,t){return new File([e],t,{type:`image/png`})}},ir={caption:`File`,mnemonic:`F`,helpText:``,entries:[{caption:`New`,mnemonic:`N`,shortcut:`Ctrl+N`,helpText:`Creates a new document.`,instance:new er},{caption:`Open…`,mnemonic:`O`,shortcut:`Ctrl+O`,helpText:`Opens an existing document.`,instance:new tr},{caption:`Save`,mnemonic:`S`,shortcut:`Ctrl+S`,helpText:`Saves the active document.`,instance:new Xn},{caption:`Save As…`,mnemonic:`A`,helpText:`Saves the active document with a new name.`,instance:new Yn},{separator:!0},{caption:`Print Preview`,mnemonic:`v`,helpText:`Displays full pages.`,instance:new nr},{caption:`Page Setup…`,mnemonic:`t`,helpText:`Changes the page layout.`,instance:new nr},{caption:`Print…`,mnemonic:`P`,shortcut:`Ctrl+P`,helpText:`Prints the active document and sets printing options.`,instance:new nr},{separator:!0},{caption:`Send…`,mnemonic:`e`,helpText:`Sends a picture by using mail or fax.`,instance:new rr},{separator:!0},{caption:`Set As Wallpaper (Tiled)`,mnemonic:`W`,helpText:`Tiles this bitmap as the desktop wallpaper.`,instance:null},{caption:`Set As Wallpaper (Centered)`,mnemonic:`l`,helpText:`Centers this bitmap as the desktop wallpaper.`,instance:null},{separator:!0},{caption:`Recent File`,instance:null,helpText:`Opens this document.`},{separator:!0},{caption:`Exit`,mnemonic:`x`,shortcut:`Alt+F4`,helpText:`Quits Paint.`,instance:new Qn}]},ar={caption:`Help`,mnemonic:`H`,helpText:``,entries:[{caption:`Help Topics`,mnemonic:`H`,helpText:`Displays Help for the current task or command.`},{separator:!0},{caption:`About Paint`,mnemonic:`A`,helpText:`Displays program information, version number, and copyright.`,instance:new class{execute(){Ae(`paint-dialog-about`)}}}]},or=class{async execute(e){let{previewCanvas:t,context:n}=e;if(!t||!n)return;let{canvas:r}=n,i=await Ae(`paint-dialog-attributes`,{width:r.width.toString(),height:r.height.toString(),unit:`pels`,color:`colors`});if(!i)return;let a=parseInt(i.width,10),o=parseInt(i.height,10);if(!this.isValidValue(a)||!this.isValidValue(o)){await je(`Bitmaps must be greater than one pixel on a side.`,`warning`,`Paint`);return}let s=n.getImageData(0,0,r.width,r.height);r.width=t.width=a,r.height=t.height=o,Hn(e,!1),n.putImageData(s,0,0),e.history?.commit()}isValidValue(e){return isFinite(e)&&e>0}},sr=class{execute({canvas:e,context:t,selection:n,history:r}){if(t&&e){let i=t.globalCompositeOperation;t.globalCompositeOperation=`difference`,t.fillStyle=`white`,n?t.fillRect(n.x,n.y,n.width,n.height):t.fillRect(0,0,e.width,e.height),t.globalCompositeOperation=i,r?.commit()}}},cr={caption:`Image`,mnemonic:`I`,helpText:``,entries:[{caption:`Flip/Rotate…`,mnemonic:`F`,helpText:`Flips or rotates the picture or a selection.`,instance:new class e{async execute({context:t,canvas:n,previewCanvas:r,history:i}){let a=await Ae(`paint-dialog-flip-and-rotate`);!a||!n||!t||!r||!i||e.flipOrRotate(a,n,r,t,i)}static flipOrRotate(t,n,r,i,a){let o=e.cloneCanvas(n);t.action===`flip`?e.flip(t.param,n,i):t.action===`rotate`&&e.rotate(t.param,n,r,i),i.drawImage(o,0,0),i.setTransform(1,0,0,1,0,0),a.commit()}static cloneCanvas(e){let t=document.createElement(`canvas`);return t.width=e.width,t.height=e.height,t.getContext(`2d`)?.drawImage(e,0,0),t}static flip(e,t,n){e===`horizontal`?(n.translate(t.width,0),n.scale(-1,1)):e===`vertical`&&(n.translate(0,t.height),n.scale(1,-1))}static rotate(t,n,r,i){t===90?(e.rotateCanvas(n,r),i.translate(n.width,0),i.rotate(e.getRadianAngle(90))):t===180?(i.translate(n.width,n.height),i.rotate(e.getRadianAngle(180))):t===270&&(e.rotateCanvas(n,r),i.translate(0,n.height),i.rotate(e.getRadianAngle(270)))}static rotateCanvas(e,t){let{height:n,width:r}=e;e.height=t.height=r,e.width=t.width=n}static getRadianAngle(e){return e*Math.PI/180}}},{caption:`Stretch/Skew…`,mnemonic:`S`,shortcut:`Ctrl+W`,helpText:`Stretches or skews the picture or a selection.`},{caption:`Invert Colors`,mnemonic:`I`,shortcut:`Ctrl+I`,helpText:`Inverts the colors of the picture or a selection.`,instance:new sr},{caption:`Attributes…`,mnemonic:`A`,shortcut:`Ctrl+E`,helpText:`Changes the attributes of the picture.`,instance:new or},{caption:`Clear Image`,mnemonic:`C`,shortcut:`Ctrl+Shft+N`,helpText:`Clears the picture or selection.`,instance:new $n}]},lr=class{async execute({palette:e}){let t=e.length,n=4+t*4,r=24+t*4,i=new ArrayBuffer(r),a=new Uint8Array(i),o=new DataView(i),s=new TextEncoder;a.set(s.encode(`RIFF`)),o.setUint32(4,r-8,!0),a.set(s.encode(`PAL `),8),a.set(s.encode(`data`),12),o.setUint32(16,n,!0),o.setUint16(20,768,!0),o.setUint16(22,t,!0);let c=document.createElement(`canvas`).getContext(`2d`);for(let n=0;n<t;n++){c.fillStyle=e[n],c.fillRect(0,0,1,1);let[t,r,i]=c.getImageData(0,0,1,1).data,a=24+n*4;o.setUint8(a,t),o.setUint8(a+1,r),o.setUint8(a+2,i),o.setUint8(a+3,0)}await An(new Blob([i],{type:`application/octet-stream`}),{fileName:`untitled.pal`,extensions:[`.pal`],description:`Palette`})}},ur=class{async execute(e){try{let t=await On({extensions:[`.pal`],description:`Palette`});await this.updateContextFromFile(t,e)}catch{}}async updateContextFromFile(e,t){try{let n=await e.arrayBuffer();this.readPalette(n).forEach((e,n)=>t.palette[n]=e),K(t.element)}catch{await je(`${e.name}\nPaint cannot open this file.\nThis file is not in the correct format.`,`warning`,`Paint`)}}readPalette(e){let t=new DataView(e),n=new TextDecoder;if(n.decode(e.slice(0,4))!==`RIFF`)throw Error(`Non-RIFF palettes are not supported.`);if(n.decode(e.slice(8,12))!==`PAL `)throw Error(`Only PAL form types are supported.`);if(n.decode(e.slice(12,16))!==`data`)throw Error(`Expected a data chunk.`);let r=[],i=t.getUint16(22,!0);for(let e=0;e<i;e++){let n=24+e*4,i=t.getUint8(n),a=t.getUint8(n+1),o=t.getUint8(n+2);r.push(`rgb(${i} ${a} ${o})`)}return r.slice(0,26)}},dr=class{isChecked({drawOpaque:e}){return e}execute(e){e.drawOpaque=!e.drawOpaque,K(e.element)}},fr={caption:`Options`,mnemonic:`O`,helpText:``,entries:[{caption:`Edit Colors…`,mnemonic:`E`,helpText:`Creates a new color.`,instance:new class{execute(e){e.element?.dispatchEvent(new CustomEvent(`edit-color`))}}},{caption:`Get Colors…`,mnemonic:`G`,helpText:`Uses a previously saved palette of colors.`,instance:new ur},{caption:`Save Colors…`,mnemonic:`S`,helpText:`Saves the current palette of colors to a file.`,instance:new lr},{caption:`Draw Opaque`,mnemonic:`D`,helpText:`Makes the current selection either opaque or transparent.`,instance:new dr}]},pr=class{async execute(e){let t=await Ae(`paint-dialog-custom-zoom`,{currentMagnifierSize:e.magnifierSize});t?.magnifierSize&&(e.magnifierSize=t.magnifierSize,K(e.element))}},mr=class{execute(e){e.magnifierSize=4,K(e.element)}},hr=class{execute(e){e.magnifierSize=1,K(e.element)}},gr=class{isChecked(e){return e.text.showToolbar??!1}canExecute(e){return e.text.active}execute(e){e.text.showToolbar=!e.text.showToolbar,$e(e),K(e.element)}},_r=class{async execute({canvas:e}){e&&await e.requestFullscreen()}},vr=class{isChecked({view:{statusBar:e}}){return e}execute(e){e.view.statusBar=!e.view.statusBar,K(e.element)}},yr=class{isChecked({view:{toolBox:e}}){return e}execute(e){e.view.toolBox=!e.view.toolBox,K(e.element)}},br=class{isChecked({view:{colorBox:e}}){return e}execute(e){e.view.colorBox=!e.view.colorBox,K(e.element)}},xr=class{canExecute(e){return e.magnifierSize>=4}isChecked(e){return this.canExecute(e)&&e.showGrid==1}execute(e){e.showGrid=!e.showGrid,K(e.element)}},Sr=[ir,Jn,{caption:`View`,mnemonic:`V`,helpText:``,entries:[{caption:`Tool Box`,shortcut:`Ctrl+T`,mnemonic:`T`,helpText:`Shows or hides the tool box.`,instance:new yr},{caption:`Color Box`,shortcut:`Ctrl+A`,mnemonic:`C`,helpText:`Shows or hides the color box.`,instance:new br},{caption:`Status Bar`,mnemonic:`S`,helpText:`Shows or hides the status bar.`,instance:new vr},{separator:!0},{caption:`Zoom`,mnemonic:`Z`,helpText:``,entries:[{caption:`Normal Size`,mnemonic:`N`,shortcut:`Ctrl+PgUp`,helpText:`Zooms the picture to 100%.`,instance:new hr},{caption:`Large Size`,mnemonic:`L`,shortcut:`Ctrl+PgDn`,helpText:`Zooms the picture to 400%.`,instance:new mr},{caption:`Custom…`,mnemonic:`u`,helpText:`Zooms the picture.`,instance:new pr},{separator:!0},{caption:`Show Grid`,mnemonic:`G`,shortcut:`Ctrl+G`,helpText:`Shows or hides the grid.`,instance:new xr},{caption:`Show Thumbnail`,mnemonic:`h`,helpText:`Shows or hides the thumbnail view of the picture.`}]},{caption:`View Bitmap`,mnemonic:`V`,shortcut:`Ctrl+F`,helpText:`Displays the entire picture.`,instance:new _r},{caption:`Text Toolbar`,mnemonic:`e`,helpText:`Shows or hides the text toolbar.`,instance:new gr}]},cr,fr,ar],Cr=`For Help, click Help Topics on the Help Menu.`,wr=class extends B{static get styles(){return s`
      :host {
        --button-face: rgb(192 192 192);
        --button-light: white;
        --button-dark: rgb(128 128 128);
        --button-darker: black;
        --button-text: black;
        --canvas: rgb(128 128 128);
        --disabled-text: rgb(128 128 128);
        --highlight: rgb(0 0 128);
        --highlight-text: white;
        --highlight-disabled-text: rgb(128 128 128);
        --disabled-text-backdrop: white;
        --selected-background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAAAAABX3VL4AAAADklEQVQIHWP4f4DhwH8ACoADf16N/DIAAAAASUVORK5CYII=');

        --z-index-menu: 10;
        --z-index-dialog: 20;

        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 9pt;

        display: inline-flex;
        flex-direction: column;
        background-color: var(--canvas);
        color: var(--button-text);
        isolation: isolate;

        user-select: none;
        -webkit-user-select: none;
        cursor: default;

        -webkit-tap-highlight-color: transparent;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --button-face: rgb(64 64 64);
          --button-light: rgb(128 128 128);
          --button-dark: rgb(32 32 32);
          --button-text: white;
          --canvas: rgb(32 32 32);
          --disabled-text: rgb(64 64 64);
          --highlight: rgb(0 0 128);
          --highlight-text: white;
          --highlight-disabled-text: rgb(128 128 128);
          --disabled-text-backdrop: rgb(192 192 192);
          --selected-background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAAAAABX3VL4AAAADklEQVQIHWNocGBwaAAABIYBga3c92oAAAAASUVORK5CYII=');
        }
      }

      @media print {
        * {
          display: none;
        }

        paint-canvas {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }

      div {
        overflow: hidden;
        flex: 1;
        display: flex;
      }

      div > paint-canvas {
        flex: 1;
      }

      div > paint-tool-bar {
        width: 57px;
        min-width: 57px;
      }

      paint-tool-bar {
        display: flex;
        flex-direction: column;
      }

      paint-tool-bar.color-box {
        height: 49px;
        justify-content: space-between;
      }

      paint-tool-bar.color-box paint-color-box {
        margin-top: 7px;
      }

      paint-ruler {
        z-index: 1;
      }

      paint-tool-box {
        margin-top: -2px;
        flex: 1;
      }
    `}constructor(){super(),this.areaText=``,this.coordinateText=``,this.helpText=Cr,this.drawingContext=Y,this.previousTitle=``,this.areaText=``,this.coordinateText=``,this.helpText=Cr,this.drawingContext=Y,this.drawingContext.history=new _n(this.drawingContext),this.addEventListener(`set-help-text`,(e=>{this.helpText=e.detail??Cr})),this.addEventListener(`coordinate`,(e=>{this.coordinateText=e.detail?`${e.detail.x},${e.detail.y}`:``})),this.addEventListener(`area`,(e=>{this.areaText=e.detail?`${e.detail.width}x${e.detail.height}`:``})),this.addEventListener(`drawing-context-changed`,(e=>{let t=e.detail;fn(t),this.drawingContext=t})),this.addEventListener(`invoke-action`,(e=>{e.detail(this.drawingContext)})),this.addEventListener(`canvas-ready`,()=>hn(this.drawingContext)),this.beforeUnloadListener=this.onBeforeUnload.bind(this),window.addEventListener(`beforeunload`,this.beforeUnloadListener),bn(this),this.registerHotkeys(Sr)}registerHotkeys(e){e.filter(e=>!(`separator`in e&&e.separator)).forEach(e=>{`entries`in e&&Array.isArray(e.entries)&&this.registerHotkeys(e.entries),`shortcut`in e&&typeof e.shortcut==`string`&&cn(vn(e.shortcut),()=>(this.canActionExecute(e,this.drawingContext)&&this.dispatchEvent(new CustomEvent(`invoke-action`,{detail:e.instance?.execute.bind(e.instance),bubbles:!0,composed:!0})),!1))})}canActionExecute(e,t){return e.instance?e.instance.canExecute?e.instance.canExecute(t):!0:!1}render(){return this.dispatchTitleChangeEvent(),R`
      <paint-menu-bar
        .entries="${Sr}"
        .drawingContext="${this.drawingContext}"
      ></paint-menu-bar>
      <div>
        ${this.drawingContext.view.toolBox?R` <paint-tool-bar>
              <paint-ruler></paint-ruler>
              <paint-tool-box
                .drawingContext="${this.drawingContext}"
              ></paint-tool-box>
              <paint-ruler></paint-ruler>
            </paint-tool-bar>`:``}
        <paint-canvas .drawingContext="${this.drawingContext}"></paint-canvas>
      </div>
      ${this.drawingContext.view.colorBox?R` <paint-tool-bar class="color-box">
            <paint-color-box .drawingContext="${this.drawingContext}">
            </paint-color-box>
            <paint-ruler></paint-ruler>
          </paint-tool-bar>`:``}
      ${this.drawingContext.view.statusBar?R` <paint-status-bar
            helpText="${this.helpText}"
            coordinateText="${this.coordinateText}"
            areaText="${this.areaText}"
          ></paint-status-bar>`:``}
      ${this.drawingContext.view.textToolbar?R` <paint-dialog-text-toolbar
            .drawingContext="${this.drawingContext}"
          ></paint-dialog-text-toolbar>`:``}
    `}dispatchTitleChangeEvent(){this.previousTitle!==this.drawingContext.document.title&&(this.previousTitle=this.drawingContext.document.title,this.dispatchEvent(new CustomEvent(`titlechange`,{detail:{title:this.drawingContext.document.title},composed:!0,bubbles:!0})))}onBeforeUnload(e){this.drawingContext.document.dirty&&(e.preventDefault(),e.returnValue=``)}disconnectedCallback(){super.disconnectedCallback(),this.beforeUnloadListener&&window.removeEventListener(`beforeunload`,this.beforeUnloadListener)}};W([U()],wr.prototype,`areaText`,void 0),W([U()],wr.prototype,`coordinateText`,void 0),W([U()],wr.prototype,`helpText`,void 0),W([U()],wr.prototype,`drawingContext`,void 0),wr=W([V(`paint-app`)],wr);var Tr=class extends B{static get styles(){return s`
      :host,
      * {
        box-sizing: border-box;
      }

      :host {
        display: inline-block;

        background-color: var(--button-face);
        color: var(--button-text);

        border: 1px solid var(--button-light);
        border-right-color: var(--button-darker);
        border-bottom-color: var(--button-darker);

        width: 75px;
        height: 23px;
      }

      div.inline-border {
        width: 100%;
        height: 100%;

        padding: 2px;

        border: 1px solid transparent;
        border-right-color: var(--button-dark);
        border-bottom-color: var(--button-dark);
      }

      div.focus-border {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;
      }

      :host(:focus) {
        border-color: var(--button-darker);
        border-right-width: 2px;
        border-bottom-width: 2px;
        outline: none;
      }

      :host(:focus) div.inline-border {
        border-top-color: var(--button-light);
        border-left-color: var(--button-light);

        padding-right: 1px;
        padding-bottom: 1px;
      }

      :host(:focus) div.focus-border {
        border: 1px dotted var(--button-text);
      }

      :host(:active:hover) {
        border-color: var(--button-darker);
        border-right-width: 1px;
        border-bottom-width: 1px;
      }

      :host(:active:hover) div.inline-border {
        border-color: var(--button-dark);

        padding-right: 2px;
        padding-bottom: 2px;
      }

      :host(:active:hover) div.focus-border {
        padding-top: 1px;
        padding-left: 1px;
      }

      path {
        color: currentColor;
      }

      ::slotted(.mnemonic) {
        text-decoration: underline;
      }
    `}constructor(){super(),this.addEventListener(`keydown`,e=>{[`Space`,`Enter`].includes(e.code)&&this.dispatchEvent(new MouseEvent(`click`))})}render(){return R` <div class="inline-border">
      <div class="focus-border">
        <slot></slot>
      </div>
    </div>`}};Tr=W([V(`paint-button`)],Tr);var Er=class extends B{constructor(...e){super(...e),this.drawingContext=Y,this.inCanvas=!1,this.canvasWidth=screen.width,this.canvasHeight=screen.height,this.pointerDown=!1,this.previewColor=`primary`,this.lastPointerEventTime=0}static get styles(){return s`
      :host {
        height: 100%;

        box-sizing: border-box;
        border: 1px solid var(--button-dark);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);

        overflow: hidden;
      }

      div.frame {
        height: 100%;

        box-sizing: border-box;
        border: 1px solid var(--button-darker);
        border-bottom-color: var(--button-face);
        border-right-color: var(--button-face);

        overflow: hidden;
      }

      div.scroll-container {
        height: 100%;
        overflow: auto;
        touch-action: none;
      }

      div.document {
        vertical-align: top;
        display: inline-grid;
        grid-template-columns: 3px auto 3px;
        grid-template-rows: 3px auto 3px;
      }

      paint-handle {
        place-self: center;
      }

      canvas,
      paint-text-area,
      paint-grid {
        grid-row: 2;
        grid-column: 2;
      }

      canvas {
        image-rendering: pixelated;
        transform-origin: top left;
      }

      canvas.preview {
        pointer-events: none;
      }

      @media print {
        :host,
        * {
          border: 0 !important;
        }

        canvas.main {
          position: fixed;
          top: 0;
          left: 0;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
    `}render(){return this.tool=this.drawingContext.tool.instance,R`
      <div class="frame">
        <div class="scroll-container">
          <div class="document">
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <!-- contains the actual drawing -->
            <canvas
              class="main"
              width="${this.canvasWidth}"
              height="${this.canvasHeight}"
              style="transform: scale(${this.drawingContext.magnifierSize})"
              @pointerdown="${this.onPointerDown}"
              @contextmenu="${e=>e.preventDefault()}"
              @pointerenter="${this.onPointerEnter}"
              @pointerleave="${this.onPointerLeave}"
            ></canvas>
            <!-- for operations with previews (line, rectangle, brush, …) -->
            <canvas
              class="preview"
              style="transform: scale(${this.drawingContext.magnifierSize})"
              width="${this.canvasWidth}"
              height="${this.canvasHeight}"
            ></canvas>
            ${this.drawingContext.showGrid&&this.drawingContext.magnifierSize>=4?R`<paint-grid
                  style="width: ${this.canvasWidth*this.drawingContext.magnifierSize}px; height: ${this.canvasHeight*this.drawingContext.magnifierSize}px; --grid-size: ${this.drawingContext.magnifierSize}px"
                ></paint-grid>`:``}
            <paint-text-area
              .drawingContext="${this.drawingContext}"
            ></paint-text-area>
            <paint-handle></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle></paint-handle>
            <paint-handle></paint-handle>
          </div>
        </div>
      </div>
    `}firstUpdated(){if(!this.shadowRoot)throw Error(`Shadow root not present.`);let e=this.shadowRoot.querySelector(`canvas.main`),t=this.shadowRoot.querySelector(`canvas.preview`),n=e.getContext(`2d`,{desynchronized:!0}),r=t.getContext(`2d`,{desynchronized:!0});if(!n||!r)throw Error(`Canvas context not present.`);n.imageSmoothingEnabled=!1,this.drawingContext.canvas=e,this.drawingContext.context=n,this.drawingContext.previewCanvas=t,this.drawingContext.previewContext=r,this.drawingContext.element=this,Hn(this.drawingContext),this.drawingContext.document.dirty=!1,K(this),document.addEventListener(`pointermove`,e=>this.throttledPointerMove(e)),document.addEventListener(`pointerup`,e=>this.onPointerUp(e)),this.dispatchEvent(new CustomEvent(`canvas-ready`,{bubbles:!0,composed:!0}))}throttledPointerMove(e){let t=Date.now();t-this.lastPointerEventTime<8||(this.lastPointerEventTime=t,this.onPointerMove(e))}getToolEventArgs(e,t){let n=this.pointerDown?this.previewColor:`primary`,r=n===`primary`?`secondary`:`primary`,i={stroke:{key:n,value:this.drawingContext.colors[n]},fill:{key:r,value:this.drawingContext.colors[r]}};return[e,t,this.drawingContext,i]}onPointerDown(e){if(this.pointerDown=!0,this.previewColor=e.button===2?`secondary`:`primary`,this.drawingContext.text.active=!1,$e(this.drawingContext),K(this),this.tool?.onPointerDown){let{x:t,y:n}=this.getCoordinates(e);this.tool.onPointerDown(...this.getToolEventArgs(t,n))}e.preventDefault()}onPointerMove(e){let{x:t,y:n}=this.getCoordinates(e);this.inCanvas&&this.drawingContext.canvas&&this.dispatchEvent(new CustomEvent(`coordinate`,{detail:{x:Math.max(0,Math.min(this.drawingContext.canvas.width,t)),y:Math.max(0,Math.min(this.drawingContext.canvas.height,n))},bubbles:!0,composed:!0})),this.tool?.onPointerHover&&this.tool.onPointerHover(...this.getToolEventArgs(t,n)),this.pointerDown&&this.tool?.onPointerMove&&this.tool.onPointerMove(...this.getToolEventArgs(t,n))}onPointerUp(e){if(!this.pointerDown)return;let{x:t,y:n}=this.getCoordinates(e);this.tool?.onPointerUp&&this.tool.onPointerUp(...this.getToolEventArgs(t,n)),this.drawingContext.history?.commit(),this.pointerDown=!1,this.tool?.onPointerHover&&this.tool.onPointerHover(...this.getToolEventArgs(t,n))}onPointerEnter(){this.inCanvas=!0;let{canvas:e,tool:t}=this.drawingContext;e&&(e.style.cursor=t.cursor??`default`)}onPointerLeave(){this.inCanvas=!1,this.dispatchEvent(new CustomEvent(`coordinate`,{bubbles:!0,composed:!0}))}getCoordinates({clientX:e,clientY:t}){if(!this.drawingContext.canvas)throw Error(`Canvas not initialized yet.`);let{left:n,top:r}=this.drawingContext.canvas.getBoundingClientRect();return{x:Math.floor((e-n)/this.drawingContext.magnifierSize),y:Math.floor((t-r)/this.drawingContext.magnifierSize)}}};W([H()],Er.prototype,`drawingContext`,void 0),W([H({attribute:!1})],Er.prototype,`inCanvas`,void 0),W([H({attribute:!1})],Er.prototype,`tool`,void 0),W([H({attribute:!1})],Er.prototype,`canvasWidth`,void 0),W([H({attribute:!1})],Er.prototype,`canvasHeight`,void 0),Er=W([V(`paint-canvas`)],Er);var Dr=class extends B{constructor(...e){super(...e),this.drawingContext=Y}static get styles(){return s`
      :host {
        display: grid;
        box-sizing: border-box;
        width: 256px;
        height: 33px;
        grid-template-columns: 15px repeat(15, 16px);
        grid-template-rows: 16px 16px;
      }

      paint-color-switcher {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
      }
    `}render(){return R`
      <paint-color-switcher
        primaryColor="${this.drawingContext.colors.primary}"
        secondaryColor="${this.drawingContext.colors.secondary}"
        @pointerdown="${e=>this.swapColors(e)}"
      >
      </paint-color-switcher>
      ${this.drawingContext.palette.map((e,t)=>R` <paint-color-picker
            .index="${t}"
            .drawingContext="${this.drawingContext}"
          >
          </paint-color-picker>`)}
    `}swapColors({pointerType:e}){if([`pen`,`touch`].includes(e)){let{primary:e,secondary:t}=this.drawingContext.colors;this.drawingContext.colors.primary=t,this.drawingContext.colors.secondary=e,K(this)}}};W([H()],Dr.prototype,`drawingContext`,void 0),Dr=W([V(`paint-color-box`)],Dr);var Or=class extends B{constructor(...e){super(...e),this.drawingContext=Y,this.index=0,this.onEditColor=()=>{let e=this.drawingContext.selectedPaletteIndex;this.index===e&&this.openColorPicker()}}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,()=>{this.dispatchColorEvent(`primary`)}),this.addEventListener(`contextmenu`,e=>{this.dispatchColorEvent(`secondary`),e.preventDefault()}),this.addEventListener(`dblclick`,()=>{this.openColorPicker()}),this.drawingContext.element?.addEventListener(`edit-color`,this.onEditColor)}disconnectedCallback(){super.disconnectedCallback(),this.drawingContext.element?.removeEventListener(`edit-color`,this.onEditColor)}get color(){return this.drawingContext.palette[this.index]}static get styles(){return s`
      :host {
        position: relative;
        border: 1px solid var(--button-light);
        border-top-color: var(--button-dark);
        border-left-color: var(--button-dark);
      }

      div.frame {
        box-sizing: border-box;
        border: 1px solid var(--button-face);
        border-top-color: var(--button-darker);
        border-left-color: var(--button-darker);
        height: 100%;
      }

      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
      }
    `}openColorPicker(){try{this.colorInput.showPicker()}catch{this.colorInput.focus(),this.colorInput.click()}}onChange(e){let t=e.target;this.drawingContext.palette[this.index]=t.value,this.drawingContext.colors.primary=t.value,K(this)}dispatchColorEvent(e){this.drawingContext.selectedPaletteIndex=this.index,this.drawingContext.colors[e]=this.color,K(this)}render(){return R`<div
        class="frame"
        style="background-color: ${this.color};"
      ></div>
      <input type="color" .value="${this.color}" @change="${this.onChange}" />`}};W([H()],Or.prototype,`drawingContext`,void 0),W([H({type:Number})],Or.prototype,`index`,void 0),W([Oe(`input`)],Or.prototype,`colorInput`,void 0),Or=W([V(`paint-color-picker`)],Or);var kr=class extends B{constructor(...e){super(...e),this.primaryColor=``,this.secondaryColor=``}static get styles(){return s`
      :host {
        border: 1px solid var(--button-light);
        border-top-color: var(--button-dark);
        border-left-color: var(--button-dark);
        background: var(--selected-background);
        image-rendering: pixelated;
      }

      div.frame {
        box-sizing: border-box;
        border: 1px solid var(--button-face);
        border-top-color: var(--button-darker);
        border-left-color: var(--button-darker);
        height: 100%;
        padding: 3px 2px;
        position: relative;
      }

      div.color {
        box-sizing: border-box;
        width: 15px;
        height: 15px;
        border: 1px solid var(--button-dark);
        border-top-color: var(--button-light);
        border-left-color: var(--button-light);
        position: absolute;
        z-index: 2;
      }

      div.color.secondary {
        z-index: 1;
        left: 9px;
        top: 10px;
      }

      div.color > div {
        box-sizing: border-box;
        border: 1px solid var(--button-face);
        height: 100%;
      }
    `}render(){return R`
      <div class="frame">
        <div class="color primary">
          <div style="background-color: ${this.primaryColor}"></div>
        </div>
        <div class="color secondary">
          <div style="background-color: ${this.secondaryColor}"></div>
        </div>
      </div>
    `}};W([H()],kr.prototype,`primaryColor`,void 0),W([H()],kr.prototype,`secondaryColor`,void 0),kr=W([V(`paint-color-switcher`)],kr);var Ar=class extends B{static get styles(){return s`
      :host {
        position: relative;
        pointer-events: none;
        background-image:
          conic-gradient(
            from 0deg at 1px 1px,
            rgb(192 192 192) 0deg 90deg,
            transparent 90deg 270deg,
            rgb(128 128 128) 270deg 360deg
          ),
          conic-gradient(
            from 0deg at 1px 1px,
            transparent 0deg 180deg,
            rgb(192 192 192) 180deg 270deg,
            rgb(128 128 128) 270deg 360deg
          );
        background-size:
          2px var(--grid-size),
          var(--grid-size) 2px;
      }
    `}render(){return R``}};Ar=W([V(`paint-grid`)],Ar);var jr=class extends B{static get styles(){return s`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 3px;
        height: 3px;
        border-top: 1px solid var(--highlight);
        border-left: 1px solid var(--highlight);
        background-color: var(--highlight);
      }

      :host([disabled]) {
        background-color: var(--highlight-text);
      }
    `}render(){return R``}};jr=W([V(`paint-handle`)],jr);var Mr=class extends B{static get styles(){return s`
      :host {
        box-sizing: border-box;
        border: 1px solid var(--button-dark);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);

        display: flex;
        align-items: flex-end;
      }
    `}render(){return R`<slot></slot>`}};Mr=W([V(`paint-inset-container`)],Mr);var Nr=class extends B{static get styles(){return s`
      :host {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: var(--z-index-menu);
        display: inline-block;
        box-sizing: border-box;
        border: 1px solid var(--button-darker);
        border-top: 1px solid var(--button-face);
        border-left: 1px solid var(--button-face);
        background-color: var(--button-face);
        color: var(--button-text);
      }

      :host(.submenu) {
        top: -3px;
        left: 100%;
      }

      div.frame {
        border: 1px solid var(--canvas);
        border-top: 1px solid var(--button-light);
        border-left: 1px solid var(--button-light);
        display: grid;
        grid-template-columns: 22px auto auto 19px;
        padding: 1px;
        white-space: nowrap;
      }

      paint-ruler {
        grid-column: 1 / span 4;
        margin: 1px 0;
      }

      .menu-entry {
        display: contents;
      }

      .menu-entry span {
        box-sizing: border-box;
        padding: 2px 0;
        position: relative;
      }

      .menu-entry span .mnemonic {
        text-decoration: underline;
      }

      .menu-entry:not(:hover) paint-menu {
        display: none;
      }

      .menu-entry .selection svg {
        height: 9px;
        width: 9px;
        margin-left: 6px;
      }

      .menu-entry .opener svg {
        height: 7px;
        width: 4px;
        margin-left: 10px;
      }

      .menu-entry span.shortcut {
        padding-left: 9px;
      }

      .menu-entry span {
        fill: var(--button-text);
      }

      .menu-entry:hover span {
        background-color: var(--highlight);
        color: var(--highlight-text);
        fill: var(--highlight-text);
      }

      .menu-entry.disabled:hover span {
        color: var(--highlight-disabled-text);
        fill: var(--highlight-disabled-text);
        text-shadow: none;
      }

      .menu-entry.disabled:hover svg .shadow {
        fill: transparent;
      }

      .menu-entry.disabled span {
        color: var(--disabled-text);
        fill: var(--disabled-text);
        text-shadow: 1px 1px 0 var(--disabled-text-backdrop);
      }

      .disabled svg .shadow {
        fill: var(--disabled-text-backdrop);
      }
    `}constructor(){super(),this.entries=[],this.drawingContext=Y,this.addEventListener(`click`,e=>e.stopPropagation())}render(){return R` <div class="frame">
      ${this.entries.map(e=>this.getMenuEntry(e))}
    </div>`}getMenuEntry(e){return`separator`in e?R` <paint-ruler></paint-ruler>`:R`
      <div
        class="menu-entry ${this.isDisabled(e)?`disabled`:``}"
        @click="${()=>this.execute(e)}"
        @pointerenter="${()=>this.setHelpText(e.helpText)}"
        @pointerleave="${()=>this.setHelpText()}"
      >
        <span class="selection">
          ${this.isChecked(e)?R` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                <path
                  class="shadow"
                  fill="transparent"
                  d="M4,7v2h1V8h1V7h1V6h1V5h1V2H8L4,7z"
                />
                <path
                  d="M1,3v3h1v1h1v1h1V7h1V6h1V5h1V4h1V1H7v1H6v1H5v1H4v1H3V4H2V3H1z"
                />
              </svg>`:``}
        </span>
        <span>${G(e.caption,e.mnemonic)}</span>
        <span class="${e.shortcut?`shortcut`:``}"
          >${e.shortcut}</span
        >
        <span class="opener">
          ${e.entries?R` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 7">
                  <path d="M0,0v7h1V6h1V5h1V4h1V3H3V2H2V1H1V0H0z" />
                </svg>
                <paint-menu
                  class="submenu"
                  .entries="${e.entries}"
                  .drawingContext="${this.drawingContext}"
                ></paint-menu>`:``}
        </span>
      </div>
    `}isChecked(e){return!!(e.instance?.isChecked&&e.instance.isChecked(this.drawingContext))}isDisabled({instance:e,entries:t}){return!(t||e&&(!e.canExecute||e.canExecute(this.drawingContext)))}execute(e){!this.isDisabled(e)&&e.instance?.execute&&(this.dispatchEvent(new CustomEvent(`invoke-action`,{detail:e.instance.execute.bind(e.instance),bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`action-executed`,{bubbles:!0,composed:!0})))}setHelpText(e){this.dispatchEvent(new CustomEvent(`set-help-text`,{detail:e,bubbles:!0,composed:!0}))}};W([H()],Nr.prototype,`entries`,void 0),W([H()],Nr.prototype,`drawingContext`,void 0),Nr=W([V(`paint-menu`)],Nr);var Pr=class extends B{static get styles(){return s`
      :host {
        background-color: var(--button-face);
        display: flex;
        height: 20px;
      }

      ul {
        list-style-type: none;
        display: flex;
        margin: 0;
        padding: 1px 0;
      }

      li {
        padding: 1px 6px;
        position: relative;
      }

      li.active {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }

      li.disabled {
        color: var(--canvas);
        text-shadow: 1px 1px 0 var(--highlight-text);
      }

      li.active.disabled {
        color: var(--canvas);
        text-shadow: none;
      }

      paint-menu {
        display: none;
      }

      li.active paint-menu {
        display: block;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `}constructor(){super(),this.entries=[],this.drawingContext=Y,this.activeMenu=null,document.addEventListener(`click`,()=>this.activeMenu=null),this.addEventListener(`action-executed`,()=>this.activeMenu=null)}render(){return R`
      <ul @click="${e=>e.stopPropagation()}">
        ${this.entries.map(e=>R`
            <li
              @click="${()=>this.onClick(e)}"
              @pointerenter="${()=>this.onPointerEnter(e)}"
              @pointerleave="${()=>this.onPointerLeave()}"
              class="${this.activeMenu===e?`active`:``}"
            >
              ${G(e.caption,e.mnemonic)}
              <paint-menu
                .entries="${e.entries}"
                .drawingContext="${this.drawingContext}"
              >
              </paint-menu>
            </li>
          `)}
      </ul>
    `}onClick(e){this.activeMenu=this.activeMenu===e?null:e}onPointerEnter(e){this.dispatchEvent(new CustomEvent(`set-help-text`,{detail:e.helpText,bubbles:!0,composed:!0})),this.activeMenu&&=e}onPointerLeave(){this.dispatchEvent(new CustomEvent(`set-help-text`,{bubbles:!0,composed:!0}))}};W([H()],Pr.prototype,`entries`,void 0),W([H()],Pr.prototype,`drawingContext`,void 0),W([H({attribute:!1})],Pr.prototype,`activeMenu`,void 0),Pr=W([V(`paint-menu-bar`)],Pr);var Fr=class extends B{static get styles(){return s`
      :host {
        display: block;
        border-top: 1px solid var(--button-dark);
        border-bottom: 1px solid var(--button-light);
      }
    `}render(){return R``}};Fr=W([V(`paint-ruler`)],Fr);var Ir=class extends B{constructor(...e){super(...e),this.helpText=``,this.coordinateText=``,this.areaText=``}static get styles(){return s`
      :host {
        background-color: var(--button-face);
        box-sizing: border-box;
        height: 23px;
        display: flex;
        padding: 2px 0 0 2px;
      }

      paint-inset-container {
        margin-left: 2px;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
      }

      paint-inset-container.tool {
        max-width: 115px;
      }

      paint-inset-container.tool img {
        align-self: flex-start;
        margin-right: 3px;
        image-rendering: pixelated;
      }

      @media (prefers-color-scheme: dark) {
        img {
          filter: invert(1);
        }
      }
    `}render(){return R`
      <paint-inset-container>${this.helpText}</paint-inset-container>
      <paint-inset-container class="tool">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAOklEQVQokWPAAv5jE8QGmIhVSHXNFIP/SJiBAZX+z4BdnIGUsCEaEGsiVnV0iapB5uchbjN+moHhPwBmmBjumUjVpgAAAABJRU5ErkJggg=="
          alt=""
        />
        ${this.coordinateText}
      </paint-inset-container>
      <paint-inset-container class="tool">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPAQMAAAABGAcJAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAChJREFUCB1jYBJiYOJiYPoHJoUYgODXKhCpxMSgACZXMDAUgdm/VgEAbW0GLYF8fC8AAAAASUVORK5CYII="
          alt=""
        />
        ${this.areaText}
      </paint-inset-container>
    `}};W([H()],Ir.prototype,`helpText`,void 0),W([H()],Ir.prototype,`coordinateText`,void 0),W([H()],Ir.prototype,`areaText`,void 0),Ir=W([V(`paint-status-bar`)],Ir);function Lr(e){e.includes(`BlinkMacSystemFont`)&&console.warn(`break-styled-lines: Using BlinkMacSystemFont can cause Chrome to crash in certain environments!`)}function Rr(e){return Array.isArray(e)&&(e.length>0?typeof e[0]==`string`:!0)}function zr(e){return Array.isArray(e)&&(e.length>0?!Rr(e):!0)}function Br(e,t,n,r){let{lastLineWidth:i,lines:a}=e.text.split(``).reduce((e,t)=>{let n=e[e.length-1]||``,r=n.slice(-1);return t===` `&&r!==` `||t!==` `&&r===` `?[...e,t]:[...e.slice(0,-1),`${n}${t}`]},[]).reduce((n,i)=>{r.font=e.font;let{width:a}=r.measureText(i),o=n.lastLineWidth+a;if(o<=t){let e=[...n.lines.slice(-1),i].join(``);return{lastLineWidth:o,lines:[...n.lines.slice(0,-1),e]}}if(a>t&&n.lastLineWidth===0)return{lastLineWidth:a,lines:[...n.lines.slice(0,-1),i]};let s=n.lines.slice(-1).join(``),c=[...n.lines.slice(0,-1),s.trimEnd()];return i.trim().length===0?{lastLineWidth:0,lines:[...c,``]}:{lastLineWidth:a,lines:[...c,i]}},{lastLineWidth:n,lines:[]});return{lastLineWidth:i,text:a.join(`
`)}}function Vr(e,t){let n=`OffscreenCanvas`in window,r=document.createElement(`canvas`),i=n?r.transferControlToOffscreen():r;i.width=t;let a=i.getContext(`2d`);return a?e.reduce((e,n)=>{let{lastLineWidth:r,text:i}=Br(n,t,e.lastLineWidth,a);return{lastLineWidth:r,lines:[...e.lines,i]}},{lastLineWidth:0,lines:[]}).lines:(console.warn(`No canvas context was found, so the string was left as is!`),e.map(({text:e})=>e))}function Hr(e,t){return zr(e)?e.map(({text:e,font:n})=>({text:Wr(e),font:n||t})):Rr(e)?e.map(e=>({text:Wr(e),font:t})):[{text:Wr(e),font:t}]}var Ur=/(\r\n|\n|\r)/gm;function Wr(e){return e.replace(Ur,` `)}function Gr(e,t,n){Lr(n);let r=Hr(e,n);return Rr(e)||zr(e)?Vr(r,t):Vr(r,t)[0]}var Kr=Gr,qr,Jr=qr=class extends B{constructor(...e){super(...e),this.editingActive=!1,this.drawingContext=Y}static get styles(){return s`
      textarea {
        position: absolute;
        box-sizing: border-box;
        border: 1px dashed var(--highlight);
        padding: 0;
        background-color: transparent;
        color: transparent;
        resize: none;
        outline: 0;
        overflow: hidden;
      }

      textarea::selection {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }
    `}firstUpdated(e){if(super.firstUpdated(e),!this.textarea)throw Error(`Textarea not found.`);let t=this.textarea;t.addEventListener(`input`,()=>{requestAnimationFrame(()=>t.scrollTop=0),this.drawPreview()})}render(){let{context:e,previewContext:t,text:n}=this.drawingContext;return this.style.display=n.active?`block`:`none`,this.editingActive&&!n.active&&this.commitTextBox(),this.editingActive=n.active,e&&t&&n.active&&(this.textarea?.focus(),this.textarea?.scroll(0,0),this.drawPreview()),R`<textarea style="${this.getTextAreaStyle()}"></textarea>`}getTextAreaStyle(){let{colors:e,text:t}=this.drawingContext,{width:n,height:r,x:i,y:a,font:o,size:s,bold:c,italic:l,underline:u}=t;return`
      width: ${n}px;
      height: ${r}px;
      transform: translate(${i}px, ${a}px);
      font-family: "${o}"; 
      font-size: ${s}px;
      font-weight: ${c?`bold`:`normal`};
      font-style: ${l?`italic`:`normal`};
      text-decoration: ${u?`underline`:`none`};
      caret-color: ${e.primary};
    `}drawPreview(){this.drawingContext.previewContext&&(J(this.drawingContext.previewContext),this.drawTextBox(this.drawingContext.previewContext))}commitTextBox(){this.editingActive&&!this.drawingContext.text.active&&this.textarea&&this.drawingContext.previewContext&&this.drawingContext.context&&(this.editingActive=!1,J(this.drawingContext.previewContext),this.drawTextBox(this.drawingContext.context),this.textarea.value=``)}drawTextBox(e){let{x:t,y:n,width:r,height:i,size:a,font:o,bold:s,italic:c,underline:l}=this.drawingContext.text;this.drawingContext.drawOpaque&&(e.fillStyle=this.drawingContext.colors.secondary,e.fillRect(t??0,n??0,r??0,i??0)),e.fillStyle=this.drawingContext.colors.primary,e.font=`${c?`italic `:``}${s?`bold `:``}${a}px ${o}`;let u=(r??0)-2,d=qr.getLineHeight(e,a);(this.textarea?.value??``).split(`
`).map(t=>Kr(t,u,e.font).split(`
`)).reduce((e,t)=>e.concat(t),[]).forEach((r,o)=>{let s=(t??0)+1,c=(n??0)+a+d*o;if(!(c-(n??0)>=(i??0))&&(e.fillText(r,s,c),l)){let{width:t}=e.measureText(r);e.fillRect(s,c+1,t,1)}})}static getLineHeight(e,t){let n=e.measureText(``);return typeof n.fontBoundingBoxAscent==`number`&&typeof n.fontBoundingBoxDescent==`number`?n.fontBoundingBoxAscent+n.fontBoundingBoxDescent:t*1.2}};W([H()],Jr.prototype,`drawingContext`,void 0),W([Oe(`textarea`)],Jr.prototype,`textarea`,void 0),Jr=qr=W([V(`paint-text-area`)],Jr);var Yr=class extends B{static get styles(){return s`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        border: 1px solid var(--button-darker);
        border-top: 1px solid var(--button-light);
        border-left: 1px solid var(--button-light);
        background-color: var(--button-face);
        image-rendering: pixelated;
      }

      div.wrapper {
        height: 100%;
        border: 1px solid var(--button-dark);
        border-top: 1px solid var(--button-face);
        border-left: 1px solid var(--button-face);
        box-sizing: border-box;
      }

      div.tool {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAQCAMAAADODVF7AAAAPFBMVEUAAAAAAP8AracA//////8AAAAAAIAAAP8AgAAAgIAAracA//8R/P925P+qAADU/wDx/6/+//z///7///9MKWy9AAAABXRSTlMAAAAAAMJrBrEAAAKhSURBVFjDtZcJcsMgDEVlnJ/Fbpou979rWQRIIBKSTNV2MnXB6D+0lSgYqHwcnjQSBkB9Er8vPSO5BbNnkTbEhxhv5/ORfZh7f1qMNwHwqcD1ei0IeA0+PyG24HzGHQXFpdaYYrqsMQBxq5MAwurBBiEuHC98aZ1LS4L8YPgHAHmPYGFsl/pp+gKRf5C/02daga9g/reyARss/QMATM8AsKyn3X/VkKUui5SP1euSDcpaANW5xlGoZxqCyjmh/1wBYNs23NOfCTCA220EYPe2ApfLBRoALP09gH5NAyC/SuFpwhiDqGaHsv4IIMkM+qWLheizAOL9U9R/RAEAIwREik4AgJmqIGO9zUREQNEfACShSX/w0ekK+DSAEAB7AIDjMRDIADoCMqdFDegFwbpbGpQWHRN2Cgj9xACyfv86R82VWTXA6x8C8AGwegBBfyBQyngDQHYV2QXeB4Dx9ccDWemZXeYM4KcbXL0x0gAwB2Dfl9U/OCbDAABIAyj18G0Autr0OXIIznv3o8cZABX9KQI8BhFHaQ7gIpkBiK4nmqqvAR+nZaFMQESAIqAHq4OohwMAoPkUEH/ra28FwGeKkho7oUstoe0IpU1YAPAbDRwB67oyAa4Boy7VqLYBQPe6mSJoJn9NgQQgnynG3SjQ9fpVoyy9WgHANzKAEwOg2gXQzALy7ZMAZETMt0GyBiF1GRVAnoRc0u+cswlEJ30NJQ3gByoC1trnhVcwRpoOQDsImb3j8SCki8y90RGamgv6XbWWQAIAGgHwTWBZYhXIcwegJxitqK0BvX/GP0+T/wxNzs76hNAQvdDNABBjI90S0TgCFg0AMmS7G+26QGuglwDQywDctkn9rq25wqniY7ZUAxZF4IGgOgfA1tamxCM9f65ALLCME2qOAAAAAElFTkSuQmCC');
        background-repeat: no-repeat;
        margin: 2px;
      }

      @media (prefers-color-scheme: dark) {
        div.tool {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAQCAMAAADODVF7AAAAPFBMVEXAwMD///8AAIAAAP8AgAAAgIAAracA//8R/P925P+qAADAwMDCwsLHx8fPz8/U/wDx/6/+//z///7////+6RXUAAAAAnRSTlMAAHaTzTgAAAJxSURBVFjDpZeLesMgCEYxbe06duf933VeIyAa07J9a2dM5D8CEnDRyPEPZSBND7GZRJQuISJoU0P5X3faaF9oNinb0gOh3NH+HujvAIBcN2p7PB4aAb6/8xG8Xj/mAGxnyPg2pHQGQJw9uKHuGGLbtTSiCWTsEOVHwwMA+AQAGnx/Xr8Dfhflhctv/iwO/0TD4nQa8SgB0AwAqqzgAC738KND1oxgsrNBmA2AP17OBl0D1LrE9V8bAPR+J2DqlwTw+3sE4B4s3H273Wjg8WDPaTSoLtRHCTz7dDgqglx/cjrLjPrrpnL95wBA2X+X9G88w3sA5M4AIPM26je4n9JFwK4/Op10fmX9hUCLAHcewD1HQNS/bdxrTWDAowcgwdC8tEQAZMQPByD0ZwBVfyuLZcsAzBoQ9A8BxAAIAKL+nQD1VWAUD68DOKispf5X/TkDPqt+XzKZyqM5AFwAADEC0srbxgj0AIb58DIAWW2MHInOB/erx/Wsb/qBLZsrfpLfiqSRAS16Lm8X1wjwuOaO0Wo/QNMSYKcAu9bX3gagKCjdHtMfgsh7Uk2DOCY0AMwVE1kEZAKkDqpj/T0AdTquFEEz+VsKZABVAGt3q8Cmn7eIjACqNgAJf7ECuNyrL5sK253A7EAcAJDVdPUYdFYjxKodBwCWftEjNwKhjMoMIPxDHQF92lYANOuIukbIPDuOG6Fh49i91VQAYOiXs3cC+KP6YgYgHQJ2mlpbNq7Ws3ZxYmCWhhkAR2IsyI+nordm10LYvRmJCOj0s5Cl0dbQmv5lAG4ZgFMAwPum39nvwFo/trRyXQAsKh297hrvBlP7B7tDQGM5XMIEAAAAAElFTkSuQmCC');
        }
      }

      :host(.active),
      :host(:active:hover) {
        border: 1px solid var(--button-light);
        border-top: 1px solid var(--button-darker);
        border-left: 1px solid var(--button-darker);
        background-image: var(--selected-background);
      }

      :host(.active) div.wrapper,
      :host(:active:hover) div.wrapper {
        border: 1px solid var(--button-face);
        border-top: 1px solid var(--button-dark);
        border-left: 1px solid var(--button-dark);
      }

      :host(:active:hover) div.wrapper {
        background-color: var(--button-face);
      }

      :host(.active) div.tool {
        margin: 3px;
      }

      :host(:active:hover) div.tool {
        margin: 4px;
      }
    `}constructor(){super(),this.addEventListener(`pointerenter`,()=>this.dispatchEvent(new CustomEvent(`set-help-text`,{detail:this.tool?.helpText??``,bubbles:!0,composed:!0}))),this.addEventListener(`pointerleave`,()=>this.dispatchEvent(new CustomEvent(`set-help-text`,{bubbles:!0,composed:!0})))}render(){return R`
      <div class="wrapper">
        <div
          class="tool"
          style="background-position: ${this.tool?.imagePosition}"
        ></div>
      </div>
    `}};W([H()],Yr.prototype,`tool`,void 0),Yr=W([V(`paint-tool`)],Yr);var Xr=class extends B{constructor(...e){super(...e),this.drawingContext=Y,this.options=[{size:9,selectionWidth:17,width:11,height:10,path:`M5,1h1v2h2V1h1v4h1V4h1v2H9V5H6v1h1V5h1v1h1v1h2v1h-1v1H9v1H8V8h1V7H7v1H6v1h1v1H6V9H4v1H3V9h1V8H3V7h2V6H4v1H3V5h2V4h1V3H5v1H4v1H3V4h1V3H3V2h1v1h1V1z`},{size:17,selectionWidth:22,width:18,height:16,path:`M8,0h1v1h1V0h3v1h-3v1h1v1h1V2h1v2h1V3h1V1h1v1h-1v2h-1v1h3V3h1v2h-1v2h-1v1h1v1h-3V7h1V6h-1V5h-2v1h1v3h1v7h-4v-2h1v2h1v-1h1v1h1v-3h-1v-1h1v-1h-2V7H9v1h2V7h1v2h-1v1h1v1h-1v1H9v-2H7v1H6v1h1v2h2v1H7v-1H6v-2H5v1H3v1H2v-1h1v-1h1v-1H3v-1h2v1h1v-1H5V9H4V8h1v1h3V8H6V7H3v1H2V7h1V6h3V4H4V3h1V2h1v2h1v3h1V4h1V3h1v2h1V3h-1V2H9V1H8V0z`},{size:25,selectionWidth:24,width:24,height:24,path:`M14,0v1h-1V0v2h1v2h3v1h2V4h3v1h-1V4h-1v1h-1v2h1v1h2V7h1v1h-2v1h1v1h-1V9h-1v1h-1V9h1V8h-2V6h-1v1h-2v2h-2V8h-1v2h2V9h2V7h1v1h1v1h-1v2h7v1h-1v-1h-2v1h1v2h1v1h-1v-2h-1v-1h-1v-1h-1v1h-1v1h-1v1h1v1h2v2h4v1h-2v4h-1v-2h-6v-2h1v1h-1v1h3v-1h1v1h2v1h1v-3h1v-1h-5v-1h1v-1h-3v-3h-1v2h-1v1h1v1h-2v3h1v1h-1v1h1v1h-1v-1h-2v-1h1v1h1v-2h-2v-1H9v1H8v1h1v1h1v1H8v-1H3v-2H2v-4h1v1H2v2h1v2h1v1h2v-2H4v-2h1v-2h1v-1H5v-1h1v1h1v-1h1v-1h3v1h1v1H9v-1H8v1H7v1H6v2H5v1h1v1h2v-1h1v-1H8v-1h1v-1H8v-1h1v1h3v1H9v1h2v1h1v-2h1v-1h-1v-1h1v-2h1v-1h-1v1h-2v-1H9v-1H8v1H5v1H2v1H1v-1h1v-1h1v1h1V9H0V8h1v1h2V5h3V3H4V2h4v1H7v3H4v2h1v2h3V8H7V7H6v1H5V6h2v1h1v1h1v2h1V9h1V7H9V6H7V5h2V4h1V2H9V1h2v3h2V0H14z`}]}static get styles(){return s`
      ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
        margin: -4px 0 0 0;
      }

      li {
        margin-top: 8px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li.selected {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }

      path {
        fill: currentColor;
      }
    `}render(){let{airbrushSize:e}=this.drawingContext;return R`
      <ul>
        ${this.options.map(({size:t,selectionWidth:n,width:r,height:i,path:a})=>R`
            <li
              class="${e===t?`selected`:``}"
              style="width: ${n}px"
              @click="${()=>this.setSize(t)}"
            >
              <svg style="width: ${r}px; height: ${i}px;">
                <path d="${a}"></path>
              </svg>
            </li>
          `)}
      </ul>
    `}setSize(e){this.drawingContext.airbrushSize=e,K(this)}};W([H({type:Object})],Xr.prototype,`drawingContext`,void 0),Xr=W([V(`paint-tool-airbrush`)],Xr);var Zr=class extends B{static get styles(){return s`
      :host {
        background-color: var(--button-face);
        padding-right: 1px;
      }
    `}render(){return R`<slot></slot>`}};Zr=W([V(`paint-tool-bar`)],Zr);var Qr=class extends B{constructor(...e){super(...e),this.drawingContext=Y}static get styles(){return s`
      :host {
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        justify-content: center;
      }

      paint-inset-container {
        width: 41px;
        height: 66px;
        margin-top: 3px;
        display: block;
      }

      paint-inset-container * {
        height: 100%;
      }

      paint-tool.unavailable {
        filter: saturate(0%) opacity(50%);
        pointer-events: none;
      }
    `}render(){return R`
      ${vt.map(e=>R` <paint-tool
            .tool=${e}
            title="${e.tooltip}"
            class="${this.drawingContext?.tool===e?`active`:``} ${e.instance?``:`unavailable`}"
            @click="${()=>this.selectTool(e)}"
          ></paint-tool>`)}
      <paint-inset-container>
        ${this.getToolHtml(this.drawingContext.tool)}
      </paint-inset-container>
    `}selectTool(e){this.drawingContext.text.active=!1,$e(this.drawingContext),this.isEditingTool(this.drawingContext.tool)&&(this.drawingContext.previousEditingTool=this.drawingContext.tool),this.drawingContext.tool===e&&[ot,st].includes(e)?this.drawingContext.tool=this.drawingContext.previousEditingTool:this.drawingContext.tool=e,K(this)}isEditingTool(e){return[ut,lt,pt,it,ft,ct,ht,mt,_t].includes(e)}getToolHtml(e){return ot===e?R` <paint-tool-color-preview
        .drawingContext="${this.drawingContext}"
      ></paint-tool-color-preview>`:[ft,pt].includes(e)?R` <paint-tool-line-width
        .drawingContext="${this.drawingContext}"
      ></paint-tool-line-width>`:[mt,gt,ht,_t].includes(e)?R` <paint-tool-fill-style
        .drawingContext="${this.drawingContext}"
      ></paint-tool-fill-style>`:[nt,rt,dt].includes(e)?R` <paint-tool-draw-opaque
        .drawingContext="${this.drawingContext}"
      ></paint-tool-draw-opaque>`:it===e?R` <paint-tool-eraser-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-eraser-size>`:lt===e?R` <paint-tool-brush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-brush>`:ut===e?R` <paint-tool-airbrush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-airbrush>`:st===e?R` <paint-tool-magnifier-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-magnifier-size>`:``}};W([H()],Qr.prototype,`drawingContext`,void 0),W([H({attribute:!1})],Qr.prototype,`tool`,void 0),Qr=W([V(`paint-tool-box`)],Qr);var $r=class extends B{constructor(...e){super(...e),this.drawingContext=Y,this.brushConfigs=[{type:`circle`,sizes:[{value:7,path:`M3,0h3v1h1v1h1v3H7v1H6v1H3V6H2V5H1V2h1V1h1z`},{value:4,path:`M3,2h2v1h1v2H5v1H3V5H2V3h1z`},{value:1,path:`M4,3h1v1h-1z`}]},{type:`square`,sizes:[{value:8,path:`M0,0H8V8H0z`},{value:5,path:`M2,1H7V6H2z`},{value:2,path:`M3,3H5V5H3z`}]},{type:`forward-diagonal`,sizes:[{value:8,path:`M8,0H7v1H6v1H5v1H4v1H3v1H2v1H1v1H0v1h1V7h1V6h1V5h1V4h1V3h1V2h1V1h1V0z`},{value:5,path:`M7,1H6v1H5v1H4v1H3v1H2v1h1V5h1V4h1V3h1V2h1z`},{value:2,path:`M3,5H4V4H5V3H4V4H3z`}]},{type:`backward-diagonal`,sizes:[{value:8,path:`M0,0h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H7V7H6V6H5V5H4V4H3V3H2V2H1V1H0V0z`},{value:5,path:`M2,1h1v1h1v1h1v1h1v1h1v1H6V5H5V4H4V3H3V2H2z`},{value:2,path:`M3,3h1v1h1v1H4V4H3z`}]}]}static get styles(){return s`
      :host {
        display: grid;
        grid-template-columns: repeat(3, 12px);
        grid-template-rows: repeat(4, 12px);
        grid-gap: 4px 1px;
        padding: 2px 0;
        position: relative;
      }

      .selection {
        width: 5px;
        height: 12px;
        margin-left: 4px;
      }

      div.selected {
        color: var(--highlight-text);
      }

      svg {
        margin: 2px;
        width: 8px;
        height: 8px;
        position: absolute;
      }

      path {
        fill: currentColor;
      }

      .selected .selection {
        background-color: var(--highlight);
      }
    `}render(){return R`${this.brushConfigs.map(({type:e,sizes:t})=>t.map(({value:t,path:n})=>R`<div
            @click=${()=>this.onSelect(e,t)}
            class="${this.drawingContext.brush.size===t&&this.drawingContext.brush.type===e?`selected`:``}"
          ><svg viewBox="0 0 8 8"><path d="${n}"></svg>
          <div class="selection"></div>
        </div>`))}`}onSelect(e,t){this.drawingContext.brush.type=e,this.drawingContext.brush.size=t,K(this)}};W([H()],$r.prototype,`drawingContext`,void 0),$r=W([V(`paint-tool-brush`)],$r);var ei=class extends B{constructor(...e){super(...e),this.drawingContext=Y}static get styles(){return s`
      :host {
        display: block;
      }
    `}render(){this.style.backgroundColor=this.drawingContext?.previewColor??`transparent`}};W([H()],ei.prototype,`drawingContext`,void 0),ei=W([V(`paint-tool-color-preview`)],ei);var ti=class extends B{constructor(...e){super(...e),this.drawingContext=Y}static get styles(){return s`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px 0;
      }

      li {
        box-sizing: border-box;
        height: 29px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        margin-bottom: 3px;
        image-rendering: pixelated;
        background-repeat: no-repeat;
      }

      li.selected {
        background-color: var(--highlight);
      }

      li.opaque {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXAQMAAAC7/GShAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAGRJREFUCFtjuJ277XYCQwMDA4MCAwQ0W1nOUWBoWaTkocDAoqTEARKx4lBgaFikBCRZgOJAEeudHQoouiDsnscS0xUYhKYsmcLAMAlIKjBMer4EJNKyBiTSAhLpaZmVjqoL7AYAf/8iQr5WGX0AAAAASUVORK5CYII=');
        background-position: 2px 3px;
      }

      li.transparent {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXAQMAAAC7/GShAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAGlJREFUCFtjuJ277XYCQwMDA4MCAwQ0W1nOUWBoWaTkocDAoqTEARKx4lBgaFikBCRZgOJAEeudHQoouiDsuZN8TiowcEatWsvA0BnVtVaBoXOaz2mgSJjGaqBI0IqVQJEgj5WousBuAABA1CB3t6hRhgAAAABJRU5ErkJggg==');
        background-position: 1px 3px;
      }

      img {
        image-rendering: pixelated;
      }
    `}render(){return R`
      <ul>
        <li
          class="${this.getClasses(!0)}"
          @click="${()=>this.selectValue(!0)}"
        ></li>
        <li
          class="${this.getClasses(!1)}"
          @click="${()=>this.selectValue(!1)}"
        ></li>
      </ul>
    `}getClasses(e){return[...e===this.drawingContext.drawOpaque?[`selected`]:[],...e?[`opaque`]:[`transparent`]].join(` `)}selectValue(e){this.drawingContext.drawOpaque=e,K(this)}};W([H()],ti.prototype,`drawingContext`,void 0),ti=W([V(`paint-tool-draw-opaque`)],ti);var ni=class extends B{constructor(...e){super(...e),this.drawingContext=Y,this.eraserSizes=[4,6,8,10]}static get styles(){return s`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px;
      }

      li {
        margin-bottom: 2px;
      }

      li .selection-wrapper {
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
      }

      li.selected .selection-wrapper {
        background-color: var(--highlight);
      }

      li div.size {
        background-color: var(--button-text);
      }

      li.selected div.size {
        background-color: var(--highlight-text);
      }
    `}render(){return R`
      <ul>
        ${this.eraserSizes.map(e=>R`
            <li
              class="${e===this.drawingContext.eraserSize?`selected`:``}"
              @click="${()=>this.selectSize(e)}"
            >
              <div class="selection-wrapper">
                <div class="size" style="${this.getStyle(e)}"></div>
              </div>
            </li>
          `)}
      </ul>
    `}getStyle(e){return`width: ${e}px; height: ${e}px`}selectSize(e){this.drawingContext.eraserSize=e,K(this)}};W([H()],ni.prototype,`drawingContext`,void 0),ni=W([V(`paint-tool-eraser-size`)],ni);var ri=class extends B{constructor(...e){super(...e),this.drawingContext=Y,this.fillStyles=[{stroke:!0,fill:!1},{stroke:!0,fill:!0},{stroke:!1,fill:!0}]}static get styles(){return s`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 3px 2px;
      }

      li {
        height: 18px;
        width: 35px;
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li.selected {
        background-color: var(--highlight);
      }

      li .item {
        width: 27px;
        height: 10px;
        box-sizing: border-box;
      }

      li .item.stroke {
        border: 1px solid var(--button-text);
      }

      li.selected .item.stroke {
        border-color: var(--highlight-text);
      }

      li .item.fill {
        background-color: var(--button-dark);
      }
    `}render(){return R`
      <ul>
        ${this.fillStyles.map(e=>R`
            <li
              class="${this.isSelected(e)?`selected`:``}"
              @click="${()=>this.onSelect(e)}"
            >
              <div class="item ${this.getClasses(e)}"></div>
            </li>
          `)}
      </ul>
    `}isSelected({stroke:e,fill:t}){return e===this.drawingContext.fillStyle.stroke&&t===this.drawingContext.fillStyle.fill}getClasses({stroke:e,fill:t}){return[...e?[`stroke`]:[],...t?[`fill`]:[]].join(` `)}onSelect(e){this.drawingContext.fillStyle=e,K(this)}};W([H()],ri.prototype,`drawingContext`,void 0),ri=W([V(`paint-tool-fill-style`)],ri);var ii=class extends B{constructor(...e){super(...e),this.drawingContext=Y,this.lineWidths=[1,2,3,4,5]}static get styles(){return s`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px 2px;
      }

      li {
        margin-top: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10px;
        box-sizing: border-box;
      }

      li:nth-child(odd) {
        padding-bottom: 1px;
      }

      li div {
        width: 27px;
        background-color: var(--button-text);
      }

      li.selected {
        background-color: var(--highlight);
      }

      li.selected div {
        background-color: var(--highlight-text);
      }
    `}render(){return R`
      <ul>
        ${this.lineWidths.map(e=>R` <li
              @click="${()=>this.onUpdateWidth(e)}"
              class="${this.drawingContext.lineWidth===e?`selected`:``}"
            >
              <div style="height: ${e}px"></div>
            </li>`)}
      </ul>
    `}onUpdateWidth(e){this.drawingContext.lineWidth=e,K(this)}};W([H()],ii.prototype,`drawingContext`,void 0),ii=W([V(`paint-tool-line-width`)],ii);var ai=class extends B{constructor(...e){super(...e),this.drawingContext=Y,this.selectedMagnifierSize=0,this.selections=[{path:`M3,0H4V9H3V2H1V1H3zM7,3V5H8V7H7V9H8V7h2V9h1V7H10V5h1V3H10V5H8V3zM19,5h1V6H19z`,magnifierSize:1},{path:`M0,1H1V0H4V1H5V4H4V5H3V6H2V7H1V8H5V9H0V7H1V6H2V5H3V4H4V1H1V2H0zM6,3V5H7V7H6V9H7V7H9V9h1V7H9V5h1V3H9V5H7V3zM18,4h2V6H18z`,magnifierSize:2},{path:`M1,0h3v1h1v1H4V1H1v3h3v1h1v3H4v1H1V8h3V5H1v3H0V1h1zM6,3V5H7V7H6V9H7V7H9V9h1V7H9V5h1V3H9V5H7V3zM16,2h6V8H16z`,magnifierSize:6},{path:`M1,0h3v1h1v3H4v1h1v3H4v1H1V8h3V5H1v3H0V5h1V4h3V1H1v3H0V1h1zM6,3V5H7V7H6V9H7V7H9V9h1V7H9V5h1V3H9V5H7V3zm9-2h8V9H15z`,magnifierSize:8}]}static get styles(){return s`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 2px 0 0;
      }

      li {
        margin: 0 0 3px;
        padding: 2px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 13px;
        box-sizing: border-box;
      }

      li.selected {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }

      svg {
        width: 23px;
        height: 9px;
      }

      svg path {
        fill: currentColor;
      }
    `}connectedCallback(){super.connectedCallback(),this.selectedMagnifierSize=this.drawingContext.magnifierSize}render(){return R` <ul>
      ${this.selections.map(e=>R`<li
            @mousedown="${()=>this.onUpdateMagnifierSize(e.magnifierSize)}"
            class="${this.selectedMagnifierSize===e.magnifierSize?`selected`:``}"
          >
            <svg viewBox="0 0 23 9"><path d="${e.path}" /></svg>
          </li>`)}
    </ul>`}onUpdateMagnifierSize(e){this.drawingContext.magnifierSize=e,this.drawingContext.tool=this.drawingContext.previousEditingTool,K(this)}};W([H()],ai.prototype,`drawingContext`,void 0),ai=W([V(`paint-tool-magnifier-size`)],ai),document.querySelector(`paint-app`)?.addEventListener(`titlechange`,e=>document.title=`${e.detail.title} - Paint`),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>navigator.serviceWorker.register(`/sw.js`));