import{j as t,a as v}from"./createTheme-BuP8AzxQ.js";import{s as o,B as i,T as p,t as de,u as ce,K as ge,F as j,Q as xe,E as he,A as fe,H as me,w as Ce,q as be}from"./App-D_6gwKuw.js";import{d as ke}from"./CloudUpload-BHZ0uNMT.js";import{I as J,g as Se,a as ve}from"./images-kVc5XVRO.js";import{T as I,c as A,C as ee,f as W,B as $,A as ye,h as Te,i as pe}from"./index-C6lco80w.js";import{S as q}from"./index-Bb08Fcbp.js";import{T as Oe,B as Be}from"./index-Bs985iIy.js";import{b as je}from"./book.services-av6Oq-Am.js";o(i)({width:"100%",backgroundColor:"#F0F5FB",padding:"5px 20px"});const Ie=o(i)(({status:e})=>({width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #155D74",cursor:"pointer",backgroundColor:e==I?"#FFAA5D":e==A?"#155D74":e==ee?"#F0F5FB":"#fff",color:e==I?"#155D74":e==A?"#fff":"#155D74"})),P=e=>{var c,x,a,f,l,u;return t.jsx(Ie,{status:e.isPublished?I:e.isCompleted?A:e.chapterInfo&&!((x=(c=e.chapterInfo)==null?void 0:c.verses)!=null&&x.length)?ee:W,onClick:()=>{var r;return e.onClick(((r=e.chapterInfo)==null?void 0:r.chapterId)||"")},children:t.jsx(p,{fontFamily:"Inter",fontSize:16,fontWeight:"500",children:e.isSpecialBook?((a=e.subBookInfo)==null?void 0:a.subBookNumber)==0?"Intr":(l=(f=e.subBookInfo)==null?void 0:f.subBookNumber)==null?void 0:l.toString():e.chapterInfo&&(e.chapterInfo.chapterNumber==0?"Intr":(u=e.chapterInfo.chapterNumber)==null?void 0:u.toString())})})},Ae=o(i)({margin:"2px 0px",display:"flex"}),we=o(i)({width:"100px",minWidth:"100px",maxWidth:"200px",marginRight:"10px","& .MuiBox-root":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",padding:"9px 0px"}}),Fe=o(i)({display:"flex",flexGrow:1}),Ne=o(i)({display:"flex",justifyContent:"center",marginRight:"3px",minWidth:"45px","& >*":{flexGrow:1}}),G=o(i)({display:"flex",flexWrap:"wrap",gap:"2px"});function z(e){var c,x,a,f,l,u,r,O,h,N,b,R,y,L,_,Q;return t.jsxs(Ae,{children:[!e.isQuranOrZabur&&e.subBook&&t.jsx(we,{children:t.jsx(p,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"400",children:(c=e.subBook.subBookTitle)==null?void 0:c[e.languageCode]})}),t.jsxs(Fe,{children:[t.jsxs(Ne,{children:[e.subBook&&!e.subBook.noChapter&&((a=(x=e.subBook)==null?void 0:x.chapterInfos[0])==null?void 0:a.chapterNumber)==0&&t.jsx(P,{chapterInfo:e.subBook.chapterInfos[0],isCompleted:(l=(f=e.subBook.chapterInfos[0])==null?void 0:f.chapterIsCompleted)==null?void 0:l[e.languageCode],isPublished:(r=(u=e.subBook.chapterInfos[0])==null?void 0:u.chapterIsPublished)==null?void 0:r[e.languageCode],onClick:e.onChapterClick}),e.isQuranOrZabur&&e.book&&t.jsx(P,{chapterInfo:(h=(O=e.book)==null?void 0:O.subBooks[0])==null?void 0:h.chapterInfos[0],isCompleted:((R=(b=(N=e.book)==null?void 0:N.subBooks[0].chapterInfos[0])==null?void 0:b.chapterIsCompleted)==null?void 0:R[e.languageCode])||!1,isPublished:((_=(L=(y=e.book)==null?void 0:y.subBooks[0].chapterInfos[0])==null?void 0:L.chapterIsPublished)==null?void 0:_[e.languageCode])||!1,onClick:e.onChapterClick})]}),!e.isQuranOrZabur&&t.jsx(G,{children:e.subBook&&((Q=e.subBook.chapterInfos)==null?void 0:Q.map((s,E)=>{var k,B;return(s==null?void 0:s.chapterNumber)!==0&&t.jsx(P,{subBookInfo:e.subBook,chapterInfo:s,isCompleted:((k=s==null?void 0:s.chapterIsCompleted)==null?void 0:k[e.languageCode])||!1,isPublished:((B=s==null?void 0:s.chapterIsPublished)==null?void 0:B[e.languageCode])||!1,onClick:e.onChapterClick},E)}))}),e.isQuranOrZabur&&t.jsx(G,{children:e.book&&e.book.subBooks&&e.book.subBooks.map((s,E)=>{var k,B,D,Z,T;return((k=s.chapterInfos[0])==null?void 0:k.chapterNumber)!==0&&t.jsx(P,{subBookInfo:s,chapterInfo:s.chapterInfos[0],isCompleted:s.chapterInfos&&((D=(B=s.chapterInfos[0])==null?void 0:B.chapterIsCompleted)==null?void 0:D[e.languageCode])||!1,isPublished:s.chapterInfos&&((T=(Z=s.chapterInfos[0])==null?void 0:Z.chapterIsPublished)==null?void 0:T[e.languageCode])||!1,isSpecialBook:!0,onClick:()=>e.onChapterClick(s.chapterInfos&&(s==null?void 0:s.chapterInfos[0].chapterId))},E)})})]})]})}const _e=o(i)(({isquranorzabur:e})=>({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",paddingRight:e=="true"?"120px":"0px",boxSizing:"border-box",maxWidth:"650px","@media screen and (max-width: 670px)":{paddingRight:"0px"}})),Ee=o(i)({display:"flex",marginBottom:"15px"}),De=o("img")({width:"24px",height:"24px",marginRight:"10px"}),K=e=>t.jsxs(_e,{isquranorzabur:e.isQuranOrZabur?"true":"false",children:[t.jsxs(Ee,{children:[t.jsx(De,{src:J.icon_book}),t.jsx(p,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"700",children:`${e.bookTitle} text - ${e.language} - chapters:`})]}),!e.isQuranOrZabur&&e.bookInfo.subBooks.map((c,x)=>t.jsx(z,{subBook:c,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,onChapterClick:e.onClickSquare},x)),e.isQuranOrZabur&&t.jsx(z,{book:e.bookInfo,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,onChapterClick:e.onClickSquare})]});o(i)({width:"100%",backgroundColor:"#F0F5FB",padding:"5px 20px"});const Re=o(i)(({status:e})=>({width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #155D74",cursor:"pointer",backgroundColor:e==I?"#FFAA5D":e==A?"#155D74":"#fff",color:e==I?"#155D74":e==A?"#fff":"#155D74"})),H=e=>{var c;return t.jsx(Re,{status:e.audioStatus,onClick:()=>e.onClick(e.chapterId),children:t.jsx(p,{fontFamily:"Inter",fontSize:16,fontWeight:"500",children:e.chapterNumber==0?"Intr":(c=e.chapterNumber)==null?void 0:c.toString()})})},Le=o(i)({margin:"10px 0px",display:"flex"}),Qe=o(i)({width:"100px",minWidth:"100px",maxWidth:"200px",marginRight:"10px","& .MuiBox-root":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",padding:"9px 0px"}}),Ze=o(i)({display:"flex",flexGrow:1}),Pe=o(i)({display:"flex",justifyContent:"center",marginRight:"3px",minWidth:"45px","& >*":{flexGrow:1}}),M=o(i)({display:"flex",flexWrap:"wrap",gap:"2px"});function V(e){var c,x;return t.jsxs(Le,{children:[!e.isQuranOrZabur&&e.subBook&&t.jsx(Qe,{children:t.jsx(p,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"400",children:(c=e.subBook.subBookTitle)==null?void 0:c[e.languageCode]})}),t.jsxs(Ze,{children:[t.jsx(Pe,{}),!e.isQuranOrZabur&&t.jsx(M,{children:e.subBook&&((x=e.subBook.chapterInfos)==null?void 0:x.map((a,f)=>{const u=(Array.isArray(a.chapterAudio)?a.chapterAudio:[]).find(r=>r.language===e.languageCode);return a.chapterNumber!==0&&t.jsx(H,{chapterNumber:a.chapterNumber,chapterId:a.chapterId,audioStatus:u!=null&&u.isPublished?I:u!=null&&u.isCompleted?A:W,onClick:e.moveToAudioOverview},f)}))}),e.isQuranOrZabur&&t.jsx(M,{children:e.book&&e.book.subBooks&&e.book.subBooks.map((a,f)=>{var r,O;const u=(Array.isArray((r=a==null?void 0:a.chapterInfos[0])==null?void 0:r.chapterAudio)?a==null?void 0:a.chapterInfos[0].chapterAudio:[]).find(h=>h.language==e.languageCode);return a.chapterInfos[0].chapterNumber!=0&&t.jsx(H,{chapterNumber:a==null?void 0:a.subBookNumber,chapterId:(O=a==null?void 0:a.chapterInfos[0])==null?void 0:O.chapterId,audioStatus:u!=null&&u.isPublished?I:u!=null&&u.isCompleted?A:W,onClick:e.moveToAudioOverview},f)})})]})]})}const We=o(i)(({isquranorzabur:e})=>({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",paddingRight:e=="true"?"120px":"0px",boxSizing:"border-box",maxWidth:"650px","@media screen and (max-width: 670px)":{paddingRight:"0px"}})),Ue=o(i)({display:"flex",marginBottom:"15px"}),$e=o("img")({width:"24px",height:"24px",marginRight:"10px"}),X=e=>t.jsxs(We,{isquranorzabur:e.isQuranOrZabur?"true":"false",children:[t.jsxs(Ue,{children:[t.jsx($e,{src:J.icon_audio}),t.jsx(p,{color:"#155D74",fontFamily:"'Baloo Da 2'",fontWeight:"700",children:`${e.bookTitle} Audio - ${e.language} - chapters:`})]}),!e.isQuranOrZabur&&e.bookInfo.subBooks.map((c,x)=>t.jsx(V,{subBook:c,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,moveToAudioOverview:e.moveToAudioOverview},x)),e.isQuranOrZabur&&t.jsx(V,{book:e.bookInfo,languageCode:e.languageCode,isQuranOrZabur:e.isQuranOrZabur,moveToAudioOverview:e.moveToAudioOverview})]}),qe=o(i)({backgroundColor:"#F0F5FB",margin:"5px 40px",padding:"15px",maxWidth:"650px"}),Ge=o(i)({display:"flex"});o("img")({width:"24px",height:"24px",marginRight:"10px"});const ze=e=>t.jsx(qe,{children:t.jsx(Ge,{children:t.jsx(p,{color:"red",fontFamily:"'Baloo Da 2'",fontWeight:"700",fontSize:30,children:"Coming Soon"})})}),Ke=o(i)({position:"relative",minHeight:"100vh",width:"100%","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),He=o(i)({width:"100%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"}),Me=o(i)({width:"650px",display:"flex",justifyContent:"center",alignItems:"center",margin:"20px 40px 0px 40px","& .MuiFormControl-root":{width:"unset",marginLeft:"15px"},"& .MuiBox-root":{fontFamily:'"Baloo Da 2" !important'},"@media screen and (max-width: 670px)":{width:"unset"}}),Ve=o(i)({margin:"20px 40px"}),Xe=o(i)({margin:"5px 40px",padding:"15px",maxWidth:"650px",boxSizing:"border-box",display:"flex",justifyContent:"center","& .MuiButtonBase-root":{boxSizing:"border-box",textTransform:"none",backgroundColor:"#FFAA5D",padding:"8px 15px",borderRadius:"0px",border:"1px solid #474747","&:hover":{backgroundColor:"#EECC5D"}}}),Y=[{value:"Text",label:"Text"},{value:"Audio",label:"Audio"},{value:"Reference",label:"Reference"}],Ye=[{toolName:"Western",onClick:()=>{}},{toolName:"Arabic",onClick:()=>{}}],Je=e=>{const[c,x]=v.useState([]),[a,f]=v.useState(!1),[l,u]=v.useState(null),[r,O]=v.useState(e.currentBook||$),[h,N]=v.useState(""),[b,R]=v.useState(Y[0].value),y=ce(),L=ge(),_=v.useCallback(()=>{var d;if(!((d=e.currentUser)!=null&&d.roles))return[];const n=e.currentUser.roles.reduce((g,m)=>{if(m.role!=="none"){const C=Se(m.language);g.some(S=>S.value===C)||g.push({value:C,label:m.language})}return g},[]);return e.currentLanguage||e.dispatch({type:j.SET_CURRENT_LANGUAGE,payload:{language:n[0].value}}),n},[e.currentUser]);v.useEffect(()=>{const n=_();x(n),n.length>0&&!n.some(d=>d.value===h)&&N(n[0].value)},[e.currentUser,h,_]),v.useEffect(()=>{r=="App Text"?B():(async()=>{f(!0);try{const d=e.bookInfos.find(g=>g.bookTitle.en===r);if(d)u(d);else{const g=await je.getBookInfoByTitle(r),m={bookId:g.bookId,bookImage:g.bookImage,bookTitle:g.bookTitle,subBooks:g.subBooks};u(g),e.dispatch({type:j.ADD_BOOKINFO,payload:{bookInfo:m}})}f(!1)}catch{fe.error("Failed to fetch book information",{position:"top-right",draggable:!0,theme:"colored",transition:me,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),f(!1)}})()},[r,e.bookInfos]);const Q=n=>{const d=n.target.value;N(d),e.dispatch({type:j.SET_CURRENT_LANGUAGE,payload:{language:d}})},s=n=>{const d=n.target.value;R(d)},E=n=>{O(n),e.dispatch({type:j.SET_BOOK,payload:{bookTitle:n}})},k=(n,d=!1)=>{const g=l==null?void 0:l.subBooks.find(S=>{var U;return(U=S==null?void 0:S.chapterInfos)==null?void 0:U.find(ue=>ue.chapterId==n)}),m=g==null?void 0:g.chapterInfos.find(S=>S.chapterId==n),C=(m==null?void 0:m.chapterNumber)||0,F={chapterId:n,isImport:d,subBookInfo:g,chapterInfo:m,languages:c};C?y("/admin/chapteroverview",{state:F}):y("/admin/introoverview",{state:F})},B=()=>{y("/admin/apptext")},D=n=>{const d=l==null?void 0:l.subBooks.find(C=>{var F;return(F=C==null?void 0:C.chapterInfos)==null?void 0:F.find(S=>S.chapterId==n)}),g=d==null?void 0:d.chapterInfos.find(C=>C.chapterId==n);y("/admin/audiooverview",{state:{chapterId:n,subBookInfo:d,chapterInfo:g,languages:c}})},Z=()=>{localStorage.removeItem(ye),e.dispatch({type:j.RESET_USER}),e.dispatch({type:j.RESET_BOOK}),e.dispatch({type:j.RESET_APP_TEXT_PAGES}),y("/admin")},T=r===$||r===Te,w=ve(h),te=()=>t.jsx(Ce,{isLoggedIn:!0,username:e.currentUser.username,isAdmin:e.currentUser.isAdmin,onLogOut:Z}),oe=()=>t.jsx(Ve,{children:t.jsx(Be,{books:pe.map(n=>({bookTitle:n.bookTitle,onClick:()=>E(n.value)})),selectedBook:r})}),ae=()=>t.jsxs(Me,{children:[t.jsx(p,{color:"#155D74",fontWeight:"700",fontFamily:"'Baloo Da 2'",children:`${r} ${T?"overview":""}`}),t.jsx(q,{label:"",options:c,value:h,backgroundColor:"#fff",textColor:"#155D74",onChange:Q}),!T&&t.jsx(q,{label:"",options:Y,value:b,backgroundColor:"#fff",textColor:"#155D74",onChange:s})]}),ne=()=>b=="Text"&&t.jsx(Xe,{children:t.jsx(be,{icon:t.jsx(ke,{}),label:`Import ${b} into ${w} ${r}`,onClick:()=>k((l==null?void 0:l.subBooks[0].chapterInfos[0].chapterId)||"",!0)})}),re=()=>t.jsx(t.Fragment,{children:l&&!T&&t.jsxs(t.Fragment,{children:[b==="Text"&&t.jsx(K,{bookTitle:r,language:w,languageCode:h,bookInfo:l,isQuranOrZabur:!1,onClickSquare:k}),b==="Audio"&&t.jsx(X,{bookTitle:r,language:w,languageCode:h,bookInfo:l,isQuranOrZabur:!1,moveToAudioOverview:D}),b==="Reference"&&t.jsx(ze,{bookTitle:r,language:w,languageCode:h,bookInfo:l})]})}),ie=()=>t.jsx(t.Fragment,{children:l&&T&&t.jsxs(t.Fragment,{children:[t.jsx(K,{bookTitle:r,language:w,languageCode:h,bookInfo:l,isQuranOrZabur:!0,onClickSquare:k}),t.jsx(X,{bookTitle:r,language:w,languageCode:h,bookInfo:l,isQuranOrZabur:!0,moveToAudioOverview:D})]})}),le=()=>t.jsxs(t.Fragment,{children:[re(),ie()]}),se=()=>t.jsxs(He,{children:[t.jsx(Oe,{tools:Ye}),oe(),ae(),!T&&ne(),le()]});return t.jsxs(t.Fragment,{children:[t.jsxs(Ke,{flexDirection:L?"column":"row",children:[te(),se()]}),t.jsx(xe,{}),a&&t.jsx(he,{})]})};function et(e){return{dispatch:e}}function tt(e){return{currentUser:e.user.currentUser,bookInfos:e.book.bookInfos,currentLanguage:e.book.language,currentBook:e.book.book}}const dt=de(tt,et)(Je);export{dt as default};
