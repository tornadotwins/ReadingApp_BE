if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const o=e=>i(e,r),a={module:{uri:r},exports:u,require:o};s[r]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(l(...e),u)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AdminPortal-BDtFv9IK.js",revision:null},{url:"assets/App-BFV56H4Y.css",revision:null},{url:"assets/App-DgwGRK2q.js",revision:null},{url:"assets/book.services-CoePUTP8.js",revision:null},{url:"assets/CloudUpload-QQ6czdag.js",revision:null},{url:"assets/createTheme-BSKTWGbl.js",revision:null},{url:"assets/DialogTitle-CYgyMsJi.js",revision:null},{url:"assets/images-DS7q_XIW.js",revision:null},{url:"assets/index-BgT-arSa.js",revision:null},{url:"assets/index-BS1zScvT.js",revision:null},{url:"assets/index-BXp3iY0b.js",revision:null},{url:"assets/index-C9_GSyFD.js",revision:null},{url:"assets/index-CBUYveq6.js",revision:null},{url:"assets/index-CcRhye21.js",revision:null},{url:"assets/index-CIboazgt.js",revision:null},{url:"assets/index-CodpcsN6.js",revision:null},{url:"assets/index-CxAUJ2vr.js",revision:null},{url:"assets/index-D7GcwT2N.js",revision:null},{url:"assets/index-DmNN3g8C.js",revision:null},{url:"assets/index-DqDM89HG.js",revision:null},{url:"assets/index-DqhYgfP0.js",revision:null},{url:"assets/index-DXD-G_9H.js",revision:null},{url:"assets/index-fkf3O8dn.js",revision:null},{url:"assets/index-plc2CRKt.js",revision:null},{url:"assets/index-QlizjrJf.js",revision:null},{url:"assets/index-Y3Gv3y7c.js",revision:null},{url:"assets/index-ZN963C9n.js",revision:null},{url:"assets/Root-DcvCYSH4.js",revision:null},{url:"assets/TableContainer-Bmoi8uMP.js",revision:null},{url:"assets/translator.services-ogBuvMc_.js",revision:null},{url:"index.html",revision:"861bd8d8cc2d4ccab8a75aab38e5a263"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"d5860651f3562f5f0a99ede806697202"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
