if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let u={};const o=s=>i(s,l),a={module:{uri:l},exports:u,require:o};e[l]=Promise.all(n.map((s=>a[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-7cfec069"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/App-Br3UqI07.css",revision:null},{url:"assets/App-CijLn3vT.js",revision:null},{url:"assets/auth.service-B_opaex2.js",revision:null},{url:"assets/axios-BimPEqV4.js",revision:null},{url:"assets/book.service-CcShiLCx.js",revision:null},{url:"assets/bookmark.service-6uRQginb.js",revision:null},{url:"assets/Button-DpKcEnXQ.js",revision:null},{url:"assets/images-DzVw58WC.js",revision:null},{url:"assets/index--_mK_LEo.js",revision:null},{url:"assets/index-1tflKGWf.js",revision:null},{url:"assets/index-B1-103A2.js",revision:null},{url:"assets/index-B9010Mkm.js",revision:null},{url:"assets/index-BBGx656F.js",revision:null},{url:"assets/index-BCyRBYFB.js",revision:null},{url:"assets/index-BIn_4sVA.js",revision:null},{url:"assets/index-BkkDn3dB.js",revision:null},{url:"assets/index-BLFn5ph9.js",revision:null},{url:"assets/index-Brw-GcCS.js",revision:null},{url:"assets/index-CDV0AJQq.js",revision:null},{url:"assets/index-CpKUgeT6.js",revision:null},{url:"assets/index-CYitSDh-.js",revision:null},{url:"assets/index-d3VIP44R.js",revision:null},{url:"assets/index-D44CcyU6.js",revision:null},{url:"assets/index-D6_zt9O1.css",revision:null},{url:"assets/index-D6J21BIi.js",revision:null},{url:"assets/index-DLJb24iN.js",revision:null},{url:"assets/index-DLnRJfSY.js",revision:null},{url:"assets/index-eQASXctR.js",revision:null},{url:"assets/index-HOTJLeiW.js",revision:null},{url:"assets/index-tmK9sPuV.js",revision:null},{url:"assets/index.esm-Bm0bF3fp.js",revision:null},{url:"assets/Root-BJsYSfpY.js",revision:null},{url:"assets/styled-Bzj8RJ1q.js",revision:null},{url:"assets/useOrientation-YosYZIOA.js",revision:null},{url:"assets/VerifyRecaptchaProvider-B2JYnPG4.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"fcdde742f9c497afcd2f8a4ac63fe337"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"assets/ajax-loader-BcnMEykj.gif",revision:null},{url:"assets/frame-Cut40zwQ.svg",revision:null},{url:"assets/frame2-DPU6g07m.svg",revision:null},{url:"assets/icon_bookmark_shine_dark-CGKtxO8m.svg",revision:null},{url:"assets/icon_bookmark_shine_white-D-Iq1myF.svg",revision:null},{url:"assets/main_logo_easyocean_-C7Cu9RmH.svg",revision:null},{url:"assets/main_logo-BMjU5KEx.svg",revision:null},{url:"assets/slick-BlzDm7g2.svg",revision:null},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"cover1.svg",revision:"88f262dd00fe33c98bc341b008c71186"},{url:"cover2.svg",revision:"1694b6e4c16c7311208ef24b43614ad4"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"Group 21.svg",revision:"775f4ceb18645a509aa667a36491b96c"},{url:"Group 22.svg",revision:"1af3a9d49e9e62fd2ea63968551819fe"},{url:"Group 28.svg",revision:"133afd90369dc543a2d79e8c9f5f8342"},{url:"Group 38.svg",revision:"bd671cc6fde5ef8c8df1e0f61a705e55"},{url:"Group 70.svg",revision:"3f341cef8a58d62847c881702dca6f24"},{url:"Group 74.svg",revision:"80b6d3f3ff134d40afa58fe5a4879964"},{url:"Group 79.svg",revision:"fb95fed4846ed03eddeaff281eacc145"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"Round Button.svg",revision:"99fc983ac34ae2a22085bb88c78ade6f"},{url:"Round Button2.svg",revision:"db3dc770905236627821f0507d996019"},{url:"Solid.svg",revision:"c7aece0907e6ded99b8997b3452e23fe"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"d5860651f3562f5f0a99ede806697202"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
