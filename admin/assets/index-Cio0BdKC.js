const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Root-BQnw6HV0.js","./createTheme-CMG5zAib.js","./App-Cg6pEGzx.js","./App-BFV56H4Y.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(n){if(n.ep)return;n.ep=!0;const t=o(n);fetch(n.href,t)}})();const w="modulepreload",E=function(a,e){return new URL(a,e).href},b={},y=function(e,o,l){let n=Promise.resolve();if(o&&o.length>0){const r=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),p=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));n=Promise.allSettled(o.map(i=>{if(i=E(i,l),i in b)return;b[i]=!0;const u=i.endsWith(".css"),O=u?'[rel="stylesheet"]':"";if(!!l)for(let s=r.length-1;s>=0;s--){const d=r[s];if(d.href===i&&(!u||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${O}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":w,u||(c.as="script"),c.crossOrigin="",c.href=i,p&&c.setAttribute("nonce",p),document.head.appendChild(c),u)return new Promise((s,d)=>{c.addEventListener("load",s),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(r){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=r,window.dispatchEvent(g),!g.defaultPrevented)throw r}return n.then(r=>{for(const g of r||[])g.status==="rejected"&&t(g.reason);return e().catch(t)})};var K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function S(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function I(a){if(a.__esModule)return a;var e=a.default;if(typeof e=="function"){var o=function l(){return this instanceof l?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};o.prototype=e.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(a).forEach(function(l){var n=Object.getOwnPropertyDescriptor(a,l);Object.defineProperty(o,l,n.get?n:{enumerable:!0,get:function(){return a[l]}})}),o}var m={exports:{}};m.exports=f;m.exports.isMobile=f;m.exports.default=f;const _=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,P=/CrOS/,L=/android|ipad|playbook|silk/i;function f(a){a||(a={});let e=a.ua;if(!e&&typeof navigator<"u"&&(e=navigator.userAgent),e&&e.headers&&typeof e.headers["user-agent"]=="string"&&(e=e.headers["user-agent"]),typeof e!="string")return!1;let o=_.test(e)&&!P.test(e)||!!a.tablet&&L.test(e);return!o&&a.tablet&&a.featureDetect&&navigator&&navigator.maxTouchPoints>1&&e.indexOf("Macintosh")!==-1&&e.indexOf("Safari")!==-1&&(o=!0),o}var C=m.exports;const R=S(C);R();const $="https://readingapp-d5944320053c.herokuapp.com",z="accessToken",B="React PWA",N="auther-email@gmail.com",U={app:{crash:{title:"Oooops... Sorry, I guess, something went wrong. You can:",options:{email:`contact with author by this email - ${N}`,reset:"Press here to reset the application"}}},loader:{fail:"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea"},images:{failed:"something went wrong during image loading :("},404:"Hey bro? What are you looking for?"},H={delay:300,minimumLoading:700},D={image:"/cover.png",description:"Starter kit for modern web applications"},G="https://giphy.com/embed/xTiN0L7EW5trfOvEk0",q="App Text",T="Qur'an",k="Injil",v="Zabur",A="Tawrat",F="Completed",W="Published",J="None",Q="HasContent",V=[{language:"Abkhazian",code:"ab"},{language:"Afar",code:"aa"},{language:"Afrikaans",code:"af"},{language:"Akan",code:"ak"},{language:"Albanian",code:"sq"},{language:"Amharic",code:"am"},{language:"Arabic",code:"ar"},{language:"Aragonese",code:"an"},{language:"Armenian",code:"hy"},{language:"Assamese",code:"as"},{language:"Avaric",code:"av"},{language:"Aymara",code:"ay"},{language:"Azerbaijani",code:"az"},{language:"Bashkir",code:"ba"},{language:"Basque",code:"eu"},{language:"Belarusian",code:"be"},{language:"Bengali",code:"bn"},{language:"Bihari languages",code:"bh"},{language:"Bislama",code:"bi"},{language:"Bosnian",code:"bs"},{language:"Breton",code:"br"},{language:"Bulgarian",code:"bg"},{language:"Burmese",code:"my"},{language:"Catalan",code:"ca"},{language:"Chamorro",code:"ch"},{language:"Chechen",code:"ce"},{language:"Chichewa",code:"ny"},{language:"Chinese",code:"zh"},{language:"Chuvash",code:"cv"},{language:"Cornish",code:"kw"},{language:"Corsican",code:"co"},{language:"Cree",code:"cr"},{language:"Croatian",code:"hr"},{language:"Czech",code:"cs"},{language:"Danish",code:"da"},{language:"Divehi",code:"dv"},{language:"Dutch",code:"nl"},{language:"Dzongkha",code:"dz"},{language:"English",code:"en"},{language:"Esperanto",code:"eo"},{language:"Estonian",code:"et"},{language:"Ewe",code:"ee"},{language:"Fijian",code:"fj"},{language:"Finnish",code:"fi"},{language:"French",code:"fr"},{language:"Fulah",code:"ff"},{language:"Georgian",code:"ka"},{language:"German",code:"de"},{language:"Greek",code:"el"},{language:"Guarani",code:"gn"},{language:"Gujarati",code:"gu"},{language:"Haitian Creole",code:"ht"},{language:"Hausa",code:"ha"},{language:"Hebrew",code:"he"},{language:"Hindi",code:"hi"},{language:"Hmong",code:"hm"},{language:"Hungarian",code:"hu"},{language:"Icelandic",code:"is"},{language:"Igbo",code:"ig"},{language:"Indonesian",code:"id"},{language:"Inuktitut",code:"iu"},{language:"Irish",code:"ga"},{language:"Italian",code:"it"},{language:"Japanese",code:"ja"},{language:"Javanese",code:"jv"},{language:"Kalaallisut",code:"kl"},{language:"Kannada",code:"kn"},{language:"Kanuri",code:"kr"},{language:"Kashmiri",code:"ks"},{language:"Kazakh",code:"kk"},{language:"Khmer",code:"km"},{language:"Kinyarwanda",code:"rw"},{language:"Kirghiz",code:"ky"},{language:"Korean",code:"ko"},{language:"Kurdish",code:"ku"},{language:"Kyrgyz",code:"ky"},{language:"Lao",code:"lo"},{language:"Latin",code:"la"},{language:"Latvian",code:"lv"},{language:"Lingala",code:"ln"},{language:"Lithuanian",code:"lt"},{language:"Luxembourgish",code:"lb"},{language:"Macedonian",code:"mk"},{language:"Malagasy",code:"mg"},{language:"Malay",code:"ms"},{language:"Malayalam",code:"ml"},{language:"Maltese",code:"mt"},{language:"Maori",code:"mi"},{language:"Marathi",code:"mr"},{language:"Mongolian",code:"mn"},{language:"Nepali",code:"ne"},{language:"Norwegian",code:"no"},{language:"Nyanja",code:"ny"},{language:"Occitan",code:"oc"},{language:"Oromo",code:"om"},{language:"Ossetian",code:"os"},{language:"Panjabi",code:"pa"},{language:"Pashto",code:"ps"},{language:"Persian",code:"fa"},{language:"Polish",code:"pl"},{language:"Portuguese",code:"pt"},{language:"Quechua",code:"qu"},{language:"Romanian",code:"ro"},{language:"Russian",code:"ru"},{language:"Samoan",code:"sm"},{language:"Scots Gaelic",code:"gd"},{language:"Serbian",code:"sr"},{language:"Shona",code:"sn"},{language:"Sindhi",code:"sd"},{language:"Sinhalese",code:"si"},{language:"Slovak",code:"sk"},{language:"Slovenian",code:"sl"},{language:"Somali",code:"so"},{language:"Spanish",code:"es"},{language:"Sundanese",code:"su"},{language:"Swahili",code:"sw"},{language:"Swedish",code:"sv"},{language:"Tajik",code:"tg"},{language:"Tamil",code:"ta"},{language:"Tatar",code:"tt"},{language:"Telugu",code:"te"},{language:"Thai",code:"th"},{language:"Tigrinya",code:"ti"},{language:"Tonga",code:"to"},{language:"Turkish",code:"tr"},{language:"Turkmen",code:"tk"},{language:"Twi",code:"tw"},{language:"Ukrainian",code:"uk"},{language:"Urdu",code:"ur"},{language:"Uyghur",code:"ug"},{language:"Uzbek",code:"uz"},{language:"Vietnamese",code:"vi"},{language:"Welsh",code:"cy"},{language:"Xhosa",code:"xh"},{language:"Yiddish",code:"yi"},{language:"Yoruba",code:"yo"},{language:"Zulu",code:"zu"}],X=[{bookTitle:"App Text",value:"App Text"},{bookTitle:T,value:T},{bookTitle:k,value:k},{bookTitle:v,value:v},{bookTitle:A,value:A}];function h(){return Math.floor(Math.random()*256)}function x(){const a=h(),e=h(),o=h();return[`rgb(${a}, ${e}, ${o})`,`rgb(${255-a}, ${255-e}, ${255-o})`]}function M(){const[a,e]=x(),o=["font-size: 40px",`color: ${a}`,`border: 1px solid ${e}`,`background-color: ${e}`,"border-radius: 5px","padding: 10px"].join(";");console.log(`%c=== ${B} ===`,o)}Promise.all([y(()=>import("./Root-BQnw6HV0.js"),__vite__mapDeps([0,1]),import.meta.url),y(()=>import("./App-Cg6pEGzx.js").then(a=>a.aX),__vite__mapDeps([2,1,3]),import.meta.url)]).then(([{default:a},{default:e}])=>{a(e)});M();export{z as A,T as B,Q as C,V as L,W as T,y as _,S as a,$ as b,F as c,D as d,N as e,J as f,I as g,v as h,X as i,K as j,k,H as l,U as m,A as n,q as o,G as p,B as t};
