import{a as s,j as e}from"./createTheme-DrRrGbl4.js";import{al as T,am as m,an as u,n as d,ao as b,T as h,ap as g,aq as y}from"./App-BwJIMztZ.js";import{T as F,a as S}from"./TableContainer-D8HSW0hd.js";function w(a){const[t,i]=s.useState(null),r=l=>{const o=l.target.files?l.target.files[0]:null;a.onChange(l),i(o)};return e.jsxs(T,{children:[e.jsx(m,{type:"file",onChange:r,inputProps:{accept:a.type},variant:"outlined"}),t&&e.jsx("p",{children:t.name})]})}const B=a=>{const[t,i]=s.useState([]),[r,l]=s.useState([]);s.useEffect(()=>{i(a.headers)},[a.headers]),s.useEffect(()=>{l(a.rows)},[a.rows]);const o=()=>e.jsx(u,{children:e.jsx(d,{children:t.map((c,n)=>e.jsx(b,{children:e.jsx(h,{fontFamily:'"Baloo Da 2"',fontWeight:"700",fontSize:16,lineHeight:24,textAlign:"center",color:"#155D74",children:c})},n))})}),x=()=>e.jsx(g,{children:r.map((c,n)=>e.jsx(d,{children:t.map((f,j)=>e.jsx(y,{children:e.jsx(h,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:14,lineHeight:20,textAlign:"center",color:"black",children:c[f]})},`${n}-${j}`))},n))});return e.jsx(F,{children:e.jsxs(S,{children:[o(),x()]})})};export{w as F,B as T};
