const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Root-HCytPSGR.js","./index-DiZbyTx4.js","./axios-BimPEqV4.js","./App-C3cg7l-F.js","./App-Br3UqI07.css"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const y="modulepreload",g=function(i,o){return new URL(i,o).href},m={},h=function(o,l,c){let e=Promise.resolve();if(l&&l.length>0){const t=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),d=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(l.map(n=>{if(n=g(n,c),n in m)return;m[n]=!0;const u=n.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!c)for(let a=t.length-1;a>=0;a--){const f=t[a];if(f.href===n&&(!u||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${p}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":y,u||(s.as="script"),s.crossOrigin="",s.href=n,d&&s.setAttribute("nonce",d),document.head.appendChild(s),u)return new Promise((a,f)=>{s.addEventListener("load",a),s.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${n}`)))})}))}return e.then(()=>o()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})};Promise.all([h(()=>import("./Root-HCytPSGR.js"),__vite__mapDeps([0,1,2]),import.meta.url),h(()=>import("./App-C3cg7l-F.js").then(i=>i.aT),__vite__mapDeps([3,1,4]),import.meta.url)]).then(([{default:i},{default:o}])=>{i(o)});export{h as _};
