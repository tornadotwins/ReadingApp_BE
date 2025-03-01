var H=Object.defineProperty;var U=(e,t,s)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var A=(e,t,s)=>U(e,typeof t!="symbol"?t+"":t,s);import{b as l,j as n,a3 as p,au as N}from"./index-BtHY-KAx.js";import{S as T,g as b,a as P,b as I,s as y,B as R,c as F,u as M,d as u,k as _}from"./App-B1-GqC3j.js";import{u as w}from"./useOrientation-Dx3dMJnF.js";import{B as K,S as O,L as W,T as z,H as D,a as j,b as Y,c as q}from"./styled-8hwkjKYX.js";import{T as v,I as E}from"./index-v9R8iKio.js";import{H as J}from"./index-B0YVSwXd.js";import{B as Q}from"./Button-Cf_XL5Qr.js";import{L as V}from"./index-CtOH4idG.js";import{S as X}from"./index-5hMq5l20.js";import{C as k}from"./index-CAKU7G3L.js";import{a as B}from"./auth.service-CKsRNXFk.js";import{a as Z}from"./axios-upsvKRUO.js";import"./index-qjsY168c.js";function $({label:e,checked:t,onChange:s}){const{theme:c}=l.useContext(T),{altTextColor:g}=b(c);return n.jsx(P,{control:n.jsx(I,{checked:t,bordercolor:g,onChange:s}),label:n.jsx(v,{color:g,children:e}),style:{color:g},bordercolor:g})}const ee=y(R)({display:"flex"}),ae=y(ee)({justifyContent:"center",alignItems:"center"}),te=y(ae)({width:"100dvw",height:"100dvh"});function ne(e){const{theme:t,readingLanguage:s}=l.useContext(T),{headerBGColor:c,logoTextColor:g}=b(t),[L,m]=l.useState(""),[S,C]=l.useState("");return l.useEffect(()=>{var d,h,x,f,o,a;if(e.isHeaven){const i=(d=e.pageTerms)==null?void 0:d.texts.find(r=>r.variable=="Welcome Heavenly");m(((h=i==null?void 0:i.text)==null?void 0:h[s])||((x=i==null?void 0:i.text)==null?void 0:x.en)||"")}else{const i=(f=e.pageTerms)==null?void 0:f.texts.find(r=>r.variable=="Welcome");m(((o=i==null?void 0:i.text)==null?void 0:o[s])||((a=i==null?void 0:i.text)==null?void 0:a.en)||"")}},[e.isHeaven,e.pageTerms,s]),l.useEffect(()=>{const d=e.isHeaven?t==p.EASY_OCEAN?E.main_logo_heaven_easyocean:E.main_logo_heaven:t==p.EASY_OCEAN?E.main_logo_easyocean:E.main_logo;C(d)},[e.isHeaven,t]),n.jsxs(K,{style:{backgroundColor:c},children:[n.jsx(O,{children:n.jsx(J,{isLogin:e.isLoggedIn,textColor:g,itemBgColor:c,terms:e.pageTerms,onLogin:e.onLogin,onSettings:e.onSettings})}),n.jsx(W,{src:S}),n.jsx(z,{children:n.jsx(v,{color:g,fontFamily:"Buenard",fontWeight:"700",textAlign:"center",fontSize:36,lineHeight:47,children:L})})]})}function se(e){var m,S,C,d,h,x,f,o;const{theme:t}=l.useContext(T),{mainBGColor:s,altTextColor:c}=b(t),g=a=>{const i=a.target.value;e.handleLanguageChange(i)},L=a=>{e.handleKeepLanguageChange(a.target.checked)};return n.jsxs(D,{style:{backgroundColor:s},children:[n.jsx(v,{color:c,children:((S=(m=e.pageTerms.texts.find(a=>a.variable=="Reading Language"))==null?void 0:m.text)==null?void 0:S[e.appLanguage])||"Reading Language"}),n.jsx(j,{children:n.jsx(X,{label:"",options:e.languages,value:e.appLanguage,textColor:c,backgroundColor:s,onChange:g})}),n.jsx(j,{children:n.jsx($,{label:((d=(C=e.pageTerms.texts.find(a=>a.variable=="Keep App"))==null?void 0:C.text)==null?void 0:d[e.appLanguage])||"Keep App in English",checked:e.keepLanguage,onChange:L})}),n.jsx(Y,{children:n.jsx(Q,{label:((x=(h=e.pageTerms.texts.find(a=>a.variable=="Start"))==null?void 0:h.text)==null?void 0:x[e.appLanguage])||"Start",onClick:e.onStartClicked,size:"medium"})}),n.jsx(q,{children:n.jsx(V,{label:((o=(f=e.pageTerms.texts.find(a=>a.variable=="Save App"))==null?void 0:f.text)==null?void 0:o[e.appLanguage])||"Save this as an app"})})]})}class oe{constructor(){A(this,"getAllTerms",()=>new Promise((t,s)=>{const c=N+"/translator/appTexts";Z.get(c).then(g=>{t(g.data)}).catch(g=>{s(this.getErrorMessage(g))})}))}getErrorMessage(t){let s=t.message;return t.response&&t.response.data&&t.response.data.message&&(s=t.response.data.message),s}}const ie=new oe;function ge(e){const t=w(),s=M(),[c,g]=l.useState(!1),[L,m]=l.useState(),{readingLanguage:S}=l.useContext(T);l.useEffect(()=>{ie.getAllTerms().then(o=>{var i,r;e.dispatch({type:u.SET_TERMS,payload:{terms:o}});const a=o.find(G=>G.pageTitle="Welcome Page");((i=a==null?void 0:a.isPublished)!=null&&i[S]||(r=a==null?void 0:a.isPublished)!=null&&r.en)&&m(a)}).catch(o=>{_.custom(a=>n.jsx(k,{text:o,visible:a.visible}))})},[]),l.useEffect(()=>{window.location.href.includes("holy")?g(!1):g(!0)},[]),l.useEffect(()=>{const o=e.terms.find(a=>a.pageTitle="Welcome Page");m(o)},[e.terms]),l.useEffect(()=>{B.getAllLanguages().then(o=>{const i=o.languages.map(r=>({value:r==="English"?"en":r==="Arabic"?"ar":r==="Tagalog"?"tlg":r,label:r}));e.dispatch({type:u.SET_LANGUAGES,payload:{languages:i}})}).catch(o=>{_.custom(a=>n.jsx(k,{text:o,visible:a.visible}))})},[]);const C=()=>{s("/login")},d=()=>{e.dispatch({type:u.RESET_USER}),e.dispatch({type:u.RESET_BOOK}),e.dispatch({type:u.RESET_PAGE_STATUS}),B.logout()},h=()=>{s("/library")},x=o=>{e.dispatch({type:u.SET_APP_LANGUAGE,payload:{language:o}}),e.dispatch({type:u.SET_READING_LANGUAGE,payload:{language:o}})},f=o=>{e.dispatch({type:u.SET_APP_LANGUAGE,payload:{language:"en"}}),e.dispatch({type:u.SET_READING_LANGUAGE,payload:{language:"en"}}),e.dispatch({type:u.SET_KEEP_EN_LANGUAGE,payload:{keepLanguage:o}})};return n.jsxs(te,{flexDirection:t?"column":"row",children:[n.jsx(ne,{isLoggedIn:e.currentUser!=null,isHeaven:c,pageTerms:L||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},onLogin:e.currentUser?d:C,onSettings:()=>s("/settings")}),n.jsx(se,{pageTerms:L||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},appLanguage:e.appLanguage,readingLanguage:e.readingLanguage,keepLanguage:e.keepLanguage,languages:e.languages,onStartClicked:h,handleLanguageChange:x,handleKeepLanguageChange:f})]})}function le(e){return{currentUser:e.user.currentUser,appLanguage:e.user.appLanguage,readingLanguage:e.user.readingLanguage,keepLanguage:e.user.keepEnLanguage,languages:e.user.languages,terms:e.terms.terms}}const ye=F(le)(ge);export{ye as default};
