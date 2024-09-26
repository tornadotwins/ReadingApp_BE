var d=Object.defineProperty;var n=(g,a,e)=>a in g?d(g,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):g[a]=e;var o=(g,a,e)=>n(g,typeof a!="symbol"?a+"":a,e);import{a as i}from"./axios-BimPEqV4.js";import{ac as h}from"./index-DKQ0p290.js";class f{constructor(){o(this,"fetchLibrary",()=>new Promise((a,e)=>{const r=h+"/books/libraries";i.get(r).then(s=>{s.data?a(s.data.libraries):e(s.data.error)}).catch(s=>{e(this.getErrorMessage(s))})}));o(this,"fetchSubBooks",a=>new Promise((e,r)=>{const s=h+`/books/${a}/subbooks`;i.get(s).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));o(this,"fetchChapters",a=>new Promise((e,r)=>{const s=h+`/books/${a}/chapters`;i.get(s).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));o(this,"fetchVerses",a=>new Promise((e,r)=>{const s=h+`/books/${a}/verses`;i.get(s).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));o(this,"fetchProgressInfo",(a,e)=>new Promise((r,s)=>{const t=h+`/books/${a}/${e}/history`;i.get(t).then(c=>{c.data?r(c.data):s(c.data.error)}).catch(c=>{s(this.getErrorMessage(c))})}));o(this,"fetchHistories",a=>new Promise((e,r)=>{const s=h+`/books/${a}/histories`;i.get(s).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));o(this,"saveHistory",a=>new Promise((e,r)=>{const s=h+"/books/history";i.post(s,a).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));o(this,"fetchBookInfo",a=>new Promise((e,r)=>{const s=h+`/books/${a}/bookInfo`;i.get(s).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));o(this,"fetchSubBookInfo",a=>new Promise((e,r)=>{const s=h+`/books/${a}/subBookInfo`;i.get(s).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}))}getErrorMessage(a){let e=a.message;return a.response&&a.response.data&&a.response.data.message&&(e=a.response.data.message),e}}const k=new f;export{k as b};