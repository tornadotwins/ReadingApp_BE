import{_ as r,$ as D,b as A,c as w,j as a,aC as R}from"./index-Clv2Y-Ws.js";import{s as f,D as j,E as L,F as W,K as $,M as F,N as I,T as N}from"./App-BCxu86Tq.js";import"./index-BveorSUr.js";const T=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],B=t=>{const{absolute:i,children:e,classes:n,flexItem:d,light:s,orientation:o,textAlign:l,variant:c}=t;return W({root:["root",i&&"absolute",c,s&&"light",o==="vertical"&&"vertical",d&&"flexItem",e&&"withChildren",e&&o==="vertical"&&"withChildrenVertical",l==="right"&&o!=="vertical"&&"textAlignRight",l==="left"&&o!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",o==="vertical"&&"wrapperVertical"]},$,n)},_=f("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.root,e.absolute&&i.absolute,i[e.variant],e.light&&i.light,e.orientation==="vertical"&&i.vertical,e.flexItem&&i.flexItem,e.children&&i.withChildren,e.children&&e.orientation==="vertical"&&i.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&i.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:t,ownerState:i})=>r({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:D(t.palette.divider,.08)},i.variant==="inset"&&{marginLeft:72},i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>r({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:i})=>r({},i.children&&i.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}),({theme:t,ownerState:i})=>r({},i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}),({ownerState:t})=>r({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),y=f("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.wrapper,e.orientation==="vertical"&&i.wrapperVertical]}})(({theme:t,ownerState:i})=>r({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},i.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),x=A.forwardRef(function(i,e){const n=j({props:i,name:"MuiDivider"}),{absolute:d=!1,children:s,className:o,component:l=s?"div":"hr",flexItem:c=!1,light:p=!1,orientation:u="horizontal",role:g=l!=="hr"?"separator":void 0,textAlign:b="center",variant:m="fullWidth"}=n,C=w(n,T),h=r({},n,{absolute:d,component:l,flexItem:c,light:p,orientation:u,role:g,textAlign:b,variant:m}),v=B(h);return a.jsx(_,r({as:l,className:L(v.root,o),role:g,ref:e,ownerState:h},C,{children:s?a.jsx(y,{className:v.wrapper,ownerState:h,children:s}):null}))});x.muiSkipListHighlight=!0;function z(){return a.jsxs(F,{flexDirection:"column",children:[a.jsx("iframe",{src:R,width:"100%",height:"50%",style:{maxHeight:"60%",maxWidth:"100%"},allowFullScreen:!0}),a.jsxs(I,{flexDirection:"column",children:[a.jsx(N,{sx:{mt:2},variant:"h4",color:"error",children:"404 Not Found"}),a.jsx(x,{variant:"middle"})]})]})}export{z as default};
