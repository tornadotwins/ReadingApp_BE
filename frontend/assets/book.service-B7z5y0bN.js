var n=Object.defineProperty;var d=(c,a,e)=>a in c?n(c,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[a]=e;var s=(c,a,e)=>d(c,typeof a!="symbol"?a+"":a,e);import{a as i}from"./axios-upsvKRUO.js";import{au as h}from"./index-CwXo1Pyr.js";class f{constructor(){s(this,"fetchLibrary",()=>new Promise((a,e)=>{const r=h+"/books/libraries";i.get(r).then(o=>{o.data?a(o.data.libraries):e(o.data.error)}).catch(o=>{e(this.getErrorMessage(o))})}));s(this,"fetchSubBooks",a=>new Promise((e,r)=>{const o=h+`/books/${a}/subbooks`;i.get(o).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));s(this,"fetchChapters",a=>new Promise((e,r)=>{const o=h+`/books/${a}/chapters`;i.get(o).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));s(this,"fetchVerses",a=>new Promise((e,r)=>{const o=h+`/books/${a}/verses`;i.get(o).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));s(this,"fetchProgressInfo",(a,e)=>new Promise((r,o)=>{const t=h+`/books/${a}/${e}/history`;i.get(t).then(g=>{g.data?r(g.data):o(g.data.error)}).catch(g=>{o(this.getErrorMessage(g))})}));s(this,"fetchHistories",a=>new Promise((e,r)=>{const o=h+`/books/${a}/histories`;i.get(o).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));s(this,"saveHistory",a=>new Promise((e,r)=>{const o=h+"/books/history";i.post(o,a).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(t)})}));s(this,"fetchBookInfo",a=>new Promise((e,r)=>{const o=h+`/books/${a}/bookInfo`;i.get(o).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));s(this,"fetchSubBookInfo",a=>new Promise((e,r)=>{const o=h+`/books/${a}/subBookInfo`;i.get(o).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}));s(this,"fetchIntroVerses",a=>new Promise((e,r)=>{const o=h+`/books/${a}/intro`;i.get(o).then(t=>{t.data?e(t.data):r(t.data.error)}).catch(t=>{r(this.getErrorMessage(t))})}))}getErrorMessage(a){let e=a.message;return a.response&&a.response.data&&a.response.data.message&&(e=a.response.data.message),e}}const k=new f;export{k as b};
