var l=Object.defineProperty;var u=(o,t,e)=>t in o?l(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>u(o,typeof t!="symbol"?t+"":t,e);import{V as p}from"./App-DgmH2gVY.js";import{c}from"./index-CXQJlZNj.js";class i{constructor(){n(this,"saveBook",t=>new Promise((e,s)=>{const r=c+"/books/saveBookByFile";p.post(r,t).then(a=>{e(a.data)}).catch(a=>{s(a)})}));n(this,"getAllAppTexts",()=>new Promise((t,e)=>{const s=c+"/translator/appTexts";p.get(s).then(r=>{t(r.data)}).catch(r=>{e(r)})}));n(this,"updateAppTextPage",t=>new Promise((e,s)=>{const r=c+"/translator/appTextPage";p.put(r,t).then(a=>{e(a.data)}).catch(a=>{s(a)})}));n(this,"updateAppTexts",t=>new Promise((e,s)=>{const r=c+"/translator/appTexts";p.put(r,t).then(a=>{e(a.data)}).catch(a=>{s(a)})}))}}const P=new i;export{P as t};
