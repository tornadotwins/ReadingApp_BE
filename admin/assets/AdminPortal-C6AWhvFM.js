import{a,j as e,O as pe}from"./createTheme-BSndqwJN.js";import{S as me,a as Ce,T as p,b as be,c as Se,d as ye,e as De,f as je,g as ke,h as W,i as Be,j as Fe,k as X,l as we,m as Ee,n as ve,o as Ae,p as Te,s as n,B as r,I as U,q as E,r as Ie,t as Me,u as Re,v as A,A as j,H as k,M as Le,w as ze,x as O,D as Oe,y as Ue,z as He,C as Pe,E as _e,F as N,G as $e,J as We}from"./App-DSghd2TB.js";import{A as Ne}from"./index-BzhnpL16.js";import{I as Ge,c as Ke}from"./images-DLw5nS4g.js";import{D as I,a as M,b as G}from"./DialogTitle-CZiiVgiC.js";import{S as ne}from"./index-Byz23Ard.js";import{T as qe,a as Ve}from"./TableContainer-BD8K0VC_.js";function oe(t){const[c,o]=a.useState(t.checked||!1);a.useEffect(()=>{o(t.checked||!1)},[t.checked]);const i=()=>{const s=!c;o(s),t.onChange&&t.onChange(s)};return e.jsxs(me,{children:[t.label&&e.jsx(Ce,{children:e.jsx(p,{fontFamily:'"Baloo Da 2"',fontSize:16,lineHeight:24,textAlign:"center",children:t.label})}),e.jsx(be,{onClick:i,ref:t.reference,children:e.jsx(Se,{children:c&&e.jsx(ye,{src:Ge.icon_check})})})]})}const Je=t=>{const[c,o]=a.useState(t.user.isAdmin),[i,s]=a.useState(t.user.roles),[f,u]=a.useState(!1);a.useEffect(()=>{o(t.user.isAdmin),s(t.user.roles)},[t.user]),a.useEffect(()=>{f&&t.onUserChange&&(t.onUserChange({...t.user,isAdmin:c,roles:i}),u(!1))},[c,i]);const g=[{label:"None",value:"none"},{label:"Translator",value:"translator"},{label:"Publisher",value:"publisher"}],x=(B,m)=>{const w=i.map(F=>F.language===m?{...F,role:B}:F);s(w),u(!0)},d=()=>{o(!c),u(!0)},S=B=>{switch(B){case"UserName":return e.jsx(W,{children:e.jsx(p,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",textAlign:"left",children:t.user.username})});case"Password":return e.jsx(we,{children:e.jsx(p,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",children:t.user.password})});case"Actions":return e.jsx(W,{children:e.jsxs(Fe,{children:[e.jsx(X,{onClick:()=>{var m;return(m=t.onEditUser)==null?void 0:m.call(t,t.user)},children:e.jsx(p,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",hasUnderline:!0,children:"edit"})}),e.jsx(X,{onClick:()=>{var m;return(m=t.onDeleteUser)==null?void 0:m.call(t,t.user._id)},children:e.jsx(p,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",hasUnderline:!0,children:"del"})})]})});case"isAdmin":return e.jsx(Be,{children:e.jsx(oe,{label:"",onChange:d,checked:c})});case"Last Login":return e.jsx(W,{children:e.jsx(p,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,color:"#155D74",hasUnderline:!0,children:t.user.lastLoggedInAt?Ke(Number(t.user.lastLoggedInAt)).toString():""})});default:{const m=i.find(w=>w.language==B);return e.jsx(ke,{children:e.jsx(ne,{label:"",options:g,value:m?m.role:"none",textColor:"#155D74",onChange:w=>x(w.target.value,B)})})}}};return e.jsx(De,{children:t.headers.map((B,m)=>e.jsx(je,{children:S(B)},m))})},Xe=t=>{const[c,o]=a.useState([]),[i,s]=a.useState(t.users);a.useEffect(()=>{o(t.headers)},[t.headers]),a.useEffect(()=>{s(t.users)},[t.users]);const f=x=>{const d=i.map(S=>S.username===x.username?x:S);s(d),t.onUserChange&&t.onUserChange(d)},u=()=>e.jsx(Ee,{children:e.jsx(ve,{children:c.map((x,d)=>e.jsx(Ae,{children:e.jsx(p,{fontFamily:'"Baloo Da 2"',fontWeight:"700",fontSize:16,lineHeight:24,textAlign:"center",color:"#155D74",children:x})},d))})}),g=()=>e.jsx(Te,{children:i.map((x,d)=>e.jsx(Je,{user:x,headers:c,onEditUser:t.onEditUser,onDeleteUser:t.onDeleteUser,onUserChange:f},d))});return e.jsx(qe,{children:e.jsxs(Ve,{children:[u(),g()]})})},Qe=n(r)({display:"flex",alignItems:"center",marginTop:"46px"}),Ye=n(r)({marginLeft:"9px",width:"58px",height:"58px",borderRadius:"50px",backgroundColor:"#155D74",display:"flex",alignItems:"center",justifyContent:"center","& .MuiBox-root":{transform:"translate(0, -15%)",marginTop:"15px"}});function Ze(t){return e.jsxs(Qe,{children:[e.jsx(p,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:"#155D74",children:"People"}),e.jsx(Ye,{children:e.jsx(p,{fontFamily:"Buenard",fontWeight:"700",fontSize:36,lineHeight:47,color:"white",children:t.userNumber.toString()})})]})}const et=n(r)({display:"flex"}),tt=n(et)({width:"100vw",height:"100vh",alignItems:"center","& >.MuiBox-root: first-of-type":{backgroundColor:"#1B7695"}}),nt=n(r)({height:"calc(100vh - 73px)",marginTop:"73px",padding:"0px 48px"}),ot=n(r)({display:"flex",alignItems:"center"}),rt=n(r)(({disable:t})=>({width:"134px",cursor:t=="true"?"not-allowed":"pointer",height:"40px",marginTop:"46px",marginLeft:"500px",backgroundColor:t=="true"?"#CAC9C9":"#FFAA5D",border:"1px solid #474747",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",transitionDuration:".5s",color:t=="true"?"#474747":"#FFF !important","& button":{color:t=="true"?"#474747":"white !important",transitionDuration:".5s",fontSize:"14px",cursor:t=="true"?"not-allowed":"pointer","&:hover":{backgroundColor:"transparent",border:"none"}},"&:hover":{backgroundColor:t=="true"?"":"#EE994C","& button":{color:t=="true"?"":"white"}}})),at=n(r)({marginTop:"16px",display:"flex",justifyContent:"left"}),it=n(r)({width:"100%",margin:"35px 0px 16px 0px"}),lt=n(r)({display:"flex",alignItems:"center"}),Q=n(r)({width:"134px",boxSizing:"border-box",backgroundColor:"#FFAA5D",padding:"5px",marginRight:"15px",border:"1px solid #474747",textAlign:"center",cursor:"pointer",transitionDuration:".5s","& button":{color:"#474747",fontSize:"14px",fontWeight:"500",lineHeight:"24px",textTransform:"none",transitionDuration:".5s","&:hover":{backgroundColor:"transparent",border:"none"}},"&:hover":{backgroundColor:"#EE994C","& button":{color:"white"}}}),st=n(r)({backgroundColor:"#FF0505",padding:"5px",border:"1px solid #474747",transitionDuration:".5s",textAlign:"center",cursor:"pointer","&:hover":{backgroundColor:"#EE0404",color:"#474747"},"& button":{color:"white !important",fontSize:"14px",fontFamily:'"Baloo Da 2" !important',textTransform:"none",fontWeight:"500 !important",lineHeight:"24px !important","&:hover":{backgroundColor:"transparent",color:"#EEEEEE !important"}}});n(r)({display:"flex",flexDirection:"column",boxSizing:"border-box","& >.MuiBox-root: first-of-type":{backgroundColor:"#2D87A4"}});const ct=n(I)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"}}),dt=n(M)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),ut=n(G)({backgroundColor:"#155D74",padding:"12px","& >.MuiBox-root: nth-of-type(3)":{"& >.MuiBox-root: nth-of-type(2)":{"& >.MuiBox-root":{marginLeft:"12px"}}}});n(r)({backgroundColor:"#155D74"});const Y=n(r)({display:"flex",justifyContent:"center",alignItems:"center","& > .MuiBox-root":{padding:"8px",paddingRight:"0px"},"& .MuiInputBase-input":{padding:"5px !important"}}),gt=n(r)({display:"flex",justifyContent:"left",alignItems:"center",marginTop:"8px",paddingLeft:"8px","& input":{border:"1px solid blue"},"& .MuiCheckbox-root":{borderColor:"white",backgroundColor:"white",width:"32px",height:"32px",boxSizing:"border-box"},"& .MuiSvgIcon-root":{fontSize:"45px",color:"white"}}),xt=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"63%",float:"right",marginTop:"16px","& > .MuiBox-root: last-child":{marginRight:"0px"}}),Z=n(r)({display:"flex",alignItems:"center","& :hover":{backgroundColor:"#F6CFAC"},"& button":{backgroundColor:"#FFAA5D",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important"}}});function ht(t){const[c,o]=a.useState(""),[i,s]=a.useState(""),[f,u]=a.useState(!1);a.useEffect(()=>{var C,b,R;t.user?(o(((C=t.user)==null?void 0:C.username)||""),s(((b=t.user)==null?void 0:b.password)||""),u(((R=t.user)==null?void 0:R.isAdmin)||!1)):(o(""),s(""),u(!1))},[t.user,t.isOpen]);const g=a.useRef(null),x=a.useRef(null),d=a.useRef(null),S=C=>{var b;C.key==="Enter"&&(C.preventDefault(),(b=g.current)==null||b.focus())},B=C=>{var b;C.key==="Enter"&&(C.preventDefault(),(b=x.current)==null||b.focus())},m=C=>{var b;C.key==="Enter"&&(C.preventDefault(),(b=d.current)==null||b.click())},w=()=>{c.trim()&&(!t.user&&!i.trim()||t.onSave(c,i,f))},F=()=>{o(""),s(""),u(!1),t.onCancel()};return e.jsxs(ct,{open:t.isOpen,onClose:F,children:[e.jsx(dt,{children:"Person"}),e.jsxs(ut,{children:[e.jsxs(Y,{children:[e.jsx(p,{fontFamily:'"Baloo Da 2"',fontSize:16,fontWeight:"400",lineHeight:24,textAlign:"center",children:"Username:"}),e.jsx(U,{value:c,onKeyDown:S,onChange:C=>o(C.target.value)})]}),e.jsxs(Y,{children:[e.jsx(p,{fontFamily:'"Baloo Da 2"',fontSize:16,fontWeight:"400",lineHeight:24,textAlign:"center",children:"Password:"}),e.jsx(U,{value:i,type:"password",reference:g,onKeyDown:B,onChange:C=>s(C.target.value)})]}),e.jsxs(gt,{children:[e.jsx(p,{fontFamily:'"Baloo Da 2"',fontSize:16,fontWeight:"400",lineHeight:24,textAlign:"center",children:"Is Admin:"}),e.jsx(oe,{checked:f,label:"",reference:x,onKeyDown:m,onChange:()=>u(!f)})]}),e.jsxs(xt,{children:[e.jsx(Z,{children:e.jsx(E,{label:"Cancel",onClick:F})}),e.jsx(Z,{children:e.jsx(E,{label:"Save",onClick:w,reference:d})})]})]})]})}var K={},ft=pe;Object.defineProperty(K,"__esModule",{value:!0});var H=K.default=void 0,pt=ft(Ie()),ee=e;H=K.default=(0,pt.default)([(0,ee.jsx)("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),(0,ee.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber");const mt=n(I)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"}}),Ct=n(M)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),bt=n(r)({width:"276px",padding:"17px",backgroundColor:"#155D74",boxSizing:"border-box"}),St=n(r)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),yt=n(r)({display:"flex",justifyContent:"center"}),Dt=n(r)({width:"100%"}),jt=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",float:"right",marginTop:"16px","& > .MuiBox-root: last-child":{marginRight:"0px"}}),kt=n(r)({display:"flex",alignItems:"center",width:"72px",boxSizing:"border-box","& :hover":{backgroundColor:"#F6CFAC"},"& button":{backgroundColor:"#FFAA5D",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important"}}}),Bt=n(r)({display:"flex",alignItems:"center",width:"134px","& :hover":{backgroundColor:"#EE0404"},"& button":{width:"100%",backgroundColor:"#FF0505",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:"#FFFFFF !important"}}});function Ft(t){const c=()=>{t.onDelete()},o=()=>{t.onCancel()};return e.jsxs(mt,{open:t.isOpen,onClose:o,children:[e.jsx(Ct,{children:t.title}),e.jsxs(bt,{children:[e.jsxs(St,{children:[e.jsx(yt,{children:e.jsx(H,{})}),e.jsx(Dt,{children:e.jsx(p,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",children:t.content})})]}),e.jsxs(jt,{children:[e.jsx(kt,{children:e.jsx(E,{label:"Cancel",onClick:o})}),e.jsx(Bt,{children:e.jsx(E,{label:"Delete",onClick:c})})]})]})]})}const wt=n(I)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"}}),Et=n(M)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),vt=n(G)({backgroundColor:"#155D74",padding:"17px",width:"276px",height:"177px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),At=n(r)({width:"100%"});n(r)({backgroundColor:"#155D74"});const Tt=n(r)({display:"flex",justifyContent:"center",alignItems:"center","& > .MuiBox-root":{padding:"8px",paddingRight:"0px"},"& .MuiInputBase-input":{padding:"5px !important"}});n(r)({display:"flex",justifyContent:"left",alignItems:"center",marginTop:"8px",paddingLeft:"8px","& .MuiFormControlLabel-root":{marginLeft:"20px"},"& input":{border:"1px solid blue"},"& .MuiCheckbox-root":{borderColor:"white",backgroundColor:"white",width:"32px",height:"32px",boxSizing:"border-box"},"& .MuiSvgIcon-root":{fontSize:"45px",color:"white"}});const It=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",float:"right",marginTop:"16px","& > .MuiBox-root: last-child":{marginRight:"0px"}}),Mt=n(r)({display:"flex",alignItems:"center","& :hover":{backgroundColor:"#F6CFAC"},"& button":{backgroundColor:"#FFAA5D",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important"}}}),Rt=n(r)(({isdisable:t})=>({display:"flex",alignItems:"center",width:"134px",cursor:t=="true"?"not-allowed":"pointer","& :hover":{backgroundColor:"#EE0404"},"& button":{width:"100%",backgroundColor:"#FF0505",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:t=="true"?"#B6B0B0 !important":"#FFFFFF !important"}}}));function Lt(t){const[c,o]=a.useState(""),[i,s]=a.useState(!0);a.useEffect(()=>{c=="DELETE"?s(!1):s(!0)},[c]);const f=a.useRef(null),u=d=>{var S;d.key==="Enter"&&(d.preventDefault(),(S=f.current)==null||S.click())},g=()=>{o(""),t.onConfirm()},x=()=>{o(""),t.onCancel()};return e.jsxs(wt,{open:t.isOpen,onClose:x,children:[e.jsx(Et,{children:"Confirmation needed"}),e.jsxs(vt,{children:[e.jsx(At,{children:e.jsx(p,{fontFamily:'"Baloo Da 2"',fontSize:16,lineHeight:24,textAlign:"center",children:'Type "DELETE" to confirm: '})}),e.jsx(Tt,{children:e.jsx(U,{value:c,onKeyDown:u,onChange:d=>o(d.target.value)})}),e.jsxs(It,{children:[e.jsx(Mt,{children:e.jsx(E,{label:"Cancel",onClick:x})}),e.jsx(Rt,{isdisable:i?"true":"false",children:e.jsx(E,{label:"Delete forever",onClick:g,reference:f,disabled:i})})]})]})]})}const zt=n(I)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"},"& .MuiDialogContent-root > .MuiBox-root:first-of-type":{width:"100%"},"& .MuiDialogContent-root > .MuiBox-root:nth-of-type(2)":{alignSelf:"end",marginTop:"10px","& svg":{marginRight:"10px"}}}),Ot=n(M)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),Ut=n(G)({backgroundColor:"#155D74",padding:"17px",width:"276px",height:"177px",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"});n(r)({width:"100%"});n(r)({backgroundColor:"#155D74"});const Ht=n(r)({display:"flex",justifyContent:"center",alignItems:"center","& > .MuiBox-root":{padding:"8px",paddingRight:"0px"},"& .MuiInputBase-input":{padding:"5px !important"}}),Pt=n(r)({display:"flex",alignItems:"center"});n(r)({display:"flex",justifyContent:"left",alignItems:"center",marginTop:"8px",paddingLeft:"8px","& .MuiFormControlLabel-root":{marginLeft:"20px"},"& input":{border:"1px solid blue"},"& .MuiCheckbox-root":{borderColor:"white",backgroundColor:"white",width:"32px",height:"32px",boxSizing:"border-box"},"& .MuiSvgIcon-root":{fontSize:"45px",color:"white"}});const _t=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"67%",float:"right",marginTop:"16px",alignSelf:"end","& > .MuiBox-root: last-child":{marginRight:"0px"}}),te=n(r)(({isvalidate:t})=>({display:"flex",alignItems:"center",width:"72px",cursor:t=="false"?"not-allowed":"pointer","& :hover":{backgroundColor:"#F6CFAC"},"& button":{width:"100%",backgroundColor:t=="true"?"#FFAA5D":"#F6CFAC",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:t=="false"?"#989494 !important":"#474747 !important"}}}));n(r)(({isdisable:t})=>({display:"flex",alignItems:"center",width:"134px",cursor:t=="true"?"not-allowed":"pointer","& :hover":{backgroundColor:"#EE0404"},"& button":{width:"100%",backgroundColor:"#FF0505",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:t=="true"?"#B6B0B0 !important":"#FFFFFF !important"}}}));function $t(t){const[c,o]=a.useState(""),[i,s]=a.useState(!0);a.useEffect(()=>{t.languages.includes(c)?s(!1):s(!0)},[t.languages,t.isOpen,c]);const f=a.useRef(null),u=d=>{var S;d.key==="Enter"&&(d.preventDefault(),(S=f.current)==null||S.click())},g=()=>{o(""),t.onConfirm(c)},x=()=>{o(""),t.onCancel()};return e.jsxs(zt,{open:t.isOpen,onClose:x,children:[e.jsx(Ot,{children:"Language"}),e.jsxs(Ut,{children:[e.jsx(Ht,{children:e.jsx(U,{label:"Language:",value:c,onKeyDown:u,onChange:d=>o(d.target.value)})}),!i&&e.jsxs(Pt,{children:[e.jsx(H,{}),e.jsx(p,{fontFamily:'"Baloo Da 2"',fontSize:16,fontWeight:"400",lineHeight:24,textAlign:"center",color:"white",children:"Already exists"})]}),e.jsxs(_t,{children:[e.jsx(te,{isvalidate:"true",children:e.jsx(E,{label:"Cancel",onClick:x})}),e.jsx(te,{isvalidate:i&&c!=""?"true":"false",children:e.jsx(E,{label:"Save",onClick:g,reference:f,disabled:!i})})]})]})]})}const Wt=n(I)({borderRadius:"0px","& .MuiDialog-paper":{borderRadius:"0px"}}),Nt=n(M)({backgroundColor:"#2D87A4",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",lineHeight:"24px !important",padding:"5px 14px"}),Gt=n(r)({width:"284px",height:"245px",padding:"17px",backgroundColor:"#155D74",boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"space-around","& .MuiInputBase-root":{backgroundColor:"white",border:"1px solid black","& .MuiSelect-select":{color:"black"}},"& .MuiMenuItem-root":{backgroundColor:"white"}}),Kt=n(r)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),qt=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center","& .MuiFormControl-root":{width:"178px",alignItems:"self-end","& .MuiInputBase-root":{width:"100%"}}}),Vt=n(r)({}),Jt=n(r)({display:"flex",justifyContent:"center"}),Xt=n(r)({width:"100%"}),Qt=n(r)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",float:"right","& > .MuiBox-root: last-child":{marginRight:"0px"}}),Yt=n(r)({display:"flex",alignItems:"center",width:"72px",boxSizing:"border-box","& :hover":{backgroundColor:"#F6CFAC"},"& button":{backgroundColor:"#FFAA5D",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important"}}}),Zt=n(r)({display:"flex",alignItems:"center",width:"134px","& :hover":{backgroundColor:"#EE0404"},"& button":{width:"100%",backgroundColor:"#FF0505",borderRadius:"0","& .MuiBox-root":{textTransform:"none",fontFamily:'"Baloo Da 2" !important',fontSize:"16px !important",color:"#FFFFFF !important"}}});function en(t){const[c,o]=a.useState([]),[i,s]=a.useState("");a.useEffect(()=>{o(()=>t.roles.map(g=>({label:g.language,value:g.language}))),t.isOpen&&t.roles.length>0&&s(t.roles[0].language)},[t.roles,t.isOpen]);const f=()=>{i&&t.onDelete(i)},u=()=>{o([]),s(""),t.onCancel()};return e.jsxs(Wt,{open:t.isOpen,onClose:u,children:[e.jsx(Nt,{children:t.title}),e.jsxs(Gt,{children:[e.jsxs(Kt,{children:[e.jsx(Jt,{children:e.jsx(H,{})}),e.jsx(Xt,{children:e.jsx(p,{fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",children:t.content})})]}),e.jsxs(qt,{children:[e.jsx(Vt,{children:e.jsx(p,{fontSize:16,lineHeight:24,fontFamily:'"Baloo Da 2"',fontWeight:"400",children:"Delete: "})}),e.jsx(ne,{label:"",options:c,value:i,onChange:g=>s(g.target.value)})]}),e.jsxs(Qt,{children:[e.jsx(Yt,{children:e.jsx(E,{label:"Cancel",onClick:u})}),e.jsx(Zt,{children:e.jsx(E,{label:"Delete",onClick:f})})]})]})]})}function tn(t){const[c,o]=a.useState(!1),[i,s]=a.useState([]),[f,u]=a.useState(!1),[g,x]=a.useState(),[d,S]=a.useState(""),[B,m]=a.useState(!1),[w,F]=a.useState(""),[C,b]=a.useState(!1),[R,P]=a.useState(!1),[re,T]=a.useState(!1),[ae,_]=a.useState(!1),[ie,L]=a.useState(!1),[z,$]=a.useState(["UserName","Password","isAdmin","Actions","Last Login"]),le=Re();a.useEffect(()=>{se()},[]);const se=a.useCallback(async()=>{o(!0);const l=["UserName","Password","isAdmin","Actions","Last Login"];A.fetchUsers().then(h=>{h.forEach(y=>{y.roles.map(D=>{!l.includes(D.language)&&l.push(D.language)})}),$(l),s(h),o(!1)}).catch(h=>{j.error(h,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3}),o(!1)})},[]),ce=()=>{localStorage.removeItem(Ne),t.dispatch({type:N.RESET_USER}),t.dispatch({type:N.RESET_BOOK}),t.dispatch({type:N.RESET_APP_TEXT_PAGES}),le("/admin")},de=(l,h,y)=>{const D={username:l,password:h,isAdmin:y};o(!0),A.saveUser(D).then(v=>{s([...i,v]),j.success($e,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),b(!1),o(!1)}).catch(v=>{j.error(v,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)})},q=(l,h=!1)=>{if(h)o(!0),A.deleteUser(l).then(()=>{const y=i.filter(D=>D._id!==l);s(y),j.success(We,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}).catch(y=>{j.error(y,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)});else{P(!0),m(!0),S(l);return}T(!1),m(!1)},ue=l=>{x(l),b(!0)},ge=(l,h,y)=>{if(!g)return;o(!0);const D={id:g._id,username:l,password:h,isAdmin:y,roles:g.roles};A.updateUser(D).then(v=>{const fe=i.map(J=>J._id==v._id?v:J);s(fe),j.success("User updated successfully",{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),b(!1),x(void 0),o(!1)}).catch(v=>{j.error(v,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)})},xe=l=>{_(!1),i.map(h=>{h.roles.push({language:l,role:"none"})}),o(!0),A.addLanguage(l).then(h=>{s(h),$([...z,l]),j.success("Updated successfully",{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}).catch(h=>{j.error(h,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)})},V=(l,h=!1)=>{if(!h)F(l),L(!0);else{o(!0);const y=z.filter(D=>D!==w);$(y),A.deleteLanguage(l).then(D=>{s(D),j.success(`Language "${l}" deleted successfully`,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}).catch(D=>{j.error(D,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}),T(!1),L(!1),F("")}},he=()=>{o(!0),u(!0),A.updateUsers(i).then(()=>{j.success("Updated successfully",{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}).catch(l=>{j.error(l,{position:"top-right",draggable:!0,theme:"colored",transition:k,closeOnClick:!0,pauseOnHover:!0,autoClose:3e3}),o(!1)}),u(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(Le,{title:"Admin Portal"}),e.jsxs(tt,{children:[e.jsx(ze,{isAdmin:!0,isLoggedIn:!0,username:t.currentUser.username,onLogOut:ce,isAdminPage:!0}),e.jsxs(nt,{children:[e.jsxs(ot,{children:[e.jsx(Ze,{userNumber:i.length||0}),e.jsx(rt,{disable:f?"false":"true",children:e.jsx(O,{onClick:he,disabled:!f,children:"Save"})})]}),e.jsx(at,{children:e.jsx(Xe,{headers:z,users:i,onEditUser:ue,onDeleteUser:q,onUserChange:l=>{u(!0),s(l)}})}),e.jsx(it,{children:e.jsx(p,{color:"#155D74",fontFamily:"Buenard",fontSize:36,fontWeight:"700",lineHeight:47,children:"Admin"})}),e.jsxs(lt,{children:[e.jsx(Q,{children:e.jsx(O,{onClick:()=>b(!0),children:"New Person"})}),e.jsx(Q,{children:e.jsx(O,{onClick:()=>_(!0),children:"New Language"})}),e.jsx(st,{children:e.jsx(O,{onClick:()=>V("miguel"),children:"Del Language..."})})]})]}),e.jsx(ht,{isOpen:C,user:g,onSave:(l,h,y)=>{g?ge(l,h,y):de(l,h,y)},onCancel:()=>{b(!1),x(void 0)}}),e.jsx(Ft,{title:Oe,content:Ue,isOpen:R,onDelete:()=>{P(!1),T(!0)},onCancel:()=>P(!1)}),e.jsx(Lt,{isOpen:re,onConfirm:()=>B?q(d,!0):V(w,!0),onCancel:()=>{T(!1),F("")}}),e.jsx($t,{isOpen:ae,languages:z,onConfirm:l=>xe(l),onCancel:()=>_(!1)}),e.jsx(en,{title:He,content:Pe,isOpen:ie,roles:i.length>0?i[0].roles:[],onDelete:l=>{F(l),L(!1),T(!0)},onCancel:()=>L(!1)})]}),c&&e.jsx(_e,{})]})}function nn(t){return{dispatch:t}}function on(t){return{currentUser:t.user.currentUser}}const gn=Me(on,nn)(tn);export{gn as default};
