import{b as s,j as o,Q as S,af as se}from"./index-Co3tk9z7.js";import{S as L,g as H,aK as ae,aL as ie,aM as ce,s as c,B as b,c as le,aA as de,u as ue,d as A,_ as he}from"./App-MSpuw0Ml.js";import{I as C,T as f}from"./index-BlDo3TXa.js";import{B as $}from"./Button-Xs626Oo6.js";import{S as Q}from"./index-9kFNhKFu.js";import{b as q}from"./book.service-sRIfZPEb.js";import{L as be}from"./index-BCk2EnXO.js";import{C as xe}from"./index-D0oDitYQ.js";import"./index-Bd1s0EmS.js";import"./axios-BimPEqV4.js";function G(e){const{theme:i}=s.useContext(L),{textColor:l}=H(i);return o.jsxs(o.Fragment,{children:[o.jsx(ae,{children:o.jsx(ie,{value:e.value,size:e.size=="small"?"small":"medium",type:e.type,style:{color:l},bordercolor:l,onChange:e.onChange,onBlur:e.onBlur})}),e.error&&o.jsx(ce,{children:e.error})]})}const ge=c(b)({width:"100%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box"}),ke=c(b)(({backgroundcolor:e})=>({width:"100%",backgroundColor:e,boxSizing:"border-box",display:"flex"})),fe=c("img")({width:"100%",marginTop:"57px"}),me=c(b)({display:"flex",alignItems:"baseline",justifyContent:"space-between",position:"absolute",left:"30px",top:"30px",width:"calc(100% - 60px)"}),Se=c(b)({display:"flex",alignItems:"baseline"}),Ce=c(b)({width:"70px",cursor:"pointer",position:"relative","& div":{position:"absolute",top:"28px",width:"100%",textAlign:"center",maxWidth:"65px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}}),Be=c("img")({width:"100%",height:"100%"}),pe=c(b)({margin:0,marginLeft:"12px",position:"relative",top:"-20px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}),Ie=c(b)({position:"absolute",top:"60px",left:"50%",transform:"translate(-50%, -50%)",cursor:"pointer"}),ye=c("img")({width:"100%","&:active":{opacity:"0.8"}}),Y=c(b)(({backgroundcolor:e})=>({height:"calc(100dvh - 145px)",width:"100%",position:"absolute",top:"145px",padding:"0px 30px",backgroundColor:e,"@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}})),Z=c(b)(({backgroundcolor:e})=>({backgroundColor:e,height:"calc(100dvh - 145px)",position:"relative",zIndex:"1",display:"flex",flexDirection:"column",padding:"20px",overflowY:"scroll",paddingTop:"100px",justifySelf:"center","@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}})),w=c(b)({display:"flex",alignItems:"center",margin:"10px",maxWidth:"350px",minWidth:"300px","& .MuiBox-root:first-of-type":{width:"50%",paddingRight:"20px"},"& .MuiInputBase-root":{width:"100% !important",backgroundColor:"#FFF"},"& :nth-of-type(2)":{width:"50%","& .MuiBox-root":{paddingRight:"0px"},"& .MuiFormControl-root":{width:"60px","& .MuiInputBase-root":{width:"100% !important",backgroundColor:"#FFF"},"& .css-mat3fe-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{width:"unset !important",backgroundColor:"#FFF"},"& .MuiSelect-select":{width:"100% !important",padding:"0px !important",backgroundColor:"#FFF"},"& input":{width:"100%",padding:"8px 12px",backgroundColor:"#FFF",textAlign:"center"}}}}),O=c(b)({display:"flex",justifyContent:"space-between",alignItems:"center"}),J=c(b)(({bordercolor:e})=>({display:"flex",justifyContent:"center",marginTop:"30px","& button":{border:`1px solid ${e}`}})),je=e=>{var j;const{theme:i,readingLanguage:l}=s.useContext(L),{logoTextColor:u,mainBGColor:y}=H(i);return o.jsxs(ke,{backgroundcolor:y,children:[o.jsx(fe,{src:i==S.DEFAULT||i==S.DARK?C.book_subtract:i==S.BLACK_AND_WHITE?C.book_subtract_BAW:i==S.SAPPHIRE?C.book_subtract_sapphire:C.book_subtract_easyocean}),o.jsx(me,{children:o.jsxs(Se,{children:[o.jsx(Ce,{onClick:e.onClickCover,children:o.jsx(Be,{src:e.bookCover})}),o.jsx(pe,{children:o.jsx(f,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:u,children:(j=e.bookTitle)==null?void 0:j[l||"en"]})})]})}),o.jsx(Ie,{children:o.jsx(ye,{src:i==S.DEFAULT||i==S.DARK?C.close2:i==S.BLACK_AND_WHITE?C.close2_BAW:i==S.SAPPHIRE?C.close2_sapphire:C.close2_easyocean,onClick:e.onClickClose})})]})};function ve(e){const{theme:i}=s.useContext(L),{headerBGColor:l,logoTextColor:u,mainBGColor:y}=H(i),j=()=>{var h,B,v,T;return!e.isSpecialBook&&o.jsx(Y,{backgroundcolor:l,children:o.jsxs(Z,{backgroundcolor:l,children:[o.jsxs(w,{children:[o.jsx(f,{color:u,textAlign:"right",children:"Go to sub book: "}),o.jsx(Q,{label:"",options:e.subBookOptions,value:e.subBook,onChange:m=>e.onSubBookChange(m.target.value)})]}),o.jsxs(w,{color:u,children:[o.jsx(f,{color:u,textAlign:"right",children:"Go to chapter: "}),o.jsxs(O,{children:[o.jsx(G,{type:"Number",value:e.chapterNumber,onChange:e.onChapterChange}),o.jsx(f,{color:u,fontSize:13,children:`(${(((B=(h=e.selectedSubBookInfo)==null?void 0:h.chapterInfos)==null?void 0:B.length)||0).toString()} chapters)`})]})]}),o.jsxs(w,{children:[o.jsx(f,{color:u,textAlign:"right",children:"Go to aya: "}),o.jsxs(O,{children:[o.jsx(G,{type:"Number",value:e.verseNumber,onChange:e.onVerseChange}),o.jsx(f,{color:u,fontSize:13,children:`(${(((T=(v=e.selectedChapterInfo)==null?void 0:v.verses)==null?void 0:T.length)||0).toString()} ayat)`})]})]}),o.jsx(J,{bordercolor:y,children:o.jsx($,{label:"Go",onClick:e.onGo})})]})})},F=()=>{var h,B;return e.isSpecialBook&&o.jsx(Y,{backgroundcolor:l,children:o.jsxs(Z,{backgroundcolor:l,children:[o.jsxs(w,{children:[o.jsx(f,{color:u,textAlign:"right",children:"Go to Surah: "}),o.jsx(Q,{label:"",options:e.subBookOptions,value:e.subBook,onChange:v=>e.onSubBookChange(v.target.value)})]}),o.jsxs(w,{children:[o.jsx(f,{color:u,textAlign:"right",children:"Go to aya: "}),o.jsxs(O,{children:[o.jsx(G,{type:"Number",value:e.verseNumber,onChange:e.onVerseChange}),o.jsx(f,{color:u,fontSize:13,children:`(${(((B=(h=e.selectedChapterInfo)==null?void 0:h.verses)==null?void 0:B.length)||0).toString()} ayat)`})]})]}),o.jsx(J,{bordercolor:y,children:o.jsx($,{label:"Go",onClick:e.onGo})})]})})};return o.jsxs(o.Fragment,{children:[F(),j()]})}function Ee(e){const[i,l]=s.useState(!1),[u,y]=s.useState({en:"",ar:""}),[j,F]=s.useState(""),[h,B]=s.useState(),[v,T]=s.useState([]),[m,D]=s.useState(e.currentSubBook),[N,M]=s.useState("1"),[P,R]=s.useState("1"),[p,X]=s.useState(),[E,z]=s.useState();s.useContext(de);const V=ue();s.useEffect(()=>{const n=e.bookInfos.find(a=>a.bookId==e.currentBook);B(n);const t=(n==null?void 0:n.bookTitle)||{en:"",ar:""},r=(n==null?void 0:n.bookImage)||"";y(t),F(se+r)},[e.bookInfos]);const ee=()=>o.jsx(je,{bookCover:j,bookTitle:u,onClickCover:()=>V("/library"),onClickClose:()=>V(-1)});s.useEffect(()=>{const n=e.bookInfos.find(t=>t.bookId==e.currentBook);if(n!=null&&n.subBooks){const t=n.subBooks.map(r=>{var a;return{label:(a=r.subBookTitle)==null?void 0:a.en,value:r.subBookId}});T(t)}else T([])},[e.bookInfos,e.currentBook]);const oe=()=>{var d,I,_,g,W,K,U;const n=(d=e.bookInfos)==null?void 0:d.find(k=>k.bookId==e.currentBook),t=(I=n==null?void 0:n.subBooks)==null?void 0:I.find(k=>k.subBookId==m),r=(_=t==null?void 0:t.chapterInfos)==null?void 0:_.find(k=>k.chapterNumber==Number(N)),a=r==null?void 0:r.chapterId,x=((U=(K=(W=(g=e.chapterInfos)==null?void 0:g.find(k=>k.chapterId==a))==null?void 0:W.verses)==null?void 0:K.find(k=>k.verseNumber==Number(P)))==null?void 0:U.verseId)||"";e.dispatch({type:A.SET_OPENED_SUBBOOK,payload:{openedSubBook:m}}),e.dispatch({type:A.SET_CURRENT_CHAPTER,payload:{currentChapter:a}}),e.dispatch({type:A.SET_CURRENT_VERSE,payload:{currentVerse:x}}),V("/reading")},te=n=>{var t;p&&Number(n)<=((t=p.chapterInfos)==null?void 0:t.length)&&M(n)},ne=n=>{var t;E&&Number(n)<=((t=E.verses)==null?void 0:t.length)&&R(n)};s.useEffect(()=>{var x,d,I,_;const n=(x=e.bookInfos)==null?void 0:x.find(g=>g.bookId==e.currentBook),t=(d=n==null?void 0:n.subBooks)==null?void 0:d.find(g=>g.subBookId==e.currentSubBook),r=(I=t==null?void 0:t.chapterInfos)==null?void 0:I.find(g=>g.chapterId==e.currentChapter),a=(_=E==null?void 0:E.verses)==null?void 0:_.find(g=>g.verseId==e.currentVerse);D(e.currentSubBook),M(((r==null?void 0:r.chapterNumber)||1).toString()),R(((a==null?void 0:a.verseNumber)||1).toString())},[e.currentSubBook,e.currentChapter,e.currentVerse]),s.useEffect(()=>{var r,a;const n=(r=e.bookInfos)==null?void 0:r.find(x=>x.bookId==e.currentBook),t=(a=n==null?void 0:n.subBooks)==null?void 0:a.find(x=>x.subBookId==m);X(t),M("1"),R("1")},[m]),s.useEffect(()=>{N&&(()=>{var a,x;const t=(a=p==null?void 0:p.chapterInfos)==null?void 0:a.find(d=>d.chapterNumber==Number(N));t!=null&&t.chapterId&&q.fetchVerses(t.chapterId);const r=(x=e.chapterInfos)==null?void 0:x.find(d=>d.chapterId==(t==null?void 0:t.chapterId));r?(z(r),l(!1)):t!=null&&t.chapterId?q.fetchVerses(t==null?void 0:t.chapterId).then(d=>{e.dispatch({type:A.ADD_CHAPTERINFO,payload:{chapterInfo:d}}),z(d),l(!1)}).catch(d=>{he.custom(I=>o.jsx(xe,{text:d,offset:70,visible:I.visible})),l(!1)}):l(!1)})()},[p,m,N]);const re=()=>{var n,t;return o.jsx(ve,{subBookOptions:v,subBook:m,chapterNumber:N,verseNumber:P,selectedSubBookInfo:p,selectedChapterInfo:E,isSpecialBook:((n=h==null?void 0:h.bookTitle)==null?void 0:n.en)=="Qur'an"||((t=h==null?void 0:h.bookTitle)==null?void 0:t.en)=="Zabur",onSubBookChange:r=>D(r),onChapterChange:r=>te(r.target.value),onVerseChange:r=>ne(r.target.value),onGo:oe})};return o.jsxs(ge,{children:[ee(),re(),i&&o.jsx(be,{})]})}const Te=e=>({bookInfos:e.books.bookInfos,subBooks:e.books.subBooks,chapterInfos:e.books.chapterInfos,currentBook:e.pageStatus.currentBook,currentSubBook:e.pageStatus.openedSubBook,currentChapter:e.pageStatus.currentChapter,currentVerse:e.pageStatus.currentVerse}),Le=le(Te)(Ee);export{Le as default};
