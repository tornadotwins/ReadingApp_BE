import{b as g,Q as a,j as t,ap as y}from"./index-BE3uQJXX.js";import{s as n,B as s,$ as E,Y as I,u,S as f,g as S,d as k,_ as B}from"./App-C54qGOPD.js";import{I as e,T as w}from"./images-BU8WrZ8M.js";import{I as F}from"./index-CcL1KOHI.js";import{F as b,c as v,a as j,I as A}from"./index.esm-Dfm9CT-9.js";import{B as _}from"./Button-DMFzZ7e6.js";import{L as M}from"./index-ja1wVhca.js";import{L as T,C as L}from"./index-B30yO50J.js";import{u as z}from"./useOrientation-DI4TzsHc.js";import{a as O}from"./auth.service-CDQjqgmW.js";import"./index-DL4NZW23.js";import"./axios-BimPEqV4.js";n(s)({width:"100%",height:"50vh"});const Y=n(s)({width:"100%",height:"50vh",flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingBottom:"40px","@media screen and (orientation: landscape)":{height:"100vh",width:"50%"}}),N=n(s)({width:"60.83%",margin:"24px 0px","@media (max-height: 639px)":{margin:"18px 0px"}});n(s)({display:"flex",width:"80%",justifyContent:"space-between",alignItems:"center",marginBottom:"24px","@media (max-width: 359px)":{marginBottom:"12px"},"@media (max-height: 639px)":{fontSize:"14px",lineHeight:"20px"}});n(s)({display:"flex",alignItems:"center"});n("img")({width:"20px",marginRight:"10.78px","@media (max-width: 359px)":{width:"17px"},"@media (max-height: 639px)":{width:"17px"}});n(E)(({type:r})=>({border:"1px solid #17637D",width:"189px",height:"39px",marginRight:r==="checkbox"?"93px":"0","& .MuiInputBase-root":{height:"39px",color:"#000",padding:0},"&.Mui-checked":{color:"#FFF"},"& .MuiOutlinedInput-root":{"& fieldset":{border:"none"}},"@media (max-width: 359px)":{height:"30px",width:"160px","& .MuiInputBase-input":{fontSize:"14px",padding:"0px 7px"}},"@media (max-height: 639px)":{height:"30px","& .MuiInputBase-input":{fontSize:"14px",padding:"0px 7px"}}}));const D=n(s)(({haserror:r})=>({height:"39px",width:"77.09%",marginTop:"16px",marginBottom:r=="true"?"15px":"0px","& .MuiInputBase-input":{padding:"7px",borderRadius:"0px"},"& .MuiInputBase-input: -webkit-autofill, .MuiInputBase-input: -webkit-autofill:hover, .MuiInputBase-input: -webkit-autofill:focus, .MuiInputBase-input: -webkit-autofill:active":{WebkitBoxShadow:"0 0 0 100px #FEFEFE inset",WebkitTextFillColor:"#000"},"@media screen and (orientation: landscape)":{width:"200px !important","@media (min-width: 550px) and (max-width: 750px)":{width:"250px"},"& .MuiFormControl-root":{width:"80px !important"},"@media (min-width: 750px)":{width:"300px !important","& .MuiFormControl-root":{width:"133px !important"}}},"@media (min-width: 380px)":{width:"320px"},"@media (max-height: 639px)":{height:"30px","& .MuiInputBase-input":{fontSize:"14px",padding:"0px 7px"},"& .css-tjr34z":{fontSize:"14px"},"& .css-d8svfr":{width:"14px"}}})),H=n(s)({position:"absolute",bottom:"15px"}),R=n(s)({marginTop:"28px","@media (max-height: 639px)":{height:"35px"}}),P=n(s)({backgroundColor:"#1B7695",width:"100%",height:"50vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media (max-height: 579px)":{"& .css-16vwsd3":{marginTop:"25px"}},"@media screen and (orientation: landscape)":{height:"100vh",width:"50vw"}}),W=n("h1")({margin:"0px",marginBottom:"8.92px","@media (max-width: 359px)":{"& .MuiBox-root":{fontSize:"30px",lineHeight:"42px"}},"@media (max-height: 639px)":{marginTop:"15px",marginBottom:"5px","& .MuiBox-root":{fontSize:"30px",lineHeight:"42px"}},"@media screen and (orientation: landscape)":{marginTop:"0px"}}),$=n(I)({position:"absolute",top:"12px",right:"15px",backgroundColor:"transparent",color:"#FEFEFE",fontSize:"16px",fontFamily:'"Baloo Da 2"',fontWeight:"400",lineHeight:"24px",textTransform:"none","@media (max-height: 639px)":{fontSize:"14px",top:"8px",right:"10px"},"@media screen and (orientation: landscape)":{right:"calc(50vw + 15px)"}});function G(r){const{t:i}=u(),{theme:o}=g.useContext(f),{headerBGColor:p,logoTextColor:x}=S(o),m=[{leftIcon:o==a.EASY_OCEAN?e.check_easyocean:e.check,text:i("Save Location"),rightIcon:o==a.EASY_OCEAN?e.location_easyocean:e.location},{leftIcon:o==a.EASY_OCEAN?e.check_easyocean:e.check,text:i("Save Bookmark"),rightIcon:o==a.EASY_OCEAN?e.bookmark_easyocean:e.bookmark},{leftIcon:o==a.EASY_OCEAN?e.check_easyocean:e.check,text:i("Save Progress"),rightIcon:o==a.EASY_OCEAN?e.progress_easyocean:e.progress},{leftIcon:o==a.EASY_OCEAN?e.check_easyocean:e.check,text:i("Save Preference"),rightIcon:o==a.EASY_OCEAN?e.preference_easyocean:e.preference}];return t.jsxs(t.Fragment,{children:[t.jsx($,{style:{color:x},onClick:r.onLoginClicked,children:i("Log In")}),t.jsxs(P,{style:{backgroundColor:p},children:[t.jsx(W,{children:t.jsx(w,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",children:i("Account lets you")})}),m.map((d,h)=>t.jsx(F,{data:d},h))]})]})}function U(r){const{t:i}=u(),{theme:o}=g.useContext(f),{mainBGColor:p}=S(o);return t.jsxs(Y,{style:{backgroundColor:p},children:[t.jsx(N,{children:t.jsx(w,{textAlign:"center",children:i("Link To Reset")})}),t.jsx(b,{initialValues:{email:""},onSubmit:x=>{r.onSubmit(x)},validationSchema:v().shape({email:j().email(i("InvalidEmail")).required(i("InvalidEmail"))}),children:({handleChange:x,handleBlur:m,handleSubmit:d,values:h,errors:l,touched:c})=>t.jsxs(t.Fragment,{children:[t.jsx(D,{haserror:c.email&&l.email?"true":"false",children:t.jsx(A,{type:"email",imgSrc:o==a.DEFAULT||o==a.EASY_OCEAN||o==a.EASY_SUNRISE?e.email:e.email_white,label:i("Email")+":",size:"large",value:h.email,error:c.email?l.email:"",onChange:x("email"),onBlur:m("email")})}),t.jsx(R,{children:t.jsx(_,{disabled:Array.isArray(l)||Object.values(l).toString()!="",label:i("Send"),size:"medium",onClick:d})})]})}),t.jsx(H,{children:t.jsx(M,{label:i("Home"),onClick:r.onMoveHome})})]})}const V=n(s)({display:"flex"}),q=n(V)({justifyContent:"center",alignItems:"center"}),Q=n(q)({width:"100vw",height:"100vh"});function pt(){const[r,i]=g.useState(!1),o=z(),p=k(),{t:x}=u(),m=()=>{p("/")},d=()=>{p("/auth/login")},h=l=>{i(!0),O.forgotPassword(l).then(c=>{i(!1),c&&p("/auth/check?type="+y.forgot_password)}).catch(c=>{i(!1),B.custom(C=>t.jsx(L,{text:x(c),visible:C.visible}))})};return t.jsxs(Q,{flexDirection:o?"column":"row",children:[t.jsx(G,{onLoginClicked:d}),t.jsx(U,{onMoveHome:m,onSubmit:h}),r&&t.jsx(T,{})]})}export{pt as default};