var te=Object.defineProperty;var ne=(e,i,n)=>i in e?te(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n;var R=(e,i,n)=>ne(e,typeof i!="symbol"?i+"":i,n);import{b as c,j as t,a3 as m,au as v,aC as P}from"./index-8gCEmbCj.js";import{s as r,B as u,S as T,g as H,c as oe,u as ie,k as C,P as se,d as g,Q as ae,R as le,T as de,U as re,V as ce}from"./App-C0bULsYI.js";import{I as h,T as O}from"./index-CY88kZPB.js";import{L as ue}from"./index-jKqvL5Wg.js";import{C as I}from"./index-DJcZbyB0.js";import{H as he}from"./index-BtnzG5qn.js";import{d as ye}from"./ArrowBack-z1PyhVe1.js";import{a as ge}from"./auth.service-Er4hmgfi.js";import{a as U}from"./axios-upsvKRUO.js";import"./index-DDdNWTEE.js";const xe=r(u)({display:"flex",position:"relative",width:"100%"}),me=r("img")({width:"100%",marginTop:"57px"}),fe=r(u)({display:"flex",alignItems:"baseline",justifyContent:"space-between",position:"absolute",left:"30px",top:"30px",width:"calc(100% - 60px)"}),Ce=r(u)({display:"flex",flexDirection:"column"}),Ie=r(u)({width:"40px",cursor:"pointer",position:"relative","& div":{position:"absolute",top:"28px",width:"100%",textAlign:"center",maxWidth:"65px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}}),we=r("img")({width:"100%",height:"100%"}),Se=r(u)({margin:0,position:"relative",top:"-20px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}),be=r(u)(({hamburgercolor:e})=>({position:"absolute",top:"12px",right:"15px",width:"46px","& .hamburger-react":{width:"46px !important",color:e},"& .hamburger-react ~ .MuiBox-root ":{border:`1px solid ${e}`},"@media (max-height: 639px)":{top:"8px",right:"10px"},"@media screen and (orientation: landscape)":{right:"15px"}})),je=r("img")({position:"relative",top:"10px",cursor:"pointer","&:active":{opacity:"0.8"}}),_e=r(u)({position:"absolute",top:"60px",left:"50%",transform:"translate(-50%, -50%)",cursor:"pointer"}),Ae=r("img")({width:"100%","&:active":{opacity:"0.8"}});r("img")({position:"absolute",top:"18px",right:"30px",cursor:"pointer","&:active":{opacity:"0.8"}});const ke=r(u)({height:"calc(100dvh - 145px)",width:"100%",position:"absolute",top:"145px",padding:"0px 30px","@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}}),De=r(u)({backgroundColor:"#FFF",height:"calc(100dvh - 145px)",position:"relative",zIndex:"1",display:"flex",flexDirection:"column",padding:"20px",overflowY:"scroll","@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}}),Ee=r(u)(({showbtn:e})=>({width:"100%",display:e==="true"?"none":"flex",alignItems:"center",marginBottom:"10px",svg:{fill:"#1B7695"}})),ve=r(u)({padding:0,boxSizing:"border-box",display:"flex",flexDirection:"column"}),Te=r(u)(({isdisable:e})=>({backgroundColor:"#F0F5FB",padding:"9px 11px",marginBottom:"10px",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:e==="false"?"pointer":"not-allowed",opacity:e==="true"?"0.5":"1"})),Je=r(u)({width:"calc(100% - 65px)",display:"flex",flexDirection:"column",alignItems:"center",marginRight:"20px"}),Be=r(u)({width:"100%",display:"flex",alignItems:"center"}),Re=r(u)({width:"15px",height:"15px",marginRight:"10px"}),Pe=r("img")({width:"100%",height:"100%"}),Le=r(u)({width:"100%","& .MuiBox-root":{width:"100%",display:"-webkit-box",justifyContent:"center",overflow:"hidden",textOverflow:"ellipsis",WebkitLineClamp:"2",WebkitBoxOrient:"vertical"}}),M=r(u)(({isdownloaded:e})=>({width:"45px",display:"flex",alignItems:"center",justifyContent:e=="true"?"space-between":"flex-end",cursor:"pointer"})),L=r("img")({width:"16px",height:"16px"});function Oe(e){const{theme:i}=c.useContext(T),{logoTextColor:n,headerBGColor:x}=H(i);return t.jsxs(xe,{children:[t.jsx(me,{src:i==m.DEFAULT||i==m.DARK?h.book_subtract:i==m.BLACK_AND_WHITE?h.book_subtract_BAW:i==m.SAPPHIRE?h.book_subtract_sapphire:h.book_subtract_easyocean}),t.jsxs(fe,{children:[t.jsxs(Ce,{children:[t.jsx(Ie,{onClick:e.onLogoClick,children:t.jsx(we,{src:e.markImg})}),t.jsx(Se,{children:t.jsx(O,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:n,children:e.markTitle})})]}),t.jsx(je,{src:i==m.EASY_OCEAN?h.search_easyocean:h.search,onClick:e.onSearchClick})]}),t.jsx(_e,{children:t.jsx(Ae,{src:i==m.DEFAULT||i==m.DARK?h.close2:i==m.BLACK_AND_WHITE?h.close2_BAW:i==m.SAPPHIRE?h.close2_sapphire:h.close2_easyocean,onClick:e.onCloseClick})}),t.jsx(be,{hamburgercolor:x,children:t.jsx(he,{isLogin:e.isLoggedIn,textColor:n,itemBgColor:x,toggleColor:x,terms:e.welcomePageTerms,onLogin:e.onLogin,onSettings:e.onSettings})})]})}function Ne(e){const{theme:i}=c.useContext(T);return t.jsxs(Te,{isdisable:e.isPublished||!e.isArticle?"false":"true",children:[t.jsxs(Je,{onClick:e.isPublished||!e.isArticle?()=>e.onCardClick(e.cardId):()=>{},children:[t.jsxs(Be,{children:[t.jsx(Re,{children:t.jsx(Pe,{src:v+e.image})}),t.jsx(O,{fontFamily:"Inter",fontWeight:"400",fontSize:12,lineHeight:24,color:"#899093",children:e.seriesTitle})]}),t.jsx(Le,{children:t.jsx(O,{fontFamily:"Inter",fontWeight:"700",fontSize:16,lineHeight:24,color:"#000",children:e.title})})]}),t.jsxs(t.Fragment,{children:[!e.isDownloaded&&t.jsx(M,{isdownloaded:e.isDownloaded?"true":"false",children:t.jsx(L,{src:i==m.DEFAULT||i==m.EASY_OCEAN?h.download:h.download_white,onClick:e.isPublished||!e.isArticle?()=>e.onDownload(e.cardId):()=>{}})}),e.isDownloaded&&t.jsxs(M,{isdownloaded:e.isDownloaded?"true":"false",children:[t.jsx(L,{src:i==m.DEFAULT||i==m.EASY_OCEAN?h.download_refresh:h.download_refresh_white,onClick:()=>e.onRefresh(e.cardId)}),t.jsx(L,{src:i==m.DEFAULT||i==m.EASY_OCEAN?h.download_cancel:h.download_cancel_white,onClick:()=>e.onCancel(e.cardId)})]})]})]})}function Fe(e){var i;return t.jsx(ve,{children:(i=e.cards)==null?void 0:i.map((n,x)=>{var w,y,k,b,S;return t.jsx(Ne,{cardId:n==null?void 0:n._id,isArticle:n==null?void 0:n.isArticle,image:(w=n==null?void 0:n.image)==null?void 0:w.url,seriesTitle:(y=n==null?void 0:n.seriesTitle)==null?void 0:y.en,title:(k=n==null?void 0:n.title)==null?void 0:k.en,isPublished:(b=n==null?void 0:n.isPublished)==null?void 0:b[e.language],isDownloaded:(S=e.downloadedJourneyIds)==null?void 0:S.includes(n==null?void 0:n._id),onCardClick:()=>e.onCardClick(n._id),onDownload:e.onDownload,onRefresh:e.onRefresh,onCancel:e.onCancel},x)})})}function Ue(e){const{theme:i}=c.useContext(T),{mainBGColor:n,headerBGColor:x}=H(i);return t.jsx(ke,{style:{backgroundColor:x},children:t.jsxs(De,{style:{backgroundColor:n},children:[t.jsx(Ee,{onClick:e.onBack,showbtn:e.showBackBtn?"false":"true",children:t.jsx(ye,{})}),t.jsx(Fe,{cards:e.journeyItems,language:e.language,downloadedJourneyIds:e.downloadedJourneyIds,onCardClick:e.onCardClick,onDownload:e.onDownload,onRefresh:e.onRefresh,onCancel:e.onCancel})]})})}class Me{constructor(){R(this,"fetchJourneyInfo",i=>new Promise((n,x)=>{const w=v+`/journey/${i}/journeys`;U.get(w).then(y=>{y.data?n(y.data):x(y.data.error)}).catch(y=>{x(this.getErrorMessage(y))})}));R(this,"fetchHierarchy",i=>new Promise((n,x)=>{const w=v+`/journey/${i}/hierarchy`;U.get(w).then(y=>{y.data?n(y.data):x(y.data.error)}).catch(y=>{x(this.getErrorMessage(y))})}))}getErrorMessage(i){let n=i.message;return i.response&&i.response.data&&i.response.data.message&&(n=i.response.data.message),n}}const E=new Me,He=r(u)({display:"flex",flexDirection:"column",margin:"auto",position:"relative",height:"100dvh"});function pe(e){const[i,n]=c.useState(!1),[x,w]=c.useState(""),[y,k]=c.useState(""),[b,S]=c.useState([]),[D,p]=c.useState(),[W,Y]=c.useState(),[G,N]=c.useState(!1),{readingLanguage:j}=c.useContext(T),A=ie();c.useEffect(()=>{var s,l;const a=e.terms.find(d=>d.pageTitle==="Index & Bookmark Page"),o=e.terms.find(d=>d.pageTitle==="Welcome Page");(s=a==null?void 0:a.isPublished)!=null&&s[j]?p(a):C.custom(d=>t.jsx(I,{text:"The terminologies for this page are not published.",visible:d.visible})),(l=o==null?void 0:o.isPublished)!=null&&l[j]?Y(o):C.custom(d=>t.jsx(I,{text:"The terminologies for hamburger menu are not published.",visible:d.visible}))},[e.terms,j]),c.useEffect(()=>{var s,l;const o=(((s=e.books[1])==null?void 0:s.books)||[]).find(d=>(d==null?void 0:d._id)===e.currentBook);o&&(w(v+o.markImage||h.default_cover),k(((l=o==null?void 0:o.title)==null?void 0:l[j])||"Title"))},[e.books,e.currentBook,j]);const J=c.useCallback(a=>{var s;const o=(s=e.journeyCardInfos)==null?void 0:s.filter(l=>l.parent===a);if((o==null?void 0:o.length)>0){const l=Array.from(new Map(o.map(d=>[d._id,d])).values());return S(l),l}else return S([]),[]},[e.journeyCardInfos]);c.useEffect(()=>{!e.downloadedJourneyIds&&se().then(a=>{e.dispatch({type:g.SET_DOWNLOADED_JOURNEY_IDS,payload:{downloadedJourneyIds:a}})}),!e.downloadedArticleIds&&ae().then(a=>{e.dispatch({type:g.SET_DOWNLOADED_ARTICLE_IDS,payload:{downloadedArticleIds:a}})})},[]),c.useCallback(async a=>{n(!0),le(a).then(o=>{e.dispatch({type:g.ADD_JOURNEY_CARD_INFOS,payload:{cards:o}}),S(o)}).catch(o=>C.custom(s=>t.jsx(I,{text:o,visible:s.visible}))),n(!1)},[]),c.useEffect(()=>{n(!0),e.prevPage===P.LIBRARY||!e.parentJourneyId||e.parentJourneyId==e.currentBook?(J(e.currentBook).length===0&&[].length==0&&E.fetchJourneyInfo(e.currentBook).then(s=>{e.dispatch({type:g.ADD_JOURNEY_CARD_INFOS,payload:{cards:s.cards}}),S(s.cards)}).catch(s=>C.custom(l=>t.jsx(I,{text:s,visible:l.visible}))),e.dispatch({type:g.SET_PREVIOUS_PAGE,payload:{prevPage:P.JOURNEYS}})):e.parentJourneyId&&J(e.parentJourneyId).length===0&&[].length==0&&E.fetchJourneyInfo(e.parentJourneyId).then(s=>{e.dispatch({type:g.ADD_JOURNEY_CARD_INFOS,payload:{cards:s.cards}}),S(s.cards)}).catch(s=>C.custom(l=>t.jsx(I,{text:s,visible:l.visible}))),n(!1)},[e.currentBook,e.prevPage,e.parentJourneyId]),c.useEffect(()=>{b.length>0&&b[0].depth!=1?N(!0):N(!1)},[b]);const z=()=>{var o,s,l;const a=((l=(s=(o=D==null?void 0:D.texts)==null?void 0:o.find(d=>d.variable==="Not Built Yet"))==null?void 0:s.text)==null?void 0:l[j])||"";C.custom(d=>t.jsx(I,{text:a,visible:d.visible}))},K=()=>{A("/library"),e.dispatch({type:g.SET_PREVIOUS_PAGE,payload:{prevPage:P.JOURNEYS}}),e.dispatch({type:g.SET_PARENT,payload:{parent:""}})},V=()=>{e.dispatch({type:g.RESET_USER}),e.dispatch({type:g.RESET_BOOK}),e.dispatch({type:g.RESET_PAGE_STATUS}),ge.logout()},$=()=>A("/login"),q=c.useCallback(()=>{var o;const a=(o=e.journeyCardInfos)==null?void 0:o.find(s=>s._id===e.parentJourneyId);J((a==null?void 0:a.parent)||""),e.dispatch({type:g.SET_PARENT,payload:{parentId:(a==null?void 0:a.parent)||""}})},[e.parentJourneyId,e.journeyCardInfos]),Q=c.useCallback(a=>{var o,s;(s=(o=e.journeyCardInfos)==null?void 0:o.find(l=>(l==null?void 0:l._id)===a))!=null&&s.isArticle?(e.dispatch({type:g.SET_CURRENT_ARTICLE,payload:{articleId:a}}),A("/journeyReading")):e.dispatch({type:g.SET_PARENT,payload:{parentId:a}})},[e.journeyCardInfos]),F=c.useCallback((a,o)=>{n(!0),de(a).then(s=>{C.custom(l=>t.jsx(I,{text:"Downloaded the journeys successfully!",visible:l.visible})),re(o).then(l=>{n(!1),C.custom(d=>t.jsx(I,{text:"Downloaded the articles successfully!",visible:d.visible}))}).catch(l=>{n(!1),C.custom(d=>t.jsx(I,{text:l,visible:d.visible}))})}).catch(s=>{C.custom(l=>t.jsx(I,{text:s,visible:l.visible}))})},[]),X=a=>{E.fetchHierarchy(a).then(o=>{const s=o.journeys,l=o.articles,d=e.downloadedJourneyIds?s.filter(f=>!e.downloadedJourneyIds.includes(f._id)):s,B=e.downloadedArticleIds?l.filter(f=>{var _;return!((_=e.downloadedArticleIds)!=null&&_.includes(f._id))&&f.isArticle}):s.filter(f=>f.isArticle);if(d&&d.length>0){const f=d.map(_=>_._id)||[];f.push(a),e.dispatch({type:g.ADD_DOWNLOADED_JOURNEY_IDS,payload:{downloadedJourneyIds:f}})}if(B&&B.length>0){const f=B.map(_=>_._id)||[];f.push(a),e.dispatch({type:g.ADD_DOWNLOADED_ARTICLE_IDS,payload:{downloadedArticleIds:f}})}F(s,l)}).catch(o=>C.custom(s=>t.jsx(I,{text:o,visible:s.visible})))},Z=a=>{E.fetchHierarchy(a).then(o=>{const s=o.journeys,l=o.articles;F(s,l)})},ee=a=>{ce(a).then(o=>{console.log(o)}).catch(o=>C.custom(s=>t.jsx(I,{text:o,visible:s.visible})))};return t.jsxs(He,{children:[t.jsx(Oe,{markImg:x,markTitle:y,isLoggedIn:!!e.currentUser,terms:D||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},welcomePageTerms:W||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},onLogoClick:()=>A("/"),onCloseClick:K,onLogin:e.currentUser?V:$,onSettings:()=>A("/settings"),onSearchClick:z}),t.jsx(Ue,{currentUser:e.currentUser,language:j,journeyItems:b||[],showBackBtn:G,downloadedJourneyIds:e.downloadedJourneyIds,onBack:q,onCardClick:Q,onDownload:X,onRefresh:Z,onCancel:ee}),i&&t.jsx(ue,{})]})}function We(e){return{currentBook:e.pageStatus.currentBook,books:e.books.books,currentUser:e.user.currentUser,parentJourneyId:e.journeys.parentId,journeyCardInfos:e.journeys.journeyCardInfos,downloadedJourneyIds:e.journeys.downloadedJourneyIds,downloadedArticleIds:e.journeys.downloadedArticleIds,terms:e.terms.terms,prevPage:e.pageStatus.prevPage}}const tt=oe(We)(pe);export{tt as default};
