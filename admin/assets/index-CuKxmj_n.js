import{a as g,j as a}from"./createTheme-CsEn8Xwk.js";import{s as d,B as p,t as Ie,W as ye,K as je,u as Te,A as F,H as R,E as Ae,Q as Ee,w as De,F as A,q as y,T as L}from"./App-BKacFRzX.js";import{S as X}from"./index-C94r4OLj.js";import{a as z}from"./images-B-3euPqr.js";import{b as Pe,j as Oe,r as Me,s as _e}from"./index-BSm4_Lil.js";import{S as Y}from"./index-B5uKD9G9.js";import{T as Fe,B as Re}from"./index-CIJFlLTd.js";import{C as Le,I as ze,T as Ue,a as Ne,P as $e}from"./PreviewCollapsibleBlock-C2VSUew0.js";import{b as Z}from"./book.services-BDvVfshs.js";import"./ArrowDownward-B3b-h7l4.js";import"./index-iMkdhPZp.js";const We=d(p)({position:"relative",minHeight:"calc(100vh - 37px)",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),Ge=d(p)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),He=d(p)({margin:"20px 40px"}),Ke=d(p)({margin:"20px 40px",display:"flex",alignItems:"center","@media screen and (max-width: 800px)":{display:"block"}}),qe=d(p)({display:"flex",justifyContent:"space-between",alignItems:"center","& > .MuiFormControl-root":{marginRight:"20px"},"@media screen and (max-width: 650px)":{display:"block","& > .MuiFormControl-root":{alignItems:"start","& .MuiInputBase-root":{width:"100%"}}}}),Ve=d(p)({margin:"20px 40px",display:"flex",alignItems:"center","& > .MuiBox-root":{width:"120px",marginRight:"50px"},"@media screen and (max-width: 800px)":{display:"block"}}),Je=d(p)(({isdisable:r})=>({display:"flex",justifyContent:"center",alignItems:"center",width:"160px !important",marginRight:"0px !important",padding:"5px 10px",boxSizing:"border-box",border:"1px solid #474747",backgroundColor:r=="true"?"#A1A1A1":"#FFAA5D",cursor:r=="true"?"not-allowed":"pointer",button:{width:"100%"},"&:hover":{backgroundColor:r=="true"?"#A1A1A1":"#EE994C"},"& .MuiBox-root":{color:"#474747 !important",fontWeight:"600 !important",textTransform:"none","&:hover":{backgroundColor:r=="true"?"#A1A1A1":"#EE994C"}}})),Qe=d(p)({width:"100%",padding:"20px 40px",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"space-between","@media screen and (max-width: 800px)":{flexDirection:"column"}}),Xe=d(p)({display:"flex",alignItems:"center","@media screen and (max-width: 800px)":{flexDirection:"column",width:"100%"}}),P=d(p)({display:"flex",justifyContent:"center",alignItems:"center",marginRight:"20px !important",padding:"5px 10px",boxSizing:"border-box",border:"1px solid #474747",backgroundColor:"#FFAA5D",cursor:"pointer",button:{width:"100%"},"&:hover":{backgroundColor:"#EE994C"},"& .MuiBox-root":{color:"#474747 !important",textTransform:"none","&:hover":{backgroundColor:"#EE994C"}},"@media screen and (max-width: 800px)":{width:"100%",marginRight:"0px !important",marginBottom:"10px"}}),Ye=d(p)({display:"flex",justifyContent:"center",alignItems:"center",padding:"5px 10px",width:"150px",boxSizing:"border-box",border:"1px solid #474747",backgroundColor:"#FFAA5D",cursor:"pointer",button:{width:"100%"},"&:hover":{backgroundColor:"#EE994C"},"& .MuiBox-root":{color:"#474747 !important",textTransform:"none","&:hover":{backgroundColor:"#EE994C"}},"@media screen and (max-width: 800px)":{width:"100%"}}),Ze=d(p)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:"100%"}),et=d(p)({display:"flex",flexDirection:"column",alignItems:"center",boxSizing:"border-box",border:"1px solid #155D74",borderRadius:"4px",backgroundColor:"#F0F5FB",padding:"10px",width:"300px",marginBottom:"10px","& .MuiBox-root":{width:"100%",wordWrap:"break-work",wordBreak:"break-word"},"& > .MuiBox-root: first-of-type":{marginBottom:"20px"},"@media screen and (max-width: 700px)":{width:"100%"}}),tt=d(p)({display:"flex",alignItems:"center",boxSizing:"border-box",padding:"0px 10px",marginBottom:"10px"}),ot=d(p)({display:"flex",alignSelf:"start",boxSizing:"border-box",padding:"0px 10px",marginBottom:"10px"}),nt=d(p)({display:"flex",alignSelf:"start",boxSizing:"border-box",padding:"0px 10px",marginBottom:"10px"}),at=d("img")({width:"250px"}),st=d(p)({display:"flex",alignSelf:"start",boxSizing:"border-box",padding:"0px 10px",marginBottom:"10px",width:"100%"}),rt=d(p)({display:"flex",margin:"20px 40px",boxSizing:"border-box",justifyContent:"space-between",gap:"20px","@media screen and (max-width: 700px)":{flexDirection:"column"}}),lt=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}];function it(r){var V,J,Q;const B=ye(),[ee,S]=g.useState(!1),[O,te]=g.useState(r.currentBook),[j,U]=g.useState((V=B.state.subBookInfo)==null?void 0:V.subBookId),[m,oe]=g.useState(B.state.chapterId),[c,ne]=g.useState(r.currentLanguage),[N,ae]=g.useState([]),[v,$]=g.useState(((J=B.state.subBookInfo.chapterInfos[0].chapterIsCompleted)==null?void 0:J[c])||!1),[T,M]=g.useState(((Q=B.state.subBookInfo.chapterInfos[0].chapterIsPublished)==null?void 0:Q[c])||!1),[_,se]=g.useState(!0),[h,b]=g.useState([]),[W,f]=g.useState(!1),re=je(),G=Te(),le=g.useMemo(()=>B.state.languages,[B]);g.useEffect(()=>{var s,l;const e=r.bookInfos.find(n=>n.bookTitle.en==r.currentBook),t=(s=e==null?void 0:e.subBooks)==null?void 0:s.find(n=>n.subBookId==j),o=(t==null?void 0:t.chapterInfos)&&(t==null?void 0:t.chapterInfos[0].chapterNumber)==0&&((l=t==null?void 0:t.chapterInfos[0])==null?void 0:l.chapterId)||"";oe(o)},[j]),g.useEffect(()=>{S(!0),b([]),Z.getIntroVerses(m).then(e=>{var o,s,l;$(((o=e.isCompleted)==null?void 0:o[c])||!1),M(((s=e.isPublished)==null?void 0:s[c])||!1);const t=[];e.verses&&e.verses.length>0&&((l=e.verses)==null||l.map(n=>{var i,k;const u=n.number;if(!n.isCollapse&&n.title){const x={id:n.id||`title-${Date.now()}-${Math.random()}`,type:"title",blockIndex:u,value:(i=n.title)==null?void 0:i[c]};t.push(x)}else if(!n.isCollapse&&n.text){const x={id:n.id||`text-${Date.now()}-${Math.random()}`,type:"text",blockIndex:u,value:(k=n.text)==null?void 0:k[c]};t.push(x)}else if(!n.isCollapse&&n.image){const x={id:n.id||`image-${Date.now()}-${Math.random()}`,type:"image",blockIndex:u,value:n.image};t.push(x)}else if(n.isCollapse){const x={id:n.id||`collapsible-${Date.now()}-${Math.random()}`,type:"collapsible",blockIndex:u,value:n};t.push(x)}})),b(t),S(!1)}).catch(e=>{console.log(`warning/error while getting intro information: 
`,e),F.warning("No introduction information for the chapter.",{position:"top-right",draggable:!0,theme:"colored",transition:R,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),S(!1)})},[m,c]);const ie=()=>{localStorage.removeItem(Pe),r.dispatch({type:A.RESET_USER}),r.dispatch({type:A.RESET_BOOK}),r.dispatch({type:A.RESET_APP_TEXT_PAGES}),G("/admin")},ce=()=>a.jsx(De,{isLoggedIn:!0,username:r.currentUser.username,isAdmin:r.currentUser.isAdmin,isTranslationPage:!0,onLogOut:ie}),ue=e=>{te(e),G("/admin/bookoverview"),r.dispatch({type:A.SET_BOOK,payload:{bookTitle:e}})},de=()=>a.jsx(He,{children:a.jsx(Re,{books:Oe.map(e=>({bookTitle:e.bookTitle,onClick:()=>{ue(e.value)}})),selectedBook:O})});g.useEffect(()=>{var t;const e=r.bookInfos.find(o=>o.bookTitle.en==r.currentBook);if(e){const s=Array.from(new Set(e.subBooks.map(l=>l.subBookId))).map(l=>e.subBooks.find(n=>n.subBookId===l)).map(l=>{var n;return{label:(n=l.subBookTitle)==null?void 0:n[c],value:l.subBookId}});ae(s),U(((t=B.state.subBookInfo)==null?void 0:t.subBookId)||s[0].value)}},[r.currentBook]);const pe=e=>{const t=e.target.value;U(t)},ge=e=>{const t=e.target.value;ne(t)},he=()=>a.jsx(Ke,{children:a.jsxs(qe,{children:[(O==Me||O==_e)&&a.jsx(Y,{label:"",options:N,value:N.find(e=>e.value===j)?j:"",backgroundColor:"#fff",textColor:"#155D74",onChange:pe}),a.jsx(Y,{label:"",options:le,value:c,backgroundColor:"#fff",textColor:"#155D74",onChange:ge})]})}),H=(e,t)=>{$(e),e&&M(t),!e&&M(!1),f(!0)},xe=e=>{const t={chapterAudio:e.audio,chapterId:e._id,chapterNumber:e.chapterNumber,chapterTranslated:e.isTranslated,chapterIsCompleted:e.isCompleted,chapterIsPublished:e.isPublished,subBookId:e.subBook},o=r.bookInfos.map(s=>({...s,subBooks:s.subBooks.map(l=>({...l,chapterInfos:l.chapterInfos.map(n=>n.chapterId===m?{...n,...t}:n)}))}));r.dispatch({type:A.SET_BOOKINFOS,payload:{bookInfos:o}})},me=g.useCallback(()=>{S(!0);const e=[];h.map((o,s)=>{var l;switch(o.type){case"title":{const n=o.value,u={chapter:m,title:{[c]:n},text:{},image:{},number:s+1,isCollapse:!1,content:[]};e.push(u);break}case"text":{const n=o.value,u={chapter:m,title:{},text:{[c]:n},image:{},number:s+1,isCollapse:!1,content:[]};e.push(u);break}case"image":{const n=o.value,u=n.url,i=n.alt,k={chapter:m,title:{},text:{},image:{url:u,alt:i},number:s+1,isCollapse:!1,content:[]};e.push(k);break}case"collapsible":{let n={chapter:m,title:{},text:{},image:{},number:s+1,isCollapse:!0,content:[]};const u=[],i=o.value,k=(l=i[0])==null?void 0:l.value;n={...n,title:{[c]:k}};for(const x of Object.keys(i).slice(1)){const w=i[x];if(w.type=="title"){const I={[c]:w.value,isTitle:!0};u.push(I)}else if(w.type=="text"){const I={[c]:w.value,isTitle:!1};u.push(I)}else if(w.type=="image"){const I=w.value,we={url:I.url,alt:I.alt};u.push(we)}}n={...n,content:u},e.push(n);break}}});const t={languageCode:c,subBookId:j,chapterId:m,isCompleted:{[c]:v},isPublished:{[c]:T},verses:e};Z.updateIntroData(t).then(o=>{xe(o),F.success("Successfully updated.",{position:"top-right",draggable:!0,theme:"colored",transition:R,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),S(!1)}).catch(o=>{F.error(o.message,{position:"top-right",draggable:!0,theme:"colored",transition:R,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),S(!1)})},[h,v,T]),be=()=>a.jsxs(Ve,{children:[a.jsx(X,{label:"Complete",value:v,disable:h.length==0,onChange:()=>H(!v,T)}),a.jsx(X,{label:"Publish",value:T,disable:!v,onChange:()=>H(v,!T)}),a.jsx(Je,{isdisable:W?"false":"true",children:a.jsx(y,{label:"Save Changes",disabled:!W,onClick:me})})]}),E=e=>{const o={id:`${e}-${Date.now()}`,blockIndex:h.length,type:e,value:e=="image"?{url:"",alt:""}:""};f(!0),b([...h,o])},D=e=>{const t=h.filter(o=>o.id!==e);f(!0),b(t)},fe=()=>a.jsxs(Qe,{children:[a.jsxs(Xe,{children:[a.jsx(P,{children:a.jsx(y,{label:"Add Title",onClick:()=>E("title")})}),a.jsx(P,{children:a.jsx(y,{label:"Add Text",onClick:()=>E("text")})}),a.jsx(P,{children:a.jsx(y,{label:"Add Image",onClick:()=>E("image")})}),a.jsx(P,{children:a.jsx(y,{label:"Add Collapsible",onClick:()=>E("collapsible")})})]}),a.jsx(Ye,{children:a.jsx(y,{label:_?"Hide Preview":"Show Preview",onClick:()=>se(!_)})})]}),K=(e,t)=>{f(!0),b(h.map(o=>o.id==e?{...o,value:t}:o))},q=(e,t)=>{f(!0),b(o=>o.map(s=>s.id===e?{...s,value:{...s.value,...t}}:s))},Ce=(e,t)=>{var o;f(!0),(o=Object.values(t)[0])!=null&&o.value||f(!1),b(s=>s.map(l=>l.id==e?{...l,value:{...l.value,...t}}:l))},C=(e,t)=>{f(!0),b(o=>{const s=[...o];return t==="up"&&e>0&&([s[e],s[e-1]]=[s[e-1],s[e]]),t==="down"&&e<s.length-1&&([s[e],s[e+1]]=[s[e+1],s[e]]),s})},Be=()=>a.jsx(Ze,{children:h.map((e,t)=>{switch(e.type){case"title":return a.jsx(Ne,{language:z(c),inputVal:e.value,blockIndex:t,onInputChange:o=>K(e.id,o),onDelete:()=>D(e.id),onMoveUp:()=>C(t,"up"),onMoveDown:()=>C(t,"down")},e.id);case"text":return a.jsx(Ue,{language:z(c),inputVal:e.value,blockIndex:t,onInputChange:o=>K(e.id,o),onDelete:()=>D(e.id),onMoveUp:()=>C(t,"up"),onMoveDown:()=>C(t,"down")},e.id);case"image":return a.jsx(ze,{url:e.value.url,alt:e.value.alt,blockIndex:t,onImageInputChange:o=>q(e.id,{url:o}),onAltInputChange:o=>q(e.id,{alt:o}),onDelete:()=>D(e.id),onMoveUp:()=>C(t,"up"),onMoveDown:()=>C(t,"down")},e.id);case"collapsible":return a.jsx(Le,{language:z(c),blockIndex:t,value:e.value,onChange:o=>Ce(e.id,o),onDelete:()=>D(e.id),onMoveUp:()=>C(t,"up"),onMoveDown:()=>C(t,"down")},e.id);default:return null}})}),Se=()=>h&&h.length>0&&_&&a.jsxs(et,{children:[a.jsx(L,{color:"#155D74",fontSize:18,fontWeight:"bold",textAlign:"left",fontFamily:"Inter",children:"PREVIEW:"}),h.map((e,t)=>{var o;switch(e.type){case"title":return a.jsx(tt,{children:a.jsx(L,{color:"black",fontWeight:"bold",textAlign:"left",fontFamily:"Inter",children:e.value})},t);case"text":return a.jsx(ot,{children:a.jsx(L,{color:"black",fontSize:16,fontWeight:"400",fontFamily:"Inter",children:e.value})},t);case"image":return a.jsx(nt,{children:a.jsx(at,{src:e.value.url,alt:e.value.alt})},t);case"collapsible":{const s=Object.values(e.value),l=(o=s[0])==null?void 0:o.value,n=[];for(let u=1;u<s.length;u++){const i=s[u];(i==null?void 0:i.type)=="title"?n.push({[c]:i==null?void 0:i.value,isTitle:!0}):(i==null?void 0:i.type)=="text"?n.push({[c]:i==null?void 0:i.value,isTitle:!1}):n.push(i==null?void 0:i.value)}return a.jsx(st,{children:a.jsx($e,{language:c,blockIndex:e.blockIndex,value:e.value,title:l,contents:n,onChange:()=>{},onDelete:()=>{},onMoveDown:()=>{},onMoveUp:()=>{}})},t)}}})]}),ve=()=>a.jsxs(rt,{children:[Be(),Se()]}),ke=()=>a.jsxs(Ge,{children:[a.jsx(Fe,{tools:lt}),de(),he(),be(),fe(),ve()]});return a.jsxs(a.Fragment,{children:[a.jsxs(We,{flexDirection:re?"column":"row",children:[ce(),ke()]}),ee&&a.jsx(Ae,{}),a.jsx(Ee,{})]})}function ct(r){return{dispatch:r}}function ut(r){return{currentUser:r.user.currentUser,bookInfos:r.book.bookInfos,chapterInfos:r.book.chapterInfos,currentBook:r.book.book,currentLanguage:r.book.language}}const vt=Ie(ut,ct)(it);export{vt as default};
