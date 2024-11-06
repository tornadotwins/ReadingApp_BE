import{j as t,_ as h,b as r,o as y,N as U,c as _}from"./index-DDg5x1vp.js";import{z as F,s as d,af as T,ag as D,x as E,w as V,ah as O,D as q,ai as A,E as W,F as H,S as p,g,aj as Z,ak as J,al as K,am as $,an as Q,ao as X,ap as Y,u as oo,aq as eo,ar as to,as as ao,at as no,au as so,av as lo,B as v}from"./App-D1G5kpsm.js";import{T as f}from"./images-B-Cl5WlU.js";const io=F(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),ro=F(t.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),co=d("span",{shouldForwardProp:T})({position:"relative",display:"flex"}),uo=d(io)({transform:"scale(1)"}),xo=d(ro)(({theme:o,ownerState:e})=>h({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},e.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function N(o){const{checked:e=!1,classes:a={},fontSize:n}=o,s=h({},o,{checked:e});return t.jsxs(co,{className:a.root,ownerState:s,children:[t.jsx(uo,{fontSize:n,className:a.background,ownerState:s}),t.jsx(xo,{fontSize:n,className:a.dot,ownerState:s})]})}function ho(){return r.useContext(D)}function fo(o){return V("MuiRadio",o)}const B=E("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),Co=["checked","checkedIcon","color","icon","name","onChange","size","className"],mo=o=>{const{classes:e,color:a,size:n}=o,s={root:["root",`color${y(a)}`,n!=="medium"&&`size${y(n)}`]};return h({},e,H(s,fo,e))},po=d(O,{shouldForwardProp:o=>T(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.size!=="medium"&&e[`size${y(a.size)}`],e[`color${y(a.color)}`]]}})(({theme:o,ownerState:e})=>h({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:U(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${B.checked}`]:{color:(o.vars||o).palette[e.color].main}},{[`&.${B.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function go(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}const I=t.jsx(N,{checked:!0}),w=t.jsx(N,{}),yo=r.forwardRef(function(e,a){var n,s;const i=q({props:e,name:"MuiRadio"}),{checked:c,checkedIcon:u=I,color:l="primary",icon:x=w,name:C,onChange:P,size:S="medium",className:G}=i,L=_(i,Co),k=h({},i,{color:l,size:S}),R=mo(k),m=ho();let b=c;const M=A(P,m&&m.onChange);let j=C;return m&&(typeof b>"u"&&(b=go(m.value,i.value)),typeof j>"u"&&(j=m.name)),t.jsx(po,h({type:"radio",icon:r.cloneElement(x,{fontSize:(n=w.props.fontSize)!=null?n:S}),checkedIcon:r.cloneElement(u,{fontSize:(s=I.props.fontSize)!=null?s:S}),ownerState:k,classes:R,name:j,checked:b,onChange:M,ref:a,className:W(R.root,G)},L))});function Io({options:o,value:e,onChange:a}){const[n]=r.useState(e),{theme:s}=r.useContext(p),{mainBGColor:i,altTextColor:c}=g(s),u=l=>{a&&a(l.target.value)};return t.jsx(Z,{"aria-label":"options",name:"radio-buttons-group",defaultValue:n,value:e,onChange:u,children:o.map((l,x)=>t.jsx(J,{value:l.value,control:t.jsx(yo,{}),label:t.jsx(f,{color:c,children:l.label}),disabled:!!l.disable,style:{backgroundColor:i,color:c}},x))})}function wo(o){const[e,a]=r.useState(o.defaultValue),{theme:n}=r.useContext(p),{mainBGColor:s,altTextColor:i}=g(n),c=(u,l,x)=>{if(a(l),o.onChange){let C;Array.isArray(l)?C=l[0]:C=l,o.onChange(C)}};return t.jsxs(K,{sx:{backgroundColor:s},children:[t.jsx($,{children:t.jsx(f,{fontFamily:"Inter",color:i,children:o.label})}),t.jsxs(Q,{children:[o.labelValue&&t.jsx(X,{children:t.jsx(f,{color:i,children:e+"%"})}),t.jsx(Y,{"aria-label":o.label,defaultValue:o.defaultValue,value:e,step:o.step,min:o.min,style:{backgroundColor:s,textColor:i},valueLabelDisplay:o.valueLabelDisplay,max:o.max,onChange:c})]})]})}function zo({value:o,label:e,disable:a,onChange:n}){const{t:s}=oo(),{theme:i}=r.useContext(p),{mainBGColor:c,altTextColor:u}=g(i),l=x=>{n&&n(x.target.checked)};return t.jsxs(eo,{style:{backgroundColor:c},children:[t.jsx($,{children:t.jsx(f,{fontFamily:"Inter",color:u,children:e})}),t.jsxs(to,{children:[t.jsx(f,{fontFamily:'"Baloo Da 2"',color:u,children:s(o?"On":"Off")}),t.jsx(ao,{checked:o,onChange:l,disabled:a,style:{backgroundColor:c,color:u}})]})]})}function Fo({title:o,icon:e}){const{theme:a}=r.useContext(p),{logoTextColor:n}=g(a);return t.jsxs(no,{children:[e&&t.jsx(so,{src:e}),t.jsx(lo,{children:t.jsx(f,{fontSize:36,fontFamily:"Buenard",fontWeight:"700",color:n,lineHeight:47,children:o})})]})}const So=d(v)({width:"100vw",display:"flex"}),bo=d("img")({width:"100vw",height:"61.75px",position:"fixed",bottom:"0px",objectFit:"cover"}),jo=d(v)({display:"flex",justifyContent:"space-between",width:"100px",position:"fixed",left:"0",right:"0",bottom:"30px",margin:"auto","@media (min-width: 599px)":{width:"140px"},"@media (min-width: 1385px)":{bottom:"15px"}}),z=d("img")({width:"40px",cursor:"pointer","&:active":{opacity:"0.8"},"@media (min-width: 599px)":{width:"50px"}});function To(o){return t.jsxs(So,{children:[t.jsx(bo,{src:o.footerImg}),t.jsxs(jo,{children:[t.jsx(z,{src:o.closeImg,onClick:o.onClose}),t.jsx(z,{src:o.tickImg,onClick:o.onSave})]})]})}const vo=d(v)({borderBottom:"1px solid #000","@media (max-width: 359px)":{}});function $o(){const{theme:o}=r.useContext(p),{altTextColor:e}=g(o);return t.jsx(vo,{style:{borderColor:e}})}export{Fo as N,yo as R,$o as S,To as a,wo as b,zo as c,Io as d};
