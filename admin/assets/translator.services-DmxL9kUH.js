var l=Object.defineProperty;var u=(o,t,a)=>t in o?l(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;var n=(o,t,a)=>u(o,typeof t!="symbol"?t+"":t,a);import{aa as p}from"./App-Cg6pEGzx.js";import{b as c}from"./index-Cio0BdKC.js";class i{constructor(){n(this,"saveBook",t=>new Promise((a,s)=>{const r=c+"/books/saveBookByFile";p.post(r,t).then(e=>{a(e.data)}).catch(e=>{s(e)})}));n(this,"getAllAppTexts",()=>new Promise((t,a)=>{const s=c+"/translator/appTexts";p.get(s).then(r=>{t(r.data)}).catch(r=>{a(r)})}));n(this,"updateAppTextPage",t=>new Promise((a,s)=>{const r=c+"/translator/appTextPage";p.put(r,t).then(e=>{a(e.data)}).catch(e=>{s(e)})}));n(this,"updateAppTexts",t=>new Promise((a,s)=>{const r=c+"/translator/appTexts";p.put(r,t).then(e=>{a(e.data)}).catch(e=>{s(e)})}))}}const P=new i;export{P as t};
