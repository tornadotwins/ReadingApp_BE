import{j as t,a as v}from"./createTheme-tocccVAJ.js";import{s as o,B as i,T as O,t as de,u as ce,K as ge,F as j,Q as xe,E as he,A as fe,H as me,w as Ce,q as be}from"./App-CLwcNnbd.js";import{d as ke}from"./CloudUpload-BK7lh2bS.js";import{I as X,g as Se,a as ve}from"./images-2K4lWapL.js";import{T as I,f as A,C as ee,h as P,B as $,b as ye,i as Te,j as Oe,J as pe,k as Be,n as je,o as Ie}from"./index-cDiy0DkW.js";import{S as q}from"./index-oHYg_b6-.js";import{T as Ae,B as we}from"./index-pJJicgg7.js";import{b as Fe}from"./book.services-CjphgnEu.js";o(i)({width:"100%",backgroundColor:"#F0F5FB",padding:"5px 20px"});const Ne=o(i)(({status:e})=>({width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #155D74",cursor:"pointer",backgroundColor:e==I?"#FFAA5D":e==A?"#155D74":e==ee?"#F0F5FB":"#fff",color:e==I?"#155D74":e==A?"#fff":"#155D74"})),Z=e=>{var c,x,n,f,l,u;return t.jsx(Ne,{status:e.isPublished?I:e.isCompleted?A:e.chapterInfo&&!((x=(c=e.chapterInfo)==null?void 0:c.verses)!=null&&x.length)?ee:P,onClick:()=>{var a;return e.onClick(((a=e.chapterInfo)==null?void 0:a.chapterId)||"")},children:t.jsx(O,{fontFamily:"Inter",fontSize:16,fontWeight:"500",children:e.isSpecialBook?((n=e.subBookInfo)==null?void 0:n.subBookNumber)==0?"Intr":(l=(f=e.subBookInfo)==null?void 0:f.subBookNumber)==null?void 0:l.toString():e.chapterInfo&&(e.chapterInfo.chapterNumber==0?"Intr":(u=e.chapterInfo.chapterNumber)==null?void 0:u.toString())})})},_e=o(i)({margin:"2px 0px",display:"flex"}),Re=o(i)({width:"100px",minWidth:"100px",maxWidth:"200px",marginRight:"10px","& .MuiBox-root":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",padding:"9px 0px"}}),Ee=o(i)({display:"flex",flexGrow:1}),De=o(i)({display:"flex",justifyContent:"center",marginRight:"3px",minWidth:"45px","& >*":{flexGrow:1}}),G=o(i)({display:"flex",flexWrap:"wrap",gap:"2px"});function z(e){var c,x,n,f,l,u,a,p,h,N,b,D,y,L,_,Q;return t.jsxs(_e,{children:[!e.isQuranOrZabur&&e.subBook&&t.jsx(Re,{children:t.jsx(O,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"400",children:(c=e.subBook.subBookTitle)==null?void 0:c[e.languageCode]})}),t.jsxs(Ee,{children:[t.jsxs(De,{children:[e.subBook&&!e.subBook.noChapter&&((n=(x=e.subBook)==null?void 0:x.chapterInfos[0])==null?void 0:n.chapterNumber)==0&&t.jsx(Z,{chapterInfo:e.subBook.chapterInfos[0],isCompleted:(l=(f=e.subBook.chapterInfos[0])==null?void 0:f.chapterIsCompleted)==null?void 0:l[e.languageCode],isPublished:(a=(u=e.subBook.chapterInfos[0])==null?void 0:u.chapterIsPublished)==null?void 0:a[e.languageCode],onClick:e.onChapterClick}),e.isQuranOrZabur&&e.book&&t.jsx(Z,{chapterInfo:(h=(p=e.book)==null?void 0:p.subBooks[0])==null?void 0:h.chapterInfos[0],isCompleted:((D=(b=(N=e.book)==null?void 0:N.subBooks[0].chapterInfos[0])==null?void 0:b.chapterIsCompleted)==null?void 0:D[e.languageCode])||!1,isPublished:((_=(L=(y=e.book)==null?void 0:y.subBooks[0].chapterInfos[0])==null?void 0:L.chapterIsPublished)==null?void 0:_[e.languageCode])||!1,onClick:e.onChapterClick})]}),!e.isQuranOrZabur&&t.jsx(G,{children:e.subBook&&((Q=e.subBook.chapterInfos)==null?void 0:Q.map((s,R)=>{var k,B;return(s==null?void 0:s.chapterNumber)!==0&&t.jsx(Z,{subBookInfo:e.subBook,chapterInfo:s,isCompleted:((k=s==null?void 0:s.chapterIsCompleted)==null?void 0:k[e.languageCode])||!1,isPublished:((B=s==null?void 0:s.chapterIsPublished)==null?void 0:B[e.languageCode])||!1,onClick:e.onChapterClick},R)}))}),e.isQuranOrZabur&&t.jsx(G,{children:e.book&&e.book.subBooks&&e.book.subBooks.map((s,R)=>{var k,B,E,U,T;return((k=s.chapterInfos[0])==null?void 0:k.chapterNumber)!==0&&t.jsx(Z,{subBookInfo:s,chapterInfo:s.chapterInfos[0],isCompleted:s.chapterInfos&&((E=(B=s.chapterInfos[0])==null?void 0:B.chapterIsCompleted)==null?void 0:E[e.languageCode])||!1,isPublished:s.chapterInfos&&((T=(U=s.chapterInfos[0])==null?void 0:U.chapterIsPublished)==null?void 0:T[e.languageCode])||!1,isSpecialBook:!0,onClick:()=>e.onChapterClick(s.chapterInfos&&(s==null?void 0:s.chapterInfos[0].chapterId))},R)})})]})]})}const Le=o(i)(({isquranorzabur:e})=>({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",paddingRight:e=="true"?"120px":"0px",boxSizing:"border-box",maxWidth:"650px","@media screen and (max-width: 670px)":{paddingRight:"0px"}})),Qe=o(i)({display:"flex",marginBottom:"15px"}),Ue=o("img")({width:"24px",height:"24px",marginRight:"10px"}),K=e=>t.jsxs(Le,{isquranorzabur:e.isQuranOrZabur?"true":"false",children:[t.jsxs(Qe,{children:[t.jsx(Ue,{src:X.icon_book}),t.jsx(O,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"700",children:`${e.bookTitle} text - ${e.language} - chapters:`})]}),!e.isQuranOrZabur&&e.bookInfo.subBooks.map((c,x)=>t.jsx(z,{subBook:c,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,onChapterClick:e.onClickSquare},x)),e.isQuranOrZabur&&t.jsx(z,{book:e.bookInfo,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,onChapterClick:e.onClickSquare})]});o(i)({width:"100%",backgroundColor:"#F0F5FB",padding:"5px 20px"});const Ze=o(i)(({status:e})=>({width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #155D74",cursor:"pointer",backgroundColor:e==I?"#FFAA5D":e==A?"#155D74":"#fff",color:e==I?"#155D74":e==A?"#fff":"#155D74"})),H=e=>{var c;return t.jsx(Ze,{status:e.audioStatus,onClick:()=>e.onClick(e.chapterId),children:t.jsx(O,{fontFamily:"Inter",fontSize:16,fontWeight:"500",children:e.chapterNumber==0?"Intr":(c=e.chapterNumber)==null?void 0:c.toString()})})},Pe=o(i)({margin:"10px 0px",display:"flex"}),We=o(i)({width:"100px",minWidth:"100px",maxWidth:"200px",marginRight:"10px","& .MuiBox-root":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",padding:"9px 0px"}}),$e=o(i)({display:"flex",flexGrow:1}),qe=o(i)({display:"flex",justifyContent:"center",marginRight:"3px",minWidth:"45px","& >*":{flexGrow:1}}),M=o(i)({display:"flex",flexWrap:"wrap",gap:"2px"});function J(e){var c,x;return t.jsxs(Pe,{children:[!e.isQuranOrZabur&&e.subBook&&t.jsx(We,{children:t.jsx(O,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"400",children:(c=e.subBook.subBookTitle)==null?void 0:c[e.languageCode]})}),t.jsxs($e,{children:[t.jsx(qe,{}),!e.isQuranOrZabur&&t.jsx(M,{children:e.subBook&&((x=e.subBook.chapterInfos)==null?void 0:x.map((n,f)=>{const u=(Array.isArray(n.chapterAudio)?n.chapterAudio:[]).find(a=>a.language===e.languageCode);return n.chapterNumber!==0&&t.jsx(H,{chapterNumber:n.chapterNumber,chapterId:n.chapterId,audioStatus:u!=null&&u.isPublished?I:u!=null&&u.isCompleted?A:P,onClick:e.moveToAudioOverview},f)}))}),e.isQuranOrZabur&&t.jsx(M,{children:e.book&&e.book.subBooks&&e.book.subBooks.map((n,f)=>{var a,p;const u=(Array.isArray((a=n==null?void 0:n.chapterInfos[0])==null?void 0:a.chapterAudio)?n==null?void 0:n.chapterInfos[0].chapterAudio:[]).find(h=>h.language==e.languageCode);return n.chapterInfos[0].chapterNumber!=0&&t.jsx(H,{chapterNumber:n==null?void 0:n.subBookNumber,chapterId:(p=n==null?void 0:n.chapterInfos[0])==null?void 0:p.chapterId,audioStatus:u!=null&&u.isPublished?I:u!=null&&u.isCompleted?A:P,onClick:e.moveToAudioOverview},f)})})]})]})}const Ge=o(i)(({isquranorzabur:e})=>({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",paddingRight:e=="true"?"120px":"0px",boxSizing:"border-box",maxWidth:"650px","@media screen and (max-width: 670px)":{paddingRight:"0px"}})),ze=o(i)({display:"flex",marginBottom:"15px"}),Ke=o("img")({width:"24px",height:"24px",marginRight:"10px"}),Y=e=>t.jsxs(Ge,{isquranorzabur:e.isQuranOrZabur?"true":"false",children:[t.jsxs(ze,{children:[t.jsx(Ke,{src:X.icon_audio}),t.jsx(O,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"700",children:`${e.bookTitle} Audio - ${e.language} - chapters:`})]}),!e.isQuranOrZabur&&e.bookInfo.subBooks.map((c,x)=>t.jsx(J,{subBook:c,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,moveToAudioOverview:e.moveToAudioOverview},x)),e.isQuranOrZabur&&t.jsx(J,{book:e.bookInfo,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,moveToAudioOverview:e.moveToAudioOverview})]}),He=o(i)({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",maxWidth:"650px"}),Me=o(i)({display:"flex"});o("img")({width:"24px",height:"24px",marginRight:"10px"});const Je=e=>t.jsx(He,{children:t.jsx(Me,{children:t.jsx(O,{color:"red",fontFamily:"'Baloo Da 2'",fontWeight:"700",fontSize:30,children:"Coming Soon"})})}),Ye=o(i)({position:"relative",minHeight:"100vh",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),Ve=o(i)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),Xe=o(i)({width:"650px",display:"flex",justifyContent:"center",alignItems:"center",margin:"20px 40px 0px 40px","& .MuiFormControl-root":{width:"unset",marginLeft:"15px"},"& .MuiBox-root":{fontFamily:'"Baloo Da 2" !important'},"@media screen and (max-width: 670px)":{width:"unset"}}),et=o(i)({margin:"20px 40px"}),tt=o(i)({margin:"5px 40px",padding:"15px",maxWidth:"650px",boxSizing:"border-box",display:"flex",justifyContent:"center","& .MuiButtonBase-root":{boxSizing:"border-box",textTransform:"none",backgroundColor:"#FFAA5D",padding:"8px 15px",borderRadius:"0px",border:"1px solid #474747","&:hover":{backgroundColor:"#EECC5D"}}}),V=[{value:"Text",label:"Text"},{value:"Audio",label:"Audio"},{value:"Reference",label:"Reference"}],at=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}],ot=e=>{const[c,x]=v.useState([]),[n,f]=v.useState(!1),[l,u]=v.useState(null),[a,p]=v.useState(e.currentBook||$),[h,N]=v.useState(""),[b,D]=v.useState(V[0].value),y=ce(),L=ge(),_=v.useCallback(()=>{var d;if(!((d=e.currentUser)!=null&&d.roles))return[];const r=e.currentUser.roles.reduce((g,m)=>{if(m.role!=="none"){const C=Se(m.language);g.some(S=>S.value===C)||g.push({value:C,label:m.language})}return g},[]);return e.currentLanguage||e.dispatch({type:j.SET_CURRENT_LANGUAGE,payload:{language:r[0].value}}),r},[e.currentUser]);v.useEffect(()=>{const r=_();x(r),r.length>0&&!r.some(d=>d.value===h)&&N(r[0].value)},[e.currentUser,h,_]),v.useEffect(()=>{a=="App Text"?B():(async()=>{f(!0);try{const d=e.bookInfos.find(g=>g.bookTitle.en===a);if(d)u(d);else{const g=await Fe.getBookInfoByTitle(a),m={bookId:g.bookId,bookImage:g.bookImage,bookTitle:g.bookTitle,subBooks:g.subBooks};u(g),e.dispatch({type:j.ADD_BOOKINFO,payload:{bookInfo:m}})}f(!1)}catch{fe.error("Failed to fetch book information",{position:"top-right",draggable:!0,theme:"colored",transition:me,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),f(!1)}})()},[a,e.bookInfos]);const Q=r=>{const d=r.target.value;N(d),e.dispatch({type:j.SET_CURRENT_LANGUAGE,payload:{language:d}})},s=r=>{const d=r.target.value;D(d)},R=r=>{p(r),e.dispatch({type:j.SET_BOOK,payload:{bookTitle:r}})},k=(r,d=!1)=>{const g=l==null?void 0:l.subBooks.find(S=>{var W;return(W=S==null?void 0:S.chapterInfos)==null?void 0:W.find(ue=>ue.chapterId==r)}),m=g==null?void 0:g.chapterInfos.find(S=>S.chapterId==r),C=(m==null?void 0:m.chapterNumber)||0,F={chapterId:r,isImport:d,subBookInfo:g,chapterInfo:m,languages:c};C?y("/admin/chapteroverview",{state:F}):y("/admin/introoverview",{state:F})},B=()=>{y("/admin/apptext")},E=r=>{const d=l==null?void 0:l.subBooks.find(C=>{var F;return(F=C==null?void 0:C.chapterInfos)==null?void 0:F.find(S=>S.chapterId==r)}),g=d==null?void 0:d.chapterInfos.find(C=>C.chapterId==r);y("/admin/audiooverview",{state:{chapterId:r,subBookInfo:d,chapterInfo:g,languages:c}})},U=()=>{localStorage.removeItem(ye),e.dispatch({type:j.RESET_USER}),e.dispatch({type:j.RESET_BOOK}),e.dispatch({type:j.RESET_APP_TEXT_PAGES}),y("/admin")},T=a===$||a===Te,w=ve(h),te=()=>t.jsx(Ce,{isLoggedIn:!0,username:e.currentUser.username,isAdmin:e.currentUser.isAdmin,isTranslationPage:!0,onLogOut:U}),ae=()=>t.jsx(et,{children:t.jsx(we,{books:Oe.map(r=>({bookTitle:r.bookTitle,onClick:()=>R(r.value)})),selectedBook:a})}),oe=()=>t.jsxs(Xe,{children:[t.jsx(O,{color:"#155D74",fontWeight:"700",fontFamily:"'Baloo Da 2'",children:`${a} ${T?"overview":""}`}),t.jsx(q,{label:"",options:c,value:h,backgroundColor:"#fff",textColor:"#155D74",onChange:Q}),!T&&a!==pe&&a!==Be&&a!==je&&a!==Ie&&t.jsx(q,{label:"",options:V,value:b,backgroundColor:"#fff",textColor:"#155D74",onChange:s})]}),ne=()=>b=="Text"&&t.jsx(tt,{children:t.jsx(be,{icon:t.jsx(ke,{}),label:`Import ${b} into ${w} ${a}`,onClick:()=>k((l==null?void 0:l.subBooks[0].chapterInfos[0].chapterId)||"",!0)})}),re=()=>t.jsx(t.Fragment,{children:l&&!T&&t.jsxs(t.Fragment,{children:[b==="Text"&&t.jsx(K,{bookTitle:a,language:w,languageCode:h,bookInfo:l,isQuranOrZabur:!1,onClickSquare:k}),b==="Audio"&&t.jsx(Y,{bookTitle:a,language:w,languageCode:h,bookInfo:l,isQuranOrZabur:!1,moveToAudioOverview:E}),b==="Reference"&&t.jsx(Je,{bookTitle:a,language:w,languageCode:h,bookInfo:l})]})}),ie=()=>t.jsx(t.Fragment,{children:l&&T&&t.jsxs(t.Fragment,{children:[t.jsx(K,{bookTitle:a,language:w,languageCode:h,bookInfo:l,isQuranOrZabur:!0,onClickSquare:k}),t.jsx(Y,{bookTitle:a,language:w,languageCode:h,bookInfo:l,isQuranOrZabur:!0,moveToAudioOverview:E})]})}),le=()=>t.jsxs(t.Fragment,{children:[re(),ie()]}),se=()=>t.jsxs(Ve,{children:[t.jsx(Ae,{tools:at}),ae(),oe(),!T&&ne(),le()]});return t.jsxs(t.Fragment,{children:[t.jsxs(Ye,{flexDirection:L?"column":"row",children:[te(),se()]}),t.jsx(xe,{}),n&&t.jsx(he,{})]})};function nt(e){return{dispatch:e}}function rt(e){return{currentUser:e.user.currentUser,bookInfos:e.book.bookInfos,currentLanguage:e.book.language,currentBook:e.book.book}}const ht=de(rt,nt)(ot);export{ht as default};
