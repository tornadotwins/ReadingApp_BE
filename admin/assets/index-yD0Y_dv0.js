import{j as o,a as b}from"./createTheme-BALI1a3O.js";import{s as t,B as r,T as C,t as se,u as ue,K as de,F as S,Q as ce,E as ge,A as xe,H as he,w as fe,q as be}from"./App-Bdw6BpTK.js";import{b as Ce,d as me}from"./book.services-DPpFZPL-.js";import{I as z,g as ke,a as Se}from"./images-DAUHAXup.js";import{T as O,c as v,C as K,f as A,B as L,A as Be,h as ye,i as pe}from"./index-EvO0Tsir.js";import{S as Q}from"./index-BkzqFEF-.js";import{T as je,B as Te}from"./index-Dv8qobKz.js";t(r)({width:"100%",backgroundColor:"#F0F5FB",padding:"5px 20px"});const Oe=t(r)(({status:e})=>({width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #155D74",cursor:"pointer",backgroundColor:e==O?"#FFAA5D":e==v?"#155D74":e==K?"#F0F5FB":"#fff",color:e==O?"#155D74":e==v?"#fff":"#155D74"})),N=e=>{var s,g,u,x,a,h;return o.jsx(Oe,{status:e.isPublished?O:e.isCompleted?v:e.chapterInfo&&((g=(s=e.chapterInfo)==null?void 0:s.verses)==null?void 0:g.length)>0?K:A,onClick:()=>{var l;return e.onClick(((l=e.chapterInfo)==null?void 0:l.chapterId)||"")},children:o.jsx(C,{fontFamily:"Inter",fontSize:16,fontWeight:"500",children:e.isSpecialBook?((u=e.subBookInfo)==null?void 0:u.subBookNumber)==0?"Intr":(a=(x=e.subBookInfo)==null?void 0:x.subBookNumber)==null?void 0:a.toString():e.chapterInfo&&(e.chapterInfo.chapterNumber==0?"Intr":(h=e.chapterInfo.chapterNumber)==null?void 0:h.toString())})})},ve=t(r)({margin:"2px 0px",display:"flex"}),Ie=t(r)({width:"100px",minWidth:"100px",maxWidth:"200px",marginRight:"10px","& .MuiBox-root":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",padding:"9px 0px"}}),we=t(r)({display:"flex",flexGrow:1}),Fe=t(r)({display:"flex",justifyContent:"center",marginRight:"3px",minWidth:"45px","& >*":{flexGrow:1}}),Z=t(r)({display:"flex",flexWrap:"wrap",gap:"2px"});function W(e){var s,g,u,x,a,h,l,I;return o.jsxs(ve,{children:[!e.isQuranOrZabur&&e.subBook&&o.jsx(Ie,{children:o.jsx(C,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"400",children:(s=e.subBook.subBookTitle)==null?void 0:s[e.languageCode]})}),o.jsxs(we,{children:[o.jsx(Fe,{children:e.subBook&&!!e.subBook.noChapter&&((u=(g=e.subBook)==null?void 0:g.chapterInfos[0])==null?void 0:u.chapterNumber)==0&&o.jsx(N,{chapterInfo:e.subBook.chapterInfos[0],isCompleted:(a=(x=e.subBook.chapterInfos[0])==null?void 0:x.chapterIsCompleted)==null?void 0:a[e.languageCode],isPublished:(l=(h=e.subBook.chapterInfos[0])==null?void 0:h.chapterIsPublished)==null?void 0:l[e.languageCode],onClick:e.onChapterClick})}),!e.isQuranOrZabur&&o.jsx(Z,{children:e.subBook&&((I=e.subBook.chapterInfos)==null?void 0:I.map((n,B)=>{var f,m;return o.jsx(N,{subBookInfo:e.subBook,chapterInfo:n,isCompleted:((f=n==null?void 0:n.chapterIsCompleted)==null?void 0:f[e.languageCode])||!1,isPublished:((m=n==null?void 0:n.chapterIsPublished)==null?void 0:m[e.languageCode])||!1,onClick:e.onChapterClick},B)}))}),e.isQuranOrZabur&&o.jsx(Z,{children:e.book&&e.book.subBooks&&e.book.subBooks.map((n,B)=>{var f,m,y,w;return o.jsx(N,{subBookInfo:n,chapterInfo:n.chapterInfos[0],isCompleted:n.chapterInfos&&((m=(f=n.chapterInfos[0])==null?void 0:f.chapterIsCompleted)==null?void 0:m[e.languageCode])||!1,isPublished:n.chapterInfos&&((w=(y=n.chapterInfos[0])==null?void 0:y.chapterIsPublished)==null?void 0:w[e.languageCode])||!1,isSpecialBook:!0,onClick:()=>e.onChapterClick(n.chapterInfos&&(n==null?void 0:n.chapterInfos[0].chapterId))},B)})})]})]})}const Ae=t(r)(({isquranorzabur:e})=>({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",paddingRight:e=="true"?"120px":"0px",boxSizing:"border-box",maxWidth:"650px","@media screen and (max-width: 670px)":{paddingRight:"0px"}})),_e=t(r)({display:"flex",marginBottom:"15px"}),Ee=t("img")({width:"24px",height:"24px",marginRight:"10px"}),U=e=>o.jsxs(Ae,{isquranorzabur:e.isQuranOrZabur?"true":"false",children:[o.jsxs(_e,{children:[o.jsx(Ee,{src:z.icon_book}),o.jsx(C,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"700",children:`${e.bookTitle} text - ${e.language} - chapters:`})]}),!e.isQuranOrZabur&&e.bookInfo.subBooks.map((s,g)=>o.jsx(W,{subBook:s,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,onChapterClick:e.onClickSquare},g)),e.isQuranOrZabur&&o.jsx(W,{book:e.bookInfo,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,onChapterClick:e.onClickSquare})]});t(r)({width:"100%",backgroundColor:"#F0F5FB",padding:"5px 20px"});const Ne=t(r)(({status:e})=>({width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #155D74",cursor:"pointer",backgroundColor:e==O?"#FFAA5D":e==v?"#155D74":"#fff",color:e==O?"#155D74":e==v?"#fff":"#155D74"})),D=e=>{var s;return o.jsx(Ne,{status:e.audioStatus,onClick:e.onClick,children:o.jsx(C,{fontFamily:"Inter",fontSize:16,fontWeight:"500",children:e.chapterNumber==0?"Intr":(s=e.chapterNumber)==null?void 0:s.toString()})})},De=t(r)({margin:"10px 0px",display:"flex"}),Re=t(r)({width:"100px",minWidth:"100px",maxWidth:"200px",marginRight:"10px","& .MuiBox-root":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",padding:"9px 0px"}}),Le=t(r)({display:"flex",flexGrow:1}),Qe=t(r)({display:"flex",justifyContent:"center",marginRight:"3px",minWidth:"45px","& >*":{flexGrow:1}}),$=t(r)({display:"flex",flexWrap:"wrap",gap:"2px"});function P(e){var s,g;return o.jsxs(De,{children:[!e.isQuranOrZabur&&e.subBook&&o.jsx(Re,{children:o.jsx(C,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"400",children:(s=e.subBook.subBookTitle)==null?void 0:s[e.languageCode]})}),o.jsxs(Le,{children:[o.jsx(Qe,{children:e.subBook&&!!e.subBook.noChapter&&e.subBook.chapterInfos[0].chapterNumber==0&&o.jsx(D,{chapterNumber:0,onClick:()=>{},audioStatus:A})}),!e.isQuranOrZabur&&o.jsx($,{children:e.subBook&&((g=e.subBook.chapterInfos)==null?void 0:g.map((u,x)=>{var a;return o.jsx(D,{chapterNumber:u.chapterNumber,audioStatus:((a=u==null?void 0:u.chapterAudio)==null?void 0:a[e.languageCode])||A,onClick:()=>{}},x)}))}),e.isQuranOrZabur&&o.jsx($,{children:e.book&&e.book.subBooks&&e.book.subBooks.map((u,x)=>{var a,h;return o.jsx(D,{chapterNumber:u==null?void 0:u.subBookNumber,audioStatus:u.chapterInfos&&((h=(a=u.chapterInfos[0])==null?void 0:a.chapterAudio)==null?void 0:h[e.languageCode])||A,onClick:()=>{}},x)})})]})]})}const Ze=t(r)(({isquranorzabur:e})=>({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",paddingRight:e=="true"?"120px":"0px",boxSizing:"border-box",maxWidth:"650px","@media screen and (max-width: 670px)":{paddingRight:"0px"}})),We=t(r)({display:"flex",marginBottom:"15px"}),Ue=t("img")({width:"24px",height:"24px",marginRight:"10px"}),q=e=>o.jsxs(Ze,{isquranorzabur:e.isQuranOrZabur?"true":"false",children:[o.jsxs(We,{children:[o.jsx(Ue,{src:z.icon_audio}),o.jsx(C,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"700",children:`${e.bookTitle} Audio - ${e.language} - chapters:`})]}),!e.isQuranOrZabur&&e.bookInfo.subBooks.map((s,g)=>o.jsx(P,{subBook:s,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur},g)),e.isQuranOrZabur&&o.jsx(P,{book:e.bookInfo,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur})]}),$e=t(r)({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",maxWidth:"650px"}),Pe=t(r)({display:"flex"});t("img")({width:"24px",height:"24px",marginRight:"10px"});const qe=e=>o.jsx($e,{children:o.jsx(Pe,{children:o.jsx(C,{color:"red",fontFamily:"'Baloo Da 2'",fontWeight:"700",fontSize:30,children:"Coming Soon"})})}),Ge=t(r)({position:"relative",minHeight:"100vh",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),ze=t(r)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),Ke=t(r)({width:"650px",display:"flex",justifyContent:"center",alignItems:"center",margin:"20px 40px 0px 40px","& .MuiFormControl-root":{width:"unset",marginLeft:"15px"},"& .MuiBox-root":{fontFamily:'"Baloo Da 2" !important'},"@media screen and (max-width: 670px)":{width:"unset"}}),He=t(r)({margin:"20px 40px"}),Me=t(r)({margin:"5px 40px",padding:"15px",maxWidth:"650px",boxSizing:"border-box",display:"flex",justifyContent:"center","& .MuiButtonBase-root":{boxSizing:"border-box",textTransform:"none",backgroundColor:"#FFAA5D",padding:"8px 15px",borderRadius:"0px",border:"1px solid #474747","&:hover":{backgroundColor:"#EECC5D"}}}),G=[{value:"Text",label:"Text"},{value:"Audio",label:"Audio"},{value:"Reference",label:"Reference"}],Ve=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}],Xe=e=>{const[s,g]=b.useState([]),[u,x]=b.useState(!1),[a,h]=b.useState(null),[l,I]=b.useState(e.currentBook||L),[n,B]=b.useState(""),[f,m]=b.useState(G[0].value),y=ue(),w=de(),R=b.useCallback(()=>{var c;if(!((c=e.currentUser)!=null&&c.roles))return[];const i=e.currentUser.roles.reduce((d,k)=>{if(k.role!=="none"){const E=ke(k.language);d.some(F=>F.value===E)||d.push({value:E,label:k.language})}return d},[]);return e.currentLanguage||e.dispatch({type:S.SET_CURRENT_LANGUAGE,payload:{language:i[0].value}}),i},[e.currentUser]);b.useEffect(()=>{const i=R();g(i),i.length>0&&!i.some(c=>c.value===n)&&B(i[0].value)},[e.currentUser,n,R]),b.useEffect(()=>{l=="App Text"?X():(async()=>{x(!0);try{const c=e.bookInfos.find(d=>d.bookTitle.en===l);if(c)h(c);else{const d=await Ce.getBookInfoByTitle(l),k={bookId:d.bookId,bookImage:d.bookImage,bookTitle:d.bookTitle,subBooks:d.subBooks};h(d),e.dispatch({type:S.ADD_BOOKINFO,payload:{bookInfo:k}})}x(!1)}catch{xe.error("Failed to fetch book information",{position:"top-right",draggable:!0,theme:"colored",transition:he,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),x(!1)}})()},[l,e.bookInfos]);const H=i=>{const c=i.target.value;B(c),e.dispatch({type:S.SET_CURRENT_LANGUAGE,payload:{language:c}})},M=i=>{const c=i.target.value;m(c)},V=i=>{I(i),e.dispatch({type:S.SET_BOOK,payload:{bookTitle:i}})},_=(i,c=!1)=>{const d=a==null?void 0:a.subBooks.find(j=>{var F;return(F=j==null?void 0:j.chapterInfos)==null?void 0:F.find(le=>le.chapterId==i)}),k=d==null?void 0:d.chapterInfos.find(j=>j.chapterId==i);y("/admin/chapteroverview",{state:{chapterId:i,isImport:c,subBookInfo:d,chapterInfo:k,languages:s}})},X=()=>{y("/admin/apptext")},Y=()=>{localStorage.removeItem(Be),e.dispatch({type:S.RESET_USER}),e.dispatch({type:S.RESET_BOOK}),e.dispatch({type:S.RESET_APP_TEXT_PAGES}),y("/admin")},T=l===L||l===ye,p=Se(n),J=()=>o.jsx(fe,{isLoggedIn:!0,username:e.currentUser.username,isAdmin:e.currentUser.isAdmin,onLogOut:Y}),ee=()=>o.jsx(He,{children:o.jsx(Te,{books:pe.map(i=>({bookTitle:i.bookTitle,onClick:()=>V(i.value)})),selectedBook:l})}),oe=()=>o.jsxs(Ke,{children:[o.jsx(C,{color:"#155D74",fontWeight:"700",fontFamily:"'Baloo Da 2'",children:`${l} ${T?"overview":""}`}),o.jsx(Q,{label:"",options:s,value:n,backgroundColor:"#fff",textColor:"#155D74",onChange:H}),!T&&o.jsx(Q,{label:"",options:G,value:f,backgroundColor:"#fff",textColor:"#155D74",onChange:M})]}),ne=()=>o.jsx(Me,{children:o.jsx(be,{icon:o.jsx(me,{}),label:`Import ${f} into ${p} ${l}`,onClick:()=>_((a==null?void 0:a.subBooks[0].chapterInfos[0].chapterId)||"",!0)})}),te=()=>o.jsx(o.Fragment,{children:a&&!T&&o.jsxs(o.Fragment,{children:[f==="Text"&&o.jsx(U,{bookTitle:l,language:p,languageCode:n,bookInfo:a,isQuranOrZabur:!1,onClickSquare:_}),f==="Audio"&&o.jsx(q,{bookTitle:l,language:p,languageCode:n,bookInfo:a,isQuranOrZabur:!1}),f==="Reference"&&o.jsx(qe,{bookTitle:l,language:p,languageCode:n,bookInfo:a})]})}),ae=()=>o.jsx(o.Fragment,{children:a&&T&&o.jsxs(o.Fragment,{children:[o.jsx(U,{bookTitle:l,language:p,languageCode:n,bookInfo:a,isQuranOrZabur:!0,onClickSquare:_}),o.jsx(q,{bookTitle:l,language:p,languageCode:n,bookInfo:a,isQuranOrZabur:!0})]})}),re=()=>o.jsxs(o.Fragment,{children:[te(),ae()]}),ie=()=>o.jsxs(ze,{children:[o.jsx(je,{tools:Ve}),ee(),oe(),!T&&ne(),re()]});return o.jsxs(o.Fragment,{children:[o.jsxs(Ge,{flexDirection:w?"column":"row",children:[J(),ie()]}),o.jsx(ce,{}),u&&o.jsx(ge,{})]})};function Ye(e){return{dispatch:e}}function Je(e){return{currentUser:e.user.currentUser,bookInfos:e.book.bookInfos,currentLanguage:e.book.language,currentBook:e.book.book}}const lo=se(Je,Ye)(Xe);export{lo as default};
