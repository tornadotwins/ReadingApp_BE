var s=Object.defineProperty;var c=(u,t,e)=>t in u?s(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e;var d=(u,t,e)=>c(u,typeof t!="symbol"?t+"":t,e);import{B as f,j as h}from"./createTheme-CB6jo1iC.js";import{r as v,aa as i}from"./App-DsdcdYyt.js";import{b as l}from"./index-DGmJJfDi.js";var n={},b=f;Object.defineProperty(n,"__esModule",{value:!0});var m=n.default=void 0,p=b(v()),k=h;m=n.default=(0,p.default)((0,k.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload");class I{constructor(){d(this,"getBookInfoByTitle",t=>new Promise((e,o)=>{const r=l+`/books/${t}/bookInfoByTitle`;i.get(r).then(a=>{a.data?e(a.data):o(a.data.error)}).catch(a=>{o(a)})}));d(this,"getChapterInfoByChapterId",t=>new Promise((e,o)=>{const r=l+`/books/${t}/verses`;i.get(r).then(a=>{a.data?e(a.data):o(a.data.error)}).catch(a=>{o(a)})}));d(this,"updateChapterInfo",t=>new Promise((e,o)=>{const r=l+"/books/chapter";i.put(r,t).then(a=>{a.data?e(a.data):o(a.data.error)}).catch(a=>{o(a)})}));d(this,"updateSubBookInfo",t=>new Promise((e,o)=>{const r=l+"/books/subbook";i.put(r,t).then(a=>{a.data?e(a.data):o(a.data.error)}).catch(a=>{o(a)})}))}}const g=new I;export{g as b,m as d};
