import{b as w,$ as m,j as t,Q as r}from"./index-Bu54zGJb.js";import{s as a,B as o,c as q,u as z,S as Y,d as $,g as X,_ as v,e as Z}from"./App-D32vpfO3.js";import{I as i,T as tt}from"./images-DhSVh-yh.js";import{L as et,C as j}from"./index-BWylSqvt.js";import{N as at,b as nt,c as it,d as st,S as ot,a as lt}from"./index-CvTbA7Ub.js";import{S as rt}from"./index-BcyfemWA.js";import{a as ut}from"./auth.service-BH_zikrJ.js";import"./index-AK0c6YfZ.js";import"./axios-BimPEqV4.js";const ct=a(o)({backgroundColor:"#1B7695",width:"100%",height:"100%",padding:"20px 30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media screen and (orientation: landscape)":{width:"100vw",height:"auto",minHeight:"100vh",display:"block"}});a(o)({display:"flex",width:"100%",alignItems:"center",justifyContent:"center",marginBottom:"20px"});a(o)({margin:"0px"});const gt=a(o)({backgroundColor:"#FFF",height:"calc(100vh - 80px)",padding:"24px",width:"100%","@media (min-width: 430px)":{width:"375px"},"@media screen and (orientation: landscape)":{margin:"auto",height:"calc(100vh + 150px)"}}),dt=a(o)({display:"flex",justifyContent:"space-between"}),pt=a(o)({display:"flex",justifyContent:"space-between"}),ht=a(o)({marginBottom:"30px","& .MuiFormControlLabel-root":{marginRight:"0px",width:"85%",alignSelf:"end"},"& .css-h145cq-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{height:"28px"},"& .css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{paddingRight:"0px"}}),mt=a(o)({margin:"12px 0px"});a(o)({width:"100vw",display:"flex"});a("img")({width:"100vw",position:"fixed",bottom:"0px",objectFit:"cover","@media (min-width: 412px)":{height:"150px",width:"100vw"},"@media (min-width: 719px)":{height:"170px",width:"100vw"},"@media (min-width: 949px)":{height:"200px"}});a(o)({display:"flex",justifyContent:"space-between",width:"100px",position:"fixed",left:"0",right:"0",bottom:"30px",margin:"auto","@media (min-width: 599px)":{width:"140px"}});a("img")({width:"40px",cursor:"pointer","&:active":{opacity:"0.8"},"@media (min-width: 599px)":{width:"50px"}});function xt(u){const[A,h]=w.useState(!1),{t:s}=z(),{textSize:L,theme:n,startAyasOnNewLine:T,showAyasNumbers:I,ayasNumberDisplayFormat:_,showQuranReferences:B,displayType:O,referenceLanguage:x,readingLanguage:S,readingControls:N,pageControl:E,volume:c,setVolume:D,autoScrollText:g,setAutoScrollText:M,audioLanguage:d,setAudioLanguage:R,audioOtherLanguage:p,setAudioOtherLanguage:F}=w.useContext(Y),{headerBGColor:k,mainBGColor:f,altTextColor:y}=X(n),C=$(),U=l=>{const e=l.target.value;F(e)},H=[{value:"en",label:s("English")},{value:"dutch",label:s("Dutch")}],V=[{value:x,label:s("Original Language")},{value:S,label:s("Translation")},{value:m.OTHER,disable:!0,label:t.jsx(rt,{label:"",value:p||m.TRANSLATION,disabled:!0,options:H,backgroundColor:f,textColor:y,onChange:U})}],P=()=>t.jsxs(gt,{style:{backgroundColor:f},children:[t.jsx(dt,{children:t.jsx(nt,{label:s("Volume"),defaultValue:c,step:5,labelValue:!0,onChange:D})}),t.jsx(pt,{children:t.jsx(it,{label:s("Auto Scroll"),value:g,labelValue:!0,onChange:M})}),t.jsxs(ht,{children:[t.jsx(mt,{children:t.jsx(tt,{fontFamily:"Inter",color:y,children:s("Language")})}),t.jsx(st,{value:d||m.TRANSLATION,options:V,onChange:R})]}),t.jsx(ot,{})]}),G=()=>{C(-1)},K=()=>{if(u.currentUser)W();else{const l=localStorage.getItem("settings");if(l){const e=JSON.parse(l);e.volume=c,e.autoScrollText=g,e.audioLanguage=d,e.audioOtherLanguage=p,localStorage.setItem("settings",JSON.stringify(e))}else{const Q=JSON.stringify({textSize:L,theme:n,startAyasOnNewLine:T,showAyasNumbers:I,ayasNumberDisplayFormat:_,showQuranReferences:B,displayType:O,referenceLanguage:x,readingLanguage:S,readingControls:N,pageControl:E,volume:c,autoScrollText:g,audioLanguage:d,audioOtherLanguage:p});localStorage.setItem("settings",Q)}v.custom(e=>t.jsx(j,{text:s("Setting Alert Description"),offset:70,visible:e.visible})),b()}},b=()=>{C(-1)},W=()=>{h(!0),ut.updateSettings({soundSettings:{volume:c,autoScrollText:g,language:d,other:p}}).then(l=>{h(!1),l&&u.dispatch({type:Z.SET_CURRENT_USER,payload:{user:l}}),b()}).catch(l=>{h(!1),v.custom(e=>t.jsx(j,{text:s(l),visible:e.visible}))})},J=()=>t.jsx(lt,{footerImg:i.sound_setting_subtract,closeImg:n==r.DEFAULT||n==r.DARK?i.close2:n==r.BLACK_AND_WHITE?i.close2_BAW:n==r.SAPPHIRE?i.close2_sapphire:i.close2_easyocean,tickImg:n==r.DEFAULT||n==r.DARK?i.tickBtn:n==r.BLACK_AND_WHITE?i.tickBtn_BWA:n==r.SAPPHIRE?i.tickBtn_sapphire:i.tickBtn_easyocean,onClose:G,onSave:K});return t.jsxs(t.Fragment,{children:[t.jsxs(ct,{style:{backgroundColor:k},children:[t.jsx(at,{title:s("Sound Settings"),icon:n==r.EASY_OCEAN?i.sound_setting_easyocean:i.sound_setting}),P()]}),J(),A&&t.jsx(et,{})]})}function St(u){return{currentUser:u.user.currentUser}}const Tt=q(St)(xt);export{Tt as default};