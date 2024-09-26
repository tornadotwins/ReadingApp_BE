import{b as l,j as e,Q as E,ab as S}from"./index-DdOVV231.js";import{S as d,g as x,a as T,b as v,s as i,B as A,u as j,c as _,d as I,e as u}from"./App-Rf8IX9HY.js";import{u as R}from"./useOrientation-Bt1FdsxT.js";import{B as U,S as F,L as H,T as G,H as O,a as f,b as w,c as N}from"./styled-DmUOq0qq.js";import{T as h,I as b}from"./images-oyjjA5OD.js";import{B as z}from"./Button-Dfb6jPly.js";import{L as M}from"./index-CjxSkmtY.js";import{S as P}from"./index-CstNa9bO.js";import{a as K}from"./auth.service-CXYrySRk.js";import"./index-BvC2UvRr.js";import"./axios-BimPEqV4.js";function W({label:t,checked:o,onChange:a}){const{theme:s}=l.useContext(d),{altTextColor:n}=x(s);return e.jsx(T,{control:e.jsx(v,{checked:o,bordercolor:n,onChange:a}),label:e.jsx(h,{color:n,children:t}),style:{color:n},bordercolor:n})}i("img")({width:"10%",height:"10%",margin:4});const D=i(A)({display:"flex"}),Q=i(D)({justifyContent:"center",alignItems:"center"}),Y=i(Q)({width:"100vw",height:"100vh"});function q(t){const{t:o}=j(),{theme:a}=l.useContext(d),{headerBGColor:s,logoTextColor:n}=x(a);return e.jsxs(U,{style:{backgroundColor:s},children:[e.jsx(F,{style:{color:n},onClick:t.onLoginClicked,children:t.isLoggedIn?o("Log Out"):o("Log In")}),e.jsx(H,{src:a==E.EASY_OCEAN?b.main_logo_easyocean:b.main_logo}),e.jsx(G,{children:e.jsx(h,{color:n,fontFamily:"Buenard",fontWeight:"700",textAlign:"center",fontSize:36,lineHeight:47,children:o("Welcome")})})]})}function J(t){const{t:o,i18n:a}=j(),{theme:s}=l.useContext(d),{mainBGColor:n,altTextColor:c}=x(s),m=[{value:"en",label:o("English")},{value:"ar",label:o("Arabic")}],[y,C]=l.useState(m[0].value),[L,p]=l.useState(!1);l.useEffect(()=>{const r=localStorage.getItem(S);r&&r.length>0&&C(r)},[]);const k=r=>{const g=r.target.value;C(g),a.changeLanguage(g),localStorage.setItem(S,g)},B=r=>{p(r.target.checked)};return e.jsxs(O,{style:{backgroundColor:n},children:[e.jsx(h,{color:c,children:o("Reading Language")}),e.jsx(f,{children:e.jsx(P,{label:"",options:m,value:y,textColor:c,backgroundColor:n,onChange:k})}),e.jsx(f,{children:e.jsx(W,{label:o("Keep App"),checked:L,onChange:B})}),e.jsx(w,{children:e.jsx(z,{label:o("Start"),onClick:t.onStartClicked,size:"medium"})}),e.jsx(N,{children:e.jsx(M,{label:o("Save App")})})]})}function V(t){const o=R(),a=I(),s=()=>{a("/login")},n=()=>{t.dispatch({type:u.RESET_USER}),t.dispatch({type:u.RESET_BOOK}),t.dispatch({type:u.RESET_PAGE_STATUS}),K.logout()},c=()=>{a("/library")};return e.jsxs(Y,{flexDirection:o?"column":"row",children:[e.jsx(q,{onLoginClicked:t.currentUser?n:s,isLoggedIn:t.currentUser!=null}),e.jsx(J,{onStartClicked:c})]})}function X(t){return{currentUser:t.user.currentUser}}const ie=_(X)(V);export{ie as default};
