import{b as x,j as e,a3 as l}from"./index-Clv2Y-Ws.js";import{s as o,B as a,P as C,O as p,S as g,g as f,Q as y,u as S}from"./App-CDBbwMU4.js";import{u as E}from"./useOrientation-cVU6TeMT.js";import{T as m,I as c}from"./index-te5N--mx.js";import{L as j}from"./index-CAGJ4Fv2.js";import"./index-JNcP9kBx.js";const h=o(a)({width:"52.5%",marginTop:"61px","@media (max-height: 639px)":{marginTop:"30px",width:"80%"}}),k=o(a)({height:"50dvh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative","@media screen and (orientation: landscape)":{height:"100dvh",width:"50vw"}}),B=o(a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","&>*:nth-of-type(2)":{marginTop:"26.31px"}}),d=o("img")({"&:nth-of-type(2)":{marginTop:"26.31px"},"@media (max-height: 599px)":{"&:nth-of-type(2)":{marginTop:"15px"}}}),T=o(a)({position:"absolute",bottom:"17px"}),w=o(a)({backgroundColor:"#1B7695",width:"100%",height:"50dvh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media (max-height: 579px)":{"& .css-16vwsd3":{marginTop:"25px"}},"@media screen and (orientation: landscape)":{height:"100dvh",width:"50vw"}}),v=o(a)({margin:"0px",marginBottom:"8.92px","@media (max-width: 359px)":{"& .MuiBox-root":{fontSize:"30px",lineHeight:"42px"}},"@media (max-height: 639px)":{marginTop:"15px",marginBottom:"5px","& .MuiBox-root":{fontSize:"30px",lineHeight:"42px"}},"@media screen and (orientation: landscape)":{marginTop:"0px"}}),F=o(C)({position:"absolute",top:"12px",right:"15px",backgroundColor:"transparent",color:"#FEFEFE",fontSize:"16px",fontFamily:'"Baloo Da 2"',fontWeight:"400",lineHeight:"24px",textTransform:"none","@media (max-height: 639px)":{fontSize:"14px",top:"8px",right:"10px"},"@media screen and (orientation: landscape)":{right:"calc(50vw + 15px)"}});function A(i){const{t:n}=p(),{theme:t}=x.useContext(g),{headerBGColor:r,logoTextColor:s}=f(t);return e.jsxs(w,{style:{backgroundColor:r},children:[e.jsx(F,{style:{color:s},onClick:i.onLoginClicked,children:n("Log In")}),e.jsx(v,{children:e.jsx(m,{color:s,fontWeight:"700",fontFamily:'"Buenard"',fontSize:36,lineHeight:47,textAlign:"center",children:n("Check Email")})}),i.type=="forgot_password"?e.jsx(h,{children:e.jsx(m,{fontFamily:"'Baloo Da 2'",fontWeight:"400",fontSize:16,textAlign:"center",color:s,children:n("Confirm Email Reset")})}):e.jsx(h,{children:e.jsx(m,{fontFamily:"'Baloo Da 2'",fontWeight:"400",fontSize:16,textAlign:"center",color:s,children:n("Confirm Email")})})]})}function D(i){const{t:n}=p(),{theme:t}=x.useContext(g),{mainBGColor:r}=f(t);return e.jsxs(k,{style:{backgroundColor:r},children:[e.jsxs(B,{children:[e.jsx(d,{src:t==l.DEFAULT||t==l.EASY_OCEAN||t==l.EASY_SUNRISE?c.email_black:c.email_white_reset}),e.jsx(d,{src:t==l.DEFAULT||t==l.EASY_OCEAN||t==l.EASY_SUNRISE?c.hand:c.hand_white})]}),e.jsx(T,{children:e.jsx(j,{label:n("Home"),onClick:i.onHomeClicked})})]})}const I=o(a)({display:"flex"}),b=o(I)({justifyContent:"center",alignItems:"center"}),L=o(b)({width:"100vw",height:"100dvh"});function R(){const[i]=y(),n=E(),t=i.get("type"),r=S(),s=()=>{r("/")},u=()=>{r("/login")};return x.useEffect(()=>{i.get("type")},[]),e.jsxs(L,{flexDirection:n?"column":"row",children:[e.jsx(A,{type:t,onLoginClicked:u}),e.jsx(D,{onHomeClicked:s})]})}export{R as default};
