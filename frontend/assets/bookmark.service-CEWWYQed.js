var n=Object.defineProperty;var i=(r,a,e)=>a in r?n(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e;var m=(r,a,e)=>i(r,typeof a!="symbol"?a+"":a,e);import{a as k}from"./index-C88pvD_q.js";import{au as d}from"./index-a5M0-iHg.js";class c{constructor(){m(this,"fetchBookmarks",()=>new Promise((a,e)=>{const s=d+"/bookmarks";k.get(s).then(o=>{o.data?a(o.data):e(o.data.error)}).catch(o=>{e(o)})}));m(this,"saveBookmark",a=>new Promise((e,s)=>{const o=d+"/bookmarks";k.post(o,a).then(t=>{t.data?e(t.data):s(t.data.error)}).catch(t=>{s(t)})}));m(this,"deleteBookmark",a=>new Promise((e,s)=>{const o=d+`/bookmarks/${a}`;k.delete(o).then(t=>{t.data?e(t.data):s(t.data.error)}).catch(t=>{s(t)})}))}getErrorMessage(a){let e=a.message;return a.response&&a.response.data&&a.response.data.message&&(e=a.response.data.message),e}}const g=new c;export{g as b};
