import{a,j as e,O as pe}from"./createTheme-QhU2ZIbp.js";import{S as me,a as Ce,T as m,b as be,c as Se,d as ye,e as De,f as je,g as ke,h as G,i as Be,j as Fe,k as Q,l as Ee,m as we,n as ve,o as Te,p as Ae,s as n,B as r,I as H,q as v,r as Ie,t as Re,u as Ue,v as T,A as j,H as k,M as Me,w as ze,x as O,D as Le,y as Oe,z as He,C as Pe,E as _e,F as A,G as $e,J as We}from"./App-DFFJni8L.js";import{b as Ne}from"./index-CaJkBz1q.js";import{I as Ge,c as Ke}from"./images-B-3euPqr.js";import{D as R,a as U,b as K}from"./DialogTitle-DoLafWiL.js";import{S as oe}from"./index-DdMAhcNq.js";import{T as qe,a as Ve}from"./TableContainer-DE_g15ZD.js";function re(t){const[d,o]=a.useState(t.checked||!1);a.useEffect(()=>{o(t.checked||!1)},[t.checked]);const i=()=>{const s=!d;o(s),t.onChange&&t.onChange(s)};return e.jsxs(me,{children:[t.label&&e.jsx(Ce,{children:e.jsx(m,{fontFamily:'"Baloo Da 2"',fontSize:16,lineHeight:24,textAlign:"center",children:t.label})}),e.jsx(be,{onClick:i,ref:t.reference,children:e.jsx(Se,{children:d&&e.jsx(ye,{src:Ge.icon_check})})})]})}const Je=t=>{const[d,o]=a.useState(t.user.isAdmin),[i,s]=a.useState(t.user.roles),[p,u]=a.useState(!1);a.useEffect(()=>{o(t.user.isAdmin),s(t.user.roles)},[t.user]),a.useEffect(()=>{p&&t.onUserChange&&(t.onUserChange({...t.user,isAdmin:d,roles:i}),u(!1))},[d,i]);const g=[{label:"None",value:"none"},{label:"Translator",value:"translator"},{label:"Publisher",value:"publisher"}],h=(B,C)=>{const E=i.map(F=>F.language===C?{...F,role:B}:F);s(E),u(!0)},c=()=>{o(!d),u(!0)},D=B=>{switch(B){case"UserName":return e.jsx(G,{children:e.jsx(m,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",textAlign:"left",children:t.user.username})});case"Password":return e.jsx(Ee,{children:e.jsx(m,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",children:t.user.password})});case"Actions":return e.jsx(G,{children:e.jsxs(Fe,{children:[e.jsx(Q,{onClick:()=>{var C;return(C=t.onEditUser)==null?void 0:C.call(t,t.user)},children:e.jsx(m,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",hasUnderline:!0,children:"edit"})}),e.jsx(Q,{onClick:()=>{var C;return(C=t.onDeleteUser)==null?void 0:C.call(t,t.user._id)},children:e.jsx(m,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",hasUnderline:!0,children:"del"})})]})});case"isAdmin":return e.jsx(Be,{children:e.jsx(re,{label:"",onChange:c,checked:d})});case"Last Login":return e.jsx(G,{children:e.jsx(m,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",hasUnderline:!0,children:t.user.lastLoggedInAt?Ke(Number(t.user.lastLoggedInAt)).toString():""})});default:{const C=i.find(E=>E.language==B);return e.jsx(ke,{children:e.jsx(oe,{label:"",options:g,value:d?"publisher":C?C.role:"none",textColor:"#155D74",onChange:E=>h(E.target.value,B)})})}}};return e.jsx(De,{children:t.headers.map((B,C)=>e.jsx(je,{children:D(B)},C))})},Xe=t=>{const[d,o]=a.useState([]),[i,s]=a.useState(t.users);a.useEffect(()=>{o(t.headers)},[t.headers]),a.useEffect(()=>{s(t.users)},[t.users]);const p=h=>{const c=i.map(D=>D.username===h.username?h:D);s(c),t.onUserChange&&t.onUserChange(c)},u=()=>e.jsx(we,{children:e.jsx(ve,{children:d.map((h,c)=>e.jsx(Te,{children:e.jsx(m,{fontFamily:'"Baloo Da 2"',fontWeight:"700",fontSize:16,lineHeight:24,textAlign:"center",color:"#155D74",children:h})},c))})}),g=()=>e.jsx(Ae,{children:i.map((h,c)=>e.jsx(Je,{user:h,headers:d,onEditUser:t.onEditUser,onDeleteUser:t.onDeleteUser,onUserChange:p},c))});return e.jsx(qe,{children:e.jsxs(Ve,{children:[u(),g()]})})},Qe=n(r)({display:"flex",alignItems:"center",marginTop:"46px"}),Ye=n(r)({marginLeft:"9px",width:"58px",height:"58px",borderRadius:"50px",backgroundColor:"#155D74",display:"flex",alignItems:"center",justifyContent:"center","& .MuiBox-root":{transform:"translate(0, -15%)",marginTop:"15px"}});function Ze(t){return e.jsxs(Qe,{children:[e.jsx(m,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:"#155D74",children:"People"}),e.jsx(Ye,{children:e.jsx(m,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,color:"white",children:t.userNumber.toString()})})]})}const et=n(r)({display:"flex"}),tt=n(et)({width:"100vw",height:"100vh",alignItems:"center","& >.MuiBox-root: first-of-type":{backgroundColor:"#1B7695"}}),nt=n(r)({height:"calc(100vh - 73px)",marginTop:"73px",padding:"0px 48px"}),ot=n(r)({display:"flex",alignItems:"center"}),rt=n(r)(({disable:t})=>({width:"134px",cursor:t=="true"?"not-allowed":"pointer",height:"40px",marginTop:"46px",marginLeft:"500px",backgroundColor:t=="true"?"#CAC9C9":"#FFAA5D",border:"1px solid #474747",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",transitionDuration:".5s",color:t=="true"?"#474747":"#FFF !important","& button":{color:t=="true"?"#474747":"white !important",transitionDuration:".5s",fontSize:"14px",cursor:t=="true"?"not-allowed":"pointer","&:hover":{backgroundColor:"transparent",border:"none"}},"&:hover":{backgroundColor:t=="true"?"":"#EE994C","& button":{color:t=="true"?"":"white"}}})),at=n(r)({marginTop:"16px",display:"flex",justifyContent:"left"}),it=n(r)({width:"100%",margin:"35px 0px 16px 0px"}),lt=n(r)({display:"flex",alignItems:"center"}),Y=n(r)({width:"134px",boxSizing:"border-box",backgroundColor:"#FFAA5D",padding:"5px",marginRight:"15px",border:"1px solid #474747",textAlign:"center",cursor:"pointer",transitionDuration:".5s","& button":{color:"#474747",fontSize:"14px",fontWeight:"500",lineHeight:"24px",textTransform:"none",transitionDuration:".5s","&:hover":{backgroundColor:"transparent",border:"none"}},"&:hover":{backgroundColor:"#EE994C","& button":{color:"white"}}}),st=n(r)({backgroundColor:"#FF0505",padding:"5px",border:"1px solid #474747",transitionDuration:".5s",textAlign:"center",cursor:"pointer","&:hover":{backgroundColor:"#EE0404",color:"#474747"},"& button":{color:"white !important",fontSize:"14px",fontFamily:'"Baloo Da 2" !important',textTransform:"none",fontWeight:"500 !important",lineHeight:"24px !important","&:hover":{backgroundColor:"transparent",color:"#EEEEEE !important"}}});n(r)({display:"flex",flexDirection:"column",boxSizing:"border-box","& >.MuiBox-root: first-of-type":{backgroundColor:"#2D87A4"}});const dt=n(R)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"}}),ct=n(U)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),ut=n(K)({backgroundColor:"#155D74",padding:"12px",width:"240px","& >.MuiBox-root: nth-of-type(3)":{"& >.MuiBox-root: nth-of-type(2)":{"& >.MuiBox-root":{marginLeft:"12px"}}}});n(r)({backgroundColor:"#155D74"});const Z=n(r)({display:"flex",justifyContent:"center",alignItems:"center","& > :first-of-type":{minWidth:"80px",boxSizing:"border-box"},"& > .MuiBox-root":{padding:"8px",paddingRight:"0px"},"& .MuiInputBase-input":{padding:"5px !important"}}),gt=n(r)({display:"flex",justifyContent:"left",alignItems:"center",marginTop:"8px",paddingLeft:"8px","& > :first-of-type":{minWidth:"80px",boxSizing:"border-box"},"& input":{border:"1px solid blue"},"& .MuiCheckbox-root":{borderColor:"white",backgroundColor:"white",width:"32px",height:"32px",boxSizing:"border-box"},"& .MuiSvgIcon-root":{fontSize:"45px",color:"white"}}),ht=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"63%",float:"right",marginTop:"16px","& > .MuiBox-root: last-child":{marginRight:"0px"}}),ee=n(r)({display:"flex",alignItems:"center","& :hover":{backgroundColor:"#F6CFAC"},"& button":{backgroundColor:"#FFAA5D",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important"}}});function xt(t){const[d,o]=a.useState(""),[i,s]=a.useState(""),[p,u]=a.useState(!1);a.useEffect(()=>{var b,S,M;t.user?(o(((b=t.user)==null?void 0:b.username)||""),s(((S=t.user)==null?void 0:S.password)||""),u(((M=t.user)==null?void 0:M.isAdmin)||!1)):(o(""),s(""),u(!1))},[t.user,t.isOpen]);const g=a.useRef(null),h=a.useRef(null),c=a.useRef(null),D=b=>{var S;b.key==="Enter"&&(b.preventDefault(),(S=g.current)==null||S.focus())},B=b=>{var S;b.key==="Enter"&&(b.preventDefault(),(S=h.current)==null||S.focus())},C=b=>{var S;b.key==="Enter"&&(b.preventDefault(),(S=c.current)==null||S.click())},E=()=>{d.trim()&&(!t.user&&!i.trim()||t.onSave(d,i,p))},F=()=>{o(""),s(""),u(!1),t.onCancel()};return e.jsxs(dt,{open:t.isOpen,onClose:F,children:[e.jsx(ct,{children:"Person"}),e.jsxs(ut,{children:[e.jsxs(Z,{children:[e.jsx(m,{fontFamily:'"Baloo Da 2"',fontSize:16,fontWeight:"400",lineHeight:24,children:"Username:"}),e.jsx(H,{value:d,onKeyDown:D,onChange:b=>o(b.target.value)})]}),e.jsxs(Z,{children:[e.jsx(m,{fontFamily:'"Baloo Da 2"',fontSize:16,fontWeight:"400",lineHeight:24,children:"Password:"}),e.jsx(H,{value:i,type:"password",reference:g,onKeyDown:B,onChange:b=>s(b.target.value)})]}),e.jsxs(gt,{children:[e.jsx(m,{fontFamily:'"Baloo Da 2"',fontSize:16,fontWeight:"400",lineHeight:24,children:"Is Admin:"}),e.jsx(re,{checked:p,label:"",reference:h,onKeyDown:C,onChange:()=>u(!p)})]}),e.jsxs(ht,{children:[e.jsx(ee,{children:e.jsx(v,{label:"Cancel",onClick:F})}),e.jsx(ee,{children:e.jsx(v,{label:"Save",onClick:E,reference:c})})]})]})]})}var q={},ft=pe;Object.defineProperty(q,"__esModule",{value:!0});var P=q.default=void 0,pt=ft(Ie()),te=e;P=q.default=(0,pt.default)([(0,te.jsx)("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),(0,te.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber");const mt=n(R)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"}}),Ct=n(U)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),bt=n(r)({width:"276px",padding:"17px",backgroundColor:"#155D74",boxSizing:"border-box"}),St=n(r)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),yt=n(r)({display:"flex",justifyContent:"center"}),Dt=n(r)({width:"100%"}),jt=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",float:"right",marginTop:"16px","& > .MuiBox-root: last-child":{marginRight:"0px"}}),kt=n(r)({display:"flex",alignItems:"center",width:"72px",boxSizing:"border-box","& :hover":{backgroundColor:"#F6CFAC"},"& button":{backgroundColor:"#FFAA5D",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important"}}}),Bt=n(r)({display:"flex",alignItems:"center",width:"134px","& :hover":{backgroundColor:"#EE0404"},"& button":{width:"100%",backgroundColor:"#FF0505",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:"#FFFFFF !important"}}});function Ft(t){const d=()=>{t.onDelete()},o=()=>{t.onCancel()};return e.jsxs(mt,{open:t.isOpen,onClose:o,children:[e.jsx(Ct,{children:t.title}),e.jsxs(bt,{children:[e.jsxs(St,{children:[e.jsx(yt,{children:e.jsx(P,{})}),e.jsx(Dt,{children:e.jsx(m,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",children:t.content})})]}),e.jsxs(jt,{children:[e.jsx(kt,{children:e.jsx(v,{label:"Cancel",onClick:o})}),e.jsx(Bt,{children:e.jsx(v,{label:"Delete",onClick:d})})]})]})]})}const Et=n(R)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"}}),wt=n(U)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),vt=n(K)({backgroundColor:"#155D74",padding:"17px",width:"276px",height:"177px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),Tt=n(r)({width:"100%"});n(r)({backgroundColor:"#155D74"});const At=n(r)({display:"flex",justifyContent:"center",alignItems:"center","& > .MuiBox-root":{padding:"8px",paddingRight:"0px"},"& .MuiInputBase-input":{padding:"5px !important"}});n(r)({display:"flex",justifyContent:"left",alignItems:"center",marginTop:"8px",paddingLeft:"8px","& .MuiFormControlLabel-root":{marginLeft:"20px"},"& input":{border:"1px solid blue"},"& .MuiCheckbox-root":{borderColor:"white",backgroundColor:"white",width:"32px",height:"32px",boxSizing:"border-box"},"& .MuiSvgIcon-root":{fontSize:"45px",color:"white"}});const It=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",float:"right",marginTop:"16px","& > .MuiBox-root: last-child":{marginRight:"0px"}}),Rt=n(r)({display:"flex",alignItems:"center","& :hover":{backgroundColor:"#F6CFAC"},"& button":{backgroundColor:"#FFAA5D",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important"}}}),Ut=n(r)(({isdisable:t})=>({display:"flex",alignItems:"center",width:"134px",cursor:t=="true"?"not-allowed":"pointer","& :hover":{backgroundColor:"#EE0404"},"& button":{width:"100%",backgroundColor:"#FF0505",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:t=="true"?"#B6B0B0 !important":"#FFFFFF !important"}}}));function Mt(t){const[d,o]=a.useState(""),[i,s]=a.useState(!0);a.useEffect(()=>{d=="DELETE"?s(!1):s(!0)},[d]);const p=a.useRef(null),u=c=>{var D;c.key==="Enter"&&(c.preventDefault(),(D=p.current)==null||D.click())},g=()=>{o(""),t.onConfirm()},h=()=>{o(""),t.onCancel()};return e.jsxs(Et,{open:t.isOpen,onClose:h,children:[e.jsx(wt,{children:"Confirmation needed"}),e.jsxs(vt,{children:[e.jsx(Tt,{children:e.jsx(m,{fontFamily:'"Baloo Da 2"',fontSize:16,lineHeight:24,textAlign:"center",children:'Type "DELETE" to confirm: '})}),e.jsx(At,{children:e.jsx(H,{value:d,onKeyDown:u,onChange:c=>o(c.target.value)})}),e.jsxs(It,{children:[e.jsx(Rt,{children:e.jsx(v,{label:"Cancel",onClick:h})}),e.jsx(Ut,{isdisable:i?"true":"false",children:e.jsx(v,{label:"Delete forever",onClick:g,reference:p,disabled:i})})]})]})]})}const zt=n(R)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"},"& .MuiDialogContent-root > .MuiBox-root:first-of-type":{width:"100%"},"& .MuiDialogContent-root > .MuiBox-root:nth-of-type(2)":{alignSelf:"end",marginTop:"10px","& svg":{marginRight:"10px"}}}),Lt=n(U)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),Ot=n(K)({backgroundColor:"#155D74",padding:"17px",width:"276px",height:"177px",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"});n(r)({width:"100%"});n(r)({backgroundColor:"#155D74"});const Ht=n(r)({display:"flex",justifyContent:"center",alignItems:"center","& > .MuiBox-root":{padding:"8px",paddingRight:"0px"},"& .MuiInputBase-input":{padding:"5px !important"}}),Pt=n(r)({display:"flex",alignItems:"center"});n(r)({display:"flex",justifyContent:"left",alignItems:"center",marginTop:"8px",paddingLeft:"8px","& .MuiFormControlLabel-root":{marginLeft:"20px"},"& input":{border:"1px solid blue"},"& .MuiCheckbox-root":{borderColor:"white",backgroundColor:"white",width:"32px",height:"32px",boxSizing:"border-box"},"& .MuiSvgIcon-root":{fontSize:"45px",color:"white"}});const _t=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"67%",float:"right",marginTop:"16px",alignSelf:"end","& > .MuiBox-root: last-child":{marginRight:"0px"}}),ne=n(r)(({isvalidate:t})=>({display:"flex",alignItems:"center",width:"72px",cursor:t=="false"?"not-allowed":"pointer","& :hover":{backgroundColor:"#F6CFAC"},"& button":{width:"100%",backgroundColor:t=="true"?"#FFAA5D":"#F6CFAC",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:t=="false"?"#989494 !important":"#474747 !important"}}}));n(r)(({isdisable:t})=>({display:"flex",alignItems:"center",width:"134px",cursor:t=="true"?"not-allowed":"pointer","& :hover":{backgroundColor:"#EE0404"},"& button":{width:"100%",backgroundColor:"#FF0505",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:t=="true"?"#B6B0B0 !important":"#FFFFFF !important"}}}));function $t(t){const[d,o]=a.useState(""),[i,s]=a.useState(!0);a.useEffect(()=>{t.languages.includes(d)?s(!1):s(!0)},[t.languages,t.isOpen,d]);const p=a.useRef(null),u=c=>{var D;c.key==="Enter"&&(c.preventDefault(),(D=p.current)==null||D.click())},g=()=>{o(""),t.onConfirm(d)},h=()=>{o(""),t.onCancel()};return e.jsxs(zt,{open:t.isOpen,onClose:h,children:[e.jsx(Lt,{children:"Language"}),e.jsxs(Ot,{children:[e.jsx(Ht,{children:e.jsx(H,{label:"Language:",value:d,onKeyDown:u,onChange:c=>o(c.target.value)})}),!i&&e.jsxs(Pt,{children:[e.jsx(P,{}),e.jsx(m,{fontFamily:'"Baloo Da 2"',fontSize:16,fontWeight:"400",lineHeight:24,textAlign:"center",color:"white",children:"Already exists"})]}),e.jsxs(_t,{children:[e.jsx(ne,{isvalidate:"true",children:e.jsx(v,{label:"Cancel",onClick:h})}),e.jsx(ne,{isvalidate:i&&d!=""?"true":"false",children:e.jsx(v,{label:"Save",onClick:g,reference:p,disabled:!i})})]})]})]})}const Wt=n(R)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"}}),Nt=n(U)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),Gt=n(r)({width:"284px",height:"245px",padding:"17px",backgroundColor:"#155D74",boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"space-around","& .MuiInputBase-root":{backgroundColor:"white",border:"1px solid black","& .MuiSelect-select":{color:"black"}},"& .MuiMenuItem-root":{backgroundColor:"white"}}),Kt=n(r)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),qt=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center","& .MuiFormControl-root":{width:"178px",alignItems:"self-end","& .MuiInputBase-root":{width:"100%"}}}),Vt=n(r)({}),Jt=n(r)({display:"flex",justifyContent:"center"}),Xt=n(r)({width:"100%"}),Qt=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",float:"right","& > .MuiBox-root: last-child":{marginRight:"0px"}}),Yt=n(r)({display:"flex",alignItems:"center",width:"72px",boxSizing:"border-box","& :hover":{backgroundColor:"#F6CFAC"},"& button":{backgroundColor:"#FFAA5D",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important"}}}),Zt=n(r)({display:"flex",alignItems:"center",width:"134px","& :hover":{backgroundColor:"#EE0404"},"& button":{width:"100%",backgroundColor:"#FF0505",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:"#FFFFFF !important"}}});function en(t){const[d,o]=a.useState([]),[i,s]=a.useState("");a.useEffect(()=>{o(()=>t.roles.map(g=>({label:g.language,value:g.language}))),t.isOpen&&t.roles.length>0&&s(t.roles[0].language)},[t.roles,t.isOpen]);const p=()=>{i&&t.onDelete(i)},u=()=>{o([]),s(""),t.onCancel()};return e.jsxs(Wt,{open:t.isOpen,onClose:u,children:[e.jsx(Nt,{children:t.title}),e.jsxs(Gt,{children:[e.jsxs(Kt,{children:[e.jsx(Jt,{children:e.jsx(P,{})}),e.jsx(Xt,{children:e.jsx(m,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",children:t.content})})]}),e.jsxs(qt,{children:[e.jsx(Vt,{children:e.jsx(m,{fontSize:16,lineHeight:24,fontFamily:'"Baloo Da 2"',fontWeight:"400",children:"Delete: "})}),e.jsx(oe,{label:"",options:d,value:i,onChange:g=>s(g.target.value)})]}),e.jsxs(Qt,{children:[e.jsx(Yt,{children:e.jsx(v,{label:"Cancel",onClick:u})}),e.jsx(Zt,{children:e.jsx(v,{label:"Delete",onClick:p})})]})]})]})}function tn(t){const[d,o]=a.useState(!1),[i,s]=a.useState([]),[p,u]=a.useState(!1),[g,h]=a.useState(),[c,D]=a.useState(""),[B,C]=a.useState(!1),[E,F]=a.useState(""),[b,S]=a.useState(!1),[M,_]=a.useState(!1),[ae,I]=a.useState(!1),[ie,$]=a.useState(!1),[le,z]=a.useState(!1),[L,W]=a.useState(["UserName","Password","isAdmin","Actions","Last Login"]),se=Ue();a.useEffect(()=>{de()},[]);const de=a.useCallback(async()=>{o(!0);const l=["UserName","Password","isAdmin","Actions","Last Login"];T.fetchUsers().then(f=>{f.forEach(x=>{x.roles.map(y=>{!l.includes(y.language)&&l.push(y.language)})}),W(l),s(f),o(!1)}).catch(f=>{j.error(f,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),o(!1)})},[]),ce=()=>{localStorage.removeItem(Ne),t.dispatch({type:A.RESET_USER}),t.dispatch({type:A.RESET_BOOK}),t.dispatch({type:A.RESET_APP_TEXT_PAGES}),se("/admin")},ue=(l,f,x)=>{const y={username:l,password:f,isAdmin:x};o(!0),T.saveUser(y).then(w=>{s([...i,w]),j.success($e,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),S(!1),o(!1)}).catch(w=>{j.error(w,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)})},V=(l,f=!1)=>{if(f)o(!0),T.deleteUser(l).then(()=>{const x=i.filter(y=>y._id!==l);s(x),j.success(We,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}).catch(x=>{j.error(x,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)});else{_(!0),C(!0),D(l);return}I(!1),C(!1)},ge=l=>{h(l),S(!0)},he=(l,f,x)=>{if(!g)return;o(!0);const y={id:g._id,username:l,password:f,isAdmin:x,roles:g.roles};T.updateUser(y).then(w=>{const N=i.map(X=>X._id==w._id?w:X);s(N),j.success("User updated successfully",{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),S(!1),h(void 0),o(!1)}).catch(w=>{j.error(w,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)})},xe=l=>{$(!1),i.map(x=>{x.roles.push({language:l,role:x.isAdmin?"publisher":"none"})}),s(i),o(!0);const f={...t.currentUser,roles:[...t.currentUser.roles,{language:l,role:t.currentUser.isAdmin?"publisher":"none"}]};T.addLanguage(l).then(x=>{s(x),W([...L,l]),t.dispatch({type:A.SET_CURRENT_USER,payload:{user:f}}),j.success("Updated successfully",{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}).catch(x=>{j.error(x,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)})},J=(l,f=!1)=>{if(!f)F(l),z(!0);else{o(!0);const x=L.filter(y=>y!==E);W(x),T.deleteLanguage(l).then(y=>{s(y);const w=y.find(N=>N._id===t.currentUser._id);t.dispatch({type:A.SET_CURRENT_USER,payload:{user:w}}),j.success(`Language "${l}" deleted successfully`,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}).catch(y=>{j.error(y,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}),I(!1),z(!1),F("")}},fe=()=>{o(!0),u(!0),T.updateUsers(i).then(()=>{const l=i.find(f=>f._id===t.currentUser._id);t.dispatch({type:A.SET_CURRENT_USER,payload:{user:l}}),j.success("Updated successfully",{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}).catch(l=>{j.error(l,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}),u(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(Me,{title:"Admin Portal"}),e.jsxs(tt,{children:[e.jsx(ze,{isAdmin:!0,isLoggedIn:!0,username:t.currentUser.username,onLogOut:ce,isAdminPage:!0}),e.jsxs(nt,{children:[e.jsxs(ot,{children:[e.jsx(Ze,{userNumber:i.length||0}),e.jsx(rt,{disable:p?"false":"true",children:e.jsx(O,{onClick:fe,disabled:!p,children:"Save"})})]}),e.jsx(at,{children:e.jsx(Xe,{headers:L,users:i,onEditUser:ge,onDeleteUser:V,onUserChange:l=>{u(!0),s(l)}})}),e.jsx(it,{children:e.jsx(m,{color:"#155D74",fontFamily:"Buenard",fontSize:36,fontWeight:"700",lineHeight:47,children:"Admin"})}),e.jsxs(lt,{children:[e.jsx(Y,{children:e.jsx(O,{onClick:()=>S(!0),children:"New Person"})}),e.jsx(Y,{children:e.jsx(O,{onClick:()=>$(!0),children:"New Language"})}),e.jsx(st,{children:e.jsx(O,{onClick:()=>J("miguel"),children:"Del Language..."})})]})]}),e.jsx(xt,{isOpen:b,user:g,onSave:(l,f,x)=>{g?he(l,f,x):ue(l,f,x)},onCancel:()=>{S(!1),h(void 0)}}),e.jsx(Ft,{title:Le,content:Oe,isOpen:M,onDelete:()=>{_(!1),I(!0)},onCancel:()=>_(!1)}),e.jsx(Mt,{isOpen:ae,onConfirm:()=>B?V(c,!0):J(E,!0),onCancel:()=>{I(!1),F("")}}),e.jsx($t,{isOpen:ie,languages:L,onConfirm:l=>xe(l),onCancel:()=>$(!1)}),e.jsx(en,{title:He,content:Pe,isOpen:le,roles:i.length>0?i[0].roles:[],onDelete:l=>{F(l),z(!1),I(!0)},onCancel:()=>z(!1)})]}),d&&e.jsx(_e,{})]})}function nn(t){return{dispatch:t}}function on(t){return{currentUser:t.user.currentUser}}const gn=Re(on,nn)(tn);export{gn as default};
