<<<<<<<< Updated upstream:frontend/assets/index-DQdzxx8V.js
import{b as w,$ as x,j as t,Q as r,an as z}from"./index-Dibo9daf.js";import{s as a,B as l,c as X,u as Y,S as $,d as Z,g as tt,_ as v,e as et}from"./App-OdTok9eR.js";import{I as i,T as at}from"./images-DnnUPU9h.js";import{L as nt,C as j}from"./index-czeODGXL.js";import{N as st,b as it,c as ot,d as lt,S as rt,a as ut}from"./index-5wh9IS_a.js";import{S as ct}from"./index-CtOr8J5A.js";import{a as A}from"./auth.service-DyFIPSgW.js";import"./index-BKuUYryJ.js";import"./axios-BimPEqV4.js";const gt=a(l)({backgroundColor:"#1B7695",width:"100%",height:"100%",padding:"20px 30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media screen and (orientation: landscape)":{width:"100vw",height:"auto",minHeight:"100dvh",display:"block"}});a(l)({display:"flex",width:"100%",alignItems:"center",justifyContent:"center",marginBottom:"20px"});a(l)({margin:"0px"});const dt=a(l)({backgroundColor:"#FFF",height:"calc(100dvh - 80px)",padding:"24px",width:"100%","@media (min-width: 430px)":{width:"375px"},"@media screen and (orientation: landscape)":{margin:"auto",height:"calc(100dvh + 150px)"}}),pt=a(l)({display:"flex",justifyContent:"space-between"}),ht=a(l)({display:"flex",justifyContent:"space-between"}),mt=a(l)({marginBottom:"30px","& .MuiFormControlLabel-root":{marginRight:"0px",width:"85%",alignSelf:"end"},"& .css-h145cq-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{height:"28px"},"& .css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{paddingRight:"0px"}}),xt=a(l)({margin:"12px 0px"});a(l)({width:"100vw",display:"flex"});a("img")({width:"100vw",position:"fixed",bottom:"0px",objectFit:"cover","@media (min-width: 412px)":{height:"150px",width:"100vw"},"@media (min-width: 719px)":{height:"170px",width:"100vw"},"@media (min-width: 949px)":{height:"200px"}});a(l)({display:"flex",justifyContent:"space-between",width:"100px",position:"fixed",left:"0",right:"0",bottom:"30px",margin:"auto","@media (min-width: 599px)":{width:"140px"}});a("img")({width:"40px",cursor:"pointer","&:active":{opacity:"0.8"},"@media (min-width: 599px)":{width:"50px"}});function St(u){const[L,h]=w.useState(!1),{t:o}=Y(),{textSize:T,theme:n,startAyasOnNewLine:I,showAyasNumbers:_,ayasNumberDisplayFormat:B,showQuranReferences:E,displayType:O,referenceLanguage:S,readingLanguage:f,readingControls:N,pageControl:D,volume:c,setVolume:R,autoScrollText:g,setAutoScrollText:M,audioLanguage:d,setAudioLanguage:F,audioOtherLanguage:p,setAudioOtherLanguage:k}=w.useContext($),{headerBGColor:U,mainBGColor:y,altTextColor:C}=tt(n),m=Z(),H=s=>{const e=s.target.value;k(e)},P=[{value:"en",label:o("English")},{value:"dutch",label:o("Dutch")}],V=[{value:S,label:o("Original Language")},{value:f,label:o("Translation")},{value:x.OTHER,disable:!0,label:t.jsx(ct,{label:"",value:p||x.TRANSLATION,disabled:!0,options:P,backgroundColor:y,textColor:C,onChange:H})}],K=()=>t.jsxs(dt,{style:{backgroundColor:y},children:[t.jsx(pt,{children:t.jsx(it,{label:o("Volume"),defaultValue:c,step:5,labelValue:!0,onChange:R})}),t.jsx(ht,{children:t.jsx(ot,{label:o("Auto Scroll"),value:g,labelValue:!0,onChange:M})}),t.jsxs(mt,{children:[t.jsx(xt,{children:t.jsx(at,{fontFamily:"Inter",color:C,children:o("Language")})}),t.jsx(lt,{value:d||x.TRANSLATION,options:V,onChange:F})]}),t.jsx(rt,{})]}),G=()=>{m(-1)},W=()=>{if(u.currentUser)J();else{const s=localStorage.getItem("settings");if(s){const e=JSON.parse(s);e.volume=c,e.autoScrollText=g,e.audioLanguage=d,e.audioOtherLanguage=p,localStorage.setItem("settings",JSON.stringify(e))}else{const q=JSON.stringify({textSize:T,theme:n,startAyasOnNewLine:I,showAyasNumbers:_,ayasNumberDisplayFormat:B,showQuranReferences:E,displayType:O,referenceLanguage:S,readingLanguage:f,readingControls:N,pageControl:D,volume:c,autoScrollText:g,audioLanguage:d,audioOtherLanguage:p});localStorage.setItem("settings",q)}v.custom(e=>t.jsx(j,{text:o("Setting Alert Description"),offset:70,visible:e.visible})),b()}},b=()=>{m(-1)},J=()=>{h(!0),A.updateSettings({soundSettings:{volume:c,autoScrollText:g,language:d,other:p}}).then(s=>{h(!1),s&&u.dispatch({type:et.SET_CURRENT_USER,payload:{user:s}}),b()}).catch(s=>{h(!1),s.status==401&&s.response.data.message==z&&(v.custom(e=>t.jsx(j,{text:o(s.response.data.message),visible:e.visible})),A.logout(),m("/login"))})},Q=()=>t.jsx(ut,{footerImg:i.sound_setting_subtract,closeImg:n==r.DEFAULT||n==r.DARK?i.close2:n==r.BLACK_AND_WHITE?i.close2_BAW:n==r.SAPPHIRE?i.close2_sapphire:i.close2_easyocean,tickImg:n==r.DEFAULT||n==r.DARK?i.tickBtn:n==r.BLACK_AND_WHITE?i.tickBtn_BWA:n==r.SAPPHIRE?i.tickBtn_sapphire:i.tickBtn_easyocean,onClose:G,onSave:W});return t.jsxs(t.Fragment,{children:[t.jsxs(gt,{style:{backgroundColor:U},children:[t.jsx(st,{title:o("Sound Settings"),icon:n==r.EASY_OCEAN?i.sound_setting_easyocean:i.sound_setting}),K()]}),Q(),L&&t.jsx(nt,{})]})}function ft(u){return{currentUser:u.user.currentUser}}const It=X(ft)(St);export{It as default};
========
import{b as w,$ as x,j as t,Q as r,am as z}from"./index-DiZbyTx4.js";import{s as a,B as l,c as X,u as Y,S as $,d as Z,g as tt,_ as v,e as et}from"./App-C3cg7l-F.js";import{I as i,T as at}from"./images-CdwsV4BQ.js";import{L as nt,C as j}from"./index-DZxhgZXp.js";import{N as st,b as it,c as ot,d as lt,S as rt,a as ut}from"./index-By38XzqT.js";import{S as ct}from"./index-DwTe-0Gq.js";import{a as A}from"./auth.service-BLGzcuEQ.js";import"./index-B61ytNri.js";import"./axios-BimPEqV4.js";const gt=a(l)({backgroundColor:"#1B7695",width:"100%",height:"100%",padding:"20px 30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","@media screen and (orientation: landscape)":{width:"100vw",height:"auto",minHeight:"100dvh",display:"block"}});a(l)({display:"flex",width:"100%",alignItems:"center",justifyContent:"center",marginBottom:"20px"});a(l)({margin:"0px"});const dt=a(l)({backgroundColor:"#FFF",height:"calc(100dvh - 80px)",padding:"24px",width:"100%","@media (min-width: 430px)":{width:"375px"},"@media screen and (orientation: landscape)":{margin:"auto",height:"calc(100dvh + 150px)"}}),pt=a(l)({display:"flex",justifyContent:"space-between"}),mt=a(l)({display:"flex",justifyContent:"space-between"}),ht=a(l)({marginBottom:"30px","& .MuiFormControlLabel-root":{marginRight:"0px",width:"85%",alignSelf:"end"},"& .css-h145cq-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{height:"28px"},"& .css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-cw5clm-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{paddingRight:"0px"}}),xt=a(l)({margin:"12px 0px"});a(l)({width:"100vw",display:"flex"});a("img")({width:"100vw",position:"fixed",bottom:"0px",objectFit:"cover","@media (min-width: 412px)":{height:"150px",width:"100vw"},"@media (min-width: 719px)":{height:"170px",width:"100vw"},"@media (min-width: 949px)":{height:"200px"}});a(l)({display:"flex",justifyContent:"space-between",width:"100px",position:"fixed",left:"0",right:"0",bottom:"30px",margin:"auto","@media (min-width: 599px)":{width:"140px"}});a("img")({width:"40px",cursor:"pointer","&:active":{opacity:"0.8"},"@media (min-width: 599px)":{width:"50px"}});function St(u){const[L,m]=w.useState(!1),{t:o}=Y(),{textSize:T,theme:n,startAyasOnNewLine:I,showAyasNumbers:_,ayasNumberDisplayFormat:B,showQuranReferences:E,displayType:O,referenceLanguage:S,readingLanguage:f,readingControls:N,pageControl:D,volume:c,setVolume:R,autoScrollText:g,setAutoScrollText:M,audioLanguage:d,setAudioLanguage:F,audioOtherLanguage:p,setAudioOtherLanguage:k}=w.useContext($),{headerBGColor:U,mainBGColor:y,altTextColor:C}=tt(n),h=Z(),H=s=>{const e=s.target.value;k(e)},P=[{value:"en",label:o("English")},{value:"dutch",label:o("Dutch")}],V=[{value:S,label:o("Original Language")},{value:f,label:o("Translation")},{value:x.OTHER,disable:!0,label:t.jsx(ct,{label:"",value:p||x.TRANSLATION,disabled:!0,options:P,backgroundColor:y,textColor:C,onChange:H})}],K=()=>t.jsxs(dt,{style:{backgroundColor:y},children:[t.jsx(pt,{children:t.jsx(it,{label:o("Volume"),defaultValue:c,step:5,labelValue:!0,onChange:R})}),t.jsx(mt,{children:t.jsx(ot,{label:o("Auto Scroll"),value:g,labelValue:!0,onChange:M})}),t.jsxs(ht,{children:[t.jsx(xt,{children:t.jsx(at,{fontFamily:"Inter",color:C,children:o("Language")})}),t.jsx(lt,{value:d||x.TRANSLATION,options:V,onChange:F})]}),t.jsx(rt,{})]}),G=()=>{h(-1)},W=()=>{if(u.currentUser)J();else{const s=localStorage.getItem("settings");if(s){const e=JSON.parse(s);e.volume=c,e.autoScrollText=g,e.audioLanguage=d,e.audioOtherLanguage=p,localStorage.setItem("settings",JSON.stringify(e))}else{const q=JSON.stringify({textSize:T,theme:n,startAyasOnNewLine:I,showAyasNumbers:_,ayasNumberDisplayFormat:B,showQuranReferences:E,displayType:O,referenceLanguage:S,readingLanguage:f,readingControls:N,pageControl:D,volume:c,autoScrollText:g,audioLanguage:d,audioOtherLanguage:p});localStorage.setItem("settings",q)}v.custom(e=>t.jsx(j,{text:o("Setting Alert Description"),offset:70,visible:e.visible})),b()}},b=()=>{h(-1)},J=()=>{m(!0),A.updateSettings({soundSettings:{volume:c,autoScrollText:g,language:d,other:p}}).then(s=>{m(!1),s&&u.dispatch({type:et.SET_CURRENT_USER,payload:{user:s}}),b()}).catch(s=>{m(!1),s.status==401&&s.response.data.message==z&&(v.custom(e=>t.jsx(j,{text:o(s.response.data.message),visible:e.visible})),A.logout(),h("/login"))})},Q=()=>t.jsx(ut,{footerImg:i.sound_setting_subtract,closeImg:n==r.DEFAULT||n==r.DARK?i.close2:n==r.BLACK_AND_WHITE?i.close2_BAW:n==r.SAPPHIRE?i.close2_sapphire:i.close2_easyocean,tickImg:n==r.DEFAULT||n==r.DARK?i.tickBtn:n==r.BLACK_AND_WHITE?i.tickBtn_BWA:n==r.SAPPHIRE?i.tickBtn_sapphire:i.tickBtn_easyocean,onClose:G,onSave:W});return t.jsxs(t.Fragment,{children:[t.jsxs(gt,{style:{backgroundColor:U},children:[t.jsx(st,{title:o("Sound Settings"),icon:n==r.EASY_OCEAN?i.sound_setting_easyocean:i.sound_setting}),K()]}),Q(),L&&t.jsx(nt,{})]})}function ft(u){return{currentUser:u.user.currentUser}}const It=X(ft)(St);export{It as default};
>>>>>>>> Stashed changes:frontend/assets/index-CQigGu1M.js
