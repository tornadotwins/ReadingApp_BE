import{b as u,Q as i,j as e,an as _,ao as F,ap as L}from"./index-Bu54zGJb.js";import{V as M,B as N,h as R,a as Y}from"./VerifyRecaptchaProvider-nxAQt6Df.js";import{s,B as f,Y as D,u as v,S as I,g as b,d as O,_ as j}from"./App-D32vpfO3.js";import{u as z}from"./useOrientation-BOpKZ6JM.js";import{a as H}from"./auth.service-BH_zikrJ.js";import{I as n,T as k}from"./images-DhSVh-yh.js";import{I as P}from"./index-BFGTxQuP.js";import{F as U,c as G,a as E,I as y}from"./index.esm-B9npmQIy.js";import{c as V,f as W}from"./styled-Cya53JDF.js";import{B as q}from"./Button-DDnsx0n8.js";import{L as $}from"./index-HaS0uTnZ.js";import{C as B,L as K}from"./index-BWylSqvt.js";import"./index-AK0c6YfZ.js";import"./axios-BimPEqV4.js";const Q=s(f)({display:"flex"}),J=s(Q)({justifyContent:"center",alignItems:"center"}),X=s(J)({width:"100vw",height:"100vh"}),Z=s(f)({backgroundColor:"#1B7695",width:"100%",height:"50vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media (max-height: 579px)":{"& .css-16vwsd3":{marginTop:"25px"}},"@media screen and (orientation: landscape)":{height:"100vh",width:"50vw"}}),ee=s("h1")({fontSize:"36px",fontFamily:'"Buenard"',fontWeight:"700",lineHeight:"47px",textAlign:"center",margin:"0px",marginBottom:"8.92px","@media (max-width: 359px)":{fontSize:"30px",lineHeight:"42px"},"@media (max-height: 639px)":{marginTop:"15px",marginBottom:"5px",fontSize:"30px",lineHeight:"42px"},"@media screen and (orientation: landscape)":{marginTop:"0px"}}),te=s(f)({width:"100%",height:"50vh",alignContent:"center",overflowY:"scroll","@media screen and (orientation: landscape)":{height:"100vh",width:"50%"}}),ie=s("h6")({fontSize:"16px",fontFamily:"Baloo Da 2",textAlign:"center",color:"#000",margin:"0",marginTop:"25px","@media (max-width: 359px)":{marginTop:"25px"},"@media (max-height: 550px)":{marginBottom:"5px"}}),A=s(f)(({haserror:r})=>({height:"39px",width:"77.09%",marginTop:"16px",marginBottom:r=="true"?"15px":"0px","& .MuiInputBase-input":{padding:"7px",borderRadius:"0px"},"& .MuiInputBase-input: -webkit-autofill, .MuiInputBase-input: -webkit-autofill:hover, .MuiInputBase-input: -webkit-autofill:focus, .MuiInputBase-input: -webkit-autofill:active":{WebkitBoxShadow:"0 0 0 100px #FEFEFE inset",WebkitTextFillColor:"#000"},"@media screen and (orientation: landscape)":{width:"200px !important","@media (min-width: 550px) and (max-width: 750px)":{width:"250px"},"& .MuiFormControl-root":{width:"100px !important"},"@media (min-width: 750px)":{width:"300px !important","& .MuiFormControl-root":{width:"133px !important"}}},"@media (min-width: 380px)":{width:"320px"},"@media (max-height: 639px)":{height:"30px","& .MuiInputBase-input":{fontSize:"14px",padding:"0px 7px"},"& .css-tjr34z":{fontSize:"14px"},"& .css-d8svfr":{width:"14px"}}})),ne=s(D)({position:"absolute",top:"12px",right:"15px",backgroundColor:"transparent",color:"#FEFEFE",fontSize:"16px",fontFamily:'"Baloo Da 2"',fontWeight:"400",lineHeight:"24px",textTransform:"none","@media (max-height: 639px)":{fontSize:"14px",top:"8px",right:"10px"},"@media screen and (orientation: landscape)":{right:"calc(50vw + 15px)"}}),ae=s(f)({width:"77.09%",height:"39px",marginTop:"16px",paddingRight:"95px","& .MuiBox-root:nth-of-type(2)":{width:"39px"},"@media (min-width: 380px)":{width:"320px"},"@media (max-height: 639px)":{height:"30px",paddingRight:"102.5px","& .MuiBox-root:nth-of-type(2)":{width:"30px"},"& .css-d8svfr":{width:"14px"},"& p":{fontSize:"14px"}},"@media screen and (orientation: landscape)":{width:"200px !important","@media (min-width: 550px)":{width:"250px"},"@media (max-height: 639px)":{paddingRight:"104px"},"@media (min-width: 750px)":{width:"300px !important",paddingRight:"104px"},"@media (min-width: 750px) and (min-height: 639px)":{paddingRight:"94px"},"@media (max-width: 749px)":{paddingRight:"70px"}}}),oe=s(f)({margin:"10px 0px",textAlign:"center"});function re(r){const{t:o}=v(),{theme:p}=u.useContext(I),{headerBGColor:l,logoTextColor:x}=b(p),a=[{leftIcon:p==i.EASY_OCEAN?n.location_easyocean:n.location,text:o("Save Location")},{leftIcon:p==i.EASY_OCEAN?n.bookmark_easyocean:n.bookmark,text:o("Save Bookmark")},{leftIcon:p==i.EASY_OCEAN?n.progress_easyocean:n.progress,text:o("Save Progress")},{leftIcon:p==i.EASY_OCEAN?n.preference_easyocean:n.preference,text:o("Save Preference")}];return e.jsxs(e.Fragment,{children:[e.jsx(ne,{style:{color:x},onClick:r.onLoginClicked,children:o("Log In")}),e.jsxs(Z,{style:{backgroundColor:l},children:[e.jsx(ee,{children:e.jsx(k,{fontSize:36,fontFamily:"Buenard",fontWeight:"700",lineHeight:47,textAlign:"center",color:x,children:o("Account lets you")})}),a.map((t,S)=>e.jsx(P,{data:t},S))]})]})}function se(r){const{isLoading:o,verifiedBot:p,error:l,verifyToken:x}=u.useContext(M),{t:a}=v(),{theme:t}=u.useContext(I),{mainBGColor:S,altTextColor:h}=b(t);u.useEffect(()=>{r.onChangeLoadingStatus&&r.onChangeLoadingStatus(o)},[o]),u.useEffect(()=>{r.onDisplayError&&l&&l.length>0&&r.onDisplayError(l)},[l]);const m=()=>{x(_.SIGNUP_PAGE)};return e.jsxs(te,{style:{backgroundColor:S},children:[e.jsx(ie,{children:e.jsx(k,{fontWeight:"bold",children:a("Create Account")})}),e.jsx(V,{children:e.jsx(U,{initialValues:{username:"",password:"",email:""},onSubmit:c=>{r.onSubmit(c)},validationSchema:G().shape({username:E().required(a("InvalidUsername")),password:E().required(a("InvalidPassword")),email:E().email(a("InvalidEmail")).required(a("InvalidEmail"))}),children:({handleChange:c,handleBlur:w,handleSubmit:T,values:C,errors:d,touched:g})=>e.jsxs(e.Fragment,{children:[e.jsx(A,{haserror:g.username&&d.username?"true":"false",children:e.jsx(y,{type:"input",imgSrc:t==i.DEFAULT||t==i.EASY_OCEAN||t==i.EASY_SUNRISE?n.user:n.user_white,label:a("Name")+":",value:C.username,error:g.username?d.username:"",onChange:c("username"),onBlur:w("username")})}),e.jsx(A,{haserror:g.password&&d.password?"true":"false",children:e.jsx(y,{type:"password",imgSrc:t==i.DEFAULT||t==i.EASY_OCEAN||t==i.EASY_SUNRISE?n.pass:n.pass_white,label:a("Pass")+":",value:C.password,error:g.password?d.password:"",onChange:c("password"),onBlur:w("password")})}),e.jsx(A,{haserror:g.email&&d.email?"true":"false",children:e.jsx(y,{imgSrc:t==i.DEFAULT||t==i.EASY_OCEAN||t==i.EASY_SUNRISE?n.email:n.email_white,label:a("Email")+":",type:"email",value:C.email,error:g.email?d.email:"",onChange:c("email"),onBlur:w("email")})}),e.jsx(ae,{children:e.jsx(N,{imgSrc:t==i.DEFAULT||t==i.EASY_OCEAN||t==i.EASY_SUNRISE?n.bot:n.bot_white,checkImgSrc:p?t==i.DEFAULT||i.EASY_OCEAN?n.tick:n.tick_white:"",label:a("No Bot")+":",onClick:m})}),e.jsx(W,{children:e.jsx(q,{disabled:!p||Array.isArray(d)||Object.values(d).toString()!="",label:a("Create"),size:"medium",onClick:T})})]})})}),e.jsx(oe,{children:e.jsx($,{label:a("Home"),onClick:r.onMoveHome})})]})}function ye(){const[r,o]=u.useState(!1),p=z(),l=O(),{t:x}=v(),a=()=>{l("/")},t=()=>{l("/login")},S=h=>{o(!0),H.signup(h).then(m=>{o(!1),m&&l("/check?type="+L.signup)}).catch(m=>{o(!1),j.custom(c=>e.jsx(B,{text:x(m),visible:c.visible}))})};return e.jsx(R,{reCaptchaKey:F,children:e.jsxs(Y,{children:[e.jsxs(X,{flexDirection:p?"column":"row",children:[e.jsx(re,{onLoginClicked:t}),e.jsx(se,{onSubmit:S,onMoveHome:a,onChangeLoadingStatus:h=>o(h),onDisplayError:h=>j.custom(m=>e.jsx(B,{text:x(h),visible:m.visible}))})]}),r&&e.jsx(K,{})]})})}export{ye as default};