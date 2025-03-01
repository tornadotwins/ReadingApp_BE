var T=Object.defineProperty;var I=(t,e,r)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var _=(t,e,r)=>I(t,typeof e!="symbol"?e+"":e,r);import{b as m,j as o,ay as L,a3 as A,au as P,aC as k}from"./index-8gCEmbCj.js";import{s as n,B as l,S,g as j,c as R,u as M,d as w,k as v}from"./App-C0bULsYI.js";import{L as F}from"./index-jKqvL5Wg.js";import{C as G}from"./index-DJcZbyB0.js";import{A as D}from"./index-qdZ1rknX.js";import{T as C,I as b}from"./index-CY88kZPB.js";import{d as z}from"./ArrowBack-z1PyhVe1.js";import{a as N}from"./axios-upsvKRUO.js";import"./index-DDdNWTEE.js";const B=n("img")({width:"100%",marginTop:"20px"}),W=n(l)({width:"100%",height:"100%",padding:"0px 6px",position:"relative",overflowX:"hidden",scrollbarGutter:"stable both-edges"}),H=n(l)({width:"100%",marginTop:"20px","& .MuiAccordion-gutters":{width:"100%"},"& .MuiAccordion-root .MuiAccordionSummary-root .Mui-expanded":{margin:"12px 0px !important"}}),J=n(l)({width:"100%","& .MuiBox-root":{padding:"0px "}}),U=n(l)({width:"100%",margin:"20px 0px","& .MuiBox-root":{textWrap:"wrap"}}),O=n(l)({position:"fixed",zIndex:"3",bottom:"0px",width:"100%",height:"85px",overflow:"hidden"}),K=n("img")({width:"100%",position:"absolute",bottom:"0px","@media (min-width: 750px)":{top:"0px"},"@media (min-width: 1050px)":{top:"-10px"},"@media (min-width: 1450px)":{top:"-20px"}}),$=n(l)(({backgroundcolor:t})=>({display:"flex",width:"110px",justifyContent:"space-between",alignItems:"center",position:"relative",bottom:"-23px",left:"25px",boxSizing:"border-box",padding:"10px 20px",borderRadius:"30px",backgroundColor:t})),X=n(l)(({textcolor:t})=>({display:"flex",alignItems:"center","& svg":{fill:t}}));function q(t){var h;const{theme:e,textSize:r}=m.useContext(S),{mainBGColor:c,textColor:d}=j(e),s=(a,u)=>{var p,f,y;return a.image?o.jsx(B,{src:a.image.url,alt:a.image.alt},u):a.isCollapse?o.jsx(H,{children:o.jsx(D,{label:(p=a.title)==null?void 0:p[t.currentLanguage],outArrow:!0,detail:o.jsx(J,{children:a.content.map((i,x)=>!i.url&&!i.isTitle?o.jsx(C,{children:i==null?void 0:i[t.currentLanguage]},x):!i.url&&i.isTitle?o.jsx(C,{fontWeight:"bold",isTitle:!0,children:i==null?void 0:i[t.currentLanguage]},x):o.jsx(B,{src:i.url,alt:i.alt},x))})})},u):o.jsx(C,{fontFamily:"Inter",lineHeight:r+20,direction:t.currentLanguage===L?"rtl":"ltr",fontSize:a.title?r+2:r,fontWeight:a.title?"bold":"500",textAlign:a.title?"center":"left",children:((f=a.title)==null?void 0:f[t.currentLanguage])||((y=a.text)==null?void 0:y[t.currentLanguage])},u)};return o.jsx(U,{style:{backgroundColor:c,color:d},children:o.jsx(W,{children:(h=t.verses)==null?void 0:h.map((a,u)=>s(a,u))})})}function Q(t){const{theme:e}=m.useContext(S),{mainBGColor:r,altTextColor:c}=j(e),d=()=>o.jsx(K,{src:e==A.DEFAULT||e==A.DARK?b.bar_reading_subtract:e==A.BLACK_AND_WHITE?b.bar_reading_subtract_BAW:e==A.SAPPHIRE?b.bar_reading_subtract_sapphire:b.bar_reading_subtract_easyocean}),s=()=>o.jsxs($,{backgroundcolor:r,onClick:t.goBack,children:[o.jsx(X,{textcolor:c,children:o.jsx(z,{})}),o.jsx(C,{color:"#17637D",fontFamily:"Inter",fontWeight:"400",fontSize:16,lineHeight:24,children:"Back"})]});return o.jsxs(O,{children:[d(),s()]})}const Y=n(l)({width:"100%",display:"flex",flexDirection:"column"}),Z=n(l)({width:"100%",height:"calc(100dvh - 100px)",display:"flex",boxSizing:"border-box",padding:"20px"}),V=n(l)({width:"100%",display:"flex",boxSizing:"border-box"});class tt{constructor(){_(this,"fetchArticle",e=>new Promise((r,c)=>{const d=P+`/journey/${e}/article`;N.get(d).then(s=>{s.data?r(s.data):c(s.data.error)}).catch(s=>{c(this.getErrorMessage(s))})}))}getErrorMessage(e){let r=e.message;return e.response&&e.response.data&&e.response.data.message&&(r=e.response.data.message),r}}const et=new tt;function ot(t){const[e,r]=m.useState(!1),[c,d]=m.useState([]),s=M(),{theme:h,readingLanguage:a}=m.useContext(S),{mainBGColor:u}=j(h),p=()=>{t.dispatch({type:w.SET_PREVIOUS_PAGE,payload:{prevPage:k.READING}}),s("/journey")};m.useEffect(()=>{var x;r(!0);const i=(x=t.articleContent)==null?void 0:x.filter(g=>g.article===t.currentArticle);i&&i.length>0?(d(i),r(!1)):et.fetchArticle(t.currentArticle).then(g=>{t.dispatch({type:w.ADD_ARTICLE_CONTENT,payload:{articleContent:g.verses}}),d(g.verses),r(!1)}).catch(g=>{v.custom(E=>o.jsx(G,{text:g,offset:70,visible:E.visible})),r(!1)})},[]);const f=()=>o.jsx(Z,{children:o.jsx(q,{currentLanguage:a,verses:c})}),y=()=>o.jsx(V,{children:o.jsx(Q,{goBack:p})});return o.jsxs(Y,{style:{backgroundColor:u},children:[f(),y(),e&&o.jsx(F,{})]})}const rt=t=>({articleContent:t.journeys.articleContent,terms:t.terms.terms,currentArticle:t.journeys.currentArticle}),mt=R(rt)(ot);export{mt as default};
