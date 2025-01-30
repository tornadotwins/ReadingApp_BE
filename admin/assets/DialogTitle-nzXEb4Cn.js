import{a as p,v as u,_ as i,c as W,j as c}from"./createTheme-5WTCcQAP.js";import{O as y,a3 as M,s as x,a4 as q,a5 as G,a6 as j,a7 as P,a8 as J,a9 as Q,aa as m,ab as T,ac as Z,ad as oo}from"./App-DXqbDzgb.js";function ao(o){return M("MuiDialog",o)}const k=y("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),F=p.createContext({}),eo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],to=x(q,{name:"MuiDialog",slot:"Backdrop",overrides:(o,a)=>a.backdrop})({zIndex:-1}),io=o=>{const{classes:a,scroll:e,maxWidth:t,fullWidth:s,fullScreen:r}=o,l={root:["root"],container:["container",`scroll${u(e)}`],paper:["paper",`paperScroll${u(e)}`,`paperWidth${u(String(t))}`,s&&"paperFullWidth",r&&"paperFullScreen"]};return T(l,ao,a)},ro=x(G,{name:"MuiDialog",slot:"Root",overridesResolver:(o,a)=>a.root})({"@media print":{position:"absolute !important"}}),so=x("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.container,a[`scroll${u(e.scroll)}`]]}})(({ownerState:o})=>i({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),lo=x(j,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.paper,a[`scrollPaper${u(e.scroll)}`],a[`paperWidth${u(String(e.maxWidth))}`],e.fullWidth&&a.paperFullWidth,e.fullScreen&&a.paperFullScreen]}})(({theme:o,ownerState:a})=>i({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},a.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},a.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},a.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&a.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[a.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[a.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Co=p.forwardRef(function(a,e){const t=P({props:a,name:"MuiDialog"}),s=J(),r={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":n,BackdropComponent:g,BackdropProps:f,children:U,className:_,disableEscapeKeyDown:$=!1,fullScreen:A=!1,fullWidth:I=!1,maxWidth:E="sm",onBackdropClick:B,onClick:R,onClose:b,open:S,PaperComponent:L=j,PaperProps:w={},scroll:Y="paper",TransitionComponent:X=Z,transitionDuration:N=r,TransitionProps:z}=t,H=W(t,eo),h=i({},t,{disableEscapeKeyDown:$,fullScreen:A,fullWidth:I,maxWidth:E,scroll:Y}),v=io(h),C=p.useRef(),K=d=>{C.current=d.target===d.currentTarget},O=d=>{R&&R(d),C.current&&(C.current=null,B&&B(d),b&&b(d,"backdropClick"))},D=Q(n),V=p.useMemo(()=>({titleId:D}),[D]);return c.jsx(ro,i({className:m(v.root,_),closeAfterTransition:!0,components:{Backdrop:to},componentsProps:{backdrop:i({transitionDuration:N,as:g},f)},disableEscapeKeyDown:$,onClose:b,open:S,ref:e,onClick:O,ownerState:h},H,{children:c.jsx(X,i({appear:!0,in:S,timeout:N,role:"presentation"},z,{children:c.jsx(so,{className:m(v.container),onMouseDown:K,ownerState:h,children:c.jsx(lo,i({as:L,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":D},w,{className:m(v.paper,w.className),ownerState:h,children:c.jsx(F.Provider,{value:V,children:U})}))})}))}))});function no(o){return M("MuiDialogContent",o)}y("MuiDialogContent",["root","dividers"]);function co(o){return M("MuiDialogTitle",o)}const po=y("MuiDialogTitle",["root"]),uo=["className","dividers"],xo=o=>{const{classes:a,dividers:e}=o;return T({root:["root",e&&"dividers"]},no,a)},go=x("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.dividers&&a.dividers]}})(({theme:o,ownerState:a})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${po.root} + &`]:{paddingTop:0}})),Do=p.forwardRef(function(a,e){const t=P({props:a,name:"MuiDialogContent"}),{className:s,dividers:r=!1}=t,l=W(t,uo),n=i({},t,{dividers:r}),g=xo(n);return c.jsx(go,i({className:m(g.root,s),ownerState:n,ref:e},l))}),mo=["className","id"],ho=o=>{const{classes:a}=o;return T({root:["root"]},co,a)},fo=x(oo,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,a)=>a.root})({padding:"16px 24px",flex:"0 0 auto"}),ko=p.forwardRef(function(a,e){const t=P({props:a,name:"MuiDialogTitle"}),{className:s,id:r}=t,l=W(t,mo),n=t,g=ho(n),{titleId:f=r}=p.useContext(F);return c.jsx(fo,i({component:"h2",className:m(g.root,s),ownerState:n,ref:e,variant:"h6",id:r??f},l))});export{Co as D,ko as a,Do as b};
