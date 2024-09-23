(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const Hr={block:"nearest",inline:"nearest"},jr={preventScroll:!0};function va(e,t=200){let n=0;return(...o)=>{clearTimeout(n),n=setTimeout(()=>e(...o),t)}}function _n(e,t=!1,n=1){let i=0;for(;e&&!(i>=n&&e.tabIndex>=0);)i++,e=t?e.previousElementSibling:e.nextElementSibling;return e}function Co(e,t=!1,n=-1){var i,o;if(e){const r=t?(i=e.parentElement)==null?void 0:i.previousElementSibling:(o=e.parentElement)==null?void 0:o.nextElementSibling;if(r){const s=r.children.length-1;if(n===-1&&(n=t?s:0),n>=0&&n<=s)return _n(t?r.lastElementChild:r.firstElementChild,t,t?s-n:n)}}return null}function ya(e){var n;const t=(n=e==null?void 0:e.parentElement)==null?void 0:n.children;if(t){for(let i=0;i<t.length;i++)if(t.item(i)===e)return i}return-1}function X(e){return e.currentTarget}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $n=globalThis,Zi=$n.ShadowRoot&&($n.ShadyCSS===void 0||$n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qi=Symbol(),Po=new WeakMap;let Vr=class{constructor(t,n,i){if(this._$cssResult$=!0,i!==Qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Zi&&t===void 0){const i=n!==void 0&&n.length===1;i&&(t=Po.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Po.set(n,t))}return t}toString(){return this.cssText}};const wa=e=>new Vr(typeof e=="string"?e:e+"",void 0,Qi),st=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((i,o,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new Vr(n,e,Qi)},_a=(e,t)=>{if(Zi)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const i=document.createElement("style"),o=$n.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=n.cssText,e.appendChild(i)}},Oo=Zi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const i of t.cssRules)n+=i.cssText;return wa(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$a,defineProperty:xa,getOwnPropertyDescriptor:Aa,getOwnPropertyNames:Ea,getOwnPropertySymbols:ka,getPrototypeOf:Sa}=Object,It=globalThis,Ro=It.trustedTypes,Ca=Ro?Ro.emptyScript:"",fi=It.reactiveElementPolyfillSupport,ze=(e,t)=>e,On={toAttribute(e,t){switch(t){case Boolean:e=e?Ca:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ji=(e,t)=>!$a(e,t),To={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:Ji};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),It.litPropertyMetadata??(It.litPropertyMetadata=new WeakMap);let ce=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=To){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,n);o!==void 0&&xa(this.prototype,t,o)}}static getPropertyDescriptor(t,n,i){const{get:o,set:r}=Aa(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const l=o==null?void 0:o.call(this);r.call(this,s),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??To}static _$Ei(){if(this.hasOwnProperty(ze("elementProperties")))return;const t=Sa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ze("properties"))){const n=this.properties,i=[...Ea(n),...ka(n)];for(const o of i)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[i,o]of n)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const o=this._$Eu(n,i);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)n.unshift(Oo(o))}else t!==void 0&&n.push(Oo(t));return n}static _$Eu(t,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _a(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(t,n,i){this._$AK(t,i)}_$EC(t,n){var r;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:On).toAttribute(n,i.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,n){var r;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:On;this._$Em=o,this[o]=l.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Ji)(this[t],n))return;this.P(t,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,i){this._$AL.has(t)||this._$AL.set(t,n),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}};ce.elementStyles=[],ce.shadowRootOptions={mode:"open"},ce[ze("elementProperties")]=new Map,ce[ze("finalized")]=new Map,fi==null||fi({ReactiveElement:ce}),(It.reactiveElementVersions??(It.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=globalThis,Rn=Be.trustedTypes,Lo=Rn?Rn.createPolicy("lit-html",{createHTML:e=>e}):void 0,Wr="$lit$",Mt=`lit$${Math.random().toFixed(9).slice(2)}$`,qr="?"+Mt,Pa=`<${qr}>`,Qt=document,qe=()=>Qt.createComment(""),Ye=e=>e===null||typeof e!="object"&&typeof e!="function",to=Array.isArray,Oa=e=>to(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",pi=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mo=/-->/g,No=/>/g,Yt=RegExp(`>|${pi}(?:([^\\s"'>=/]+)(${pi}*=${pi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Do=/'/g,Io=/"/g,Yr=/^(?:script|style|textarea|title)$/i,Ra=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Ut=Ra(1),me=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Uo=new WeakMap,Gt=Qt.createTreeWalker(Qt,129);function Kr(e,t){if(!to(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lo!==void 0?Lo.createHTML(t):t}const Ta=(e,t)=>{const n=e.length-1,i=[];let o,r=t===2?"<svg>":t===3?"<math>":"",s=Te;for(let l=0;l<n;l++){const a=e[l];let c,u,d=-1,f=0;for(;f<a.length&&(s.lastIndex=f,u=s.exec(a),u!==null);)f=s.lastIndex,s===Te?u[1]==="!--"?s=Mo:u[1]!==void 0?s=No:u[2]!==void 0?(Yr.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Yt):u[3]!==void 0&&(s=Yt):s===Yt?u[0]===">"?(s=o??Te,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Yt:u[3]==='"'?Io:Do):s===Io||s===Do?s=Yt:s===Mo||s===No?s=Te:(s=Yt,o=void 0);const h=s===Yt&&e[l+1].startsWith("/>")?" ":"";r+=s===Te?a+Pa:d>=0?(i.push(c),a.slice(0,d)+Wr+a.slice(d)+Mt+h):a+Mt+(d===-2?l:h)}return[Kr(e,r+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let Ri=class Xr{constructor({strings:t,_$litType$:n},i){let o;this.parts=[];let r=0,s=0;const l=t.length-1,a=this.parts,[c,u]=Ta(t,n);if(this.el=Xr.createElement(c,i),Gt.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Gt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Wr)){const f=u[s++],h=o.getAttribute(d).split(Mt),p=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:p[2],strings:h,ctor:p[1]==="."?Ma:p[1]==="?"?Na:p[1]==="@"?Da:Kn}),o.removeAttribute(d)}else d.startsWith(Mt)&&(a.push({type:6,index:r}),o.removeAttribute(d));if(Yr.test(o.tagName)){const d=o.textContent.split(Mt),f=d.length-1;if(f>0){o.textContent=Rn?Rn.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],qe()),Gt.nextNode(),a.push({type:2,index:++r});o.append(d[f],qe())}}}else if(o.nodeType===8)if(o.data===qr)a.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(Mt,d+1))!==-1;)a.push({type:7,index:r}),d+=Mt.length-1}r++}}static createElement(t,n){const i=Qt.createElement("template");return i.innerHTML=t,i}};function ge(e,t,n=e,i){var s,l;if(t===me)return t;let o=i!==void 0?(s=n.o)==null?void 0:s[i]:n.l;const r=Ye(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),r===void 0?o=void 0:(o=new r(e),o._$AT(e,n,i)),i!==void 0?(n.o??(n.o=[]))[i]=o:n.l=o),o!==void 0&&(t=ge(e,o._$AS(e,t.values),o,i)),t}let La=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:i}=this._$AD,o=((t==null?void 0:t.creationScope)??Qt).importNode(n,!0);Gt.currentNode=o;let r=Gt.nextNode(),s=0,l=0,a=i[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new eo(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Ia(r,this,t)),this._$AV.push(c),a=i[++l]}s!==(a==null?void 0:a.index)&&(r=Gt.nextNode(),s++)}return Gt.currentNode=Qt,o}p(t){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}},eo=class Gr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,n,i,o){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=o,this.v=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=ge(this,t,n),Ye(t)?t===I||t==null||t===""?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==me&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Oa(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==I&&Ye(this._$AH)?this._$AA.nextSibling.data=t:this.T(Qt.createTextNode(t)),this._$AH=t}$(t){var r;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ri.createElement(Kr(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new La(o,this),l=s.u(this.options);s.p(n),this.T(l),this._$AH=s}}_$AC(t){let n=Uo.get(t.strings);return n===void 0&&Uo.set(t.strings,n=new Ri(t)),n}k(t){to(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,o=0;for(const r of t)o===n.length?n.push(i=new Gr(this.O(qe()),this.O(qe()),this,this.options)):i=n[o],i._$AI(r),o++;o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this.v=t,(n=this._$AP)==null||n.call(this,t))}},Kn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,i,o,r){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}_$AI(t,n=this,i,o){const r=this.strings;let s=!1;if(r===void 0)t=ge(this,t,n,0),s=!Ye(t)||t!==this._$AH&&t!==me,s&&(this._$AH=t);else{const l=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=ge(this,l[i+a],n,a),c===me&&(c=this._$AH[a]),s||(s=!Ye(c)||c!==this._$AH[a]),c===I?t=I:t!==I&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}s&&!o&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ma=class extends Kn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}},Na=class extends Kn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==I)}},Da=class extends Kn{constructor(t,n,i,o,r){super(t,n,i,o,r),this.type=5}_$AI(t,n=this){if((t=ge(this,t,n,0)??I)===me)return;const i=this._$AH,o=t===I&&i!==I||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==I&&(i===I||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}},Ia=class{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ge(this,t)}};const mi=Be.litHtmlPolyfillSupport;mi==null||mi(Ri,eo),(Be.litHtmlVersions??(Be.litHtmlVersions=[])).push("3.2.0");const Ua=(e,t,n)=>{const i=(n==null?void 0:n.renderBefore)??t;let o=i._$litPart$;if(o===void 0){const r=(n==null?void 0:n.renderBefore)??null;i._$litPart$=o=new eo(t.insertBefore(qe(),r),r,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Et=class extends ce{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Ua(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return me}};var Br;Et._$litElement$=!0,Et.finalized=!0,(Br=globalThis.litElementHydrateSupport)==null||Br.call(globalThis,{LitElement:Et});const gi=globalThis.litElementPolyfillSupport;gi==null||gi({LitElement:Et});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const za={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:Ji},Ba=(e=za,t,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(n.name,e),i==="accessor"){const{name:s}=n;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,e)},init(l){return l!==void 0&&this.P(s,void 0,e),l}}}if(i==="setter"){const{name:s}=n;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+i)};function k(e){return(t,n)=>typeof n=="object"?Ba(e,t,n):((i,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fa=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xn(e){return(t,n)=>{const{slot:i,selector:o}=e??{},r="slot"+(i?`[name=${i}]`:":not([name])");return Fa(t,n,{get(){var a;const s=(a=this.renderRoot)==null?void 0:a.querySelector(r),l=(s==null?void 0:s.assignedElements(e))??[];return o===void 0?l:l.filter(c=>c.matches(o))}})}}const nn=st`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  :host([hide]) {
    display: none;
  }
`,Zr=st`
  :host {
    position: sticky;
    background-color: var(--sl-color-neutral-0);
    z-index: calc(var(--sl-z-index-drawer) - 60);
  }
`;var Gn=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let be=class extends Et{constructor(){super(...arguments),this.value="",this.lang="",this.scale=2}get locale(){return this.lang||document.documentElement.lang||void 0}get format(){return this._format||(this._format=Intl.NumberFormat(this.locale,{minimumFractionDigits:this.scale,maximumFractionDigits:this.scale})),this._format}render(){return Ut`${Ha(this.value,this.format)}`}willUpdate(t){(t.has("scale")||t.has("lang"))&&(this._format=void 0)}};be.styles=[nn];Gn([k({type:String})],be.prototype,"value",void 0);Gn([k({type:String})],be.prototype,"lang",void 0);Gn([k({type:Number})],be.prototype,"scale",void 0);be=Gn([bt("cell-format")],be);function zo(e){if(!e)return 0n;const t=BigInt(e);return t<0n?-t:t}function Ha(e,t){const[n,i]=e.split(/\./,2),o=t.formatToParts(parseFloat("."+(i||0)));return(e.startsWith("-")?"-":"")+t.formatToParts(zo(n)+zo(o[0].value)).reduce((r,s)=>r+=s.type==="fraction"?o[2].value:s.value,"")}var ja=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Ti=class extends Et{render(){return Ut`<slot></slot>`}};Ti.styles=[nn,st`
      :host {
        display: contents;
      }
    `];Ti=ja([bt("cell-group")],Ti);var Ee=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Bt=class extends Et{get label(){return this.textContent||""}get labels(){return this.items.map(t=>t.textContent||"")}constructor(){super(),this.value="",this.addEventListener("click",()=>this.selected=!this.selected)}render(){return Ut`<slot></slot>`}updated(t){super.updated(t),t.has("selected")&&this.dispatchEvent(new Event("selection",{bubbles:!0}))}};Bt.styles=[nn,st`
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
    `];Ee([k({type:String})],Bt.prototype,"value",void 0);Ee([k({type:Boolean,reflect:!0})],Bt.prototype,"active",void 0);Ee([k({type:Boolean,reflect:!0})],Bt.prototype,"selected",void 0);Ee([k({type:Number})],Bt.prototype,"span",void 0);Ee([Xn()],Bt.prototype,"items",void 0);Bt=Ee([bt("cell-option")],Bt);var Qr=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let ve=class extends Et{constructor(){super(...arguments),this.columns="auto"}render(){return Ut`<slot></slot>`}willUpdate(t){super.willUpdate(t),t.has("columns")&&this.style.setProperty("--property-columns",`${this.columns}`)}};ve.styles=[nn,st`
      :host {
        display: grid;
        grid-template-columns: var(--property-columns);
      }
    `];Qr([k({type:String})],ve.prototype,"columns",void 0);ve=Qr([bt("cell-grid")],ve);var on=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Jt=class extends ve{constructor(){super(),this.hide=!0,this.tabIndex=0,this.addEventListener("keydown",t=>this.handleKeyDown(t))}setPosition(t,n){Object.assign(this.style,{top:`${n}px`,left:`${t}px`})}reset(){this.active.forEach(t=>t.active=!1),this.selected.forEach(t=>t.selected=!1)}toggle(){this.active.forEach(t=>t.selected=!t.selected)}handleKeyDown(t){switch(t.key){case"ArrowDown":this.next(),t.preventDefault(),t.stopImmediatePropagation();break;case"ArrowUp":this.next(!0),t.preventDefault(),t.stopImmediatePropagation();break;case"Enter":this.toggle(),t.preventDefault(),t.stopImmediatePropagation();break;case"Escape":this.dispatchEvent(new Event("hide")),t.preventDefault(),t.stopImmediatePropagation()}}next(t=!1){const n=this.options;let i=this.active[0];if(i){i.active=!1;let o=n.indexOf(i)+(t?-1:1);o<0?o=0:o>n.length-1&&(o=n.length-1),i=n[o]}else i=n[0];i&&(i.active=!0,i.firstElementChild&&i.firstElementChild.scrollIntoView(Hr))}};Jt.styles=[...ve.styles,st`
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
    `];on([k({type:Boolean,reflect:!0})],Jt.prototype,"hide",void 0);on([Xn({selector:"cell-option[selected]"})],Jt.prototype,"selected",void 0);on([Xn({selector:"cell-option[active]"})],Jt.prototype,"active",void 0);on([Xn({selector:"cell-option"})],Jt.prototype,"options",void 0);Jt=on([bt("cell-datalist")],Jt);var Pt=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let J=class extends Et{constructor(){super(...arguments),this.grow="1",this.shrink="1",this.basis="max-content"}render(){return Ut`<slot></slot>`}willUpdate(t){super.willUpdate(t),(t.has("grow")||t.has("shrink")||t.has("basis"))&&this.style.setProperty("--property-flex",`${this.grow} ${this.shrink} ${this.basis}`)}};J.styles=[nn,st`
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
        justify-content: start;
      }

      :host([justify="center"]) {
        justify-content: center;
      }

      :host([justify="end"]) {
        justify-content: end;
      }

      :host([align="start"]) {
        align-items: start;
      }

      :host([align="center"]) {
        align-items: center;
      }

      :host([align="end"]) {
        align-items: end;
      }
    `];Pt([k({type:String})],J.prototype,"grow",void 0);Pt([k({type:String})],J.prototype,"shrink",void 0);Pt([k({type:String})],J.prototype,"basis",void 0);Pt([k({type:String})],J.prototype,"flow",void 0);Pt([k({type:String})],J.prototype,"wrap",void 0);Pt([k({type:Boolean})],J.prototype,"gap",void 0);Pt([k({type:String})],J.prototype,"justify",void 0);Pt([k({type:String})],J.prototype,"align",void 0);J=Pt([bt("cell-section")],J);var rn=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let tt=class extends J{constructor(){super(),this.addEventListener("focus",t=>this.handleFocus(t)),this.addEventListener("blur",t=>this.handleBlur(t)),this.addEventListener("click",t=>this.handleClick(t)),this.addEventListener("keydown",t=>this.handleKeyDown(t))}handleKeyDown(t){}handleFocus(t){this.focused=!0}handleBlur(t){this.focused=!1}handleClick(t){const n=this.jump==="next"?this.nextElementSibling:this.jump==="prev"?this.previousElementSibling:null;n instanceof HTMLElement&&n.focus()}willUpdate(t){super.willUpdate(t),t.has("span")&&(this.span?this.style.setProperty("grid-column-end",`span ${this.span}`):this.style.removeProperty("grid-column-end"))}};tt.styles=[...J.styles,st`
      :host {
        padding: var(--sl-spacing-x-small);
        border-bottom: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      :host([focused]) {
        outline: 0;
        caret-color: var(--sl-color-neutral-1000);
        background-color: var(--sl-input-filled-background-color-focus);
        border-bottom: var(--sl-panel-border-width) solid
          var(--sl-input-border-color-focus);
        box-shadow: 0 4px 1px -1px var(--sl-input-focus-ring-color);
      }

      :host([truncate]) {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    `];rn([k({type:Number})],tt.prototype,"span",void 0);rn([k({type:String})],tt.prototype,"jump",void 0);rn([k({type:Boolean,reflect:!0})],tt.prototype,"focused",void 0);rn([k({type:Boolean})],tt.prototype,"truncate",void 0);tt=rn([bt("cell-item")],tt);var Va=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Li=class extends tt{};Li.styles=[...tt.styles,Zr,st`
      :host {
        top: 0;
        border-top: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
        font-weight: var(--sl-font-weight-semibold);
      }
    `];Li=Va([bt("cell-header")],Li);var Wa=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Mi=class extends tt{};Mi.styles=[...tt.styles,Zr,st`
      :host {
        bottom: 0;
        margin-top: 4px;
        border-top: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
        font-weight: var(--sl-font-weight-semibold);
      }
    `];Mi=Wa([bt("cell-footer")],Mi);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qa(e,t,n){return e?t(e):n==null?void 0:n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ya=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ka={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xa=e=>(...t)=>({_$litDirective$:e,values:t});let Ga=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this.t=t,this._$AM=n,this.i=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Fe(o,t);return!0},Tn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},Jr=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ja(t)}};function Za(e){this._$AN!==void 0?(Tn(this),this._$AM=e,Jr(this)):this._$AM=e}function Qa(e,t=!1,n=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let r=n;r<i.length;r++)Fe(i[r],!1),Tn(i[r]);else i!=null&&(Fe(i,!1),Tn(i));else Fe(this,e)}const Ja=e=>{e.type==Ka.CHILD&&(e._$AP??(e._$AP=Qa),e._$AQ??(e._$AQ=Za))};let tl=class extends Ga{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,i){super._$AT(t,n,i),Jr(this),this.isConnected=t._$AU}_$AO(t,n=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),n&&(Fe(this,t),Tn(this))}setValue(t){if(Ya(this.t))this.t._$AI(t,this);else{const n=[...this.t._$AH];n[this.i]=t,this.t._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const el=()=>new nl;let nl=class{};const bi=new WeakMap,il=Xa(class extends tl{render(e){return I}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),I}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let n=bi.get(t);n===void 0&&(n=new WeakMap,bi.set(t,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=bi.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ol=e=>e??I;var ke=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let yt=class extends tt{get selectionStart(){return this.input.value?this.input.value.selectionStart:null}get selectionEnd(){return this.input.value?this.input.value.selectionEnd:null}constructor(){super(),this.type="text",this.value="",this.size=1,this.oldIndex=-1,this.input=el(),this.adjustWidth=va(()=>{this.input.value&&(this.input.value.style.minWidth=this.value.length+"ch")}),this.tabIndex=0}canLeave(t=!1){const n=this.selectionEnd,i=this.selectionStart;return n==null||i===null||t&&n===0||!t&&i===this.value.length}renderFocused(){return Ut`<slot name="value"></slot
      ><input
        ${il(this.input)}
        class="input"
        autocomplete="off"
        .type="${this.type}"
        .size="${this.size}"
        .value="${this.value}"
        inputmode="${ol(this.inputMode)}"
        @input="${t=>{this.value=X(t).value,this.auto&&this.adjustWidth()}}"
        @change="${()=>{this.dispatchEvent(new Event("change"))}}"
        @keydown="${t=>{t.key==="Tab"&&t.shiftKey&&(this.oldIndex=this.tabIndex,this.tabIndex=-1)}}"
        @blur="${()=>{this.oldIndex!==-1&&(this.tabIndex=this.oldIndex,this.oldIndex=-1)}}"
      />`}render(){return Ut`${qa(this.focused&&!this.readonly,()=>this.renderFocused(),()=>Ut`<slot>${this.value}</slot>`)}`}updated(t){super.updated(t),t.has("focused")&&this.focused&&this.input.value&&!this.readonly&&this.input.value.focus(jr)}};yt.styles=[...tt.styles,st`
      :host([focused]) {
        padding: 0;
      }

      :host([readonly]) {
        padding: var(--sl-spacing-x-small);
      }

      ::slotted(*) {
        --sl-input-height-medium: 2.2rem;
      }

      .input,
      .input:focus {
        padding: var(--sl-spacing-x-small);
        outline: 0;
        border: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: inherit;
        font-style: inherit;
        font-size: inherit;
        font-weight: inherit;
        background-color: inherit;
        min-height: unset;
        min-width: unset;
        display: inline-flex;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
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

      :host([justify="end"]) > .input {
        text-align: right;
      }
    `];ke([k({type:String})],yt.prototype,"type",void 0);ke([k({type:String})],yt.prototype,"value",void 0);ke([k({type:Number})],yt.prototype,"size",void 0);ke([k({type:Boolean})],yt.prototype,"readonly",void 0);ke([k({type:Boolean})],yt.prototype,"auto",void 0);yt=ke([bt("cell-input")],yt);const Ke=Math.min,rt=Math.max,Ln=Math.round,pn=Math.floor,Ft=e=>({x:e,y:e}),rl={left:"right",right:"left",bottom:"top",top:"bottom"},sl={start:"end",end:"start"};function Zn(e,t){return typeof e=="function"?e(t):e}function te(e){return e.split("-")[0]}function sn(e){return e.split("-")[1]}function al(e){return e==="x"?"y":"x"}function ts(e){return e==="y"?"height":"width"}function ye(e){return["top","bottom"].includes(te(e))?"y":"x"}function es(e){return al(ye(e))}function ll(e,t,n){n===void 0&&(n=!1);const i=sn(e),o=es(e),r=ts(o);let s=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=Mn(s)),[s,Mn(s)]}function cl(e){const t=Mn(e);return[Ni(e),t,Ni(t)]}function Ni(e){return e.replace(/start|end/g,t=>sl[t])}function ul(e,t,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:i:t?i:o;case"left":case"right":return t?r:s;default:return[]}}function dl(e,t,n,i){const o=sn(e);let r=ul(te(e),n==="start",i);return o&&(r=r.map(s=>s+"-"+o),t&&(r=r.concat(r.map(Ni)))),r}function Mn(e){return e.replace(/left|right|bottom|top/g,t=>rl[t])}function hl(e){return{top:0,right:0,bottom:0,left:0,...e}}function fl(e){return typeof e!="number"?hl(e):{top:e,right:e,bottom:e,left:e}}function Nn(e){const{x:t,y:n,width:i,height:o}=e;return{width:i,height:o,top:n,left:t,right:t+i,bottom:n+o,x:t,y:n}}function Bo(e,t,n){let{reference:i,floating:o}=e;const r=ye(t),s=es(t),l=ts(s),a=te(t),c=r==="y",u=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,f=i[l]/2-o[l]/2;let h;switch(a){case"top":h={x:u,y:i.y-o.height};break;case"bottom":h={x:u,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:d};break;case"left":h={x:i.x-o.width,y:d};break;default:h={x:i.x,y:i.y}}switch(sn(t)){case"start":h[s]-=f*(n&&c?-1:1);break;case"end":h[s]+=f*(n&&c?-1:1);break}return h}const pl=async(e,t,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Bo(c,i,a),f=i,h={},p=0;for(let g=0;g<l.length;g++){const{name:y,fn:v}=l[g],{x:w,y:_,data:x,reset:$}=await v({x:u,y:d,initialPlacement:i,placement:f,strategy:o,middlewareData:h,rects:c,platform:s,elements:{reference:e,floating:t}});u=w??u,d=_??d,h={...h,[y]:{...h[y],...x}},$&&p<=50&&(p++,typeof $=="object"&&($.placement&&(f=$.placement),$.rects&&(c=$.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):$.rects),{x:u,y:d}=Bo(c,f,a)),g=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}};async function ns(e,t){var n;t===void 0&&(t={});const{x:i,y:o,platform:r,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Zn(t,e),p=fl(h),y=l[f?d==="floating"?"reference":"floating":d],v=Nn(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(y)))==null||n?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),w=d==="floating"?{x:i,y:o,width:s.floating.width,height:s.floating.height}:s.reference,_=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),x=await(r.isElement==null?void 0:r.isElement(_))?await(r.getScale==null?void 0:r.getScale(_))||{x:1,y:1}:{x:1,y:1},$=Nn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:_,strategy:a}):w);return{top:(v.top-$.top+p.top)/x.y,bottom:($.bottom-v.bottom+p.bottom)/x.y,left:(v.left-$.left+p.left)/x.x,right:($.right-v.right+p.right)/x.x}}const ml=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:o,middlewareData:r,rects:s,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...y}=Zn(e,t);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const v=te(o),w=ye(l),_=te(l)===l,x=await(a.isRTL==null?void 0:a.isRTL(c.floating)),$=f||(_||!g?[Mn(l)]:cl(l)),A=p!=="none";!f&&A&&$.push(...dl(l,g,p,x));const O=[l,...$],R=await ns(t,y),T=[];let C=((i=r.flip)==null?void 0:i.overflows)||[];if(u&&T.push(R[v]),d){const L=ll(o,s,x);T.push(R[L[0]],R[L[1]])}if(C=[...C,{placement:o,overflows:T}],!T.every(L=>L<=0)){var U,N;const L=(((U=r.flip)==null?void 0:U.index)||0)+1,At=O[L];if(At)return{data:{index:L,overflows:C},reset:{placement:At}};let K=(N=C.filter(H=>H.overflows[0]<=0).sort((H,j)=>H.overflows[1]-j.overflows[1])[0])==null?void 0:N.placement;if(!K)switch(h){case"bestFit":{var z;const H=(z=C.filter(j=>{if(A){const V=ye(j.placement);return V===w||V==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(V=>V>0).reduce((V,hi)=>V+hi,0)]).sort((j,V)=>j[1]-V[1])[0])==null?void 0:z[0];H&&(K=H);break}case"initialPlacement":K=l;break}if(o!==K)return{reset:{placement:K}}}return{}}}};async function gl(e,t){const{placement:n,platform:i,elements:o}=e,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),s=te(n),l=sn(n),a=ye(n)==="y",c=["left","top"].includes(s)?-1:1,u=r&&a?-1:1,d=Zn(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof p=="number"&&(h=l==="end"?p*-1:p),a?{x:h*u,y:f*c}:{x:f*c,y:h*u}}const bl=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,i;const{x:o,y:r,placement:s,middlewareData:l}=t,a=await gl(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:o+a.x,y:r+a.y,data:{...a,placement:s}}}}},vl=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,i;const{placement:o,rects:r,platform:s,elements:l}=t,{apply:a=()=>{},...c}=Zn(e,t),u=await ns(t,c),d=te(o),f=sn(o),h=ye(o)==="y",{width:p,height:g}=r.floating;let y,v;d==="top"||d==="bottom"?(y=d,v=f===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(v=d,y=f==="end"?"top":"bottom");const w=g-u.top-u.bottom,_=p-u.left-u.right,x=Ke(g-u[y],w),$=Ke(p-u[v],_),A=!t.middlewareData.shift;let O=x,R=$;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(R=_),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(O=w),A&&!f){const C=rt(u.left,0),U=rt(u.right,0),N=rt(u.top,0),z=rt(u.bottom,0);h?R=p-2*(C!==0||U!==0?C+U:rt(u.left,u.right)):O=g-2*(N!==0||z!==0?N+z:rt(u.top,u.bottom))}await a({...t,availableWidth:R,availableHeight:O});const T=await s.getDimensions(l.floating);return p!==T.width||g!==T.height?{reset:{rects:!0}}:{}}}};function Qn(){return typeof window<"u"}function Se(e){return is(e)?(e.nodeName||"").toLowerCase():"#document"}function Z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function $t(e){var t;return(t=(is(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function is(e){return Qn()?e instanceof Node||e instanceof Z(e).Node:!1}function ft(e){return Qn()?e instanceof Element||e instanceof Z(e).Element:!1}function wt(e){return Qn()?e instanceof HTMLElement||e instanceof Z(e).HTMLElement:!1}function Fo(e){return!Qn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Z(e).ShadowRoot}function an(e){const{overflow:t,overflowX:n,overflowY:i,display:o}=pt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(o)}function yl(e){return["table","td","th"].includes(Se(e))}function Jn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function no(e){const t=io(),n=ft(e)?pt(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function wl(e){let t=Ht(e);for(;wt(t)&&!we(t);){if(no(t))return t;if(Jn(t))return null;t=Ht(t)}return null}function io(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function we(e){return["html","body","#document"].includes(Se(e))}function pt(e){return Z(e).getComputedStyle(e)}function ti(e){return ft(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ht(e){if(Se(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Fo(e)&&e.host||$t(e);return Fo(t)?t.host:t}function os(e){const t=Ht(e);return we(t)?e.ownerDocument?e.ownerDocument.body:e.body:wt(t)&&an(t)?t:os(t)}function Xe(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=os(e),r=o===((i=e.ownerDocument)==null?void 0:i.body),s=Z(o);if(r){const l=Di(s);return t.concat(s,s.visualViewport||[],an(o)?o:[],l&&n?Xe(l):[])}return t.concat(o,Xe(o,[],n))}function Di(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function rs(e){const t=pt(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=wt(e),r=o?e.offsetWidth:n,s=o?e.offsetHeight:i,l=Ln(n)!==r||Ln(i)!==s;return l&&(n=r,i=s),{width:n,height:i,$:l}}function oo(e){return ft(e)?e:e.contextElement}function fe(e){const t=oo(e);if(!wt(t))return Ft(1);const n=t.getBoundingClientRect(),{width:i,height:o,$:r}=rs(t);let s=(r?Ln(n.width):n.width)/i,l=(r?Ln(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const _l=Ft(0);function ss(e){const t=Z(e);return!io()||!t.visualViewport?_l:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function $l(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Z(e)?!1:t}function ee(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=oo(e);let s=Ft(1);t&&(i?ft(i)&&(s=fe(i)):s=fe(e));const l=$l(r,n,i)?ss(r):Ft(0);let a=(o.left+l.x)/s.x,c=(o.top+l.y)/s.y,u=o.width/s.x,d=o.height/s.y;if(r){const f=Z(r),h=i&&ft(i)?Z(i):i;let p=f,g=Di(p);for(;g&&i&&h!==p;){const y=fe(g),v=g.getBoundingClientRect(),w=pt(g),_=v.left+(g.clientLeft+parseFloat(w.paddingLeft))*y.x,x=v.top+(g.clientTop+parseFloat(w.paddingTop))*y.y;a*=y.x,c*=y.y,u*=y.x,d*=y.y,a+=_,c+=x,p=Z(g),g=Di(p)}}return Nn({width:u,height:d,x:a,y:c})}function xl(e){let{elements:t,rect:n,offsetParent:i,strategy:o}=e;const r=o==="fixed",s=$t(i),l=t?Jn(t.floating):!1;if(i===s||l&&r)return n;let a={scrollLeft:0,scrollTop:0},c=Ft(1);const u=Ft(0),d=wt(i);if((d||!d&&!r)&&((Se(i)!=="body"||an(s))&&(a=ti(i)),wt(i))){const f=ee(i);c=fe(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+u.x,y:n.y*c.y-a.scrollTop*c.y+u.y}}function Al(e){return Array.from(e.getClientRects())}function Ii(e,t){const n=ti(e).scrollLeft;return t?t.left+n:ee($t(e)).left+n}function El(e){const t=$t(e),n=ti(e),i=e.ownerDocument.body,o=rt(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=rt(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Ii(e);const l=-n.scrollTop;return pt(i).direction==="rtl"&&(s+=rt(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:s,y:l}}function kl(e,t){const n=Z(e),i=$t(e),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,l=0,a=0;if(o){r=o.width,s=o.height;const c=io();(!c||c&&t==="fixed")&&(l=o.offsetLeft,a=o.offsetTop)}return{width:r,height:s,x:l,y:a}}function Sl(e,t){const n=ee(e,!0,t==="fixed"),i=n.top+e.clientTop,o=n.left+e.clientLeft,r=wt(e)?fe(e):Ft(1),s=e.clientWidth*r.x,l=e.clientHeight*r.y,a=o*r.x,c=i*r.y;return{width:s,height:l,x:a,y:c}}function Ho(e,t,n){let i;if(t==="viewport")i=kl(e,n);else if(t==="document")i=El($t(e));else if(ft(t))i=Sl(t,n);else{const o=ss(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Nn(i)}function as(e,t){const n=Ht(e);return n===t||!ft(n)||we(n)?!1:pt(n).position==="fixed"||as(n,t)}function Cl(e,t){const n=t.get(e);if(n)return n;let i=Xe(e,[],!1).filter(l=>ft(l)&&Se(l)!=="body"),o=null;const r=pt(e).position==="fixed";let s=r?Ht(e):e;for(;ft(s)&&!we(s);){const l=pt(s),a=no(s);!a&&l.position==="fixed"&&(o=null),(r?!a&&!o:!a&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||an(s)&&!a&&as(e,s))?i=i.filter(u=>u!==s):o=l,s=Ht(s)}return t.set(e,i),i}function Pl(e){let{element:t,boundary:n,rootBoundary:i,strategy:o}=e;const s=[...n==="clippingAncestors"?Jn(t)?[]:Cl(t,this._c):[].concat(n),i],l=s[0],a=s.reduce((c,u)=>{const d=Ho(t,u,o);return c.top=rt(d.top,c.top),c.right=Ke(d.right,c.right),c.bottom=Ke(d.bottom,c.bottom),c.left=rt(d.left,c.left),c},Ho(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Ol(e){const{width:t,height:n}=rs(e);return{width:t,height:n}}function Rl(e,t,n){const i=wt(t),o=$t(t),r=n==="fixed",s=ee(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const a=Ft(0);if(i||!i&&!r)if((Se(t)!=="body"||an(o))&&(l=ti(t)),i){const h=ee(t,!0,r,t);a.x=h.x+t.clientLeft,a.y=h.y+t.clientTop}else o&&(a.x=Ii(o));let c=0,u=0;if(o&&!i&&!r){const h=o.getBoundingClientRect();u=h.top+l.scrollTop,c=h.left+l.scrollLeft-Ii(o,h)}const d=s.left+l.scrollLeft-a.x-c,f=s.top+l.scrollTop-a.y-u;return{x:d,y:f,width:s.width,height:s.height}}function vi(e){return pt(e).position==="static"}function jo(e,t){if(!wt(e)||pt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return $t(e)===n&&(n=n.ownerDocument.body),n}function ls(e,t){const n=Z(e);if(Jn(e))return n;if(!wt(e)){let o=Ht(e);for(;o&&!we(o);){if(ft(o)&&!vi(o))return o;o=Ht(o)}return n}let i=jo(e,t);for(;i&&yl(i)&&vi(i);)i=jo(i,t);return i&&we(i)&&vi(i)&&!no(i)?n:i||wl(e)||n}const Tl=async function(e){const t=this.getOffsetParent||ls,n=this.getDimensions,i=await n(e.floating);return{reference:Rl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Ll(e){return pt(e).direction==="rtl"}const Ml={convertOffsetParentRelativeRectToViewportRelativeRect:xl,getDocumentElement:$t,getClippingRect:Pl,getOffsetParent:ls,getElementRects:Tl,getClientRects:Al,getDimensions:Ol,getScale:fe,isElement:ft,isRTL:Ll};function Nl(e,t){let n=null,i;const o=$t(e);function r(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),r();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;const h=pn(u),p=pn(o.clientWidth-(c+d)),g=pn(o.clientHeight-(u+f)),y=pn(c),w={rootMargin:-h+"px "+-p+"px "+-g+"px "+-y+"px",threshold:rt(0,Ke(1,a))||1};let _=!0;function x($){const A=$[0].intersectionRatio;if(A!==a){if(!_)return s();A?s(!1,A):i=setTimeout(()=>{s(!1,1e-7)},1e3)}_=!1}try{n=new IntersectionObserver(x,{...w,root:o.ownerDocument})}catch{n=new IntersectionObserver(x,w)}n.observe(e)}return s(!0),r}function Dl(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=oo(e),u=o||r?[...c?Xe(c):[],...Xe(t)]:[];u.forEach(v=>{o&&v.addEventListener("scroll",n,{passive:!0}),r&&v.addEventListener("resize",n)});const d=c&&l?Nl(c,n):null;let f=-1,h=null;s&&(h=new ResizeObserver(v=>{let[w]=v;w&&w.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=h)==null||_.observe(t)})),n()}),c&&!a&&h.observe(c),h.observe(t));let p,g=a?ee(e):null;a&&y();function y(){const v=ee(e);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&n(),g=v,p=requestAnimationFrame(y)}return n(),()=>{var v;u.forEach(w=>{o&&w.removeEventListener("scroll",n),r&&w.removeEventListener("resize",n)}),d==null||d(),(v=h)==null||v.disconnect(),h=null,a&&cancelAnimationFrame(p)}}const Il=bl,Ul=ml,zl=vl,Bl=(e,t,n)=>{const i=new Map,o={platform:Ml,...n},r={...o.platform,_c:i};return pl(e,t,{...o,platform:r})};var ei=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let _e=class extends yt{constructor(){super(...arguments),this.placement="bottom-start",this.sizeOptions={apply:({availableWidth:t,availableHeight:n,elements:i})=>{Object.assign(i.floating.style,{maxWidth:`${Math.max(192,t-16)}px`,maxHeight:`${Math.max(192,n-16)}px`})}},this.handleListPosition=()=>{this.datalist&&(this.stretch&&this.datalist.style.setProperty("min-width",`${this.offsetWidth-2}px`),Bl(this,this.datalist,{placement:this.placement,strategy:"absolute",middleware:[Il(4),Ul(),zl(this.sizeOptions)]}).then(({x:t,y:n})=>{this.datalist&&(this.datalist.setPosition(t,n),this.datalist.hide=!1)}))},this.handleLisHide=()=>{this.hide(!0)},this.handleListSelection=()=>{this.dispatchEvent(new Event("selection"))},this.handleElementBlur=t=>{const n=t.relatedTarget;if(n===this)return;let i=n;for(;i;){if(i===this.datalist){n.addEventListener("blur",this.handleElementBlur,{once:!0});return}i=i.parentElement}this.hide()}}get selected(){return this.datalist?this.datalist.selected:[]}show(){this.datalist&&!this.dispose&&(this.datalist.addEventListener("hide",this.handleLisHide),this.datalist.addEventListener("selection",this.handleListSelection),this.dispose=Dl(this,this.datalist,this.handleListPosition))}hide(t=!1){this.datalist&&this.dispose&&(this.datalist.removeEventListener("hide",this.handleLisHide),this.datalist.removeEventListener("selection",this.handleListSelection),this.dispose(),this.dispose=null,this.datalist.hide=!0,this.focused=t,this.dispatchEvent(new Event("hide")))}reset(){this.datalist&&this.datalist.reset()}handleBlur(t){this.dispose?this.handleElementBlur(t):super.handleBlur(t)}handleKeyDown(t){this.datalist&&this.dispose?this.datalist.handleKeyDown(t):super.handleKeyDown(t)}willUpdate(t){if(super.willUpdate(t),t.has("list"))if(this.list){const n=this.getRootNode();this.datalist=n.querySelector(`#${this.list}`)}else this.datalist=void 0}};_e.styles=[...yt.styles,st``];ei([k({type:String})],_e.prototype,"list",void 0);ei([k({type:String})],_e.prototype,"placement",void 0);ei([k({type:Boolean})],_e.prototype,"stretch",void 0);_e=ei([bt("cell-select")],_e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xn=globalThis,ro=xn.ShadowRoot&&(xn.ShadyCSS===void 0||xn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,so=Symbol(),Vo=new WeakMap;let cs=class{constructor(t,n,i){if(this._$cssResult$=!0,i!==so)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ro&&t===void 0){const i=n!==void 0&&n.length===1;i&&(t=Vo.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Vo.set(n,t))}return t}toString(){return this.cssText}};const Fl=e=>new cs(typeof e=="string"?e:e+"",void 0,so),B=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((i,o,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new cs(n,e,so)},Hl=(e,t)=>{if(ro)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const i=document.createElement("style"),o=xn.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=n.cssText,e.appendChild(i)}},Wo=ro?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const i of t.cssRules)n+=i.cssText;return Fl(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:jl,defineProperty:Vl,getOwnPropertyDescriptor:Wl,getOwnPropertyNames:ql,getOwnPropertySymbols:Yl,getPrototypeOf:Kl}=Object,zt=globalThis,qo=zt.trustedTypes,Xl=qo?qo.emptyScript:"",yi=zt.reactiveElementPolyfillSupport,He=(e,t)=>e,$e={toAttribute(e,t){switch(t){case Boolean:e=e?Xl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ni=(e,t)=>!jl(e,t),Yo={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:ni};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),zt.litPropertyMetadata??(zt.litPropertyMetadata=new WeakMap);class ue extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Yo){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,n);o!==void 0&&Vl(this.prototype,t,o)}}static getPropertyDescriptor(t,n,i){const{get:o,set:r}=Wl(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const l=o==null?void 0:o.call(this);r.call(this,s),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Yo}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;const t=Kl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){const n=this.properties,i=[...ql(n),...Yl(n)];for(const o of i)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[i,o]of n)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const o=this._$Eu(n,i);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)n.unshift(Wo(o))}else t!==void 0&&n.push(Wo(t));return n}static _$Eu(t,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(t,n,i){this._$AK(t,i)}_$EC(t,n){var r;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:$e).toAttribute(n,i.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,n){var r;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:$e;this._$Em=o,this[o]=l.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??ni)(this[t],n))return;this.P(t,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,i){this._$AL.has(t)||this._$AL.set(t,n),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}ue.elementStyles=[],ue.shadowRootOptions={mode:"open"},ue[He("elementProperties")]=new Map,ue[He("finalized")]=new Map,yi==null||yi({ReactiveElement:ue}),(zt.reactiveElementVersions??(zt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=globalThis,Dn=je.trustedTypes,Ko=Dn?Dn.createPolicy("lit-html",{createHTML:e=>e}):void 0,us="$lit$",Nt=`lit$${Math.random().toFixed(9).slice(2)}$`,ds="?"+Nt,Gl=`<${ds}>`,ne=document,Ge=()=>ne.createComment(""),Ze=e=>e===null||typeof e!="object"&&typeof e!="function",ao=Array.isArray,Zl=e=>ao(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",wi=`[ 	
\f\r]`,Le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xo=/-->/g,Go=/>/g,Kt=RegExp(`>|${wi}(?:([^\\s"'>=/]+)(${wi}*=${wi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zo=/'/g,Qo=/"/g,hs=/^(?:script|style|textarea|title)$/i,Ql=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),E=Ql(1),dt=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Jo=new WeakMap,Zt=ne.createTreeWalker(ne,129);function fs(e,t){if(!ao(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ko!==void 0?Ko.createHTML(t):t}const Jl=(e,t)=>{const n=e.length-1,i=[];let o,r=t===2?"<svg>":t===3?"<math>":"",s=Le;for(let l=0;l<n;l++){const a=e[l];let c,u,d=-1,f=0;for(;f<a.length&&(s.lastIndex=f,u=s.exec(a),u!==null);)f=s.lastIndex,s===Le?u[1]==="!--"?s=Xo:u[1]!==void 0?s=Go:u[2]!==void 0?(hs.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Kt):u[3]!==void 0&&(s=Kt):s===Kt?u[0]===">"?(s=o??Le,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Kt:u[3]==='"'?Qo:Zo):s===Qo||s===Zo?s=Kt:s===Xo||s===Go?s=Le:(s=Kt,o=void 0);const h=s===Kt&&e[l+1].startsWith("/>")?" ":"";r+=s===Le?a+Gl:d>=0?(i.push(c),a.slice(0,d)+us+a.slice(d)+Nt+h):a+Nt+(d===-2?l:h)}return[fs(e,r+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Qe{constructor({strings:t,_$litType$:n},i){let o;this.parts=[];let r=0,s=0;const l=t.length-1,a=this.parts,[c,u]=Jl(t,n);if(this.el=Qe.createElement(c,i),Zt.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Zt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(us)){const f=u[s++],h=o.getAttribute(d).split(Nt),p=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:p[2],strings:h,ctor:p[1]==="."?ec:p[1]==="?"?nc:p[1]==="@"?ic:ii}),o.removeAttribute(d)}else d.startsWith(Nt)&&(a.push({type:6,index:r}),o.removeAttribute(d));if(hs.test(o.tagName)){const d=o.textContent.split(Nt),f=d.length-1;if(f>0){o.textContent=Dn?Dn.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],Ge()),Zt.nextNode(),a.push({type:2,index:++r});o.append(d[f],Ge())}}}else if(o.nodeType===8)if(o.data===ds)a.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(Nt,d+1))!==-1;)a.push({type:7,index:r}),d+=Nt.length-1}r++}}static createElement(t,n){const i=ne.createElement("template");return i.innerHTML=t,i}}function xe(e,t,n=e,i){var s,l;if(t===dt)return t;let o=i!==void 0?(s=n.o)==null?void 0:s[i]:n.l;const r=Ze(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),r===void 0?o=void 0:(o=new r(e),o._$AT(e,n,i)),i!==void 0?(n.o??(n.o=[]))[i]=o:n.l=o),o!==void 0&&(t=xe(e,o._$AS(e,t.values),o,i)),t}class tc{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:i}=this._$AD,o=((t==null?void 0:t.creationScope)??ne).importNode(n,!0);Zt.currentNode=o;let r=Zt.nextNode(),s=0,l=0,a=i[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new ln(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new oc(r,this,t)),this._$AV.push(c),a=i[++l]}s!==(a==null?void 0:a.index)&&(r=Zt.nextNode(),s++)}return Zt.currentNode=ne,o}p(t){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}class ln{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,n,i,o){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=o,this.v=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=xe(this,t,n),Ze(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==dt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Zl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==M&&Ze(this._$AH)?this._$AA.nextSibling.data=t:this.T(ne.createTextNode(t)),this._$AH=t}$(t){var r;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Qe.createElement(fs(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new tc(o,this),l=s.u(this.options);s.p(n),this.T(l),this._$AH=s}}_$AC(t){let n=Jo.get(t.strings);return n===void 0&&Jo.set(t.strings,n=new Qe(t)),n}k(t){ao(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,o=0;for(const r of t)o===n.length?n.push(i=new ln(this.O(Ge()),this.O(Ge()),this,this.options)):i=n[o],i._$AI(r),o++;o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this.v=t,(n=this._$AP)==null||n.call(this,t))}}class ii{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,i,o,r){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}_$AI(t,n=this,i,o){const r=this.strings;let s=!1;if(r===void 0)t=xe(this,t,n,0),s=!Ze(t)||t!==this._$AH&&t!==dt,s&&(this._$AH=t);else{const l=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=xe(this,l[i+a],n,a),c===dt&&(c=this._$AH[a]),s||(s=!Ze(c)||c!==this._$AH[a]),c===M?t=M:t!==M&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}s&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ec extends ii{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}class nc extends ii{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==M)}}class ic extends ii{constructor(t,n,i,o,r){super(t,n,i,o,r),this.type=5}_$AI(t,n=this){if((t=xe(this,t,n,0)??M)===dt)return;const i=this._$AH,o=t===M&&i!==M||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==M&&(i===M||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class oc{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){xe(this,t)}}const _i=je.litHtmlPolyfillSupport;_i==null||_i(Qe,ln),(je.litHtmlVersions??(je.litHtmlVersions=[])).push("3.2.0");const rc=(e,t,n)=>{const i=(n==null?void 0:n.renderBefore)??t;let o=i._$litPart$;if(o===void 0){const r=(n==null?void 0:n.renderBefore)??null;i._$litPart$=o=new ln(t.insertBefore(Ge(),r),r,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let kt=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=rc(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return dt}};var Fr;kt._$litElement$=!0,kt.finalized=!0,(Fr=globalThis.litElementHydrateSupport)==null||Fr.call(globalThis,{LitElement:kt});const $i=globalThis.litElementPolyfillSupport;$i==null||$i({LitElement:kt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");var sc=B`
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
`;const Ui=new Set,de=new Map;let Xt,lo="ltr",co="en";const ps=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ps){const e=new MutationObserver(gs);lo=document.documentElement.dir||"ltr",co=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ms(...e){e.map(t=>{const n=t.$code.toLowerCase();de.has(n)?de.set(n,Object.assign(Object.assign({},de.get(n)),t)):de.set(n,t),Xt||(Xt=t)}),gs()}function gs(){ps&&(lo=document.documentElement.dir||"ltr",co=document.documentElement.lang||navigator.language),[...Ui.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let ac=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ui.add(this.host)}hostDisconnected(){Ui.delete(this.host)}dir(){return`${this.host.dir||lo}`.toLowerCase()}lang(){return`${this.host.lang||co}`.toLowerCase()}getTranslationData(t){var n,i;const o=new Intl.Locale(t.replace(/_/g,"-")),r=o==null?void 0:o.language.toLowerCase(),s=(i=(n=o==null?void 0:o.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&i!==void 0?i:"",l=de.get(`${r}-${s}`),a=de.get(r);return{locale:o,language:r,region:s,primary:l,secondary:a}}exists(t,n){var i;const{primary:o,secondary:r}=this.getTranslationData((i=n.lang)!==null&&i!==void 0?i:this.lang());return n=Object.assign({includeFallback:!1},n),!!(o&&o[t]||r&&r[t]||n.includeFallback&&Xt&&Xt[t])}term(t,...n){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let r;if(i&&i[t])r=i[t];else if(o&&o[t])r=o[t];else if(Xt&&Xt[t])r=Xt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...n):r}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,n)}};var bs={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};ms(bs);var lc=bs,cn=class extends ac{};ms(lc);var at=B`
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
`,vs=Object.defineProperty,cc=Object.defineProperties,uc=Object.getOwnPropertyDescriptor,dc=Object.getOwnPropertyDescriptors,tr=Object.getOwnPropertySymbols,hc=Object.prototype.hasOwnProperty,fc=Object.prototype.propertyIsEnumerable,er=(e,t,n)=>t in e?vs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ae=(e,t)=>{for(var n in t||(t={}))hc.call(t,n)&&er(e,n,t[n]);if(tr)for(var n of tr(t))fc.call(t,n)&&er(e,n,t[n]);return e},oi=(e,t)=>cc(e,dc(t)),m=(e,t,n,i)=>{for(var o=i>1?void 0:i?uc(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&vs(t,n,o),o},ys=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},pc=(e,t,n)=>(ys(e,t,"read from private field"),t.get(e)),mc=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},gc=(e,t,n,i)=>(ys(e,t,"write to private field"),t.set(e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ri=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bc={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:ni},vc=(e=bc,t,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(n.name,e),i==="accessor"){const{name:s}=n;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,e)},init(l){return l!==void 0&&this.P(s,void 0,e),l}}}if(i==="setter"){const{name:s}=n;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+i)};function b(e){return(t,n)=>typeof n=="object"?vc(e,t,n):((i,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(e){return b({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yc=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(e,t){return(n,i,o)=>{const r=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(e))??null};return yc(n,i,{get(){return r(this)}})}}var An,W=class extends kt{constructor(){super(),mc(this,An,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,ae({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const i=customElements.get(e);if(!i){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let o=" (unknown version)",r=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in i&&i.version&&(r=" v"+i.version),!(o&&r&&o===r)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${r} has already been registered.`)}attributeChangedCallback(e,t,n){pc(this,An)||(this.constructor.elementProperties.forEach((i,o)=>{i.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),gc(this,An,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};An=new WeakMap;W.version="2.17.0";W.dependencies={};m([b()],W.prototype,"dir",2);m([b()],W.prototype,"lang",2);var si=class extends W{constructor(){super(...arguments),this.localize=new cn(this)}render(){return E`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};si.styles=[at,sc];var Me=new WeakMap,Ne=new WeakMap,De=new WeakMap,xi=new WeakSet,mn=new WeakMap,ws=class{constructor(e,t){this.handleFormData=n=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!s&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(l=>{n.formData.append(o,l.toString())}):n.formData.append(o,r.toString()))},this.handleFormSubmit=n=>{var i;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Me.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),mn.set(this.host,[])},this.handleInteraction=n=>{const i=mn.get(this.host);i.includes(n.type)||i.push(n.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const i of n)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const i of n)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=ae({form:n=>{const i=n.form;if(i){const r=n.getRootNode().querySelector(`#${i}`);if(r)return r}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var i;return(i=n.disabled)!=null?i:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,checkValidity:n=>typeof n.checkValidity=="function"?n.checkValidity():!0,setValue:(n,i)=>n.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),mn.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),mn.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Me.has(this.form)?Me.get(this.form).add(this.host):Me.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ne.has(this.form)||(Ne.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),De.has(this.form)||(De.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Me.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ne.has(this.form)&&(this.form.reportValidity=Ne.get(this.form),Ne.delete(this.form)),De.has(this.form)&&(this.form.checkValidity=De.get(this.form),De.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?xi.add(e):xi.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&n.setAttribute(i,t.getAttribute(i))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!xi.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},uo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(oi(ae({},uo),{valid:!1,valueMissing:!0}));Object.freeze(oi(ae({},uo),{valid:!1,customError:!0}));var wc=B`
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
`,ho=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const i=n.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function _c(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let n="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(n+=i.textContent)}),n}var zi="";function nr(e){zi=e}function $c(e=""){if(!zi){const t=[...document.getElementsByTagName("script")],n=t.find(i=>i.hasAttribute("data-shoelace"));if(n)nr(n.getAttribute("data-shoelace"));else{const i=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let o="";i&&(o=i.getAttribute("src")),nr(o.split("/").slice(0,-1).join("/"))}}return zi.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var xc={name:"default",resolver:e=>$c(`assets/icons/${e}.svg`)},Ac=xc,ir={caret:`
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
  `},Ec={name:"system",resolver:e=>e in ir?`data:image/svg+xml,${encodeURIComponent(ir[e])}`:""},kc=Ec,Sc=[Ac,kc],Bi=[];function Cc(e){Bi.push(e)}function Pc(e){Bi=Bi.filter(t=>t!==e)}function or(e){return Sc.find(t=>t.name===e)}var Oc=B`
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
`;function Ot(e,t){const n=ae({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:r}=i,s=Array.isArray(e)?e:[e];i.update=function(l){s.forEach(a=>{const c=a;if(l.has(c)){const u=l.get(c),d=this[c];u!==d&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[o](u,d)}}),r.call(this,l)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rc=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,_s=e=>e.strings===void 0,Tc={},Lc=(e,t=Tc)=>e._$AH=t;var Ie=Symbol(),gn=Symbol(),Ai,Ei=new Map,lt=class extends W{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let i;if(t!=null&&t.spriteSheet){this.svg=E`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(o),this.svg}try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Ie:gn}catch{return gn}try{const o=document.createElement("div");o.innerHTML=await i.text();const r=o.firstElementChild;if(((n=r==null?void 0:r.tagName)==null?void 0:n.toLowerCase())!=="svg")return Ie;Ai||(Ai=new DOMParser);const l=Ai.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Ie}catch{return Ie}}connectedCallback(){super.connectedCallback(),Cc(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Pc(this)}getIconSource(){const e=or(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:n}=this.getIconSource(),i=n?or(this.library):void 0;if(!t){this.svg=null;return}let o=Ei.get(t);if(o||(o=this.resolveIcon(t,i),Ei.set(t,o)),!this.initialRender)return;const r=await o;if(r===gn&&Ei.delete(t),t===this.getIconSource().url){if(Rc(r)){this.svg=r;return}switch(r){case gn:case Ie:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(e=i==null?void 0:i.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};lt.styles=[at,Oc];m([vt()],lt.prototype,"svg",2);m([b({reflect:!0})],lt.prototype,"name",2);m([b()],lt.prototype,"src",2);m([b()],lt.prototype,"label",2);m([b({reflect:!0})],lt.prototype,"library",2);m([Ot("label")],lt.prototype,"handleLabelChange",1);m([Ot(["name","src","library"])],lt.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fo=e=>(...t)=>({_$litDirective$:e,values:t});let po=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this.t=t,this._$AM=n,this.i=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=fo(class extends po{constructor(e){var t;if(super(e),e.type!==Lt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const s=!!t[r];s===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(s?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return dt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=Symbol.for(""),Mc=e=>{if((e==null?void 0:e.r)===$s)return e==null?void 0:e._$litStatic$},In=(e,...t)=>({_$litStatic$:t.reduce((n,i,o)=>n+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:$s}),rr=new Map,Nc=e=>(t,...n)=>{const i=n.length;let o,r;const s=[],l=[];let a,c=0,u=!1;for(;c<i;){for(a=t[c];c<i&&(r=n[c],(o=Mc(r))!==void 0);)a+=o+t[++c],u=!0;c!==i&&l.push(r),s.push(a),c++}if(c===i&&s.push(t[i]),u){const d=s.join("$$lit$$");(t=rr.get(d))===void 0&&(s.raw=s,rr.set(d,t=s)),n=l}return e(t,...n)},En=Nc(E);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=e=>e??M;var S=class extends W{constructor(){super(...arguments),this.formControlController=new ws(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ho(this,"[default]","prefix","suffix"),this.localize=new cn(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:uo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?In`a`:In`button`;return En`
      <${t}
        part="base"
        class=${Ct({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
    `}};S.styles=[at,wc];S.dependencies={"sl-icon":lt,"sl-spinner":si};m([et(".button")],S.prototype,"button",2);m([vt()],S.prototype,"hasFocus",2);m([vt()],S.prototype,"invalid",2);m([b()],S.prototype,"title",2);m([b({reflect:!0})],S.prototype,"variant",2);m([b({reflect:!0})],S.prototype,"size",2);m([b({type:Boolean,reflect:!0})],S.prototype,"caret",2);m([b({type:Boolean,reflect:!0})],S.prototype,"disabled",2);m([b({type:Boolean,reflect:!0})],S.prototype,"loading",2);m([b({type:Boolean,reflect:!0})],S.prototype,"outline",2);m([b({type:Boolean,reflect:!0})],S.prototype,"pill",2);m([b({type:Boolean,reflect:!0})],S.prototype,"circle",2);m([b()],S.prototype,"type",2);m([b()],S.prototype,"name",2);m([b()],S.prototype,"value",2);m([b()],S.prototype,"href",2);m([b()],S.prototype,"target",2);m([b()],S.prototype,"rel",2);m([b()],S.prototype,"download",2);m([b()],S.prototype,"form",2);m([b({attribute:"formaction"})],S.prototype,"formAction",2);m([b({attribute:"formenctype"})],S.prototype,"formEnctype",2);m([b({attribute:"formmethod"})],S.prototype,"formMethod",2);m([b({attribute:"formnovalidate",type:Boolean})],S.prototype,"formNoValidate",2);m([b({attribute:"formtarget"})],S.prototype,"formTarget",2);m([Ot("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);S.define("sl-button");var Dc=B`
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
`,Ic=(e="value")=>(t,n)=>{const i=t.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,s,l){var a;const c=i.getPropertyOptions(e),u=typeof c.attribute=="string"?c.attribute:e;if(r===u){const d=c.converter||$e,h=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:$e.fromAttribute)(l,c.type);this[e]!==h&&(this[n]=h)}o.call(this,r,s,l)}},Uc=B`
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
 */const sr=fo(class extends po{constructor(e){if(super(e),e.type!==Lt.PROPERTY&&e.type!==Lt.ATTRIBUTE&&e.type!==Lt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!_s(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===dt||t===M)return t;const n=e.element,i=e.name;if(e.type===Lt.PROPERTY){if(t===n[i])return dt}else if(e.type===Lt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return dt}else if(e.type===Lt.ATTRIBUTE&&n.getAttribute(i)===t+"")return dt;return Lc(e),t}});var F=class extends W{constructor(){super(...arguments),this.formControlController=new ws(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new ho(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return E`
      <div
        class=${Ct({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${Ct({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${D(this.value)}
            .indeterminate=${sr(this.indeterminate)}
            .checked=${sr(this.checked)}
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
    `}};F.styles=[at,Uc,Dc];F.dependencies={"sl-icon":lt};m([et('input[type="checkbox"]')],F.prototype,"input",2);m([vt()],F.prototype,"hasFocus",2);m([b()],F.prototype,"title",2);m([b()],F.prototype,"name",2);m([b()],F.prototype,"value",2);m([b({reflect:!0})],F.prototype,"size",2);m([b({type:Boolean,reflect:!0})],F.prototype,"disabled",2);m([b({type:Boolean,reflect:!0})],F.prototype,"checked",2);m([b({type:Boolean,reflect:!0})],F.prototype,"indeterminate",2);m([Ic("checked")],F.prototype,"defaultChecked",2);m([b({reflect:!0})],F.prototype,"form",2);m([b({type:Boolean,reflect:!0})],F.prototype,"required",2);m([b({attribute:"help-text"})],F.prototype,"helpText",2);m([Ot("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);m([Ot(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],F.prototype,"handleStateChange",1);F.define("sl-checkbox");var zc=B`
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
`,ar=new WeakMap;function xs(e){let t=ar.get(e);return t||(t=window.getComputedStyle(e,null),ar.set(e,t)),t}function Bc(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=xs(e);return t.visibility!=="hidden"&&t.display!=="none"}function Fc(e){const t=xs(e),{overflowY:n,overflowX:i}=t;return n==="scroll"||i==="scroll"?!0:n!=="auto"||i!=="auto"?!1:e.scrollHeight>e.clientHeight&&n==="auto"||e.scrollWidth>e.clientWidth&&i==="auto"}function Hc(e){const t=e.tagName.toLowerCase(),n=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(n)||n<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!Bc(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Fc(e)}function jc(e){var t,n;const i=Wc(e),o=(t=i[0])!=null?t:null,r=(n=i[i.length-1])!=null?n:null;return{start:o,end:r}}function Vc(e,t){var n;return((n=e.getRootNode({composed:!0}))==null?void 0:n.host)!==t}function Wc(e){const t=new WeakMap,n=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!n.includes(o)&&Hc(o)&&n.push(o),o instanceof HTMLSlotElement&&Vc(o,e)&&o.assignedElements({flatten:!0}).forEach(r=>{i(r)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(const r of o.children)i(r)}return i(e),n.sort((o,r)=>{const s=Number(o.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-s})}var qc=B`
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
`;const jt=Math.min,G=Math.max,Un=Math.round,bn=Math.floor,Vt=e=>({x:e,y:e}),Yc={left:"right",right:"left",bottom:"top",top:"bottom"},Kc={start:"end",end:"start"};function Fi(e,t,n){return G(e,jt(t,n))}function Ce(e,t){return typeof e=="function"?e(t):e}function Wt(e){return e.split("-")[0]}function Pe(e){return e.split("-")[1]}function As(e){return e==="x"?"y":"x"}function mo(e){return e==="y"?"height":"width"}function ie(e){return["top","bottom"].includes(Wt(e))?"y":"x"}function go(e){return As(ie(e))}function Xc(e,t,n){n===void 0&&(n=!1);const i=Pe(e),o=go(e),r=mo(o);let s=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=zn(s)),[s,zn(s)]}function Gc(e){const t=zn(e);return[Hi(e),t,Hi(t)]}function Hi(e){return e.replace(/start|end/g,t=>Kc[t])}function Zc(e,t,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:i:t?i:o;case"left":case"right":return t?r:s;default:return[]}}function Qc(e,t,n,i){const o=Pe(e);let r=Zc(Wt(e),n==="start",i);return o&&(r=r.map(s=>s+"-"+o),t&&(r=r.concat(r.map(Hi)))),r}function zn(e){return e.replace(/left|right|bottom|top/g,t=>Yc[t])}function Jc(e){return{top:0,right:0,bottom:0,left:0,...e}}function Es(e){return typeof e!="number"?Jc(e):{top:e,right:e,bottom:e,left:e}}function Bn(e){const{x:t,y:n,width:i,height:o}=e;return{width:i,height:o,top:n,left:t,right:t+i,bottom:n+o,x:t,y:n}}function lr(e,t,n){let{reference:i,floating:o}=e;const r=ie(t),s=go(t),l=mo(s),a=Wt(t),c=r==="y",u=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,f=i[l]/2-o[l]/2;let h;switch(a){case"top":h={x:u,y:i.y-o.height};break;case"bottom":h={x:u,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:d};break;case"left":h={x:i.x-o.width,y:d};break;default:h={x:i.x,y:i.y}}switch(Pe(t)){case"start":h[s]-=f*(n&&c?-1:1);break;case"end":h[s]+=f*(n&&c?-1:1);break}return h}const tu=async(e,t,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=lr(c,i,a),f=i,h={},p=0;for(let g=0;g<l.length;g++){const{name:y,fn:v}=l[g],{x:w,y:_,data:x,reset:$}=await v({x:u,y:d,initialPlacement:i,placement:f,strategy:o,middlewareData:h,rects:c,platform:s,elements:{reference:e,floating:t}});u=w??u,d=_??d,h={...h,[y]:{...h[y],...x}},$&&p<=50&&(p++,typeof $=="object"&&($.placement&&(f=$.placement),$.rects&&(c=$.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):$.rects),{x:u,y:d}=lr(c,f,a)),g=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}};async function bo(e,t){var n;t===void 0&&(t={});const{x:i,y:o,platform:r,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Ce(t,e),p=Es(h),y=l[f?d==="floating"?"reference":"floating":d],v=Bn(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(y)))==null||n?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),w=d==="floating"?{x:i,y:o,width:s.floating.width,height:s.floating.height}:s.reference,_=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),x=await(r.isElement==null?void 0:r.isElement(_))?await(r.getScale==null?void 0:r.getScale(_))||{x:1,y:1}:{x:1,y:1},$=Bn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:_,strategy:a}):w);return{top:(v.top-$.top+p.top)/x.y,bottom:($.bottom-v.bottom+p.bottom)/x.y,left:(v.left-$.left+p.left)/x.x,right:($.right-v.right+p.right)/x.x}}const eu=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:i,placement:o,rects:r,platform:s,elements:l,middlewareData:a}=t,{element:c,padding:u=0}=Ce(e,t)||{};if(c==null)return{};const d=Es(u),f={x:n,y:i},h=go(o),p=mo(h),g=await s.getDimensions(c),y=h==="y",v=y?"top":"left",w=y?"bottom":"right",_=y?"clientHeight":"clientWidth",x=r.reference[p]+r.reference[h]-f[h]-r.floating[p],$=f[h]-r.reference[h],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let O=A?A[_]:0;(!O||!await(s.isElement==null?void 0:s.isElement(A)))&&(O=l.floating[_]||r.floating[p]);const R=x/2-$/2,T=O/2-g[p]/2-1,C=jt(d[v],T),U=jt(d[w],T),N=C,z=O-g[p]-U,L=O/2-g[p]/2+R,At=Fi(N,L,z),K=!a.arrow&&Pe(o)!=null&&L!==At&&r.reference[p]/2-(L<N?C:U)-g[p]/2<0,H=K?L<N?L-N:L-z:0;return{[h]:f[h]+H,data:{[h]:At,centerOffset:L-At-H,...K&&{alignmentOffset:H}},reset:K}}}),nu=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:o,middlewareData:r,rects:s,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...y}=Ce(e,t);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const v=Wt(o),w=ie(l),_=Wt(l)===l,x=await(a.isRTL==null?void 0:a.isRTL(c.floating)),$=f||(_||!g?[zn(l)]:Gc(l)),A=p!=="none";!f&&A&&$.push(...Qc(l,g,p,x));const O=[l,...$],R=await bo(t,y),T=[];let C=((i=r.flip)==null?void 0:i.overflows)||[];if(u&&T.push(R[v]),d){const L=Xc(o,s,x);T.push(R[L[0]],R[L[1]])}if(C=[...C,{placement:o,overflows:T}],!T.every(L=>L<=0)){var U,N;const L=(((U=r.flip)==null?void 0:U.index)||0)+1,At=O[L];if(At)return{data:{index:L,overflows:C},reset:{placement:At}};let K=(N=C.filter(H=>H.overflows[0]<=0).sort((H,j)=>H.overflows[1]-j.overflows[1])[0])==null?void 0:N.placement;if(!K)switch(h){case"bestFit":{var z;const H=(z=C.filter(j=>{if(A){const V=ie(j.placement);return V===w||V==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(V=>V>0).reduce((V,hi)=>V+hi,0)]).sort((j,V)=>j[1]-V[1])[0])==null?void 0:z[0];H&&(K=H);break}case"initialPlacement":K=l;break}if(o!==K)return{reset:{placement:K}}}return{}}}};async function iu(e,t){const{placement:n,platform:i,elements:o}=e,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),s=Wt(n),l=Pe(n),a=ie(n)==="y",c=["left","top"].includes(s)?-1:1,u=r&&a?-1:1,d=Ce(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof p=="number"&&(h=l==="end"?p*-1:p),a?{x:h*u,y:f*c}:{x:f*c,y:h*u}}const ou=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,i;const{x:o,y:r,placement:s,middlewareData:l}=t,a=await iu(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:o+a.x,y:r+a.y,data:{...a,placement:s}}}}},ru=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:i,placement:o}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:y=>{let{x:v,y:w}=y;return{x:v,y:w}}},...a}=Ce(e,t),c={x:n,y:i},u=await bo(t,a),d=ie(Wt(o)),f=As(d);let h=c[f],p=c[d];if(r){const y=f==="y"?"top":"left",v=f==="y"?"bottom":"right",w=h+u[y],_=h-u[v];h=Fi(w,h,_)}if(s){const y=d==="y"?"top":"left",v=d==="y"?"bottom":"right",w=p+u[y],_=p-u[v];p=Fi(w,p,_)}const g=l.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-i,enabled:{[f]:r,[d]:s}}}}}},su=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,i;const{placement:o,rects:r,platform:s,elements:l}=t,{apply:a=()=>{},...c}=Ce(e,t),u=await bo(t,c),d=Wt(o),f=Pe(o),h=ie(o)==="y",{width:p,height:g}=r.floating;let y,v;d==="top"||d==="bottom"?(y=d,v=f===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(v=d,y=f==="end"?"top":"bottom");const w=g-u.top-u.bottom,_=p-u.left-u.right,x=jt(g-u[y],w),$=jt(p-u[v],_),A=!t.middlewareData.shift;let O=x,R=$;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(R=_),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(O=w),A&&!f){const C=G(u.left,0),U=G(u.right,0),N=G(u.top,0),z=G(u.bottom,0);h?R=p-2*(C!==0||U!==0?C+U:G(u.left,u.right)):O=g-2*(N!==0||z!==0?N+z:G(u.top,u.bottom))}await a({...t,availableWidth:R,availableHeight:O});const T=await s.getDimensions(l.floating);return p!==T.width||g!==T.height?{reset:{rects:!0}}:{}}}};function ai(){return typeof window<"u"}function Oe(e){return ks(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function xt(e){var t;return(t=(ks(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ks(e){return ai()?e instanceof Node||e instanceof Q(e).Node:!1}function mt(e){return ai()?e instanceof Element||e instanceof Q(e).Element:!1}function _t(e){return ai()?e instanceof HTMLElement||e instanceof Q(e).HTMLElement:!1}function cr(e){return!ai()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}function un(e){const{overflow:t,overflowX:n,overflowY:i,display:o}=gt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(o)}function au(e){return["table","td","th"].includes(Oe(e))}function li(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function vo(e){const t=yo(),n=mt(e)?gt(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function lu(e){let t=qt(e);for(;_t(t)&&!Ae(t);){if(vo(t))return t;if(li(t))return null;t=qt(t)}return null}function yo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ae(e){return["html","body","#document"].includes(Oe(e))}function gt(e){return Q(e).getComputedStyle(e)}function ci(e){return mt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function qt(e){if(Oe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||cr(e)&&e.host||xt(e);return cr(t)?t.host:t}function Ss(e){const t=qt(e);return Ae(t)?e.ownerDocument?e.ownerDocument.body:e.body:_t(t)&&un(t)?t:Ss(t)}function Je(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Ss(e),r=o===((i=e.ownerDocument)==null?void 0:i.body),s=Q(o);if(r){const l=ji(s);return t.concat(s,s.visualViewport||[],un(o)?o:[],l&&n?Je(l):[])}return t.concat(o,Je(o,[],n))}function ji(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Cs(e){const t=gt(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=_t(e),r=o?e.offsetWidth:n,s=o?e.offsetHeight:i,l=Un(n)!==r||Un(i)!==s;return l&&(n=r,i=s),{width:n,height:i,$:l}}function wo(e){return mt(e)?e:e.contextElement}function pe(e){const t=wo(e);if(!_t(t))return Vt(1);const n=t.getBoundingClientRect(),{width:i,height:o,$:r}=Cs(t);let s=(r?Un(n.width):n.width)/i,l=(r?Un(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const cu=Vt(0);function Ps(e){const t=Q(e);return!yo()||!t.visualViewport?cu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function uu(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Q(e)?!1:t}function oe(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=wo(e);let s=Vt(1);t&&(i?mt(i)&&(s=pe(i)):s=pe(e));const l=uu(r,n,i)?Ps(r):Vt(0);let a=(o.left+l.x)/s.x,c=(o.top+l.y)/s.y,u=o.width/s.x,d=o.height/s.y;if(r){const f=Q(r),h=i&&mt(i)?Q(i):i;let p=f,g=ji(p);for(;g&&i&&h!==p;){const y=pe(g),v=g.getBoundingClientRect(),w=gt(g),_=v.left+(g.clientLeft+parseFloat(w.paddingLeft))*y.x,x=v.top+(g.clientTop+parseFloat(w.paddingTop))*y.y;a*=y.x,c*=y.y,u*=y.x,d*=y.y,a+=_,c+=x,p=Q(g),g=ji(p)}}return Bn({width:u,height:d,x:a,y:c})}function du(e){let{elements:t,rect:n,offsetParent:i,strategy:o}=e;const r=o==="fixed",s=xt(i),l=t?li(t.floating):!1;if(i===s||l&&r)return n;let a={scrollLeft:0,scrollTop:0},c=Vt(1);const u=Vt(0),d=_t(i);if((d||!d&&!r)&&((Oe(i)!=="body"||un(s))&&(a=ci(i)),_t(i))){const f=oe(i);c=pe(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+u.x,y:n.y*c.y-a.scrollTop*c.y+u.y}}function hu(e){return Array.from(e.getClientRects())}function Vi(e,t){const n=ci(e).scrollLeft;return t?t.left+n:oe(xt(e)).left+n}function fu(e){const t=xt(e),n=ci(e),i=e.ownerDocument.body,o=G(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=G(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Vi(e);const l=-n.scrollTop;return gt(i).direction==="rtl"&&(s+=G(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:s,y:l}}function pu(e,t){const n=Q(e),i=xt(e),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,l=0,a=0;if(o){r=o.width,s=o.height;const c=yo();(!c||c&&t==="fixed")&&(l=o.offsetLeft,a=o.offsetTop)}return{width:r,height:s,x:l,y:a}}function mu(e,t){const n=oe(e,!0,t==="fixed"),i=n.top+e.clientTop,o=n.left+e.clientLeft,r=_t(e)?pe(e):Vt(1),s=e.clientWidth*r.x,l=e.clientHeight*r.y,a=o*r.x,c=i*r.y;return{width:s,height:l,x:a,y:c}}function ur(e,t,n){let i;if(t==="viewport")i=pu(e,n);else if(t==="document")i=fu(xt(e));else if(mt(t))i=mu(t,n);else{const o=Ps(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Bn(i)}function Os(e,t){const n=qt(e);return n===t||!mt(n)||Ae(n)?!1:gt(n).position==="fixed"||Os(n,t)}function gu(e,t){const n=t.get(e);if(n)return n;let i=Je(e,[],!1).filter(l=>mt(l)&&Oe(l)!=="body"),o=null;const r=gt(e).position==="fixed";let s=r?qt(e):e;for(;mt(s)&&!Ae(s);){const l=gt(s),a=vo(s);!a&&l.position==="fixed"&&(o=null),(r?!a&&!o:!a&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||un(s)&&!a&&Os(e,s))?i=i.filter(u=>u!==s):o=l,s=qt(s)}return t.set(e,i),i}function bu(e){let{element:t,boundary:n,rootBoundary:i,strategy:o}=e;const s=[...n==="clippingAncestors"?li(t)?[]:gu(t,this._c):[].concat(n),i],l=s[0],a=s.reduce((c,u)=>{const d=ur(t,u,o);return c.top=G(d.top,c.top),c.right=jt(d.right,c.right),c.bottom=jt(d.bottom,c.bottom),c.left=G(d.left,c.left),c},ur(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function vu(e){const{width:t,height:n}=Cs(e);return{width:t,height:n}}function yu(e,t,n){const i=_t(t),o=xt(t),r=n==="fixed",s=oe(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const a=Vt(0);if(i||!i&&!r)if((Oe(t)!=="body"||un(o))&&(l=ci(t)),i){const h=oe(t,!0,r,t);a.x=h.x+t.clientLeft,a.y=h.y+t.clientTop}else o&&(a.x=Vi(o));let c=0,u=0;if(o&&!i&&!r){const h=o.getBoundingClientRect();u=h.top+l.scrollTop,c=h.left+l.scrollLeft-Vi(o,h)}const d=s.left+l.scrollLeft-a.x-c,f=s.top+l.scrollTop-a.y-u;return{x:d,y:f,width:s.width,height:s.height}}function ki(e){return gt(e).position==="static"}function dr(e,t){if(!_t(e)||gt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return xt(e)===n&&(n=n.ownerDocument.body),n}function Rs(e,t){const n=Q(e);if(li(e))return n;if(!_t(e)){let o=qt(e);for(;o&&!Ae(o);){if(mt(o)&&!ki(o))return o;o=qt(o)}return n}let i=dr(e,t);for(;i&&au(i)&&ki(i);)i=dr(i,t);return i&&Ae(i)&&ki(i)&&!vo(i)?n:i||lu(e)||n}const wu=async function(e){const t=this.getOffsetParent||Rs,n=this.getDimensions,i=await n(e.floating);return{reference:yu(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function _u(e){return gt(e).direction==="rtl"}const kn={convertOffsetParentRelativeRectToViewportRelativeRect:du,getDocumentElement:xt,getClippingRect:bu,getOffsetParent:Rs,getElementRects:wu,getClientRects:hu,getDimensions:vu,getScale:pe,isElement:mt,isRTL:_u};function $u(e,t){let n=null,i;const o=xt(e);function r(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),r();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;const h=bn(u),p=bn(o.clientWidth-(c+d)),g=bn(o.clientHeight-(u+f)),y=bn(c),w={rootMargin:-h+"px "+-p+"px "+-g+"px "+-y+"px",threshold:G(0,jt(1,a))||1};let _=!0;function x($){const A=$[0].intersectionRatio;if(A!==a){if(!_)return s();A?s(!1,A):i=setTimeout(()=>{s(!1,1e-7)},1e3)}_=!1}try{n=new IntersectionObserver(x,{...w,root:o.ownerDocument})}catch{n=new IntersectionObserver(x,w)}n.observe(e)}return s(!0),r}function xu(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=wo(e),u=o||r?[...c?Je(c):[],...Je(t)]:[];u.forEach(v=>{o&&v.addEventListener("scroll",n,{passive:!0}),r&&v.addEventListener("resize",n)});const d=c&&l?$u(c,n):null;let f=-1,h=null;s&&(h=new ResizeObserver(v=>{let[w]=v;w&&w.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=h)==null||_.observe(t)})),n()}),c&&!a&&h.observe(c),h.observe(t));let p,g=a?oe(e):null;a&&y();function y(){const v=oe(e);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&n(),g=v,p=requestAnimationFrame(y)}return n(),()=>{var v;u.forEach(w=>{o&&w.removeEventListener("scroll",n),r&&w.removeEventListener("resize",n)}),d==null||d(),(v=h)==null||v.disconnect(),h=null,a&&cancelAnimationFrame(p)}}const Au=ou,Eu=ru,ku=nu,hr=su,Su=eu,Cu=(e,t,n)=>{const i=new Map,o={platform:kn,...n},r={...o.platform,_c:i};return tu(e,t,{...o,platform:r})};function Pu(e){return Ou(e)}function Si(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ou(e){for(let t=e;t;t=Si(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Si(e);t;t=Si(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||t.tagName==="BODY"))return t}return null}function Ru(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var P=class extends W{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let i=0,o=0,r=0,s=0,l=0,a=0,c=0,u=0;n?e.top<t.top?(i=e.left,o=e.bottom,r=e.right,s=e.bottom,l=t.left,a=t.top,c=t.right,u=t.top):(i=t.left,o=t.bottom,r=t.right,s=t.bottom,l=e.left,a=e.top,c=e.right,u=e.top):e.left<t.left?(i=e.right,o=e.top,r=t.left,s=t.top,l=e.right,a=e.bottom,c=t.left,u=t.bottom):(i=t.right,o=t.top,r=e.left,s=e.top,l=t.right,a=t.bottom,c=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Ru(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=xu(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Au({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(hr({apply:({rects:n})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${n.reference.width}px`:"",this.popup.style.height=o?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(ku({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Eu({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(hr({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Su({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?n=>kn.getOffsetParent(n,Pu):kn.getOffsetParent;Cu(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:oi(ae({},kn),{getOffsetParent:t})}).then(({x:n,y:i,middlewareData:o,placement:r})=>{const s=this.matches(":dir(rtl)"),l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${n}px`,top:`${i}px`}),this.arrow){const a=o.arrow.x,c=o.arrow.y;let u="",d="",f="",h="";if(this.arrowPlacement==="start"){const p=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?p:"",h=s?"":p}else if(this.arrowPlacement==="end"){const p=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":p,h=s?p:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof a=="number"?`${a}px`:"",u=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:u,right:d,bottom:f,left:h,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return E`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Ct({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Ct({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?E`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};P.styles=[at,qc];m([et(".popup")],P.prototype,"popup",2);m([et(".popup__arrow")],P.prototype,"arrowEl",2);m([b()],P.prototype,"anchor",2);m([b({type:Boolean,reflect:!0})],P.prototype,"active",2);m([b({reflect:!0})],P.prototype,"placement",2);m([b({reflect:!0})],P.prototype,"strategy",2);m([b({type:Number})],P.prototype,"distance",2);m([b({type:Number})],P.prototype,"skidding",2);m([b({type:Boolean})],P.prototype,"arrow",2);m([b({attribute:"arrow-placement"})],P.prototype,"arrowPlacement",2);m([b({attribute:"arrow-padding",type:Number})],P.prototype,"arrowPadding",2);m([b({type:Boolean})],P.prototype,"flip",2);m([b({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],P.prototype,"flipFallbackPlacements",2);m([b({attribute:"flip-fallback-strategy"})],P.prototype,"flipFallbackStrategy",2);m([b({type:Object})],P.prototype,"flipBoundary",2);m([b({attribute:"flip-padding",type:Number})],P.prototype,"flipPadding",2);m([b({type:Boolean})],P.prototype,"shift",2);m([b({type:Object})],P.prototype,"shiftBoundary",2);m([b({attribute:"shift-padding",type:Number})],P.prototype,"shiftPadding",2);m([b({attribute:"auto-size"})],P.prototype,"autoSize",2);m([b()],P.prototype,"sync",2);m([b({type:Object})],P.prototype,"autoSizeBoundary",2);m([b({attribute:"auto-size-padding",type:Number})],P.prototype,"autoSizePadding",2);m([b({attribute:"hover-bridge",type:Boolean})],P.prototype,"hoverBridge",2);var Ts=new Map,Tu=new WeakMap;function Lu(e){return e??{keyframes:[],options:{duration:0}}}function fr(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ls(e,t){Ts.set(e,Lu(t))}function pr(e,t,n){const i=Tu.get(e);if(i!=null&&i[t])return fr(i[t],n.dir);const o=Ts.get(t);return o?fr(o,n.dir):{keyframes:[],options:{duration:0}}}function mr(e,t){return new Promise(n=>{function i(o){o.target===e&&(e.removeEventListener(t,i),n())}e.addEventListener(t,i)})}function gr(e,t,n){return new Promise(i=>{if((n==null?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,oi(ae({},n),{duration:Mu()?0:n.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function Mu(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function br(e){return Promise.all(e.getAnimations().map(t=>new Promise(n=>{t.cancel(),requestAnimationFrame(n)})))}var Y=class extends W{constructor(){super(...arguments),this.localize=new cn(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,i,o;const r=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(r==null?void 0:r.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),i=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>jc(i).start);let n;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,mr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mr(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await br(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=pr(this,"dropdown.show",{dir:this.localize.dir()});await gr(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await br(this);const{keyframes:e,options:t}=pr(this,"dropdown.hide",{dir:this.localize.dir()});await gr(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return E`
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
        class=${Ct({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Y.styles=[at,zc];Y.dependencies={"sl-popup":P};m([et(".dropdown")],Y.prototype,"popup",2);m([et(".dropdown__trigger")],Y.prototype,"trigger",2);m([et(".dropdown__panel")],Y.prototype,"panel",2);m([b({type:Boolean,reflect:!0})],Y.prototype,"open",2);m([b({reflect:!0})],Y.prototype,"placement",2);m([b({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);m([b({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Y.prototype,"stayOpenOnSelect",2);m([b({attribute:!1})],Y.prototype,"containingElement",2);m([b({type:Number})],Y.prototype,"distance",2);m([b({type:Number})],Y.prototype,"skidding",2);m([b({type:Boolean})],Y.prototype,"hoist",2);m([b({reflect:!0})],Y.prototype,"sync",2);m([Ot("open",{waitUntilFirstUpdate:!0})],Y.prototype,"handleOpenChange",1);Ls("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ls("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Y.define("sl-dropdown");var Nu=B`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,dn=class extends W{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Ue(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=Ue(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=Ue(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=Ue(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const n=e.indexOf(t),i=Ue(t);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",n===0),i.toggleAttribute("data-sl-button-group__button--inner",n>0&&n<e.length-1),i.toggleAttribute("data-sl-button-group__button--last",n===e.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return E`
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
    `}};dn.styles=[at,Nu];m([et("slot")],dn.prototype,"defaultSlot",2);m([vt()],dn.prototype,"disableRole",2);m([b()],dn.prototype,"label",2);function Ue(e){var t;const n="sl-button, sl-radio-button";return(t=e.closest(n))!=null?t:e.querySelector(n)}dn.define("sl-button-group");var Du=B`
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
`,_o=class extends W{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],n=e.composedPath(),i=n.find(l=>{var a;return t.includes(((a=l==null?void 0:l.getAttribute)==null?void 0:a.call(l,"role"))||"")});if(!i||n.find(l=>{var a;return((a=l==null?void 0:l.getAttribute)==null?void 0:a.call(l,"role"))==="menu"})!==this)return;const s=i;s.type==="checkbox"&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),n=this.getCurrentItem();let i=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(n=>{n.setAttribute("tabindex",n===e?"0":"-1")})}render(){return E`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};_o.styles=[at,Du];m([et("slot")],_o.prototype,"defaultSlot",2);_o.define("sl-menu");var Iu=B`
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
 */const Ve=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Ve(o,t);return!0},Fn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},Ms=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Bu(t)}};function Uu(e){this._$AN!==void 0?(Fn(this),this._$AM=e,Ms(this)):this._$AM=e}function zu(e,t=!1,n=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let r=n;r<i.length;r++)Ve(i[r],!1),Fn(i[r]);else i!=null&&(Ve(i,!1),Fn(i));else Ve(this,e)}const Bu=e=>{e.type==Lt.CHILD&&(e._$AP??(e._$AP=zu),e._$AQ??(e._$AQ=Uu))};class Fu extends po{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,i){super._$AT(t,n,i),Ms(this),this.isConnected=t._$AU}_$AO(t,n=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),n&&(Ve(this,t),Fn(this))}setValue(t){if(_s(this.t))this.t._$AI(t,this);else{const n=[...this.t._$AH];n[this.i]=t,this.t._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hu=()=>new ju;class ju{}const Ci=new WeakMap,Vu=fo(class extends Fu{render(e){return M}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),M}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let n=Ci.get(t);n===void 0&&(n=new WeakMap,Ci.set(t,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Ci.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Wu=class{constructor(e,t){this.popupRef=Hu(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=n=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${n.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${n.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=n=>{switch(n.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":n.target!==this.host&&(n.preventDefault(),n.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(n);break}},this.handleClick=n=>{var i;n.target===this.host?(n.preventDefault(),n.stopPropagation()):n.target instanceof Element&&(n.target.tagName==="sl-menu-item"||(i=n.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=n=>{n.relatedTarget&&n.relatedTarget instanceof Element&&this.host.contains(n.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=n=>{n.stopPropagation()},this.handlePopupReposition=()=>{const n=this.host.renderRoot.querySelector("slot[name='submenu']"),i=n==null?void 0:n.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],o=this.host.matches(":dir(rtl)");if(!i)return;const{left:r,top:s,width:l,height:a}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?r+l:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+a}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let n=null;for(const i of t.assignedElements())if(n=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),n.length!==0)break;if(!(!n||n.length===0)){n[0].setAttribute("tabindex","0");for(let i=1;i!==n.length;++i)n[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,r)=>{var s;const l=(s=t.get(r))!=null?s:new CSSUnitValue(0,"px"),c=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return o-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.host.matches(":dir(rtl)");return this.isConnected?E`
      <sl-popup
        ${Vu(this.popupRef)}
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
    `:E` <slot name="submenu" hidden></slot> `}},nt=class extends W{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new ho(this,"submenu"),this.submenuController=new Wu(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return _c(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.matches(":dir(rtl)"),t=this.submenuController.isExpanded();return E`
      <div
        id="anchor"
        part="base"
        class=${Ct({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
    `}};nt.styles=[at,Iu];nt.dependencies={"sl-icon":lt,"sl-popup":P,"sl-spinner":si};m([et("slot:not([name])")],nt.prototype,"defaultSlot",2);m([et(".menu-item")],nt.prototype,"menuItem",2);m([b()],nt.prototype,"type",2);m([b({type:Boolean,reflect:!0})],nt.prototype,"checked",2);m([b()],nt.prototype,"value",2);m([b({type:Boolean,reflect:!0})],nt.prototype,"loading",2);m([b({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);m([Ot("checked")],nt.prototype,"handleCheckedChange",1);m([Ot("disabled")],nt.prototype,"handleDisabledChange",1);m([Ot("type")],nt.prototype,"handleTypeChange",1);nt.define("sl-menu-item");var qu=B`
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
`,Ns=class extends W{render(){return E` <slot part="base" class="menu-label"></slot> `}};Ns.styles=[at,qu];Ns.define("sl-menu-label");si.define("sl-spinner");var Yu=B`
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
`,Ku=B`
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
        class=${Ct({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
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
    `}};it.styles=[at,Ku];it.dependencies={"sl-icon":lt};m([et(".icon-button")],it.prototype,"button",2);m([vt()],it.prototype,"hasFocus",2);m([b()],it.prototype,"name",2);m([b()],it.prototype,"library",2);m([b()],it.prototype,"src",2);m([b()],it.prototype,"href",2);m([b()],it.prototype,"target",2);m([b()],it.prototype,"download",2);m([b()],it.prototype,"label",2);m([b({type:Boolean,reflect:!0})],it.prototype,"disabled",2);var le=class extends W{constructor(){super(...arguments),this.localize=new cn(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return E`
      <span
        part="base"
        class=${Ct({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
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
    `}};le.styles=[at,Yu];le.dependencies={"sl-icon-button":it};m([b({reflect:!0})],le.prototype,"variant",2);m([b({reflect:!0})],le.prototype,"size",2);m([b({type:Boolean,reflect:!0})],le.prototype,"pill",2);m([b({type:Boolean})],le.prototype,"removable",2);le.define("sl-tag");var ot=class extends W{constructor(){super(...arguments),this.localize=new cn(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return E`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};m([b()],ot.prototype,"date",2);m([b()],ot.prototype,"weekday",2);m([b()],ot.prototype,"era",2);m([b()],ot.prototype,"year",2);m([b()],ot.prototype,"month",2);m([b()],ot.prototype,"day",2);m([b()],ot.prototype,"hour",2);m([b()],ot.prototype,"minute",2);m([b()],ot.prototype,"second",2);m([b({attribute:"time-zone-name"})],ot.prototype,"timeZoneName",2);m([b({attribute:"time-zone"})],ot.prototype,"timeZone",2);m([b({attribute:"hour-format"})],ot.prototype,"hourFormat",2);ot.define("sl-format-date");var Xu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,Zu=(e,t,n,i)=>{for(var o=i>1?void 0:i?Gu(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&Xu(t,n,o),o};let Wi=class extends kt{render(){return E`<p>Not found!</p>`}};Wi.styles=[B`
      :host {
        display: block;
        margin: 1rem;
      }
    `];Wi=Zu([ri("error-view")],Wi);var Qu=Object.defineProperty,Ju=Object.getOwnPropertyDescriptor,td=(e,t,n,i)=>{for(var o=i>1?void 0:i?Ju(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&Qu(t,n,o),o};let qi=class extends kt{onBeforeEnter(e,t){const i=new URLSearchParams(e.search).get("redirect");if(i&&i.startsWith("/"))return t.redirect(i)}render(){return E`
      <sl-button
        href="itms-services://?action=download-manifest&url=https://ecmel.dev/manifest.plist"
        >Defter iOS</sl-button
      >
      <sl-button
        href="https://github.com/ecmel/ecmel.dev/releases/download/defter/app-universal-release.apk"
        >Android</sl-button
      >
    `}};qi.styles=[B`
      :host {
        display: block;
        margin: 1rem;
      }
    `];qi=td([ri("home-view")],qi);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*vn(e,t){if(e!==void 0){let n=0;for(const i of e)yield t(i,n++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ed=Symbol();class nd{get taskComplete(){return this.t||(this.i===1?this.t=new Promise((t,n)=>{this.o=t,this.h=n}):this.i===3?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,n,i){var r;this.p=0,this.i=0,(this._=t).addController(this);const o=typeof n=="object"?n:{task:n,args:i};this.v=o.task,this.j=o.args,this.m=o.argsEqual??id,this.k=o.onComplete,this.A=o.onError,this.autoRun=o.autoRun??!0,"initialValue"in o&&(this.u=o.initialValue,this.i=2,this.O=(r=this.T)==null?void 0:r.call(this))}hostUpdate(){this.autoRun===!0&&this.S()}hostUpdated(){this.autoRun==="afterUpdate"&&this.S()}T(){if(this.j===void 0)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),n=this.O;this.O=t,t===n||t===void 0||n!==void 0&&this.m(n,t)||await this.run(t)}async run(t){var s,l,a,c,u;let n,i;t??(t=this.T()),this.O=t,this.i===1?(s=this.q)==null||s.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();const o=++this.p;this.q=new AbortController;let r=!1;try{n=await this.v(t,{signal:this.q.signal})}catch(d){r=!0,i=d}if(this.p===o){if(n===ed)this.i=0;else{if(r===!1){try{(l=this.k)==null||l.call(this,n)}catch{}this.i=2,(a=this.o)==null||a.call(this,n)}else{try{(c=this.A)==null||c.call(this,i)}catch{}this.i=3,(u=this.h)==null||u.call(this,i)}this.u=n,this.l=i}this._.requestUpdate()}}abort(t){var n;this.i===1&&((n=this.q)==null||n.abort(t))}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){var n,i,o,r;switch(this.i){case 0:return(n=t.initial)==null?void 0:n.call(t);case 1:return(i=t.pending)==null?void 0:i.call(t);case 2:return(o=t.complete)==null?void 0:o.call(t,this.value);case 3:return(r=t.error)==null?void 0:r.call(t,this.error);default:throw Error("Unexpected status: "+this.i)}}}const id=(e,t)=>e===t||e.length===t.length&&e.every((n,i)=>!ni(n,t[i])),Ds=e=>e===void 0||e==="auto"||e==="instant"||e==="smooth";function od(e,t){this.scrollLeft=e,this.scrollTop=t}const Is=(e,t,n="cannot convert to dictionary.")=>`Failed to execute '${e}' on '${t}': ${n}`,Us=(e,t,n)=>Is(e,t,`The provided value '${n}' is not a valid enum value of type ScrollBehavior.`),vr=(e,t,n)=>{var i;const o=`__SEAMLESS.BACKUP$${t}`;return!e[o]&&e[t]&&!(!((i=e[t])===null||i===void 0)&&i.__isPolyfill)&&(e[o]=e[t]),e[o]||n},rd=e=>{const t=typeof e;return e!==null&&(t==="object"||t==="function")},$o=e=>e.ownerDocument.scrollingElement||e.ownerDocument.documentElement;function sd(e){if(typeof Event=="function")return new Event("scrollend",{bubbles:e,cancelable:!1});const t=document.createEvent("Event");return t.initEvent("scrollend",e,!1),t}const ad=e=>.5*(1-Math.cos(Math.PI*e));function xo(){var e;let t;return!((e=window.performance)===null||e===void 0)&&e.now?t=()=>window.performance.now():t=()=>window.Date.now(),xo=t,t()}const ld=500,zs=e=>{const n=(xo()-e.timeStamp)/(e.duration||ld);if(n>1){e.method(e.targetX,e.targetY),e.callback();return}const i=(e.timingFunc||ad)(n),o=e.startX+(e.targetX-e.startX)*i,r=e.startY+(e.targetY-e.startY)*i;e.method(o,r),e.rafId=window.requestAnimationFrame(()=>{zs(e)})},Hn=e=>isFinite(e)?Number(e):0,cd=e=>{var t;return(t=e.isConnected)!==null&&t!==void 0?t:!e.ownerDocument||!(e.ownerDocument.compareDocumentPosition(e)&1)},ud=(e,t,n)=>{var i,o;if(!cd(e))return;const r=e.scrollLeft,s=e.scrollTop,l=Hn((i=t.left)!==null&&i!==void 0?i:r),a=Hn((o=t.top)!==null&&o!==void 0?o:s);if(l===r&&a===s)return;const c=vr(HTMLElement.prototype,"scroll",od),u=vr(Object.getPrototypeOf(e),"scroll",c).bind(e);if(t.behavior!=="smooth"){u(l,a);return}const d=()=>{window.removeEventListener("wheel",p),window.removeEventListener("touchmove",p)},f=()=>{d();const g=e.nodeType===9;e.dispatchEvent(sd(g))},h=Object.assign(Object.assign({},n),{timeStamp:xo(),startX:r,startY:s,targetX:l,targetY:a,rafId:0,method:u,callback:f}),p=()=>{window.cancelAnimationFrame(h.rafId),d()};window.addEventListener("wheel",p,{passive:!0,once:!0}),window.addEventListener("touchmove",p,{passive:!0,once:!0}),zs(h)},dd=e=>e.window===e,hd=e=>(t,n,i)=>{const[o,r]=dd(t)?[$o(t.document.documentElement),"Window"]:[t,"Element"],s=n??{};if(!rd(s))throw new TypeError(Is(e,r));if(!Ds(s.behavior))throw new TypeError(Us(e,r,s.behavior));e==="scrollBy"&&(s.left=Hn(s.left)+o.scrollLeft,s.top=Hn(s.top)+o.scrollTop),ud(o,s,i)},fd=hd("scroll"),pd=fd,Bs=e=>{switch(e){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},Fs=(e,t,n,i)=>{let o=0;switch(t||(o^=2),e){case 0:o=o>>1|(o&1)<<1,[n,i]=[i,n];break;case 1:case 3:o^=1;break;case 4:o^=2;break}return[o,n,i]},md=e=>(Fs(Bs(e.writingMode),e.direction!=="rtl",void 0,void 0)[0]&1)===1,gd=(e,t,n)=>{const[i,o,r]=Fs(t,n,e.block||"start",e.inline||"nearest");return[o,r].map((s,l)=>{switch(s){case"center":return 1;case"nearest":return 0;default:{const a=i>>l&1;return s==="start"==!a?2:3}}})},yr=(e,t,n,i,o,r,s)=>e!==0?e:o<t&&r>n||o>t&&r<n?null:o<=t&&s<=i||r>=n&&s>=i?2:r>n&&s<i||o<t&&s>i?3:null,wr=e=>e!=="visible"&&e!=="clip",bd=e=>{var t;try{return((t=e.ownerDocument.defaultView)===null||t===void 0?void 0:t.frameElement)||null}catch{return null}},vd=(e,t)=>e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth?wr(t.overflowY)||wr(t.overflowX)||e===$o(e):!1,_r=e=>{const t=e.parentNode,n=e.parentElement;if(n===null&&t!==null){if(t.nodeType===11)return t.host;if(t.nodeType===9)return bd(e)}return n},Pi=(e,t,n)=>e<t?t:e>n?n:e,yd=e=>["scroll-margin","scroll-snap-margin"].filter(t=>t in e.documentElement.style)[0],wd=(e,t,n)=>{const{top:i,right:o,bottom:r,left:s}=t,l=yd(e.ownerDocument);if(!l)return[i,o,r,s];const a=c=>{const u=n.getPropertyValue(`${l}-${c}`);return parseInt(u,10)||0};return[i-a("top"),o+a("right"),r+a("bottom"),s-a("left")]},yn=(e,t,n)=>{switch(e){case 1:return(t+n)/2;case 3:return n;case 2:case 0:return t}},_d=(e,t)=>{var n,i,o;const r=(n=e.ownerDocument.defaultView)===null||n===void 0?void 0:n.visualViewport,[s,l,a,c]=e===$o(e)?[0,0,(i=r==null?void 0:r.width)!==null&&i!==void 0?i:e.clientWidth,(o=r==null?void 0:r.height)!==null&&o!==void 0?o:e.clientHeight]:[t.left,t.top,e.clientWidth,e.clientHeight],u=s+e.clientLeft,d=l+e.clientTop,f=u+a,h=d+c;return[d,f,h,u]},$d=(e,t)=>{const n=[];let i=e.ownerDocument,o=i.defaultView;if(!o)return n;const r=window.getComputedStyle(e),s=r.direction!=="rtl",l=Bs(r.writingMode||r.getPropertyValue("-webkit-writing-mode")||r.getPropertyValue("-ms-writing-mode")),[a,c]=gd(t,l,s);let[u,d,f,h]=wd(e,e.getBoundingClientRect(),r);for(let p=_r(e);p!==null;p=_r(p)){if(i!==p.ownerDocument){if(i=p.ownerDocument,o=i.defaultView,!o)break;const{left:U,top:N}=p.getBoundingClientRect();u+=N,d+=U,f+=N,h+=U}const g=o.getComputedStyle(p);if(g.position==="fixed")break;if(!vd(p,g))continue;const y=p.getBoundingClientRect(),[v,w,_,x]=_d(p,y),$=yr(a,x,w,p.clientWidth,h,d,d-h),A=yr(c,v,_,p.clientHeight,u,f,f-u),O=$===null?0:yn($,h,d)-yn($,x,w),R=A===null?0:yn(A,u,f)-yn(A,v,_),T=md(g)?Pi(O,-p.scrollWidth+p.clientWidth-p.scrollLeft,-p.scrollLeft):Pi(O,-p.scrollLeft,p.scrollWidth-p.clientWidth-p.scrollLeft),C=Pi(R,-p.scrollTop,p.scrollHeight-p.clientHeight-p.scrollTop);n.push([p,{left:p.scrollLeft+T,top:p.scrollTop+C,behavior:t.behavior}]),u=Math.max(u-C,v),d=Math.min(d-T,w),f=Math.min(f-C,_),h=Math.max(h-T,x)}return n},xd=(e,t,n)=>{const i=t||{};if(!Ds(i.behavior))throw new TypeError(Us("scrollIntoView","Element",i.behavior));$d(e,i).forEach(([r,s])=>{pd(r,s,n)})};var Hs={},St={};Object.defineProperty(St,"__esModule",{value:!0});St.FORMAT_PLAIN=St.FORMAT_HTML=St.FORMATS=void 0;var js="html";St.FORMAT_HTML=js;var Vs="plain";St.FORMAT_PLAIN=Vs;var Ad=[js,Vs];St.FORMATS=Ad;var q={};Object.defineProperty(q,"__esModule",{value:!0});q.UNIT_WORDS=q.UNIT_WORD=q.UNIT_SENTENCES=q.UNIT_SENTENCE=q.UNIT_PARAGRAPHS=q.UNIT_PARAGRAPH=q.UNITS=void 0;var Ws="words";q.UNIT_WORDS=Ws;var qs="word";q.UNIT_WORD=qs;var Ys="sentences";q.UNIT_SENTENCES=Ys;var Ks="sentence";q.UNIT_SENTENCE=Ks;var Xs="paragraphs";q.UNIT_PARAGRAPHS=Xs;var Gs="paragraph";q.UNIT_PARAGRAPH=Gs;var Ed=[Ws,qs,Ys,Ks,Xs,Gs];q.UNITS=Ed;var hn={};Object.defineProperty(hn,"__esModule",{value:!0});hn.WORDS=void 0;var kd=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];hn.WORDS=kd;var Zs={},ui={};Object.defineProperty(ui,"__esModule",{value:!0});ui.LINE_ENDINGS=void 0;var Sd={POSIX:`
`,WIN32:`\r
`};ui.LINE_ENDINGS=Sd;var Qs={},Ao={},Js={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(o){var r=o.trim();return r.charAt(0).toUpperCase()+r.slice(1)},n=t;e.default=n})(Js);var Yi={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return!!e.exports},i=n;t.default=i})(Yi,Yi.exports);var Cd=Yi.exports,ta={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){var o=!1;try{o=navigator.product==="ReactNative"}catch{o=!1}return o},n=t;e.default=n})(ta);var ea={},di={};Object.defineProperty(di,"__esModule",{value:!0});di.SUPPORTED_PLATFORMS=void 0;var Pd={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};di.SUPPORTED_PLATFORMS=Pd;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=di,n=function(){var r=!1;try{r=process.platform===t.SUPPORTED_PLATFORMS.WIN32}catch{r=!1}return r},i=n;e.default=i})(ea);var Eo={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(o)).map(function(r,s){return s})},n=t;e.default=n})(Eo);var na={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Eo);function n(r){return r&&r.__esModule?r:{default:r}}var i=function(s,l){var a=(0,t.default)(s);return a.map(function(){return l()})},o=i;e.default=o})(na);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"capitalize",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isNode",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"isReactNative",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"isWindows",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"makeArrayOfLength",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"makeArrayOfStrings",{enumerable:!0,get:function(){return s.default}});var t=l(Js),n=l(Cd),i=l(ta),o=l(ea),r=l(Eo),s=l(na);function l(a){return a&&a.__esModule?a:{default:a}}})(Ao);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=hn,n=Ao;function i(c,u){if(!(c instanceof u))throw new TypeError("Cannot call a class as a function")}function o(c,u){for(var d=0;d<u.length;d++){var f=u[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(c,f.key,f)}}function r(c,u,d){return u&&o(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c}function s(c,u,d){return u in c?Object.defineProperty(c,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[u]=d,c}var l=function(){function c(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=u.sentencesPerParagraph,f=d===void 0?{max:7,min:3}:d,h=u.wordsPerSentence,p=h===void 0?{max:15,min:5}:h,g=u.random;u.seed;var y=u.words,v=y===void 0?t.WORDS:y;if(i(this,c),s(this,"sentencesPerParagraph",void 0),s(this,"wordsPerSentence",void 0),s(this,"random",void 0),s(this,"words",void 0),f.min>f.max)throw new Error("Minimum number of sentences per paragraph (".concat(f.min,") cannot exceed maximum (").concat(f.max,")."));if(p.min>p.max)throw new Error("Minimum number of words per sentence (".concat(p.min,") cannot exceed maximum (").concat(p.max,")."));this.sentencesPerParagraph=f,this.words=v,this.wordsPerSentence=p,this.random=g||Math.random}return r(c,[{key:"generateRandomInteger",value:function(d,f){return Math.floor(this.random()*(f-d+1)+d)}},{key:"generateRandomWords",value:function(d){var f=this,h=this.wordsPerSentence,p=h.min,g=h.max,y=d||this.generateRandomInteger(p,g);return(0,n.makeArrayOfLength)(y).reduce(function(v,w){return"".concat(f.pluckRandomWord()," ").concat(v)},"").trim()}},{key:"generateRandomSentence",value:function(d){return"".concat((0,n.capitalize)(this.generateRandomWords(d)),".")}},{key:"generateRandomParagraph",value:function(d){var f=this,h=this.sentencesPerParagraph,p=h.min,g=h.max,y=d||this.generateRandomInteger(p,g);return(0,n.makeArrayOfLength)(y).reduce(function(v,w){return"".concat(f.generateRandomSentence()," ").concat(v)},"").trim()}},{key:"pluckRandomWord",value:function(){var d=0,f=this.words.length-1,h=this.generateRandomInteger(d,f);return this.words[h]}}]),c}(),a=l;e.default=a})(Qs);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=St,n=ui,i=r(Qs),o=Ao;function r(f){return f&&f.__esModule?f:{default:f}}function s(f,h){if(!(f instanceof h))throw new TypeError("Cannot call a class as a function")}function l(f,h){for(var p=0;p<h.length;p++){var g=h[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}function a(f,h,p){return h&&l(f.prototype,h),Object.defineProperty(f,"prototype",{writable:!1}),f}function c(f,h,p){return h in f?Object.defineProperty(f,h,{value:p,enumerable:!0,configurable:!0,writable:!0}):f[h]=p,f}var u=function(){function f(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.FORMAT_PLAIN,g=arguments.length>2?arguments[2]:void 0;if(s(this,f),this.format=p,this.suffix=g,c(this,"generator",void 0),t.FORMATS.indexOf(p.toLowerCase())===-1)throw new Error("".concat(p," is an invalid format. Please use ").concat(t.FORMATS.join(" or "),"."));this.generator=new i.default(h)}return a(f,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,o.isReactNative)()&&(0,o.isNode)()&&(0,o.isWindows)()?n.LINE_ENDINGS.WIN32:n.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(p){return this.format===t.FORMAT_HTML?"<p>".concat(p,"</p>"):p}},{key:"formatStrings",value:function(p){var g=this;return p.map(function(y){return g.formatString(y)})}},{key:"generateWords",value:function(p){return this.formatString(this.generator.generateRandomWords(p))}},{key:"generateSentences",value:function(p){return this.formatString(this.generator.generateRandomParagraph(p))}},{key:"generateParagraphs",value:function(p){var g=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,o.makeArrayOfStrings)(p,g)).join(this.getLineEnding())}}]),f}(),d=u;e.default=d})(Zs);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"LoremIpsum",{enumerable:!0,get:function(){return o.default}}),e.loremIpsum=void 0;var t=St,n=q,i=hn,o=r(Zs);function r(l){return l&&l.__esModule?l:{default:l}}var s=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=a.count,u=c===void 0?1:c,d=a.format,f=d===void 0?t.FORMAT_PLAIN:d,h=a.paragraphLowerBound,p=h===void 0?3:h,g=a.paragraphUpperBound,y=g===void 0?7:g,v=a.random,w=a.sentenceLowerBound,_=w===void 0?5:w,x=a.sentenceUpperBound,$=x===void 0?15:x,A=a.units,O=A===void 0?n.UNIT_SENTENCES:A,R=a.words,T=R===void 0?i.WORDS:R,C=a.suffix,U=C===void 0?"":C,N={random:v,sentencesPerParagraph:{max:y,min:p},words:T,wordsPerSentence:{max:$,min:_}},z=new o.default(N,f,U);switch(O){case n.UNIT_PARAGRAPHS:case n.UNIT_PARAGRAPH:return z.generateParagraphs(u);case n.UNIT_SENTENCES:case n.UNIT_SENTENCE:return z.generateSentences(u);case n.UNIT_WORDS:case n.UNIT_WORD:return z.generateWords(u);default:return""}};e.loremIpsum=s})(Hs);function $r(){return{date:"",description:"",options:[2],option_names:["Option-2"],entries:[ia()]}}function ia(){return{checked:!1,id:"",code:"",account:"",debit:0n,credit:0n}}const oa=[];for(let e=0;e<100;e++)oa.push({id:`${e}`,code:`${e%10}00.${e<10?"0":""}${e}`,name:Hs.loremIpsum()});function Od(e,t){return new Promise((n,i)=>{const o=oa.filter(s=>{const l=s.code.replace(/s+/g,"").toLocaleLowerCase(),a=s.name.replace(/s+/g,"").toLocaleLowerCase(),c=e.replace(/s+/g,"").toLocaleLowerCase();return l.includes(c)||a.includes(c)}).sort((s,l)=>s.code.localeCompare(l.code)),r=setTimeout(()=>n(o),250);t==null||t.addEventListener("abort",s=>{clearTimeout(r),i(new Error(s.type))},{once:!0})})}function Rd(){return[{id:1,name:"Option-1"},{id:2,name:"Option-2"},{id:3,name:"Option-3"},{id:4,name:"Option-4"},{id:5,name:"Option-5"},{id:6,name:"Option-6"},{id:7,name:"Option-7"},{id:8,name:"Option-8"}]}const Ki="0";function xr(e){return e<0n?-e:e}function ra(e,t=2){return e*10n**BigInt(t)}function jn(e,t=2){const n=ra(1n,t);return(e+e%n)/n}function Td(e){return e.replace(/(?:^-|([^0-9.,])+)/g,(t,n)=>n?"":t).split(/[.,]+/,2).join(".")||Ki}function Ld(e,t=2){const n=e.split(/\./,2);return n[0]=n[0]||Ki,n[1]=(n[1]||"").padEnd(t,Ki),BigInt(n[0]+n[1].slice(0,t))}function Rt(e,t=2){const n=10n**BigInt(t),i=(xr(e)%n).toString().padStart(t,"0").replace(/0+$/,"");return(e<0n?"-":"")+(xr(e)/n).toString()+(i?"."+i:"")}function Ar(e,t=2){e=e.trim(),e.endsWith("+")||(e+="+");let n="",i="",o,r,s=[];function l(){i&&(s.push(Ld(Td(i),t)),i="")}for(let a=0;a<e.length;a++)switch(n=e.charAt(a),n){case" ":case":":case";":l();break;case"-":l(),i+=n;break;case"+":l(),s=[s.reduce((c,u)=>c+=u,0n)];break;case"/":l(),o=s.pop()||0n,r=s.pop()||0n,s.push(o&&jn(ra(r,t*2)/o,t));break;case"*":l(),o=s.pop()||0n,r=s.pop()||0n,s.push(jn(r*o,t));break;case"%":l(),o=s.pop()||0n,s.push(o/100n);break;default:i+=n;break}return s.pop()||0n}var Md=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,fn=(e,t,n,i)=>{for(var o=i>1?void 0:i?Nd(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&Md(t,n,o),o};let re=class extends kt{constructor(){super(),this.transfer=$r(),this.selected=0,this.accountCode="",this.accountList=[],this.fetchTask=new nd(this,{task:async(e,{signal:t})=>{this.accountList=this.accountCode?await Od(this.accountCode,t):[]},args:()=>[this.accountCode]}),this.addEventListener("keydown",e=>{switch(e.key){case"b":case"B":e.metaKey&&(this.balance(),this.requestUpdate(),e.preventDefault())}})}get disabled(){return this.transfer.entries.length<2}get checked(){return this.selected>0&&this.selected===this.transfer.entries.length-1}get indeterminate(){return this.selected>0&&this.selected<this.transfer.entries.length-1}get debit(){return this.transfer.entries.reduce((e,{debit:t})=>e+t,0n)}get credit(){return this.transfer.entries.reduce((e,{credit:t})=>e+t,0n)}balance(){const e=this.transfer.entries.length-1,t=this.transfer.entries[e];t.debit=0n,t.credit=0n;const n=this.debit,i=this.credit;n>i?t.credit=n-i:i>n&&(t.debit=i-n)}addEntry(){this.transfer.entries.push(ia())}isLastEntry(e){return e===this.transfer.entries.length-1}jump(e){e&&(xd(e,Hr),e.focus(jr))}handleKeyDown(e){if(["Enter"].includes(e.key)){const t=X(e);this.jump(_n(t)||Co(t)),e.preventDefault()}else if(["ArrowDown","ArrowUp"].includes(e.key)){const t=X(e);this.jump(Co(t,e.key==="ArrowUp",ya(t))),e.preventDefault()}else if(["ArrowLeft","ArrowRight"].includes(e.key)){const t=X(e);t.canLeave(e.key==="ArrowLeft")&&(this.jump(_n(t,e.key==="ArrowLeft")),e.preventDefault())}}render(){return E`
      <cell-grid columns="auto 1fr">
        <cell-group>
          <cell-item span="2"></cell-item>
        </cell-group>
        <cell-group>
          <cell-item jump="next">Date</cell-item>
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
          <cell-item jump="next">Description</cell-item>
          <cell-input
            value="${this.transfer.description}"
            @input="${e=>{const t=X(e);this.transfer.description=t.value,this.requestUpdate()}}"
            @keydown="${e=>{this.handleKeyDown(e)}}"
          ></cell-input>
        </cell-group>
        <cell-group>
          <cell-item jump="next">Options</cell-item>
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
            ${vn(Rd(),e=>E`<cell-option
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
              <cell-item jump="next">${e.code}</cell-item>
              <cell-select
                stretch
                truncate
                list="accounts"
                value="${e.account}"
                @selection="${n=>{const i=X(n),o=i.selected[0];if(o){if(o.value){this.isLastEntry(t)&&this.addEntry();const r=o.labels;e.id=o.value,e.code=r[0],e.account=r[1]}else e.id=e.code=e.account="";this.jump(_n(i))}i.hide()}}"
                @input="${n=>{const i=X(n);this.accountCode=i.value.trim(),i.show()}}"
                @hide="${n=>{const i=X(n);i.value=e.account,i.reset(),this.accountCode="",this.requestUpdate()}}"
                @keydown="${n=>{(n.key!=="Enter"||e.id)&&this.handleKeyDown(n)}}"
              ></cell-select>
              <cell-input
                auto
                justify="end"
                value="${Rt(e.debit)}"
                @change="${n=>{const i=X(n);e.debit=jn(Ar(i.value,16),14),e.debit&&(e.credit=0n),this.requestUpdate(),i.value=Rt(e.debit)}}"
                @keydown="${n=>{this.handleKeyDown(n)}}"
                ><cell-format value="${Rt(e.debit)}"></cell-format
              ></cell-input>
              <cell-input
                auto
                justify="end"
                value="${Rt(e.credit)}"
                @change="${n=>{const i=X(n);e.credit=jn(Ar(i.value,16),14),e.credit&&(e.debit=0n),this.requestUpdate(),i.value=Rt(e.credit)}}"
                @keydown="${n=>{this.handleKeyDown(n)}}"
                ><cell-format value="${Rt(e.credit)}"></cell-format
              ></cell-input>
            </cell-group>
          `)}
        <cell-group>
          <cell-footer></cell-footer>
          <cell-footer></cell-footer>
          <cell-footer justify="end">TOTAL</cell-footer>
          <cell-footer justify="end"
            ><cell-format value="${Rt(this.debit)}"></cell-format
          ></cell-footer>
          <cell-footer justify="end"
            ><cell-format value="${Rt(this.credit)}"></cell-format
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
            @click="${()=>{this.transfer=$r(),this.selected=0}}"
            >Clear</sl-button
          ><sl-button
            @click="${()=>{this.balance(),this.requestUpdate()}}"
            >Balance</sl-button
          >
        </sl-button-group>
      </cell-section>
      <br />
    `}};re.styles=[B`
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
    `];fn([vt()],re.prototype,"transfer",2);fn([vt()],re.prototype,"selected",2);fn([vt()],re.prototype,"accountCode",2);fn([vt()],re.prototype,"accountList",2);re=fn([ri("cells-view")],re);function Vn(e){return e=e||[],Array.isArray(e)?e:[e]}function ht(e){return`[Vaadin.Router] ${e}`}function Dd(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Wn="module",qn="nomodule",Xi=[Wn,qn];function Er(e){if(!e.match(/.+\.[m]?js$/))throw new Error(ht(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function sa(e){if(!e||!ut(e.path))throw new Error(ht('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!se(e.action)&&!Array.isArray(e.children)&&!se(e.children)&&!Yn(t)&&!n.some(i=>ut(e[i])))throw new Error(ht(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(ut(t))Er(t);else if(Xi.some(i=>i in t))Xi.forEach(i=>i in t&&Er(t[i]));else throw new Error(ht('Expected route bundle to include either "'+qn+'" or "'+Wn+'" keys, or both'));e.redirect&&["bundle","component"].forEach(i=>{i in e&&console.warn(ht(`Route config "${e.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function kr(e){Vn(e).forEach(t=>sa(t))}function Sr(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),t===Wn?n.setAttribute("type",Wn):t===qn&&n.setAttribute(qn,""),n.async=!0),new Promise((i,o)=>{n.onreadystatechange=n.onload=r=>{n.__dynamicImportLoaded=!0,i(r)},n.onerror=r=>{n.parentNode&&n.parentNode.removeChild(n),o(r)},n.parentNode===null?document.head.appendChild(n):n.__dynamicImportLoaded&&i()})}function Id(e){return ut(e)?Sr(e):Promise.race(Xi.filter(t=>t in e).map(t=>Sr(e[t],t)))}function We(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Yn(e){return typeof e=="object"&&!!e}function se(e){return typeof e=="function"}function ut(e){return typeof e=="string"}function aa(e){const t=new Error(ht(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const he=new class{};function Ud(e){const t=e.port,n=e.protocol,r=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${r}`}function Cr(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let l=0;l<n.length;l++){const a=n[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||Ud(t))!==window.location.origin)return;const{pathname:o,search:r,hash:s}=t;We("go",{pathname:o,search:r,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const zd={activate(){window.document.addEventListener("click",Cr)},inactivate(){window.document.removeEventListener("click",Cr)}},Bd=/Trident/.test(navigator.userAgent);Bd&&!se(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,!!t.bubbles,!!t.cancelable),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);function Pr(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:n,hash:i}=window.location;We("go",{pathname:t,search:n,hash:i})}const Fd={activate(){window.addEventListener("popstate",Pr)},inactivate(){window.removeEventListener("popstate",Pr)}};var Re=fa,Hd=ko,jd=Yd,Vd=ua,Wd=ha,la="/",ca="./",qd=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ko(e,t){for(var n=[],i=0,o=0,r="",s=t&&t.delimiter||la,l=t&&t.delimiters||ca,a=!1,c;(c=qd.exec(e))!==null;){var u=c[0],d=c[1],f=c.index;if(r+=e.slice(o,f),o=f+u.length,d){r+=d[1],a=!0;continue}var h="",p=e[o],g=c[2],y=c[3],v=c[4],w=c[5];if(!a&&r.length){var _=r.length-1;l.indexOf(r[_])>-1&&(h=r[_],r=r.slice(0,_))}r&&(n.push(r),r="",a=!1);var x=h!==""&&p!==void 0&&p!==h,$=w==="+"||w==="*",A=w==="?"||w==="*",O=h||s,R=y||v;n.push({name:g||i++,prefix:h,delimiter:O,optional:A,repeat:$,partial:x,pattern:R?Kd(R):"[^"+Tt(O)+"]+?"})}return(r||o<e.length)&&n.push(r+e.substr(o)),n}function Yd(e,t){return ua(ko(e,t))}function ua(e){for(var t=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(i,o){for(var r="",s=o&&o.encode||encodeURIComponent,l=0;l<e.length;l++){var a=e[l];if(typeof a=="string"){r+=a;continue}var c=i?i[a.name]:void 0,u;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(u=s(c[d],a),!t[l].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');r+=(d===0?a.prefix:a.delimiter)+u}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(u=s(String(c),a),!t[l].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');r+=a.prefix+u;continue}if(a.optional){a.partial&&(r+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return r}}function Tt(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Kd(e){return e.replace(/([=!:$/()])/g,"\\$1")}function da(e){return e&&e.sensitive?"":"i"}function Xd(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function Gd(e,t,n){for(var i=[],o=0;o<e.length;o++)i.push(fa(e[o],t,n).source);return new RegExp("(?:"+i.join("|")+")",da(n))}function Zd(e,t,n){return ha(ko(e,n),t,n)}function ha(e,t,n){n=n||{};for(var i=n.strict,o=n.start!==!1,r=n.end!==!1,s=Tt(n.delimiter||la),l=n.delimiters||ca,a=[].concat(n.endsWith||[]).map(Tt).concat("$").join("|"),c=o?"^":"",u=e.length===0,d=0;d<e.length;d++){var f=e[d];if(typeof f=="string")c+=Tt(f),u=d===e.length-1&&l.indexOf(f[f.length-1])>-1;else{var h=f.repeat?"(?:"+f.pattern+")(?:"+Tt(f.delimiter)+"(?:"+f.pattern+"))*":f.pattern;t&&t.push(f),f.optional?f.partial?c+=Tt(f.prefix)+"("+h+")?":c+="(?:"+Tt(f.prefix)+"("+h+"))?":c+=Tt(f.prefix)+"("+h+")"}}return r?(i||(c+="(?:"+s+")?"),c+=a==="$"?"$":"(?="+a+")"):(i||(c+="(?:"+s+"(?="+a+"))?"),u||(c+="(?="+s+"|"+a+")")),new RegExp(c,da(n))}function fa(e,t,n){return e instanceof RegExp?Xd(e,t):Array.isArray(e)?Gd(e,t,n):Zd(e,t,n)}Re.parse=Hd;Re.compile=jd;Re.tokensToFunction=Vd;Re.tokensToRegExp=Wd;const{hasOwnProperty:Qd}=Object.prototype,Gi=new Map;Gi.set("|false",{keys:[],pattern:/(?:)/});function Or(e){try{return decodeURIComponent(e)}catch{return e}}function Jd(e,t,n,i,o){n=!!n;const r=`${e}|${n}`;let s=Gi.get(r);if(!s){const c=[];s={keys:c,pattern:Re(e,c,{end:n,strict:e===""})},Gi.set(r,s)}const l=s.pattern.exec(t);if(!l)return null;const a=Object.assign({},o);for(let c=1;c<l.length;c++){const u=s.keys[c-1],d=u.name,f=l[c];(f!==void 0||!Qd.call(a,d))&&(u.repeat?a[d]=f?f.split(u.delimiter).map(Or):[]:a[d]=f&&Or(f))}return{path:l[0],keys:(i||[]).concat(s.keys),params:a}}function pa(e,t,n,i,o){let r,s,l=0,a=e.path||"";return a.charAt(0)==="/"&&(n&&(a=a.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const u=e.__children=e.__children||e.children;if(!r&&(r=Jd(a,t,!u,i,o),r))return{done:!1,value:{route:e,keys:r.keys,params:r.params,path:r.path}};if(r&&u)for(;l<u.length;){if(!s){const f=u[l];f.parent=e;let h=r.path.length;h>0&&t.charAt(h)==="/"&&(h+=1),s=pa(f,t.substr(h),n,r.keys,r.params)}const d=s.next(c);if(!d.done)return{done:!1,value:d.value};s=null,l++}return{done:!0}}}}function th(e){if(se(e.route.action))return e.route.action(e)}function eh(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}function nh(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}function ih(e,t){const{route:n,path:i}=t;if(n&&!n.__synthetic){const o={path:i,route:n};if(!e.chain)e.chain=[];else if(n.parent){let r=e.chain.length;for(;r--&&e.chain[r].route&&e.chain[r].route!==n.parent;)e.chain.pop()}e.chain.push(o)}}class tn{constructor(t,n={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=n.baseUrl||"",this.errorHandler=n.errorHandler,this.resolveRoute=n.resolveRoute||th,this.context=Object.assign({resolver:this},n.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){kr(t);const n=[...Vn(t)];this.root.__children=n}addRoutes(t){return kr(t),this.root.__children.push(...Vn(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const n=Object.assign({},this.context,ut(t)?{pathname:t}:t),i=pa(this.root,this.__normalizePathname(n.pathname),this.baseUrl),o=this.resolveRoute;let r=null,s=null,l=n;function a(c,u=r.value.route,d){const f=d===null&&r.value.route;return r=s||i.next(f),s=null,!c&&(r.done||!eh(u,r.value.route))?(s=r,Promise.resolve(he)):r.done?Promise.reject(aa(n)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},n,r.value),ih(l,r.value),Promise.resolve(o(l)).then(h=>h!=null&&h!==he?(l.result=h.result||h,l):a(c,u,h)))}return n.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const u=nh(l);if(c?console.warn(u):c=new Error(u),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(t,n){return new URL(t,n)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const n=this.__effectiveBaseUrl,i=this.constructor.__createUrl(t,n).href;if(i.slice(0,n.length)===n)return i.slice(n.length)}}tn.pathToRegexp=Re;const{pathToRegexp:Rr}=tn,Tr=new Map;function ma(e,t,n){const i=t.name||t.component;if(i&&(e.has(i)?e.get(i).push(t):e.set(i,[t])),Array.isArray(n))for(let o=0;o<n.length;o++){const r=n[o];r.parent=t,ma(e,r,r.__children||r.children)}}function Lr(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function Mr(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function oh(e,t={}){if(!(e instanceof tn))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(i,o)=>{let r=Lr(n,i);if(!r&&(n.clear(),ma(n,e.root,e.root.__children),r=Lr(n,i),!r))throw new Error(`Route "${i}" not found`);let s=Tr.get(r.fullPath);if(!s){let a=Mr(r),c=r.parent;for(;c;){const h=Mr(c);h&&(a=h.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const u=Rr.parse(a),d=Rr.tokensToFunction(u),f=Object.create(null);for(let h=0;h<u.length;h++)ut(u[h])||(f[u[h].name]=!0);s={toPath:d,keys:f},Tr.set(a,s),r.fullPath=a}let l=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const a={},c=Object.keys(o);for(let d=0;d<c.length;d++){const f=c[d];s.keys[f]||(a[f]=o[f])}const u=t.stringifyQueryParams(a);u&&(l+=u.charAt(0)==="?"?u:`?${u}`)}return l}}let Nr=[];function rh(e){Nr.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),Nr=e}const sh=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},ah=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function Dr(e,t){return e.classList.add(t),new Promise(n=>{if(sh(e)){const i=e.getBoundingClientRect(),o=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${o}`),ah(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}const lh=256;function Oi(e){return e!=null}function ch(e){const t=Object.assign({},e);return delete t.next,t}function ct({pathname:e="",search:t="",hash:n="",chain:i=[],params:o={},redirectFrom:r,resolver:s},l){const a=i.map(c=>c.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:a,route:l||a.length&&a[a.length-1]||null,params:o,redirectFrom:r,getUrl:(c={})=>Cn(Dt.pathToRegexp.compile(ga(a))(Object.assign({},o,c)),s)}}function Ir(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function uh(e,t){t.location=ct(e);const n=e.chain.map(i=>i.route).indexOf(e.route);return e.chain[n].element=t,t}function Sn(e,t,n){if(se(e))return e.apply(n,t)}function Ur(e,t,n){return i=>{if(i&&(i.cancel||i.redirect))return i;if(n)return Sn(n[e],t,n)}}function dh(e,t){if(!Array.isArray(e)&&!Yn(e))throw new Error(ht(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=Vn(e);for(let i=0;i<n.length;i++)sa(n[i]),t.__children.push(n[i])}function wn(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function Cn(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ga(e){return e.map(t=>t.path).reduce((t,n)=>n.length?t.replace(/\/$/,"")+"/"+n.replace(/^\//,""):t,"")}class Dt extends tn{constructor(t,n){const i=document.head.querySelector("base"),o=i&&i.getAttribute("href");super([],Object.assign({baseUrl:o&&tn.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},n)),this.resolveRoute=s=>this.__resolveRoute(s);const r=Dt.NavigationTrigger;Dt.setTriggers.apply(Dt,Object.keys(r).map(s=>r[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=ct({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const n=t.route;let i=Promise.resolve();se(n.children)&&(i=i.then(()=>n.children(ch(t))).then(r=>{!Oi(r)&&!se(n.children)&&(r=n.children),dh(r,n)}));const o={redirect:r=>Ir(t,r),component:r=>{const s=document.createElement(r);return this.__createdByRouter.set(s,!0),s}};return i.then(()=>{if(this.__isLatestRender(t))return Sn(n.action,[t,o],n)}).then(r=>{if(Oi(r)&&(r instanceof HTMLElement||r.redirect||r===he))return r;if(ut(n.redirect))return o.redirect(n.redirect);if(n.bundle)return Id(n.bundle).then(()=>{},()=>{throw new Error(ht(`Bundle not found: ${n.bundle}. Check if the file name is correct`))})}).then(r=>{if(Oi(r))return r;if(ut(n.component))return o.component(n.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,n=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),n||this.__onNavigationEvent(),this.ready}render(t,n){const i=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},ut(t)?{pathname:t}:t,{__renderId:i});return this.ready=this.resolve(o).then(r=>this.__fullyResolveChain(r)).then(r=>{if(this.__isLatestRender(r)){const s=this.__previousContext;if(r===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=ct(r),n&&this.__updateBrowserHistory(r,i===1),We("location-changed",{router:this,location:this.location}),r.__skipAttach)return this.__copyUnchangedElements(r,s),this.__previousContext=r,this.location;this.__addAppearingContent(r,s);const l=this.__animateIfNeeded(r);return this.__runOnAfterEnterCallbacks(r),this.__runOnAfterLeaveCallbacks(r,s),l.then(()=>{if(this.__isLatestRender(r))return this.__removeDisappearingContent(),this.__previousContext=r,this.location})}}).catch(r=>{if(i===this.__lastStartedRenderId)throw n&&this.__updateBrowserHistory(o),wn(this.__outlet&&this.__outlet.children),this.location=ct(Object.assign(o,{resolver:this})),We("error",Object.assign({router:this,error:r},o)),r}),this.ready}__fullyResolveChain(t,n=t){return this.__findComponentContextAfterAllRedirects(n).then(i=>{const r=i!==n?i:t,l=Cn(ga(i.chain),i.resolver)===i.pathname,a=(c,u=c.route,d)=>c.next(void 0,u,d).then(f=>f===null||f===he?l?c:u.parent!==null?a(c,u.parent,f):f:f);return a(i).then(c=>{if(c===null||c===he)throw aa(r);return c&&c!==he&&c!==i?this.__fullyResolveChain(r,c):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(t){const n=t.result;return n instanceof HTMLElement?(uh(t,n),Promise.resolve(t)):n.redirect?this.__redirect(n.redirect,t.__redirectCount,t.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):n instanceof Error?Promise.reject(n):Promise.reject(new Error(ht(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Dd(n)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(n=>n===this.__previousContext||n===t?n:this.__fullyResolveChain(n))}__runOnBeforeCallbacks(t){const n=this.__previousContext||{},i=n.chain||[],o=t.chain;let r=Promise.resolve();const s=()=>({cancel:!0}),l=a=>Ir(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,o.length)&&!(i[a].route!==o[a].route||i[a].path!==o[a].path&&i[a].element!==o[a].element||!this.__isReusableElement(i[a].element,o[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=o.length===i.length&&t.__divergedChainIndex==o.length&&this.__isReusableElement(t.result,n.result),t.__skipAttach){for(let a=o.length-1;a>=0;a--)r=this.__runOnBeforeLeaveCallbacks(r,t,{prevent:s},i[a]);for(let a=0;a<o.length;a++)r=this.__runOnBeforeEnterCallbacks(r,t,{prevent:s,redirect:l},o[a]),i[a].element.location=ct(t,i[a].route)}else for(let a=i.length-1;a>=t.__divergedChainIndex;a--)r=this.__runOnBeforeLeaveCallbacks(r,t,{prevent:s},i[a])}if(!t.__skipAttach)for(let a=0;a<o.length;a++)a<t.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=ct(t,i[a].route)):(r=this.__runOnBeforeEnterCallbacks(r,t,{prevent:s,redirect:l},o[a]),o[a].element&&(o[a].element.location=ct(t,o[a].route)));return r.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,n,i,o){const r=ct(n);return t.then(s=>{if(this.__isLatestRender(n))return Ur("onBeforeLeave",[r,i,this],o.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,n,i,o){const r=ct(n,o.route);return t.then(s=>{if(this.__isLatestRender(n))return Ur("onBeforeEnter",[r,i,this],o.element)(s)})}__isReusableElement(t,n){return t&&n?this.__createdByRouter.get(t)&&this.__createdByRouter.get(n)?t.localName===n.localName:t===n:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,n,i){if(n>lh)throw new Error(ht(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(n||0)+1,__renderId:i})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(ht(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:n="",hash:i=""},o){if(window.location.pathname!==t||window.location.search!==n||window.location.hash!==i){const r=o?"replaceState":"pushState";window.history[r](null,document.title,t+n+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,n){let i=this.__outlet;for(let o=0;o<t.__divergedChainIndex;o++){const r=n&&n.chain[o].element;if(r)if(r.parentNode===i)t.chain[o].element=r,i=r;else break}return i}__addAppearingContent(t,n){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(t,n);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(r=>this.__addedByRouter.get(r)&&r!==t.result);let o=i;for(let r=t.__divergedChainIndex;r<t.chain.length;r++){const s=t.chain[r].element;s&&(o.appendChild(s),this.__addedByRouter.set(s,!0),o===i&&this.__appearingContent.push(s),o=s)}}__removeDisappearingContent(){this.__disappearingContent&&wn(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(wn(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,n){if(n)for(let i=n.chain.length-1;i>=t.__divergedChainIndex&&this.__isLatestRender(t);i--){const o=n.chain[i].element;if(o)try{const r=ct(t);Sn(o.onAfterLeave,[r,{},n.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&wn(o.children)}}}__runOnAfterEnterCallbacks(t){for(let n=t.__divergedChainIndex;n<t.chain.length&&this.__isLatestRender(t);n++){const i=t.chain[n].element||{},o=ct(t,t.chain[n].route);Sn(i.onAfterEnter,[o,{},t.resolver],i)}}__animateIfNeeded(t){const n=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],o=[],r=t.chain;let s;for(let l=r.length;l>0;l--)if(r[l-1].route.animate){s=r[l-1].route.animate;break}if(n&&i&&s){const l=Yn(s)&&s.leave||"leaving",a=Yn(s)&&s.enter||"entering";o.push(Dr(n,l)),o.push(Dr(i,a))}return Promise.all(o).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:n,search:i,hash:o}=t?t.detail:window.location;ut(this.__normalizePathname(n))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:n,search:i,hash:o},!0))}static setTriggers(...t){rh(t)}urlForName(t,n){return this.__urlForName||(this.__urlForName=oh(this)),Cn(this.__urlForName(t,n),this)}urlForPath(t,n){return Cn(Dt.pathToRegexp.compile(t)(n),this)}static go(t){const{pathname:n,search:i,hash:o}=ut(t)?this.__createUrl(t,"http://a"):t;return We("go",{pathname:n,search:i,hash:o})}}const hh=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Pn=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function fh(){function e(){return!0}return ba(e)}function ph(){try{return mh()?!0:gh()?Pn?!bh():!fh():!1}catch{return!1}}function mh(){return localStorage.getItem("vaadin.developmentmode.force")}function gh(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function bh(){return!!(Pn&&Object.keys(Pn).map(t=>Pn[t]).filter(t=>t.productionMode).length>0)}function ba(e,t){if(typeof e!="function")return;const n=hh.exec(e.toString());if(n)try{e=new Function(n[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return e(t)}window.Vaadin=window.Vaadin||{};const zr=function(e,t){if(window.Vaadin.developmentMode)return ba(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ph());function vh(){}const yh=function(){if(typeof zr=="function")return zr(vh)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});yh();Dt.NavigationTrigger={POPSTATE:Fd,CLICK:zd};const wh="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20class='bi%20bi-sun'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M8%2011a3%203%200%201%201%200-6%203%203%200%200%201%200%206m0%201a4%204%200%201%200%200-8%204%204%200%200%200%200%208M8%200a.5.5%200%200%201%20.5.5v2a.5.5%200%200%201-1%200v-2A.5.5%200%200%201%208%200m0%2013a.5.5%200%200%201%20.5.5v2a.5.5%200%200%201-1%200v-2A.5.5%200%200%201%208%2013m8-5a.5.5%200%200%201-.5.5h-2a.5.5%200%200%201%200-1h2a.5.5%200%200%201%20.5.5M3%208a.5.5%200%200%201-.5.5h-2a.5.5%200%200%201%200-1h2A.5.5%200%200%201%203%208m10.657-5.657a.5.5%200%200%201%200%20.707l-1.414%201.415a.5.5%200%201%201-.707-.708l1.414-1.414a.5.5%200%200%201%20.707%200m-9.193%209.193a.5.5%200%200%201%200%20.707L3.05%2013.657a.5.5%200%200%201-.707-.707l1.414-1.414a.5.5%200%200%201%20.707%200m9.193%202.121a.5.5%200%200%201-.707%200l-1.414-1.414a.5.5%200%200%201%20.707-.707l1.414%201.414a.5.5%200%200%201%200%20.707M4.464%204.465a.5.5%200%200%201-.707%200L2.343%203.05a.5.5%200%201%201%20.707-.707l1.414%201.414a.5.5%200%200%201%200%20.708'/%3e%3c/svg%3e";var _h=Object.defineProperty,$h=Object.getOwnPropertyDescriptor,So=(e,t,n,i)=>{for(var o=i>1?void 0:i?$h(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&_h(t,n,o),o};let en=class extends kt{constructor(){super(),this.router=new Dt,this.theme="sl-theme-light",this.router.setRoutes([{path:"/",component:"home-view"},{path:"/cells",component:"cells-view"},{path:"(.*)",component:"error-view"}])}renderMenu(){return E`
      <sl-dropdown>
        <sl-button slot="trigger" caret>
          <sl-icon src="${wh}"></sl-icon>
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
    `}firstUpdated(e){this.router.setOutlet(this.main)}updated(e){e.has("theme")&&(document.documentElement.className=this.theme)}};en.styles=[B`
      :host {
        height: 100%;
      }

      main {
        display: block;
        overflow: scroll;
        width: 100%;
        height: calc(100dvh - 40px);
      }
    `];So([vt()],en.prototype,"theme",2);So([et("main")],en.prototype,"main",2);en=So([ri("main-view")],en);
