import{j as t,_ as x,b as r,F as y,$ as D,c as E}from"./index-DxDh7wOW.js";import{y as F,s as c,ap as T,aq as U,v as _,w as V,ar as O,A,as as q,D as W,E as H,S as m,g,at as Z,au as J,av as K,aw as Q,ax as $,ay as X,az as Y,aA as ee,aB as oe,aC as te,aD as ae,aE as ne,aF as se,aG as le,B as j}from"./App-Cx9agqBq.js";import{T as h}from"./index-BN9BPm6P.js";const ie=F(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),re=F(t.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),ce=c("span",{shouldForwardProp:T})({position:"relative",display:"flex"}),de=c(ie)({transform:"scale(1)"}),ue=c(re)(({theme:e,ownerState:o})=>x({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function G(e){const{checked:o=!1,classes:a={},fontSize:n}=e,s=x({},e,{checked:o});return t.jsxs(ce,{className:a.root,ownerState:s,children:[t.jsx(de,{fontSize:n,className:a.background,ownerState:s}),t.jsx(ue,{fontSize:n,className:a.dot,ownerState:s})]})}function xe(){return r.useContext(U)}function he(e){return V("MuiRadio",e)}const B=_("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),Ce=["checked","checkedIcon","color","icon","name","onChange","size","className"],fe=e=>{const{classes:o,color:a,size:n}=e,s={root:["root",`color${y(a)}`,n!=="medium"&&`size${y(n)}`]};return x({},o,H(s,he,o))},me=c(O,{shouldForwardProp:e=>T(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.size!=="medium"&&o[`size${y(a.size)}`],o[`color${y(a.color)}`]]}})(({theme:e,ownerState:o})=>x({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:D(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${B.checked}`]:{color:(e.vars||e).palette[o.color].main}},{[`&.${B.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function ge(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const I=t.jsx(G,{checked:!0}),w=t.jsx(G,{}),ye=r.forwardRef(function(o,a){var n,s;const i=A({props:o,name:"MuiRadio"}),{checked:l,checkedIcon:u=I,color:d="primary",icon:v=w,name:C,onChange:L,size:S="medium",className:P}=i,M=E(i,Ce),k=x({},i,{color:d,size:S}),R=fe(k),f=xe();let p=l;const N=q(L,f&&f.onChange);let b=C;return f&&(typeof p>"u"&&(p=ge(f.value,i.value)),typeof b>"u"&&(b=f.name)),t.jsx(me,x({type:"radio",icon:r.cloneElement(v,{fontSize:(n=w.props.fontSize)!=null?n:S}),checkedIcon:r.cloneElement(u,{fontSize:(s=I.props.fontSize)!=null?s:S}),ownerState:k,classes:R,name:b,checked:p,onChange:N,ref:a,className:W(R.root,P)},M))});function Be(e){const[o]=r.useState(e.value),{theme:a}=r.useContext(m),{mainBGColor:n,altTextColor:s}=g(a),i=l=>{e.onChange&&e.onChange(l.target.value)};return t.jsx(Z,{"aria-label":"options",name:"radio-buttons-group",defaultValue:o,value:e.value,onChange:i,children:e.options.map((l,u)=>t.jsx(J,{value:l.value,control:t.jsx(ye,{}),label:t.jsxs(K,{children:[t.jsx("img",{src:l.image}),t.jsx(h,{color:s,children:l.label})]}),disabled:!!l.disable,style:{backgroundColor:n,color:s}},u))})}function Ie(e){const[o,a]=r.useState(e.defaultValue),{theme:n}=r.useContext(m),{mainBGColor:s,altTextColor:i}=g(n),l=(u,d,v)=>{if(a(d),e.onChange){let C;Array.isArray(d)?C=d[0]:C=d,e.onChange(C)}};return t.jsxs(Q,{sx:{backgroundColor:s},children:[t.jsx($,{children:t.jsx(h,{fontFamily:"Inter",color:i,children:e.label})}),t.jsxs(X,{children:[e.labelValue&&t.jsx(Y,{children:t.jsx(h,{color:i,children:o+"%"})}),t.jsx(ee,{"aria-label":e.label,defaultValue:e.defaultValue,value:o,step:e.step,min:e.min,style:{backgroundColor:s,textColor:i},valueLabelDisplay:e.valueLabelDisplay,max:e.max,onChange:l})]})]})}function we({value:e,label:o,disable:a,onChange:n}){const{theme:s}=r.useContext(m),{mainBGColor:i,altTextColor:l}=g(s),u=d=>{n&&n(d.target.checked)};return t.jsxs(oe,{style:{backgroundColor:i},children:[t.jsx($,{children:t.jsx(h,{fontFamily:"Inter",color:l,children:o})}),t.jsxs(te,{children:[t.jsx(h,{fontFamily:'"Baloo Da 2"',color:l,children:e?"On":"Off"}),t.jsx(ae,{checked:e,onChange:u,disabled:a,style:{backgroundColor:i,color:l}})]})]})}function ze({title:e,icon:o}){const{theme:a}=r.useContext(m),{logoTextColor:n}=g(a);return t.jsxs(ne,{children:[o&&t.jsx(se,{src:o}),t.jsx(le,{children:t.jsx(h,{fontSize:36,fontFamily:"Buenard",fontWeight:"700",color:n,lineHeight:47,children:e})})]})}const Se=c(j)({width:"100vw",display:"flex"}),pe=c("img")({width:"100vw",height:"61.75px",position:"fixed",bottom:"0px",objectFit:"cover"}),be=c(j)({display:"flex",justifyContent:"space-between",width:"100px",position:"fixed",left:"0",right:"0",bottom:"30px",margin:"auto","@media (min-width: 599px)":{width:"140px"},"@media (min-width: 1385px)":{bottom:"15px"}}),z=c("img")({width:"40px",cursor:"pointer","&:active":{opacity:"0.8"},"@media (min-width: 599px)":{width:"50px"}});function Fe(e){return t.jsxs(Se,{children:[t.jsx(pe,{src:e.footerImg}),t.jsxs(be,{children:[t.jsx(z,{src:e.closeImg,onClick:e.onClose}),t.jsx(z,{src:e.tickImg,onClick:e.onSave})]})]})}const je=c(j)({borderBottom:"1px solid #000","@media (max-width: 359px)":{}});function Te(){const{theme:e}=r.useContext(m),{altTextColor:o}=g(e);return t.jsx(je,{style:{borderColor:o}})}export{ze as N,ye as R,Te as S,Fe as a,Ie as b,we as c,Be as d};
