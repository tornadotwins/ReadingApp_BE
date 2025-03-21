var ge=Object.defineProperty;var ue=(e,a,n)=>a in e?ge(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;var Y=(e,a,n)=>ue(e,typeof a!="symbol"?a+"":a,n);import{b as s,c as xe,_,j as t,X as he,a3 as X,au as fe}from"./index-DEG7EQ5W.js";import{a as pe,b as me,d as Ce,s as m,e as Se,f as be,r as Ae,B as E,S as k,g as M,D as ve,h as ye,i as Le,c as Te,u as Ee,j as p,V as J}from"./App-3aEmK_pi.js";import{u as je}from"./useOrientation-BnjYu8PP.js";import{B as De,S as ke,L as _e,T as Me,H as Pe,a as Q,b as Be,c as we}from"./styled-DqtI7tqA.js";import{I as D,T}from"./index-B_PedCrA.js";import{H as Ge}from"./index-BWYBFeC7.js";import{C as He}from"./index-C91OSjhU.js";import{B as te}from"./Button-bxZIrsGF.js";import{L as Ie}from"./index-D28iGf04.js";import{S as Re}from"./index-C3gTwXTF.js";import{C as Z}from"./index-Dw8Hbmdw.js";import{a as $}from"./auth.service-C5exErY4.js";import{a as Ne}from"./index-C88pvD_q.js";import"./index-PfnPkSiB.js";function Ue(e){return pe("MuiDialogActions",e)}me("MuiDialogActions",["root","spacing"]);const Fe=["className","disableSpacing"],Oe=e=>{const{classes:a,disableSpacing:n}=e;return be({root:["root",!n&&"spacing"]},Ue,a)},ze=m("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[a.root,!n.disableSpacing&&a.spacing]}})(({ownerState:e})=>_({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),We=s.forwardRef(function(a,n){const r=Ce({props:a,name:"MuiDialogActions"}),{className:d,disableSpacing:c=!1}=r,o=xe(r,Fe),f=_({},r,{disableSpacing:c}),u=Oe(f);return t.jsx(ze,_({className:Se(u.root,d),ownerState:f,ref:n},o))});var P={},Ke=he;Object.defineProperty(P,"__esModule",{value:!0});var ae=P.default=void 0,qe=Ke(Ae()),Ve=t;ae=P.default=(0,qe.default)((0,Ve.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const Ye=m(E)({display:"flex"}),Xe=m(Ye)({justifyContent:"center",alignItems:"center"}),Je=m(Xe)({width:"100dvw",height:"100dvh"}),Qe=()=>{const e=navigator.userAgent,a=()=>[/(Android)(.+)(Mobile)/i,/BlackBerry/i,/iPhone|iPod/i,/Opera Mini/i,/IEMobile/i].some(o=>e.match(o)),n=()=>/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(e.toLowerCase()),r=()=>!a()&&!n();return(()=>{if(r())return"desktop";if(a())return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"android":/iPad|iPhone|iPod/.test(e)?"ios":"unknown"})()||"unknown"};function Ze(e){const{theme:a}=s.useContext(k),{headerBGColor:n,logoTextColor:r}=M(a),[d,c]=s.useState(""),[o,f]=s.useState("");return s.useEffect(()=>{var u,v,S,y,b,A;if(e.isHeaven){const i=(u=e.pageTerms)==null?void 0:u.texts.find(C=>C.variable=="Welcome Heavenly");c(((v=i==null?void 0:i.text)==null?void 0:v[e.appLanguage])||((S=i==null?void 0:i.text)==null?void 0:S.en)||"")}else{const i=(y=e.pageTerms)==null?void 0:y.texts.find(C=>C.variable=="Welcome");c(((b=i==null?void 0:i.text)==null?void 0:b[e.appLanguage])||((A=i==null?void 0:i.text)==null?void 0:A.en)||"")}},[e.isHeaven,e.pageTerms,e.appLanguage]),s.useEffect(()=>{const u=e.isHeaven?a==X.EASY_OCEAN?D.main_logo_heaven_easyocean:D.main_logo_heaven:a==X.EASY_OCEAN?D.main_logo_easyocean:D.main_logo;f(u)},[e.isHeaven,a]),t.jsxs(De,{style:{backgroundColor:n},children:[t.jsx(ke,{children:t.jsx(Ge,{isLogin:e.isLoggedIn,textColor:r,itemBgColor:n,terms:e.pageTerms,appLanguage:e.appLanguage,onLogin:e.onLogin,onSettings:e.onSettings})}),t.jsx(_e,{src:o}),t.jsx(Me,{children:t.jsx(T,{color:r,fontFamily:"Buenard",fontWeight:"700",textAlign:"center",fontSize:36,lineHeight:47,children:d})})]})}function $e(e){var o,f,u,v,S,y,b,A;const{theme:a}=s.useContext(k),{mainBGColor:n,altTextColor:r}=M(a),d=i=>{const C=i.target.value;e.handleLanguageChange(C)},c=i=>{e.handleKeepLanguageChange(i.target.checked)};return t.jsxs(Pe,{style:{backgroundColor:n},children:[t.jsx(T,{color:r,children:((f=(o=e.pageTerms.texts.find(i=>i.variable=="Reading Language"))==null?void 0:o.text)==null?void 0:f[e.appLanguage])||"Reading Language"}),t.jsx(Q,{children:t.jsx(Re,{label:"",options:e.languages,value:e.keepLanguage?e.readingLanguage:e.appLanguage,textColor:r,backgroundColor:n,onChange:d})}),t.jsx(Q,{children:t.jsx(He,{label:((v=(u=e.pageTerms.texts.find(i=>i.variable=="Keep App"))==null?void 0:u.text)==null?void 0:v[e.appLanguage])||"Keep App in English",checked:e.keepLanguage,onChange:c})}),t.jsx(Be,{children:t.jsx(te,{label:((y=(S=e.pageTerms.texts.find(i=>i.variable=="Start"))==null?void 0:S.text)==null?void 0:y[e.appLanguage])||"Start",onClick:e.onStartClicked,size:"medium"})}),t.jsx(we,{children:t.jsx(Ie,{label:((A=(b=e.pageTerms.texts.find(i=>i.variable=="Save App"))==null?void 0:b.text)==null?void 0:A[e.appLanguage])||"Save this as an app",onClick:e.disableSaveApp?()=>{}:e.onSaveApp})})]})}class et{constructor(){Y(this,"getAllTerms",()=>new Promise((a,n)=>{const r=fe+"/translator/appTexts";Ne.get(r).then(d=>{a(d.data)}).catch(d=>{n(this.getErrorMessage(d))})}))}getErrorMessage(a){let n=a.message;return a.response&&a.response.data&&a.response.data.message&&(n=a.response.data.message),n}}const tt=new et,at=m(E)({position:"relative",paddingTop:"25px",width:"100%","& .MuiDialog-root .MuiDialog-container .MuiPaper-root .MuiTypography-root":{backgroundColor:"#FFF"},"& .MuiDialogActions-root .MuiButtonBase-root":{color:"red"},"& .MuiDialogActions-root .MuiButtonBase-root:active":{backgroundColor:"red"},"& .MuiDialog-root .MuiDialog-container .MuiPaper-root .MuiDialogActions-root .MuiButtonBase-root div:hover":{backgroundColor:"red"}}),nt=m(E)({display:"flex",flexDirection:"column",justifyContent:"center"}),ot=m(E)({display:"flex",alignItems:"center",margin:"auto"}),ee=m(E)(({isactive:e})=>({display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",padding:"8px 16px",boxSizing:"border-box",border:"1px solid gray",width:"120px",cursor:"pointer","& .MuiBox-root":{textDecoration:e==="true"?"underline":"none"}})),it=m(E)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",marginTop:"20px"}),st=m(E)({position:"absolute",right:"15px",top:"15px",cursor:"pointer"});function lt(e){const{theme:a}=s.useContext(k),{headerBGColor:n,logoTextColor:r}=M(a);return t.jsx(at,{children:t.jsxs(ve,{open:!0,onClose:e.onClose,"aria-labelledby":"title","aria-describedby":"description",fullWidth:!0,children:[t.jsx(st,{onClick:e.onClose,children:t.jsx(ae,{})}),t.jsx(ye,{id:"title",style:{backgroundColor:n,width:"100%"},children:t.jsx(T,{color:r,fontSize:20,children:e.title})}),t.jsx(Le,{style:{backgroundColor:n,paddingTop:"20px",width:"100%"},children:t.jsxs(nt,{children:[t.jsxs(ot,{children:[t.jsx(ee,{onClick:()=>e.onHandleTap("Android"),isactive:e.activeAndroid?"true":"false",children:t.jsx(T,{fontSize:16,children:"On Android"})}),t.jsx(ee,{onClick:()=>e.onHandleTap("iPhone"),isactive:e.activeAndroid?"false":"true",children:t.jsx(T,{fontSize:16,children:"On iPhone"})})]}),t.jsx(it,{children:e.content.tab==="Android"?t.jsx(t.Fragment,{children:e.content.descriptions.map((d,c)=>t.jsx(T,{defaultColor:"#FFF",fontSize:14,lineHeight:25,children:(c+1).toString()+" - "+d},c))}):t.jsx(t.Fragment,{children:e.content.descriptions.map((d,c)=>t.jsx(T,{defaultColor:"#FFF",fontSize:14,lineHeight:25,children:(c+1).toString()+" - "+d},c))})})]})}),t.jsx(We,{style:{backgroundColor:n,display:"flex",justifyContent:"center"},children:t.jsx(te,{onClick:e.onClose,label:"OK",style:{height:"40px"}})})]})})}function rt(e){const a=je(),n=Qe(),r=Ee(),[d,c]=s.useState(!1),[o,f]=s.useState(),[u,v]=s.useState({tab:"Android",descriptions:[]}),[S,y]=s.useState({tab:"iPhone",descriptions:[]}),[b,A]=s.useState(!1),[i,C]=s.useState(n==="android"),{readingLanguage:ne}=s.useContext(k);s.useEffect(()=>{tt.getAllTerms().then(l=>{var L,x;e.dispatch({type:p.SET_TERMS,payload:{terms:l}});const g=l.find(j=>j.pageTitle="Welcome Page");((L=g==null?void 0:g.isPublished)!=null&&L[ne]||(x=g==null?void 0:g.isPublished)!=null&&x.en)&&f(g)}).catch(l=>{J.custom(g=>t.jsx(Z,{text:l,visible:g.visible}))})},[]),s.useEffect(()=>{window.location.href.includes("holy")?c(!1):c(!0)},[]),s.useEffect(()=>{const l=e.terms.find(g=>g.pageTitle="Welcome Page");f(l)},[e.terms]),s.useEffect(()=>{$.getAllLanguages().then(l=>{const L=l.languages.map(x=>({value:x==="English"?"en":x==="Arabic"?"ar":x==="Tagalog"?"tlg":x,label:x}));e.dispatch({type:p.SET_LANGUAGES,payload:{languages:L}})}).catch(l=>{J.custom(g=>t.jsx(Z,{text:l,visible:g.visible}))})},[]),s.useEffect(()=>{var L,x,j,B,w,G,H,I,R,N,U,F,O,z,W,K,q,V;const l=[((j=(x=(L=o==null?void 0:o.texts)==null?void 0:L.find(h=>h.variable==="Tab Menu"))==null?void 0:x.text)==null?void 0:j[e.appLanguage])||"Tap the MENU in the top-right corner",((G=(w=(B=o==null?void 0:o.texts)==null?void 0:B.find(h=>h.variable==="Tab Add"))==null?void 0:w.text)==null?void 0:G[e.appLanguage])||"Tap ADD TO HOME SCREEN",((R=(I=(H=o==null?void 0:o.texts)==null?void 0:H.find(h=>h.variable==="Tab Done"))==null?void 0:I.text)==null?void 0:R[e.appLanguage])||"Tap ADD and you're done!"],g=[((F=(U=(N=o==null?void 0:o.texts)==null?void 0:N.find(h=>h.variable==="Tab Share"))==null?void 0:U.text)==null?void 0:F[e.appLanguage])||"At the bottom of your screen, tap SHARE",((W=(z=(O=o==null?void 0:o.texts)==null?void 0:O.find(h=>h.variable==="Tab Add"))==null?void 0:z.text)==null?void 0:W[e.appLanguage])||"Tap ADD TO HOME SCREEN",((V=(q=(K=o==null?void 0:o.texts)==null?void 0:K.find(h=>h.variable==="Tab Done"))==null?void 0:q.text)==null?void 0:V[e.appLanguage])||"Tap ADD and you're done!"];v({tab:"Android",descriptions:l}),y({tab:"iPhone",descriptions:g})},[o,e.appLanguage]);const oe=()=>{r("/login")},ie=()=>{e.dispatch({type:p.RESET_USER}),e.dispatch({type:p.RESET_BOOK}),e.dispatch({type:p.RESET_PAGE_STATUS}),$.logout()},se=()=>{r("/library")},le=l=>{e.keepLanguage?e.dispatch({type:p.SET_READING_LANGUAGE,payload:{language:l}}):(e.dispatch({type:p.SET_APP_LANGUAGE,payload:{language:l}}),e.dispatch({type:p.SET_READING_LANGUAGE,payload:{language:l}}))},re=l=>{e.dispatch({type:p.SET_APP_LANGUAGE,payload:{language:e.appLanguage}}),e.dispatch({type:p.SET_KEEP_EN_LANGUAGE,payload:{keepLanguage:l}})},ce=s.useCallback(()=>{A(!0)},[u,S]);s.useEffect(()=>{C(n==="android"||n==="Windows Phone")},[b,n]);const de=s.useCallback(l=>{C(l==="android")},[]);return t.jsxs(Je,{flexDirection:a?"column":"row",children:[t.jsx(Ze,{isLoggedIn:e.currentUser!=null,isHeaven:d,pageTerms:o||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},appLanguage:e.appLanguage,onLogin:e.currentUser?ie:oe,onSettings:()=>r("/settings")}),t.jsx($e,{pageTerms:o||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},appLanguage:e.appLanguage,readingLanguage:e.readingLanguage,keepLanguage:e.keepLanguage,languages:e.languages,disableSaveApp:n==="desktop",onStartClicked:se,handleLanguageChange:le,handleKeepLanguageChange:re,onSaveApp:ce}),b&&t.jsx(lt,{title:"App Guide",content:i?u:S,activeAndroid:i,onHandleTap:de,onClose:()=>A(!1)})]})}function ct(e){return{currentUser:e.user.currentUser,appLanguage:e.user.appLanguage,readingLanguage:e.user.readingLanguage,keepLanguage:e.user.keepEnLanguage,languages:e.user.languages,terms:e.terms.terms}}const Tt=Te(ct)(rt);export{Tt as default};
