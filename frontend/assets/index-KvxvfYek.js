<<<<<<<< Updated upstream:frontend/assets/index-BttVRS8g.js
import{b as l,j as e,Q as E,ab as S}from"./index-Dibo9daf.js";import{S as g,g as d,a as T,b as v,s as x,B as A,u as j,c as _,d as I,e as u}from"./App-OdTok9eR.js";import{u as R}from"./useOrientation-DblSmbFg.js";import{B as U,S as F,L as H,T as G,H as O,a as f,b as N,c as w}from"./styled-x467FYy0.js";import{T as h,I as b}from"./images-DnnUPU9h.js";import{B as z}from"./Button-B6RML2wq.js";import{L as M}from"./index-CrILDL9r.js";import{S as P}from"./index-CtOr8J5A.js";import{a as K}from"./auth.service-DyFIPSgW.js";import"./index-BKuUYryJ.js";import"./axios-BimPEqV4.js";function W({label:t,checked:o,onChange:a}){const{theme:s}=l.useContext(g),{altTextColor:n}=d(s);return e.jsx(T,{control:e.jsx(v,{checked:o,bordercolor:n,onChange:a}),label:e.jsx(h,{color:n,children:t}),style:{color:n},bordercolor:n})}const D=x(A)({display:"flex"}),Q=x(D)({justifyContent:"center",alignItems:"center"}),Y=x(Q)({width:"100dvw",height:"100dvh"});function q(t){const{t:o}=j(),{theme:a}=l.useContext(g),{headerBGColor:s,logoTextColor:n}=d(a);return e.jsxs(U,{style:{backgroundColor:s},children:[e.jsx(F,{style:{color:n},onClick:t.onLoginClicked,children:t.isLoggedIn?o("Log Out"):o("Log In")}),e.jsx(H,{src:a==E.EASY_OCEAN?b.main_logo_easyocean:b.main_logo}),e.jsx(G,{children:e.jsx(h,{color:n,fontFamily:"Buenard",fontWeight:"700",textAlign:"center",fontSize:36,lineHeight:47,children:o("Welcome")})})]})}function J(t){const{t:o,i18n:a}=j(),{theme:s}=l.useContext(g),{mainBGColor:n,altTextColor:c}=d(s),m=[{value:"en",label:o("English")},{value:"ar",label:o("Arabic")}],[y,C]=l.useState(m[0].value),[L,p]=l.useState(!1);l.useEffect(()=>{const r=localStorage.getItem(S);r&&r.length>0&&C(r)},[]);const k=r=>{const i=r.target.value;C(i),a.changeLanguage(i),localStorage.setItem(S,i)},B=r=>{p(r.target.checked)};return e.jsxs(O,{style:{backgroundColor:n},children:[e.jsx(h,{color:c,children:o("Reading Language")}),e.jsx(f,{children:e.jsx(P,{label:"",options:m,value:y,textColor:c,backgroundColor:n,onChange:k})}),e.jsx(f,{children:e.jsx(W,{label:o("Keep App"),checked:L,onChange:B})}),e.jsx(N,{children:e.jsx(z,{label:o("Start"),onClick:t.onStartClicked,size:"medium"})}),e.jsx(w,{children:e.jsx(M,{label:o("Save App")})})]})}function V(t){const o=R(),a=I(),s=()=>{a("/login")},n=()=>{t.dispatch({type:u.RESET_USER}),t.dispatch({type:u.RESET_BOOK}),t.dispatch({type:u.RESET_PAGE_STATUS}),K.logout()},c=()=>{a("/library")};return e.jsxs(Y,{flexDirection:o?"column":"row",children:[e.jsx(q,{onLoginClicked:t.currentUser?n:s,isLoggedIn:t.currentUser!=null}),e.jsx(J,{onStartClicked:c})]})}function X(t){return{currentUser:t.user.currentUser}}const ie=_(X)(V);export{ie as default};
========
import{b as l,j as e,Q as E,ab as S}from"./index-DiZbyTx4.js";import{S as g,g as d,a as T,b as v,s as x,B as A,u as j,c as _,d as I,e as u}from"./App-C3cg7l-F.js";import{u as R}from"./useOrientation-z-T5HWup.js";import{B as U,S as F,L as H,T as G,H as O,a as f,b as N,c as w}from"./styled-Bal6liqI.js";import{T as h,I as b}from"./images-CdwsV4BQ.js";import{B as z}from"./Button-OFBmCg6q.js";import{L as M}from"./index-heKUEO5A.js";import{S as P}from"./index-DwTe-0Gq.js";import{a as K}from"./auth.service-BLGzcuEQ.js";import"./index-B61ytNri.js";import"./axios-BimPEqV4.js";function W({label:t,checked:o,onChange:a}){const{theme:s}=l.useContext(g),{altTextColor:n}=d(s);return e.jsx(T,{control:e.jsx(v,{checked:o,bordercolor:n,onChange:a}),label:e.jsx(h,{color:n,children:t}),style:{color:n},bordercolor:n})}const D=x(A)({display:"flex"}),Q=x(D)({justifyContent:"center",alignItems:"center"}),Y=x(Q)({width:"100dvw",height:"100dvh"});function q(t){const{t:o}=j(),{theme:a}=l.useContext(g),{headerBGColor:s,logoTextColor:n}=d(a);return e.jsxs(U,{style:{backgroundColor:s},children:[e.jsx(F,{style:{color:n},onClick:t.onLoginClicked,children:t.isLoggedIn?o("Log Out"):o("Log In")}),e.jsx(H,{src:a==E.EASY_OCEAN?b.main_logo_easyocean:b.main_logo}),e.jsx(G,{children:e.jsx(h,{color:n,fontFamily:"Buenard",fontWeight:"700",textAlign:"center",fontSize:36,lineHeight:47,children:o("Welcome")})})]})}function J(t){const{t:o,i18n:a}=j(),{theme:s}=l.useContext(g),{mainBGColor:n,altTextColor:c}=d(s),m=[{value:"en",label:o("English")},{value:"ar",label:o("Arabic")}],[y,C]=l.useState(m[0].value),[L,p]=l.useState(!1);l.useEffect(()=>{const r=localStorage.getItem(S);r&&r.length>0&&C(r)},[]);const k=r=>{const i=r.target.value;C(i),a.changeLanguage(i),localStorage.setItem(S,i)},B=r=>{p(r.target.checked)};return e.jsxs(O,{style:{backgroundColor:n},children:[e.jsx(h,{color:c,children:o("Reading Language")}),e.jsx(f,{children:e.jsx(P,{label:"",options:m,value:y,textColor:c,backgroundColor:n,onChange:k})}),e.jsx(f,{children:e.jsx(W,{label:o("Keep App"),checked:L,onChange:B})}),e.jsx(N,{children:e.jsx(z,{label:o("Start"),onClick:t.onStartClicked,size:"medium"})}),e.jsx(w,{children:e.jsx(M,{label:o("Save App")})})]})}function V(t){const o=R(),a=I(),s=()=>{a("/login")},n=()=>{t.dispatch({type:u.RESET_USER}),t.dispatch({type:u.RESET_BOOK}),t.dispatch({type:u.RESET_PAGE_STATUS}),K.logout()},c=()=>{a("/library")};return e.jsxs(Y,{flexDirection:o?"column":"row",children:[e.jsx(q,{onLoginClicked:t.currentUser?n:s,isLoggedIn:t.currentUser!=null}),e.jsx(J,{onStartClicked:c})]})}function X(t){return{currentUser:t.user.currentUser}}const ie=_(X)(V);export{ie as default};
>>>>>>>> Stashed changes:frontend/assets/index-KvxvfYek.js
