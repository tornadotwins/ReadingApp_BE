if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),a={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>a[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-e3490c72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AdminPortal-C4hpowYT.js",revision:null},{url:"assets/App-BFV56H4Y.css",revision:null},{url:"assets/App-DgmH2gVY.js",revision:null},{url:"assets/ArrowDownward-T32kOsCl.js",revision:null},{url:"assets/book.services-CtIS8Jrz.js",revision:null},{url:"assets/CloudUpload-DZHMmWj7.js",revision:null},{url:"assets/createTheme-xUkJRe14.js",revision:null},{url:"assets/DialogTitle-fgS152Xd.js",revision:null},{url:"assets/images-VHcagXG2.js",revision:null},{url:"assets/index-B_5Kyt4f.js",revision:null},{url:"assets/index-B2HmeLVm.js",revision:null},{url:"assets/index-B6iOykOw.js",revision:null},{url:"assets/index-BEWrcJhs.js",revision:null},{url:"assets/index-BMiaP61G.js",revision:null},{url:"assets/index-BOv1NpIo.js",revision:null},{url:"assets/index-BRdRmqTr.js",revision:null},{url:"assets/index-CnSDRzD8.js",revision:null},{url:"assets/index-CQQ7Gir6.js",revision:null},{url:"assets/index-CXCbLMUH.js",revision:null},{url:"assets/index-CXQJlZNj.js",revision:null},{url:"assets/index-CyOkMTxj.js",revision:null},{url:"assets/index-D_r7mX1c.js",revision:null},{url:"assets/index-d5QDF6J-.js",revision:null},{url:"assets/index-Ddb1EfLI.js",revision:null},{url:"assets/index-DE1AOrda.js",revision:null},{url:"assets/index-DVuppfHW.js",revision:null},{url:"assets/index-FGOJoF_-.js",revision:null},{url:"assets/index-fsIv5miZ.js",revision:null},{url:"assets/index-ioUMOucX.js",revision:null},{url:"assets/index-tu-95G45.js",revision:null},{url:"assets/journey.services-_wLRZ-tM.js",revision:null},{url:"assets/PreviewCollapsibleBlock-xBWpEGzv.js",revision:null},{url:"assets/Root-CyIA9t4M.js",revision:null},{url:"assets/TableContainer-CNHKkOXJ.js",revision:null},{url:"assets/translator.services-DrE_wxVK.js",revision:null},{url:"index.html",revision:"5d9cef6bd3213c9385eb96685fa9b28e"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"d5860651f3562f5f0a99ede806697202"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
