import{_ as n,a as d,c as m,j as p}from"./createTheme-BSKTWGbl.js";import{_ as y,$ as C,s as T,a3 as f,ap as k,a6 as x,a7 as g}from"./App-DgwGRK2q.js";function w(e){return C("MuiTable",e)}y("MuiTable",["root","stickyHeader"]);const H=["className","component","padding","size","stickyHeader"],j=e=>{const{classes:s,stickyHeader:o}=e;return g({root:["root",o&&"stickyHeader"]},w,s)},N=T("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e;return[s.root,o.stickyHeader&&s.stickyHeader]}})(({theme:e,ownerState:s})=>n({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":n({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},s.stickyHeader&&{borderCollapse:"separate"})),b="table",z=d.forwardRef(function(s,o){const t=f({props:s,name:"MuiTable"}),{className:c,component:a=b,padding:l="normal",size:r="medium",stickyHeader:i=!1}=t,v=m(t,H),u=n({},t,{component:a,padding:l,size:r,stickyHeader:i}),M=j(u),R=d.useMemo(()=>({padding:l,size:r,stickyHeader:i}),[l,r,i]);return p.jsx(k.Provider,{value:R,children:p.jsx(N,n({as:a,role:a===b?null:"table",ref:o,className:x(M.root,c),ownerState:u},v))})});function U(e){return C("MuiTableContainer",e)}y("MuiTableContainer",["root"]);const _=["className","component"],S=e=>{const{classes:s}=e;return g({root:["root"]},U,s)},h=T("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,s)=>s.root})({width:"100%",overflowX:"auto"}),E=d.forwardRef(function(s,o){const t=f({props:s,name:"MuiTableContainer"}),{className:c,component:a="div"}=t,l=m(t,_),r=n({},t,{component:a}),i=S(r);return p.jsx(h,n({ref:o,as:a,className:x(i.root,c),ownerState:r},l))});export{E as T,z as a};
