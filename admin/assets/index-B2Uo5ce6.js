import{j as a,a as d}from"./createTheme-Gc-mA0LN.js";import{s as i,B as l,T as S,I as Y,q as P,t as Z,u as ee,K as te,F as x,A as f,H as C,E as ae,Q as ne,w as oe}from"./App-BEBoIvYs.js";import{T as ie,B as re}from"./index-DXVf12QB.js";import{I as se,g as le,a as de}from"./images-BpPlnN2P.js";import{b as ge,o as ue,A as ce,i as xe}from"./index-nWCbLmQJ.js";import{S as k}from"./index-Drk7awIV.js";import{A as pe}from"./index-Dr1M2EFr.js";import{t as L}from"./translator.services-Dwdiy-03.js";import{D as me,a as he,b as fe}from"./DialogTitle-Qp-dCHll.js";const Ce=i(l)({width:"100%"}),Se=i(l)({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px 0px","& >:first-of-type":{minWidth:"200px"}}),ye=i(l)({display:"flex",alignItems:"center","& > .MuiBox-root: first-of-type":{minWidth:"200px",width:"200px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginRight:"10px","@media screen and (max-width: 1000px)":{minWidth:"100px",width:"100px"},"@media screen and (max-width: 780px)":{minWidth:"70px",width:"70px",fontSize:"14px !important"}}}),be=i(l)({display:"flex",alignItems:"center","& .MuiBox-root":{minWidth:"200px",width:"200px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","@media screen and (max-width: 1000px)":{minWidth:"150px",width:"150px"},"@media screen and (max-width: 780px)":{minWidth:"140px",width:"140px",fontSize:"14px !important"}}}),Te=i(l)({display:"flex",justifyContent:"end",width:"300px",padding:"0px","& >.MuiBox-root":{width:"100%",padding:"0px !important","& >.MuiFormControl-root":{width:"100%",border:"1px solid #155D74","& input":{fontFamily:'"Baloo Da 2" !important',color:"#155D74"}}},"@media screen and (max-width: 780px)":{width:"200px","& input":{fontSize:"14px !important"}}}),Ie=i("img")(({noimage:e})=>({width:"20px",height:"20px",marginRight:"10px",cursor:e=="true"?"not-allowed":"pointer",opacity:e=="true"?"0.5":"1","@media screen and (max-width: 780px)":{width:"15px",height:"15px"}}));function we(e){return a.jsx(Ce,{children:e.terms.map((g,c)=>{var y,b;return a.jsxs(Se,{children:[a.jsxs(ye,{children:[a.jsx(S,{fontFamily:"'Baloo Da 2'",fontWeight:"400",fontSize:16,lineHeight:24,color:"#A1A1A1",children:g.variable}),a.jsxs(be,{children:[a.jsx(Ie,{noimage:g.image?"false":"true",src:se.icon_preview,onClick:p=>g.image?e.onImageClick(ge+g.image):p.preventDefault()}),a.jsx(S,{fontFamily:"'Baloo Da 2'",fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",children:(y=g.text)==null?void 0:y[e.defaultLanguage]})]})]}),a.jsx(Te,{children:a.jsx(Y,{value:(b=g.text)==null?void 0:b[e.currentLanguage],onChange:p=>e.onInputChange(g._id,p.target.value)})})]},c)})})}const Le=i(l)({borderBottom:"1px solid #155D74",display:"flex",alignItems:"center",justifyContent:"space-between",boxSizing:"border-box",padding:"10px 0px"}),Be=i(l)({display:"flex",alignItems:"center","& >:first-of-type":{minWidth:"200px",marginRight:"10px","@media screen and (max-width: 1000px)":{minWidth:"100px"},"@media screen and (max-width: 780px)":{minWidth:"70px",fontSize:"14px !important"}},"@media screen and (max-width: 780px)":{"& .MuiFormControl-root":{width:"100px !important","& .MuiInputBase-root":{width:"100%","& .MuiSelect-select":{padding:"10px !important","& .MuiBox-root":{fontSize:"14px !important"}}}}}}),je=i(l)(({isdisable:e})=>({display:"flex",justifyContent:"space-between",alignItems:"center",width:"300px","& .MuiButtonBase-root":{width:"140px",boxSizing:"border-box",padding:"8px 14px",backgroundColor:e=="true"?"#A1A1A1":"#FFAA5D",borderRadius:"0px",border:"1px solid #474747",textTransform:"none !important",cursor:e=="true"?"not-allowed":"pointer","& .MuiBox-root":{fontWeight:"500 !important"}},"@media screen and (max-width: 780px)":{width:"200px",fontSize:"14px !important","& .MuiBox-root":{fontSize:"14px !important"},"& .MuiButtonBase-root":{width:"120px"}}}));function De(e){return a.jsxs(Le,{children:[a.jsxs(Be,{children:[a.jsx(S,{color:"#A1A1A1",fontFamily:"'Baloo Da 2'",children:"Variable"}),a.jsx(k,{label:"",options:e.languages,value:e.defaultLanguage,backgroundColor:"#fff",textColor:"#155D74",onChange:g=>e.onChangeDefaultLanguage(g.target.value)})]}),a.jsxs(je,{isdisable:e.disable?"true":"false",children:[a.jsx(S,{fontFamily:"'Baloo Da 2'",fontWeight:"700",color:"#155D74",children:e.currentLanguageLabel}),a.jsx(P,{label:"Save Changes",disabled:e.disable,onClick:()=>e.onSave(e.pageId)})]})]})}const Ae=i(l)({width:"900px",border:"1px solid #1B7695",backgroundColor:"#F0F5FB",boxSizing:"border-box",padding:"20px",margin:"20px 40px","& .MuiAccordionSummary-content > .MuiBox-root":{justifyContent:"space-between !important"},"& .MuiAccordionDetails-root":{paddingLeft:"25px !important",paddingBottom:"0px !important"},"& .MuiAccordionSummary-content > .MuiBox-root :nth-of-type(2)":{padding:"0px !important"},"@media screen and (max-width: 1000px)":{width:"700px"},"@media screen and (max-width: 780px)":{margin:"20px",width:"550px"}});function ve(e){return a.jsx(Ae,{children:a.jsx(pe,{label:e.pageName,hasSwitches:!0,summaryIcon:!0,currentUser:e.currentUser,currentLanguage:e.currentLanguage,pageId:e.pageId,isComplete:e.isComplete,isPublish:e.isPublish,onChangeAppTextPageStatus:e.onChangeAppTextPageStatus,detail:a.jsxs(a.Fragment,{children:[a.jsx(De,{languages:e.languages,language:e.currentLanguage,currentLanguage:e.currentLanguage,currentLanguageLabel:e.currentLanguageLabel,defaultLanguage:e.defaultLanguage,pageId:e.pageId,disable:!e.hasChangedText,onChangeDefaultLanguage:e.onChangeDefaultLanguage,onSave:e.onSave}),a.jsx(we,{defaultLanguage:e.defaultLanguage,currentLanguage:e.currentLanguage,terms:e.terms,onInputChange:e.onChangeInput,onImageClick:e.onClickImage})]})})})}const Pe=i(l)({position:"relative",minHeight:"100vh",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),ke=i(l)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px",paddingBottom:"20px"}),Ee=i(l)({margin:"20px 40px"}),_e=i(l)({width:"650px",display:"flex",justifyContent:"center",alignItems:"center",margin:"20px 40px 0px 40px","& .MuiFormControl-root":{width:"unset",marginLeft:"15px"},"& .MuiBox-root":{fontFamily:'"Baloo Da 2" !important'},"@media screen and (max-width: 670px)":{width:"unset"}}),Oe=i(me)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"},"& .MuiDialogContent-root > .MuiBox-root:first-of-type":{width:"100%"},"& .MuiDialogContent-root > .MuiBox-root:nth-of-type(2)":{alignSelf:"end",marginTop:"10px","& svg":{marginRight:"10px"}}}),Fe=i(he)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),Me=i(fe)({backgroundColor:"#155D74",padding:"0px 0px 10px 0px",height:"90%",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}),Re=i(l)({width:"100%"}),Ue=i("img")({width:"100%"}),We=i(l)({display:"flex",alignItems:"center",justifyContent:"center",width:"100%",cursor:"pointer","& :hover":{backgroundColor:"#F6CFAC"},"& button":{width:"20%",backgroundColor:"#FFAA5D",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:"#474747 !important"}}});function He(e){const g=d.useRef(null);return a.jsxs(Oe,{open:e.isOpen,onClose:e.onCancel,children:[a.jsx(Fe,{children:"Image"}),a.jsxs(Me,{children:[a.jsx(Re,{children:a.jsx(Ue,{src:e.image})}),a.jsx(We,{children:a.jsx(P,{label:"O  K",onClick:e.onCancel,reference:g})})]})]})}const ze=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}];function Ne(e){const[g,c]=d.useState(!1),[y,b]=d.useState(ue),[p,E]=d.useState([]),[h,B]=d.useState(e.currentLanguage),[_,O]=d.useState("en"),[T,I]=d.useState(e.appTextPages),[F,w]=d.useState([]),[M,R]=d.useState(""),[j,D]=d.useState(!1),A=ee(),U=te(),W=()=>{localStorage.removeItem(ce),e.dispatch({type:x.RESET_USER}),e.dispatch({type:x.RESET_BOOK}),e.dispatch({type:x.RESET_APP_TEXT_PAGES}),A("/admin")},H=()=>a.jsx(oe,{isLoggedIn:!0,username:e.currentUser.username,isAdmin:e.currentUser.isAdmin,onLogOut:W}),z=t=>{b(t),e.dispatch({type:x.SET_BOOK,payload:{bookTitle:t}}),A("/admin/bookoverview")},N=()=>a.jsx(Ee,{children:a.jsx(re,{books:xe.map(t=>({bookTitle:t.bookTitle,onClick:()=>z(t.value)})),selectedBook:y})}),v=d.useCallback(()=>{var o;if(!((o=e.currentUser)!=null&&o.roles))return[];const t=e.currentUser.roles.reduce((r,n)=>{if(n.role!=="none"){const s=le(n.language);r.some(m=>m.value===s)||r.push({value:s,label:n.language})}return r},[]);return e.currentLanguage||e.dispatch({type:x.SET_CURRENT_LANGUAGE,payload:{language:t[0].value}}),t},[e.currentUser]);d.useEffect(()=>{const t=v();E(t),t.length>0&&!t.some(o=>o.value===h)&&B(t[0].value)},[e.currentUser,h,v]);const G=t=>{const o=t.target.value;B(o),e.dispatch({type:x.SET_CURRENT_LANGUAGE,payload:{language:o}})},K=()=>a.jsxs(_e,{children:[a.jsx(S,{color:"#155D74",fontWeight:"700",fontFamily:"'Baloo Da 2'",children:"App text:"}),a.jsx(k,{label:"",options:p,value:h,backgroundColor:"#fff",textColor:"#155D74",onChange:G})]});d.useEffect(()=>{const t=async()=>await L.getAllAppTexts();e.appTextPages&&e.appTextPages.length==0&&(c(!0),t().then(o=>{e.dispatch({type:x.SET_APP_TEXT_PAGES,payload:{appTextPages:o}}),o.map(r=>w(n=>[...n,{pageId:r.pageId,isChanged:!1}])),c(!1)}).catch(o=>{f.error(o instanceof Error?o.message:String(o),{position:"top-right",draggable:!0,theme:"colored",transition:C,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),c(!1)}))},[]),d.useEffect(()=>{I(e.appTextPages)},[e.appTextPages]);const X=(t,o)=>{var n;I(s=>s.map(u=>({...u,texts:u.texts.map(m=>m._id===t?{...m,text:{...m.text,[h]:o}}:m)})));const r=(n=T.find(s=>s.texts.find(u=>u._id==t)))==null?void 0:n.pageId;w(s=>s.map(u=>u.pageId==r?{...u,isChanged:!0}:u))},q=t=>{I(r=>r.map(n=>n.pageId===t.pageId?{...n,isCompleted:t.isCompleted,isPublished:t.isPublished}:n));const o={pageId:t.pageId,updates:{isCompleted:t.isCompleted,isPublished:t.isPublished}};c(!0),L.updateAppTextPage(o).then(r=>{f.success("Successfully updated!",{position:"top-right",draggable:!0,theme:"colored",transition:C,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3});const n=e.appTextPages.map(s=>s.pageId==t.pageId?{...s,isCompleted:t.isCompleted,isPublished:t.isPublished}:s);e.dispatch({type:x.SET_APP_TEXT_PAGES,payload:{appTextPages:n}}),c(!1)}).catch(r=>{f.error(r instanceof Error?r.message:String(r),{position:"top-right",draggable:!0,theme:"colored",transition:C,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),c(!1)})},Q=t=>{const o=T.find(n=>n.pageId==t),r={texts:(o==null?void 0:o.texts)||[]};c(!0),L.updateAppTexts(r).then(n=>{e.dispatch({type:x.SET_APP_TEXT_PAGES,payload:{appTextPages:T}}),w(s=>s.map(u=>u.pageId==t?{...u,isChanged:!1}:u)),f.success("Successfully updated!",{position:"top-right",draggable:!0,theme:"colored",transition:C,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),c(!1)}).catch(n=>{f.error(n instanceof Error?n.message:String(n),{position:"top-right",draggable:!0,theme:"colored",transition:C,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),c(!1)})},V=t=>{R(t),D(!0)},$=()=>T.map((t,o)=>{var r;return a.jsx(ve,{pageName:t.pageTitle,defaultLanguage:_,languages:p,currentLanguage:e.currentLanguage,currentLanguageLabel:de(h),currentUser:e.currentUser,pageId:t.pageId,terms:t.texts,isComplete:t.isCompleted,isPublish:t.isPublished,hasChangedText:((r=F.find(n=>n.pageId==t.pageId))==null?void 0:r.isChanged)||!1,onChangeDefaultLanguage:n=>O(n),onChangeInput:(n,s)=>X(n,s),onChangeAppTextPageStatus:n=>q(n),onClickImage:n=>V(n),onSave:n=>Q(n)},o)}),J=()=>a.jsxs(ke,{children:[a.jsx(ie,{tools:ze}),N(),K(),$()]});return a.jsxs(Pe,{flexDirection:U?"column":"row",children:[H(),J(),j&&a.jsx(He,{image:M,isOpen:j,onCancel:()=>D(!1)}),g&&a.jsx(ae,{}),a.jsx(ne,{})]})}function Ge(e){return{dispatch:e}}function Ke(e){return{currentUser:e.user.currentUser,bookInfos:e.book.bookInfos,currentLanguage:e.book.language,currentBook:e.book.book,appTextPages:e.translator.appTextPages}}const tt=Z(Ke,Ge)(Ne);export{tt as default};
