var c=Object.defineProperty;var h=(d,a,o)=>a in d?c(d,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):d[a]=o;var i=(d,a,o)=>h(d,typeof a!="symbol"?a+"":a,o);import{aa as n}from"./App-6jtlpKvU.js";import{b as u}from"./index-BO_joa27.js";class b{constructor(){i(this,"getBookInfoByTitle",a=>new Promise((o,r)=>{const e=u+`/books/${a}/bookInfoByTitle`;n.get(e).then(t=>{t.data?o(t.data):r(t.data.error)}).catch(t=>{r(t)})}));i(this,"getChapterInfoByChapterId",a=>new Promise((o,r)=>{const e=u+`/books/${a}/verses`;n.get(e).then(t=>{t.data?o(t.data):r(t.data.error)}).catch(t=>{r(t)})}));i(this,"updateChapterInfo",a=>new Promise((o,r)=>{const e=u+"/books/chapter";n.put(e,a).then(t=>{t.data?o(t.data):r(t.data.error)}).catch(t=>{r(t)})}));i(this,"updateSubBookInfo",a=>new Promise((o,r)=>{const e=u+"/books/subbook";n.put(e,a).then(t=>{t.data?o(t.data):r(t.data.error)}).catch(t=>{r(t)})}))}}const s=new b;export{s as b};