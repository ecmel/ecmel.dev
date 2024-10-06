(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const zo={block:"nearest",inline:"nearest"},Bo={preventScroll:!0};function _n(e,t=!1,n=1){let i=0;for(;e&&!(i>=n&&e.tabIndex>=0);)i++,e=t?e.previousElementSibling:e.nextElementSibling;return e}function Ar(e,t=!1,n=-1){var i,r;if(e){const o=t?(i=e.parentElement)==null?void 0:i.previousElementSibling:(r=e.parentElement)==null?void 0:r.nextElementSibling;if(o){const s=o.children.length-1;if(n===-1&&(n=t?s:0),n>=0&&n<=s)return _n(t?o.lastElementChild:o.firstElementChild,t,t?s-n:n)}}return null}function ba(e){var n;const t=(n=e==null?void 0:e.parentElement)==null?void 0:n.children;if(t){for(let i=0;i<t.length;i++)if(t.item(i)===e)return i}return-1}function X(e){return e.currentTarget}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $n=globalThis,Yi=$n.ShadowRoot&&($n.ShadyCSS===void 0||$n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ki=Symbol(),Er=new WeakMap;let Fo=class{constructor(t,n,i){if(this._$cssResult$=!0,i!==Ki)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Yi&&t===void 0){const i=n!==void 0&&n.length===1;i&&(t=Er.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Er.set(n,t))}return t}toString(){return this.cssText}};const va=e=>new Fo(typeof e=="string"?e:e+"",void 0,Ki),st=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((i,r,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new Fo(n,e,Ki)},ya=(e,t)=>{if(Yi)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const i=document.createElement("style"),r=$n.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,e.appendChild(i)}},kr=Yi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const i of t.cssRules)n+=i.cssText;return va(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wa,defineProperty:_a,getOwnPropertyDescriptor:$a,getOwnPropertyNames:xa,getOwnPropertySymbols:Aa,getPrototypeOf:Ea}=Object,zt=globalThis,Sr=zt.trustedTypes,ka=Sr?Sr.emptyScript:"",di=zt.reactiveElementPolyfillSupport,Be=(e,t)=>e,On={toAttribute(e,t){switch(t){case Boolean:e=e?ka:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Xi=(e,t)=>!wa(e,t),Cr={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:Xi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),zt.litPropertyMetadata??(zt.litPropertyMetadata=new WeakMap);let he=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Cr){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,n);r!==void 0&&_a(this.prototype,t,r)}}static getPropertyDescriptor(t,n,i){const{get:r,set:o}=$a(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const a=r==null?void 0:r.call(this);o.call(this,s),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Cr}static _$Ei(){if(this.hasOwnProperty(Be("elementProperties")))return;const t=Ea(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Be("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Be("properties"))){const n=this.properties,i=[...xa(n),...Aa(n)];for(const r of i)this.createProperty(r,n[r])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[i,r]of n)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const r=this._$Eu(n,i);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)n.unshift(kr(r))}else t!==void 0&&n.push(kr(t));return n}static _$Eu(t,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ya(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(t,n,i){this._$AK(t,i)}_$EC(t,n){var o;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:On).toAttribute(n,i.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,n){var o;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:On;this._$Em=r,this[r]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Xi)(this[t],n))return;this.P(t,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,i){this._$AL.has(t)||this._$AL.set(t,n),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}};he.elementStyles=[],he.shadowRootOptions={mode:"open"},he[Be("elementProperties")]=new Map,he[Be("finalized")]=new Map,di==null||di({ReactiveElement:he}),(zt.reactiveElementVersions??(zt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=globalThis,Rn=Fe.trustedTypes,Pr=Rn?Rn.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ho="$lit$",Dt=`lit$${Math.random().toFixed(9).slice(2)}$`,jo="?"+Dt,Sa=`<${jo}>`,te=document,qe=()=>te.createComment(""),Ye=e=>e===null||typeof e!="object"&&typeof e!="function",Gi=Array.isArray,Ca=e=>Gi(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",hi=`[ 	
\f\r]`,Le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Or=/-->/g,Rr=/>/g,Xt=RegExp(`>|${hi}(?:([^\\s"'>=/]+)(${hi}*=${hi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tr=/'/g,Lr=/"/g,Vo=/^(?:script|style|textarea|title)$/i,Pa=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Et=Pa(1),ee=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Mr=new WeakMap,Jt=te.createTreeWalker(te,129);function Wo(e,t){if(!Gi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pr!==void 0?Pr.createHTML(t):t}const Oa=(e,t)=>{const n=e.length-1,i=[];let r,o=t===2?"<svg>":t===3?"<math>":"",s=Le;for(let a=0;a<n;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Le?u[1]==="!--"?s=Or:u[1]!==void 0?s=Rr:u[2]!==void 0?(Vo.test(u[2])&&(r=RegExp("</"+u[2],"g")),s=Xt):u[3]!==void 0&&(s=Xt):s===Xt?u[0]===">"?(s=r??Le,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Xt:u[3]==='"'?Lr:Tr):s===Lr||s===Tr?s=Xt:s===Or||s===Rr?s=Le:(s=Xt,r=void 0);const h=s===Xt&&e[a+1].startsWith("/>")?" ":"";o+=s===Le?l+Sa:d>=0?(i.push(c),l.slice(0,d)+Ho+l.slice(d)+Dt+h):l+Dt+(d===-2?a:h)}return[Wo(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let Ci=class qo{constructor({strings:t,_$litType$:n},i){let r;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,u]=Oa(t,n);if(this.el=qo.createElement(c,i),Jt.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=Jt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Ho)){const f=u[s++],h=r.getAttribute(d).split(Dt),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:p[2],strings:h,ctor:p[1]==="."?Ta:p[1]==="?"?La:p[1]==="@"?Ma:Yn}),r.removeAttribute(d)}else d.startsWith(Dt)&&(l.push({type:6,index:o}),r.removeAttribute(d));if(Vo.test(r.tagName)){const d=r.textContent.split(Dt),f=d.length-1;if(f>0){r.textContent=Rn?Rn.emptyScript:"";for(let h=0;h<f;h++)r.append(d[h],qe()),Jt.nextNode(),l.push({type:2,index:++o});r.append(d[f],qe())}}}else if(r.nodeType===8)if(r.data===jo)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(Dt,d+1))!==-1;)l.push({type:7,index:o}),d+=Dt.length-1}o++}}static createElement(t,n){const i=te.createElement("template");return i.innerHTML=t,i}};function ve(e,t,n=e,i){var s,a;if(t===ee)return t;let r=i!==void 0?(s=n.o)==null?void 0:s[i]:n.l;const o=Ye(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(e),r._$AT(e,n,i)),i!==void 0?(n.o??(n.o=[]))[i]=r:n.l=r),r!==void 0&&(t=ve(e,r._$AS(e,t.values),r,i)),t}let Ra=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??te).importNode(n,!0);Jt.currentNode=r;let o=Jt.nextNode(),s=0,a=0,l=i[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Zi(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new Na(o,this,t)),this._$AV.push(c),l=i[++a]}s!==(l==null?void 0:l.index)&&(o=Jt.nextNode(),s++)}return Jt.currentNode=te,r}p(t){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}},Zi=class Yo{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,n,i,r){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=r,this.v=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=ve(this,t,n),Ye(t)?t===U||t==null||t===""?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==ee&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ca(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==U&&Ye(this._$AH)?this._$AA.nextSibling.data=t:this.T(te.createTextNode(t)),this._$AH=t}$(t){var o;const{values:n,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ci.createElement(Wo(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(n);else{const s=new Ra(r,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let n=Mr.get(t.strings);return n===void 0&&Mr.set(t.strings,n=new Ci(t)),n}k(t){Gi(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const o of t)r===n.length?n.push(i=new Yo(this.O(qe()),this.O(qe()),this,this.options)):i=n[r],i._$AI(o),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(t=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var n;this._$AM===void 0&&(this.v=t,(n=this._$AP)==null||n.call(this,t))}},Yn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,i,r,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=n,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}_$AI(t,n=this,i,r){const o=this.strings;let s=!1;if(o===void 0)t=ve(this,t,n,0),s=!Ye(t)||t!==this._$AH&&t!==ee,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=ve(this,a[i+l],n,l),c===ee&&(c=this._$AH[l]),s||(s=!Ye(c)||c!==this._$AH[l]),c===U?t=U:t!==U&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!r&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ta=class extends Yn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}},La=class extends Yn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==U)}},Ma=class extends Yn{constructor(t,n,i,r,o){super(t,n,i,r,o),this.type=5}_$AI(t,n=this){if((t=ve(this,t,n,0)??U)===ee)return;const i=this._$AH,r=t===U&&i!==U||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==U&&(i===U||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}},Na=class{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ve(this,t)}};const fi=Fe.litHtmlPolyfillSupport;fi==null||fi(Ci,Zi),(Fe.litHtmlVersions??(Fe.litHtmlVersions=[])).push("3.2.0");const Da=(e,t,n)=>{const i=(n==null?void 0:n.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const o=(n==null?void 0:n.renderBefore)??null;i._$litPart$=r=new Zi(t.insertBefore(qe(),o),o,void 0,n??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let kt=class extends he{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Da(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return ee}};var Io;kt._$litElement$=!0,kt.finalized=!0,(Io=globalThis.litElementHydrateSupport)==null||Io.call(globalThis,{LitElement:kt});const pi=globalThis.litElementPolyfillSupport;pi==null||pi({LitElement:kt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ia={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:Xi},Ua=(e=Ia,t,n)=>{const{kind:i,metadata:r}=n;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(n.name,e),i==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.P(s,void 0,e),a}}}if(i==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+i)};function k(e){return(t,n)=>typeof n=="object"?Ua(e,t,n):((i,r,o)=>{const s=r.hasOwnProperty(o);return r.constructor.createProperty(o,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(r,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function za(e){return k({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xo(e,t){return(n,i,r)=>{const o=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(e))??null};return Ko(n,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kn(e){return(t,n)=>{const{slot:i,selector:r}=e??{},o="slot"+(i?`[name=${i}]`:":not([name])");return Ko(t,n,{get(){var l;const s=(l=this.renderRoot)==null?void 0:l.querySelector(o),a=(s==null?void 0:s.assignedElements(e))??[];return r===void 0?a:a.filter(c=>c.matches(r))}})}}const rn=st`
  :host {
    box-sizing: border-box;
  }
`,Go=st`
  :host {
    position: sticky;
    background-color: var(--sl-color-neutral-0);
    z-index: calc(var(--sl-z-index-drawer) - 60);
  }
`,Ke="0";function Nr(e){return e<0n?-e:e}function Zo(e,t=2){return e*10n**BigInt(t)}function Tn(e,t=2){const n=Zo(1n,t);return(e+e%n)/n}function Ba(e){return e.replace(/(?:^-|([^0-9.,])+)/g,(t,n)=>n?"":t).split(/[.,]+/,2).join(".")||Ke}function Fa(e,t=2){const[n,i]=e.split(/\./,2);return BigInt((n||Ke)+(i||"").padEnd(t,Ke).slice(0,t))}function Lt(e,t=2){const n=10n**BigInt(t),i=(Nr(e)%n).toString().padStart(t,"0").replace(/0+$/,"");return(e<0n?"-":"")+(Nr(e)/n).toString()+(i?"."+i:"")}function Ha(e,t){const[n,i]=e.split(/\./,2),r=BigInt(n||Ke),o=t.formatToParts(r),s=t.formatToParts(parseFloat("-0."+(i||Ke)));return(r===0n?s:o).reduce((a,{type:l,value:c})=>a+=l==="fraction"?o.some(({type:u})=>u==="compact")?c:s.reduce((u,{type:d,value:f})=>d==="fraction"?u=f:u,""):l==="minusSign"?e.startsWith("-")?c:"":c,"")}function Dr(e,t=2){let n="",i="",r,o,s=[];function a(){i&&(s.push(Fa(Ba(i),t)),i="")}for(let l=0;l<e.length;l++)switch(n=e.charAt(l),n){case" ":case";":a();break;case"-":a(),i+=n;break;case"%":a(),r=s.pop()||0n,s.push(r/100n);break;case"+":a(),r=s.pop()||0n,o=s.pop()||0n,s.push(o+r);break;case"*":a(),r=s.pop()||0n,o=s.pop()||0n,s.push(Tn(o*r,t));break;case":":case"/":a(),r=s.pop()||0n,o=s.pop()||0n,s.push(r&&Tn(Zo(o,t*2)/r,t));break;default:i+=n;break}return a(),s.length>1&&(s=[s.reduce((l,c)=>l+=c,0n)]),s.pop()||0n}var on=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let ne=class extends kt{constructor(){super(...arguments),this.lang="",this.value="",this.scale=2,this.notation="standard"}get locale(){return this.lang||document.documentElement.lang||void 0}get format(){return this._format||(this._format=Intl.NumberFormat(this.locale,{useGrouping:!0,notation:this.notation,minimumFractionDigits:this.scale,maximumFractionDigits:this.scale})),this._format}render(){return Et`${Ha(this.value,this.format)}`}willUpdate(t){(t.has("notation")||t.has("scale")||t.has("lang"))&&(this._format=void 0)}};ne.styles=[rn];on([k({type:String})],ne.prototype,"lang",void 0);on([k({type:String})],ne.prototype,"value",void 0);on([k({type:Number})],ne.prototype,"scale",void 0);on([k({type:String})],ne.prototype,"notation",void 0);ne=on([yt("cell-format")],ne);var ja=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let Pi=class extends kt{render(){return Et`<slot></slot>`}};Pi.styles=[rn,st`
      :host {
        display: contents;
      }
    `];Pi=ja([yt("cell-group")],Pi);var ke=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let Ft=class extends kt{get label(){return this.textContent||""}get labels(){return this.items.map(t=>t.textContent||"")}constructor(){super(),this.value="",this.addEventListener("click",()=>this.selected=!this.selected)}render(){return Et`<slot></slot>`}updated(t){super.updated(t),t.has("selected")&&this.dispatchEvent(new Event("selection",{bubbles:!0}))}};Ft.styles=[rn,st`
      :host {
        display: contents;
        line-height: var(--sl-line-height-dense);
      }

      ::slotted(*) {
        cursor: pointer;
        border-bottom: 0;
      }

      ::slotted(*:first-child)::before,
      ::slotted(*:last-child)::after {
        content: "";
        display: inline-block;
        width: 1.25rem;
      }

      :host(:hover) ::slotted(*) {
        background-color: var(--sl-color-neutral-100);
        color: var(--sl-color-neutral-1000);
      }

      :host([active]) ::slotted(*) {
        background-color: var(--sl-color-primary-600);
        color: var(--sl-color-neutral-0);
      }

      :host([selected]) ::slotted(*:first-child)::before {
        content: "✓";
        display: inline-block;
        width: 1rem;
        margin-right: 0.25rem;
      }
    `];ke([k({type:String})],Ft.prototype,"value",void 0);ke([k({type:Boolean,reflect:!0})],Ft.prototype,"active",void 0);ke([k({type:Boolean,reflect:!0})],Ft.prototype,"selected",void 0);ke([k({type:Number})],Ft.prototype,"span",void 0);ke([Kn()],Ft.prototype,"items",void 0);Ft=ke([yt("cell-option")],Ft);var Jo=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let ye=class extends kt{constructor(){super(...arguments),this.columns="auto"}render(){return Et`<slot></slot>`}willUpdate(t){super.willUpdate(t),t.has("columns")&&this.style.setProperty("--property-columns",`${this.columns}`)}};ye.styles=[rn,st`
      :host {
        display: grid;
        grid-template-columns: var(--property-columns);
      }
    `];Jo([k({type:String})],ye.prototype,"columns",void 0);ye=Jo([yt("cell-grid")],ye);var sn=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let ie=class extends ye{constructor(){super(),this.hide=!0,this.tabIndex=0,this.addEventListener("keydown",t=>this.handleKeyDown(t))}setPosition(t,n){Object.assign(this.style,{top:`${n}px`,left:`${t}px`})}reset(){this.active.forEach(t=>t.active=!1),this.selected.forEach(t=>t.selected=!1)}toggle(){this.active.forEach(t=>t.selected=!t.selected)}handleKeyDown(t){switch(t.key){case"ArrowDown":this.next(),t.preventDefault(),t.stopImmediatePropagation();break;case"ArrowUp":this.next(!0),t.preventDefault(),t.stopImmediatePropagation();break;case"Enter":this.toggle(),t.preventDefault(),t.stopImmediatePropagation();break;case"Escape":this.dispatchEvent(new Event("hide")),t.preventDefault(),t.stopImmediatePropagation()}}next(t=!1){const n=this.options;let i=this.active[0];if(i){i.active=!1;let r=n.indexOf(i)+(t?-1:1);r<0?r=0:r>n.length-1&&(r=n.length-1),i=n[r]}else i=n[0];i&&(i.active=!0,i.firstElementChild&&i.firstElementChild.scrollIntoView(zo))}};ie.styles=[...ye.styles,st`
      :host {
        top: 0;
        left: 0;
        width: max-content;
        position: absolute;
        overflow: scroll;
        overscroll-behavior: none;
        z-index: calc(var(--sl-z-index-drawer) - 50);
        background: var(--sl-panel-background-color);
        border: var(--sl-panel-border-width) solid var(--sl-panel-border-color);
        border-radius: var(--sl-border-radius-medium);
        box-shadow: var(--sl-shadow-large);
      }

      :host(:focus) {
        outline: 0;
      }

      :host([hide]) {
        display: none;
      }
    `];sn([k({type:Boolean,reflect:!0})],ie.prototype,"hide",void 0);sn([Kn({selector:"cell-option[selected]"})],ie.prototype,"selected",void 0);sn([Kn({selector:"cell-option[active]"})],ie.prototype,"active",void 0);sn([Kn({selector:"cell-option"})],ie.prototype,"options",void 0);ie=sn([yt("cell-datalist")],ie);var Ot=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let Q=class extends kt{constructor(){super(...arguments),this.grow="0",this.shrink="1",this.basis="auto"}render(){return Et`<slot></slot>`}willUpdate(t){super.willUpdate(t),(t.has("grow")||t.has("shrink")||t.has("basis"))&&this.style.setProperty("--property-flex",`${this.grow} ${this.shrink} ${this.basis}`)}};Q.styles=[rn,st`
      :host {
        display: flex;
        flex: var(--property-flex);
      }

      :host([flow="row"]) {
        flex-direction: row;
      }

      :host([flow]),
      :host([flow="column"]) {
        flex-direction: column;
      }

      :host([wrap]),
      :host([wrap="wrap"]) {
        flex-wrap: wrap;
      }

      :host([gap]) {
        gap: var(--sl-spacing-2x-small);
      }

      :host([justify="start"]) {
        justify-content: flex-start;
      }

      :host([justify="center"]) {
        justify-content: center;
      }

      :host([justify="end"]) {
        justify-content: flex-end;
      }

      :host([align="start"]) {
        align-items: flex-start;
      }

      :host([align="center"]) {
        align-items: center;
      }

      :host([align="end"]) {
        align-items: flex-end;
      }
    `];Ot([k({type:String})],Q.prototype,"grow",void 0);Ot([k({type:String})],Q.prototype,"shrink",void 0);Ot([k({type:String})],Q.prototype,"basis",void 0);Ot([k({type:String})],Q.prototype,"flow",void 0);Ot([k({type:String})],Q.prototype,"wrap",void 0);Ot([k({type:Boolean})],Q.prototype,"gap",void 0);Ot([k({type:String})],Q.prototype,"justify",void 0);Ot([k({type:String})],Q.prototype,"align",void 0);Q=Ot([yt("cell-section")],Q);var Ji=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let pt=class extends Q{willUpdate(t){super.willUpdate(t),t.has("span")&&(this.span?this.style.setProperty("grid-column-end",`span ${this.span}`):this.style.removeProperty("grid-column-end"))}};pt.styles=[...Q.styles,st`
      :host {
        padding: var(--sl-spacing-x-small);
        border-bottom: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        min-height: calc(
          1rem * var(--sl-line-height-normal) + 2 * var(--sl-spacing-x-small) +
            var(--sl-panel-border-width)
        );
      }

      :host([truncate]) {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    `];Ji([k({type:Boolean})],pt.prototype,"truncate",void 0);Ji([k({type:Number})],pt.prototype,"span",void 0);pt=Ji([yt("cell-item")],pt);var Va=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let Oi=class extends pt{};Oi.styles=[...pt.styles,Go,st`
      :host {
        top: 0;
        border-top: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
        font-weight: var(--sl-font-weight-semibold);
      }
    `];Oi=Va([yt("cell-header")],Oi);var Wa=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let Ri=class extends pt{};Ri.styles=[...pt.styles,Go,st`
      :host {
        bottom: 0;
        margin-top: 4px;
        border-top: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
        font-weight: var(--sl-font-weight-semibold);
      }
    `];Ri=Wa([yt("cell-footer")],Ri);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ir(e,t,n){return e?t(e):n==null?void 0:n(e)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qa=e=>e??U;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ya={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ka=e=>(...t)=>({_$litDirective$:e,values:t});let Xa=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this.t=t,this._$AM=n,this.i=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo="important",Ga=" !"+Qo,Za=Ka(class extends Xa{constructor(e){var t;if(super(e),e.type!==Ya.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const i=e[n];return i==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?n.removeProperty(i):n[i]=null);for(const i in t){const r=t[i];if(r!=null){this.ft.add(i);const o=typeof r=="string"&&r.endsWith(Ga);i.includes("-")||o?n.setProperty(i,o?r.slice(0,-11):r,o?Qo:""):n[i]=r}}return ee}});var Rt=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let tt=class extends pt{get selectionStart(){var t;return((t=this.input)==null?void 0:t.selectionStart)||null}get selectionEnd(){var t;return((t=this.input)==null?void 0:t.selectionEnd)||null}constructor(){super(),this.type="text",this.value="",this.mirrorWidth=0,this.oldIndex=-1,this.tabIndex=0,this.addEventListener("focus",t=>this.handleFocus(t)),this.addEventListener("blur",t=>this.handleBlur(t)),this.addEventListener("keydown",t=>this.handleKeyDown(t))}canLeave(t=!1){const n=this.selectionEnd,i=this.selectionStart;return n==null||i===null||t&&n===0||!t&&i===this.value.length}handleKeyDown(t){}handleFocus(t){this.focused=!0}handleBlur(t){this.focused=!1}adjustWidth(){var t;this.auto&&(this.mirrorWidth=((t=this.mirror)==null?void 0:t.offsetWidth)||0)}renderFocused(){return Et`<slot name="value"></slot
      ><input
        .type="${this.type}"
        .value="${this.value}"
        class="input"
        autocomplete="off"
        size="1"
        inputmode="${qa(this.inputMode)}"
        style=${Za({minWidth:this.mirrorWidth+"px"})}
        @input="${t=>{this.value=X(t).value}}"
        @change="${()=>{this.dispatchEvent(new Event("change"))}}"
        @keyup="${()=>{this.adjustWidth()}}"
        @keydown="${t=>{t.key==="Tab"&&t.shiftKey&&(this.oldIndex=this.tabIndex,this.tabIndex=-1)}}"
        @focus="${()=>{this.adjustWidth()}}"
        @blur="${()=>{this.oldIndex!==-1&&(this.tabIndex=this.oldIndex,this.oldIndex=-1),this.mirrorWidth=0}}"
      />${Ir(this.auto,()=>Et`<span class="mirror">${this.value}</span>`)}`}render(){return Et`${Ir(this.focused&&!this.readonly,()=>this.renderFocused(),()=>Et`<slot>${this.value}</slot>`)}`}updated(t){var n;super.updated(t),t.has("focused")&&this.focused&&!this.readonly&&((n=this.input)==null||n.focus(Bo))}};tt.styles=[...pt.styles,st`
      :host([focused]) {
        padding: 0;
        outline: 0;
        caret-color: var(--sl-color-neutral-1000);
        background-color: var(--sl-input-filled-background-color-focus);
        border-bottom: var(--sl-panel-border-width) solid
          var(--sl-input-border-color-focus);
        box-shadow: 0 4px 1px -1px var(--sl-input-focus-ring-color);
      }

      :host([readonly]) {
        padding: var(--sl-spacing-x-small);
      }

      ::slotted(*) {
        --sl-input-height-medium: 2.2rem;
      }

      .mirror {
        position: absolute;
        padding: var(--sl-spacing-x-small);
        opacity: 0;
        z-index: -1;
      }

      .input,
      .input:focus {
        border: 0;
        margin: 0;
        outline: 0;
        display: inline;
        flex-grow: 1;
        box-sizing: inherit;
        font-family: inherit;
        font-style: inherit;
        font-size: inherit;
        font-weight: inherit;
        background-color: inherit;
        min-width: unset;
        min-height: unset;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: var(--sl-spacing-x-small);
      }

      :host([justify="end"]) > .input {
        text-align: right;
      }

      .input::-webkit-date-and-time-value {
        text-align: left;
        font: inherit;
      }

      .input::-webkit-datetime-edit-text {
        font-weight: lighter;
        font: inherit;
      }

      .input[type="date"]::-webkit-inner-spin-button,
      .input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
      }
    `];Rt([k({type:Boolean,reflect:!0})],tt.prototype,"focused",void 0);Rt([k({type:String})],tt.prototype,"type",void 0);Rt([k({type:String})],tt.prototype,"value",void 0);Rt([k({type:Boolean})],tt.prototype,"readonly",void 0);Rt([k({type:Boolean})],tt.prototype,"auto",void 0);Rt([za()],tt.prototype,"mirrorWidth",void 0);Rt([Xo(".mirror")],tt.prototype,"mirror",void 0);Rt([Xo(".input")],tt.prototype,"input",void 0);tt=Rt([yt("cell-input")],tt);const Xe=Math.min,ot=Math.max,Ln=Math.round,pn=Math.floor,Ht=e=>({x:e,y:e}),Ja={left:"right",right:"left",bottom:"top",top:"bottom"},Qa={start:"end",end:"start"};function Xn(e,t){return typeof e=="function"?e(t):e}function re(e){return e.split("-")[0]}function an(e){return e.split("-")[1]}function tl(e){return e==="x"?"y":"x"}function ts(e){return e==="y"?"height":"width"}function we(e){return["top","bottom"].includes(re(e))?"y":"x"}function es(e){return tl(we(e))}function el(e,t,n){n===void 0&&(n=!1);const i=an(e),r=es(e),o=ts(r);let s=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Mn(s)),[s,Mn(s)]}function nl(e){const t=Mn(e);return[Ti(e),t,Ti(t)]}function Ti(e){return e.replace(/start|end/g,t=>Qa[t])}function il(e,t,n){const i=["left","right"],r=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:i:t?i:r;case"left":case"right":return t?o:s;default:return[]}}function rl(e,t,n,i){const r=an(e);let o=il(re(e),n==="start",i);return r&&(o=o.map(s=>s+"-"+r),t&&(o=o.concat(o.map(Ti)))),o}function Mn(e){return e.replace(/left|right|bottom|top/g,t=>Ja[t])}function ol(e){return{top:0,right:0,bottom:0,left:0,...e}}function sl(e){return typeof e!="number"?ol(e):{top:e,right:e,bottom:e,left:e}}function Nn(e){const{x:t,y:n,width:i,height:r}=e;return{width:i,height:r,top:n,left:t,right:t+i,bottom:n+r,x:t,y:n}}function Ur(e,t,n){let{reference:i,floating:r}=e;const o=we(t),s=es(t),a=ts(s),l=re(t),c=o==="y",u=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,f=i[a]/2-r[a]/2;let h;switch(l){case"top":h={x:u,y:i.y-r.height};break;case"bottom":h={x:u,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:d};break;case"left":h={x:i.x-r.width,y:d};break;default:h={x:i.x,y:i.y}}switch(an(t)){case"start":h[s]-=f*(n&&c?-1:1);break;case"end":h[s]+=f*(n&&c?-1:1);break}return h}const al=async(e,t,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=Ur(c,i,l),f=i,h={},p=0;for(let g=0;g<a.length;g++){const{name:y,fn:v}=a[g],{x:w,y:_,data:x,reset:$}=await v({x:u,y:d,initialPlacement:i,placement:f,strategy:r,middlewareData:h,rects:c,platform:s,elements:{reference:e,floating:t}});u=w??u,d=_??d,h={...h,[y]:{...h[y],...x}},$&&p<=50&&(p++,typeof $=="object"&&($.placement&&(f=$.placement),$.rects&&(c=$.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):$.rects),{x:u,y:d}=Ur(c,f,l)),g=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:h}};async function ns(e,t){var n;t===void 0&&(t={});const{x:i,y:r,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Xn(t,e),p=sl(h),y=a[f?d==="floating"?"reference":"floating":d],v=Nn(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(y)))==null||n?y:y.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),w=d==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,_=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),x=await(o.isElement==null?void 0:o.isElement(_))?await(o.getScale==null?void 0:o.getScale(_))||{x:1,y:1}:{x:1,y:1},$=Nn(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:_,strategy:l}):w);return{top:(v.top-$.top+p.top)/x.y,bottom:($.bottom-v.bottom+p.bottom)/x.y,left:(v.left-$.left+p.left)/x.x,right:($.right-v.right+p.right)/x.x}}const ll=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:r,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...y}=Xn(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const v=re(r),w=we(a),_=re(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),$=f||(_||!g?[Mn(a)]:nl(a)),A=p!=="none";!f&&A&&$.push(...rl(a,g,p,x));const O=[a,...$],R=await ns(t,y),T=[];let C=((i=o.flip)==null?void 0:i.overflows)||[];if(u&&T.push(R[v]),d){const L=el(r,s,x);T.push(R[L[0]],R[L[1]])}if(C=[...C,{placement:r,overflows:T}],!T.every(L=>L<=0)){var I,N;const L=(((I=o.flip)==null?void 0:I.index)||0)+1,At=O[L];if(At)return{data:{index:L,overflows:C},reset:{placement:At}};let K=(N=C.filter(H=>H.overflows[0]<=0).sort((H,j)=>H.overflows[1]-j.overflows[1])[0])==null?void 0:N.placement;if(!K)switch(h){case"bestFit":{var z;const H=(z=C.filter(j=>{if(A){const V=we(j.placement);return V===w||V==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(V=>V>0).reduce((V,ui)=>V+ui,0)]).sort((j,V)=>j[1]-V[1])[0])==null?void 0:z[0];H&&(K=H);break}case"initialPlacement":K=a;break}if(r!==K)return{reset:{placement:K}}}return{}}}};async function cl(e,t){const{placement:n,platform:i,elements:r}=e,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=re(n),a=an(n),l=we(n)==="y",c=["left","top"].includes(s)?-1:1,u=o&&l?-1:1,d=Xn(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof p=="number"&&(h=a==="end"?p*-1:p),l?{x:h*u,y:f*c}:{x:f*c,y:h*u}}const ul=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,i;const{x:r,y:o,placement:s,middlewareData:a}=t,l=await cl(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:s}}}}},dl=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,i;const{placement:r,rects:o,platform:s,elements:a}=t,{apply:l=()=>{},...c}=Xn(e,t),u=await ns(t,c),d=re(r),f=an(r),h=we(r)==="y",{width:p,height:g}=o.floating;let y,v;d==="top"||d==="bottom"?(y=d,v=f===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(v=d,y=f==="end"?"top":"bottom");const w=g-u.top-u.bottom,_=p-u.left-u.right,x=Xe(g-u[y],w),$=Xe(p-u[v],_),A=!t.middlewareData.shift;let O=x,R=$;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(R=_),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(O=w),A&&!f){const C=ot(u.left,0),I=ot(u.right,0),N=ot(u.top,0),z=ot(u.bottom,0);h?R=p-2*(C!==0||I!==0?C+I:ot(u.left,u.right)):O=g-2*(N!==0||z!==0?N+z:ot(u.top,u.bottom))}await l({...t,availableWidth:R,availableHeight:O});const T=await s.getDimensions(a.floating);return p!==T.width||g!==T.height?{reset:{rects:!0}}:{}}}};function Gn(){return typeof window<"u"}function Se(e){return is(e)?(e.nodeName||"").toLowerCase():"#document"}function Z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function $t(e){var t;return(t=(is(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function is(e){return Gn()?e instanceof Node||e instanceof Z(e).Node:!1}function mt(e){return Gn()?e instanceof Element||e instanceof Z(e).Element:!1}function wt(e){return Gn()?e instanceof HTMLElement||e instanceof Z(e).HTMLElement:!1}function zr(e){return!Gn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Z(e).ShadowRoot}function ln(e){const{overflow:t,overflowX:n,overflowY:i,display:r}=gt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(r)}function hl(e){return["table","td","th"].includes(Se(e))}function Zn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Qi(e){const t=tr(),n=mt(e)?gt(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function fl(e){let t=jt(e);for(;wt(t)&&!_e(t);){if(Qi(t))return t;if(Zn(t))return null;t=jt(t)}return null}function tr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function _e(e){return["html","body","#document"].includes(Se(e))}function gt(e){return Z(e).getComputedStyle(e)}function Jn(e){return mt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function jt(e){if(Se(e)==="html")return e;const t=e.assignedSlot||e.parentNode||zr(e)&&e.host||$t(e);return zr(t)?t.host:t}function rs(e){const t=jt(e);return _e(t)?e.ownerDocument?e.ownerDocument.body:e.body:wt(t)&&ln(t)?t:rs(t)}function Ge(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=rs(e),o=r===((i=e.ownerDocument)==null?void 0:i.body),s=Z(r);if(o){const a=Li(s);return t.concat(s,s.visualViewport||[],ln(r)?r:[],a&&n?Ge(a):[])}return t.concat(r,Ge(r,[],n))}function Li(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function os(e){const t=gt(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=wt(e),o=r?e.offsetWidth:n,s=r?e.offsetHeight:i,a=Ln(n)!==o||Ln(i)!==s;return a&&(n=o,i=s),{width:n,height:i,$:a}}function er(e){return mt(e)?e:e.contextElement}function ge(e){const t=er(e);if(!wt(t))return Ht(1);const n=t.getBoundingClientRect(),{width:i,height:r,$:o}=os(t);let s=(o?Ln(n.width):n.width)/i,a=(o?Ln(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const pl=Ht(0);function ss(e){const t=Z(e);return!tr()||!t.visualViewport?pl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ml(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Z(e)?!1:t}function oe(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=er(e);let s=Ht(1);t&&(i?mt(i)&&(s=ge(i)):s=ge(e));const a=ml(o,n,i)?ss(o):Ht(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,u=r.width/s.x,d=r.height/s.y;if(o){const f=Z(o),h=i&&mt(i)?Z(i):i;let p=f,g=Li(p);for(;g&&i&&h!==p;){const y=ge(g),v=g.getBoundingClientRect(),w=gt(g),_=v.left+(g.clientLeft+parseFloat(w.paddingLeft))*y.x,x=v.top+(g.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=_,c+=x,p=Z(g),g=Li(p)}}return Nn({width:u,height:d,x:l,y:c})}function gl(e){let{elements:t,rect:n,offsetParent:i,strategy:r}=e;const o=r==="fixed",s=$t(i),a=t?Zn(t.floating):!1;if(i===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},c=Ht(1);const u=Ht(0),d=wt(i);if((d||!d&&!o)&&((Se(i)!=="body"||ln(s))&&(l=Jn(i)),wt(i))){const f=oe(i);c=ge(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}}function bl(e){return Array.from(e.getClientRects())}function Mi(e,t){const n=Jn(e).scrollLeft;return t?t.left+n:oe($t(e)).left+n}function vl(e){const t=$t(e),n=Jn(e),i=e.ownerDocument.body,r=ot(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=ot(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Mi(e);const a=-n.scrollTop;return gt(i).direction==="rtl"&&(s+=ot(t.clientWidth,i.clientWidth)-r),{width:r,height:o,x:s,y:a}}function yl(e,t){const n=Z(e),i=$t(e),r=n.visualViewport;let o=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;const c=tr();(!c||c&&t==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a,y:l}}function wl(e,t){const n=oe(e,!0,t==="fixed"),i=n.top+e.clientTop,r=n.left+e.clientLeft,o=wt(e)?ge(e):Ht(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=r*o.x,c=i*o.y;return{width:s,height:a,x:l,y:c}}function Br(e,t,n){let i;if(t==="viewport")i=yl(e,n);else if(t==="document")i=vl($t(e));else if(mt(t))i=wl(t,n);else{const r=ss(e);i={...t,x:t.x-r.x,y:t.y-r.y}}return Nn(i)}function as(e,t){const n=jt(e);return n===t||!mt(n)||_e(n)?!1:gt(n).position==="fixed"||as(n,t)}function _l(e,t){const n=t.get(e);if(n)return n;let i=Ge(e,[],!1).filter(a=>mt(a)&&Se(a)!=="body"),r=null;const o=gt(e).position==="fixed";let s=o?jt(e):e;for(;mt(s)&&!_e(s);){const a=gt(s),l=Qi(s);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ln(s)&&!l&&as(e,s))?i=i.filter(u=>u!==s):r=a,s=jt(s)}return t.set(e,i),i}function $l(e){let{element:t,boundary:n,rootBoundary:i,strategy:r}=e;const s=[...n==="clippingAncestors"?Zn(t)?[]:_l(t,this._c):[].concat(n),i],a=s[0],l=s.reduce((c,u)=>{const d=Br(t,u,r);return c.top=ot(d.top,c.top),c.right=Xe(d.right,c.right),c.bottom=Xe(d.bottom,c.bottom),c.left=ot(d.left,c.left),c},Br(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function xl(e){const{width:t,height:n}=os(e);return{width:t,height:n}}function Al(e,t,n){const i=wt(t),r=$t(t),o=n==="fixed",s=oe(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Ht(0);if(i||!i&&!o)if((Se(t)!=="body"||ln(r))&&(a=Jn(t)),i){const h=oe(t,!0,o,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else r&&(l.x=Mi(r));let c=0,u=0;if(r&&!i&&!o){const h=r.getBoundingClientRect();u=h.top+a.scrollTop,c=h.left+a.scrollLeft-Mi(r,h)}const d=s.left+a.scrollLeft-l.x-c,f=s.top+a.scrollTop-l.y-u;return{x:d,y:f,width:s.width,height:s.height}}function mi(e){return gt(e).position==="static"}function Fr(e,t){if(!wt(e)||gt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return $t(e)===n&&(n=n.ownerDocument.body),n}function ls(e,t){const n=Z(e);if(Zn(e))return n;if(!wt(e)){let r=jt(e);for(;r&&!_e(r);){if(mt(r)&&!mi(r))return r;r=jt(r)}return n}let i=Fr(e,t);for(;i&&hl(i)&&mi(i);)i=Fr(i,t);return i&&_e(i)&&mi(i)&&!Qi(i)?n:i||fl(e)||n}const El=async function(e){const t=this.getOffsetParent||ls,n=this.getDimensions,i=await n(e.floating);return{reference:Al(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function kl(e){return gt(e).direction==="rtl"}const Sl={convertOffsetParentRelativeRectToViewportRelativeRect:gl,getDocumentElement:$t,getClippingRect:$l,getOffsetParent:ls,getElementRects:El,getClientRects:bl,getDimensions:xl,getScale:ge,isElement:mt,isRTL:kl};function Cl(e,t){let n=null,i;const r=$t(e);function o(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(a||t(),!d||!f)return;const h=pn(u),p=pn(r.clientWidth-(c+d)),g=pn(r.clientHeight-(u+f)),y=pn(c),w={rootMargin:-h+"px "+-p+"px "+-g+"px "+-y+"px",threshold:ot(0,Xe(1,l))||1};let _=!0;function x($){const A=$[0].intersectionRatio;if(A!==l){if(!_)return s();A?s(!1,A):i=setTimeout(()=>{s(!1,1e-7)},1e3)}_=!1}try{n=new IntersectionObserver(x,{...w,root:r.ownerDocument})}catch{n=new IntersectionObserver(x,w)}n.observe(e)}return s(!0),o}function Pl(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=er(e),u=r||o?[...c?Ge(c):[],...Ge(t)]:[];u.forEach(v=>{r&&v.addEventListener("scroll",n,{passive:!0}),o&&v.addEventListener("resize",n)});const d=c&&a?Cl(c,n):null;let f=-1,h=null;s&&(h=new ResizeObserver(v=>{let[w]=v;w&&w.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=h)==null||_.observe(t)})),n()}),c&&!l&&h.observe(c),h.observe(t));let p,g=l?oe(e):null;l&&y();function y(){const v=oe(e);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&n(),g=v,p=requestAnimationFrame(y)}return n(),()=>{var v;u.forEach(w=>{r&&w.removeEventListener("scroll",n),o&&w.removeEventListener("resize",n)}),d==null||d(),(v=h)==null||v.disconnect(),h=null,l&&cancelAnimationFrame(p)}}const Ol=ul,Rl=ll,Tl=dl,Ll=(e,t,n)=>{const i=new Map,r={platform:Sl,...n},o={...r.platform,_c:i};return al(e,t,{...r,platform:o})};var Qn=function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let $e=class extends tt{constructor(){super(...arguments),this.placement="bottom-start",this.sizeOptions={apply:({availableWidth:t,availableHeight:n,elements:i})=>{Object.assign(i.floating.style,{maxWidth:`${Math.max(192,t-16)}px`,maxHeight:`${Math.max(192,n-16)}px`})}},this.handleListPosition=()=>{this.datalist&&(this.stretch&&this.datalist.style.setProperty("min-width",`${this.offsetWidth-2}px`),Ll(this,this.datalist,{placement:this.placement,strategy:"absolute",middleware:[Ol(4),Rl(),Tl(this.sizeOptions)]}).then(({x:t,y:n})=>{this.datalist&&(this.datalist.setPosition(t,n),this.datalist.hide=!1)}))},this.handleLisHide=()=>{this.hide(!0)},this.handleListSelection=()=>{this.dispatchEvent(new Event("selection"))},this.handleElementBlur=t=>{const n=t.relatedTarget;if(n===this)return;let i=n;for(;i;){if(i===this.datalist){n.addEventListener("blur",this.handleElementBlur,{once:!0});return}i=i.parentElement}this.hide()}}get selected(){return this.datalist?this.datalist.selected:[]}show(){this.datalist&&!this.dispose&&(this.datalist.addEventListener("hide",this.handleLisHide),this.datalist.addEventListener("selection",this.handleListSelection),this.dispose=Pl(this,this.datalist,this.handleListPosition))}hide(t=!1){this.datalist&&this.dispose&&(this.datalist.removeEventListener("hide",this.handleLisHide),this.datalist.removeEventListener("selection",this.handleListSelection),this.dispose(),this.dispose=null,this.datalist.hide=!0,this.focused=t,this.dispatchEvent(new Event("hide")))}reset(){this.datalist&&this.datalist.reset()}handleBlur(t){this.dispose?this.handleElementBlur(t):super.handleBlur(t)}handleKeyDown(t){this.datalist&&this.dispose?this.datalist.handleKeyDown(t):super.handleKeyDown(t)}willUpdate(t){if(super.willUpdate(t),t.has("list"))if(this.list){const n=this.getRootNode();this.datalist=n.querySelector(`#${this.list}`)}else this.datalist=void 0}};$e.styles=[...tt.styles,st``];Qn([k({type:String})],$e.prototype,"list",void 0);Qn([k({type:String})],$e.prototype,"placement",void 0);Qn([k({type:Boolean})],$e.prototype,"stretch",void 0);$e=Qn([yt("cell-select")],$e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xn=globalThis,nr=xn.ShadowRoot&&(xn.ShadyCSS===void 0||xn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ir=Symbol(),Hr=new WeakMap;let cs=class{constructor(t,n,i){if(this._$cssResult$=!0,i!==ir)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(nr&&t===void 0){const i=n!==void 0&&n.length===1;i&&(t=Hr.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Hr.set(n,t))}return t}toString(){return this.cssText}};const Ml=e=>new cs(typeof e=="string"?e:e+"",void 0,ir),B=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((i,r,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new cs(n,e,ir)},Nl=(e,t)=>{if(nr)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const i=document.createElement("style"),r=xn.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,e.appendChild(i)}},jr=nr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const i of t.cssRules)n+=i.cssText;return Ml(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Dl,defineProperty:Il,getOwnPropertyDescriptor:Ul,getOwnPropertyNames:zl,getOwnPropertySymbols:Bl,getPrototypeOf:Fl}=Object,Bt=globalThis,Vr=Bt.trustedTypes,Hl=Vr?Vr.emptyScript:"",gi=Bt.reactiveElementPolyfillSupport,He=(e,t)=>e,xe={toAttribute(e,t){switch(t){case Boolean:e=e?Hl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ti=(e,t)=>!Dl(e,t),Wr={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:ti};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Bt.litPropertyMetadata??(Bt.litPropertyMetadata=new WeakMap);class fe extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Wr){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,n);r!==void 0&&Il(this.prototype,t,r)}}static getPropertyDescriptor(t,n,i){const{get:r,set:o}=Ul(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const a=r==null?void 0:r.call(this);o.call(this,s),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Wr}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;const t=Fl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){const n=this.properties,i=[...zl(n),...Bl(n)];for(const r of i)this.createProperty(r,n[r])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[i,r]of n)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const r=this._$Eu(n,i);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)n.unshift(jr(r))}else t!==void 0&&n.push(jr(t));return n}static _$Eu(t,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(t,n,i){this._$AK(t,i)}_$EC(t,n){var o;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const s=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:xe).toAttribute(n,i.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,n){var o;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:xe;this._$Em=r,this[r]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??ti)(this[t],n))return;this.P(t,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,i){this._$AL.has(t)||this._$AL.set(t,n),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}fe.elementStyles=[],fe.shadowRootOptions={mode:"open"},fe[He("elementProperties")]=new Map,fe[He("finalized")]=new Map,gi==null||gi({ReactiveElement:fe}),(Bt.reactiveElementVersions??(Bt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=globalThis,Dn=je.trustedTypes,qr=Dn?Dn.createPolicy("lit-html",{createHTML:e=>e}):void 0,us="$lit$",It=`lit$${Math.random().toFixed(9).slice(2)}$`,ds="?"+It,jl=`<${ds}>`,se=document,Ze=()=>se.createComment(""),Je=e=>e===null||typeof e!="object"&&typeof e!="function",rr=Array.isArray,Vl=e=>rr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",bi=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yr=/-->/g,Kr=/>/g,Gt=RegExp(`>|${bi}(?:([^\\s"'>=/]+)(${bi}*=${bi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xr=/'/g,Gr=/"/g,hs=/^(?:script|style|textarea|title)$/i,Wl=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),E=Wl(1),ht=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Zr=new WeakMap,Qt=se.createTreeWalker(se,129);function fs(e,t){if(!rr(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return qr!==void 0?qr.createHTML(t):t}const ql=(e,t)=>{const n=e.length-1,i=[];let r,o=t===2?"<svg>":t===3?"<math>":"",s=Me;for(let a=0;a<n;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Me?u[1]==="!--"?s=Yr:u[1]!==void 0?s=Kr:u[2]!==void 0?(hs.test(u[2])&&(r=RegExp("</"+u[2],"g")),s=Gt):u[3]!==void 0&&(s=Gt):s===Gt?u[0]===">"?(s=r??Me,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Gt:u[3]==='"'?Gr:Xr):s===Gr||s===Xr?s=Gt:s===Yr||s===Kr?s=Me:(s=Gt,r=void 0);const h=s===Gt&&e[a+1].startsWith("/>")?" ":"";o+=s===Me?l+jl:d>=0?(i.push(c),l.slice(0,d)+us+l.slice(d)+It+h):l+It+(d===-2?a:h)}return[fs(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Qe{constructor({strings:t,_$litType$:n},i){let r;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,u]=ql(t,n);if(this.el=Qe.createElement(c,i),Qt.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=Qt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(us)){const f=u[s++],h=r.getAttribute(d).split(It),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:p[2],strings:h,ctor:p[1]==="."?Kl:p[1]==="?"?Xl:p[1]==="@"?Gl:ei}),r.removeAttribute(d)}else d.startsWith(It)&&(l.push({type:6,index:o}),r.removeAttribute(d));if(hs.test(r.tagName)){const d=r.textContent.split(It),f=d.length-1;if(f>0){r.textContent=Dn?Dn.emptyScript:"";for(let h=0;h<f;h++)r.append(d[h],Ze()),Qt.nextNode(),l.push({type:2,index:++o});r.append(d[f],Ze())}}}else if(r.nodeType===8)if(r.data===ds)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(It,d+1))!==-1;)l.push({type:7,index:o}),d+=It.length-1}o++}}static createElement(t,n){const i=se.createElement("template");return i.innerHTML=t,i}}function Ae(e,t,n=e,i){var s,a;if(t===ht)return t;let r=i!==void 0?(s=n.o)==null?void 0:s[i]:n.l;const o=Je(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(e),r._$AT(e,n,i)),i!==void 0?(n.o??(n.o=[]))[i]=r:n.l=r),r!==void 0&&(t=Ae(e,r._$AS(e,t.values),r,i)),t}class Yl{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??se).importNode(n,!0);Qt.currentNode=r;let o=Qt.nextNode(),s=0,a=0,l=i[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new cn(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new Zl(o,this,t)),this._$AV.push(c),l=i[++a]}s!==(l==null?void 0:l.index)&&(o=Qt.nextNode(),s++)}return Qt.currentNode=se,r}p(t){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}class cn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,n,i,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=r,this.v=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Ae(this,t,n),Je(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==ht&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==M&&Je(this._$AH)?this._$AA.nextSibling.data=t:this.T(se.createTextNode(t)),this._$AH=t}$(t){var o;const{values:n,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Qe.createElement(fs(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(n);else{const s=new Yl(r,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let n=Zr.get(t.strings);return n===void 0&&Zr.set(t.strings,n=new Qe(t)),n}k(t){rr(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const o of t)r===n.length?n.push(i=new cn(this.O(Ze()),this.O(Ze()),this,this.options)):i=n[r],i._$AI(o),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(t=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var n;this._$AM===void 0&&(this.v=t,(n=this._$AP)==null||n.call(this,t))}}class ei{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,i,r,o){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=n,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}_$AI(t,n=this,i,r){const o=this.strings;let s=!1;if(o===void 0)t=Ae(this,t,n,0),s=!Je(t)||t!==this._$AH&&t!==ht,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Ae(this,a[i+l],n,l),c===ht&&(c=this._$AH[l]),s||(s=!Je(c)||c!==this._$AH[l]),c===M?t=M:t!==M&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!r&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Kl extends ei{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}class Xl extends ei{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==M)}}class Gl extends ei{constructor(t,n,i,r,o){super(t,n,i,r,o),this.type=5}_$AI(t,n=this){if((t=Ae(this,t,n,0)??M)===ht)return;const i=this._$AH,r=t===M&&i!==M||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==M&&(i===M||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class Zl{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ae(this,t)}}const vi=je.litHtmlPolyfillSupport;vi==null||vi(Qe,cn),(je.litHtmlVersions??(je.litHtmlVersions=[])).push("3.2.0");const Jl=(e,t,n)=>{const i=(n==null?void 0:n.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const o=(n==null?void 0:n.renderBefore)??null;i._$litPart$=r=new cn(t.insertBefore(Ze(),o),o,void 0,n??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let St=class extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Jl(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return ht}};var Uo;St._$litElement$=!0,St.finalized=!0,(Uo=globalThis.litElementHydrateSupport)==null||Uo.call(globalThis,{LitElement:St});const yi=globalThis.litElementPolyfillSupport;yi==null||yi({LitElement:St});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");var Ql=B`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Ni=new Set,pe=new Map;let Zt,or="ltr",sr="en";const ps=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ps){const e=new MutationObserver(gs);or=document.documentElement.dir||"ltr",sr=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ms(...e){e.map(t=>{const n=t.$code.toLowerCase();pe.has(n)?pe.set(n,Object.assign(Object.assign({},pe.get(n)),t)):pe.set(n,t),Zt||(Zt=t)}),gs()}function gs(){ps&&(or=document.documentElement.dir||"ltr",sr=document.documentElement.lang||navigator.language),[...Ni.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let tc=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ni.add(this.host)}hostDisconnected(){Ni.delete(this.host)}dir(){return`${this.host.dir||or}`.toLowerCase()}lang(){return`${this.host.lang||sr}`.toLowerCase()}getTranslationData(t){var n,i;const r=new Intl.Locale(t.replace(/_/g,"-")),o=r==null?void 0:r.language.toLowerCase(),s=(i=(n=r==null?void 0:r.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&i!==void 0?i:"",a=pe.get(`${o}-${s}`),l=pe.get(o);return{locale:r,language:o,region:s,primary:a,secondary:l}}exists(t,n){var i;const{primary:r,secondary:o}=this.getTranslationData((i=n.lang)!==null&&i!==void 0?i:this.lang());return n=Object.assign({includeFallback:!1},n),!!(r&&r[t]||o&&o[t]||n.includeFallback&&Zt&&Zt[t])}term(t,...n){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let o;if(i&&i[t])o=i[t];else if(r&&r[t])o=r[t];else if(Zt&&Zt[t])o=Zt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...n):o}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,n)}};var bs={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};ms(bs);var ec=bs,un=class extends tc{};ms(ec);var at=B`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,vs=Object.defineProperty,nc=Object.defineProperties,ic=Object.getOwnPropertyDescriptor,rc=Object.getOwnPropertyDescriptors,Jr=Object.getOwnPropertySymbols,oc=Object.prototype.hasOwnProperty,sc=Object.prototype.propertyIsEnumerable,Qr=(e,t,n)=>t in e?vs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ue=(e,t)=>{for(var n in t||(t={}))oc.call(t,n)&&Qr(e,n,t[n]);if(Jr)for(var n of Jr(t))sc.call(t,n)&&Qr(e,n,t[n]);return e},ni=(e,t)=>nc(e,rc(t)),m=(e,t,n,i)=>{for(var r=i>1?void 0:i?ic(t,n):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(i?s(t,n,r):s(r))||r);return i&&r&&vs(t,n,r),r},ys=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},ac=(e,t,n)=>(ys(e,t,"read from private field"),t.get(e)),lc=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},cc=(e,t,n,i)=>(ys(e,t,"write to private field"),t.set(e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uc={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:ti},dc=(e=uc,t,n)=>{const{kind:i,metadata:r}=n;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(n.name,e),i==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.P(s,void 0,e),a}}}if(i==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+i)};function b(e){return(t,n)=>typeof n=="object"?dc(e,t,n):((i,r,o)=>{const s=r.hasOwnProperty(o);return r.constructor.createProperty(o,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(r,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(e){return b({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hc=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(e,t){return(n,i,r)=>{const o=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(e))??null};return hc(n,i,{get(){return o(this)}})}}var An,W=class extends St{constructor(){super(),lc(this,An,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,ue({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const i=customElements.get(e);if(!i){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let r=" (unknown version)",o=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in i&&i.version&&(o=" v"+i.version),!(r&&o&&r===o)&&console.warn(`Attempted to register <${e}>${r}, but <${e}>${o} has already been registered.`)}attributeChangedCallback(e,t,n){ac(this,An)||(this.constructor.elementProperties.forEach((i,r)=>{i.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),cc(this,An,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};An=new WeakMap;W.version="2.17.1";W.dependencies={};m([b()],W.prototype,"dir",2);m([b()],W.prototype,"lang",2);var ri=class extends W{constructor(){super(...arguments),this.localize=new un(this)}render(){return E`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ri.styles=[at,Ql];var Ne=new WeakMap,De=new WeakMap,Ie=new WeakMap,wi=new WeakSet,mn=new WeakMap,ws=class{constructor(e,t){this.handleFormData=n=>{const i=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!s&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(a=>{n.formData.append(r,a.toString())}):n.formData.append(r,o.toString()))},this.handleFormSubmit=n=>{var i;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Ne.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),mn.set(this.host,[])},this.handleInteraction=n=>{const i=mn.get(this.host);i.includes(n.type)||i.push(n.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const i of n)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const i of n)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=ue({form:n=>{const i=n.form;if(i){const o=n.getRootNode().querySelector(`#${i}`);if(o)return o}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var i;return(i=n.disabled)!=null?i:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,checkValidity:n=>typeof n.checkValidity=="function"?n.checkValidity():!0,setValue:(n,i)=>n.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),mn.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),mn.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ne.has(this.form)?Ne.get(this.form).add(this.host):Ne.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),De.has(this.form)||(De.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ie.has(this.form)||(Ie.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Ne.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),De.has(this.form)&&(this.form.reportValidity=De.get(this.form),De.delete(this.form)),Ie.has(this.form)&&(this.form.checkValidity=Ie.get(this.form),Ie.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?wi.add(e):wi.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&n.setAttribute(i,t.getAttribute(i))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!wi.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},ar=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ni(ue({},ar),{valid:!1,valueMissing:!0}));Object.freeze(ni(ue({},ar),{valid:!1,customError:!0}));var fc=B`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,lr=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const i=n.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function pc(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let n="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(n+=i.textContent)}),n}var Di="";function to(e){Di=e}function mc(e=""){if(!Di){const t=[...document.getElementsByTagName("script")],n=t.find(i=>i.hasAttribute("data-shoelace"));if(n)to(n.getAttribute("data-shoelace"));else{const i=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let r="";i&&(r=i.getAttribute("src")),to(r.split("/").slice(0,-1).join("/"))}}return Di.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var gc={name:"default",resolver:e=>mc(`assets/icons/${e}.svg`)},bc=gc,eo={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},vc={name:"system",resolver:e=>e in eo?`data:image/svg+xml,${encodeURIComponent(eo[e])}`:""},yc=vc,wc=[bc,yc],Ii=[];function _c(e){Ii.push(e)}function $c(e){Ii=Ii.filter(t=>t!==e)}function no(e){return wc.find(t=>t.name===e)}var xc=B`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function Tt(e,t){const n=ue({waitUntilFirstUpdate:!1},t);return(i,r)=>{const{update:o}=i,s=Array.isArray(e)?e:[e];i.update=function(a){s.forEach(l=>{const c=l;if(a.has(c)){const u=a.get(c),d=this[c];u!==d&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,d)}}),o.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ac=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,_s=e=>e.strings===void 0,Ec={},kc=(e,t=Ec)=>e._$AH=t;var Ue=Symbol(),gn=Symbol(),_i,$i=new Map,ct=class extends W{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let i;if(t!=null&&t.spriteSheet)return this.svg=E`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Ue:gn}catch{return gn}try{const r=document.createElement("div");r.innerHTML=await i.text();const o=r.firstElementChild;if(((n=o==null?void 0:o.tagName)==null?void 0:n.toLowerCase())!=="svg")return Ue;_i||(_i=new DOMParser);const a=_i.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Ue}catch{return Ue}}connectedCallback(){super.connectedCallback(),_c(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),$c(this)}getIconSource(){const e=no(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:n}=this.getIconSource(),i=n?no(this.library):void 0;if(!t){this.svg=null;return}let r=$i.get(t);if(r||(r=this.resolveIcon(t,i),$i.set(t,r)),!this.initialRender)return;const o=await r;if(o===gn&&$i.delete(t),t===this.getIconSource().url){if(Ac(o)){if(this.svg=o,i){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&s&&i.mutator(s)}return}switch(o){case gn:case Ue:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=i==null?void 0:i.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ct.styles=[at,xc];m([lt()],ct.prototype,"svg",2);m([b({reflect:!0})],ct.prototype,"name",2);m([b()],ct.prototype,"src",2);m([b()],ct.prototype,"label",2);m([b({reflect:!0})],ct.prototype,"library",2);m([Tt("label")],ct.prototype,"handleLabelChange",1);m([Tt(["name","src","library"])],ct.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},cr=e=>(...t)=>({_$litDirective$:e,values:t});let ur=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this.t=t,this._$AM=n,this.i=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=cr(class extends ur{constructor(e){var t;if(super(e),e.type!==Nt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.st)o in t||(n.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(s?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return ht}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=Symbol.for(""),Sc=e=>{if((e==null?void 0:e.r)===$s)return e==null?void 0:e._$litStatic$},In=(e,...t)=>({_$litStatic$:t.reduce((n,i,r)=>n+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[r+1],e[0]),r:$s}),io=new Map,Cc=e=>(t,...n)=>{const i=n.length;let r,o;const s=[],a=[];let l,c=0,u=!1;for(;c<i;){for(l=t[c];c<i&&(o=n[c],(r=Sc(o))!==void 0);)l+=r+t[++c],u=!0;c!==i&&a.push(o),s.push(l),c++}if(c===i&&s.push(t[i]),u){const d=s.join("$$lit$$");(t=io.get(d))===void 0&&(s.raw=s,io.set(d,t=s)),n=a}return e(t,...n)},En=Cc(E);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=e=>e??M;var S=class extends W{constructor(){super(...arguments),this.formControlController=new ws(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new lr(this,"[default]","prefix","suffix"),this.localize=new un(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ar}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?In`a`:In`button`;return En`
      <${t}
        part="base"
        class=${Pt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${D(e?void 0:this.disabled)}
        type=${D(e?void 0:this.type)}
        title=${this.title}
        name=${D(e?void 0:this.name)}
        value=${D(e?void 0:this.value)}
        href=${D(e&&!this.disabled?this.href:void 0)}
        target=${D(e?this.target:void 0)}
        download=${D(e?this.download:void 0)}
        rel=${D(e?this.rel:void 0)}
        role=${D(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?En` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?En`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};S.styles=[at,fc];S.dependencies={"sl-icon":ct,"sl-spinner":ri};m([et(".button")],S.prototype,"button",2);m([lt()],S.prototype,"hasFocus",2);m([lt()],S.prototype,"invalid",2);m([b()],S.prototype,"title",2);m([b({reflect:!0})],S.prototype,"variant",2);m([b({reflect:!0})],S.prototype,"size",2);m([b({type:Boolean,reflect:!0})],S.prototype,"caret",2);m([b({type:Boolean,reflect:!0})],S.prototype,"disabled",2);m([b({type:Boolean,reflect:!0})],S.prototype,"loading",2);m([b({type:Boolean,reflect:!0})],S.prototype,"outline",2);m([b({type:Boolean,reflect:!0})],S.prototype,"pill",2);m([b({type:Boolean,reflect:!0})],S.prototype,"circle",2);m([b()],S.prototype,"type",2);m([b()],S.prototype,"name",2);m([b()],S.prototype,"value",2);m([b()],S.prototype,"href",2);m([b()],S.prototype,"target",2);m([b()],S.prototype,"rel",2);m([b()],S.prototype,"download",2);m([b()],S.prototype,"form",2);m([b({attribute:"formaction"})],S.prototype,"formAction",2);m([b({attribute:"formenctype"})],S.prototype,"formEnctype",2);m([b({attribute:"formmethod"})],S.prototype,"formMethod",2);m([b({attribute:"formnovalidate",type:Boolean})],S.prototype,"formNoValidate",2);m([b({attribute:"formtarget"})],S.prototype,"formTarget",2);m([Tt("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);S.define("sl-button");var Pc=B`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Oc=(e="value")=>(t,n)=>{const i=t.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(o,s,a){var l;const c=i.getPropertyOptions(e),u=typeof c.attribute=="string"?c.attribute:e;if(o===u){const d=c.converter||xe,h=(typeof d=="function"?d:(l=d==null?void 0:d.fromAttribute)!=null?l:xe.fromAttribute)(a,c.type);this[e]!==h&&(this[n]=h)}r.call(this,o,s,a)}},Rc=B`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ro=cr(class extends ur{constructor(e){if(super(e),e.type!==Nt.PROPERTY&&e.type!==Nt.ATTRIBUTE&&e.type!==Nt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!_s(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ht||t===M)return t;const n=e.element,i=e.name;if(e.type===Nt.PROPERTY){if(t===n[i])return ht}else if(e.type===Nt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return ht}else if(e.type===Nt.ATTRIBUTE&&n.getAttribute(i)===t+"")return ht;return kc(e),t}});var F=class extends W{constructor(){super(...arguments),this.formControlController=new ws(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new lr(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return E`
      <div
        class=${Pt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${Pt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${D(this.value)}
            .indeterminate=${ro(this.indeterminate)}
            .checked=${ro(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?E`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?E`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};F.styles=[at,Rc,Pc];F.dependencies={"sl-icon":ct};m([et('input[type="checkbox"]')],F.prototype,"input",2);m([lt()],F.prototype,"hasFocus",2);m([b()],F.prototype,"title",2);m([b()],F.prototype,"name",2);m([b()],F.prototype,"value",2);m([b({reflect:!0})],F.prototype,"size",2);m([b({type:Boolean,reflect:!0})],F.prototype,"disabled",2);m([b({type:Boolean,reflect:!0})],F.prototype,"checked",2);m([b({type:Boolean,reflect:!0})],F.prototype,"indeterminate",2);m([Oc("checked")],F.prototype,"defaultChecked",2);m([b({reflect:!0})],F.prototype,"form",2);m([b({type:Boolean,reflect:!0})],F.prototype,"required",2);m([b({attribute:"help-text"})],F.prototype,"helpText",2);m([Tt("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);m([Tt(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],F.prototype,"handleStateChange",1);F.define("sl-checkbox");var Tc=B`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,oo=new WeakMap;function xs(e){let t=oo.get(e);return t||(t=window.getComputedStyle(e,null),oo.set(e,t)),t}function Lc(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=xs(e);return t.visibility!=="hidden"&&t.display!=="none"}function Mc(e){const t=xs(e),{overflowY:n,overflowX:i}=t;return n==="scroll"||i==="scroll"?!0:n!=="auto"||i!=="auto"?!1:e.scrollHeight>e.clientHeight&&n==="auto"||e.scrollWidth>e.clientWidth&&i==="auto"}function Nc(e){const t=e.tagName.toLowerCase(),n=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(n)||n<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!Lc(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Mc(e)}function Dc(e){var t,n;const i=Uc(e),r=(t=i[0])!=null?t:null,o=(n=i[i.length-1])!=null?n:null;return{start:r,end:o}}function Ic(e,t){var n;return((n=e.getRootNode({composed:!0}))==null?void 0:n.host)!==t}function Uc(e){const t=new WeakMap,n=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||t.has(r))return;t.set(r,!0),!n.includes(r)&&Nc(r)&&n.push(r),r instanceof HTMLSlotElement&&Ic(r,e)&&r.assignedElements({flatten:!0}).forEach(o=>{i(o)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const o of r.children)i(o)}return i(e),n.sort((r,o)=>{const s=Number(r.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-s})}var zc=B`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Vt=Math.min,G=Math.max,Un=Math.round,bn=Math.floor,Wt=e=>({x:e,y:e}),Bc={left:"right",right:"left",bottom:"top",top:"bottom"},Fc={start:"end",end:"start"};function Ui(e,t,n){return G(e,Vt(t,n))}function Ce(e,t){return typeof e=="function"?e(t):e}function qt(e){return e.split("-")[0]}function Pe(e){return e.split("-")[1]}function As(e){return e==="x"?"y":"x"}function dr(e){return e==="y"?"height":"width"}function ae(e){return["top","bottom"].includes(qt(e))?"y":"x"}function hr(e){return As(ae(e))}function Hc(e,t,n){n===void 0&&(n=!1);const i=Pe(e),r=hr(e),o=dr(r);let s=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=zn(s)),[s,zn(s)]}function jc(e){const t=zn(e);return[zi(e),t,zi(t)]}function zi(e){return e.replace(/start|end/g,t=>Fc[t])}function Vc(e,t,n){const i=["left","right"],r=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:i:t?i:r;case"left":case"right":return t?o:s;default:return[]}}function Wc(e,t,n,i){const r=Pe(e);let o=Vc(qt(e),n==="start",i);return r&&(o=o.map(s=>s+"-"+r),t&&(o=o.concat(o.map(zi)))),o}function zn(e){return e.replace(/left|right|bottom|top/g,t=>Bc[t])}function qc(e){return{top:0,right:0,bottom:0,left:0,...e}}function Es(e){return typeof e!="number"?qc(e):{top:e,right:e,bottom:e,left:e}}function Bn(e){const{x:t,y:n,width:i,height:r}=e;return{width:i,height:r,top:n,left:t,right:t+i,bottom:n+r,x:t,y:n}}function so(e,t,n){let{reference:i,floating:r}=e;const o=ae(t),s=hr(t),a=dr(s),l=qt(t),c=o==="y",u=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,f=i[a]/2-r[a]/2;let h;switch(l){case"top":h={x:u,y:i.y-r.height};break;case"bottom":h={x:u,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:d};break;case"left":h={x:i.x-r.width,y:d};break;default:h={x:i.x,y:i.y}}switch(Pe(t)){case"start":h[s]-=f*(n&&c?-1:1);break;case"end":h[s]+=f*(n&&c?-1:1);break}return h}const Yc=async(e,t,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=so(c,i,l),f=i,h={},p=0;for(let g=0;g<a.length;g++){const{name:y,fn:v}=a[g],{x:w,y:_,data:x,reset:$}=await v({x:u,y:d,initialPlacement:i,placement:f,strategy:r,middlewareData:h,rects:c,platform:s,elements:{reference:e,floating:t}});u=w??u,d=_??d,h={...h,[y]:{...h[y],...x}},$&&p<=50&&(p++,typeof $=="object"&&($.placement&&(f=$.placement),$.rects&&(c=$.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):$.rects),{x:u,y:d}=so(c,f,l)),g=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:h}};async function fr(e,t){var n;t===void 0&&(t={});const{x:i,y:r,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Ce(t,e),p=Es(h),y=a[f?d==="floating"?"reference":"floating":d],v=Bn(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(y)))==null||n?y:y.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),w=d==="floating"?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,_=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),x=await(o.isElement==null?void 0:o.isElement(_))?await(o.getScale==null?void 0:o.getScale(_))||{x:1,y:1}:{x:1,y:1},$=Bn(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:_,strategy:l}):w);return{top:(v.top-$.top+p.top)/x.y,bottom:($.bottom-v.bottom+p.bottom)/x.y,left:(v.left-$.left+p.left)/x.x,right:($.right-v.right+p.right)/x.x}}const Kc=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:i,placement:r,rects:o,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=Ce(e,t)||{};if(c==null)return{};const d=Es(u),f={x:n,y:i},h=hr(r),p=dr(h),g=await s.getDimensions(c),y=h==="y",v=y?"top":"left",w=y?"bottom":"right",_=y?"clientHeight":"clientWidth",x=o.reference[p]+o.reference[h]-f[h]-o.floating[p],$=f[h]-o.reference[h],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let O=A?A[_]:0;(!O||!await(s.isElement==null?void 0:s.isElement(A)))&&(O=a.floating[_]||o.floating[p]);const R=x/2-$/2,T=O/2-g[p]/2-1,C=Vt(d[v],T),I=Vt(d[w],T),N=C,z=O-g[p]-I,L=O/2-g[p]/2+R,At=Ui(N,L,z),K=!l.arrow&&Pe(r)!=null&&L!==At&&o.reference[p]/2-(L<N?C:I)-g[p]/2<0,H=K?L<N?L-N:L-z:0;return{[h]:f[h]+H,data:{[h]:At,centerOffset:L-At-H,...K&&{alignmentOffset:H}},reset:K}}}),Xc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:r,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...y}=Ce(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const v=qt(r),w=ae(a),_=qt(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),$=f||(_||!g?[zn(a)]:jc(a)),A=p!=="none";!f&&A&&$.push(...Wc(a,g,p,x));const O=[a,...$],R=await fr(t,y),T=[];let C=((i=o.flip)==null?void 0:i.overflows)||[];if(u&&T.push(R[v]),d){const L=Hc(r,s,x);T.push(R[L[0]],R[L[1]])}if(C=[...C,{placement:r,overflows:T}],!T.every(L=>L<=0)){var I,N;const L=(((I=o.flip)==null?void 0:I.index)||0)+1,At=O[L];if(At)return{data:{index:L,overflows:C},reset:{placement:At}};let K=(N=C.filter(H=>H.overflows[0]<=0).sort((H,j)=>H.overflows[1]-j.overflows[1])[0])==null?void 0:N.placement;if(!K)switch(h){case"bestFit":{var z;const H=(z=C.filter(j=>{if(A){const V=ae(j.placement);return V===w||V==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(V=>V>0).reduce((V,ui)=>V+ui,0)]).sort((j,V)=>j[1]-V[1])[0])==null?void 0:z[0];H&&(K=H);break}case"initialPlacement":K=a;break}if(r!==K)return{reset:{placement:K}}}return{}}}};async function Gc(e,t){const{placement:n,platform:i,elements:r}=e,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=qt(n),a=Pe(n),l=ae(n)==="y",c=["left","top"].includes(s)?-1:1,u=o&&l?-1:1,d=Ce(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof p=="number"&&(h=a==="end"?p*-1:p),l?{x:h*u,y:f*c}:{x:f*c,y:h*u}}const Zc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,i;const{x:r,y:o,placement:s,middlewareData:a}=t,l=await Gc(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:s}}}}},Jc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:i,placement:r}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:v,y:w}=y;return{x:v,y:w}}},...l}=Ce(e,t),c={x:n,y:i},u=await fr(t,l),d=ae(qt(r)),f=As(d);let h=c[f],p=c[d];if(o){const y=f==="y"?"top":"left",v=f==="y"?"bottom":"right",w=h+u[y],_=h-u[v];h=Ui(w,h,_)}if(s){const y=d==="y"?"top":"left",v=d==="y"?"bottom":"right",w=p+u[y],_=p-u[v];p=Ui(w,p,_)}const g=a.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-i,enabled:{[f]:o,[d]:s}}}}}},Qc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,i;const{placement:r,rects:o,platform:s,elements:a}=t,{apply:l=()=>{},...c}=Ce(e,t),u=await fr(t,c),d=qt(r),f=Pe(r),h=ae(r)==="y",{width:p,height:g}=o.floating;let y,v;d==="top"||d==="bottom"?(y=d,v=f===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(v=d,y=f==="end"?"top":"bottom");const w=g-u.top-u.bottom,_=p-u.left-u.right,x=Vt(g-u[y],w),$=Vt(p-u[v],_),A=!t.middlewareData.shift;let O=x,R=$;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(R=_),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(O=w),A&&!f){const C=G(u.left,0),I=G(u.right,0),N=G(u.top,0),z=G(u.bottom,0);h?R=p-2*(C!==0||I!==0?C+I:G(u.left,u.right)):O=g-2*(N!==0||z!==0?N+z:G(u.top,u.bottom))}await l({...t,availableWidth:R,availableHeight:O});const T=await s.getDimensions(a.floating);return p!==T.width||g!==T.height?{reset:{rects:!0}}:{}}}};function oi(){return typeof window<"u"}function Oe(e){return ks(e)?(e.nodeName||"").toLowerCase():"#document"}function J(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function xt(e){var t;return(t=(ks(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ks(e){return oi()?e instanceof Node||e instanceof J(e).Node:!1}function bt(e){return oi()?e instanceof Element||e instanceof J(e).Element:!1}function _t(e){return oi()?e instanceof HTMLElement||e instanceof J(e).HTMLElement:!1}function ao(e){return!oi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof J(e).ShadowRoot}function dn(e){const{overflow:t,overflowX:n,overflowY:i,display:r}=vt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(r)}function tu(e){return["table","td","th"].includes(Oe(e))}function si(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function pr(e){const t=mr(),n=bt(e)?vt(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function eu(e){let t=Yt(e);for(;_t(t)&&!Ee(t);){if(pr(t))return t;if(si(t))return null;t=Yt(t)}return null}function mr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ee(e){return["html","body","#document"].includes(Oe(e))}function vt(e){return J(e).getComputedStyle(e)}function ai(e){return bt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Yt(e){if(Oe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ao(e)&&e.host||xt(e);return ao(t)?t.host:t}function Ss(e){const t=Yt(e);return Ee(t)?e.ownerDocument?e.ownerDocument.body:e.body:_t(t)&&dn(t)?t:Ss(t)}function tn(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=Ss(e),o=r===((i=e.ownerDocument)==null?void 0:i.body),s=J(r);if(o){const a=Bi(s);return t.concat(s,s.visualViewport||[],dn(r)?r:[],a&&n?tn(a):[])}return t.concat(r,tn(r,[],n))}function Bi(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Cs(e){const t=vt(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=_t(e),o=r?e.offsetWidth:n,s=r?e.offsetHeight:i,a=Un(n)!==o||Un(i)!==s;return a&&(n=o,i=s),{width:n,height:i,$:a}}function gr(e){return bt(e)?e:e.contextElement}function be(e){const t=gr(e);if(!_t(t))return Wt(1);const n=t.getBoundingClientRect(),{width:i,height:r,$:o}=Cs(t);let s=(o?Un(n.width):n.width)/i,a=(o?Un(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const nu=Wt(0);function Ps(e){const t=J(e);return!mr()||!t.visualViewport?nu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function iu(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==J(e)?!1:t}function le(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=gr(e);let s=Wt(1);t&&(i?bt(i)&&(s=be(i)):s=be(e));const a=iu(o,n,i)?Ps(o):Wt(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,u=r.width/s.x,d=r.height/s.y;if(o){const f=J(o),h=i&&bt(i)?J(i):i;let p=f,g=Bi(p);for(;g&&i&&h!==p;){const y=be(g),v=g.getBoundingClientRect(),w=vt(g),_=v.left+(g.clientLeft+parseFloat(w.paddingLeft))*y.x,x=v.top+(g.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=_,c+=x,p=J(g),g=Bi(p)}}return Bn({width:u,height:d,x:l,y:c})}function ru(e){let{elements:t,rect:n,offsetParent:i,strategy:r}=e;const o=r==="fixed",s=xt(i),a=t?si(t.floating):!1;if(i===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},c=Wt(1);const u=Wt(0),d=_t(i);if((d||!d&&!o)&&((Oe(i)!=="body"||dn(s))&&(l=ai(i)),_t(i))){const f=le(i);c=be(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}}function ou(e){return Array.from(e.getClientRects())}function Fi(e,t){const n=ai(e).scrollLeft;return t?t.left+n:le(xt(e)).left+n}function su(e){const t=xt(e),n=ai(e),i=e.ownerDocument.body,r=G(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=G(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Fi(e);const a=-n.scrollTop;return vt(i).direction==="rtl"&&(s+=G(t.clientWidth,i.clientWidth)-r),{width:r,height:o,x:s,y:a}}function au(e,t){const n=J(e),i=xt(e),r=n.visualViewport;let o=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;const c=mr();(!c||c&&t==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a,y:l}}function lu(e,t){const n=le(e,!0,t==="fixed"),i=n.top+e.clientTop,r=n.left+e.clientLeft,o=_t(e)?be(e):Wt(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=r*o.x,c=i*o.y;return{width:s,height:a,x:l,y:c}}function lo(e,t,n){let i;if(t==="viewport")i=au(e,n);else if(t==="document")i=su(xt(e));else if(bt(t))i=lu(t,n);else{const r=Ps(e);i={...t,x:t.x-r.x,y:t.y-r.y}}return Bn(i)}function Os(e,t){const n=Yt(e);return n===t||!bt(n)||Ee(n)?!1:vt(n).position==="fixed"||Os(n,t)}function cu(e,t){const n=t.get(e);if(n)return n;let i=tn(e,[],!1).filter(a=>bt(a)&&Oe(a)!=="body"),r=null;const o=vt(e).position==="fixed";let s=o?Yt(e):e;for(;bt(s)&&!Ee(s);){const a=vt(s),l=pr(s);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||dn(s)&&!l&&Os(e,s))?i=i.filter(u=>u!==s):r=a,s=Yt(s)}return t.set(e,i),i}function uu(e){let{element:t,boundary:n,rootBoundary:i,strategy:r}=e;const s=[...n==="clippingAncestors"?si(t)?[]:cu(t,this._c):[].concat(n),i],a=s[0],l=s.reduce((c,u)=>{const d=lo(t,u,r);return c.top=G(d.top,c.top),c.right=Vt(d.right,c.right),c.bottom=Vt(d.bottom,c.bottom),c.left=G(d.left,c.left),c},lo(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function du(e){const{width:t,height:n}=Cs(e);return{width:t,height:n}}function hu(e,t,n){const i=_t(t),r=xt(t),o=n==="fixed",s=le(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Wt(0);if(i||!i&&!o)if((Oe(t)!=="body"||dn(r))&&(a=ai(t)),i){const h=le(t,!0,o,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else r&&(l.x=Fi(r));let c=0,u=0;if(r&&!i&&!o){const h=r.getBoundingClientRect();u=h.top+a.scrollTop,c=h.left+a.scrollLeft-Fi(r,h)}const d=s.left+a.scrollLeft-l.x-c,f=s.top+a.scrollTop-l.y-u;return{x:d,y:f,width:s.width,height:s.height}}function xi(e){return vt(e).position==="static"}function co(e,t){if(!_t(e)||vt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return xt(e)===n&&(n=n.ownerDocument.body),n}function Rs(e,t){const n=J(e);if(si(e))return n;if(!_t(e)){let r=Yt(e);for(;r&&!Ee(r);){if(bt(r)&&!xi(r))return r;r=Yt(r)}return n}let i=co(e,t);for(;i&&tu(i)&&xi(i);)i=co(i,t);return i&&Ee(i)&&xi(i)&&!pr(i)?n:i||eu(e)||n}const fu=async function(e){const t=this.getOffsetParent||Rs,n=this.getDimensions,i=await n(e.floating);return{reference:hu(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function pu(e){return vt(e).direction==="rtl"}const kn={convertOffsetParentRelativeRectToViewportRelativeRect:ru,getDocumentElement:xt,getClippingRect:uu,getOffsetParent:Rs,getElementRects:fu,getClientRects:ou,getDimensions:du,getScale:be,isElement:bt,isRTL:pu};function mu(e,t){let n=null,i;const r=xt(e);function o(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(a||t(),!d||!f)return;const h=bn(u),p=bn(r.clientWidth-(c+d)),g=bn(r.clientHeight-(u+f)),y=bn(c),w={rootMargin:-h+"px "+-p+"px "+-g+"px "+-y+"px",threshold:G(0,Vt(1,l))||1};let _=!0;function x($){const A=$[0].intersectionRatio;if(A!==l){if(!_)return s();A?s(!1,A):i=setTimeout(()=>{s(!1,1e-7)},1e3)}_=!1}try{n=new IntersectionObserver(x,{...w,root:r.ownerDocument})}catch{n=new IntersectionObserver(x,w)}n.observe(e)}return s(!0),o}function gu(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=gr(e),u=r||o?[...c?tn(c):[],...tn(t)]:[];u.forEach(v=>{r&&v.addEventListener("scroll",n,{passive:!0}),o&&v.addEventListener("resize",n)});const d=c&&a?mu(c,n):null;let f=-1,h=null;s&&(h=new ResizeObserver(v=>{let[w]=v;w&&w.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=h)==null||_.observe(t)})),n()}),c&&!l&&h.observe(c),h.observe(t));let p,g=l?le(e):null;l&&y();function y(){const v=le(e);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&n(),g=v,p=requestAnimationFrame(y)}return n(),()=>{var v;u.forEach(w=>{r&&w.removeEventListener("scroll",n),o&&w.removeEventListener("resize",n)}),d==null||d(),(v=h)==null||v.disconnect(),h=null,l&&cancelAnimationFrame(p)}}const bu=Zc,vu=Jc,yu=Xc,uo=Qc,wu=Kc,_u=(e,t,n)=>{const i=new Map,r={platform:kn,...n},o={...r.platform,_c:i};return Yc(e,t,{...r,platform:o})};function $u(e){return xu(e)}function Ai(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function xu(e){for(let t=e;t;t=Ai(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Ai(e);t;t=Ai(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||t.tagName==="BODY"))return t}return null}function Au(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var P=class extends W{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let i=0,r=0,o=0,s=0,a=0,l=0,c=0,u=0;n?e.top<t.top?(i=e.left,r=e.bottom,o=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,u=t.top):(i=t.left,r=t.bottom,o=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,u=e.top):e.left<t.left?(i=e.right,r=e.top,o=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,u=t.bottom):(i=t.right,r=t.top,o=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Au(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=gu(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[bu({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(uo({apply:({rects:n})=>{const i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${n.reference.width}px`:"",this.popup.style.height=r?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(yu({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(vu({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(uo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(wu({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?n=>kn.getOffsetParent(n,$u):kn.getOffsetParent;_u(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:ni(ue({},kn),{getOffsetParent:t})}).then(({x:n,y:i,middlewareData:r,placement:o})=>{const s=this.matches(":dir(rtl)"),a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${n}px`,top:`${i}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let u="",d="",f="",h="";if(this.arrowPlacement==="start"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?p:"",h=s?"":p}else if(this.arrowPlacement==="end"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":p,h=s?p:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",u=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:u,right:d,bottom:f,left:h,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return E`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Pt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Pt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?E`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};P.styles=[at,zc];m([et(".popup")],P.prototype,"popup",2);m([et(".popup__arrow")],P.prototype,"arrowEl",2);m([b()],P.prototype,"anchor",2);m([b({type:Boolean,reflect:!0})],P.prototype,"active",2);m([b({reflect:!0})],P.prototype,"placement",2);m([b({reflect:!0})],P.prototype,"strategy",2);m([b({type:Number})],P.prototype,"distance",2);m([b({type:Number})],P.prototype,"skidding",2);m([b({type:Boolean})],P.prototype,"arrow",2);m([b({attribute:"arrow-placement"})],P.prototype,"arrowPlacement",2);m([b({attribute:"arrow-padding",type:Number})],P.prototype,"arrowPadding",2);m([b({type:Boolean})],P.prototype,"flip",2);m([b({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],P.prototype,"flipFallbackPlacements",2);m([b({attribute:"flip-fallback-strategy"})],P.prototype,"flipFallbackStrategy",2);m([b({type:Object})],P.prototype,"flipBoundary",2);m([b({attribute:"flip-padding",type:Number})],P.prototype,"flipPadding",2);m([b({type:Boolean})],P.prototype,"shift",2);m([b({type:Object})],P.prototype,"shiftBoundary",2);m([b({attribute:"shift-padding",type:Number})],P.prototype,"shiftPadding",2);m([b({attribute:"auto-size"})],P.prototype,"autoSize",2);m([b()],P.prototype,"sync",2);m([b({type:Object})],P.prototype,"autoSizeBoundary",2);m([b({attribute:"auto-size-padding",type:Number})],P.prototype,"autoSizePadding",2);m([b({attribute:"hover-bridge",type:Boolean})],P.prototype,"hoverBridge",2);var Ts=new Map,Eu=new WeakMap;function ku(e){return e??{keyframes:[],options:{duration:0}}}function ho(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ls(e,t){Ts.set(e,ku(t))}function fo(e,t,n){const i=Eu.get(e);if(i!=null&&i[t])return ho(i[t],n.dir);const r=Ts.get(t);return r?ho(r,n.dir):{keyframes:[],options:{duration:0}}}function po(e,t){return new Promise(n=>{function i(r){r.target===e&&(e.removeEventListener(t,i),n())}e.addEventListener(t,i)})}function mo(e,t,n){return new Promise(i=>{if((n==null?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,ni(ue({},n),{duration:Su()?0:n.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function Su(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function go(e){return Promise.all(e.getAnimations().map(t=>new Promise(n=>{t.cancel(),requestAnimationFrame(n)})))}var Y=class extends W{constructor(){super(...arguments),this.localize=new un(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,i,r;const o=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(r=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),i=n[0],r=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>Dc(i).start);let n;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,po(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,po(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await go(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=fo(this,"dropdown.show",{dir:this.localize.dir()});await mo(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await go(this);const{keyframes:e,options:t}=fo(this,"dropdown.hide",{dir:this.localize.dir()});await mo(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return E`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${D(this.sync?this.sync:void 0)}
        class=${Pt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Y.styles=[at,Tc];Y.dependencies={"sl-popup":P};m([et(".dropdown")],Y.prototype,"popup",2);m([et(".dropdown__trigger")],Y.prototype,"trigger",2);m([et(".dropdown__panel")],Y.prototype,"panel",2);m([b({type:Boolean,reflect:!0})],Y.prototype,"open",2);m([b({reflect:!0})],Y.prototype,"placement",2);m([b({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);m([b({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Y.prototype,"stayOpenOnSelect",2);m([b({attribute:!1})],Y.prototype,"containingElement",2);m([b({type:Number})],Y.prototype,"distance",2);m([b({type:Number})],Y.prototype,"skidding",2);m([b({type:Boolean})],Y.prototype,"hoist",2);m([b({reflect:!0})],Y.prototype,"sync",2);m([Tt("open",{waitUntilFirstUpdate:!0})],Y.prototype,"handleOpenChange",1);Ls("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ls("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Y.define("sl-dropdown");var Cu=B`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,hn=class extends W{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=ze(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=ze(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=ze(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=ze(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const n=e.indexOf(t),i=ze(t);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",n===0),i.toggleAttribute("data-sl-button-group__button--inner",n>0&&n<e.length-1),i.toggleAttribute("data-sl-button-group__button--last",n===e.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return E`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};hn.styles=[at,Cu];m([et("slot")],hn.prototype,"defaultSlot",2);m([lt()],hn.prototype,"disableRole",2);m([b()],hn.prototype,"label",2);function ze(e){var t;const n="sl-button, sl-radio-button";return(t=e.closest(n))!=null?t:e.querySelector(n)}hn.define("sl-button-group");var Pu=B`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,br=class extends W{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],n=e.composedPath(),i=n.find(a=>{var l;return t.includes(((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||n.find(a=>{var l;return((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const s=i;s.type==="checkbox"&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),n=this.getCurrentItem();let i=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(n=>{n.setAttribute("tabindex",n===e?"0":"-1")})}render(){return E`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};br.styles=[at,Pu];m([et("slot")],br.prototype,"defaultSlot",2);br.define("sl-menu");var Ou=B`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const r of n)(i=r._$AO)==null||i.call(r,t,!1),Ve(r,t);return!0},Fn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},Ms=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Lu(t)}};function Ru(e){this._$AN!==void 0?(Fn(this),this._$AM=e,Ms(this)):this._$AM=e}function Tu(e,t=!1,n=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let o=n;o<i.length;o++)Ve(i[o],!1),Fn(i[o]);else i!=null&&(Ve(i,!1),Fn(i));else Ve(this,e)}const Lu=e=>{e.type==Nt.CHILD&&(e._$AP??(e._$AP=Tu),e._$AQ??(e._$AQ=Ru))};class Mu extends ur{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,i){super._$AT(t,n,i),Ms(this),this.isConnected=t._$AU}_$AO(t,n=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),n&&(Ve(this,t),Fn(this))}setValue(t){if(_s(this.t))this.t._$AI(t,this);else{const n=[...this.t._$AH];n[this.i]=t,this.t._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nu=()=>new Du;class Du{}const Ei=new WeakMap,Iu=cr(class extends Mu{render(e){return M}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),M}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let n=Ei.get(t);n===void 0&&(n=new WeakMap,Ei.set(t,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Ei.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Uu=class{constructor(e,t){this.popupRef=Nu(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=n=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${n.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${n.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=n=>{switch(n.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":n.target!==this.host&&(n.preventDefault(),n.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(n);break}},this.handleClick=n=>{var i;n.target===this.host?(n.preventDefault(),n.stopPropagation()):n.target instanceof Element&&(n.target.tagName==="sl-menu-item"||(i=n.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=n=>{n.relatedTarget&&n.relatedTarget instanceof Element&&this.host.contains(n.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=n=>{n.stopPropagation()},this.handlePopupReposition=()=>{const n=this.host.renderRoot.querySelector("slot[name='submenu']"),i=n==null?void 0:n.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],r=this.host.matches(":dir(rtl)");if(!i)return;const{left:o,top:s,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+l}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let n=null;for(const i of t.assignedElements())if(n=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),n.length!==0)break;if(!(!n||n.length===0)){n[0].setAttribute("tabindex","0");for(let i=1;i!==n.length;++i)n[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((r,o)=>{var s;const a=(s=t.get(o))!=null?s:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return r-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.host.matches(":dir(rtl)");return this.isConnected?E`
      <sl-popup
        ${Iu(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:E` <slot name="submenu" hidden></slot> `}},nt=class extends W{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new lr(this,"submenu"),this.submenuController=new Uu(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return pc(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.matches(":dir(rtl)"),t=this.submenuController.isExpanded();return E`
      <div
        id="anchor"
        part="base"
        class=${Pt({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?E` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};nt.styles=[at,Ou];nt.dependencies={"sl-icon":ct,"sl-popup":P,"sl-spinner":ri};m([et("slot:not([name])")],nt.prototype,"defaultSlot",2);m([et(".menu-item")],nt.prototype,"menuItem",2);m([b()],nt.prototype,"type",2);m([b({type:Boolean,reflect:!0})],nt.prototype,"checked",2);m([b()],nt.prototype,"value",2);m([b({type:Boolean,reflect:!0})],nt.prototype,"loading",2);m([b({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);m([Tt("checked")],nt.prototype,"handleCheckedChange",1);m([Tt("disabled")],nt.prototype,"handleDisabledChange",1);m([Tt("type")],nt.prototype,"handleTypeChange",1);nt.define("sl-menu-item");var zu=B`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ns=class extends W{render(){return E` <slot part="base" class="menu-label"></slot> `}};Ns.styles=[at,zu];Ns.define("sl-menu-label");ri.define("sl-spinner");var Bu=B`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Fu=B`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,it=class extends W{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?In`a`:In`button`;return En`
      <${t}
        part="base"
        class=${Pt({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${D(e?void 0:this.disabled)}
        type=${D(e?void 0:"button")}
        href=${D(e?this.href:void 0)}
        target=${D(e?this.target:void 0)}
        download=${D(e?this.download:void 0)}
        rel=${D(e&&this.target?"noreferrer noopener":void 0)}
        role=${D(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${D(this.name)}
          library=${D(this.library)}
          src=${D(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};it.styles=[at,Fu];it.dependencies={"sl-icon":ct};m([et(".icon-button")],it.prototype,"button",2);m([lt()],it.prototype,"hasFocus",2);m([b()],it.prototype,"name",2);m([b()],it.prototype,"library",2);m([b()],it.prototype,"src",2);m([b()],it.prototype,"href",2);m([b()],it.prototype,"target",2);m([b()],it.prototype,"download",2);m([b()],it.prototype,"label",2);m([b({type:Boolean,reflect:!0})],it.prototype,"disabled",2);var de=class extends W{constructor(){super(...arguments),this.localize=new un(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return E`
      <span
        part="base"
        class=${Pt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?E`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};de.styles=[at,Bu];de.dependencies={"sl-icon-button":it};m([b({reflect:!0})],de.prototype,"variant",2);m([b({reflect:!0})],de.prototype,"size",2);m([b({type:Boolean,reflect:!0})],de.prototype,"pill",2);m([b({type:Boolean})],de.prototype,"removable",2);de.define("sl-tag");var rt=class extends W{constructor(){super(...arguments),this.localize=new un(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return E`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};m([b()],rt.prototype,"date",2);m([b()],rt.prototype,"weekday",2);m([b()],rt.prototype,"era",2);m([b()],rt.prototype,"year",2);m([b()],rt.prototype,"month",2);m([b()],rt.prototype,"day",2);m([b()],rt.prototype,"hour",2);m([b()],rt.prototype,"minute",2);m([b()],rt.prototype,"second",2);m([b({attribute:"time-zone-name"})],rt.prototype,"timeZoneName",2);m([b({attribute:"time-zone"})],rt.prototype,"timeZone",2);m([b({attribute:"hour-format"})],rt.prototype,"hourFormat",2);rt.define("sl-format-date");var Hu=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,Vu=(e,t,n,i)=>{for(var r=i>1?void 0:i?ju(t,n):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(i?s(t,n,r):s(r))||r);return i&&r&&Hu(t,n,r),r};let Hi=class extends St{render(){return E`<p>Not found!</p>`}};Hi.styles=[B`
      :host {
        display: block;
        margin: 1rem;
      }
    `];Hi=Vu([ii("error-view")],Hi);var Wu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,Yu=(e,t,n,i)=>{for(var r=i>1?void 0:i?qu(t,n):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(i?s(t,n,r):s(r))||r);return i&&r&&Wu(t,n,r),r};let ji=class extends St{onBeforeEnter(e,t){const i=new URLSearchParams(e.search).get("redirect");if(i&&i.startsWith("/"))return t.redirect(i)}render(){return E`
      <sl-button
        href="itms-services://?action=download-manifest&url=https://ecmel.dev/manifest.plist"
        >Defter iOS</sl-button
      >
      <sl-button
        href="https://github.com/ecmel/ecmel.dev/releases/download/defter/app-universal-release.apk"
        >Android</sl-button
      >
    `}};ji.styles=[B`
      :host {
        display: block;
        margin: 1rem;
      }
    `];ji=Yu([ii("home-view")],ji);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*vn(e,t){if(e!==void 0){let n=0;for(const i of e)yield t(i,n++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ku=Symbol();class Xu{get taskComplete(){return this.t||(this.i===1?this.t=new Promise((t,n)=>{this.o=t,this.h=n}):this.i===3?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,n,i){var o;this.p=0,this.i=0,(this._=t).addController(this);const r=typeof n=="object"?n:{task:n,args:i};this.v=r.task,this.j=r.args,this.m=r.argsEqual??Gu,this.k=r.onComplete,this.A=r.onError,this.autoRun=r.autoRun??!0,"initialValue"in r&&(this.u=r.initialValue,this.i=2,this.O=(o=this.T)==null?void 0:o.call(this))}hostUpdate(){this.autoRun===!0&&this.S()}hostUpdated(){this.autoRun==="afterUpdate"&&this.S()}T(){if(this.j===void 0)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),n=this.O;this.O=t,t===n||t===void 0||n!==void 0&&this.m(n,t)||await this.run(t)}async run(t){var s,a,l,c,u;let n,i;t??(t=this.T()),this.O=t,this.i===1?(s=this.q)==null||s.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();const r=++this.p;this.q=new AbortController;let o=!1;try{n=await this.v(t,{signal:this.q.signal})}catch(d){o=!0,i=d}if(this.p===r){if(n===Ku)this.i=0;else{if(o===!1){try{(a=this.k)==null||a.call(this,n)}catch{}this.i=2,(l=this.o)==null||l.call(this,n)}else{try{(c=this.A)==null||c.call(this,i)}catch{}this.i=3,(u=this.h)==null||u.call(this,i)}this.u=n,this.l=i}this._.requestUpdate()}}abort(t){var n;this.i===1&&((n=this.q)==null||n.abort(t))}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){var n,i,r,o;switch(this.i){case 0:return(n=t.initial)==null?void 0:n.call(t);case 1:return(i=t.pending)==null?void 0:i.call(t);case 2:return(r=t.complete)==null?void 0:r.call(t,this.value);case 3:return(o=t.error)==null?void 0:o.call(t,this.error);default:throw Error("Unexpected status: "+this.i)}}}const Gu=(e,t)=>e===t||e.length===t.length&&e.every((n,i)=>!ti(n,t[i])),Ds=e=>e===void 0||e==="auto"||e==="instant"||e==="smooth";function Zu(e,t){this.scrollLeft=e,this.scrollTop=t}const Is=(e,t,n="cannot convert to dictionary.")=>`Failed to execute '${e}' on '${t}': ${n}`,Us=(e,t,n)=>Is(e,t,`The provided value '${n}' is not a valid enum value of type ScrollBehavior.`),bo=(e,t,n)=>{var i;const r=`__SEAMLESS.BACKUP$${t}`;return!e[r]&&e[t]&&!(!((i=e[t])===null||i===void 0)&&i.__isPolyfill)&&(e[r]=e[t]),e[r]||n},Ju=e=>{const t=typeof e;return e!==null&&(t==="object"||t==="function")},vr=e=>e.ownerDocument.scrollingElement||e.ownerDocument.documentElement;function Qu(e){if(typeof Event=="function")return new Event("scrollend",{bubbles:e,cancelable:!1});const t=document.createEvent("Event");return t.initEvent("scrollend",e,!1),t}const td=e=>.5*(1-Math.cos(Math.PI*e));function yr(){var e;let t;return!((e=window.performance)===null||e===void 0)&&e.now?t=()=>window.performance.now():t=()=>window.Date.now(),yr=t,t()}const ed=500,zs=e=>{const n=(yr()-e.timeStamp)/(e.duration||ed);if(n>1){e.method(e.targetX,e.targetY),e.callback();return}const i=(e.timingFunc||td)(n),r=e.startX+(e.targetX-e.startX)*i,o=e.startY+(e.targetY-e.startY)*i;e.method(r,o),e.rafId=window.requestAnimationFrame(()=>{zs(e)})},Hn=e=>isFinite(e)?Number(e):0,nd=e=>{var t;return(t=e.isConnected)!==null&&t!==void 0?t:!e.ownerDocument||!(e.ownerDocument.compareDocumentPosition(e)&1)},id=(e,t,n)=>{var i,r;if(!nd(e))return;const o=e.scrollLeft,s=e.scrollTop,a=Hn((i=t.left)!==null&&i!==void 0?i:o),l=Hn((r=t.top)!==null&&r!==void 0?r:s);if(a===o&&l===s)return;const c=bo(HTMLElement.prototype,"scroll",Zu),u=bo(Object.getPrototypeOf(e),"scroll",c).bind(e);if(t.behavior!=="smooth"){u(a,l);return}const d=()=>{window.removeEventListener("wheel",p),window.removeEventListener("touchmove",p)},f=()=>{d();const g=e.nodeType===9;e.dispatchEvent(Qu(g))},h=Object.assign(Object.assign({},n),{timeStamp:yr(),startX:o,startY:s,targetX:a,targetY:l,rafId:0,method:u,callback:f}),p=()=>{window.cancelAnimationFrame(h.rafId),d()};window.addEventListener("wheel",p,{passive:!0,once:!0}),window.addEventListener("touchmove",p,{passive:!0,once:!0}),zs(h)},rd=e=>e.window===e,od=e=>(t,n,i)=>{const[r,o]=rd(t)?[vr(t.document.documentElement),"Window"]:[t,"Element"],s=n??{};if(!Ju(s))throw new TypeError(Is(e,o));if(!Ds(s.behavior))throw new TypeError(Us(e,o,s.behavior));e==="scrollBy"&&(s.left=Hn(s.left)+r.scrollLeft,s.top=Hn(s.top)+r.scrollTop),id(r,s,i)},sd=od("scroll"),ad=sd,Bs=e=>{switch(e){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},Fs=(e,t,n,i)=>{let r=0;switch(t||(r^=2),e){case 0:r=r>>1|(r&1)<<1,[n,i]=[i,n];break;case 1:case 3:r^=1;break;case 4:r^=2;break}return[r,n,i]},ld=e=>(Fs(Bs(e.writingMode),e.direction!=="rtl",void 0,void 0)[0]&1)===1,cd=(e,t,n)=>{const[i,r,o]=Fs(t,n,e.block||"start",e.inline||"nearest");return[r,o].map((s,a)=>{switch(s){case"center":return 1;case"nearest":return 0;default:{const l=i>>a&1;return s==="start"==!l?2:3}}})},vo=(e,t,n,i,r,o,s)=>e!==0?e:r<t&&o>n||r>t&&o<n?null:r<=t&&s<=i||o>=n&&s>=i?2:o>n&&s<i||r<t&&s>i?3:null,yo=e=>e!=="visible"&&e!=="clip",ud=e=>{var t;try{return((t=e.ownerDocument.defaultView)===null||t===void 0?void 0:t.frameElement)||null}catch{return null}},dd=(e,t)=>e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth?yo(t.overflowY)||yo(t.overflowX)||e===vr(e):!1,wo=e=>{const t=e.parentNode,n=e.parentElement;if(n===null&&t!==null){if(t.nodeType===11)return t.host;if(t.nodeType===9)return ud(e)}return n},ki=(e,t,n)=>e<t?t:e>n?n:e,hd=e=>["scroll-margin","scroll-snap-margin"].filter(t=>t in e.documentElement.style)[0],fd=(e,t,n)=>{const{top:i,right:r,bottom:o,left:s}=t,a=hd(e.ownerDocument);if(!a)return[i,r,o,s];const l=c=>{const u=n.getPropertyValue(`${a}-${c}`);return parseInt(u,10)||0};return[i-l("top"),r+l("right"),o+l("bottom"),s-l("left")]},yn=(e,t,n)=>{switch(e){case 1:return(t+n)/2;case 3:return n;case 2:case 0:return t}},pd=(e,t)=>{var n,i,r;const o=(n=e.ownerDocument.defaultView)===null||n===void 0?void 0:n.visualViewport,[s,a,l,c]=e===vr(e)?[0,0,(i=o==null?void 0:o.width)!==null&&i!==void 0?i:e.clientWidth,(r=o==null?void 0:o.height)!==null&&r!==void 0?r:e.clientHeight]:[t.left,t.top,e.clientWidth,e.clientHeight],u=s+e.clientLeft,d=a+e.clientTop,f=u+l,h=d+c;return[d,f,h,u]},md=(e,t)=>{const n=[];let i=e.ownerDocument,r=i.defaultView;if(!r)return n;const o=window.getComputedStyle(e),s=o.direction!=="rtl",a=Bs(o.writingMode||o.getPropertyValue("-webkit-writing-mode")||o.getPropertyValue("-ms-writing-mode")),[l,c]=cd(t,a,s);let[u,d,f,h]=fd(e,e.getBoundingClientRect(),o);for(let p=wo(e);p!==null;p=wo(p)){if(i!==p.ownerDocument){if(i=p.ownerDocument,r=i.defaultView,!r)break;const{left:I,top:N}=p.getBoundingClientRect();u+=N,d+=I,f+=N,h+=I}const g=r.getComputedStyle(p);if(g.position==="fixed")break;if(!dd(p,g))continue;const y=p.getBoundingClientRect(),[v,w,_,x]=pd(p,y),$=vo(l,x,w,p.clientWidth,h,d,d-h),A=vo(c,v,_,p.clientHeight,u,f,f-u),O=$===null?0:yn($,h,d)-yn($,x,w),R=A===null?0:yn(A,u,f)-yn(A,v,_),T=ld(g)?ki(O,-p.scrollWidth+p.clientWidth-p.scrollLeft,-p.scrollLeft):ki(O,-p.scrollLeft,p.scrollWidth-p.clientWidth-p.scrollLeft),C=ki(R,-p.scrollTop,p.scrollHeight-p.clientHeight-p.scrollTop);n.push([p,{left:p.scrollLeft+T,top:p.scrollTop+C,behavior:t.behavior}]),u=Math.max(u-C,v),d=Math.min(d-T,w),f=Math.min(f-C,_),h=Math.max(h-T,x)}return n},gd=(e,t,n)=>{const i=t||{};if(!Ds(i.behavior))throw new TypeError(Us("scrollIntoView","Element",i.behavior));md(e,i).forEach(([o,s])=>{ad(o,s,n)})};var Hs={},Ct={};Object.defineProperty(Ct,"__esModule",{value:!0});Ct.FORMAT_PLAIN=Ct.FORMAT_HTML=Ct.FORMATS=void 0;var js="html";Ct.FORMAT_HTML=js;var Vs="plain";Ct.FORMAT_PLAIN=Vs;var bd=[js,Vs];Ct.FORMATS=bd;var q={};Object.defineProperty(q,"__esModule",{value:!0});q.UNIT_WORDS=q.UNIT_WORD=q.UNIT_SENTENCES=q.UNIT_SENTENCE=q.UNIT_PARAGRAPHS=q.UNIT_PARAGRAPH=q.UNITS=void 0;var Ws="words";q.UNIT_WORDS=Ws;var qs="word";q.UNIT_WORD=qs;var Ys="sentences";q.UNIT_SENTENCES=Ys;var Ks="sentence";q.UNIT_SENTENCE=Ks;var Xs="paragraphs";q.UNIT_PARAGRAPHS=Xs;var Gs="paragraph";q.UNIT_PARAGRAPH=Gs;var vd=[Ws,qs,Ys,Ks,Xs,Gs];q.UNITS=vd;var fn={};Object.defineProperty(fn,"__esModule",{value:!0});fn.WORDS=void 0;var yd=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];fn.WORDS=yd;var Zs={},li={};Object.defineProperty(li,"__esModule",{value:!0});li.LINE_ENDINGS=void 0;var wd={POSIX:`
`,WIN32:`\r
`};li.LINE_ENDINGS=wd;var Js={},wr={},Qs={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(r){var o=r.trim();return o.charAt(0).toUpperCase()+o.slice(1)},n=t;e.default=n})(Qs);var Vi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return!!e.exports},i=n;t.default=i})(Vi,Vi.exports);var _d=Vi.exports,ta={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){var r=!1;try{r=navigator.product==="ReactNative"}catch{r=!1}return r},n=t;e.default=n})(ta);var ea={},ci={};Object.defineProperty(ci,"__esModule",{value:!0});ci.SUPPORTED_PLATFORMS=void 0;var $d={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};ci.SUPPORTED_PLATFORMS=$d;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=ci,n=function(){var o=!1;try{o=process.platform===t.SUPPORTED_PLATFORMS.WIN32}catch{o=!1}return o},i=n;e.default=i})(ea);var _r={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(r)).map(function(o,s){return s})},n=t;e.default=n})(_r);var na={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(_r);function n(o){return o&&o.__esModule?o:{default:o}}var i=function(s,a){var l=(0,t.default)(s);return l.map(function(){return a()})},r=i;e.default=r})(na);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"capitalize",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isNode",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"isReactNative",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"isWindows",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"makeArrayOfLength",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"makeArrayOfStrings",{enumerable:!0,get:function(){return s.default}});var t=a(Qs),n=a(_d),i=a(ta),r=a(ea),o=a(_r),s=a(na);function a(l){return l&&l.__esModule?l:{default:l}}})(wr);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=fn,n=wr;function i(c,u){if(!(c instanceof u))throw new TypeError("Cannot call a class as a function")}function r(c,u){for(var d=0;d<u.length;d++){var f=u[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(c,f.key,f)}}function o(c,u,d){return u&&r(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c}function s(c,u,d){return u in c?Object.defineProperty(c,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[u]=d,c}var a=function(){function c(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=u.sentencesPerParagraph,f=d===void 0?{max:7,min:3}:d,h=u.wordsPerSentence,p=h===void 0?{max:15,min:5}:h,g=u.random;u.seed;var y=u.words,v=y===void 0?t.WORDS:y;if(i(this,c),s(this,"sentencesPerParagraph",void 0),s(this,"wordsPerSentence",void 0),s(this,"random",void 0),s(this,"words",void 0),f.min>f.max)throw new Error("Minimum number of sentences per paragraph (".concat(f.min,") cannot exceed maximum (").concat(f.max,")."));if(p.min>p.max)throw new Error("Minimum number of words per sentence (".concat(p.min,") cannot exceed maximum (").concat(p.max,")."));this.sentencesPerParagraph=f,this.words=v,this.wordsPerSentence=p,this.random=g||Math.random}return o(c,[{key:"generateRandomInteger",value:function(d,f){return Math.floor(this.random()*(f-d+1)+d)}},{key:"generateRandomWords",value:function(d){var f=this,h=this.wordsPerSentence,p=h.min,g=h.max,y=d||this.generateRandomInteger(p,g);return(0,n.makeArrayOfLength)(y).reduce(function(v,w){return"".concat(f.pluckRandomWord()," ").concat(v)},"").trim()}},{key:"generateRandomSentence",value:function(d){return"".concat((0,n.capitalize)(this.generateRandomWords(d)),".")}},{key:"generateRandomParagraph",value:function(d){var f=this,h=this.sentencesPerParagraph,p=h.min,g=h.max,y=d||this.generateRandomInteger(p,g);return(0,n.makeArrayOfLength)(y).reduce(function(v,w){return"".concat(f.generateRandomSentence()," ").concat(v)},"").trim()}},{key:"pluckRandomWord",value:function(){var d=0,f=this.words.length-1,h=this.generateRandomInteger(d,f);return this.words[h]}}]),c}(),l=a;e.default=l})(Js);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Ct,n=li,i=o(Js),r=wr;function o(f){return f&&f.__esModule?f:{default:f}}function s(f,h){if(!(f instanceof h))throw new TypeError("Cannot call a class as a function")}function a(f,h){for(var p=0;p<h.length;p++){var g=h[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}function l(f,h,p){return h&&a(f.prototype,h),Object.defineProperty(f,"prototype",{writable:!1}),f}function c(f,h,p){return h in f?Object.defineProperty(f,h,{value:p,enumerable:!0,configurable:!0,writable:!0}):f[h]=p,f}var u=function(){function f(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.FORMAT_PLAIN,g=arguments.length>2?arguments[2]:void 0;if(s(this,f),this.format=p,this.suffix=g,c(this,"generator",void 0),t.FORMATS.indexOf(p.toLowerCase())===-1)throw new Error("".concat(p," is an invalid format. Please use ").concat(t.FORMATS.join(" or "),"."));this.generator=new i.default(h)}return l(f,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,r.isReactNative)()&&(0,r.isNode)()&&(0,r.isWindows)()?n.LINE_ENDINGS.WIN32:n.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(p){return this.format===t.FORMAT_HTML?"<p>".concat(p,"</p>"):p}},{key:"formatStrings",value:function(p){var g=this;return p.map(function(y){return g.formatString(y)})}},{key:"generateWords",value:function(p){return this.formatString(this.generator.generateRandomWords(p))}},{key:"generateSentences",value:function(p){return this.formatString(this.generator.generateRandomParagraph(p))}},{key:"generateParagraphs",value:function(p){var g=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,r.makeArrayOfStrings)(p,g)).join(this.getLineEnding())}}]),f}(),d=u;e.default=d})(Zs);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"LoremIpsum",{enumerable:!0,get:function(){return r.default}}),e.loremIpsum=void 0;var t=Ct,n=q,i=fn,r=o(Zs);function o(a){return a&&a.__esModule?a:{default:a}}var s=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=l.count,u=c===void 0?1:c,d=l.format,f=d===void 0?t.FORMAT_PLAIN:d,h=l.paragraphLowerBound,p=h===void 0?3:h,g=l.paragraphUpperBound,y=g===void 0?7:g,v=l.random,w=l.sentenceLowerBound,_=w===void 0?5:w,x=l.sentenceUpperBound,$=x===void 0?15:x,A=l.units,O=A===void 0?n.UNIT_SENTENCES:A,R=l.words,T=R===void 0?i.WORDS:R,C=l.suffix,I=C===void 0?"":C,N={random:v,sentencesPerParagraph:{max:y,min:p},words:T,wordsPerSentence:{max:$,min:_}},z=new r.default(N,f,I);switch(O){case n.UNIT_PARAGRAPHS:case n.UNIT_PARAGRAPH:return z.generateParagraphs(u);case n.UNIT_SENTENCES:case n.UNIT_SENTENCE:return z.generateSentences(u);case n.UNIT_WORDS:case n.UNIT_WORD:return z.generateWords(u);default:return""}};e.loremIpsum=s})(Hs);function _o(){return{date:"",description:"",options:[2],option_names:["Option-2"],entries:[ia()]}}function ia(){return{checked:!1,id:"",code:"",account:"",debit:0n,credit:0n}}const ra=[];for(let e=0;e<100;e++)ra.push({id:`${e}`,code:`${e%10}00.${e<10?"0":""}${e}`,name:Hs.loremIpsum()});function xd(e,t){return new Promise((n,i)=>{const r=ra.filter(s=>{const a=s.code.replace(/s+/g,"").toLocaleLowerCase(),l=s.name.replace(/s+/g,"").toLocaleLowerCase(),c=e.replace(/s+/g,"").toLocaleLowerCase();return a.includes(c)||l.includes(c)}).sort((s,a)=>s.code.localeCompare(a.code)),o=setTimeout(()=>n(r),250);t==null||t.addEventListener("abort",s=>{clearTimeout(o),i(new Error(s.type))},{once:!0})})}function Ad(){return[{id:1,name:"Option-1"},{id:2,name:"Option-2"},{id:3,name:"Option-3"},{id:4,name:"Option-4"},{id:5,name:"Option-5"},{id:6,name:"Option-6"},{id:7,name:"Option-7"},{id:8,name:"Option-8"}]}var Ed=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,Re=(e,t,n,i)=>{for(var r=i>1?void 0:i?kd(t,n):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(i?s(t,n,r):s(r))||r);return i&&r&&Ed(t,n,r),r};let Kt=class extends St{constructor(){super(),this.transfer=_o(),this.selected=0,this.accountCode="",this.accountList=[],this.notation="standard",this.fetchTask=new Xu(this,{task:async(e,{signal:t})=>{this.accountList=this.accountCode?await xd(this.accountCode,t):[]},args:()=>[this.accountCode]}),this.media=null,this.handleMatchMedia=()=>this.notation=this.media.matches?"compact":"standard",this.addEventListener("keydown",e=>{["b","B"].includes(e.key)&&e.metaKey&&(this.balance(),this.requestUpdate(),e.preventDefault())})}get disabled(){return this.transfer.entries.length<2}get checked(){return this.selected>0&&this.selected===this.transfer.entries.length-1}get indeterminate(){return this.selected>0&&this.selected<this.transfer.entries.length-1}get debit(){return this.transfer.entries.reduce((e,{debit:t})=>e+t,0n)}get credit(){return this.transfer.entries.reduce((e,{credit:t})=>e+t,0n)}connectedCallback(){super.connectedCallback(),this.media=window.matchMedia("screen and (max-width: 576px)"),this.media.addEventListener("change",this.handleMatchMedia),this.handleMatchMedia()}disconnectedCallback(){super.disconnectedCallback(),this.media.removeEventListener("change",this.handleMatchMedia),this.media=null}balance(){const e=this.transfer.entries.length-1,t=this.transfer.entries[e];t.debit=0n,t.credit=0n;const n=this.debit,i=this.credit;n>i?t.credit=n-i:i>n&&(t.debit=i-n)}addEntry(){this.transfer.entries.push(ia())}isLastEntry(e){return e===this.transfer.entries.length-1}jump(e){e&&(gd(e,zo),e.focus(Bo))}handleKeyDown(e){if(["Enter"].includes(e.key)){const t=X(e);this.jump(_n(t)||Ar(t)),e.preventDefault()}else if(["ArrowDown","ArrowUp"].includes(e.key)){const t=X(e);this.jump(Ar(t,e.key==="ArrowUp",ba(t))),e.preventDefault()}else if(["ArrowLeft","ArrowRight"].includes(e.key)){const t=X(e);t.canLeave(e.key==="ArrowLeft")&&(this.jump(_n(t,e.key==="ArrowLeft")),e.preventDefault())}}render(){return E`
      <cell-grid columns="auto 1fr">
        <cell-group>
          <cell-item span="2"></cell-item>
        </cell-group>
        <cell-group>
          <cell-item>Date</cell-item>
          <cell-input
            type="date"
            value="${this.transfer.date}"
            @input="${e=>{const t=X(e);this.transfer.date=t.value,this.requestUpdate()}}"
            @keydown="${e=>{this.handleKeyDown(e)}}"
            ><sl-format-date
              day="2-digit"
              month="2-digit"
              year="numeric"
              date="${this.transfer.date}"
            ></sl-format-date
          ></cell-input>
        </cell-group>
        <cell-group>
          <cell-item>Description</cell-item>
          <cell-input
            value="${this.transfer.description}"
            @input="${e=>{const t=X(e);this.transfer.description=t.value,this.requestUpdate()}}"
            @keydown="${e=>{this.handleKeyDown(e)}}"
          ></cell-input>
        </cell-group>
        <cell-group>
          <cell-item>Options</cell-item>
          <cell-select
            readonly
            list="options"
            @focus="${e=>{X(e).show()}}"
            @selection="${e=>{const n=X(e).selected;this.transfer.options=n.map(i=>parseInt(i.value)),this.transfer.option_names=n.map(i=>i.textContent||""),this.requestUpdate()}}"
            @keydown="${e=>{this.handleKeyDown(e)}}"
            ><cell-section gap wrap
              >${vn(this.transfer.option_names,e=>E`<sl-tag>${e}</sl-tag>`)}</cell-section
            ></cell-select
          >
          <cell-datalist id="options" columns="auto auto">
            ${vn(Ad(),e=>E`<cell-option
                value="${e.id}"
                ?selected="${this.transfer.options.indexOf(e.id)>=0}"
                ><cell-item>${e.name}</cell-item></cell-option
              >`)}
          </cell-datalist>
        </cell-group>
      </cell-grid>
      <br />
      <cell-grid class="entry">
        <cell-group>
          <cell-header
            ><sl-checkbox
              ?checked="${this.checked}"
              ?indeterminate="${this.indeterminate}"
              ?disabled="${this.disabled}"
              @sl-change="${e=>{const t=X(e);for(let n=0;n<this.transfer.entries.length-1;n++)this.transfer.entries[n].checked=t.checked;this.selected=t.checked?this.transfer.entries.length-1:0}}"
            ></sl-checkbox
          ></cell-header>
          <cell-header>Code</cell-header>
          <cell-header>Account</cell-header>
          <cell-header justify="end">Debit</cell-header>
          <cell-header justify="end">Credit</cell-header>
        </cell-group>
        ${vn(this.transfer.entries,(e,t)=>E`
            <cell-group>
              <cell-item
                ><sl-checkbox
                  ?checked="${e.checked}"
                  ?disabled="${this.isLastEntry(t)}"
                  @sl-change="${n=>{const i=X(n);e.checked=i.checked,e.checked?this.selected++:this.selected--}}"
                ></sl-checkbox
              ></cell-item>
              <cell-item>${e.code}</cell-item>
              <cell-select
                stretch
                truncate
                list="accounts"
                value="${e.account}"
                @selection="${n=>{const i=X(n),r=i.selected[0];if(r){if(r.value){this.isLastEntry(t)&&this.addEntry();const o=r.labels;e.id=r.value,e.code=o[0],e.account=o[1]}else e.id=e.code=e.account="";this.jump(_n(i))}i.hide()}}"
                @input="${n=>{const i=X(n);this.accountCode=i.value.trim(),i.show()}}"
                @hide="${n=>{const i=X(n);i.value=e.account,i.reset(),this.accountCode="",this.requestUpdate()}}"
                @keydown="${n=>{(n.key!=="Enter"||e.id)&&this.handleKeyDown(n)}}"
              ></cell-select>
              <cell-input
                auto
                justify="end"
                value="${Lt(e.debit)}"
                @change="${n=>{const i=X(n);e.debit=Tn(Dr(i.value,16),14),e.debit&&(e.credit=0n),this.requestUpdate(),i.value=Lt(e.debit)}}"
                @keydown="${n=>{this.handleKeyDown(n)}}"
                ><cell-format
                  value="${Lt(e.debit)}"
                  notation="${this.notation}"
                ></cell-format
              ></cell-input>
              <cell-input
                auto
                justify="end"
                value="${Lt(e.credit)}"
                @change="${n=>{const i=X(n);e.credit=Tn(Dr(i.value,16),14),e.credit&&(e.debit=0n),this.requestUpdate(),i.value=Lt(e.credit)}}"
                @keydown="${n=>{this.handleKeyDown(n)}}"
                ><cell-format
                  value="${Lt(e.credit)}"
                  notation="${this.notation}"
                ></cell-format
              ></cell-input>
            </cell-group>
          `)}
        <cell-group>
          <cell-footer></cell-footer>
          <cell-footer></cell-footer>
          <cell-footer justify="end">TOTAL</cell-footer>
          <cell-footer justify="end"
            ><cell-format
              value="${Lt(this.debit)}"
              notation="${this.notation}"
            ></cell-format
          ></cell-footer>
          <cell-footer justify="end"
            ><cell-format
              value="${Lt(this.credit)}"
              notation="${this.notation}"
            ></cell-format
          ></cell-footer>
        </cell-group>
      </cell-grid>
      <cell-datalist
        id="accounts"
        columns="max-content minmax(min-content, 1fr)"
      >
        ${this.fetchTask.render({complete:()=>E`
              <cell-option>
                <cell-item span="2">(none)</cell-item>
              </cell-option>
              ${vn(this.accountList,e=>E`
                  <cell-option value="${e.id}">
                    <cell-item>${e.code}</cell-item>
                    <cell-item>${e.name}</cell-item>
                  </cell-option>
                `)}
            `,pending:()=>E`
            <cell-option>
              <cell-item><sl-spinner></sl-spinner></cell-item>
            </cell-option>
          `})}
      </cell-datalist>
      <br />
      <cell-section justify="center">
        <sl-button-group>
          <sl-button
            @click="${()=>{this.addEntry(),this.requestUpdate()}}"
            >Add</sl-button
          ><sl-button
            ?disabled="${this.selected===0}"
            @click="${()=>{this.transfer.entries=this.transfer.entries.filter(e=>!e.checked),this.selected=0,this.requestUpdate()}}"
            >Delete</sl-button
          ><sl-button
            @click="${()=>{this.transfer=_o(),this.selected=0}}"
            >Clear</sl-button
          ><sl-button
            @click="${()=>{this.balance(),this.requestUpdate()}}"
            >Balance</sl-button
          >
        </sl-button-group>
      </cell-section>
      <br />
    `}};Kt.styles=[B`
      .entry cell-input,
      .entry cell-select {
        scroll-margin-top: var(--cell-header-height);
        scroll-margin-bottom: var(--cell-footer-height);
      }

      .entry {
        grid-template-columns: auto auto 3fr repeat(2, minmax(max-content, 1fr));
      }

      @media screen and (max-width: 768px) {
        .entry {
          grid-template-columns: auto 3fr repeat(2, minmax(max-content, 1fr));
        }

        .entry cell-group > *:nth-child(2) {
          display: none;
        }
      }
    `];Re([lt()],Kt.prototype,"transfer",2);Re([lt()],Kt.prototype,"selected",2);Re([lt()],Kt.prototype,"accountCode",2);Re([lt()],Kt.prototype,"accountList",2);Re([lt()],Kt.prototype,"notation",2);Kt=Re([ii("cells-view")],Kt);function jn(e){return e=e||[],Array.isArray(e)?e:[e]}function ft(e){return`[Vaadin.Router] ${e}`}function Sd(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Vn="module",Wn="nomodule",Wi=[Vn,Wn];function $o(e){if(!e.match(/.+\.[m]?js$/))throw new Error(ft(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function oa(e){if(!e||!dt(e.path))throw new Error(ft('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!ce(e.action)&&!Array.isArray(e.children)&&!ce(e.children)&&!qn(t)&&!n.some(i=>dt(e[i])))throw new Error(ft(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(dt(t))$o(t);else if(Wi.some(i=>i in t))Wi.forEach(i=>i in t&&$o(t[i]));else throw new Error(ft('Expected route bundle to include either "'+Wn+'" or "'+Vn+'" keys, or both'));e.redirect&&["bundle","component"].forEach(i=>{i in e&&console.warn(ft(`Route config "${e.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function xo(e){jn(e).forEach(t=>oa(t))}function Ao(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),t===Vn?n.setAttribute("type",Vn):t===Wn&&n.setAttribute(Wn,""),n.async=!0),new Promise((i,r)=>{n.onreadystatechange=n.onload=o=>{n.__dynamicImportLoaded=!0,i(o)},n.onerror=o=>{n.parentNode&&n.parentNode.removeChild(n),r(o)},n.parentNode===null?document.head.appendChild(n):n.__dynamicImportLoaded&&i()})}function Cd(e){return dt(e)?Ao(e):Promise.race(Wi.filter(t=>t in e).map(t=>Ao(e[t],t)))}function We(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function qn(e){return typeof e=="object"&&!!e}function ce(e){return typeof e=="function"}function dt(e){return typeof e=="string"}function sa(e){const t=new Error(ft(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const me=new class{};function Pd(e){const t=e.port,n=e.protocol,o=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${o}`}function Eo(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let a=0;a<n.length;a++){const l=n[a];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){t=l;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||Pd(t))!==window.location.origin)return;const{pathname:r,search:o,hash:s}=t;We("go",{pathname:r,search:o,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const Od={activate(){window.document.addEventListener("click",Eo)},inactivate(){window.document.removeEventListener("click",Eo)}},Rd=/Trident/.test(navigator.userAgent);Rd&&!ce(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,!!t.bubbles,!!t.cancelable),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);function ko(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:n,hash:i}=window.location;We("go",{pathname:t,search:n,hash:i})}const Td={activate(){window.addEventListener("popstate",ko)},inactivate(){window.removeEventListener("popstate",ko)}};var Te=ha,Ld=$r,Md=Ud,Nd=ca,Dd=da,aa="/",la="./",Id=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function $r(e,t){for(var n=[],i=0,r=0,o="",s=t&&t.delimiter||aa,a=t&&t.delimiters||la,l=!1,c;(c=Id.exec(e))!==null;){var u=c[0],d=c[1],f=c.index;if(o+=e.slice(r,f),r=f+u.length,d){o+=d[1],l=!0;continue}var h="",p=e[r],g=c[2],y=c[3],v=c[4],w=c[5];if(!l&&o.length){var _=o.length-1;a.indexOf(o[_])>-1&&(h=o[_],o=o.slice(0,_))}o&&(n.push(o),o="",l=!1);var x=h!==""&&p!==void 0&&p!==h,$=w==="+"||w==="*",A=w==="?"||w==="*",O=h||s,R=y||v;n.push({name:g||i++,prefix:h,delimiter:O,optional:A,repeat:$,partial:x,pattern:R?zd(R):"[^"+Mt(O)+"]+?"})}return(o||r<e.length)&&n.push(o+e.substr(r)),n}function Ud(e,t){return ca($r(e,t))}function ca(e){for(var t=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(i,r){for(var o="",s=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var l=e[a];if(typeof l=="string"){o+=l;continue}var c=i?i[l.name]:void 0,u;if(Array.isArray(c)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but got array');if(c.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(u=s(c[d],l),!t[a].test(u))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'"');o+=(d===0?l.prefix:l.delimiter)+u}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(u=s(String(c),l),!t[a].test(u))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+u+'"');o+=l.prefix+u;continue}if(l.optional){l.partial&&(o+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be '+(l.repeat?"an array":"a string"))}return o}}function Mt(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function zd(e){return e.replace(/([=!:$/()])/g,"\\$1")}function ua(e){return e&&e.sensitive?"":"i"}function Bd(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function Fd(e,t,n){for(var i=[],r=0;r<e.length;r++)i.push(ha(e[r],t,n).source);return new RegExp("(?:"+i.join("|")+")",ua(n))}function Hd(e,t,n){return da($r(e,n),t,n)}function da(e,t,n){n=n||{};for(var i=n.strict,r=n.start!==!1,o=n.end!==!1,s=Mt(n.delimiter||aa),a=n.delimiters||la,l=[].concat(n.endsWith||[]).map(Mt).concat("$").join("|"),c=r?"^":"",u=e.length===0,d=0;d<e.length;d++){var f=e[d];if(typeof f=="string")c+=Mt(f),u=d===e.length-1&&a.indexOf(f[f.length-1])>-1;else{var h=f.repeat?"(?:"+f.pattern+")(?:"+Mt(f.delimiter)+"(?:"+f.pattern+"))*":f.pattern;t&&t.push(f),f.optional?f.partial?c+=Mt(f.prefix)+"("+h+")?":c+="(?:"+Mt(f.prefix)+"("+h+"))?":c+=Mt(f.prefix)+"("+h+")"}}return o?(i||(c+="(?:"+s+")?"),c+=l==="$"?"$":"(?="+l+")"):(i||(c+="(?:"+s+"(?="+l+"))?"),u||(c+="(?="+s+"|"+l+")")),new RegExp(c,ua(n))}function ha(e,t,n){return e instanceof RegExp?Bd(e,t):Array.isArray(e)?Fd(e,t,n):Hd(e,t,n)}Te.parse=Ld;Te.compile=Md;Te.tokensToFunction=Nd;Te.tokensToRegExp=Dd;const{hasOwnProperty:jd}=Object.prototype,qi=new Map;qi.set("|false",{keys:[],pattern:/(?:)/});function So(e){try{return decodeURIComponent(e)}catch{return e}}function Vd(e,t,n,i,r){n=!!n;const o=`${e}|${n}`;let s=qi.get(o);if(!s){const c=[];s={keys:c,pattern:Te(e,c,{end:n,strict:e===""})},qi.set(o,s)}const a=s.pattern.exec(t);if(!a)return null;const l=Object.assign({},r);for(let c=1;c<a.length;c++){const u=s.keys[c-1],d=u.name,f=a[c];(f!==void 0||!jd.call(l,d))&&(u.repeat?l[d]=f?f.split(u.delimiter).map(So):[]:l[d]=f&&So(f))}return{path:a[0],keys:(i||[]).concat(s.keys),params:l}}function fa(e,t,n,i,r){let o,s,a=0,l=e.path||"";return l.charAt(0)==="/"&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const u=e.__children=e.__children||e.children;if(!o&&(o=Vd(l,t,!u,i,r),o))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&u)for(;a<u.length;){if(!s){const f=u[a];f.parent=e;let h=o.path.length;h>0&&t.charAt(h)==="/"&&(h+=1),s=fa(f,t.substr(h),n,o.keys,o.params)}const d=s.next(c);if(!d.done)return{done:!1,value:d.value};s=null,a++}return{done:!0}}}}function Wd(e){if(ce(e.route.action))return e.route.action(e)}function qd(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}function Yd(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}function Kd(e,t){const{route:n,path:i}=t;if(n&&!n.__synthetic){const r={path:i,route:n};if(!e.chain)e.chain=[];else if(n.parent){let o=e.chain.length;for(;o--&&e.chain[o].route&&e.chain[o].route!==n.parent;)e.chain.pop()}e.chain.push(r)}}class en{constructor(t,n={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=n.baseUrl||"",this.errorHandler=n.errorHandler,this.resolveRoute=n.resolveRoute||Wd,this.context=Object.assign({resolver:this},n.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){xo(t);const n=[...jn(t)];this.root.__children=n}addRoutes(t){return xo(t),this.root.__children.push(...jn(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const n=Object.assign({},this.context,dt(t)?{pathname:t}:t),i=fa(this.root,this.__normalizePathname(n.pathname),this.baseUrl),r=this.resolveRoute;let o=null,s=null,a=n;function l(c,u=o.value.route,d){const f=d===null&&o.value.route;return o=s||i.next(f),s=null,!c&&(o.done||!qd(u,o.value.route))?(s=o,Promise.resolve(me)):o.done?Promise.reject(sa(n)):(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},n,o.value),Kd(a,o.value),Promise.resolve(r(a)).then(h=>h!=null&&h!==me?(a.result=h.result||h,a):l(c,u,h)))}return n.next=l,Promise.resolve().then(()=>l(!0,this.root)).catch(c=>{const u=Yd(a);if(c?console.warn(u):c=new Error(u),c.context=c.context||a,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return a.result=this.errorHandler(c),a;throw c})}static __createUrl(t,n){return new URL(t,n)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const n=this.__effectiveBaseUrl,i=this.constructor.__createUrl(t,n).href;if(i.slice(0,n.length)===n)return i.slice(n.length)}}en.pathToRegexp=Te;const{pathToRegexp:Co}=en,Po=new Map;function pa(e,t,n){const i=t.name||t.component;if(i&&(e.has(i)?e.get(i).push(t):e.set(i,[t])),Array.isArray(n))for(let r=0;r<n.length;r++){const o=n[r];o.parent=t,pa(e,o,o.__children||o.children)}}function Oo(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function Ro(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Xd(e,t={}){if(!(e instanceof en))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(i,r)=>{let o=Oo(n,i);if(!o&&(n.clear(),pa(n,e.root,e.root.__children),o=Oo(n,i),!o))throw new Error(`Route "${i}" not found`);let s=Po.get(o.fullPath);if(!s){let l=Ro(o),c=o.parent;for(;c;){const h=Ro(c);h&&(l=h.replace(/\/$/,"")+"/"+l.replace(/^\//,"")),c=c.parent}const u=Co.parse(l),d=Co.tokensToFunction(u),f=Object.create(null);for(let h=0;h<u.length;h++)dt(u[h])||(f[u[h].name]=!0);s={toPath:d,keys:f},Po.set(l,s),o.fullPath=l}let a=s.toPath(r,t)||"/";if(t.stringifyQueryParams&&r){const l={},c=Object.keys(r);for(let d=0;d<c.length;d++){const f=c[d];s.keys[f]||(l[f]=r[f])}const u=t.stringifyQueryParams(l);u&&(a+=u.charAt(0)==="?"?u:`?${u}`)}return a}}let To=[];function Gd(e){To.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),To=e}const Zd=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Jd=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function Lo(e,t){return e.classList.add(t),new Promise(n=>{if(Zd(e)){const i=e.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${r}`),Jd(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}const Qd=256;function Si(e){return e!=null}function th(e){const t=Object.assign({},e);return delete t.next,t}function ut({pathname:e="",search:t="",hash:n="",chain:i=[],params:r={},redirectFrom:o,resolver:s},a){const l=i.map(c=>c.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:r,redirectFrom:o,getUrl:(c={})=>Cn(Ut.pathToRegexp.compile(ma(l))(Object.assign({},r,c)),s)}}function Mo(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function eh(e,t){t.location=ut(e);const n=e.chain.map(i=>i.route).indexOf(e.route);return e.chain[n].element=t,t}function Sn(e,t,n){if(ce(e))return e.apply(n,t)}function No(e,t,n){return i=>{if(i&&(i.cancel||i.redirect))return i;if(n)return Sn(n[e],t,n)}}function nh(e,t){if(!Array.isArray(e)&&!qn(e))throw new Error(ft(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=jn(e);for(let i=0;i<n.length;i++)oa(n[i]),t.__children.push(n[i])}function wn(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function Cn(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ma(e){return e.map(t=>t.path).reduce((t,n)=>n.length?t.replace(/\/$/,"")+"/"+n.replace(/^\//,""):t,"")}class Ut extends en{constructor(t,n){const i=document.head.querySelector("base"),r=i&&i.getAttribute("href");super([],Object.assign({baseUrl:r&&en.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},n)),this.resolveRoute=s=>this.__resolveRoute(s);const o=Ut.NavigationTrigger;Ut.setTriggers.apply(Ut,Object.keys(o).map(s=>o[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=ut({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const n=t.route;let i=Promise.resolve();ce(n.children)&&(i=i.then(()=>n.children(th(t))).then(o=>{!Si(o)&&!ce(n.children)&&(o=n.children),nh(o,n)}));const r={redirect:o=>Mo(t,o),component:o=>{const s=document.createElement(o);return this.__createdByRouter.set(s,!0),s}};return i.then(()=>{if(this.__isLatestRender(t))return Sn(n.action,[t,r],n)}).then(o=>{if(Si(o)&&(o instanceof HTMLElement||o.redirect||o===me))return o;if(dt(n.redirect))return r.redirect(n.redirect);if(n.bundle)return Cd(n.bundle).then(()=>{},()=>{throw new Error(ft(`Bundle not found: ${n.bundle}. Check if the file name is correct`))})}).then(o=>{if(Si(o))return o;if(dt(n.component))return r.component(n.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,n=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),n||this.__onNavigationEvent(),this.ready}render(t,n){const i=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},dt(t)?{pathname:t}:t,{__renderId:i});return this.ready=this.resolve(r).then(o=>this.__fullyResolveChain(o)).then(o=>{if(this.__isLatestRender(o)){const s=this.__previousContext;if(o===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=ut(o),n&&this.__updateBrowserHistory(o,i===1),We("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.__copyUnchangedElements(o,s),this.__previousContext=o,this.location;this.__addAppearingContent(o,s);const a=this.__animateIfNeeded(o);return this.__runOnAfterEnterCallbacks(o),this.__runOnAfterLeaveCallbacks(o,s),a.then(()=>{if(this.__isLatestRender(o))return this.__removeDisappearingContent(),this.__previousContext=o,this.location})}}).catch(o=>{if(i===this.__lastStartedRenderId)throw n&&this.__updateBrowserHistory(r),wn(this.__outlet&&this.__outlet.children),this.location=ut(Object.assign(r,{resolver:this})),We("error",Object.assign({router:this,error:o},r)),o}),this.ready}__fullyResolveChain(t,n=t){return this.__findComponentContextAfterAllRedirects(n).then(i=>{const o=i!==n?i:t,a=Cn(ma(i.chain),i.resolver)===i.pathname,l=(c,u=c.route,d)=>c.next(void 0,u,d).then(f=>f===null||f===me?a?c:u.parent!==null?l(c,u.parent,f):f:f);return l(i).then(c=>{if(c===null||c===me)throw sa(o);return c&&c!==me&&c!==i?this.__fullyResolveChain(o,c):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(t){const n=t.result;return n instanceof HTMLElement?(eh(t,n),Promise.resolve(t)):n.redirect?this.__redirect(n.redirect,t.__redirectCount,t.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):n instanceof Error?Promise.reject(n):Promise.reject(new Error(ft(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Sd(n)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(n=>n===this.__previousContext||n===t?n:this.__fullyResolveChain(n))}__runOnBeforeCallbacks(t){const n=this.__previousContext||{},i=n.chain||[],r=t.chain;let o=Promise.resolve();const s=()=>({cancel:!0}),a=l=>Mo(t,l);if(t.__divergedChainIndex=0,t.__skipAttach=!1,i.length){for(let l=0;l<Math.min(i.length,r.length)&&!(i[l].route!==r[l].route||i[l].path!==r[l].path&&i[l].element!==r[l].element||!this.__isReusableElement(i[l].element,r[l].element));l=++t.__divergedChainIndex);if(t.__skipAttach=r.length===i.length&&t.__divergedChainIndex==r.length&&this.__isReusableElement(t.result,n.result),t.__skipAttach){for(let l=r.length-1;l>=0;l--)o=this.__runOnBeforeLeaveCallbacks(o,t,{prevent:s},i[l]);for(let l=0;l<r.length;l++)o=this.__runOnBeforeEnterCallbacks(o,t,{prevent:s,redirect:a},r[l]),i[l].element.location=ut(t,i[l].route)}else for(let l=i.length-1;l>=t.__divergedChainIndex;l--)o=this.__runOnBeforeLeaveCallbacks(o,t,{prevent:s},i[l])}if(!t.__skipAttach)for(let l=0;l<r.length;l++)l<t.__divergedChainIndex?l<i.length&&i[l].element&&(i[l].element.location=ut(t,i[l].route)):(o=this.__runOnBeforeEnterCallbacks(o,t,{prevent:s,redirect:a},r[l]),r[l].element&&(r[l].element.location=ut(t,r[l].route)));return o.then(l=>{if(l){if(l.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(l.redirect)return this.__redirect(l.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,n,i,r){const o=ut(n);return t.then(s=>{if(this.__isLatestRender(n))return No("onBeforeLeave",[o,i,this],r.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,n,i,r){const o=ut(n,r.route);return t.then(s=>{if(this.__isLatestRender(n))return No("onBeforeEnter",[o,i,this],r.element)(s)})}__isReusableElement(t,n){return t&&n?this.__createdByRouter.get(t)&&this.__createdByRouter.get(n)?t.localName===n.localName:t===n:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,n,i){if(n>Qd)throw new Error(ft(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(n||0)+1,__renderId:i})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(ft(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:n="",hash:i=""},r){if(window.location.pathname!==t||window.location.search!==n||window.location.hash!==i){const o=r?"replaceState":"pushState";window.history[o](null,document.title,t+n+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,n){let i=this.__outlet;for(let r=0;r<t.__divergedChainIndex;r++){const o=n&&n.chain[r].element;if(o)if(o.parentNode===i)t.chain[r].element=o,i=o;else break}return i}__addAppearingContent(t,n){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(t,n);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(o=>this.__addedByRouter.get(o)&&o!==t.result);let r=i;for(let o=t.__divergedChainIndex;o<t.chain.length;o++){const s=t.chain[o].element;s&&(r.appendChild(s),this.__addedByRouter.set(s,!0),r===i&&this.__appearingContent.push(s),r=s)}}__removeDisappearingContent(){this.__disappearingContent&&wn(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(wn(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,n){if(n)for(let i=n.chain.length-1;i>=t.__divergedChainIndex&&this.__isLatestRender(t);i--){const r=n.chain[i].element;if(r)try{const o=ut(t);Sn(r.onAfterLeave,[o,{},n.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&wn(r.children)}}}__runOnAfterEnterCallbacks(t){for(let n=t.__divergedChainIndex;n<t.chain.length&&this.__isLatestRender(t);n++){const i=t.chain[n].element||{},r=ut(t,t.chain[n].route);Sn(i.onAfterEnter,[r,{},t.resolver],i)}}__animateIfNeeded(t){const n=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],r=[],o=t.chain;let s;for(let a=o.length;a>0;a--)if(o[a-1].route.animate){s=o[a-1].route.animate;break}if(n&&i&&s){const a=qn(s)&&s.leave||"leaving",l=qn(s)&&s.enter||"entering";r.push(Lo(n,a)),r.push(Lo(i,l))}return Promise.all(r).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:n,search:i,hash:r}=t?t.detail:window.location;dt(this.__normalizePathname(n))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:n,search:i,hash:r},!0))}static setTriggers(...t){Gd(t)}urlForName(t,n){return this.__urlForName||(this.__urlForName=Xd(this)),Cn(this.__urlForName(t,n),this)}urlForPath(t,n){return Cn(Ut.pathToRegexp.compile(t)(n),this)}static go(t){const{pathname:n,search:i,hash:r}=dt(t)?this.__createUrl(t,"http://a"):t;return We("go",{pathname:n,search:i,hash:r})}}const ih=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Pn=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function rh(){function e(){return!0}return ga(e)}function oh(){try{return sh()?!0:ah()?Pn?!lh():!rh():!1}catch{return!1}}function sh(){return localStorage.getItem("vaadin.developmentmode.force")}function ah(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function lh(){return!!(Pn&&Object.keys(Pn).map(t=>Pn[t]).filter(t=>t.productionMode).length>0)}function ga(e,t){if(typeof e!="function")return;const n=ih.exec(e.toString());if(n)try{e=new Function(n[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return e(t)}window.Vaadin=window.Vaadin||{};const Do=function(e,t){if(window.Vaadin.developmentMode)return ga(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=oh());function ch(){}const uh=function(){if(typeof Do=="function")return Do(ch)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});uh();Ut.NavigationTrigger={POPSTATE:Td,CLICK:Od};const dh="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20class='bi%20bi-sun'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M8%2011a3%203%200%201%201%200-6%203%203%200%200%201%200%206m0%201a4%204%200%201%200%200-8%204%204%200%200%200%200%208M8%200a.5.5%200%200%201%20.5.5v2a.5.5%200%200%201-1%200v-2A.5.5%200%200%201%208%200m0%2013a.5.5%200%200%201%20.5.5v2a.5.5%200%200%201-1%200v-2A.5.5%200%200%201%208%2013m8-5a.5.5%200%200%201-.5.5h-2a.5.5%200%200%201%200-1h2a.5.5%200%200%201%20.5.5M3%208a.5.5%200%200%201-.5.5h-2a.5.5%200%200%201%200-1h2A.5.5%200%200%201%203%208m10.657-5.657a.5.5%200%200%201%200%20.707l-1.414%201.415a.5.5%200%201%201-.707-.708l1.414-1.414a.5.5%200%200%201%20.707%200m-9.193%209.193a.5.5%200%200%201%200%20.707L3.05%2013.657a.5.5%200%200%201-.707-.707l1.414-1.414a.5.5%200%200%201%20.707%200m9.193%202.121a.5.5%200%200%201-.707%200l-1.414-1.414a.5.5%200%200%201%20.707-.707l1.414%201.414a.5.5%200%200%201%200%20.707M4.464%204.465a.5.5%200%200%201-.707%200L2.343%203.05a.5.5%200%201%201%20.707-.707l1.414%201.414a.5.5%200%200%201%200%20.708'/%3e%3c/svg%3e";var hh=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,xr=(e,t,n,i)=>{for(var r=i>1?void 0:i?fh(t,n):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(i?s(t,n,r):s(r))||r);return i&&r&&hh(t,n,r),r};let nn=class extends St{constructor(){super(),this.router=new Ut,this.theme="sl-theme-light",this.router.setRoutes([{path:"/",component:"home-view"},{path:"/cells",component:"cells-view"},{path:"(.*)",component:"error-view"}])}renderMenu(){return E`
      <sl-dropdown>
        <sl-button slot="trigger" caret>
          <sl-icon src="${dh}"></sl-icon>
        </sl-button>
        <sl-menu
          @sl-select="${e=>{this.theme=e.detail.item.value,e.detail.item.checked=!0}}"
        >
          <sl-menu-item
            type="checkbox"
            value="sl-theme-light"
            ?checked="${this.theme==="sl-theme-light"}"
            >Light</sl-menu-item
          >
          <sl-menu-item
            type="checkbox"
            value="sl-theme-dark"
            ?checked="${this.theme==="sl-theme-dark"}"
            >Dark</sl-menu-item
          >
        </sl-menu>
      </sl-dropdown>
    `}render(){return E`
      <cell-section flow>
        <cell-section justify="end">${this.renderMenu()}</cell-section>
        <cell-section><main></main></cell-section>
      </cell-section>
    `}firstUpdated(e){this.router.setOutlet(this.main)}updated(e){e.has("theme")&&(document.documentElement.className=this.theme)}};nn.styles=[B`
      :host {
        height: 100%;
      }

      main {
        display: block;
        overflow: scroll;
        width: 100%;
        height: calc(100dvh - 40px);
      }
    `];xr([lt()],nn.prototype,"theme",2);xr([et("main")],nn.prototype,"main",2);nn=xr([ii("main-view")],nn);
