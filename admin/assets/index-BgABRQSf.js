import{O as ve,j as u,a as c}from"./createTheme-C-1SeyhL.js";import{r as He,s as E,B as y,t as Ot,O as wt,K as Nt,u as Rt,A as P,P as jt,H as v,F as I,R as Ft,U as At,Q as Lt,E as It,V as Dt,W as Pt,X as vt,Y as Ht,w as Ut,T as K,q as Vt,Z as Mt}from"./App-CMR5rSAZ.js";import{u as se,w as $t,P as Kt,r as Wt,U as Gt}from"./index-CdF9uT1c.js";import{j as J,B as xe,h as Se,A as qt,i as zt,k as Ce,n as ke}from"./index-Dx6t9SDl.js";import{d as Qt,S as Yt}from"./index-Ciqev-vo.js";import{d as Xt}from"./CloudUpload-Cn4FmXPt.js";import{b as ie}from"./book.services-DOKx-SCB.js";import{t as Zt}from"./translator.services-BtR2jpSJ.js";import{a as M,b as le}from"./images-DszOq8LI.js";import{S as _e}from"./index-V_NcuuJ3.js";import{T as Jt}from"./index-BHySfajK.js";import{T as eo,B as to}from"./index-BNTBVHbw.js";import"./index-BFVafZVz.js";import"./index-CiSao8HX.js";import"./TableContainer-De_j0lUn.js";var Ue={exports:{}};(function(s,ce){(function(j,U){U()})(J,function(){function j(o,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function U(o,p,b){var g=new XMLHttpRequest;g.open("GET",o),g.responseType="blob",g.onload=function(){$(g.response,p,b)},g.onerror=function(){console.error("could not download file")},g.send()}function k(o){var p=new XMLHttpRequest;p.open("HEAD",o,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function C(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(p)}}var R=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof J=="object"&&J.global===J?J:void 0,m=R.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),$=R.saveAs||(typeof window!="object"||window!==R?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(o,p,b){var g=R.URL||R.webkitURL,x=document.createElement("a");p=p||o.name||"download",x.download=p,x.rel="noopener",typeof o=="string"?(x.href=o,x.origin===location.origin?C(x):k(x.href)?U(o,p,b):C(x,x.target="_blank")):(x.href=g.createObjectURL(o),setTimeout(function(){g.revokeObjectURL(x.href)},4e4),setTimeout(function(){C(x)},0))}:"msSaveOrOpenBlob"in navigator?function(o,p,b){if(p=p||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(j(o,b),p);else if(k(o))U(o,p,b);else{var g=document.createElement("a");g.href=o,g.target="_blank",setTimeout(function(){C(g)})}}:function(o,p,b,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof o=="string")return U(o,p,b);var x=o.type==="application/octet-stream",ue=/constructor/i.test(R.HTMLElement)||R.safari,F=/CriOS\/[\d]+/.test(navigator.userAgent);if((F||x&&ue||m)&&typeof FileReader<"u"){var W=new FileReader;W.onloadend=function(){var A=W.result;A=F?A:A.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=A:location=A,g=null},W.readAsDataURL(o)}else{var V=R.URL||R.webkitURL,D=V.createObjectURL(o);g?g.location=D:location.href=D,g=null,setTimeout(function(){V.revokeObjectURL(D)},4e4)}});R.saveAs=$.saveAs=$,s.exports=$})})(Ue);var oo=Ue.exports,Be={},ro=ve;Object.defineProperty(Be,"__esModule",{value:!0});var Ve=Be.default=void 0,ao=ro(He()),no=u;Ve=Be.default=(0,ao.default)((0,no.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");var Te={},so=ve;Object.defineProperty(Te,"__esModule",{value:!0});var Me=Te.default=void 0,io=so(He()),lo=u;Me=Te.default=(0,io.default)((0,lo.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");const co=E(y)({position:"relative",minHeight:"calc(100vh - 37px)",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),uo=E(y)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),ho=E(y)({margin:"20px 40px"}),po=E(y)({backgroundColor:"#F0F5FB",margin:"20px 40px",padding:"20px",boxSiaing:"border-box"}),mo=E(y)({margin:"20px 40px",display:"flex",justifyContent:"center",boxSizing:"border-box"}),go=E(y)({margin:"20px 40px",display:"flex",alignItems:"center","@media screen and (max-width: 800px)":{display:"block"}}),bo=E(y)({height:"40px",display:"flex",alignItems:"center",cursor:"pointer",marginRight:"250px",transitionDuration:".25s","&:hover":{transform:"scale(1.1)"},"& .MuiSvgIcon-root":{width:"16px",marginRight:"10px",fill:"#155D74"},"@media screen and (max-width: 1050px)":{marginRight:"100px"},"@media screen and (max-width: 900px)":{marginRight:"30px"}}),fo=E(y)({display:"flex",justifyContent:"space-between",alignItems:"center","& >.MuiBox-root":{minWidth:"100px",marginRight:"20px"},"& > .MuiFormControl-root":{marginRight:"20px"},"@media screen and (max-width: 900px)":{"& >.MuiBox-root":{minWidth:"50px",marginRight:"10px"}},"@media screen and (max-width: 650px)":{display:"block","& > .MuiFormControl-root":{alignItems:"start","& .MuiInputBase-root":{width:"100%"}}}});E(y)({border:"1px solid #1B7695",backgroundColor:"#F0F5FB",boxSizing:"border-box",padding:"20px",margin:"20px 40px"});E(y)({display:"flex",alignItems:"center",justifyContent:"space-between",width:"300px","& >.MuiBox-root>:nth-of-type(2)":{marginRight:"25px"}});const xo=E(y)({display:"flex",alignItems:"center",margin:"50px 40px 20px 40px"}),Pe=E(y)(({active:s})=>({display:"flex",alignItems:"center",justifyContent:"center",width:"120px",padding:"5px",boxSizing:"border-box",border:"1px solid #474747",backgroundColor:s=="true"?"#1B7695":"#F0F5FB",color:s=="true"?"#FFF":"#474747",cursor:"pointer","& .MuiSvgIcon-root":{fill:s=="true"?"#FFF":"#474747",marginRight:"10px"}})),So=E(y)({display:"flex",justifyContent:"right",alignItems:"center",boxSizing:"border-box",margin:"20px 40px"}),Co=E(y)(({isdisable:s})=>({display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"25px",padding:"0px 10px",boxSizing:"border-box",backgroundColor:"#FFAA5D",cursor:s=="true"?"not-allowed":"pointer","&:hover":{backgroundColor:s=="true"?"#FFAA5D":"#EE994C"},"& .MuiBox-root":{color:"#474747 !important",textTransform:"none","&:hover":{backgroundColor:s=="true"?"#FFAA5D":"#EE994C"}}})),ko=E(y)({width:"90%",height:"calc(100% - 73px)",margin:"auto",marginTop:"20px"}),_o=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}];function Bo(s){const ce=wt(),j=ce.state,[U,k]=c.useState(!1),[C,R]=c.useState(null),[m,$]=c.useState(null),[o,p]=c.useState(j.chapterInfo),[b,g]=c.useState([]),[x,ue]=c.useState(null),[F,W]=c.useState(),[V,D]=c.useState([]),[A,G]=c.useState([]),[de,q]=c.useState([]),[N,Ee]=c.useState([]),[ye,Oe]=c.useState([]),[$e,he]=c.useState(""),[ee,Ke]=c.useState([]),[te,we]=c.useState([]),[B,We]=c.useState(s.currentBook),[L,Ne]=c.useState(j.subBookInfo.subBookId),[O,oe]=c.useState(j.chapterId),[d,Re]=c.useState(s.currentLanguage),[_,Ge]=c.useState(j.isImport),[qe,pe]=c.useState(!1),[me,re]=c.useState(!1),[ze,je]=c.useState(0),[Qe,ge]=c.useState(0),[Ye,z]=c.useState(""),[Xe,ae]=c.useState(""),[Ze,Fe]=c.useState(""),[Je,ne]=c.useState(""),be=c.useMemo(()=>ce.state.languages,[s.currentUser]),et=Nt(),fe=Rt(),Ae=c.useCallback(async e=>(k(!0),await ie.getChapterInfoByChapterId(e)),[O]),Q=c.useCallback(()=>{var n,i,S;const e=(n=C==null?void 0:C.subBooks)==null?void 0:n.find(h=>h.subBookId==L);let t=[],a=[];const r=((i=C==null?void 0:C.bookTitle)==null?void 0:i.en)=="Qur'an"||((S=C==null?void 0:C.bookTitle)==null?void 0:S.en)=="Zabur";if(d=="en")r?(t=["SubBook_English","SubBook_Transliteration","Chapter_Number","Verse_Number","Verse_English"],a=b==null?void 0:b.map(h=>{var l,f,T,w,H;return{SubBook_English:((l=e==null?void 0:e.subBookTitle)==null?void 0:l.en)||"",SubBook_Transliteration:((f=e==null?void 0:e.subBookTitle)==null?void 0:f.transliteration)||"",Chapter_Number:((T=o==null?void 0:o.chapterNumber)==null?void 0:T.toString())||"1",Verse_Number:((w=h==null?void 0:h.verseNumber)==null?void 0:w.toString())||"1",Verse_English:((H=h==null?void 0:h.verseText)==null?void 0:H.en)||""}})):(t=["SubBook_English","Chapter_Number","Verse_Number","Verse_English"],a=b==null?void 0:b.map(h=>{var l,f,T,w;return{SubBook_English:((l=e==null?void 0:e.subBookTitle)==null?void 0:l.en)||"",Chapter_Number:((f=o==null?void 0:o.chapterNumber)==null?void 0:f.toString())||"1",Verse_Number:((T=h==null?void 0:h.verseNumber)==null?void 0:T.toString())||"1",Verse_English:((w=h==null?void 0:h.verseText)==null?void 0:w.en)||""}}));else{const h=M(d);r?(t=["SubBook_English",`SubBook_${h}`,"SubBook_Transliteration","Chapter_Number","Verse_Number",`Verse_${h}`],a=b==null?void 0:b.map(l=>{var f,T,w,H,Y,X,Z,De;return{SubBook_English:((f=e==null?void 0:e.subBookTitle)==null?void 0:f.en)||"",[`SubBook_${h}`]:((T=e==null?void 0:e.subBookTitle)==null?void 0:T[d])||((w=e==null?void 0:e.subBookTitle)==null?void 0:w.en)||"",SubBook_Transliteration:r&&((H=e==null?void 0:e.subBookTitle)==null?void 0:H.transliteration)||"",Chapter_Number:((Y=o==null?void 0:o.chapterNumber)==null?void 0:Y.toString())||"1",Verse_Number:((X=l==null?void 0:l.verseNumber)==null?void 0:X.toString())||"1",[`Verse_${h}`]:((Z=l==null?void 0:l.verseText)==null?void 0:Z[d])||((De=l==null?void 0:l.verseText)==null?void 0:De.en)||""}})):(t=["SubBook_English",`SubBook_${h}`,"Chapter_Number","Verse_Number",`Verse_${h}`],a=b==null?void 0:b.map(l=>{var f,T,w,H,Y,X,Z;return{SubBook_English:((f=e==null?void 0:e.subBookTitle)==null?void 0:f.en)||"",[`SubBook_${h}`]:((T=e==null?void 0:e.subBookTitle)==null?void 0:T[d])||((w=e==null?void 0:e.subBookTitle)==null?void 0:w.en)||"",Chapter_Number:((H=o==null?void 0:o.chapterNumber)==null?void 0:H.toString())||"1",Verse_Number:((Y=l==null?void 0:l.verseNumber)==null?void 0:Y.toString())||"1",[`Verse_${h}`]:((X=l==null?void 0:l.verseText)==null?void 0:X[d])||((Z=l==null?void 0:l.verseText)==null?void 0:Z.en)||""}}))}D(t||[]),G(a||[])},[C,o,b,L,d,_]),tt=c.useCallback(()=>{const e=`${B}-${le(L,ee)}-${le(O,te)}`,t=se.json_to_sheet(A),a=se.book_new();se.book_append_sheet(a,t,"Sheet1");const r=$t(a,{bookType:"xlsx",type:"array"}),n=new Blob([r],{type:"application/octet-stream"});oo.saveAs(n,`${e}.xlsx`),P.success(jt,{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})},[A,V]);c.useEffect(()=>{window.scrollTo({top:0})},[]),c.useEffect(()=>{(async()=>{var t;k(!0);try{const a=s.bookInfos.find(r=>r.bookTitle.en==B);if(a){R(a);const n=Array.from(new Set(a.subBooks.map(i=>i.subBookId))).map(i=>a.subBooks.find(S=>S.subBookId===i)).map(i=>{var S;return{label:(S=i.subBookTitle)==null?void 0:S[d],value:i.subBookId}});Ke(n),n.some(i=>i.value===L)||Ne(((t=n[0])==null?void 0:t.value)||"")}if(O){const r=s.chapterInfos.find(n=>n.chapterId==O);r?p(r):Ae(O).then(n=>{p(n),s.dispatch({type:I.ADD_CHAPTERINFO,payload:{chapterInfo:n}}),k(!1)}).catch(()=>{k(!1)})}Q()}catch{P.error("Failed to load book information",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})}finally{k(!1)}})()},[B]),c.useEffect(()=>{var r,n,i,S,h;const e=s.bookInfos.find(l=>(l==null?void 0:l.bookTitle.en)==s.currentBook),t=e==null?void 0:e.subBooks.find(l=>l.subBookId==L);t&&$(t),z(((r=t==null?void 0:t.subBookTitle)==null?void 0:r[d])||""),ae(((n=t==null?void 0:t.subBookTitle)==null?void 0:n.ar)||""),ne(((i=t==null?void 0:t.subBookTitle)==null?void 0:i.en)||""),Fe(((S=t==null?void 0:t.subBookTitle)==null?void 0:S.transliteration)||"");const a=(h=t==null?void 0:t.chapterInfos)==null?void 0:h.map(l=>({value:l.chapterId,label:l.chapterNumber.toString()}));a&&j.chapterId?(we(a),oe(j.chapterId)):a&&(we(a),oe(a[0].value)),Q()},[L,s.currentBook]),c.useEffect(()=>{D([]),G([]);const e=s.chapterInfos.find(t=>t.chapterId==O);e?(p(e),g((e==null?void 0:e.verses)||[])):Ae(O).then(t=>{p(t),g(t.verses||[]),s.dispatch({type:I.ADD_CHAPTERINFO,payload:{chapterInfo:t}}),k(!1)}).catch(()=>{D([]),G([]),je(0),ge(0),pe(!1),re(!1),P.warning("Chapter is empty. Click Import to add verses.",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),k(!1)}),j.chapterId="",Q()},[s.chapterInfos,O]),c.useEffect(()=>{var a,r,n,i,S,h,l;ge(0),Q();const e=((a=o==null?void 0:o.chapterIsCompleted)==null?void 0:a[d])||!1,t=((r=o==null?void 0:o.chapterIsPublished)==null?void 0:r[d])||!1;pe(e),re(t),je(((n=o==null?void 0:o.verses)==null?void 0:n.length)||0),(i=o.verses)==null||i.map(f=>ge(T=>{var w;return(w=f==null?void 0:f.verseText)!=null&&w[d]?T+1:T})),z(((S=m==null?void 0:m.subBookTitle)==null?void 0:S[d])||""),ae(((h=m==null?void 0:m.subBookTitle)==null?void 0:h.ar)||""),ne(((l=m==null?void 0:m.subBookTitle)==null?void 0:l.en)||""),oe(o.chapterId)},[b,C,m,o,d]),c.useEffect(()=>{_||Q()},[_]),c.useEffect(()=>{const e=(F==null?void 0:F.target.files)&&(F==null?void 0:F.target.files[0]);e&&ue(e)},[F,_]),c.useEffect(()=>{var e;if(_){Oe([]);const t=N[0],a=(e=be.find(r=>r.value==d))==null?void 0:e.label;a!="English"&&q(r=>[...r,"SubBook_English"]),t&&Object.keys(t).forEach(r=>{r=="SubBook_Transliteration"&&q(n=>[...n,r]),a&&r.includes(a)&&q(n=>[...n,r])}),q(r=>[...r,"Chapter_Number","Verse_Number"]),N.forEach(r=>{const n={};n.SubBook_English=r.SubBook_English,Object.keys(r).forEach(i=>{i.includes(a)&&(n[i]=r[i]),i=="SubBook_Transliteration"&&a=="English"&&(n[i]=r[i])}),n.Chapter_Number=r.Chapter_Number,n.Verse_Number=r.Verse_Number,Oe(i=>[...i,n])})}},[N,d,_]),c.useEffect(()=>{if(_){if(q([]),!x)return;const e=x.name,t=e.substr(e.lastIndexOf(".")+1).toLowerCase();t==="csv"?pt(x):["xlsx","xls"].includes(t)?mt(x):console.error("Unsupported file format")}},[x,d,_]),c.useEffect(()=>{if(_){const e=["SubBook_English",`SubBook_${M(d)}`,"Chapter_Number","Verse_Number",`Verse_${M(d)}`].filter((a,r,n)=>a&&n.indexOf(a)===r);let t="";if(N.length>1){const a=Object.keys(N[0]),r=e.filter(f=>!a.includes(f));r.forEach(f=>t+=`${f}, `),t&&(t=`You missed the ${r.length>=2?"fields":"field"}: `+t);const n=N[0][`SubBook_${M(d)}`];N.find(f=>f[`SubBook_${M(d)}`]!=n)&&(t=Dt);const S=N[0].SubBook_Transliteration;N.find(f=>f.SubBook_Transliteration!=S)&&(t=Pt);const l=de.includes("SubBook_Transliteration");s.currentBook==xe||s.currentBook==Se?(l||(t=vt),N.some(T=>T.Chapter_Number!="1")&&(t=Ht),he(t)):(l&&(t=Ft),he(t))}N.length==0&&(t=At,he(t))}},[A,de,_,d,N,ye]);const ot=e=>{We(e),fe("/admin/bookoverview"),s.dispatch({type:I.SET_BOOK,payload:{bookTitle:e}})},rt=e=>{const t=e.target.value;Ne(t)},at=e=>{const t=e.target.value;oe(t)},nt=e=>{const t=e.target.value;Re(t),D([]),G([]),s.dispatch({type:I.SET_CURRENT_LANGUAGE,payload:{language:t}})},Le=e=>{const t={chapterAudio:e.audio,chapterId:e._id,chapterNumber:e.chapterNumber,chapterTranslated:e.isTranslated,chapterIsCompleted:e.isCompleted,chapterIsPublished:e.isPublished,subBookId:e.subBook,verses:e.verses};p(t);const a=s.bookInfos.map(r=>({...r,subBooks:r.subBooks.map(n=>({...n,chapterInfos:n.chapterInfos.map(i=>i.chapterId===O?{...i,...t}:i)}))}));s.dispatch({type:I.SET_BOOKINFOS,payload:{bookInfos:a}}),s.dispatch({type:I.UPDATE_CHAPTERINFOS,payload:{chapterInfo:t}})},st=e=>{const t={chapterInfos:(m==null?void 0:m.chapterInfos)||[],subBookId:(m==null?void 0:m.subBookId)||"",subBookNumber:(m==null?void 0:m.subBookNumber)||1,subBookTitle:e.title,noChapter:!0},a=s.bookInfos.map(r=>({...r,subBooks:r.subBooks.map(n=>n.subBookId==L?{...n,...t}:n)}));s.dispatch({type:I.SET_BOOKINFOS,payload:{bookInfos:a}})},it=async e=>{pe(e),re(e&&me),k(!0);const t={chapterNumber:o.chapterNumber||1,subBook:o.subBookId||"",audio:o.chapterAudio,isTranslated:o.chapterTranslated,isCompleted:{...o.chapterIsCompleted,[d]:e},isPublished:{...o.chapterIsPublished,[d]:e&&me}};ie.updateChapterInfo({chapterId:O,newChapterInfo:t}).then(a=>{Le(a),k(!1)}).catch(()=>{P.error("Failed to complete the chapter",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),k(!1)})},lt=async e=>{re(e);const t={chapterNumber:o.chapterNumber||1,subBook:o.subBookId||"",audio:o.chapterAudio,isTranslated:o.chapterTranslated,isCompleted:o.chapterIsCompleted,isPublished:{...o.chapterIsPublished,[d]:e}};ie.updateChapterInfo({chapterId:O,newChapterInfo:t}).then(a=>{Le(a),k(!1)}).catch(()=>{P.error("Failed to publish the chapter",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),k(!1)})},ct=e=>{d=="en"?ne(e):d=="ar"&&ae(e),z(e)},ut=e=>{d=="ar"&&z(e),ae(e)},dt=e=>{d=="en"&&z(e),ne(e)},ht=(e,t,a,r)=>{const n={[`${d}`]:e,ar:t,transliteration:a,en:r},i={...m,subBookTitle:n},S={title:i.subBookTitle,number:i.subBookNumber||1,book:(C==null?void 0:C.bookId)||"",noChapter:!0};m!=null&&m.subBookId?(k(!0),ie.updateSubBookInfo({subBookId:m==null?void 0:m.subBookId,newSubBookInfo:S}).then(h=>{st(h),k(!1)}).catch(()=>{P.error("Failed to update the summary of chapter",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),k(!1)})):P.error(Mt,{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})},Ie=e=>{Ge(e),D([]),G([])},pt=e=>{try{const t=new FileReader;t.onload=a=>{var n;const r=(n=a.target)==null?void 0:n.result;if(!r){console.error("Failed to read file");return}Kt.parse(r,{complete:i=>{if(i.errors.length>0){console.error("CSV parsing errors:",i.errors);return}const S=i.data;Ee(S)},header:!0,skipEmptyLines:!0,transformHeader:i=>i.trim(),transform:i=>i.trim()})},t.onerror=a=>{console.error("Error reading file:",a)},t.readAsText(e)}catch(t){console.error("Error parsing CSV file:",t)}},mt=c.useCallback(async e=>{try{const t=new FileReader;t.onload=a=>{var l;const r=(l=a.target)==null?void 0:l.result;if(!r){console.error("Failed to read file");return}const n=Wt(r,{type:"array"}),i=n.SheetNames[0],S=n.Sheets[i],h=se.sheet_to_json(S);Ee(h)},t.onerror=a=>{console.error("Error reading file:",a)},t.readAsArrayBuffer(e)}catch(t){console.error("Error parsing Excel file:",t)}},[x]),gt=()=>{Zt.saveBook({bookInfos:ye,bookTitle:s.currentBook,language:M(d)}).then(()=>{P.success("Saved successfully!",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})}).catch(()=>{P.success("Failed to save book",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})})},bt=()=>{localStorage.removeItem(qt),s.dispatch({type:I.RESET_USER}),s.dispatch({type:I.RESET_BOOK}),s.dispatch({type:I.RESET_APP_TEXT_PAGES}),fe("/admin")},ft=()=>u.jsx(Ut,{isLoggedIn:!0,username:s.currentUser.username,isAdmin:s.currentUser.isAdmin,onLogOut:bt}),xt=()=>u.jsx(ho,{children:u.jsx(to,{books:zt.map(e=>({bookTitle:e.bookTitle,onClick:()=>{ot(e.value)}})),selectedBook:B})}),St=()=>_&&u.jsx(po,{children:u.jsx(K,{color:"red",fontFamily:"'Baloo Da 2'",fontWeight:"bold",children:B==xe||B==Se?`For ${B} you can upload only one chapter at once`:`For ${B} you can upload multiple chapters of the same sub-book at once`})}),Ct=()=>u.jsxs(go,{children:[u.jsxs(bo,{onClick:()=>fe("/admin/bookoverview"),children:[u.jsx(Qt,{}),u.jsx(K,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:"overview"})]}),!_&&u.jsxs(fo,{children:[u.jsx(K,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:B==Ce||B==ke?"Go to: ":"Go to Surah: "}),u.jsx(_e,{label:"",options:ee,value:ee.find(e=>e.value===L)?L:"",backgroundColor:"#fff",textColor:"#155D74",onChange:rt}),(B==Ce||B==ke)&&u.jsx(_e,{label:"",options:te,value:te.find(e=>e.value===O)?O:"",backgroundColor:"#fff",textColor:"#155D74",onChange:at}),u.jsx(_e,{label:"",options:be,value:d,backgroundColor:"#fff",textColor:"#155D74",onChange:nt})]})]}),kt=()=>!_&&u.jsx(Yt,{currentUser:s.currentUser,currentBook:s.currentBook,totalCountVerse:ze,languageCountVerse:Qe,isComplete:qe,isPublish:me,isSpecialBook:B==xe||B==Se,currentLanguage:d,arabicChapterTitle:Xe,englishChapterTitle:Je,transliteration:Ze,currentChapterTitle:Ye,handleComplete:e=>it(e),handlePublish:e=>lt(e),handleCurrentChapterTitleChange:e=>ct(e),handleArabicChapterTitleChange:e=>ut(e),handleTransliterationChapterTitleChange:e=>Fe(e),handleEnglishChapterTitleChange:e=>dt(e),handleUpdateChapterSummary:ht}),_t=()=>u.jsxs(xo,{children:[u.jsxs(Pe,{active:_?"false":"true",onClick:()=>Ie(!1),children:[u.jsx(Me,{}),u.jsx(K,{fontFamily:"'Baloo Da 2'",children:"Database"})]}),u.jsxs(Pe,{active:_?"true":"false",onClick:()=>Ie(!0),children:[u.jsx(Xt,{}),u.jsx(K,{fontFamily:"'Baloo Da 2'",children:"Import"})]})]}),Bt=()=>!_&&u.jsxs(So,{children:[u.jsx(K,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:`${B} - 
            ${le(L,ee)} 
            ${B==Ce||B==ke?le(O,te):""}`}),u.jsx(Co,{isdisable:V.length?"false":"true",children:u.jsx(Vt,{label:"Export to Excel",disabled:!V.length,icon:u.jsx(Ve,{}),onClick:tt})})]}),Tt=()=>!_&&u.jsx(mo,{children:u.jsx(Jt,{headers:V,rows:A})}),Et=()=>_&&u.jsx(ko,{children:u.jsx(Gt,{language:d,languageLabel:M(d),languages:be,file:x,parsedData:N,headers:de,error:$e,onChangeLanguage:e=>Re(e.target.value),onChangeFile:e=>W(e),onUpload:gt})}),yt=()=>u.jsxs(uo,{children:[u.jsx(eo,{tools:_o}),xt(),_t(),Ct(),St(),kt(),Bt(),Tt(),Et()]});return u.jsxs(u.Fragment,{children:[u.jsxs(co,{flexDirection:et?"column":"row",children:[ft(),yt()]}),u.jsx(Lt,{}),U&&u.jsx(It,{})]})}function To(s){return{dispatch:s}}function Eo(s){return{currentUser:s.user.currentUser,bookInfos:s.book.bookInfos,chapterInfos:s.book.chapterInfos,currentBook:s.book.book,currentLanguage:s.book.language}}const Vo=Ot(Eo,To)(Bo);export{Vo as default};
