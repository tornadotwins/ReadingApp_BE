if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const u=s=>i(s,l),a={module:{uri:l},exports:o,require:u};e[l]=Promise.all(n.map((s=>a[s]||u(s)))).then((s=>(r(...s),o)))}}define(["./workbox-7cfec069"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/App-Br3UqI07.css",revision:null},{url:"assets/App-F7j2TeW5.js",revision:null},{url:"assets/auth.service-D_94x3fL.js",revision:null},{url:"assets/axios-BimPEqV4.js",revision:null},{url:"assets/book.service-B2LodF4F.js",revision:null},{url:"assets/bookmark.service-BVR0wvSK.js",revision:null},{url:"assets/Button-D9sgKoN5.js",revision:null},{url:"assets/index-8ggls9eQ.js",revision:null},{url:"assets/index-Bak3hC6T.js",revision:null},{url:"assets/index-Bfq6ToSM.js",revision:null},{url:"assets/index-BG3WPSm8.js",revision:null},{url:"assets/index-BiKqfoEK.js",revision:null},{url:"assets/index-BkDzLbnS.js",revision:null},{url:"assets/index-BPBmJKVk.js",revision:null},{url:"assets/index-BYryFmP0.js",revision:null},{url:"assets/index-C6d4fA2C.js",revision:null},{url:"assets/index-Cev41xf9.js",revision:null},{url:"assets/index-CFy_nGnh.js",revision:null},{url:"assets/index-Cp6jSs-2.js",revision:null},{url:"assets/index-CPJKCDlJ.js",revision:null},{url:"assets/index-CwRWX7NB.js",revision:null},{url:"assets/index-D6_zt9O1.css",revision:null},{url:"assets/index-DeiPe4gA.js",revision:null},{url:"assets/index-Dg_JWTkI.js",revision:null},{url:"assets/index-DiOq-bOj.js",revision:null},{url:"assets/index-DMyDMiDU.js",revision:null},{url:"assets/index-DxgzfebH.js",revision:null},{url:"assets/index-DYToAAME.js",revision:null},{url:"assets/index-DZXrLnTe.js",revision:null},{url:"assets/index-gTL6q6SE.js",revision:null},{url:"assets/index-okqHLNbp.js",revision:null},{url:"assets/index-SdPwFWWr.js",revision:null},{url:"assets/index-tEwO6n9K.js",revision:null},{url:"assets/index.esm-C4droXHH.js",revision:null},{url:"assets/Root-ACFeq5ug.js",revision:null},{url:"assets/styled-Cr32FZHW.js",revision:null},{url:"assets/useOrientation-vM0mZbx8.js",revision:null},{url:"assets/VerifyRecaptchaProvider-8nv912VG.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"4aef0c29777c2d8655af26f66f1f4368"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"assets/ajax-loader-BcnMEykj.gif",revision:null},{url:"assets/frame-Cut40zwQ.svg",revision:null},{url:"assets/frame2-DPU6g07m.svg",revision:null},{url:"assets/icon_bookmark_shine_dark-CGKtxO8m.svg",revision:null},{url:"assets/icon_bookmark_shine_white-D-Iq1myF.svg",revision:null},{url:"assets/main_heaven_logo_easyocean-BVz3ov7z.svg",revision:null},{url:"assets/main_heaven_logo-CW12YAq4.svg",revision:null},{url:"assets/main_logo_easyocean_-C7Cu9RmH.svg",revision:null},{url:"assets/main_logo-BMjU5KEx.svg",revision:null},{url:"assets/slick-BlzDm7g2.svg",revision:null},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"cover1.svg",revision:"88f262dd00fe33c98bc341b008c71186"},{url:"cover2.svg",revision:"1694b6e4c16c7311208ef24b43614ad4"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"Group 21.svg",revision:"775f4ceb18645a509aa667a36491b96c"},{url:"Group 22.svg",revision:"1af3a9d49e9e62fd2ea63968551819fe"},{url:"Group 28.svg",revision:"133afd90369dc543a2d79e8c9f5f8342"},{url:"Group 38.svg",revision:"bd671cc6fde5ef8c8df1e0f61a705e55"},{url:"Group 70.svg",revision:"3f341cef8a58d62847c881702dca6f24"},{url:"Group 74.svg",revision:"80b6d3f3ff134d40afa58fe5a4879964"},{url:"Group 79.svg",revision:"fb95fed4846ed03eddeaff281eacc145"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"Round Button.svg",revision:"99fc983ac34ae2a22085bb88c78ade6f"},{url:"Round Button2.svg",revision:"db3dc770905236627821f0507d996019"},{url:"Solid.svg",revision:"c7aece0907e6ded99b8997b3452e23fe"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"d5860651f3562f5f0a99ede806697202"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
