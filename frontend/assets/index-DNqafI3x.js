var ge=Object.defineProperty;var ue=(e,a,n)=>a in e?ge(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;var Y=(e,a,n)=>ue(e,typeof a!="symbol"?a+"":a,n);import{b as s,c as xe,_ as k,j as t,X as he,a3 as X,au as fe}from"./index-DEG7EQ5W.js";import{a as pe,b as me,d as Ce,s as m,e as Se,f as be,r as Ae,B as E,S as _,g as M,D as ve,h as ye,i as Le,c as Te,u as Ee,j as p,V as J}from"./App-BtMyqkZY.js";import{u as je}from"./useOrientation-BnjYu8PP.js";import{B as De,S as _e,L as ke,T as Me,H as Pe,a as Q,b as Be,c as Ge}from"./styled-BKbne09S.js";import{I as D,T}from"./index-BaqGsCoo.js";import{H as we}from"./index-CmbfAeSR.js";import{C as He}from"./index-SGwUTSwO.js";import{B as te}from"./Button-DSHQXXgC.js";import{L as Re}from"./index-Bwv-N5yi.js";import{S as Ie}from"./index-CIsf8e8K.js";import{C as Z}from"./index-B4Ywa-qm.js";import{a as $}from"./auth.service-C5exErY4.js";import{a as Ne}from"./index-C88pvD_q.js";import"./index-DQz0oeh4.js";function Ue(e){return pe("MuiDialogActions",e)}me("MuiDialogActions",["root","spacing"]);const Fe=["className","disableSpacing"],Oe=e=>{const{classes:a,disableSpacing:n}=e;return be({root:["root",!n&&"spacing"]},Ue,a)},ze=m("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[a.root,!n.disableSpacing&&a.spacing]}})(({ownerState:e})=>k({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),We=s.forwardRef(function(a,n){const r=Ce({props:a,name:"MuiDialogActions"}),{className:d,disableSpacing:g=!1}=r,o=xe(r,Fe),f=k({},r,{disableSpacing:g}),u=Oe(f);return t.jsx(ze,k({className:Se(u.root,d),ownerState:f,ref:n},o))});var P={},Ke=he;Object.defineProperty(P,"__esModule",{value:!0});var ae=P.default=void 0,qe=Ke(Ae()),Ve=t;ae=P.default=(0,qe.default)((0,Ve.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const Ye=m(E)({display:"flex"}),Xe=m(Ye)({justifyContent:"center",alignItems:"center"}),Je=m(Xe)({width:"100dvw",height:"100dvh"}),Qe=()=>{const[e,a]=s.useState("Desktop");return s.useEffect(()=>{const n=navigator.userAgent||navigator.vendor||window.opera;window.innerWidth<=768?/android/i.test(n)?a("Android"):/iPad|iPhone|iPod/.test(n)&&!window.MSStream&&a("iPhone"):a("Desktop")},[]),e};function Ze(e){const{theme:a}=s.useContext(_),{headerBGColor:n,logoTextColor:r}=M(a),[d,g]=s.useState(""),[o,f]=s.useState("");return s.useEffect(()=>{var u,A,C,v,y,S;if(e.isHeaven){const i=(u=e.pageTerms)==null?void 0:u.texts.find(b=>b.variable=="Welcome Heavenly");g(((A=i==null?void 0:i.text)==null?void 0:A[e.appLanguage])||((C=i==null?void 0:i.text)==null?void 0:C.en)||"")}else{const i=(v=e.pageTerms)==null?void 0:v.texts.find(b=>b.variable=="Welcome");g(((y=i==null?void 0:i.text)==null?void 0:y[e.appLanguage])||((S=i==null?void 0:i.text)==null?void 0:S.en)||"")}},[e.isHeaven,e.pageTerms,e.appLanguage]),s.useEffect(()=>{const u=e.isHeaven?a==X.EASY_OCEAN?D.main_logo_heaven_easyocean:D.main_logo_heaven:a==X.EASY_OCEAN?D.main_logo_easyocean:D.main_logo;f(u)},[e.isHeaven,a]),t.jsxs(De,{style:{backgroundColor:n},children:[t.jsx(_e,{children:t.jsx(we,{isLogin:e.isLoggedIn,textColor:r,itemBgColor:n,terms:e.pageTerms,appLanguage:e.appLanguage,onLogin:e.onLogin,onSettings:e.onSettings})}),t.jsx(ke,{src:o}),t.jsx(Me,{children:t.jsx(T,{color:r,fontFamily:"Buenard",fontWeight:"700",textAlign:"center",fontSize:36,lineHeight:47,children:d})})]})}function $e(e){var o,f,u,A,C,v,y,S;const{theme:a}=s.useContext(_),{mainBGColor:n,altTextColor:r}=M(a),d=i=>{const b=i.target.value;e.handleLanguageChange(b)},g=i=>{e.handleKeepLanguageChange(i.target.checked)};return t.jsxs(Pe,{style:{backgroundColor:n},children:[t.jsx(T,{color:r,children:((f=(o=e.pageTerms.texts.find(i=>i.variable=="Reading Language"))==null?void 0:o.text)==null?void 0:f[e.appLanguage])||"Reading Language"}),t.jsx(Q,{children:t.jsx(Ie,{label:"",options:e.languages,value:e.keepLanguage?e.readingLanguage:e.appLanguage,textColor:r,backgroundColor:n,onChange:d})}),t.jsx(Q,{children:t.jsx(He,{label:((A=(u=e.pageTerms.texts.find(i=>i.variable=="Keep App"))==null?void 0:u.text)==null?void 0:A[e.appLanguage])||"Keep App in English",checked:e.keepLanguage,onChange:g})}),t.jsx(Be,{children:t.jsx(te,{label:((v=(C=e.pageTerms.texts.find(i=>i.variable=="Start"))==null?void 0:C.text)==null?void 0:v[e.appLanguage])||"Start",onClick:e.onStartClicked,size:"medium"})}),t.jsx(Ge,{children:t.jsx(Re,{label:((S=(y=e.pageTerms.texts.find(i=>i.variable=="Save App"))==null?void 0:y.text)==null?void 0:S[e.appLanguage])||"Save this as an app",onClick:e.onSaveApp})})]})}class et{constructor(){Y(this,"getAllTerms",()=>new Promise((a,n)=>{const r=fe+"/translator/appTexts";Ne.get(r).then(d=>{a(d.data)}).catch(d=>{n(this.getErrorMessage(d))})}))}getErrorMessage(a){let n=a.message;return a.response&&a.response.data&&a.response.data.message&&(n=a.response.data.message),n}}const tt=new et,at=m(E)({position:"relative",paddingTop:"25px",width:"100%","& .MuiDialog-root .MuiDialog-container .MuiPaper-root .MuiTypography-root":{backgroundColor:"#FFF"},"& .MuiDialogActions-root .MuiButtonBase-root":{color:"red"},"& .MuiDialogActions-root .MuiButtonBase-root:active":{backgroundColor:"red"},"& .MuiDialog-root .MuiDialog-container .MuiPaper-root .MuiDialogActions-root .MuiButtonBase-root div:hover":{backgroundColor:"red"}}),nt=m(E)({display:"flex",flexDirection:"column",justifyContent:"center"}),ot=m(E)({display:"flex",alignItems:"center",margin:"auto"}),ee=m(E)(({isactive:e})=>({display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",padding:"8px 16px",boxSizing:"border-box",border:"1px solid gray",width:"120px","& .MuiBox-root":{textDecoration:e==="true"?"underline":"none"}})),it=m(E)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",marginTop:"20px"}),st=m(E)({position:"absolute",right:"15px",top:"15px",cursor:"pointer"});function lt(e){const{theme:a}=s.useContext(_),{headerBGColor:n,logoTextColor:r}=M(a);return t.jsx(at,{children:t.jsxs(ve,{open:!0,onClose:e.onClose,"aria-labelledby":"title","aria-describedby":"description",fullWidth:!0,children:[t.jsx(st,{onClick:e.onClose,children:t.jsx(ae,{})}),t.jsx(ye,{id:"title",style:{backgroundColor:n,width:"100%"},children:t.jsx(T,{color:r,fontSize:20,children:e.title})}),t.jsx(Le,{style:{backgroundColor:n,paddingTop:"20px",width:"100%"},children:t.jsxs(nt,{children:[t.jsxs(ot,{children:[t.jsx(ee,{onClick:()=>e.onHandleTap("Android"),isactive:e.activeAndroid?"true":"false",children:t.jsx(T,{fontSize:16,children:"On Android"})}),t.jsx(ee,{onClick:()=>e.onHandleTap("iPhone"),isactive:e.activeAndroid?"false":"true",children:t.jsx(T,{fontSize:16,children:"On iPhone"})})]}),t.jsx(it,{children:e.content.tab==="Android"?t.jsx(t.Fragment,{children:e.content.descriptions.map((d,g)=>t.jsx(T,{defaultColor:"#FFF",fontSize:14,lineHeight:25,children:(g+1).toString()+" - "+d},g))}):t.jsx(t.Fragment,{children:e.content.descriptions.map((d,g)=>t.jsx(T,{defaultColor:"#FFF",fontSize:14,lineHeight:25,children:(g+1).toString()+" - "+d},g))})})]})}),t.jsx(We,{style:{backgroundColor:n,display:"flex",justifyContent:"center"},children:t.jsx(te,{onClick:e.onClose,label:"OK",style:{height:"40px"}})})]})})}function rt(e){const a=je(),n=Qe(),r=Ee(),[d,g]=s.useState(!1),[o,f]=s.useState(),[u,A]=s.useState({tab:"Android",descriptions:[]}),[C,v]=s.useState({tab:"iPhone",descriptions:[]}),[y,S]=s.useState(!1),[i,b]=s.useState(n==="Android"),{readingLanguage:ne}=s.useContext(_);s.useEffect(()=>{tt.getAllTerms().then(l=>{var L,x;e.dispatch({type:p.SET_TERMS,payload:{terms:l}});const c=l.find(j=>j.pageTitle="Welcome Page");((L=c==null?void 0:c.isPublished)!=null&&L[ne]||(x=c==null?void 0:c.isPublished)!=null&&x.en)&&f(c)}).catch(l=>{J.custom(c=>t.jsx(Z,{text:l,visible:c.visible}))})},[]),s.useEffect(()=>{window.location.href.includes("holy")?g(!1):g(!0)},[]),s.useEffect(()=>{const l=e.terms.find(c=>c.pageTitle="Welcome Page");f(l)},[e.terms]),s.useEffect(()=>{$.getAllLanguages().then(l=>{const L=l.languages.map(x=>({value:x==="English"?"en":x==="Arabic"?"ar":x==="Tagalog"?"tlg":x,label:x}));e.dispatch({type:p.SET_LANGUAGES,payload:{languages:L}})}).catch(l=>{J.custom(c=>t.jsx(Z,{text:l,visible:c.visible}))})},[]),s.useEffect(()=>{var L,x,j,B,G,w,H,R,I,N,U,F,O,z,W,K,q,V;const l=[((j=(x=(L=o==null?void 0:o.texts)==null?void 0:L.find(h=>h.variable==="Tab Menu"))==null?void 0:x.text)==null?void 0:j[e.appLanguage])||"Tap the MENU in the top-right corner",((w=(G=(B=o==null?void 0:o.texts)==null?void 0:B.find(h=>h.variable==="Tab Add"))==null?void 0:G.text)==null?void 0:w[e.appLanguage])||"Tap ADD TO HOME SCREEN",((I=(R=(H=o==null?void 0:o.texts)==null?void 0:H.find(h=>h.variable==="Tab Done"))==null?void 0:R.text)==null?void 0:I[e.appLanguage])||"Tap ADD and you're done!"],c=[((F=(U=(N=o==null?void 0:o.texts)==null?void 0:N.find(h=>h.variable==="Tab Share"))==null?void 0:U.text)==null?void 0:F[e.appLanguage])||"At the bottom of your screen, tap SHARE",((W=(z=(O=o==null?void 0:o.texts)==null?void 0:O.find(h=>h.variable==="Tab Add"))==null?void 0:z.text)==null?void 0:W[e.appLanguage])||"Tap ADD TO HOME SCREEN",((V=(q=(K=o==null?void 0:o.texts)==null?void 0:K.find(h=>h.variable==="Tab Done"))==null?void 0:q.text)==null?void 0:V[e.appLanguage])||"Tap ADD and you're done!"];A({tab:"Android",descriptions:l}),v({tab:"iPhone",descriptions:c})},[o,e.appLanguage]);const oe=()=>{r("/login")},ie=()=>{e.dispatch({type:p.RESET_USER}),e.dispatch({type:p.RESET_BOOK}),e.dispatch({type:p.RESET_PAGE_STATUS}),$.logout()},se=()=>{r("/library")},le=l=>{e.keepLanguage?e.dispatch({type:p.SET_READING_LANGUAGE,payload:{language:l}}):(e.dispatch({type:p.SET_APP_LANGUAGE,payload:{language:l}}),e.dispatch({type:p.SET_READING_LANGUAGE,payload:{language:l}}))},re=l=>{e.dispatch({type:p.SET_APP_LANGUAGE,payload:{language:e.appLanguage}}),e.dispatch({type:p.SET_KEEP_EN_LANGUAGE,payload:{keepLanguage:l}})},ce=s.useCallback(()=>{S(!0)},[u,C]),de=s.useCallback(l=>{b(l==="Android")},[u,C]);return t.jsxs(Je,{flexDirection:a?"column":"row",children:[t.jsx(Ze,{isLoggedIn:e.currentUser!=null,isHeaven:d,pageTerms:o||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},appLanguage:e.appLanguage,onLogin:e.currentUser?ie:oe,onSettings:()=>r("/settings")}),t.jsx($e,{pageTerms:o||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},appLanguage:e.appLanguage,readingLanguage:e.readingLanguage,keepLanguage:e.keepLanguage,languages:e.languages,onStartClicked:se,handleLanguageChange:le,handleKeepLanguageChange:re,onSaveApp:ce}),y&&t.jsx(lt,{title:"App Guide",content:i?u:C,activeAndroid:i,onHandleTap:de,onClose:()=>S(!1)})]})}function ct(e){return{currentUser:e.user.currentUser,appLanguage:e.user.appLanguage,readingLanguage:e.user.readingLanguage,keepLanguage:e.user.keepEnLanguage,languages:e.user.languages,terms:e.terms.terms}}const Tt=Te(ct)(rt);export{Tt as default};
