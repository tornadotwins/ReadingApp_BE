if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let u={};const o=s=>i(s,l),a={module:{uri:l},exports:u,require:o};e[l]=Promise.all(n.map((s=>a[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-e3490c72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/App-BvP8-UJS.css",revision:null},{url:"assets/App-CYPVnJ6q.js",revision:null},{url:"assets/auth.service-CKjIlJCz.js",revision:null},{url:"assets/axios-upsvKRUO.js",revision:null},{url:"assets/book.service-S16YXrWz.js",revision:null},{url:"assets/BookHeader-DTFmsOjz.js",revision:null},{url:"assets/bookmark.service-DYWn5kpn.js",revision:null},{url:"assets/Button-DITX7ZgL.js",revision:null},{url:"assets/index-60dDQu8s.js",revision:null},{url:"assets/index-6LVyr2zd.js",revision:null},{url:"assets/index-B3rYF5Yp.js",revision:null},{url:"assets/index-BcKIRa4A.js",revision:null},{url:"assets/index-Bw9CZrpY.js",revision:null},{url:"assets/index-ByWUjMlb.js",revision:null},{url:"assets/index-BZfEO3Mj.js",revision:null},{url:"assets/index-C1foUO9V.js",revision:null},{url:"assets/index-C7guyaQG.js",revision:null},{url:"assets/index-CCGGC3FQ.css",revision:null},{url:"assets/index-CKFRYeE5.js",revision:null},{url:"assets/index-CNlYWNrA.js",revision:null},{url:"assets/index-CpX6mCs3.js",revision:null},{url:"assets/index-CrNn4DKa.js",revision:null},{url:"assets/index-CZfCXbNh.js",revision:null},{url:"assets/index-D2Hy1R8S.js",revision:null},{url:"assets/index-DBAap7_B.js",revision:null},{url:"assets/index-DCC_lD40.js",revision:null},{url:"assets/index-DF42ULnE.js",revision:null},{url:"assets/index-DgmicFax.js",revision:null},{url:"assets/index-Do4WDPCB.js",revision:null},{url:"assets/index-DqZgJ8wv.js",revision:null},{url:"assets/index-DZDNH_an.js",revision:null},{url:"assets/index-SpW-hVoX.js",revision:null},{url:"assets/index-swpIC5lz.js",revision:null},{url:"assets/index-uURKhJed.js",revision:null},{url:"assets/index.esm-BHJ9t_if.js",revision:null},{url:"assets/Root-tda9_7r_.js",revision:null},{url:"assets/styled-DXP_IIXM.js",revision:null},{url:"assets/useOrientation-Dv1XsRD_.js",revision:null},{url:"assets/VerifyRecaptchaProvider-DrqVSNF0.js",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"index.html",revision:"7fd48d101fb97c1bac73d198bcec5b4e"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"assets/ajax-loader-BcnMEykj.gif",revision:null},{url:"assets/frame-Cut40zwQ.svg",revision:null},{url:"assets/frame2-DPU6g07m.svg",revision:null},{url:"assets/icon_bookmark_shine_dark-CGKtxO8m.svg",revision:null},{url:"assets/icon_bookmark_shine_white-D-Iq1myF.svg",revision:null},{url:"assets/main_heaven_logo_easyocean-BVz3ov7z.svg",revision:null},{url:"assets/main_heaven_logo-CW12YAq4.svg",revision:null},{url:"assets/main_logo_easyocean_-C7Cu9RmH.svg",revision:null},{url:"assets/main_logo-BMjU5KEx.svg",revision:null},{url:"assets/slick-BlzDm7g2.svg",revision:null},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"cover1.svg",revision:"88f262dd00fe33c98bc341b008c71186"},{url:"cover2.svg",revision:"1694b6e4c16c7311208ef24b43614ad4"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"Group 21.svg",revision:"775f4ceb18645a509aa667a36491b96c"},{url:"Group 22.svg",revision:"1af3a9d49e9e62fd2ea63968551819fe"},{url:"Group 28.svg",revision:"133afd90369dc543a2d79e8c9f5f8342"},{url:"Group 38.svg",revision:"bd671cc6fde5ef8c8df1e0f61a705e55"},{url:"Group 70.svg",revision:"3f341cef8a58d62847c881702dca6f24"},{url:"Group 74.svg",revision:"80b6d3f3ff134d40afa58fe5a4879964"},{url:"Group 79.svg",revision:"fb95fed4846ed03eddeaff281eacc145"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"Round Button.svg",revision:"99fc983ac34ae2a22085bb88c78ade6f"},{url:"Round Button2.svg",revision:"db3dc770905236627821f0507d996019"},{url:"Solid.svg",revision:"c7aece0907e6ded99b8997b3452e23fe"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"d5860651f3562f5f0a99ede806697202"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
