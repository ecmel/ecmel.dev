var Ka=Object.defineProperty;var Ko=e=>{throw TypeError(e)};var Xa=(e,t,n)=>t in e?Ka(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var gt=(e,t,n)=>Xa(e,typeof t!="symbol"?t+"":t,n),Ci=(e,t,n)=>t.has(e)||Ko("Cannot "+n);var k=(e,t,n)=>(Ci(e,t,"read from private field"),n?n.call(e):t.get(e)),ut=(e,t,n)=>t.has(e)?Ko("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),J=(e,t,n,i)=>(Ci(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),S=(e,t,n)=>(Ci(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const as={block:"nearest",inline:"nearest"},ls={preventScroll:!0};function In(e,t=!1,n=1){let i=0;for(;e&&!(i>=n&&e.tabIndex>=0);)i++,e=t?e.previousElementSibling:e.nextElementSibling;return e}function Xo(e,t=!1,n=-1){var i,o;if(e){const r=t?(i=e.parentElement)==null?void 0:i.previousElementSibling:(o=e.parentElement)==null?void 0:o.nextElementSibling;if(r){const s=r.children.length-1;if(n===-1&&(n=t?s:0),n>=0&&n<=s)return In(t?r.lastElementChild:r.firstElementChild,t,t?s-n:n)}}return null}function Ga(e){var n;const t=(n=e==null?void 0:e.parentElement)==null?void 0:n.children;if(t){for(let i=0;i<t.length;i++)if(t.item(i)===e)return i}return-1}function Q(e){return e.currentTarget}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=globalThis,vo=Un.ShadowRoot&&(Un.ShadyCSS===void 0||Un.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bo=Symbol(),Go=new WeakMap;let cs=class{constructor(t,n,i){if(this._$cssResult$=!0,i!==bo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(vo&&t===void 0){const i=n!==void 0&&n.length===1;i&&(t=Go.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Go.set(n,t))}return t}toString(){return this.cssText}};const Za=e=>new cs(typeof e=="string"?e:e+"",void 0,bo),ht=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((i,o,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new cs(n,e,bo)},Ja=(e,t)=>{if(vo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const i=document.createElement("style"),o=Un.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=n.cssText,e.appendChild(i)}},Zo=vo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const i of t.cssRules)n+=i.cssText;return Za(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qa,defineProperty:tl,getOwnPropertyDescriptor:el,getOwnPropertyNames:nl,getOwnPropertySymbols:il,getPrototypeOf:ol}=Object,Kt=globalThis,Jo=Kt.trustedTypes,rl=Jo?Jo.emptyScript:"",ki=Kt.reactiveElementPolyfillSupport,tn=(e,t)=>e,Kn={toAttribute(e,t){switch(t){case Boolean:e=e?rl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},yo=(e,t)=>!Qa(e,t),Qo={attribute:!0,type:String,converter:Kn,reflect:!1,hasChanged:yo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Kt.litPropertyMetadata??(Kt.litPropertyMetadata=new WeakMap);let Se=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Qo){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,n);o!==void 0&&tl(this.prototype,t,o)}}static getPropertyDescriptor(t,n,i){const{get:o,set:r}=el(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);r.call(this,s),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Qo}static _$Ei(){if(this.hasOwnProperty(tn("elementProperties")))return;const t=ol(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tn("properties"))){const n=this.properties,i=[...nl(n),...il(n)];for(const o of i)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[i,o]of n)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const o=this._$Eu(n,i);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)n.unshift(Zo(o))}else t!==void 0&&n.push(Zo(t));return n}static _$Eu(t,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ja(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(t,n,i){this._$AK(t,i)}_$EC(t,n){var r;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Kn).toAttribute(n,i.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,n){var r;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:Kn;this._$Em=o,this[o]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??yo)(this[t],n))return;this.P(t,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,i){this._$AL.has(t)||this._$AL.set(t,n),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}};Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},Se[tn("elementProperties")]=new Map,Se[tn("finalized")]=new Map,ki==null||ki({ReactiveElement:Se}),(Kt.reactiveElementVersions??(Kt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en=globalThis,Xn=en.trustedTypes,tr=Xn?Xn.createPolicy("lit-html",{createHTML:e=>e}):void 0,us="$lit$",jt=`lit$${Math.random().toFixed(9).slice(2)}$`,ds="?"+jt,sl=`<${ds}>`,me=document,an=()=>me.createComment(""),ln=e=>e===null||typeof e!="object"&&typeof e!="function",wo=Array.isArray,al=e=>wo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ri=`[ 	
\f\r]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,er=/-->/g,nr=/>/g,re=RegExp(`>|${Ri}(?:([^\\s"'>=/]+)(${Ri}*=${Ri}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ir=/'/g,or=/"/g,hs=/^(?:script|style|textarea|title)$/i,ll=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Lt=ll(1),ge=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),rr=new WeakMap,ce=me.createTreeWalker(me,129);function fs(e,t){if(!wo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return tr!==void 0?tr.createHTML(t):t}const cl=(e,t)=>{const n=e.length-1,i=[];let o,r=t===2?"<svg>":t===3?"<math>":"",s=qe;for(let a=0;a<n;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===qe?u[1]==="!--"?s=er:u[1]!==void 0?s=nr:u[2]!==void 0?(hs.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=re):u[3]!==void 0&&(s=re):s===re?u[0]===">"?(s=o??qe,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?re:u[3]==='"'?or:ir):s===or||s===ir?s=re:s===er||s===nr?s=qe:(s=re,o=void 0);const h=s===re&&e[a+1].startsWith("/>")?" ":"";r+=s===qe?l+sl:d>=0?(i.push(c),l.slice(0,d)+us+l.slice(d)+jt+h):l+jt+(d===-2?a:h)}return[fs(e,r+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let ji=class ps{constructor({strings:t,_$litType$:n},i){let o;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[c,u]=cl(t,n);if(this.el=ps.createElement(c,i),ce.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=ce.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(us)){const f=u[s++],h=o.getAttribute(d).split(jt),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:p[2],strings:h,ctor:p[1]==="."?dl:p[1]==="?"?hl:p[1]==="@"?fl:ci}),o.removeAttribute(d)}else d.startsWith(jt)&&(l.push({type:6,index:r}),o.removeAttribute(d));if(hs.test(o.tagName)){const d=o.textContent.split(jt),f=d.length-1;if(f>0){o.textContent=Xn?Xn.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],an()),ce.nextNode(),l.push({type:2,index:++r});o.append(d[f],an())}}}else if(o.nodeType===8)if(o.data===ds)l.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(jt,d+1))!==-1;)l.push({type:7,index:r}),d+=jt.length-1}r++}}static createElement(t,n){const i=me.createElement("template");return i.innerHTML=t,i}};function Te(e,t,n=e,i){var s,a;if(t===ge)return t;let o=i!==void 0?(s=n.o)==null?void 0:s[i]:n.l;const r=ln(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),r===void 0?o=void 0:(o=new r(e),o._$AT(e,n,i)),i!==void 0?(n.o??(n.o=[]))[i]=o:n.l=o),o!==void 0&&(t=Te(e,o._$AS(e,t.values),o,i)),t}class ul{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:i}=this._$AD,o=((t==null?void 0:t.creationScope)??me).importNode(n,!0);ce.currentNode=o;let r=ce.nextNode(),s=0,a=0,l=i[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new wn(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new pl(r,this,t)),this._$AV.push(c),l=i[++a]}s!==(l==null?void 0:l.index)&&(r=ce.nextNode(),s++)}return ce.currentNode=me,o}p(t){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}class wn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,n,i,o){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=o,this.v=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Te(this,t,n),ln(t)?t===H||t==null||t===""?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==ge&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):al(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==H&&ln(this._$AH)?this._$AA.nextSibling.data=t:this.T(me.createTextNode(t)),this._$AH=t}$(t){var r;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ji.createElement(fs(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new ul(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let n=rr.get(t.strings);return n===void 0&&rr.set(t.strings,n=new ji(t)),n}k(t){wo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,o=0;for(const r of t)o===n.length?n.push(i=new wn(this.O(an()),this.O(an()),this,this.options)):i=n[o],i._$AI(r),o++;o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this.v=t,(n=this._$AP)==null||n.call(this,t))}}class ci{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,i,o,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(t,n=this,i,o){const r=this.strings;let s=!1;if(r===void 0)t=Te(this,t,n,0),s=!ln(t)||t!==this._$AH&&t!==ge,s&&(this._$AH=t);else{const a=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=Te(this,a[i+l],n,l),c===ge&&(c=this._$AH[l]),s||(s=!ln(c)||c!==this._$AH[l]),c===H?t=H:t!==H&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class dl extends ci{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class hl extends ci{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class fl extends ci{constructor(t,n,i,o,r){super(t,n,i,o,r),this.type=5}_$AI(t,n=this){if((t=Te(this,t,n,0)??H)===ge)return;const i=this._$AH,o=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==H&&(i===H||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class pl{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Te(this,t)}}const Pi=en.litHtmlPolyfillSupport;Pi==null||Pi(ji,wn),(en.litHtmlVersions??(en.litHtmlVersions=[])).push("3.2.0");const ml=(e,t,n)=>{const i=(n==null?void 0:n.renderBefore)??t;let o=i._$litPart$;if(o===void 0){const r=(n==null?void 0:n.renderBefore)??null;i._$litPart$=o=new wn(t.insertBefore(an(),r),r,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mt=class extends Se{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=ml(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return ge}};var rs;Mt._$litElement$=!0,Mt.finalized=!0,(rs=globalThis.litElementHydrateSupport)==null||rs.call(globalThis,{LitElement:Mt});const Oi=globalThis.litElementPolyfillSupport;Oi==null||Oi({LitElement:Mt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gl={attribute:!0,type:String,converter:Kn,reflect:!1,hasChanged:yo},vl=(e=gl,t,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(n.name,e),i==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.P(s,void 0,e),a}}}if(i==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+i)};function L(e){return(t,n)=>typeof n=="object"?vl(e,t,n):((i,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bl(e){return L({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ms=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gs(e,t){return(n,i,o)=>{const r=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(e))??null};return ms(n,i,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ui(e){return(t,n)=>{const{slot:i,selector:o}=e??{},r="slot"+(i?`[name=${i}]`:":not([name])");return ms(t,n,{get(){var l;const s=(l=this.renderRoot)==null?void 0:l.querySelector(r),a=(s==null?void 0:s.assignedElements(e))??[];return o===void 0?a:a.filter(c=>c.matches(o))}})}}const _n=ht`
  :host {
    box-sizing: border-box;
  }
`,vs=ht`
  :host {
    position: sticky;
    background-color: var(--sl-color-neutral-0);
    z-index: calc(var(--sl-z-index-drawer) - 60);
  }
`,cn="0";function sr(e){return e<0n?-e:e}function bs(e,t=2){return e*10n**BigInt(t)}function Gn(e,t=2){const n=bs(1n,t);return(e+e%n)/n}function yl(e){return e.replace(/(?:^-|([^0-9.,])+)/g,(t,n)=>n?"":t).split(/[.,]+/,2).join(".")||cn}function wl(e,t=2){const[n,i]=e.split(/\./,2);return BigInt((n||cn)+(i||"").padEnd(t,cn).slice(0,t))}function Ft(e,t=2){const n=10n**BigInt(t),i=(sr(e)%n).toString().padStart(t,"0").replace(/0+$/,"");return(e<0n?"-":"")+(sr(e)/n).toString()+(i?"."+i:"")}function _l(e,t){const[n,i]=e.split(/\./,2),o=BigInt(n||cn),r=t.formatToParts(o),s=t.formatToParts(parseFloat("-0."+(i||cn)));return(o===0n?s:r).reduce((a,{type:l,value:c})=>a+=l==="fraction"?r.some(({type:u})=>u==="compact")?c:s.reduce((u,{type:d,value:f})=>d==="fraction"?u=f:u,""):l==="minusSign"?e.startsWith("-")?c:"":c,"")}function ar(e,t=2){let n="",i="",o,r,s=[];function a(){i&&(s.push(wl(yl(i),t)),i="")}for(let l=0;l<e.length;l++)switch(n=e.charAt(l),n){case" ":case";":a();break;case"-":a(),i+=n;break;case"%":a(),o=s.pop()||0n,s.push(o/100n);break;case"+":a(),o=s.pop()||0n,r=s.pop()||0n,s.push(r+o);break;case"*":a(),o=s.pop()||0n,r=s.pop()||0n,s.push(Gn(r*o,t));break;case":":case"/":a(),o=s.pop()||0n,r=s.pop()||0n,s.push(o&&Gn(bs(r,t*2)/o,t));break;default:i+=n;break}return a(),s.length>1&&(s=[s.reduce((l,c)=>l+=c,0n)]),s.pop()||0n}var $n=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let ve=class extends Mt{constructor(){super(...arguments),this.lang="",this.value="",this.scale=2,this.notation="standard"}get locale(){return this.lang||document.documentElement.lang||void 0}get format(){return this._format||(this._format=Intl.NumberFormat(this.locale,{useGrouping:!0,notation:this.notation,minimumFractionDigits:this.scale,maximumFractionDigits:this.scale})),this._format}render(){return Lt`${_l(this.value,this.format)}`}willUpdate(t){(t.has("notation")||t.has("scale")||t.has("lang"))&&(this._format=void 0)}};ve.styles=[_n];$n([L({type:String})],ve.prototype,"lang",void 0);$n([L({type:String})],ve.prototype,"value",void 0);$n([L({type:Number})],ve.prototype,"scale",void 0);$n([L({type:String})],ve.prototype,"notation",void 0);ve=$n([Et("cell-format")],ve);var $l=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Wi=class extends Mt{render(){return Lt`<slot></slot>`}};Wi.styles=[_n,ht`
      :host {
        display: contents;
      }
    `];Wi=$l([Et("cell-group")],Wi);var Be=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Zt=class extends Mt{get label(){return this.textContent||""}get labels(){return this.items.map(t=>t.textContent||"")}constructor(){super(),this.value="",this.addEventListener("click",()=>this.selected=!this.selected)}render(){return Lt`<slot></slot>`}updated(t){super.updated(t),t.has("selected")&&this.dispatchEvent(new Event("selection",{bubbles:!0}))}};Zt.styles=[_n,ht`
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
    `];Be([L({type:String})],Zt.prototype,"value",void 0);Be([L({type:Boolean,reflect:!0})],Zt.prototype,"active",void 0);Be([L({type:Boolean,reflect:!0})],Zt.prototype,"selected",void 0);Be([L({type:Number})],Zt.prototype,"span",void 0);Be([ui()],Zt.prototype,"items",void 0);Zt=Be([Et("cell-option")],Zt);var ys=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Le=class extends Mt{constructor(){super(...arguments),this.columns="auto"}render(){return Lt`<slot></slot>`}willUpdate(t){super.willUpdate(t),t.has("columns")&&this.style.setProperty("--property-columns",`${this.columns}`)}};Le.styles=[_n,ht`
      :host {
        display: grid;
        grid-template-columns: var(--property-columns);
      }
    `];ys([L({type:String})],Le.prototype,"columns",void 0);Le=ys([Et("cell-grid")],Le);var xn=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let be=class extends Le{constructor(){super(),this.hide=!0,this.tabIndex=0,this.addEventListener("keydown",t=>this.handleKeyDown(t))}setPosition(t,n){Object.assign(this.style,{top:`${n}px`,left:`${t}px`})}reset(){this.active.forEach(t=>t.active=!1),this.selected.forEach(t=>t.selected=!1)}toggle(){this.active.forEach(t=>t.selected=!t.selected)}handleKeyDown(t){switch(t.key){case"ArrowDown":this.next(),t.preventDefault(),t.stopImmediatePropagation();break;case"ArrowUp":this.next(!0),t.preventDefault(),t.stopImmediatePropagation();break;case"Enter":this.toggle(),t.preventDefault(),t.stopImmediatePropagation();break;case"Escape":this.dispatchEvent(new Event("hide")),t.preventDefault(),t.stopImmediatePropagation()}}next(t=!1){const n=this.options;let i=this.active[0];if(i){i.active=!1;let o=n.indexOf(i)+(t?-1:1);o<0?o=0:o>n.length-1&&(o=n.length-1),i=n[o]}else i=n[0];i&&(i.active=!0,i.firstElementChild&&i.firstElementChild.scrollIntoView(as))}};be.styles=[...Le.styles,ht`
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
    `];xn([L({type:Boolean,reflect:!0})],be.prototype,"hide",void 0);xn([ui({selector:"cell-option[selected]"})],be.prototype,"selected",void 0);xn([ui({selector:"cell-option[active]"})],be.prototype,"active",void 0);xn([ui({selector:"cell-option"})],be.prototype,"options",void 0);be=xn([Et("cell-datalist")],be);var Ut=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let ot=class extends Mt{constructor(){super(...arguments),this.grow="0",this.shrink="1",this.basis="auto"}render(){return Lt`<slot></slot>`}willUpdate(t){super.willUpdate(t),(t.has("grow")||t.has("shrink")||t.has("basis"))&&this.style.setProperty("--property-flex",`${this.grow} ${this.shrink} ${this.basis}`)}};ot.styles=[_n,ht`
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
    `];Ut([L({type:String})],ot.prototype,"grow",void 0);Ut([L({type:String})],ot.prototype,"shrink",void 0);Ut([L({type:String})],ot.prototype,"basis",void 0);Ut([L({type:String})],ot.prototype,"flow",void 0);Ut([L({type:String})],ot.prototype,"wrap",void 0);Ut([L({type:Boolean})],ot.prototype,"gap",void 0);Ut([L({type:String})],ot.prototype,"justify",void 0);Ut([L({type:String})],ot.prototype,"align",void 0);ot=Ut([Et("cell-section")],ot);var _o=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let wt=class extends ot{willUpdate(t){super.willUpdate(t),t.has("span")&&(this.span?this.style.setProperty("grid-column-end",`span ${this.span}`):this.style.removeProperty("grid-column-end"))}};wt.styles=[...ot.styles,ht`
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
    `];_o([L({type:Boolean})],wt.prototype,"truncate",void 0);_o([L({type:Number})],wt.prototype,"span",void 0);wt=_o([Et("cell-item")],wt);var xl=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let qi=class extends wt{};qi.styles=[...wt.styles,vs,ht`
      :host {
        top: 0;
        border-top: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
        font-weight: var(--sl-font-weight-semibold);
      }
    `];qi=xl([Et("cell-header")],qi);var Al=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Yi=class extends wt{};Yi.styles=[...wt.styles,vs,ht`
      :host {
        bottom: 0;
        margin-top: 4px;
        border-top: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
        font-weight: var(--sl-font-weight-semibold);
      }
    `];Yi=Al([Et("cell-footer")],Yi);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lr(e,t,n){return e?t(e):n==null?void 0:n(e)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const El=e=>e??H;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Cl=e=>(...t)=>({_$litDirective$:e,values:t});let kl=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this.t=t,this._$AM=n,this.i=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws="important",Rl=" !"+ws,Pl=Cl(class extends kl{constructor(e){var t;if(super(e),e.type!==Sl.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const i=e[n];return i==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?n.removeProperty(i):n[i]=null);for(const i in t){const o=t[i];if(o!=null){this.ft.add(i);const r=typeof o=="string"&&o.endsWith(Rl);i.includes("-")||r?n.setProperty(i,r?o.slice(0,-11):o,r?ws:""):n[i]=o}}return ge}});var zt=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let rt=class extends wt{get selectionStart(){var t;return((t=this.input)==null?void 0:t.selectionStart)||null}get selectionEnd(){var t;return((t=this.input)==null?void 0:t.selectionEnd)||null}constructor(){super(),this.type="text",this.value="",this.mirrorWidth=0,this.oldIndex=-1,this.tabIndex=0,this.addEventListener("focus",t=>this.handleFocus(t)),this.addEventListener("blur",t=>this.handleBlur(t)),this.addEventListener("keydown",t=>this.handleKeyDown(t))}canLeave(t=!1){const n=this.selectionEnd,i=this.selectionStart;return n==null||i===null||t&&n===0||!t&&i===this.value.length}handleKeyDown(t){}handleFocus(t){this.focused=!0}handleBlur(t){this.focused=!1}adjustWidth(){var t;this.auto&&(this.mirrorWidth=((t=this.mirror)==null?void 0:t.offsetWidth)||0)}renderFocused(){return Lt`<slot name="value"></slot
      ><input
        .type="${this.type}"
        .value="${this.value}"
        class="input"
        autocomplete="off"
        size="1"
        inputmode="${El(this.inputMode)}"
        style=${Pl({minWidth:this.mirrorWidth+"px"})}
        @input="${t=>{this.value=Q(t).value}}"
        @change="${()=>{this.dispatchEvent(new Event("change"))}}"
        @keyup="${()=>{this.adjustWidth()}}"
        @keydown="${t=>{t.key==="Tab"&&t.shiftKey&&(this.oldIndex=this.tabIndex,this.tabIndex=-1)}}"
        @focus="${()=>{this.adjustWidth()}}"
        @blur="${()=>{this.oldIndex!==-1&&(this.tabIndex=this.oldIndex,this.oldIndex=-1),this.mirrorWidth=0}}"
      />${lr(this.auto,()=>Lt`<span class="mirror">${this.value}</span>`)}`}render(){return Lt`${lr(this.focused&&!this.readonly,()=>this.renderFocused(),()=>Lt`<slot>${this.value}</slot>`)}`}updated(t){var n;super.updated(t),t.has("focused")&&this.focused&&!this.readonly&&((n=this.input)==null||n.focus(ls))}};rt.styles=[...wt.styles,ht`
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
    `];zt([L({type:Boolean,reflect:!0})],rt.prototype,"focused",void 0);zt([L({type:String})],rt.prototype,"type",void 0);zt([L({type:String})],rt.prototype,"value",void 0);zt([L({type:Boolean})],rt.prototype,"readonly",void 0);zt([L({type:Boolean})],rt.prototype,"auto",void 0);zt([bl()],rt.prototype,"mirrorWidth",void 0);zt([gs(".mirror")],rt.prototype,"mirror",void 0);zt([gs(".input")],rt.prototype,"input",void 0);rt=zt([Et("cell-input")],rt);const un=Math.min,dt=Math.max,Zn=Math.round,On=Math.floor,Jt=e=>({x:e,y:e}),Ol={left:"right",right:"left",bottom:"top",top:"bottom"},Tl={start:"end",end:"start"};function di(e,t){return typeof e=="function"?e(t):e}function ye(e){return e.split("-")[0]}function An(e){return e.split("-")[1]}function Ll(e){return e==="x"?"y":"x"}function _s(e){return e==="y"?"height":"width"}function Me(e){return["top","bottom"].includes(ye(e))?"y":"x"}function $s(e){return Ll(Me(e))}function Ml(e,t,n){n===void 0&&(n=!1);const i=An(e),o=$s(e),r=_s(o);let s=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=Jn(s)),[s,Jn(s)]}function Dl(e){const t=Jn(e);return[Ki(e),t,Ki(t)]}function Ki(e){return e.replace(/start|end/g,t=>Tl[t])}function Nl(e,t,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:i:t?i:o;case"left":case"right":return t?r:s;default:return[]}}function Il(e,t,n,i){const o=An(e);let r=Nl(ye(e),n==="start",i);return o&&(r=r.map(s=>s+"-"+o),t&&(r=r.concat(r.map(Ki)))),r}function Jn(e){return e.replace(/left|right|bottom|top/g,t=>Ol[t])}function Ul(e){return{top:0,right:0,bottom:0,left:0,...e}}function zl(e){return typeof e!="number"?Ul(e):{top:e,right:e,bottom:e,left:e}}function Qn(e){const{x:t,y:n,width:i,height:o}=e;return{width:i,height:o,top:n,left:t,right:t+i,bottom:n+o,x:t,y:n}}function cr(e,t,n){let{reference:i,floating:o}=e;const r=Me(t),s=$s(t),a=_s(s),l=ye(t),c=r==="y",u=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,f=i[a]/2-o[a]/2;let h;switch(l){case"top":h={x:u,y:i.y-o.height};break;case"bottom":h={x:u,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:d};break;case"left":h={x:i.x-o.width,y:d};break;default:h={x:i.x,y:i.y}}switch(An(t)){case"start":h[s]-=f*(n&&c?-1:1);break;case"end":h[s]+=f*(n&&c?-1:1);break}return h}const Bl=async(e,t,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:s}=n,a=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=cr(c,i,l),f=i,h={},p=0;for(let g=0;g<a.length;g++){const{name:y,fn:v}=a[g],{x:w,y:$,data:_,reset:A}=await v({x:u,y:d,initialPlacement:i,placement:f,strategy:o,middlewareData:h,rects:c,platform:s,elements:{reference:e,floating:t}});u=w??u,d=$??d,h={...h,[y]:{...h[y],..._}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(f=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):A.rects),{x:u,y:d}=cr(c,f,l)),g=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}};async function xs(e,t){var n;t===void 0&&(t={});const{x:i,y:o,platform:r,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=di(t,e),p=zl(h),y=a[f?d==="floating"?"reference":"floating":d],v=Qn(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(y)))==null||n?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),w=d==="floating"?{x:i,y:o,width:s.floating.width,height:s.floating.height}:s.reference,$=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),_=await(r.isElement==null?void 0:r.isElement($))?await(r.getScale==null?void 0:r.getScale($))||{x:1,y:1}:{x:1,y:1},A=Qn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:$,strategy:l}):w);return{top:(v.top-A.top+p.top)/_.y,bottom:(A.bottom-v.bottom+p.bottom)/_.y,left:(v.left-A.left+p.left)/_.x,right:(A.right-v.right+p.right)/_.x}}const Fl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:o,middlewareData:r,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...y}=di(e,t);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const v=ye(o),w=Me(a),$=ye(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=f||($||!g?[Jn(a)]:Dl(a)),R=p!=="none";!f&&R&&A.push(...Il(a,g,p,_));const D=[a,...A],T=await xs(t,y),C=[];let E=((i=r.flip)==null?void 0:i.overflows)||[];if(u&&C.push(T[v]),d){const U=Ml(o,s,_);C.push(T[U[0]],T[U[1]])}if(E=[...E,{placement:o,overflows:C}],!C.every(U=>U<=0)){var P,I;const U=(((P=r.flip)==null?void 0:P.index)||0)+1,Tt=D[U];if(Tt)return{data:{index:U,overflows:E},reset:{placement:Tt}};let Z=(I=E.filter(W=>W.overflows[0]<=0).sort((W,q)=>W.overflows[1]-q.overflows[1])[0])==null?void 0:I.placement;if(!Z)switch(h){case"bestFit":{var F;const W=(F=E.filter(q=>{if(R){const Y=Me(q.placement);return Y===w||Y==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(Y=>Y>0).reduce((Y,Si)=>Y+Si,0)]).sort((q,Y)=>q[1]-Y[1])[0])==null?void 0:F[0];W&&(Z=W);break}case"initialPlacement":Z=a;break}if(o!==Z)return{reset:{placement:Z}}}return{}}}};async function Hl(e,t){const{placement:n,platform:i,elements:o}=e,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),s=ye(n),a=An(n),l=Me(n)==="y",c=["left","top"].includes(s)?-1:1,u=r&&l?-1:1,d=di(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof p=="number"&&(h=a==="end"?p*-1:p),l?{x:h*u,y:f*c}:{x:f*c,y:h*u}}const Vl=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,i;const{x:o,y:r,placement:s,middlewareData:a}=t,l=await Hl(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:o+l.x,y:r+l.y,data:{...l,placement:s}}}}},jl=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,i;const{placement:o,rects:r,platform:s,elements:a}=t,{apply:l=()=>{},...c}=di(e,t),u=await xs(t,c),d=ye(o),f=An(o),h=Me(o)==="y",{width:p,height:g}=r.floating;let y,v;d==="top"||d==="bottom"?(y=d,v=f===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(v=d,y=f==="end"?"top":"bottom");const w=g-u.top-u.bottom,$=p-u.left-u.right,_=un(g-u[y],w),A=un(p-u[v],$),R=!t.middlewareData.shift;let D=_,T=A;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(T=$),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(D=w),R&&!f){const E=dt(u.left,0),P=dt(u.right,0),I=dt(u.top,0),F=dt(u.bottom,0);h?T=p-2*(E!==0||P!==0?E+P:dt(u.left,u.right)):D=g-2*(I!==0||F!==0?I+F:dt(u.top,u.bottom))}await l({...t,availableWidth:T,availableHeight:D});const C=await s.getDimensions(a.floating);return p!==C.width||g!==C.height?{reset:{rects:!0}}:{}}}};function hi(){return typeof window<"u"}function Fe(e){return As(e)?(e.nodeName||"").toLowerCase():"#document"}function nt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Pt(e){var t;return(t=(As(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function As(e){return hi()?e instanceof Node||e instanceof nt(e).Node:!1}function _t(e){return hi()?e instanceof Element||e instanceof nt(e).Element:!1}function kt(e){return hi()?e instanceof HTMLElement||e instanceof nt(e).HTMLElement:!1}function ur(e){return!hi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof nt(e).ShadowRoot}function En(e){const{overflow:t,overflowX:n,overflowY:i,display:o}=$t(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(o)}function Wl(e){return["table","td","th"].includes(Fe(e))}function fi(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function $o(e){const t=xo(),n=_t(e)?$t(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function ql(e){let t=Qt(e);for(;kt(t)&&!De(t);){if($o(t))return t;if(fi(t))return null;t=Qt(t)}return null}function xo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function De(e){return["html","body","#document"].includes(Fe(e))}function $t(e){return nt(e).getComputedStyle(e)}function pi(e){return _t(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Qt(e){if(Fe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ur(e)&&e.host||Pt(e);return ur(t)?t.host:t}function Es(e){const t=Qt(e);return De(t)?e.ownerDocument?e.ownerDocument.body:e.body:kt(t)&&En(t)?t:Es(t)}function dn(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Es(e),r=o===((i=e.ownerDocument)==null?void 0:i.body),s=nt(o);if(r){const a=Xi(s);return t.concat(s,s.visualViewport||[],En(o)?o:[],a&&n?dn(a):[])}return t.concat(o,dn(o,[],n))}function Xi(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ss(e){const t=$t(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=kt(e),r=o?e.offsetWidth:n,s=o?e.offsetHeight:i,a=Zn(n)!==r||Zn(i)!==s;return a&&(n=r,i=s),{width:n,height:i,$:a}}function Ao(e){return _t(e)?e:e.contextElement}function Re(e){const t=Ao(e);if(!kt(t))return Jt(1);const n=t.getBoundingClientRect(),{width:i,height:o,$:r}=Ss(t);let s=(r?Zn(n.width):n.width)/i,a=(r?Zn(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Yl=Jt(0);function Cs(e){const t=nt(e);return!xo()||!t.visualViewport?Yl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Kl(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==nt(e)?!1:t}function we(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=Ao(e);let s=Jt(1);t&&(i?_t(i)&&(s=Re(i)):s=Re(e));const a=Kl(r,n,i)?Cs(r):Jt(0);let l=(o.left+a.x)/s.x,c=(o.top+a.y)/s.y,u=o.width/s.x,d=o.height/s.y;if(r){const f=nt(r),h=i&&_t(i)?nt(i):i;let p=f,g=Xi(p);for(;g&&i&&h!==p;){const y=Re(g),v=g.getBoundingClientRect(),w=$t(g),$=v.left+(g.clientLeft+parseFloat(w.paddingLeft))*y.x,_=v.top+(g.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=$,c+=_,p=nt(g),g=Xi(p)}}return Qn({width:u,height:d,x:l,y:c})}function Xl(e){let{elements:t,rect:n,offsetParent:i,strategy:o}=e;const r=o==="fixed",s=Pt(i),a=t?fi(t.floating):!1;if(i===s||a&&r)return n;let l={scrollLeft:0,scrollTop:0},c=Jt(1);const u=Jt(0),d=kt(i);if((d||!d&&!r)&&((Fe(i)!=="body"||En(s))&&(l=pi(i)),kt(i))){const f=we(i);c=Re(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}}function Gl(e){return Array.from(e.getClientRects())}function Gi(e,t){const n=pi(e).scrollLeft;return t?t.left+n:we(Pt(e)).left+n}function Zl(e){const t=Pt(e),n=pi(e),i=e.ownerDocument.body,o=dt(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=dt(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Gi(e);const a=-n.scrollTop;return $t(i).direction==="rtl"&&(s+=dt(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:s,y:a}}function Jl(e,t){const n=nt(e),i=Pt(e),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,a=0,l=0;if(o){r=o.width,s=o.height;const c=xo();(!c||c&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:r,height:s,x:a,y:l}}function Ql(e,t){const n=we(e,!0,t==="fixed"),i=n.top+e.clientTop,o=n.left+e.clientLeft,r=kt(e)?Re(e):Jt(1),s=e.clientWidth*r.x,a=e.clientHeight*r.y,l=o*r.x,c=i*r.y;return{width:s,height:a,x:l,y:c}}function dr(e,t,n){let i;if(t==="viewport")i=Jl(e,n);else if(t==="document")i=Zl(Pt(e));else if(_t(t))i=Ql(t,n);else{const o=Cs(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return Qn(i)}function ks(e,t){const n=Qt(e);return n===t||!_t(n)||De(n)?!1:$t(n).position==="fixed"||ks(n,t)}function tc(e,t){const n=t.get(e);if(n)return n;let i=dn(e,[],!1).filter(a=>_t(a)&&Fe(a)!=="body"),o=null;const r=$t(e).position==="fixed";let s=r?Qt(e):e;for(;_t(s)&&!De(s);){const a=$t(s),l=$o(s);!l&&a.position==="fixed"&&(o=null),(r?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||En(s)&&!l&&ks(e,s))?i=i.filter(u=>u!==s):o=a,s=Qt(s)}return t.set(e,i),i}function ec(e){let{element:t,boundary:n,rootBoundary:i,strategy:o}=e;const s=[...n==="clippingAncestors"?fi(t)?[]:tc(t,this._c):[].concat(n),i],a=s[0],l=s.reduce((c,u)=>{const d=dr(t,u,o);return c.top=dt(d.top,c.top),c.right=un(d.right,c.right),c.bottom=un(d.bottom,c.bottom),c.left=dt(d.left,c.left),c},dr(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function nc(e){const{width:t,height:n}=Ss(e);return{width:t,height:n}}function ic(e,t,n){const i=kt(t),o=Pt(t),r=n==="fixed",s=we(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=Jt(0);if(i||!i&&!r)if((Fe(t)!=="body"||En(o))&&(a=pi(t)),i){const h=we(t,!0,r,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else o&&(l.x=Gi(o));let c=0,u=0;if(o&&!i&&!r){const h=o.getBoundingClientRect();u=h.top+a.scrollTop,c=h.left+a.scrollLeft-Gi(o,h)}const d=s.left+a.scrollLeft-l.x-c,f=s.top+a.scrollTop-l.y-u;return{x:d,y:f,width:s.width,height:s.height}}function Ti(e){return $t(e).position==="static"}function hr(e,t){if(!kt(e)||$t(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Pt(e)===n&&(n=n.ownerDocument.body),n}function Rs(e,t){const n=nt(e);if(fi(e))return n;if(!kt(e)){let o=Qt(e);for(;o&&!De(o);){if(_t(o)&&!Ti(o))return o;o=Qt(o)}return n}let i=hr(e,t);for(;i&&Wl(i)&&Ti(i);)i=hr(i,t);return i&&De(i)&&Ti(i)&&!$o(i)?n:i||ql(e)||n}const oc=async function(e){const t=this.getOffsetParent||Rs,n=this.getDimensions,i=await n(e.floating);return{reference:ic(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function rc(e){return $t(e).direction==="rtl"}const sc={convertOffsetParentRelativeRectToViewportRelativeRect:Xl,getDocumentElement:Pt,getClippingRect:ec,getOffsetParent:Rs,getElementRects:oc,getClientRects:Gl,getDimensions:nc,getScale:Re,isElement:_t,isRTL:rc};function ac(e,t){let n=null,i;const o=Pt(e);function r(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(a||t(),!d||!f)return;const h=On(u),p=On(o.clientWidth-(c+d)),g=On(o.clientHeight-(u+f)),y=On(c),w={rootMargin:-h+"px "+-p+"px "+-g+"px "+-y+"px",threshold:dt(0,un(1,l))||1};let $=!0;function _(A){const R=A[0].intersectionRatio;if(R!==l){if(!$)return s();R?s(!1,R):i=setTimeout(()=>{s(!1,1e-7)},1e3)}$=!1}try{n=new IntersectionObserver(_,{...w,root:o.ownerDocument})}catch{n=new IntersectionObserver(_,w)}n.observe(e)}return s(!0),r}function lc(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Ao(e),u=o||r?[...c?dn(c):[],...dn(t)]:[];u.forEach(v=>{o&&v.addEventListener("scroll",n,{passive:!0}),r&&v.addEventListener("resize",n)});const d=c&&a?ac(c,n):null;let f=-1,h=null;s&&(h=new ResizeObserver(v=>{let[w]=v;w&&w.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var $;($=h)==null||$.observe(t)})),n()}),c&&!l&&h.observe(c),h.observe(t));let p,g=l?we(e):null;l&&y();function y(){const v=we(e);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&n(),g=v,p=requestAnimationFrame(y)}return n(),()=>{var v;u.forEach(w=>{o&&w.removeEventListener("scroll",n),r&&w.removeEventListener("resize",n)}),d==null||d(),(v=h)==null||v.disconnect(),h=null,l&&cancelAnimationFrame(p)}}const cc=Vl,uc=Fl,dc=jl,hc=(e,t,n)=>{const i=new Map,o={platform:sc,...n},r={...o.platform,_c:i};return Bl(e,t,{...o,platform:r})};var mi=function(e,t,n,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Ne=class extends rt{constructor(){super(...arguments),this.placement="bottom-start",this.sizeOptions={apply:({availableWidth:t,availableHeight:n,elements:i})=>{Object.assign(i.floating.style,{maxWidth:`${Math.max(192,t-16)}px`,maxHeight:`${Math.max(192,n-16)}px`})}},this.handleListPosition=()=>{this.datalist&&(this.stretch&&this.datalist.style.setProperty("min-width",`${this.offsetWidth-2}px`),hc(this,this.datalist,{placement:this.placement,strategy:"absolute",middleware:[cc(4),uc(),dc(this.sizeOptions)]}).then(({x:t,y:n})=>{this.datalist&&(this.datalist.setPosition(t,n),this.datalist.hide=!1)}))},this.handleLisHide=()=>{this.hide(!0)},this.handleListSelection=()=>{this.dispatchEvent(new Event("selection"))},this.handleElementBlur=t=>{const n=t.relatedTarget;if(n===this)return;let i=n;for(;i;){if(i===this.datalist){n.addEventListener("blur",this.handleElementBlur,{once:!0});return}i=i.parentElement}this.hide()}}get selected(){return this.datalist?this.datalist.selected:[]}show(){this.datalist&&!this.dispose&&(this.datalist.addEventListener("hide",this.handleLisHide),this.datalist.addEventListener("selection",this.handleListSelection),this.dispose=lc(this,this.datalist,this.handleListPosition))}hide(t=!1){this.datalist&&this.dispose&&(this.datalist.removeEventListener("hide",this.handleLisHide),this.datalist.removeEventListener("selection",this.handleListSelection),this.dispose(),this.dispose=null,this.datalist.hide=!0,this.focused=t,this.dispatchEvent(new Event("hide")))}reset(){this.datalist&&this.datalist.reset()}handleBlur(t){this.dispose?this.handleElementBlur(t):super.handleBlur(t)}handleKeyDown(t){this.datalist&&this.dispose?this.datalist.handleKeyDown(t):super.handleKeyDown(t)}willUpdate(t){if(super.willUpdate(t),t.has("list"))if(this.list){const n=this.getRootNode();this.datalist=n.querySelector(`#${this.list}`)}else this.datalist=void 0}};Ne.styles=[...rt.styles,ht``];mi([L({type:String})],Ne.prototype,"list",void 0);mi([L({type:String})],Ne.prototype,"placement",void 0);mi([L({type:Boolean})],Ne.prototype,"stretch",void 0);Ne=mi([Et("cell-select")],Ne);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zn=globalThis,Eo=zn.ShadowRoot&&(zn.ShadyCSS===void 0||zn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,So=Symbol(),fr=new WeakMap;let Ps=class{constructor(t,n,i){if(this._$cssResult$=!0,i!==So)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Eo&&t===void 0){const i=n!==void 0&&n.length===1;i&&(t=fr.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&fr.set(n,t))}return t}toString(){return this.cssText}};const fc=e=>new Ps(typeof e=="string"?e:e+"",void 0,So),V=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((i,o,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new Ps(n,e,So)},pc=(e,t)=>{if(Eo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const i=document.createElement("style"),o=zn.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=n.cssText,e.appendChild(i)}},pr=Eo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const i of t.cssRules)n+=i.cssText;return fc(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mc,defineProperty:gc,getOwnPropertyDescriptor:vc,getOwnPropertyNames:bc,getOwnPropertySymbols:yc,getPrototypeOf:wc}=Object,Xt=globalThis,mr=Xt.trustedTypes,_c=mr?mr.emptyScript:"",Li=Xt.reactiveElementPolyfillSupport,nn=(e,t)=>e,Ie={toAttribute(e,t){switch(t){case Boolean:e=e?_c:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},gi=(e,t)=>!mc(e,t),gr={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:gi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Xt.litPropertyMetadata??(Xt.litPropertyMetadata=new WeakMap);class Ce extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=gr){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,n);o!==void 0&&gc(this.prototype,t,o)}}static getPropertyDescriptor(t,n,i){const{get:o,set:r}=vc(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);r.call(this,s),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gr}static _$Ei(){if(this.hasOwnProperty(nn("elementProperties")))return;const t=wc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(nn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(nn("properties"))){const n=this.properties,i=[...bc(n),...yc(n)];for(const o of i)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[i,o]of n)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const o=this._$Eu(n,i);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)n.unshift(pr(o))}else t!==void 0&&n.push(pr(t));return n}static _$Eu(t,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pc(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(t,n,i){this._$AK(t,i)}_$EC(t,n){var r;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Ie).toAttribute(n,i.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,n){var r;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:Ie;this._$Em=o,this[o]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??gi)(this[t],n))return;this.P(t,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,i){this._$AL.has(t)||this._$AL.set(t,n),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}Ce.elementStyles=[],Ce.shadowRootOptions={mode:"open"},Ce[nn("elementProperties")]=new Map,Ce[nn("finalized")]=new Map,Li==null||Li({ReactiveElement:Ce}),(Xt.reactiveElementVersions??(Xt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const on=globalThis,ti=on.trustedTypes,vr=ti?ti.createPolicy("lit-html",{createHTML:e=>e}):void 0,Os="$lit$",Wt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ts="?"+Wt,$c=`<${Ts}>`,_e=document,hn=()=>_e.createComment(""),fn=e=>e===null||typeof e!="object"&&typeof e!="function",Co=Array.isArray,xc=e=>Co(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Mi=`[ 	
\f\r]`,Ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,br=/-->/g,yr=/>/g,se=RegExp(`>|${Mi}(?:([^\\s"'>=/]+)(${Mi}*=${Mi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wr=/'/g,_r=/"/g,Ls=/^(?:script|style|textarea|title)$/i,Ac=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),O=Ac(1),yt=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),$r=new WeakMap,ue=_e.createTreeWalker(_e,129);function Ms(e,t){if(!Co(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return vr!==void 0?vr.createHTML(t):t}const Ec=(e,t)=>{const n=e.length-1,i=[];let o,r=t===2?"<svg>":t===3?"<math>":"",s=Ye;for(let a=0;a<n;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Ye?u[1]==="!--"?s=br:u[1]!==void 0?s=yr:u[2]!==void 0?(Ls.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=se):u[3]!==void 0&&(s=se):s===se?u[0]===">"?(s=o??Ye,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?se:u[3]==='"'?_r:wr):s===_r||s===wr?s=se:s===br||s===yr?s=Ye:(s=se,o=void 0);const h=s===se&&e[a+1].startsWith("/>")?" ":"";r+=s===Ye?l+$c:d>=0?(i.push(c),l.slice(0,d)+Os+l.slice(d)+Wt+h):l+Wt+(d===-2?a:h)}return[Ms(e,r+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class pn{constructor({strings:t,_$litType$:n},i){let o;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[c,u]=Ec(t,n);if(this.el=pn.createElement(c,i),ue.currentNode=this.el.content,n===2||n===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=ue.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Os)){const f=u[s++],h=o.getAttribute(d).split(Wt),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:p[2],strings:h,ctor:p[1]==="."?Cc:p[1]==="?"?kc:p[1]==="@"?Rc:vi}),o.removeAttribute(d)}else d.startsWith(Wt)&&(l.push({type:6,index:r}),o.removeAttribute(d));if(Ls.test(o.tagName)){const d=o.textContent.split(Wt),f=d.length-1;if(f>0){o.textContent=ti?ti.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],hn()),ue.nextNode(),l.push({type:2,index:++r});o.append(d[f],hn())}}}else if(o.nodeType===8)if(o.data===Ts)l.push({type:2,index:r});else{let d=-1;for(;(d=o.data.indexOf(Wt,d+1))!==-1;)l.push({type:7,index:r}),d+=Wt.length-1}r++}}static createElement(t,n){const i=_e.createElement("template");return i.innerHTML=t,i}}function Ue(e,t,n=e,i){var s,a;if(t===yt)return t;let o=i!==void 0?(s=n._$Co)==null?void 0:s[i]:n._$Cl;const r=fn(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),r===void 0?o=void 0:(o=new r(e),o._$AT(e,n,i)),i!==void 0?(n._$Co??(n._$Co=[]))[i]=o:n._$Cl=o),o!==void 0&&(t=Ue(e,o._$AS(e,t.values),o,i)),t}class Sc{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:i}=this._$AD,o=((t==null?void 0:t.creationScope)??_e).importNode(n,!0);ue.currentNode=o;let r=ue.nextNode(),s=0,a=0,l=i[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Sn(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new Pc(r,this,t)),this._$AV.push(c),l=i[++a]}s!==(l==null?void 0:l.index)&&(r=ue.nextNode(),s++)}return ue.currentNode=_e,o}p(t){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}class Sn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,i,o){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Ue(this,t,n),fn(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==yt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==z&&fn(this._$AH)?this._$AA.nextSibling.data=t:this.T(_e.createTextNode(t)),this._$AH=t}$(t){var r;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=pn.createElement(Ms(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new Sc(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let n=$r.get(t.strings);return n===void 0&&$r.set(t.strings,n=new pn(t)),n}k(t){Co(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,o=0;for(const r of t)o===n.length?n.push(i=new Sn(this.O(hn()),this.O(hn()),this,this.options)):i=n[o],i._$AI(r),o++;o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class vi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,i,o,r){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}_$AI(t,n=this,i,o){const r=this.strings;let s=!1;if(r===void 0)t=Ue(this,t,n,0),s=!fn(t)||t!==this._$AH&&t!==yt,s&&(this._$AH=t);else{const a=t;let l,c;for(t=r[0],l=0;l<r.length-1;l++)c=Ue(this,a[i+l],n,l),c===yt&&(c=this._$AH[l]),s||(s=!fn(c)||c!==this._$AH[l]),c===z?t=z:t!==z&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Cc extends vi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}class kc extends vi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}class Rc extends vi{constructor(t,n,i,o,r){super(t,n,i,o,r),this.type=5}_$AI(t,n=this){if((t=Ue(this,t,n,0)??z)===yt)return;const i=this._$AH,o=t===z&&i!==z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==z&&(i===z||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class Pc{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ue(this,t)}}const Di=on.litHtmlPolyfillSupport;Di==null||Di(pn,Sn),(on.litHtmlVersions??(on.litHtmlVersions=[])).push("3.2.1");const Oc=(e,t,n)=>{const i=(n==null?void 0:n.renderBefore)??t;let o=i._$litPart$;if(o===void 0){const r=(n==null?void 0:n.renderBefore)??null;i._$litPart$=o=new Sn(t.insertBefore(hn(),r),r,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dt=class extends Ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Oc(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return yt}};var ss;Dt._$litElement$=!0,Dt.finalized=!0,(ss=globalThis.litElementHydrateSupport)==null||ss.call(globalThis,{LitElement:Dt});const Ni=globalThis.litElementPolyfillSupport;Ni==null||Ni({LitElement:Dt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var Tc=V`
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
`;const Zi=new Set,ke=new Map;let ae,ko="ltr",Ro="en";const Ds=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ds){const e=new MutationObserver(Is);ko=document.documentElement.dir||"ltr",Ro=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ns(...e){e.map(t=>{const n=t.$code.toLowerCase();ke.has(n)?ke.set(n,Object.assign(Object.assign({},ke.get(n)),t)):ke.set(n,t),ae||(ae=t)}),Is()}function Is(){Ds&&(ko=document.documentElement.dir||"ltr",Ro=document.documentElement.lang||navigator.language),[...Zi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Lc=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Zi.add(this.host)}hostDisconnected(){Zi.delete(this.host)}dir(){return`${this.host.dir||ko}`.toLowerCase()}lang(){return`${this.host.lang||Ro}`.toLowerCase()}getTranslationData(t){var n,i;const o=new Intl.Locale(t.replace(/_/g,"-")),r=o==null?void 0:o.language.toLowerCase(),s=(i=(n=o==null?void 0:o.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&i!==void 0?i:"",a=ke.get(`${r}-${s}`),l=ke.get(r);return{locale:o,language:r,region:s,primary:a,secondary:l}}exists(t,n){var i;const{primary:o,secondary:r}=this.getTranslationData((i=n.lang)!==null&&i!==void 0?i:this.lang());return n=Object.assign({includeFallback:!1},n),!!(o&&o[t]||r&&r[t]||n.includeFallback&&ae&&ae[t])}term(t,...n){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let r;if(i&&i[t])r=i[t];else if(o&&o[t])r=o[t];else if(ae&&ae[t])r=ae[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...n):r}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,n)}};var Us={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ns(Us);var Mc=Us,Cn=class extends Lc{};Ns(Mc);var ft=V`
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
`,zs=Object.defineProperty,Dc=Object.defineProperties,Nc=Object.getOwnPropertyDescriptor,Ic=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertySymbols,Uc=Object.prototype.hasOwnProperty,zc=Object.prototype.propertyIsEnumerable,Ar=(e,t,n)=>t in e?zs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ae=(e,t)=>{for(var n in t||(t={}))Uc.call(t,n)&&Ar(e,n,t[n]);if(xr)for(var n of xr(t))zc.call(t,n)&&Ar(e,n,t[n]);return e},bi=(e,t)=>Dc(e,Ic(t)),m=(e,t,n,i)=>{for(var o=i>1?void 0:i?Nc(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&zs(t,n,o),o},Bs=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},Bc=(e,t,n)=>(Bs(e,t,"read from private field"),t.get(e)),Fc=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Hc=(e,t,n,i)=>(Bs(e,t,"write to private field"),t.set(e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vc={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:gi},jc=(e=Vc,t,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(n.name,e),i==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.P(s,void 0,e),a}}}if(i==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+i)};function b(e){return(t,n)=>typeof n=="object"?jc(e,t,n):((i,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(e){return b({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wc=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function st(e,t){return(n,i,o)=>{const r=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(e))??null};return Wc(n,i,{get(){return r(this)}})}}var Bn,K=class extends Dt{constructor(){super(),Fc(this,Bn,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const n=new CustomEvent(e,Ae({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){const i=customElements.get(e);if(!i){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let o=" (unknown version)",r=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in i&&i.version&&(r=" v"+i.version),!(o&&r&&o===r)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${r} has already been registered.`)}attributeChangedCallback(e,t,n){Bc(this,Bn)||(this.constructor.elementProperties.forEach((i,o)=>{i.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),Hc(this,Bn,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};Bn=new WeakMap;K.version="2.17.1";K.dependencies={};m([b()],K.prototype,"dir",2);m([b()],K.prototype,"lang",2);var wi=class extends K{constructor(){super(...arguments),this.localize=new Cn(this)}render(){return O`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};wi.styles=[ft,Tc];var Ke=new WeakMap,Xe=new WeakMap,Ge=new WeakMap,Ii=new WeakSet,Tn=new WeakMap,Fs=class{constructor(e,t){this.handleFormData=n=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!s&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(a=>{n.formData.append(o,a.toString())}):n.formData.append(o,r.toString()))},this.handleFormSubmit=n=>{var i;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Ke.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Tn.set(this.host,[])},this.handleInteraction=n=>{const i=Tn.get(this.host);i.includes(n.type)||i.push(n.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const i of n)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const i of n)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Ae({form:n=>{const i=n.form;if(i){const r=n.getRootNode().querySelector(`#${i}`);if(r)return r}return n.closest("form")},name:n=>n.name,value:n=>n.value,defaultValue:n=>n.defaultValue,disabled:n=>{var i;return(i=n.disabled)!=null?i:!1},reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,checkValidity:n=>typeof n.checkValidity=="function"?n.checkValidity():!0,setValue:(n,i)=>n.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Tn.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Tn.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Ke.has(this.form)?Ke.get(this.form).add(this.host):Ke.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Xe.has(this.form)||(Xe.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ge.has(this.form)||(Ge.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Ke.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Xe.has(this.form)&&(this.form.reportValidity=Xe.get(this.form),Xe.delete(this.form)),Ge.has(this.form)&&(this.form.checkValidity=Ge.get(this.form),Ge.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Ii.add(e):Ii.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&n.setAttribute(i,t.getAttribute(i))})),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!Ii.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Po=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(bi(Ae({},Po),{valid:!1,valueMissing:!0}));Object.freeze(bi(Ae({},Po),{valid:!1,customError:!0}));var qc=V`
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
`,Oo=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const i=n.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Yc(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let n="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(n+=i.textContent)}),n}var Ji="";function Er(e){Ji=e}function Kc(e=""){if(!Ji){const t=[...document.getElementsByTagName("script")],n=t.find(i=>i.hasAttribute("data-shoelace"));if(n)Er(n.getAttribute("data-shoelace"));else{const i=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let o="";i&&(o=i.getAttribute("src")),Er(o.split("/").slice(0,-1).join("/"))}}return Ji.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Xc={name:"default",resolver:e=>Kc(`assets/icons/${e}.svg`)},Gc=Xc,Sr={caret:`
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
  `},Zc={name:"system",resolver:e=>e in Sr?`data:image/svg+xml,${encodeURIComponent(Sr[e])}`:""},Jc=Zc,Qc=[Gc,Jc],Qi=[];function tu(e){Qi.push(e)}function eu(e){Qi=Qi.filter(t=>t!==e)}function Cr(e){return Qc.find(t=>t.name===e)}var nu=V`
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
`;function Bt(e,t){const n=Ae({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:r}=i,s=Array.isArray(e)?e:[e];i.update=function(a){s.forEach(l=>{const c=l;if(a.has(c)){const u=a.get(c),d=this[c];u!==d&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[o](u,d)}}),r.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const iu=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,Hs=e=>e.strings===void 0,ou={},ru=(e,t=ou)=>e._$AH=t;var Ze=Symbol(),Ln=Symbol(),Ui,zi=new Map,mt=class extends K{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var n;let i;if(t!=null&&t.spriteSheet)return this.svg=O`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Ze:Ln}catch{return Ln}try{const o=document.createElement("div");o.innerHTML=await i.text();const r=o.firstElementChild;if(((n=r==null?void 0:r.tagName)==null?void 0:n.toLowerCase())!=="svg")return Ze;Ui||(Ui=new DOMParser);const a=Ui.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Ze}catch{return Ze}}connectedCallback(){super.connectedCallback(),tu(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),eu(this)}getIconSource(){const e=Cr(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:n}=this.getIconSource(),i=n?Cr(this.library):void 0;if(!t){this.svg=null;return}let o=zi.get(t);if(o||(o=this.resolveIcon(t,i),zi.set(t,o)),!this.initialRender)return;const r=await o;if(r===Ln&&zi.delete(t),t===this.getIconSource().url){if(iu(r)){if(this.svg=r,i){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&s&&i.mutator(s)}return}switch(r){case Ln:case Ze:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(e=i==null?void 0:i.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};mt.styles=[ft,nu];m([pt()],mt.prototype,"svg",2);m([b({reflect:!0})],mt.prototype,"name",2);m([b()],mt.prototype,"src",2);m([b()],mt.prototype,"label",2);m([b({reflect:!0})],mt.prototype,"library",2);m([Bt("label")],mt.prototype,"handleLabelChange",1);m([Bt(["name","src","library"])],mt.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},To=e=>(...t)=>({_$litDirective$:e,values:t});let Lo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=To(class extends Lo{constructor(e){var t;if(super(e),e.type!==Vt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const s=!!t[r];s===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(s?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return yt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs=Symbol.for(""),su=e=>{if((e==null?void 0:e.r)===Vs)return e==null?void 0:e._$litStatic$},ei=(e,...t)=>({_$litStatic$:t.reduce((n,i,o)=>n+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:Vs}),kr=new Map,au=e=>(t,...n)=>{const i=n.length;let o,r;const s=[],a=[];let l,c=0,u=!1;for(;c<i;){for(l=t[c];c<i&&(r=n[c],(o=su(r))!==void 0);)l+=o+t[++c],u=!0;c!==i&&a.push(r),s.push(l),c++}if(c===i&&s.push(t[i]),u){const d=s.join("$$lit$$");(t=kr.get(d))===void 0&&(s.raw=s,kr.set(d,t=s)),n=a}return e(t,...n)},Fn=au(O);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=e=>e??z;var M=class extends K{constructor(){super(...arguments),this.formControlController=new Fs(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Oo(this,"[default]","prefix","suffix"),this.localize=new Cn(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Po}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ei`a`:ei`button`;return Fn`
      <${t}
        part="base"
        class=${It({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${B(e?void 0:this.disabled)}
        type=${B(e?void 0:this.type)}
        title=${this.title}
        name=${B(e?void 0:this.name)}
        value=${B(e?void 0:this.value)}
        href=${B(e&&!this.disabled?this.href:void 0)}
        target=${B(e?this.target:void 0)}
        download=${B(e?this.download:void 0)}
        rel=${B(e?this.rel:void 0)}
        role=${B(e?void 0:"button")}
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
        ${this.caret?Fn` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Fn`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};M.styles=[ft,qc];M.dependencies={"sl-icon":mt,"sl-spinner":wi};m([st(".button")],M.prototype,"button",2);m([pt()],M.prototype,"hasFocus",2);m([pt()],M.prototype,"invalid",2);m([b()],M.prototype,"title",2);m([b({reflect:!0})],M.prototype,"variant",2);m([b({reflect:!0})],M.prototype,"size",2);m([b({type:Boolean,reflect:!0})],M.prototype,"caret",2);m([b({type:Boolean,reflect:!0})],M.prototype,"disabled",2);m([b({type:Boolean,reflect:!0})],M.prototype,"loading",2);m([b({type:Boolean,reflect:!0})],M.prototype,"outline",2);m([b({type:Boolean,reflect:!0})],M.prototype,"pill",2);m([b({type:Boolean,reflect:!0})],M.prototype,"circle",2);m([b()],M.prototype,"type",2);m([b()],M.prototype,"name",2);m([b()],M.prototype,"value",2);m([b()],M.prototype,"href",2);m([b()],M.prototype,"target",2);m([b()],M.prototype,"rel",2);m([b()],M.prototype,"download",2);m([b()],M.prototype,"form",2);m([b({attribute:"formaction"})],M.prototype,"formAction",2);m([b({attribute:"formenctype"})],M.prototype,"formEnctype",2);m([b({attribute:"formmethod"})],M.prototype,"formMethod",2);m([b({attribute:"formnovalidate",type:Boolean})],M.prototype,"formNoValidate",2);m([b({attribute:"formtarget"})],M.prototype,"formTarget",2);m([Bt("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);M.define("sl-button");var lu=V`
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
`,cu=(e="value")=>(t,n)=>{const i=t.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,s,a){var l;const c=i.getPropertyOptions(e),u=typeof c.attribute=="string"?c.attribute:e;if(r===u){const d=c.converter||Ie,h=(typeof d=="function"?d:(l=d==null?void 0:d.fromAttribute)!=null?l:Ie.fromAttribute)(a,c.type);this[e]!==h&&(this[n]=h)}o.call(this,r,s,a)}},uu=V`
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
 */const Rr=To(class extends Lo{constructor(e){if(super(e),e.type!==Vt.PROPERTY&&e.type!==Vt.ATTRIBUTE&&e.type!==Vt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Hs(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===yt||t===z)return t;const n=e.element,i=e.name;if(e.type===Vt.PROPERTY){if(t===n[i])return yt}else if(e.type===Vt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return yt}else if(e.type===Vt.ATTRIBUTE&&n.getAttribute(i)===t+"")return yt;return ru(e),t}});var j=class extends K{constructor(){super(...arguments),this.formControlController=new Fs(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Oo(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return O`
      <div
        class=${It({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${It({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${B(this.value)}
            .indeterminate=${Rr(this.indeterminate)}
            .checked=${Rr(this.checked)}
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
            ${this.checked?O`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?O`
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
    `}};j.styles=[ft,uu,lu];j.dependencies={"sl-icon":mt};m([st('input[type="checkbox"]')],j.prototype,"input",2);m([pt()],j.prototype,"hasFocus",2);m([b()],j.prototype,"title",2);m([b()],j.prototype,"name",2);m([b()],j.prototype,"value",2);m([b({reflect:!0})],j.prototype,"size",2);m([b({type:Boolean,reflect:!0})],j.prototype,"disabled",2);m([b({type:Boolean,reflect:!0})],j.prototype,"checked",2);m([b({type:Boolean,reflect:!0})],j.prototype,"indeterminate",2);m([cu("checked")],j.prototype,"defaultChecked",2);m([b({reflect:!0})],j.prototype,"form",2);m([b({type:Boolean,reflect:!0})],j.prototype,"required",2);m([b({attribute:"help-text"})],j.prototype,"helpText",2);m([Bt("disabled",{waitUntilFirstUpdate:!0})],j.prototype,"handleDisabledChange",1);m([Bt(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],j.prototype,"handleStateChange",1);j.define("sl-checkbox");var du=V`
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
`,Pr=new WeakMap;function js(e){let t=Pr.get(e);return t||(t=window.getComputedStyle(e,null),Pr.set(e,t)),t}function hu(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=js(e);return t.visibility!=="hidden"&&t.display!=="none"}function fu(e){const t=js(e),{overflowY:n,overflowX:i}=t;return n==="scroll"||i==="scroll"?!0:n!=="auto"||i!=="auto"?!1:e.scrollHeight>e.clientHeight&&n==="auto"||e.scrollWidth>e.clientWidth&&i==="auto"}function pu(e){const t=e.tagName.toLowerCase(),n=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(n)||n<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!hu(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:fu(e)}function mu(e){var t,n;const i=vu(e),o=(t=i[0])!=null?t:null,r=(n=i[i.length-1])!=null?n:null;return{start:o,end:r}}function gu(e,t){var n;return((n=e.getRootNode({composed:!0}))==null?void 0:n.host)!==t}function vu(e){const t=new WeakMap,n=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!n.includes(o)&&pu(o)&&n.push(o),o instanceof HTMLSlotElement&&gu(o,e)&&o.assignedElements({flatten:!0}).forEach(r=>{i(r)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(const r of o.children)i(r)}return i(e),n.sort((o,r)=>{const s=Number(o.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-s})}var bu=V`
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
`;const te=Math.min,et=Math.max,ni=Math.round,Mn=Math.floor,ee=e=>({x:e,y:e}),yu={left:"right",right:"left",bottom:"top",top:"bottom"},wu={start:"end",end:"start"};function to(e,t,n){return et(e,te(t,n))}function He(e,t){return typeof e=="function"?e(t):e}function ne(e){return e.split("-")[0]}function Ve(e){return e.split("-")[1]}function Ws(e){return e==="x"?"y":"x"}function Mo(e){return e==="y"?"height":"width"}function $e(e){return["top","bottom"].includes(ne(e))?"y":"x"}function Do(e){return Ws($e(e))}function _u(e,t,n){n===void 0&&(n=!1);const i=Ve(e),o=Do(e),r=Mo(o);let s=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=ii(s)),[s,ii(s)]}function $u(e){const t=ii(e);return[eo(e),t,eo(t)]}function eo(e){return e.replace(/start|end/g,t=>wu[t])}function xu(e,t,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:i:t?i:o;case"left":case"right":return t?r:s;default:return[]}}function Au(e,t,n,i){const o=Ve(e);let r=xu(ne(e),n==="start",i);return o&&(r=r.map(s=>s+"-"+o),t&&(r=r.concat(r.map(eo)))),r}function ii(e){return e.replace(/left|right|bottom|top/g,t=>yu[t])}function Eu(e){return{top:0,right:0,bottom:0,left:0,...e}}function qs(e){return typeof e!="number"?Eu(e):{top:e,right:e,bottom:e,left:e}}function oi(e){const{x:t,y:n,width:i,height:o}=e;return{width:i,height:o,top:n,left:t,right:t+i,bottom:n+o,x:t,y:n}}function Or(e,t,n){let{reference:i,floating:o}=e;const r=$e(t),s=Do(t),a=Mo(s),l=ne(t),c=r==="y",u=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,f=i[a]/2-o[a]/2;let h;switch(l){case"top":h={x:u,y:i.y-o.height};break;case"bottom":h={x:u,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:d};break;case"left":h={x:i.x-o.width,y:d};break;default:h={x:i.x,y:i.y}}switch(Ve(t)){case"start":h[s]-=f*(n&&c?-1:1);break;case"end":h[s]+=f*(n&&c?-1:1);break}return h}const Su=async(e,t,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:s}=n,a=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Or(c,i,l),f=i,h={},p=0;for(let g=0;g<a.length;g++){const{name:y,fn:v}=a[g],{x:w,y:$,data:_,reset:A}=await v({x:u,y:d,initialPlacement:i,placement:f,strategy:o,middlewareData:h,rects:c,platform:s,elements:{reference:e,floating:t}});u=w??u,d=$??d,h={...h,[y]:{...h[y],..._}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(f=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):A.rects),{x:u,y:d}=Or(c,f,l)),g=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}};async function No(e,t){var n;t===void 0&&(t={});const{x:i,y:o,platform:r,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=He(t,e),p=qs(h),y=a[f?d==="floating"?"reference":"floating":d],v=oi(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(y)))==null||n?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),w=d==="floating"?{x:i,y:o,width:s.floating.width,height:s.floating.height}:s.reference,$=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),_=await(r.isElement==null?void 0:r.isElement($))?await(r.getScale==null?void 0:r.getScale($))||{x:1,y:1}:{x:1,y:1},A=oi(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:$,strategy:l}):w);return{top:(v.top-A.top+p.top)/_.y,bottom:(A.bottom-v.bottom+p.bottom)/_.y,left:(v.left-A.left+p.left)/_.x,right:(A.right-v.right+p.right)/_.x}}const Cu=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:i,placement:o,rects:r,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=He(e,t)||{};if(c==null)return{};const d=qs(u),f={x:n,y:i},h=Do(o),p=Mo(h),g=await s.getDimensions(c),y=h==="y",v=y?"top":"left",w=y?"bottom":"right",$=y?"clientHeight":"clientWidth",_=r.reference[p]+r.reference[h]-f[h]-r.floating[p],A=f[h]-r.reference[h],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let D=R?R[$]:0;(!D||!await(s.isElement==null?void 0:s.isElement(R)))&&(D=a.floating[$]||r.floating[p]);const T=_/2-A/2,C=D/2-g[p]/2-1,E=te(d[v],C),P=te(d[w],C),I=E,F=D-g[p]-P,U=D/2-g[p]/2+T,Tt=to(I,U,F),Z=!l.arrow&&Ve(o)!=null&&U!==Tt&&r.reference[p]/2-(U<I?E:P)-g[p]/2<0,W=Z?U<I?U-I:U-F:0;return{[h]:f[h]+W,data:{[h]:Tt,centerOffset:U-Tt-W,...Z&&{alignmentOffset:W}},reset:Z}}}),ku=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:o,middlewareData:r,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...y}=He(e,t);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const v=ne(o),w=$e(a),$=ne(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=f||($||!g?[ii(a)]:$u(a)),R=p!=="none";!f&&R&&A.push(...Au(a,g,p,_));const D=[a,...A],T=await No(t,y),C=[];let E=((i=r.flip)==null?void 0:i.overflows)||[];if(u&&C.push(T[v]),d){const U=_u(o,s,_);C.push(T[U[0]],T[U[1]])}if(E=[...E,{placement:o,overflows:C}],!C.every(U=>U<=0)){var P,I;const U=(((P=r.flip)==null?void 0:P.index)||0)+1,Tt=D[U];if(Tt)return{data:{index:U,overflows:E},reset:{placement:Tt}};let Z=(I=E.filter(W=>W.overflows[0]<=0).sort((W,q)=>W.overflows[1]-q.overflows[1])[0])==null?void 0:I.placement;if(!Z)switch(h){case"bestFit":{var F;const W=(F=E.filter(q=>{if(R){const Y=$e(q.placement);return Y===w||Y==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(Y=>Y>0).reduce((Y,Si)=>Y+Si,0)]).sort((q,Y)=>q[1]-Y[1])[0])==null?void 0:F[0];W&&(Z=W);break}case"initialPlacement":Z=a;break}if(o!==Z)return{reset:{placement:Z}}}return{}}}};async function Ru(e,t){const{placement:n,platform:i,elements:o}=e,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),s=ne(n),a=Ve(n),l=$e(n)==="y",c=["left","top"].includes(s)?-1:1,u=r&&l?-1:1,d=He(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof p=="number"&&(h=a==="end"?p*-1:p),l?{x:h*u,y:f*c}:{x:f*c,y:h*u}}const Pu=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,i;const{x:o,y:r,placement:s,middlewareData:a}=t,l=await Ru(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:o+l.x,y:r+l.y,data:{...l,placement:s}}}}},Ou=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:i,placement:o}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:v,y:w}=y;return{x:v,y:w}}},...l}=He(e,t),c={x:n,y:i},u=await No(t,l),d=$e(ne(o)),f=Ws(d);let h=c[f],p=c[d];if(r){const y=f==="y"?"top":"left",v=f==="y"?"bottom":"right",w=h+u[y],$=h-u[v];h=to(w,h,$)}if(s){const y=d==="y"?"top":"left",v=d==="y"?"bottom":"right",w=p+u[y],$=p-u[v];p=to(w,p,$)}const g=a.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-i,enabled:{[f]:r,[d]:s}}}}}},Tu=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,i;const{placement:o,rects:r,platform:s,elements:a}=t,{apply:l=()=>{},...c}=He(e,t),u=await No(t,c),d=ne(o),f=Ve(o),h=$e(o)==="y",{width:p,height:g}=r.floating;let y,v;d==="top"||d==="bottom"?(y=d,v=f===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(v=d,y=f==="end"?"top":"bottom");const w=g-u.top-u.bottom,$=p-u.left-u.right,_=te(g-u[y],w),A=te(p-u[v],$),R=!t.middlewareData.shift;let D=_,T=A;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(T=$),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(D=w),R&&!f){const E=et(u.left,0),P=et(u.right,0),I=et(u.top,0),F=et(u.bottom,0);h?T=p-2*(E!==0||P!==0?E+P:et(u.left,u.right)):D=g-2*(I!==0||F!==0?I+F:et(u.top,u.bottom))}await l({...t,availableWidth:T,availableHeight:D});const C=await s.getDimensions(a.floating);return p!==C.width||g!==C.height?{reset:{rects:!0}}:{}}}};function _i(){return typeof window<"u"}function je(e){return Ys(e)?(e.nodeName||"").toLowerCase():"#document"}function it(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ot(e){var t;return(t=(Ys(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ys(e){return _i()?e instanceof Node||e instanceof it(e).Node:!1}function xt(e){return _i()?e instanceof Element||e instanceof it(e).Element:!1}function Rt(e){return _i()?e instanceof HTMLElement||e instanceof it(e).HTMLElement:!1}function Tr(e){return!_i()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof it(e).ShadowRoot}function kn(e){const{overflow:t,overflowX:n,overflowY:i,display:o}=At(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(o)}function Lu(e){return["table","td","th"].includes(je(e))}function $i(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Io(e){const t=Uo(),n=xt(e)?At(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function Mu(e){let t=ie(e);for(;Rt(t)&&!ze(t);){if(Io(t))return t;if($i(t))return null;t=ie(t)}return null}function Uo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ze(e){return["html","body","#document"].includes(je(e))}function At(e){return it(e).getComputedStyle(e)}function xi(e){return xt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ie(e){if(je(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Tr(e)&&e.host||Ot(e);return Tr(t)?t.host:t}function Ks(e){const t=ie(e);return ze(t)?e.ownerDocument?e.ownerDocument.body:e.body:Rt(t)&&kn(t)?t:Ks(t)}function mn(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Ks(e),r=o===((i=e.ownerDocument)==null?void 0:i.body),s=it(o);if(r){const a=no(s);return t.concat(s,s.visualViewport||[],kn(o)?o:[],a&&n?mn(a):[])}return t.concat(o,mn(o,[],n))}function no(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Xs(e){const t=At(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=Rt(e),r=o?e.offsetWidth:n,s=o?e.offsetHeight:i,a=ni(n)!==r||ni(i)!==s;return a&&(n=r,i=s),{width:n,height:i,$:a}}function zo(e){return xt(e)?e:e.contextElement}function Pe(e){const t=zo(e);if(!Rt(t))return ee(1);const n=t.getBoundingClientRect(),{width:i,height:o,$:r}=Xs(t);let s=(r?ni(n.width):n.width)/i,a=(r?ni(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Du=ee(0);function Gs(e){const t=it(e);return!Uo()||!t.visualViewport?Du:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Nu(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==it(e)?!1:t}function xe(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=zo(e);let s=ee(1);t&&(i?xt(i)&&(s=Pe(i)):s=Pe(e));const a=Nu(r,n,i)?Gs(r):ee(0);let l=(o.left+a.x)/s.x,c=(o.top+a.y)/s.y,u=o.width/s.x,d=o.height/s.y;if(r){const f=it(r),h=i&&xt(i)?it(i):i;let p=f,g=no(p);for(;g&&i&&h!==p;){const y=Pe(g),v=g.getBoundingClientRect(),w=At(g),$=v.left+(g.clientLeft+parseFloat(w.paddingLeft))*y.x,_=v.top+(g.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=$,c+=_,p=it(g),g=no(p)}}return oi({width:u,height:d,x:l,y:c})}function Iu(e){let{elements:t,rect:n,offsetParent:i,strategy:o}=e;const r=o==="fixed",s=Ot(i),a=t?$i(t.floating):!1;if(i===s||a&&r)return n;let l={scrollLeft:0,scrollTop:0},c=ee(1);const u=ee(0),d=Rt(i);if((d||!d&&!r)&&((je(i)!=="body"||kn(s))&&(l=xi(i)),Rt(i))){const f=xe(i);c=Pe(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}}function Uu(e){return Array.from(e.getClientRects())}function io(e,t){const n=xi(e).scrollLeft;return t?t.left+n:xe(Ot(e)).left+n}function zu(e){const t=Ot(e),n=xi(e),i=e.ownerDocument.body,o=et(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=et(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+io(e);const a=-n.scrollTop;return At(i).direction==="rtl"&&(s+=et(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:s,y:a}}function Bu(e,t){const n=it(e),i=Ot(e),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,a=0,l=0;if(o){r=o.width,s=o.height;const c=Uo();(!c||c&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:r,height:s,x:a,y:l}}function Fu(e,t){const n=xe(e,!0,t==="fixed"),i=n.top+e.clientTop,o=n.left+e.clientLeft,r=Rt(e)?Pe(e):ee(1),s=e.clientWidth*r.x,a=e.clientHeight*r.y,l=o*r.x,c=i*r.y;return{width:s,height:a,x:l,y:c}}function Lr(e,t,n){let i;if(t==="viewport")i=Bu(e,n);else if(t==="document")i=zu(Ot(e));else if(xt(t))i=Fu(t,n);else{const o=Gs(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return oi(i)}function Zs(e,t){const n=ie(e);return n===t||!xt(n)||ze(n)?!1:At(n).position==="fixed"||Zs(n,t)}function Hu(e,t){const n=t.get(e);if(n)return n;let i=mn(e,[],!1).filter(a=>xt(a)&&je(a)!=="body"),o=null;const r=At(e).position==="fixed";let s=r?ie(e):e;for(;xt(s)&&!ze(s);){const a=At(s),l=Io(s);!l&&a.position==="fixed"&&(o=null),(r?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||kn(s)&&!l&&Zs(e,s))?i=i.filter(u=>u!==s):o=a,s=ie(s)}return t.set(e,i),i}function Vu(e){let{element:t,boundary:n,rootBoundary:i,strategy:o}=e;const s=[...n==="clippingAncestors"?$i(t)?[]:Hu(t,this._c):[].concat(n),i],a=s[0],l=s.reduce((c,u)=>{const d=Lr(t,u,o);return c.top=et(d.top,c.top),c.right=te(d.right,c.right),c.bottom=te(d.bottom,c.bottom),c.left=et(d.left,c.left),c},Lr(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ju(e){const{width:t,height:n}=Xs(e);return{width:t,height:n}}function Wu(e,t,n){const i=Rt(t),o=Ot(t),r=n==="fixed",s=xe(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=ee(0);if(i||!i&&!r)if((je(t)!=="body"||kn(o))&&(a=xi(t)),i){const h=xe(t,!0,r,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else o&&(l.x=io(o));let c=0,u=0;if(o&&!i&&!r){const h=o.getBoundingClientRect();u=h.top+a.scrollTop,c=h.left+a.scrollLeft-io(o,h)}const d=s.left+a.scrollLeft-l.x-c,f=s.top+a.scrollTop-l.y-u;return{x:d,y:f,width:s.width,height:s.height}}function Bi(e){return At(e).position==="static"}function Mr(e,t){if(!Rt(e)||At(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Ot(e)===n&&(n=n.ownerDocument.body),n}function Js(e,t){const n=it(e);if($i(e))return n;if(!Rt(e)){let o=ie(e);for(;o&&!ze(o);){if(xt(o)&&!Bi(o))return o;o=ie(o)}return n}let i=Mr(e,t);for(;i&&Lu(i)&&Bi(i);)i=Mr(i,t);return i&&ze(i)&&Bi(i)&&!Io(i)?n:i||Mu(e)||n}const qu=async function(e){const t=this.getOffsetParent||Js,n=this.getDimensions,i=await n(e.floating);return{reference:Wu(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Yu(e){return At(e).direction==="rtl"}const Hn={convertOffsetParentRelativeRectToViewportRelativeRect:Iu,getDocumentElement:Ot,getClippingRect:Vu,getOffsetParent:Js,getElementRects:qu,getClientRects:Uu,getDimensions:ju,getScale:Pe,isElement:xt,isRTL:Yu};function Ku(e,t){let n=null,i;const o=Ot(e);function r(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(a||t(),!d||!f)return;const h=Mn(u),p=Mn(o.clientWidth-(c+d)),g=Mn(o.clientHeight-(u+f)),y=Mn(c),w={rootMargin:-h+"px "+-p+"px "+-g+"px "+-y+"px",threshold:et(0,te(1,l))||1};let $=!0;function _(A){const R=A[0].intersectionRatio;if(R!==l){if(!$)return s();R?s(!1,R):i=setTimeout(()=>{s(!1,1e-7)},1e3)}$=!1}try{n=new IntersectionObserver(_,{...w,root:o.ownerDocument})}catch{n=new IntersectionObserver(_,w)}n.observe(e)}return s(!0),r}function Xu(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=zo(e),u=o||r?[...c?mn(c):[],...mn(t)]:[];u.forEach(v=>{o&&v.addEventListener("scroll",n,{passive:!0}),r&&v.addEventListener("resize",n)});const d=c&&a?Ku(c,n):null;let f=-1,h=null;s&&(h=new ResizeObserver(v=>{let[w]=v;w&&w.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var $;($=h)==null||$.observe(t)})),n()}),c&&!l&&h.observe(c),h.observe(t));let p,g=l?xe(e):null;l&&y();function y(){const v=xe(e);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&n(),g=v,p=requestAnimationFrame(y)}return n(),()=>{var v;u.forEach(w=>{o&&w.removeEventListener("scroll",n),r&&w.removeEventListener("resize",n)}),d==null||d(),(v=h)==null||v.disconnect(),h=null,l&&cancelAnimationFrame(p)}}const Gu=Pu,Zu=Ou,Ju=ku,Dr=Tu,Qu=Cu,td=(e,t,n)=>{const i=new Map,o={platform:Hn,...n},r={...o.platform,_c:i};return Su(e,t,{...o,platform:r})};function ed(e){return nd(e)}function Fi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function nd(e){for(let t=e;t;t=Fi(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Fi(e);t;t=Fi(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||t.tagName==="BODY"))return t}return null}function id(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var N=class extends K{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let i=0,o=0,r=0,s=0,a=0,l=0,c=0,u=0;n?e.top<t.top?(i=e.left,o=e.bottom,r=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,u=t.top):(i=t.left,o=t.bottom,r=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,u=e.top):e.left<t.left?(i=e.right,o=e.top,r=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,u=t.bottom):(i=t.right,o=t.top,r=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||id(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Xu(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Gu({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Dr({apply:({rects:n})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${n.reference.width}px`:"",this.popup.style.height=o?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ju({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Zu({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Dr({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Qu({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?n=>Hn.getOffsetParent(n,ed):Hn.getOffsetParent;td(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:bi(Ae({},Hn),{getOffsetParent:t})}).then(({x:n,y:i,middlewareData:o,placement:r})=>{const s=this.matches(":dir(rtl)"),a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${n}px`,top:`${i}px`}),this.arrow){const l=o.arrow.x,c=o.arrow.y;let u="",d="",f="",h="";if(this.arrowPlacement==="start"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?p:"",h=s?"":p}else if(this.arrowPlacement==="end"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":p,h=s?p:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",u=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:u,right:d,bottom:f,left:h,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return O`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${It({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${It({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?O`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};N.styles=[ft,bu];m([st(".popup")],N.prototype,"popup",2);m([st(".popup__arrow")],N.prototype,"arrowEl",2);m([b()],N.prototype,"anchor",2);m([b({type:Boolean,reflect:!0})],N.prototype,"active",2);m([b({reflect:!0})],N.prototype,"placement",2);m([b({reflect:!0})],N.prototype,"strategy",2);m([b({type:Number})],N.prototype,"distance",2);m([b({type:Number})],N.prototype,"skidding",2);m([b({type:Boolean})],N.prototype,"arrow",2);m([b({attribute:"arrow-placement"})],N.prototype,"arrowPlacement",2);m([b({attribute:"arrow-padding",type:Number})],N.prototype,"arrowPadding",2);m([b({type:Boolean})],N.prototype,"flip",2);m([b({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],N.prototype,"flipFallbackPlacements",2);m([b({attribute:"flip-fallback-strategy"})],N.prototype,"flipFallbackStrategy",2);m([b({type:Object})],N.prototype,"flipBoundary",2);m([b({attribute:"flip-padding",type:Number})],N.prototype,"flipPadding",2);m([b({type:Boolean})],N.prototype,"shift",2);m([b({type:Object})],N.prototype,"shiftBoundary",2);m([b({attribute:"shift-padding",type:Number})],N.prototype,"shiftPadding",2);m([b({attribute:"auto-size"})],N.prototype,"autoSize",2);m([b()],N.prototype,"sync",2);m([b({type:Object})],N.prototype,"autoSizeBoundary",2);m([b({attribute:"auto-size-padding",type:Number})],N.prototype,"autoSizePadding",2);m([b({attribute:"hover-bridge",type:Boolean})],N.prototype,"hoverBridge",2);var Qs=new Map,od=new WeakMap;function rd(e){return e??{keyframes:[],options:{duration:0}}}function Nr(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ta(e,t){Qs.set(e,rd(t))}function Ir(e,t,n){const i=od.get(e);if(i!=null&&i[t])return Nr(i[t],n.dir);const o=Qs.get(t);return o?Nr(o,n.dir):{keyframes:[],options:{duration:0}}}function Ur(e,t){return new Promise(n=>{function i(o){o.target===e&&(e.removeEventListener(t,i),n())}e.addEventListener(t,i)})}function zr(e,t,n){return new Promise(i=>{if((n==null?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,bi(Ae({},n),{duration:sd()?0:n.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function sd(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Br(e){return Promise.all(e.getAnimations().map(t=>new Promise(n=>{t.cancel(),requestAnimationFrame(n)})))}var G=class extends K{constructor(){super(...arguments),this.localize=new Cn(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,i,o;const r=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(r==null?void 0:r.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),i=n[0],o=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>mu(i).start);let n;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ur(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ur(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Br(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Ir(this,"dropdown.show",{dir:this.localize.dir()});await zr(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Br(this);const{keyframes:e,options:t}=Ir(this,"dropdown.hide",{dir:this.localize.dir()});await zr(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return O`
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
        sync=${B(this.sync?this.sync:void 0)}
        class=${It({dropdown:!0,"dropdown--open":this.open})}
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
    `}};G.styles=[ft,du];G.dependencies={"sl-popup":N};m([st(".dropdown")],G.prototype,"popup",2);m([st(".dropdown__trigger")],G.prototype,"trigger",2);m([st(".dropdown__panel")],G.prototype,"panel",2);m([b({type:Boolean,reflect:!0})],G.prototype,"open",2);m([b({reflect:!0})],G.prototype,"placement",2);m([b({type:Boolean,reflect:!0})],G.prototype,"disabled",2);m([b({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],G.prototype,"stayOpenOnSelect",2);m([b({attribute:!1})],G.prototype,"containingElement",2);m([b({type:Number})],G.prototype,"distance",2);m([b({type:Number})],G.prototype,"skidding",2);m([b({type:Boolean})],G.prototype,"hoist",2);m([b({reflect:!0})],G.prototype,"sync",2);m([Bt("open",{waitUntilFirstUpdate:!0})],G.prototype,"handleOpenChange",1);ta("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ta("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});G.define("sl-dropdown");var ad=V`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Rn=class extends K{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Je(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=Je(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=Je(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=Je(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const n=e.indexOf(t),i=Je(t);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",n===0),i.toggleAttribute("data-sl-button-group__button--inner",n>0&&n<e.length-1),i.toggleAttribute("data-sl-button-group__button--last",n===e.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return O`
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
    `}};Rn.styles=[ft,ad];m([st("slot")],Rn.prototype,"defaultSlot",2);m([pt()],Rn.prototype,"disableRole",2);m([b()],Rn.prototype,"label",2);function Je(e){var t;const n="sl-button, sl-radio-button";return(t=e.closest(n))!=null?t:e.querySelector(n)}Rn.define("sl-button-group");var ld=V`
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
`,Bo=class extends K{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],n=e.composedPath(),i=n.find(a=>{var l;return t.includes(((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!i||n.find(a=>{var l;return((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const s=i;s.type==="checkbox"&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),n=this.getCurrentItem();let i=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(n=>{n.setAttribute("tabindex",n===e?"0":"-1")})}render(){return O`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Bo.styles=[ft,ld];m([st("slot")],Bo.prototype,"defaultSlot",2);Bo.define("sl-menu");var cd=V`
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
 */const rn=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),rn(o,t);return!0},ri=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},ea=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),hd(t)}};function ud(e){this._$AN!==void 0?(ri(this),this._$AM=e,ea(this)):this._$AM=e}function dd(e,t=!1,n=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let r=n;r<i.length;r++)rn(i[r],!1),ri(i[r]);else i!=null&&(rn(i,!1),ri(i));else rn(this,e)}const hd=e=>{e.type==Vt.CHILD&&(e._$AP??(e._$AP=dd),e._$AQ??(e._$AQ=ud))};class fd extends Lo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,i){super._$AT(t,n,i),ea(this),this.isConnected=t._$AU}_$AO(t,n=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),n&&(rn(this,t),ri(this))}setValue(t){if(Hs(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pd=()=>new md;let md=class{};const Hi=new WeakMap,gd=To(class extends fd{render(e){return z}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),z}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let n=Hi.get(t);n===void 0&&(n=new WeakMap,Hi.set(t,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Hi.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var vd=class{constructor(e,t){this.popupRef=pd(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=n=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${n.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${n.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=n=>{switch(n.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":n.target!==this.host&&(n.preventDefault(),n.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(n);break}},this.handleClick=n=>{var i;n.target===this.host?(n.preventDefault(),n.stopPropagation()):n.target instanceof Element&&(n.target.tagName==="sl-menu-item"||(i=n.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=n=>{n.relatedTarget&&n.relatedTarget instanceof Element&&this.host.contains(n.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=n=>{n.stopPropagation()},this.handlePopupReposition=()=>{const n=this.host.renderRoot.querySelector("slot[name='submenu']"),i=n==null?void 0:n.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],o=this.host.matches(":dir(rtl)");if(!i)return;const{left:r,top:s,width:a,height:l}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?r+a:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?r+a:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+l}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let n=null;for(const i of t.assignedElements())if(n=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),n.length!==0)break;if(!(!n||n.length===0)){n[0].setAttribute("tabindex","0");for(let i=1;i!==n.length;++i)n[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,r)=>{var s;const a=(s=t.get(r))!=null?s:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return o-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.host.matches(":dir(rtl)");return this.isConnected?O`
      <sl-popup
        ${gd(this.popupRef)}
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
    `:O` <slot name="submenu" hidden></slot> `}},at=class extends K{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Oo(this,"submenu"),this.submenuController=new vd(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Yc(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.matches(":dir(rtl)"),t=this.submenuController.isExpanded();return O`
      <div
        id="anchor"
        part="base"
        class=${It({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
        ${this.loading?O` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};at.styles=[ft,cd];at.dependencies={"sl-icon":mt,"sl-popup":N,"sl-spinner":wi};m([st("slot:not([name])")],at.prototype,"defaultSlot",2);m([st(".menu-item")],at.prototype,"menuItem",2);m([b()],at.prototype,"type",2);m([b({type:Boolean,reflect:!0})],at.prototype,"checked",2);m([b()],at.prototype,"value",2);m([b({type:Boolean,reflect:!0})],at.prototype,"loading",2);m([b({type:Boolean,reflect:!0})],at.prototype,"disabled",2);m([Bt("checked")],at.prototype,"handleCheckedChange",1);m([Bt("disabled")],at.prototype,"handleDisabledChange",1);m([Bt("type")],at.prototype,"handleTypeChange",1);at.define("sl-menu-item");var bd=V`
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
`,na=class extends K{render(){return O` <slot part="base" class="menu-label"></slot> `}};na.styles=[ft,bd];na.define("sl-menu-label");wi.define("sl-spinner");var yd=V`
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
`,wd=V`
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
`,lt=class extends K{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ei`a`:ei`button`;return Fn`
      <${t}
        part="base"
        class=${It({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${B(e?void 0:this.disabled)}
        type=${B(e?void 0:"button")}
        href=${B(e?this.href:void 0)}
        target=${B(e?this.target:void 0)}
        download=${B(e?this.download:void 0)}
        rel=${B(e&&this.target?"noreferrer noopener":void 0)}
        role=${B(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${B(this.name)}
          library=${B(this.library)}
          src=${B(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};lt.styles=[ft,wd];lt.dependencies={"sl-icon":mt};m([st(".icon-button")],lt.prototype,"button",2);m([pt()],lt.prototype,"hasFocus",2);m([b()],lt.prototype,"name",2);m([b()],lt.prototype,"library",2);m([b()],lt.prototype,"src",2);m([b()],lt.prototype,"href",2);m([b()],lt.prototype,"target",2);m([b()],lt.prototype,"download",2);m([b()],lt.prototype,"label",2);m([b({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);var Ee=class extends K{constructor(){super(...arguments),this.localize=new Cn(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return O`
      <span
        part="base"
        class=${It({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?O`
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
    `}};Ee.styles=[ft,yd];Ee.dependencies={"sl-icon-button":lt};m([b({reflect:!0})],Ee.prototype,"variant",2);m([b({reflect:!0})],Ee.prototype,"size",2);m([b({type:Boolean,reflect:!0})],Ee.prototype,"pill",2);m([b({type:Boolean})],Ee.prototype,"removable",2);Ee.define("sl-tag");var ct=class extends K{constructor(){super(...arguments),this.localize=new Cn(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return O`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};m([b()],ct.prototype,"date",2);m([b()],ct.prototype,"weekday",2);m([b()],ct.prototype,"era",2);m([b()],ct.prototype,"year",2);m([b()],ct.prototype,"month",2);m([b()],ct.prototype,"day",2);m([b()],ct.prototype,"hour",2);m([b()],ct.prototype,"minute",2);m([b()],ct.prototype,"second",2);m([b({attribute:"time-zone-name"})],ct.prototype,"timeZoneName",2);m([b({attribute:"time-zone"})],ct.prototype,"timeZone",2);m([b({attribute:"hour-format"})],ct.prototype,"hourFormat",2);ct.define("sl-format-date");var _d=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,xd=(e,t,n,i)=>{for(var o=i>1?void 0:i?$d(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&_d(t,n,o),o};let oo=class extends Dt{render(){return O`<p>Not found!</p>`}};oo.styles=[V`
      :host {
        display: block;
        margin: 1rem;
      }
    `];oo=xd([yi("error-view")],oo);var Ad=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,Sd=(e,t,n,i)=>{for(var o=i>1?void 0:i?Ed(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&Ad(t,n,o),o};let ro=class extends Dt{onBeforeEnter(e,t){const i=new URLSearchParams(e.search).get("redirect");if(i&&i.startsWith("/"))return t.redirect(i)}render(){return O`
      <p>
        Welcome to my home page. My name is Ecmel Ercan. I am a software
        developer. You can find my open source software on
        <a href="https://github.com/ecmel">GtiHub</a>
      </p>
      <!-- 
      <sl-button
        href="itms-services://?action=download-manifest&url=https://ecmel.dev/defter/manifest.plist"
        >Defter iOS</sl-button
      >
      -->
    `}};ro.styles=[V`
      :host {
        display: block;
        padding: 2rem;
      }
    `];ro=Sd([yi("home-view")],ro);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Dn(e,t){if(e!==void 0){let n=0;for(const i of e)yield t(i,n++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cd=Symbol();class kd{get taskComplete(){return this.t||(this.i===1?this.t=new Promise((t,n)=>{this.o=t,this.h=n}):this.i===3?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,n,i){var r;this.p=0,this.i=0,(this._=t).addController(this);const o=typeof n=="object"?n:{task:n,args:i};this.v=o.task,this.j=o.args,this.m=o.argsEqual??Rd,this.k=o.onComplete,this.A=o.onError,this.autoRun=o.autoRun??!0,"initialValue"in o&&(this.u=o.initialValue,this.i=2,this.O=(r=this.T)==null?void 0:r.call(this))}hostUpdate(){this.autoRun===!0&&this.S()}hostUpdated(){this.autoRun==="afterUpdate"&&this.S()}T(){if(this.j===void 0)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),n=this.O;this.O=t,t===n||t===void 0||n!==void 0&&this.m(n,t)||await this.run(t)}async run(t){var s,a,l,c,u;let n,i;t??(t=this.T()),this.O=t,this.i===1?(s=this.q)==null||s.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();const o=++this.p;this.q=new AbortController;let r=!1;try{n=await this.v(t,{signal:this.q.signal})}catch(d){r=!0,i=d}if(this.p===o){if(n===Cd)this.i=0;else{if(r===!1){try{(a=this.k)==null||a.call(this,n)}catch{}this.i=2,(l=this.o)==null||l.call(this,n)}else{try{(c=this.A)==null||c.call(this,i)}catch{}this.i=3,(u=this.h)==null||u.call(this,i)}this.u=n,this.l=i}this._.requestUpdate()}}abort(t){var n;this.i===1&&((n=this.q)==null||n.abort(t))}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){var n,i,o,r;switch(this.i){case 0:return(n=t.initial)==null?void 0:n.call(t);case 1:return(i=t.pending)==null?void 0:i.call(t);case 2:return(o=t.complete)==null?void 0:o.call(t,this.value);case 3:return(r=t.error)==null?void 0:r.call(t,this.error);default:throw Error("Unexpected status: "+this.i)}}}const Rd=(e,t)=>e===t||e.length===t.length&&e.every((n,i)=>!gi(n,t[i])),ia=e=>e===void 0||e==="auto"||e==="instant"||e==="smooth";function Pd(e,t){this.scrollLeft=e,this.scrollTop=t}const oa=(e,t,n="cannot convert to dictionary.")=>`Failed to execute '${e}' on '${t}': ${n}`,ra=(e,t,n)=>oa(e,t,`The provided value '${n}' is not a valid enum value of type ScrollBehavior.`),Fr=(e,t,n)=>{var i;const o=`__SEAMLESS.BACKUP$${t}`;return!e[o]&&e[t]&&!(!((i=e[t])===null||i===void 0)&&i.__isPolyfill)&&(e[o]=e[t]),e[o]||n},Od=e=>{const t=typeof e;return e!==null&&(t==="object"||t==="function")},Fo=e=>e.ownerDocument.scrollingElement||e.ownerDocument.documentElement;function Td(e){if(typeof Event=="function")return new Event("scrollend",{bubbles:e,cancelable:!1});const t=document.createEvent("Event");return t.initEvent("scrollend",e,!1),t}const Ld=e=>.5*(1-Math.cos(Math.PI*e));function Ho(){var e;let t;return!((e=window.performance)===null||e===void 0)&&e.now?t=()=>window.performance.now():t=()=>window.Date.now(),Ho=t,t()}const Md=500,sa=e=>{const n=(Ho()-e.timeStamp)/(e.duration||Md);if(n>1){e.method(e.targetX,e.targetY),e.callback();return}const i=(e.timingFunc||Ld)(n),o=e.startX+(e.targetX-e.startX)*i,r=e.startY+(e.targetY-e.startY)*i;e.method(o,r),e.rafId=window.requestAnimationFrame(()=>{sa(e)})},si=e=>isFinite(e)?Number(e):0,Dd=e=>{var t;return(t=e.isConnected)!==null&&t!==void 0?t:!e.ownerDocument||!(e.ownerDocument.compareDocumentPosition(e)&1)},Nd=(e,t,n)=>{var i,o;if(!Dd(e))return;const r=e.scrollLeft,s=e.scrollTop,a=si((i=t.left)!==null&&i!==void 0?i:r),l=si((o=t.top)!==null&&o!==void 0?o:s);if(a===r&&l===s)return;const c=Fr(HTMLElement.prototype,"scroll",Pd),u=Fr(Object.getPrototypeOf(e),"scroll",c).bind(e);if(t.behavior!=="smooth"){u(a,l);return}const d=()=>{window.removeEventListener("wheel",p),window.removeEventListener("touchmove",p)},f=()=>{d();const g=e.nodeType===9;e.dispatchEvent(Td(g))},h=Object.assign(Object.assign({},n),{timeStamp:Ho(),startX:r,startY:s,targetX:a,targetY:l,rafId:0,method:u,callback:f}),p=()=>{window.cancelAnimationFrame(h.rafId),d()};window.addEventListener("wheel",p,{passive:!0,once:!0}),window.addEventListener("touchmove",p,{passive:!0,once:!0}),sa(h)},Id=e=>e.window===e,Ud=e=>(t,n,i)=>{const[o,r]=Id(t)?[Fo(t.document.documentElement),"Window"]:[t,"Element"],s=n??{};if(!Od(s))throw new TypeError(oa(e,r));if(!ia(s.behavior))throw new TypeError(ra(e,r,s.behavior));e==="scrollBy"&&(s.left=si(s.left)+o.scrollLeft,s.top=si(s.top)+o.scrollTop),Nd(o,s,i)},zd=Ud("scroll"),Bd=zd,aa=e=>{switch(e){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},la=(e,t,n,i)=>{let o=0;switch(t||(o^=2),e){case 0:o=o>>1|(o&1)<<1,[n,i]=[i,n];break;case 1:case 3:o^=1;break;case 4:o^=2;break}return[o,n,i]},Fd=e=>(la(aa(e.writingMode),e.direction!=="rtl",void 0,void 0)[0]&1)===1,Hd=(e,t,n)=>{const[i,o,r]=la(t,n,e.block||"start",e.inline||"nearest");return[o,r].map((s,a)=>{switch(s){case"center":return 1;case"nearest":return 0;default:{const l=i>>a&1;return s==="start"==!l?2:3}}})},Hr=(e,t,n,i,o,r,s)=>e!==0?e:o<t&&r>n||o>t&&r<n?null:o<=t&&s<=i||r>=n&&s>=i?2:r>n&&s<i||o<t&&s>i?3:null,Vr=e=>e!=="visible"&&e!=="clip",Vd=e=>{var t;try{return((t=e.ownerDocument.defaultView)===null||t===void 0?void 0:t.frameElement)||null}catch{return null}},jd=(e,t)=>e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth?Vr(t.overflowY)||Vr(t.overflowX)||e===Fo(e):!1,jr=e=>{const t=e.parentNode,n=e.parentElement;if(n===null&&t!==null){if(t.nodeType===11)return t.host;if(t.nodeType===9)return Vd(e)}return n},Vi=(e,t,n)=>e<t?t:e>n?n:e,Wd=e=>["scroll-margin","scroll-snap-margin"].filter(t=>t in e.documentElement.style)[0],qd=(e,t,n)=>{const{top:i,right:o,bottom:r,left:s}=t,a=Wd(e.ownerDocument);if(!a)return[i,o,r,s];const l=c=>{const u=n.getPropertyValue(`${a}-${c}`);return parseInt(u,10)||0};return[i-l("top"),o+l("right"),r+l("bottom"),s-l("left")]},Nn=(e,t,n)=>{switch(e){case 1:return(t+n)/2;case 3:return n;case 2:case 0:return t}},Yd=(e,t)=>{var n,i,o;const r=(n=e.ownerDocument.defaultView)===null||n===void 0?void 0:n.visualViewport,[s,a,l,c]=e===Fo(e)?[0,0,(i=r==null?void 0:r.width)!==null&&i!==void 0?i:e.clientWidth,(o=r==null?void 0:r.height)!==null&&o!==void 0?o:e.clientHeight]:[t.left,t.top,e.clientWidth,e.clientHeight],u=s+e.clientLeft,d=a+e.clientTop,f=u+l,h=d+c;return[d,f,h,u]},Kd=(e,t)=>{const n=[];let i=e.ownerDocument,o=i.defaultView;if(!o)return n;const r=window.getComputedStyle(e),s=r.direction!=="rtl",a=aa(r.writingMode||r.getPropertyValue("-webkit-writing-mode")||r.getPropertyValue("-ms-writing-mode")),[l,c]=Hd(t,a,s);let[u,d,f,h]=qd(e,e.getBoundingClientRect(),r);for(let p=jr(e);p!==null;p=jr(p)){if(i!==p.ownerDocument){if(i=p.ownerDocument,o=i.defaultView,!o)break;const{left:P,top:I}=p.getBoundingClientRect();u+=I,d+=P,f+=I,h+=P}const g=o.getComputedStyle(p);if(g.position==="fixed")break;if(!jd(p,g))continue;const y=p.getBoundingClientRect(),[v,w,$,_]=Yd(p,y),A=Hr(l,_,w,p.clientWidth,h,d,d-h),R=Hr(c,v,$,p.clientHeight,u,f,f-u),D=A===null?0:Nn(A,h,d)-Nn(A,_,w),T=R===null?0:Nn(R,u,f)-Nn(R,v,$),C=Fd(g)?Vi(D,-p.scrollWidth+p.clientWidth-p.scrollLeft,-p.scrollLeft):Vi(D,-p.scrollLeft,p.scrollWidth-p.clientWidth-p.scrollLeft),E=Vi(T,-p.scrollTop,p.scrollHeight-p.clientHeight-p.scrollTop);n.push([p,{left:p.scrollLeft+C,top:p.scrollTop+E,behavior:t.behavior}]),u=Math.max(u-E,v),d=Math.min(d-C,w),f=Math.min(f-E,$),h=Math.max(h-C,_)}return n},Xd=(e,t,n)=>{const i=t||{};if(!ia(i.behavior))throw new TypeError(ra("scrollIntoView","Element",i.behavior));Kd(e,i).forEach(([r,s])=>{Bd(r,s,n)})};var ca={},Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});Nt.FORMAT_PLAIN=Nt.FORMAT_HTML=Nt.FORMATS=void 0;var ua="html";Nt.FORMAT_HTML=ua;var da="plain";Nt.FORMAT_PLAIN=da;var Gd=[ua,da];Nt.FORMATS=Gd;var X={};Object.defineProperty(X,"__esModule",{value:!0});X.UNIT_WORDS=X.UNIT_WORD=X.UNIT_SENTENCES=X.UNIT_SENTENCE=X.UNIT_PARAGRAPHS=X.UNIT_PARAGRAPH=X.UNITS=void 0;var ha="words";X.UNIT_WORDS=ha;var fa="word";X.UNIT_WORD=fa;var pa="sentences";X.UNIT_SENTENCES=pa;var ma="sentence";X.UNIT_SENTENCE=ma;var ga="paragraphs";X.UNIT_PARAGRAPHS=ga;var va="paragraph";X.UNIT_PARAGRAPH=va;var Zd=[ha,fa,pa,ma,ga,va];X.UNITS=Zd;var Pn={};Object.defineProperty(Pn,"__esModule",{value:!0});Pn.WORDS=void 0;var Jd=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];Pn.WORDS=Jd;var ba={},Ai={};Object.defineProperty(Ai,"__esModule",{value:!0});Ai.LINE_ENDINGS=void 0;var Qd={POSIX:`
`,WIN32:`\r
`};Ai.LINE_ENDINGS=Qd;var ya={},Vo={},wa={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(o){var r=o.trim();return r.charAt(0).toUpperCase()+r.slice(1)},n=t;e.default=n})(wa);var so={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return!!e.exports},i=n;t.default=i})(so,so.exports);var th=so.exports,_a={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){var o=!1;try{o=navigator.product==="ReactNative"}catch{o=!1}return o},n=t;e.default=n})(_a);var $a={},Ei={};Object.defineProperty(Ei,"__esModule",{value:!0});Ei.SUPPORTED_PLATFORMS=void 0;var eh={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};Ei.SUPPORTED_PLATFORMS=eh;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Ei,n=function(){var r=!1;try{r=process.platform===t.SUPPORTED_PLATFORMS.WIN32}catch{r=!1}return r},i=n;e.default=i})($a);var jo={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(o)).map(function(r,s){return s})},n=t;e.default=n})(jo);var xa={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(jo);function n(r){return r&&r.__esModule?r:{default:r}}var i=function(s,a){var l=(0,t.default)(s);return l.map(function(){return a()})},o=i;e.default=o})(xa);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"capitalize",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isNode",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"isReactNative",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"isWindows",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"makeArrayOfLength",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"makeArrayOfStrings",{enumerable:!0,get:function(){return s.default}});var t=a(wa),n=a(th),i=a(_a),o=a($a),r=a(jo),s=a(xa);function a(l){return l&&l.__esModule?l:{default:l}}})(Vo);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pn,n=Vo;function i(c,u){if(!(c instanceof u))throw new TypeError("Cannot call a class as a function")}function o(c,u){for(var d=0;d<u.length;d++){var f=u[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(c,f.key,f)}}function r(c,u,d){return u&&o(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c}function s(c,u,d){return u in c?Object.defineProperty(c,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[u]=d,c}var a=function(){function c(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=u.sentencesPerParagraph,f=d===void 0?{max:7,min:3}:d,h=u.wordsPerSentence,p=h===void 0?{max:15,min:5}:h,g=u.random;u.seed;var y=u.words,v=y===void 0?t.WORDS:y;if(i(this,c),s(this,"sentencesPerParagraph",void 0),s(this,"wordsPerSentence",void 0),s(this,"random",void 0),s(this,"words",void 0),f.min>f.max)throw new Error("Minimum number of sentences per paragraph (".concat(f.min,") cannot exceed maximum (").concat(f.max,")."));if(p.min>p.max)throw new Error("Minimum number of words per sentence (".concat(p.min,") cannot exceed maximum (").concat(p.max,")."));this.sentencesPerParagraph=f,this.words=v,this.wordsPerSentence=p,this.random=g||Math.random}return r(c,[{key:"generateRandomInteger",value:function(d,f){return Math.floor(this.random()*(f-d+1)+d)}},{key:"generateRandomWords",value:function(d){var f=this,h=this.wordsPerSentence,p=h.min,g=h.max,y=d||this.generateRandomInteger(p,g);return(0,n.makeArrayOfLength)(y).reduce(function(v,w){return"".concat(f.pluckRandomWord()," ").concat(v)},"").trim()}},{key:"generateRandomSentence",value:function(d){return"".concat((0,n.capitalize)(this.generateRandomWords(d)),".")}},{key:"generateRandomParagraph",value:function(d){var f=this,h=this.sentencesPerParagraph,p=h.min,g=h.max,y=d||this.generateRandomInteger(p,g);return(0,n.makeArrayOfLength)(y).reduce(function(v,w){return"".concat(f.generateRandomSentence()," ").concat(v)},"").trim()}},{key:"pluckRandomWord",value:function(){var d=0,f=this.words.length-1,h=this.generateRandomInteger(d,f);return this.words[h]}}]),c}(),l=a;e.default=l})(ya);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Nt,n=Ai,i=r(ya),o=Vo;function r(f){return f&&f.__esModule?f:{default:f}}function s(f,h){if(!(f instanceof h))throw new TypeError("Cannot call a class as a function")}function a(f,h){for(var p=0;p<h.length;p++){var g=h[p];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}function l(f,h,p){return h&&a(f.prototype,h),Object.defineProperty(f,"prototype",{writable:!1}),f}function c(f,h,p){return h in f?Object.defineProperty(f,h,{value:p,enumerable:!0,configurable:!0,writable:!0}):f[h]=p,f}var u=function(){function f(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.FORMAT_PLAIN,g=arguments.length>2?arguments[2]:void 0;if(s(this,f),this.format=p,this.suffix=g,c(this,"generator",void 0),t.FORMATS.indexOf(p.toLowerCase())===-1)throw new Error("".concat(p," is an invalid format. Please use ").concat(t.FORMATS.join(" or "),"."));this.generator=new i.default(h)}return l(f,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,o.isReactNative)()&&(0,o.isNode)()&&(0,o.isWindows)()?n.LINE_ENDINGS.WIN32:n.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(p){return this.format===t.FORMAT_HTML?"<p>".concat(p,"</p>"):p}},{key:"formatStrings",value:function(p){var g=this;return p.map(function(y){return g.formatString(y)})}},{key:"generateWords",value:function(p){return this.formatString(this.generator.generateRandomWords(p))}},{key:"generateSentences",value:function(p){return this.formatString(this.generator.generateRandomParagraph(p))}},{key:"generateParagraphs",value:function(p){var g=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,o.makeArrayOfStrings)(p,g)).join(this.getLineEnding())}}]),f}(),d=u;e.default=d})(ba);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"LoremIpsum",{enumerable:!0,get:function(){return o.default}}),e.loremIpsum=void 0;var t=Nt,n=X,i=Pn,o=r(ba);function r(a){return a&&a.__esModule?a:{default:a}}var s=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=l.count,u=c===void 0?1:c,d=l.format,f=d===void 0?t.FORMAT_PLAIN:d,h=l.paragraphLowerBound,p=h===void 0?3:h,g=l.paragraphUpperBound,y=g===void 0?7:g,v=l.random,w=l.sentenceLowerBound,$=w===void 0?5:w,_=l.sentenceUpperBound,A=_===void 0?15:_,R=l.units,D=R===void 0?n.UNIT_SENTENCES:R,T=l.words,C=T===void 0?i.WORDS:T,E=l.suffix,P=E===void 0?"":E,I={random:v,sentencesPerParagraph:{max:y,min:p},words:C,wordsPerSentence:{max:A,min:$}},F=new o.default(I,f,P);switch(D){case n.UNIT_PARAGRAPHS:case n.UNIT_PARAGRAPH:return F.generateParagraphs(u);case n.UNIT_SENTENCES:case n.UNIT_SENTENCE:return F.generateSentences(u);case n.UNIT_WORDS:case n.UNIT_WORD:return F.generateWords(u);default:return""}};e.loremIpsum=s})(ca);function Wr(){return{date:"",description:"",options:[2],option_names:["Option-2"],entries:[Aa()]}}function Aa(){return{checked:!1,id:"",code:"",account:"",debit:0n,credit:0n}}const Ea=[];for(let e=0;e<100;e++)Ea.push({id:`${e}`,code:`${e%10}00.${e<10?"0":""}${e}`,name:ca.loremIpsum()});function nh(e,t){return new Promise((n,i)=>{const o=Ea.filter(s=>{const a=s.code.replace(/s+/g,"").toLocaleLowerCase(),l=s.name.replace(/s+/g,"").toLocaleLowerCase(),c=e.replace(/s+/g,"").toLocaleLowerCase();return a.includes(c)||l.includes(c)}).sort((s,a)=>s.code.localeCompare(a.code)),r=setTimeout(()=>n(o),250);t==null||t.addEventListener("abort",s=>{clearTimeout(r),i(new Error(s.type))},{once:!0})})}function ih(){return[{id:1,name:"Option-1"},{id:2,name:"Option-2"},{id:3,name:"Option-3"},{id:4,name:"Option-4"},{id:5,name:"Option-5"},{id:6,name:"Option-6"},{id:7,name:"Option-7"},{id:8,name:"Option-8"}]}var oh=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,We=(e,t,n,i)=>{for(var o=i>1?void 0:i?rh(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&oh(t,n,o),o};let oe=class extends Dt{constructor(){super(),this.transfer=Wr(),this.selected=0,this.accountCode="",this.accountList=[],this.notation="standard",this.fetchTask=new kd(this,{task:async(e,{signal:t})=>{this.accountList=this.accountCode?await nh(this.accountCode,t):[]},args:()=>[this.accountCode]}),this.media=null,this.handleMatchMedia=()=>this.notation=this.media.matches?"compact":"standard",this.addEventListener("keydown",e=>{["b","B"].includes(e.key)&&e.metaKey&&(this.balance(),this.requestUpdate(),e.preventDefault())})}get disabled(){return this.transfer.entries.length<2}get checked(){return this.selected>0&&this.selected===this.transfer.entries.length-1}get indeterminate(){return this.selected>0&&this.selected<this.transfer.entries.length-1}get debit(){return this.transfer.entries.reduce((e,{debit:t})=>e+t,0n)}get credit(){return this.transfer.entries.reduce((e,{credit:t})=>e+t,0n)}connectedCallback(){super.connectedCallback(),this.media=window.matchMedia("screen and (max-width: 576px)"),this.media.addEventListener("change",this.handleMatchMedia),this.handleMatchMedia()}disconnectedCallback(){super.disconnectedCallback(),this.media.removeEventListener("change",this.handleMatchMedia),this.media=null}balance(){const e=this.transfer.entries.length-1,t=this.transfer.entries[e];t.debit=0n,t.credit=0n;const n=this.debit,i=this.credit;n>i?t.credit=n-i:i>n&&(t.debit=i-n)}addEntry(){this.transfer.entries.push(Aa())}isLastEntry(e){return e===this.transfer.entries.length-1}jump(e){e&&(Xd(e,as),e.focus(ls))}handleKeyDown(e){if(["Enter"].includes(e.key)){const t=Q(e);this.jump(In(t)||Xo(t)),e.preventDefault()}else if(["ArrowDown","ArrowUp"].includes(e.key)){const t=Q(e);this.jump(Xo(t,e.key==="ArrowUp",Ga(t))),e.preventDefault()}else if(["ArrowLeft","ArrowRight"].includes(e.key)){const t=Q(e);t.canLeave(e.key==="ArrowLeft")&&(this.jump(In(t,e.key==="ArrowLeft")),e.preventDefault())}}render(){return O`
      <cell-grid columns="auto 1fr">
        <cell-group>
          <cell-item span="2"></cell-item>
        </cell-group>
        <cell-group>
          <cell-item>Date</cell-item>
          <cell-input
            type="date"
            value="${this.transfer.date}"
            @input="${e=>{const t=Q(e);this.transfer.date=t.value,this.requestUpdate()}}"
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
            @input="${e=>{const t=Q(e);this.transfer.description=t.value,this.requestUpdate()}}"
            @keydown="${e=>{this.handleKeyDown(e)}}"
          ></cell-input>
        </cell-group>
        <cell-group>
          <cell-item>Options</cell-item>
          <cell-select
            readonly
            list="options"
            @focus="${e=>{Q(e).show()}}"
            @selection="${e=>{const n=Q(e).selected;this.transfer.options=n.map(i=>parseInt(i.value)),this.transfer.option_names=n.map(i=>i.textContent||""),this.requestUpdate()}}"
            @keydown="${e=>{this.handleKeyDown(e)}}"
            ><cell-section gap wrap
              >${Dn(this.transfer.option_names,e=>O`<sl-tag>${e}</sl-tag>`)}</cell-section
            ></cell-select
          >
          <cell-datalist id="options" columns="auto auto">
            ${Dn(ih(),e=>O`<cell-option
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
              @sl-change="${e=>{const t=Q(e);for(let n=0;n<this.transfer.entries.length-1;n++)this.transfer.entries[n].checked=t.checked;this.selected=t.checked?this.transfer.entries.length-1:0}}"
            ></sl-checkbox
          ></cell-header>
          <cell-header>Code</cell-header>
          <cell-header>Account</cell-header>
          <cell-header justify="end">Debit</cell-header>
          <cell-header justify="end">Credit</cell-header>
        </cell-group>
        ${Dn(this.transfer.entries,(e,t)=>O`
            <cell-group>
              <cell-item
                ><sl-checkbox
                  ?checked="${e.checked}"
                  ?disabled="${this.isLastEntry(t)}"
                  @sl-change="${n=>{const i=Q(n);e.checked=i.checked,e.checked?this.selected++:this.selected--}}"
                ></sl-checkbox
              ></cell-item>
              <cell-item>${e.code}</cell-item>
              <cell-select
                stretch
                truncate
                list="accounts"
                value="${e.account}"
                @selection="${n=>{const i=Q(n),o=i.selected[0];if(o){if(o.value){this.isLastEntry(t)&&this.addEntry();const r=o.labels;e.id=o.value,e.code=r[0],e.account=r[1]}else e.id=e.code=e.account="";this.jump(In(i))}i.hide()}}"
                @input="${n=>{const i=Q(n);this.accountCode=i.value.trim(),i.show()}}"
                @hide="${n=>{const i=Q(n);i.value=e.account,i.reset(),this.accountCode="",this.requestUpdate()}}"
                @keydown="${n=>{(n.key!=="Enter"||e.id)&&this.handleKeyDown(n)}}"
              ></cell-select>
              <cell-input
                auto
                justify="end"
                value="${Ft(e.debit)}"
                @change="${n=>{const i=Q(n);e.debit=Gn(ar(i.value,16),14),e.debit&&(e.credit=0n),this.requestUpdate(),i.value=Ft(e.debit)}}"
                @keydown="${n=>{this.handleKeyDown(n)}}"
                ><cell-format
                  value="${Ft(e.debit)}"
                  notation="${this.notation}"
                ></cell-format
              ></cell-input>
              <cell-input
                auto
                justify="end"
                value="${Ft(e.credit)}"
                @change="${n=>{const i=Q(n);e.credit=Gn(ar(i.value,16),14),e.credit&&(e.debit=0n),this.requestUpdate(),i.value=Ft(e.credit)}}"
                @keydown="${n=>{this.handleKeyDown(n)}}"
                ><cell-format
                  value="${Ft(e.credit)}"
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
              value="${Ft(this.debit)}"
              notation="${this.notation}"
            ></cell-format
          ></cell-footer>
          <cell-footer justify="end"
            ><cell-format
              value="${Ft(this.credit)}"
              notation="${this.notation}"
            ></cell-format
          ></cell-footer>
        </cell-group>
      </cell-grid>
      <cell-datalist
        id="accounts"
        columns="max-content minmax(min-content, 1fr)"
      >
        ${this.fetchTask.render({complete:()=>O`
              <cell-option>
                <cell-item span="2">(none)</cell-item>
              </cell-option>
              ${Dn(this.accountList,e=>O`
                  <cell-option value="${e.id}">
                    <cell-item>${e.code}</cell-item>
                    <cell-item>${e.name}</cell-item>
                  </cell-option>
                `)}
            `,pending:()=>O`
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
            @click="${()=>{this.transfer=Wr(),this.selected=0}}"
            >Clear</sl-button
          ><sl-button
            @click="${()=>{this.balance(),this.requestUpdate()}}"
            >Balance</sl-button
          >
        </sl-button-group>
      </cell-section>
      <br />
    `}};oe.styles=[V`
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
    `];We([pt()],oe.prototype,"transfer",2);We([pt()],oe.prototype,"selected",2);We([pt()],oe.prototype,"accountCode",2);We([pt()],oe.prototype,"accountList",2);We([pt()],oe.prototype,"notation",2);oe=We([yi("cells-view")],oe);function sh(e){for(var t=[],n=0;n<e.length;){var i=e[n];if(i==="*"||i==="+"||i==="?"){t.push({type:"MODIFIER",index:n,value:e[n++]});continue}if(i==="\\"){t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(i==="{"){t.push({type:"OPEN",index:n,value:e[n++]});continue}if(i==="}"){t.push({type:"CLOSE",index:n,value:e[n++]});continue}if(i===":"){for(var o="",r=n+1;r<e.length;){var s=e.charCodeAt(r);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){o+=e[r++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(n));t.push({type:"NAME",index:n,value:o}),n=r;continue}if(i==="("){var a=1,l="",r=n+1;if(e[r]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(r));for(;r<e.length;){if(e[r]==="\\"){l+=e[r++]+e[r++];continue}if(e[r]===")"){if(a--,a===0){r++;break}}else if(e[r]==="("&&(a++,e[r+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(r));l+=e[r++]}if(a)throw new TypeError("Unbalanced pattern at ".concat(n));if(!l)throw new TypeError("Missing pattern at ".concat(n));t.push({type:"PATTERN",index:n,value:l}),n=r;continue}t.push({type:"CHAR",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}function Wo(e,t){t===void 0&&(t={});for(var n=sh(e),i=t.prefixes,o=i===void 0?"./":i,r=t.delimiter,s=r===void 0?"/#?":r,a=[],l=0,c=0,u="",d=function(C){if(c<n.length&&n[c].type===C)return n[c++].value},f=function(C){var E=d(C);if(E!==void 0)return E;var P=n[c],I=P.type,F=P.index;throw new TypeError("Unexpected ".concat(I," at ").concat(F,", expected ").concat(C))},h=function(){for(var C="",E;E=d("CHAR")||d("ESCAPED_CHAR");)C+=E;return C},p=function(C){for(var E=0,P=s;E<P.length;E++){var I=P[E];if(C.indexOf(I)>-1)return!0}return!1},g=function(C){var E=a[a.length-1],P=C||(E&&typeof E=="string"?E:"");if(E&&!P)throw new TypeError('Must have text between two parameters, missing text after "'.concat(E.name,'"'));return!P||p(P)?"[^".concat(qt(s),"]+?"):"(?:(?!".concat(qt(P),")[^").concat(qt(s),"])+?")};c<n.length;){var y=d("CHAR"),v=d("NAME"),w=d("PATTERN");if(v||w){var $=y||"";o.indexOf($)===-1&&(u+=$,$=""),u&&(a.push(u),u=""),a.push({name:v||l++,prefix:$,suffix:"",pattern:w||g($),modifier:d("MODIFIER")||""});continue}var _=y||d("ESCAPED_CHAR");if(_){u+=_;continue}u&&(a.push(u),u="");var A=d("OPEN");if(A){var $=h(),R=d("NAME")||"",D=d("PATTERN")||"",T=h();f("CLOSE"),a.push({name:R||(D?l++:""),pattern:R&&!D?g($):D,prefix:$,suffix:T,modifier:d("MODIFIER")||""});continue}f("END")}return a}function Sa(e,t){return Ca(Wo(e,t),t)}function Ca(e,t){t===void 0&&(t={});var n=qo(t),i=t.encode,o=i===void 0?function(l){return l}:i,r=t.validate,s=r===void 0?!0:r,a=e.map(function(l){if(typeof l=="object")return new RegExp("^(?:".concat(l.pattern,")$"),n)});return function(l){for(var c="",u=0;u<e.length;u++){var d=e[u];if(typeof d=="string"){c+=d;continue}var f=l?l[d.name]:void 0,h=d.modifier==="?"||d.modifier==="*",p=d.modifier==="*"||d.modifier==="+";if(Array.isArray(f)){if(!p)throw new TypeError('Expected "'.concat(d.name,'" to not repeat, but got an array'));if(f.length===0){if(h)continue;throw new TypeError('Expected "'.concat(d.name,'" to not be empty'))}for(var g=0;g<f.length;g++){var y=o(f[g],d);if(s&&!a[u].test(y))throw new TypeError('Expected all "'.concat(d.name,'" to match "').concat(d.pattern,'", but got "').concat(y,'"'));c+=d.prefix+y+d.suffix}continue}if(typeof f=="string"||typeof f=="number"){var y=o(String(f),d);if(s&&!a[u].test(y))throw new TypeError('Expected "'.concat(d.name,'" to match "').concat(d.pattern,'", but got "').concat(y,'"'));c+=d.prefix+y+d.suffix;continue}if(!h){var v=p?"an array":"a string";throw new TypeError('Expected "'.concat(d.name,'" to be ').concat(v))}}return c}}function qt(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function qo(e){return e&&e.sensitive?"":"i"}function ah(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,o=n.exec(e.source);o;)t.push({name:o[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),o=n.exec(e.source);return e}function lh(e,t,n){var i=e.map(function(o){return ka(o,t,n).source});return new RegExp("(?:".concat(i.join("|"),")"),qo(n))}function ch(e,t,n){return uh(Wo(e,n),t,n)}function uh(e,t,n){n===void 0&&(n={});for(var i=n.strict,o=i===void 0?!1:i,r=n.start,s=r===void 0?!0:r,a=n.end,l=a===void 0?!0:a,c=n.encode,u=c===void 0?function(E){return E}:c,d=n.delimiter,f=d===void 0?"/#?":d,h=n.endsWith,p=h===void 0?"":h,g="[".concat(qt(p),"]|$"),y="[".concat(qt(f),"]"),v=s?"^":"",w=0,$=e;w<$.length;w++){var _=$[w];if(typeof _=="string")v+=qt(u(_));else{var A=qt(u(_.prefix)),R=qt(u(_.suffix));if(_.pattern)if(t&&t.push(_),A||R)if(_.modifier==="+"||_.modifier==="*"){var D=_.modifier==="*"?"?":"";v+="(?:".concat(A,"((?:").concat(_.pattern,")(?:").concat(R).concat(A,"(?:").concat(_.pattern,"))*)").concat(R,")").concat(D)}else v+="(?:".concat(A,"(").concat(_.pattern,")").concat(R,")").concat(_.modifier);else{if(_.modifier==="+"||_.modifier==="*")throw new TypeError('Can not repeat "'.concat(_.name,'" without a prefix and suffix'));v+="(".concat(_.pattern,")").concat(_.modifier)}else v+="(?:".concat(A).concat(R,")").concat(_.modifier)}}if(l)o||(v+="".concat(y,"?")),v+=n.endsWith?"(?=".concat(g,")"):"$";else{var T=e[e.length-1],C=typeof T=="string"?y.indexOf(T[T.length-1])>-1:T===void 0;o||(v+="(?:".concat(y,"(?=").concat(g,"))?")),C||(v+="(?=".concat(y,"|").concat(g,")"))}return new RegExp(v,qo(n))}function ka(e,t,n){return e instanceof RegExp?ah(e,t):Array.isArray(e)?lh(e,t,n):ch(e,t,n)}function le(e){return typeof e=="object"&&!!e}function gn(e){return typeof e=="function"}function Ct(e){return typeof e=="string"}function ai(e=[]){return Array.isArray(e)?e:[e]}function Gt(e){return`[Vaadin.Router] ${e}`}class Ra extends Error{constructor(n){super(Gt(`Page not found (${n.pathname})`));gt(this,"code");gt(this,"context");this.context=n,this.code=404}}const pe=Symbol("NotFoundResult");function Pa(e){return new Ra(e)}function Oa(e){return(Array.isArray(e)?e[0]:e)??""}function li(e){return Oa(e==null?void 0:e.path)}function dh(e){return Array.isArray(e)&&e.length>0?e:void 0}const ao=new Map;ao.set("|false",{keys:[],pattern:/(?:)/u});function qr(e){try{return decodeURIComponent(e)}catch{return e}}function hh(e,t,n=!1,i=[],o){const r=`${e}|${String(n)}`,s=Oa(t);let a=ao.get(r);if(!a){const u=[];a={keys:u,pattern:ka(e,u,{end:n,strict:e===""})},ao.set(r,a)}const l=a.pattern.exec(s);if(!l)return null;const c={...o};for(let u=1;u<l.length;u++){const d=a.keys[u-1],f=d.name,h=l[u];(h!==void 0||!Object.hasOwn(c,f))&&(d.modifier==="+"||d.modifier==="*"?c[f]=h?h.split(/[/?#]/u).map(qr):[]:c[f]=h&&qr(h))}return{keys:[...i,...a.keys],params:c,path:l[0]}}var fh=hh;function Ta(e,t,n,i,o){let r,s,a=0,l=li(e);return l.startsWith("/")&&(n&&(l=l.substring(1)),n=!0),{next(c){if(e===c)return{done:!0,value:void 0};e.__children??(e.__children=dh(e.children));const u=e.__children??[],d=!e.__children&&!e.children;if(!r&&(r=fh(l,t,d,i,o),r))return{value:{keys:r.keys,params:r.params,path:r.path,route:e}};if(r&&u.length>0)for(;a<u.length;){if(!s){const h=u[a];h.parent=e;let p=r.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=Ta(h,t.substring(p),n,r.keys,r.params)}const f=s.next(c);if(!f.done)return{done:!1,value:f.value};s=null,a+=1}return{done:!0,value:void 0}}}}var ph=Ta;function mh(e){if(gn(e.route.action))return e.route.action(e)}function gh(e,t){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}function vh(e){return!!e&&typeof e=="object"&&"next"in e&&"params"in e&&"result"in e&&"route"in e}class bh extends Error{constructor(n,i){let o=`Path '${n.pathname}' is not properly resolved due to an error.`;const r=li(n.route);r&&(o+=` Resolution had failed on route: '${r}'`);super(o,i);gt(this,"code");gt(this,"context");this.code=i==null?void 0:i.code,this.context=n}warn(){console.warn(this.message)}}function yh(e,t){var o;const{path:n,route:i}=t;if(i&&!i.__synthetic){const r={path:n,route:i};if(i.parent&&e.chain)for(let s=e.chain.length-1;s>=0&&e.chain[s].route!==i.parent;s--)e.chain.pop();(o=e.chain)==null||o.push(r)}}var de,tt;class La{constructor(t,{baseUrl:n="",context:i,errorHandler:o,resolveRoute:r=mh}={}){gt(this,"baseUrl");ut(this,de);gt(this,"errorHandler");gt(this,"resolveRoute");ut(this,tt);if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=n,this.errorHandler=o,this.resolveRoute=r,Array.isArray(t)?J(this,tt,{__children:t,__synthetic:!0,action:()=>{},path:""}):J(this,tt,{...t,parent:void 0}),J(this,de,{...i,hash:"",async next(){return pe},params:{},pathname:"",resolver:this,route:k(this,tt),search:"",chain:[]})}get root(){return k(this,tt)}get context(){return k(this,de)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...k(this,tt).__children??[]]}removeRoutes(){k(this,tt).__children=[]}async resolve(t){const n=this,i={...k(this,de),...Ct(t)?{pathname:t}:t,next:c},o=ph(k(this,tt),this.__normalizePathname(i.pathname)??i.pathname,!!this.baseUrl),r=this.resolveRoute;let s=null,a=null,l=i;async function c(u=!1,d=(h=>(h=s==null?void 0:s.value)==null?void 0:h.route)(),f){var y,v;const p=f===null?(y=s==null?void 0:s.value)==null?void 0:y.route:void 0;if(s=a??o.next(p),a=null,!u&&(s.done||!gh(s.value.route,d)))return a=s,pe;if(s.done)throw Pa(i);l={...i,params:s.value.params,route:s.value.route,chain:(v=l.chain)==null?void 0:v.slice()},yh(l,s.value);const g=await r(l);return g!=null&&g!==pe?(l.result=vh(g)?g.result:g,J(n,de,l),l):await c(u,d,g)}try{return await c(!0,k(this,tt))}catch(u){const d=u instanceof Ra?u:new bh(l,{code:500,cause:u});if(this.errorHandler)return l.result=this.errorHandler(d),l;throw u}}setRoutes(t){k(this,tt).__children=[...ai(t)]}__normalizePathname(t){if(!this.baseUrl)return t;const n=this.__effectiveBaseUrl,i=t.startsWith("/")?new URL(n).origin+t:`./${t}`,o=new URL(i,n).href;if(o.startsWith(n))return o.slice(n.length)}addRoutes(t){return k(this,tt).__children=[...k(this,tt).__children??[],...ai(t)],this.getRoutes()}}de=new WeakMap,tt=new WeakMap;function Ma(e,t,n,i){var r;const o=t.name??(i==null?void 0:i(t));if(o&&(e.has(o)?(r=e.get(o))==null||r.push(t):e.set(o,[t])),Array.isArray(n))for(const s of n)s.parent=t,Ma(e,s,s.__children??s.children,i)}function Yr(e,t){const n=e.get(t);if(n){if(n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n[0]}}function wh(e,t={}){if(!(e instanceof La))throw new TypeError("An instance of Resolver is expected");const n=new Map,i=new Map;return(o,r)=>{let s=Yr(i,o);if(!s&&(i.clear(),Ma(i,e.root,e.root.__children,t.cacheKeyProvider),s=Yr(i,o),!s))throw new Error(`Route "${o}" not found`);let a=s.fullPath?n.get(s.fullPath):void 0;if(!a){let u=li(s),d=s.parent;for(;d;){const p=li(d);p&&(u=`${p.replace(/\/$/u,"")}/${u.replace(/^\//u,"")}`),d=d.parent}const f=Wo(u),h=Object.create(null);for(const p of f)Ct(p)||(h[p.name]=!0);a={keys:h,tokens:f},n.set(u,a),s.fullPath=u}let c=Ca(a.tokens,{encode:encodeURIComponent,...t})(r)||"/";if(t.stringifyQueryParams&&r){const u={};for(const[f,h]of Object.entries(r))!(f in a.keys)&&h&&(u[f]=h);const d=t.stringifyQueryParams(u);d&&(c+=d.startsWith("?")?d:`?${d}`)}return c}}var _h=wh;const $h=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Vn=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function xh(){function e(){return!0}return Da(e)}function Ah(){try{return Eh()?!0:Sh()?Vn?!Ch():!xh():!1}catch{return!1}}function Eh(){return localStorage.getItem("vaadin.developmentmode.force")}function Sh(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ch(){return!!(Vn&&Object.keys(Vn).map(t=>Vn[t]).filter(t=>t.productionMode).length>0)}function Da(e,t){if(typeof e!="function")return;const n=$h.exec(e.toString());if(n)try{e=new Function(n[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return e(t)}window.Vaadin=window.Vaadin||{};const Kr=function(e,t){if(window.Vaadin.developmentMode)return Da(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ah());function kh(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const Rh=function(){if(typeof Kr=="function")return Kr(kh)};function Ph(e,t=window.Vaadin??(window.Vaadin={})){t.registrations??(t.registrations=[]),t.registrations.push({is:"@vaadin/router",version:"2.0.0-rc4"})}Ph();Rh();const Oh=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Th=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};async function Lh(e,t){return e.classList.add(t),await new Promise(n=>{if(Oh(e)){const i=e.getBoundingClientRect(),o=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${o}`),Th(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}var Xr=Lh;function Na(e){if(!e||!Ct(e.path))throw new Error(Gt('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!gn(e.action)&&!Array.isArray(e.children)&&!gn(e.children)&&!Ct(e.component)&&!Ct(e.redirect))throw new Error(Gt(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(Gt(`Route config "${String(e.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function Gr(e){ai(e).forEach(t=>Na(t))}function Mh({next:e,...t}){return t}function jn(e,t){const n=t.__effectiveBaseUrl;return n?new URL(e.replace(/^\//u,""),n).pathname:e}function Ia(e){return e.map(t=>t.path).reduce((t,n)=>n.length?`${t.replace(/\/$/u,"")}/${n.replace(/^\//u,"")}`:t,"")}function Dh(e){return Ia(e.map(t=>t.route))}function vt({chain:e=[],hash:t="",params:n={},pathname:i="",redirectFrom:o,resolver:r,search:s=""},a){const l=e.map(c=>c.route);return{baseUrl:(r==null?void 0:r.baseUrl)??"",getUrl:(c={})=>r?jn(Sa(Dh(e))({...n,...c}),r):"",hash:t,params:n,pathname:i,redirectFrom:o,route:a??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:s,searchParams:new URLSearchParams(s)}}function Zr(e,t){const n={...e.params};return{redirect:{from:e.pathname,params:n,pathname:t}}}function Nh(e,t){if(t.location=vt(e),e.chain){const n=e.chain.map(i=>i.route).indexOf(e.route);e.chain[n].element=t}return t}function Wn(e,t,...n){if(typeof e=="function")return e.apply(t,n)}function Jr(e,t,...n){return i=>i&&le(i)&&("cancel"in i||"redirect"in i)?i:Wn(t==null?void 0:t[e],t,...n)}function Ih(e,t){if(!Array.isArray(e)&&!le(e))throw new Error(Gt(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(e)}`));const n=ai(e);n.forEach(i=>Na(i)),t.__children=n}function sn(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Uh(e){if(typeof e!="object")return String(e);const[t="Unknown"]=/ (.*)\]$/u.exec(String(e))??[];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}function zh(e){const{port:t,protocol:n}=e,r=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${r}`}function Qr(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function ts(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e instanceof MouseEvent?e.composedPath():e.path??[];for(let l=0;l<n.length;l++){const c=n[l];if("nodeName"in c&&c.nodeName.toLowerCase()==="a"){t=c;break}}for(;t&&t instanceof Node&&Qr(t)!=="a";)t=t.parentNode;if(!t||Qr(t)!=="a")return;const i=t;if(i.target&&i.target.toLowerCase()!=="_self"||i.hasAttribute("download")||i.hasAttribute("router-ignore")||i.pathname===window.location.pathname&&i.hash!==""||(i.origin||zh(i))!==window.location.origin)return;const{hash:r,pathname:s,search:a}=i;sn("go",{hash:r,pathname:s,search:a})&&e instanceof MouseEvent&&(e.preventDefault(),e.type==="click"&&window.scrollTo(0,0))}const Bh={activate(){window.document.addEventListener("click",ts)},inactivate(){window.document.removeEventListener("click",ts)}};var Fh=Bh;function es(e){if(e.state==="vaadin-router-ignore")return;const{hash:t,pathname:n,search:i}=window.location;sn("go",{hash:t,pathname:n,search:i})}const Hh={activate(){window.addEventListener("popstate",es)},inactivate(){window.removeEventListener("popstate",es)}};var Vh=Hh;let ns=[];const jh={CLICK:Fh,POPSTATE:Vh};function is(e=[]){ns.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),ns=e}const Wh=256;function Qe(){return{cancel:!0}}const os={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return pe}};var bn,Oe,yn,he,Yt,fe,St,bt,x,Ua,za,qn,lo,Ba,Fa,co,uo,ho,Ht,fo,po,Yn,mo,Ha,Va,ja,Wa,qa,Ya,go;class qh extends La{constructor(n,i){const o=document.head.querySelector("base"),r=o==null?void 0:o.getAttribute("href");super([],{baseUrl:r?new URL(r,document.URL).href.replace(/[^/]*$/u,""):void 0,...i,resolveRoute:async s=>await S(this,x,Ua).call(this,s)});ut(this,x);gt(this,"location",vt({resolver:this}));gt(this,"ready",Promise.resolve(this.location));ut(this,bn,new WeakSet);ut(this,Oe,new WeakSet);ut(this,yn,S(this,x,go).bind(this));ut(this,he,0);ut(this,Yt);gt(this,"__previousContext");ut(this,fe);ut(this,St,null);ut(this,bt,null);is(Object.values(jh)),this.setOutlet(n),this.subscribe()}setOutlet(n){n&&S(this,x,po).call(this,n),J(this,Yt,n)}getOutlet(){return k(this,Yt)}async setRoutes(n,i=!1){return this.__previousContext=void 0,J(this,fe,void 0),Gr(n),super.setRoutes(n),i||S(this,x,go).call(this),await this.ready}addRoutes(n){return Gr(n),super.addRoutes(n)}async render(n,i=!1){J(this,he,k(this,he)+1);const o=k(this,he),r={...os,...Ct(n)?{hash:"",search:"",pathname:n}:n,__renderId:o};return this.ready=S(this,x,za).call(this,r,i),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",k(this,yn))}unsubscribe(){window.removeEventListener("vaadin-router-go",k(this,yn))}static setTriggers(...n){is(n)}urlForName(n,i){return k(this,fe)||J(this,fe,_h(this,{cacheKeyProvider(o){return"component"in o&&typeof o.component=="string"?o.component:void 0}})),jn(k(this,fe).call(this,n,i??void 0),this)}urlForPath(n,i){return jn(Sa(n)(i??void 0),this)}static go(n){const{pathname:i,search:o,hash:r}=Ct(n)?new URL(n,"http://a"):n;return sn("go",{pathname:i,search:o,hash:r})}}bn=new WeakMap,Oe=new WeakMap,yn=new WeakMap,he=new WeakMap,Yt=new WeakMap,fe=new WeakMap,St=new WeakMap,bt=new WeakMap,x=new WeakSet,Ua=async function(n){const{route:i}=n;if(gn(i.children)){let r=await i.children(Mh(n));gn(i.children)||({children:r}=i),Ih(r,i)}const o={component:r=>{const s=document.createElement(r);return k(this,Oe).add(s),s},prevent:Qe,redirect:r=>Zr(n,r)};return await Promise.resolve().then(async()=>{if(S(this,x,Ht).call(this,n))return await Wn(i.action,i,n,o)}).then(r=>{if(r!=null&&(typeof r=="object"||typeof r=="symbol")&&(r instanceof HTMLElement||r===pe||le(r)&&"redirect"in r))return r;if(Ct(i.redirect))return o.redirect(i.redirect)}).then(r=>{if(r!=null)return r;if(Ct(i.component))return o.component(i.component)})},za=async function(n,i){var r;const{__renderId:o}=n;try{const s=await this.resolve(n),a=await S(this,x,qn).call(this,s);if(!S(this,x,Ht).call(this,a))return this.location;const l=this.__previousContext;if(a===l)return S(this,x,Yn).call(this,l,!0),this.location;if(this.location=vt(a),i&&S(this,x,Yn).call(this,a,o===1),sn("location-changed",{router:this,location:this.location}),a.__skipAttach)return S(this,x,mo).call(this,a,l),this.__previousContext=a,this.location;S(this,x,Ha).call(this,a,l);const c=S(this,x,Ya).call(this,a);if(S(this,x,qa).call(this,a),S(this,x,Wa).call(this,a,l),await c,S(this,x,Ht).call(this,a))return S(this,x,Va).call(this),this.__previousContext=a,this.location}catch(s){if(o===k(this,he)){i&&S(this,x,Yn).call(this,this.context);for(const a of((r=k(this,Yt))==null?void 0:r.children)??[])a.remove();throw this.location=vt(Object.assign(n,{resolver:this})),sn("error",{router:this,error:s,...n}),s}}return this.location},qn=async function(n,i=n){const o=await S(this,x,lo).call(this,i),s=o!==i?o:n,l=jn(Ia(o.chain??[]),this)===o.pathname,c=async(d,f=d.route,h)=>{const p=await d.next(!1,f,h);return p===null||p===pe?l?d:f.parent!=null?await c(d,f.parent,p):p:p},u=await c(o);if(u==null||u===pe)throw Pa(s);return u!==o?await S(this,x,qn).call(this,s,u):await S(this,x,Ba).call(this,o)},lo=async function(n){const{result:i}=n;if(i instanceof HTMLElement)return Nh(n,i),n;if(i&&"redirect"in i){const o=await S(this,x,fo).call(this,i.redirect,n.__redirectCount,n.__renderId);return await S(this,x,lo).call(this,o)}throw i instanceof Error?i:new Error(Gt(`Invalid route resolution result for path "${n.pathname}". Expected redirect object or HTML element, but got: "${Uh(i)}". Double check the action return value for the route.`))},Ba=async function(n){return await S(this,x,Fa).call(this,n).then(async i=>i===this.__previousContext||i===n?i:await S(this,x,qn).call(this,i))},Fa=async function(n){const i=this.__previousContext??{},o=i.chain??[],r=n.chain??[];let s=Promise.resolve(void 0);const a=l=>Zr(n,l);if(n.__divergedChainIndex=0,n.__skipAttach=!1,o.length){for(let l=0;l<Math.min(o.length,r.length)&&!(o[l].route!==r[l].route||o[l].path!==r[l].path&&o[l].element!==r[l].element||!S(this,x,ho).call(this,o[l].element,r[l].element));n.__divergedChainIndex++,l++);if(n.__skipAttach=r.length===o.length&&n.__divergedChainIndex===r.length&&S(this,x,ho).call(this,n.result,i.result),n.__skipAttach){for(let l=r.length-1;l>=0;l--)s=S(this,x,co).call(this,s,n,{prevent:Qe},o[l]);for(let l=0;l<r.length;l++)s=S(this,x,uo).call(this,s,n,{prevent:Qe,redirect:a},r[l]),o[l].element.location=vt(n,o[l].route)}else for(let l=o.length-1;l>=n.__divergedChainIndex;l--)s=S(this,x,co).call(this,s,n,{prevent:Qe},o[l])}if(!n.__skipAttach)for(let l=0;l<r.length;l++)l<n.__divergedChainIndex?l<o.length&&o[l].element&&(o[l].element.location=vt(n,o[l].route)):(s=S(this,x,uo).call(this,s,n,{prevent:Qe,redirect:a},r[l]),r[l].element&&(r[l].element.location=vt(n,r[l].route)));return await s.then(async l=>{if(l&&le(l)){if("cancel"in l&&this.__previousContext)return this.__previousContext.__renderId=n.__renderId,this.__previousContext;if("redirect"in l)return await S(this,x,fo).call(this,l.redirect,n.__redirectCount,n.__renderId)}return n})},co=async function(n,i,o,r){const s=vt(i);let a=await n;if(S(this,x,Ht).call(this,i)&&(a=Jr("onBeforeLeave",r.element,s,o,this)(a)),!(le(a)&&"redirect"in a))return a},uo=async function(n,i,o,r){const s=vt(i,r.route),a=await n;if(S(this,x,Ht).call(this,i))return Jr("onBeforeEnter",r.element,s,o,this)(a)},ho=function(n,i){return n instanceof Element&&i instanceof Element?k(this,Oe).has(n)&&k(this,Oe).has(i)?n.localName===i.localName:n===i:!1},Ht=function(n){return n.__renderId===k(this,he)},fo=async function(n,i=0,o=0){if(i>Wh)throw new Error(Gt(`Too many redirects when rendering ${n.from}`));return await this.resolve({...os,pathname:this.urlForPath(n.pathname,n.params),redirectFrom:n.from,__redirectCount:i+1,__renderId:o})},po=function(n=k(this,Yt)){if(!(n instanceof Element||n instanceof DocumentFragment))throw new TypeError(Gt(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${n})`))},Yn=function({pathname:n,search:i="",hash:o=""},r){if(window.location.pathname!==n||window.location.search!==i||window.location.hash!==o){const s=r?"replaceState":"pushState";window.history[s](null,document.title,n+i+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}},mo=function(n,i){var r;let o=k(this,Yt);for(let s=0;s<(n.__divergedChainIndex??0);s++){const a=(r=i==null?void 0:i.chain)==null?void 0:r[s].element;if(a)if(a.parentNode===o)n.chain[s].element=a,o=a;else break}return o},Ha=function(n,i){var s;S(this,x,po).call(this),S(this,x,ja).call(this);const o=S(this,x,mo).call(this,n,i);J(this,St,[]),J(this,bt,Array.from((o==null?void 0:o.children)??[]).filter(a=>k(this,bn).has(a)&&a!==n.result));let r=o;for(let a=n.__divergedChainIndex??0;a<(((s=n.chain)==null?void 0:s.length)??0);a++){const l=n.chain[a].element;l&&(r==null||r.appendChild(l),k(this,bn).add(l),r===o&&k(this,St).push(l),r=l)}},Va=function(){if(k(this,bt))for(const n of k(this,bt))n.remove();J(this,bt,null),J(this,St,null)},ja=function(){if(k(this,bt)&&k(this,St)){for(const n of k(this,St))n.remove();J(this,bt,null),J(this,St,null)}},Wa=function(n,i){var o;if(!(!(i!=null&&i.chain)||n.__divergedChainIndex==null))for(let r=i.chain.length-1;r>=n.__divergedChainIndex&&S(this,x,Ht).call(this,n);r--){const s=i.chain[r].element;if(s)try{const a=vt(n);Wn(s.onAfterLeave,s,a,{},this)}finally{if((o=k(this,bt))!=null&&o.includes(s))for(const a of s.children)a.remove()}}},qa=function(n){if(!(!n.chain||n.__divergedChainIndex==null))for(let i=n.__divergedChainIndex;i<n.chain.length&&S(this,x,Ht).call(this,n);i++){const o=n.chain[i].element;if(o){const r=vt(n,n.chain[i].route);Wn(o.onAfterEnter,o,r,{},this)}}},Ya=async function(n){var l,c;const i=(l=k(this,bt))==null?void 0:l[0],o=(c=k(this,St))==null?void 0:c[0],r=[],{chain:s=[]}=n;let a;for(let u=s.length-1;u>=0;u--)if(s[u].route.animate){a=s[u].route.animate;break}if(i&&o&&a){const u=le(a)&&a.leave?a.leave:"leaving",d=le(a)&&a.enter?a.enter:"entering";r.push(Xr(i,u)),r.push(Xr(o,d))}return await Promise.all(r),n},go=function(n){const{pathname:i,search:o,hash:r}=n instanceof CustomEvent?n.detail:window.location;Ct(this.__normalizePathname(i))&&(n!=null&&n.preventDefault&&n.preventDefault(),this.render({pathname:i,search:o,hash:r},!0))};const Yh="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20class='bi%20bi-sun'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='M8%2011a3%203%200%201%201%200-6%203%203%200%200%201%200%206m0%201a4%204%200%201%200%200-8%204%204%200%200%200%200%208M8%200a.5.5%200%200%201%20.5.5v2a.5.5%200%200%201-1%200v-2A.5.5%200%200%201%208%200m0%2013a.5.5%200%200%201%20.5.5v2a.5.5%200%200%201-1%200v-2A.5.5%200%200%201%208%2013m8-5a.5.5%200%200%201-.5.5h-2a.5.5%200%200%201%200-1h2a.5.5%200%200%201%20.5.5M3%208a.5.5%200%200%201-.5.5h-2a.5.5%200%200%201%200-1h2A.5.5%200%200%201%203%208m10.657-5.657a.5.5%200%200%201%200%20.707l-1.414%201.415a.5.5%200%201%201-.707-.708l1.414-1.414a.5.5%200%200%201%20.707%200m-9.193%209.193a.5.5%200%200%201%200%20.707L3.05%2013.657a.5.5%200%200%201-.707-.707l1.414-1.414a.5.5%200%200%201%20.707%200m9.193%202.121a.5.5%200%200%201-.707%200l-1.414-1.414a.5.5%200%200%201%20.707-.707l1.414%201.414a.5.5%200%200%201%200%20.707M4.464%204.465a.5.5%200%200%201-.707%200L2.343%203.05a.5.5%200%201%201%20.707-.707l1.414%201.414a.5.5%200%200%201%200%20.708'/%3e%3c/svg%3e";var Kh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,Yo=(e,t,n,i)=>{for(var o=i>1?void 0:i?Xh(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&Kh(t,n,o),o};let vn=class extends Dt{constructor(){super(),this.router=new qh,this.theme="sl-theme-light",this.router.setRoutes([{path:"/",component:"home-view"},{path:"/cells",component:"cells-view"},{path:"(.*)",component:"error-view"}])}renderMenu(){return O`
      <sl-dropdown>
        <sl-button slot="trigger" caret>
          <sl-icon src="${Yh}"></sl-icon>
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
    `}render(){return O`
      <cell-section flow>
        <cell-section justify="end">${this.renderMenu()}</cell-section>
        <cell-section><main></main></cell-section>
      </cell-section>
    `}firstUpdated(e){this.router.setOutlet(this.main)}updated(e){e.has("theme")&&(document.documentElement.className=this.theme)}};vn.styles=[V`
      :host {
        height: 100%;
      }

      main {
        display: block;
        overflow: scroll;
        width: 100%;
        height: calc(100dvh - 40px);
      }
    `];Yo([pt()],vn.prototype,"theme",2);Yo([st("main")],vn.prototype,"main",2);vn=Yo([yi("main-view")],vn);
