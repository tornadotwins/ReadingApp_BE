import{_ as o,x as T,v as b,a as R,c as $,j as s,Q as w}from"./createTheme-BOszpS1f.js";import{aS as A,aT as N,aU as G,a7 as k,$ as M,s as C,a3 as j,a6 as S,aV as y,aQ as B,aW as I,a9 as W}from"./App-CENukVmu.js";import{p as F,m as P}from"./index-C27AX3ex.js";const U=["className","component","disableGutters","fixed","maxWidth","classes"],_=T(),z=A("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,t[`maxWidth${b(String(e.maxWidth))}`],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),V=i=>G({props:i,name:"MuiContainer",defaultTheme:_}),E=(i,t)=>{const e=n=>M(t,n),{classes:l,fixed:h,disableGutters:d,maxWidth:r}=i,a={root:["root",r&&`maxWidth${b(String(r))}`,h&&"fixed",d&&"disableGutters"]};return k(a,e,l)};function H(i={}){const{createStyledComponent:t=z,useThemeProps:e=V,componentName:l="MuiContainer"}=i,h=t(({theme:r,ownerState:a})=>o({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}}),({theme:r,ownerState:a})=>a.fixed&&Object.keys(r.breakpoints.values).reduce((n,c)=>{const x=c,p=r.breakpoints.values[x];return p!==0&&(n[r.breakpoints.up(x)]={maxWidth:`${p}${r.breakpoints.unit}`}),n},{}),({theme:r,ownerState:a})=>o({},a.maxWidth==="xs"&&{[r.breakpoints.up("xs")]:{maxWidth:Math.max(r.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[r.breakpoints.up(a.maxWidth)]:{maxWidth:`${r.breakpoints.values[a.maxWidth]}${r.breakpoints.unit}`}}));return R.forwardRef(function(a,n){const c=e(a),{className:x,component:p="div",disableGutters:f=!1,fixed:v=!1,maxWidth:m="lg"}=c,u=$(c,U),g=o({},c,{component:p,disableGutters:f,fixed:v,maxWidth:m}),L=E(g,l);return s.jsx(h,o({as:p,ownerState:g,className:N(L.root,x),ref:n},u))})}const Q=H({createStyledComponent:C("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,t[`maxWidth${b(String(e.maxWidth))}`],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),useThemeProps:i=>j({props:i,name:"MuiContainer"})}),O=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],q=i=>{const{absolute:t,children:e,classes:l,flexItem:h,light:d,orientation:r,textAlign:a,variant:n}=i;return k({root:["root",t&&"absolute",n,d&&"light",r==="vertical"&&"vertical",h&&"flexItem",e&&"withChildren",e&&r==="vertical"&&"withChildrenVertical",a==="right"&&r!=="vertical"&&"textAlignRight",a==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},y,l)},J=C("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.root,e.absolute&&t.absolute,t[e.variant],e.light&&t.light,e.orientation==="vertical"&&t.vertical,e.flexItem&&t.flexItem,e.children&&t.withChildren,e.children&&e.orientation==="vertical"&&t.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&t.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:i,ownerState:t})=>o({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:w(i.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:i})=>o({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:i,ownerState:t})=>o({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`,borderTopStyle:"inherit"}}),({theme:i,ownerState:t})=>o({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(i.vars||i).palette.divider}`,borderLeftStyle:"inherit"}}),({ownerState:i})=>o({},i.textAlign==="right"&&i.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},i.textAlign==="left"&&i.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),K=C("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:e}=i;return[t.wrapper,e.orientation==="vertical"&&t.wrapperVertical]}})(({theme:i,ownerState:t})=>o({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`})),D=R.forwardRef(function(t,e){const l=j({props:t,name:"MuiDivider"}),{absolute:h=!1,children:d,className:r,component:a=d?"div":"hr",flexItem:n=!1,light:c=!1,orientation:x="horizontal",role:p=a!=="hr"?"separator":void 0,textAlign:f="center",variant:v="fullWidth"}=l,m=$(l,O),u=o({},l,{absolute:h,component:a,flexItem:n,light:c,orientation:x,role:p,textAlign:f,variant:v}),g=q(u);return s.jsx(J,o({as:a,className:S(g.root,r),role:p,ref:e,ownerState:u},m,{children:d?s.jsx(K,{className:g.wrapper,ownerState:u,children:d}):null}))});D.muiSkipListHighlight=!0;function tt(){return s.jsx(Q,{sx:{height:"100%"},children:s.jsxs(B,{flexDirection:"column",children:[s.jsx("iframe",{src:F,width:"100%",height:"50%",style:{maxHeight:"60%",maxWidth:"100%"},frameBorder:"0",allowFullScreen:!0}),s.jsxs(I,{flexDirection:"column",children:[s.jsx(W,{sx:{mt:2},variant:"h4",color:"error",children:"404 Not Found"}),s.jsx(D,{variant:"middle"}),s.jsx(W,{variant:"h4",sx:{color:i=>i.palette.info.main},children:P[404]})]})]})})}export{tt as default};
