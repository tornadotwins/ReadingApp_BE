import{O as ve,j as u,a as l}from"./createTheme-fJ5dSSTW.js";import{r as He,s as E,B as y,t as Ot,W as wt,K as Nt,u as Rt,A as P,X as jt,H as v,F as I,Y as Ft,Z as At,Q as Lt,E as It,_ as Dt,$ as Pt,a0 as vt,a1 as Ht,w as Ut,T as K,q as Vt,a2 as Mt}from"./App-CaXAlDue.js";import{u as se,w as $t,P as Kt,r as Wt,U as qt}from"./index-DX9esMWp.js";import{p as J,B as Se,h as Ce,A as Gt,i as zt,q as _e,r as ke}from"./index-CmQlESKK.js";import{d as Qt,S as Yt}from"./index-6aOsoRwv.js";import{d as Xt}from"./CloudUpload-CNGm4OhJ.js";import{b as ie}from"./book.services-Boz4u9QW.js";import{t as Zt}from"./translator.services-RDC6s8pQ.js";import{a as M,b as le}from"./images-M0PcT3Ux.js";import{S as Be}from"./index-DzM1rMAl.js";import{T as Jt}from"./index-BCiQCv2N.js";import{T as eo,B as to}from"./index-T3QODVv0.js";import"./index-D1w0D0_S.js";import"./index-BTy6RSz-.js";import"./TableContainer-Bh_NcXCQ.js";var Ue={exports:{}};(function(s,ce){(function(j,U){U()})(J,function(){function j(o,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function U(o,p,b){var g=new XMLHttpRequest;g.open("GET",o),g.responseType="blob",g.onload=function(){$(g.response,p,b)},g.onerror=function(){console.error("could not download file")},g.send()}function _(o){var p=new XMLHttpRequest;p.open("HEAD",o,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function C(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(p)}}var R=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof J=="object"&&J.global===J?J:void 0,m=R.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),$=R.saveAs||(typeof window!="object"||window!==R?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(o,p,b){var g=R.URL||R.webkitURL,x=document.createElement("a");p=p||o.name||"download",x.download=p,x.rel="noopener",typeof o=="string"?(x.href=o,x.origin===location.origin?C(x):_(x.href)?U(o,p,b):C(x,x.target="_blank")):(x.href=g.createObjectURL(o),setTimeout(function(){g.revokeObjectURL(x.href)},4e4),setTimeout(function(){C(x)},0))}:"msSaveOrOpenBlob"in navigator?function(o,p,b){if(p=p||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(j(o,b),p);else if(_(o))U(o,p,b);else{var g=document.createElement("a");g.href=o,g.target="_blank",setTimeout(function(){C(g)})}}:function(o,p,b,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof o=="string")return U(o,p,b);var x=o.type==="application/octet-stream",ue=/constructor/i.test(R.HTMLElement)||R.safari,F=/CriOS\/[\d]+/.test(navigator.userAgent);if((F||x&&ue||m)&&typeof FileReader<"u"){var W=new FileReader;W.onloadend=function(){var A=W.result;A=F?A:A.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=A:location=A,g=null},W.readAsDataURL(o)}else{var V=R.URL||R.webkitURL,D=V.createObjectURL(o);g?g.location=D:location.href=D,g=null,setTimeout(function(){V.revokeObjectURL(D)},4e4)}});R.saveAs=$.saveAs=$,s.exports=$})})(Ue);var oo=Ue.exports,Te={},ao=ve;Object.defineProperty(Te,"__esModule",{value:!0});var Ve=Te.default=void 0,ro=ao(He()),no=u;Ve=Te.default=(0,ro.default)((0,no.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");var Ee={},so=ve;Object.defineProperty(Ee,"__esModule",{value:!0});var Me=Ee.default=void 0,io=so(He()),lo=u;Me=Ee.default=(0,io.default)((0,lo.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z"}),"CloudDownload");const co=E(y)({position:"relative",minHeight:"calc(100vh - 37px)",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),uo=E(y)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),ho=E(y)({margin:"20px 40px"}),po=E(y)({backgroundColor:"#F0F5FB",margin:"20px 40px",padding:"20px",boxSiaing:"border-box"}),mo=E(y)({margin:"20px 40px",display:"flex",justifyContent:"center",boxSizing:"border-box"}),go=E(y)({margin:"20px 40px",display:"flex",alignItems:"center","@media screen and (max-width: 800px)":{display:"block"}}),bo=E(y)({height:"40px",display:"flex",alignItems:"center",cursor:"pointer",marginRight:"250px",transitionDuration:".25s","&:hover":{transform:"scale(1.1)"},"& .MuiSvgIcon-root":{width:"16px",marginRight:"10px",fill:"#155D74"},"@media screen and (max-width: 1050px)":{marginRight:"100px"},"@media screen and (max-width: 900px)":{marginRight:"30px"}}),fo=E(y)({display:"flex",justifyContent:"space-between",alignItems:"center","& >.MuiBox-root":{minWidth:"100px",marginRight:"20px"},"& > .MuiFormControl-root":{marginRight:"20px"},"@media screen and (max-width: 900px)":{"& >.MuiBox-root":{minWidth:"50px",marginRight:"10px"}},"@media screen and (max-width: 650px)":{display:"block","& > .MuiFormControl-root":{alignItems:"start","& .MuiInputBase-root":{width:"100%"}}}});E(y)({border:"1px solid #1B7695",backgroundColor:"#F0F5FB",boxSizing:"border-box",padding:"20px",margin:"20px 40px"});E(y)({display:"flex",alignItems:"center",justifyContent:"space-between",width:"300px","& >.MuiBox-root>:nth-of-type(2)":{marginRight:"25px"}});const xo=E(y)({display:"flex",alignItems:"center",margin:"50px 40px 20px 40px"}),Pe=E(y)(({active:s})=>({display:"flex",alignItems:"center",justifyContent:"center",width:"120px",padding:"5px",boxSizing:"border-box",border:"1px solid #474747",backgroundColor:s=="true"?"#1B7695":"#F0F5FB",color:s=="true"?"#FFF":"#474747",cursor:"pointer","& .MuiSvgIcon-root":{fill:s=="true"?"#FFF":"#474747",marginRight:"10px"}})),So=E(y)({display:"flex",justifyContent:"right",alignItems:"center",boxSizing:"border-box",margin:"20px 40px"}),Co=E(y)(({isdisable:s})=>({display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"25px",padding:"0px 10px",boxSizing:"border-box",backgroundColor:"#FFAA5D",cursor:s=="true"?"not-allowed":"pointer","&:hover":{backgroundColor:s=="true"?"#FFAA5D":"#EE994C"},"& .MuiBox-root":{color:"#474747 !important",textTransform:"none","&:hover":{backgroundColor:s=="true"?"#FFAA5D":"#EE994C"}}})),_o=E(y)({width:"90%",height:"calc(100% - 73px)",margin:"auto",marginTop:"20px"}),ko=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}];function Bo(s){const ce=wt(),j=ce.state,[U,_]=l.useState(!1),[C,R]=l.useState(null),[m,$]=l.useState(null),[o,p]=l.useState(j.chapterInfo),[b,g]=l.useState([]),[x,ue]=l.useState(null),[F,W]=l.useState(),[V,D]=l.useState([]),[A,q]=l.useState([]),[de,G]=l.useState([]),[N,ye]=l.useState([]),[he,Oe]=l.useState([]),[$e,pe]=l.useState(""),[ee,Ke]=l.useState([]),[te,we]=l.useState([]),[B,We]=l.useState(s.currentBook),[L,Ne]=l.useState(j.subBookInfo.subBookId),[O,oe]=l.useState(j.chapterId),[d,Re]=l.useState(s.currentLanguage),[k,qe]=l.useState(j.isImport),[Ge,me]=l.useState(!1),[ge,ae]=l.useState(!1),[ze,je]=l.useState(0),[Qe,be]=l.useState(0),[Ye,z]=l.useState(""),[Xe,re]=l.useState(""),[Ze,Fe]=l.useState(""),[Je,ne]=l.useState(""),fe=l.useMemo(()=>ce.state.languages,[s.currentUser]),et=Nt(),xe=Rt(),Ae=l.useCallback(async e=>(_(!0),await ie.getChapterInfoByChapterId(e)),[O]),Q=l.useCallback(()=>{var n,i,S;const e=(n=C==null?void 0:C.subBooks)==null?void 0:n.find(h=>h.subBookId==L);let t=[],r=[];const a=((i=C==null?void 0:C.bookTitle)==null?void 0:i.en)=="Qur'an"||((S=C==null?void 0:C.bookTitle)==null?void 0:S.en)=="Zabur";if(d=="en")a?(t=["SubBook_English","SubBook_Transliteration","Chapter_Number","Verse_Number","Verse_English"],r=b==null?void 0:b.map(h=>{var c,f,T,w,H;return{SubBook_English:((c=e==null?void 0:e.subBookTitle)==null?void 0:c.en)||"",SubBook_Transliteration:((f=e==null?void 0:e.subBookTitle)==null?void 0:f.transliteration)||"",Chapter_Number:((T=o==null?void 0:o.chapterNumber)==null?void 0:T.toString())||"1",Verse_Number:((w=h==null?void 0:h.verseNumber)==null?void 0:w.toString())||"1",Verse_English:((H=h==null?void 0:h.verseText)==null?void 0:H.en)||""}})):(t=["SubBook_English","Chapter_Number","Verse_Number","Verse_English"],r=b==null?void 0:b.map(h=>{var c,f,T,w;return{SubBook_English:((c=e==null?void 0:e.subBookTitle)==null?void 0:c.en)||"",Chapter_Number:((f=o==null?void 0:o.chapterNumber)==null?void 0:f.toString())||"1",Verse_Number:((T=h==null?void 0:h.verseNumber)==null?void 0:T.toString())||"1",Verse_English:((w=h==null?void 0:h.verseText)==null?void 0:w.en)||""}}));else{const h=M(d);a?(t=["SubBook_English",`SubBook_${h}`,"SubBook_Transliteration","Chapter_Number","Verse_Number",`Verse_${h}`],r=b==null?void 0:b.map(c=>{var f,T,w,H,Y,X,Z,De;return{SubBook_English:((f=e==null?void 0:e.subBookTitle)==null?void 0:f.en)||"",[`SubBook_${h}`]:((T=e==null?void 0:e.subBookTitle)==null?void 0:T[d])||((w=e==null?void 0:e.subBookTitle)==null?void 0:w.en)||"",SubBook_Transliteration:a&&((H=e==null?void 0:e.subBookTitle)==null?void 0:H.transliteration)||"",Chapter_Number:((Y=o==null?void 0:o.chapterNumber)==null?void 0:Y.toString())||"1",Verse_Number:((X=c==null?void 0:c.verseNumber)==null?void 0:X.toString())||"1",[`Verse_${h}`]:((Z=c==null?void 0:c.verseText)==null?void 0:Z[d])||((De=c==null?void 0:c.verseText)==null?void 0:De.en)||""}})):(t=["SubBook_English",`SubBook_${h}`,"Chapter_Number","Verse_Number",`Verse_${h}`],r=b==null?void 0:b.map(c=>{var f,T,w,H,Y,X,Z;return{SubBook_English:((f=e==null?void 0:e.subBookTitle)==null?void 0:f.en)||"",[`SubBook_${h}`]:((T=e==null?void 0:e.subBookTitle)==null?void 0:T[d])||((w=e==null?void 0:e.subBookTitle)==null?void 0:w.en)||"",Chapter_Number:((H=o==null?void 0:o.chapterNumber)==null?void 0:H.toString())||"1",Verse_Number:((Y=c==null?void 0:c.verseNumber)==null?void 0:Y.toString())||"1",[`Verse_${h}`]:((X=c==null?void 0:c.verseText)==null?void 0:X[d])||((Z=c==null?void 0:c.verseText)==null?void 0:Z.en)||""}}))}D(t||[]),q(r||[])},[C,o,b,L,d,k]),tt=l.useCallback(()=>{const e=`${B}-${le(L,ee)}-${le(O,te)}`,t=se.json_to_sheet(A),r=se.book_new();se.book_append_sheet(r,t,"Sheet1");const a=$t(r,{bookType:"xlsx",type:"array"}),n=new Blob([a],{type:"application/octet-stream"});oo.saveAs(n,`${e}.xlsx`),P.success(jt,{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})},[A,V]);l.useEffect(()=>{window.scrollTo({top:0})},[]),l.useEffect(()=>{(async()=>{var t;_(!0);try{const r=s.bookInfos.find(a=>a.bookTitle.en==B);if(r){R(r);const n=Array.from(new Set(r.subBooks.map(i=>i.subBookId))).map(i=>r.subBooks.find(S=>S.subBookId===i)).map(i=>{var S;return{label:(S=i.subBookTitle)==null?void 0:S[d],value:i.subBookId}});Ke(n),n.some(i=>i.value===L)||Ne(((t=n[0])==null?void 0:t.value)||"")}if(O){const a=s.chapterInfos.find(n=>n.chapterId==O);a?p(a):Ae(O).then(n=>{p(n),s.dispatch({type:I.ADD_CHAPTERINFO,payload:{chapterInfo:n}}),_(!1)}).catch(()=>{_(!1)})}Q()}catch{P.error("Failed to load book information",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})}finally{_(!1)}})()},[B]),l.useEffect(()=>{var a,n,i,S,h;const e=s.bookInfos.find(c=>(c==null?void 0:c.bookTitle.en)==s.currentBook),t=e==null?void 0:e.subBooks.find(c=>c.subBookId==L);t&&$(t),z(((a=t==null?void 0:t.subBookTitle)==null?void 0:a[d])||""),re(((n=t==null?void 0:t.subBookTitle)==null?void 0:n.ar)||""),ne(((i=t==null?void 0:t.subBookTitle)==null?void 0:i.en)||""),Fe(((S=t==null?void 0:t.subBookTitle)==null?void 0:S.transliteration)||"");const r=(h=t==null?void 0:t.chapterInfos)==null?void 0:h.map(c=>({value:c.chapterId,label:c.chapterNumber.toString()}));r&&j.chapterId?(we(r),oe(j.chapterId)):r&&(we(r),oe(r[0].value)),Q()},[L,s.currentBook]),l.useEffect(()=>{D([]),q([]);const e=s.chapterInfos.find(t=>t.chapterId==O);e?(p(e),g((e==null?void 0:e.verses)||[])):Ae(O).then(t=>{p(t),g(t.verses||[]),s.dispatch({type:I.ADD_CHAPTERINFO,payload:{chapterInfo:t}}),_(!1)}).catch(()=>{D([]),q([]),je(0),be(0),me(!1),ae(!1),P.warning("Chapter is empty. Click Import to add verses.",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),_(!1)}),j.chapterId="",Q()},[s.chapterInfos,O]),l.useEffect(()=>{var r,a,n,i,S,h,c;be(0),Q();const e=((r=o==null?void 0:o.chapterIsCompleted)==null?void 0:r[d])||!1,t=((a=o==null?void 0:o.chapterIsPublished)==null?void 0:a[d])||!1;me(e),ae(t),je(((n=o==null?void 0:o.verses)==null?void 0:n.length)||0),(i=o.verses)==null||i.map(f=>be(T=>{var w;return(w=f==null?void 0:f.verseText)!=null&&w[d]?T+1:T})),z(((S=m==null?void 0:m.subBookTitle)==null?void 0:S[d])||""),re(((h=m==null?void 0:m.subBookTitle)==null?void 0:h.ar)||""),ne(((c=m==null?void 0:m.subBookTitle)==null?void 0:c.en)||""),oe(o.chapterId)},[b,C,m,o,d]),l.useEffect(()=>{k||Q()},[k]),l.useEffect(()=>{const e=(F==null?void 0:F.target.files)&&(F==null?void 0:F.target.files[0]);e&&ue(e)},[F,k]),l.useEffect(()=>{var e;if(k){Oe([]);const t=N[0],r=(e=fe.find(a=>a.value==d))==null?void 0:e.label;r!="English"&&G(a=>[...a,"SubBook_English"]),t&&Object.keys(t).forEach(a=>{a=="SubBook_Transliteration"&&G(n=>[...n,a]),r&&a.includes(r)&&G(n=>[...n,a])}),G(a=>[...a,"Chapter_Number","Verse_Number"]),N.forEach(a=>{const n={};n.SubBook_English=a.SubBook_English,Object.keys(a).forEach(i=>{i.includes(r)&&(n[i]=a[i]),i=="SubBook_Transliteration"&&r=="English"&&(n[i]=a[i])}),n.Chapter_Number=a.Chapter_Number,n.Verse_Number=a.Verse_Number,Oe(i=>[...i,n])})}},[N,d,k]),l.useEffect(()=>{if(k){if(G([]),!x)return;const e=x.name,t=e.substr(e.lastIndexOf(".")+1).toLowerCase();t==="csv"?pt(x):["xlsx","xls"].includes(t)?mt(x):console.error("Unsupported file format")}},[x,d,k]),l.useEffect(()=>{if(k){const e=["SubBook_English",`SubBook_${M(d)}`,"Chapter_Number","Verse_Number",`Verse_${M(d)}`].filter((r,a,n)=>r&&n.indexOf(r)===a);let t="";if(N.length>1){const r=Object.keys(N[0]),a=e.filter(f=>!r.includes(f));a.forEach(f=>t+=`${f}, `),t&&(t=`You missed the ${a.length>=2?"fields":"field"}: `+t);const n=N[0][`SubBook_${M(d)}`];N.find(f=>f[`SubBook_${M(d)}`]!=n)&&(t=Dt);const S=N[0].SubBook_Transliteration;N.find(f=>f.SubBook_Transliteration!=S)&&(t=Pt);const c=de.includes("SubBook_Transliteration");s.currentBook==Se||s.currentBook==Ce?(c||(t=vt),N.some(T=>T.Chapter_Number!="1")&&(t=Ht),pe(t)):(c&&(t=Ft),pe(t))}N.length==0&&(t=At,pe(t))}},[A,de,k,d,N,he]);const ot=e=>{We(e),xe("/admin/bookoverview"),s.dispatch({type:I.SET_BOOK,payload:{bookTitle:e}})},at=e=>{const t=e.target.value;Ne(t)},rt=e=>{const t=e.target.value;oe(t)},nt=e=>{const t=e.target.value;Re(t),D([]),q([]),s.dispatch({type:I.SET_CURRENT_LANGUAGE,payload:{language:t}})},Le=e=>{const t={chapterAudio:e.audio,chapterId:e._id,chapterNumber:e.chapterNumber,chapterTranslated:e.isTranslated,chapterIsCompleted:e.isCompleted,chapterIsPublished:e.isPublished,subBookId:e.subBook,verses:e.verses};p(t);const r=s.bookInfos.map(a=>({...a,subBooks:a.subBooks.map(n=>({...n,chapterInfos:n.chapterInfos.map(i=>i.chapterId===O?{...i,...t}:i)}))}));s.dispatch({type:I.SET_BOOKINFOS,payload:{bookInfos:r}}),s.dispatch({type:I.UPDATE_CHAPTERINFOS,payload:{chapterInfo:t}})},st=e=>{const t={chapterInfos:(m==null?void 0:m.chapterInfos)||[],subBookId:(m==null?void 0:m.subBookId)||"",subBookNumber:(m==null?void 0:m.subBookNumber)||1,subBookTitle:e.title,noChapter:!0},r=s.bookInfos.map(a=>({...a,subBooks:a.subBooks.map(n=>n.subBookId==L?{...n,...t}:n)}));s.dispatch({type:I.SET_BOOKINFOS,payload:{bookInfos:r}})},it=async e=>{me(e),ae(e&&ge),_(!0);const t={chapterNumber:o.chapterNumber||1,subBook:o.subBookId||"",audio:o.chapterAudio,isTranslated:o.chapterTranslated,isCompleted:{...o.chapterIsCompleted,[d]:e},isPublished:{...o.chapterIsPublished,[d]:e&&ge}};ie.updateChapterInfo({chapterId:O,newChapterInfo:t}).then(r=>{Le(r),_(!1)}).catch(()=>{P.error("Failed to complete the chapter",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),_(!1)})},lt=async e=>{ae(e);const t={chapterNumber:o.chapterNumber||1,subBook:o.subBookId||"",audio:o.chapterAudio,isTranslated:o.chapterTranslated,isCompleted:o.chapterIsCompleted,isPublished:{...o.chapterIsPublished,[d]:e}};ie.updateChapterInfo({chapterId:O,newChapterInfo:t}).then(r=>{Le(r),_(!1)}).catch(()=>{P.error("Failed to publish the chapter",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),_(!1)})},ct=e=>{d=="en"?ne(e):d=="ar"&&re(e),z(e)},ut=e=>{d=="ar"&&z(e),re(e)},dt=e=>{d=="en"&&z(e),ne(e)},ht=(e,t,r,a)=>{const n={[`${d}`]:e,ar:t,transliteration:r,en:a},i={...m,subBookTitle:n},S={title:i.subBookTitle,number:i.subBookNumber||1,book:(C==null?void 0:C.bookId)||"",noChapter:!0};m!=null&&m.subBookId?(_(!0),ie.updateSubBookInfo({subBookId:m==null?void 0:m.subBookId,newSubBookInfo:S}).then(h=>{st(h),_(!1)}).catch(()=>{P.error("Failed to update the summary of chapter",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),_(!1)})):P.error(Mt,{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})},Ie=e=>{qe(e),D([]),q([])},pt=e=>{try{const t=new FileReader;t.onload=r=>{var n;const a=(n=r.target)==null?void 0:n.result;if(!a){console.error("Failed to read file");return}Kt.parse(a,{complete:i=>{if(i.errors.length>0){console.error("CSV parsing errors:",i.errors);return}const S=i.data;ye(S)},header:!0,skipEmptyLines:!0,transformHeader:i=>i.trim(),transform:i=>i.trim()})},t.onerror=r=>{console.error("Error reading file:",r)},t.readAsText(e)}catch(t){console.error("Error parsing CSV file:",t)}},mt=l.useCallback(async e=>{try{const t=new FileReader;t.onload=r=>{var c;const a=(c=r.target)==null?void 0:c.result;if(!a){console.error("Failed to read file");return}const n=Wt(a,{type:"array"}),i=n.SheetNames[0],S=n.Sheets[i],h=se.sheet_to_json(S);ye(h)},t.onerror=r=>{console.error("Error reading file:",r)},t.readAsArrayBuffer(e)}catch(t){console.error("Error parsing Excel file:",t)}},[x]),gt=l.useCallback(()=>{Zt.saveBook({bookInfos:he,bookTitle:s.currentBook,language:M(d)}).then(()=>{P.success("Saved successfully!",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})}).catch(()=>{P.success("Failed to save book",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})})},[d,he]),bt=()=>{localStorage.removeItem(Gt),s.dispatch({type:I.RESET_USER}),s.dispatch({type:I.RESET_BOOK}),s.dispatch({type:I.RESET_APP_TEXT_PAGES}),xe("/admin")},ft=()=>u.jsx(Ut,{isLoggedIn:!0,username:s.currentUser.username,isAdmin:s.currentUser.isAdmin,onLogOut:bt}),xt=()=>u.jsx(ho,{children:u.jsx(to,{books:zt.map(e=>({bookTitle:e.bookTitle,onClick:()=>{ot(e.value)}})),selectedBook:B})}),St=()=>k&&u.jsx(po,{children:u.jsx(K,{color:"red",fontFamily:"'Baloo Da 2'",fontWeight:"bold",children:B==Se||B==Ce?`For ${B} you can upload only one chapter at once`:`For ${B} you can upload multiple chapters of the same sub-book at once`})}),Ct=()=>u.jsxs(go,{children:[u.jsxs(bo,{onClick:()=>xe("/admin/bookoverview"),children:[u.jsx(Qt,{}),u.jsx(K,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:"overview"})]}),!k&&u.jsxs(fo,{children:[u.jsx(K,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:B==_e||B==ke?"Go to: ":"Go to Surah: "}),u.jsx(Be,{label:"",options:ee,value:ee.find(e=>e.value===L)?L:"",backgroundColor:"#fff",textColor:"#155D74",onChange:at}),(B==_e||B==ke)&&u.jsx(Be,{label:"",options:te,value:te.find(e=>e.value===O)?O:"",backgroundColor:"#fff",textColor:"#155D74",onChange:rt}),u.jsx(Be,{label:"",options:fe,value:d,backgroundColor:"#fff",textColor:"#155D74",onChange:nt})]})]}),_t=()=>!k&&u.jsx(Yt,{currentUser:s.currentUser,currentBook:s.currentBook,totalCountVerse:ze,languageCountVerse:Qe,isComplete:Ge,isPublish:ge,isSpecialBook:B==Se||B==Ce,currentLanguage:d,arabicChapterTitle:Xe,englishChapterTitle:Je,transliteration:Ze,currentChapterTitle:Ye,handleComplete:e=>it(e),handlePublish:e=>lt(e),handleCurrentChapterTitleChange:e=>ct(e),handleArabicChapterTitleChange:e=>ut(e),handleTransliterationChapterTitleChange:e=>Fe(e),handleEnglishChapterTitleChange:e=>dt(e),handleUpdateChapterSummary:ht}),kt=()=>u.jsxs(xo,{children:[u.jsxs(Pe,{active:k?"false":"true",onClick:()=>Ie(!1),children:[u.jsx(Me,{}),u.jsx(K,{fontFamily:"'Baloo Da 2'",children:"Database"})]}),u.jsxs(Pe,{active:k?"true":"false",onClick:()=>Ie(!0),children:[u.jsx(Xt,{}),u.jsx(K,{fontFamily:"'Baloo Da 2'",children:"Import"})]})]}),Bt=()=>!k&&u.jsxs(So,{children:[u.jsx(K,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:`${B} - 
            ${le(L,ee)} 
            ${B==_e||B==ke?le(O,te):""}`}),u.jsx(Co,{isdisable:V.length?"false":"true",children:u.jsx(Vt,{label:"Export to Excel",disabled:!V.length,icon:u.jsx(Ve,{}),onClick:tt})})]}),Tt=()=>!k&&u.jsx(mo,{children:u.jsx(Jt,{headers:V,rows:A})}),Et=()=>k&&u.jsx(_o,{children:u.jsx(qt,{language:d,languageLabel:M(d),languages:fe,file:x,parsedData:N,headers:de,error:$e,onChangeLanguage:e=>Re(e.target.value),onChangeFile:e=>W(e),onUpload:gt})}),yt=()=>u.jsxs(uo,{children:[u.jsx(eo,{tools:ko}),xt(),kt(),Ct(),St(),_t(),Bt(),Tt(),Et()]});return u.jsxs(u.Fragment,{children:[u.jsxs(co,{flexDirection:et?"column":"row",children:[ft(),yt()]}),u.jsx(Lt,{}),U&&u.jsx(It,{})]})}function To(s){return{dispatch:s}}function Eo(s){return{currentUser:s.user.currentUser,bookInfos:s.book.bookInfos,chapterInfos:s.book.chapterInfos,currentBook:s.book.book,currentLanguage:s.book.language}}const Vo=Ot(Eo,To)(Bo);export{Vo as default};
