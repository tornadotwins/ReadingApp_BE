import{_ as i,a as x,Z as be,c as L,j as n,O as re}from"./createTheme-C-1SeyhL.js";import{_ as q,$ as V,s as T,a3 as H,au as Se,a4 as ve,av as we,ad as se,a6 as W,a7 as K,aw as ee,ax as Pe,ay as Re,az as Ae,a2 as je,ab as Ee,aA as Te,r as ae,aB as Ie,aC as $e,T as ie,aD as Le,aE as De,aF as _e,aG as Me,aH as ze,aI as Ne,aJ as ke,I as Fe,aK as Ue,aL as te}from"./App-CMR5rSAZ.js";import{I as We,a as ne}from"./images-DszOq8LI.js";function Ge(e){return V("MuiCollapse",e)}q("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Be=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Oe=e=>{const{orientation:t,classes:o}=e,a={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return K(a,Ge,o)},qe=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.state==="entered"&&t.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>i({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&i({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),Ve=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>i({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),He=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>i({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),le=x.forwardRef(function(t,o){const a=H({props:t,name:"MuiCollapse"}),{addEndListener:l,children:c,className:u,collapsedSize:d="0px",component:m,easing:v,in:g,onEnter:r,onEntered:f,onEntering:y,onExit:P,onExited:w,onExiting:b,orientation:p="vertical",style:E,timeout:h=be.standard,TransitionComponent:I=Se}=a,D=L(a,Be),R=i({},a,{orientation:p,collapsedSize:d}),S=Oe(R),N=ve(),J=we(),A=x.useRef(null),k=x.useRef(),_=typeof d=="number"?`${d}px`:d,$=p==="horizontal",F=$?"width":"height",G=x.useRef(null),pe=se(o,G),M=s=>C=>{if(s){const j=G.current;C===void 0?s(j):s(j,C)}},Z=()=>A.current?A.current[$?"clientWidth":"clientHeight"]:0,ge=M((s,C)=>{A.current&&$&&(A.current.style.position="absolute"),s.style[F]=_,r&&r(s,C)}),me=M((s,C)=>{const j=Z();A.current&&$&&(A.current.style.position="");const{duration:U,easing:B}=ee({style:E,timeout:h,easing:v},{mode:"enter"});if(h==="auto"){const Y=N.transitions.getAutoHeightDuration(j);s.style.transitionDuration=`${Y}ms`,k.current=Y}else s.style.transitionDuration=typeof U=="string"?U:`${U}ms`;s.style[F]=`${j}px`,s.style.transitionTimingFunction=B,y&&y(s,C)}),fe=M((s,C)=>{s.style[F]="auto",f&&f(s,C)}),he=M(s=>{s.style[F]=`${Z()}px`,P&&P(s)}),xe=M(w),Ce=M(s=>{const C=Z(),{duration:j,easing:U}=ee({style:E,timeout:h,easing:v},{mode:"exit"});if(h==="auto"){const B=N.transitions.getAutoHeightDuration(C);s.style.transitionDuration=`${B}ms`,k.current=B}else s.style.transitionDuration=typeof j=="string"?j:`${j}ms`;s.style[F]=_,s.style.transitionTimingFunction=U,b&&b(s)}),ye=s=>{h==="auto"&&J.start(k.current||0,s),l&&l(G.current,s)};return n.jsx(I,i({in:g,onEnter:ge,onEntered:fe,onEntering:me,onExit:he,onExited:xe,onExiting:Ce,addEndListener:ye,nodeRef:G,timeout:h==="auto"?null:h},D,{children:(s,C)=>n.jsx(qe,i({as:m,className:W(S.root,u,{entered:S.entered,exited:!g&&_==="0px"&&S.hidden}[s]),style:i({[$?"minWidth":"minHeight"]:_},E),ref:pe},C,{ownerState:i({},R,{state:s}),children:n.jsx(Ve,{ownerState:i({},R,{state:s}),className:S.wrapper,ref:A,children:n.jsx(He,{ownerState:i({},R,{state:s}),className:S.wrapperInner,children:c})})}))}))});le.muiSupportAuto=!0;const de=x.createContext({}),Ke=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],Je=["component","slots","slotProps"],Ze=["component"];function Qe(e,t){const{className:o,elementType:a,ownerState:l,externalForwardedProps:c,getSlotOwnerState:u,internalForwardedProps:d}=t,m=L(t,Ke),{component:v,slots:g={[e]:void 0},slotProps:r={[e]:void 0}}=c;L(c,Je);const f=g[e]||a,y=Pe(r[e],l),P=Re(i({className:o},m,{externalForwardedProps:void 0,externalSlotProps:y})),{props:{component:w},internalRef:b}=P,p=L(P.props,Ze),E=se(b,y==null?void 0:y.ref,t.ref),h=u?u(p):{},I=i({},l,h),D=w,R=Ae(f,i({},e==="root",!g[e]&&d,p,D&&{as:D},{ref:E}),I);return Object.keys(h).forEach(S=>{delete R[S]}),[f,R]}function Xe(e){return V("MuiAccordion",e)}const O=q("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),Ye=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],et=e=>{const{classes:t,square:o,expanded:a,disabled:l,disableGutters:c}=e;return K({root:["root",!o&&"rounded",a&&"expanded",l&&"disabled",!c&&"gutters"],region:["region"]},Xe,t)},tt=T(je,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${O.region}`]:t.region},t.root,!o.square&&t.rounded,!o.disableGutters&&t.gutters]}})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${O.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${O.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e})=>({variants:[{props:t=>!t.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:t=>!t.disableGutters,style:{[`&.${O.expanded}`]:{margin:"16px 0"}}}]})),nt=x.forwardRef(function(t,o){const a=H({props:t,name:"MuiAccordion"}),{children:l,className:c,defaultExpanded:u=!1,disabled:d=!1,disableGutters:m=!1,expanded:v,onChange:g,square:r=!1,slots:f={},slotProps:y={},TransitionComponent:P,TransitionProps:w}=a,b=L(a,Ye),[p,E]=Ee({controlled:v,default:u,name:"Accordion",state:"expanded"}),h=x.useCallback($=>{E(!p),g&&g($,!p)},[p,g,E]),[I,...D]=x.Children.toArray(l),R=x.useMemo(()=>({expanded:p,disabled:d,disableGutters:m,toggle:h}),[p,d,m,h]),S=i({},a,{square:r,disabled:d,disableGutters:m,expanded:p}),N=et(S),J=i({transition:P},f),A=i({transition:w},y),[k,_]=Qe("transition",{elementType:le,externalForwardedProps:{slots:J,slotProps:A},ownerState:S});return n.jsxs(tt,i({className:W(N.root,c),ref:o,ownerState:S,square:r},b,{children:[n.jsx(de.Provider,{value:R,children:I}),n.jsx(k,i({in:p,timeout:"auto"},_,{children:n.jsx("div",{"aria-labelledby":I.props.id,id:I.props["aria-controls"],role:"region",className:N.region,children:D})}))]}))});function ot(e){return V("MuiAccordionDetails",e)}q("MuiAccordionDetails",["root"]);const rt=["className"],st=e=>{const{classes:t}=e;return K({root:["root"]},ot,t)},at=T("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),it=x.forwardRef(function(t,o){const a=H({props:t,name:"MuiAccordionDetails"}),{className:l}=a,c=L(a,rt),u=a,d=st(u);return n.jsx(at,i({className:W(d.root,l),ref:o,ownerState:u},c))});function lt(e){return V("MuiAccordionSummary",e)}const z=q("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),dt=["children","className","expandIcon","focusVisibleClassName","onClick"],ct=e=>{const{classes:t,expanded:o,disabled:a,disableGutters:l}=e;return K({root:["root",o&&"expanded",a&&"disabled",!l&&"gutters"],focusVisible:["focusVisible"],content:["content",o&&"expanded",!l&&"contentGutters"],expandIconWrapper:["expandIconWrapper",o&&"expanded"]},lt,t)},ut=T(Te,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${z.disabled})`]:{cursor:"pointer"},variants:[{props:o=>!o.disableGutters,style:{[`&.${z.expanded}`]:{minHeight:64}}}]}}),pt=T("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:t=>!t.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${z.expanded}`]:{margin:"20px 0"}}}]})),gt=T("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${z.expanded}`]:{transform:"rotate(180deg)"}})),mt=x.forwardRef(function(t,o){const a=H({props:t,name:"MuiAccordionSummary"}),{children:l,className:c,expandIcon:u,focusVisibleClassName:d,onClick:m}=a,v=L(a,dt),{disabled:g=!1,disableGutters:r,expanded:f,toggle:y}=x.useContext(de),P=p=>{y&&y(p),m&&m(p)},w=i({},a,{expanded:f,disabled:g,disableGutters:r}),b=ct(w);return n.jsxs(ut,i({focusRipple:!1,disableRipple:!0,disabled:g,component:"div","aria-expanded":f,className:W(b.root,c),focusVisibleClassName:W(b.focusVisible,d),onClick:P,ref:o,ownerState:w},v,{children:[n.jsx(pt,{className:b.content,ownerState:w,children:l}),u&&n.jsx(gt,{className:b.expandIconWrapper,ownerState:w,children:u})]}))});var Q={},ft=re;Object.defineProperty(Q,"__esModule",{value:!0});var ce=Q.default=void 0,ht=ft(ae()),xt=n;ce=Q.default=(0,ht.default)((0,xt.jsx)("path",{d:"m10 17 5-5-5-5z"}),"ArrowRight");var X={},Ct=re;Object.defineProperty(X,"__esModule",{value:!0});var ue=X.default=void 0,yt=Ct(ae()),bt=n;ue=X.default=(0,yt.default)((0,bt.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");function oe(e){const t=o=>{e.onChange&&e.onChange(o.target.checked)};return n.jsxs(Ie,{children:[n.jsx($e,{children:n.jsx(ie,{fontFamily:"Inter",color:"#155D74",children:e.label})}),n.jsx(Le,{children:n.jsx(De,{checked:e.value,onChange:t,disabled:e.disable,style:{backgroundColor:"#FFF",color:"#155D74"}})})]})}function Pt(e){var a,l,c,u,d,m,v,g;const[t,o]=x.useState(!1);return n.jsx(_e,{iconcolor:"#1B7695",isoutarrow:e.outArrow?"true":"false",outerarrowcolor:"#1B7695",children:n.jsxs(nt,{onChange:()=>o(r=>!r),style:{backgroundColor:"transparent"},children:[n.jsx(mt,{expandIcon:e.showArrow===!1?null:t?n.jsx(ue,{}):n.jsx(ce,{}),children:n.jsxs(Me,{children:[n.jsxs(ze,{children:[e.summaryIcon&&n.jsx(Ne,{src:We.icon_mobile}),n.jsx(ie,{color:"#1B7695",fontWeight:"700",fontFamily:"Inter",children:e.label})]}),e.summaryTitle&&n.jsx(ke,{onClick:r=>r.stopPropagation(),children:n.jsx(Fe,{value:e.summaryTitle,label:"",onChange:r=>e.onChange&&e.onChange(r),onKeyDown:r=>{r.key=="Enter"&&e.onCurrentChapterTitleEnterPressed&&e.summaryTitle&&e.onCurrentChapterTitleEnterPressed(e.summaryTitle)}})}),e.hasSwitches&&n.jsxs(Ue,{onClick:r=>r.stopPropagation(),children:[n.jsx(te,{children:n.jsx(oe,{label:"Complete: ",value:((a=e.isComplete)==null?void 0:a[e.currentLanguage||"en"])||!1,disable:!((l=e.currentUser)!=null&&l.isAdmin||(c=e.currentUser)!=null&&c.roles.some(r=>r.language==ne(e.currentLanguage||"en")&&r.role.toLowerCase()=="translator".toLowerCase())),onChange:r=>{var f;return e.onChangeAppTextPageStatus&&e.onChangeAppTextPageStatus({pageId:e.pageId||"",isCompleted:{...e.isComplete,[e.currentLanguage||""]:r},isPublished:e.isPublish?{...e.isPublish,[e.currentLanguage||"en"]:r&&((f=e.isPublish)==null?void 0:f[e.currentLanguage||"en"])}:{en:!1,ar:!1}})}})}),n.jsx(te,{onClick:r=>r.stopPropagation(),children:n.jsx(oe,{label:"Publish: ",value:((u=e.isComplete)==null?void 0:u[e.currentLanguage||"en"])&&((d=e.isPublish)==null?void 0:d[e.currentLanguage||"en"])||!1,disable:!(((m=e.currentUser)!=null&&m.isAdmin||(v=e.currentUser)!=null&&v.roles.some(r=>r.language==ne(e.currentLanguage||"en")&&r.role.toLowerCase()=="publisher".toLowerCase()))&&((g=e.isComplete)!=null&&g[e.currentLanguage||"en"])),onChange:r=>e.onChangeAppTextPageStatus&&e.onChangeAppTextPageStatus({pageId:e.pageId||"",isCompleted:e.isComplete||{en:!1,ar:!1},isPublished:{...e.isPublish,[e.currentLanguage||""]:r}})})})]})]})}),n.jsx(it,{children:e.detail})]})})}export{Pt as A,oe as S};
