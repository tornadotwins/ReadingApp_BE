import{b as s,j as t,a3 as j,au as le,aC as ce,aK as de}from"./index-Dj5rl3f-.js";import{S as $,g as Y,aY as ue,aZ as he,a_ as ge,s as c,B as m,c as xe,aP as be,u as fe,j as G,V as me}from"./App-C0W3meXv.js";import{I as v,T as B}from"./index-Bg26INBa.js";import{B as ee}from"./Button-DHtMB6Cv.js";import{S as te}from"./index-CHfPFQhn.js";import{b as oe}from"./book.service-2R9BPGam.js";import{L as ke}from"./index-LjYGd8NM.js";import{C as Se}from"./index-CYwMUGlF.js";import"./index-DYeNB9I-.js";import"./index-C88pvD_q.js";function W(e){const{theme:l}=s.useContext($),{textColor:d}=Y(l);return t.jsxs(t.Fragment,{children:[t.jsx(ue,{children:t.jsx(he,{value:e.value,size:e.size=="small"?"small":"medium",type:e.type,style:{color:d},bordercolor:d,onChange:e.onChange,onBlur:e.onBlur})}),e.error&&t.jsx(ge,{children:e.error})]})}const Ce=c(m)({width:"100%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box"}),Be=c(m)(({backgroundcolor:e})=>({width:"100%",backgroundColor:e,boxSizing:"border-box",display:"flex"})),pe=c("img")({width:"100%",marginTop:"57px"}),Ie=c(m)({display:"flex",alignItems:"baseline",justifyContent:"space-between",position:"absolute",left:"30px",top:"30px",width:"calc(100% - 60px)"}),ye=c(m)({display:"flex",alignItems:"baseline"}),je=c(m)({width:"70px",cursor:"pointer",position:"relative","& div":{position:"absolute",top:"28px",width:"100%",textAlign:"center",maxWidth:"65px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}}),ve=c("img")({width:"100%",height:"100%"}),Ee=c(m)({margin:0,position:"absolute",top:"50px",left:"75px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}),Te=c(m)({position:"absolute",top:"60px",left:"50%",transform:"translate(-50%, -50%)",cursor:"pointer"}),Ne=c("img")({width:"100%","&:active":{opacity:"0.8"}}),ne=c(m)(({backgroundcolor:e})=>({height:"calc(100dvh - 145px)",width:"100%",position:"absolute",top:"145px",padding:"0px 30px",backgroundColor:e,"@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}})),ae=c(m)(({backgroundcolor:e})=>({backgroundColor:e,height:"calc(100dvh - 145px)",position:"relative",zIndex:"1",display:"flex",flexDirection:"column",padding:"20px",overflowY:"scroll",paddingTop:"100px",justifySelf:"center","@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}})),R=c(m)({display:"flex",alignItems:"center",margin:"10px",maxWidth:"350px",minWidth:"300px","& .MuiBox-root:first-of-type":{width:"50%",paddingRight:"20px"},"& .MuiInputBase-root":{width:"100% !important",backgroundColor:"#FFF"},"& :nth-of-type(2)":{width:"50%","& .MuiBox-root":{paddingRight:"0px"},"& .MuiFormControl-root":{width:"65px","& .MuiInputBase-root":{width:"100% !important",backgroundColor:"#FFF"},"& .css-mat3fe-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{width:"unset !important",backgroundColor:"#FFF"},"& .MuiSelect-select":{width:"100% !important",padding:"0px !important",backgroundColor:"#FFF"},"& input":{width:"100%",padding:"8px 10px",backgroundColor:"#FFF",textAlign:"center"}}}}),K=c(m)({display:"flex",justifyContent:"space-between",alignItems:"center"}),se=c(m)(({bordercolor:e})=>({display:"flex",justifyContent:"center",marginTop:"30px","& button":{border:`1px solid ${e}`}})),_e=e=>{var E;const{theme:l}=s.useContext($),{logoTextColor:d,mainBGColor:g}=Y(l);return t.jsxs(Be,{backgroundcolor:g,children:[t.jsx(pe,{src:l==j.DEFAULT||l==j.DARK?v.book_subtract:l==j.BLACK_AND_WHITE?v.book_subtract_BAW:l==j.SAPPHIRE?v.book_subtract_sapphire:v.book_subtract_easyocean}),t.jsx(Ie,{children:t.jsxs(ye,{children:[t.jsx(je,{onClick:e.onClickCover,children:t.jsx(ve,{src:e.bookCover})}),t.jsx(Ee,{children:t.jsx(B,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:d,children:(E=e.bookTitle)==null?void 0:E[e.appLanguage||"en"]})})]})}),t.jsx(Te,{children:t.jsx(Ne,{src:l==j.DEFAULT||l==j.DARK?v.close2:l==j.BLACK_AND_WHITE?v.close2_BAW:l==j.SAPPHIRE?v.close2_sapphire:v.close2_easyocean,onClick:e.onClickClose})})]})};function Ae(e){const{theme:l}=s.useContext($),{headerBGColor:d,logoTextColor:g,mainBGColor:E}=Y(l),z=()=>{var x,T,u,p,i,I,N,y,b,_,h,w,F,A,M,P,V,L,O,H;return!e.isSpecialBook&&t.jsx(ne,{backgroundcolor:d,children:t.jsxs(ae,{backgroundcolor:d,children:[t.jsxs(R,{children:[t.jsx(B,{color:g,textAlign:"right",children:((p=(u=(T=(x=e.terms)==null?void 0:x.texts)==null?void 0:T.find(k=>k.variable==="Go to sub book"))==null?void 0:u.text)==null?void 0:p[e.appLanguage])||"Go to sub book: "}),t.jsx(te,{label:"",options:e.subBookOptions,value:e.subBook,onChange:k=>e.onSubBookChange(k.target.value)})]}),t.jsxs(R,{color:g,children:[t.jsx(B,{color:g,textAlign:"right",children:((y=(N=(I=(i=e.terms)==null?void 0:i.texts)==null?void 0:I.find(k=>k.variable==="Go to chapter"))==null?void 0:N.text)==null?void 0:y[e.appLanguage])||"Go to chapter: "}),t.jsxs(K,{children:[t.jsx(W,{type:"Number",value:e.chapterNumber,onChange:e.onChapterChange}),t.jsx(B,{color:g,fontSize:13,children:`(${(((_=(b=e.selectedSubBookInfo)==null?void 0:b.chapterInfos)==null?void 0:_.length)||0).toString()} chapters)`})]})]}),t.jsxs(R,{children:[t.jsx(B,{color:g,textAlign:"right",children:((A=(F=(w=(h=e.terms)==null?void 0:h.texts)==null?void 0:w.find(k=>k.variable==="Go to aya"))==null?void 0:F.text)==null?void 0:A[e.appLanguage])||"Go to aya: "}),t.jsxs(K,{children:[t.jsx(W,{type:"Number",value:e.verseNumber,onChange:e.onVerseChange}),t.jsx(B,{color:g,fontSize:13,children:`(${(((P=(M=e.selectedChapterInfo)==null?void 0:M.verses)==null?void 0:P.length)||0).toString()} ayat)`})]})]}),t.jsx(se,{bordercolor:E,children:t.jsx(ee,{label:((H=(O=(L=(V=e.terms)==null?void 0:V.texts)==null?void 0:L.find(k=>k.variable==="Go"))==null?void 0:O.text)==null?void 0:H[e.appLanguage])||"Go",onClick:e.onGo})})]})})},U=()=>{var x,T,u,p,i,I,N,y,b,_;return e.isSpecialBook&&t.jsx(ne,{backgroundcolor:d,children:t.jsxs(ae,{backgroundcolor:d,children:[t.jsxs(R,{children:[t.jsx(B,{color:g,textAlign:"right",children:((p=(u=(T=(x=e.terms)==null?void 0:x.texts)==null?void 0:T.find(h=>h.variable==="Go to surah"))==null?void 0:u.text)==null?void 0:p[e.appLanguage])||"Go to surah: "}),t.jsx(te,{label:"",options:e.subBookOptions,value:e.subBook,onChange:h=>e.onSubBookChange(h.target.value)})]}),t.jsxs(R,{children:[t.jsx(B,{color:g,textAlign:"right",children:((y=(N=(I=(i=e.terms)==null?void 0:i.texts)==null?void 0:I.find(h=>h.variable==="Go to aya"))==null?void 0:N.text)==null?void 0:y[e.appLanguage])||"Go to aya: "}),t.jsxs(K,{children:[t.jsx(W,{type:"Number",value:e.verseNumber,onChange:e.onVerseChange}),t.jsx(B,{color:g,fontSize:13,children:`(${(((_=(b=e.selectedChapterInfo)==null?void 0:b.verses)==null?void 0:_.length)||0).toString()} ayat)`})]})]}),t.jsx(se,{bordercolor:E,children:t.jsx(ee,{label:"Go",onClick:e.onGo})})]})})};return t.jsxs(t.Fragment,{children:[U(),z()]})}function we(e){const[l,d]=s.useState(!1),[g,E]=s.useState({en:"",ar:""}),[z,U]=s.useState(""),[x,T]=s.useState(),[u,p]=s.useState(),[i,I]=s.useState(),[N,y]=s.useState([]),[b,_]=s.useState(e.currentSubBook),[h,w]=s.useState("1"),[F,A]=s.useState("1"),[M,P]=s.useState(),{setActiveScroll:V}=s.useContext(be),L=fe();s.useEffect(()=>{const o=e.terms.find(n=>n.pageTitle=="SubBook Explorer");o!=null&&o.isPublished&&P(o)},[e.terms]),s.useEffect(()=>{const o=e.bookInfos.find(r=>r.bookId==e.currentBook);T(o);const n=(o==null?void 0:o.bookTitle)||{en:"",ar:""},a=(o==null?void 0:o.bookImage)||"";E(n),U(le+a)},[e.bookInfos]);const O=()=>t.jsx(_e,{bookCover:z,bookTitle:g,appLanguage:e.appLanguage,onClickCover:()=>L("/home"),onClickClose:()=>L(-1)});s.useEffect(()=>{const o=e.bookInfos.find(n=>n.bookId==e.currentBook);if(o!=null&&o.subBooks){const n=o.subBooks.map(a=>{var r;return{label:(r=a.subBookTitle)==null?void 0:r.en,value:a.subBookId}});y(n)}else y([])},[e.bookInfos,e.currentBook]);const H=()=>{var S,D,Z,q,Q,X,J;const o=(S=e.bookInfos)==null?void 0:S.find(C=>C.bookId==e.currentBook),n=(D=o==null?void 0:o.subBooks)==null?void 0:D.find(C=>C.subBookId==b),a=(Z=n==null?void 0:n.chapterInfos)==null?void 0:Z.find(C=>C.chapterNumber==Number(h)),r=a==null?void 0:a.chapterId,f=((J=(X=(Q=(q=e.chapterInfos)==null?void 0:q.find(C=>C.chapterId==r))==null?void 0:Q.verses)==null?void 0:X.find(C=>C.verseNumber==Number(F)))==null?void 0:J.verseId)||"";e.dispatch({type:G.SET_CURRENT_SUBBOOK,payload:{currentSubBook:b}}),e.dispatch({type:G.SET_CURRENT_CHAPTER,payload:{currentChapter:r}}),e.dispatch({type:G.SET_CURRENT_VERSE,payload:{currentVerse:f}}),e.dispatch({type:G.SET_PREVIOUS_PAGE,payload:{prevPage:ce.SUBBOOKEXPLORER}}),V(de),L("/reading")},k=o=>{var n;u&&Number(o)<=((n=u.chapterInfos)==null?void 0:n.length)&&w(o)},re=o=>{var n;i&&Number(o)<=((n=i.verses)==null?void 0:n.length)&&A(o)};s.useEffect(()=>{var a,r;const o=(a=e.bookInfos)==null?void 0:a.find(f=>f.bookId==e.currentBook),n=(r=o==null?void 0:o.subBooks)==null?void 0:r.find(f=>f.subBookId==e.currentSubBook);p(n)},[e.currentSubBook]),s.useEffect(()=>{var o;w(((o=i==null?void 0:i.chapterNumber)==null?void 0:o.toString())||"1"),A("1")},[e.currentChapter,u]),s.useEffect(()=>{var n,a;const o=(n=i==null?void 0:i.verses)==null?void 0:n.find(r=>r.verseId==e.currentVerse);A(((a=o==null?void 0:o.verseNumber)==null?void 0:a.toString())||"1")},[e.currentVerse,i]),s.useEffect(()=>{var a,r;const o=(a=e.bookInfos)==null?void 0:a.find(f=>f.bookId==e.currentBook),n=(r=o==null?void 0:o.subBooks)==null?void 0:r.find(f=>f.subBookId==b);p(n),w("1"),A("1")},[b]),s.useEffect(()=>{h&&(()=>{var r,f;const n=(r=u==null?void 0:u.chapterInfos)==null?void 0:r.find(S=>S.chapterNumber==Number(h));n!=null&&n.chapterId&&oe.fetchVerses(n.chapterId);const a=(f=e.chapterInfos)==null?void 0:f.find(S=>S.chapterId==(n==null?void 0:n.chapterId));a?(I(a),d(!1)):n!=null&&n.chapterId?oe.fetchVerses(n==null?void 0:n.chapterId).then(S=>{e.dispatch({type:G.ADD_CHAPTERINFO,payload:{chapterInfo:S}}),I(S),d(!1)}).catch(S=>{me.custom(D=>t.jsx(Se,{text:S,offset:70,visible:D.visible})),d(!1)}):d(!1)})()},[u,b,h]);const ie=()=>{var o,n;return t.jsx(Ae,{subBookOptions:N,subBook:b,chapterNumber:h,verseNumber:F,selectedSubBookInfo:u,selectedChapterInfo:i,isSpecialBook:((o=x==null?void 0:x.bookTitle)==null?void 0:o.en)=="Qur'an"||((n=x==null?void 0:x.bookTitle)==null?void 0:n.en)=="Zabur",terms:M||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},appLanguage:e.appLanguage,onSubBookChange:a=>_(a),onChapterChange:a=>k(a.target.value),onVerseChange:a=>re(a.target.value),onGo:H})};return t.jsxs(Ce,{children:[O(),ie(),l&&t.jsx(ke,{})]})}const Le=e=>({bookInfos:e.books.bookInfos,subBooks:e.books.subBooks,chapterInfos:e.books.chapterInfos,currentBook:e.pageStatus.currentBook,currentSubBook:e.pageStatus.currentSubBook,currentChapter:e.pageStatus.currentChapter,currentVerse:e.pageStatus.currentVerse,appLanguage:e.user.appLanguage,terms:e.terms.terms}),Ue=xe(Le)(we);export{Ue as default};
