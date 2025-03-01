import{b as m,j as t,a3 as r,aF as F,aG as L}from"./index-8gCEmbCj.js";import{s as a,B as d,_ as y,S as A,g as I,a0 as M,u as _,k as C}from"./App-C0bULsYI.js";import{V as N,B as D,h as P,a as O}from"./VerifyRecaptchaProvider-xu3rxE9h.js";import{u as Y}from"./useOrientation-BX9k4ZgG.js";import{a as v}from"./auth.service-Er4hmgfi.js";import{L as z}from"./index-jKqvL5Wg.js";import{C as S}from"./index-DJcZbyB0.js";import{d as H}from"./styled-Btmpo0Qu.js";import{T as R,I as x}from"./index-CY88kZPB.js";import{F as G,c as U,a as B,I as b}from"./index.esm-BftZWL_S.js";import{B as V}from"./Button-B9MzZJe8.js";import"./index-DDdNWTEE.js";import"./axios-upsvKRUO.js";const W=a(d)({display:"flex"}),q=a(W)({justifyContent:"center",alignItems:"center"}),K=a(q)({width:"100vw",height:"100%"}),$=a(d)({backgroundColor:"#1B7695",width:"100%",height:"50dvh",display:"flex",flexDirection:"column","@media screen and (orientation: landscape)":{height:"100dvh",width:"50vw",justifyContent:"center"}}),J=a(d)({marginTop:"69px","@media screen and (orientation: landscape)":{margin:"0px"}}),Q=a(d)({width:"100%",minHeight:"50dvh",height:"calc(100% - 50dvh)",flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflowY:"scroll","@media screen and (orientation: landscape)":{height:"100dvh",width:"50%"}}),X=a(d)({width:"57.78%",alignSelf:"center",margin:"0","@media (max-height: 639px)":{"& .MuiBox-root":{fontSize:"14px !important",lineHeight:"20px !important"}}}),Z=a(d)({width:"100%",display:"flex",flexDirection:"column",alignItems:"center","& button":{position:"relative",bottom:"0"}});a(d)({marginTop:"16px"});const k=a(d)(({haserror:n})=>({height:"39px",width:"77.09%",marginTop:"16px",marginBottom:n=="true"?"15px":"0px","& .MuiInputBase-input":{padding:"7px",borderRadius:"0px"},"& .MuiInputBase-input: -webkit-autofill, .MuiInputBase-input: -webkit-autofill:hover, .MuiInputBase-input: -webkit-autofill:focus, .MuiInputBase-input: -webkit-autofill:active":{WebkitBoxShadow:"0 0 0 100px #FEFEFE inset",WebkitTextFillColor:"#000"},"@media screen and (orientation: landscape)":{width:"200px !important","@media (min-width: 550px) and (max-width: 750px)":{width:"250px"},"& .MuiFormControl-root":{width:"100px !important"},"@media (min-width: 750px)":{width:"300px !important","& .MuiFormControl-root":{width:"133px !important"}}},"@media (min-width: 380px)":{width:"320px"},"@media (max-height: 639px)":{height:"30px","& .MuiInputBase-input":{fontSize:"14px !important",padding:"0px 7px"},"& .MuiBox-root":{fontSize:"14px !important",lineHeight:"20px !important"},"& .css-tjr34z":{fontSize:"14px !important"},"& .css-d8svfr":{width:"14px !important"}}})),tt=a(d)({width:"77.09%",height:"39px",marginTop:"16px",paddingRight:"95px","& .MuiBox-root:nth-of-type(2)":{width:"39px"},"@media (min-width: 380px)":{width:"320px"},"@media (max-height: 639px)":{height:"30px",paddingRight:"102.5px","& .MuiBox-root:nth-of-type(2)":{width:"30px"},"& .css-d8svfr":{width:"14px"},"& .MuiBox-root":{fontSize:"14px !important",lineHeight:"20px !important"}},"@media screen and (orientation: landscape)":{width:"200px !important","@media (min-width: 550px)":{width:"250px"},"@media (max-height: 639px)":{paddingRight:"104px"},"@media (min-width: 750px)":{width:"300px !important",paddingRight:"104px"},"@media (min-width: 750px) and (min-height: 639px)":{paddingRight:"94px"},"@media (max-width: 749px)":{paddingRight:"70px"}}}),it=a(d)({height:"40px",marginTop:"16px"});function et(n){const{t:e}=y(),{theme:u}=m.useContext(A),{headerBGColor:p,logoTextColor:h}=I(u);return t.jsxs(t.Fragment,{children:[t.jsx(H,{style:{color:h},onClick:n.onLoginClicked,children:e("Log In")}),t.jsx($,{style:{backgroundColor:p},children:t.jsx(J,{children:t.jsx(R,{color:h,fontFamily:'"Buenard"',fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",children:e("Set New Password")})})})]})}function nt(n){const{isLoading:e,verifiedBot:u,error:p,verifyToken:h}=m.useContext(N),{t:s}=y(),{theme:i}=m.useContext(A),{mainBGColor:w,altTextColor:o}=I(i),l=()=>{h(F.LOGIN_PAGE)};return m.useEffect(()=>{n.onChangeLoadingStatus&&n.onChangeLoadingStatus(e)},[e]),m.useEffect(()=>{n.onDisplayError&&p&&p.length>0&&n.onDisplayError(p)},[p]),t.jsxs(Q,{style:{backgroundColor:w},children:[t.jsx(X,{children:t.jsx(R,{color:o,textAlign:"center",children:s("Enter New Password")})}),t.jsx(Z,{children:t.jsx(G,{initialValues:{password:"",confirm:""},onSubmit:c=>{n.onSubmit(c)},validationSchema:U().shape({password:B().required(s("InvalidPassword")),confirm:B().required(s("InvalidConfirmPassword"))}),children:({handleChange:c,handleBlur:E,handleSubmit:T,values:j,errors:g,touched:f})=>t.jsxs(t.Fragment,{children:[t.jsx(k,{haserror:f.password&&g.password?"true":"false",children:t.jsx(b,{type:"password",imgSrc:i==r.DEFAULT||i==r.EASY_OCEAN||i==r.EASY_SUNRISE?x.pass:x.pass_white,label:s("New Pass")+":",value:j.password,error:f.password?g.password:"",onChange:c("password"),onBlur:E("password")})}),t.jsx(k,{haserror:f.confirm&&g.confirm?"true":"false",children:t.jsx(b,{type:"password",imgSrc:i==r.DEFAULT||i==r.EASY_OCEAN||i==r.EASY_SUNRISE?x.pass:x.pass_white,label:s("Confirm")+":",value:j.confirm,error:f.confirm?g.confirm:"",onChange:c("confirm"),onBlur:E("confirm")})}),t.jsx(tt,{children:t.jsx(D,{imgSrc:i==r.DEFAULT||i==r.EASY_OCEAN||i==r.EASY_SUNRISE?x.bot:x.bot_white,checkImgSrc:u?i==r.DEFAULT||i==r.EASY_OCEAN?x.tick:x.tick_white:"",label:s("No Bot")+":",onClick:l})}),t.jsx(it,{children:t.jsx(V,{disabled:!u||Array.isArray(g)||Object.values(g).toString()!="",label:s("Submit"),size:"medium",onClick:T})})]})})})]})}function ft(){const[n,e]=m.useState(!1),u=Y(),[p]=M(),h=_(),{t:s}=y();m.useEffect(()=>{const o=p.get("token");!n&&o&&o.length>0&&(e(!0),v.verifyEmail({token:o}).then(()=>{e(!1)}).catch(l=>{e(!1),C.custom(c=>t.jsx(S,{text:s(l),visible:c.visible}))}))},[]);const i=o=>{e(!0),o.token=p.get("token"),v.resetPassword(o).then(l=>{e(!1),l&&h("/login?type=reset")}).catch(l=>{e(!1),C.custom(c=>t.jsx(S,{text:s(l),visible:c.visible}))})},w=()=>{h("/login")};return t.jsx(P,{reCaptchaKey:L,children:t.jsxs(O,{children:[t.jsxs(K,{flexDirection:u?"column":"row",children:[t.jsx(et,{onLoginClicked:w}),t.jsx(nt,{onSubmit:i,onChangeLoadingStatus:o=>e(o),onDisplayError:o=>C.custom(l=>t.jsx(S,{text:s(o),visible:l.visible}))})]}),n&&t.jsx(z,{})]})})}export{ft as default};
