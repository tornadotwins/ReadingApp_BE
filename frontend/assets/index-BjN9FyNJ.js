var T=Object.defineProperty;var I=(t,e,i)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var _=(t,e,i)=>I(t,typeof e!="symbol"?e+"":e,i);import{b as m,j as o,au as L,a3 as y,ap as P,ay as k}from"./index-BlVR3GtE.js";import{s as n,B as l,S as C,g as S,c as R,u as M,d as w,k as F}from"./App-p7Y9n_zN.js";import{L as G}from"./index-6rEEIzqc.js";import{C as v}from"./index-CVXIfpkF.js";import{A as D}from"./index-_q2FGHaH.js";import{T as A,I as b}from"./index-DV8mPIka.js";import{d as z}from"./ArrowBack-BLB7Ejhe.js";import{a as N}from"./axios-upsvKRUO.js";import"./index-D9KBkQnY.js";const B=n("img")({width:"100%",marginTop:"20px"}),W=n(l)({width:"100%",height:"100%",padding:"0px 6px",position:"relative",overflowX:"hidden",scrollbarGutter:"stable both-edges"}),H=n(l)({width:"100%",marginTop:"20px","& .MuiAccordion-gutters":{width:"100%"},"& .MuiAccordion-root .MuiAccordionSummary-root .Mui-expanded":{margin:"12px 0px !important"}}),J=n(l)({width:"100%","& .MuiBox-root":{padding:"0px "}}),U=n(l)({width:"100%",margin:"20px 0px","& .MuiBox-root":{textWrap:"wrap"}}),O=n(l)({position:"fixed",zIndex:"3",bottom:"0px",width:"100%",height:"85px",overflow:"hidden"}),K=n("img")({width:"100%",position:"absolute",bottom:"0px","@media (min-width: 750px)":{top:"0px"},"@media (min-width: 1050px)":{top:"-10px"},"@media (min-width: 1450px)":{top:"-20px"}}),$=n(l)(({backgroundcolor:t})=>({display:"flex",width:"110px",justifyContent:"space-between",alignItems:"center",position:"relative",bottom:"-23px",left:"25px",boxSizing:"border-box",padding:"10px 20px",borderRadius:"30px",backgroundColor:t})),X=n(l)(({textcolor:t})=>({display:"flex",alignItems:"center","& svg":{fill:t}}));function q(t){var p;const{theme:e,textSize:i}=m.useContext(C),{mainBGColor:c,textColor:d}=S(e),s=(r,u)=>{var h,f;return r.image?o.jsx(B,{src:r.image.url,alt:r.image.alt},u):r.isCollapse?o.jsx(H,{children:o.jsx(D,{label:(h=r.title)==null?void 0:h[t.currentLanguage],outArrow:!0,detail:o.jsx(J,{children:r.content.map((a,x)=>!a.url&&!a.isTitle?o.jsx(A,{children:a==null?void 0:a[t.currentLanguage]},x):!a.url&&a.isTitle?o.jsx(A,{fontWeight:"bold",isTitle:!0,children:a==null?void 0:a[t.currentLanguage]},x):o.jsx(B,{src:a.url,alt:a.alt},x))})})},u):o.jsx(A,{fontFamily:"Inter",lineHeight:i+20,direction:t.currentLanguage===L?"rtl":"ltr",fontSize:r.title?i+2:i,fontWeight:r.title?"bold":"500",textAlign:r.title?"center":"left",children:(f=r.text)==null?void 0:f[t.currentLanguage]},u)};return o.jsx(U,{style:{backgroundColor:c,color:d},children:o.jsx(W,{children:(p=t.verses)==null?void 0:p.map((r,u)=>s(r,u))})})}function Q(t){const{theme:e}=m.useContext(C),{mainBGColor:i,altTextColor:c}=S(e),d=()=>o.jsx(K,{src:e==y.DEFAULT||e==y.DARK?b.bar_reading_subtract:e==y.BLACK_AND_WHITE?b.bar_reading_subtract_BAW:e==y.SAPPHIRE?b.bar_reading_subtract_sapphire:b.bar_reading_subtract_easyocean}),s=()=>o.jsxs($,{backgroundcolor:i,onClick:t.goBack,children:[o.jsx(X,{textcolor:c,children:o.jsx(z,{})}),o.jsx(A,{color:"#17637D",fontFamily:"Inter",fontWeight:"400",fontSize:16,lineHeight:24,children:"Back"})]});return o.jsxs(O,{children:[d(),s()]})}const Y=n(l)({width:"100%",display:"flex",flexDirection:"column"}),Z=n(l)({width:"100%",height:"calc(100dvh - 100px)",display:"flex",boxSizing:"border-box",padding:"20px"}),V=n(l)({width:"100%",display:"flex",boxSizing:"border-box"});class tt{constructor(){_(this,"fetchArticle",e=>new Promise((i,c)=>{const d=P+`/article/${e}/article`;N.get(d).then(s=>{s.data?i(s.data):c(s.data.error)}).catch(s=>{c(this.getErrorMessage(s))})}))}getErrorMessage(e){let i=e.message;return e.response&&e.response.data&&e.response.data.message&&(i=e.response.data.message),i}}const et=new tt;function ot(t){const[e,i]=m.useState(!1),[c,d]=m.useState([]),s=M(),{theme:p,readingLanguage:r}=m.useContext(C),{mainBGColor:u}=S(p),h=()=>{t.dispatch({type:w.SET_PREVIOUS_PAGE,payload:{prevPage:k.READING}}),s("/journey")};m.useEffect(()=>{var j;i(!0);const x=(j=t.articleContent)==null?void 0:j.filter(g=>g.article===t.currentArticle);x&&x.length>0?(d(x),i(!1)):et.fetchArticle(t.currentArticle).then(g=>{t.dispatch({type:w.ADD_ARTICLE_CONTENT,payload:{articleContent:g}}),d(g),i(!1)}).catch(g=>{F.custom(E=>o.jsx(v,{text:g,offset:70,visible:E.visible})),i(!1)})},[]);const f=()=>o.jsx(Z,{children:o.jsx(q,{currentLanguage:r,verses:c})}),a=()=>o.jsx(V,{children:o.jsx(Q,{goBack:h})});return o.jsxs(Y,{style:{backgroundColor:u},children:[f(),a(),e&&o.jsx(G,{})]})}const it=t=>({articleContent:t.journeys.articleContent,terms:t.terms.terms,currentArticle:t.journeys.currentArticle}),mt=R(it)(ot);export{mt as default};
