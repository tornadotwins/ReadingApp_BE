var d=Object.defineProperty;var l=(u,a,r)=>a in u?d(u,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[a]=r;var s=(u,a,r)=>l(u,typeof a!="symbol"?a+"":a,r);import{O as v,j as f}from"./createTheme-xUkJRe14.js";import{r as m,V as n}from"./App-DgmH2gVY.js";import{c as i}from"./index-CXQJlZNj.js";var c={},g=v;Object.defineProperty(c,"__esModule",{value:!0});var y=c.default=void 0,h=g(m()),j=f;y=c.default=(0,h.default)((0,j.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");class w{constructor(){s(this,"saveJourneyStage",a=>new Promise((r,t)=>{const o=i+"/journey/save-stage";n.post(o,a).then(e=>{e.data?r(e.data):t(e.data.error)}).catch(e=>{t(e)})}));s(this,"saveArticle",a=>new Promise((r,t)=>{const o=i+"/journey/save-article";n.post(o,a).then(e=>{e.data?r(e.data):t(e.data.error)}).catch(e=>t(e))}));s(this,"getJourneyStage",a=>new Promise((r,t)=>{const o=i+`/journey/${a}/journeys`;n.get(o).then(e=>{e.data?r(e.data):t(e.data.error)}).catch(e=>t(e.response.data.message))}));s(this,"getArticle",a=>new Promise((r,t)=>{const o=i+`/journey/${a}/article`;n.get(o).then(e=>{e.data?r(e.data):t(e.data.error)}).catch(e=>t(e.response.data.message))}))}}const S=new w;export{y as d,S as j};
