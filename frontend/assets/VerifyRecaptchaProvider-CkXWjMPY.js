import{b as f,j as g,a1 as K}from"./index-Clv2Y-Ws.js";import{S as U,g as W,_ as X,$ as Y,a0 as Z,a1 as ee,a2 as te}from"./App-DW1Zihi1.js";import{T as re}from"./index-BWaVUUdQ.js";import{a as ne}from"./auth.service-CYQxV5o3.js";function ve(e){const{theme:t}=f.useContext(U),{altTextColor:o}=W(t);return g.jsxs(X,{children:[g.jsxs(Y,{children:[g.jsx(Z,{src:e.imgSrc}),g.jsx(re,{color:o,children:e.label})]}),g.jsx(ee,{onClick:e.onClick,bordercolor:o,children:e.checkImgSrc&&g.jsx(te,{src:e.checkImgSrc})})]})}/*! *****************************************************************************
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
***************************************************************************** */var F=function(){return F=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var u in t=arguments[o])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e},F.apply(this,arguments)},O,oe=function(e){var t;e?function(o){if(o)for(;o.lastChild;)o.lastChild.remove()}(typeof e=="string"?document.getElementById(e):e):(t=document.querySelector(".grecaptcha-badge"))&&t.parentNode&&document.body.removeChild(t.parentNode)},ae=function(e,t){oe(t),window.___grecaptcha_cfg=void 0;var o=document.querySelector("#"+e);o&&o.remove(),function(){var i=document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');i&&i.remove()}()},ce=function(e){var t=e.render,o=e.onLoadCallbackName,i=e.language,u=e.onLoad,C=e.useRecaptchaNet,d=e.useEnterprise,p=e.scriptProps,n=p===void 0?{}:p,y=n.nonce,h=y===void 0?"":y,c=n.defer,x=c!==void 0&&c,m=n.async,I=m!==void 0&&m,S=n.id,w=S===void 0?"":S,A=n.appendTo,b=w||"google-recaptcha-v3";if(function(v){return!!document.querySelector("#"+v)}(b))u();else{var R=function(v){return"https://www."+(v.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(v.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:d,useRecaptchaNet:C}),l=document.createElement("script");l.id=b,l.src=R+"?render="+t+(t==="explicit"?"&onload="+o:"")+(i?"&hl="+i:""),h&&(l.nonce=h),l.defer=!!x,l.async=!!I,l.onload=u,(A==="body"?document.body:document.getElementsByTagName("head")[0]).appendChild(l)}},B=function(e){console.warn(e)};(function(e){e.SCRIPT_NOT_AVAILABLE="Recaptcha script is not available"})(O||(O={}));var q=f.createContext({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});q.Consumer;function xe(e){var t=e.reCaptchaKey,o=e.useEnterprise,i=o!==void 0&&o,u=e.useRecaptchaNet,C=u!==void 0&&u,d=e.scriptProps,p=e.language,n=e.container,y=e.children,h=f.useState(null),c=h[0],x=h[1],m=f.useRef(t),I=JSON.stringify(d),S=JSON.stringify(n==null?void 0:n.parameters);f.useEffect(function(){if(t){var b=(d==null?void 0:d.id)||"google-recaptcha-v3",R=(d==null?void 0:d.onLoadCallbackName)||"onRecaptchaLoadCallback";return window[R]=function(){var l=i?window.grecaptcha.enterprise:window.grecaptcha,v=F({badge:"inline",size:"invisible",sitekey:t},(n==null?void 0:n.parameters)||{});m.current=l.render(n==null?void 0:n.element,v)},ce({render:n!=null&&n.element?"explicit":t,onLoadCallbackName:R,useEnterprise:i,useRecaptchaNet:C,scriptProps:d,language:p,onLoad:function(){if(window&&window.grecaptcha){var l=i?window.grecaptcha.enterprise:window.grecaptcha;l.ready(function(){x(l)})}else B("<GoogleRecaptchaProvider /> "+O.SCRIPT_NOT_AVAILABLE)},onError:function(){B("Error loading google recaptcha script")}}),function(){ae(b,n==null?void 0:n.element)}}B("<GoogleReCaptchaProvider /> recaptcha key not provided")},[i,C,I,S,p,t,n==null?void 0:n.element]);var w=f.useCallback(function(b){if(!c||!c.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return c.execute(m.current,{action:b})},[c,m]),A=f.useMemo(function(){return{executeRecaptcha:c?w:void 0,container:n==null?void 0:n.element}},[w,c,n==null?void 0:n.element]);return K.createElement(q.Provider,{value:A},y)}var ie=function(){return f.useContext(q)};function Q(e,t){return e(t={exports:{}},t.exports),t.exports;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var a=typeof Symbol=="function"&&Symbol.for,V=a?Symbol.for("react.element"):60103,G=a?Symbol.for("react.portal"):60106,P=a?Symbol.for("react.fragment"):60107,$=a?Symbol.for("react.strict_mode"):60108,E=a?Symbol.for("react.profiler"):60114,k=a?Symbol.for("react.provider"):60109,M=a?Symbol.for("react.context"):60110,z=a?Symbol.for("react.async_mode"):60111,_=a?Symbol.for("react.concurrent_mode"):60111,N=a?Symbol.for("react.forward_ref"):60112,L=a?Symbol.for("react.suspense"):60113,se=a?Symbol.for("react.suspense_list"):60120,j=a?Symbol.for("react.memo"):60115,T=a?Symbol.for("react.lazy"):60116,ue=a?Symbol.for("react.block"):60121,le=a?Symbol.for("react.fundamental"):60117,fe=a?Symbol.for("react.responder"):60118,de=a?Symbol.for("react.scope"):60119;function s(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case V:switch(e=e.type){case z:case _:case P:case E:case $:case L:return e;default:switch(e=e&&e.$$typeof){case M:case N:case T:case j:case k:return e;default:return t}}case G:return t}}}function J(e){return s(e)===_}var pe={AsyncMode:z,ConcurrentMode:_,ContextConsumer:M,ContextProvider:k,Element:V,ForwardRef:N,Fragment:P,Lazy:T,Memo:j,Portal:G,Profiler:E,StrictMode:$,Suspense:L,isAsyncMode:function(e){return J(e)||s(e)===z},isConcurrentMode:J,isContextConsumer:function(e){return s(e)===M},isContextProvider:function(e){return s(e)===k},isElement:function(e){return typeof e=="object"&&e!==null&&e.$$typeof===V},isForwardRef:function(e){return s(e)===N},isFragment:function(e){return s(e)===P},isLazy:function(e){return s(e)===T},isMemo:function(e){return s(e)===j},isPortal:function(e){return s(e)===G},isProfiler:function(e){return s(e)===E},isStrictMode:function(e){return s(e)===$},isSuspense:function(e){return s(e)===L},isValidElementType:function(e){return typeof e=="string"||typeof e=="function"||e===P||e===_||e===E||e===$||e===L||e===se||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===j||e.$$typeof===k||e.$$typeof===M||e.$$typeof===N||e.$$typeof===le||e.$$typeof===fe||e.$$typeof===de||e.$$typeof===ue)},typeOf:s},r=Q(function(e,t){}),D=(r.AsyncMode,r.ConcurrentMode,r.ContextConsumer,r.ContextProvider,r.Element,r.ForwardRef,r.Fragment,r.Lazy,r.Memo,r.Portal,r.Profiler,r.StrictMode,r.Suspense,r.isAsyncMode,r.isConcurrentMode,r.isContextConsumer,r.isContextProvider,r.isElement,r.isForwardRef,r.isFragment,r.isLazy,r.isMemo,r.isPortal,r.isProfiler,r.isStrictMode,r.isSuspense,r.isValidElementType,r.typeOf,Q(function(e){e.exports=pe})),me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},H={};H[D.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},H[D.Memo]=me;const ye=K.createContext(null);function Se({children:e}){const[t,o]=f.useState(!1),[i,u]=f.useState(!1),[C,d]=f.useState(""),{executeRecaptcha:p}=ie(),n=f.useCallback(async y=>{if(!p){o(!1);return}o(!0);const h=await p(y);ne.verifyRecaptchaToken({token:h}).then(c=>{if(o(!1),c&&c.tokenProperties){const{action:x,valid:m}=c.tokenProperties;x===y&&m&&u(!0)}}).catch(c=>{o(!1),u(!1),d(c)})},[p]);return g.jsx(ye.Provider,{value:{isLoading:t,verifiedBot:i,error:C,verifyToken:n},children:e})}export{ve as B,ye as V,Se as a,xe as h};
