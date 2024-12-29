var w=Object.defineProperty;var N=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var H=(e,t,s)=>N(e,typeof t!="symbol"?t+"":t,s);import{b as o,j as a,Q as I,ac as R,ad as F}from"./index-H5ykdk14.js";import{S as b,g as E,a as G,b as O,s as j,B as W,c as z,u as K,d as S,_ as U}from"./App-DQQ9GWEY.js";import{u as Y}from"./useOrientation-DEmwzjcf.js";import{B as D,S as Q,L as q,T as J,H as V,a as P,b as X,c as Z}from"./styled-BQGu-4AG.js";import{T as L,I as T}from"./index-CSvUHeQw.js";import{H as $}from"./index-BvXprh9p.js";import{B as ee}from"./Button-BFnLfobN.js";import{L as te}from"./index-op1YVu-U.js";import{S as se}from"./index-BfPv_5L7.js";import{C as M}from"./index-BdtCGDBm.js";import{a as ae}from"./auth.service-DjQkdAge.js";import{a as ne}from"./axios-BimPEqV4.js";import"./index-D9NFiycN.js";function oe({label:e,checked:t,onChange:s}){const{theme:g}=o.useContext(b),{altTextColor:n}=E(g);return a.jsx(G,{control:a.jsx(O,{checked:t,bordercolor:n,onChange:s}),label:a.jsx(L,{color:n,children:e}),style:{color:n},bordercolor:n})}const re=j(W)({display:"flex"}),ie=j(re)({justifyContent:"center",alignItems:"center"}),le=j(ie)({width:"100dvw",height:"100dvh"});function ce(e){const{theme:t,readingLanguage:s}=o.useContext(b),{headerBGColor:g,logoTextColor:n}=E(t),[x,m]=o.useState(""),[C,h]=o.useState("");return o.useEffect(()=>{var d,f,c,i;if(e.isHeaven){const l=(d=e.pageTerms)==null?void 0:d.texts.find(u=>u.variable=="Welcome Heavenly");m(((f=l==null?void 0:l.text)==null?void 0:f[s])||"")}else{const l=(c=e.pageTerms)==null?void 0:c.texts.find(u=>u.variable=="Welcome");m(((i=l==null?void 0:l.text)==null?void 0:i[s])||"")}},[e.isHeaven,e.pageTerms,s]),o.useEffect(()=>{const d=e.isHeaven?t==I.EASY_OCEAN?T.main_logo_heaven_easyocean:T.main_logo_heaven:t==I.EASY_OCEAN?T.main_logo_easyocean:T.main_logo;h(d)},[e.isHeaven,t]),a.jsxs(D,{style:{backgroundColor:g},children:[a.jsx(Q,{children:a.jsx($,{isLogin:e.isLoggedIn,textColor:n,itemBgColor:g,terms:e.pageTerms,onLogin:e.onLogin,onSettings:e.onSettings})}),a.jsx(q,{src:C}),a.jsx(J,{children:a.jsx(L,{color:n,fontFamily:"Buenard",fontWeight:"700",textAlign:"center",fontSize:36,lineHeight:47,children:x})})]})}function ge(e){var l,u,y,p,_,B,k,A;const{theme:t,readingLanguage:s,setReadingLanguage:g}=o.useContext(b),{mainBGColor:n,altTextColor:x}=E(t),m=[{value:"en",label:"English"},{value:"ar",label:"Arabic"}],[C,h]=o.useState(m[0].value),[d,f]=o.useState(!1);o.useEffect(()=>{const r=localStorage.getItem(R);r&&r.length>0&&h(r)},[]);const c=r=>{const v=r.target.value;h(v),g(v),localStorage.setItem(R,v)},i=r=>{f(r.target.checked)};return a.jsxs(V,{style:{backgroundColor:n},children:[a.jsx(L,{color:x,children:(u=(l=e.pageTerms.texts.find(r=>r.variable=="Reading Language"))==null?void 0:l.text)==null?void 0:u[s]}),a.jsx(P,{children:a.jsx(se,{label:"",options:m,value:C,textColor:x,backgroundColor:n,onChange:c})}),a.jsx(P,{children:a.jsx(oe,{label:((p=(y=e.pageTerms.texts.find(r=>r.variable=="Keep App"))==null?void 0:y.text)==null?void 0:p[s])||"",checked:d,onChange:i})}),a.jsx(X,{children:a.jsx(ee,{label:((B=(_=e.pageTerms.texts.find(r=>r.variable=="Start"))==null?void 0:_.text)==null?void 0:B[s])||"",onClick:e.onStartClicked,size:"medium"})}),a.jsx(Z,{children:a.jsx(te,{label:((A=(k=e.pageTerms.texts.find(r=>r.variable=="Save App"))==null?void 0:k.text)==null?void 0:A[s])||""})})]})}class ue{constructor(){H(this,"getAllTerms",()=>new Promise((t,s)=>{const g=F+"/translator/appTexts";ne.get(g).then(n=>{t(n.data)}).catch(n=>{s(this.getErrorMessage(n))})}))}getErrorMessage(t){let s=t.message;return t.response&&t.response.data&&t.response.data.message&&(s=t.response.data.message),s}}const me=new ue;function de(e){const t=Y(),s=K(),[g,n]=o.useState(!1),[x,m]=o.useState(),{readingLanguage:C}=o.useContext(b);o.useEffect(()=>{me.getAllTerms().then(c=>{var l;e.dispatch({type:S.SET_TERMS,payload:{terms:c}});const i=c.find(u=>u.pageTitle="Welcome Page");(l=i==null?void 0:i.isPublished)!=null&&l[C]?m(i):U.custom(u=>a.jsx(M,{text:"The terminologies for this page is not published.",visible:u.visible}))}).catch(c=>{U.custom(i=>a.jsx(M,{text:c,visible:i.visible}))})},[]),o.useEffect(()=>{window.location.href.includes("holy")?n(!1):n(!0)},[]),o.useEffect(()=>{const c=e.terms.find(i=>i.pageTitle="Welcome Page");m(c)},[e.terms]);const h=()=>{s("/login")},d=()=>{e.dispatch({type:S.RESET_USER}),e.dispatch({type:S.RESET_BOOK}),e.dispatch({type:S.RESET_PAGE_STATUS}),ae.logout()},f=()=>{s("/library")};return a.jsxs(le,{flexDirection:t?"column":"row",children:[a.jsx(ce,{isLoggedIn:e.currentUser!=null,isHeaven:g,pageTerms:x||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},onLogin:e.currentUser?d:h,onSettings:()=>s("/settings")}),a.jsx(ge,{pageTerms:x||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},onStartClicked:f})]})}function xe(e){return{currentUser:e.user.currentUser,terms:e.terms.terms}}const ke=z(xe)(de);export{ke as default};
