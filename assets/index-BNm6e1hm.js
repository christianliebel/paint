(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const yt=globalThis,ye=yt.ShadowRoot&&(yt.ShadyCSS===void 0||yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ae=Symbol(),Ne=new WeakMap;let pi=class{constructor(t,i,n){if(this._$cssResult$=!0,n!==Ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(ye&&t===void 0){const n=i!==void 0&&i.length===1;n&&(t=Ne.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ne.set(i,t))}return t}toString(){return this.cssText}};const sn=e=>new pi(typeof e=="string"?e:e+"",void 0,Ae),x=(e,...t)=>{const i=e.length===1?e[0]:t.reduce(((n,o,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1]),e[0]);return new pi(i,e,Ae)},an=(e,t)=>{if(ye)e.adoptedStyleSheets=t.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet));else for(const i of t){const n=document.createElement("style"),o=yt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},Ke=ye?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return sn(i)})(e):e;const{is:ln,defineProperty:cn,getOwnPropertyDescriptor:hn,getOwnPropertyNames:pn,getOwnPropertySymbols:dn,getPrototypeOf:un}=Object,Dt=globalThis,We=Dt.trustedTypes,gn=We?We.emptyScript:"",vn=Dt.reactiveElementPolyfillSupport,st=(e,t)=>e,$t={toAttribute(e,t){switch(t){case Boolean:e=e?gn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},$e=(e,t)=>!ln(e,t),qe={attribute:!0,type:String,converter:$t,reflect:!1,useDefault:!1,hasChanged:$e};Symbol.metadata??=Symbol("metadata"),Dt.litPropertyMetadata??=new WeakMap;let q=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=qe){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&cn(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:r}=hn(this.prototype,t)??{get(){return this[i]},set(s){this[i]=s}};return{get:o,set(s){const a=o?.call(this);r?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qe}static _$Ei(){if(this.hasOwnProperty(st("elementProperties")))return;const t=un(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(st("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(st("properties"))){const i=this.properties,n=[...pn(i),...dn(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(Ke(o))}else t!==void 0&&i.push(Ke(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return an(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$ET(t,i){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const r=(n.converter?.toAttribute!==void 0?n.converter:$t).toAttribute(i,n.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,i){const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=n.getPropertyOptions(o),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:$t;this._$Em=o,this[o]=s.fromAttribute(i,r.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){const o=this.constructor,r=this[t];if(n??=o.getPropertyOptions(t),!((n.hasChanged??$e)(r,i)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:n,reflect:o,wrapped:r},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??i??this[t]),r!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(i=void 0),this._$AL.set(t,i)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,r]of n){const{wrapped:s}=r,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((n=>n.hostUpdate?.())),this.update(i)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((i=>i.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};q.elementStyles=[],q.shadowRootOptions={mode:"open"},q[st("elementProperties")]=new Map,q[st("finalized")]=new Map,vn?.({ReactiveElement:q}),(Dt.reactiveElementVersions??=[]).push("2.1.0");const Ce=globalThis,Ct=Ce.trustedTypes,Qe=Ct?Ct.createPolicy("lit-html",{createHTML:e=>e}):void 0,di="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,ui="?"+L,fn=`<${ui}>`,U=document,lt=()=>U.createComment(""),ct=e=>e===null||typeof e!="object"&&typeof e!="function",Pe=Array.isArray,mn=e=>Pe(e)||typeof e?.[Symbol.iterator]=="function",Wt=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ge=/-->/g,Xe=/>/g,F=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,Ye=/"/g,gi=/^(?:script|style|textarea|title)$/i,wn=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),v=wn(1),Q=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Je=new WeakMap,I=U.createTreeWalker(U,129);function vi(e,t){if(!Pe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qe!==void 0?Qe.createHTML(t):t}const bn=(e,t)=>{const i=e.length-1,n=[];let o,r=t===2?"<svg>":t===3?"<math>":"",s=nt;for(let a=0;a<i;a++){const l=e[a];let h,p,c=-1,d=0;for(;d<l.length&&(s.lastIndex=d,p=s.exec(l),p!==null);)d=s.lastIndex,s===nt?p[1]==="!--"?s=Ge:p[1]!==void 0?s=Xe:p[2]!==void 0?(gi.test(p[2])&&(o=RegExp("</"+p[2],"g")),s=F):p[3]!==void 0&&(s=F):s===F?p[0]===">"?(s=o??nt,c=-1):p[1]===void 0?c=-2:(c=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?F:p[3]==='"'?Ye:Ze):s===Ye||s===Ze?s=F:s===Ge||s===Xe?s=nt:(s=F,o=void 0);const u=s===F&&e[a+1].startsWith("/>")?" ":"";r+=s===nt?l+fn:c>=0?(n.push(h),l.slice(0,c)+di+l.slice(c)+L+u):l+L+(c===-2?a:u)}return[vi(e,r+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};let te=class fi{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[h,p]=bn(t,i);if(this.el=fi.createElement(h,n),I.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=I.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(di)){const d=p[s++],u=o.getAttribute(c).split(L),g=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:g[2],strings:u,ctor:g[1]==="."?yn:g[1]==="?"?An:g[1]==="@"?$n:Bt}),o.removeAttribute(c)}else c.startsWith(L)&&(l.push({type:6,index:r}),o.removeAttribute(c));if(gi.test(o.tagName)){const c=o.textContent.split(L),d=c.length-1;if(d>0){o.textContent=Ct?Ct.emptyScript:"";for(let u=0;u<d;u++)o.append(c[u],lt()),I.nextNode(),l.push({type:2,index:++r});o.append(c[d],lt())}}}else if(o.nodeType===8)if(o.data===ui)l.push({type:2,index:r});else{let c=-1;for(;(c=o.data.indexOf(L,c+1))!==-1;)l.push({type:7,index:r}),c+=L.length-1}r++}}static createElement(t,i){const n=U.createElement("template");return n.innerHTML=t,n}};function G(e,t,i=e,n){if(t===Q)return t;let o=n!==void 0?i._$Co?.[n]:i._$Cl;const r=ct(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(e),o._$AT(e,i,n)),n!==void 0?(i._$Co??=[])[n]=o:i._$Cl=o),o!==void 0&&(t=G(e,o._$AS(e,t.values),o,n)),t}class xn{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=(t?.creationScope??U).importNode(i,!0);I.currentNode=o;let r=I.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new Ee(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Cn(r,this,t)),this._$AV.push(h),l=n[++a]}s!==l?.index&&(r=I.nextNode(),s++)}return I.currentNode=U,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}let Ee=class mi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=G(this,t,i),ct(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==Q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=te.createElement(vi(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(i);else{const r=new xn(o,this),s=r.u(this.options);r.p(i),this.T(s),this._$AH=r}}_$AC(t){let i=Je.get(t.strings);return i===void 0&&Je.set(t.strings,i=new te(t)),i}k(t){Pe(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const r of t)o===i.length?i.push(n=new mi(this.O(lt()),this.O(lt()),this,this.options)):n=i[o],n._$AI(r),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class Bt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(t,i=this,n,o){const r=this.strings;let s=!1;if(r===void 0)t=G(this,t,i,0),s=!ct(t)||t!==this._$AH&&t!==Q,s&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=G(this,a[n+l],i,l),h===Q&&(h=this._$AH[l]),s||=!ct(h)||h!==this._$AH[l],h===_?t=_:t!==_&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}s&&!o&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let yn=class extends Bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},An=class extends Bt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},$n=class extends Bt{constructor(t,i,n,o,r){super(t,i,n,o,r),this.type=5}_$AI(t,i=this){if((t=G(this,t,i,0)??_)===Q)return;const n=this._$AH,o=t===_&&n!==_||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==_&&(n===_||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Cn=class{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}};const Pn=Ce.litHtmlPolyfillSupport;Pn?.(te,Ee),(Ce.litHtmlVersions??=[]).push("3.3.0");const En=(e,t,i)=>{const n=i?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const r=i?.renderBefore??null;n._$litPart$=o=new Ee(t.insertBefore(lt(),r),r,void 0,i??{})}return o._$AI(e),o};const _e=globalThis;class b extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=En(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}}b._$litElement$=!0,b.finalized=!0,_e.litElementHydrateSupport?.({LitElement:b});const _n=_e.litElementPolyfillSupport;_n?.({LitElement:b});(_e.litElementVersions??=[]).push("4.2.0");const y=e=>(t,i)=>{i!==void 0?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};const Sn={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:$e},Hn=(e=Sn,t,i)=>{const{kind:n,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),n==="accessor"){const{name:s}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=i;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+n)};function m(e){return(t,i)=>typeof i=="object"?Hn(e,t,i):((n,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,n),s?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,i)}function T(e){return m({...e,state:!0,attribute:!1})}const On=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);function Se(e,t){return(i,n,o)=>{const r=s=>s.renderRoot?.querySelector(e)??null;return On(i,n,{get(){return r(this)}})}}var Tn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,He=(e,t,i,n)=>{for(var o=n>1?void 0:n?Vn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Tn(t,i,o),o};let Pt=class extends b{static get styles(){return x`
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
    `}async firstUpdated(e){if(super.firstUpdated(e),"storage"in navigator){const{usage:t,quota:i}=await navigator.storage.estimate();this.totalFreeMemory=i,this.freeMemoryPercentage=100-(t??1)/(i??1)*100}}render(){return v`
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
    `}getFreeMemoryInKB(){if(typeof this.totalFreeMemory>"u")return"???";const e=Math.round(this.totalFreeMemory/1024);return Intl.NumberFormat("en-US").format(e)}getFreeMemoryPercentage(){return typeof this.freeMemoryPercentage>"u"?"???":Math.round(this.freeMemoryPercentage)}onOK(){this.dispatchEvent(new CustomEvent("close"))}};He([m({attribute:!1})],Pt.prototype,"totalFreeMemory",2);He([m({attribute:!1})],Pt.prototype,"freeMemoryPercentage",2);Pt=He([y("paint-dialog-about")],Pt);function ft(e,t={}){return new Promise(i=>{const n=document.querySelector("paint-app")?.shadowRoot,o=document.createElement(e);Object.entries(t).forEach(([r,s])=>o[r]=s),o.addEventListener("close",r=>{n?.removeChild(o),i(r.detail)}),n?.appendChild(o)})}function mt(e,t=null,i="",n="ok"){return ft("paint-dialog-message-box",{prompt:e,icon:t,title:i,layout:n})}function O(e,t){const i=t?e.indexOf(t):-1;return v`${e.substring(0,i)}<span class="mnemonic"
      >${t}</span
    >${e.substring(i+1)}`}var Mn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,wt=(e,t,i,n)=>{for(var o=n>1?void 0:n?kn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Mn(t,i,o),o};let X=class extends b{constructor(){super(...arguments),this.width="",this.height="",this.unit="pels",this.color="colors",this.units=[{value:"inches",label:"Inches",mnemonic:"I"},{value:"cm",label:"Cm",mnemonic:"m"},{value:"pels",label:"Pels",mnemonic:"P"}],this.colors=[{value:"black-and-white",label:"Black and white",mnemonic:"B"},{value:"colors",label:"Colors",mnemonic:"l"}]}static get styles(){return x`
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
    `}render(){return v` <paint-window caption="Attributes" help close>
      <div class="container">
        <form>
          <div class="dimensions">
            <span>${O("Width:","W")}</span>
            <input
              type="text"
              .value="${this.width}"
              @change="${e=>this.width=e.target.value}"
            />
            <span>${O("Height:","H")}</span>
            <input
              type="text"
              .value="${this.height}"
              @change="${e=>this.height=e.target.value}"
            />
          </div>

          <fieldset>
            <legend>Units</legend>
            ${this.units.map(({value:e,label:t,mnemonic:i})=>v`
                <label
                  ><input
                    type="radio"
                    name="unit"
                    value="${e}"
                    .checked="${this.unit===e}"
                    @change="${()=>this.unit=e}"
                    disabled
                  />
                  ${O(t,i)}</label
                >
              `)}
          </fieldset>

          <fieldset>
            <legend>Colors</legend>
            ${this.colors.map(({value:e,label:t,mnemonic:i})=>v`
                <label
                  ><input
                    type="radio"
                    name="color"
                    value="${e}"
                    .checked="${this.color===e}"
                    @change="${()=>this.color=e}"
                    disabled
                  />
                  ${O(t,i)}</label
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
            >${O("Default","D")}
          </paint-button>
        </div>
      </div>
    </paint-window>`}async onOk(){const{width:e,height:t,unit:i,color:n}=this;if(e.length>5||t.length>5){await mt("Please enter no more than 5 characters.","warning","Paint");return}this.dispatchEvent(new CustomEvent("close",{detail:{width:e,height:t,unit:i,color:n}}))}onCancel(){this.dispatchEvent(new CustomEvent("close"))}onDefault(){this.width=screen.width.toString(),this.height=screen.height.toString(),this.unit="pels",this.color="colors"}};wt([T()],X.prototype,"width",2);wt([T()],X.prototype,"height",2);wt([T()],X.prototype,"unit",2);wt([T()],X.prototype,"color",2);X=wt([y("paint-dialog-attributes")],X);const Dn=[1,2,4,6,8],wi=4;var Bn=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,Oe=(e,t,i,n)=>{for(var o=n>1?void 0:n?Rn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Bn(t,i,o),o};let Et=class extends b{constructor(){super(...arguments),this.currentMagnifierSize=1,this.selectedMagnifierSize=1}static get styles(){return x`
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
    `}firstUpdated(e){super.firstUpdated(e),this.selectedMagnifierSize=this.currentMagnifierSize}render(){return v`
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
                ${Dn.map(e=>v`
                    <label>
                      <input
                        type="radio"
                        name="zoom"
                        value="${e}"
                        @change="${()=>this.selectedMagnifierSize=e}"
                        .checked="${this.selectedMagnifierSize===e}"
                      />
                      ${O((e*100).toString(),e.toString())}%
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
    `}onOk(){this.dispatchEvent(new CustomEvent("close",{detail:{magnifierSize:this.selectedMagnifierSize}}))}onCancel(){this.dispatchEvent(new CustomEvent("close"))}};Oe([m({type:Number,attribute:!1})],Et.prototype,"currentMagnifierSize",2);Oe([T()],Et.prototype,"selectedMagnifierSize",2);Et=Oe([y("paint-dialog-custom-zoom")],Et);var zn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,Te=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ln(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&zn(t,i,o),o};let _t=class extends b{constructor(){super(...arguments),this.modes=[{value:"flip-horizontal",text:"Flip horizontal",mnemonic:"F"},{value:"flip-vertical",text:"Flip vertical",mnemonic:"v"},{value:"rotate",text:"Rotate by angle",mnemonic:"R"}],this.selectedMode=this.modes[0].value,this.degrees=[{value:90,mnemonic:"9"},{value:180,mnemonic:"1"},{value:270,mnemonic:"2"}],this.selectedDegree=this.degrees[0].value}static get styles(){return x`
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
    `}render(){return v`
      <paint-window caption="Flip and Rotate" help close>
        <div class="content">
          <div>
            <fieldset>
              <legend>Flip and Rotate</legend>
              <div class="options">
                ${this.modes.map(e=>v`
                    <label
                      ><input
                        type="radio"
                        name="mode"
                        value="${e.value}"
                        @change="${()=>this.selectedMode=e.value}"
                        .checked="${e.value===this.selectedMode}"
                      />
                      ${O(e.text,e.mnemonic)}</label
                    >
                  `)}
                ${this.degrees.map(e=>v`
                    <label
                      ><input
                        type="radio"
                        name="degree"
                        value="${e.value}"
                        @change="${()=>this.selectedDegree=e.value}"
                        .checked="${e.value==this.selectedDegree}"
                        ?disabled="${this.selectedMode!=="rotate"}"
                      />
                      ${O(`${e.value}°`,e.mnemonic)}</label
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
    `}getFlipRotateParams(){return this.selectedMode==="rotate"?{action:"rotate",param:this.selectedDegree}:{action:"flip",param:this.selectedMode==="flip-horizontal"?"horizontal":"vertical"}}onOk(){this.dispatchEvent(new CustomEvent("close",{detail:this.getFlipRotateParams()}))}onCancel(){this.dispatchEvent(new CustomEvent("close"))}};Te([T()],_t.prototype,"selectedMode",2);Te([T()],_t.prototype,"selectedDegree",2);_t=Te([y("paint-dialog-flip-and-rotate")],_t);function Fn(e,t,i,n,o){let r=0,s=n,a=1;const l=i*i,h=n*n,p=-(l/4+i%2+h),c=-(h/4+n%2+l),d=-(h/4+n%2);let u=-i*s,g=2*h*r,f=-2*l*s;const A=2*h,k=2*l;function P(){r++,g+=A,u+=g}function E(){s--,f+=k,u+=f}function it(nn,on,rn){for(let Kt=0;Kt<rn;Kt++)o({x:nn+Kt,y:on})}for(;s>=0&&r<=i;)u+h*r<=p||u+l*s<=d?(P(),a+=2):u-l*s>c?(it(e-r,t-s,a),s!=0&&it(e-r,t+s,a),E()):(it(e-r,t-s,a),s!=0&&it(e-r,t+s,a),P(),E(),a+=2);n==0&&it(e-i,t,2*i+1)}class In{onPointerDown(t,i,n,o){n.context&&(n.context.fillStyle=o.stroke.value),this.currentPosition={x:t,y:i},this.spray(n),this.intervalHandle=setInterval(()=>this.spray(n),30)}spray({airbrushSize:t,context:i}){if(this.currentPosition&&i){const n=Math.floor(t/2),{x:o,y:r}=this.currentPosition,s=[];Fn(o,r,n,n,a=>s.push(a));for(let a=0;a<10;a++){const l=Math.round(Math.random()*(s.length-1)),{x:h,y:p}=s[l];i.fillRect(h,p,1,1)}}}onPointerMove(t,i,n){typeof this.intervalHandle<"u"&&(this.spray(n),this.currentPosition={x:t,y:i})}onPointerUp(){typeof this.intervalHandle<"u"&&(clearInterval(this.intervalHandle),this.intervalHandle=this.currentPosition=void 0)}}function w(e){e?.dispatchEvent(new CustomEvent("drawing-context-changed",{detail:{...e.drawingContext},bubbles:!0,composed:!0}))}class Un{onPointerDown(t,i,n){this.onPointerMove(t,i,n)}onPointerMove(t,i,n){n.context&&(n.previewColor=this.pickColor(t,i,n.context),w(n.element))}onPointerUp(t,i,n,o){n.context&&(n.previewColor=null,n.colors[o.stroke.key]=this.pickColor(t,i,n.context),n.previousEditingTool&&(n.tool=n.previousEditingTool),w(n.element))}pickColor(t,i,n){const[o,r,s]=n.getImageData(t,i,1,1).data;return`rgb(${o} ${r} ${s})`}}function D(e,t,i,n,o){const r=Math.abs(i-e),s=e<i?1:-1,a=-Math.abs(n-t),l=t<n?1:-1;let h=r+a,p;for(;;){if(o(e,t),p=2*h,p>=a){if(e===i)break;h+=a,e+=s}if(p<=r){if(t===n)break;h+=r,t+=l}}}function jn(e,t,i,n,o){let r=Math.abs(i-e),s=Math.abs(n-t),a=s&1,l=4*(1-r)*s*s,h=4*(a+1)*r*r,p=l+h+a*r*r,c;e>i&&(e=i,i+=r),t>n&&(t=n),t+=(s+1)/2,n=t-a,r=8*r*r,a=8*s*s;do o(i,t),o(e,t),o(e,n),o(i,n),c=2*p,c<=h&&(t++,n--,p+=h+=r),(c>=l||2*p>h)&&(e++,i--,p+=l+=a);while(e<=i);for(;t-n<=s;)o(e-1,t),o(i+1,t++),o(e-1,n),o(i+1,n--)}class Nn{constructor(){this.previous={x:0,y:0}}onPointerDown(t,i,{context:n},o){n&&(n.fillStyle=o.stroke.value,n.fillRect(t,i,1,1),this.previous={x:t,y:i})}onPointerMove(t,i,{context:n}){D(this.previous.x,this.previous.y,t,i,(o,r)=>{n?.fillRect(o,r,1,1)}),this.previous={x:t,y:i}}}var W=(function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(n,o,r){i.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:r})},i.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,o){if(o&1&&(n=i(n)),o&8||o&4&&typeof n=="object"&&n&&n.__esModule)return n;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),o&2&&typeof n!="string")for(var s in n)i.d(r,s,(function(a){return n[a]}).bind(null,s));return r},i.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(o,"a",o),o},i.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},i.p="",i(i.s=0)})([function(e,t,i){i.r(t),i.d(t,"isSameColor",(function(){return r})),i.d(t,"setColorAtPixel",(function(){return o})),i.d(t,"getColorAtPixel",(function(){return n})),i.d(t,"colorToRGBA",(function(){return a})),i.d(t,"hex2RGBA",(function(){return s}));function n(p,c,d){var u=p.width,g=p.data,f=4*(d*u+c);if(g[f+3]===void 0)throw new Error("Invalid pixel coordinates: x="+c+"; y="+d);return{r:g[f],g:g[f+1],b:g[f+2],a:g[f+3]}}function o(p,c,d,u){var g=p.width,f=p.data,A=4*(u*g+d);if(f[A+3]===void 0)throw new Error("Invalid pixel coordinates. Cannot set color at: x="+d+"; y="+u);f[A+0]=c.r&255,f[A+1]=c.g&255,f[A+2]=c.b&255,f[A+3]=c.a&255}function r(p,c,d){return d===void 0&&(d=0),!(Math.abs(p.r-c.r)>d||Math.abs(p.g-c.g)>d||Math.abs(p.b-c.b)>d||Math.abs(p.a-c.a)>d)}function s(p,c){c===void 0&&(c=255);var d=p;if(p.indexOf("#")===0&&(d=p.slice(1)),d.length===3&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),d.length!==6)throw new Error("Invalid HEX color "+d+".");var u=parseInt(d.slice(0,2),16),g=parseInt(d.slice(2,4),16),f=parseInt(d.slice(4,6),16);return{r:u,g,b:f,a:c}}function a(p){if(p.indexOf("rgba")!==-1){var c=/rgba\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9\.]{1,})/g.exec(p);c[0];var d=c[1],u=c[2],g=c[3],f=c[4];return{r:parseInt(d),g:parseInt(u),b:parseInt(g),a:Math.ceil(parseFloat(f)*255)}}else if(p.indexOf("rgb")!==-1){var A=/rgb\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3})/g.exec(p);A[0];var d=A[1],u=A[2],g=A[3];return{r:parseInt(d),g:parseInt(u),b:parseInt(g),a:255}}else{if(p.indexOf("#")!==-1)return s(p);throw new Error("Unsupported color format. Please use CSS rgba, rgb, or HEX!")}}var l=(function(){function p(c){this.collectModifiedPixels=!1,this.modifiedPixelsCount=0,this.modifiedPixels=new Set,this._tolerance=0,this._queue=[],this.imageData=c,this.isSameColor=r,this.setColorAtPixel=o,this.getColorAtPixel=n,this.colorToRGBA=a}return p.prototype.fill=function(c,d,u,g){this._newColor=this.colorToRGBA(c),this._replacedColor=this.getColorAtPixel(this.imageData,d,u),this._tolerance=g,!this.isSameColor(this._replacedColor,this._newColor,this._tolerance)&&(this.addToQueue([d,d,u,-1]),this.fillQueue())},p.prototype.addToQueue=function(c){this._queue.push(c)},p.prototype.popFromQueue=function(){return this._queue.length?this._queue.pop():null},p.prototype.isValidTarget=function(c){if(c!==null){var d=this.getColorAtPixel(this.imageData,c.x,c.y);return this.isSameColor(this._replacedColor,d,this._tolerance)}},p.prototype.fillLineAt=function(c,d){if(!this.isValidTarget({x:c,y:d}))return[-1,-1];this.setPixelColor(this._newColor,{x:c,y:d});for(var u=c,g=c,f=this.getPixelNeighbour("left",u,d);f&&this.isValidTarget(f);)this.setPixelColor(this._newColor,f),u=f.x,f=this.getPixelNeighbour("left",u,d);for(f=this.getPixelNeighbour("right",g,d);f&&this.isValidTarget(f);)this.setPixelColor(this._newColor,f),g=f.x,f=this.getPixelNeighbour("right",g,d);return[u,g]},p.prototype.fillQueue=function(){for(var c=this.popFromQueue();c;){for(var d=c[0],u=c[1],g=c[2],f=c[3],A=d;A!==-1&&A<=u;){var k=this.fillLineAt(A,g),P=k[0],E=k[1];P!==-1&&(P>=d&&E<=u&&f!==-1?(f<g&&g+1<this.imageData.height&&this.addToQueue([P,E,g+1,g]),f>g&&g>0&&this.addToQueue([P,E,g-1,g])):(g>0&&this.addToQueue([P,E,g-1,g]),g+1<this.imageData.height&&this.addToQueue([P,E,g+1,g]))),E===-1&&A<=u?A+=1:A=E+1}c=this.popFromQueue()}},p.prototype.setPixelColor=function(c,d){this.setColorAtPixel(this.imageData,c,d.x,d.y),this.modifiedPixelsCount++,this.collectModifiedPixels&&this.modifiedPixels.add(d.x+"|"+d.y)},p.prototype.getPixelNeighbour=function(c,d,u){d=d|0,u=u|0;var g;switch(c){case"right":g={x:d+1|0,y:u};break;case"left":g={x:d-1|0,y:u};break}return g.x>=0&&g.x<this.imageData.width?g:null},p})(),h=l;t.default=h}]);W===void 0&&console.error("esm-webpack-plugin: nothing exported!");const Kn=W.default;W.isSameColor;W.setColorAtPixel;W.getColorAtPixel;W.colorToRGBA;W.hex2RGBA;class Wn{onPointerDown(t,i,{canvas:n,context:o},r){if(n&&o){const s=new Kn(o.getImageData(0,0,n.width,n.height));s.fill(r.stroke.value,t,i,0),o.putImageData(s.imageData,0,0)}}}function B(e){e?.clearRect(0,0,e.canvas.width,e.canvas.height)}function bi(e,t,i,n){i===1&&n.fillRect(e,t,1,1),i===2&&n.fillRect(e-1,t-1,2,2),i===3&&(n.fillRect(e-1,t,3,1),n.fillRect(e,t-1,1,3)),i===4&&(n.fillRect(e-1,t-2,2,4),n.fillRect(e-2,t-1,4,2)),i===5&&(n.fillRect(e-1,t-2,3,5),n.fillRect(e-2,t-1,5,3)),i===7&&(n.fillRect(e-1,t-3,3,7),n.fillRect(e-3,t-1,7,3),n.fillRect(e-2,t-2,5,5))}class qn{constructor(){this.previous={x:0,y:0}}onPointerHover(t,i,{canvas:n,brush:o,previewContext:r},s){n&&r&&(B(r),r.fillStyle=s.stroke.value,this.drawBrush(t,i,o,r))}onPointerDown(t,i,{brush:n,context:o},r){o&&(o.fillStyle=r.stroke.value,this.drawBrush(t,i,n,o),this.previous={x:t,y:i})}onPointerMove(t,i,{brush:n,context:o}){if(o){let r={...this.previous};D(this.previous.x,this.previous.y,t,i,(s,a)=>{const l={x:s-r.x,y:a-r.y};this.drawBrush(s,a,n,o,l),r={x:s,y:a}}),this.previous={x:t,y:i}}}drawBrush(t,i,{type:n,size:o},r,s){if(n==="circle")return bi(t,i,o,r);const a=Math.floor(o/2);if(n==="square")return this.drawSquare(t,i,a,o,r);const l=o%2===0?-1:0,h=s?i-Math.min(0,s.y):0;if(n==="forward-diagonal"){if(s&&s.y!==0){const p=s.y===-1&&s.x===-1?t:t-1;this.drawForwardLine(p,h,a,l,r)}this.drawForwardLine(t,i,a,l,r);return}if(n==="backward-diagonal"){if(s&&s.y!==0){const p=s.y===-1&&s.x===1?t:t+1;this.drawBackwardLine(p,h,a,l,r)}this.drawBackwardLine(t,i,a,l,r);return}throw new Error("Unknown brush type.")}drawSquare(t,i,n,o,r){r.fillRect(t-n,i-n,o,o)}drawForwardLine(t,i,n,o,r){const s={x:t-n,y:i+n+o},a={x:t+n+o,y:i-n};D(s.x,s.y,a.x,a.y,(l,h)=>{r.fillRect(l,h,1,1)})}drawBackwardLine(t,i,n,o,r){const s={x:t-n,y:i-n},a={x:t+n+o,y:i+n+o};D(s.x,s.y,a.x,a.y,(l,h)=>{r.fillRect(l,h,1,1)})}}class Qn{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{canvas:n,lineWidth:o,fillStyle:r,previewContext:s},a){n&&s&&this.drawRectangle(t,i,s,s,r,o,a)}onPointerUp(t,i,{canvas:n,context:o,lineWidth:r,fillStyle:s,previewContext:a},l){n&&o&&a&&this.drawRectangle(t,i,o,a,s,r,l)}drawRectangle(t,i,n,o,r,s,a){B(o);const l=Math.min(this.startPosition.x,t),h=Math.max(this.startPosition.x,t),p=Math.min(this.startPosition.y,i),c=Math.max(this.startPosition.y,i),d=Math.abs(h-l),u=Math.abs(c-p);if(r.stroke&&(d<s*2||u<s*2)){n.fillStyle=a.stroke.value,n.fillRect(l,p,d,u);return}r.fill&&(n.fillStyle=a.fill.value,n.fillRect(l,p,d,u)),r.stroke&&(n.fillStyle=a.stroke.value,this.getPointsForLine(l,p,h,c,s).forEach(({x:g,y:f})=>{n.fillRect(g,f,1,1)}))}getPointsForLine(t,i,n,o,r){const s=[];for(let a=0;a<r;a++)D(t+a,i+a,n,i+a,(l,h)=>s.push({x:l,y:h})),D(t+a,i+a,t+a,o,(l,h)=>s.push({x:l,y:h})),D(n-a,o-a,n-a,i,(l,h)=>s.push({x:l,y:h})),D(n-a,o-a,t,o-a,(l,h)=>s.push({x:l,y:h}));return s}}class Gn{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i,{previewContext:n,context:o},r){n&&o&&(this.startPosition={x:t,y:i},n.fillStyle=o.fillStyle=r.stroke.value)}onPointerMove(t,i,{previewContext:n,canvas:o,lineWidth:r}){o&&n&&this.drawLine(t,i,n,n,r)}onPointerUp(t,i,{previewContext:n,context:o,canvas:r,lineWidth:s}){n&&o&&r&&this.drawLine(t,i,o,n,s)}drawLine(t,i,n,o,r){B(o),D(t,i,this.startPosition.x,this.startPosition.y,(s,a)=>{bi(s,a,r,n)})}}function xi(e,t,i){i?.dispatchEvent(new CustomEvent("area",{detail:{width:Math.abs(t.x-e.x),height:Math.abs(t.y-e.y)},bubbles:!0,composed:!0}))}function yi(e,t,i){B(i),i?.setLineDash([4]),i?.strokeRect(e.x+.5,e.y+.5,t.x-e.x,t.y-e.y),i?.setLineDash([])}class Xn{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i,n){this.startPosition={x:t,y:i},n.selection=null,w(n.element)}onPointerMove(t,i,{element:n,previewContext:o}){yi(this.startPosition,{x:t,y:i},o),xi(this.startPosition,{x:t,y:i},n)}onPointerUp(t,i,n){const{element:o,previewContext:r}=n;B(r),o?.dispatchEvent(new CustomEvent("area",{bubbles:!0,composed:!0}));const s=Math.abs(t-this.startPosition.x),a=Math.abs(i-this.startPosition.y),l=Math.min(t,this.startPosition.x),h=Math.min(i,this.startPosition.y);s===0||a===0||(n.selection={x:l,y:h,width:s,height:a},w(o))}}function ti(e){const t=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return{r:t,g:i,b:n}}class Zn{constructor(){this.previous={x:0,y:0}}onPointerHover(t,i,{canvas:n,previewContext:o,eraserSize:r,colors:s}){n&&o&&(B(o),t>0&&t<n.width&&i>0&&i<n.height&&(o.fillStyle="black",o.fillRect(...this.getFillRectArgs(t,i,r)),o.fillStyle=s.secondary,o.fillRect(...this.getFillRectArgs(t,i,r-2))))}onPointerDown(t,i,n,o){this.previous={x:t,y:i},this.handleEraser(t,i,n,o)}onPointerMove(t,i,n,o){D(this.previous.x,this.previous.y,t,i,(r,s)=>{this.handleEraser(r,s,n,o)}),this.previous={x:t,y:i}}handleEraser(t,i,{context:n,eraserSize:o,colors:r},s){if(n)if(s.stroke.key==="primary")n.fillStyle=r.secondary,n.fillRect(...this.getFillRectArgs(t,i,o));else{const{r:a,g:l,b:h}=ti(r.primary),{r:p,g:c,b:d}=ti(r.secondary),[u,g,f,A]=this.getFillRectArgs(t,i,o),k=n.getImageData(u,g,f,A),{data:P}=k;for(let E=0;E<P.length;E+=4)P[E]===a&&P[E+1]===l&&P[E+2]===h&&(P[E]=p,P[E+1]=c,P[E+2]=d);n.putImageData(k,u,g)}}getFillRectArgs(t,i,n){return[t-n/2,i-n/2,n,n]}}class Yn{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{fillStyle:n,canvas:o,previewContext:r},s){o&&r&&this.drawEllipse(t,i,n,s,r,r)}onPointerUp(t,i,{fillStyle:n,canvas:o,context:r,previewContext:s},a){o&&r&&s&&this.drawEllipse(t,i,n,a,r,s)}drawEllipse(t,i,n,o,r,s){B(s);const a=[];if(jn(this.startPosition.x,this.startPosition.y,t,i,(l,h)=>{a.push({x:l,y:h})}),n.fill){r.fillStyle=o.fill.value,a.sort((h,p)=>h.y-p.y||h.x-p.x);const l=this.getFillPixels(a);Array.from(l).forEach(h=>{this.drawPixel(r,h)})}n.stroke&&(r.fillStyle=o.stroke.value),a.forEach(l=>{this.drawPixel(r,l)})}drawPixel(t,{x:i,y:n}){t.fillRect(Math.floor(i),Math.floor(n),1,1)}*getFillPixels(t){let i;for(const n of t){if(i?.y===n.y&&n.x-i.x>1){const o=Math.min(i.x,n.x),r=Math.max(i.x,n.x);for(let s=o;s<=r;s++)yield{x:s,y:n.y}}i=n}}}function Y(e){e.view.textToolbar=e.text.showToolbar&&e.text.active}class Ai{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{previewContext:n,element:o}){yi(this.startPosition,{x:t,y:i},n),xi(this.startPosition,{x:t,y:i},o)}onPointerUp(t,i,n){B(n.previewContext);const o=n.text.x=Math.min(t,this.startPosition.x),r=n.text.y=Math.min(i,this.startPosition.y),s=Math.max(t,this.startPosition.x),a=Math.max(i,this.startPosition.y),l=s-o,h=a-r;l<10||h<10||(n.element?.dispatchEvent(new CustomEvent("area",{bubbles:!0,composed:!0})),n.text.active=!0,Y(n),n.text.width=l,n.text.height=h,w(n.element))}}class Jn{onPointerDown(t,i,n){n.magnifierSize===1?n.magnifierSize=n.previousMagnifierSize:(n.previousMagnifierSize=n.magnifierSize,n.magnifierSize=1),w(n.element)}onPointerUp(t,i,n){n.tool=n.previousEditingTool,w(n.element)}}const $i={tooltip:"Free-Form Select",helpText:"Selects a free-form part of the picture to move, copy, or edit.",imagePosition:"0 0"},Ci={tooltip:"Select",helpText:"Selects a rectangular part of the picture to move, copy, or edit.",imagePosition:"-16px 0",instance:new Xn},ee={tooltip:"Eraser/Color Eraser",helpText:"Erases a portion of the picture, using the selected eraser shape.",imagePosition:"-32px 0",instance:new Zn,cursor:"none"},to={tooltip:"Fill With Color",helpText:"Fills an area with the current drawing color.",imagePosition:"-48px 0",instance:new Wn},ie={tooltip:"Pick Color",helpText:"Picks up a color from the picture for drawing.",imagePosition:"-64px 0",instance:new Un},ne={tooltip:"Magnifier",helpText:"Changes the magnification.",imagePosition:"-80px 0",instance:new Jn,cursor:"zoom-in"},St={tooltip:"Pencil",helpText:"Draws a free-form line one pixel wide.",imagePosition:"-96px 0",instance:new Nn},oe={tooltip:"Brush",helpText:"Draws using a brush with the selected shape and size.",imagePosition:"-112px 0",instance:new qn},re={tooltip:"Airbrush",helpText:"Draws using an airbrush of the selected size.",imagePosition:"-128px 0",instance:new In},Pi={tooltip:"Text",helpText:"Inserts text into the picture.",imagePosition:"-144px 0",instance:new Ai},se={tooltip:"Line",helpText:"Draws a straight line with the selected line width.",imagePosition:"-160px 0",instance:new Gn},ae={tooltip:"Curve",helpText:"Draws a curved line with the selected line width.",imagePosition:"-176px 0"},le={tooltip:"Rectangle",helpText:"Draws a rectangle with the selected fill style.",imagePosition:"-192px 0",instance:new Qn},ce={tooltip:"Polygon",helpText:"Draws a polygon with the selected fill style.",imagePosition:"-208px 0"},Ei={tooltip:"Ellipse",helpText:"Draws an ellipse with the selected fill style.",imagePosition:"-224px 0",instance:new Yn},he={tooltip:"Rounded Rectangle",helpText:"Draws a rounded rectangle with the selected fill style.",imagePosition:"-240px 0"},eo=[$i,Ci,ee,to,ie,ne,St,oe,re,Pi,se,ae,le,ce,Ei,he],_i={primary:"#000000",secondary:"#FFFFFF"},Si=["#000000","#808080","#800000","#808000","#008000","#008080","#000080","#800080","#808040","#004040","#0080FF","#004080","#4000FF","#804000","#FFFFFF","#C0C0C0","#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FFFF80","#00FF80","#80FFFF","#8080FF","#FF0080","#FF8040"],S={lineWidth:1,colors:{..._i},palette:[...Si],selectedPaletteIndex:0,previewColor:null,drawOpaque:!0,eraserSize:8,magnifierSize:1,previousMagnifierSize:4,showGrid:!1,brush:{type:"circle",size:4},airbrushSize:9,fillStyle:{stroke:!0,fill:!1},tool:St,previousEditingTool:St,selection:null,view:{statusBar:!0,colorBox:!0,toolBox:!0,textToolbar:!1},document:{title:"untitled",dirty:!1},text:{active:!1,font:"Arial",size:12,showToolbar:!0,bold:!1,italic:!1,underline:!1},element:null,previewCanvas:null,previewContext:null,canvas:null,context:null,history:null},io=[8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72],no=["Arial","Verdana","Tahoma","Trebuchet MS","Times New Roman","Georgia","Garamond","Courier New","Brush Script MT"];let Ht;async function ei(){return Ht||Promise.resolve([...no])}function oo(){return Ht?!1:"queryLocalFonts"in window?(Ht=ro(),!0):!1}async function ro(){const e=[];for await(const t of await window.queryLocalFonts())e.push(t.family);return e.filter((t,i)=>e.indexOf(t)===i)}var so=Object.defineProperty,ao=Object.getOwnPropertyDescriptor,Ve=(e,t,i,n)=>{for(var o=n>1?void 0:n?ao(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&so(t,i,o),o};let Ot=class extends b{constructor(){super(...arguments),this.drawingContext=S,this.fonts=[],this.fontSizes=io}static get styles(){return x`
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
    `}async firstUpdated(e){super.firstUpdated(e),this.fonts=await ei(),this.addEventListener("close",()=>{this.drawingContext.text.showToolbar=!1,Y(this.drawingContext),w(this)})}updateFont(e){this.drawingContext.text.font=e.target.value,w(this)}updateSize(e){this.drawingContext.text.size=parseInt(e.target.value),w(this)}toggle(e){this.drawingContext.text[e]=!this.drawingContext.text[e],w(this)}render(){return this.drawingContext.view.textToolbar?v`
      <paint-window caption="Fonts" tool close>
        <div class="content">
          <select
            class="font-list"
            @click="${()=>this.onFontListClick()}"
            @change="${e=>this.updateFont(e)}"
          >
            ${this.fonts.map(e=>v` <option
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
            ${this.fontSizes.map(e=>v` <option
                  value="${e}"
                  ?selected="${e===this.drawingContext.text.size}"
                >
                  ${e}
                </option>`)}
          </select>
          <paint-button @click="${()=>this.toggle("bold")}" tabindex="0">
            <svg><path d="M0,0h7v1h1v3H7v1h1v3H7v1H0V8h5V1H4v3h1v1H4v3H1V1H0z"></svg>
          </paint-button>
          <paint-button @click="${()=>this.toggle("italic")}" tabindex="0">
            <svg><path d="M4,0h5v1H7v1H6v2H5v2H4v2h1v1H0V8h2V6h1V4h1V2h1V1H4z"></svg>
          </paint-button>
          <paint-button @click="${()=>this.toggle("underline")}" tabindex="0">
            <svg><path d="M0,0h3v5h2V0h2v9H1V8h6V7H2V6H1V1H0z"></svg>
          </paint-button>
        </div>
      </paint-window>
    `:v``}async onFontListClick(){oo()&&(this.fonts=await ei())}};Ve([m({type:Object})],Ot.prototype,"drawingContext",2);Ve([T()],Ot.prototype,"fonts",2);Ot=Ve([y("paint-dialog-text-toolbar")],Ot);var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,J=(e,t,i,n)=>{for(var o=n>1?void 0:n?co(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&lo(t,i,o),o};let j=class extends b{constructor(){super(...arguments),this.prompt="",this.title="",this.icon=null,this.layout="ok"}static get styles(){return x`
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
    `}firstUpdated(e){super.firstUpdated(e),requestAnimationFrame(()=>this.window?.center())}render(){return v`
      <paint-window caption="${this.title}" close>
        <div class="content">
          ${this.getIcon()}
          <div class="prompt">${this.prompt}</div>
          <div class="buttons">${this.getDialogLayout()}</div>
        </div>
      </paint-window>
    `}getIcon(){return this.icon==="warning"?v` <img
        class="icon"
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAElBMVEUAAAAAAAAAgACAgIDAwMD//wCJvpKsAAAAAXRSTlMAQObYZgAAAIxJREFUKJFlj9EJAjAMREN1gXy4gf0vZAGhOoCQ7L+KNpWkZ+6vD+71QrRzJ0yzxz+YA0A3LUCwYTYLGNAwlDgQaDBImr35dkq6Ay1ADsUCKQkworGBFiC5W/mV5yywhoVk7TayPMeBZ0uaZWYCtpB4w7/9SQBIKDgkp9MlHYAWIHR9nplfq2CILvAeH0wjUtKxjmmsAAAAAElFTkSuQmCC"
      />`:this.icon==="question"?v` <img
        class="icon"
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAD1BMVEX///////8AAP/AwMAAAACA2A1yAAAAAXRSTlMAQObYZgAAAIJJREFUeNqtk8EKwyAUBLPu/v83F5LQTacWC8lcPMyoCM/tOZIy1brwnUQg0+3jhIdE9S0UBoNBDI9AsXlB1500OIwY2NdA9Q2MYNQ3gF8HWgSaBKWeQWHAO+C9fRR4wz8Bx6k+9fOJ8s7PmawveUtoHHLKeiaBBkex+l8IiO2bBXkBpqwEhmxT96QAAAAASUVORK5CYII="
      />`:v``}getDialogLayout(){if(this.layout==="ok")return v` <paint-button
        @click="${()=>this.onClose("ok")}"
        tabindex="0"
        >OK
      </paint-button>`;if(this.layout==="yes-no-cancel")return v`
        <paint-button @click="${()=>this.onClose("yes")}" tabindex="0"
          >${O("Yes","Y")}
        </paint-button>
        <paint-button @click="${()=>this.onClose("no")}" tabindex="0"
          >${O("No","N")}
        </paint-button>
        <paint-button @click="${()=>this.onClose("cancel")}" tabindex="0"
          >Cancel
        </paint-button>
      `;throw new Error("Unsupported Layout.")}onClose(e){this.dispatchEvent(new CustomEvent("close",{detail:e}))}};J([m({type:String})],j.prototype,"prompt",2);J([m({type:String})],j.prototype,"title",2);J([m({type:String})],j.prototype,"icon",2);J([m({type:String})],j.prototype,"layout",2);J([Se("paint-window")],j.prototype,"window",2);j=J([y("paint-dialog-message-box")],j);var ho=Object.defineProperty,po=Object.getOwnPropertyDescriptor,Rt=(e,t,i,n)=>{for(var o=n>1?void 0:n?po(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&ho(t,i,o),o};let N=class extends b{constructor(){super(),this.caption="",this.help=!1,this.close=!1,this.position={x:100,y:50},this.mousePosition=null,this.pointerMoveListener=this.onPointerMove.bind(this),this.pointerUpListener=this.onPointerUp.bind(this),document.addEventListener("pointermove",this.pointerMoveListener),document.addEventListener("pointerup",this.pointerUpListener),this.moveWindow()}static get styles(){return x`
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
    `}render(){return v`
      <div class="wrapper">
        <div class="title-bar" @pointerdown="${this.onPointerDown}">
          <span class="title">${this.caption}</span>
          ${this.help?v`<paint-window-title-bar-button
                help
              ></paint-window-title-bar-button>`:""}
          ${this.close?v`<paint-window-title-bar-button
                close
                @click="${this.onClose}"
              ></paint-window-title-bar-button>`:""}
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("pointerup",this.pointerUpListener)}onPointerDown({clientX:e,clientY:t}){this.mousePosition={clientX:e,clientY:t}}onPointerMove({clientX:e,clientY:t}){if(this.mousePosition){e=N.clamp(e,0,innerWidth),t=N.clamp(t,0,innerHeight);const i=e-this.mousePosition.clientX,n=t-this.mousePosition.clientY;this.position.x=this.position.x+i,this.position.y=this.position.y+n,this.mousePosition={clientX:e,clientY:t},this.moveWindow()}}static clamp(e,t,i){return Math.min(Math.max(e,t),i)}onPointerUp(){this.mousePosition=null}center(){const{width:e,height:t}=this.getBoundingClientRect();this.position={x:(innerWidth-e)/2,y:(innerHeight-t)/2},this.moveWindow()}moveWindow(){this.style.transform=`translate(${this.position.x}px, ${this.position.y}px)`}onClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};Rt([m({type:String})],N.prototype,"caption",2);Rt([m({type:Boolean})],N.prototype,"help",2);Rt([m({type:Boolean})],N.prototype,"close",2);N=Rt([y("paint-window")],N);var uo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,Me=(e,t,i,n)=>{for(var o=n>1?void 0:n?go(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&uo(t,i,o),o};let Tt=class extends b{constructor(){super(),this.help=!1,this.close=!1,this.addEventListener("pointerdown",e=>{e.stopPropagation()})}static get styles(){return x`
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
    `}render(){return v` <div class="wrapper">${this.getButton()}</div> `}getButton(){if(this.help)return v`
        <svg viewBox="0 0 6 9" width="6" height="9">
          <path d="M0,1h1V0h4v1h1v2H5v1H4v2H2V4h1V3h1V1H2v2H0V1z" />
          <path d="M2,7h2v2H2V7z" />
        </svg>
      `;if(this.close)return v`
        <svg viewBox="0 0 8 9" width="8" height="9">
          <path
            d="M0,1h2v1h1v1h2V2h1V1h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V7H5V6H3v1H2v1H0V7h1V6h1V5h1V4H2V3H1V2H0V1z"
          />
        </svg>
      `}};Me([m({type:Boolean})],Tt.prototype,"help",2);Me([m({type:Boolean})],Tt.prototype,"close",2);Tt=Me([y("paint-window-title-bar-button")],Tt);const qt=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Qt(e,t,i,n){e.addEventListener?e.addEventListener(t,i,n):e.attachEvent&&e.attachEvent(`on${t}`,i)}function ot(e,t,i,n){e&&(e.removeEventListener?e.removeEventListener(t,i,n):e.detachEvent&&e.detachEvent(`on${t}`,i))}function Hi(e,t){const i=t.slice(0,t.length-1),n=[];for(let o=0;o<i.length;o++)n.push(e[i[o].toLowerCase()]);return n}function Oi(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let i=t.lastIndexOf("");for(;i>=0;)t[i-1]+=",",t.splice(i,1),i=t.lastIndexOf("");return t}function vo(e,t){const i=e.length>=t.length?e:t,n=e.length>=t.length?t:e;let o=!0;for(let r=0;r<i.length;r++)n.indexOf(i[r])===-1&&(o=!1);return o}function Ti(e){let t=e.keyCode||e.which||e.charCode;return e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t}const ht={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":qt?173:189,"=":qt?61:187,";":qt?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},M={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},rt={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},H={16:!1,18:!1,17:!1,91:!1},C={};for(let e=1;e<20;e++)ht[`f${e}`]=111+e;let $=[],at=null,Vi="all";const R=new Map,tt=e=>ht[e.toLowerCase()]||M[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),fo=e=>Object.keys(ht).find(t=>ht[t]===e),mo=e=>Object.keys(M).find(t=>M[t]===e),Mi=e=>{Vi=e||"all"},pt=()=>Vi||"all",wo=()=>$.slice(0),bo=()=>$.map(e=>fo(e)||mo(e)||String.fromCharCode(e)),xo=()=>{const e=[];return Object.keys(C).forEach(t=>{C[t].forEach(({key:i,scope:n,mods:o,shortcut:r})=>{e.push({scope:n,shortcut:r,mods:o,keys:i.split("+").map(s=>tt(s))})})}),e},ki=e=>{const t=e.target||e.srcElement,{tagName:i}=t;let n=!0;const o=i==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(o||i==="TEXTAREA"||i==="SELECT")&&!t.readOnly)&&(n=!1),n},yo=e=>(typeof e=="string"&&(e=tt(e)),$.indexOf(e)!==-1),Ao=(e,t)=>{let i,n;e||(e=pt());for(const o in C)if(Object.prototype.hasOwnProperty.call(C,o))for(i=C[o],n=0;n<i.length;)i[n].scope===e?i.splice(n,1).forEach(({element:r})=>ke(r)):n++;pt()===e&&Mi(t||"all")};function $o(e){let t=Ti(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=tt(e.key));const i=$.indexOf(t);if(i>=0&&$.splice(i,1),e.key&&e.key.toLowerCase()==="meta"&&$.splice(0,$.length),(t===93||t===224)&&(t=91),t in H){H[t]=!1;for(const n in M)M[n]===t&&(z[n]=!1)}}const Di=(e,...t)=>{if(typeof e>"u")Object.keys(C).forEach(i=>{Array.isArray(C[i])&&C[i].forEach(n=>xt(n)),delete C[i]}),ke(null);else if(Array.isArray(e))e.forEach(i=>{i.key&&xt(i)});else if(typeof e=="object")e.key&&xt(e);else if(typeof e=="string"){let[i,n]=t;typeof i=="function"&&(n=i,i=""),xt({key:e,scope:i,method:n,splitKey:"+"})}},xt=({key:e,scope:t,method:i,splitKey:n="+"})=>{Oi(e).forEach(o=>{const r=o.split(n),s=r.length,a=r[s-1],l=a==="*"?"*":tt(a);if(!C[l])return;t||(t=pt());const h=s>1?Hi(M,r):[],p=[];C[l]=C[l].filter(c=>{const d=(i?c.method===i:!0)&&c.scope===t&&vo(c.mods,h);return d&&p.push(c.element),!d}),p.forEach(c=>ke(c))})};function ii(e,t,i,n){if(t.element!==n)return;let o;if(t.scope===i||t.scope==="all"){o=t.mods.length>0;for(const r in H)Object.prototype.hasOwnProperty.call(H,r)&&(!H[r]&&t.mods.indexOf(+r)>-1||H[r]&&t.mods.indexOf(+r)===-1)&&(o=!1);(t.mods.length===0&&!H[16]&&!H[18]&&!H[17]&&!H[91]||o||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat($),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function ni(e,t){const i=C["*"];let n=Ti(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(z.filter||ki).call(this,e))return;if((n===93||n===224)&&(n=91),$.indexOf(n)===-1&&n!==229&&$.push(n),["metaKey","ctrlKey","altKey","shiftKey"].forEach(a=>{const l=rt[a];e[a]&&$.indexOf(l)===-1?$.push(l):!e[a]&&$.indexOf(l)>-1?$.splice($.indexOf(l),1):a==="metaKey"&&e[a]&&($=$.filter(h=>h in rt||h===n))}),n in H){H[n]=!0;for(const a in M)if(Object.prototype.hasOwnProperty.call(M,a)){const l=rt[M[a]];z[a]=e[l]}if(!i)return}for(const a in H)Object.prototype.hasOwnProperty.call(H,a)&&(H[a]=e[rt[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&($.indexOf(17)===-1&&$.push(17),$.indexOf(18)===-1&&$.push(18),H[17]=!0,H[18]=!0);const o=pt();if(i)for(let a=0;a<i.length;a++)i[a].scope===o&&(e.type==="keydown"&&i[a].keydown||e.type==="keyup"&&i[a].keyup)&&ii(e,i[a],o,t);if(!(n in C))return;const r=C[n],s=r.length;for(let a=0;a<s;a++)if((e.type==="keydown"&&r[a].keydown||e.type==="keyup"&&r[a].keyup)&&r[a].key){const l=r[a],{splitKey:h}=l,p=l.key.split(h),c=[];for(let d=0;d<p.length;d++)c.push(tt(p[d]));c.sort().join("")===$.sort().join("")&&ii(e,l,o,t)}}const z=function(e,t,i){$=[];const n=Oi(e);let o=[],r="all",s=document,a=0,l=!1,h=!0,p="+",c=!1,d=!1;if(i===void 0&&typeof t=="function"&&(i=t),Object.prototype.toString.call(t)==="[object Object]"){const u=t;u.scope&&(r=u.scope),u.element&&(s=u.element),u.keyup&&(l=u.keyup),u.keydown!==void 0&&(h=u.keydown),u.capture!==void 0&&(c=u.capture),typeof u.splitKey=="string"&&(p=u.splitKey),u.single===!0&&(d=!0)}for(typeof t=="string"&&(r=t),d&&Di(e,r);a<n.length;a++){const u=n[a].split(p);o=[],u.length>1&&(o=Hi(M,u));let g=u[u.length-1];g=g==="*"?"*":tt(g),g in C||(C[g]=[]),C[g].push({keyup:l,keydown:h,scope:r,mods:o,shortcut:n[a],method:i,key:n[a],splitKey:p,element:s})}if(typeof s<"u"&&typeof window<"u"){if(!R.has(s)){const u=(f=window.event)=>ni(f,s),g=(f=window.event)=>{ni(f,s),$o(f)};R.set(s,{keydownListener:u,keyupListenr:g,capture:c}),Qt(s,"keydown",u,c),Qt(s,"keyup",g,c)}if(!at){const u=()=>{$=[]};at={listener:u,capture:c},Qt(window,"focus",u,c)}}};function Co(e,t="all"){Object.keys(C).forEach(i=>{C[i].filter(n=>n.scope===t&&n.shortcut===e).forEach(n=>{n&&n.method&&n.method({},n)})})}function ke(e){const t=Object.values(C).flat();if(t.findIndex(({element:i})=>i===e)<0&&e){const{keydownListener:i,keyupListenr:n,capture:o}=R.get(e)||{};i&&n&&(ot(e,"keyup",n,o),ot(e,"keydown",i,o),R.delete(e))}if((t.length<=0||R.size<=0)&&(Array.from(R.keys()).forEach(i=>{const{keydownListener:n,keyupListenr:o,capture:r}=R.get(i)||{};n&&o&&(ot(i,"keyup",o,r),ot(i,"keydown",n,r),R.delete(i))}),R.clear(),Object.keys(C).forEach(i=>delete C[i]),at)){const{listener:i,capture:n}=at;ot(window,"focus",i,n),at=null}}const Gt={getPressedKeyString:bo,setScope:Mi,getScope:pt,deleteScope:Ao,getPressedKeyCodes:wo,getAllKeyCodes:xo,isPressed:yo,filter:ki,trigger:Co,unbind:Di,keyMap:ht,modifier:M,modifierMap:rt};for(const e in Gt){const t=e;Object.prototype.hasOwnProperty.call(Gt,t)&&(z[t]=Gt[t])}if(typeof window<"u"){const e=window.hotkeys;z.noConflict=t=>(t&&window.hotkeys===z&&(window.hotkeys=e),z),window.hotkeys=z}function Po(e){e.magnifierSize!==1&&e.tool.instance instanceof Ai&&(e.tool=e.previousEditingTool,e.text.active=!1,Y(e))}function De(e){return"createImageBitmap"in self?createImageBitmap(e):new Promise(t=>{const i=new Image;i.onload=()=>{URL.revokeObjectURL(i.src),t(i)},i.src=URL.createObjectURL(e)})}async function Be(e,{canvas:t,previewCanvas:i,context:n}){const o=await De(e);t&&i&&n&&(t.width=i.width=o.width,t.height=i.height=o.height,n.fillStyle="white",n.fillRect(0,0,o.width,o.height),n.drawImage(o,0,0))}function Eo(e){"launchQueue"in window&&window.launchQueue.setConsumer(async t=>{const[i]=t.files;if(i){const n=await i.getFile();e.document.title=n.name,e.document.handle=i,await Be(n,e)}})}const _o=3;class So{constructor(t){this.drawingContext=t,this.stack=[],this.stackPointer=-1}clear(){this.stack.length=0,this.stackPointer=-1}commit(){this.drawingContext.document.dirty=!0,this.stack.splice(this.stackPointer+1),this.stack.length===_o+1&&this.stack.shift();const{canvas:t,context:i}=this.drawingContext,n=t?.width??0,o=t?.height??0,r=i?.getImageData(0,0,n,o);if(o&&n&&r){const s=this.stack.push({height:o,width:n,imageData:r});this.stackPointer=s-1}w(this.drawingContext.element)}undo(){if(!this.canUndo())throw new Error("No actions to undo.");this.stackPointer--,this.restoreEntry()}redo(){if(!this.canRedo())throw new Error("No actions to redo.");this.stackPointer++,this.restoreEntry()}restoreEntry(){const{height:t,width:i,imageData:n}=this.stack[this.stackPointer],{canvas:o,previewCanvas:r,context:s}=this.drawingContext;o&&r&&s&&(o.height=r.height=t,o.width=r.width=i,s.putImageData(n,0,0)),w(this.drawingContext.element)}canUndo(){return this.stackPointer>0}canRedo(){return this.stackPointer>=0&&this.stackPointer<this.stack.length-1}}function Ho(e){return e=e.replace(/(Ctrl\+(\S+))/g,"$1,⌘+$2"),e=e.replace(/Shft/g,"shift"),e=e.replace(/PgUp/g,"pageup"),e=e.replace(/PgDn/g,"pagedown"),e}function zt(e,t,{document:i,element:n}){i.handle=e,i.title=t,w(n)}function Oo(e){e.addEventListener("dragover",t=>{t.preventDefault()}),e.addEventListener("drop",async t=>{t.preventDefault();const{drawingContext:i}=e,n=[...t.dataTransfer?.items??[]].filter(({kind:o})=>o==="file");for(const o of n){const r=await o.getAsFileSystemHandle();if(!r||!To(r))continue;const s=await r.getFile();await Be(s,i),zt(r,r.name,i);return}})}function To(e){return e.kind==="file"}class Bi{canExecute({selection:t}){return!!t}execute(t){if(t.selection&&t.context){t.context.fillStyle=t.colors.secondary;const{x:i,y:n,width:o,height:r}=t.selection;t.context.fillRect(i,n,o,r),t.selection=null}}}function Lt(e){return new Promise((t,i)=>{e.toBlob(n=>{n?t(n):i("Blob callback returned null!")})})}async function Ri(e,{x:t,y:i,width:n,height:o}){const r=e.getImageData(t,i,n,o),s=document.createElement("canvas");return s.width=n,s.height=o,s.getContext("2d")?.putImageData(r,0,0),Lt(s)}class zi{canExecute({selection:t}){return"write"in navigator.clipboard&&!!t}async execute({context:t,selection:i}){t&&i&&await navigator.clipboard.write([new ClipboardItem({"image/png":Ri(t,i)})])}}const Re=(()=>{if(typeof self>"u")return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch{return!1}return"showOpenFilePicker"in self})(),Vo=Re?Promise.resolve().then(function(){return Bo}):Promise.resolve().then(function(){return Uo});async function ze(...e){return(await Vo).default(...e)}Re?Promise.resolve().then(function(){return zo}):Promise.resolve().then(function(){return No});const Mo=Re?Promise.resolve().then(function(){return Fo}):Promise.resolve().then(function(){return Wo});async function Ft(...e){return(await Mo).default(...e)}const ko=async e=>{const t=await e.getFile();return t.handle=e,t};var Do=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const t=[];e.forEach((o,r)=>{t[r]={description:o.description||"Files",accept:{}},o.mimeTypes?o.mimeTypes.map(s=>{t[r].accept[s]=o.extensions||[]}):t[r].accept["*/*"]=o.extensions||[]});const i=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),n=await Promise.all(i.map(ko));return e[0].multiple?n:n[0]},Bo={__proto__:null,default:Do};function At(e){function t(i){if(Object(i)!==i)return Promise.reject(new TypeError(i+" is not an object."));var n=i.done;return Promise.resolve(i.value).then(function(o){return{value:o,done:n}})}return At=function(i){this.s=i,this.n=i.next},At.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(i){var n=this.s.return;return n===void 0?Promise.resolve({value:i,done:!0}):t(n.apply(this.s,arguments))},throw:function(i){var n=this.s.return;return n===void 0?Promise.reject(i):t(n.apply(this.s,arguments))}},new At(e)}const Li=async(e,t,i=e.name,n)=>{const o=[],r=[];var s,a=!1,l=!1;try{for(var h,p=(function(c){var d,u,g,f=2;for(typeof Symbol<"u"&&(u=Symbol.asyncIterator,g=Symbol.iterator);f--;){if(u&&(d=c[u])!=null)return d.call(c);if(g&&(d=c[g])!=null)return new At(d.call(c));u="@@asyncIterator",g="@@iterator"}throw new TypeError("Object is not async iterable")})(e.values());a=!(h=await p.next()).done;a=!1){const c=h.value,d=`${i}/${c.name}`;c.kind==="file"?r.push(c.getFile().then(u=>(u.directoryHandle=e,u.handle=c,Object.defineProperty(u,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>d})))):c.kind!=="directory"||!t||n&&n(c)||o.push(Li(c,t,d,n))}}catch(c){l=!0,s=c}finally{try{a&&p.return!=null&&await p.return()}finally{if(l)throw s}}return[...(await Promise.all(o)).flat(),...await Promise.all(r)]};var Ro=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await t.values()).next()).done?[t]:Li(t,e.recursive,void 0,e.skipDirectory)},zo={__proto__:null,default:Ro},Lo=async(e,t=[{}],i=null,n=!1,o=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const r=[];let s=null;if(e instanceof Blob&&e.type?s=e.type:e.headers&&e.headers.get("content-type")&&(s=e.headers.get("content-type")),t.forEach((h,p)=>{r[p]={description:h.description||"Files",accept:{}},h.mimeTypes?(p===0&&s&&h.mimeTypes.push(s),h.mimeTypes.map(c=>{r[p].accept[c]=h.extensions||[]})):s?r[p].accept[s]=h.extensions||[]:r[p].accept["*/*"]=h.extensions||[]}),i)try{await i.getFile()}catch(h){if(i=null,n)throw h}const a=i||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:r,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!i&&o&&o(a);const l=await a.createWritable();return"stream"in e?(await e.stream().pipeTo(l),a):"body"in e?(await e.body.pipeTo(l),a):(await l.write(await e),await l.close(),a)},Fo={__proto__:null,default:Lo},Io=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,i)=>{const n=document.createElement("input");n.type="file";const o=[...e.map(r=>r.mimeTypes||[]),...e.map(r=>r.extensions||[])].join();n.multiple=e[0].multiple||!1,n.accept=o||"",n.style.display="none",document.body.append(n),n.addEventListener("cancel",()=>{n.remove(),i(new DOMException("The user aborted a request.","AbortError"))}),n.addEventListener("change",()=>{n.remove(),t(n.multiple?Array.from(n.files):n.files[0])}),"showPicker"in HTMLInputElement.prototype?n.showPicker():n.click()})),Uo={__proto__:null,default:Io},jo=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,i)=>{const n=document.createElement("input");n.type="file",n.webkitdirectory=!0,n.style.display="none",document.body.append(n),n.addEventListener("cancel",()=>{n.remove(),i(new DOMException("The user aborted a request.","AbortError"))}),n.addEventListener("change",()=>{n.remove();let o=Array.from(n.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(o=o.filter(r=>r.webkitRelativePath.split("/").every(s=>!e[0].skipDirectory({name:s,kind:"directory"})))):o=o.filter(r=>r.webkitRelativePath.split("/").length===2),t(o)}),"showPicker"in HTMLInputElement.prototype?n.showPicker():n.click()})),No={__proto__:null,default:jo},Ko=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);const i=document.createElement("a");let n=e;"body"in e&&(n=await(async function(s,a){const l=s.getReader(),h=new ReadableStream({start:d=>(async function u(){return l.read().then(({done:g,value:f})=>{if(!g)return d.enqueue(f),u();d.close()})})()}),p=new Response(h),c=await p.blob();return l.releaseLock(),new Blob([c],{type:a})})(e.body,e.headers.get("content-type"))),i.download=t.fileName||"Untitled",i.href=URL.createObjectURL(await n);const o=()=>{typeof r=="function"&&r()},r=t.legacySetup&&t.legacySetup(o,()=>r(),i);return i.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(i.href),3e4),o()}),i.click(),null},Wo={__proto__:null,default:Ko};class qo{canExecute({selection:t}){return!!t}async execute({context:t,selection:i}){if(t&&i){const n=await Ri(t,i);await Ft(n)}}}class Qo{constructor(){this.copy=new zi,this.clearSelection=new Bi}canExecute(t){return this.copy.canExecute(t)&&this.clearSelection.canExecute(t)}async execute(t){await this.copy.execute(t),this.clearSelection.execute(t)}}function It({canvas:e,context:t,colors:i,history:n},o=!0){e&&t&&n&&(t.fillStyle=i.secondary,t.fillRect(0,0,e.width,e.height),o&&n.commit())}async function Fi(e,t){const{canvas:i,context:n,previewCanvas:o,history:r}=t;if(!(!i||!n||!o)){if(e.width>i.width||e.height>i.height){const s=await mt(`The image in the clipboard is larger than the bitmap.
Would you like the bitmap enlarged?`,"question","Paint","yes-no-cancel");if(s==="cancel")return;if(s==="yes"){const a=Math.max(e.width,i.width),l=Math.max(e.height,i.height),h=n.getImageData(0,0,i.width,i.height);i.width=o.width=a,i.height=o.height=l,It(t,!1),n.putImageData(h,0,0)}}n.drawImage(e,0,0),r?.commit()}}class Go{canExecute(){return!!navigator.clipboard?.read}async execute(t){const i=await navigator.clipboard.read();for(const n of i)try{for(const o of n.types)if(o.match(/^image\//)){const r=await n.getType(o),s=await De(r);await Fi(s,t)}}catch(o){console.error("Clipboard API paste error",o)}}}class Xo{async execute(t){const i=await ze(),n=await De(i);await Fi(n,t)}}class Zo{canExecute(t){return t?.history?.canRedo()??!1}execute(t){t?.history?.redo()}}class Yo{execute(t){if(t.canvas){const{width:i,height:n}=t.canvas;t.selection={x:0,y:0,width:i,height:n},w(t.element)}}}class Jo{canExecute(t){return t?.history?.canUndo()??!1}execute(t){t?.history?.undo()}}const tr={caption:"Edit",mnemonic:"E",helpText:"",entries:[{caption:"Undo",mnemonic:"U",shortcut:"Ctrl+Z",helpText:"Undoes the last action.",instance:new Jo},{caption:"Repeat",mnemonic:"R",shortcut:"F4",helpText:"Redoes the previously undone action.",instance:new Zo},{separator:!0},{caption:"Cut",mnemonic:"t",shortcut:"Ctrl+X",helpText:"Cuts the selection and puts it on the Clipboard.",instance:new Qo},{caption:"Copy",mnemonic:"C",shortcut:"Ctrl+C",helpText:"Copies the selection and puts it on the Clipboard.",instance:new zi},{caption:"Paste",mnemonic:"P",shortcut:"Ctrl+V",helpText:"Inserts the contents of the Clipboard.",instance:new Go},{caption:"Clear Selection",mnemonic:"l",shortcut:"Del",helpText:"Deletes the selection.",instance:new Bi},{caption:"Select All",mnemonic:"A",shortcut:"Ctrl+L",helpText:"Selects everything.",instance:new Yo},{separator:!0},{caption:"Copy To…",mnemonic:"o",helpText:"Copies the selection to a file.",instance:new qo},{caption:"Paste From…",mnemonic:"F",helpText:"Pastes a file into the selection.",instance:new Xo}]};class Ii{async execute(t){if(!t.canvas)return;const i=await Lt(t.canvas),n=await Ft(i,{fileName:t.document.title,extensions:[".png"],description:"PNG files"});n&&zt(n,n.name,t)}}class Ui{async execute(t){if(t.canvas&&t.document.handle){const i=await Lt(t.canvas);await Ft(i,void 0,t.document.handle)}else await new Ii().execute(t)}}async function ji(e){if(!e.document.dirty)return;const t=await mt(`Save changes to ${e.document.title}?`,"warning","Paint","yes-no-cancel");if(t==="cancel")throw Error("User cancelled operation.");t==="yes"&&await new Ui().execute(e)}class er{async execute(t){try{await ji(t),t.document.dirty=!1,window.close()}catch{}}}class Ni{canExecute({selection:t}){return!t}execute(t){It(t)}}class ir{async execute(t){try{await ji(t),zt(void 0,"untitled",t),t.palette=[...Si],t.colors={..._i},t.history?.clear(),new Ni().execute(t),t.document.dirty=!1}catch{}}}class nr{async execute(t){const i=await ze({extensions:[".png"],description:"PNG Files"});zt(i.handle,i.name,t),await Be(i,t)}}class Xt{execute(){window.print()}}class or{constructor(){this.fakePng=this.getFileFromPngBlob(new Blob,"fake.png")}canExecute(){return!!navigator.canShare&&navigator.canShare({files:[this.fakePng]})}async execute({canvas:t,document:i}){if(t){const n=await Lt(t);await navigator.share({files:[this.getFileFromPngBlob(n,`${i.title}.png`)],title:i.title})}}getFileFromPngBlob(t,i){return new File([t],i,{type:"image/png"})}}const rr={caption:"File",mnemonic:"F",helpText:"",entries:[{caption:"New",mnemonic:"N",shortcut:"Ctrl+N",helpText:"Creates a new document.",instance:new ir},{caption:"Open…",mnemonic:"O",shortcut:"Ctrl+O",helpText:"Opens an existing document.",instance:new nr},{caption:"Save",mnemonic:"S",shortcut:"Ctrl+S",helpText:"Saves the active document.",instance:new Ui},{caption:"Save As…",mnemonic:"A",helpText:"Saves the active document with a new name.",instance:new Ii},{separator:!0},{caption:"Print Preview",mnemonic:"v",helpText:"Displays full pages.",instance:new Xt},{caption:"Page Setup…",mnemonic:"t",helpText:"Changes the page layout.",instance:new Xt},{caption:"Print…",mnemonic:"P",shortcut:"Ctrl+P",helpText:"Prints the active document and sets printing options.",instance:new Xt},{separator:!0},{caption:"Send…",mnemonic:"e",helpText:"Sends a picture by using mail or fax.",instance:new or},{separator:!0},{caption:"Set As Wallpaper (Tiled)",mnemonic:"W",helpText:"Tiles this bitmap as the desktop wallpaper.",instance:null},{caption:"Set As Wallpaper (Centered)",mnemonic:"l",helpText:"Centers this bitmap as the desktop wallpaper.",instance:null},{separator:!0},{caption:"Recent File",instance:null,helpText:"Opens this document."},{separator:!0},{caption:"Exit",mnemonic:"x",shortcut:"Alt+F4",helpText:"Quits Paint.",instance:new er}]};class sr{execute(){ft("paint-dialog-about")}}const ar={caption:"Help",mnemonic:"H",helpText:"",entries:[{caption:"Help Topics",mnemonic:"H",helpText:"Displays Help for the current task or command."},{separator:!0},{caption:"About Paint",mnemonic:"A",helpText:"Displays program information, version number, and copyright.",instance:new sr}]};class lr{async execute(t){const{previewCanvas:i,context:n}=t;if(!i||!n)return;const{canvas:o}=n,r=await ft("paint-dialog-attributes",{width:o.width.toString(),height:o.height.toString(),unit:"pels",color:"colors"});if(!r)return;const s=parseInt(r.width,10),a=parseInt(r.height,10);if(!this.isValidValue(s)||!this.isValidValue(a)){await mt("Bitmaps must be greater than one pixel on a side.","warning","Paint");return}const l=n.getImageData(0,0,o.width,o.height);o.width=i.width=s,o.height=i.height=a,It(t,!1),n.putImageData(l,0,0),t.history?.commit()}isValidValue(t){return isFinite(t)&&t>0}}class cr{execute({canvas:t,context:i,selection:n,history:o}){if(i&&t){const r=i.globalCompositeOperation;i.globalCompositeOperation="difference",i.fillStyle="white",n?i.fillRect(n.x,n.y,n.width,n.height):i.fillRect(0,0,t.width,t.height),i.globalCompositeOperation=r,o?.commit()}}}class V{async execute({context:t,canvas:i,previewCanvas:n,history:o}){const r=await ft("paint-dialog-flip-and-rotate");!r||!i||!t||!n||!o||V.flipOrRotate(r,i,n,t,o)}static flipOrRotate(t,i,n,o,r){const s=V.cloneCanvas(i);t.action==="flip"?V.flip(t.param,i,o):t.action==="rotate"&&V.rotate(t.param,i,n,o),o.drawImage(s,0,0),o.setTransform(1,0,0,1,0,0),r.commit()}static cloneCanvas(t){const i=document.createElement("canvas");return i.width=t.width,i.height=t.height,i.getContext("2d")?.drawImage(t,0,0),i}static flip(t,i,n){t==="horizontal"?(n.translate(i.width,0),n.scale(-1,1)):t==="vertical"&&(n.translate(0,i.height),n.scale(1,-1))}static rotate(t,i,n,o){t===90?(V.rotateCanvas(i,n),o.translate(i.width,0),o.rotate(V.getRadianAngle(90))):t===180?(o.translate(i.width,i.height),o.rotate(V.getRadianAngle(180))):t===270&&(V.rotateCanvas(i,n),o.translate(0,i.height),o.rotate(V.getRadianAngle(270)))}static rotateCanvas(t,i){const{height:n,width:o}=t;t.height=i.height=o,t.width=i.width=n}static getRadianAngle(t){return t*Math.PI/180}}const hr={caption:"Image",mnemonic:"I",helpText:"",entries:[{caption:"Flip/Rotate…",mnemonic:"F",helpText:"Flips or rotates the picture or a selection.",instance:new V},{caption:"Stretch/Skew…",mnemonic:"S",shortcut:"Ctrl+W",helpText:"Stretches or skews the picture or a selection."},{caption:"Invert Colors",mnemonic:"I",shortcut:"Ctrl+I",helpText:"Inverts the colors of the picture or a selection.",instance:new cr},{caption:"Attributes…",mnemonic:"A",shortcut:"Ctrl+E",helpText:"Changes the attributes of the picture.",instance:new lr},{caption:"Clear Image",mnemonic:"C",shortcut:"Ctrl+Shft+N",helpText:"Clears the picture or selection.",instance:new Ni}]};class pr{async execute({palette:t}){const i=t.length,n=4+i*4,o=24+i*4,r=new ArrayBuffer(o),s=new Uint8Array(r),a=new DataView(r),l=new TextEncoder;s.set(l.encode("RIFF")),a.setUint32(4,o-8,!0),s.set(l.encode("PAL "),8),s.set(l.encode("data"),12),a.setUint32(16,n,!0),a.setUint16(20,768,!0),a.setUint16(22,i,!0);const p=document.createElement("canvas").getContext("2d");for(let d=0;d<i;d++){p.fillStyle=t[d],p.fillRect(0,0,1,1);const[u,g,f]=p.getImageData(0,0,1,1).data,A=24+d*4;a.setUint8(A,u),a.setUint8(A+1,g),a.setUint8(A+2,f),a.setUint8(A+3,0)}const c=new Blob([r],{type:"application/octet-stream"});await Ft(c,{fileName:"untitled.pal",extensions:[".pal"],description:"Palette"})}}class dr{async execute(t){try{const i=await ze({extensions:[".pal"],description:"Palette"});await this.updateContextFromFile(i,t)}catch{}}async updateContextFromFile(t,i){try{const n=await t.arrayBuffer();this.readPalette(n).forEach((o,r)=>i.palette[r]=o),w(i.element)}catch{await mt(`${t.name}
Paint cannot open this file.
This file is not in the correct format.`,"warning","Paint")}}readPalette(t){const i=new DataView(t),n=new TextDecoder;if(n.decode(t.slice(0,4))!=="RIFF")throw new Error("Non-RIFF palettes are not supported.");if(n.decode(t.slice(8,12))!=="PAL ")throw new Error("Only PAL form types are supported.");if(n.decode(t.slice(12,16))!=="data")throw new Error("Expected a data chunk.");const a=[],l=i.getUint16(22,!0);for(let h=0;h<l;h++){const p=24+h*4,c=i.getUint8(p),d=i.getUint8(p+1),u=i.getUint8(p+2);a.push(`rgb(${c} ${d} ${u})`)}return a.slice(0,26)}}class ur{isChecked({drawOpaque:t}){return t}execute(t){t.drawOpaque=!t.drawOpaque,w(t.element)}}class gr{execute(t){t.element?.dispatchEvent(new CustomEvent("edit-color"))}}const vr={caption:"Options",mnemonic:"O",helpText:"",entries:[{caption:"Edit Colors…",mnemonic:"E",helpText:"Creates a new color.",instance:new gr},{caption:"Get Colors…",mnemonic:"G",helpText:"Uses a previously saved palette of colors.",instance:new dr},{caption:"Save Colors…",mnemonic:"S",helpText:"Saves the current palette of colors to a file.",instance:new pr},{caption:"Draw Opaque",mnemonic:"D",helpText:"Makes the current selection either opaque or transparent.",instance:new ur}]};class fr{async execute(t){const i=await ft("paint-dialog-custom-zoom",{currentMagnifierSize:t.magnifierSize});i?.magnifierSize&&(t.magnifierSize=i.magnifierSize,w(t.element))}}class mr{execute(t){t.magnifierSize=4,w(t.element)}}class wr{execute(t){t.magnifierSize=1,w(t.element)}}class br{isChecked(t){return t.text.showToolbar??!1}canExecute(t){return t.text.active}execute(t){t.text.showToolbar=!t.text.showToolbar,Y(t),w(t.element)}}class xr{async execute({canvas:t}){t&&await t.requestFullscreen()}}class yr{isChecked({view:{statusBar:t}}){return t}execute(t){t.view.statusBar=!t.view.statusBar,w(t.element)}}class Ar{isChecked({view:{toolBox:t}}){return t}execute(t){t.view.toolBox=!t.view.toolBox,w(t.element)}}class $r{isChecked({view:{colorBox:t}}){return t}execute(t){t.view.colorBox=!t.view.colorBox,w(t.element)}}class Cr{canExecute(t){return t.magnifierSize>=wi}isChecked(t){return this.canExecute(t)&&t.showGrid==!0}execute(t){t.showGrid=!t.showGrid,w(t.element)}}const Pr={caption:"View",mnemonic:"V",helpText:"",entries:[{caption:"Tool Box",shortcut:"Ctrl+T",mnemonic:"T",helpText:"Shows or hides the tool box.",instance:new Ar},{caption:"Color Box",shortcut:"Ctrl+A",mnemonic:"C",helpText:"Shows or hides the color box.",instance:new $r},{caption:"Status Bar",mnemonic:"S",helpText:"Shows or hides the status bar.",instance:new yr},{separator:!0},{caption:"Zoom",mnemonic:"Z",helpText:"",entries:[{caption:"Normal Size",mnemonic:"N",shortcut:"Ctrl+PgUp",helpText:"Zooms the picture to 100%.",instance:new wr},{caption:"Large Size",mnemonic:"L",shortcut:"Ctrl+PgDn",helpText:"Zooms the picture to 400%.",instance:new mr},{caption:"Custom…",mnemonic:"u",helpText:"Zooms the picture.",instance:new fr},{separator:!0},{caption:"Show Grid",mnemonic:"G",shortcut:"Ctrl+G",helpText:"Shows or hides the grid.",instance:new Cr},{caption:"Show Thumbnail",mnemonic:"h",helpText:"Shows or hides the thumbnail view of the picture."}]},{caption:"View Bitmap",mnemonic:"V",shortcut:"Ctrl+F",helpText:"Displays the entire picture.",instance:new xr},{caption:"Text Toolbar",mnemonic:"e",helpText:"Shows or hides the text toolbar.",instance:new br}]},oi=[rr,tr,Pr,hr,vr,ar];var Er=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,bt=(e,t,i,n)=>{for(var o=n>1?void 0:n?_r(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Er(t,i,o),o};const Zt="For Help, click Help Topics on the Help Menu.";let Z=class extends b{constructor(){super(),this.areaText="",this.coordinateText="",this.helpText=Zt,this.drawingContext=S,this.previousTitle="",this.areaText="",this.coordinateText="",this.helpText=Zt,this.drawingContext=S,this.drawingContext.history=new So(this.drawingContext),this.addEventListener("set-help-text",(e=>{this.helpText=e.detail??Zt})),this.addEventListener("coordinate",(e=>{this.coordinateText=e.detail?`${e.detail.x},${e.detail.y}`:""})),this.addEventListener("area",(e=>{this.areaText=e.detail?`${e.detail.width}x${e.detail.height}`:""})),this.addEventListener("drawing-context-changed",(e=>{const t=e.detail;Po(t),this.drawingContext=t})),this.addEventListener("invoke-action",(e=>{e.detail(this.drawingContext)})),this.addEventListener("canvas-ready",()=>Eo(this.drawingContext)),this.beforeUnloadListener=this.onBeforeUnload.bind(this),window.addEventListener("beforeunload",this.beforeUnloadListener),Oo(this),this.registerHotkeys(oi)}static get styles(){return x`
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
    `}registerHotkeys(e){e.filter(t=>!("separator"in t&&t.separator)).forEach(t=>{"entries"in t&&Array.isArray(t.entries)&&this.registerHotkeys(t.entries),"shortcut"in t&&typeof t.shortcut=="string"&&z(Ho(t.shortcut),()=>(this.canActionExecute(t,this.drawingContext)&&this.dispatchEvent(new CustomEvent("invoke-action",{detail:t.instance?.execute.bind(t.instance),bubbles:!0,composed:!0})),!1))})}canActionExecute(e,t){return e.instance?e.instance.canExecute?e.instance.canExecute(t):!0:!1}render(){return this.dispatchTitleChangeEvent(),v`
      <paint-menu-bar
        .entries="${oi}"
        .drawingContext="${this.drawingContext}"
      ></paint-menu-bar>
      <div>
        ${this.drawingContext.view.toolBox?v` <paint-tool-bar>
              <paint-ruler></paint-ruler>
              <paint-tool-box
                .drawingContext="${this.drawingContext}"
              ></paint-tool-box>
              <paint-ruler></paint-ruler>
            </paint-tool-bar>`:""}
        <paint-canvas .drawingContext="${this.drawingContext}"></paint-canvas>
      </div>
      ${this.drawingContext.view.colorBox?v` <paint-tool-bar class="color-box">
            <paint-color-box .drawingContext="${this.drawingContext}">
            </paint-color-box>
            <paint-ruler></paint-ruler>
          </paint-tool-bar>`:""}
      ${this.drawingContext.view.statusBar?v` <paint-status-bar
            helpText="${this.helpText}"
            coordinateText="${this.coordinateText}"
            areaText="${this.areaText}"
          ></paint-status-bar>`:""}
      ${this.drawingContext.view.textToolbar?v` <paint-dialog-text-toolbar
            .drawingContext="${this.drawingContext}"
          ></paint-dialog-text-toolbar>`:""}
    `}dispatchTitleChangeEvent(){this.previousTitle!==this.drawingContext.document.title&&(this.previousTitle=this.drawingContext.document.title,this.dispatchEvent(new CustomEvent("titlechange",{detail:{title:this.drawingContext.document.title},composed:!0,bubbles:!0})))}onBeforeUnload(e){this.drawingContext.document.dirty&&(e.preventDefault(),e.returnValue="")}disconnectedCallback(){super.disconnectedCallback(),this.beforeUnloadListener&&window.removeEventListener("beforeunload",this.beforeUnloadListener)}};bt([T()],Z.prototype,"areaText",2);bt([T()],Z.prototype,"coordinateText",2);bt([T()],Z.prototype,"helpText",2);bt([T()],Z.prototype,"drawingContext",2);Z=bt([y("paint-app")],Z);var Sr=Object.getOwnPropertyDescriptor,Hr=(e,t,i,n)=>{for(var o=n>1?void 0:n?Sr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let ri=class extends b{static get styles(){return x`
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
    `}constructor(){super(),this.addEventListener("keydown",e=>{["Space","Enter"].includes(e.code)&&this.dispatchEvent(new MouseEvent("click"))})}render(){return v` <div class="inline-border">
      <div class="focus-border">
        <slot></slot>
      </div>
    </div>`}};ri=Hr([y("paint-button")],ri);var Or=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,et=(e,t,i,n)=>{for(var o=n>1?void 0:n?Tr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Or(t,i,o),o};let K=class extends b{constructor(){super(...arguments),this.drawingContext=S,this.inCanvas=!1,this.canvasWidth=screen.width,this.canvasHeight=screen.height,this.pointerDown=!1,this.previewColor="primary",this.lastPointerEventTime=0}static get styles(){return x`
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
    `}render(){return this.tool=this.drawingContext.tool.instance,v`
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
            ${this.drawingContext.showGrid&&this.drawingContext.magnifierSize>=wi?v`<paint-grid
                  style="width: ${this.canvasWidth*this.drawingContext.magnifierSize}px; height: ${this.canvasHeight*this.drawingContext.magnifierSize}px; --grid-size: ${this.drawingContext.magnifierSize}px"
                ></paint-grid>`:""}
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
    `}firstUpdated(){if(!this.shadowRoot)throw new Error("Shadow root not present.");const e=this.shadowRoot.querySelector("canvas.main"),t=this.shadowRoot.querySelector("canvas.preview"),i=e.getContext("2d",{desynchronized:!0,willReadFrequently:!0}),n=t.getContext("2d",{desynchronized:!0});if(!i||!n)throw new Error("Canvas context not present.");i.imageSmoothingEnabled=!1,this.drawingContext.canvas=e,this.drawingContext.context=i,this.drawingContext.previewCanvas=t,this.drawingContext.previewContext=n,this.drawingContext.element=this,It(this.drawingContext),this.drawingContext.document.dirty=!1,w(this),document.addEventListener("pointermove",o=>this.throttledPointerMove(o)),document.addEventListener("pointerup",o=>this.onPointerUp(o)),this.dispatchEvent(new CustomEvent("canvas-ready",{bubbles:!0,composed:!0}))}throttledPointerMove(e){const t=Date.now();t-this.lastPointerEventTime<8||(this.lastPointerEventTime=t,this.onPointerMove(e))}getToolEventArgs(e,t){const i=this.pointerDown?this.previewColor:"primary",n=i==="primary"?"secondary":"primary",o={stroke:{key:i,value:this.drawingContext.colors[i]},fill:{key:n,value:this.drawingContext.colors[n]}};return[e,t,this.drawingContext,o]}onPointerDown(e){if(this.pointerDown=!0,this.previewColor=e.button!==2?"primary":"secondary",this.drawingContext.text.active=!1,Y(this.drawingContext),w(this),this.tool?.onPointerDown){const{x:t,y:i}=this.getCoordinates(e);this.tool.onPointerDown(...this.getToolEventArgs(t,i))}e.preventDefault()}onPointerMove(e){const{x:t,y:i}=this.getCoordinates(e);this.inCanvas&&this.drawingContext.canvas&&this.dispatchEvent(new CustomEvent("coordinate",{detail:{x:Math.max(0,Math.min(this.drawingContext.canvas.width,t)),y:Math.max(0,Math.min(this.drawingContext.canvas.height,i))},bubbles:!0,composed:!0})),this.tool?.onPointerHover&&this.tool.onPointerHover(...this.getToolEventArgs(t,i)),this.pointerDown&&this.tool?.onPointerMove&&this.tool.onPointerMove(...this.getToolEventArgs(t,i))}onPointerUp(e){if(!this.pointerDown)return;const{x:t,y:i}=this.getCoordinates(e);this.tool?.onPointerUp&&this.tool.onPointerUp(...this.getToolEventArgs(t,i)),this.drawingContext.history?.commit(),this.pointerDown=!1,this.tool?.onPointerHover&&this.tool.onPointerHover(...this.getToolEventArgs(t,i))}onPointerEnter(){this.inCanvas=!0;const{canvas:e,tool:t}=this.drawingContext;e&&(e.style.cursor=t.cursor??"default")}onPointerLeave(){this.inCanvas=!1,this.dispatchEvent(new CustomEvent("coordinate",{bubbles:!0,composed:!0}))}getCoordinates({clientX:e,clientY:t}){if(!this.drawingContext.canvas)throw new Error("Canvas not initialized yet.");const{left:i,top:n}=this.drawingContext.canvas.getBoundingClientRect(),o=Math.floor((e-i)/this.drawingContext.magnifierSize),r=Math.floor((t-n)/this.drawingContext.magnifierSize);return{x:o,y:r}}};et([m()],K.prototype,"drawingContext",2);et([m({attribute:!1})],K.prototype,"inCanvas",2);et([m({attribute:!1})],K.prototype,"tool",2);et([m({attribute:!1})],K.prototype,"canvasWidth",2);et([m({attribute:!1})],K.prototype,"canvasHeight",2);K=et([y("paint-canvas")],K);var Vr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Ki=(e,t,i,n)=>{for(var o=n>1?void 0:n?Mr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Vr(t,i,o),o};let pe=class extends b{constructor(){super(...arguments),this.drawingContext=S}static get styles(){return x`
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
    `}render(){return v`
      <paint-color-switcher
        primaryColor="${this.drawingContext.colors.primary}"
        secondaryColor="${this.drawingContext.colors.secondary}"
        @pointerdown="${e=>this.swapColors(e)}"
      >
      </paint-color-switcher>
      ${this.drawingContext.palette.map((e,t)=>v` <paint-color-picker
            .index="${t}"
            .drawingContext="${this.drawingContext}"
          >
          </paint-color-picker>`)}
    `}swapColors({pointerType:e}){if(["pen","touch"].includes(e)){const{primary:t,secondary:i}=this.drawingContext.colors;this.drawingContext.colors.primary=i,this.drawingContext.colors.secondary=t,w(this)}}};Ki([m()],pe.prototype,"drawingContext",2);pe=Ki([y("paint-color-box")],pe);var kr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Ut=(e,t,i,n)=>{for(var o=n>1?void 0:n?Dr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&kr(t,i,o),o};let dt=class extends b{constructor(){super(...arguments),this.drawingContext=S,this.index=0,this.onEditColor=()=>{const e=this.drawingContext.selectedPaletteIndex;this.index===e&&this.openColorPicker()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.dispatchColorEvent("primary")}),this.addEventListener("contextmenu",e=>{this.dispatchColorEvent("secondary"),e.preventDefault()}),this.addEventListener("dblclick",()=>{this.openColorPicker()}),this.drawingContext.element?.addEventListener("edit-color",this.onEditColor)}disconnectedCallback(){super.disconnectedCallback(),this.drawingContext.element?.removeEventListener("edit-color",this.onEditColor)}get color(){return this.drawingContext.palette[this.index]}static get styles(){return x`
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
    `}openColorPicker(){try{this.colorInput.showPicker()}catch{this.colorInput.focus(),this.colorInput.click()}}onChange(e){const t=e.target;this.drawingContext.palette[this.index]=t.value,this.drawingContext.colors.primary=t.value,w(this)}dispatchColorEvent(e){this.drawingContext.selectedPaletteIndex=this.index,this.drawingContext.colors[e]=this.color,w(this)}render(){return v`<div
        class="frame"
        style="background-color: ${this.color};"
      ></div>
      <input type="color" .value="${this.color}" @change="${this.onChange}" />`}};Ut([m()],dt.prototype,"drawingContext",2);Ut([m({type:Number})],dt.prototype,"index",2);Ut([Se("input")],dt.prototype,"colorInput",2);dt=Ut([y("paint-color-picker")],dt);var Br=Object.defineProperty,Rr=Object.getOwnPropertyDescriptor,Le=(e,t,i,n)=>{for(var o=n>1?void 0:n?Rr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Br(t,i,o),o};let Vt=class extends b{constructor(){super(...arguments),this.primaryColor="",this.secondaryColor=""}static get styles(){return x`
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
    `}render(){return v`
      <div class="frame">
        <div class="color primary">
          <div style="background-color: ${this.primaryColor}"></div>
        </div>
        <div class="color secondary">
          <div style="background-color: ${this.secondaryColor}"></div>
        </div>
      </div>
    `}};Le([m()],Vt.prototype,"primaryColor",2);Le([m()],Vt.prototype,"secondaryColor",2);Vt=Le([y("paint-color-switcher")],Vt);var zr=Object.getOwnPropertyDescriptor,Lr=(e,t,i,n)=>{for(var o=n>1?void 0:n?zr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let si=class extends b{static get styles(){return x`
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
    `}render(){return v``}};si=Lr([y("paint-grid")],si);var Fr=Object.getOwnPropertyDescriptor,Ir=(e,t,i,n)=>{for(var o=n>1?void 0:n?Fr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let ai=class extends b{static get styles(){return x`
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
    `}render(){return v``}};ai=Ir([y("paint-handle")],ai);var Ur=Object.getOwnPropertyDescriptor,jr=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ur(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let li=class extends b{static get styles(){return x`
      :host {
        box-sizing: border-box;
        border: 1px solid var(--button-dark);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);

        display: flex;
        align-items: flex-end;
      }
    `}render(){return v`<slot></slot>`}};li=jr([y("paint-inset-container")],li);var Nr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Fe=(e,t,i,n)=>{for(var o=n>1?void 0:n?Kr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Nr(t,i,o),o};let Mt=class extends b{constructor(){super(),this.entries=[],this.drawingContext=S,this.addEventListener("click",e=>e.stopPropagation())}static get styles(){return x`
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
    `}render(){return v` <div class="frame">
      ${this.entries.map(e=>this.getMenuEntry(e))}
    </div>`}getMenuEntry(e){return"separator"in e?v` <paint-ruler></paint-ruler>`:v`
      <div
        class="menu-entry ${this.isDisabled(e)?"disabled":""}"
        @click="${()=>this.execute(e)}"
        @pointerenter="${()=>this.setHelpText(e.helpText)}"
        @pointerleave="${()=>this.setHelpText()}"
      >
        <span class="selection">
          ${this.isChecked(e)?v` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                <path
                  class="shadow"
                  fill="transparent"
                  d="M4,7v2h1V8h1V7h1V6h1V5h1V2H8L4,7z"
                />
                <path
                  d="M1,3v3h1v1h1v1h1V7h1V6h1V5h1V4h1V1H7v1H6v1H5v1H4v1H3V4H2V3H1z"
                />
              </svg>`:""}
        </span>
        <span>${O(e.caption,e.mnemonic)}</span>
        <span class="${e.shortcut?"shortcut":""}"
          >${e.shortcut}</span
        >
        <span class="opener">
          ${e.entries?v` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 7">
                  <path d="M0,0v7h1V6h1V5h1V4h1V3H3V2H2V1H1V0H0z" />
                </svg>
                <paint-menu
                  class="submenu"
                  .entries="${e.entries}"
                  .drawingContext="${this.drawingContext}"
                ></paint-menu>`:""}
        </span>
      </div>
    `}isChecked(e){return!!(e.instance?.isChecked&&e.instance.isChecked(this.drawingContext))}isDisabled({instance:e,entries:t}){return!(t||e&&(!e.canExecute||e.canExecute(this.drawingContext)))}execute(e){!this.isDisabled(e)&&e.instance?.execute&&(this.dispatchEvent(new CustomEvent("invoke-action",{detail:e.instance.execute.bind(e.instance),bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("action-executed",{bubbles:!0,composed:!0})))}setHelpText(e){this.dispatchEvent(new CustomEvent("set-help-text",{detail:e,bubbles:!0,composed:!0}))}};Fe([m()],Mt.prototype,"entries",2);Fe([m()],Mt.prototype,"drawingContext",2);Mt=Fe([y("paint-menu")],Mt);var Wr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,jt=(e,t,i,n)=>{for(var o=n>1?void 0:n?qr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Wr(t,i,o),o};let ut=class extends b{constructor(){super(),this.entries=[],this.drawingContext=S,this.activeMenu=null,document.addEventListener("click",()=>this.activeMenu=null),this.addEventListener("action-executed",()=>this.activeMenu=null)}static get styles(){return x`
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
    `}render(){return v`
      <ul @click="${e=>e.stopPropagation()}">
        ${this.entries.map(e=>v`
            <li
              @click="${()=>this.onClick(e)}"
              @pointerenter="${()=>this.onPointerEnter(e)}"
              @pointerleave="${()=>this.onPointerLeave()}"
              class="${this.activeMenu===e?"active":""}"
            >
              ${O(e.caption,e.mnemonic)}
              <paint-menu
                .entries="${e.entries}"
                .drawingContext="${this.drawingContext}"
              >
              </paint-menu>
            </li>
          `)}
      </ul>
    `}onClick(e){this.activeMenu=this.activeMenu===e?null:e}onPointerEnter(e){this.dispatchEvent(new CustomEvent("set-help-text",{detail:e.helpText,bubbles:!0,composed:!0})),this.activeMenu&&(this.activeMenu=e)}onPointerLeave(){this.dispatchEvent(new CustomEvent("set-help-text",{bubbles:!0,composed:!0}))}};jt([m()],ut.prototype,"entries",2);jt([m()],ut.prototype,"drawingContext",2);jt([m({attribute:!1})],ut.prototype,"activeMenu",2);ut=jt([y("paint-menu-bar")],ut);var Qr=Object.getOwnPropertyDescriptor,Gr=(e,t,i,n)=>{for(var o=n>1?void 0:n?Qr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let ci=class extends b{static get styles(){return x`
      :host {
        display: block;
        border-top: 1px solid var(--button-dark);
        border-bottom: 1px solid var(--button-light);
      }
    `}render(){return v``}};ci=Gr([y("paint-ruler")],ci);var Xr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Nt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Zr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Xr(t,i,o),o};let gt=class extends b{constructor(){super(...arguments),this.helpText="",this.coordinateText="",this.areaText=""}static get styles(){return x`
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
    `}render(){return v`
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
    `}};Nt([m()],gt.prototype,"helpText",2);Nt([m()],gt.prototype,"coordinateText",2);Nt([m()],gt.prototype,"areaText",2);gt=Nt([y("paint-status-bar")],gt);function Yr(e){e.includes("BlinkMacSystemFont")&&console.warn("break-styled-lines: Using BlinkMacSystemFont can cause Chrome to crash in certain environments!")}function Ie(e){return Array.isArray(e)&&(e.length>0?typeof e[0]=="string":!0)}function Wi(e){return Array.isArray(e)&&(e.length>0?!Ie(e):!0)}function Jr(e,t,i,n){const o=e.text.split("").reduce((a,l)=>{const h=a[a.length-1]||"",p=h.slice(-1);return l===" "&&p!==" "?[...a,l]:l!==" "&&p===" "?[...a,l]:[...a.slice(0,-1),`${h}${l}`]},[]),{lastLineWidth:r,lines:s}=o.reduce((a,l)=>{n.font=e.font;const{width:h}=n.measureText(l),p=a.lastLineWidth+h;if(p<=t){const g=[...a.lines.slice(-1),l].join("");return{lastLineWidth:p,lines:[...a.lines.slice(0,-1),g]}}if(h>t&&a.lastLineWidth===0)return{lastLineWidth:h,lines:[...a.lines.slice(0,-1),l]};const d=a.lines.slice(-1).join(""),u=[...a.lines.slice(0,-1),d.trimEnd()];return l.trim().length===0?{lastLineWidth:0,lines:[...u,""]}:{lastLineWidth:h,lines:[...u,l]}},{lastLineWidth:i,lines:[]});return{lastLineWidth:r,text:s.join(`
`)}}function Yt(e,t){const i="OffscreenCanvas"in window,n=document.createElement("canvas"),o=i?n.transferControlToOffscreen():n;o.width=t;const r=o.getContext("2d");return r?e.reduce((s,a)=>{const{lastLineWidth:l,text:h}=Jr(a,t,s.lastLineWidth,r);return{lastLineWidth:l,lines:[...s.lines,h]}},{lastLineWidth:0,lines:[]}).lines:(console.warn("No canvas context was found, so the string was left as is!"),e.map(({text:s})=>s))}function ts(e,t){return Wi(e)?e.map(({text:i,font:n})=>({text:Jt(i),font:n||t})):Ie(e)?e.map(i=>({text:Jt(i),font:t})):[{text:Jt(e),font:t}]}var es=/(\r\n|\n|\r)/gm;function Jt(e){return e.replace(es," ")}function is(e,t,i){Yr(i);const n=ts(e,i);return Ie(e)||Wi(e)?Yt(n,t):Yt(n,t)[0]}var ns=is,os=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,Ue=(e,t,i,n)=>{for(var o=n>1?void 0:n?rs(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&os(t,i,o),o};let vt=class extends b{constructor(){super(...arguments),this.editingActive=!1,this.drawingContext=S}static get styles(){return x`
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
    `}firstUpdated(e){if(super.firstUpdated(e),!this.textarea)throw new Error("Textarea not found.");const t=this.textarea;t.addEventListener("input",()=>{requestAnimationFrame(()=>t.scrollTop=0),this.drawPreview()})}render(){const{context:e,previewContext:t,text:i}=this.drawingContext;return this.style.display=i.active?"block":"none",this.editingActive&&!i.active&&this.commitTextBox(),this.editingActive=i.active,e&&t&&i.active&&(this.textarea?.focus(),this.textarea?.scroll(0,0),this.drawPreview()),v`<textarea style="${this.getTextAreaStyle()}"></textarea>`}getTextAreaStyle(){const{colors:e,text:t}=this.drawingContext,{width:i,height:n,x:o,y:r,font:s,size:a,bold:l,italic:h,underline:p}=t;return`
      width: ${i}px;
      height: ${n}px;
      transform: translate(${o}px, ${r}px);
      font-family: "${s}"; 
      font-size: ${a}px;
      font-weight: ${l?"bold":"normal"};
      font-style: ${h?"italic":"normal"};
      text-decoration: ${p?"underline":"none"};
      caret-color: ${e.primary};
    `}drawPreview(){this.drawingContext.previewContext&&(B(this.drawingContext.previewContext),this.drawTextBox(this.drawingContext.previewContext))}commitTextBox(){this.editingActive&&!this.drawingContext.text.active&&this.textarea&&this.drawingContext.previewContext&&this.drawingContext.context&&(this.editingActive=!1,B(this.drawingContext.previewContext),this.drawTextBox(this.drawingContext.context),this.textarea.value="")}drawTextBox(e){const{x:t,y:i,width:n,height:o,size:r,font:s,bold:a,italic:l,underline:h}=this.drawingContext.text;this.drawingContext.drawOpaque&&(e.fillStyle=this.drawingContext.colors.secondary,e.fillRect(t??0,i??0,n??0,o??0)),e.fillStyle=this.drawingContext.colors.primary;const p=l?"italic ":"",c=a?"bold ":"";e.font=`${p}${c}${r}px ${s}`;const d=1,u=(n??0)-d*2,g=vt.getLineHeight(e,r);(this.textarea?.value??"").split(`
`).map(f=>ns(f,u,e.font).split(`
`)).reduce((f,A)=>f.concat(A),[]).forEach((f,A)=>{const k=(t??0)+d,P=(i??0)+r+g*A;if(!(P-(i??0)>=(o??0))&&(e.fillText(f,k,P),h)){const{width:E}=e.measureText(f);e.fillRect(k,P+1,E,1)}})}static getLineHeight(e,t){const i=e.measureText("");return typeof i.fontBoundingBoxAscent=="number"&&typeof i.fontBoundingBoxDescent=="number"?i.fontBoundingBoxAscent+i.fontBoundingBoxDescent:t*1.2}};Ue([m()],vt.prototype,"drawingContext",2);Ue([Se("textarea")],vt.prototype,"textarea",2);vt=Ue([y("paint-text-area")],vt);var ss=Object.defineProperty,as=Object.getOwnPropertyDescriptor,qi=(e,t,i,n)=>{for(var o=n>1?void 0:n?as(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&ss(t,i,o),o};let de=class extends b{static get styles(){return x`
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
    `}constructor(){super(),this.addEventListener("pointerenter",()=>this.dispatchEvent(new CustomEvent("set-help-text",{detail:this.tool?.helpText??"",bubbles:!0,composed:!0}))),this.addEventListener("pointerleave",()=>this.dispatchEvent(new CustomEvent("set-help-text",{bubbles:!0,composed:!0})))}render(){return v`
      <div class="wrapper">
        <div
          class="tool"
          style="background-position: ${this.tool?.imagePosition}"
        ></div>
      </div>
    `}};qi([m()],de.prototype,"tool",2);de=qi([y("paint-tool")],de);var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,Qi=(e,t,i,n)=>{for(var o=n>1?void 0:n?cs(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&ls(t,i,o),o};let ue=class extends b{constructor(){super(...arguments),this.drawingContext=S,this.options=[{size:9,selectionWidth:17,width:11,height:10,path:"M5,1h1v2h2V1h1v4h1V4h1v2H9V5H6v1h1V5h1v1h1v1h2v1h-1v1H9v1H8V8h1V7H7v1H6v1h1v1H6V9H4v1H3V9h1V8H3V7h2V6H4v1H3V5h2V4h1V3H5v1H4v1H3V4h1V3H3V2h1v1h1V1z"},{size:17,selectionWidth:22,width:18,height:16,path:"M8,0h1v1h1V0h3v1h-3v1h1v1h1V2h1v2h1V3h1V1h1v1h-1v2h-1v1h3V3h1v2h-1v2h-1v1h1v1h-3V7h1V6h-1V5h-2v1h1v3h1v7h-4v-2h1v2h1v-1h1v1h1v-3h-1v-1h1v-1h-2V7H9v1h2V7h1v2h-1v1h1v1h-1v1H9v-2H7v1H6v1h1v2h2v1H7v-1H6v-2H5v1H3v1H2v-1h1v-1h1v-1H3v-1h2v1h1v-1H5V9H4V8h1v1h3V8H6V7H3v1H2V7h1V6h3V4H4V3h1V2h1v2h1v3h1V4h1V3h1v2h1V3h-1V2H9V1H8V0z"},{size:25,selectionWidth:24,width:24,height:24,path:"M14,0v1h-1V0v2h1v2h3v1h2V4h3v1h-1V4h-1v1h-1v2h1v1h2V7h1v1h-2v1h1v1h-1V9h-1v1h-1V9h1V8h-2V6h-1v1h-2v2h-2V8h-1v2h2V9h2V7h1v1h1v1h-1v2h7v1h-1v-1h-2v1h1v2h1v1h-1v-2h-1v-1h-1v-1h-1v1h-1v1h-1v1h1v1h2v2h4v1h-2v4h-1v-2h-6v-2h1v1h-1v1h3v-1h1v1h2v1h1v-3h1v-1h-5v-1h1v-1h-3v-3h-1v2h-1v1h1v1h-2v3h1v1h-1v1h1v1h-1v-1h-2v-1h1v1h1v-2h-2v-1H9v1H8v1h1v1h1v1H8v-1H3v-2H2v-4h1v1H2v2h1v2h1v1h2v-2H4v-2h1v-2h1v-1H5v-1h1v1h1v-1h1v-1h3v1h1v1H9v-1H8v1H7v1H6v2H5v1h1v1h2v-1h1v-1H8v-1h1v-1H8v-1h1v1h3v1H9v1h2v1h1v-2h1v-1h-1v-1h1v-2h1v-1h-1v1h-2v-1H9v-1H8v1H5v1H2v1H1v-1h1v-1h1v1h1V9H0V8h1v1h2V5h3V3H4V2h4v1H7v3H4v2h1v2h3V8H7V7H6v1H5V6h2v1h1v1h1v2h1V9h1V7H9V6H7V5h2V4h1V2H9V1h2v3h2V0H14z"}]}static get styles(){return x`
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
    `}render(){const{airbrushSize:e}=this.drawingContext;return v`
      <ul>
        ${this.options.map(({size:t,selectionWidth:i,width:n,height:o,path:r})=>v`
            <li
              class="${e===t?"selected":""}"
              style="width: ${i}px"
              @click="${()=>this.setSize(t)}"
            >
              <svg style="width: ${n}px; height: ${o}px;">
                <path d="${r}"></path>
              </svg>
            </li>
          `)}
      </ul>
    `}setSize(e){this.drawingContext.airbrushSize=e,w(this)}};Qi([m({type:Object})],ue.prototype,"drawingContext",2);ue=Qi([y("paint-tool-airbrush")],ue);var hs=Object.getOwnPropertyDescriptor,ps=(e,t,i,n)=>{for(var o=n>1?void 0:n?hs(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let hi=class extends b{static get styles(){return x`
      :host {
        background-color: var(--button-face);
        padding-right: 1px;
      }
    `}render(){return v`<slot></slot>`}};hi=ps([y("paint-tool-bar")],hi);var ds=Object.defineProperty,us=Object.getOwnPropertyDescriptor,je=(e,t,i,n)=>{for(var o=n>1?void 0:n?us(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&ds(t,i,o),o};let kt=class extends b{constructor(){super(...arguments),this.drawingContext=S}static get styles(){return x`
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
    `}render(){return v`
      ${eo.map(e=>v` <paint-tool
            .tool=${e}
            title="${e.tooltip}"
            class="${this.drawingContext?.tool===e?"active":""} ${e.instance?"":"unavailable"}"
            @click="${()=>this.selectTool(e)}"
          ></paint-tool>`)}
      <paint-inset-container>
        ${this.getToolHtml(this.drawingContext.tool)}
      </paint-inset-container>
    `}selectTool(e){this.drawingContext.text.active=!1,Y(this.drawingContext),this.isEditingTool(this.drawingContext.tool)&&(this.drawingContext.previousEditingTool=this.drawingContext.tool),this.drawingContext.tool===e&&[ie,ne].includes(e)?this.drawingContext.tool=this.drawingContext.previousEditingTool:this.drawingContext.tool=e,w(this)}isEditingTool(e){return[re,oe,ae,ee,se,St,ce,le,he].includes(e)}getToolHtml(e){return ie===e?v` <paint-tool-color-preview
        .drawingContext="${this.drawingContext}"
      ></paint-tool-color-preview>`:[se,ae].includes(e)?v` <paint-tool-line-width
        .drawingContext="${this.drawingContext}"
      ></paint-tool-line-width>`:[le,Ei,ce,he].includes(e)?v` <paint-tool-fill-style
        .drawingContext="${this.drawingContext}"
      ></paint-tool-fill-style>`:[$i,Ci,Pi].includes(e)?v` <paint-tool-draw-opaque
        .drawingContext="${this.drawingContext}"
      ></paint-tool-draw-opaque>`:ee===e?v` <paint-tool-eraser-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-eraser-size>`:oe===e?v` <paint-tool-brush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-brush>`:re===e?v` <paint-tool-airbrush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-airbrush>`:ne===e?v` <paint-tool-magnifier-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-magnifier-size>`:""}};je([m()],kt.prototype,"drawingContext",2);je([m({attribute:!1})],kt.prototype,"tool",2);kt=je([y("paint-tool-box")],kt);var gs=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,Gi=(e,t,i,n)=>{for(var o=n>1?void 0:n?vs(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&gs(t,i,o),o};let ge=class extends b{constructor(){super(...arguments),this.drawingContext=S,this.brushConfigs=[{type:"circle",sizes:[{value:7,path:"M3,0h3v1h1v1h1v3H7v1H6v1H3V6H2V5H1V2h1V1h1z"},{value:4,path:"M3,2h2v1h1v2H5v1H3V5H2V3h1z"},{value:1,path:"M4,3h1v1h-1z"}]},{type:"square",sizes:[{value:8,path:"M0,0H8V8H0z"},{value:5,path:"M2,1H7V6H2z"},{value:2,path:"M3,3H5V5H3z"}]},{type:"forward-diagonal",sizes:[{value:8,path:"M8,0H7v1H6v1H5v1H4v1H3v1H2v1H1v1H0v1h1V7h1V6h1V5h1V4h1V3h1V2h1V1h1V0z"},{value:5,path:"M7,1H6v1H5v1H4v1H3v1H2v1h1V5h1V4h1V3h1V2h1z"},{value:2,path:"M3,5H4V4H5V3H4V4H3z"}]},{type:"backward-diagonal",sizes:[{value:8,path:"M0,0h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H7V7H6V6H5V5H4V4H3V3H2V2H1V1H0V0z"},{value:5,path:"M2,1h1v1h1v1h1v1h1v1h1v1H6V5H5V4H4V3H3V2H2z"},{value:2,path:"M3,3h1v1h1v1H4V4H3z"}]}]}static get styles(){return x`
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
    `}render(){return v`${this.brushConfigs.map(({type:e,sizes:t})=>t.map(({value:i,path:n})=>v`<div
            @click=${()=>this.onSelect(e,i)}
            class="${this.drawingContext.brush.size===i&&this.drawingContext.brush.type===e?"selected":""}"
          ><svg viewBox="0 0 8 8"><path d="${n}"></svg>
          <div class="selection"></div>
        </div>`))}`}onSelect(e,t){this.drawingContext.brush.type=e,this.drawingContext.brush.size=t,w(this)}};Gi([m()],ge.prototype,"drawingContext",2);ge=Gi([y("paint-tool-brush")],ge);var fs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,Xi=(e,t,i,n)=>{for(var o=n>1?void 0:n?ms(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&fs(t,i,o),o};let ve=class extends b{constructor(){super(...arguments),this.drawingContext=S}static get styles(){return x`
      :host {
        display: block;
      }
    `}render(){this.style.backgroundColor=this.drawingContext?.previewColor??"transparent"}};Xi([m()],ve.prototype,"drawingContext",2);ve=Xi([y("paint-tool-color-preview")],ve);var ws=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,Zi=(e,t,i,n)=>{for(var o=n>1?void 0:n?bs(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&ws(t,i,o),o};let fe=class extends b{constructor(){super(...arguments),this.drawingContext=S}static get styles(){return x`
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
    `}render(){return v`
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
    `}getClasses(e){return[...e===this.drawingContext.drawOpaque?["selected"]:[],...e?["opaque"]:["transparent"]].join(" ")}selectValue(e){this.drawingContext.drawOpaque=e,w(this)}};Zi([m()],fe.prototype,"drawingContext",2);fe=Zi([y("paint-tool-draw-opaque")],fe);var xs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,Yi=(e,t,i,n)=>{for(var o=n>1?void 0:n?ys(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&xs(t,i,o),o};let me=class extends b{constructor(){super(...arguments),this.drawingContext=S,this.eraserSizes=[4,6,8,10]}static get styles(){return x`
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
    `}render(){return v`
      <ul>
        ${this.eraserSizes.map(e=>v`
            <li
              class="${e===this.drawingContext.eraserSize?"selected":""}"
              @click="${()=>this.selectSize(e)}"
            >
              <div class="selection-wrapper">
                <div class="size" style="${this.getStyle(e)}"></div>
              </div>
            </li>
          `)}
      </ul>
    `}getStyle(e){return`width: ${e}px; height: ${e}px`}selectSize(e){this.drawingContext.eraserSize=e,w(this)}};Yi([m()],me.prototype,"drawingContext",2);me=Yi([y("paint-tool-eraser-size")],me);var As=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,Ji=(e,t,i,n)=>{for(var o=n>1?void 0:n?$s(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&As(t,i,o),o};let we=class extends b{constructor(){super(...arguments),this.drawingContext=S,this.fillStyles=[{stroke:!0,fill:!1},{stroke:!0,fill:!0},{stroke:!1,fill:!0}]}static get styles(){return x`
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
    `}render(){return v`
      <ul>
        ${this.fillStyles.map(e=>v`
            <li
              class="${this.isSelected(e)?"selected":""}"
              @click="${()=>this.onSelect(e)}"
            >
              <div class="item ${this.getClasses(e)}"></div>
            </li>
          `)}
      </ul>
    `}isSelected({stroke:e,fill:t}){return e===this.drawingContext.fillStyle.stroke&&t===this.drawingContext.fillStyle.fill}getClasses({stroke:e,fill:t}){return[...e?["stroke"]:[],...t?["fill"]:[]].join(" ")}onSelect(e){this.drawingContext.fillStyle=e,w(this)}};Ji([m()],we.prototype,"drawingContext",2);we=Ji([y("paint-tool-fill-style")],we);var Cs=Object.defineProperty,Ps=Object.getOwnPropertyDescriptor,tn=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ps(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Cs(t,i,o),o};let be=class extends b{constructor(){super(...arguments),this.drawingContext=S,this.lineWidths=[1,2,3,4,5]}static get styles(){return x`
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
    `}render(){return v`
      <ul>
        ${this.lineWidths.map(e=>v` <li
              @click="${()=>this.onUpdateWidth(e)}"
              class="${this.drawingContext.lineWidth===e?"selected":""}"
            >
              <div style="height: ${e}px"></div>
            </li>`)}
      </ul>
    `}onUpdateWidth(e){this.drawingContext.lineWidth=e,w(this)}};tn([m()],be.prototype,"drawingContext",2);be=tn([y("paint-tool-line-width")],be);var Es=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,en=(e,t,i,n)=>{for(var o=n>1?void 0:n?_s(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Es(t,i,o),o};let xe=class extends b{constructor(){super(...arguments),this.drawingContext=S,this.selectedMagnifierSize=0,this.selections=[{path:"M3,0H4V9H3V2H1V1H3zM7,3V5H8V7H7V9H8V7h2V9h1V7H10V5h1V3H10V5H8V3zM19,5h1V6H19z",magnifierSize:1},{path:"M0,1H1V0H4V1H5V4H4V5H3V6H2V7H1V8H5V9H0V7H1V6H2V5H3V4H4V1H1V2H0zM6,3V5H7V7H6V9H7V7H9V9h1V7H9V5h1V3H9V5H7V3zM18,4h2V6H18z",magnifierSize:2},{path:"M1,0h3v1h1v1H4V1H1v3h3v1h1v3H4v1H1V8h3V5H1v3H0V1h1zM6,3V5H7V7H6V9H7V7H9V9h1V7H9V5h1V3H9V5H7V3zM16,2h6V8H16z",magnifierSize:6},{path:"M1,0h3v1h1v3H4v1h1v3H4v1H1V8h3V5H1v3H0V5h1V4h3V1H1v3H0V1h1zM6,3V5H7V7H6V9H7V7H9V9h1V7H9V5h1V3H9V5H7V3zm9-2h8V9H15z",magnifierSize:8}]}static get styles(){return x`
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
    `}connectedCallback(){super.connectedCallback(),this.selectedMagnifierSize=this.drawingContext.magnifierSize}render(){return v` <ul>
      ${this.selections.map(e=>v`<li
            @mousedown="${()=>this.onUpdateMagnifierSize(e.magnifierSize)}"
            class="${this.selectedMagnifierSize===e.magnifierSize?"selected":""}"
          >
            <svg viewBox="0 0 23 9"><path d="${e.path}" /></svg>
          </li>`)}
    </ul>`}onUpdateMagnifierSize(e){this.drawingContext.magnifierSize=e,this.drawingContext.tool=this.drawingContext.previousEditingTool,w(this)}};en([m()],xe.prototype,"drawingContext",2);xe=en([y("paint-tool-magnifier-size")],xe);document.querySelector("paint-app")?.addEventListener("titlechange",e=>document.title=`${e.detail.title} - Paint`);"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js"));
