import{B as _e,j as o,a as c}from"./createTheme-Gc-mA0LN.js";import{r as Ee,s as _,B as E,T as O,I as xe,t as Ft,O as It,K as vt,u as Pt,F as U,A as D,H,P as Ut,R as Dt,U as Ht,Q as Mt,E as $t,V as Vt,W as Wt,X as Kt,Y as zt,w as qt,q as Gt,Z as Qt}from"./App-BEBoIvYs.js";import{u as se,w as Yt,P as Xt,r as Zt,T as Jt,U as ea}from"./index-C_XSbJ9J.js";import{j as ae,B as Se,h as Te,A as ta,i as aa,k as Be,n as ke}from"./index-nWCbLmQJ.js";import{b as oe,d as oa}from"./book.services-BkN6n44g.js";import{t as na}from"./translator.services-Dwdiy-03.js";import{a as L,b as le}from"./images-BpPlnN2P.js";import{S as ye}from"./index-Drk7awIV.js";import{T as ra,B as ia}from"./index-DXVf12QB.js";import{A as sa,S as ue}from"./index-Dr1M2EFr.js";import"./TableContainer-BdxWNe3i.js";var We={exports:{}};(function(e,h){(function(I,W){W()})(ae,function(){function I(n,b){return typeof b>"u"?b={autoBom:!1}:typeof b!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\uFEFF",n],{type:n.type}):n}function W(n,b,C){var f=new XMLHttpRequest;f.open("GET",n),f.responseType="blob",f.onload=function(){K(f.response,b,C)},f.onerror=function(){console.error("could not download file")},f.send()}function T(n){var b=new XMLHttpRequest;b.open("HEAD",n,!1);try{b.send()}catch{}return 200<=b.status&&299>=b.status}function B(n){try{n.dispatchEvent(new MouseEvent("click"))}catch{var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(b)}}var N=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof ae=="object"&&ae.global===ae?ae:void 0,x=N.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),K=N.saveAs||(typeof window!="object"||window!==N?function(){}:"download"in HTMLAnchorElement.prototype&&!x?function(n,b,C){var f=N.URL||N.webkitURL,S=document.createElement("a");b=b||n.name||"download",S.download=b,S.rel="noopener",typeof n=="string"?(S.href=n,S.origin===location.origin?B(S):T(S.href)?W(n,b,C):B(S,S.target="_blank")):(S.href=f.createObjectURL(n),setTimeout(function(){f.revokeObjectURL(S.href)},4e4),setTimeout(function(){B(S)},0))}:"msSaveOrOpenBlob"in navigator?function(n,b,C){if(b=b||n.name||"download",typeof n!="string")navigator.msSaveOrOpenBlob(I(n,C),b);else if(T(n))W(n,b,C);else{var f=document.createElement("a");f.href=n,f.target="_blank",setTimeout(function(){B(f)})}}:function(n,b,C,f){if(f=f||open("","_blank"),f&&(f.document.title=f.document.body.innerText="downloading..."),typeof n=="string")return W(n,b,C);var S=n.type==="application/octet-stream",ce=/constructor/i.test(N.HTMLElement)||N.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||S&&ce||x)&&typeof FileReader<"u"){var z=new FileReader;z.onloadend=function(){var P=z.result;P=v?P:P.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=P:location=P,f=null},z.readAsDataURL(n)}else{var q=N.URL||N.webkitURL,$=q.createObjectURL(n);f?f.location=$:location.href=$,f=null,setTimeout(function(){q.revokeObjectURL($)},4e4)}});N.saveAs=K.saveAs=K,e.exports=K})})(We);var la=We.exports,Oe={},ua=_e;Object.defineProperty(Oe,"__esModule",{value:!0});var Ke=Oe.default=void 0,ca=ua(Ee()),da=o;Ke=Oe.default=(0,ca.default)((0,da.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");var je={},ha=_e;Object.defineProperty(je,"__esModule",{value:!0});var ze=je.default=void 0,ga=ha(Ee()),ma=o;ze=je.default=(0,ga.default)((0,ma.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");var we={},ba=_e;Object.defineProperty(we,"__esModule",{value:!0});var qe=we.default=void 0,fa=ba(Ee()),Ca=o;qe=we.default=(0,fa.default)((0,Ca.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");const pa=_(E)({position:"relative",minHeight:"calc(100vh - 37px)",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),xa=_(E)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),Sa=_(E)({margin:"20px 40px"}),Ta=_(E)({backgroundColor:"#F0F5FB",margin:"20px 40px",padding:"20px",boxSiaing:"border-box"}),Ba=_(E)({margin:"20px 40px",display:"flex",justifyContent:"center",boxSizing:"border-box"}),ka=_(E)({margin:"20px 40px",display:"flex",alignItems:"center","@media screen and (max-width: 800px)":{display:"block"}}),ya=_(E)({height:"40px",display:"flex",alignItems:"center",cursor:"pointer",marginRight:"250px",transitionDuration:".25s","&:hover":{transform:"scale(1.1)"},"& .MuiSvgIcon-root":{width:"16px",marginRight:"10px",fill:"#155D74"},"@media screen and (max-width: 1050px)":{marginRight:"100px"},"@media screen and (max-width: 900px)":{marginRight:"30px"}}),_a=_(E)({display:"flex",justifyContent:"space-between",alignItems:"center","& >.MuiBox-root":{minWidth:"100px",marginRight:"20px"},"& > .MuiFormControl-root":{marginRight:"20px"},"@media screen and (max-width: 900px)":{"& >.MuiBox-root":{minWidth:"50px",marginRight:"10px"}},"@media screen and (max-width: 650px)":{display:"block","& > .MuiFormControl-root":{alignItems:"start","& .MuiInputBase-root":{width:"100%"}}}});_(E)({border:"1px solid #1B7695",backgroundColor:"#F0F5FB",boxSizing:"border-box",padding:"20px",margin:"20px 40px"});_(E)({display:"flex",alignItems:"center",justifyContent:"space-between",width:"300px","& >.MuiBox-root>:nth-of-type(2)":{marginRight:"25px"}});const Ea=_(E)({display:"flex",alignItems:"center",margin:"50px 40px 20px 40px"}),$e=_(E)(({active:e})=>({display:"flex",alignItems:"center",justifyContent:"center",width:"120px",padding:"5px",boxSizing:"border-box",border:"1px solid #474747",backgroundColor:e=="true"?"#1B7695":"#F0F5FB",color:e=="true"?"#FFF":"#474747",cursor:"pointer","& .MuiSvgIcon-root":{fill:e=="true"?"#FFF":"#474747",marginRight:"10px"}})),Oa=_(E)({display:"flex",justifyContent:"right",alignItems:"center",boxSizing:"border-box",margin:"20px 40px"}),ja=_(E)({display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"25px",padding:"0px 10px",boxSizing:"border-box",backgroundColor:"#FFAA5D",cursor:"pointer","&:hover":{backgroundColor:"#EE994C"},"& .MuiBox-root":{color:"#474747 !important",textTransform:"none","&:hover":{backgroundColor:"#EE994C"}}}),wa=_(E)({width:"90%",height:"calc(100% - 73px)",margin:"auto",marginTop:"20px"}),Ve=_(E)({border:"1px solid #1B7695",backgroundColor:"#F0F5FB",boxSizing:"border-box",padding:"20px",margin:"20px 40px","& .MuiAccordionDetails-root":{paddingLeft:"25px !important"},"& .MuiAccordionSummary-content > .MuiBox-root :nth-of-type(2)":{padding:"0px !important"}}),M=_(E)({height:"40px",display:"flex",alignItems:"center",width:"300px","& >.MuiBox-root:first-of-type":{minWidth:"150px",justifyContent:"left"},"& >.MuiBox-root > .MuiBox-root":{justifyContent:"left"},"& >.MuiBox-root >:first-of-type":{minWidth:"150px"},"& >.MuiBox-root >:nth-of-type(2)":{marginLeft:"10px"}});function Na(e){return e.isSpecialBook?o.jsx(Ve,{children:o.jsx(sa,{label:`Chapter name (${L(e.currentLanguage)}): `,summaryTitle:e.currentChapterTitle,onChange:h=>e.handleCurrentChapterTitleChange&&e.handleCurrentChapterTitleChange(h.target.value),onCurrentChapterTitleEnterPressed:()=>e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle),detail:o.jsxs(o.Fragment,{children:[o.jsxs(M,{children:[o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Arabic:"}),e.currentUser.isAdmin?o.jsx(xe,{value:e.arabicChapterTitle,onChange:h=>e.handleArabicChapterTitleChange&&e.handleArabicChapterTitleChange(h.target.value),onKeyDown:h=>{h.key=="Enter"&&e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle)}}):o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#969696",children:e.arabicChapterTitle})]}),o.jsxs(M,{children:[o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Transliteration:"}),e.currentUser.isAdmin?o.jsx(xe,{value:e.transliteration,onChange:h=>e.handleTransliterationChapterTitleChange&&e.handleTransliterationChapterTitleChange(h.target.value),onKeyDown:h=>{h.key=="Enter"&&e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle)}}):o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#969696",children:e.transliteration})]}),o.jsxs(M,{children:[o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"English:"}),e.currentUser.isAdmin?o.jsx(xe,{value:e.englishChapterTitle,onChange:h=>e.handleEnglishChapterTitleChange&&e.handleEnglishChapterTitleChange(h.target.value),onKeyDown:h=>{h.key=="Enter"&&e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle)}}):o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#969696",children:e.englishChapterTitle})]}),o.jsxs(M,{children:[o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Ayas filled:"}),o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#000",children:`${e.languageCountVerse} of ${e.totalCountVerse}`})]}),o.jsx(M,{children:o.jsx(ue,{label:"Complete: ",value:e.isComplete,disable:!(e.currentUser.isAdmin||e.currentUser.roles.some(h=>h.language==L(e.currentLanguage)&&(h.role.toLowerCase()=="translator".toLowerCase()||h.role.toLowerCase()=="publisher".toLowerCase()))),onChange:h=>e.translateComplete(h)})}),o.jsx(M,{children:o.jsx(ue,{label:"Publish: ",value:e.isComplete&&e.isPublish,disable:(e.currentUser.isAdmin||e.currentUser.roles.some(h=>h.language==L(e.currentLanguage)&&h.role.toLowerCase()=="publisher".toLowerCase()))&&!e.isComplete,onChange:h=>e.translatePublish(h)})})]})})}):o.jsxs(Ve,{children:[o.jsxs(M,{children:[o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Ayas filled:"}),o.jsx(O,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#000",children:`${e.languageCountVerse} of ${e.totalCountVerse}`})]}),o.jsx(M,{children:o.jsx(ue,{label:"Complete: ",value:e.isComplete,disable:!(e.currentUser.isAdmin||e.currentUser.roles.some(h=>h.language==L(e.currentLanguage)&&(h.role.toLowerCase()=="translator".toLowerCase()||h.role.toLowerCase()=="publisher".toLowerCase()))),onChange:h=>e.translateComplete(h)})}),o.jsx(M,{children:o.jsx(ue,{label:"Publish: ",value:e.isComplete&&e.isPublish,disable:(e.currentUser.isAdmin||e.currentUser.roles.some(h=>h.language==L(e.currentLanguage)&&h.role.toLowerCase()=="publisher".toLowerCase()))&&!e.isComplete,onChange:h=>e.translatePublish(h)})})]})}const Ra=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}];function Aa(e){const h=It(),I=h.state,[W,T]=c.useState(!1),[B,N]=c.useState(null),[x,K]=c.useState(null),[n,b]=c.useState(I.chapterInfo),[C,f]=c.useState([]),[S,ce]=c.useState(null),[v,z]=c.useState(),[q,$]=c.useState([]),[P,ne]=c.useState([]),[de,G]=c.useState([]),[R,Ne]=c.useState([]),[Re,Ae]=c.useState([]),[Ge,he]=c.useState(""),[re,Le]=c.useState([]),[Q,ge]=c.useState([]),[k,Qe]=c.useState(e.currentBook),[j,Y]=c.useState(I.subBookInfo.subBookId),[w,ie]=c.useState(I.chapterId),[g,Fe]=c.useState(e.currentLanguage),[y,Ye]=c.useState(I.isImport),[Xe,Ie]=c.useState(!1),[Ze,me]=c.useState(!1),[Je,et]=c.useState(0),[tt,ve]=c.useState(0),[at,X]=c.useState(""),[ot,be]=c.useState(""),[nt,Pe]=c.useState(""),[rt,fe]=c.useState(""),Ce=c.useMemo(()=>h.state.languages,[e.currentUser]),it=vt(),pe=Pt(),st=c.useCallback(t=>{T(!0),oe.getBookInfoByTitle(t).then(a=>{var u,p,d;N(a),e.dispatch({type:U.ADD_BOOKINFO,payload:{bookInfo:a}});const r=Array.from(new Set(a.subBooks.map(s=>s.subBookId))).map(s=>a.subBooks.find(m=>m.subBookId===s)).map(s=>{var m;return{label:(m=s.subBookTitle)==null?void 0:m[g],value:s.subBookId}});Le(r),Y(r.some(s=>s.value==j)?j:r.length?r[0].value:""),r.length>0&&!j&&Y(r[0].value);const l=(p=(u=a==null?void 0:a.subBooks[0])==null?void 0:u.chapterInfos)==null?void 0:p.map(s=>{var m;return{label:(m=s==null?void 0:s.chapterNumber)==null?void 0:m.toString(),value:s==null?void 0:s.chapterId}});ge(l),r.length>0&&!j&&Y(r[0].value),Q.length>0&&ie((d=a==null?void 0:a.subBooks[0])==null?void 0:d.chapterInfos[0].chapterId),T(!1)}).catch(a=>{D.error(a instanceof Error?a.message:String(a),{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),T(!1)})},[k]),Ue=c.useCallback(t=>{T(!0),oe.getChapterInfoByChapterId(t).then(a=>{b(a),f(a.verses),e.dispatch({type:U.ADD_CHAPTERINFO,payload:{chapterInfo:a}}),T(!1)}).catch(a=>{D.error(a instanceof Error?a.message:String(a),{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),T(!1)})},[w]),Z=c.useCallback(()=>{var l,u,p;const t=(l=B==null?void 0:B.subBooks)==null?void 0:l.find(d=>d.subBookId==j);let a=[],i=[];const r=((u=B==null?void 0:B.bookTitle)==null?void 0:u.en)=="Qur'an"||((p=B==null?void 0:B.bookTitle)==null?void 0:p.en)=="Zabur";if(g=="en")r?(a=["SubBook_English","SubBook_Transliteration","Chapter_Number","Verse_Number","Verse_English"],i=C==null?void 0:C.map(d=>{var s,m,A,F,V;return{SubBook_English:((s=t==null?void 0:t.subBookTitle)==null?void 0:s.en)||"",SubBook_Transliteration:((m=t==null?void 0:t.subBookTitle)==null?void 0:m.transliteration)||"",Chapter_Number:((A=n==null?void 0:n.chapterNumber)==null?void 0:A.toString())||"1",Verse_Number:((F=d==null?void 0:d.verseNumber)==null?void 0:F.toString())||"1",Verse_English:((V=d==null?void 0:d.verseText)==null?void 0:V.en)||""}})):(a=["SubBook_English","Chapter_Number","Verse_Number","Verse_English"],i=C==null?void 0:C.map(d=>{var s,m,A,F;return{SubBook_English:((s=t==null?void 0:t.subBookTitle)==null?void 0:s.en)||"",Chapter_Number:((m=n==null?void 0:n.chapterNumber)==null?void 0:m.toString())||"1",Verse_Number:((A=d==null?void 0:d.verseNumber)==null?void 0:A.toString())||"1",Verse_English:((F=d==null?void 0:d.verseText)==null?void 0:F.en)||""}}));else{const d=L(g);r?(a=["SubBook_English",`SubBook_${d}`,"SubBook_Transliteration","Chapter_Number","Verse_Number",`Verse_${d}`],i=C==null?void 0:C.map(s=>{var m,A,F,V,J,ee,te,Me;return{SubBook_English:((m=t==null?void 0:t.subBookTitle)==null?void 0:m.en)||"",[`SubBook_${d}`]:((A=t==null?void 0:t.subBookTitle)==null?void 0:A[g])||((F=t==null?void 0:t.subBookTitle)==null?void 0:F.en)||"",SubBook_Transliteration:r&&((V=t==null?void 0:t.subBookTitle)==null?void 0:V.transliteration)||"",Chapter_Number:((J=n==null?void 0:n.chapterNumber)==null?void 0:J.toString())||"1",Verse_Number:((ee=s==null?void 0:s.verseNumber)==null?void 0:ee.toString())||"1",[`Verse_${d}`]:((te=s==null?void 0:s.verseText)==null?void 0:te[g])||((Me=s==null?void 0:s.verseText)==null?void 0:Me.en)||""}})):(a=["SubBook_English",`SubBook_${d}`,"Chapter_Number","Verse_Number",`Verse_${d}`],i=C==null?void 0:C.map(s=>{var m,A,F,V,J,ee,te;return{SubBook_English:((m=t==null?void 0:t.subBookTitle)==null?void 0:m.en)||"",[`SubBook_${d}`]:((A=t==null?void 0:t.subBookTitle)==null?void 0:A[g])||((F=t==null?void 0:t.subBookTitle)==null?void 0:F.en)||"",Chapter_Number:((V=n==null?void 0:n.chapterNumber)==null?void 0:V.toString())||"1",Verse_Number:((J=s==null?void 0:s.verseNumber)==null?void 0:J.toString())||"1",[`Verse_${d}`]:((ee=s==null?void 0:s.verseText)==null?void 0:ee[g])||((te=s==null?void 0:s.verseText)==null?void 0:te.en)||""}}))}$(a||[]),ne(i||[])},[B,n,C,j,g,y]),lt=c.useCallback(()=>{const t=`${k}-${le(j,re)}-${le(w,Q)}`,a=se.json_to_sheet(P),i=se.book_new();se.book_append_sheet(i,a,"Sheet1");const r=Yt(i,{bookType:"xlsx",type:"array"}),l=new Blob([r],{type:"application/octet-stream"});la.saveAs(l,`${t}.xlsx`),D.success(Ut,{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})},[P,q]);c.useEffect(()=>{window.scrollTo({top:0})},[]),c.useEffect(()=>{(async()=>{var a;T(!0);try{const i=e.bookInfos.find(r=>r.bookTitle.en==k);if(i){N(i);const l=Array.from(new Set(i.subBooks.map(u=>u.subBookId))).map(u=>i.subBooks.find(p=>p.subBookId===u)).map(u=>{var p;return{label:(p=u.subBookTitle)==null?void 0:p[g],value:u.subBookId}});Le(l),l.some(u=>u.value===j)||Y(((a=l[0])==null?void 0:a.value)||"")}else await st(k);if(w){const r=e.chapterInfos.find(l=>l.chapterId==w);r?(b(r),f(r.verses)):await Ue(w)}Z()}catch(i){console.error("Error loading data:",i),D.error(i instanceof Error?i.message:String(i))}finally{T(!1)}})()},[k]),c.useEffect(()=>{var r,l,u,p,d;const t=e.bookInfos.find(s=>s.subBooks.find(m=>m.subBookId==j)),a=t==null?void 0:t.subBooks.find(s=>s.subBookId==j);a&&K(a),X(((r=a==null?void 0:a.subBookTitle)==null?void 0:r[g])||""),be(((l=a==null?void 0:a.subBookTitle)==null?void 0:l.ar)||""),fe(((u=a==null?void 0:a.subBookTitle)==null?void 0:u.en)||""),Pe(((p=a==null?void 0:a.subBookTitle)==null?void 0:p.transliteration)||"");const i=(d=a==null?void 0:a.chapterInfos)==null?void 0:d.map(s=>({value:s.chapterId,label:s.chapterNumber.toString()}));i&&I.chapterId?(ge(i),ie(I.chapterId)):i&&(ge(i),ie(i[0].value)),Z()},[j]),c.useEffect(()=>{$([]),ne([]);const t=e.chapterInfos.find(a=>a.chapterId==w);t?(b(t),f(t.verses)):Ue(w),I.chapterId="",Z()},[w]),c.useEffect(()=>{var i,r,l,u,p;Z(),ve(0);const t=((i=n==null?void 0:n.chapterIsCompleted)==null?void 0:i[g])||!1,a=((r=n==null?void 0:n.chapterIsPublished)==null?void 0:r[g])||!1;et(((l=n==null?void 0:n.verses)==null?void 0:l.length)||0),(u=n.verses)==null||u.map(d=>ve(s=>{var m;return(m=d==null?void 0:d.verseText)!=null&&m[g]?s+1:s})),X(((p=x==null?void 0:x.subBookTitle)==null?void 0:p[g])||""),Ie(t),me(a)},[C,B,x,n,g]),c.useEffect(()=>{y||Z()},[y]),c.useEffect(()=>{const t=(v==null?void 0:v.target.files)&&(v==null?void 0:v.target.files[0]);t&&ce(t)},[v,y]),c.useEffect(()=>{var t;if(y){Ae([]);const a=R[0],i=(t=Ce.find(r=>r.value==g))==null?void 0:t.label;i!="English"&&G(r=>[...r,"SubBook_English"]),a&&Object.keys(a).forEach(r=>{r=="SubBook_Transliteration"&&G(l=>[...l,r]),i&&r.includes(i)&&G(l=>[...l,r])}),G(r=>[...r,"Chapter_Number","Verse_Number"]),R.forEach(r=>{const l={};l.SubBook_English=r.SubBook_English,Object.keys(r).forEach(u=>{u.includes(i)&&(l[u]=r[u]),u=="SubBook_Transliteration"&&i=="English"&&(l[u]=r[u])}),l.Chapter_Number=r.Chapter_Number,l.Verse_Number=r.Verse_Number,Ae(u=>[...u,l])})}},[R,g,y]),c.useEffect(()=>{if(y){if(G([]),!S)return;const t=S.name,a=t.substr(t.lastIndexOf(".")+1).toLowerCase();a==="csv"?St(S):["xlsx","xls"].includes(a)?Tt(S):console.error("Unsupported file format")}},[S,g,y]),c.useEffect(()=>{if(y){const t=["SubBook_English",`SubBook_${L(g)}`,"Chapter_Number","Verse_Number",`Verse_${L(g)}`].filter((i,r,l)=>i&&l.indexOf(i)===r);let a="";if(R.length>1){const i=Object.keys(R[0]),r=t.filter(m=>!i.includes(m));r.forEach(m=>a+=`${m}, `),a&&(a=`You missed the ${r.length>=2?"fields":"field"}: `+a);const l=R[0][`SubBook_${L(g)}`];R.find(m=>m[`SubBook_${L(g)}`]!=l)&&(a=Vt);const p=R[0].SubBook_Transliteration;R.find(m=>m.SubBook_Transliteration!=p)&&(a=Wt);const s=de.includes("SubBook_Transliteration");e.currentBook==Se||e.currentBook==Te?(s||(a=Kt),R.some(A=>A.Chapter_Number!="1")&&(a=zt),he(a)):(s&&(a=Dt),he(a))}R.length==0&&(a=Ht,he(a))}},[P,de,y,g,R,Re]);const ut=t=>{Qe(t),pe("/admin/bookoverview"),e.dispatch({type:U.SET_BOOK,payload:{bookTitle:t}})},ct=t=>{const a=t.target.value;Y(a)},dt=t=>{const a=t.target.value;ie(a)},ht=t=>{const a=t.target.value;Fe(a),$([]),ne([]),e.dispatch({type:U.SET_CURRENT_LANGUAGE,payload:{language:a}})},De=t=>{const a={chapterAudio:t.audio,chapterId:t._id,chapterNumber:t.chapterNumber,chapterTranslated:t.isTranslated,chapterIsCompleted:t.isCompleted,chapterIsPublished:t.isPublished,subBookId:t.subBook,verses:n.verses},i=e.bookInfos.map(r=>({...r,subBooks:r.subBooks.map(l=>({...l,chapterInfos:l.chapterInfos.map(u=>u.chapterId===w?{...u,...a}:u)}))}));e.dispatch({type:U.SET_BOOKINFOS,payload:{bookInfos:i}}),e.dispatch({type:U.UPDATE_CHAPTERINFOS,payload:{chapterInfo:a}})},gt=t=>{const a={chapterInfos:(x==null?void 0:x.chapterInfos)||[],subBookId:(x==null?void 0:x.subBookId)||"",subBookNumber:(x==null?void 0:x.subBookNumber)||1,subBookTitle:t.title,noChapter:!0},i=e.bookInfos.map(r=>({...r,subBooks:r.subBooks.map(l=>l.subBookId==j?{...l,...a}:l)}));e.dispatch({type:U.SET_BOOKINFOS,payload:{bookInfos:i}})},mt=async t=>{var i,r;Ie(t),me(t&&((i=n.chapterIsPublished)==null?void 0:i[g])),T(!0);const a={chapterNumber:n.chapterNumber||1,subBook:n.subBookId||"",audio:n.chapterAudio,isTranslated:n.chapterTranslated,isCompleted:{...n.chapterIsCompleted,[g]:t},isPublished:{...n.chapterIsPublished,[g]:t&&((r=n.chapterIsPublished)==null?void 0:r[g])}};oe.updateChapterInfo({chapterId:w,newChapterInfo:a}).then(l=>{De(l),T(!1)}).catch(l=>{D.error(l instanceof Error?l.message:String(l),{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),T(!1)})},bt=async t=>{me(t);const a={chapterNumber:n.chapterNumber||1,subBook:n.subBookId||"",audio:n.chapterAudio,isTranslated:n.chapterTranslated,isCompleted:n.chapterIsCompleted,isPublished:{...n.chapterIsPublished,[g]:t}};oe.updateChapterInfo({chapterId:w,newChapterInfo:a}).then(i=>{De(i),T(!1)}).catch(i=>{D.error(i instanceof Error?i.message:String(i),{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),T(!1)})},ft=t=>{g=="en"?fe(t):g=="ar"&&be(t),X(t)},Ct=t=>{g=="ar"&&X(t),be(t)},pt=t=>{g=="en"&&X(t),fe(t)},xt=(t,a,i,r)=>{const l={[`${g}`]:t,ar:a,transliteration:i,en:r},u={...x,subBookTitle:l},p={title:u.subBookTitle,number:u.subBookNumber||1,book:(B==null?void 0:B.bookId)||"",noChapter:!0};x!=null&&x.subBookId?(T(!0),oe.updateSubBookInfo({subBookId:x==null?void 0:x.subBookId,newSubBookInfo:p}).then(d=>{gt(d),T(!1)}).catch(d=>{D.error(d instanceof Error?d.message:String(d),{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),T(!1)})):D.error(Qt,{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})},He=t=>{Ye(t),$([]),ne([])},St=t=>{try{const a=new FileReader;a.onload=i=>{var l;const r=(l=i.target)==null?void 0:l.result;if(!r){console.error("Failed to read file");return}Xt.parse(r,{complete:u=>{if(u.errors.length>0){console.error("CSV parsing errors:",u.errors);return}const p=u.data;Ne(p)},header:!0,skipEmptyLines:!0,transformHeader:u=>u.trim(),transform:u=>u.trim()})},a.onerror=i=>{console.error("Error reading file:",i)},a.readAsText(t)}catch(a){console.error("Error parsing CSV file:",a)}},Tt=c.useCallback(async t=>{try{const a=new FileReader;a.onload=i=>{var s;const r=(s=i.target)==null?void 0:s.result;if(!r){console.error("Failed to read file");return}const l=Zt(r,{type:"array"}),u=l.SheetNames[0],p=l.Sheets[u],d=se.sheet_to_json(p);Ne(d)},a.onerror=i=>{console.error("Error reading file:",i)},a.readAsArrayBuffer(t)}catch(a){console.error("Error parsing Excel file:",a)}},[S]),Bt=()=>{na.saveBook({bookInfos:Re,bookTitle:e.currentBook,language:L(g)}).then(()=>{D.success("Saved successfully!",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})}).catch(t=>{D.success(t,{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})})},kt=()=>{localStorage.removeItem(ta),e.dispatch({type:U.RESET_USER}),e.dispatch({type:U.RESET_BOOK}),e.dispatch({type:U.RESET_APP_TEXT_PAGES}),pe("/admin")},yt=()=>o.jsx(qt,{isLoggedIn:!0,username:e.currentUser.username,isAdmin:e.currentUser.isAdmin,onLogOut:kt}),_t=()=>o.jsx(Sa,{children:o.jsx(ia,{books:aa.map(t=>({bookTitle:t.bookTitle,onClick:()=>{ut(t.value)}})),selectedBook:k})}),Et=()=>y&&o.jsx(Ta,{children:o.jsx(O,{color:"red",fontFamily:"'Baloo Da 2'",fontWeight:"bold",children:k==Se||k==Te?`For ${k} you can upload only one chapter at once`:`For ${k} you can upload multiple chapters of the same sub-book at once`})}),Ot=()=>o.jsxs(ka,{children:[o.jsxs(ya,{onClick:()=>pe("/admin/bookoverview"),children:[o.jsx(Ke,{}),o.jsx(O,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:"overview"})]}),!y&&o.jsxs(_a,{children:[o.jsx(O,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:k==Be||k==ke?"Go to: ":"Go to Surah: "}),o.jsx(ye,{label:"",options:re,value:re.find(t=>t.value===j)?j:"",backgroundColor:"#fff",textColor:"#155D74",onChange:ct}),(k==Be||k==ke)&&o.jsx(ye,{label:"",options:Q,value:Q.find(t=>t.value===w)?w:"",backgroundColor:"#fff",textColor:"#155D74",onChange:dt}),o.jsx(ye,{label:"",options:Ce,value:g,backgroundColor:"#fff",textColor:"#155D74",onChange:ht})]})]}),jt=()=>!y&&o.jsx(Na,{currentUser:e.currentUser,currentBook:e.currentBook,totalCountVerse:Je,languageCountVerse:tt,isComplete:Xe,isPublish:Ze,isSpecialBook:k==Se||k==Te,currentLanguage:g,arabicChapterTitle:ot,englishChapterTitle:rt,transliteration:nt,currentChapterTitle:at,translateComplete:t=>mt(t),translatePublish:t=>bt(t),handleCurrentChapterTitleChange:t=>ft(t),handleArabicChapterTitleChange:t=>Ct(t),handleTransliterationChapterTitleChange:t=>Pe(t),handleEnglishChapterTitleChange:t=>pt(t),handleUpdateChapterSummary:xt}),wt=()=>o.jsxs(Ea,{children:[o.jsxs($e,{active:y?"false":"true",onClick:()=>He(!1),children:[o.jsx(qe,{}),o.jsx(O,{fontFamily:"'Baloo Da 2'",children:"Database"})]}),o.jsxs($e,{active:y?"true":"false",onClick:()=>He(!0),children:[o.jsx(oa,{}),o.jsx(O,{fontFamily:"'Baloo Da 2'",children:"Import"})]})]}),Nt=()=>!y&&o.jsxs(Oa,{children:[o.jsx(O,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:`${k} - 
            ${le(j,re)} 
            ${k==Be||k==ke?le(w,Q):""}`}),o.jsx(ja,{children:o.jsx(Gt,{label:"Export to Excel",icon:o.jsx(ze,{}),onClick:lt})})]}),Rt=()=>!y&&o.jsx(Ba,{children:o.jsx(Jt,{headers:q,rows:P})}),At=()=>y&&o.jsx(wa,{children:o.jsx(ea,{language:g,languageLabel:L(g),languages:Ce,file:S,parsedData:R,headers:de,error:Ge,onChangeLanguage:t=>Fe(t.target.value),onChangeFile:t=>z(t),onUpload:Bt})}),Lt=()=>o.jsxs(xa,{children:[o.jsx(ra,{tools:Ra}),_t(),wt(),Ot(),Et(),jt(),Nt(),Rt(),At()]});return o.jsxs(o.Fragment,{children:[o.jsxs(pa,{flexDirection:it?"column":"row",children:[yt(),Lt()]}),o.jsx(Mt,{}),W&&o.jsx($t,{})]})}function La(e){return{dispatch:e}}function Fa(e){return{currentUser:e.user.currentUser,bookInfos:e.book.bookInfos,chapterInfos:e.book.chapterInfos,currentBook:e.book.book,currentLanguage:e.book.language}}const za=Ft(Fa,La)(Aa);export{za as default};
