if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>i(e,l),d={module:{uri:l},exports:o,require:a};s[l]=Promise.all(n.map((e=>d[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AdminPortal-D2iKVxmf.js",revision:null},{url:"assets/App-BFV56H4Y.css",revision:null},{url:"assets/App-DTzzp06Q.js",revision:null},{url:"assets/book.services-Bn47ydqa.js",revision:null},{url:"assets/createTheme-Ba04gsge.js",revision:null},{url:"assets/index-B72tsVCV.js",revision:null},{url:"assets/index-Bnj03mBb.js",revision:null},{url:"assets/index-Bs8aZ_cF.js",revision:null},{url:"assets/index-BztuIasR.js",revision:null},{url:"assets/index-Ca8vopTa.js",revision:null},{url:"assets/index-D2YEa6Is.js",revision:null},{url:"assets/index-DgH7SjrI.js",revision:null},{url:"assets/index-DKv2oAg9.js",revision:null},{url:"assets/index-DQDc5d5w.js",revision:null},{url:"assets/index-DtjIUY70.js",revision:null},{url:"assets/index-GotedZ9Y.js",revision:null},{url:"assets/Root-Q2jMl-lm.js",revision:null},{url:"assets/TableContainer-DFnTiwdn.js",revision:null},{url:"assets/translator.services-Du_TYjtP.js",revision:null},{url:"index.html",revision:"68130fe4f93bad311766e8e8beb18471"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"d5860651f3562f5f0a99ede806697202"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
