import{a as s,j as e}from"./createTheme-CR8GbbW2.js";import{ao as j,n,ap as m,T as o,aq as b,ar as y}from"./App-AR2z8mo-.js";import{T as S,a as g}from"./TableContainer-CDAZ_X2K.js";const w=a=>{const[r,i]=s.useState([]),[c,d]=s.useState([]);s.useEffect(()=>{i(a.headers)},[a.headers]),s.useEffect(()=>{d(a.rows)},[a.rows]);const h=()=>e.jsx(j,{children:e.jsx(n,{children:r.map((l,t)=>e.jsx(m,{children:e.jsx(o,{fontFamily:'"Baloo Da 2"',fontWeight:"700",fontSize:16,lineHeight:24,textAlign:"center",color:"#155D74",children:l})},t))})}),x=()=>e.jsx(b,{children:c.map((l,t)=>e.jsx(n,{children:r.map((T,f)=>e.jsx(y,{children:e.jsx(o,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:14,lineHeight:20,textAlign:"center",color:"black",children:l[T]})},`${t}-${f}`))},t))});return e.jsx(S,{children:e.jsxs(g,{children:[h(),x()]})})};export{w as T};
