import{b as o,L as c,j as r}from"./index-CJuk4MNS.js";import{I as L,T as p}from"./index-CMqHl7vI.js";import{S as G,ab as J,ac as Q,ad as H,ae as T}from"./App-Ch1fen7G.js";const u=48,V=({color:t="currentColor",direction:e="left",distance:n="md",duration:a=.4,easing:l="cubic-bezier(0, 0, 0, 1)",hideOutline:m=!0,label:f,lines:i=3,onToggle:d,render:x,rounded:h=!1,size:b=32,toggle:s,toggled:$,disabled:R=!1,animateOnMount:k=!1})=>{const[_,B]=o.useState(!1),[F,z]=o.useState(!1);o.useEffect(()=>{z(!0)},[]);const g=Math.max(12,Math.min(u,b)),K=Math.round((u-g)/2),j=g/12,v=Math.round(j),w=g/(i*((n==="lg"?.25:n==="sm"?.75:.5)+(i===3?1:1.25))),y=Math.round(w),N=v*i+y*(i-1),P=Math.round((u-N)/2),U=i===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,X=(j-v+(w-y))/(i===3?1:2),q=parseFloat((g/U-X/(4/3)).toFixed(2)),M=Math.max(0,a),E={cursor:R?"not-allowed":"pointer",height:`${u}px`,position:"relative",transition:`${M}s ${l}`,userSelect:"none",width:`${u}px`},I={background:t,height:`${v}px`,left:`${K}px`,position:"absolute"};m&&(E.outline="none"),h&&(I.borderRadius="9em");const A=()=>{const O=$!==void 0?$:_;return k&&!F?!O:O},D=s||B,S=A();return x({barHeight:v,barStyles:I,burgerStyles:E,easing:l,handler:()=>{D(!S),typeof d=="function"&&d(!S)},isLeft:e==="left",isToggled:S,label:f,margin:y,move:q,time:M,topOffset:P,width:g})};function C(){return C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},C.apply(this,arguments)}const W=t=>c.createElement(V,C({},t,{render:e=>c.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:t.disabled?void 0:e.handler,onKeyUp:t.disabled?void 0:n=>n.key==="Enter"&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},c.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),c.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?"scaleX(0)":"none"}`}}),c.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight*2+e.margin*2}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move*-1}px)`:"none"}`}}))})),se=t=>{var f,i,d,x,h,b;const[e,n]=o.useState(!1),a=o.useRef(null),{readingLanguage:l}=o.useContext(G);o.useEffect(()=>{const s=$=>{a.current&&!a.current.contains($.target)&&n(!1)};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]);const m=s=>{n(!1),s&&s()};return r.jsxs(J,{ref:a,iconcolor:t.toggleColor||t.textColor,children:[r.jsx(W,{toggled:e,toggle:n,size:20}),e&&r.jsxs(Q,{children:[r.jsxs(H,{textcolor:t.textColor,itembgcolor:t.itemBgColor,onClick:()=>m(t.onLogin),children:[r.jsx(T,{src:t.isLogin?L.logout_default:L.login_default}),t.isLogin?r.jsx(p,{children:(i=(f=t.terms.texts.find(s=>s.variable=="Log Out"))==null?void 0:f.text)==null?void 0:i[l]}):r.jsx(p,{children:(x=(d=t.terms.texts.find(s=>s.variable=="Log In"))==null?void 0:d.text)==null?void 0:x[l]})]}),r.jsxs(H,{textcolor:t.textColor,itembgcolor:t.itemBgColor,onClick:()=>m(t.onSettings),children:[r.jsx(T,{src:L.settings_default}),r.jsx(p,{children:(b=(h=t.terms.texts.find(s=>s.variable=="Settings"))==null?void 0:h.text)==null?void 0:b[l]})]})]})]})};export{se as H};
