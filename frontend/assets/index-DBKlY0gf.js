import{b as h,Q as s,j as e,an as ge,ao as xe}from"./index-BE3uQJXX.js";import{s as d,B as f,u as A,S as E,g as T,d as b,Y as de,c as he,Z as me,_,e as ue}from"./App-C54qGOPD.js";import{V as pe,B as Se,h as fe,a as ye}from"./VerifyRecaptchaProvider-CEvRZNCq.js";import{u as Ce}from"./useOrientation-DI4TzsHc.js";import{a as w}from"./auth.service-CDQjqgmW.js";import{S as z,a as Ae,b as Ee,c as je,d as F,e as ke,f as Te,g as Be}from"./styled-8xBHmzh1.js";import{I as o,T as u}from"./images-BU8WrZ8M.js";import{I as Le}from"./index-CcL1KOHI.js";import{F as _e,c as ve,a as I,I as N}from"./index.esm-Dfm9CT-9.js";import{B as be}from"./Button-DMFzZ7e6.js";import{L as D}from"./index-ja1wVhca.js";import{C as v,L as we}from"./index-B30yO50J.js";import{d as Fe}from"./styled-Bwohpc6Q.js";import"./index-DL4NZW23.js";import"./axios-BimPEqV4.js";const Ie=d(f)({display:"flex"}),Ne=d(Ie)({justifyContent:"center",alignItems:"center"}),De=d(Ne)({width:"100vw",height:"100vh"});function Oe(){const{t}=A(),{theme:n}=h.useContext(E),{headerBGColor:r,logoTextColor:l}=T(n),g=[{leftIcon:n==s.EASY_OCEAN?o.check_easyocean:o.check,text:t("Save Location"),rightIcon:n==s.EASY_OCEAN?o.location_easyocean:o.location},{leftIcon:n==s.EASY_OCEAN?o.check_easyocean:o.check,text:t("Save Bookmark"),rightIcon:n==s.EASY_OCEAN?o.bookmark_easyocean:o.bookmark},{leftIcon:n==s.EASY_OCEAN?o.check_easyocean:o.check,text:t("Save Progress"),rightIcon:n==s.EASY_OCEAN?o.progress_easyocean:o.progress},{leftIcon:n==s.EASY_OCEAN?o.check_easyocean:o.check,text:t("Save Preference"),rightIcon:n==s.EASY_OCEAN?o.preference_easyocean:o.preference}];return e.jsxs(z,{style:{backgroundColor:r},children:[e.jsx(Ae,{children:e.jsx(u,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:l,children:t("Account lets you")})}),g.map((a,i)=>e.jsx(Le,{data:a},i))]})}function Pe(t){const{isLoading:n,verifiedBot:r,error:l,verifyToken:g}=h.useContext(pe),{t:a}=A(),{theme:i}=h.useContext(E),{mainBGColor:y}=T(i),B=()=>{g(ge.LOGIN_PAGE)};return h.useEffect(()=>{t.onChangeLoadingStatus&&t.onChangeLoadingStatus(n)},[n]),h.useEffect(()=>{t.onDisplayError&&l&&l.length>0&&t.onDisplayError(l)},[l]),e.jsxs(Ee,{style:{backgroundColor:y},children:[e.jsx(je,{children:e.jsx(_e,{initialValues:{username:"",password:""},onSubmit:p=>{t.onSubmit(p)},validationSchema:ve().shape({username:I().required(a("InvalidUsername")),password:I().required(a("InvalidPassword"))}),children:({handleChange:p,handleBlur:j,handleSubmit:L,values:k,errors:m,touched:S})=>e.jsxs(e.Fragment,{children:[e.jsx(F,{haserror:S.username&&m.username?"true":"false",children:e.jsx(N,{type:"input",imgSrc:i==s.DEFAULT||i==s.EASY_OCEAN||i==s.EASY_SUNRISE?o.user:o.user_white,label:a("Name")+":",value:k.username,error:S.username?m.username:"",onChange:p("username"),onBlur:j("username")})}),e.jsx(F,{haserror:S.password&&m.password?"true":"false",children:e.jsx(N,{type:"password",imgSrc:i==s.DEFAULT||i==s.EASY_OCEAN||i==s.EASY_SUNRISE?o.pass:o.pass_white,label:a("Pass")+":",value:k.password,error:S.password?m.password:"",onChange:p("password"),onBlur:j("password")})}),e.jsx(ke,{children:e.jsx(Se,{imgSrc:i==s.DEFAULT||i==s.EASY_OCEAN?o.bot:o.bot_white,checkImgSrc:r?i==s.DEFAULT||i==s.EASY_OCEAN?o.tick:o.tick_white:"",label:a("No Bot")+":",onClick:B})}),e.jsx(Te,{children:e.jsx(be,{disabled:!r||Array.isArray(m)||Object.values(m).toString()!="",label:a("Log In"),size:"medium",onClick:L})})]})})}),e.jsxs(Be,{children:[e.jsx(D,{label:a("Make Account"),onClick:t.onSignupClicked}),e.jsx(D,{label:a("Forgot Pass"),onClick:t.onForgotClicked})]})]})}const O=d(f)({width:"52.5%",margin:"0"}),ze=d("img")({width:"40.09px",margin:"11.95px 0 13.73px 0"}),Re=d(f)({margin:"0px",marginBottom:"8.92px","@media (max-width: 359px)":{"& .MuiBox-root":{fontSize:"30px",lineHeight:"42px"}},"@media (max-height: 639px)":{marginTop:"15px",marginBottom:"5px","& .MuiBox-root":{fontSize:"30px",lineHeight:"42px"}},"@media screen and (orientation: landscape)":{marginTop:"0px"}});function Ye(){const{t}=A(),{theme:n}=h.useContext(E),{headerBGColor:r,logoTextColor:l}=T(n),g=b(),a=()=>{g("/auth/login")};return e.jsxs(z,{style:{backgroundColor:r},children:[e.jsx(Fe,{style:{color:l},onClick:a,children:t("Log In")}),e.jsx(Re,{children:e.jsx(u,{fontFamily:'"Buenard"',fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",defaultColor:"#FFF",children:t("Success")})}),e.jsx(ze,{src:n==s.EASY_OCEAN?o.check_easyocean:o.check}),e.jsx(O,{children:e.jsx(u,{fontSize:16,fontFamily:"'Baloo Da 2'",textAlign:"center",fontWeight:"400",color:l,children:t("New Pass Saved")})}),e.jsx(O,{sx:{marginTop:"13.73px"},children:e.jsx(u,{fontSize:16,fontFamily:"'Baloo Da 2'",textAlign:"center",fontWeight:"400",color:l,children:t("Login Possible")})})]})}const Ue=d(f)({backgroundColor:"#1B7695",width:"100%",height:"50vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media (max-height: 579px)":{"& .css-16vwsd3":{marginTop:"25px"}},"@media screen and (orientation: landscape)":{height:"100vh",width:"50vw"}}),He=d(f)({margin:"0px",marginBottom:"8.92px","@media (max-width: 359px)":{"& .MuiBox-root":{fontSize:"30px",lineHeight:"42px"}},"@media (max-height: 639px)":{marginTop:"15px",marginBottom:"5px","& .MuiBox-root":{fontSize:"30px",lineHeight:"42px"}},"@media screen and (orientation: landscape)":{marginTop:"0px"}}),Ge=d(de)({position:"absolute",top:"12px",right:"15px",backgroundColor:"transparent",color:"#FEFEFE",fontSize:"16px",fontFamily:'"Baloo Da 2"',fontWeight:"400",lineHeight:"24px",textTransform:"none","@media (max-height: 639px)":{fontSize:"14px",top:"8px",right:"10px"},"@media screen and (orientation: landscape)":{right:"calc(50vw + 15px)"}}),P=d(f)({width:"52.5%",margin:"0"}),Me=d("img")({width:"40.09px",margin:"11.95px 0 13.73px 0"});function $e(){const{t}=A(),n=b(),{theme:r}=h.useContext(E),{headerBGColor:l,logoTextColor:g}=T(r),a=()=>{n("/auth/login")};return e.jsxs(Ue,{style:{backgroundColor:l},children:[e.jsx(Ge,{style:{color:g},onClick:a,children:t("Log In")}),e.jsx(He,{children:e.jsx(u,{fontFamily:'"Buenard"',fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:g,children:t("Success")})}),e.jsx(Me,{src:o.check}),e.jsx(P,{children:e.jsx(u,{color:g,fontSize:16,fontWeight:"400",fontFamily:"'Baloo Da 2'",textAlign:"center",children:t("Account Made")})}),e.jsx(P,{sx:{marginTop:"13.73px"},children:e.jsx(u,{color:g,fontSize:16,fontWeight:"400",fontFamily:"'Baloo Da 2'",textAlign:"center",children:t("Login Possible")})})]})}function We(t){const[n,r]=h.useState(!1),l=Ce(),[g]=me(),a=g.get("type"),i=b(),{t:y}=A(),{setTextSize:B,setTheme:p,setStartAyasOnNewLine:j,setShowAyasNumbers:L,setAyasNumberDisplayFormat:k,setShowQuranReferences:m,setDisplayType:S,setReferenceLanguage:R,setReadingLanguage:Y,setReadingControls:U,setPageControl:H,setVolume:G,setAutoScrollText:M,setAudioLanguage:$,setAudioOtherLanguage:W}=h.useContext(E);h.useEffect(()=>{const c=g.get("token");!n&&c&&(c==null?void 0:c.length)>0&&(r(!0),w.verifyEmail({token:c}).then(()=>{r(!1)}).catch(x=>{r(!1),_.custom(C=>e.jsx(v,{text:y(x),visible:C.visible}))}))},[]);const V=()=>{i("/auth/forgot")},Q=()=>{i("/auth/signup")},q=c=>{r(!0),w.login(c).then(x=>{r(!1),x&&(t.dispatch({type:ue.SET_CURRENT_USER,payload:{user:x}}),K(x),i("/"))}).catch(x=>{r(!1),_.custom(C=>e.jsx(v,{text:y(x),visible:C.visible}))})},K=c=>{if(c&&c.settings){const{textSize:x,theme:C,startAyasOnNewLine:Z,showAyasNumbers:J,ayasNumberDisplayFormat:X,showQuranReferences:ee,displayType:te,referenceLanguage:oe,readingLanguage:ne,readingControls:se,pageControl:ae}=c.settings;B(x),p(C),j(Z),L(J),k(X),m(ee),S(te),R(oe),Y(ne),U(se),H(ae);const{volume:ie,autoScrollText:re,language:ce,other:le}=c.soundSettings;G(ie),M(re),$(ce),W(le)}};return e.jsx(fe,{reCaptchaKey:xe,children:e.jsxs(ye,{children:[e.jsxs(De,{flexDirection:l?"column":"row",children:[a=="reset"?e.jsx(Ye,{}):a?e.jsx($e,{}):e.jsx(Oe,{}),e.jsx(Pe,{onSubmit:q,onForgotClicked:V,onSignupClicked:Q,onChangeLoadingStatus:c=>r(c),onDisplayError:c=>_.custom(x=>e.jsx(v,{text:y(c),visible:x.visible}))})]}),n&&e.jsx(we,{})]})})}function Ve(t){return{dispatch:t}}function Qe(t){return{currentUser:t.user.currentUser}}const gt=he(Qe,Ve)(We);export{gt as default};