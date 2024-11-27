import{j as t,a as s}from"./createTheme-C7nUuxX_.js";import{s as o,z as a,h as l,I as P,A as U,D as O,E as M,X as c,N}from"./App-B9rHvszB.js";import{T as R,B as H}from"./index-CpFKnreP.js";import{I as z,g as K,a as b}from"./images-DzPc_l-t.js";import{o as G,A as X,i as q}from"./index-DV8uR7_z.js";import{S}from"./index-HJ1AIixL.js";import{A as V}from"./index-BnRBUWMx.js";const $=o(a)({position:"relative",minHeight:"100vh",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),J=o(a)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),Q=o(a)({margin:"20px 40px"}),Y=o(a)({width:"650px",display:"flex",justifyContent:"center",alignItems:"center",margin:"20px 40px 0px 40px","& .MuiFormControl-root":{width:"unset",marginLeft:"15px"},"& .MuiBox-root":{fontFamily:'"Baloo Da 2" !important'},"@media screen and (max-width: 670px)":{width:"unset"}}),Z=o(a)({width:"100%"}),ee=o(a)({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px 0px","& >:first-of-type":{minWidth:"200px"}}),te=o(a)({display:"flex",alignItems:"center","& >.MuiBox-root: first-of-type":{minWidth:"200px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),ne=o(a)({display:"flex",alignItems:"center"}),oe=o(a)({display:"flex",justifyContent:"end",width:"300px",padding:"0px","& >.MuiBox-root":{width:"100%",padding:"0px !important","& >.MuiFormControl-root":{width:"100%",border:"1px solid #155D74","& input":{fontFamily:'"Baloo Da 2" !important'}}}}),ae=o("img")({width:"20px",height:"20px",marginRight:"10px","&:hover":{cursor:"pointer"}});function re(e){return t.jsxs(Z,{children:[e.terms.map((i,d)=>t.jsxs(ee,{children:[t.jsxs(te,{children:[t.jsx(l,{fontFamily:"'Baloo Da 2'",fontWeight:"400",fontSize:16,lineHeight:24,color:"#A1A1A1",children:i.variable}),t.jsxs(ne,{children:[t.jsx(ae,{src:z.icon_preview}),t.jsx(l,{fontFamily:"'Baloo Da 2'",fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",children:i.defaultTerm})]})]}),t.jsx(oe,{children:t.jsx(P,{value:i.currentTerm,onChange:()=>{}})})]},d)),t.jsx(l,{color:"#A1A1A1",textAlign:"center",fontFamily:"'Baloo Da 2'",children:"Of course this list goes on as long as it is but it’s short here for the design"})]})}const ie=o(a)({borderBottom:"1px solid #155D74",display:"flex",alignItems:"center",justifyContent:"space-between",boxSizing:"border-box",padding:"10px 0px"}),se=o(a)({display:"flex",alignItems:"center","& >:first-of-type":{minWidth:"200px"}}),le=o(a)(({isdisable:e})=>({display:"flex",justifyContent:"space-between",alignItems:"center",width:"300px","& .MuiButtonBase-root":{width:"140px",boxSizing:"border-box",padding:"8px 14px",backgroundColor:e=="true"?"#A1A1A1":"#FFAA5D",borderRadius:"0px",border:"1px solid #474747",textTransform:"none !important",cursor:e=="true"?"not-allowed":"pointer","& .MuiBox-root":{fontWeight:"500 !important"}}}));function ue(e){return t.jsxs(ie,{children:[t.jsxs(se,{children:[t.jsx(l,{color:"#A1A1A1",fontFamily:"'Baloo Da 2'",children:"Variable"}),t.jsx(S,{label:"",options:e.languages,value:e.language,backgroundColor:"#fff",textColor:"#155D74",onChange:()=>{}})]}),t.jsxs(le,{isdisable:e.disable?"true":"false",children:[t.jsx(l,{fontFamily:"'Baloo Da 2'",fontWeight:"700",color:"#155D74",children:e.currentLanguage}),t.jsx(U,{label:"Save Changes",disabled:e.disable,onClick:()=>{console.log("clicked")}})]})]})}const ce=o(a)({border:"1px solid #1B7695",backgroundColor:"#F0F5FB",boxSizing:"border-box",padding:"20px",margin:"20px 40px","& .MuiAccordionSummary-content > .MuiBox-root":{justifyContent:"space-between !important"},"& .MuiAccordionDetails-root":{paddingLeft:"25px !important",paddingBottom:"0px !important"},"& .MuiAccordionSummary-content > .MuiBox-root :nth-of-type(2)":{padding:"0px !important"}});function de(e){return t.jsx(ce,{children:t.jsx(V,{label:e.pageName,hasSwitches:!0,summaryIcon:!0,currentUser:e.currentUser,isComplete:e.isComplete,isPublish:e.isPublish,onCompleteChange:i=>e.onChangeStatus(i,e.isPublish||!1),onPublishChange:i=>e.onChangeStatus(e.isComplete||!1,i),detail:t.jsxs(t.Fragment,{children:[t.jsx(ue,{languages:e.languages,language:e.languageCode,currentLanguage:e.currentLanguage,disable:e.disable,onSave:()=>{}}),t.jsx(re,{terms:e.terms})]})})})}const ge=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}];function me(e){const[i,d]=s.useState(G),[x,y]=s.useState([]),[u,h]=s.useState(""),[B,j]=s.useState(!1),[T,L]=s.useState(!1),f=M(),A=()=>{localStorage.removeItem(X),e.dispatch({type:c.RESET_USER}),e.dispatch({type:c.RESET_BOOK}),f("/admin")},v=()=>t.jsx(N,{isLoggedIn:!0,username:e.currentUser.username,isAdmin:e.currentUser.isAdmin,onLogOut:A}),w=n=>{d(n),e.dispatch({type:c.SET_BOOK,payload:{bookTitle:n}}),f("/admin/bookoverview")},k=()=>t.jsx(Q,{children:t.jsx(H,{books:q.map(n=>({bookTitle:n.bookTitle,onClick:()=>w(n.value)})),selectedBook:i})}),p=s.useCallback(()=>{var r;if(!((r=e.currentUser)!=null&&r.roles))return[];const n=e.currentUser.roles.reduce((g,m)=>{if(m.role!=="none"){const C=K(m.language);g.some(_=>_.value===C)||g.push({value:C,label:m.language})}return g},[]);return e.currentLanguage||e.dispatch({type:c.SET_CURRENT_LANGUAGE,payload:{language:n[0].value}}),n},[e.currentUser]);s.useEffect(()=>{const n=p();y(n),n.length>0&&!n.some(r=>r.value===u)&&h(n[0].value)},[e.currentUser,u,p]);const D=n=>{const r=n.target.value;h(r),e.dispatch({type:c.SET_CURRENT_LANGUAGE,payload:{language:r}})},E=()=>t.jsxs(Y,{children:[t.jsx(l,{color:"#155D74",fontWeight:"700",fontFamily:"'Baloo Da 2'",children:"App text:"}),t.jsx(S,{label:"",options:x,value:u,backgroundColor:"#fff",textColor:"#155D74",onChange:D})]}),I=(n,r)=>{j(n),L(r)},F=()=>t.jsx(de,{pageName:"Welcome Page",languageCode:u,languageLabel:b(u),languages:x,currentLanguage:b(e.currentLanguage),currentUser:e.currentUser,disable:!0,isComplete:B,isPublish:T,terms:[{variable:"Welcome",defaultTerm:"Welcome default",currentTerm:"Welcome Edit"},{variable:"LogIn",defaultTerm:"Log In",currentTerm:"Log In Edit"}],onChangeStatus:(n,r)=>I(n,r)}),W=()=>t.jsxs(J,{children:[t.jsx(R,{tools:ge}),k(),E(),F()]});return t.jsxs($,{children:[v(),W()]})}function xe(e){return{dispatch:e}}function he(e){return{currentUser:e.user.currentUser,bookInfos:e.book.bookInfos,currentLanguage:e.book.language,currentBook:e.book.book}}const Te=O(he,xe)(me);export{Te as default};