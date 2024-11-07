import{k as L,b as A,_ as l,s as U,i as W,x as $}from"./createTheme-D2dJqj3M.js";import{M as I,N as q,j as z,g as B,b as G}from"./App-Cf_xFtDF.js";const H=["ownerState"],J=["variants"],K=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Q(e){return Object.keys(e).length===0}function X(e){return typeof e=="string"&&e.charCodeAt(0)>96}function R(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Y=L(),Z=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function x({defaultTheme:e,theme:r,themeId:t}){return Q(r)?e:r[t]||r}function ee(e){return e?(r,t)=>t[e]:null}function _(e,r){let{ownerState:t}=r,n=A(r,H);const o=typeof e=="function"?e(l({ownerState:t},n)):e;if(Array.isArray(o))return o.flatMap(d=>_(d,l({ownerState:t},n)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:d=[]}=o;let p=A(o,J);return d.forEach(s=>{let u=!0;typeof s.props=="function"?u=s.props(l({ownerState:t},n,t)):Object.keys(s.props).forEach(h=>{(t==null?void 0:t[h])!==s.props[h]&&n[h]!==s.props[h]&&(u=!1)}),u&&(Array.isArray(p)||(p=[p]),p.push(typeof s.style=="function"?s.style(l({ownerState:t},n,t)):s.style))}),p}return o}function te(e={}){const{themeId:r,defaultTheme:t=Y,rootShouldForwardProp:n=R,slotShouldForwardProp:o=R}=e,d=c=>U(l({},c,{theme:x(l({},c,{defaultTheme:t,themeId:r}))}));return d.__mui_systemSx=!0,(c,p={})=>{I(c,i=>i.filter(f=>!(f!=null&&f.__mui_systemSx)));const{name:s,slot:u,skipVariantsResolver:h,skipSx:F,overridesResolver:O=ee(Z(u))}=p,j=A(p,K),V=h!==void 0?h:u&&u!=="Root"&&u!=="root"||!1,D=F||!1;let M,S=R;u==="Root"||u==="root"?S=n:u?S=o:X(c)&&(S=void 0);const P=q(c,l({shouldForwardProp:S,label:M},j)),g=i=>typeof i=="function"&&i.__emotion_real!==i||W(i)?f=>_(i,l({},f,{theme:x({theme:f.theme,defaultTheme:t,themeId:r})})):i,T=(i,...f)=>{let C=g(i);const y=f?f.map(g):[];s&&O&&y.push(m=>{const a=x(l({},m,{defaultTheme:t,themeId:r}));if(!a.components||!a.components[s]||!a.components[s].styleOverrides)return null;const v=a.components[s].styleOverrides,w={};return Object.entries(v).forEach(([N,E])=>{w[N]=_(E,l({},m,{theme:a}))}),O(m,w)}),s&&!V&&y.push(m=>{var a;const v=x(l({},m,{defaultTheme:t,themeId:r})),w=v==null||(a=v.components)==null||(a=a[s])==null?void 0:a.variants;return _({variants:w},l({},m,{theme:v}))}),D||y.push(d);const b=y.length-f.length;if(Array.isArray(i)&&b>0){const m=new Array(b).fill("");C=[...i,...m],C.raw=[...i.raw,...m]}const k=P(C,...y);return c.muiName&&(k.muiName=c.muiName),k};return P.withConfig&&(T.withConfig=P.withConfig),T}}const ne=te();function re(e){const{theme:r,name:t,props:n}=e;return!r||!r.components||!r.components[t]||!r.components[t].defaultProps?n:$(r.components[t].defaultProps,n)}function ie({props:e,name:r,defaultTheme:t,themeId:n}){let o=z(t);return n&&(o=o[n]||o),re({theme:o,name:r,props:e})}function le(e){return G("MuiDivider",e)}const ue=B("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);export{ue as d,le as g,ne as s,ie as u};
