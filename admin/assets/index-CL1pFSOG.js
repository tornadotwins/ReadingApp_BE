import{B as _e,j as o,a as c}from"./createTheme-Dg4S1gn_.js";import{r as Ee,s as _,B as E,T as O,I as xe,t as At,O as Lt,K as It,u as vt,F as U,A as D,H,P as Pt,R as Ut,U as Dt,Q as Ht,E as Mt,V as $t,W as Vt,X as Wt,Y as Kt,w as zt,q as qt,Z as Gt}from"./App-XJzlcTuZ.js";import{u as se,w as Yt,P as Qt,r as Xt,T as Zt,U as Jt}from"./index-NbV3LLyF.js";import{j as ae,B as Se,h as Te,A as ea,i as ta,k as Be,n as ke}from"./index-kzdnaqyG.js";import{b as oe,d as aa}from"./book.services-DLAAY8mi.js";import{t as oa}from"./translator.services-DBpOgmXB.js";import{a as A,b as le}from"./images-C1uQcHTy.js";import{S as ye}from"./index-Kv2r-RDi.js";import{T as na,B as ra}from"./index-k9zCJT22.js";import{A as ia,S as ue}from"./index-DPFwu22M.js";import"./TableContainer-CEP2BteL.js";var Ve={exports:{}};(function(e,d){(function(I,W){W()})(ae,function(){function I(r,b){return typeof b>"u"?b={autoBom:!1}:typeof b!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\uFEFF",r],{type:r.type}):r}function W(r,b,p){var f=new XMLHttpRequest;f.open("GET",r),f.responseType="blob",f.onload=function(){K(f.response,b,p)},f.onerror=function(){console.error("could not download file")},f.send()}function T(r){var b=new XMLHttpRequest;b.open("HEAD",r,!1);try{b.send()}catch{}return 200<=b.status&&299>=b.status}function B(r){try{r.dispatchEvent(new MouseEvent("click"))}catch{var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(b)}}var w=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof ae=="object"&&ae.global===ae?ae:void 0,x=w.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),K=w.saveAs||(typeof window!="object"||window!==w?function(){}:"download"in HTMLAnchorElement.prototype&&!x?function(r,b,p){var f=w.URL||w.webkitURL,S=document.createElement("a");b=b||r.name||"download",S.download=b,S.rel="noopener",typeof r=="string"?(S.href=r,S.origin===location.origin?B(S):T(S.href)?W(r,b,p):B(S,S.target="_blank")):(S.href=f.createObjectURL(r),setTimeout(function(){f.revokeObjectURL(S.href)},4e4),setTimeout(function(){B(S)},0))}:"msSaveOrOpenBlob"in navigator?function(r,b,p){if(b=b||r.name||"download",typeof r!="string")navigator.msSaveOrOpenBlob(I(r,p),b);else if(T(r))W(r,b,p);else{var f=document.createElement("a");f.href=r,f.target="_blank",setTimeout(function(){B(f)})}}:function(r,b,p,f){if(f=f||open("","_blank"),f&&(f.document.title=f.document.body.innerText="downloading..."),typeof r=="string")return W(r,b,p);var S=r.type==="application/octet-stream",ce=/constructor/i.test(w.HTMLElement)||w.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||S&&ce||x)&&typeof FileReader<"u"){var z=new FileReader;z.onloadend=function(){var P=z.result;P=v?P:P.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=P:location=P,f=null},z.readAsDataURL(r)}else{var q=w.URL||w.webkitURL,$=q.createObjectURL(r);f?f.location=$:location.href=$,f=null,setTimeout(function(){q.revokeObjectURL($)},4e4)}});w.saveAs=K.saveAs=K,e.exports=K})})(Ve);var sa=Ve.exports,Oe={},la=_e;Object.defineProperty(Oe,"__esModule",{value:!0});var We=Oe.default=void 0,ua=la(Ee()),ca=o;We=Oe.default=(0,ua.default)((0,ca.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");var je={},da=_e;Object.defineProperty(je,"__esModule",{value:!0});var Ke=je.default=void 0,ha=da(Ee()),ga=o;Ke=je.default=(0,ha.default)((0,ga.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");var we={},ma=_e;Object.defineProperty(we,"__esModule",{value:!0});var ze=we.default=void 0,ba=ma(Ee()),fa=o;ze=we.default=(0,ba.default)((0,fa.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");const pa=_(E)({position:"relative",minHeight:"calc(100vh - 37px)",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),Ca=_(E)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),xa=_(E)({margin:"20px 40px"}),Sa=_(E)({backgroundColor:"#F0F5FB",margin:"20px 40px",padding:"20px",boxSiaing:"border-box"}),Ta=_(E)({margin:"20px 40px",display:"flex",justifyContent:"center",boxSizing:"border-box"}),Ba=_(E)({margin:"20px 40px",display:"flex",alignItems:"center","@media screen and (max-width: 800px)":{display:"block"}}),ka=_(E)({height:"40px",display:"flex",alignItems:"center",cursor:"pointer",marginRight:"250px",transitionDuration:".25s","&:hover":{transform:"scale(1.1)"},"& .MuiSvgIcon-root":{width:"16px",marginRight:"10px",fill:"#155D74"},"@media screen and (max-width: 1050px)":{marginRight:"100px"},"@media screen and (max-width: 900px)":{marginRight:"30px"}}),ya=_(E)({display:"flex",justifyContent:"space-between",alignItems:"center","& >.MuiBox-root":{minWidth:"100px",marginRight:"20px"},"& > .MuiFormControl-root":{marginRight:"20px"},"@media screen and (max-width: 900px)":{"& >.MuiBox-root":{minWidth:"50px",marginRight:"10px"}},"@media screen and (max-width: 650px)":{display:"block","& > .MuiFormControl-root":{alignItems:"start","& .MuiInputBase-root":{width:"100%"}}}});_(E)({border:"1px solid #1B7695",backgroundColor:"#F0F5FB",boxSizing:"border-box",padding:"20px",margin:"20px 40px"});_(E)({display:"flex",alignItems:"center",justifyContent:"space-between",width:"300px","& >.MuiBox-root>:nth-of-type(2)":{marginRight:"25px"}});const _a=_(E)({display:"flex",alignItems:"center",margin:"50px 40px 20px 40px"}),Me=_(E)(({active:e})=>({display:"flex",alignItems:"center",justifyContent:"center",width:"120px",padding:"5px",boxSizing:"border-box",border:"1px solid #474747",backgroundColor:e=="true"?"#1B7695":"#F0F5FB",color:e=="true"?"#FFF":"#474747",cursor:"pointer","& .MuiSvgIcon-root":{fill:e=="true"?"#FFF":"#474747",marginRight:"10px"}})),Ea=_(E)({display:"flex",justifyContent:"right",alignItems:"center",boxSizing:"border-box",margin:"20px 40px"}),Oa=_(E)({display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"25px",padding:"0px 10px",boxSizing:"border-box",backgroundColor:"#FFAA5D",cursor:"pointer","&:hover":{backgroundColor:"#EE994C"},"& .MuiBox-root":{color:"#474747 !important",textTransform:"none","&:hover":{backgroundColor:"#EE994C"}}}),ja=_(E)({width:"90%",height:"calc(100% - 73px)",margin:"auto",marginTop:"20px"}),$e=_(E)({border:"1px solid #1B7695",backgroundColor:"#F0F5FB",boxSizing:"border-box",padding:"20px",margin:"20px 40px","& .MuiAccordionDetails-root":{paddingLeft:"25px !important"},"& .MuiAccordionSummary-content > .MuiBox-root :nth-of-type(2)":{padding:"0px !important"}}),M=_(E)({height:"40px",display:"flex",alignItems:"center",width:"300px","& >.MuiBox-root:first-of-type":{minWidth:"150px",justifyContent:"left"},"& >.MuiBox-root > .MuiBox-root":{justifyContent:"left"},"& >.MuiBox-root >:first-of-type":{minWidth:"150px"},"& >.MuiBox-root >:nth-of-type(2)":{marginLeft:"10px"}});function wa(e){return e.isSpecialBook?o.jsx($e,{children:o.jsx(ia,{label:`Chapter name (${A(e.currentLanguage)}): `,summaryTitle:e.currentChapterTitle,onChange:d=>e.handleCurrentChapterTitleChange&&e.handleCurrentChapterTitleChange(d.target.value),onCurrentChapterTitleEnterPressed:()=>e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle),detail:o.jsxs(o.Fragment,{children:[o.jsxs(M,{children:[o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Arabic:"}),e.currentUser.isAdmin?o.jsx(xe,{value:e.arabicChapterTitle,onChange:d=>e.handleArabicChapterTitleChange&&e.handleArabicChapterTitleChange(d.target.value),onKeyDown:d=>{d.key=="Enter"&&e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle)}}):o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#969696",children:e.arabicChapterTitle})]}),o.jsxs(M,{children:[o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Transliteration:"}),e.currentUser.isAdmin?o.jsx(xe,{value:e.transliteration,onChange:d=>e.handleTransliterationChapterTitleChange&&e.handleTransliterationChapterTitleChange(d.target.value),onKeyDown:d=>{d.key=="Enter"&&e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle)}}):o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#969696",children:e.transliteration})]}),o.jsxs(M,{children:[o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"English:"}),e.currentUser.isAdmin?o.jsx(xe,{value:e.englishChapterTitle,onChange:d=>e.handleEnglishChapterTitleChange&&e.handleEnglishChapterTitleChange(d.target.value),onKeyDown:d=>{d.key=="Enter"&&e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle)}}):o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#969696",children:e.englishChapterTitle})]}),o.jsxs(M,{children:[o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Ayas filled:"}),o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#000",children:`${e.languageCountVerse} of ${e.totalCountVerse}`})]}),o.jsx(M,{children:o.jsx(ue,{label:"Complete: ",value:e.isComplete,disable:!(e.currentUser.isAdmin||e.currentUser.roles.some(d=>d.language==A(e.currentLanguage)&&(d.role.toLowerCase()=="translator".toLowerCase()||d.role.toLowerCase()=="publisher".toLowerCase()))),onChange:d=>e.translateComplete(d)})}),o.jsx(M,{children:o.jsx(ue,{label:"Publish: ",value:e.isComplete&&e.isPublish,disable:(e.currentUser.isAdmin||e.currentUser.roles.some(d=>d.language==A(e.currentLanguage)&&d.role.toLowerCase()=="publisher".toLowerCase()))&&!e.isComplete,onChange:d=>e.translatePublish(d)})})]})})}):o.jsxs($e,{children:[o.jsxs(M,{children:[o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Ayas filled:"}),o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#000",children:`${e.languageCountVerse} of ${e.totalCountVerse}`})]}),o.jsx(M,{children:o.jsx(ue,{label:"Complete: ",value:e.isComplete,disable:!(e.currentUser.isAdmin||e.currentUser.roles.some(d=>d.language==A(e.currentLanguage)&&(d.role.toLowerCase()=="translator".toLowerCase()||d.role.toLowerCase()=="publisher".toLowerCase()))),onChange:d=>e.translateComplete(d)})}),o.jsx(M,{children:o.jsx(ue,{label:"Publish: ",value:e.isComplete&&e.isPublish,disable:(e.currentUser.isAdmin||e.currentUser.roles.some(d=>d.language==A(e.currentLanguage)&&d.role.toLowerCase()=="publisher".toLowerCase()))&&!e.isComplete,onChange:d=>e.translatePublish(d)})})]})}const Na=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}];function Ra(e){const d=Lt(),I=d.state,[W,T]=c.useState(!1),[B,w]=c.useState(null),[x,K]=c.useState(null),[r,b]=c.useState(I.chapterInfo),[p,f]=c.useState([]),[S,ce]=c.useState(null),[v,z]=c.useState(),[q,$]=c.useState([]),[P,ne]=c.useState([]),[de,G]=c.useState([]),[N,Ne]=c.useState([]),[Re,Fe]=c.useState([]),[qe,he]=c.useState(""),[re,Ae]=c.useState([]),[Y,ge]=c.useState([]),[k,Ge]=c.useState(e.currentBook),[j,Q]=c.useState(I.subBookInfo.subBookId),[F,ie]=c.useState(I.chapterId),[g,Le]=c.useState(e.currentLanguage),[y,Ye]=c.useState(I.isImport),[Qe,Ie]=c.useState(!1),[Xe,me]=c.useState(!1),[Ze,Je]=c.useState(0),[et,ve]=c.useState(0),[tt,X]=c.useState(""),[at,be]=c.useState(""),[ot,Pe]=c.useState(""),[nt,fe]=c.useState(""),pe=c.useMemo(()=>d.state.languages,[e.currentUser]),rt=It(),Ce=vt(),it=c.useCallback(t=>{T(!0),oe.getBookInfoByTitle(t).then(a=>{var u,C,h;w(a),e.dispatch({type:U.ADD_BOOKINFO,payload:{bookInfo:a}});const n=Array.from(new Set(a.subBooks.map(s=>s.subBookId))).map(s=>a.subBooks.find(m=>m.subBookId===s)).map(s=>{var m;return{label:(m=s.subBookTitle)==null?void 0:m[g],value:s.subBookId}});Ae(n),Q(n.some(s=>s.value==j)?j:n.length?n[0].value:""),n.length>0&&!j&&Q(n[0].value);const l=(C=(u=a==null?void 0:a.subBooks[0])==null?void 0:u.chapterInfos)==null?void 0:C.map(s=>{var m;return{label:(m=s==null?void 0:s.chapterNumber)==null?void 0:m.toString(),value:s==null?void 0:s.chapterId}});ge(l),n.length>0&&!j&&Q(n[0].value),Y.length>0&&ie((h=a==null?void 0:a.subBooks[0])==null?void 0:h.chapterInfos[0].chapterId),T(!1)}).catch(()=>{D.error("Failed to fetch book",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),T(!1)})},[k]),Z=c.useCallback(()=>{var l,u,C;const t=(l=B==null?void 0:B.subBooks)==null?void 0:l.find(h=>h.subBookId==j);let a=[],i=[];const n=((u=B==null?void 0:B.bookTitle)==null?void 0:u.en)=="Qur'an"||((C=B==null?void 0:B.bookTitle)==null?void 0:C.en)=="Zabur";if(g=="en")n?(a=["SubBook_English","SubBook_Transliteration","Chapter_Number","Verse_Number","Verse_English"],i=p==null?void 0:p.map(h=>{var s,m,R,L,V;return{SubBook_English:((s=t==null?void 0:t.subBookTitle)==null?void 0:s.en)||"",SubBook_Transliteration:((m=t==null?void 0:t.subBookTitle)==null?void 0:m.transliteration)||"",Chapter_Number:((R=r==null?void 0:r.chapterNumber)==null?void 0:R.toString())||"1",Verse_Number:((L=h==null?void 0:h.verseNumber)==null?void 0:L.toString())||"1",Verse_English:((V=h==null?void 0:h.verseText)==null?void 0:V.en)||""}})):(a=["SubBook_English","Chapter_Number","Verse_Number","Verse_English"],i=p==null?void 0:p.map(h=>{var s,m,R,L;return{SubBook_English:((s=t==null?void 0:t.subBookTitle)==null?void 0:s.en)||"",Chapter_Number:((m=r==null?void 0:r.chapterNumber)==null?void 0:m.toString())||"1",Verse_Number:((R=h==null?void 0:h.verseNumber)==null?void 0:R.toString())||"1",Verse_English:((L=h==null?void 0:h.verseText)==null?void 0:L.en)||""}}));else{const h=A(g);n?(a=["SubBook_English",`SubBook_${h}`,"SubBook_Transliteration","Chapter_Number","Verse_Number",`Verse_${h}`],i=p==null?void 0:p.map(s=>{var m,R,L,V,J,ee,te,He;return{SubBook_English:((m=t==null?void 0:t.subBookTitle)==null?void 0:m.en)||"",[`SubBook_${h}`]:((R=t==null?void 0:t.subBookTitle)==null?void 0:R[g])||((L=t==null?void 0:t.subBookTitle)==null?void 0:L.en)||"",SubBook_Transliteration:n&&((V=t==null?void 0:t.subBookTitle)==null?void 0:V.transliteration)||"",Chapter_Number:((J=r==null?void 0:r.chapterNumber)==null?void 0:J.toString())||"1",Verse_Number:((ee=s==null?void 0:s.verseNumber)==null?void 0:ee.toString())||"1",[`Verse_${h}`]:((te=s==null?void 0:s.verseText)==null?void 0:te[g])||((He=s==null?void 0:s.verseText)==null?void 0:He.en)||""}})):(a=["SubBook_English",`SubBook_${h}`,"Chapter_Number","Verse_Number",`Verse_${h}`],i=p==null?void 0:p.map(s=>{var m,R,L,V,J,ee,te;return{SubBook_English:((m=t==null?void 0:t.subBookTitle)==null?void 0:m.en)||"",[`SubBook_${h}`]:((R=t==null?void 0:t.subBookTitle)==null?void 0:R[g])||((L=t==null?void 0:t.subBookTitle)==null?void 0:L.en)||"",Chapter_Number:((V=r==null?void 0:r.chapterNumber)==null?void 0:V.toString())||"1",Verse_Number:((J=s==null?void 0:s.verseNumber)==null?void 0:J.toString())||"1",[`Verse_${h}`]:((ee=s==null?void 0:s.verseText)==null?void 0:ee[g])||((te=s==null?void 0:s.verseText)==null?void 0:te.en)||""}}))}$(a||[]),ne(i||[])},[B,r,p,j,g,y]),st=c.useCallback(()=>{const t=`${k}-${le(j,re)}-${le(F,Y)}`,a=se.json_to_sheet(P),i=se.book_new();se.book_append_sheet(i,a,"Sheet1");const n=Yt(i,{bookType:"xlsx",type:"array"}),l=new Blob([n],{type:"application/octet-stream"});sa.saveAs(l,`${t}.xlsx`),D.success(Pt,{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})},[P,q]);c.useEffect(()=>{window.scrollTo({top:0})},[]),c.useEffect(()=>{(async()=>{var a;T(!0);try{const i=e.bookInfos.find(n=>n.bookTitle.en==k);if(i){w(i);const l=Array.from(new Set(i.subBooks.map(u=>u.subBookId))).map(u=>i.subBooks.find(C=>C.subBookId===u)).map(u=>{var C;return{label:(C=u.subBookTitle)==null?void 0:C[g],value:u.subBookId}});Ae(l),l.some(u=>u.value===j)||Q(((a=l[0])==null?void 0:a.value)||"")}else await it(k);if(F){const n=e.chapterInfos.find(l=>l.chapterId==F);n&&(b(n),f(n.verses))}Z()}catch{D.error("Failed to load book information",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})}finally{T(!1)}})()},[k]),c.useEffect(()=>{var n,l,u,C,h;const t=e.bookInfos.find(s=>s.subBooks.find(m=>m.subBookId==j)),a=t==null?void 0:t.subBooks.find(s=>s.subBookId==j);a&&K(a),X(((n=a==null?void 0:a.subBookTitle)==null?void 0:n[g])||""),be(((l=a==null?void 0:a.subBookTitle)==null?void 0:l.ar)||""),fe(((u=a==null?void 0:a.subBookTitle)==null?void 0:u.en)||""),Pe(((C=a==null?void 0:a.subBookTitle)==null?void 0:C.transliteration)||"");const i=(h=a==null?void 0:a.chapterInfos)==null?void 0:h.map(s=>({value:s.chapterId,label:s.chapterNumber.toString()}));i&&I.chapterId?(ge(i),ie(I.chapterId)):i&&(ge(i),ie(i[0].value)),Z()},[j]),c.useEffect(()=>{const t=async i=>{T(!0),oe.getChapterInfoByChapterId(i).then(n=>{b(n),f(n.verses),e.dispatch({type:U.ADD_CHAPTERINFO,payload:{chapterInfo:n}}),T(!1)}).catch(()=>{D.error("There is no verses in the chapter. You must import it first.",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),T(!1)})};$([]),ne([]);const a=e.chapterInfos.find(i=>i.chapterId==F);a?(b(a),f(a.verses)):t(F),I.chapterId="",Z()},[F]),c.useEffect(()=>{var i,n,l,u,C;Z(),ve(0);const t=((i=r==null?void 0:r.chapterIsCompleted)==null?void 0:i[g])||!1,a=((n=r==null?void 0:r.chapterIsPublished)==null?void 0:n[g])||!1;Je(((l=r==null?void 0:r.verses)==null?void 0:l.length)||0),(u=r.verses)==null||u.map(h=>ve(s=>{var m;return(m=h==null?void 0:h.verseText)!=null&&m[g]?s+1:s})),X(((C=x==null?void 0:x.subBookTitle)==null?void 0:C[g])||""),Ie(t),me(a)},[p,B,x,r,g]),c.useEffect(()=>{y||Z()},[y]),c.useEffect(()=>{const t=(v==null?void 0:v.target.files)&&(v==null?void 0:v.target.files[0]);t&&ce(t)},[v,y]),c.useEffect(()=>{var t;if(y){Fe([]);const a=N[0],i=(t=pe.find(n=>n.value==g))==null?void 0:t.label;i!="English"&&G(n=>[...n,"SubBook_English"]),a&&Object.keys(a).forEach(n=>{n=="SubBook_Transliteration"&&G(l=>[...l,n]),i&&n.includes(i)&&G(l=>[...l,n])}),G(n=>[...n,"Chapter_Number","Verse_Number"]),N.forEach(n=>{const l={};l.SubBook_English=n.SubBook_English,Object.keys(n).forEach(u=>{u.includes(i)&&(l[u]=n[u]),u=="SubBook_Transliteration"&&i=="English"&&(l[u]=n[u])}),l.Chapter_Number=n.Chapter_Number,l.Verse_Number=n.Verse_Number,Fe(u=>[...u,l])})}},[N,g,y]),c.useEffect(()=>{if(y){if(G([]),!S)return;const t=S.name,a=t.substr(t.lastIndexOf(".")+1).toLowerCase();a==="csv"?xt(S):["xlsx","xls"].includes(a)?St(S):console.error("Unsupported file format")}},[S,g,y]),c.useEffect(()=>{if(y){const t=["SubBook_English",`SubBook_${A(g)}`,"Chapter_Number","Verse_Number",`Verse_${A(g)}`].filter((i,n,l)=>i&&l.indexOf(i)===n);let a="";if(N.length>1){const i=Object.keys(N[0]),n=t.filter(m=>!i.includes(m));n.forEach(m=>a+=`${m}, `),a&&(a=`You missed the ${n.length>=2?"fields":"field"}: `+a);const l=N[0][`SubBook_${A(g)}`];N.find(m=>m[`SubBook_${A(g)}`]!=l)&&(a=$t);const C=N[0].SubBook_Transliteration;N.find(m=>m.SubBook_Transliteration!=C)&&(a=Vt);const s=de.includes("SubBook_Transliteration");e.currentBook==Se||e.currentBook==Te?(s||(a=Wt),N.some(R=>R.Chapter_Number!="1")&&(a=Kt),he(a)):(s&&(a=Ut),he(a))}N.length==0&&(a=Dt,he(a))}},[P,de,y,g,N,Re]);const lt=t=>{Ge(t),Ce("/admin/bookoverview"),e.dispatch({type:U.SET_BOOK,payload:{bookTitle:t}})},ut=t=>{const a=t.target.value;Q(a)},ct=t=>{const a=t.target.value;ie(a)},dt=t=>{const a=t.target.value;Le(a),$([]),ne([]),e.dispatch({type:U.SET_CURRENT_LANGUAGE,payload:{language:a}})},Ue=t=>{const a={chapterAudio:t.audio,chapterId:t._id,chapterNumber:t.chapterNumber,chapterTranslated:t.isTranslated,chapterIsCompleted:t.isCompleted,chapterIsPublished:t.isPublished,subBookId:t.subBook,verses:r.verses},i=e.bookInfos.map(n=>({...n,subBooks:n.subBooks.map(l=>({...l,chapterInfos:l.chapterInfos.map(u=>u.chapterId===F?{...u,...a}:u)}))}));e.dispatch({type:U.SET_BOOKINFOS,payload:{bookInfos:i}}),e.dispatch({type:U.UPDATE_CHAPTERINFOS,payload:{chapterInfo:a}})},ht=t=>{const a={chapterInfos:(x==null?void 0:x.chapterInfos)||[],subBookId:(x==null?void 0:x.subBookId)||"",subBookNumber:(x==null?void 0:x.subBookNumber)||1,subBookTitle:t.title,noChapter:!0},i=e.bookInfos.map(n=>({...n,subBooks:n.subBooks.map(l=>l.subBookId==j?{...l,...a}:l)}));e.dispatch({type:U.SET_BOOKINFOS,payload:{bookInfos:i}})},gt=async t=>{var i,n;Ie(t),me(t&&((i=r.chapterIsPublished)==null?void 0:i[g])),T(!0);const a={chapterNumber:r.chapterNumber||1,subBook:r.subBookId||"",audio:r.chapterAudio,isTranslated:r.chapterTranslated,isCompleted:{...r.chapterIsCompleted,[g]:t},isPublished:{...r.chapterIsPublished,[g]:t&&((n=r.chapterIsPublished)==null?void 0:n[g])}};oe.updateChapterInfo({chapterId:F,newChapterInfo:a}).then(l=>{Ue(l),T(!1)}).catch(()=>{D.error("Failed to complete the chapter",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),T(!1)})},mt=async t=>{me(t);const a={chapterNumber:r.chapterNumber||1,subBook:r.subBookId||"",audio:r.chapterAudio,isTranslated:r.chapterTranslated,isCompleted:r.chapterIsCompleted,isPublished:{...r.chapterIsPublished,[g]:t}};oe.updateChapterInfo({chapterId:F,newChapterInfo:a}).then(i=>{Ue(i),T(!1)}).catch(()=>{D.error("Failed to publish the chapter",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),T(!1)})},bt=t=>{g=="en"?fe(t):g=="ar"&&be(t),X(t)},ft=t=>{g=="ar"&&X(t),be(t)},pt=t=>{g=="en"&&X(t),fe(t)},Ct=(t,a,i,n)=>{const l={[`${g}`]:t,ar:a,transliteration:i,en:n},u={...x,subBookTitle:l},C={title:u.subBookTitle,number:u.subBookNumber||1,book:(B==null?void 0:B.bookId)||"",noChapter:!0};x!=null&&x.subBookId?(T(!0),oe.updateSubBookInfo({subBookId:x==null?void 0:x.subBookId,newSubBookInfo:C}).then(h=>{ht(h),T(!1)}).catch(()=>{D.error("Failed to update the summary of chapter",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),T(!1)})):D.error(Gt,{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})},De=t=>{Ye(t),$([]),ne([])},xt=t=>{try{const a=new FileReader;a.onload=i=>{var l;const n=(l=i.target)==null?void 0:l.result;if(!n){console.error("Failed to read file");return}Qt.parse(n,{complete:u=>{if(u.errors.length>0){console.error("CSV parsing errors:",u.errors);return}const C=u.data;Ne(C)},header:!0,skipEmptyLines:!0,transformHeader:u=>u.trim(),transform:u=>u.trim()})},a.onerror=i=>{console.error("Error reading file:",i)},a.readAsText(t)}catch(a){console.error("Error parsing CSV file:",a)}},St=c.useCallback(async t=>{try{const a=new FileReader;a.onload=i=>{var s;const n=(s=i.target)==null?void 0:s.result;if(!n){console.error("Failed to read file");return}const l=Xt(n,{type:"array"}),u=l.SheetNames[0],C=l.Sheets[u],h=se.sheet_to_json(C);Ne(h)},a.onerror=i=>{console.error("Error reading file:",i)},a.readAsArrayBuffer(t)}catch(a){console.error("Error parsing Excel file:",a)}},[S]),Tt=()=>{oa.saveBook({bookInfos:Re,bookTitle:e.currentBook,language:A(g)}).then(()=>{D.success("Saved successfully!",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})}).catch(()=>{D.success("Failed to save book",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})})},Bt=()=>{localStorage.removeItem(ea),e.dispatch({type:U.RESET_USER}),e.dispatch({type:U.RESET_BOOK}),e.dispatch({type:U.RESET_APP_TEXT_PAGES}),Ce("/admin")},kt=()=>o.jsx(zt,{isLoggedIn:!0,username:e.currentUser.username,isAdmin:e.currentUser.isAdmin,onLogOut:Bt}),yt=()=>o.jsx(xa,{children:o.jsx(ra,{books:ta.map(t=>({bookTitle:t.bookTitle,onClick:()=>{lt(t.value)}})),selectedBook:k})}),_t=()=>y&&o.jsx(Sa,{children:o.jsx(O,{color:"red",fontFamily:"'Baloo Da 2'",fontWeight:"bold",children:k==Se||k==Te?`For ${k} you can upload only one chapter at once`:`For ${k} you can upload multiple chapters of the same sub-book at once`})}),Et=()=>o.jsxs(Ba,{children:[o.jsxs(ka,{onClick:()=>Ce("/admin/bookoverview"),children:[o.jsx(We,{}),o.jsx(O,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:"overview"})]}),!y&&o.jsxs(ya,{children:[o.jsx(O,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:k==Be||k==ke?"Go to: ":"Go to Surah: "}),o.jsx(ye,{label:"",options:re,value:re.find(t=>t.value===j)?j:"",backgroundColor:"#fff",textColor:"#155D74",onChange:ut}),(k==Be||k==ke)&&o.jsx(ye,{label:"",options:Y,value:Y.find(t=>t.value===F)?F:"",backgroundColor:"#fff",textColor:"#155D74",onChange:ct}),o.jsx(ye,{label:"",options:pe,value:g,backgroundColor:"#fff",textColor:"#155D74",onChange:dt})]})]}),Ot=()=>!y&&o.jsx(wa,{currentUser:e.currentUser,currentBook:e.currentBook,totalCountVerse:Ze,languageCountVerse:et,isComplete:Qe,isPublish:Xe,isSpecialBook:k==Se||k==Te,currentLanguage:g,arabicChapterTitle:at,englishChapterTitle:nt,transliteration:ot,currentChapterTitle:tt,translateComplete:t=>gt(t),translatePublish:t=>mt(t),handleCurrentChapterTitleChange:t=>bt(t),handleArabicChapterTitleChange:t=>ft(t),handleTransliterationChapterTitleChange:t=>Pe(t),handleEnglishChapterTitleChange:t=>pt(t),handleUpdateChapterSummary:Ct}),jt=()=>o.jsxs(_a,{children:[o.jsxs(Me,{active:y?"false":"true",onClick:()=>De(!1),children:[o.jsx(ze,{}),o.jsx(O,{fontFamily:"'Baloo Da 2'",children:"Database"})]}),o.jsxs(Me,{active:y?"true":"false",onClick:()=>De(!0),children:[o.jsx(aa,{}),o.jsx(O,{fontFamily:"'Baloo Da 2'",children:"Import"})]})]}),wt=()=>!y&&o.jsxs(Ea,{children:[o.jsx(O,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:`${k} - 
            ${le(j,re)} 
            ${k==Be||k==ke?le(F,Y):""}`}),o.jsx(Oa,{children:o.jsx(qt,{label:"Export to Excel",icon:o.jsx(Ke,{}),onClick:st})})]}),Nt=()=>!y&&o.jsx(Ta,{children:o.jsx(Zt,{headers:q,rows:P})}),Rt=()=>y&&o.jsx(ja,{children:o.jsx(Jt,{language:g,languageLabel:A(g),languages:pe,file:S,parsedData:N,headers:de,error:qe,onChangeLanguage:t=>Le(t.target.value),onChangeFile:t=>z(t),onUpload:Tt})}),Ft=()=>o.jsxs(Ca,{children:[o.jsx(na,{tools:Na}),yt(),jt(),Et(),_t(),Ot(),wt(),Nt(),Rt()]});return o.jsxs(o.Fragment,{children:[o.jsxs(pa,{flexDirection:rt?"column":"row",children:[kt(),Ft()]}),o.jsx(Ht,{}),W&&o.jsx(Mt,{})]})}function Fa(e){return{dispatch:e}}function Aa(e){return{currentUser:e.user.currentUser,bookInfos:e.book.bookInfos,chapterInfos:e.book.chapterInfos,currentBook:e.book.book,currentLanguage:e.book.language}}const Ka=At(Aa,Fa)(Ra);export{Ka as default};