import{j as e}from"./createTheme-BYbBl0_b.js";import{s as t,B as i,T as r}from"./App-6jtlpKvU.js";import"./index-BO_joa27.js";import{I as s}from"./images-1NOISiOk.js";const a=t(i)({width:"100%",boxSizing:"border-box",margin:"0px",padding:"8px 22px",backgroundColor:"#000",color:"#FFF",display:"flex",alignItems:"center"});t(i)({margin:"0px"});const c=t(i)({display:"flex",alignItems:"center",marginLeft:"50px",cursor:"pointer",transitionDuration:".25s","&:hover":{transform:"scale(1.2)"}}),d=t(i)({width:"18px",marginRight:"8px",display:"flex",alignItems:"center",justifyContent:"center"}),x=t("img")({width:"100%"}),m=o=>e.jsxs(c,{onClick:()=>o.onClick,children:[e.jsx(d,{children:e.jsx(x,{src:s.icon_tool})}),e.jsx(r,{fontFamily:"'Baloo Da 2'",fontWeight:"700",fontSize:16,lineHeight:24,color:"white",children:o.toolName})]}),k=o=>e.jsxs(a,{children:[e.jsx(r,{fontFamily:'"Baloo Da 2"',fontWeight:"700",fontSize:16,lineHeight:24,children:"Tools: "}),o.tools.map((n,l)=>e.jsx(m,{toolName:n.toolName,onClick:n.onClick},l))]}),p=t(i)({display:"flex","@media screen and (max-width: 550px)":{display:"block"}}),f=t(i)(({isselected:o})=>({width:"135px",padding:"8px 25px",border:"1px solid #000",textAlign:"center",cursor:"pointer",boxSizing:"border-box",backgroundColor:o=="true"?"#1B7695":"#F0F5FB",color:o=="true"?"#fff":"#000",display:"flex",alignItems:"center",justifyContent:"center","@media screen and (max-width: 550px)":{width:"100%"}})),u=o=>e.jsx(p,{children:o.books.map((n,l)=>e.jsx(f,{onClick:n.onClick,isselected:n.bookTitle==o.selectedBook?"true":"false",children:e.jsx(r,{fontFamily:"'Baloo Da 2'",fontWeight:"500",fontSize:16,lineHeight:24,children:n.bookTitle})},l))});export{u as B,k as T};
