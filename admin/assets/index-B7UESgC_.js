import{O as Tt,j as u,a as c}from"./createTheme-DrRrGbl4.js";import{r as _t,s as E,B as y,t as Et,O as yt,K as Ot,u as Nt,A as D,P as wt,H,F as I,R as Rt,U as jt,Q as Ft,E as At,V as Lt,W as It,X as Pt,Y as Dt,w as Ht,T as K,q as Ut,Z as Vt}from"./App-BwJIMztZ.js";import{u as se,w as Mt,P as $t,r as vt,U as Kt}from"./index-2F_loPEn.js";import{j as J,B as xe,h as Se,A as Wt,i as Gt,k as Ce,n as ke}from"./index-TrJ_ia1S.js";import{d as qt,S as zt,a as Qt}from"./index-DamM7nKE.js";import{b as ie,d as Yt}from"./book.services-c1oRKW6P.js";import{t as Xt}from"./translator.services-BBdJsT-4.js";import{a as $,b as le}from"./images-ZhCTvYdf.js";import{S as Be}from"./index-BRqJwjJq.js";import{T as Zt}from"./index-hOaCEgrR.js";import{T as Jt,B as eo}from"./index-BH1edEoK.js";import"./index-Bu5tq7oA.js";import"./TableContainer-D8HSW0hd.js";var De={exports:{}};(function(s,ce){(function(j,V){V()})(J,function(){function j(o,h){return typeof h>"u"?h={autoBom:!1}:typeof h!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),h={autoBom:!h}),h.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function V(o,h,b){var g=new XMLHttpRequest;g.open("GET",o),g.responseType="blob",g.onload=function(){v(g.response,h,b)},g.onerror=function(){console.error("could not download file")},g.send()}function k(o){var h=new XMLHttpRequest;h.open("HEAD",o,!1);try{h.send()}catch{}return 200<=h.status&&299>=h.status}function C(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var h=document.createEvent("MouseEvents");h.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(h)}}var R=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof J=="object"&&J.global===J?J:void 0,m=R.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),v=R.saveAs||(typeof window!="object"||window!==R?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(o,h,b){var g=R.URL||R.webkitURL,x=document.createElement("a");h=h||o.name||"download",x.download=h,x.rel="noopener",typeof o=="string"?(x.href=o,x.origin===location.origin?C(x):k(x.href)?V(o,h,b):C(x,x.target="_blank")):(x.href=g.createObjectURL(o),setTimeout(function(){g.revokeObjectURL(x.href)},4e4),setTimeout(function(){C(x)},0))}:"msSaveOrOpenBlob"in navigator?function(o,h,b){if(h=h||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(j(o,b),h);else if(k(o))V(o,h,b);else{var g=document.createElement("a");g.href=o,g.target="_blank",setTimeout(function(){C(g)})}}:function(o,h,b,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof o=="string")return V(o,h,b);var x=o.type==="application/octet-stream",ue=/constructor/i.test(R.HTMLElement)||R.safari,F=/CriOS\/[\d]+/.test(navigator.userAgent);if((F||x&&ue||m)&&typeof FileReader<"u"){var W=new FileReader;W.onloadend=function(){var A=W.result;A=F?A:A.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=A:location=A,g=null},W.readAsDataURL(o)}else{var M=R.URL||R.webkitURL,P=M.createObjectURL(o);g?g.location=P:location.href=P,g=null,setTimeout(function(){M.revokeObjectURL(P)},4e4)}});R.saveAs=v.saveAs=v,s.exports=v})})(De);var to=De.exports,Te={},oo=Tt;Object.defineProperty(Te,"__esModule",{value:!0});var He=Te.default=void 0,ao=oo(_t()),ro=u;He=Te.default=(0,ao.default)((0,ro.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");const no=E(y)({position:"relative",minHeight:"calc(100vh - 37px)",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),so=E(y)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),io=E(y)({margin:"20px 40px"}),lo=E(y)({backgroundColor:"#F0F5FB",margin:"20px 40px",padding:"20px",boxSiaing:"border-box"}),co=E(y)({margin:"20px 40px",display:"flex",justifyContent:"center",boxSizing:"border-box"}),uo=E(y)({margin:"20px 40px",display:"flex",alignItems:"center","@media screen and (max-width: 800px)":{display:"block"}}),po=E(y)({height:"40px",display:"flex",alignItems:"center",cursor:"pointer",marginRight:"250px",transitionDuration:".25s","&:hover":{transform:"scale(1.1)"},"& .MuiSvgIcon-root":{width:"16px",marginRight:"10px",fill:"#155D74"},"@media screen and (max-width: 1050px)":{marginRight:"100px"},"@media screen and (max-width: 900px)":{marginRight:"30px"}}),ho=E(y)({display:"flex",justifyContent:"space-between",alignItems:"center","& >.MuiBox-root":{minWidth:"100px",marginRight:"20px"},"& > .MuiFormControl-root":{marginRight:"20px"},"@media screen and (max-width: 900px)":{"& >.MuiBox-root":{minWidth:"50px",marginRight:"10px"}},"@media screen and (max-width: 650px)":{display:"block","& > .MuiFormControl-root":{alignItems:"start","& .MuiInputBase-root":{width:"100%"}}}});E(y)({border:"1px solid #1B7695",backgroundColor:"#F0F5FB",boxSizing:"border-box",padding:"20px",margin:"20px 40px"});E(y)({display:"flex",alignItems:"center",justifyContent:"space-between",width:"300px","& >.MuiBox-root>:nth-of-type(2)":{marginRight:"25px"}});const mo=E(y)({display:"flex",alignItems:"center",margin:"50px 40px 20px 40px"}),Pe=E(y)(({active:s})=>({display:"flex",alignItems:"center",justifyContent:"center",width:"120px",padding:"5px",boxSizing:"border-box",border:"1px solid #474747",backgroundColor:s=="true"?"#1B7695":"#F0F5FB",color:s=="true"?"#FFF":"#474747",cursor:"pointer","& .MuiSvgIcon-root":{fill:s=="true"?"#FFF":"#474747",marginRight:"10px"}})),go=E(y)({display:"flex",justifyContent:"right",alignItems:"center",boxSizing:"border-box",margin:"20px 40px"}),bo=E(y)(({isdisable:s})=>({display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"25px",padding:"0px 10px",boxSizing:"border-box",backgroundColor:"#FFAA5D",cursor:s=="true"?"not-allowed":"pointer","&:hover":{backgroundColor:s=="true"?"#FFAA5D":"#EE994C"},"& .MuiBox-root":{color:"#474747 !important",textTransform:"none","&:hover":{backgroundColor:s=="true"?"#FFAA5D":"#EE994C"}}})),fo=E(y)({width:"90%",height:"calc(100% - 73px)",margin:"auto",marginTop:"20px"}),xo=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}];function So(s){const ce=yt(),j=ce.state,[V,k]=c.useState(!1),[C,R]=c.useState(null),[m,v]=c.useState(null),[o,h]=c.useState(j.chapterInfo),[b,g]=c.useState([]),[x,ue]=c.useState(null),[F,W]=c.useState(),[M,P]=c.useState([]),[A,G]=c.useState([]),[de,q]=c.useState([]),[w,_e]=c.useState([]),[Ee,ye]=c.useState([]),[Ue,pe]=c.useState(""),[ee,Ve]=c.useState([]),[te,Oe]=c.useState([]),[T,Me]=c.useState(s.currentBook),[L,Ne]=c.useState(j.subBookInfo.subBookId),[O,oe]=c.useState(j.chapterId),[d,we]=c.useState(s.currentLanguage),[B,$e]=c.useState(j.isImport),[ve,he]=c.useState(!1),[me,ae]=c.useState(!1),[Ke,Re]=c.useState(0),[We,ge]=c.useState(0),[Ge,z]=c.useState(""),[qe,re]=c.useState(""),[ze,je]=c.useState(""),[Qe,ne]=c.useState(""),be=c.useMemo(()=>ce.state.languages,[s.currentUser]),Ye=Ot(),fe=Nt(),Fe=c.useCallback(async e=>(k(!0),await ie.getChapterInfoByChapterId(e)),[O]),Q=c.useCallback(()=>{var n,i,S;const e=(n=C==null?void 0:C.subBooks)==null?void 0:n.find(p=>p.subBookId==L);let t=[],r=[];const a=((i=C==null?void 0:C.bookTitle)==null?void 0:i.en)=="Qur'an"||((S=C==null?void 0:C.bookTitle)==null?void 0:S.en)=="Zabur";if(d=="en")a?(t=["SubBook_English","SubBook_Transliteration","Chapter_Number","Verse_Number","Verse_English"],r=b==null?void 0:b.map(p=>{var l,f,_,N,U;return{SubBook_English:((l=e==null?void 0:e.subBookTitle)==null?void 0:l.en)||"",SubBook_Transliteration:((f=e==null?void 0:e.subBookTitle)==null?void 0:f.transliteration)||"",Chapter_Number:((_=o==null?void 0:o.chapterNumber)==null?void 0:_.toString())||"1",Verse_Number:((N=p==null?void 0:p.verseNumber)==null?void 0:N.toString())||"1",Verse_English:((U=p==null?void 0:p.verseText)==null?void 0:U.en)||""}})):(t=["SubBook_English","Chapter_Number","Verse_Number","Verse_English"],r=b==null?void 0:b.map(p=>{var l,f,_,N;return{SubBook_English:((l=e==null?void 0:e.subBookTitle)==null?void 0:l.en)||"",Chapter_Number:((f=o==null?void 0:o.chapterNumber)==null?void 0:f.toString())||"1",Verse_Number:((_=p==null?void 0:p.verseNumber)==null?void 0:_.toString())||"1",Verse_English:((N=p==null?void 0:p.verseText)==null?void 0:N.en)||""}}));else{const p=$(d);a?(t=["SubBook_English",`SubBook_${p}`,"SubBook_Transliteration","Chapter_Number","Verse_Number",`Verse_${p}`],r=b==null?void 0:b.map(l=>{var f,_,N,U,Y,X,Z,Ie;return{SubBook_English:((f=e==null?void 0:e.subBookTitle)==null?void 0:f.en)||"",[`SubBook_${p}`]:((_=e==null?void 0:e.subBookTitle)==null?void 0:_[d])||((N=e==null?void 0:e.subBookTitle)==null?void 0:N.en)||"",SubBook_Transliteration:a&&((U=e==null?void 0:e.subBookTitle)==null?void 0:U.transliteration)||"",Chapter_Number:((Y=o==null?void 0:o.chapterNumber)==null?void 0:Y.toString())||"1",Verse_Number:((X=l==null?void 0:l.verseNumber)==null?void 0:X.toString())||"1",[`Verse_${p}`]:((Z=l==null?void 0:l.verseText)==null?void 0:Z[d])||((Ie=l==null?void 0:l.verseText)==null?void 0:Ie.en)||""}})):(t=["SubBook_English",`SubBook_${p}`,"Chapter_Number","Verse_Number",`Verse_${p}`],r=b==null?void 0:b.map(l=>{var f,_,N,U,Y,X,Z;return{SubBook_English:((f=e==null?void 0:e.subBookTitle)==null?void 0:f.en)||"",[`SubBook_${p}`]:((_=e==null?void 0:e.subBookTitle)==null?void 0:_[d])||((N=e==null?void 0:e.subBookTitle)==null?void 0:N.en)||"",Chapter_Number:((U=o==null?void 0:o.chapterNumber)==null?void 0:U.toString())||"1",Verse_Number:((Y=l==null?void 0:l.verseNumber)==null?void 0:Y.toString())||"1",[`Verse_${p}`]:((X=l==null?void 0:l.verseText)==null?void 0:X[d])||((Z=l==null?void 0:l.verseText)==null?void 0:Z.en)||""}}))}P(t||[]),G(r||[])},[C,o,b,L,d,B]),Xe=c.useCallback(()=>{const e=`${T}-${le(L,ee)}-${le(O,te)}`,t=se.json_to_sheet(A),r=se.book_new();se.book_append_sheet(r,t,"Sheet1");const a=Mt(r,{bookType:"xlsx",type:"array"}),n=new Blob([a],{type:"application/octet-stream"});to.saveAs(n,`${e}.xlsx`),D.success(wt,{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})},[A,M]);c.useEffect(()=>{window.scrollTo({top:0})},[]),c.useEffect(()=>{(async()=>{var t;k(!0);try{const r=s.bookInfos.find(a=>a.bookTitle.en==T);if(r){R(r);const n=Array.from(new Set(r.subBooks.map(i=>i.subBookId))).map(i=>r.subBooks.find(S=>S.subBookId===i)).map(i=>{var S;return{label:(S=i.subBookTitle)==null?void 0:S[d],value:i.subBookId}});Ve(n),n.some(i=>i.value===L)||Ne(((t=n[0])==null?void 0:t.value)||"")}if(O){const a=s.chapterInfos.find(n=>n.chapterId==O);a?h(a):Fe(O).then(n=>{h(n),s.dispatch({type:I.ADD_CHAPTERINFO,payload:{chapterInfo:n}}),k(!1)}).catch(()=>{k(!1)})}Q()}catch{D.error("Failed to load book information",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})}finally{k(!1)}})()},[T]),c.useEffect(()=>{var a,n,i,S,p;const e=s.bookInfos.find(l=>(l==null?void 0:l.bookTitle.en)==s.currentBook),t=e==null?void 0:e.subBooks.find(l=>l.subBookId==L);t&&v(t),z(((a=t==null?void 0:t.subBookTitle)==null?void 0:a[d])||""),re(((n=t==null?void 0:t.subBookTitle)==null?void 0:n.ar)||""),ne(((i=t==null?void 0:t.subBookTitle)==null?void 0:i.en)||""),je(((S=t==null?void 0:t.subBookTitle)==null?void 0:S.transliteration)||"");const r=(p=t==null?void 0:t.chapterInfos)==null?void 0:p.map(l=>({value:l.chapterId,label:l.chapterNumber.toString()}));r&&j.chapterId?(Oe(r),oe(j.chapterId)):r&&(Oe(r),oe(r[0].value)),Q()},[L,s.bookInfos,s.currentBook]),c.useEffect(()=>{P([]),G([]);const e=s.chapterInfos.find(t=>t.chapterId==O);e?(h(e),g((e==null?void 0:e.verses)||[])):Fe(O).then(t=>{h(t),g(t.verses||[]),s.dispatch({type:I.ADD_CHAPTERINFO,payload:{chapterInfo:t}}),k(!1)}).catch(()=>{P([]),G([]),Re(0),ge(0),he(!1),ae(!1),D.warning("Chapter is empty. Click Import to add verses.",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),k(!1)}),j.chapterId="",Q()},[O]),c.useEffect(()=>{var r,a,n,i,S,p,l;ge(0),Q();const e=((r=o==null?void 0:o.chapterIsCompleted)==null?void 0:r[d])||!1,t=((a=o==null?void 0:o.chapterIsPublished)==null?void 0:a[d])||!1;he(e),ae(t),Re(((n=o==null?void 0:o.verses)==null?void 0:n.length)||0),(i=o.verses)==null||i.map(f=>ge(_=>{var N;return(N=f==null?void 0:f.verseText)!=null&&N[d]?_+1:_})),z(((S=m==null?void 0:m.subBookTitle)==null?void 0:S[d])||""),re(((p=m==null?void 0:m.subBookTitle)==null?void 0:p.ar)||""),ne(((l=m==null?void 0:m.subBookTitle)==null?void 0:l.en)||""),oe(o.chapterId)},[b,C,m,o,d]),c.useEffect(()=>{B||Q()},[B]),c.useEffect(()=>{const e=(F==null?void 0:F.target.files)&&(F==null?void 0:F.target.files[0]);e&&ue(e)},[F,B]),c.useEffect(()=>{var e;if(B){ye([]);const t=w[0],r=(e=be.find(a=>a.value==d))==null?void 0:e.label;r!="English"&&q(a=>[...a,"SubBook_English"]),t&&Object.keys(t).forEach(a=>{a=="SubBook_Transliteration"&&q(n=>[...n,a]),r&&a.includes(r)&&q(n=>[...n,a])}),q(a=>[...a,"Chapter_Number","Verse_Number"]),w.forEach(a=>{const n={};n.SubBook_English=a.SubBook_English,Object.keys(a).forEach(i=>{i.includes(r)&&(n[i]=a[i]),i=="SubBook_Transliteration"&&r=="English"&&(n[i]=a[i])}),n.Chapter_Number=a.Chapter_Number,n.Verse_Number=a.Verse_Number,ye(i=>[...i,n])})}},[w,d,B]),c.useEffect(()=>{if(B){if(q([]),!x)return;const e=x.name,t=e.substr(e.lastIndexOf(".")+1).toLowerCase();t==="csv"?ct(x):["xlsx","xls"].includes(t)?ut(x):console.error("Unsupported file format")}},[x,d,B]),c.useEffect(()=>{if(B){const e=["SubBook_English",`SubBook_${$(d)}`,"Chapter_Number","Verse_Number",`Verse_${$(d)}`].filter((r,a,n)=>r&&n.indexOf(r)===a);let t="";if(w.length>1){const r=Object.keys(w[0]),a=e.filter(f=>!r.includes(f));a.forEach(f=>t+=`${f}, `),t&&(t=`You missed the ${a.length>=2?"fields":"field"}: `+t);const n=w[0][`SubBook_${$(d)}`];w.find(f=>f[`SubBook_${$(d)}`]!=n)&&(t=Lt);const S=w[0].SubBook_Transliteration;w.find(f=>f.SubBook_Transliteration!=S)&&(t=It);const l=de.includes("SubBook_Transliteration");s.currentBook==xe||s.currentBook==Se?(l||(t=Pt),w.some(_=>_.Chapter_Number!="1")&&(t=Dt),pe(t)):(l&&(t=Rt),pe(t))}w.length==0&&(t=jt,pe(t))}},[A,de,B,d,w,Ee]);const Ze=e=>{Me(e),fe("/admin/bookoverview"),s.dispatch({type:I.SET_BOOK,payload:{bookTitle:e}})},Je=e=>{const t=e.target.value;Ne(t)},et=e=>{const t=e.target.value;oe(t)},tt=e=>{const t=e.target.value;we(t),P([]),G([]),s.dispatch({type:I.SET_CURRENT_LANGUAGE,payload:{language:t}})},Ae=e=>{const t={chapterAudio:e.audio,chapterId:e._id,chapterNumber:e.chapterNumber,chapterTranslated:e.isTranslated,chapterIsCompleted:e.isCompleted,chapterIsPublished:e.isPublished,subBookId:e.subBook},r=s.bookInfos.map(a=>({...a,subBooks:a.subBooks.map(n=>({...n,chapterInfos:n.chapterInfos.map(i=>i.chapterId===O?{...i,...t}:i)}))}));s.dispatch({type:I.SET_BOOKINFOS,payload:{bookInfos:r}}),s.dispatch({type:I.UPDATE_CHAPTERINFOS,payload:{chapterInfo:t}})},ot=e=>{const t={chapterInfos:(m==null?void 0:m.chapterInfos)||[],subBookId:(m==null?void 0:m.subBookId)||"",subBookNumber:(m==null?void 0:m.subBookNumber)||1,subBookTitle:e.title,noChapter:!0},r=s.bookInfos.map(a=>({...a,subBooks:a.subBooks.map(n=>n.subBookId==L?{...n,...t}:n)}));s.dispatch({type:I.SET_BOOKINFOS,payload:{bookInfos:r}})},at=async e=>{he(e),ae(e&&me),k(!0);const t={chapterNumber:o.chapterNumber||1,subBook:o.subBookId||"",audio:o.chapterAudio,isTranslated:o.chapterTranslated,isCompleted:{...o.chapterIsCompleted,[d]:e},isPublished:{...o.chapterIsPublished,[d]:e&&me}};ie.updateChapterInfo({chapterId:O,newChapterInfo:t}).then(r=>{Ae(r),k(!1)}).catch(()=>{D.error("Failed to complete the chapter",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),k(!1)})},rt=async e=>{ae(e);const t={chapterNumber:o.chapterNumber||1,subBook:o.subBookId||"",audio:o.chapterAudio,isTranslated:o.chapterTranslated,isCompleted:o.chapterIsCompleted,isPublished:{...o.chapterIsPublished,[d]:e}};ie.updateChapterInfo({chapterId:O,newChapterInfo:t}).then(r=>{Ae(r),k(!1)}).catch(()=>{D.error("Failed to publish the chapter",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),k(!1)})},nt=e=>{d=="en"?ne(e):d=="ar"&&re(e),z(e)},st=e=>{d=="ar"&&z(e),re(e)},it=e=>{d=="en"&&z(e),ne(e)},lt=(e,t,r,a)=>{const n={[`${d}`]:e,ar:t,transliteration:r,en:a},i={...m,subBookTitle:n},S={title:i.subBookTitle,number:i.subBookNumber||1,book:(C==null?void 0:C.bookId)||"",noChapter:!0};m!=null&&m.subBookId?(k(!0),ie.updateSubBookInfo({subBookId:m==null?void 0:m.subBookId,newSubBookInfo:S}).then(p=>{ot(p),k(!1)}).catch(()=>{D.error("Failed to update the summary of chapter",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),k(!1)})):D.error(Vt,{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})},Le=e=>{$e(e),P([]),G([])},ct=e=>{try{const t=new FileReader;t.onload=r=>{var n;const a=(n=r.target)==null?void 0:n.result;if(!a){console.error("Failed to read file");return}$t.parse(a,{complete:i=>{if(i.errors.length>0){console.error("CSV parsing errors:",i.errors);return}const S=i.data;_e(S)},header:!0,skipEmptyLines:!0,transformHeader:i=>i.trim(),transform:i=>i.trim()})},t.onerror=r=>{console.error("Error reading file:",r)},t.readAsText(e)}catch(t){console.error("Error parsing CSV file:",t)}},ut=c.useCallback(async e=>{try{const t=new FileReader;t.onload=r=>{var l;const a=(l=r.target)==null?void 0:l.result;if(!a){console.error("Failed to read file");return}const n=vt(a,{type:"array"}),i=n.SheetNames[0],S=n.Sheets[i],p=se.sheet_to_json(S);_e(p)},t.onerror=r=>{console.error("Error reading file:",r)},t.readAsArrayBuffer(e)}catch(t){console.error("Error parsing Excel file:",t)}},[x]),dt=()=>{Xt.saveBook({bookInfos:Ee,bookTitle:s.currentBook,language:$(d)}).then(()=>{D.success("Saved successfully!",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})}).catch(()=>{D.success("Failed to save book",{position:"top-right",draggable:!0,theme:"colored",transition:H,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})})},pt=()=>{localStorage.removeItem(Wt),s.dispatch({type:I.RESET_USER}),s.dispatch({type:I.RESET_BOOK}),s.dispatch({type:I.RESET_APP_TEXT_PAGES}),fe("/admin")},ht=()=>u.jsx(Ht,{isLoggedIn:!0,username:s.currentUser.username,isAdmin:s.currentUser.isAdmin,onLogOut:pt}),mt=()=>u.jsx(io,{children:u.jsx(eo,{books:Gt.map(e=>({bookTitle:e.bookTitle,onClick:()=>{Ze(e.value)}})),selectedBook:T})}),gt=()=>B&&u.jsx(lo,{children:u.jsx(K,{color:"red",fontFamily:"'Baloo Da 2'",fontWeight:"bold",children:T==xe||T==Se?`For ${T} you can upload only one chapter at once`:`For ${T} you can upload multiple chapters of the same sub-book at once`})}),bt=()=>u.jsxs(uo,{children:[u.jsxs(po,{onClick:()=>fe("/admin/bookoverview"),children:[u.jsx(qt,{}),u.jsx(K,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:"overview"})]}),!B&&u.jsxs(ho,{children:[u.jsx(K,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:T==Ce||T==ke?"Go to: ":"Go to Surah: "}),u.jsx(Be,{label:"",options:ee,value:ee.find(e=>e.value===L)?L:"",backgroundColor:"#fff",textColor:"#155D74",onChange:Je}),(T==Ce||T==ke)&&u.jsx(Be,{label:"",options:te,value:te.find(e=>e.value===O)?O:"",backgroundColor:"#fff",textColor:"#155D74",onChange:et}),u.jsx(Be,{label:"",options:be,value:d,backgroundColor:"#fff",textColor:"#155D74",onChange:tt})]})]}),ft=()=>!B&&u.jsx(zt,{currentUser:s.currentUser,currentBook:s.currentBook,totalCountVerse:Ke,languageCountVerse:We,isComplete:ve,isPublish:me,isSpecialBook:T==xe||T==Se,currentLanguage:d,arabicChapterTitle:qe,englishChapterTitle:Qe,transliteration:ze,currentChapterTitle:Ge,translateComplete:e=>at(e),translatePublish:e=>rt(e),handleCurrentChapterTitleChange:e=>nt(e),handleArabicChapterTitleChange:e=>st(e),handleTransliterationChapterTitleChange:e=>je(e),handleEnglishChapterTitleChange:e=>it(e),handleUpdateChapterSummary:lt}),xt=()=>u.jsxs(mo,{children:[u.jsxs(Pe,{active:B?"false":"true",onClick:()=>Le(!1),children:[u.jsx(Qt,{}),u.jsx(K,{fontFamily:"'Baloo Da 2'",children:"Database"})]}),u.jsxs(Pe,{active:B?"true":"false",onClick:()=>Le(!0),children:[u.jsx(Yt,{}),u.jsx(K,{fontFamily:"'Baloo Da 2'",children:"Import"})]})]}),St=()=>!B&&u.jsxs(go,{children:[u.jsx(K,{fontFamily:"Inter",color:"#155D74",fontWeight:"500",children:`${T} - 
            ${le(L,ee)} 
            ${T==Ce||T==ke?le(O,te):""}`}),u.jsx(bo,{isdisable:M.length?"false":"true",children:u.jsx(Ut,{label:"Export to Excel",disabled:!M.length,icon:u.jsx(He,{}),onClick:Xe})})]}),Ct=()=>!B&&u.jsx(co,{children:u.jsx(Zt,{headers:M,rows:A})}),kt=()=>B&&u.jsx(fo,{children:u.jsx(Kt,{language:d,languageLabel:$(d),languages:be,file:x,parsedData:w,headers:de,error:Ue,onChangeLanguage:e=>we(e.target.value),onChangeFile:e=>W(e),onUpload:dt})}),Bt=()=>u.jsxs(so,{children:[u.jsx(Jt,{tools:xo}),mt(),xt(),bt(),gt(),ft(),St(),Ct(),kt()]});return u.jsxs(u.Fragment,{children:[u.jsxs(no,{flexDirection:Ye?"column":"row",children:[ht(),Bt()]}),u.jsx(Ft,{}),V&&u.jsx(At,{})]})}function Co(s){return{dispatch:s}}function ko(s){return{currentUser:s.user.currentUser,bookInfos:s.book.bookInfos,chapterInfos:s.book.chapterInfos,currentBook:s.book.book,currentLanguage:s.book.language}}const Io=Et(ko,Co)(So);export{Io as default};
