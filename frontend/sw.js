if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let u={};const o=s=>i(s,l),a={module:{uri:l},exports:u,require:o};e[l]=Promise.all(n.map((s=>a[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-e3490c72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/App-5hRNF0Kz.js",revision:null},{url:"assets/App-BvP8-UJS.css",revision:null},{url:"assets/ArrowBack-snBWKD1J.js",revision:null},{url:"assets/auth.service-BtCcpcZG.js",revision:null},{url:"assets/axios-upsvKRUO.js",revision:null},{url:"assets/book.service-8_QzKaYT.js",revision:null},{url:"assets/bookmark.service-Cam2lCeS.js",revision:null},{url:"assets/Button-D4_187bR.js",revision:null},{url:"assets/index-2dR-mFA5.js",revision:null},{url:"assets/index-4XzJJIei.js",revision:null},{url:"assets/index-ARCKq-87.js",revision:null},{url:"assets/index-BoPq76h-.js",revision:null},{url:"assets/index-BQdtrt1D.js",revision:null},{url:"assets/index-BQWfcSrn.js",revision:null},{url:"assets/index-Bvn0etj9.js",revision:null},{url:"assets/index-ByN6BtDr.js",revision:null},{url:"assets/index-C7cnU4RX.js",revision:null},{url:"assets/index-C9Hnqcot.js",revision:null},{url:"assets/index-Cbn7jESH.js",revision:null},{url:"assets/index-CCGGC3FQ.css",revision:null},{url:"assets/index-CDcX9Eyi.js",revision:null},{url:"assets/index-cpLOejuB.js",revision:null},{url:"assets/index-CukWnGC9.js",revision:null},{url:"assets/index-CyGHgO_m.js",revision:null},{url:"assets/index-D_kC9V0O.js",revision:null},{url:"assets/index-DCLDLoDf.js",revision:null},{url:"assets/index-DGkRlVra.js",revision:null},{url:"assets/index-DH0YrtrS.js",revision:null},{url:"assets/index-DI-5wyQA.js",revision:null},{url:"assets/index-DIFmc0At.js",revision:null},{url:"assets/index-Dl1XXupQ.js",revision:null},{url:"assets/index-DlaZmIXL.js",revision:null},{url:"assets/index-Dt0bMg8C.js",revision:null},{url:"assets/index-DU4ngp4l.js",revision:null},{url:"assets/index-DweTIbMt.js",revision:null},{url:"assets/index-DWyN_xSY.js",revision:null},{url:"assets/index.esm-Ch2U2hCB.js",revision:null},{url:"assets/Root-DxUXU_KO.js",revision:null},{url:"assets/styled-BvcWM4y5.js",revision:null},{url:"assets/useOrientation-C489smeT.js",revision:null},{url:"assets/VerifyRecaptchaProvider-C91nbt7f.js",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"index.html",revision:"dba2a553e3dfa46e7eef14703780aecf"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"assets/ajax-loader-BcnMEykj.gif",revision:null},{url:"assets/frame-Cut40zwQ.svg",revision:null},{url:"assets/frame2-DPU6g07m.svg",revision:null},{url:"assets/icon_bookmark_shine_dark-CGKtxO8m.svg",revision:null},{url:"assets/icon_bookmark_shine_white-D-Iq1myF.svg",revision:null},{url:"assets/main_heaven_logo_easyocean-BVz3ov7z.svg",revision:null},{url:"assets/main_heaven_logo-CW12YAq4.svg",revision:null},{url:"assets/main_logo_easyocean_-C7Cu9RmH.svg",revision:null},{url:"assets/main_logo-BMjU5KEx.svg",revision:null},{url:"assets/slick-BlzDm7g2.svg",revision:null},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"cover1.svg",revision:"88f262dd00fe33c98bc341b008c71186"},{url:"cover2.svg",revision:"1694b6e4c16c7311208ef24b43614ad4"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"Group 21.svg",revision:"775f4ceb18645a509aa667a36491b96c"},{url:"Group 22.svg",revision:"1af3a9d49e9e62fd2ea63968551819fe"},{url:"Group 28.svg",revision:"133afd90369dc543a2d79e8c9f5f8342"},{url:"Group 38.svg",revision:"bd671cc6fde5ef8c8df1e0f61a705e55"},{url:"Group 70.svg",revision:"3f341cef8a58d62847c881702dca6f24"},{url:"Group 74.svg",revision:"80b6d3f3ff134d40afa58fe5a4879964"},{url:"Group 79.svg",revision:"fb95fed4846ed03eddeaff281eacc145"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"Round Button.svg",revision:"99fc983ac34ae2a22085bb88c78ade6f"},{url:"Round Button2.svg",revision:"db3dc770905236627821f0507d996019"},{url:"Solid.svg",revision:"c7aece0907e6ded99b8997b3452e23fe"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"d5860651f3562f5f0a99ede806697202"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
