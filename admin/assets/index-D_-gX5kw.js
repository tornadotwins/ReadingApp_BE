const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Root-K4chESWI.js","./createTheme-DMICbWZD.js","./App-Brtvcgak.js","./App-BFV56H4Y.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const O="modulepreload",S=function(a,e){return new URL(a,e).href},b={},y=function(e,n,l){let o=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),p=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));o=Promise.allSettled(n.map(i=>{if(i=S(i,l),i in b)return;b[i]=!0;const u=i.endsWith(".css"),A=u?'[rel="stylesheet"]':"";if(!!l)for(let s=r.length-1;s>=0;s--){const d=r[s];if(d.href===i&&(!u||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${A}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":O,u||(c.as="script"),c.crossOrigin="",c.href=i,p&&c.setAttribute("nonce",p),document.head.appendChild(c),u)return new Promise((s,d)=>{c.addEventListener("load",s),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(r){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=r,window.dispatchEvent(g),!g.defaultPrevented)throw r}return o.then(r=>{for(const g of r||[])g.status==="rejected"&&t(g.reason);return e().catch(t)})};var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function E(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function K(a){if(a.__esModule)return a;var e=a.default;if(typeof e=="function"){var n=function l(){return this instanceof l?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(a).forEach(function(l){var o=Object.getOwnPropertyDescriptor(a,l);Object.defineProperty(n,l,o.get?o:{enumerable:!0,get:function(){return a[l]}})}),n}var m={exports:{}};m.exports=f;m.exports.isMobile=f;m.exports.default=f;const _=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,L=/CrOS/,P=/android|ipad|playbook|silk/i;function f(a){a||(a={});let e=a.ua;if(!e&&typeof navigator<"u"&&(e=navigator.userAgent),e&&e.headers&&typeof e.headers["user-agent"]=="string"&&(e=e.headers["user-agent"]),typeof e!="string")return!1;let n=_.test(e)&&!L.test(e)||!!a.tablet&&P.test(e);return!n&&a.tablet&&a.featureDetect&&navigator&&navigator.maxTouchPoints>1&&e.indexOf("Macintosh")!==-1&&e.indexOf("Safari")!==-1&&(n=!0),n}var C=m.exports;const R=E(C);R();const $="https://readingapp-d5944320053c.herokuapp.com",z="accessToken",B="React PWA",M="auther-email@gmail.com",U={app:{crash:{title:"Oooops... Sorry, I guess, something went wrong. You can:",options:{email:`contact with author by this email - ${M}`,reset:"Press here to reset the application"}}},loader:{fail:"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea"},images:{failed:"something went wrong during image loading :("},404:"Hey bro? What are you looking for?"},D={delay:300,minimumLoading:700},G={image:"/cover.png",description:"Starter kit for modern web applications"},H="https://giphy.com/embed/xTiN0L7EW5trfOvEk0",k="Qur'an",v="Injil",T="Zabur",w="Tawrat",q="Completed",F="Published",W="None",J=[{language:"Abkhazian",code:"ab"},{language:"Afar",code:"aa"},{language:"Afrikaans",code:"af"},{language:"Akan",code:"ak"},{language:"Albanian",code:"sq"},{language:"Amharic",code:"am"},{language:"Arabic",code:"ar"},{language:"Aragonese",code:"an"},{language:"Armenian",code:"hy"},{language:"Assamese",code:"as"},{language:"Avaric",code:"av"},{language:"Aymara",code:"ay"},{language:"Azerbaijani",code:"az"},{language:"Bashkir",code:"ba"},{language:"Basque",code:"eu"},{language:"Belarusian",code:"be"},{language:"Bengali",code:"bn"},{language:"Bihari languages",code:"bh"},{language:"Bislama",code:"bi"},{language:"Bosnian",code:"bs"},{language:"Breton",code:"br"},{language:"Bulgarian",code:"bg"},{language:"Burmese",code:"my"},{language:"Catalan",code:"ca"},{language:"Chamorro",code:"ch"},{language:"Chechen",code:"ce"},{language:"Chichewa",code:"ny"},{language:"Chinese",code:"zh"},{language:"Chuvash",code:"cv"},{language:"Cornish",code:"kw"},{language:"Corsican",code:"co"},{language:"Cree",code:"cr"},{language:"Croatian",code:"hr"},{language:"Czech",code:"cs"},{language:"Danish",code:"da"},{language:"Divehi",code:"dv"},{language:"Dutch",code:"nl"},{language:"Dzongkha",code:"dz"},{language:"English",code:"en"},{language:"Esperanto",code:"eo"},{language:"Estonian",code:"et"},{language:"Ewe",code:"ee"},{language:"Fijian",code:"fj"},{language:"Finnish",code:"fi"},{language:"French",code:"fr"},{language:"Fulah",code:"ff"},{language:"Georgian",code:"ka"},{language:"German",code:"de"},{language:"Greek",code:"el"},{language:"Guarani",code:"gn"},{language:"Gujarati",code:"gu"},{language:"Haitian Creole",code:"ht"},{language:"Hausa",code:"ha"},{language:"Hebrew",code:"he"},{language:"Hindi",code:"hi"},{language:"Hmong",code:"hm"},{language:"Hungarian",code:"hu"},{language:"Icelandic",code:"is"},{language:"Igbo",code:"ig"},{language:"Indonesian",code:"id"},{language:"Inuktitut",code:"iu"},{language:"Irish",code:"ga"},{language:"Italian",code:"it"},{language:"Japanese",code:"ja"},{language:"Javanese",code:"jv"},{language:"Kalaallisut",code:"kl"},{language:"Kannada",code:"kn"},{language:"Kanuri",code:"kr"},{language:"Kashmiri",code:"ks"},{language:"Kazakh",code:"kk"},{language:"Khmer",code:"km"},{language:"Kinyarwanda",code:"rw"},{language:"Kirghiz",code:"ky"},{language:"Korean",code:"ko"},{language:"Kurdish",code:"ku"},{language:"Kyrgyz",code:"ky"},{language:"Lao",code:"lo"},{language:"Latin",code:"la"},{language:"Latvian",code:"lv"},{language:"Lingala",code:"ln"},{language:"Lithuanian",code:"lt"},{language:"Luxembourgish",code:"lb"},{language:"Macedonian",code:"mk"},{language:"Malagasy",code:"mg"},{language:"Malay",code:"ms"},{language:"Malayalam",code:"ml"},{language:"Maltese",code:"mt"},{language:"Maori",code:"mi"},{language:"Marathi",code:"mr"},{language:"Mongolian",code:"mn"},{language:"Nepali",code:"ne"},{language:"Norwegian",code:"no"},{language:"Nyanja",code:"ny"},{language:"Occitan",code:"oc"},{language:"Oromo",code:"om"},{language:"Ossetian",code:"os"},{language:"Panjabi",code:"pa"},{language:"Pashto",code:"ps"},{language:"Persian",code:"fa"},{language:"Polish",code:"pl"},{language:"Portuguese",code:"pt"},{language:"Quechua",code:"qu"},{language:"Romanian",code:"ro"},{language:"Russian",code:"ru"},{language:"Samoan",code:"sm"},{language:"Scots Gaelic",code:"gd"},{language:"Serbian",code:"sr"},{language:"Shona",code:"sn"},{language:"Sindhi",code:"sd"},{language:"Sinhalese",code:"si"},{language:"Slovak",code:"sk"},{language:"Slovenian",code:"sl"},{language:"Somali",code:"so"},{language:"Spanish",code:"es"},{language:"Sundanese",code:"su"},{language:"Swahili",code:"sw"},{language:"Swedish",code:"sv"},{language:"Tajik",code:"tg"},{language:"Tamil",code:"ta"},{language:"Tatar",code:"tt"},{language:"Telugu",code:"te"},{language:"Thai",code:"th"},{language:"Tigrinya",code:"ti"},{language:"Tonga",code:"to"},{language:"Turkish",code:"tr"},{language:"Turkmen",code:"tk"},{language:"Twi",code:"tw"},{language:"Ukrainian",code:"uk"},{language:"Urdu",code:"ur"},{language:"Uyghur",code:"ug"},{language:"Uzbek",code:"uz"},{language:"Vietnamese",code:"vi"},{language:"Welsh",code:"cy"},{language:"Xhosa",code:"xh"},{language:"Yiddish",code:"yi"},{language:"Yoruba",code:"yo"},{language:"Zulu",code:"zu"}],Q=[{bookTitle:"App Text",value:"App Text"},{bookTitle:k,value:k},{bookTitle:v,value:v},{bookTitle:T,value:T},{bookTitle:w,value:w}];function h(){return Math.floor(Math.random()*256)}function N(){const a=h(),e=h(),n=h();return[`rgb(${a}, ${e}, ${n})`,`rgb(${255-a}, ${255-e}, ${255-n})`]}function j(){const[a,e]=N(),n=["font-size: 40px",`color: ${a}`,`border: 1px solid ${e}`,`background-color: ${e}`,"border-radius: 5px","padding: 10px"].join(";");console.log(`%c=== ${B} ===`,n)}Promise.all([y(()=>import("./Root-K4chESWI.js"),__vite__mapDeps([0,1]),import.meta.url),y(()=>import("./App-Brtvcgak.js").then(a=>a.aJ),__vite__mapDeps([2,1,3]),import.meta.url)]).then(([{default:a},{default:e}])=>{a(e)});j();export{z as A,k as B,J as L,F as T,y as _,E as a,$ as b,q as c,G as d,M as e,W as f,K as g,T as h,Q as i,I as j,v as k,D as l,U as m,w as n,H as o,B as t};