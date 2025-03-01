import{b as m,j as e,ab as j,a3 as g,ag as A,aB as xt}from"./index-BtHY-KAx.js";import{s,B as c,c as ht,S as pt,u as mt,k as C,g as St,d as S}from"./App-B1-GqC3j.js";import{I as u,T as ft}from"./index-v9R8iKio.js";import{H as bt}from"./index-B0YVSwXd.js";import{L as vt}from"./index-B3Idc5Mr.js";import{N as yt,b as Ct,c as wt,d as Et,S as jt,a as At}from"./index-D2yYIxfY.js";import{S as Lt}from"./index-5hMq5l20.js";import{C as w}from"./index-CAKU7G3L.js";import{a as L}from"./auth.service-CKsRNXFk.js";import"./index-qjsY168c.js";import"./axios-upsvKRUO.js";const Tt=s(c)({backgroundColor:"#1B7695",width:"100%",height:"100%",padding:"20px 30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media screen and (orientation: landscape)":{width:"100vw",height:"auto",minHeight:"100dvh",display:"block"}});s(c)({display:"flex",width:"100%",alignItems:"center",justifyContent:"center",marginBottom:"20px"});const It=s(c)({position:"absolute",top:"12px",right:"15px",width:"46px","@media (max-height: 639px)":{top:"8px",right:"10px"},"@media screen and (orientation: landscape)":{right:"15px"}});s(c)({margin:"0px"});const _t=s(c)({backgroundColor:"#FFF",height:"calc(100dvh - 80px)",padding:"24px",width:"100%","@media (min-width: 430px)":{width:"375px"},"@media screen and (orientation: landscape)":{margin:"auto",height:"calc(100dvh + 150px)"}}),Bt=s(c)({height:"45px",display:"flex",justifyContent:"space-between"}),Ot=s(c)({height:"45px",display:"flex",justifyContent:"space-between"}),Nt=s(c)({marginBottom:"30px","& .MuiFormControlLabel-root":{marginRight:"0px",width:"85%",alignSelf:"end"},"& .css-h145cq-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{height:"28px"},"& .css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{paddingRight:"0px"}}),Rt=s(c)({margin:"12px 0px"});s(c)({width:"100vw",display:"flex"});s("img")({width:"100vw",position:"fixed",bottom:"0px",objectFit:"cover","@media (min-width: 412px)":{height:"150px",width:"100vw"},"@media (min-width: 719px)":{height:"170px",width:"100vw"},"@media (min-width: 949px)":{height:"200px"}});s(c)({display:"flex",justifyContent:"space-between",width:"100px",position:"fixed",left:"0",right:"0",bottom:"30px",margin:"auto","@media (min-width: 599px)":{width:"140px"}});s("img")({width:"40px",cursor:"pointer","&:active":{opacity:"0.8"},"@media (min-width: 599px)":{width:"50px"}});function Mt(n){var N,R,M,D,k,F;const[P,E]=m.useState(!1),[i,H]=m.useState(),[V,G]=m.useState(),{textSize:K,theme:l,startAyasOnNewLine:W,showAyasNumbers:J,ayasNumberDisplayFormat:q,showQuranReferences:z,displayType:Q,referenceLanguage:T,readingLanguage:r,readingControls:X,pageControl:Y,volume:f,setVolume:Z,autoScrollText:b,setAutoScrollText:$,audioLanguage:v,setAudioLanguage:tt,audioOtherLanguage:y,setAudioOtherLanguage:et}=m.useContext(pt),{headerBGColor:I,mainBGColor:_,altTextColor:B,logoTextColor:it}=St(l),h=mt();m.useEffect(()=>{var d,x;const t=n.terms.find(o=>o.pageTitle=="Sound Settings"),a=n.terms.find(o=>o.pageTitle=="Welcome Page");(d=t==null?void 0:t.isPublished)!=null&&d[r]?H(t):C.custom(o=>e.jsx(w,{text:"The terminologies for this page are not published.",visible:o.visible})),(x=a==null?void 0:a.isPublished)!=null&&x[r]?G(a):C.custom(o=>e.jsx(w,{text:"The terminologies for hamburgur menu are not published.",visible:o.visible}))},[n.terms]);const at=t=>{const a=t.target.value;et(a)},nt=()=>{h("/login")},st=()=>{n.dispatch({type:S.RESET_USER}),n.dispatch({type:S.RESET_BOOK}),n.dispatch({type:S.RESET_PAGE_STATUS}),n.dispatch({type:S.RESET_TERMS}),L.logout()},ot=[{value:"en",label:"English"},{value:"ar",label:"Aratic"},{value:"tlg",label:"Tagalog"}],lt=[{value:T,label:((R=(N=i==null?void 0:i.texts.find(t=>t.variable=="Original Language"))==null?void 0:N.text)==null?void 0:R[r])||"Original language"},{value:r,label:((D=(M=i==null?void 0:i.texts.find(t=>t.variable=="Translation"))==null?void 0:M.text)==null?void 0:D[r])||"Translation"},{value:j.OTHER,disable:!0,label:e.jsx(Lt,{label:"",value:y||j.TRANSLATION,disabled:!0,options:ot,backgroundColor:_,textColor:B,onChange:at})}],rt=()=>{var t,a,d,x,o,U;return e.jsxs(_t,{style:{backgroundColor:_},children:[e.jsx(Bt,{children:e.jsx(Ct,{label:((a=(t=i==null?void 0:i.texts.find(p=>p.variable=="Volume"))==null?void 0:t.text)==null?void 0:a[r])||"Volume",defaultValue:f,step:5,labelValue:!0,onChange:Z})}),e.jsx(Ot,{children:e.jsx(wt,{label:((x=(d=i==null?void 0:i.texts.find(p=>p.variable=="Auto Scroll"))==null?void 0:d.text)==null?void 0:x[r])||"Auto scroll",value:b,labelValue:!0,onChange:$})}),e.jsxs(Nt,{children:[e.jsx(Rt,{children:e.jsx(ft,{fontFamily:"Inter",color:B,children:((U=(o=i==null?void 0:i.texts.find(p=>p.variable=="Language"))==null?void 0:o.text)==null?void 0:U[r])||"Language"})}),e.jsx(Et,{value:v||j.TRANSLATION,options:lt,onChange:tt})]}),e.jsx(jt,{})]})},ut=()=>{h(-1)},ct=()=>{if(n.currentUser)dt();else{const t=localStorage.getItem(A);if(t){const a=JSON.parse(t);a.volume=f,a.autoScrollText=b,a.audioLanguage=v,a.audioOtherLanguage=y,localStorage.setItem(A,JSON.stringify(a))}else{const d=JSON.stringify({textSize:K,theme:l,startAyasOnNewLine:W,showAyasNumbers:J,ayasNumberDisplayFormat:q,showQuranReferences:z,displayType:Q,referenceLanguage:T,readingLanguage:r,readingControls:X,pageControl:Y,volume:f,autoScrollText:b,audioLanguage:v,audioOtherLanguage:y});localStorage.setItem(A,d)}C.custom(a=>{var d,x;return e.jsx(w,{text:((x=(d=i==null?void 0:i.texts.find(o=>o.variable=="Setting Alert Description"))==null?void 0:d.text)==null?void 0:x[r])||"Setting alert description",offset:70,visible:a.visible})}),O()}},O=()=>{h(-1)},dt=()=>{E(!0),L.updateSettings({soundSettings:{volume:f,autoScrollText:b,language:v,other:y}}).then(t=>{E(!1),t&&n.dispatch({type:S.SET_CURRENT_USER,payload:{user:t}}),O()}).catch(t=>{E(!1),t.status==401&&t.response.data.message==xt&&(C.custom(a=>e.jsx(w,{text:t.response.data.message,visible:a.visible})),L.logout(),h("/login"))})},gt=()=>e.jsx(At,{footerImg:u.sound_setting_subtract,closeImg:l==g.DEFAULT||l==g.DARK?u.close2:l==g.BLACK_AND_WHITE?u.close2_BAW:l==g.SAPPHIRE?u.close2_sapphire:u.close2_easyocean,tickImg:l==g.DEFAULT||l==g.DARK?u.tickBtn:l==g.BLACK_AND_WHITE?u.tickBtn_BWA:l==g.SAPPHIRE?u.tickBtn_sapphire:u.tickBtn_easyocean,onClose:ut,onSave:ct});return e.jsxs(e.Fragment,{children:[e.jsxs(Tt,{style:{backgroundColor:I},children:[e.jsx(yt,{title:((F=(k=i==null?void 0:i.texts.find(t=>t.variable=="Sound Settings"))==null?void 0:k.text)==null?void 0:F[r])||"Sound Settings",icon:l==g.EASY_OCEAN?u.sound_setting_easyocean:u.sound_setting}),e.jsx(It,{children:e.jsx(bt,{isLogin:!!n.currentUser,textColor:it,itemBgColor:I,terms:V||{pageId:"",pageNumber:0,pageTitle:"",isCompleted:{},isPublished:{},texts:[]},onLogin:n.currentUser?st:nt,onSettings:()=>h("/settings")})}),rt()]}),gt(),P&&e.jsx(vt,{})]})}function Dt(n){return{currentUser:n.user.currentUser,terms:n.terms.terms}}const zt=ht(Dt)(Mt);export{zt as default};
