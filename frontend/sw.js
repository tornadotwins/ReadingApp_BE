if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let u={};const o=s=>i(s,l),a={module:{uri:l},exports:u,require:o};e[l]=Promise.all(r.map((s=>a[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-7cfec069"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/App-Br3UqI07.css",revision:null},{url:"assets/App-CdfVFWXq.js",revision:null},{url:"assets/auth.service-DKp0q1yr.js",revision:null},{url:"assets/axios-BimPEqV4.js",revision:null},{url:"assets/book.service-DkAEXqxu.js",revision:null},{url:"assets/bookmark.service-_Y1kzXaQ.js",revision:null},{url:"assets/Button-BhssXNPa.js",revision:null},{url:"assets/images-Dr7fGfSu.js",revision:null},{url:"assets/index-AYuLMSBJ.js",revision:null},{url:"assets/index-B79RY0Jr.js",revision:null},{url:"assets/index-BIIDZ3GK.js",revision:null},{url:"assets/index-BkZg5WI7.css",revision:null},{url:"assets/index-C1ZvFiQZ.js",revision:null},{url:"assets/index-C44bKNuv.js",revision:null},{url:"assets/index-CGqCR7WH.js",revision:null},{url:"assets/index-Cihvvorh.js",revision:null},{url:"assets/index-CLadugGU.js",revision:null},{url:"assets/index-DBKazMBB.js",revision:null},{url:"assets/index-DE5Ft5hi.js",revision:null},{url:"assets/index-DeRRUUR1.js",revision:null},{url:"assets/index-DVsF-FKn.js",revision:null},{url:"assets/index-DXD7I4zc.js",revision:null},{url:"assets/index-DZzpTX2c.js",revision:null},{url:"assets/index-gfhuVrLM.js",revision:null},{url:"assets/index-j55IJMi7.js",revision:null},{url:"assets/index-klQFTeRX.js",revision:null},{url:"assets/index-MD6zRVqh.js",revision:null},{url:"assets/index-oYoQThXz.js",revision:null},{url:"assets/index-S3JvWuJb.js",revision:null},{url:"assets/index.esm-Yys9XrHy.js",revision:null},{url:"assets/Root-9lIWimAH.js",revision:null},{url:"assets/styled-fGsHA3qv.js",revision:null},{url:"assets/useOrientation-7czoHg5h.js",revision:null},{url:"assets/VerifyRecaptchaProvider-DkA1vxoN.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"be386b00c7e5a2acc43b702364916495"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"assets/ajax-loader-BcnMEykj.gif",revision:null},{url:"assets/frame-Cut40zwQ.svg",revision:null},{url:"assets/frame2-DPU6g07m.svg",revision:null},{url:"assets/icon_bookmark_shine_dark-CGKtxO8m.svg",revision:null},{url:"assets/icon_bookmark_shine_white-D-Iq1myF.svg",revision:null},{url:"assets/main_logo_easyocean_-C7Cu9RmH.svg",revision:null},{url:"assets/main_logo-BMjU5KEx.svg",revision:null},{url:"assets/slick-BlzDm7g2.svg",revision:null},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"cover1.svg",revision:"88f262dd00fe33c98bc341b008c71186"},{url:"cover2.svg",revision:"1694b6e4c16c7311208ef24b43614ad4"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"Group 21.svg",revision:"775f4ceb18645a509aa667a36491b96c"},{url:"Group 22.svg",revision:"1af3a9d49e9e62fd2ea63968551819fe"},{url:"Group 28.svg",revision:"133afd90369dc543a2d79e8c9f5f8342"},{url:"Group 38.svg",revision:"bd671cc6fde5ef8c8df1e0f61a705e55"},{url:"Group 70.svg",revision:"3f341cef8a58d62847c881702dca6f24"},{url:"Group 74.svg",revision:"80b6d3f3ff134d40afa58fe5a4879964"},{url:"Group 79.svg",revision:"fb95fed4846ed03eddeaff281eacc145"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"Round Button.svg",revision:"99fc983ac34ae2a22085bb88c78ade6f"},{url:"Round Button2.svg",revision:"db3dc770905236627821f0507d996019"},{url:"Solid.svg",revision:"c7aece0907e6ded99b8997b3452e23fe"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"d5860651f3562f5f0a99ede806697202"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
