import{b as o,a1 as c,j as a}from"./index-DEG7EQ5W.js";import{I as y,T as S}from"./index-BaqGsCoo.js";import{ap as G,aq as J,ar as H,as as T}from"./App-BtMyqkZY.js";const u=48,Q=({color:t="currentColor",direction:e="left",distance:n="md",duration:r=.4,easing:l="cubic-bezier(0, 0, 0, 1)",hideOutline:m=!0,label:f,lines:i=3,onToggle:g,render:x,rounded:h=!1,size:s=32,toggle:$,toggled:j,disabled:R=!1,animateOnMount:k=!1})=>{const[_,B]=o.useState(!1),[F,z]=o.useState(!1);o.useEffect(()=>{z(!0)},[]);const d=Math.max(12,Math.min(u,s)),q=Math.round((u-d)/2),w=d/12,b=Math.round(w),C=d/(i*((n==="lg"?.25:n==="sm"?.75:.5)+(i===3?1:1.25))),v=Math.round(C),K=b*i+v*(i-1),N=Math.round((u-K)/2),P=i===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,U=(w-b+(C-v))/(i===3?1:2),X=parseFloat((d/P-U/(4/3)).toFixed(2)),M=Math.max(0,r),E={cursor:R?"not-allowed":"pointer",height:`${u}px`,position:"relative",transition:`${M}s ${l}`,userSelect:"none",width:`${u}px`},I={background:t,height:`${b}px`,left:`${q}px`,position:"absolute"};m&&(E.outline="none"),h&&(I.borderRadius="9em");const A=()=>{const O=j!==void 0?j:_;return k&&!F?!O:O},D=$||B,L=A();return x({barHeight:b,barStyles:I,burgerStyles:E,easing:l,handler:()=>{D(!L),typeof g=="function"&&g(!L)},isLeft:e==="left",isToggled:L,label:f,margin:v,move:X,time:M,topOffset:N,width:d})};function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p.apply(this,arguments)}const V=t=>c.createElement(Q,p({},t,{render:e=>c.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:t.disabled?void 0:e.handler,onKeyUp:t.disabled?void 0:n=>n.key==="Enter"&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},c.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),c.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?"scaleX(0)":"none"}`}}),c.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight*2+e.margin*2}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move*-1}px)`:"none"}`}}))})),ne=t=>{var m,f,i,g,x,h;const[e,n]=o.useState(!1),r=o.useRef(null);o.useEffect(()=>{const s=$=>{r.current&&!r.current.contains($.target)&&n(!1)};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]);const l=s=>{n(!1),s&&s()};return a.jsxs(G,{ref:r,iconcolor:t.toggleColor||t.textColor,children:[a.jsx(V,{toggled:e,toggle:n,size:20}),e&&a.jsxs(J,{children:[a.jsxs(H,{textcolor:t.textColor,itembgcolor:t.itemBgColor,onClick:()=>l(t.onLogin),children:[a.jsx(T,{src:t.isLogin?y.logout_default:y.login_default}),t.isLogin?a.jsx(S,{children:((f=(m=t.terms.texts.find(s=>s.variable=="Log Out"))==null?void 0:m.text)==null?void 0:f[t.appLanguage])||"Log Out"}):a.jsx(S,{children:((g=(i=t.terms.texts.find(s=>s.variable=="Log In"))==null?void 0:i.text)==null?void 0:g[t.appLanguage])||"Log In"})]}),a.jsxs(H,{textcolor:t.textColor,itembgcolor:t.itemBgColor,onClick:()=>l(t.onSettings),children:[a.jsx(T,{src:y.settings_default}),a.jsx(S,{children:((h=(x=t.terms.texts.find(s=>s.variable=="Settings"))==null?void 0:x.text)==null?void 0:h[t.appLanguage])||"Settings"})]})]})]})};export{ne as H};
