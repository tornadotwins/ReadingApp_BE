var ne=Object.defineProperty;var oe=(e,o,i)=>o in e?ne(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i;var R=(e,o,i)=>oe(e,typeof o!="symbol"?o+"":o,i);import{b as r,j as t,a3 as m,ap as D,ay as p}from"./index-BlVR3GtE.js";import{s as l,B as u,S as T,g as W,c as ie,u as ae,k as C,d as g}from"./App-DQFXbvwU.js";import{I as h,T as L}from"./index-Dtt_xCqE.js";import{L as se}from"./index-Ddv1Qeui.js";import{C as I}from"./index-D7ISJgAX.js";import{H as le}from"./index-JEFr5PuH.js";import{d as re}from"./ArrowBack-DcaK3uZi.js";import{a as de}from"./auth.service-BbDv6u2-.js";import{a as F}from"./axios-upsvKRUO.js";import{i as j}from"./indexedDB.service-KlEqTZIR.js";import"./index-BECufGdF.js";const ce=l(u)({display:"flex",position:"relative",width:"100%"}),ue=l("img")({width:"100%",marginTop:"57px"}),he=l(u)({display:"flex",alignItems:"baseline",justifyContent:"space-between",position:"absolute",left:"30px",top:"30px",width:"calc(100% - 60px)"}),ye=l(u)({display:"flex",flexDirection:"column"}),ge=l(u)({width:"40px",cursor:"pointer",position:"relative","& div":{position:"absolute",top:"28px",width:"100%",textAlign:"center",maxWidth:"65px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}}),xe=l("img")({width:"100%",height:"100%"}),me=l(u)({margin:0,position:"relative",top:"-20px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none"}),fe=l(u)(({hamburgercolor:e})=>({position:"absolute",top:"12px",right:"15px",width:"46px","& .hamburger-react":{width:"46px !important",color:e},"& .hamburger-react ~ .MuiBox-root ":{border:`1px solid ${e}`},"@media (max-height: 639px)":{top:"8px",right:"10px"},"@media screen and (orientation: landscape)":{right:"15px"}})),Ce=l("img")({position:"relative",top:"10px",cursor:"pointer","&:active":{opacity:"0.8"}}),Ie=l(u)({position:"absolute",top:"60px",left:"50%",transform:"translate(-50%, -50%)",cursor:"pointer"}),Se=l("img")({width:"100%","&:active":{opacity:"0.8"}});l("img")({position:"absolute",top:"18px",right:"30px",cursor:"pointer","&:active":{opacity:"0.8"}});const we=l(u)({height:"calc(100dvh - 145px)",width:"100%",position:"absolute",top:"145px",padding:"0px 30px","@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}}),be=l(u)({backgroundColor:"#FFF",height:"calc(100dvh - 145px)",position:"relative",zIndex:"1",display:"flex",flexDirection:"column",padding:"20px",overflowY:"scroll","@media screen and (orientation: landscape)":{height:"calc(100dvh - 145px)"}}),je=l(u)(({showbtn:e})=>({width:"100%",display:e==="true"?"none":"flex",alignItems:"center",marginBottom:"10px",svg:{fill:"#1B7695"}})),_e=l(u)({padding:0,boxSizing:"border-box",display:"flex",flexDirection:"column"}),Ee=l(u)({backgroundColor:"#F0F5FB",padding:"9px 11px",marginBottom:"10px",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"space-between"}),ke=l(u)({width:"calc(100% - 65px)",display:"flex",flexDirection:"column",alignItems:"center",marginRight:"20px"}),ve=l(u)({width:"100%",display:"flex",alignItems:"center"}),Ae=l(u)({width:"15px",height:"15px",marginRight:"10px"}),De=l("img")({width:"100%",height:"100%"}),Te=l(u)({width:"100%","& .MuiBox-root":{width:"100%",display:"-webkit-box",justifyContent:"center",overflow:"hidden",textOverflow:"ellipsis",WebkitLineClamp:"2",WebkitBoxOrient:"vertical"}}),M=l(u)(({isdownloaded:e})=>({width:"45px",display:"flex",alignItems:"center",justifyContent:e=="true"?"space-between":"flex-end",cursor:"pointer"})),P=l("img")({width:"16px",height:"16px"});function Je(e){const{theme:o}=r.useContext(T),{logoTextColor:i,headerBGColor:x}=W(o);return t.jsxs(ce,{children:[t.jsx(ue,{src:o==m.DEFAULT||o==m.DARK?h.book_subtract:o==m.BLACK_AND_WHITE?h.book_subtract_BAW:o==m.SAPPHIRE?h.book_subtract_sapphire:h.book_subtract_easyocean}),t.jsxs(he,{children:[t.jsxs(ye,{children:[t.jsx(ge,{onClick:e.onLogoClick,children:t.jsx(xe,{src:e.markImg})}),t.jsx(me,{children:t.jsx(L,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:i,children:e.markTitle})})]}),t.jsx(Ce,{src:o==m.EASY_OCEAN?h.search_easyocean:h.search,onClick:e.onSearchClick})]}),t.jsx(Ie,{children:t.jsx(Se,{src:o==m.DEFAULT||o==m.DARK?h.close2:o==m.BLACK_AND_WHITE?h.close2_BAW:o==m.SAPPHIRE?h.close2_sapphire:h.close2_easyocean,onClick:e.onCloseClick})}),t.jsx(fe,{hamburgercolor:x,children:t.jsx(le,{isLogin:e.isLoggedIn,textColor:i,itemBgColor:x,toggleColor:x,terms:e.welcomePageTerms,onLogin:e.onLogin,onSettings:e.onSettings})})]})}function Be(e){const{theme:o}=r.useContext(T);return t.jsxs(Ee,{children:[t.jsxs(ke,{onClick:()=>e.onCardClick(e.cardId),children:[t.jsxs(ve,{children:[t.jsx(Ae,{children:t.jsx(De,{src:D+e.image})}),t.jsx(L,{fontFamily:"Inter",fontWeight:"400",fontSize:12,lineHeight:24,color:"#899093",children:e.seriesTitle})]}),t.jsx(Te,{children:t.jsx(L,{fontFamily:"Inter",fontWeight:"700",fontSize:16,lineHeight:24,color:"#000",children:e.title})})]}),t.jsxs(t.Fragment,{children:[!e.isDownloaded&&t.jsx(M,{isdownloaded:e.isDownloaded?"true":"false",children:t.jsx(P,{src:o==m.DEFAULT||o==m.EASY_OCEAN?h.download:h.download_white,onClick:()=>e.onDownload(e.cardId)})}),e.isDownloaded&&t.jsxs(M,{isdownloaded:e.isDownloaded?"true":"false",children:[t.jsx(P,{src:o==m.DEFAULT||o==m.EASY_OCEAN?h.download_refresh:h.download_refresh_white,onClick:()=>e.onRefresh(e.cardId)}),t.jsx(P,{src:o==m.DEFAULT||o==m.EASY_OCEAN?h.download_cancel:h.download_cancel_white,onClick:()=>e.onCancel(e.cardId)})]})]})]})}function Re(e){var o;return t.jsx(_e,{children:(o=e.cards)==null?void 0:o.map((i,x)=>{var S,y,E;return t.jsx(Be,{cardId:i._id,image:i==null?void 0:i.image,seriesTitle:(S=i==null?void 0:i.seriesTitle)==null?void 0:S.en,title:(y=i==null?void 0:i.title)==null?void 0:y.en,isDownloaded:(E=e.downloadedJourneyIds)==null?void 0:E.includes(i==null?void 0:i._id),onCardClick:()=>e.onCardClick(i._id),onDownload:e.onDownload,onRefresh:e.onRefresh,onCancel:e.onCancel},x)})})}function pe(e){const{theme:o}=r.useContext(T),{mainBGColor:i,headerBGColor:x}=W(o);return t.jsx(we,{style:{backgroundColor:x},children:t.jsxs(be,{style:{backgroundColor:i},children:[t.jsx(je,{onClick:e.onBack,showbtn:e.showBackBtn?"false":"true",children:t.jsx(re,{})}),t.jsx(Re,{cards:e.journeyItems,downloadedJourneyIds:e.downloadedJourneyIds,onCardClick:e.onCardClick,onDownload:e.onDownload,onRefresh:e.onRefresh,onCancel:e.onCancel})]})})}class Pe{constructor(){R(this,"fetchJourneyInfo",o=>new Promise((i,x)=>{const S=D+`/journey/${o}/journeys`;F.get(S).then(y=>{y.data?i(y.data):x(y.data.error)}).catch(y=>{x(this.getErrorMessage(y))})}));R(this,"fetchHierarchy",o=>new Promise((i,x)=>{const S=D+`/journey/${o}/hierarchy`;F.get(S).then(y=>{y.data?i(y.data):x(y.data.error)}).catch(y=>{x(this.getErrorMessage(y))})}))}getErrorMessage(o){let i=o.message;return o.response&&o.response.data&&o.response.data.message&&(i=o.response.data.message),i}}const H=new Pe,Le=l(u)({display:"flex",flexDirection:"column",margin:"auto",position:"relative",height:"100dvh"});function Oe(e){const[o,i]=r.useState(!1),[x,S]=r.useState(""),[y,E]=r.useState(""),[k,v]=r.useState([]),[A,Y]=r.useState(),[G,z]=r.useState(),[K,O]=r.useState(!1),{readingLanguage:w}=r.useContext(T),_=ae();r.useEffect(()=>{var s,d;const a=e.terms.find(c=>c.pageTitle==="Index & Bookmark Page"),n=e.terms.find(c=>c.pageTitle==="Welcome Page");(s=a==null?void 0:a.isPublished)!=null&&s[w]?Y(a):C.custom(c=>t.jsx(I,{text:"The terminologies for this page are not published.",visible:c.visible})),(d=n==null?void 0:n.isPublished)!=null&&d[w]?z(n):C.custom(c=>t.jsx(I,{text:"The terminologies for hamburger menu are not published.",visible:c.visible}))},[e.terms,w]),r.useEffect(()=>{var s,d;const n=(((s=e.books[1])==null?void 0:s.books)||[]).find(c=>(c==null?void 0:c._id)===e.currentBook);n&&(S(D+n.markImage||h.default_cover),E(((d=n==null?void 0:n.title)==null?void 0:d[w])||"Title"))},[e.books,e.currentBook,w]);const J=r.useCallback(a=>{var s;const n=(s=e.journeyCardInfos)==null?void 0:s.filter(d=>d.parent===a);return n.length>0?(v(n),n):(v([]),[])},[e.journeyCardInfos]),N=r.useCallback(a=>{H.fetchJourneyInfo(a).then(n=>{e.dispatch({type:g.ADD_JOURNEY_CARD_INFOS,payload:{cards:n.cards}}),v(n.cards)}).catch(n=>C.custom(s=>t.jsx(I,{text:n,visible:s.visible})))},[]);r.useEffect(()=>{j.getAllJourneyIds().then(a=>{e.dispatch({type:g.SET_DOWNLOADED_JOURNEY_IDS,payload:{downloadedJourneyIds:a}})}),j.getAllArticleIds().then(a=>{e.dispatch({type:g.SET_DOWNLOADED_ARTICLE_IDS,payload:{downloadedArticleIds:a}})})},[]),r.useCallback(async a=>{i(!0),j.getJourneyCards(a).then(n=>{e.dispatch({type:g.ADD_JOURNEY_CARD_INFOS,payload:{cards:n}}),v(n)}).catch(n=>C.custom(s=>t.jsx(I,{text:n,visible:s.visible}))),i(!1)},[]),r.useEffect(()=>{i(!0),e.prevPage===p.LIBRARY||e.parentJourneyId==e.currentBook?(J(e.currentBook).length===0&&N(e.currentBook),e.dispatch({type:g.SET_PREVIOUS_PAGE,payload:{prevPage:p.JOURNEYS}})):e.parentJourneyId&&J(e.parentJourneyId).length===0&&N(e.parentJourneyId),i(!1)},[e.currentBook,e.prevPage,e.parentJourneyId]),r.useEffect(()=>{k.length>0&&k[0].depth!=1?O(!0):O(!1)},[k]);const V=()=>{var n,s,d;const a=((d=(s=(n=A==null?void 0:A.texts)==null?void 0:n.find(c=>c.variable==="Not Built Yet"))==null?void 0:s.text)==null?void 0:d[w])||"";C.custom(c=>t.jsx(I,{text:a,visible:c.visible}))},$=()=>{_("/library"),e.dispatch({type:g.SET_PREVIOUS_PAGE,payload:{prevPage:p.JOURNEYS}}),e.dispatch({type:g.SET_PARENT,payload:{parent:""}})},q=()=>{e.dispatch({type:g.RESET_USER}),e.dispatch({type:g.RESET_BOOK}),e.dispatch({type:g.RESET_PAGE_STATUS}),de.logout()},Q=()=>_("/login"),X=r.useCallback(()=>{var n;const a=(n=e.journeyCardInfos)==null?void 0:n.find(s=>s._id===e.parentJourneyId);J((a==null?void 0:a.parent)||""),e.dispatch({type:g.SET_PARENT,payload:{parentId:(a==null?void 0:a.parent)||""}})},[e.parentJourneyId,e.journeyCardInfos]),Z=r.useCallback(a=>{var n,s;(s=(n=e.journeyCardInfos)==null?void 0:n.find(d=>(d==null?void 0:d._id)===a))!=null&&s.isArticle?(e.dispatch({type:g.SET_CURRENT_ARTICLE,payload:{articleId:a}}),_("/journeyReading")):e.dispatch({type:g.SET_PARENT,payload:{parentId:a}})},[e.journeyCardInfos]),ee=r.useCallback((a,n)=>{i(!0),Promise.all([j.saveJourneys(a),j.saveArticleInfo(n)]).then(()=>{C.custom(s=>t.jsx(I,{text:"Downloaded successfully",visible:s.visible}))}).catch(s=>{C.custom(d=>t.jsx(I,{text:s,visible:d.visible}))}).finally(()=>{i(!1)})},[]),U=a=>{H.fetchHierarchy(a).then(n=>{const s=n.journeys,d=n.articles,c=e.downloadedJourneyIds?s.filter(f=>!e.downloadedJourneyIds.includes(f._id)):s,B=e.downloadedArticleIds?d.filter(f=>{var b;return!((b=e.downloadedArticleIds)!=null&&b.includes(f._id))&&f.isArticle}):s.filter(f=>f.isArticle);if(c&&c.length>0){const f=c.map(b=>b._id)||[];f.push(a),e.dispatch({type:g.ADD_DOWNLOADED_JOURNEY_IDS,payload:{downloadedJourneyIds:f}})}if(B&&B.length>0){const f=B.map(b=>b._id)||[];f.push(a),e.dispatch({type:g.ADD_DOWNLOADED_ARTICLE_IDS,payload:{downloadedArticleIds:f}})}ee(s,d)}).catch(n=>C.custom(s=>t.jsx(I,{text:n,visible:s.visible})))},te=a=>{j.removeJourneyInfo(a).then(n=>{C.custom(s=>t.jsx(I,{text:"Download canceled",visible:s.visible})),e.dispatch({type:g.REMOVE_DOWNLOADED_JOURNEY_IDS,payload:{journeyIds:n}})}).catch(n=>C.custom(s=>t.jsx(I,{text:n,visible:s.visible})))};return t.jsxs(Le,{children:[t.jsx(Je,{markImg:x,markTitle:y,isLoggedIn:!!e.currentUser,terms:A||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},welcomePageTerms:G||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},onLogoClick:()=>_("/"),onCloseClick:$,onLogin:e.currentUser?q:Q,onSettings:()=>_("/settings"),onSearchClick:V}),t.jsx(pe,{currentUser:e.currentUser,journeyItems:k||[],showBackBtn:K,downloadedJourneyIds:e.downloadedJourneyIds,onBack:X,onCardClick:Z,onDownload:U,onRefresh:U,onCancel:te}),o&&t.jsx(se,{})]})}function Ne(e){return{currentBook:e.pageStatus.currentBook,books:e.books.books,currentUser:e.user.currentUser,parentJourneyId:e.journeys.parentId,journeyCardInfos:e.journeys.journeyCardInfos,downloadedJourneyIds:e.journeys.downloadedJourneyIds,downloadedArticleIds:e.journeys.downloadedArticleIds,terms:e.terms.terms,prevPage:e.pageStatus.prevPage}}const Qe=ie(Ne)(Oe);export{Qe as default};