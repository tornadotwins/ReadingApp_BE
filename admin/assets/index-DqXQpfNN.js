import{a as p,j as t}from"./createTheme-BHMWPoTv.js";import{s,B as c,t as pe,K as xe,u as me,F as B,A as M,H as P,E as he,Q as fe,w as Ce,q as I,T}from"./App-BFhg_l16.js";import{j as J,d as ye}from"./journey.services-DJGPMYjl.js";import{S as H}from"./index-Uy1H0LDw.js";import{g as be,a as _}from"./images-B-3euPqr.js";import{b as ve,p as Se}from"./index-C3ZcpZA3.js";import{S as we}from"./index-CSqcV6Vv.js";import{T as Be,B as Ie}from"./index-DZ6sRshW.js";import{C as je,I as ke,T as Te,a as De,P as Ee}from"./PreviewCollapsibleBlock-BPB-TLmp.js";import"./ArrowDownward-D_p8nWbJ.js";import"./index-BVhN5Hn4.js";const Ae=s(c)({position:"relative",minHeight:"calc(100vh - 37px)",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),Me=s(c)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),Pe=s(c)({margin:"20px 40px"}),_e=s(c)({margin:"20px 40px",display:"flex",alignItems:"center","@media screen and (max-width: 800px)":{display:"block"}}),Le=s(c)({display:"flex",justifyContent:"space-between",alignItems:"center","& > .MuiFormControl-root":{marginRight:"20px"},"@media screen and (max-width: 650px)":{display:"block","& > .MuiFormControl-root":{alignItems:"start","& .MuiInputBase-root":{width:"100%"}}}}),Oe=s(c)({margin:"20px 40px",display:"flex",alignItems:"center","& > .MuiBox-root":{width:"120px",marginRight:"50px"},"@media screen and (max-width: 800px)":{display:"block"}}),Fe=s(c)(({isdisable:l})=>({display:"flex",justifyContent:"center",alignItems:"center",width:"160px !important",marginRight:"0px !important",padding:"5px 10px",boxSizing:"border-box",border:"1px solid #474747",backgroundColor:l=="true"?"#A1A1A1":"#FFAA5D",cursor:l=="true"?"not-allowed":"pointer",button:{width:"100%"},"&:hover":{backgroundColor:l=="true"?"#A1A1A1":"#EE994C"},"& .MuiBox-root":{color:"#474747 !important",fontWeight:"600 !important",textTransform:"none","&:hover":{backgroundColor:l=="true"?"#A1A1A1":"#EE994C"}}})),Ue=s(c)({width:"100%",padding:"20px 40px",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"space-between","@media screen and (max-width: 800px)":{flexDirection:"column"}}),Re=s(c)({display:"flex",alignItems:"center","@media screen and (max-width: 800px)":{flexDirection:"column",width:"100%"}}),D=s(c)({display:"flex",justifyContent:"center",alignItems:"center",marginRight:"20px !important",padding:"5px 10px",boxSizing:"border-box",border:"1px solid #474747",backgroundColor:"#FFAA5D",cursor:"pointer",button:{width:"100%"},"&:hover":{backgroundColor:"#EE994C"},"& .MuiBox-root":{color:"#474747 !important",textTransform:"none","&:hover":{backgroundColor:"#EE994C"}},"@media screen and (max-width: 800px)":{width:"100%",marginRight:"0px !important",marginBottom:"10px"}}),ze=s(c)({width:"600px",display:"flex",flexDirection:"column",alignItems:"center",boxSizing:"border-box",margin:"20px 40px 0px 40px"}),$e=s(c)({display:"flex",alignItems:"center",cursor:"pointer",transform:".25s all ease",marginBottom:"10px",alignSelf:"start","& svg":{fill:"#155D74",marginRight:"10px"},"& .MuiBox-root":{userSelect:"none"},"&:hover":{"& .MuiBox-root":{color:"#266E85"},"& svg":{fill:"#266E85"}}}),Je=s(c)({display:"flex",flexDirection:"column",width:"400px",margin:"20px 40px 0px 40px"}),He=s(c)({display:"flex",flexDirection:"column",alignItems:"center",boxSizing:"border-box",border:"1px solid #155D74",backgroundColor:"#F0F5FB",padding:"10px",width:"100%","& .MuiBox-root":{width:"100%",wordWrap:"break-work",wordBreak:"break-word"},"& > .MuiBox-root: first-of-type":{marginBottom:"20px"},"@media screen and (max-width: 700px)":{width:"100%"}}),G=s(c)({display:"flex",alignItems:"center",width:"100%",marginBottom:"20px","& .MuiBox-root":{userSelect:"none"}}),Ge=s(c)({display:"flex",width:"100%",boxSizing:"border-box",border:"1px solid #000"});s(c)({display:"flex",margin:"20px 40px",boxSizing:"border-box",justifyContent:"space-between",gap:"20px","@media screen and (max-width: 700px)":{flexDirection:"column"}});const Ne=s(c)({display:"flex",alignSelf:"start",boxSizing:"border-box",padding:"0px 10px",marginBottom:"10px"}),We=s(c)({display:"flex",alignSelf:"start",boxSizing:"border-box",padding:"0px 10px",marginBottom:"10px"}),Ke=s("img")({width:"250px"}),qe=s(c)({display:"flex",alignSelf:"start",boxSizing:"border-box",padding:"0px 10px",marginBottom:"10px",width:"100%"}),Ve=s(c)({display:"flex",alignItems:"start"}),Ye=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}];function Qe(l){const[N,S]=p.useState(!1),[W,K]=p.useState(l.currentJourneyBook||""),[u,L]=p.useState(l.currentLanguage),[q,V]=p.useState([]),[y,O]=p.useState(!1),[w,E]=p.useState(!1),[x,C]=p.useState([]),[F,h]=p.useState(!1),Y=xe(),A=me(),U=p.useCallback(()=>{var n;if(!((n=l.currentUser)!=null&&n.roles))return[];const e=l.currentUser.roles.reduce((o,r)=>{if(r.role!=="none"){const g=be(r.language);o.some(d=>d.value===g)||o.push({value:g,label:r.language})}return o},[]);return l.currentLanguage||l.dispatch({type:B.SET_CURRENT_LANGUAGE,payload:{language:e[0].value}}),e},[l.currentUser]);p.useEffect(()=>{const e=U();V(e),e.length>0&&!e.some(n=>n.value===u)&&L(e[0].value)},[l.currentUser,u,U]);const Q=()=>{localStorage.removeItem(ve),l.dispatch({type:B.RESET_USER}),l.dispatch({type:B.RESET_BOOK}),l.dispatch({type:B.RESET_APP_TEXT_PAGES}),A("/admin")},X=()=>t.jsx(Ce,{isLoggedIn:!0,username:l.currentUser.username,isAdmin:l.currentUser.isAdmin,onLogOut:Q}),Z=e=>{K(e),A("/admin/journeyoverview"),l.dispatch({type:B.SET_JOURNEY_BOOK,payload:{journeyBookTitle:e}})},ee=()=>t.jsx(Pe,{children:t.jsx(Ie,{books:Se.map(e=>({bookTitle:e.bookTitle,onClick:()=>{Z(e.value)}})),selectedBook:W})}),te=e=>{const n=e.target.value;L(n)},ne=()=>t.jsx(_e,{children:t.jsx(Le,{children:t.jsx(we,{label:"",options:q,value:u,backgroundColor:"#fff",textColor:"#155D74",onChange:te})})}),R=(e,n)=>{O(e),e&&E(n),!e&&E(!1),h(!0)},oe=p.useCallback(()=>{S(!0);const e=[];x.map((o,r)=>{var g;switch(o.type){case"title":{const a=o.value,d={article:l.articleId,title:{[u]:a},text:{},image:{},number:r+1,isCollapse:!1,content:[]};e.push(d);break}case"text":{const a=o.value,d={article:l.articleId,title:{},text:{[u]:a},image:{},number:r+1,isCollapse:!1,content:[]};e.push(d);break}case"image":{const a=o.value,d=a.url,i=a.alt,m={article:l.articleId,title:{},text:{},image:{url:d,alt:i},number:r+1,isCollapse:!1,content:[]};e.push(m);break}case"collapsible":{let a={article:l.articleId,title:{},text:{},image:{},number:r+1,isCollapse:!0,content:[]};const d=[],i=o.value,m=(g=i[0])==null?void 0:g.value;a={...a,title:{[u]:m}};for(const de of Object.keys(i).slice(1)){const b=i[de];if(b.type=="title"){const v={[u]:b.value,isTitle:!0};d.push(v)}else if(b.type=="text"){const v={[u]:b.value,isTitle:!1};d.push(v)}else if(b.type=="image"){const v=b.value,ge={url:v.url,alt:v.alt};d.push(ge)}}a={...a,content:d},e.push(a);break}}});const n={parentId:l.articleId,languageCode:u,isCompleted:y,isPublished:w,verses:e};J.saveArticle(n).then(o=>{console.log(o),M.success("Successfully saved.",{position:"top-right",draggable:!0,theme:"colored",transition:P,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),S(!1)}).catch(o=>{M.error(o.message,{position:"top-right",draggable:!0,theme:"colored",transition:P,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),S(!1)})},[x,y,w]),ae=()=>t.jsxs(Oe,{children:[t.jsx(H,{label:"Complete",value:y,disable:x.length==0,onChange:()=>R(!y,w)}),t.jsx(H,{label:"Publish",value:w,disable:!y,onChange:()=>R(y,!w)}),t.jsx(Fe,{isdisable:F?"false":"true",children:t.jsx(I,{label:"Save Changes",disabled:!F,onClick:oe})})]}),j=e=>{const o={id:`${e}-${Date.now()}`,blockIndex:x.length,type:e,value:e=="image"?{url:"",alt:""}:""};h(!0),C([...x,o])},k=e=>{const n=x.filter(o=>o.id!==e);h(!0),C(n)},le=()=>t.jsx(Ue,{children:t.jsxs(Re,{children:[t.jsx(D,{children:t.jsx(I,{label:"Add Title",onClick:()=>j("title")})}),t.jsx(D,{children:t.jsx(I,{label:"Add Text",onClick:()=>j("text")})}),t.jsx(D,{children:t.jsx(I,{label:"Add Image",onClick:()=>j("image")})}),t.jsx(D,{children:t.jsx(I,{label:"Add Collapsible",onClick:()=>j("collapsible")})})]})}),z=(e,n)=>{h(!0),C(x.map(o=>o.id==e?{...o,value:n}:o))},$=(e,n)=>{h(!0),C(o=>o.map(r=>r.id===e?{...r,value:{...r.value,...n}}:r))},re=(e,n)=>{var o;h(!0),(o=Object.values(n)[0])!=null&&o.value||h(!1),C(r=>r.map(g=>g.id==e?{...g,value:{...g.value,...n}}:g))},f=(e,n)=>{h(!0),C(o=>{const r=[...o];return n==="up"&&e>0&&([r[e],r[e-1]]=[r[e-1],r[e]]),n==="down"&&e<r.length-1&&([r[e],r[e+1]]=[r[e+1],r[e]]),r})};p.useEffect(()=>{J.getArticle(l.articleId).then(e=>{var o,r,g;const n=[];O((o=e.isCompleted)==null?void 0:o[u]),E((r=e.isPublished)==null?void 0:r[u]),e.verses&&e.verses.length>0&&((g=e.verses)==null||g.map(a=>{var d,i;if(!a.isCollapse&&a.title){const m={id:a._id||`title-${Date.now()}-${Math.random()}`,type:"title",blockIndex:a.number,value:(d=a.title)==null?void 0:d[u]};n.push(m)}else if(!a.isCollapse&&a.text){const m={id:a._id||`text-${Date.now()}-${Math.random()}`,type:"text",blockIndex:a.number,value:(i=a.text)==null?void 0:i[u]};n.push(m)}else if(!a.isCollapse&&a.image){const m={id:a.id||`image-${Date.now()}-${Math.random()}`,type:"image",blockIndex:a.number,value:a.image};n.push(m)}else if(a.isCollapse){const m={id:a.id||`collapsible-${Date.now()}-${Math.random()}`,type:"collapsible",blockIndex:a.number,value:a};n.push(m)}})),C(n),S(!1)}).catch(e=>{M.warning(e,{position:"top-right",draggable:!0,theme:"colored",transition:P,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),S(!1)})},[u,l.articleId]);const ie=()=>t.jsxs(ze,{children:[t.jsxs($e,{onClick:()=>A("/admin/journeyoverview"),children:[t.jsx(ye,{}),t.jsx(T,{color:"#155D74",fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,children:`Back to "${l.articleTitle||"Prev"}"`})]}),x.map((e,n)=>{switch(e.type){case"title":return t.jsx(De,{language:_(u),inputVal:e.value,blockIndex:n,onInputChange:o=>z(e.id,o),onDelete:()=>k(e.id),onMoveUp:()=>f(n,"up"),onMoveDown:()=>f(n,"down")},e.id);case"text":return t.jsx(Te,{language:_(u),inputVal:e.value,blockIndex:n,onInputChange:o=>z(e.id,o),onDelete:()=>k(e.id),onMoveUp:()=>f(n,"up"),onMoveDown:()=>f(n,"down")},e.id);case"image":return t.jsx(ke,{url:e.value.url,alt:e.value.alt,blockIndex:n,onImageInputChange:o=>$(e.id,{url:o}),onAltInputChange:o=>$(e.id,{alt:o}),onDelete:()=>k(e.id),onMoveUp:()=>f(n,"up"),onMoveDown:()=>f(n,"down")},e.id);case"collapsible":return t.jsx(je,{language:_(u),blockIndex:n,value:e.value,onChange:o=>re(e.id,o),onDelete:()=>k(e.id),onMoveUp:()=>f(n,"up"),onMoveDown:()=>f(n,"down")},e.id);default:return null}})]}),se=()=>t.jsxs(Je,{children:[t.jsx(G,{children:t.jsx(T,{color:"#155D74",fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,children:"Journey Preview"})}),t.jsx(Ge,{children:x&&x.length>0&&t.jsx(He,{children:x.map((e,n)=>{var o;switch(e.type){case"title":return t.jsx(G,{children:t.jsx(T,{color:"black",fontWeight:"bold",textAlign:"left",fontFamily:"Inter",children:e.value})},n);case"text":return t.jsx(Ne,{children:t.jsx(T,{color:"black",fontSize:16,fontWeight:"400",fontFamily:"Inter",children:e.value})},n);case"image":return t.jsx(We,{children:t.jsx(Ke,{src:e.value.url,alt:e.value.alt})},n);case"collapsible":{const r=Object.values(e.value),g=(o=r[0])==null?void 0:o.value,a=[];for(let d=1;d<r.length;d++){const i=r[d];(i==null?void 0:i.type)=="title"?a.push({[u]:i==null?void 0:i.value,isTitle:!0}):(i==null?void 0:i.type)=="text"?a.push({[u]:i==null?void 0:i.value,isTitle:!1}):a.push(i==null?void 0:i.value)}return t.jsx(qe,{children:t.jsx(Ee,{language:u,blockIndex:e.blockIndex,value:e.value,title:g,contents:a,onChange:()=>{},onDelete:()=>{},onMoveDown:()=>{},onMoveUp:()=>{}})},n)}}})})})]}),ce=()=>t.jsxs(Ve,{children:[ie(),se()]}),ue=()=>t.jsxs(Me,{children:[t.jsx(Be,{tools:Ye}),ee(),ne(),ae(),le(),ce()]});return t.jsxs(t.Fragment,{children:[t.jsxs(Ae,{flexDirection:Y?"column":"row",children:[X(),ue()]}),N&&t.jsx(he,{}),t.jsx(fe,{})]})}function Xe(l){return{dispatch:l}}function Ze(l){return{currentUser:l.user.currentUser,bookInfos:l.book.bookInfos,chapterInfos:l.book.chapterInfos,currentLanguage:l.book.language,currentJourneyBook:l.journeys.journeyTitle,articleId:l.journeys.parentId,articleTitle:l.journeys.parentJourneyTitle}}const dt=pe(Ze,Xe)(Qe);export{dt as default};
