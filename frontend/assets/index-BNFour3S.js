const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Root-CNqJ0Q4E.js","./index-COOOq_Rz.js","./axios-upsvKRUO.js","./App-DaqOXMMZ.js","./App-BvP8-UJS.css"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const g="modulepreload",E=function(l,o){return new URL(l,o).href},h={},p=function(o,c,u){let e=Promise.resolve();if(c&&c.length>0){const n=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),m=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.allSettled(c.map(s=>{if(s=E(s,u),s in h)return;h[s]=!0;const a=s.endsWith(".css"),y=a?'[rel="stylesheet"]':"";if(!!u)for(let f=n.length-1;f>=0;f--){const d=n[f];if(d.href===s&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${y}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":g,a||(i.as="script"),i.crossOrigin="",i.href=s,m&&i.setAttribute("nonce",m),document.head.appendChild(i),a)return new Promise((f,d)=>{i.addEventListener("load",f),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}function t(n){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n}return e.then(n=>{for(const r of n||[])r.status==="rejected"&&t(r.reason);return o().catch(t)})};Promise.all([p(()=>import("./Root-CNqJ0Q4E.js"),__vite__mapDeps([0,1,2]),import.meta.url),p(()=>import("./App-DaqOXMMZ.js").then(l=>l.b9),__vite__mapDeps([3,1,4]),import.meta.url)]).then(([{default:l},{default:o}])=>{l(o)});export{p as _};
