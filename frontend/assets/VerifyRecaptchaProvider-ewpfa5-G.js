import{b as f,j as v,a1 as K}from"./index-a5M0-iHg.js";import{S as U,g as W,aa as X,ab as Y,ac as Z,ad as ee,ae as te}from"./App-CVSM3Vok.js";import{T as re}from"./index-COk1T-iJ.js";import{a as oe}from"./auth.service-DZ3TTAcF.js";function be(e){const{theme:t}=f.useContext(U),{altTextColor:n}=W(t);return v.jsxs(X,{children:[v.jsxs(Y,{children:[v.jsx(Z,{src:e.imgSrc}),v.jsx(re,{color:n,children:e.label})]}),v.jsx(ee,{onClick:e.onClick,bordercolor:n,children:e.checkImgSrc&&v.jsx(te,{src:e.checkImgSrc})})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var B=function(){return B=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e},B.apply(this,arguments)},F,ne=function(e){var t;e?function(n){if(n)for(;n.lastChild;)n.lastChild.remove()}(typeof e=="string"?document.getElementById(e):e):(t=document.querySelector(".grecaptcha-badge"))&&t.parentNode&&document.body.removeChild(t.parentNode)},ae=function(e,t){ne(t),window.___grecaptcha_cfg=void 0;var n=document.querySelector("#"+e);n&&n.remove(),function(){var i=document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');i&&i.remove()}()},ce=function(e){var t=e.render,n=e.onLoadCallbackName,i=e.language,u=e.onLoad,g=e.useRecaptchaNet,d=e.useEnterprise,p=e.scriptProps,o=p===void 0?{}:p,y=o.nonce,h=y===void 0?"":y,c=o.defer,x=c!==void 0&&c,m=o.async,_=m!==void 0&&m,S=o.id,w=S===void 0?"":S,A=o.appendTo,C=w||"google-recaptcha-v3";if(function(b){return!!document.querySelector("#"+b)}(C))u();else{var R=function(b){return"https://www."+(b.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(b.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:d,useRecaptchaNet:g}),l=document.createElement("script");l.id=C,l.src=R+"?render="+t+(t==="explicit"?"&onload="+n:"")+(i?"&hl="+i:""),h&&(l.nonce=h),l.defer=!!x,l.async=!!_,l.onload=u,(A==="body"?document.body:document.getElementsByTagName("head")[0]).appendChild(l)}},q=function(e){console.warn(e)};(function(e){e.SCRIPT_NOT_AVAILABLE="Recaptcha script is not available"})(F||(F={}));var z=f.createContext({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});z.Consumer;function xe(e){var t=e.reCaptchaKey,n=e.useEnterprise,i=n!==void 0&&n,u=e.useRecaptchaNet,g=u!==void 0&&u,d=e.scriptProps,p=e.language,o=e.container,y=e.children,h=f.useState(null),c=h[0],x=h[1],m=f.useRef(t),_=JSON.stringify(d),S=JSON.stringify(o==null?void 0:o.parameters);f.useEffect(function(){if(t){var C=(d==null?void 0:d.id)||"google-recaptcha-v3",R=(d==null?void 0:d.onLoadCallbackName)||"onRecaptchaLoadCallback";return window[R]=function(){var l=i?window.grecaptcha.enterprise:window.grecaptcha,b=B({badge:"inline",size:"invisible",sitekey:t},(o==null?void 0:o.parameters)||{});m.current=l.render(o==null?void 0:o.element,b)},ce({render:o!=null&&o.element?"explicit":t,onLoadCallbackName:R,useEnterprise:i,useRecaptchaNet:g,scriptProps:d,language:p,onLoad:function(){if(window&&window.grecaptcha){var l=i?window.grecaptcha.enterprise:window.grecaptcha;l.ready(function(){x(l)})}else q("<GoogleRecaptchaProvider /> "+F.SCRIPT_NOT_AVAILABLE)}}),function(){ae(C,o==null?void 0:o.element)}}q("<GoogleReCaptchaProvider /> recaptcha key not provided")},[i,g,_,S,p,t,o==null?void 0:o.element]);var w=f.useCallback(function(C){if(!c||!c.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return c.execute(m.current,{action:C})},[c,m]),A=f.useMemo(function(){return{executeRecaptcha:c?w:void 0,container:o==null?void 0:o.element}},[w,c,o==null?void 0:o.element]);return K.createElement(z.Provider,{value:A},y)}var ie=function(){return f.useContext(z)};function Q(e,t){return e(t={exports:{}},t.exports),t.exports;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var a=typeof Symbol=="function"&&Symbol.for,O=a?Symbol.for("react.element"):60103,V=a?Symbol.for("react.portal"):60106,P=a?Symbol.for("react.fragment"):60107,$=a?Symbol.for("react.strict_mode"):60108,k=a?Symbol.for("react.profiler"):60114,E=a?Symbol.for("react.provider"):60109,M=a?Symbol.for("react.context"):60110,G=a?Symbol.for("react.async_mode"):60111,I=a?Symbol.for("react.concurrent_mode"):60111,N=a?Symbol.for("react.forward_ref"):60112,L=a?Symbol.for("react.suspense"):60113,se=a?Symbol.for("react.suspense_list"):60120,j=a?Symbol.for("react.memo"):60115,T=a?Symbol.for("react.lazy"):60116,ue=a?Symbol.for("react.block"):60121,le=a?Symbol.for("react.fundamental"):60117,fe=a?Symbol.for("react.responder"):60118,de=a?Symbol.for("react.scope"):60119;function s(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case O:switch(e=e.type){case G:case I:case P:case k:case $:case L:return e;default:switch(e=e&&e.$$typeof){case M:case N:case T:case j:case E:return e;default:return t}}case V:return t}}}function J(e){return s(e)===I}var pe={AsyncMode:G,ConcurrentMode:I,ContextConsumer:M,ContextProvider:E,Element:O,ForwardRef:N,Fragment:P,Lazy:T,Memo:j,Portal:V,Profiler:k,StrictMode:$,Suspense:L,isAsyncMode:function(e){return J(e)||s(e)===G},isConcurrentMode:J,isContextConsumer:function(e){return s(e)===M},isContextProvider:function(e){return s(e)===E},isElement:function(e){return typeof e=="object"&&e!==null&&e.$$typeof===O},isForwardRef:function(e){return s(e)===N},isFragment:function(e){return s(e)===P},isLazy:function(e){return s(e)===T},isMemo:function(e){return s(e)===j},isPortal:function(e){return s(e)===V},isProfiler:function(e){return s(e)===k},isStrictMode:function(e){return s(e)===$},isSuspense:function(e){return s(e)===L},isValidElementType:function(e){return typeof e=="string"||typeof e=="function"||e===P||e===I||e===k||e===$||e===L||e===se||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===j||e.$$typeof===E||e.$$typeof===M||e.$$typeof===N||e.$$typeof===le||e.$$typeof===fe||e.$$typeof===de||e.$$typeof===ue)},typeOf:s},r=Q(function(e,t){}),D=(r.AsyncMode,r.ConcurrentMode,r.ContextConsumer,r.ContextProvider,r.Element,r.ForwardRef,r.Fragment,r.Lazy,r.Memo,r.Portal,r.Profiler,r.StrictMode,r.Suspense,r.isAsyncMode,r.isConcurrentMode,r.isContextConsumer,r.isContextProvider,r.isElement,r.isForwardRef,r.isFragment,r.isLazy,r.isMemo,r.isPortal,r.isProfiler,r.isStrictMode,r.isSuspense,r.isValidElementType,r.typeOf,Q(function(e){e.exports=pe})),me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},H={};H[D.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},H[D.Memo]=me;const ye=K.createContext(null);function Se({children:e}){const[t,n]=f.useState(!1),[i,u]=f.useState(!1),[g,d]=f.useState(""),{executeRecaptcha:p}=ie(),o=f.useCallback(async y=>{if(!p){n(!1);return}n(!0);const h=await p(y);oe.verifyRecaptchaToken({token:h}).then(c=>{if(n(!1),c&&c.tokenProperties){const{action:x,valid:m}=c.tokenProperties;x===y&&m&&u(!0)}}).catch(c=>{n(!1),u(!1),d(c)})},[p]);return v.jsx(ye.Provider,{value:{isLoading:t,verifiedBot:i,error:g,verifyToken:o},children:e})}export{be as B,ye as V,Se as a,xe as h};
