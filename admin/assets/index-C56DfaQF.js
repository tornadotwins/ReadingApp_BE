import{a as s,j as e}from"./createTheme-BuP8AzxQ.js";import{al as m,n as r,am as j,T as o,an as b,ao as y}from"./App-D_6gwKuw.js";import{T as S,a as g}from"./TableContainer-BtPJO5DH.js";const B=a=>{const[n,i]=s.useState([]),[c,d]=s.useState([]);s.useEffect(()=>{i(a.headers)},[a.headers]),s.useEffect(()=>{d(a.rows)},[a.rows]);const h=()=>e.jsx(m,{children:e.jsx(r,{children:n.map((l,t)=>e.jsx(j,{children:e.jsx(o,{fontFamily:'"Baloo Da 2"',fontWeight:"700",fontSize:16,lineHeight:24,textAlign:"center",color:"#155D74",children:l})},t))})}),x=()=>e.jsx(b,{children:c.map((l,t)=>e.jsx(r,{children:n.map((T,f)=>e.jsx(y,{children:e.jsx(o,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:14,lineHeight:20,textAlign:"center",color:"black",children:l[T]})},`${t}-${f}`))},t))});return e.jsx(S,{children:e.jsxs(g,{children:[h(),x()]})})};export{B as T};
