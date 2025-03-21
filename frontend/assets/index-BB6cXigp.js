import{b as m,j as e,ab as j,a3 as d,ag as E,aB as xt}from"./index-DEG7EQ5W.js";import{s,B as g,c as pt,S as ht,g as mt,u as St,V as C,j as S}from"./App-3aEmK_pi.js";import{I as u,T as ft}from"./index-B_PedCrA.js";import{H as bt}from"./index-BWYBFeC7.js";import{L as vt}from"./index-B3i8CqNy.js";import{N as yt,S as Ct,b as wt,c as Lt,d as jt,a as Et}from"./index-B2gazpzh.js";import{S as At}from"./index-C3gTwXTF.js";import{C as w}from"./index-Dw8Hbmdw.js";import{a as A}from"./auth.service-C5exErY4.js";import"./index-PfnPkSiB.js";import"./index-C88pvD_q.js";const Tt=s(g)({backgroundColor:"#1B7695",width:"100%",height:"100%",padding:"20px 30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media screen and (orientation: landscape)":{width:"100vw",height:"auto",minHeight:"100dvh",display:"block"}});s(g)({display:"flex",width:"100%",alignItems:"center",justifyContent:"center",marginBottom:"20px"});const It=s(g)({position:"absolute",top:"12px",right:"15px",width:"46px","@media (max-height: 639px)":{top:"8px",right:"10px"},"@media screen and (orientation: landscape)":{right:"15px"}});s(g)({margin:"0px"});const _t=s(g)({backgroundColor:"#FFF",height:"calc(100dvh - 80px)",padding:"24px",width:"100%","@media (min-width: 430px)":{width:"375px"},"@media screen and (orientation: landscape)":{margin:"auto",height:"calc(100dvh + 150px)"}}),Bt=s(g)({height:"45px",display:"flex",justifyContent:"space-between"}),Ot=s(g)({height:"45px",display:"flex",justifyContent:"space-between"}),Nt=s(g)({marginBottom:"30px","& .MuiFormControlLabel-root":{marginRight:"0px",width:"85%",alignSelf:"end"},"& .css-h145cq-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{height:"28px"},"& .css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{paddingRight:"0px"}}),Rt=s(g)({margin:"12px 0px"});s(g)({width:"100vw",display:"flex"});s("img")({width:"100vw",position:"fixed",bottom:"0px",objectFit:"cover","@media (min-width: 412px)":{height:"150px",width:"100vw"},"@media (min-width: 719px)":{height:"170px",width:"100vw"},"@media (min-width: 949px)":{height:"200px"}});s(g)({display:"flex",justifyContent:"space-between",width:"100px",position:"fixed",left:"0",right:"0",bottom:"30px",margin:"auto","@media (min-width: 599px)":{width:"140px"}});s("img")({width:"40px",cursor:"pointer","&:active":{opacity:"0.8"},"@media (min-width: 599px)":{width:"50px"}});function Mt(n){var N,R,M,D,F,U;const[P,L]=m.useState(!1),[a,H]=m.useState(),[V,G]=m.useState(),{textSize:K,theme:l,startAyasOnNewLine:W,showAyasNumbers:J,ayasNumberDisplayFormat:q,showQuranReferences:z,displayType:Q,referenceLanguage:T,readingLanguage:r,readingControls:X,pageControl:Y,volume:f,setVolume:Z,autoScrollText:b,setAutoScrollText:$,audioLanguage:v,setAudioLanguage:tt,audioOtherLanguage:y,setAudioOtherLanguage:et}=m.useContext(ht),{headerBGColor:I,mainBGColor:_,altTextColor:B,logoTextColor:at}=mt(l),p=St();m.useEffect(()=>{var c,x;const t=n.terms.find(o=>o.pageTitle=="Sound Settings"),i=n.terms.find(o=>o.pageTitle=="Welcome Page");(c=t==null?void 0:t.isPublished)!=null&&c[r]?H(t):C.custom(o=>e.jsx(w,{text:"The terminologies for this page are not published.",visible:o.visible})),(x=i==null?void 0:i.isPublished)!=null&&x[r]?G(i):C.custom(o=>e.jsx(w,{text:"The terminologies for hamburgur menu are not published.",visible:o.visible}))},[n.terms]);const it=t=>{const i=t.target.value;et(i)},nt=()=>{p("/login")},st=()=>{n.dispatch({type:S.RESET_USER}),n.dispatch({type:S.RESET_BOOK}),n.dispatch({type:S.RESET_PAGE_STATUS}),n.dispatch({type:S.RESET_TERMS}),A.logout()},ot=[{value:"en",label:"English"},{value:"ar",label:"Aratic"},{value:"tlg",label:"Tagalog"}],lt=[{value:T,label:((R=(N=a==null?void 0:a.texts.find(t=>t.variable=="Original Language"))==null?void 0:N.text)==null?void 0:R[r])||"Original language"},{value:r,label:((D=(M=a==null?void 0:a.texts.find(t=>t.variable=="Translation"))==null?void 0:M.text)==null?void 0:D[r])||"Translation"},{value:j.OTHER,disable:!0,label:e.jsx(At,{label:"",value:y||j.TRANSLATION,disabled:!0,options:ot,backgroundColor:_,textColor:B,onChange:it})}],rt=()=>{var t,i,c,x,o,k;return e.jsxs(_t,{style:{backgroundColor:_},children:[e.jsx(Bt,{children:e.jsx(wt,{label:((i=(t=a==null?void 0:a.texts.find(h=>h.variable=="Volume"))==null?void 0:t.text)==null?void 0:i[r])||"Volume",defaultValue:f,step:5,labelValue:!0,onChange:Z})}),e.jsx(Ot,{children:e.jsx(Lt,{label:((x=(c=a==null?void 0:a.texts.find(h=>h.variable=="Auto Scroll"))==null?void 0:c.text)==null?void 0:x[r])||"Auto scroll",value:b,labelValue:!0,onChange:$})}),e.jsxs(Nt,{children:[e.jsx(Rt,{children:e.jsx(ft,{fontFamily:"Inter",color:B,children:((k=(o=a==null?void 0:a.texts.find(h=>h.variable=="Language"))==null?void 0:o.text)==null?void 0:k[r])||"Language"})}),e.jsx(jt,{value:v||j.TRANSLATION,options:lt,onChange:tt})]}),e.jsx(Et,{})]})},ut=()=>{p(-1)},gt=()=>{if(n.currentUser)ct();else{const t=localStorage.getItem(E);if(t){const i=JSON.parse(t);i.volume=f,i.autoScrollText=b,i.audioLanguage=v,i.audioOtherLanguage=y,localStorage.setItem(E,JSON.stringify(i))}else{const c=JSON.stringify({textSize:K,theme:l,startAyasOnNewLine:W,showAyasNumbers:J,ayasNumberDisplayFormat:q,showQuranReferences:z,displayType:Q,referenceLanguage:T,readingLanguage:r,readingControls:X,pageControl:Y,volume:f,autoScrollText:b,audioLanguage:v,audioOtherLanguage:y});localStorage.setItem(E,c)}C.custom(i=>{var c,x;return e.jsx(w,{text:((x=(c=a==null?void 0:a.texts.find(o=>o.variable=="Setting Alert Description"))==null?void 0:c.text)==null?void 0:x[r])||"Setting alert description",offset:70,visible:i.visible})}),O()}},O=()=>{p(-1)},ct=()=>{L(!0),A.updateSettings({soundSettings:{volume:f,autoScrollText:b,language:v,other:y}}).then(t=>{L(!1),t&&n.dispatch({type:S.SET_CURRENT_USER,payload:{user:t}}),O()}).catch(t=>{L(!1),t.status==401&&t.response.data.message==xt&&(C.custom(i=>e.jsx(w,{text:t.response.data.message,visible:i.visible})),A.logout(),p("/login"))})},dt=()=>e.jsx(Ct,{footerImg:u.sound_setting_subtract,closeImg:l==d.DEFAULT||l==d.DARK?u.close2:l==d.BLACK_AND_WHITE?u.close2_BAW:l==d.SAPPHIRE?u.close2_sapphire:u.close2_easyocean,tickImg:l==d.DEFAULT||l==d.DARK?u.tickBtn:l==d.BLACK_AND_WHITE?u.tickBtn_BWA:l==d.SAPPHIRE?u.tickBtn_sapphire:u.tickBtn_easyocean,onClose:ut,onSave:gt});return e.jsxs(e.Fragment,{children:[e.jsxs(Tt,{style:{backgroundColor:I},children:[e.jsx(yt,{title:((U=(F=a==null?void 0:a.texts.find(t=>t.variable=="Sound Settings"))==null?void 0:F.text)==null?void 0:U[r])||"Sound Settings",icon:l==d.EASY_OCEAN?u.sound_setting_easyocean:u.sound_setting}),e.jsx(It,{children:e.jsx(bt,{isLogin:!!n.currentUser,textColor:at,itemBgColor:I,terms:V||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},appLanguage:n.appLanguage,onLogin:n.currentUser?st:nt,onSettings:()=>p("/settings")})}),rt()]}),dt(),P&&e.jsx(vt,{})]})}function Dt(n){return{currentUser:n.user.currentUser,appLanguage:n.user.appLanguage,terms:n.terms.terms}}const zt=pt(Dt)(Mt);export{zt as default};
