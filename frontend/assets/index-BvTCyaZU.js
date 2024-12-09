import{b as m,j as e,$ as j,Q as g,a0 as L,ap as xt}from"./index-BPBmJKVk.js";import{s,B as c,c as ht,S as pt,u as mt,_ as C,g as St,d as S}from"./App-Dc0kJjWH.js";import{I as u,T as ft}from"./index-DTg8ZQjm.js";import{H as bt}from"./index-D5giWuBx.js";import{L as vt}from"./index-DyzA58gU.js";import{N as yt,b as Ct,c as wt,d as Et,S as jt,a as Lt}from"./index-YYNa_4Xh.js";import{S as _t}from"./index-jDN3HCp-.js";import{C as w}from"./index-fCxqChV_.js";import{a as _}from"./auth.service-D_94x3fL.js";import"./index-CGt9JiYC.js";import"./axios-BimPEqV4.js";const At=s(c)({backgroundColor:"#1B7695",width:"100%",height:"100%",padding:"20px 30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media screen and (orientation: landscape)":{width:"100vw",height:"auto",minHeight:"100dvh",display:"block"}});s(c)({display:"flex",width:"100%",alignItems:"center",justifyContent:"center",marginBottom:"20px"});const Tt=s(c)({position:"absolute",top:"12px",right:"15px",width:"46px","@media (max-height: 639px)":{top:"8px",right:"10px"},"@media screen and (orientation: landscape)":{right:"15px"}});s(c)({margin:"0px"});const It=s(c)({backgroundColor:"#FFF",height:"calc(100dvh - 80px)",padding:"24px",width:"100%","@media (min-width: 430px)":{width:"375px"},"@media screen and (orientation: landscape)":{margin:"auto",height:"calc(100dvh + 150px)"}}),Bt=s(c)({height:"45px",display:"flex",justifyContent:"space-between"}),Ot=s(c)({height:"45px",display:"flex",justifyContent:"space-between"}),Nt=s(c)({marginBottom:"30px","& .MuiFormControlLabel-root":{marginRight:"0px",width:"85%",alignSelf:"end"},"& .css-h145cq-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{height:"28px"},"& .css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{paddingRight:"0px"}}),Rt=s(c)({margin:"12px 0px"});s(c)({width:"100vw",display:"flex"});s("img")({width:"100vw",position:"fixed",bottom:"0px",objectFit:"cover","@media (min-width: 412px)":{height:"150px",width:"100vw"},"@media (min-width: 719px)":{height:"170px",width:"100vw"},"@media (min-width: 949px)":{height:"200px"}});s(c)({display:"flex",justifyContent:"space-between",width:"100px",position:"fixed",left:"0",right:"0",bottom:"30px",margin:"auto","@media (min-width: 599px)":{width:"140px"}});s("img")({width:"40px",cursor:"pointer","&:active":{opacity:"0.8"},"@media (min-width: 599px)":{width:"50px"}});function Mt(a){var N,R,M,D,F,U;const[P,E]=m.useState(!1),[i,H]=m.useState(),[G,K]=m.useState(),{textSize:V,theme:l,startAyasOnNewLine:W,showAyasNumbers:J,ayasNumberDisplayFormat:Q,showQuranReferences:q,displayType:z,referenceLanguage:A,readingLanguage:r,readingControls:X,pageControl:Y,volume:f,setVolume:$,autoScrollText:b,setAutoScrollText:Z,audioLanguage:v,setAudioLanguage:tt,audioOtherLanguage:y,setAudioOtherLanguage:et}=m.useContext(pt),{headerBGColor:T,mainBGColor:I,altTextColor:B,logoTextColor:it}=St(l),h=mt();m.useEffect(()=>{var d,x;const t=a.terms.find(o=>o.pageTitle=="Sound Settings"),n=a.terms.find(o=>o.pageTitle=="Welcome Page");(d=t==null?void 0:t.isPublished)!=null&&d[r]?H(t):C.custom(o=>e.jsx(w,{text:"The terminologies for this page are not published.",visible:o.visible})),(x=n==null?void 0:n.isPublished)!=null&&x[r]?K(n):C.custom(o=>e.jsx(w,{text:"The terminologies for hamburgur menu are not published.",visible:o.visible}))},[a.terms]);const nt=t=>{const n=t.target.value;et(n)},at=()=>{h("/login")},st=()=>{a.dispatch({type:S.RESET_USER}),a.dispatch({type:S.RESET_BOOK}),a.dispatch({type:S.RESET_PAGE_STATUS}),a.dispatch({type:S.RESET_TERMS}),_.logout()},ot=[{value:"en",label:"English"},{value:"dutch",label:"Dutch"}],lt=[{value:A,label:((R=(N=i==null?void 0:i.texts.find(t=>t.variable=="Original Language"))==null?void 0:N.text)==null?void 0:R[r])||""},{value:r,label:((D=(M=i==null?void 0:i.texts.find(t=>t.variable=="Translation"))==null?void 0:M.text)==null?void 0:D[r])||""},{value:j.OTHER,disable:!0,label:e.jsx(_t,{label:"",value:y||j.TRANSLATION,disabled:!0,options:ot,backgroundColor:I,textColor:B,onChange:nt})}],rt=()=>{var t,n,d,x,o,k;return e.jsxs(It,{style:{backgroundColor:I},children:[e.jsx(Bt,{children:e.jsx(Ct,{label:((n=(t=i==null?void 0:i.texts.find(p=>p.variable=="Volume"))==null?void 0:t.text)==null?void 0:n[r])||"",defaultValue:f,step:5,labelValue:!0,onChange:$})}),e.jsx(Ot,{children:e.jsx(wt,{label:((x=(d=i==null?void 0:i.texts.find(p=>p.variable=="Auto Scroll"))==null?void 0:d.text)==null?void 0:x[r])||"",value:b,labelValue:!0,onChange:Z})}),e.jsxs(Nt,{children:[e.jsx(Rt,{children:e.jsx(ft,{fontFamily:"Inter",color:B,children:((k=(o=i==null?void 0:i.texts.find(p=>p.variable=="Language"))==null?void 0:o.text)==null?void 0:k[r])||""})}),e.jsx(Et,{value:v||j.TRANSLATION,options:lt,onChange:tt})]}),e.jsx(jt,{})]})},ut=()=>{h(-1)},ct=()=>{if(a.currentUser)dt();else{const t=localStorage.getItem(L);if(t){const n=JSON.parse(t);n.volume=f,n.autoScrollText=b,n.audioLanguage=v,n.audioOtherLanguage=y,localStorage.setItem(L,JSON.stringify(n))}else{const d=JSON.stringify({textSize:V,theme:l,startAyasOnNewLine:W,showAyasNumbers:J,ayasNumberDisplayFormat:Q,showQuranReferences:q,displayType:z,referenceLanguage:A,readingLanguage:r,readingControls:X,pageControl:Y,volume:f,autoScrollText:b,audioLanguage:v,audioOtherLanguage:y});localStorage.setItem(L,d)}C.custom(n=>{var d,x;return e.jsx(w,{text:((x=(d=i==null?void 0:i.texts.find(o=>o.variable=="Setting Alert Description"))==null?void 0:d.text)==null?void 0:x[r])||"",offset:70,visible:n.visible})}),O()}},O=()=>{h(-1)},dt=()=>{E(!0),_.updateSettings({soundSettings:{volume:f,autoScrollText:b,language:v,other:y}}).then(t=>{E(!1),t&&a.dispatch({type:S.SET_CURRENT_USER,payload:{user:t}}),O()}).catch(t=>{E(!1),t.status==401&&t.response.data.message==xt&&(C.custom(n=>e.jsx(w,{text:t.response.data.message,visible:n.visible})),_.logout(),h("/login"))})},gt=()=>e.jsx(Lt,{footerImg:u.sound_setting_subtract,closeImg:l==g.DEFAULT||l==g.DARK?u.close2:l==g.BLACK_AND_WHITE?u.close2_BAW:l==g.SAPPHIRE?u.close2_sapphire:u.close2_easyocean,tickImg:l==g.DEFAULT||l==g.DARK?u.tickBtn:l==g.BLACK_AND_WHITE?u.tickBtn_BWA:l==g.SAPPHIRE?u.tickBtn_sapphire:u.tickBtn_easyocean,onClose:ut,onSave:ct});return e.jsxs(e.Fragment,{children:[e.jsxs(At,{style:{backgroundColor:T},children:[e.jsx(yt,{title:((U=(F=i==null?void 0:i.texts.find(t=>t.variable=="Sound Settings"))==null?void 0:F.text)==null?void 0:U[r])||"",icon:l==g.EASY_OCEAN?u.sound_setting_easyocean:u.sound_setting}),e.jsx(Tt,{children:e.jsx(bt,{isLogin:!!a.currentUser,textColor:it,itemBgColor:T,terms:G||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},onLogin:a.currentUser?st:at,onSettings:()=>h("/settings")})}),rt()]}),gt(),P&&e.jsx(vt,{})]})}function Dt(a){return{currentUser:a.user.currentUser,terms:a.terms.terms}}const qt=ht(Dt)(Mt);export{qt as default};
