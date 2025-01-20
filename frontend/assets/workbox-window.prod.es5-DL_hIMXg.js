try{self["workbox:window:7.2.0"]&&_()}catch{}function E(t,r){return new Promise(function(n){var o=new MessageChannel;o.port1.onmessage=function(u){n(u.data)},t.postMessage(r,[o.port2])})}function W(t){var r=function(n,o){if(typeof n!="object"||!n)return n;var u=n[Symbol.toPrimitive];if(u!==void 0){var h=u.call(n,o);if(typeof h!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(t,"string");return typeof r=="symbol"?r:r+""}function k(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,W(o.key),o)}}function P(t,r){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},P(t,r)}function j(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,o=new Array(r);n<r;n++)o[n]=t[n];return o}function L(t,r){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(u,h){if(u){if(typeof u=="string")return j(u,h);var l=Object.prototype.toString.call(u).slice(8,-1);return l==="Object"&&u.constructor&&(l=u.constructor.name),l==="Map"||l==="Set"?Array.from(u):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?j(u,h):void 0}}(t))||r){n&&(t=n);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}try{self["workbox:core:7.2.0"]&&_()}catch{}var w=function(){var t=this;this.promise=new Promise(function(r,n){t.resolve=r,t.reject=n})};function b(t,r){var n=location.href;return new URL(t,n).href===new URL(r,n).href}var g=function(t,r){this.type=t,Object.assign(this,r)};function d(t,r,n){return n?r?r(t):t:(t&&t.then||(t=Promise.resolve(t)),r?t.then(r):t)}function O(){}var x={type:"SKIP_WAITING"};function S(t,r){return t&&t.then?t.then(O):Promise.resolve()}var U=function(t){function r(v,c){var e,i;return c===void 0&&(c={}),(e=t.call(this)||this).nn={},e.tn=0,e.rn=new w,e.en=new w,e.on=new w,e.un=0,e.an=new Set,e.cn=function(){var s=e.fn,a=s.installing;e.tn>0||!b(a.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=a,s.removeEventListener("updatefound",e.cn)):(e.hn=a,e.an.add(a),e.rn.resolve(a)),++e.tn,a.addEventListener("statechange",e.ln)},e.ln=function(s){var a=e.fn,f=s.target,p=f.state,m=f===e.vn,y={sw:f,isExternal:m,originalEvent:s};!m&&e.mn&&(y.isUpdate=!0),e.dispatchEvent(new g(p,y)),p==="installed"?e.wn=self.setTimeout(function(){p==="installed"&&a.waiting===f&&e.dispatchEvent(new g("waiting",y))},200):p==="activating"&&(clearTimeout(e.wn),m||e.en.resolve(f))},e.yn=function(s){var a=e.hn,f=a!==navigator.serviceWorker.controller;e.dispatchEvent(new g("controlling",{isExternal:f,originalEvent:s,sw:a,isUpdate:e.mn})),f||e.on.resolve(a)},e.gn=(i=function(s){var a=s.data,f=s.ports,p=s.source;return d(e.getSW(),function(){e.an.has(p)&&e.dispatchEvent(new g("message",{data:a,originalEvent:s,ports:f,sw:p}))})},function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];try{return Promise.resolve(i.apply(this,s))}catch(f){return Promise.reject(f)}}),e.sn=v,e.nn=c,navigator.serviceWorker.addEventListener("message",e.gn),e}var n,o;o=t,(n=r).prototype=Object.create(o.prototype),n.prototype.constructor=n,P(n,o);var u,h,l=r.prototype;return l.register=function(v){var c=(v===void 0?{}:v).immediate,e=c!==void 0&&c;try{var i=this;return d(function(s,a){var f=s();return f&&f.then?f.then(a):a(f)}(function(){if(!e&&document.readyState!=="complete")return S(new Promise(function(s){return window.addEventListener("load",s)}))},function(){return i.mn=!!navigator.serviceWorker.controller,i.dn=i.pn(),d(i.bn(),function(s){i.fn=s,i.dn&&(i.hn=i.dn,i.en.resolve(i.dn),i.on.resolve(i.dn),i.dn.addEventListener("statechange",i.ln,{once:!0}));var a=i.fn.waiting;return a&&b(a.scriptURL,i.sn.toString())&&(i.hn=a,Promise.resolve().then(function(){i.dispatchEvent(new g("waiting",{sw:a,wasWaitingBeforeRegister:!0}))}).then(function(){})),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.yn),i.fn})}))}catch(s){return Promise.reject(s)}},l.update=function(){try{return this.fn?d(S(this.fn.update())):d()}catch(v){return Promise.reject(v)}},l.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},l.messageSW=function(v){try{return d(this.getSW(),function(c){return E(c,v)})}catch(c){return Promise.reject(c)}},l.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&E(this.fn.waiting,x)},l.pn=function(){var v=navigator.serviceWorker.controller;return v&&b(v.scriptURL,this.sn.toString())?v:void 0},l.bn=function(){try{var v=this;return d(function(c,e){try{var i=c()}catch(s){return e(s)}return i&&i.then?i.then(void 0,e):i}(function(){return d(navigator.serviceWorker.register(v.sn,v.nn),function(c){return v.un=performance.now(),c})},function(c){throw c}))}catch(c){return Promise.reject(c)}},u=r,(h=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&k(u.prototype,h),Object.defineProperty(u,"prototype",{writable:!1}),u}(function(){function t(){this.Pn=new Map}var r=t.prototype;return r.addEventListener=function(n,o){this.jn(n).add(o)},r.removeEventListener=function(n,o){this.jn(n).delete(o)},r.dispatchEvent=function(n){n.target=this;for(var o,u=L(this.jn(n.type));!(o=u()).done;)(0,o.value)(n)},r.jn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());export{U as Workbox,g as WorkboxEvent,E as messageSW};