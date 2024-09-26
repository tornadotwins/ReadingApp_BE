import{b as x,j as t,Q as r,an as F,ao as L}from"./index-DKQ0p290.js";import{s,B as h,u as y,S as k,g as A,Z as _,d as M,_ as C}from"./App-KPJk7nGf.js";import{V as D,B as N,h as P,a as O}from"./VerifyRecaptchaProvider-y8KvYW3m.js";import{u as z}from"./useOrientation-BfrLGoLR.js";import{a as v}from"./auth.service-xVEoIQ4t.js";import{C as S,L as Y}from"./index-CE4wY2Et.js";import{d as U}from"./styled-DdW1R8fs.js";import{T as I,I as c}from"./images-D6HjK07w.js";import{F as G,c as H,a as B,I as b}from"./index.esm-Cca8XwYn.js";import{B as V}from"./Button-Bs_7FqS-.js";import"./index-DvfuXIzz.js";import"./axios-BimPEqV4.js";const W=s(h)({display:"flex"}),q=s(W)({justifyContent:"center",alignItems:"center"}),K=s(q)({width:"100vw",height:"100vh"}),$=s(h)({backgroundColor:"#1B7695",width:"100%",height:"50vh",display:"flex",flexDirection:"column","@media screen and (orientation: landscape)":{height:"100vh",width:"50vw",justifyContent:"center"}}),Q=s("h6")({marginTop:"69px",fontFamily:"Buenard",fontSize:"36px",lineHeight:"47px",textAlign:"center",fontWeight:"700"}),Z=s(h)({width:"100%",flex:"1",height:"60vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflowY:"scroll","@media screen and (orientation: landscape)":{height:"100vh",width:"50%"}}),J=s("h6")({fontSize:"16px",fontFamily:"Baloo Da 2",textAlign:"center",fontWeight:"400",width:"57.78%",alignSelf:"center",color:"#000",margin:"0","@media (max-height: 639px)":{fontSize:"14px",lineHeight:"20px"}}),X=s(h)({width:"100%",display:"flex",flexDirection:"column",alignItems:"center","& button":{position:"relative",bottom:"0"}});s(h)({marginTop:"16px"});const T=s(h)(({haserror:o})=>({height:"39px",width:"77.09%",marginTop:"16px",marginBottom:o=="true"?"15px":"0px","& .MuiInputBase-input":{padding:"7px",borderRadius:"0px"},"& .MuiInputBase-input: -webkit-autofill, .MuiInputBase-input: -webkit-autofill:hover, .MuiInputBase-input: -webkit-autofill:focus, .MuiInputBase-input: -webkit-autofill:active":{WebkitBoxShadow:"0 0 0 100px #FEFEFE inset",WebkitTextFillColor:"#000"},"@media screen and (orientation: landscape)":{width:"200px !important","@media (min-width: 550px) and (max-width: 750px)":{width:"250px"},"& .MuiFormControl-root":{width:"100px !important"},"@media (min-width: 750px)":{width:"300px !important","& .MuiFormControl-root":{width:"133px !important"}}},"@media (min-width: 380px)":{width:"320px"},"@media (max-height: 639px)":{height:"30px","& .MuiInputBase-input":{fontSize:"14px",padding:"0px 7px"},"& .css-tjr34z":{fontSize:"14px"},"& .css-d8svfr":{width:"14px"}}})),tt=s(h)({width:"77.09%",height:"39px",marginTop:"16px",paddingRight:"95px","& .MuiBox-root:nth-of-type(2)":{width:"39px"},"@media (min-width: 380px)":{width:"320px"},"@media (max-height: 639px)":{height:"30px",paddingRight:"102.5px","& .MuiBox-root:nth-of-type(2)":{width:"30px"},"& .css-d8svfr":{width:"14px"},"& p":{fontSize:"14px"}},"@media screen and (orientation: landscape)":{width:"200px !important","@media (min-width: 550px)":{width:"250px"},"@media (max-height: 639px)":{paddingRight:"104px"},"@media (min-width: 750px)":{width:"300px !important",paddingRight:"104px"},"@media (min-width: 750px) and (min-height: 639px)":{paddingRight:"94px"},"@media (max-width: 749px)":{paddingRight:"70px"}}}),et=s(h)({height:"40px",marginTop:"16px"});function it(o){const{t:e}=y(),{theme:m}=x.useContext(k),{headerBGColor:d,altTextColor:u,logoTextColor:i}=A(m);return t.jsxs(t.Fragment,{children:[t.jsx(U,{style:{color:i},onClick:o.onLoginClicked,children:e("Log In")}),t.jsx($,{style:{backgroundColor:d},children:t.jsx(Q,{children:t.jsx(I,{color:u,fontFamily:'"Buenard"',fontWeight:"700",fontSize:36,lineHeight:47,children:e("Set New Password")})})})]})}function nt(o){const{isLoading:e,verifiedBot:m,error:d,verifyToken:u}=x.useContext(D),{t:i}=y(),{theme:n}=x.useContext(k),{mainBGColor:w,altTextColor:a}=A(n),l=()=>{u(F.LOGIN_PAGE)};return x.useEffect(()=>{o.onChangeLoadingStatus&&o.onChangeLoadingStatus(e)},[e]),x.useEffect(()=>{o.onDisplayError&&d&&d.length>0&&o.onDisplayError(d)},[d]),t.jsxs(Z,{style:{backgroundColor:w},children:[t.jsx(J,{children:t.jsx(I,{color:a,children:i("Enter New Password")})}),t.jsx(X,{children:t.jsx(G,{initialValues:{password:"",confirm:""},onSubmit:p=>{o.onSubmit(p)},validationSchema:H().shape({password:B().required(i("InvalidPassword")),confirm:B().required(i("InvalidConfirmPassword"))}),children:({handleChange:p,handleBlur:E,handleSubmit:R,values:j,errors:g,touched:f})=>t.jsxs(t.Fragment,{children:[t.jsx(T,{haserror:f.password&&g.password?"true":"false",children:t.jsx(b,{type:"password",imgSrc:n==r.DEFAULT||n==r.EASY_OCEAN||n==r.EASY_SUNRISE?c.pass:c.pass_white,label:i("New Pass")+":",value:j.password,error:f.password?g.password:"",onChange:p("password"),onBlur:E("password")})}),t.jsx(T,{haserror:f.confirm&&g.confirm?"true":"false",children:t.jsx(b,{type:"password",imgSrc:n==r.DEFAULT||n==r.EASY_OCEAN||n==r.EASY_SUNRISE?c.pass:c.pass_white,label:i("Confirm")+":",value:j.confirm,error:f.confirm?g.confirm:"",onChange:p("confirm"),onBlur:E("confirm")})}),t.jsx(tt,{children:t.jsx(N,{imgSrc:n==r.DEFAULT||n==r.EASY_OCEAN||n==r.EASY_SUNRISE?c.bot:c.bot_white,checkImgSrc:m?n==r.DEFAULT||r.EASY_OCEAN?c.tick:c.tick_white:"",label:i("No Bot")+":",onClick:l})}),t.jsx(et,{children:t.jsx(V,{disabled:!m||Array.isArray(g)||Object.values(g).toString()!="",label:i("Submit"),size:"medium",onClick:R})})]})})})]})}function gt(){const[o,e]=x.useState(!1),m=z(),[d]=_(),u=M(),{t:i}=y();x.useEffect(()=>{const a=d.get("token");!o&&a&&a.length>0&&(e(!0),v.verifyEmail({token:a}).then(()=>{e(!1)}).catch(l=>{e(!1),C.custom(p=>t.jsx(S,{text:i(l),visible:p.visible}))}))},[]);const n=a=>{e(!0),a.token=d.get("token"),v.resetPassword(a).then(l=>{e(!1),l&&u("/login?type=reset")}).catch(l=>{e(!1),C.custom(p=>t.jsx(S,{text:i(l),visible:p.visible}))})},w=()=>{u("/login")};return t.jsx(P,{reCaptchaKey:L,children:t.jsxs(O,{children:[t.jsxs(K,{flexDirection:m?"column":"row",children:[t.jsx(it,{onLoginClicked:w}),t.jsx(nt,{onSubmit:n,onChangeLoadingStatus:a=>e(a),onDisplayError:a=>C.custom(l=>t.jsx(S,{text:i(a),visible:l.visible}))})]}),o&&t.jsx(Y,{})]})})}export{gt as default};