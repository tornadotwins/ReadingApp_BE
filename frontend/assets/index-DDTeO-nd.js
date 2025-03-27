import{b as i,j as r,c as rn,_ as sn,ai as an,a1 as Ee,a3 as z}from"./index-vVnpQR20.js";import{T as cn,s as b,B as j,c as ln,u as un,S as dn,g as fn}from"./App-D3CD6LKw.js";import{c as U,F as _e,f as hn,a as mn}from"./index-BHsmC5xI.js";import{I as y,T as C}from"./index-DjLmZrKi.js";import{B as ke}from"./Button-DVgXsi7h.js";import{u as xn}from"./useOrientation-CsVRlift.js";import"./index-D2C-R6NA.js";import"./index-BkZKoKp-.js";function Be(e){const n=i.useRef(e);return i.useEffect(()=>{n.current=e},[e]),n}function Te(e){const n=Be(e);return i.useCallback(function(...t){return n.current&&n.current(...t)},[n])}function pn(e,n){const t=i.useRef(!0);i.useEffect(()=>{if(t.current){t.current=!1;return}return e()},n)}function gn(){const e=i.useRef(!0),n=i.useRef(()=>e.current);return i.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),n.current}function vn(e){const n=i.useRef(e);return n.current=e,n}function yn(e){const n=vn(e);i.useEffect(()=>()=>n.current(),[])}const se=2**31-1;function Pe(e,n,t){const o=t-Date.now();e.current=o<=se?setTimeout(n,o):setTimeout(()=>Pe(e,n,t),se)}function bn(){const e=gn(),n=i.useRef();return yn(()=>clearTimeout(n.current)),i.useMemo(()=>{const t=()=>clearTimeout(n.current);function o(s,a=0){e()&&(t(),a<=se?n.current=setTimeout(s,a):Pe(n,s,Date.now()+a))}return{set:o,clear:t,handleRef:n}},[])}function wn(e){const n=i.useRef(e);return i.useEffect(()=>{n.current=e},[e]),n}function Cn(e){const n=wn(e);return i.useCallback(function(...t){return n.current&&n.current(...t)},[n])}const jn=["as","disabled"];function Sn(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;t[o]=e[o]}return t}function En(e){return!e||e.trim()==="#"}function We({tagName:e,disabled:n,href:t,target:o,rel:s,role:a,onClick:l,tabIndex:m=0,type:x}){e||(t!=null||o!=null||s!=null?e="a":e="button");const p={tagName:e};if(e==="button")return[{type:x||"button",disabled:n},p];const f=d=>{if((n||e==="a"&&En(t))&&d.preventDefault(),n){d.stopPropagation();return}l==null||l(d)},h=d=>{d.key===" "&&(d.preventDefault(),f(d))};return e==="a"&&(t||(t="#"),n&&(t=void 0)),[{role:a??"button",disabled:void 0,tabIndex:n?void 0:m,href:t,target:e==="a"?o:void 0,"aria-disabled":n||void 0,rel:e==="a"?s:void 0,onClick:f,onKeyDown:h},p]}const _n=i.forwardRef((e,n)=>{let{as:t,disabled:o}=e,s=Sn(e,jn);const[a,{tagName:l}]=We(Object.assign({tagName:t,disabled:o},s));return r.jsx(l,Object.assign({},s,a,{ref:n}))});_n.displayName="Button";const kn=["onKeyDown"];function Tn(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;t[o]=e[o]}return t}function Dn(e){return!e||e.trim()==="#"}const ae=i.forwardRef((e,n)=>{let{onKeyDown:t}=e,o=Tn(e,kn);const[s]=We(Object.assign({tagName:"a"},o)),a=Cn(l=>{s.onKeyDown(l),t==null||t(l)});return Dn(o.href)||o.role==="button"?r.jsx("a",Object.assign({ref:n},o,s,{onKeyDown:a})):r.jsx("a",Object.assign({ref:n},o,{onKeyDown:t}))});ae.displayName="Anchor";function De(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function In(e){var n=Rn(e,"string");return typeof n=="symbol"?n:String(n)}function Rn(e,n){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function An(e,n,t){var o=i.useRef(e!==void 0),s=i.useState(n),a=s[0],l=s[1],m=e!==void 0,x=o.current;return o.current=m,!m&&x&&a!==n&&l(n),[m?e:a,i.useCallback(function(p){for(var f=arguments.length,h=new Array(f>1?f-1:0),d=1;d<f;d++)h[d-1]=arguments[d];t&&t.apply(void 0,[p].concat(h)),l(p)},[t])]}function Bn(e,n){return Object.keys(n).reduce(function(t,o){var s,a=t,l=a[De(o)],m=a[o],x=rn(a,[De(o),o].map(In)),p=n[o],f=An(m,l,e[p]),h=f[0],d=f[1];return sn({},x,(s={},s[o]=h,s[p]=d,s))},e)}const Pn=["xxl","xl","lg","md","sm","xs"],Wn="xs",ue=i.createContext({prefixes:{},breakpoints:Pn,minBreakpoint:Wn}),{Consumer:_t,Provider:kt}=ue;function de(e,n){const{prefixes:t}=i.useContext(ue);return e||t[n]||n}function Ln(){const{dir:e}=i.useContext(ue);return e==="rtl"}const Le=i.forwardRef(({className:e,bsPrefix:n,as:t="div",...o},s)=>(n=de(n,"carousel-caption"),r.jsx(t,{ref:s,className:U(e,n),...o})));Le.displayName="CarouselCaption";const Ne=i.forwardRef(({as:e="div",bsPrefix:n,className:t,...o},s)=>{const a=U(t,de(n,"carousel-item"));return r.jsx(e,{ref:s,...o,className:a})});Ne.displayName="CarouselItem";function Ie(e,n){let t=0;return i.Children.map(e,o=>i.isValidElement(o)?n(o,t++):o)}function Nn(e,n){let t=0;i.Children.forEach(e,o=>{i.isValidElement(o)&&n(o,t++)})}function Hn(e){return e&&e.ownerDocument||document}function On(e){var n=Hn(e);return n&&n.defaultView||window}function Fn(e,n){return On(e).getComputedStyle(e,n)}var Mn=/([A-Z])/g;function $n(e){return e.replace(Mn,"-$1").toLowerCase()}var zn=/^ms-/;function V(e){return $n(e).replace(zn,"-ms-")}var Un=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Kn(e){return!!(e&&Un.test(e))}function He(e,n){var t="",o="";if(typeof n=="string")return e.style.getPropertyValue(V(n))||Fn(e).getPropertyValue(V(n));Object.keys(n).forEach(function(s){var a=n[s];!a&&a!==0?e.style.removeProperty(V(s)):Kn(s)?o+=s+"("+a+") ":t+=V(s)+": "+a+";"}),o&&(t+="transform: "+o+";"),e.style.cssText+=";"+t}const Yn=!!(typeof window<"u"&&window.document&&window.document.createElement);var ce=!1,le=!1;try{var ee={get passive(){return ce=!0},get once(){return le=ce=!0}};Yn&&(window.addEventListener("test",ee,ee),window.removeEventListener("test",ee,!0))}catch{}function Xn(e,n,t,o){if(o&&typeof o!="boolean"&&!le){var s=o.once,a=o.capture,l=t;!le&&s&&(l=t.__once||function m(x){this.removeEventListener(n,m,a),t.call(this,x)},t.__once=l),e.addEventListener(n,l,ce?o:a)}e.addEventListener(n,t,o)}function Vn(e,n,t,o){var s=o&&typeof o!="boolean"?o.capture:o;e.removeEventListener(n,t,s),t.__once&&e.removeEventListener(n,t.__once,s)}function Oe(e,n,t,o){return Xn(e,n,t,o),function(){Vn(e,n,t,o)}}function qn(e,n,t,o){if(o===void 0&&(o=!0),e){var s=document.createEvent("HTMLEvents");s.initEvent(n,t,o),e.dispatchEvent(s)}}function Gn(e){var n=He(e,"transitionDuration")||"",t=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*t}function Qn(e,n,t){t===void 0&&(t=5);var o=!1,s=setTimeout(function(){o||qn(e,"transitionend",!0)},n+t),a=Oe(e,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(s),a()}}function Zn(e,n,t,o){t==null&&(t=Gn(e)||0);var s=Qn(e,t,o),a=Oe(e,"transitionend",n);return function(){s(),a()}}function Re(e,n){const t=He(e,n)||"",o=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*o}function Jn(e,n){const t=Re(e,"transitionDuration"),o=Re(e,"transitionDelay"),s=Zn(e,a=>{a.target===e&&(s(),n(a))},t+o)}function et(e){e.offsetHeight}const Ae=e=>!e||typeof e=="function"?e:n=>{e.current=n};function nt(e,n){const t=Ae(e),o=Ae(n);return s=>{t&&t(s),o&&o(s)}}function tt(e,n){return i.useMemo(()=>nt(e,n),[e,n])}function ot(e){return e&&"setState"in e?an.findDOMNode(e):e??null}const rt=Ee.forwardRef(({onEnter:e,onEntering:n,onEntered:t,onExit:o,onExiting:s,onExited:a,addEndListener:l,children:m,childRef:x,...p},f)=>{const h=i.useRef(null),d=tt(h,x),S=E=>{d(ot(E))},v=E=>B=>{E&&h.current&&E(h.current,B)},L=i.useCallback(v(e),[e]),I=i.useCallback(v(n),[n]),w=i.useCallback(v(t),[t]),F=i.useCallback(v(o),[o]),M=i.useCallback(v(s),[s]),A=i.useCallback(v(a),[a]),K=i.useCallback(v(l),[l]);return r.jsx(cn,{ref:f,...p,onEnter:L,onEntered:w,onEntering:I,onExit:F,onExited:A,onExiting:M,addEndListener:K,nodeRef:h,children:typeof m=="function"?(E,B)=>m(E,{...B,ref:S}):Ee.cloneElement(m,{ref:S})})}),it=40;function st(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const n=getComputedStyle(e);return n.display!=="none"&&n.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const Fe=i.forwardRef(({defaultActiveIndex:e=0,...n},t)=>{const{as:o="div",bsPrefix:s,slide:a=!0,fade:l=!1,controls:m=!0,indicators:x=!0,indicatorLabels:p=[],activeIndex:f,onSelect:h,onSlide:d,onSlid:S,interval:v=5e3,keyboard:L=!0,onKeyDown:I,pause:w="hover",onMouseOver:F,onMouseOut:M,wrap:A=!0,touch:K=!0,onTouchStart:E,onTouchMove:B,onTouchEnd:G,prevIcon:Me=r.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:fe="Previous",nextIcon:$e=r.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:he="Next",variant:me,className:ze,children:Q,...Ue}=Bn({defaultActiveIndex:e,...n},{activeIndex:"onSelect"}),T=de(s,"carousel"),N=Ln(),H=i.useRef(null),[xe,pe]=i.useState("next"),[Ke,Y]=i.useState(!1),[O,ge]=i.useState(!1),[g,Ye]=i.useState(f||0);i.useEffect(()=>{!O&&f!==g&&(H.current?pe(H.current):pe((f||0)>g?"next":"prev"),a&&ge(!0),Ye(f||0))},[f,O,g,a]),i.useEffect(()=>{H.current&&(H.current=null)});let P=0,ve;Nn(Q,(c,u)=>{++P,u===f&&(ve=c.props.interval)});const ye=Be(ve),_=i.useCallback(c=>{if(O)return;let u=g-1;if(u<0){if(!A)return;u=P-1}H.current="prev",h==null||h(u,c)},[O,g,h,A,P]),k=Te(c=>{if(O)return;let u=g+1;if(u>=P){if(!A)return;u=0}H.current="next",h==null||h(u,c)}),Z=i.useRef();i.useImperativeHandle(t,()=>({element:Z.current,prev:_,next:k}));const be=Te(()=>{!document.hidden&&st(Z.current)&&(N?_():k())}),W=xe==="next"?"start":"end";pn(()=>{a||(d==null||d(g,W),S==null||S(g,W))},[g]);const Xe=`${T}-item-${xe}`,Ve=`${T}-item-${W}`,qe=i.useCallback(c=>{et(c),d==null||d(g,W)},[d,g,W]),Ge=i.useCallback(()=>{ge(!1),S==null||S(g,W)},[S,g,W]),Qe=i.useCallback(c=>{if(L&&!/input|textarea/i.test(c.target.tagName))switch(c.key){case"ArrowLeft":c.preventDefault(),N?k(c):_(c);return;case"ArrowRight":c.preventDefault(),N?_(c):k(c);return}I==null||I(c)},[L,I,_,k,N]),Ze=i.useCallback(c=>{w==="hover"&&Y(!0),F==null||F(c)},[w,F]),Je=i.useCallback(c=>{Y(!1),M==null||M(c)},[M]),we=i.useRef(0),X=i.useRef(0),Ce=bn(),en=i.useCallback(c=>{we.current=c.touches[0].clientX,X.current=0,w==="hover"&&Y(!0),E==null||E(c)},[w,E]),nn=i.useCallback(c=>{c.touches&&c.touches.length>1?X.current=0:X.current=c.touches[0].clientX-we.current,B==null||B(c)},[B]),tn=i.useCallback(c=>{if(K){const u=X.current;Math.abs(u)>it&&(u>0?_(c):k(c))}w==="hover"&&Ce.set(()=>{Y(!1)},v||void 0),G==null||G(c)},[K,w,_,k,Ce,v,G]),je=v!=null&&!Ke&&!O,J=i.useRef();i.useEffect(()=>{var c,u;if(!je)return;const D=N?_:k;return J.current=window.setInterval(document.visibilityState?be:D,(c=(u=ye.current)!=null?u:v)!=null?c:void 0),()=>{J.current!==null&&clearInterval(J.current)}},[je,_,k,ye,v,be,N]);const Se=i.useMemo(()=>x&&Array.from({length:P},(c,u)=>D=>{h==null||h(u,D)}),[x,P,h]);return r.jsxs(o,{ref:Z,...Ue,onKeyDown:Qe,onMouseOver:Ze,onMouseOut:Je,onTouchStart:en,onTouchMove:nn,onTouchEnd:tn,className:U(ze,T,a&&"slide",l&&`${T}-fade`,me&&`${T}-${me}`),children:[x&&r.jsx("div",{className:`${T}-indicators`,children:Ie(Q,(c,u)=>r.jsx("button",{type:"button","data-bs-target":"","aria-label":p!=null&&p.length?p[u]:`Slide ${u+1}`,className:u===g?"active":void 0,onClick:Se?Se[u]:void 0,"aria-current":u===g},u))}),r.jsx("div",{className:`${T}-inner`,children:Ie(Q,(c,u)=>{const D=u===g;return a?r.jsx(rt,{in:D,onEnter:D?qe:void 0,onEntered:D?Ge:void 0,addEndListener:Jn,children:($,on)=>i.cloneElement(c,{...on,className:U(c.props.className,D&&$!=="entered"&&Xe,($==="entered"||$==="exiting")&&"active",($==="entering"||$==="exiting")&&Ve)})}):i.cloneElement(c,{className:U(c.props.className,D&&"active")})})}),m&&r.jsxs(r.Fragment,{children:[(A||f!==0)&&r.jsxs(ae,{className:`${T}-control-prev`,onClick:_,children:[Me,fe&&r.jsx("span",{className:"visually-hidden",children:fe})]}),(A||f!==P-1)&&r.jsxs(ae,{className:`${T}-control-next`,onClick:k,children:[$e,he&&r.jsx("span",{className:"visually-hidden",children:he})]})]})]})});Fe.displayName="Carousel";const ne=Object.assign(Fe,{Caption:Le,Item:Ne}),at=b(j)({display:"flex"}),ct=b(at)({justifyContent:"center",alignItems:"center"}),lt=b(ct)({minWidth:"100dvw",minHeight:"100dvh",flexDirection:"column"}),ut=b(j)({maxWidth:"800px",margin:"auto"}),te=b(j)({width:"100%",display:"flex",flexDirection:"column"}),oe=b(j)(({backgroundcolor:e})=>({width:"100%",padding:"15px 10px",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:e})),dt=b(j)({width:"20%",minWidth:"80px",maxWidth:"120px",paddingBottom:"20px","@media (min-width: 800px)":{width:"30%",minWidth:"120px",maxWidth:"180px",paddingBottom:"30px"}}),re=b(j)({width:"20%",minWidth:"80px",maxWidth:"120px",paddingBottom:"20px"}),R=b("img")({width:"100%"}),ie=b(j)(({backgroundcolor:e})=>({width:"100%",padding:"30px 15px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:e,"& .carousel":{width:"100%",maxWidth:"800px",margin:"auto"},"& .carousel .carousel-item img":{height:"370px","@media (min-width: 500px)":{height:"300px"},"@media (min-width: 700px)":{height:"250px"}},"& .carousel .carousel-item .carousel-caption":{display:"flex",flexDirection:"column",alignSelf:"anchor-center"},"& .carousel .carousel-control-prev-icon, .carousel-control-next-icon":{height:"100px",width:"100px",outline:"black",backgroundSize:"100%, 100%",borderRadius:"50%",border:"1px solid black",backgroundImage:"none",display:"flex",alignItems:"center",justifyContent:"center"},"& .carousel .carousel-control-next-icon:after":{fontSize:"20px",color:"red",textDecoration:"none !important"},"& .carousel .carousel-control-prev-icon:after":{fontSize:"20px",color:"red"}})),ft=b(j)({display:"flex",justifyContent:"space-between",alignItems:"center",width:"90%","@media (min-width: 600px)":{paddingTop:"30px"},"@media (min-width: 800px)":{paddingTop:"50px"}}),q=b(j)({width:"23%"}),ht=b(j)({width:"100%",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",padding:"10px 0 42px"}),mt=b(j)(({bordercolor:e})=>({width:"90%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"21px 0",boxSizing:"border-box",borderTop:`2px solid ${e}`})),xt=b(j)({paddingBottom:"0"});function pt(e){const n=xn(),t=un(),[o,s]=i.useState(!1),{theme:a}=i.useContext(dn),{headerBGColor:l,logoTextColor:m,buttonColor:x}=fn(a),p=["فَإِنْ كُنْتَ فِي شَكٍّ مِمَّا أَنْزَلْنَا إِلَيْكَ فَاسْأَلِ الَّذِينَ يَقْرَءُونَ الْكِتَابَ مِنْ قَبْلِكَ لَقَدْ جَاءَكَ الْحَقُّ مِنْ رَبِّكَ فَلاَ تَكُونَنَّ مِنَ الْمُمْتَرِينَ","نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ يَدَيْهِ وَأَنْزَلَ التَّوْرَاةَ وَالإِنْجِيلَ مِنْ قَبْلُ هُدًى لِلنَّاسِ وَأَنْزَلَ الْفُرْقَانَ إِنَّ الَّذِينَ كَفَرُوا بِآَيَاتِ اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ وَاللَّهُ عَزِيزٌ ذُو انْتِقَامٍ","قُلْ آَمَنَّا بِاللَّهِ وَمَا أُنْزِلَ عَلَيْنَا وَمَا أُنْزِلَ عَلَى إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ وَيَعْقُوبَ وَالأَسْبَاطِ وَمَا أُوتِيَ مُوسَى وَعِيسَى وَالنَّبِيُّونَ مِنْ رَبِّهِمْ لاَ نُفَرِّقُ بَيْنَ أَحَدٍ مِنْهُمْ وَنَحْنُ لَهُ مُسْلِمُونَ"],f=["So when you are in doubt about what we have revealed to you, ask those who are reading the book that was before you. Truth has come to you from your Lord, so do not be a doubter.","He sent down the Book upon you in truth, confirming what was before it, and He sent down the Torah and the Injil aforetime, as a guidance to mankind.","Say, “We believe in Allah and what has been sent down upon us, and in what was sent down upon Ibrahim, Ishmail, Ishaq, Yaqub, and the Tribes, and in what Musa, Isa, and the prophets were given from their Lord. We make no distinction among any of them, and unto Him we submit."],h=["Holy Qur'an Yunus (10:94)","Holy Qur’an, al-Imran 3:3-4","Holy Qur’an, Al-Imran 3:84"];i.useEffect(()=>{window.location.href.includes("holy")?s(!1):s(!0)},[]);const d=()=>r.jsx(ne,{"data-bs-theme":"dark",indicators:!1,prevIcon:r.jsx(_e,{icon:mn,size:"lg",color:x}),nextIcon:r.jsx(_e,{icon:hn,size:"lg",color:x}),children:p.map((I,w)=>r.jsxs(ne.Item,{interval:3e3,children:[r.jsx("img",{className:"d-block w-100",src:y.white_bg,alt:`Slide ${w+1}`}),r.jsxs(ne.Caption,{children:[r.jsx(C,{color:l,fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",children:I}),r.jsx(C,{color:l,fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",children:f[w]}),r.jsx(C,{color:l,fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",children:h[w]})]})]},w))}),S=()=>r.jsxs(te,{children:[r.jsxs(oe,{backgroundcolor:l,children:[r.jsx(dt,{children:r.jsx(R,{src:o?a==z.EASY_OCEAN?y.main_logo_heaven_easyocean:y.main_logo_heaven:a==z.EASY_OCEAN?y.main_logo_easyocean:y.main_logo})}),r.jsx(C,{fontWeight:"700",fontSize:36,lineHeight:47,textAlign:"center",color:m,fontFamily:"Buenard",children:"The Before-Books for Everyone"})]}),r.jsxs(ie,{backgroundcolor:"white",children:[r.jsxs(ft,{children:[r.jsx(q,{children:r.jsx(R,{src:y.book_cover_quran})}),r.jsx(q,{children:r.jsx(R,{src:y.book_cover_injil})}),r.jsx(q,{children:r.jsx(R,{src:y.book_cover_zabur})}),r.jsx(q,{children:r.jsx(R,{src:y.book_cover_tawrat})})]}),d(),r.jsx(ht,{children:r.jsx(ke,{label:"Go to App",onClick:()=>t("/home")})}),r.jsxs(mt,{bordercolor:l,children:[r.jsx(C,{color:l,fontFamily:'"Baloo Da 2"',fontWeight:"700",fontSize:16,lineHeight:24,textAlign:"center",children:"All in one place!"}),r.jsx(C,{color:l,fontFamily:'"Baloo Da 2"',fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",children:"The Holy Qur’an, Injil, Zabur and Tawrat."})]})]})]}),v=()=>r.jsxs(te,{children:[r.jsxs(oe,{backgroundcolor:l,children:[r.jsx(re,{children:r.jsx(R,{src:a==z.EASY_OCEAN?y.icon_multi_language_dark:y.icon_multi_language_white})}),r.jsx(C,{fontWeight:"700",fontSize:16,lineHeight:24,textAlign:"center",color:m,fontFamily:'"Baloo Da 2',children:"Multiple languages"}),r.jsx(C,{fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",color:m,fontFamily:'"Baloo Da 2',children:"The highest quality translation of the meaning of the books, in common language."})]}),r.jsxs(ie,{backgroundcolor:"white",children:[r.jsx(re,{children:r.jsx(R,{src:a==z.EASY_OCEAN?y.icon_offline_white:y.icon_offline_dark})}),r.jsx(C,{fontWeight:"700",fontSize:16,lineHeight:24,textAlign:"center",color:l,fontFamily:'"Baloo Da 2',children:"Read offline also"}),r.jsx(C,{fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",color:l,fontFamily:'"Baloo Da 2',children:"Save any Surah or Book to your phone. Download once and you’ve got it. It’s really small."})]})]}),L=()=>r.jsxs(te,{children:[r.jsxs(oe,{backgroundcolor:l,children:[r.jsx(re,{children:r.jsx(R,{src:a==z.EASY_OCEAN?y.icon_iman_dark:y.icon_iman_white})}),r.jsx(C,{fontWeight:"700",fontSize:16,lineHeight:24,textAlign:"center",color:m,fontFamily:'"Baloo Da 2',children:"Recognized by Imams"}),r.jsx(C,{fontWeight:"400",fontSize:16,lineHeight:24,textAlign:"center",color:m,fontFamily:'"Baloo Da 2',children:"The meaning-translations in the app are thoroughly vetted and endorsed by Imams, Ustadhs and Ulama worldwide."})]}),r.jsx(ie,{backgroundcolor:"white",children:r.jsx(xt,{children:r.jsx(ke,{label:"Go to App",onClick:()=>t("/home")})})})]});return r.jsx(lt,{flexDirection:n?"column":"row",children:r.jsxs(ut,{children:[S(),v(),L()]})})}function gt(e){return{languages:e.user.languages,terms:e.terms.terms}}const Tt=ln(gt)(pt);export{Tt as default};
