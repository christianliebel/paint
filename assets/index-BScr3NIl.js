(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const yt=globalThis,me=yt.ShadowRoot&&(yt.ShadyCSS===void 0||yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),Ue=new WeakMap;let ri=class{constructor(t,i,n){if(this._$cssResult$=!0,n!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(me&&t===void 0){const n=i!==void 0&&i.length===1;n&&(t=Ue.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ue.set(i,t))}return t}toString(){return this.cssText}};const Gi=e=>new ri(typeof e=="string"?e:e+"",void 0,we),x=(e,...t)=>{const i=e.length===1?e[0]:t.reduce(((n,o,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1]),e[0]);return new ri(i,e,we)},Xi=(e,t)=>{if(me)e.adoptedStyleSheets=t.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet));else for(const i of t){const n=document.createElement("style"),o=yt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},je=me?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return Gi(i)})(e):e;const{is:Zi,defineProperty:Yi,getOwnPropertyDescriptor:Ji,getOwnPropertyNames:tn,getOwnPropertySymbols:en,getPrototypeOf:nn}=Object,Bt=globalThis,Ie=Bt.trustedTypes,on=Ie?Ie.emptyScript:"",rn=Bt.reactiveElementPolyfillSupport,st=(e,t)=>e,$t={toAttribute(e,t){switch(t){case Boolean:e=e?on:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},be=(e,t)=>!Zi(e,t),ze={attribute:!0,type:String,converter:$t,reflect:!1,useDefault:!1,hasChanged:be};Symbol.metadata??=Symbol("metadata"),Bt.litPropertyMetadata??=new WeakMap;let W=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=ze){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&Yi(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:r}=Ji(this.prototype,t)??{get(){return this[i]},set(s){this[i]=s}};return{get:o,set(s){const a=o?.call(this);r?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ze}static _$Ei(){if(this.hasOwnProperty(st("elementProperties")))return;const t=nn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(st("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(st("properties"))){const i=this.properties,n=[...tn(i),...en(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(je(o))}else t!==void 0&&i.push(je(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$ET(t,i){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const r=(n.converter?.toAttribute!==void 0?n.converter:$t).toAttribute(i,n.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,i){const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=n.getPropertyOptions(o),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:$t;this._$Em=o,this[o]=s.fromAttribute(i,r.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){const o=this.constructor,r=this[t];if(n??=o.getPropertyOptions(t),!((n.hasChanged??be)(r,i)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:n,reflect:o,wrapped:r},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??i??this[t]),r!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(i=void 0),this._$AL.set(t,i)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,r]of n){const{wrapped:s}=r,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((n=>n.hostUpdate?.())),this.update(i)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((i=>i.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[st("elementProperties")]=new Map,W[st("finalized")]=new Map,rn?.({ReactiveElement:W}),(Bt.reactiveElementVersions??=[]).push("2.1.0");const xe=globalThis,Ct=xe.trustedTypes,Ne=Ct?Ct.createPolicy("lit-html",{createHTML:e=>e}):void 0,si="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,ai="?"+R,sn=`<${ai}>`,I=document,lt=()=>I.createComment(""),ct=e=>e===null||typeof e!="object"&&typeof e!="function",ye=Array.isArray,an=e=>ye(e)||typeof e?.[Symbol.iterator]=="function",qt=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ke=/-->/g,qe=/>/g,U=RegExp(`>|${qt}(?:([^\\s"'>=/]+)(${qt}*=${qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,Qe=/"/g,li=/^(?:script|style|textarea|title)$/i,ln=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),f=ln(1),Q=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Ge=new WeakMap,j=I.createTreeWalker(I,129);function ci(e,t){if(!ye(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ne!==void 0?Ne.createHTML(t):t}const cn=(e,t)=>{const i=e.length-1,n=[];let o,r=t===2?"<svg>":t===3?"<math>":"",s=nt;for(let a=0;a<i;a++){const l=e[a];let p,h,c=-1,d=0;for(;d<l.length&&(s.lastIndex=d,h=s.exec(l),h!==null);)d=s.lastIndex,s===nt?h[1]==="!--"?s=Ke:h[1]!==void 0?s=qe:h[2]!==void 0?(li.test(h[2])&&(o=RegExp("</"+h[2],"g")),s=U):h[3]!==void 0&&(s=U):s===U?h[0]===">"?(s=o??nt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,p=h[1],s=h[3]===void 0?U:h[3]==='"'?Qe:We):s===Qe||s===We?s=U:s===Ke||s===qe?s=nt:(s=U,o=void 0);const u=s===U&&e[a+1].startsWith("/>")?" ":"";r+=s===nt?l+sn:c>=0?(n.push(p),l.slice(0,c)+si+l.slice(c)+R+u):l+R+(c===-2?a:u)}return[ci(e,r+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class ht{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[p,h]=cn(t,i);if(this.el=ht.createElement(p,n),j.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=j.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(si)){const d=h[s++],u=o.getAttribute(c).split(R),g=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:g[2],strings:u,ctor:g[1]==="."?pn:g[1]==="?"?dn:g[1]==="@"?un:Lt}),o.removeAttribute(c)}else c.startsWith(R)&&(l.push({type:6,index:r}),o.removeAttribute(c));if(li.test(o.tagName)){const c=o.textContent.split(R),d=c.length-1;if(d>0){o.textContent=Ct?Ct.emptyScript:"";for(let u=0;u<d;u++)o.append(c[u],lt()),j.nextNode(),l.push({type:2,index:++r});o.append(c[d],lt())}}}else if(o.nodeType===8)if(o.data===ai)l.push({type:2,index:r});else{let c=-1;for(;(c=o.data.indexOf(R,c+1))!==-1;)l.push({type:7,index:r}),c+=R.length-1}r++}}static createElement(t,i){const n=I.createElement("template");return n.innerHTML=t,n}}function G(e,t,i=e,n){if(t===Q)return t;let o=n!==void 0?i._$Co?.[n]:i._$Cl;const r=ct(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(e),o._$AT(e,i,n)),n!==void 0?(i._$Co??=[])[n]=o:i._$Cl=o),o!==void 0&&(t=G(e,o._$AS(e,t.values),o,n)),t}class hn{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=(t?.creationScope??I).importNode(i,!0);j.currentNode=o;let r=j.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let p;l.type===2?p=new vt(r,r.nextSibling,this,t):l.type===1?p=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(p=new fn(r,this,t)),this._$AV.push(p),l=n[++a]}s!==l?.index&&(r=j.nextNode(),s++)}return j.currentNode=I,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class vt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=G(this,t,i),ct(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==Q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):an(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==P&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ht.createElement(ci(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(i);else{const r=new hn(o,this),s=r.u(this.options);r.p(i),this.T(s),this._$AH=r}}_$AC(t){let i=Ge.get(t.strings);return i===void 0&&Ge.set(t.strings,i=new ht(t)),i}k(t){ye(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const r of t)o===i.length?i.push(n=new vt(this.O(lt()),this.O(lt()),this,this.options)):n=i[o],n._$AI(r),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,r){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(t,i=this,n,o){const r=this.strings;let s=!1;if(r===void 0)t=G(this,t,i,0),s=!ct(t)||t!==this._$AH&&t!==Q,s&&(this._$AH=t);else{const a=t;let l,p;for(t=r[0],l=0;l<r.length-1;l++)p=G(this,a[n+l],i,l),p===Q&&(p=this._$AH[l]),s||=!ct(p)||p!==this._$AH[l],p===P?t=P:t!==P&&(t+=(p??"")+r[l+1]),this._$AH[l]=p}s&&!o&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class pn extends Lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}class dn extends Lt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}}class un extends Lt{constructor(t,i,n,o,r){super(t,i,n,o,r),this.type=5}_$AI(t,i=this){if((t=G(this,t,i,0)??P)===Q)return;const n=this._$AH,o=t===P&&n!==P||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==P&&(n===P||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class fn{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const gn=xe.litHtmlPolyfillSupport;gn?.(ht,vt),(xe.litHtmlVersions??=[]).push("3.3.0");const vn=(e,t,i)=>{const n=i?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const r=i?.renderBefore??null;n._$litPart$=o=new vt(t.insertBefore(lt(),r),r,void 0,i??{})}return o._$AI(e),o};const Ae=globalThis;class w extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vn(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}}w._$litElement$=!0,w.finalized=!0,Ae.litElementHydrateSupport?.({LitElement:w});const mn=Ae.litElementPolyfillSupport;mn?.({LitElement:w});(Ae.litElementVersions??=[]).push("4.2.0");const y=e=>(t,i)=>{i!==void 0?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};const wn={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:be},bn=(e=wn,t,i)=>{const{kind:n,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),n==="accessor"){const{name:s}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=i;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+n)};function m(e){return(t,i)=>typeof i=="object"?bn(e,t,i):((n,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,n),s?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,i)}function M(e){return m({...e,state:!0,attribute:!1})}const xn=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);function hi(e,t){return(i,n,o)=>{const r=s=>s.renderRoot?.querySelector(e)??null;return xn(i,n,{get(){return r(this)}})}}var yn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,$e=(e,t,i,n)=>{for(var o=n>1?void 0:n?An(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&yn(t,i,o),o};let Pt=class extends w{static get styles(){return x`
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
    `}async firstUpdated(e){if(super.firstUpdated(e),"storage"in navigator){const{usage:t,quota:i}=await navigator.storage.estimate();this.totalFreeMemory=i,this.freeMemoryPercentage=100-(t??1)/(i??1)*100}}render(){return f`
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
            <paint-button tabindex="0" @click="${this.onOK}"
              >OK</paint-button
            >
          </div>
        </div>
      </paint-window>
    `}getFreeMemoryInKB(){if(typeof this.totalFreeMemory>"u")return"???";const e=Math.round(this.totalFreeMemory/1024);return Intl.NumberFormat("en-US").format(e)}getFreeMemoryPercentage(){return typeof this.freeMemoryPercentage>"u"?"???":Math.round(this.freeMemoryPercentage)}onOK(){this.dispatchEvent(new CustomEvent("close"))}};$e([m({attribute:!1})],Pt.prototype,"totalFreeMemory",2);$e([m({attribute:!1})],Pt.prototype,"freeMemoryPercentage",2);Pt=$e([y("paint-dialog-about")],Pt);function mt(e,t={}){return new Promise(i=>{const n=document.querySelector("paint-app")?.shadowRoot,o=document.createElement(e);Object.entries(t).forEach(([r,s])=>o[r]=s),o.addEventListener("close",r=>{n?.removeChild(o),i(r.detail)}),n?.appendChild(o)})}function Rt(e,t=null,i="",n="ok"){return mt("paint-dialog-message-box",{prompt:e,icon:t,title:i,layout:n})}function T(e,t){const i=t?e.indexOf(t):-1;return f`${e.substring(0,i)}<span class="mnemonic"
      >${t}</span
    >${e.substring(i+1)}`}var $n=Object.defineProperty,Cn=Object.getOwnPropertyDescriptor,wt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Cn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&$n(t,i,o),o};let X=class extends w{constructor(){super(...arguments),this.width="",this.height="",this.unit="pels",this.color="colors",this.units=[{value:"inches",label:"Inches",mnemonic:"I"},{value:"cm",label:"Cm",mnemonic:"m"},{value:"pels",label:"Pels",mnemonic:"P"}],this.colors=[{value:"black-and-white",label:"Black and white",mnemonic:"B"},{value:"colors",label:"Colors",mnemonic:"l"}]}static get styles(){return x`
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
    `}render(){return f` <paint-window caption="Attributes" help close>
      <div class="container">
        <form>
          <div class="dimensions">
            <span>${T("Width:","W")}</span>
            <input
              type="text"
              .value="${this.width}"
              @change="${e=>this.width=e.target.value}"
            />
            <span>${T("Height:","H")}</span>
            <input
              type="text"
              .value="${this.height}"
              @change="${e=>this.height=e.target.value}"
            />
          </div>

          <fieldset>
            <legend>Units</legend>
            ${this.units.map(({value:e,label:t,mnemonic:i})=>f`
                <label
                  ><input
                    type="radio"
                    name="unit"
                    value="${e}"
                    .checked="${this.unit===e}"
                    @change="${()=>this.unit=e}"
                    disabled
                  />
                  ${T(t,i)}</label
                >
              `)}
          </fieldset>

          <fieldset>
            <legend>Colors</legend>
            ${this.colors.map(({value:e,label:t,mnemonic:i})=>f`
                <label
                  ><input
                    type="radio"
                    name="color"
                    value="${e}"
                    .checked="${this.color===e}"
                    @change="${()=>this.color=e}"
                    disabled
                  />
                  ${T(t,i)}</label
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
            >${T("Default","D")}
          </paint-button>
        </div>
      </div>
    </paint-window>`}async onOk(){const{width:e,height:t,unit:i,color:n}=this;if(e.length>5||t.length>5){await Rt("Please enter no more than 5 characters.","warning","Paint");return}this.dispatchEvent(new CustomEvent("close",{detail:{width:e,height:t,unit:i,color:n}}))}onCancel(){this.dispatchEvent(new CustomEvent("close"))}onDefault(){this.width=screen.width.toString(),this.height=screen.height.toString(),this.unit="pels",this.color="colors"}};wt([M()],X.prototype,"width",2);wt([M()],X.prototype,"height",2);wt([M()],X.prototype,"unit",2);wt([M()],X.prototype,"color",2);X=wt([y("paint-dialog-attributes")],X);var Pn=Object.defineProperty,En=Object.getOwnPropertyDescriptor,Ce=(e,t,i,n)=>{for(var o=n>1?void 0:n?En(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Pn(t,i,o),o};let Et=class extends w{constructor(){super(...arguments),this.currentMagnifierSize=1,this.magnifierSizes=[1,2,4,6,8],this.selectedMagnifierSize=1}static get styles(){return x`
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
    `}firstUpdated(e){super.firstUpdated(e),this.selectedMagnifierSize=this.currentMagnifierSize}render(){return f`
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
                ${this.magnifierSizes.map(e=>f`
                    <label>
                      <input
                        type="radio"
                        name="zoom"
                        value="${e}"
                        @change="${()=>this.selectedMagnifierSize=e}"
                        .checked="${this.selectedMagnifierSize===e}"
                      />
                      ${T((e*100).toString(),e.toString())}%
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
    `}onOk(){this.dispatchEvent(new CustomEvent("close",{detail:{magnifierSize:this.selectedMagnifierSize}}))}onCancel(){this.dispatchEvent(new CustomEvent("close"))}};Ce([m({type:Number,attribute:!1})],Et.prototype,"currentMagnifierSize",2);Ce([M()],Et.prototype,"selectedMagnifierSize",2);Et=Ce([y("paint-dialog-custom-zoom")],Et);var _n=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,Pe=(e,t,i,n)=>{for(var o=n>1?void 0:n?Sn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&_n(t,i,o),o};let _t=class extends w{constructor(){super(...arguments),this.modes=[{value:"flip-horizontal",text:"Flip horizontal",mnemonic:"F"},{value:"flip-vertical",text:"Flip vertical",mnemonic:"v"},{value:"rotate",text:"Rotate by angle",mnemonic:"R"}],this.selectedMode=this.modes[0].value,this.degrees=[{value:90,mnemonic:"9"},{value:180,mnemonic:"1"},{value:270,mnemonic:"2"}],this.selectedDegree=this.degrees[0].value}static get styles(){return x`
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
    `}render(){return f`
      <paint-window caption="Flip and Rotate" help close>
        <div class="content">
          <div>
            <fieldset>
              <legend>Flip and Rotate</legend>
              <div class="options">
                ${this.modes.map(e=>f`
                    <label
                      ><input
                        type="radio"
                        name="mode"
                        value="${e.value}"
                        @change="${()=>this.selectedMode=e.value}"
                        .checked="${e.value===this.selectedMode}"
                      />
                      ${T(e.text,e.mnemonic)}</label
                    >
                  `)}
                ${this.degrees.map(e=>f`
                    <label
                      ><input
                        type="radio"
                        name="degree"
                        value="${e.value}"
                        @change="${()=>this.selectedDegree=e.value}"
                        .checked="${e.value==this.selectedDegree}"
                        ?disabled="${this.selectedMode!=="rotate"}"
                      />
                      ${T(`${e.value}°`,e.mnemonic)}</label
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
    `}getFlipRotateParams(){return this.selectedMode==="rotate"?{action:"rotate",param:this.selectedDegree}:{action:"flip",param:this.selectedMode==="flip-horizontal"?"horizontal":"vertical"}}onOk(){this.dispatchEvent(new CustomEvent("close",{detail:this.getFlipRotateParams()}))}onCancel(){this.dispatchEvent(new CustomEvent("close"))}};Pe([M()],_t.prototype,"selectedMode",2);Pe([M()],_t.prototype,"selectedDegree",2);_t=Pe([y("paint-dialog-flip-and-rotate")],_t);function On(e,t,i,n,o){let r=0,s=n,a=1;const l=i*i,p=n*n,h=-(l/4+i%2+p),c=-(p/4+n%2+l),d=-(p/4+n%2);let u=-i*s,g=2*p*r,v=-2*l*s;const A=2*p,F=2*l;function S(){r++,g+=A,u+=g}function O(){s--,v+=F,u+=v}function it(qi,Wi,Qi){for(let Kt=0;Kt<Qi;Kt++)o({x:qi+Kt,y:Wi})}for(;s>=0&&r<=i;)u+p*r<=h||u+l*s<=d?(S(),a+=2):u-l*s>c?(it(e-r,t-s,a),s!=0&&it(e-r,t+s,a),O()):(it(e-r,t-s,a),s!=0&&it(e-r,t+s,a),S(),O(),a+=2);n==0&&it(e-i,t,2*i+1)}class Tn{onPointerDown(t,i,n,o){n.context&&(n.context.fillStyle=o.stroke.value),this.currentPosition={x:t,y:i},this.spray(n),this.intervalHandle=setInterval(()=>this.spray(n),30)}spray({airbrushSize:t,context:i}){if(this.currentPosition&&i){const n=Math.floor(t/2),{x:o,y:r}=this.currentPosition,s=[];On(o,r,n,n,a=>s.push(a));for(let a=0;a<10;a++){const l=Math.round(Math.random()*(s.length-1)),{x:p,y:h}=s[l];i.fillRect(p,h,1,1)}}}onPointerMove(t,i,n){typeof this.intervalHandle<"u"&&(this.spray(n),this.currentPosition={x:t,y:i})}onPointerUp(){typeof this.intervalHandle<"u"&&(clearInterval(this.intervalHandle),this.intervalHandle=this.currentPosition=void 0)}}function b(e){e?.dispatchEvent(new CustomEvent("drawing-context-changed",{detail:{...e.drawingContext},bubbles:!0,composed:!0}))}class Mn{onPointerDown(t,i,n){this.onPointerMove(t,i,n)}onPointerMove(t,i,n){n.context&&(n.previewColor=this.pickColor(t,i,n.context),b(n.element))}onPointerUp(t,i,n,o){n.context&&(n.previewColor=null,n.colors[o.stroke.key]=this.pickColor(t,i,n.context),n.previousEditingTool&&(n.tool=n.previousEditingTool),b(n.element))}pickColor(t,i,n){const[o,r,s]=n.getImageData(t,i,1,1).data;return`rgb(${o} ${r} ${s})`}}function k(e,t,i,n,o){const r=Math.abs(i-e),s=e<i?1:-1,a=-Math.abs(n-t),l=t<n?1:-1;let p=r+a,h;for(;;){if(o(e,t),h=2*p,h>=a){if(e===i)break;p+=a,e+=s}if(h<=r){if(t===n)break;p+=r,t+=l}}}function Hn(e,t,i,n,o){let r=Math.abs(i-e),s=Math.abs(n-t),a=s&1,l=4*(1-r)*s*s,p=4*(a+1)*r*r,h=l+p+a*r*r,c;e>i&&(e=i,i+=r),t>n&&(t=n),t+=(s+1)/2,n=t-a,r=8*r*r,a=8*s*s;do o(i,t),o(e,t),o(e,n),o(i,n),c=2*h,c<=p&&(t++,n--,h+=p+=r),(c>=l||2*h>p)&&(e++,i--,h+=l+=a);while(e<=i);for(;t-n<=s;)o(e-1,t),o(i+1,t++),o(e-1,n),o(i+1,n--)}class Dn{constructor(){this.previous={x:0,y:0}}onPointerDown(t,i,{context:n},o){n&&(n.fillStyle=o.stroke.value,n.fillRect(t,i,1,1),this.previous={x:t,y:i})}onPointerMove(t,i,{context:n}){k(this.previous.x,this.previous.y,t,i,(o,r)=>{n?.fillRect(o,r,1,1)}),this.previous={x:t,y:i}}}var q=(function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(n,o,r){i.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:r})},i.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,o){if(o&1&&(n=i(n)),o&8||o&4&&typeof n=="object"&&n&&n.__esModule)return n;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),o&2&&typeof n!="string")for(var s in n)i.d(r,s,(function(a){return n[a]}).bind(null,s));return r},i.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(o,"a",o),o},i.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},i.p="",i(i.s=0)})([function(e,t,i){i.r(t),i.d(t,"isSameColor",(function(){return r})),i.d(t,"setColorAtPixel",(function(){return o})),i.d(t,"getColorAtPixel",(function(){return n})),i.d(t,"colorToRGBA",(function(){return a})),i.d(t,"hex2RGBA",(function(){return s}));function n(h,c,d){var u=h.width,g=h.data,v=4*(d*u+c);if(g[v+3]===void 0)throw new Error("Invalid pixel coordinates: x="+c+"; y="+d);return{r:g[v],g:g[v+1],b:g[v+2],a:g[v+3]}}function o(h,c,d,u){var g=h.width,v=h.data,A=4*(u*g+d);if(v[A+3]===void 0)throw new Error("Invalid pixel coordinates. Cannot set color at: x="+d+"; y="+u);v[A+0]=c.r&255,v[A+1]=c.g&255,v[A+2]=c.b&255,v[A+3]=c.a&255}function r(h,c,d){return d===void 0&&(d=0),!(Math.abs(h.r-c.r)>d||Math.abs(h.g-c.g)>d||Math.abs(h.b-c.b)>d||Math.abs(h.a-c.a)>d)}function s(h,c){c===void 0&&(c=255);var d=h;if(h.indexOf("#")===0&&(d=h.slice(1)),d.length===3&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),d.length!==6)throw new Error("Invalid HEX color "+d+".");var u=parseInt(d.slice(0,2),16),g=parseInt(d.slice(2,4),16),v=parseInt(d.slice(4,6),16);return{r:u,g,b:v,a:c}}function a(h){if(h.indexOf("rgba")!==-1){var c=/rgba\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9\.]{1,})/g.exec(h);c[0];var d=c[1],u=c[2],g=c[3],v=c[4];return{r:parseInt(d),g:parseInt(u),b:parseInt(g),a:Math.ceil(parseFloat(v)*255)}}else if(h.indexOf("rgb")!==-1){var A=/rgb\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3})/g.exec(h);A[0];var d=A[1],u=A[2],g=A[3];return{r:parseInt(d),g:parseInt(u),b:parseInt(g),a:255}}else{if(h.indexOf("#")!==-1)return s(h);throw new Error("Unsupported color format. Please use CSS rgba, rgb, or HEX!")}}var l=(function(){function h(c){this.collectModifiedPixels=!1,this.modifiedPixelsCount=0,this.modifiedPixels=new Set,this._tolerance=0,this._queue=[],this.imageData=c,this.isSameColor=r,this.setColorAtPixel=o,this.getColorAtPixel=n,this.colorToRGBA=a}return h.prototype.fill=function(c,d,u,g){this._newColor=this.colorToRGBA(c),this._replacedColor=this.getColorAtPixel(this.imageData,d,u),this._tolerance=g,!this.isSameColor(this._replacedColor,this._newColor,this._tolerance)&&(this.addToQueue([d,d,u,-1]),this.fillQueue())},h.prototype.addToQueue=function(c){this._queue.push(c)},h.prototype.popFromQueue=function(){return this._queue.length?this._queue.pop():null},h.prototype.isValidTarget=function(c){if(c!==null){var d=this.getColorAtPixel(this.imageData,c.x,c.y);return this.isSameColor(this._replacedColor,d,this._tolerance)}},h.prototype.fillLineAt=function(c,d){if(!this.isValidTarget({x:c,y:d}))return[-1,-1];this.setPixelColor(this._newColor,{x:c,y:d});for(var u=c,g=c,v=this.getPixelNeighbour("left",u,d);v&&this.isValidTarget(v);)this.setPixelColor(this._newColor,v),u=v.x,v=this.getPixelNeighbour("left",u,d);for(v=this.getPixelNeighbour("right",g,d);v&&this.isValidTarget(v);)this.setPixelColor(this._newColor,v),g=v.x,v=this.getPixelNeighbour("right",g,d);return[u,g]},h.prototype.fillQueue=function(){for(var c=this.popFromQueue();c;){for(var d=c[0],u=c[1],g=c[2],v=c[3],A=d;A!==-1&&A<=u;){var F=this.fillLineAt(A,g),S=F[0],O=F[1];S!==-1&&(S>=d&&O<=u&&v!==-1?(v<g&&g+1<this.imageData.height&&this.addToQueue([S,O,g+1,g]),v>g&&g>0&&this.addToQueue([S,O,g-1,g])):(g>0&&this.addToQueue([S,O,g-1,g]),g+1<this.imageData.height&&this.addToQueue([S,O,g+1,g]))),O===-1&&A<=u?A+=1:A=O+1}c=this.popFromQueue()}},h.prototype.setPixelColor=function(c,d){this.setColorAtPixel(this.imageData,c,d.x,d.y),this.modifiedPixelsCount++,this.collectModifiedPixels&&this.modifiedPixels.add(d.x+"|"+d.y)},h.prototype.getPixelNeighbour=function(c,d,u){d=d|0,u=u|0;var g;switch(c){case"right":g={x:d+1|0,y:u};break;case"left":g={x:d-1|0,y:u};break}return g.x>=0&&g.x<this.imageData.width?g:null},h})(),p=l;t.default=p}]);q===void 0&&console.error("esm-webpack-plugin: nothing exported!");const kn=q.default;q.isSameColor;q.setColorAtPixel;q.getColorAtPixel;q.colorToRGBA;q.hex2RGBA;class Vn{onPointerDown(t,i,{canvas:n,context:o},r){if(n&&o){const s=new kn(o.getImageData(0,0,n.width,n.height));s.fill(r.stroke.value,t,i,0),o.putImageData(s.imageData,0,0)}}}function V(e){e?.clearRect(0,0,e.canvas.width,e.canvas.height)}function pi(e,t,i,n){i===1&&n.fillRect(e,t,1,1),i===2&&n.fillRect(e-1,t-1,2,2),i===3&&(n.fillRect(e-1,t,3,1),n.fillRect(e,t-1,1,3)),i===4&&(n.fillRect(e-1,t-2,2,4),n.fillRect(e-2,t-1,4,2)),i===5&&(n.fillRect(e-1,t-2,3,5),n.fillRect(e-2,t-1,5,3)),i===7&&(n.fillRect(e-1,t-3,3,7),n.fillRect(e-3,t-1,7,3),n.fillRect(e-2,t-2,5,5))}class Bn{constructor(){this.previous={x:0,y:0}}onPointerHover(t,i,{canvas:n,brush:o,previewContext:r},s){n&&r&&(V(r),r.fillStyle=s.stroke.value,this.drawBrush(t,i,o,r))}onPointerDown(t,i,{brush:n,context:o},r){o&&(o.fillStyle=r.stroke.value,this.drawBrush(t,i,n,o),this.previous={x:t,y:i})}onPointerMove(t,i,{brush:n,context:o}){if(o){let r={...this.previous};k(this.previous.x,this.previous.y,t,i,(s,a)=>{const l={x:s-r.x,y:a-r.y};this.drawBrush(s,a,n,o,l),r={x:s,y:a}}),this.previous={x:t,y:i}}}drawBrush(t,i,{type:n,size:o},r,s){if(n==="circle")return pi(t,i,o,r);const a=Math.floor(o/2);if(n==="square")return this.drawSquare(t,i,a,o,r);const l=o%2===0?-1:0,p=s?i-Math.min(0,s.y):0;if(n==="forward-diagonal"){if(s&&s.y!==0){const h=s.y===-1&&s.x===-1?t:t-1;this.drawForwardLine(h,p,a,l,r)}this.drawForwardLine(t,i,a,l,r);return}if(n==="backward-diagonal"){if(s&&s.y!==0){const h=s.y===-1&&s.x===1?t:t+1;this.drawBackwardLine(h,p,a,l,r)}this.drawBackwardLine(t,i,a,l,r);return}throw new Error("Unknown brush type.")}drawSquare(t,i,n,o,r){r.fillRect(t-n,i-n,o,o)}drawForwardLine(t,i,n,o,r){const s={x:t-n,y:i+n+o},a={x:t+n+o,y:i-n};k(s.x,s.y,a.x,a.y,(l,p)=>{r.fillRect(l,p,1,1)})}drawBackwardLine(t,i,n,o,r){const s={x:t-n,y:i-n},a={x:t+n+o,y:i+n+o};k(s.x,s.y,a.x,a.y,(l,p)=>{r.fillRect(l,p,1,1)})}}class Ln{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{canvas:n,lineWidth:o,fillStyle:r,previewContext:s},a){n&&s&&this.drawRectangle(t,i,s,s,r,o,a)}onPointerUp(t,i,{canvas:n,context:o,lineWidth:r,fillStyle:s,previewContext:a},l){n&&o&&a&&this.drawRectangle(t,i,o,a,s,r,l)}drawRectangle(t,i,n,o,r,s,a){V(o);const l=Math.min(this.startPosition.x,t),p=Math.max(this.startPosition.x,t),h=Math.min(this.startPosition.y,i),c=Math.max(this.startPosition.y,i),d=Math.abs(p-l),u=Math.abs(c-h);if(r.stroke&&(d<s*2||u<s*2)){n.fillStyle=a.stroke.value,n.fillRect(l,h,d,u);return}r.fill&&(n.fillStyle=a.fill.value,n.fillRect(l,h,d,u)),r.stroke&&(n.fillStyle=a.stroke.value,this.getPointsForLine(l,h,p,c,s).forEach(({x:g,y:v})=>{n.fillRect(g,v,1,1)}))}getPointsForLine(t,i,n,o,r){const s=[];for(let a=0;a<r;a++)k(t+a,i+a,n,i+a,(l,p)=>s.push({x:l,y:p})),k(t+a,i+a,t+a,o,(l,p)=>s.push({x:l,y:p})),k(n-a,o-a,n-a,i,(l,p)=>s.push({x:l,y:p})),k(n-a,o-a,t,o-a,(l,p)=>s.push({x:l,y:p}));return s}}class Rn{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i,{previewContext:n,context:o},r){n&&o&&(this.startPosition={x:t,y:i},n.fillStyle=o.fillStyle=r.stroke.value)}onPointerMove(t,i,{previewContext:n,canvas:o,lineWidth:r}){o&&n&&this.drawLine(t,i,n,n,r)}onPointerUp(t,i,{previewContext:n,context:o,canvas:r,lineWidth:s}){n&&o&&r&&this.drawLine(t,i,o,n,s)}drawLine(t,i,n,o,r){V(o),k(t,i,this.startPosition.x,this.startPosition.y,(s,a)=>{pi(s,a,r,n)})}}function di(e,t,i){i?.dispatchEvent(new CustomEvent("area",{detail:{width:Math.abs(t.x-e.x),height:Math.abs(t.y-e.y)},bubbles:!0,composed:!0}))}function ui(e,t,i){V(i),i?.setLineDash([4]),i?.strokeRect(e.x+.5,e.y+.5,t.x-e.x,t.y-e.y),i?.setLineDash([])}class Fn{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{element:n,previewContext:o}){ui(this.startPosition,{x:t,y:i},o),di(this.startPosition,{x:t,y:i},n)}onPointerUp(t,i,n){const{element:o,previewContext:r}=n;V(r),o?.dispatchEvent(new CustomEvent("area",{bubbles:!0,composed:!0}));const s=t-this.startPosition.x,a=i-this.startPosition.y;n.selection=s===0&&a===0?null:{x:this.startPosition.x,y:this.startPosition.y,width:s,height:a},b(o)}}class Un{constructor(){this.previous={x:0,y:0}}onPointerHover(t,i,{canvas:n,previewContext:o,eraserSize:r,colors:s}){n&&o&&(V(o),t>0&&t<n.width&&i>0&&i<n.height&&(o.fillStyle="black",o.fillRect(...this.getFillRectArgs(t,i,r)),o.fillStyle=s.secondary,o.fillRect(...this.getFillRectArgs(t,i,r-2))))}onPointerDown(t,i,{context:n,eraserSize:o,colors:{secondary:r}}){n&&(n.fillStyle=r,this.previous={x:t,y:i},n.fillRect(...this.getFillRectArgs(t,i,o)))}onPointerMove(t,i,{eraserSize:n,context:o}){k(this.previous.x,this.previous.y,t,i,(r,s)=>{o?.fillRect(...this.getFillRectArgs(r,s,n))}),this.previous={x:t,y:i}}getFillRectArgs(t,i,n){return[t-n/2,i-n/2,n,n]}}class jn{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{fillStyle:n,canvas:o,previewContext:r},s){o&&r&&this.drawEllipse(t,i,n,s,r,r)}onPointerUp(t,i,{fillStyle:n,canvas:o,context:r,previewContext:s},a){o&&r&&s&&this.drawEllipse(t,i,n,a,r,s)}drawEllipse(t,i,n,o,r,s){V(s);const a=[];if(Hn(this.startPosition.x,this.startPosition.y,t,i,(l,p)=>{a.push({x:l,y:p})}),n.fill){r.fillStyle=o.fill.value,a.sort((p,h)=>p.y-h.y||p.x-h.x);const l=this.getFillPixels(a);Array.from(l).forEach(p=>{this.drawPixel(r,p)})}n.stroke&&(r.fillStyle=o.stroke.value),a.forEach(l=>{this.drawPixel(r,l)})}drawPixel(t,{x:i,y:n}){t.fillRect(Math.floor(i),Math.floor(n),1,1)}*getFillPixels(t){let i;for(const n of t){if(i?.y===n.y&&n.x-i.x>1){const o=Math.min(i.x,n.x),r=Math.max(i.x,n.x);for(let s=o;s<=r;s++)yield{x:s,y:n.y}}i=n}}}function Y(e){e.view.textToolbar=e.text.showToolbar&&e.text.active}class fi{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{previewContext:n,element:o}){ui(this.startPosition,{x:t,y:i},n),di(this.startPosition,{x:t,y:i},o)}onPointerUp(t,i,n){V(n.previewContext);const o=n.text.x=Math.min(t,this.startPosition.x),r=n.text.y=Math.min(i,this.startPosition.y),s=Math.max(t,this.startPosition.x),a=Math.max(i,this.startPosition.y),l=s-o,p=a-r;l<10||p<10||(n.element?.dispatchEvent(new CustomEvent("area",{bubbles:!0,composed:!0})),n.text.active=!0,Y(n),n.text.width=l,n.text.height=p,b(n.element))}}const gi={tooltip:"Free-Form Select",helpText:"Selects a free-form part of the picture to move, copy, or edit.",imagePosition:"0 0"},vi={tooltip:"Select",helpText:"Selects a rectangular part of the picture to move, copy, or edit.",imagePosition:"-16px 0",instance:new Fn},te={tooltip:"Eraser/Color Eraser",helpText:"Erases a portion of the picture, using the selected eraser shape.",imagePosition:"-32px 0",instance:new Un,cursor:"none"},In={tooltip:"Fill With Color",helpText:"Fills an area with the current drawing color.",imagePosition:"-48px 0",instance:new Vn},mi={tooltip:"Pick Color",helpText:"Picks up a color from the picture for drawing.",imagePosition:"-64px 0",instance:new Mn},wi={tooltip:"Magnifier",helpText:"Changes the magnification.",imagePosition:"-80px 0"},St={tooltip:"Pencil",helpText:"Draws a free-form line one pixel wide.",imagePosition:"-96px 0",instance:new Dn},ee={tooltip:"Brush",helpText:"Draws using a brush with the selected shape and size.",imagePosition:"-112px 0",instance:new Bn},ie={tooltip:"Airbrush",helpText:"Draws using an airbrush of the selected size.",imagePosition:"-128px 0",instance:new Tn},bi={tooltip:"Text",helpText:"Inserts text into the picture.",imagePosition:"-144px 0",instance:new fi},ne={tooltip:"Line",helpText:"Draws a straight line with the selected line width.",imagePosition:"-160px 0",instance:new Rn},oe={tooltip:"Curve",helpText:"Draws a curved line with the selected line width.",imagePosition:"-176px 0"},re={tooltip:"Rectangle",helpText:"Draws a rectangle with the selected fill style.",imagePosition:"-192px 0",instance:new Ln},se={tooltip:"Polygon",helpText:"Draws a polygon with the selected fill style.",imagePosition:"-208px 0"},xi={tooltip:"Ellipse",helpText:"Draws an ellipse with the selected fill style.",imagePosition:"-224px 0",instance:new jn},ae={tooltip:"Rounded Rectangle",helpText:"Draws a rounded rectangle with the selected fill style.",imagePosition:"-240px 0"},zn=[gi,vi,te,In,mi,wi,St,ee,ie,bi,ne,oe,re,se,xi,ae],yi={primary:"#000000",secondary:"#FFFFFF"},Ai=["#000000","#808080","#800000","#808000","#008000","#008080","#000080","#800080","#808040","#004040","#0080FF","#004080","#4000FF","#804000","#FFFFFF","#C0C0C0","#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FFFF80","#00FF80","#80FFFF","#8080FF","#FF0080","#FF8040"],_={lineWidth:1,colors:{...yi},palette:[...Ai],previewColor:null,drawOpaque:!0,eraserSize:8,magnifierSize:1,previousMagnifierSize:4,brush:{type:"circle",size:4},airbrushSize:9,fillStyle:{stroke:!0,fill:!1},tool:St,previousEditingTool:St,selection:null,view:{statusBar:!0,colorBox:!0,toolBox:!0,textToolbar:!1},document:{title:"untitled",dirty:!1},text:{active:!1,font:"Arial",size:12,showToolbar:!0,bold:!1,italic:!1,underline:!1},element:null,previewCanvas:null,previewContext:null,canvas:null,context:null,history:null},Nn=[8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72],Kn=["Arial","Verdana","Tahoma","Trebuchet MS","Times New Roman","Georgia","Garamond","Courier New","Brush Script MT"];let Ot;async function Xe(){return Ot||Promise.resolve([...Kn])}function qn(){return Ot?!1:"queryLocalFonts"in window?(Ot=Wn(),!0):!1}async function Wn(){const e=[];for await(const t of await window.queryLocalFonts())e.push(t.family);return e.filter((t,i)=>e.indexOf(t)===i)}var Qn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,Ee=(e,t,i,n)=>{for(var o=n>1?void 0:n?Gn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Qn(t,i,o),o};let Tt=class extends w{constructor(){super(...arguments),this.drawingContext=_,this.fonts=[],this.fontSizes=Nn}static get styles(){return x`
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
    `}async firstUpdated(e){super.firstUpdated(e),this.fonts=await Xe(),this.addEventListener("close",()=>{this.drawingContext.text.showToolbar=!1,Y(this.drawingContext),b(this)})}updateFont(e){this.drawingContext.text.font=e.target.value,b(this)}updateSize(e){this.drawingContext.text.size=parseInt(e.target.value),b(this)}toggle(e){this.drawingContext.text[e]=!this.drawingContext.text[e],b(this)}render(){return this.drawingContext.view.textToolbar?f`
      <paint-window caption="Fonts" tool close>
        <div class="content">
          <select
            class="font-list"
            @click="${()=>this.onFontListClick()}"
            @change="${e=>this.updateFont(e)}"
          >
            ${this.fonts.map(e=>f` <option
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
            ${this.fontSizes.map(e=>f` <option
                  value="${e}"
                  ?selected="${e===this.drawingContext.text.size}"
                >
                  ${e}
                </option>`)}
          </select>
          <paint-button @click="${()=>this.toggle("bold")}" tabindex="0">
            B
          </paint-button>
          <paint-button @click="${()=>this.toggle("italic")}" tabindex="0">
            I
          </paint-button>
          <paint-button @click="${()=>this.toggle("underline")}" tabindex="0">
            U
          </paint-button>
        </div>
      </paint-window>
    `:f``}async onFontListClick(){qn()&&(this.fonts=await Xe())}};Ee([m({type:Object})],Tt.prototype,"drawingContext",2);Ee([M()],Tt.prototype,"fonts",2);Tt=Ee([y("paint-dialog-text-toolbar")],Tt);var Xn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,J=(e,t,i,n)=>{for(var o=n>1?void 0:n?Zn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Xn(t,i,o),o};let z=class extends w{constructor(){super(...arguments),this.prompt="",this.title="",this.icon=null,this.layout="ok"}static get styles(){return x`
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
    `}firstUpdated(e){super.firstUpdated(e),requestAnimationFrame(()=>this.window?.center())}render(){return f`
      <paint-window caption="${this.title}" close>
        <div class="content">
          ${this.getIcon()}
          <div class="prompt">${this.prompt}</div>
          <div class="buttons">${this.getDialogLayout()}</div>
        </div>
      </paint-window>
    `}getIcon(){return this.icon==="warning"?f` <img
        class="icon"
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAElBMVEUAAAAAAAAAgACAgIDAwMD//wCJvpKsAAAAAXRSTlMAQObYZgAAAIxJREFUKJFlj9EJAjAMREN1gXy4gf0vZAGhOoCQ7L+KNpWkZ+6vD+71QrRzJ0yzxz+YA0A3LUCwYTYLGNAwlDgQaDBImr35dkq6Ay1ADsUCKQkworGBFiC5W/mV5yywhoVk7TayPMeBZ0uaZWYCtpB4w7/9SQBIKDgkp9MlHYAWIHR9nplfq2CILvAeH0wjUtKxjmmsAAAAAElFTkSuQmCC"
      />`:f``}getDialogLayout(){if(this.layout==="ok")return f` <paint-button
        @click="${()=>this.onClose("ok")}"
        tabindex="0"
        >OK
      </paint-button>`;if(this.layout==="yes-no-cancel")return f`
        <paint-button @click="${()=>this.onClose("yes")}" tabindex="0"
          >${T("Yes","Y")}
        </paint-button>
        <paint-button @click="${()=>this.onClose("no")}" tabindex="0"
          >${T("No","N")}
        </paint-button>
        <paint-button @click="${()=>this.onClose("cancel")}" tabindex="0"
          >Cancel
        </paint-button>
      `;throw new Error("Unsupported Layout.")}onClose(e){this.dispatchEvent(new CustomEvent("close",{detail:e}))}};J([m({type:String})],z.prototype,"prompt",2);J([m({type:String})],z.prototype,"title",2);J([m({type:String})],z.prototype,"icon",2);J([m({type:String})],z.prototype,"layout",2);J([hi("paint-window")],z.prototype,"window",2);z=J([y("paint-dialog-message-box")],z);var Yn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,Ft=(e,t,i,n)=>{for(var o=n>1?void 0:n?Jn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Yn(t,i,o),o};let N=class extends w{constructor(){super(),this.caption="",this.help=!1,this.close=!1,this.position={x:100,y:50},this.mousePosition=null,this.pointerMoveListener=this.onPointerMove.bind(this),this.pointerUpListener=this.onPointerUp.bind(this),document.addEventListener("pointermove",this.pointerMoveListener),document.addEventListener("pointerup",this.pointerUpListener),this.moveWindow()}static get styles(){return x`
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
    `}render(){return f`
      <div class="wrapper">
        <div class="title-bar" @pointerdown="${this.onPointerDown}">
          <span class="title">${this.caption}</span>
          ${this.help?f`<paint-window-title-bar-button
                help
              ></paint-window-title-bar-button>`:""}
          ${this.close?f`<paint-window-title-bar-button
                close
                @click="${this.onClose}"
              ></paint-window-title-bar-button>`:""}
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("pointerup",this.pointerUpListener)}onPointerDown({clientX:e,clientY:t}){this.mousePosition={clientX:e,clientY:t}}onPointerMove({clientX:e,clientY:t}){if(this.mousePosition){e=N.clamp(e,0,innerWidth),t=N.clamp(t,0,innerHeight);const i=e-this.mousePosition.clientX,n=t-this.mousePosition.clientY;this.position.x=this.position.x+i,this.position.y=this.position.y+n,this.mousePosition={clientX:e,clientY:t},this.moveWindow()}}static clamp(e,t,i){return Math.min(Math.max(e,t),i)}onPointerUp(){this.mousePosition=null}center(){const{width:e,height:t}=this.getBoundingClientRect();this.position={x:(innerWidth-e)/2,y:(innerHeight-t)/2},this.moveWindow()}moveWindow(){this.style.transform=`translate(${this.position.x}px, ${this.position.y}px)`}onClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};Ft([m({type:String})],N.prototype,"caption",2);Ft([m({type:Boolean})],N.prototype,"help",2);Ft([m({type:Boolean})],N.prototype,"close",2);N=Ft([y("paint-window")],N);var to=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,_e=(e,t,i,n)=>{for(var o=n>1?void 0:n?eo(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&to(t,i,o),o};let Mt=class extends w{constructor(){super(),this.help=!1,this.close=!1,this.addEventListener("pointerdown",e=>{e.stopPropagation()})}static get styles(){return x`
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
    `}render(){return f` <div class="wrapper">${this.getButton()}</div> `}getButton(){if(this.help)return f`
        <svg viewBox="0 0 6 9" width="6" height="9">
          <path d="M0,1h1V0h4v1h1v2H5v1H4v2H2V4h1V3h1V1H2v2H0V1z" />
          <path d="M2,7h2v2H2V7z" />
        </svg>
      `;if(this.close)return f`
        <svg viewBox="0 0 8 9" width="8" height="9">
          <path
            d="M0,1h2v1h1v1h2V2h1V1h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V7H5V6H3v1H2v1H0V7h1V6h1V5h1V4H2V3H1V2H0V1z"
          />
        </svg>
      `}};_e([m({type:Boolean})],Mt.prototype,"help",2);_e([m({type:Boolean})],Mt.prototype,"close",2);Mt=_e([y("paint-window-title-bar-button")],Mt);const Wt=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Qt(e,t,i,n){e.addEventListener?e.addEventListener(t,i,n):e.attachEvent&&e.attachEvent("on".concat(t),i)}function ot(e,t,i,n){e.removeEventListener?e.removeEventListener(t,i,n):e.detachEvent&&e.detachEvent("on".concat(t),i)}function $i(e,t){const i=t.slice(0,t.length-1);for(let n=0;n<i.length;n++)i[n]=e[i[n].toLowerCase()];return i}function Ci(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let i=t.lastIndexOf("");for(;i>=0;)t[i-1]+=",",t.splice(i,1),i=t.lastIndexOf("");return t}function io(e,t){const i=e.length>=t.length?e:t,n=e.length>=t.length?t:e;let o=!0;for(let r=0;r<i.length;r++)n.indexOf(i[r])===-1&&(o=!1);return o}const pt={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Wt?173:189,"=":Wt?61:187,";":Wt?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},D={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},rt={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},E={16:!1,18:!1,17:!1,91:!1},C={};for(let e=1;e<20;e++)pt["f".concat(e)]=111+e;let $=[],at=null,Pi="all";const B=new Map,tt=e=>pt[e.toLowerCase()]||D[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),no=e=>Object.keys(pt).find(t=>pt[t]===e),oo=e=>Object.keys(D).find(t=>D[t]===e);function Ei(e){Pi=e||"all"}function dt(){return Pi||"all"}function ro(){return $.slice(0)}function so(){return $.map(e=>no(e)||oo(e)||String.fromCharCode(e))}function ao(){const e=[];return Object.keys(C).forEach(t=>{C[t].forEach(i=>{let{key:n,scope:o,mods:r,shortcut:s}=i;e.push({scope:o,shortcut:s,mods:r,keys:n.split("+").map(a=>tt(a))})})}),e}function lo(e){const t=e.target||e.srcElement,{tagName:i}=t;let n=!0;const o=i==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(o||i==="TEXTAREA"||i==="SELECT")&&!t.readOnly)&&(n=!1),n}function co(e){return typeof e=="string"&&(e=tt(e)),$.indexOf(e)!==-1}function ho(e,t){let i,n;e||(e=dt());for(const o in C)if(Object.prototype.hasOwnProperty.call(C,o))for(i=C[o],n=0;n<i.length;)i[n].scope===e?i.splice(n,1).forEach(s=>{let{element:a}=s;return Se(a)}):n++;dt()===e&&Ei(t||"all")}function po(e){let t=e.keyCode||e.which||e.charCode;e.key&&e.key.toLowerCase()==="capslock"&&(t=tt(e.key));const i=$.indexOf(t);if(i>=0&&$.splice(i,1),e.key&&e.key.toLowerCase()==="meta"&&$.splice(0,$.length),(t===93||t===224)&&(t=91),t in E){E[t]=!1;for(const n in D)D[n]===t&&(L[n]=!1)}}function _i(e){if(typeof e>"u")Object.keys(C).forEach(o=>{Array.isArray(C[o])&&C[o].forEach(r=>xt(r)),delete C[o]}),Se(null);else if(Array.isArray(e))e.forEach(o=>{o.key&&xt(o)});else if(typeof e=="object")e.key&&xt(e);else if(typeof e=="string"){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];let[o,r]=i;typeof o=="function"&&(r=o,o=""),xt({key:e,scope:o,method:r,splitKey:"+"})}}const xt=e=>{let{key:t,scope:i,method:n,splitKey:o="+"}=e;Ci(t).forEach(s=>{const a=s.split(o),l=a.length,p=a[l-1],h=p==="*"?"*":tt(p);if(!C[h])return;i||(i=dt());const c=l>1?$i(D,a):[],d=[];C[h]=C[h].filter(u=>{const v=(n?u.method===n:!0)&&u.scope===i&&io(u.mods,c);return v&&d.push(u.element),!v}),d.forEach(u=>Se(u))})};function Ze(e,t,i,n){if(t.element!==n)return;let o;if(t.scope===i||t.scope==="all"){o=t.mods.length>0;for(const r in E)Object.prototype.hasOwnProperty.call(E,r)&&(!E[r]&&t.mods.indexOf(+r)>-1||E[r]&&t.mods.indexOf(+r)===-1)&&(o=!1);(t.mods.length===0&&!E[16]&&!E[18]&&!E[17]&&!E[91]||o||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat($),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function Ye(e,t){const i=C["*"];let n=e.keyCode||e.which||e.charCode;if(e.key&&e.key.toLowerCase()==="capslock"||!L.filter.call(this,e))return;if((n===93||n===224)&&(n=91),$.indexOf(n)===-1&&n!==229&&$.push(n),["metaKey","ctrlKey","altKey","shiftKey"].forEach(a=>{const l=rt[a];e[a]&&$.indexOf(l)===-1?$.push(l):!e[a]&&$.indexOf(l)>-1?$.splice($.indexOf(l),1):a==="metaKey"&&e[a]&&($=$.filter(p=>p in rt||p===n))}),n in E){E[n]=!0;for(const a in D)if(Object.prototype.hasOwnProperty.call(D,a)){const l=rt[D[a]];L[a]=e[l]}if(!i)return}for(const a in E)Object.prototype.hasOwnProperty.call(E,a)&&(E[a]=e[rt[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&($.indexOf(17)===-1&&$.push(17),$.indexOf(18)===-1&&$.push(18),E[17]=!0,E[18]=!0);const o=dt();if(i)for(let a=0;a<i.length;a++)i[a].scope===o&&(e.type==="keydown"&&i[a].keydown||e.type==="keyup"&&i[a].keyup)&&Ze(e,i[a],o,t);if(!(n in C))return;const r=C[n],s=r.length;for(let a=0;a<s;a++)if((e.type==="keydown"&&r[a].keydown||e.type==="keyup"&&r[a].keyup)&&r[a].key){const l=r[a],{splitKey:p}=l,h=l.key.split(p),c=[];for(let d=0;d<h.length;d++)c.push(tt(h[d]));c.sort().join("")===$.sort().join("")&&Ze(e,l,o,t)}}function L(e,t,i){$=[];const n=Ci(e);let o=[],r="all",s=document,a=0,l=!1,p=!0,h="+",c=!1,d=!1;for(i===void 0&&typeof t=="function"&&(i=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(r=t.scope),t.element&&(s=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(p=t.keydown),t.capture!==void 0&&(c=t.capture),typeof t.splitKey=="string"&&(h=t.splitKey),t.single===!0&&(d=!0)),typeof t=="string"&&(r=t),d&&_i(e,r);a<n.length;a++)e=n[a].split(h),o=[],e.length>1&&(o=$i(D,e)),e=e[e.length-1],e=e==="*"?"*":tt(e),e in C||(C[e]=[]),C[e].push({keyup:l,keydown:p,scope:r,mods:o,shortcut:n[a],method:i,key:n[a],splitKey:h,element:s});if(typeof s<"u"&&window){if(!B.has(s)){const u=function(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;return Ye(v,s)},g=function(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;Ye(v,s),po(v)};B.set(s,{keydownListener:u,keyupListenr:g,capture:c}),Qt(s,"keydown",u,c),Qt(s,"keyup",g,c)}if(!at){const u=()=>{$=[]};at={listener:u,capture:c},Qt(window,"focus",u,c)}}}function uo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(C).forEach(i=>{C[i].filter(o=>o.scope===t&&o.shortcut===e).forEach(o=>{o&&o.method&&o.method()})})}function Se(e){const t=Object.values(C).flat();if(t.findIndex(n=>{let{element:o}=n;return o===e})<0){const{keydownListener:n,keyupListenr:o,capture:r}=B.get(e)||{};n&&o&&(ot(e,"keyup",o,r),ot(e,"keydown",n,r),B.delete(e))}if((t.length<=0||B.size<=0)&&(Object.keys(B).forEach(o=>{const{keydownListener:r,keyupListenr:s,capture:a}=B.get(o)||{};r&&s&&(ot(o,"keyup",s,a),ot(o,"keydown",r,a),B.delete(o))}),B.clear(),Object.keys(C).forEach(o=>delete C[o]),at)){const{listener:o,capture:r}=at;ot(window,"focus",o,r),at=null}}const Gt={getPressedKeyString:so,setScope:Ei,getScope:dt,deleteScope:ho,getPressedKeyCodes:ro,getAllKeyCodes:ao,isPressed:co,filter:lo,trigger:uo,unbind:_i,keyMap:pt,modifier:D,modifierMap:rt};for(const e in Gt)Object.prototype.hasOwnProperty.call(Gt,e)&&(L[e]=Gt[e]);if(typeof window<"u"){const e=window.hotkeys;L.noConflict=t=>(t&&window.hotkeys===L&&(window.hotkeys=e),L),window.hotkeys=L}function fo(e){e.magnifierSize!==1&&e.tool.instance instanceof fi&&(e.tool=e.previousEditingTool,e.text.active=!1,Y(e))}function Oe(e){return"createImageBitmap"in self?createImageBitmap(e):new Promise(t=>{const i=new Image;i.onload=()=>{URL.revokeObjectURL(i.src),t(i)},i.src=URL.createObjectURL(e)})}async function Te(e,{canvas:t,previewCanvas:i,context:n}){const o=await Oe(e);t&&i&&n&&(t.width=i.width=o.width,t.height=i.height=o.height,n.fillStyle="white",n.fillRect(0,0,o.width,o.height),n.drawImage(o,0,0))}function go(e){"launchQueue"in window&&window.launchQueue.setConsumer(async t=>{const[i]=t.files;if(i){const n=await i.getFile();e.document.title=n.name,e.document.handle=i,await Te(n,e)}})}const vo=3;class mo{constructor(t){this.drawingContext=t,this.stack=[],this.stackPointer=-1}clear(){this.stack.length=0,this.stackPointer=-1}commit(){this.drawingContext.document.dirty=!0,this.stack.splice(this.stackPointer+1),this.stack.length===vo+1&&this.stack.shift();const{canvas:t,context:i}=this.drawingContext,n=t?.width??0,o=t?.height??0,r=i?.getImageData(0,0,n,o);if(o&&n&&r){const s=this.stack.push({height:o,width:n,imageData:r});this.stackPointer=s-1}b(this.drawingContext.element)}undo(){if(!this.canUndo())throw new Error("No actions to undo.");this.stackPointer--,this.restoreEntry()}redo(){if(!this.canRedo())throw new Error("No actions to redo.");this.stackPointer++,this.restoreEntry()}restoreEntry(){const{height:t,width:i,imageData:n}=this.stack[this.stackPointer],{canvas:o,previewCanvas:r,context:s}=this.drawingContext;o&&r&&s&&(o.height=r.height=t,o.width=r.width=i,s.putImageData(n,0,0)),b(this.drawingContext.element)}canUndo(){return this.stackPointer>0}canRedo(){return this.stackPointer>=0&&this.stackPointer<this.stack.length-1}}function wo(e){return e=e.replace(/(Ctrl\+(\S+))/g,"$1,⌘+$2"),e=e.replace(/Shft/g,"shift"),e=e.replace(/PgUp/g,"pageup"),e=e.replace(/PgDn/g,"pagedown"),e}function Ut(e,t,{document:i,element:n}){i.handle=e,i.title=t,b(n)}function bo(e){e.addEventListener("dragover",t=>{t.preventDefault()}),e.addEventListener("drop",async t=>{t.preventDefault();const{drawingContext:i}=e,n=[...t.dataTransfer?.items??[]].filter(({kind:o})=>o==="file");for(const o of n){const r=await o.getAsFileSystemHandle();if(!r||!xo(r))continue;const s=await r.getFile();await Te(s,i),Ut(r,r.name,i);return}})}function xo(e){return e.kind==="file"}class Si{canExecute({selection:t}){return!!t}execute({selection:t,context:i,colors:n}){if(t&&i){i.fillStyle=n.secondary;const{x:o,y:r,width:s,height:a}=t;i.fillRect(o,r,s,a)}}}function jt(e){return new Promise((t,i)=>{e.toBlob(n=>{n?t(n):i("Blob callback returned null!")})})}async function Oi(e,{x:t,y:i,width:n,height:o}){const r=e.getImageData(t,i,n,o),s=document.createElement("canvas");return s.width=n,s.height=o,s.getContext("2d")?.putImageData(r,0,0),jt(s)}class Ti{canExecute({selection:t}){return"write"in navigator.clipboard&&!!t}async execute({context:t,selection:i}){t&&i&&await navigator.clipboard.write([new ClipboardItem({"image/png":Oi(t,i)})])}}const Me=(()=>{if(typeof self>"u")return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch{return!1}return"showOpenFilePicker"in self})(),yo=Me?Promise.resolve().then(function(){return Po}):Promise.resolve().then(function(){return Mo});async function He(...e){return(await yo).default(...e)}Me?Promise.resolve().then(function(){return _o}):Promise.resolve().then(function(){return Do});const Ao=Me?Promise.resolve().then(function(){return Oo}):Promise.resolve().then(function(){return Vo});async function It(...e){return(await Ao).default(...e)}const $o=async e=>{const t=await e.getFile();return t.handle=e,t};var Co=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const t=[];e.forEach((o,r)=>{t[r]={description:o.description||"Files",accept:{}},o.mimeTypes?o.mimeTypes.map(s=>{t[r].accept[s]=o.extensions||[]}):t[r].accept["*/*"]=o.extensions||[]});const i=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),n=await Promise.all(i.map($o));return e[0].multiple?n:n[0]},Po={__proto__:null,default:Co};function At(e){function t(i){if(Object(i)!==i)return Promise.reject(new TypeError(i+" is not an object."));var n=i.done;return Promise.resolve(i.value).then(function(o){return{value:o,done:n}})}return At=function(i){this.s=i,this.n=i.next},At.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(i){var n=this.s.return;return n===void 0?Promise.resolve({value:i,done:!0}):t(n.apply(this.s,arguments))},throw:function(i){var n=this.s.return;return n===void 0?Promise.reject(i):t(n.apply(this.s,arguments))}},new At(e)}const Mi=async(e,t,i=e.name,n)=>{const o=[],r=[];var s,a=!1,l=!1;try{for(var p,h=(function(c){var d,u,g,v=2;for(typeof Symbol<"u"&&(u=Symbol.asyncIterator,g=Symbol.iterator);v--;){if(u&&(d=c[u])!=null)return d.call(c);if(g&&(d=c[g])!=null)return new At(d.call(c));u="@@asyncIterator",g="@@iterator"}throw new TypeError("Object is not async iterable")})(e.values());a=!(p=await h.next()).done;a=!1){const c=p.value,d=`${i}/${c.name}`;c.kind==="file"?r.push(c.getFile().then(u=>(u.directoryHandle=e,u.handle=c,Object.defineProperty(u,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>d})))):c.kind!=="directory"||!t||n&&n(c)||o.push(Mi(c,t,d,n))}}catch(c){l=!0,s=c}finally{try{a&&h.return!=null&&await h.return()}finally{if(l)throw s}}return[...(await Promise.all(o)).flat(),...await Promise.all(r)]};var Eo=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await t.values()).next()).done?[t]:Mi(t,e.recursive,void 0,e.skipDirectory)},_o={__proto__:null,default:Eo},So=async(e,t=[{}],i=null,n=!1,o=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const r=[];let s=null;if(e instanceof Blob&&e.type?s=e.type:e.headers&&e.headers.get("content-type")&&(s=e.headers.get("content-type")),t.forEach((p,h)=>{r[h]={description:p.description||"Files",accept:{}},p.mimeTypes?(h===0&&s&&p.mimeTypes.push(s),p.mimeTypes.map(c=>{r[h].accept[c]=p.extensions||[]})):s?r[h].accept[s]=p.extensions||[]:r[h].accept["*/*"]=p.extensions||[]}),i)try{await i.getFile()}catch(p){if(i=null,n)throw p}const a=i||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:r,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!i&&o&&o(a);const l=await a.createWritable();return"stream"in e?(await e.stream().pipeTo(l),a):"body"in e?(await e.body.pipeTo(l),a):(await l.write(await e),await l.close(),a)},Oo={__proto__:null,default:So},To=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,i)=>{const n=document.createElement("input");n.type="file";const o=[...e.map(r=>r.mimeTypes||[]),...e.map(r=>r.extensions||[])].join();n.multiple=e[0].multiple||!1,n.accept=o||"",n.style.display="none",document.body.append(n),n.addEventListener("cancel",()=>{n.remove(),i(new DOMException("The user aborted a request.","AbortError"))}),n.addEventListener("change",()=>{n.remove(),t(n.multiple?Array.from(n.files):n.files[0])}),"showPicker"in HTMLInputElement.prototype?n.showPicker():n.click()})),Mo={__proto__:null,default:To},Ho=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,i)=>{const n=document.createElement("input");n.type="file",n.webkitdirectory=!0,n.style.display="none",document.body.append(n),n.addEventListener("cancel",()=>{n.remove(),i(new DOMException("The user aborted a request.","AbortError"))}),n.addEventListener("change",()=>{n.remove();let o=Array.from(n.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(o=o.filter(r=>r.webkitRelativePath.split("/").every(s=>!e[0].skipDirectory({name:s,kind:"directory"})))):o=o.filter(r=>r.webkitRelativePath.split("/").length===2),t(o)}),"showPicker"in HTMLInputElement.prototype?n.showPicker():n.click()})),Do={__proto__:null,default:Ho},ko=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);const i=document.createElement("a");let n=e;"body"in e&&(n=await(async function(s,a){const l=s.getReader(),p=new ReadableStream({start:d=>(async function u(){return l.read().then(({done:g,value:v})=>{if(!g)return d.enqueue(v),u();d.close()})})()}),h=new Response(p),c=await h.blob();return l.releaseLock(),new Blob([c],{type:a})})(e.body,e.headers.get("content-type"))),i.download=t.fileName||"Untitled",i.href=URL.createObjectURL(await n);const o=()=>{typeof r=="function"&&r()},r=t.legacySetup&&t.legacySetup(o,()=>r(),i);return i.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(i.href),3e4),o()}),i.click(),null},Vo={__proto__:null,default:ko};class Bo{canExecute({selection:t}){return!!t}async execute({context:t,selection:i}){if(t&&i){const n=await Oi(t,i);await It(n)}}}class Lo{constructor(){this.copy=new Ti,this.clearSelection=new Si}canExecute(t){return this.copy.canExecute(t)&&this.clearSelection.canExecute(t)}async execute(t){await this.copy.execute(t),this.clearSelection.execute(t)}}class Ro{canExecute(){return!!navigator.clipboard?.read}async execute({context:t}){if(t){const i=await navigator.clipboard.read();for(const n of i)try{for(const o of n.types)if(o.match(/^image\//)){const r=await n.getType(o),s=await Oe(r);t.drawImage(s,0,0)}}catch(o){console.error("Clipboard API paste error",o)}}}}class Fo{async execute({context:t}){if(t){const i=await He(),n=await Oe(i);t.drawImage(n,0,0)}}}class Uo{canExecute(t){return t?.history?.canRedo()??!1}execute(t){t?.history?.redo()}}class jo{execute(t){if(t.canvas){const{width:i,height:n}=t.canvas;t.selection={x:0,y:0,width:i,height:n},b(t.element)}}}class Io{canExecute(t){return t?.history?.canUndo()??!1}execute(t){t?.history?.undo()}}const zo={caption:"Edit",mnemonic:"E",helpText:"",entries:[{caption:"Undo",mnemonic:"U",shortcut:"Ctrl+Z",helpText:"Undoes the last action.",instance:new Io},{caption:"Repeat",mnemonic:"R",shortcut:"F4",helpText:"Redoes the previously undone action.",instance:new Uo},{separator:!0},{caption:"Cut",mnemonic:"t",shortcut:"Ctrl+X",helpText:"Cuts the selection and puts it on the Clipboard.",instance:new Lo},{caption:"Copy",mnemonic:"C",shortcut:"Ctrl+C",helpText:"Copies the selection and puts it on the Clipboard.",instance:new Ti},{caption:"Paste",mnemonic:"P",shortcut:"Ctrl+V",helpText:"Inserts the contents of the Clipboard.",instance:new Ro},{caption:"Clear Selection",mnemonic:"l",shortcut:"Del",helpText:"Deletes the selection.",instance:new Si},{caption:"Select All",mnemonic:"A",shortcut:"Ctrl+L",helpText:"Selects everything.",instance:new jo},{separator:!0},{caption:"Copy To…",mnemonic:"o",helpText:"Copies the selection to a file.",instance:new Bo},{caption:"Paste From…",mnemonic:"F",helpText:"Pastes a file into the selection.",instance:new Fo}]};class Hi{async execute(t){if(!t.canvas)return;const i=await jt(t.canvas),n=await It(i,{fileName:t.document.title,extensions:[".png"],description:"PNG files"});n&&Ut(n,n.name,t)}}class Di{async execute(t){if(t.canvas&&t.document.handle){const i=await jt(t.canvas);await It(i,void 0,t.document.handle)}else await new Hi().execute(t)}}async function ki(e){if(!e.document.dirty)return;const t=await Rt(`Save changes to ${e.document.title}?`,"warning","Paint","yes-no-cancel");if(t==="cancel")throw Error("User cancelled operation.");t==="yes"&&await new Di().execute(e)}class No{async execute(t){try{await ki(t),t.document.dirty=!1,window.close()}catch{}}}function De({canvas:e,context:t,colors:i,history:n},o=!0){e&&t&&n&&(t.fillStyle=i.secondary,t.fillRect(0,0,e.width,e.height),o&&n.commit())}class Vi{canExecute({selection:t}){return!t}execute(t){De(t)}}class Ko{async execute(t){try{await ki(t),Ut(void 0,"untitled",t),t.palette=[...Ai],t.colors={...yi},t.history?.clear(),new Vi().execute(t),t.document.dirty=!1}catch{}}}class qo{async execute(t){const i=await He({extensions:[".png"],description:"PNG Files"});Ut(i.handle,i.name,t),await Te(i,t)}}class Xt{execute(){window.print()}}class Wo{constructor(){this.fakePng=this.getFileFromPngBlob(new Blob,"fake.png")}canExecute(){return!!navigator.canShare&&navigator.canShare({files:[this.fakePng]})}async execute({canvas:t,document:i}){if(t){const n=await jt(t);await navigator.share({files:[this.getFileFromPngBlob(n,`${i.title}.png`)],title:i.title})}}getFileFromPngBlob(t,i){return new File([t],i,{type:"image/png"})}}const Qo={caption:"File",mnemonic:"F",helpText:"",entries:[{caption:"New",mnemonic:"N",shortcut:"Ctrl+N",helpText:"Creates a new document.",instance:new Ko},{caption:"Open…",mnemonic:"O",shortcut:"Ctrl+O",helpText:"Opens an existing document.",instance:new qo},{caption:"Save",mnemonic:"S",shortcut:"Ctrl+S",helpText:"Saves the active document.",instance:new Di},{caption:"Save As…",mnemonic:"A",helpText:"Saves the active document with a new name.",instance:new Hi},{separator:!0},{caption:"Print Preview",mnemonic:"v",helpText:"Displays full pages.",instance:new Xt},{caption:"Page Setup…",mnemonic:"t",helpText:"Changes the page layout.",instance:new Xt},{caption:"Print…",mnemonic:"P",shortcut:"Ctrl+P",helpText:"Prints the active document and sets printing options.",instance:new Xt},{separator:!0},{caption:"Send…",mnemonic:"e",helpText:"Sends a picture by using mail or fax.",instance:new Wo},{separator:!0},{caption:"Set As Wallpaper (Tiled)",mnemonic:"W",helpText:"Tiles this bitmap as the desktop wallpaper.",instance:null},{caption:"Set As Wallpaper (Centered)",mnemonic:"l",helpText:"Centers this bitmap as the desktop wallpaper.",instance:null},{separator:!0},{caption:"Recent File",instance:null,helpText:"Opens this document."},{separator:!0},{caption:"Exit",mnemonic:"x",shortcut:"Alt+F4",helpText:"Quits Paint.",instance:new No}]};class Go{execute(){mt("paint-dialog-about")}}const Xo={caption:"Help",mnemonic:"H",helpText:"",entries:[{caption:"Help Topics",mnemonic:"H",helpText:"Displays Help for the current task or command."},{separator:!0},{caption:"About Paint",mnemonic:"A",helpText:"Displays program information, version number, and copyright.",instance:new Go}]};class Zo{async execute(t){const{previewCanvas:i,context:n}=t;if(!i||!n)return;const{canvas:o}=n,r=await mt("paint-dialog-attributes",{width:o.width.toString(),height:o.height.toString(),unit:"pels",color:"colors"});if(!r)return;const s=parseInt(r.width,10),a=parseInt(r.height,10);if(!this.isValidValue(s)||!this.isValidValue(a)){await Rt("Bitmaps must be greater than one pixel on a side.","warning","Paint");return}const l=n.getImageData(0,0,o.width,o.height);o.width=i.width=s,o.height=i.height=a,De(t,!1),n.putImageData(l,0,0),t.history?.commit()}isValidValue(t){return isFinite(t)&&t>0}}class Yo{execute({canvas:t,context:i,selection:n,history:o}){if(i&&t){const r=i.globalCompositeOperation;i.globalCompositeOperation="difference",i.fillStyle="white",n?i.fillRect(n.x,n.y,n.width,n.height):i.fillRect(0,0,t.width,t.height),i.globalCompositeOperation=r,o?.commit()}}}class H{async execute({context:t,canvas:i,previewCanvas:n,history:o}){const r=await mt("paint-dialog-flip-and-rotate");!r||!i||!t||!n||!o||H.flipOrRotate(r,i,n,t,o)}static flipOrRotate(t,i,n,o,r){const s=H.cloneCanvas(i);t.action==="flip"?H.flip(t.param,i,o):t.action==="rotate"&&H.rotate(t.param,i,n,o),o.drawImage(s,0,0),o.setTransform(1,0,0,1,0,0),r.commit()}static cloneCanvas(t){const i=document.createElement("canvas");return i.width=t.width,i.height=t.height,i.getContext("2d")?.drawImage(t,0,0),i}static flip(t,i,n){t==="horizontal"?(n.translate(i.width,0),n.scale(-1,1)):t==="vertical"&&(n.translate(0,i.height),n.scale(1,-1))}static rotate(t,i,n,o){t===90?(H.rotateCanvas(i,n),o.translate(i.width,0),o.rotate(H.getRadianAngle(90))):t===180?(o.translate(i.width,i.height),o.rotate(H.getRadianAngle(180))):t===270&&(H.rotateCanvas(i,n),o.translate(0,i.height),o.rotate(H.getRadianAngle(270)))}static rotateCanvas(t,i){const{height:n,width:o}=t;t.height=i.height=o,t.width=i.width=n}static getRadianAngle(t){return t*Math.PI/180}}const Jo={caption:"Image",mnemonic:"I",helpText:"",entries:[{caption:"Flip/Rotate…",mnemonic:"F",helpText:"Flips or rotates the picture or a selection.",instance:new H},{caption:"Stretch/Skew…",mnemonic:"S",shortcut:"Ctrl+W",helpText:"Stretches or skews the picture or a selection."},{caption:"Invert Colors",mnemonic:"I",shortcut:"Ctrl+I",helpText:"Inverts the colors of the picture or a selection.",instance:new Yo},{caption:"Attributes…",mnemonic:"A",shortcut:"Ctrl+E",helpText:"Changes the attributes of the picture.",instance:new Zo},{caption:"Clear Image",mnemonic:"C",shortcut:"Ctrl+Shft+N",helpText:"Clears the picture or selection.",instance:new Vi}]};class tr{async execute({palette:t}){const i=t.length,n=4+i*4,o=24+i*4,r=new ArrayBuffer(o),s=new Uint8Array(r),a=new DataView(r),l=new TextEncoder;s.set(l.encode("RIFF")),a.setUint32(4,o-8,!0),s.set(l.encode("PAL "),8),s.set(l.encode("data"),12),a.setUint32(16,n,!0),a.setUint16(20,768,!0),a.setUint16(22,i,!0);const h=document.createElement("canvas").getContext("2d");for(let d=0;d<i;d++){h.fillStyle=t[d],h.fillRect(0,0,1,1);const[u,g,v]=h.getImageData(0,0,1,1).data,A=24+d*4;a.setUint8(A,u),a.setUint8(A+1,g),a.setUint8(A+2,v),a.setUint8(A+3,0)}const c=new Blob([r],{type:"application/octet-stream"});await It(c,{fileName:"untitled.pal",extensions:[".pal"],description:"Palette"})}}class er{async execute(t){try{const i=await He({extensions:[".pal"],description:"Palette"});await this.updateContextFromFile(i,t)}catch{}}async updateContextFromFile(t,i){try{const n=await t.arrayBuffer();this.readPalette(n).forEach((o,r)=>i.palette[r]=o),b(i.element)}catch{await Rt(`${t.name}
Paint cannot open this file.
This file is not in the correct format.`,"warning","Paint")}}readPalette(t){const i=new DataView(t),n=new TextDecoder;if(n.decode(t.slice(0,4))!=="RIFF")throw new Error("Non-RIFF palettes are not supported.");if(n.decode(t.slice(8,12))!=="PAL ")throw new Error("Only PAL form types are supported.");if(n.decode(t.slice(12,16))!=="data")throw new Error("Expected a data chunk.");const a=[],l=i.getUint16(22,!0);for(let p=0;p<l;p++){const h=24+p*4,c=i.getUint8(h),d=i.getUint8(h+1),u=i.getUint8(h+2);a.push(`rgb(${c} ${d} ${u})`)}return a.slice(0,26)}}class ir{isChecked({drawOpaque:t}){return t}execute(t){t.drawOpaque=!t.drawOpaque,b(t.element)}}const nr={caption:"Options",mnemonic:"O",helpText:"",entries:[{caption:"Edit Colors…",mnemonic:"E",helpText:"Creates a new color."},{caption:"Get Colors…",mnemonic:"G",helpText:"Uses a previously saved palette of colors.",instance:new er},{caption:"Save Colors…",mnemonic:"S",helpText:"Saves the current palette of colors to a file.",instance:new tr},{caption:"Draw Opaque",mnemonic:"D",helpText:"Makes the current selection either opaque or transparent.",instance:new ir}]};class or{async execute(t){const i=await mt("paint-dialog-custom-zoom",{currentMagnifierSize:t.magnifierSize});i?.magnifierSize&&(t.magnifierSize=i.magnifierSize,b(t.element))}}class rr{execute(t){t.magnifierSize=4,b(t.element)}}class sr{execute(t){t.magnifierSize=1,b(t.element)}}class ar{isChecked(t){return t.text.showToolbar??!1}canExecute(t){return t.text.active}execute(t){t.text.showToolbar=!t.text.showToolbar,Y(t),b(t.element)}}class lr{async execute({canvas:t}){t&&await t.requestFullscreen()}}class cr{isChecked({view:{statusBar:t}}){return t}execute(t){t.view.statusBar=!t.view.statusBar,b(t.element)}}class hr{isChecked({view:{toolBox:t}}){return t}execute(t){t.view.toolBox=!t.view.toolBox,b(t.element)}}class pr{isChecked({view:{colorBox:t}}){return t}execute(t){t.view.colorBox=!t.view.colorBox,b(t.element)}}const dr={caption:"View",mnemonic:"V",helpText:"",entries:[{caption:"Tool Box",shortcut:"Ctrl+T",mnemonic:"T",helpText:"Shows or hides the tool box.",instance:new hr},{caption:"Color Box",shortcut:"Ctrl+A",mnemonic:"C",helpText:"Shows or hides the color box.",instance:new pr},{caption:"Status Bar",mnemonic:"S",helpText:"Shows or hides the status bar.",instance:new cr},{separator:!0},{caption:"Zoom",mnemonic:"Z",helpText:"",entries:[{caption:"Normal Size",mnemonic:"N",shortcut:"Ctrl+PgUp",helpText:"Zooms the picture to 100%.",instance:new sr},{caption:"Large Size",mnemonic:"L",shortcut:"Ctrl+PgDn",helpText:"Zooms the picture to 400%.",instance:new rr},{caption:"Custom…",mnemonic:"u",helpText:"Zooms the picture.",instance:new or},{separator:!0},{caption:"Show Grid",mnemonic:"G",shortcut:"Ctrl+G",helpText:"Shows or hides the grid."},{caption:"Show Thumbnail",mnemonic:"h",helpText:"Shows or hides the thumbnail view of the picture."}]},{caption:"View Bitmap",mnemonic:"V",shortcut:"Ctrl+F",helpText:"Displays the entire picture.",instance:new lr},{caption:"Text Toolbar",mnemonic:"e",helpText:"Shows or hides the text toolbar.",instance:new ar}]},Je=[Qo,zo,dr,Jo,nr,Xo];var ur=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,bt=(e,t,i,n)=>{for(var o=n>1?void 0:n?fr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&ur(t,i,o),o};const Zt="For Help, click Help Topics on the Help Menu.";let Z=class extends w{constructor(){super(),this.areaText="",this.coordinateText="",this.helpText=Zt,this.drawingContext=_,this.previousTitle="",this.areaText="",this.coordinateText="",this.helpText=Zt,this.drawingContext=_,this.drawingContext.history=new mo(this.drawingContext),this.addEventListener("set-help-text",(e=>{this.helpText=e.detail??Zt})),this.addEventListener("coordinate",(e=>{this.coordinateText=e.detail?`${e.detail.x},${e.detail.y}`:""})),this.addEventListener("area",(e=>{this.areaText=e.detail?`${e.detail.width}x${e.detail.height}`:""})),this.addEventListener("drawing-context-changed",(e=>{const t=e.detail;fo(t),this.drawingContext=t})),this.addEventListener("invoke-action",(e=>{e.detail(this.drawingContext)})),this.addEventListener("canvas-ready",()=>go(this.drawingContext)),this.beforeUnloadListener=this.onBeforeUnload.bind(this),window.addEventListener("beforeunload",this.beforeUnloadListener),bo(this),this.registerHotkeys(Je)}static get styles(){return x`
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

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
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
    `}registerHotkeys(e){e.filter(t=>!("separator"in t&&t.separator)).forEach(t=>{"entries"in t&&Array.isArray(t.entries)&&this.registerHotkeys(t.entries),"shortcut"in t&&typeof t.shortcut=="string"&&L(wo(t.shortcut),()=>(this.canActionExecute(t,this.drawingContext)&&this.dispatchEvent(new CustomEvent("invoke-action",{detail:t.instance?.execute.bind(t.instance),bubbles:!0,composed:!0})),!1))})}canActionExecute(e,t){return e.instance?e.instance.canExecute?e.instance.canExecute(t):!0:!1}render(){return this.dispatchTitleChangeEvent(),f`
      <paint-menu-bar
        .entries="${Je}"
        .drawingContext="${this.drawingContext}"
      ></paint-menu-bar>
      <div>
        ${this.drawingContext.view.toolBox?f` <paint-tool-bar>
              <paint-ruler></paint-ruler>
              <paint-tool-box
                .drawingContext="${this.drawingContext}"
              ></paint-tool-box>
              <paint-ruler></paint-ruler>
            </paint-tool-bar>`:""}
        <paint-canvas .drawingContext="${this.drawingContext}"></paint-canvas>
      </div>
      ${this.drawingContext.view.colorBox?f` <paint-tool-bar class="color-box">
            <paint-color-box .drawingContext="${this.drawingContext}">
            </paint-color-box>
            <paint-ruler></paint-ruler>
          </paint-tool-bar>`:""}
      ${this.drawingContext.view.statusBar?f` <paint-status-bar
            helpText="${this.helpText}"
            coordinateText="${this.coordinateText}"
            areaText="${this.areaText}"
          ></paint-status-bar>`:""}
      ${this.drawingContext.view.textToolbar?f` <paint-dialog-text-toolbar
            .drawingContext="${this.drawingContext}"
          ></paint-dialog-text-toolbar>`:""}
    `}dispatchTitleChangeEvent(){this.previousTitle!==this.drawingContext.document.title&&(this.previousTitle=this.drawingContext.document.title,this.dispatchEvent(new CustomEvent("titlechange",{detail:{title:this.drawingContext.document.title},composed:!0,bubbles:!0})))}onBeforeUnload(e){this.drawingContext.document.dirty&&(e.preventDefault(),e.returnValue="")}disconnectedCallback(){super.disconnectedCallback(),this.beforeUnloadListener&&window.removeEventListener("beforeunload",this.beforeUnloadListener)}};bt([M()],Z.prototype,"areaText",2);bt([M()],Z.prototype,"coordinateText",2);bt([M()],Z.prototype,"helpText",2);bt([M()],Z.prototype,"drawingContext",2);Z=bt([y("paint-app")],Z);var gr=Object.getOwnPropertyDescriptor,vr=(e,t,i,n)=>{for(var o=n>1?void 0:n?gr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let ti=class extends w{static get styles(){return x`
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
    `}constructor(){super(),this.addEventListener("keydown",e=>{["Space","Enter"].includes(e.code)&&this.dispatchEvent(new MouseEvent("click"))})}render(){return f` <div class="inline-border">
      <div class="focus-border">
        <slot></slot>
      </div>
    </div>`}};ti=vr([y("paint-button")],ti);var mr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,et=(e,t,i,n)=>{for(var o=n>1?void 0:n?wr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&mr(t,i,o),o};let K=class extends w{constructor(){super(...arguments),this.drawingContext=_,this.inCanvas=!1,this.canvasWidth=screen.width,this.canvasHeight=screen.height,this.pointerDown=!1,this.previewColor="primary",this.lastPointerEventTime=0}static get styles(){return x`
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
      paint-text-area {
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
    `}render(){return this.tool=this.drawingContext.tool.instance,f`
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
    `}firstUpdated(){if(!this.shadowRoot)throw new Error("Shadow root not present.");const e=this.shadowRoot.querySelector("canvas.main"),t=this.shadowRoot.querySelector("canvas.preview"),i=e.getContext("2d",{desynchronized:!0}),n=t.getContext("2d",{desynchronized:!0});if(!i||!n)throw new Error("Canvas context not present.");i.imageSmoothingEnabled=!1,this.drawingContext.canvas=e,this.drawingContext.context=i,this.drawingContext.previewCanvas=t,this.drawingContext.previewContext=n,this.drawingContext.element=this,De(this.drawingContext),this.drawingContext.document.dirty=!1,b(this),document.addEventListener("pointermove",o=>this.throttledPointerMove(o)),document.addEventListener("pointerup",o=>this.onPointerUp(o)),this.dispatchEvent(new CustomEvent("canvas-ready",{bubbles:!0,composed:!0}))}throttledPointerMove(e){const t=Date.now();t-this.lastPointerEventTime<8||(this.lastPointerEventTime=t,this.onPointerMove(e))}getToolEventArgs(e,t){const i=this.pointerDown?this.previewColor:"primary",n=i==="primary"?"secondary":"primary",o={stroke:{key:i,value:this.drawingContext.colors[i]},fill:{key:n,value:this.drawingContext.colors[n]}};return[e,t,this.drawingContext,o]}onPointerDown(e){if(this.pointerDown=!0,this.previewColor=e.button!==2?"primary":"secondary",this.drawingContext.text.active=!1,Y(this.drawingContext),b(this),this.tool?.onPointerDown){const{x:t,y:i}=this.getCoordinates(e);this.tool.onPointerDown(...this.getToolEventArgs(t,i))}e.preventDefault()}onPointerMove(e){const{x:t,y:i}=this.getCoordinates(e);this.inCanvas&&this.drawingContext.canvas&&this.dispatchEvent(new CustomEvent("coordinate",{detail:{x:Math.max(0,Math.min(this.drawingContext.canvas.width,t)),y:Math.max(0,Math.min(this.drawingContext.canvas.height,i))},bubbles:!0,composed:!0})),this.tool?.onPointerHover&&this.tool.onPointerHover(...this.getToolEventArgs(t,i)),this.pointerDown&&this.tool?.onPointerMove&&this.tool.onPointerMove(...this.getToolEventArgs(t,i))}onPointerUp(e){if(!this.pointerDown)return;const{x:t,y:i}=this.getCoordinates(e);this.tool?.onPointerUp&&this.tool.onPointerUp(...this.getToolEventArgs(t,i)),this.drawingContext.history?.commit(),this.pointerDown=!1,this.tool?.onPointerHover&&this.tool.onPointerHover(...this.getToolEventArgs(t,i))}onPointerEnter(){this.inCanvas=!0;const{canvas:e,tool:t}=this.drawingContext;e&&(e.style.cursor=t.cursor??"default")}onPointerLeave(){this.inCanvas=!1,this.dispatchEvent(new CustomEvent("coordinate",{bubbles:!0,composed:!0}))}getCoordinates({clientX:e,clientY:t}){if(!this.drawingContext.canvas)throw new Error("Canvas not initialized yet.");const{left:i,top:n}=this.drawingContext.canvas.getBoundingClientRect(),o=Math.floor((e-i)/this.drawingContext.magnifierSize),r=Math.floor((t-n)/this.drawingContext.magnifierSize);return{x:o,y:r}}};et([m()],K.prototype,"drawingContext",2);et([m({attribute:!1})],K.prototype,"inCanvas",2);et([m({attribute:!1})],K.prototype,"tool",2);et([m({attribute:!1})],K.prototype,"canvasWidth",2);et([m({attribute:!1})],K.prototype,"canvasHeight",2);K=et([y("paint-canvas")],K);var br=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Bi=(e,t,i,n)=>{for(var o=n>1?void 0:n?xr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&br(t,i,o),o};let le=class extends w{constructor(){super(...arguments),this.drawingContext=_}static get styles(){return x`
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
    `}render(){return f`
      <paint-color-switcher
        primaryColor="${this.drawingContext.colors.primary}"
        secondaryColor="${this.drawingContext.colors.secondary}"
        @pointerdown="${e=>this.swapColors(e)}"
      >
      </paint-color-switcher>
      ${this.drawingContext.palette.map(e=>f` <paint-color-picker
            color="${e}"
            .drawingContext="${this.drawingContext}"
          >
          </paint-color-picker>`)}
    `}swapColors({pointerType:e}){if(["pen","touch"].includes(e)){const{primary:t,secondary:i}=this.drawingContext.colors;this.drawingContext.colors.primary=i,this.drawingContext.colors.secondary=t,b(this)}}};Bi([m()],le.prototype,"drawingContext",2);le=Bi([y("paint-color-box")],le);var yr=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,ke=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ar(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&yr(t,i,o),o};let Ht=class extends w{constructor(){super(),this.drawingContext=_,this.color="",this.addEventListener("click",()=>{this.dispatchColorEvent("primary")}),this.addEventListener("contextmenu",e=>{this.dispatchColorEvent("secondary"),e.preventDefault()})}static get styles(){return x`
      :host {
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
    `}dispatchColorEvent(e){this.drawingContext.colors[e]=this.color,b(this)}render(){return f`<div
      class="frame"
      style="background-color: ${this.color};"
    ></div>`}};ke([m()],Ht.prototype,"drawingContext",2);ke([m()],Ht.prototype,"color",2);Ht=ke([y("paint-color-picker")],Ht);var $r=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Ve=(e,t,i,n)=>{for(var o=n>1?void 0:n?Cr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&$r(t,i,o),o};let Dt=class extends w{constructor(){super(...arguments),this.primaryColor="",this.secondaryColor=""}static get styles(){return x`
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
    `}render(){return f`
      <div class="frame">
        <div class="color primary">
          <div style="background-color: ${this.primaryColor}"></div>
        </div>
        <div class="color secondary">
          <div style="background-color: ${this.secondaryColor}"></div>
        </div>
      </div>
    `}};Ve([m()],Dt.prototype,"primaryColor",2);Ve([m()],Dt.prototype,"secondaryColor",2);Dt=Ve([y("paint-color-switcher")],Dt);var Pr=Object.getOwnPropertyDescriptor,Er=(e,t,i,n)=>{for(var o=n>1?void 0:n?Pr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let ei=class extends w{static get styles(){return x`
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
    `}render(){return f``}};ei=Er([y("paint-handle")],ei);var _r=Object.getOwnPropertyDescriptor,Sr=(e,t,i,n)=>{for(var o=n>1?void 0:n?_r(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let ii=class extends w{static get styles(){return x`
      :host {
        box-sizing: border-box;
        border: 1px solid var(--button-dark);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);

        display: flex;
        align-items: flex-end;
      }
    `}render(){return f`<slot></slot>`}};ii=Sr([y("paint-inset-container")],ii);var Or=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Be=(e,t,i,n)=>{for(var o=n>1?void 0:n?Tr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Or(t,i,o),o};let kt=class extends w{constructor(){super(),this.entries=[],this.drawingContext=_,this.addEventListener("click",e=>e.stopPropagation())}static get styles(){return x`
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
    `}render(){return f` <div class="frame">
      ${this.entries.map(e=>this.getMenuEntry(e))}
    </div>`}getMenuEntry(e){return"separator"in e?f` <paint-ruler></paint-ruler>`:f`
      <div
        class="menu-entry ${this.isDisabled(e)?"disabled":""}"
        @click="${()=>this.execute(e)}"
        @pointerenter="${()=>this.setHelpText(e.helpText)}"
        @pointerleave="${()=>this.setHelpText()}"
      >
        <span class="selection">
          ${this.isChecked(e)?f` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
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
        <span>${T(e.caption,e.mnemonic)}</span>
        <span class="${e.shortcut?"shortcut":""}"
          >${e.shortcut}</span
        >
        <span class="opener">
          ${e.entries?f` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 7">
                  <path d="M0,0v7h1V6h1V5h1V4h1V3H3V2H2V1H1V0H0z" />
                </svg>
                <paint-menu
                  class="submenu"
                  .entries="${e.entries}"
                  .drawingContext="${this.drawingContext}"
                ></paint-menu>`:""}
        </span>
      </div>
    `}isChecked(e){return!!(e.instance?.isChecked&&e.instance.isChecked(this.drawingContext))}isDisabled({instance:e,entries:t}){return!(t||e&&(!e.canExecute||e.canExecute(this.drawingContext)))}execute(e){!this.isDisabled(e)&&e.instance?.execute&&(this.dispatchEvent(new CustomEvent("invoke-action",{detail:e.instance.execute.bind(e.instance),bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("action-executed",{bubbles:!0,composed:!0})))}setHelpText(e){this.dispatchEvent(new CustomEvent("set-help-text",{detail:e,bubbles:!0,composed:!0}))}};Be([m()],kt.prototype,"entries",2);Be([m()],kt.prototype,"drawingContext",2);kt=Be([y("paint-menu")],kt);var Mr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,zt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Hr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Mr(t,i,o),o};let ut=class extends w{constructor(){super(),this.entries=[],this.drawingContext=_,this.activeMenu=null,document.addEventListener("click",()=>this.activeMenu=null),this.addEventListener("action-executed",()=>this.activeMenu=null)}static get styles(){return x`
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
    `}render(){return f`
      <ul @click="${e=>e.stopPropagation()}">
        ${this.entries.map(e=>f`
            <li
              @click="${()=>this.onClick(e)}"
              @pointerenter="${()=>this.onPointerEnter(e)}"
              @pointerleave="${()=>this.onPointerLeave()}"
              class="${this.activeMenu===e?"active":""}"
            >
              ${T(e.caption,e.mnemonic)}
              <paint-menu
                .entries="${e.entries}"
                .drawingContext="${this.drawingContext}"
              >
              </paint-menu>
            </li>
          `)}
      </ul>
    `}onClick(e){this.activeMenu=this.activeMenu===e?null:e}onPointerEnter(e){this.dispatchEvent(new CustomEvent("set-help-text",{detail:e.helpText,bubbles:!0,composed:!0})),this.activeMenu&&(this.activeMenu=e)}onPointerLeave(){this.dispatchEvent(new CustomEvent("set-help-text",{bubbles:!0,composed:!0}))}};zt([m()],ut.prototype,"entries",2);zt([m()],ut.prototype,"drawingContext",2);zt([m({attribute:!1})],ut.prototype,"activeMenu",2);ut=zt([y("paint-menu-bar")],ut);var Dr=Object.getOwnPropertyDescriptor,kr=(e,t,i,n)=>{for(var o=n>1?void 0:n?Dr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let ni=class extends w{static get styles(){return x`
      :host {
        display: block;
        border-top: 1px solid var(--button-dark);
        border-bottom: 1px solid var(--button-light);
      }
    `}render(){return f``}};ni=kr([y("paint-ruler")],ni);var Vr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Nt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Br(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Vr(t,i,o),o};let ft=class extends w{constructor(){super(...arguments),this.helpText="",this.coordinateText="",this.areaText=""}static get styles(){return x`
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
    `}render(){return f`
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
    `}};Nt([m()],ft.prototype,"helpText",2);Nt([m()],ft.prototype,"coordinateText",2);Nt([m()],ft.prototype,"areaText",2);ft=Nt([y("paint-status-bar")],ft);function Lr(e){e.includes("BlinkMacSystemFont")&&console.warn("break-styled-lines: Using BlinkMacSystemFont can cause Chrome to crash in certain environments!")}function Le(e){return Array.isArray(e)&&(e.length>0?typeof e[0]=="string":!0)}function Li(e){return Array.isArray(e)&&(e.length>0?!Le(e):!0)}function Rr(e,t,i,n){const o=e.text.split("").reduce((a,l)=>{const p=a[a.length-1]||"",h=p.slice(-1);return l===" "&&h!==" "?[...a,l]:l!==" "&&h===" "?[...a,l]:[...a.slice(0,-1),`${p}${l}`]},[]),{lastLineWidth:r,lines:s}=o.reduce((a,l)=>{n.font=e.font;const{width:p}=n.measureText(l),h=a.lastLineWidth+p;if(h<=t){const g=[...a.lines.slice(-1),l].join("");return{lastLineWidth:h,lines:[...a.lines.slice(0,-1),g]}}if(p>t&&a.lastLineWidth===0)return{lastLineWidth:p,lines:[...a.lines.slice(0,-1),l]};const d=a.lines.slice(-1).join(""),u=[...a.lines.slice(0,-1),d.trimEnd()];return l.trim().length===0?{lastLineWidth:0,lines:[...u,""]}:{lastLineWidth:p,lines:[...u,l]}},{lastLineWidth:i,lines:[]});return{lastLineWidth:r,text:s.join(`
`)}}function Yt(e,t){const i="OffscreenCanvas"in window,n=document.createElement("canvas"),o=i?n.transferControlToOffscreen():n;o.width=t;const r=o.getContext("2d");return r?e.reduce((s,a)=>{const{lastLineWidth:l,text:p}=Rr(a,t,s.lastLineWidth,r);return{lastLineWidth:l,lines:[...s.lines,p]}},{lastLineWidth:0,lines:[]}).lines:(console.warn("No canvas context was found, so the string was left as is!"),e.map(({text:s})=>s))}function Fr(e,t){return Li(e)?e.map(({text:i,font:n})=>({text:Jt(i),font:n||t})):Le(e)?e.map(i=>({text:Jt(i),font:t})):[{text:Jt(e),font:t}]}var Ur=/(\r\n|\n|\r)/gm;function Jt(e){return e.replace(Ur," ")}function jr(e,t,i){Lr(i);const n=Fr(e,i);return Le(e)||Li(e)?Yt(n,t):Yt(n,t)[0]}var Ir=jr,zr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Re=(e,t,i,n)=>{for(var o=n>1?void 0:n?Nr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&zr(t,i,o),o};let gt=class extends w{constructor(){super(...arguments),this.editingActive=!1,this.drawingContext=_}static get styles(){return x`
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
    `}firstUpdated(e){if(super.firstUpdated(e),!this.textarea)throw new Error("Textarea not found.");const t=this.textarea;t.addEventListener("input",()=>{requestAnimationFrame(()=>t.scrollTop=0),this.drawPreview()})}render(){const{context:e,previewContext:t,text:i}=this.drawingContext;return this.style.display=i.active?"block":"none",this.editingActive&&!i.active&&this.commitTextBox(),this.editingActive=i.active,e&&t&&i.active&&(this.textarea?.focus(),this.textarea?.scroll(0,0),this.drawPreview()),f`<textarea style="${this.getTextAreaStyle()}"></textarea>`}getTextAreaStyle(){const{colors:e,text:t}=this.drawingContext,{width:i,height:n,x:o,y:r,font:s,size:a,bold:l,italic:p,underline:h}=t;return`
      width: ${i}px;
      height: ${n}px;
      transform: translate(${o}px, ${r}px);
      font-family: "${s}"; 
      font-size: ${a}px;
      font-weight: ${l?"bold":"normal"};
      font-style: ${p?"italic":"normal"};
      text-decoration: ${h?"underline":"none"};
      caret-color: ${e.primary};
    `}drawPreview(){this.drawingContext.previewContext&&(V(this.drawingContext.previewContext),this.drawTextBox(this.drawingContext.previewContext))}commitTextBox(){this.editingActive&&!this.drawingContext.text.active&&this.textarea&&this.drawingContext.previewContext&&this.drawingContext.context&&(this.editingActive=!1,V(this.drawingContext.previewContext),this.drawTextBox(this.drawingContext.context),this.textarea.value="")}drawTextBox(e){const{x:t,y:i,width:n,height:o,size:r,font:s,bold:a,italic:l,underline:p}=this.drawingContext.text;this.drawingContext.drawOpaque&&(e.fillStyle=this.drawingContext.colors.secondary,e.fillRect(t??0,i??0,n??0,o??0)),e.fillStyle=this.drawingContext.colors.primary;const h=l?"italic ":"",c=a?"bold ":"";e.font=`${h}${c}${r}px ${s}`;const d=1,u=(n??0)-d*2,g=gt.getLineHeight(e,r);(this.textarea?.value??"").split(`
`).map(v=>Ir(v,u,e.font).split(`
`)).reduce((v,A)=>v.concat(A),[]).forEach((v,A)=>{const F=(t??0)+d,S=(i??0)+r+g*A;if(!(S-(i??0)>=(o??0))&&(e.fillText(v,F,S),p)){const{width:O}=e.measureText(v);e.fillRect(F,S+1,O,1)}})}static getLineHeight(e,t){const i=e.measureText("");return typeof i.fontBoundingBoxAscent=="number"&&typeof i.fontBoundingBoxDescent=="number"?i.fontBoundingBoxAscent+i.fontBoundingBoxDescent:t*1.2}};Re([m()],gt.prototype,"drawingContext",2);Re([hi("textarea")],gt.prototype,"textarea",2);gt=Re([y("paint-text-area")],gt);var Kr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Ri=(e,t,i,n)=>{for(var o=n>1?void 0:n?qr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Kr(t,i,o),o};let ce=class extends w{static get styles(){return x`
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
    `}constructor(){super(),this.addEventListener("pointerenter",()=>this.dispatchEvent(new CustomEvent("set-help-text",{detail:this.tool?.helpText??"",bubbles:!0,composed:!0}))),this.addEventListener("pointerleave",()=>this.dispatchEvent(new CustomEvent("set-help-text",{bubbles:!0,composed:!0})))}render(){return f`
      <div class="wrapper">
        <div
          class="tool"
          style="background-position: ${this.tool?.imagePosition}"
        ></div>
      </div>
    `}};Ri([m()],ce.prototype,"tool",2);ce=Ri([y("paint-tool")],ce);var Wr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,Fi=(e,t,i,n)=>{for(var o=n>1?void 0:n?Qr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Wr(t,i,o),o};let he=class extends w{constructor(){super(...arguments),this.drawingContext=_,this.options=[{size:9,selectionWidth:17,width:11,height:10,path:"M5,1h1v2h2V1h1v4h1V4h1v2H9V5H6v1h1V5h1v1h1v1h2v1h-1v1H9v1H8V8h1V7H7v1H6v1h1v1H6V9H4v1H3V9h1V8H3V7h2V6H4v1H3V5h2V4h1V3H5v1H4v1H3V4h1V3H3V2h1v1h1V1z"},{size:17,selectionWidth:22,width:18,height:16,path:"M8,0h1v1h1V0h3v1h-3v1h1v1h1V2h1v2h1V3h1V1h1v1h-1v2h-1v1h3V3h1v2h-1v2h-1v1h1v1h-3V7h1V6h-1V5h-2v1h1v3h1v7h-4v-2h1v2h1v-1h1v1h1v-3h-1v-1h1v-1h-2V7H9v1h2V7h1v2h-1v1h1v1h-1v1H9v-2H7v1H6v1h1v2h2v1H7v-1H6v-2H5v1H3v1H2v-1h1v-1h1v-1H3v-1h2v1h1v-1H5V9H4V8h1v1h3V8H6V7H3v1H2V7h1V6h3V4H4V3h1V2h1v2h1v3h1V4h1V3h1v2h1V3h-1V2H9V1H8V0z"},{size:25,selectionWidth:24,width:24,height:24,path:"M14,0v1h-1V0v2h1v2h3v1h2V4h3v1h-1V4h-1v1h-1v2h1v1h2V7h1v1h-2v1h1v1h-1V9h-1v1h-1V9h1V8h-2V6h-1v1h-2v2h-2V8h-1v2h2V9h2V7h1v1h1v1h-1v2h7v1h-1v-1h-2v1h1v2h1v1h-1v-2h-1v-1h-1v-1h-1v1h-1v1h-1v1h1v1h2v2h4v1h-2v4h-1v-2h-6v-2h1v1h-1v1h3v-1h1v1h2v1h1v-3h1v-1h-5v-1h1v-1h-3v-3h-1v2h-1v1h1v1h-2v3h1v1h-1v1h1v1h-1v-1h-2v-1h1v1h1v-2h-2v-1H9v1H8v1h1v1h1v1H8v-1H3v-2H2v-4h1v1H2v2h1v2h1v1h2v-2H4v-2h1v-2h1v-1H5v-1h1v1h1v-1h1v-1h3v1h1v1H9v-1H8v1H7v1H6v2H5v1h1v1h2v-1h1v-1H8v-1h1v-1H8v-1h1v1h3v1H9v1h2v1h1v-2h1v-1h-1v-1h1v-2h1v-1h-1v1h-2v-1H9v-1H8v1H5v1H2v1H1v-1h1v-1h1v1h1V9H0V8h1v1h2V5h3V3H4V2h4v1H7v3H4v2h1v2h3V8H7V7H6v1H5V6h2v1h1v1h1v2h1V9h1V7H9V6H7V5h2V4h1V2H9V1h2v3h2V0H14z"}]}static get styles(){return x`
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
    `}render(){const{airbrushSize:e}=this.drawingContext;return f`
      <ul>
        ${this.options.map(({size:t,selectionWidth:i,width:n,height:o,path:r})=>f`
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
    `}setSize(e){this.drawingContext.airbrushSize=e,b(this)}};Fi([m({type:Object})],he.prototype,"drawingContext",2);he=Fi([y("paint-tool-airbrush")],he);var Gr=Object.getOwnPropertyDescriptor,Xr=(e,t,i,n)=>{for(var o=n>1?void 0:n?Gr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let oi=class extends w{static get styles(){return x`
      :host {
        background-color: var(--button-face);
        padding-right: 1px;
      }
    `}render(){return f`<slot></slot>`}};oi=Xr([y("paint-tool-bar")],oi);var Zr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Fe=(e,t,i,n)=>{for(var o=n>1?void 0:n?Yr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Zr(t,i,o),o};let Vt=class extends w{constructor(){super(...arguments),this.drawingContext=_}static get styles(){return x`
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
    `}render(){return f`
      ${zn.map(e=>f` <paint-tool
          .tool=${e}
          title="${e.tooltip}"
          class="${this.drawingContext?.tool===e?"active":""} ${e.instance?"":"unavailable"}"
          @click="${()=>this.selectTool(e)}"
        ></paint-tool>`)}
      <paint-inset-container>
        ${this.getToolHtml(this.drawingContext.tool)}
      </paint-inset-container>
    `}selectTool(e){this.drawingContext.text.active=!1,Y(this.drawingContext),this.isEditingTool(this.drawingContext.tool)&&(this.drawingContext.previousEditingTool=this.drawingContext.tool),this.drawingContext.tool=e,b(this)}isEditingTool(e){return[ie,ee,oe,te,ne,St,se,re,ae].includes(e)}getToolHtml(e){return mi===e?f` <paint-tool-color-preview
        .drawingContext="${this.drawingContext}"
      ></paint-tool-color-preview>`:[ne,oe].includes(e)?f` <paint-tool-line-width
        .drawingContext="${this.drawingContext}"
      ></paint-tool-line-width>`:[re,xi,se,ae].includes(e)?f` <paint-tool-fill-style
        .drawingContext="${this.drawingContext}"
      ></paint-tool-fill-style>`:[gi,vi,bi].includes(e)?f` <paint-tool-draw-opaque
        .drawingContext="${this.drawingContext}"
      ></paint-tool-draw-opaque>`:te===e?f` <paint-tool-eraser-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-eraser-size>`:ee===e?f` <paint-tool-brush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-brush>`:ie===e?f` <paint-tool-airbrush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-airbrush>`:wi===e?f`TBD`:""}};Fe([m()],Vt.prototype,"drawingContext",2);Fe([m({attribute:!1})],Vt.prototype,"tool",2);Vt=Fe([y("paint-tool-box")],Vt);var Jr=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,Ui=(e,t,i,n)=>{for(var o=n>1?void 0:n?ts(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Jr(t,i,o),o};let pe=class extends w{constructor(){super(...arguments),this.drawingContext=_,this.brushConfigs=[{type:"circle",sizes:[{value:7,path:"M3,0h3v1h1v1h1v3H7v1H6v1H3V6H2V5H1V2h1V1h1z"},{value:4,path:"M3,2h2v1h1v2H5v1H3V5H2V3h1z"},{value:1,path:"M4,3h1v1h-1z"}]},{type:"square",sizes:[{value:8,path:"M0,0H8V8H0z"},{value:5,path:"M2,1H7V6H2z"},{value:2,path:"M3,3H5V5H3z"}]},{type:"forward-diagonal",sizes:[{value:8,path:"M8,0H7v1H6v1H5v1H4v1H3v1H2v1H1v1H0v1h1V7h1V6h1V5h1V4h1V3h1V2h1V1h1V0z"},{value:5,path:"M7,1H6v1H5v1H4v1H3v1H2v1h1V5h1V4h1V3h1V2h1z"},{value:2,path:"M3,5H4V4H5V3H4V4H3z"}]},{type:"backward-diagonal",sizes:[{value:8,path:"M0,0h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H7V7H6V6H5V5H4V4H3V3H2V2H1V1H0V0z"},{value:5,path:"M2,1h1v1h1v1h1v1h1v1h1v1H6V5H5V4H4V3H3V2H2z"},{value:2,path:"M3,3h1v1h1v1H4V4H3z"}]}]}static get styles(){return x`
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
    `}render(){return f`${this.brushConfigs.map(({type:e,sizes:t})=>t.map(({value:i,path:n})=>f`<div
            @click=${()=>this.onSelect(e,i)}
            class="${this.drawingContext.brush.size===i&&this.drawingContext.brush.type===e?"selected":""}"
          ><svg viewBox="0 0 8 8"><path d="${n}"></svg>
          <div class="selection"></div>
        </div>`))}`}onSelect(e,t){this.drawingContext.brush.type=e,this.drawingContext.brush.size=t,b(this)}};Ui([m()],pe.prototype,"drawingContext",2);pe=Ui([y("paint-tool-brush")],pe);var es=Object.defineProperty,is=Object.getOwnPropertyDescriptor,ji=(e,t,i,n)=>{for(var o=n>1?void 0:n?is(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&es(t,i,o),o};let de=class extends w{constructor(){super(...arguments),this.drawingContext=_}static get styles(){return x`
      :host {
        display: block;
      }
    `}render(){this.style.backgroundColor=this.drawingContext?.previewColor??"transparent"}};ji([m()],de.prototype,"drawingContext",2);de=ji([y("paint-tool-color-preview")],de);var ns=Object.defineProperty,os=Object.getOwnPropertyDescriptor,Ii=(e,t,i,n)=>{for(var o=n>1?void 0:n?os(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&ns(t,i,o),o};let ue=class extends w{constructor(){super(...arguments),this.drawingContext=_}static get styles(){return x`
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
    `}render(){return f`
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
    `}getClasses(e){return[...e===this.drawingContext.drawOpaque?["selected"]:[],...e?["opaque"]:["transparent"]].join(" ")}selectValue(e){this.drawingContext.drawOpaque=e,b(this)}};Ii([m()],ue.prototype,"drawingContext",2);ue=Ii([y("paint-tool-draw-opaque")],ue);var rs=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,zi=(e,t,i,n)=>{for(var o=n>1?void 0:n?ss(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&rs(t,i,o),o};let fe=class extends w{constructor(){super(...arguments),this.drawingContext=_,this.eraserSizes=[4,6,8,10]}static get styles(){return x`
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
    `}render(){return f`
      <ul>
        ${this.eraserSizes.map(e=>f`
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
    `}getStyle(e){return`width: ${e}px; height: ${e}px`}selectSize(e){this.drawingContext.eraserSize=e,b(this)}};zi([m()],fe.prototype,"drawingContext",2);fe=zi([y("paint-tool-eraser-size")],fe);var as=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,Ni=(e,t,i,n)=>{for(var o=n>1?void 0:n?ls(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&as(t,i,o),o};let ge=class extends w{constructor(){super(...arguments),this.drawingContext=_,this.fillStyles=[{stroke:!0,fill:!1},{stroke:!0,fill:!0},{stroke:!1,fill:!0}]}static get styles(){return x`
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
    `}render(){return f`
      <ul>
        ${this.fillStyles.map(e=>f`
            <li
              class="${this.isSelected(e)?"selected":""}"
              @click="${()=>this.onSelect(e)}"
            >
              <div class="item ${this.getClasses(e)}"></div>
            </li>
          `)}
      </ul>
    `}isSelected({stroke:e,fill:t}){return e===this.drawingContext.fillStyle.stroke&&t===this.drawingContext.fillStyle.fill}getClasses({stroke:e,fill:t}){return[...e?["stroke"]:[],...t?["fill"]:[]].join(" ")}onSelect(e){this.drawingContext.fillStyle=e,b(this)}};Ni([m()],ge.prototype,"drawingContext",2);ge=Ni([y("paint-tool-fill-style")],ge);var cs=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,Ki=(e,t,i,n)=>{for(var o=n>1?void 0:n?hs(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&cs(t,i,o),o};let ve=class extends w{constructor(){super(...arguments),this.drawingContext=_,this.lineWidths=[1,2,3,4,5]}static get styles(){return x`
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
    `}render(){return f`
      <ul>
        ${this.lineWidths.map(e=>f` <li
            @click="${()=>this.onUpdateWidth(e)}"
            class="${this.drawingContext.lineWidth===e?"selected":""}"
          >
            <div style="height: ${e}px"></div>
          </li>`)}
      </ul>
    `}onUpdateWidth(e){this.drawingContext.lineWidth=e,b(this)}};Ki([m()],ve.prototype,"drawingContext",2);ve=Ki([y("paint-tool-line-width")],ve);document.querySelector("paint-app")?.addEventListener("titlechange",e=>document.title=`${e.detail.title} - Paint`);"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js"));
