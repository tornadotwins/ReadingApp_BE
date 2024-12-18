import{j as t,a as b}from"./createTheme-CMG5zAib.js";import{s as a,B as l,T as k,t as ce,u as de,K as ue,F as T,Q as ge,E as xe,A as he,H as fe,w as me,q as Ce}from"./App-Cg6pEGzx.js";import{d as be}from"./CloudUpload-BbCxKqwH.js";import{I as K,g as Se,a as ke}from"./images-Bk7O4bbL.js";import{T as B,c as O,C as H,f as _,B as Q,A as ve,h as pe,i as ye}from"./index-Cio0BdKC.js";import{S as Z}from"./index-DFvoHOmC.js";import{T as Te,B as Be}from"./index-8L1nlNvZ.js";import{b as Oe}from"./book.services-BGpOFTU4.js";a(l)({width:"100%",backgroundColor:"#F0F5FB",padding:"5px 20px"});const je=a(l)(({status:e})=>({width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #155D74",cursor:"pointer",backgroundColor:e==B?"#FFAA5D":e==O?"#155D74":e==H?"#F0F5FB":"#fff",color:e==B?"#155D74":e==O?"#fff":"#155D74"})),E=e=>{var u,x,r,h,s,c;return t.jsx(je,{status:e.isPublished?B:e.isCompleted?O:e.chapterInfo&&!((x=(u=e.chapterInfo)==null?void 0:u.verses)!=null&&x.length)?H:_,onClick:()=>{var i;return e.onClick(((i=e.chapterInfo)==null?void 0:i.chapterId)||"")},children:t.jsx(k,{fontFamily:"Inter",fontSize:16,fontWeight:"500",children:e.isSpecialBook?((r=e.subBookInfo)==null?void 0:r.subBookNumber)==0?"Intr":(s=(h=e.subBookInfo)==null?void 0:h.subBookNumber)==null?void 0:s.toString():e.chapterInfo&&(e.chapterInfo.chapterNumber==0?"Intr":(c=e.chapterInfo.chapterNumber)==null?void 0:c.toString())})})},Ie=a(l)({margin:"2px 0px",display:"flex"}),Ae=a(l)({width:"100px",minWidth:"100px",maxWidth:"200px",marginRight:"10px","& .MuiBox-root":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",padding:"9px 0px"}}),we=a(l)({display:"flex",flexGrow:1}),Fe=a(l)({display:"flex",justifyContent:"center",marginRight:"3px",minWidth:"45px","& >*":{flexGrow:1}}),W=a(l)({display:"flex",flexWrap:"wrap",gap:"2px"});function U(e){var u,x,r,h,s,c,i,v;return t.jsxs(Ie,{children:[!e.isQuranOrZabur&&e.subBook&&t.jsx(Ae,{children:t.jsx(k,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"400",children:(u=e.subBook.subBookTitle)==null?void 0:u[e.languageCode]})}),t.jsxs(we,{children:[t.jsx(Fe,{children:e.subBook&&!!e.subBook.noChapter&&((r=(x=e.subBook)==null?void 0:x.chapterInfos[0])==null?void 0:r.chapterNumber)==0&&t.jsx(E,{chapterInfo:e.subBook.chapterInfos[0],isCompleted:(s=(h=e.subBook.chapterInfos[0])==null?void 0:h.chapterIsCompleted)==null?void 0:s[e.languageCode],isPublished:(i=(c=e.subBook.chapterInfos[0])==null?void 0:c.chapterIsPublished)==null?void 0:i[e.languageCode],onClick:e.onChapterClick})}),!e.isQuranOrZabur&&t.jsx(W,{children:e.subBook&&((v=e.subBook.chapterInfos)==null?void 0:v.map((o,j)=>{var f,p;return t.jsx(E,{subBookInfo:e.subBook,chapterInfo:o,isCompleted:((f=o==null?void 0:o.chapterIsCompleted)==null?void 0:f[e.languageCode])||!1,isPublished:((p=o==null?void 0:o.chapterIsPublished)==null?void 0:p[e.languageCode])||!1,onClick:e.onChapterClick},j)}))}),e.isQuranOrZabur&&t.jsx(W,{children:e.book&&e.book.subBooks&&e.book.subBooks.map((o,j)=>{var f,p,y,F;return t.jsx(E,{subBookInfo:o,chapterInfo:o.chapterInfos[0],isCompleted:o.chapterInfos&&((p=(f=o.chapterInfos[0])==null?void 0:f.chapterIsCompleted)==null?void 0:p[e.languageCode])||!1,isPublished:o.chapterInfos&&((F=(y=o.chapterInfos[0])==null?void 0:y.chapterIsPublished)==null?void 0:F[e.languageCode])||!1,isSpecialBook:!0,onClick:()=>e.onChapterClick(o.chapterInfos&&(o==null?void 0:o.chapterInfos[0].chapterId))},j)})})]})]})}const _e=a(l)(({isquranorzabur:e})=>({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",paddingRight:e=="true"?"120px":"0px",boxSizing:"border-box",maxWidth:"650px","@media screen and (max-width: 670px)":{paddingRight:"0px"}})),De=a(l)({display:"flex",marginBottom:"15px"}),Ee=a("img")({width:"24px",height:"24px",marginRight:"10px"}),P=e=>t.jsxs(_e,{isquranorzabur:e.isQuranOrZabur?"true":"false",children:[t.jsxs(De,{children:[t.jsx(Ee,{src:K.icon_book}),t.jsx(k,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"700",children:`${e.bookTitle} text - ${e.language} - chapters:`})]}),!e.isQuranOrZabur&&e.bookInfo.subBooks.map((u,x)=>t.jsx(U,{subBook:u,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,onChapterClick:e.onClickSquare},x)),e.isQuranOrZabur&&t.jsx(U,{book:e.bookInfo,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,onChapterClick:e.onClickSquare})]});a(l)({width:"100%",backgroundColor:"#F0F5FB",padding:"5px 20px"});const Ne=a(l)(({status:e})=>({width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #155D74",cursor:"pointer",backgroundColor:e==B?"#FFAA5D":e==O?"#155D74":"#fff",color:e==B?"#155D74":e==O?"#fff":"#155D74"})),N=e=>{var u;return t.jsx(Ne,{status:e.audioStatus,onClick:()=>e.onClick(e.chapterId),children:t.jsx(k,{fontFamily:"Inter",fontSize:16,fontWeight:"500",children:e.chapterNumber==0?"Intr":(u=e.chapterNumber)==null?void 0:u.toString()})})},Re=a(l)({margin:"10px 0px",display:"flex"}),Le=a(l)({width:"100px",minWidth:"100px",maxWidth:"200px",marginRight:"10px","& .MuiBox-root":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",padding:"9px 0px"}}),Qe=a(l)({display:"flex",flexGrow:1}),Ze=a(l)({display:"flex",justifyContent:"center",marginRight:"3px",minWidth:"45px","& >*":{flexGrow:1}}),$=a(l)({display:"flex",flexWrap:"wrap",gap:"2px"});function q(e){var u,x;return t.jsxs(Re,{children:[!e.isQuranOrZabur&&e.subBook&&t.jsx(Le,{children:t.jsx(k,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"400",children:(u=e.subBook.subBookTitle)==null?void 0:u[e.languageCode]})}),t.jsxs(Qe,{children:[t.jsx(Ze,{children:e.subBook&&!!e.subBook.noChapter&&e.subBook.chapterInfos[0].chapterNumber==0&&t.jsx(N,{chapterNumber:0,chapterId:e.subBook.chapterInfos[0].chapterId,onClick:e.moveToAudioOverview,audioStatus:_})}),!e.isQuranOrZabur&&t.jsx($,{children:e.subBook&&((x=e.subBook.chapterInfos)==null?void 0:x.map((r,h)=>{const c=(Array.isArray(r.chapterAudio)?r.chapterAudio:[]).find(i=>i.language===e.languageCode);return t.jsx(N,{chapterNumber:r.chapterNumber,chapterId:r.chapterId,audioStatus:c!=null&&c.isPublished?B:c!=null&&c.isCompleted?O:_,onClick:e.moveToAudioOverview},h)}))}),e.isQuranOrZabur&&t.jsx($,{children:e.book&&e.book.subBooks&&e.book.subBooks.map((r,h)=>{var i,v;const c=(Array.isArray((i=r==null?void 0:r.chapterInfos[0])==null?void 0:i.chapterAudio)?r==null?void 0:r.chapterInfos[0].chapterAudio:[]).find(o=>o.language==e.languageCode);return t.jsx(N,{chapterNumber:r==null?void 0:r.subBookNumber,chapterId:(v=r==null?void 0:r.chapterInfos[0])==null?void 0:v.chapterId,audioStatus:c!=null&&c.isPublished?B:c!=null&&c.isCompleted?O:_,onClick:e.moveToAudioOverview},h)})})]})]})}const We=a(l)(({isquranorzabur:e})=>({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",paddingRight:e=="true"?"120px":"0px",boxSizing:"border-box",maxWidth:"650px","@media screen and (max-width: 670px)":{paddingRight:"0px"}})),Ue=a(l)({display:"flex",marginBottom:"15px"}),Pe=a("img")({width:"24px",height:"24px",marginRight:"10px"}),G=e=>t.jsxs(We,{isquranorzabur:e.isQuranOrZabur?"true":"false",children:[t.jsxs(Ue,{children:[t.jsx(Pe,{src:K.icon_audio}),t.jsx(k,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"700",children:`${e.bookTitle} Audio - ${e.language} - chapters:`})]}),!e.isQuranOrZabur&&e.bookInfo.subBooks.map((u,x)=>t.jsx(q,{subBook:u,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,moveToAudioOverview:e.moveToAudioOverview},x)),e.isQuranOrZabur&&t.jsx(q,{book:e.bookInfo,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,moveToAudioOverview:e.moveToAudioOverview})]}),$e=a(l)({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",maxWidth:"650px"}),qe=a(l)({display:"flex"});a("img")({width:"24px",height:"24px",marginRight:"10px"});const Ge=e=>t.jsx($e,{children:t.jsx(qe,{children:t.jsx(k,{color:"red",fontFamily:"'Baloo Da 2'",fontWeight:"700",fontSize:30,children:"Coming Soon"})})}),ze=a(l)({position:"relative",minHeight:"100vh",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),Ke=a(l)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),He=a(l)({width:"650px",display:"flex",justifyContent:"center",alignItems:"center",margin:"20px 40px 0px 40px","& .MuiFormControl-root":{width:"unset",marginLeft:"15px"},"& .MuiBox-root":{fontFamily:'"Baloo Da 2" !important'},"@media screen and (max-width: 670px)":{width:"unset"}}),Me=a(l)({margin:"20px 40px"}),Ve=a(l)({margin:"5px 40px",padding:"15px",maxWidth:"650px",boxSizing:"border-box",display:"flex",justifyContent:"center","& .MuiButtonBase-root":{boxSizing:"border-box",textTransform:"none",backgroundColor:"#FFAA5D",padding:"8px 15px",borderRadius:"0px",border:"1px solid #474747","&:hover":{backgroundColor:"#EECC5D"}}}),z=[{value:"Text",label:"Text"},{value:"Audio",label:"Audio"},{value:"Reference",label:"Reference"}],Xe=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}],Ye=e=>{const[u,x]=b.useState([]),[r,h]=b.useState(!1),[s,c]=b.useState(null),[i,v]=b.useState(e.currentBook||Q),[o,j]=b.useState(""),[f,p]=b.useState(z[0].value),y=de(),F=ue(),R=b.useCallback(()=>{var d;if(!((d=e.currentUser)!=null&&d.roles))return[];const n=e.currentUser.roles.reduce((g,S)=>{if(S.role!=="none"){const m=Se(S.language);g.some(A=>A.value===m)||g.push({value:m,label:S.language})}return g},[]);return e.currentLanguage||e.dispatch({type:T.SET_CURRENT_LANGUAGE,payload:{language:n[0].value}}),n},[e.currentUser]);b.useEffect(()=>{const n=R();x(n),n.length>0&&!n.some(d=>d.value===o)&&j(n[0].value)},[e.currentUser,o,R]),b.useEffect(()=>{i=="App Text"?Y():(async()=>{h(!0);try{const d=e.bookInfos.find(g=>g.bookTitle.en===i);if(d)c(d);else{const g=await Oe.getBookInfoByTitle(i),S={bookId:g.bookId,bookImage:g.bookImage,bookTitle:g.bookTitle,subBooks:g.subBooks};c(g),e.dispatch({type:T.ADD_BOOKINFO,payload:{bookInfo:S}})}h(!1)}catch{he.error("Failed to fetch book information",{position:"top-right",draggable:!0,theme:"colored",transition:fe,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),h(!1)}})()},[i,e.bookInfos]);const M=n=>{const d=n.target.value;j(d),e.dispatch({type:T.SET_CURRENT_LANGUAGE,payload:{language:d}})},V=n=>{const d=n.target.value;p(d)},X=n=>{v(n),e.dispatch({type:T.SET_BOOK,payload:{bookTitle:n}})},D=(n,d=!1)=>{const g=s==null?void 0:s.subBooks.find(C=>{var A;return(A=C==null?void 0:C.chapterInfos)==null?void 0:A.find(se=>se.chapterId==n)}),S=g==null?void 0:g.chapterInfos.find(C=>C.chapterId==n);y("/admin/chapteroverview",{state:{chapterId:n,isImport:d,subBookInfo:g,chapterInfo:S,languages:u}})},Y=()=>{y("/admin/apptext")},L=n=>{const d=s==null?void 0:s.subBooks.find(m=>{var C;return(C=m==null?void 0:m.chapterInfos)==null?void 0:C.find(A=>A.chapterId==n)}),g=d==null?void 0:d.chapterInfos.find(m=>m.chapterId==n);y("/admin/audiooverview",{state:{chapterId:n,subBookInfo:d,chapterInfo:g,languages:u}})},J=()=>{localStorage.removeItem(ve),e.dispatch({type:T.RESET_USER}),e.dispatch({type:T.RESET_BOOK}),e.dispatch({type:T.RESET_APP_TEXT_PAGES}),y("/admin")},w=i===Q||i===pe,I=ke(o),ee=()=>t.jsx(me,{isLoggedIn:!0,username:e.currentUser.username,isAdmin:e.currentUser.isAdmin,onLogOut:J}),te=()=>t.jsx(Me,{children:t.jsx(Be,{books:ye.map(n=>({bookTitle:n.bookTitle,onClick:()=>X(n.value)})),selectedBook:i})}),oe=()=>t.jsxs(He,{children:[t.jsx(k,{color:"#155D74",fontWeight:"700",fontFamily:"'Baloo Da 2'",children:`${i} ${w?"overview":""}`}),t.jsx(Z,{label:"",options:u,value:o,backgroundColor:"#fff",textColor:"#155D74",onChange:M}),!w&&t.jsx(Z,{label:"",options:z,value:f,backgroundColor:"#fff",textColor:"#155D74",onChange:V})]}),ae=()=>t.jsx(Ve,{children:t.jsx(Ce,{icon:t.jsx(be,{}),label:`Import ${f} into ${I} ${i}`,onClick:()=>D((s==null?void 0:s.subBooks[0].chapterInfos[0].chapterId)||"",!0)})}),ne=()=>t.jsx(t.Fragment,{children:s&&!w&&t.jsxs(t.Fragment,{children:[f==="Text"&&t.jsx(P,{bookTitle:i,language:I,languageCode:o,bookInfo:s,isQuranOrZabur:!1,onClickSquare:D}),f==="Audio"&&t.jsx(G,{bookTitle:i,language:I,languageCode:o,bookInfo:s,isQuranOrZabur:!1,moveToAudioOverview:L}),f==="Reference"&&t.jsx(Ge,{bookTitle:i,language:I,languageCode:o,bookInfo:s})]})}),re=()=>t.jsx(t.Fragment,{children:s&&w&&t.jsxs(t.Fragment,{children:[t.jsx(P,{bookTitle:i,language:I,languageCode:o,bookInfo:s,isQuranOrZabur:!0,onClickSquare:D}),t.jsx(G,{bookTitle:i,language:I,languageCode:o,bookInfo:s,isQuranOrZabur:!0,moveToAudioOverview:L})]})}),ie=()=>t.jsxs(t.Fragment,{children:[ne(),re()]}),le=()=>t.jsxs(Ke,{children:[t.jsx(Te,{tools:Xe}),te(),oe(),!w&&ae(),ie()]});return t.jsxs(t.Fragment,{children:[t.jsxs(ze,{flexDirection:F?"column":"row",children:[ee(),le()]}),t.jsx(ge,{}),r&&t.jsx(xe,{})]})};function Je(e){return{dispatch:e}}function et(e){return{currentUser:e.user.currentUser,bookInfos:e.book.bookInfos,currentLanguage:e.book.language,currentBook:e.book.book}}const ct=ce(et,Je)(Ye);export{ct as default};
