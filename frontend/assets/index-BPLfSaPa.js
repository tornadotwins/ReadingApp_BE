var te=Object.defineProperty;var ne=(e,i,n)=>i in e?te(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n;var R=(e,i,n)=>ne(e,typeof i!="symbol"?i+"":i,n);import{b as c,j as t,a3 as m,au as v,aC as P}from"./index-DEG7EQ5W.js";import{s as d,B as u,S as J,g as M,c as oe,u as ie,P as ae,j as y,Q as se,R as le,V as C,U as de,W as re,X as ce}from"./App-DgKGe4wk.js";import{I as h,T as O}from"./index-YIZxQGig.js";import{L as ue}from"./index-DBFuRob-.js";import{C as I}from"./index-B0lHUwSa.js";import{H as he}from"./index-BLn-o_4b.js";import{d as ge}from"./ArrowBack-C2oU2uaD.js";import{a as ye}from"./auth.service-C5exErY4.js";import{a as U}from"./index-C88pvD_q.js";import"./index-BvRsoc9J.js";const xe=d(u)({display:"flex",position:"relative",width:"100%"}),me=d("img")({width:"100%",marginTop:"57px"}),fe=d(u)({display:"flex",alignItems:"baseline",justifyContent:"space-between",position:"absolute",left:"30px",top:"30px",width:"calc(100% - 60px)"}),Ce=d(u)({display:"flex",flexDirection:"column"}),Ie=d(u)({width:"40px",cursor:"pointer",position:"relative","& div":{position:"absolute",top:"28px",width:"100%",textAlign:"center",maxWidth:"65px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}}),we=d("img")({width:"100%",height:"100%"}),Se=d(u)({margin:0,position:"relative",top:"-20px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}),be=d(u)(({hamburgercolor:e})=>({position:"absolute",top:"12px",right:"15px",width:"46px","& .hamburger-react":{width:"46px !important",color:e},"& .hamburger-react ~ .MuiBox-root ":{border:`1px solid ${e}`},"@media (max-height: 639px)":{top:"8px",right:"10px"},"@media screen and (orientation: landscape)":{right:"15px"}})),je=d("img")({position:"relative",top:"10px",cursor:"pointer","&:active":{opacity:"0.8"}}),_e=d(u)({position:"absolute",top:"60px",left:"50%",transform:"translate(-50%, -50%)",cursor:"pointer"}),Ae=d("img")({width:"100%","&:active":{opacity:"0.8"}});d("img")({position:"absolute",top:"18px",right:"30px",cursor:"pointer","&:active":{opacity:"0.8"}});const De=d(u)({height:"calc(100dvh - 145px)",width:"100%",position:"absolute",top:"145px",padding:"0px 30px","@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}}),Ee=d(u)({backgroundColor:"#FFF",height:"calc(100dvh - 145px)",position:"relative",zIndex:"1",display:"flex",flexDirection:"column",padding:"20px",overflowY:"scroll","@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}}),ke=d(u)(({showbtn:e})=>({width:"100%",display:e==="true"?"none":"flex",alignItems:"center",marginBottom:"10px",svg:{fill:"#1B7695"}})),ve=d(u)({padding:0,boxSizing:"border-box",display:"flex",flexDirection:"column"}),Je=d(u)(({isdisable:e})=>({backgroundColor:"#F0F5FB",padding:"9px 11px",marginBottom:"10px",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:e==="false"?"pointer":"not-allowed",opacity:e==="true"?"0.5":"1"})),Te=d(u)({width:"calc(100% - 65px)",display:"flex",flexDirection:"column",alignItems:"center",marginRight:"20px"}),Be=d(u)({width:"100%",display:"flex",alignItems:"center"}),Re=d(u)({width:"15px",height:"15px",marginRight:"10px"}),Pe=d("img")({width:"100%",height:"100%"}),Le=d(u)({width:"100%","& .MuiBox-root":{width:"100%",display:"-webkit-box",justifyContent:"center",overflow:"hidden",textOverflow:"ellipsis",WebkitLineClamp:"2",WebkitBoxOrient:"vertical"}}),p=d(u)(({isdownloaded:e})=>({width:"45px",display:"flex",alignItems:"center",justifyContent:e=="true"?"space-between":"flex-end",cursor:"pointer"})),L=d("img")({width:"16px",height:"16px"});function Oe(e){const{theme:i}=c.useContext(J),{logoTextColor:n,headerBGColor:x}=M(i);return t.jsxs(xe,{children:[t.jsx(me,{src:i==m.DEFAULT||i==m.DARK?h.book_subtract:i==m.BLACK_AND_WHITE?h.book_subtract_BAW:i==m.SAPPHIRE?h.book_subtract_sapphire:h.book_subtract_easyocean}),t.jsxs(fe,{children:[t.jsxs(Ce,{children:[t.jsx(Ie,{onClick:e.onLogoClick,children:t.jsx(we,{src:e.markImg})}),t.jsx(Se,{children:t.jsx(O,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:n,children:e.markTitle})})]}),t.jsx(je,{src:i==m.EASY_OCEAN?h.search_easyocean:h.search,onClick:e.onSearchClick})]}),t.jsx(_e,{children:t.jsx(Ae,{src:i==m.DEFAULT||i==m.DARK?h.close2:i==m.BLACK_AND_WHITE?h.close2_BAW:i==m.SAPPHIRE?h.close2_sapphire:h.close2_easyocean,onClick:e.onCloseClick})}),t.jsx(be,{hamburgercolor:x,children:t.jsx(he,{isLogin:e.isLoggedIn,textColor:n,itemBgColor:x,toggleColor:x,terms:e.welcomePageTerms,appLanguage:e.appLanguage,onLogin:e.onLogin,onSettings:e.onSettings})})]})}function Ne(e){const{theme:i}=c.useContext(J);return t.jsxs(Je,{isdisable:e.isPublished||!e.isArticle?"false":"true",children:[t.jsxs(Te,{onClick:e.isPublished||!e.isArticle?()=>e.onCardClick(e.cardId):()=>{},children:[t.jsxs(Be,{children:[t.jsx(Re,{children:t.jsx(Pe,{src:v+e.image})}),t.jsx(O,{fontFamily:"Inter",fontWeight:"400",fontSize:12,lineHeight:24,color:"#899093",children:e.seriesTitle})]}),t.jsx(Le,{children:t.jsx(O,{fontFamily:"Inter",fontWeight:"700",fontSize:16,lineHeight:24,color:"#000",children:e.title})})]}),t.jsxs(t.Fragment,{children:[!e.isDownloaded&&t.jsx(p,{isdownloaded:e.isDownloaded?"true":"false",children:t.jsx(L,{src:i==m.DEFAULT||i==m.EASY_OCEAN?h.download:h.download_white,onClick:e.isPublished||!e.isArticle?()=>e.onDownload(e.cardId):()=>{}})}),e.isDownloaded&&t.jsxs(p,{isdownloaded:e.isDownloaded?"true":"false",children:[t.jsx(L,{src:i==m.DEFAULT||i==m.EASY_OCEAN?h.download_refresh:h.download_refresh_white,onClick:()=>e.onRefresh(e.cardId)}),t.jsx(L,{src:i==m.DEFAULT||i==m.EASY_OCEAN?h.download_cancel:h.download_cancel_white,onClick:()=>e.onCancel(e.cardId)})]})]})]})}function Fe(e){var i;return t.jsx(ve,{children:(i=e.cards)==null?void 0:i.map((n,x)=>{var w,g,D,b,S;return t.jsx(Ne,{cardId:n==null?void 0:n._id,isArticle:n==null?void 0:n.isArticle,image:(w=n==null?void 0:n.image)==null?void 0:w.url,seriesTitle:(g=n==null?void 0:n.seriesTitle)==null?void 0:g.en,title:(D=n==null?void 0:n.title)==null?void 0:D.en,isPublished:(b=n==null?void 0:n.isPublished)==null?void 0:b[e.language],isDownloaded:(S=e.downloadedJourneyIds)==null?void 0:S.includes(n==null?void 0:n._id),onCardClick:()=>e.onCardClick(n._id),onDownload:e.onDownload,onRefresh:e.onRefresh,onCancel:e.onCancel},x)})})}function Ue(e){const{theme:i}=c.useContext(J),{mainBGColor:n,headerBGColor:x}=M(i);return t.jsx(De,{style:{backgroundColor:x},children:t.jsxs(Ee,{style:{backgroundColor:n},children:[t.jsx(ke,{onClick:e.onBack,showbtn:e.showBackBtn?"false":"true",children:t.jsx(ge,{})}),t.jsx(Fe,{cards:e.journeyItems,language:e.language,downloadedJourneyIds:e.downloadedJourneyIds,onCardClick:e.onCardClick,onDownload:e.onDownload,onRefresh:e.onRefresh,onCancel:e.onCancel})]})})}class pe{constructor(){R(this,"fetchJourneyInfo",i=>new Promise((n,x)=>{const w=v+`/journey/${i}/journeys`;U.get(w).then(g=>{g.data?n(g.data):x(g.data.error)}).catch(g=>{x(this.getErrorMessage(g))})}));R(this,"fetchHierarchy",i=>new Promise((n,x)=>{const w=v+`/journey/${i}/hierarchy`;U.get(w).then(g=>{g.data?n(g.data):x(g.data.error)}).catch(g=>{x(this.getErrorMessage(g))})}))}getErrorMessage(i){let n=i.message;return i.response&&i.response.data&&i.response.data.message&&(n=i.response.data.message),n}}const k=new pe,Me=d(u)({display:"flex",flexDirection:"column",margin:"auto",position:"relative",height:"100dvh"});function He(e){const[i,n]=c.useState(!1),[x,w]=c.useState(""),[g,D]=c.useState(""),[b,S]=c.useState([]),[E,H]=c.useState(),[W,Y]=c.useState(),[G,N]=c.useState(!1),{readingLanguage:j}=c.useContext(J),A=ie();c.useEffect(()=>{var a,l;const s=e.terms.find(r=>r.pageTitle==="Index & Bookmark Page"),o=e.terms.find(r=>r.pageTitle==="Welcome Page");(a=s==null?void 0:s.isPublished)!=null&&a[j]&&H(s),(l=o==null?void 0:o.isPublished)!=null&&l[j]&&Y(o)},[e.terms,j]),c.useEffect(()=>{var a,l;const o=(((a=e.books[1])==null?void 0:a.books)||[]).find(r=>(r==null?void 0:r._id)===e.currentBook);o&&(w(v+o.markImage||h.default_cover),D(((l=o==null?void 0:o.title)==null?void 0:l[j])||"Title"))},[e.books,e.currentBook,j]);const T=c.useCallback(s=>{var a;const o=(a=e.journeyCardInfos)==null?void 0:a.filter(l=>l.parent===s);if((o==null?void 0:o.length)>0){const l=Array.from(new Map(o.map(r=>[r._id,r])).values());return S(l),l}else return S([]),[]},[e.journeyCardInfos]);c.useEffect(()=>{!e.downloadedJourneyIds&&ae().then(s=>{e.dispatch({type:y.SET_DOWNLOADED_JOURNEY_IDS,payload:{downloadedJourneyIds:s}})}),!e.downloadedArticleIds&&se().then(s=>{e.dispatch({type:y.SET_DOWNLOADED_ARTICLE_IDS,payload:{downloadedArticleIds:s}})})},[]),c.useCallback(async s=>{n(!0),le(s).then(o=>{e.dispatch({type:y.ADD_JOURNEY_CARD_INFOS,payload:{cards:o}}),S(o)}).catch(o=>C.custom(a=>t.jsx(I,{text:o,visible:a.visible}))),n(!1)},[]),c.useEffect(()=>{n(!0),e.prevPage===P.LIBRARY||!e.parentJourneyId||e.parentJourneyId==e.currentBook?(T(e.currentBook).length===0&&[].length==0&&k.fetchJourneyInfo(e.currentBook).then(a=>{e.dispatch({type:y.ADD_JOURNEY_CARD_INFOS,payload:{cards:a.cards}}),S(a.cards)}).catch(a=>C.custom(l=>t.jsx(I,{text:a,visible:l.visible}))),e.dispatch({type:y.SET_PREVIOUS_PAGE,payload:{prevPage:P.JOURNEYS}})):e.parentJourneyId&&T(e.parentJourneyId).length===0&&[].length==0&&k.fetchJourneyInfo(e.parentJourneyId).then(a=>{e.dispatch({type:y.ADD_JOURNEY_CARD_INFOS,payload:{cards:a.cards}}),S(a.cards)}).catch(a=>C.custom(l=>t.jsx(I,{text:a,visible:l.visible}))),n(!1)},[e.currentBook,e.prevPage,e.parentJourneyId]),c.useEffect(()=>{b.length>0&&b[0].depth!=1?N(!0):N(!1)},[b]);const z=()=>{var o,a,l;const s=((l=(a=(o=E==null?void 0:E.texts)==null?void 0:o.find(r=>r.variable==="Not Built Yet"))==null?void 0:a.text)==null?void 0:l[j])||"";C.custom(r=>t.jsx(I,{text:s,visible:r.visible}))},K=()=>{A("/library"),e.dispatch({type:y.SET_PREVIOUS_PAGE,payload:{prevPage:P.JOURNEYS}}),e.dispatch({type:y.SET_PARENT,payload:{parent:""}})},V=()=>{e.dispatch({type:y.RESET_USER}),e.dispatch({type:y.RESET_BOOK}),e.dispatch({type:y.RESET_PAGE_STATUS}),ye.logout()},$=()=>A("/login"),q=c.useCallback(()=>{var o;const s=(o=e.journeyCardInfos)==null?void 0:o.find(a=>a._id===e.parentJourneyId);T((s==null?void 0:s.parent)||""),e.dispatch({type:y.SET_PARENT,payload:{parentId:(s==null?void 0:s.parent)||""}})},[e.parentJourneyId,e.journeyCardInfos]),Q=c.useCallback(s=>{var o,a;(a=(o=e.journeyCardInfos)==null?void 0:o.find(l=>(l==null?void 0:l._id)===s))!=null&&a.isArticle?(e.dispatch({type:y.SET_CURRENT_ARTICLE,payload:{articleId:s}}),A("/journeyReading")):e.dispatch({type:y.SET_PARENT,payload:{parentId:s}})},[e.journeyCardInfos]),F=c.useCallback((s,o)=>{n(!0),de(s).then(a=>{C.custom(l=>t.jsx(I,{text:"Downloaded the journeys successfully!",visible:l.visible})),re(o).then(l=>{n(!1),C.custom(r=>t.jsx(I,{text:"Downloaded the articles successfully!",visible:r.visible}))}).catch(l=>{n(!1),C.custom(r=>t.jsx(I,{text:l,visible:r.visible}))})}).catch(a=>{C.custom(l=>t.jsx(I,{text:a,visible:l.visible}))})},[]),X=s=>{k.fetchHierarchy(s).then(o=>{const a=o.journeys,l=o.articles,r=e.downloadedJourneyIds?a.filter(f=>!e.downloadedJourneyIds.includes(f._id)):a,B=e.downloadedArticleIds?l.filter(f=>{var _;return!((_=e.downloadedArticleIds)!=null&&_.includes(f._id))&&f.isArticle}):a.filter(f=>f.isArticle);if(r&&r.length>0){const f=r.map(_=>_._id)||[];f.push(s),e.dispatch({type:y.ADD_DOWNLOADED_JOURNEY_IDS,payload:{downloadedJourneyIds:f}})}if(B&&B.length>0){const f=B.map(_=>_._id)||[];f.push(s),e.dispatch({type:y.ADD_DOWNLOADED_ARTICLE_IDS,payload:{downloadedArticleIds:f}})}F(a,l)}).catch(o=>C.custom(a=>t.jsx(I,{text:o,visible:a.visible})))},Z=s=>{k.fetchHierarchy(s).then(o=>{const a=o.journeys,l=o.articles;F(a,l)})},ee=s=>{ce(s).then(o=>{console.log(o)}).catch(o=>C.custom(a=>t.jsx(I,{text:o,visible:a.visible})))};return t.jsxs(Me,{children:[t.jsx(Oe,{markImg:x,markTitle:g,isLoggedIn:!!e.currentUser,terms:E||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},welcomePageTerms:W||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},appLanguage:e.appLanguage,onLogoClick:()=>A("/"),onCloseClick:K,onLogin:e.currentUser?V:$,onSettings:()=>A("/settings"),onSearchClick:z}),t.jsx(Ue,{currentUser:e.currentUser,language:j,journeyItems:b||[],showBackBtn:G,downloadedJourneyIds:e.downloadedJourneyIds,onBack:q,onCardClick:Q,onDownload:X,onRefresh:Z,onCancel:ee}),i&&t.jsx(ue,{})]})}function We(e){return{currentBook:e.pageStatus.currentBook,books:e.books.books,currentUser:e.user.currentUser,parentJourneyId:e.journeys.parentId,journeyCardInfos:e.journeys.journeyCardInfos,downloadedJourneyIds:e.journeys.downloadedJourneyIds,downloadedArticleIds:e.journeys.downloadedArticleIds,terms:e.terms.terms,prevPage:e.pageStatus.prevPage,appLanguage:e.user.appLanguage}}const tt=oe(We)(He);export{tt as default};
