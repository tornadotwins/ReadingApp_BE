import{b as r,j as o,a3 as S,au as ae,aC as ie,aK as ce}from"./index-DEG7EQ5W.js";import{S as V,g as G,aY as le,aZ as de,a_ as ue,s as c,B as g,c as he,aP as be,u as xe,j as E,V as ge}from"./App-BtMyqkZY.js";import{I as C,T as m}from"./index-BaqGsCoo.js";import{B as K}from"./Button-DSHQXXgC.js";import{S as $}from"./index-CIsf8e8K.js";import{b as Y}from"./book.service-qjkGip4N.js";import{L as ke}from"./index-DffQPaXY.js";import{C as fe}from"./index-B4Ywa-qm.js";import"./index-DQz0oeh4.js";import"./index-C88pvD_q.js";function R(e){const{theme:i}=r.useContext(V),{textColor:l}=G(i);return o.jsxs(o.Fragment,{children:[o.jsx(le,{children:o.jsx(de,{value:e.value,size:e.size=="small"?"small":"medium",type:e.type,style:{color:l},bordercolor:l,onChange:e.onChange,onBlur:e.onBlur})}),e.error&&o.jsx(ue,{children:e.error})]})}const me=c(g)({width:"100%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box"}),Se=c(g)(({backgroundcolor:e})=>({width:"100%",backgroundColor:e,boxSizing:"border-box",display:"flex"})),Ce=c("img")({width:"100%",marginTop:"57px"}),Be=c(g)({display:"flex",alignItems:"baseline",justifyContent:"space-between",position:"absolute",left:"30px",top:"30px",width:"calc(100% - 60px)"}),pe=c(g)({display:"flex",alignItems:"baseline"}),Ie=c(g)({width:"70px",cursor:"pointer",position:"relative","& div":{position:"absolute",top:"28px",width:"100%",textAlign:"center",maxWidth:"65px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}}),ye=c("img")({width:"100%",height:"100%"}),je=c(g)({margin:0,marginLeft:"12px",position:"relative",top:"-20px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}),ve=c(g)({position:"absolute",top:"60px",left:"50%",transform:"translate(-50%, -50%)",cursor:"pointer"}),Ee=c("img")({width:"100%","&:active":{opacity:"0.8"}}),Z=c(g)(({backgroundcolor:e})=>({height:"calc(100dvh - 145px)",width:"100%",position:"absolute",top:"145px",padding:"0px 30px",backgroundColor:e,"@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}})),q=c(g)(({backgroundcolor:e})=>({backgroundColor:e,height:"calc(100dvh - 145px)",position:"relative",zIndex:"1",display:"flex",flexDirection:"column",padding:"20px",overflowY:"scroll",paddingTop:"100px",justifySelf:"center","@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}})),T=c(g)({display:"flex",alignItems:"center",margin:"10px",maxWidth:"350px",minWidth:"300px","& .MuiBox-root:first-of-type":{width:"50%",paddingRight:"20px"},"& .MuiInputBase-root":{width:"100% !important",backgroundColor:"#FFF"},"& :nth-of-type(2)":{width:"50%","& .MuiBox-root":{paddingRight:"0px"},"& .MuiFormControl-root":{width:"65px","& .MuiInputBase-root":{width:"100% !important",backgroundColor:"#FFF"},"& .css-mat3fe-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{width:"unset !important",backgroundColor:"#FFF"},"& .MuiSelect-select":{width:"100% !important",padding:"0px !important",backgroundColor:"#FFF"},"& input":{width:"100%",padding:"8px 10px",backgroundColor:"#FFF",textAlign:"center"}}}}),M=c(g)({display:"flex",justifyContent:"space-between",alignItems:"center"}),Q=c(g)(({bordercolor:e})=>({display:"flex",justifyContent:"center",marginTop:"30px","& button":{border:`1px solid ${e}`}})),Te=e=>{var I;const{theme:i,readingLanguage:l}=r.useContext(V),{logoTextColor:d,mainBGColor:p}=G(i);return o.jsxs(Se,{backgroundcolor:p,children:[o.jsx(Ce,{src:i==S.DEFAULT||i==S.DARK?C.book_subtract:i==S.BLACK_AND_WHITE?C.book_subtract_BAW:i==S.SAPPHIRE?C.book_subtract_sapphire:C.book_subtract_easyocean}),o.jsx(Be,{children:o.jsxs(pe,{children:[o.jsx(Ie,{onClick:e.onClickCover,children:o.jsx(ye,{src:e.bookCover})}),o.jsx(je,{children:o.jsx(m,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:d,children:(I=e.bookTitle)==null?void 0:I[l||"en"]})})]})}),o.jsx(ve,{children:o.jsx(Ee,{src:i==S.DEFAULT||i==S.DARK?C.close2:i==S.BLACK_AND_WHITE?C.close2_BAW:i==S.SAPPHIRE?C.close2_sapphire:C.close2_easyocean,onClick:e.onClickClose})})]})};function Ne(e){const{theme:i}=r.useContext(V),{headerBGColor:l,logoTextColor:d,mainBGColor:p}=G(i),I=()=>{var h,B,u,j;return!e.isSpecialBook&&o.jsx(Z,{backgroundcolor:l,children:o.jsxs(q,{backgroundcolor:l,children:[o.jsxs(T,{children:[o.jsx(m,{color:d,textAlign:"right",children:"Go to sub book: "}),o.jsx($,{label:"",options:e.subBookOptions,value:e.subBook,onChange:b=>e.onSubBookChange(b.target.value)})]}),o.jsxs(T,{color:d,children:[o.jsx(m,{color:d,textAlign:"right",children:"Go to chapter: "}),o.jsxs(M,{children:[o.jsx(R,{type:"Number",value:e.chapterNumber,onChange:e.onChapterChange}),o.jsx(m,{color:d,fontSize:13,children:`(${(((B=(h=e.selectedSubBookInfo)==null?void 0:h.chapterInfos)==null?void 0:B.length)||0).toString()} chapters)`})]})]}),o.jsxs(T,{children:[o.jsx(m,{color:d,textAlign:"right",children:"Go to aya: "}),o.jsxs(M,{children:[o.jsx(R,{type:"Number",value:e.verseNumber,onChange:e.onVerseChange}),o.jsx(m,{color:d,fontSize:13,children:`(${(((j=(u=e.selectedChapterInfo)==null?void 0:u.verses)==null?void 0:j.length)||0).toString()} ayat)`})]})]}),o.jsx(Q,{bordercolor:p,children:o.jsx(K,{label:"Go",onClick:e.onGo})})]})})},A=()=>{var h,B;return e.isSpecialBook&&o.jsx(Z,{backgroundcolor:l,children:o.jsxs(q,{backgroundcolor:l,children:[o.jsxs(T,{children:[o.jsx(m,{color:d,textAlign:"right",children:"Go to Surah: "}),o.jsx($,{label:"",options:e.subBookOptions,value:e.subBook,onChange:u=>e.onSubBookChange(u.target.value)})]}),o.jsxs(T,{children:[o.jsx(m,{color:d,textAlign:"right",children:"Go to aya: "}),o.jsxs(M,{children:[o.jsx(R,{type:"Number",value:e.verseNumber,onChange:e.onVerseChange}),o.jsx(m,{color:d,fontSize:13,children:`(${(((B=(h=e.selectedChapterInfo)==null?void 0:h.verses)==null?void 0:B.length)||0).toString()} ayat)`})]})]}),o.jsx(Q,{bordercolor:p,children:o.jsx(K,{label:"Go",onClick:e.onGo})})]})})};return o.jsxs(o.Fragment,{children:[A(),I()]})}function _e(e){const[i,l]=r.useState(!1),[d,p]=r.useState({en:"",ar:""}),[I,A]=r.useState(""),[h,B]=r.useState(),[u,j]=r.useState(),[b,O]=r.useState(),[X,P]=r.useState([]),[y,J]=r.useState(e.currentSubBook),[v,w]=r.useState("1"),[L,N]=r.useState("1"),{setActiveScroll:ee}=r.useContext(be),F=xe();r.useEffect(()=>{const t=e.bookInfos.find(a=>a.bookId==e.currentBook);B(t);const n=(t==null?void 0:t.bookTitle)||{en:"",ar:""},s=(t==null?void 0:t.bookImage)||"";p(n),A(ae+s)},[e.bookInfos]);const oe=()=>o.jsx(Te,{bookCover:I,bookTitle:d,onClickCover:()=>F("/home"),onClickClose:()=>F(-1)});r.useEffect(()=>{const t=e.bookInfos.find(n=>n.bookId==e.currentBook);if(t!=null&&t.subBooks){const n=t.subBooks.map(s=>{var a;return{label:(a=s.subBookTitle)==null?void 0:a.en,value:s.subBookId}});P(n)}else P([])},[e.bookInfos,e.currentBook]);const te=()=>{var k,_,H,D,z,U,W;const t=(k=e.bookInfos)==null?void 0:k.find(f=>f.bookId==e.currentBook),n=(_=t==null?void 0:t.subBooks)==null?void 0:_.find(f=>f.subBookId==y),s=(H=n==null?void 0:n.chapterInfos)==null?void 0:H.find(f=>f.chapterNumber==Number(v)),a=s==null?void 0:s.chapterId,x=((W=(U=(z=(D=e.chapterInfos)==null?void 0:D.find(f=>f.chapterId==a))==null?void 0:z.verses)==null?void 0:U.find(f=>f.verseNumber==Number(L)))==null?void 0:W.verseId)||"";e.dispatch({type:E.SET_CURRENT_SUBBOOK,payload:{currentSubBook:y}}),e.dispatch({type:E.SET_CURRENT_CHAPTER,payload:{currentChapter:a}}),e.dispatch({type:E.SET_CURRENT_VERSE,payload:{currentVerse:x}}),e.dispatch({type:E.SET_PREVIOUS_PAGE,payload:{prevPage:ie.SUBBOOKEXPLORER}}),ee(ce),F("/reading")},ne=t=>{var n;u&&Number(t)<=((n=u.chapterInfos)==null?void 0:n.length)&&w(t)},se=t=>{var n;b&&Number(t)<=((n=b.verses)==null?void 0:n.length)&&N(t)};r.useEffect(()=>{var s,a;const t=(s=e.bookInfos)==null?void 0:s.find(x=>x.bookId==e.currentBook),n=(a=t==null?void 0:t.subBooks)==null?void 0:a.find(x=>x.subBookId==e.currentSubBook);j(n)},[e.currentSubBook]),r.useEffect(()=>{var t;w(((t=b==null?void 0:b.chapterNumber)==null?void 0:t.toString())||"1"),N("1")},[e.currentChapter,u]),r.useEffect(()=>{var n,s;const t=(n=b==null?void 0:b.verses)==null?void 0:n.find(a=>a.verseId==e.currentVerse);N(((s=t==null?void 0:t.verseNumber)==null?void 0:s.toString())||"1")},[e.currentVerse,b]),r.useEffect(()=>{var s,a;const t=(s=e.bookInfos)==null?void 0:s.find(x=>x.bookId==e.currentBook),n=(a=t==null?void 0:t.subBooks)==null?void 0:a.find(x=>x.subBookId==y);j(n),w("1"),N("1")},[y]),r.useEffect(()=>{v&&(()=>{var a,x;const n=(a=u==null?void 0:u.chapterInfos)==null?void 0:a.find(k=>k.chapterNumber==Number(v));n!=null&&n.chapterId&&Y.fetchVerses(n.chapterId);const s=(x=e.chapterInfos)==null?void 0:x.find(k=>k.chapterId==(n==null?void 0:n.chapterId));s?(O(s),l(!1)):n!=null&&n.chapterId?Y.fetchVerses(n==null?void 0:n.chapterId).then(k=>{e.dispatch({type:E.ADD_CHAPTERINFO,payload:{chapterInfo:k}}),O(k),l(!1)}).catch(k=>{ge.custom(_=>o.jsx(fe,{text:k,offset:70,visible:_.visible})),l(!1)}):l(!1)})()},[u,y,v]);const re=()=>{var t,n;return o.jsx(Ne,{subBookOptions:X,subBook:y,chapterNumber:v,verseNumber:L,selectedSubBookInfo:u,selectedChapterInfo:b,isSpecialBook:((t=h==null?void 0:h.bookTitle)==null?void 0:t.en)=="Qur'an"||((n=h==null?void 0:h.bookTitle)==null?void 0:n.en)=="Zabur",onSubBookChange:s=>J(s),onChapterChange:s=>ne(s.target.value),onVerseChange:s=>se(s.target.value),onGo:te})};return o.jsxs(me,{children:[oe(),re(),i&&o.jsx(ke,{})]})}const Ae=e=>({bookInfos:e.books.bookInfos,subBooks:e.books.subBooks,chapterInfos:e.books.chapterInfos,currentBook:e.pageStatus.currentBook,currentSubBook:e.pageStatus.currentSubBook,currentChapter:e.pageStatus.currentChapter,currentVerse:e.pageStatus.currentVerse}),De=he(Ae)(_e);export{De as default};
