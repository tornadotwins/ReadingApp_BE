import{b as i,j as a,ap as P,aA as k}from"./index-Clv2Y-Ws.js";import{s as y,B,c as C,S as _,u as L,k as d,d as c}from"./App-CDBbwMU4.js";import{L as U}from"./index-BLWqtpmw.js";import{C as p}from"./index-rBkjBpoI.js";import{F as I}from"./BookHeader-1_YPCs1w.js";import{a as R}from"./auth.service-CYQxV5o3.js";import"./index-JNcP9kBx.js";import"./index-te5N--mx.js";import"./index-CfPj1ezk.js";import"./axios-upsvKRUO.js";const A=y(B)({display:"flex",flexDirection:"column",margin:"auto",position:"relative",height:"100dvh"});function O(e){const[S,N]=i.useState(!1),[r,G]=i.useState(),[m,x]=i.useState(),[f,h]=i.useState(),{readingLanguage:g}=i.useContext(_),u=L();i.useEffect(()=>{var n,l;const o=e.terms.find(t=>t.pageTitle=="Index & Bookmark Page"),s=e.terms.find(t=>t.pageTitle=="Welcome Page");(n=o==null?void 0:o.isPublished)!=null&&n[g]?x(o):d.custom(t=>a.jsx(p,{text:"The terminologies for this page are not published.",visible:t.visible})),(l=s==null?void 0:s.isPublished)!=null&&l[g]?h(s):d.custom(t=>a.jsx(p,{text:"The terminologies for hamburgur menu are not published.",visible:t.visible}))},[e.terms]);const b=()=>{d.custom(o=>{var s,n,l;return a.jsx(p,{text:((l=(n=(s=m==null?void 0:m.texts)==null?void 0:s.find(t=>t.variable=="Not Built Yet"))==null?void 0:n.text)==null?void 0:l[g])||"",visible:o.visible})})},T=()=>{u("/library"),e.dispatch({type:c.SET_PREVIOUS_PAGE,payload:{prevPage:k.BOOKS}}),e.dispatch({type:c.SET_CURRENT_SUBBOOK,payload:{currentSubBook:""}})},E=()=>{e.dispatch({type:c.RESET_USER}),e.dispatch({type:c.RESET_BOOK}),e.dispatch({type:c.RESET_PAGE_STATUS}),R.logout()},v=()=>{u("/login")};return a.jsxs(A,{children:[a.jsx(I,{markImg:r&&P+r.bookImage,markTitle:r==null?void 0:r.bookTitle,isLogIn:!!e.currentUser,terms:m||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},welcomePageTerms:f||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},onLogoClick:()=>u("/"),onCloseClick:T,onLogin:e.currentUser?E:v,onSettings:()=>u("/settings"),onSearchClick:b}),S&&a.jsx(U,{})]})}function j(e){return{currentBook:e.pageStatus.currentBook,currentUser:e.user.currentUser,terms:e.terms.terms}}const q=C(j)(O);export{q as default};
