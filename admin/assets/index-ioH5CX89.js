import{_ as i,a as h,Z as be,c as L,j as s,O as re}from"./createTheme-BuP8AzxQ.js";import{_ as O,$ as V,s as T,a3 as H,aq as ye,a4 as ve,ar as we,ad as se,a6 as F,a7 as K,as as ee,at as Se,au as Pe,av as Re,a2 as Ae,ab as Ee,aw as je,r as ae,ax as Te,ay as Ie,az as $e,aA as Le,T as De,aB as _e,I as Me,aC as ze,aD as te}from"./App-D_6gwKuw.js";import{S as oe}from"./index-x9b0btQ5.js";import{I as Ne,a as ne}from"./images-kVc5XVRO.js";function ke(e){return V("MuiCollapse",e)}O("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Ue=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],We=e=>{const{orientation:t,classes:r}=e,a={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return K(a,ke,r)},Fe=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],r.state==="entered"&&t.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>i({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&i({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),Ge=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>i({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Be=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>i({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),ie=h.forwardRef(function(t,r){const a=H({props:t,name:"MuiCollapse"}),{addEndListener:l,children:c,className:u,collapsedSize:d="0px",component:m,easing:w,in:g,onEnter:o,onEntered:f,onEntering:b,onExit:P,onExited:S,onExiting:y,orientation:p="vertical",style:j,timeout:x=be.standard,TransitionComponent:I=ye}=a,D=L(a,Ue),R=i({},a,{orientation:p,collapsedSize:d}),v=We(R),N=ve(),Z=we(),A=h.useRef(null),k=h.useRef(),_=typeof d=="number"?`${d}px`:d,$=p==="horizontal",U=$?"width":"height",G=h.useRef(null),ue=se(r,G),M=n=>C=>{if(n){const E=G.current;C===void 0?n(E):n(E,C)}},J=()=>A.current?A.current[$?"clientWidth":"clientHeight"]:0,pe=M((n,C)=>{A.current&&$&&(A.current.style.position="absolute"),n.style[U]=_,o&&o(n,C)}),ge=M((n,C)=>{const E=J();A.current&&$&&(A.current.style.position="");const{duration:W,easing:B}=ee({style:j,timeout:x,easing:w},{mode:"enter"});if(x==="auto"){const Y=N.transitions.getAutoHeightDuration(E);n.style.transitionDuration=`${Y}ms`,k.current=Y}else n.style.transitionDuration=typeof W=="string"?W:`${W}ms`;n.style[U]=`${E}px`,n.style.transitionTimingFunction=B,b&&b(n,C)}),me=M((n,C)=>{n.style[U]="auto",f&&f(n,C)}),fe=M(n=>{n.style[U]=`${J()}px`,P&&P(n)}),xe=M(S),he=M(n=>{const C=J(),{duration:E,easing:W}=ee({style:j,timeout:x,easing:w},{mode:"exit"});if(x==="auto"){const B=N.transitions.getAutoHeightDuration(C);n.style.transitionDuration=`${B}ms`,k.current=B}else n.style.transitionDuration=typeof E=="string"?E:`${E}ms`;n.style[U]=_,n.style.transitionTimingFunction=W,y&&y(n)}),Ce=n=>{x==="auto"&&Z.start(k.current||0,n),l&&l(G.current,n)};return s.jsx(I,i({in:g,onEnter:pe,onEntered:me,onEntering:ge,onExit:fe,onExited:xe,onExiting:he,addEndListener:Ce,nodeRef:G,timeout:x==="auto"?null:x},D,{children:(n,C)=>s.jsx(Fe,i({as:m,className:F(v.root,u,{entered:v.entered,exited:!g&&_==="0px"&&v.hidden}[n]),style:i({[$?"minWidth":"minHeight"]:_},j),ref:ue},C,{ownerState:i({},R,{state:n}),children:s.jsx(Ge,{ownerState:i({},R,{state:n}),className:v.wrapper,ref:A,children:s.jsx(Be,{ownerState:i({},R,{state:n}),className:v.wrapperInner,children:c})})}))}))});ie.muiSupportAuto=!0;const le=h.createContext({}),qe=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],Oe=["component","slots","slotProps"],Ve=["component"];function He(e,t){const{className:r,elementType:a,ownerState:l,externalForwardedProps:c,getSlotOwnerState:u,internalForwardedProps:d}=t,m=L(t,qe),{component:w,slots:g={[e]:void 0},slotProps:o={[e]:void 0}}=c;L(c,Oe);const f=g[e]||a,b=Se(o[e],l),P=Pe(i({className:r},m,{externalForwardedProps:void 0,externalSlotProps:b})),{props:{component:S},internalRef:y}=P,p=L(P.props,Ve),j=se(y,b==null?void 0:b.ref,t.ref),x=u?u(p):{},I=i({},l,x),D=S,R=Re(f,i({},e==="root",!g[e]&&d,p,D&&{as:D},{ref:j}),I);return Object.keys(x).forEach(v=>{delete R[v]}),[f,R]}function Ke(e){return V("MuiAccordion",e)}const q=O("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),Ze=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],Je=e=>{const{classes:t,square:r,expanded:a,disabled:l,disableGutters:c}=e;return K({root:["root",!r&&"rounded",a&&"expanded",l&&"disabled",!c&&"gutters"],region:["region"]},Ke,t)},Qe=T(Ae,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${q.region}`]:t.region},t.root,!r.square&&t.rounded,!r.disableGutters&&t.gutters]}})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${q.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${q.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e})=>({variants:[{props:t=>!t.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:t=>!t.disableGutters,style:{[`&.${q.expanded}`]:{margin:"16px 0"}}}]})),Xe=h.forwardRef(function(t,r){const a=H({props:t,name:"MuiAccordion"}),{children:l,className:c,defaultExpanded:u=!1,disabled:d=!1,disableGutters:m=!1,expanded:w,onChange:g,square:o=!1,slots:f={},slotProps:b={},TransitionComponent:P,TransitionProps:S}=a,y=L(a,Ze),[p,j]=Ee({controlled:w,default:u,name:"Accordion",state:"expanded"}),x=h.useCallback($=>{j(!p),g&&g($,!p)},[p,g,j]),[I,...D]=h.Children.toArray(l),R=h.useMemo(()=>({expanded:p,disabled:d,disableGutters:m,toggle:x}),[p,d,m,x]),v=i({},a,{square:o,disabled:d,disableGutters:m,expanded:p}),N=Je(v),Z=i({transition:P},f),A=i({transition:S},b),[k,_]=He("transition",{elementType:ie,externalForwardedProps:{slots:Z,slotProps:A},ownerState:v});return s.jsxs(Qe,i({className:F(N.root,c),ref:r,ownerState:v,square:o},y,{children:[s.jsx(le.Provider,{value:R,children:I}),s.jsx(k,i({in:p,timeout:"auto"},_,{children:s.jsx("div",{"aria-labelledby":I.props.id,id:I.props["aria-controls"],role:"region",className:N.region,children:D})}))]}))});function Ye(e){return V("MuiAccordionDetails",e)}O("MuiAccordionDetails",["root"]);const et=["className"],tt=e=>{const{classes:t}=e;return K({root:["root"]},Ye,t)},ot=T("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),nt=h.forwardRef(function(t,r){const a=H({props:t,name:"MuiAccordionDetails"}),{className:l}=a,c=L(a,et),u=a,d=tt(u);return s.jsx(ot,i({className:F(d.root,l),ref:r,ownerState:u},c))});function rt(e){return V("MuiAccordionSummary",e)}const z=O("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),st=["children","className","expandIcon","focusVisibleClassName","onClick"],at=e=>{const{classes:t,expanded:r,disabled:a,disableGutters:l}=e;return K({root:["root",r&&"expanded",a&&"disabled",!l&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!l&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},rt,t)},it=T(je,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${z.disabled})`]:{cursor:"pointer"},variants:[{props:r=>!r.disableGutters,style:{[`&.${z.expanded}`]:{minHeight:64}}}]}}),lt=T("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:t=>!t.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${z.expanded}`]:{margin:"20px 0"}}}]})),dt=T("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${z.expanded}`]:{transform:"rotate(180deg)"}})),ct=h.forwardRef(function(t,r){const a=H({props:t,name:"MuiAccordionSummary"}),{children:l,className:c,expandIcon:u,focusVisibleClassName:d,onClick:m}=a,w=L(a,st),{disabled:g=!1,disableGutters:o,expanded:f,toggle:b}=h.useContext(le),P=p=>{b&&b(p),m&&m(p)},S=i({},a,{expanded:f,disabled:g,disableGutters:o}),y=at(S);return s.jsxs(it,i({focusRipple:!1,disableRipple:!0,disabled:g,component:"div","aria-expanded":f,className:F(y.root,c),focusVisibleClassName:F(y.focusVisible,d),onClick:P,ref:r,ownerState:S},w,{children:[s.jsx(lt,{className:y.content,ownerState:S,children:l}),u&&s.jsx(dt,{className:y.expandIconWrapper,ownerState:S,children:u})]}))});var Q={},ut=re;Object.defineProperty(Q,"__esModule",{value:!0});var de=Q.default=void 0,pt=ut(ae()),gt=s;de=Q.default=(0,pt.default)((0,gt.jsx)("path",{d:"m10 17 5-5-5-5z"}),"ArrowRight");var X={},mt=re;Object.defineProperty(X,"__esModule",{value:!0});var ce=X.default=void 0,ft=mt(ae()),xt=s;ce=X.default=(0,ft.default)((0,xt.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");function vt(e){var a,l,c,u,d,m,w,g;const[t,r]=h.useState(!1);return s.jsx(Te,{iconcolor:"#1B7695",isoutarrow:e.outArrow?"true":"false",outerarrowcolor:"#1B7695",children:s.jsxs(Xe,{onChange:()=>r(o=>!o),style:{backgroundColor:"transparent"},children:[s.jsx(ct,{expandIcon:e.showArrow===!1?null:t?s.jsx(ce,{}):s.jsx(de,{}),children:s.jsxs(Ie,{children:[s.jsxs($e,{children:[e.summaryIcon&&s.jsx(Le,{src:Ne.icon_mobile}),s.jsx(De,{color:"#1B7695",fontWeight:"700",fontFamily:"Inter",children:e.label})]}),e.summaryTitle&&s.jsx(_e,{onClick:o=>o.stopPropagation(),children:s.jsx(Me,{value:e.summaryTitle,label:"",onChange:o=>e.onChange&&e.onChange(o),onKeyDown:o=>{o.key=="Enter"&&e.onCurrentChapterTitleEnterPressed&&e.summaryTitle&&e.onCurrentChapterTitleEnterPressed(e.summaryTitle)}})}),e.hasSwitches&&s.jsxs(ze,{onClick:o=>o.stopPropagation(),children:[s.jsx(te,{children:s.jsx(oe,{label:"Complete: ",value:((a=e.isComplete)==null?void 0:a[e.currentLanguage||"en"])||!1,disable:!((l=e.currentUser)!=null&&l.isAdmin||(c=e.currentUser)!=null&&c.roles.some(o=>o.language==ne(e.currentLanguage||"en")&&o.role.toLowerCase()=="translator".toLowerCase())),onChange:o=>{var f;return e.onChangeAppTextPageStatus&&e.onChangeAppTextPageStatus({pageId:e.pageId||"",isCompleted:{...e.isComplete,[e.currentLanguage||""]:o},isPublished:e.isPublish?{...e.isPublish,[e.currentLanguage||"en"]:o&&((f=e.isPublish)==null?void 0:f[e.currentLanguage||"en"])}:{en:!1,ar:!1}})}})}),s.jsx(te,{onClick:o=>o.stopPropagation(),children:s.jsx(oe,{label:"Publish: ",value:((u=e.isComplete)==null?void 0:u[e.currentLanguage||"en"])&&((d=e.isPublish)==null?void 0:d[e.currentLanguage||"en"])||!1,disable:!(((m=e.currentUser)!=null&&m.isAdmin||(w=e.currentUser)!=null&&w.roles.some(o=>o.language==ne(e.currentLanguage||"en")&&o.role.toLowerCase()=="publisher".toLowerCase()))&&((g=e.isComplete)!=null&&g[e.currentLanguage||"en"])),onChange:o=>e.onChangeAppTextPageStatus&&e.onChangeAppTextPageStatus({pageId:e.pageId||"",isCompleted:e.isComplete||{en:!1,ar:!1},isPublished:{...e.isPublish,[e.currentLanguage||""]:o}})})})]})]})}),s.jsx(nt,{children:e.detail})]})})}export{vt as A};