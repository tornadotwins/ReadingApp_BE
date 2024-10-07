import{u as li,b as I,j as b,ab as vt,ac as ci,ad as yn,Q as ui,ae as Ot,af as fi,L as bn}from"./index-oYoQThXz.js";import{f as di,h as mi,S as St,g as xt,B as Sn,i as hi,j as pi,I as gi,k as vi,u as ve,l as yi,m as bi,n as Si,o as xi,p as Ti,H as wi,q as Ci,L as Ai,r as Ei,C as Ii,t as ki,v as Pi,s as ye,c as Oi,d as _i,e as ft,_ as Mi}from"./App-C3BC1_sl.js";import{T as Rt,I as Jt}from"./images-BUju00d5.js";import{S as Li}from"./index-Dama2GdV.js";import{P as y}from"./index-CLadugGU.js";import{C as Ni,L as Ri}from"./index-CpHriqNl.js";import{u as ji}from"./useOrientation-7czoHg5h.js";import{b as ze}from"./book.service-DkAEXqxu.js";import{a as Fi}from"./auth.service-DKp0q1yr.js";import"./index-C6uBoKeg.js";import"./axios-BimPEqV4.js";function Di(t,e,n,i,r){const[a,s]=I.useState(()=>r&&n?n(t).matches:i?i(t).matches:e);return mi(()=>{let o=!0;if(!n)return;const l=n(t),c=()=>{o&&s(l.matches)};return c(),l.addListener(c),()=>{o=!1,l.removeListener(c)}},[t,n]),a}const xn=I.useSyncExternalStore;function Wi(t,e,n,i,r){const a=I.useCallback(()=>e,[e]),s=I.useMemo(()=>{if(r&&n)return()=>n(t).matches;if(i!==null){const{matches:u}=i(t);return()=>u}return a},[a,t,i,r,n]),[o,l]=I.useMemo(()=>{if(n===null)return[a,()=>()=>{}];const u=n(t);return[()=>u.matches,f=>(u.addListener(f),()=>{u.removeListener(f)})]},[a,n,t]);return xn(l,o,s)}function zi(t,e={}){const n=li(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:r=!1,matchMedia:a=i?window.matchMedia:null,ssrMatchMedia:s=null,noSsr:o=!1}=di({name:"MuiUseMediaQuery",props:e,theme:n});let l=t;return l=l.replace(/^@media( ?)/m,""),(xn!==void 0?Wi:Di)(l,r,a,s,o)}function Bi({label:t,onClick:e,size:n="medium",style:i,progress:r}){const{theme:a}=I.useContext(St),{buttonColor:s,buttonTextColor:o}=xt(a);return b.jsxs(Sn,{children:[b.jsx(hi,{size:n,onClick:e,style:{...i,backgroundColor:s},textcolor:o,isprogressbutton:"true",children:b.jsx(Rt,{color:o,children:t})}),b.jsx(pi,{variant:"determinate",value:r,backgroundcolor:s,bordercolor:o})]})}const Ui=t=>{var r;const{theme:e}=I.useContext(St),{buttonTextColor:n}=xt(e),i=localStorage.getItem(vt);return b.jsxs(gi,{children:[b.jsx(vi,{src:ci+t.coverImg||Jt.default_cover,alt:t.imageText}),b.jsx(Rt,{fontSize:t.fontSize,fontFamily:t.fontFamily,fontWeight:t.fontWeight,lineHeight:47,className:"imageText",color:n,children:(r=t.title)==null?void 0:r[i||"en"]})]})};function Yi(t){var c;const[e,n]=I.useState(0),i=t.book,{t:r}=ve(),{theme:a}=I.useContext(St),{mainTextColor:s,backgroundColor:o}=xt(a),l=localStorage.getItem(vt)||yn;return I.useEffect(()=>{var u;if(t.userHistory&&((u=t.userHistory)==null?void 0:u.length)>0){const f=t.userHistory.filter(d=>d.bookId==i._id);if(f.length>0){const d=f[0].totalChapterCount,h=f[0].readChapters;n(Math.floor(h/d*100))}}}),b.jsx(yi,{children:b.jsx(bi,{style:{backgroundColor:o},children:b.jsxs(Si,{children:[b.jsx(Ui,{coverImg:i.coverImage,title:i.title,imageText:i.imageText,fontFamily:'"Buenard"',fontSize:24,fontWeight:"400"}),b.jsx(xi,{children:b.jsx(Rt,{fontFamily:'"Buenard"',fontWeight:"700",lineHeight:47,fontSize:31,textAlign:"center",color:s,children:(c=i.title)==null?void 0:c[l]})}),b.jsx(Ti,{children:b.jsx(Bi,{label:r("Open"),onClick:()=>t.moveToBook(i._id),size:"large",progress:e})})]})})})}function Gi(t){const{t:e,i18n:n}=ve(),{theme:i}=I.useContext(St),{headerBGColor:r,logoTextColor:a}=xt(i),s=[{value:"en",label:e("English")},{value:"ar",label:e("Arabic")}],[o,l]=I.useState(s[0].value);I.useEffect(()=>{const u=localStorage.getItem(vt);u&&u.length>0&&l(u)},[]);const c=u=>{const f=u.target.value;l(f),n.changeLanguage(f),localStorage.setItem(vt,f)};return b.jsxs(wi,{style:{backgroundColor:r},children:[b.jsx(Ci,{onClick:t.onLoginClicked,style:{color:a},children:t.isLoggedIn?e("Log Out"):e("Log In")}),b.jsx(Ai,{src:i==ui.EASY_OCEAN?Jt.main_logo_easyocean:Jt.main_logo,onClick:t.onLogoClicked}),b.jsx(Ei,{children:b.jsx(Li,{label:"",options:s,value:o,backgroundColor:a,textColor:r,onChange:c})})]})}var be={},Se={},E={},jt={};(function(t){function e(s,o,l){var c=o.slidesToShow,u=o.currentSlide;return l.length>2*c?s+2*c:u>=l.length?l.length+s:s}function n(s,o){if(o.length>2*s){for(var l={},c=o.length-2*s,u=o.length-c,f=c,d=0;d<u;d++)l[d]=f,f++;var h=o.length+u,p=h+o.slice(0,2*s).length,x=0;for(d=h;d<=p;d++)l[d]=x,x++;var g=h,S=0;for(d=u;d<g;d++)l[d]=S,S++;return l}l={};var T=3*o.length,v=0;for(d=0;d<T;d++)l[d]=v,++v===o.length&&(v=0);return l}function i(s,o){return o.length<s?o:o.length>2*s?o.slice(o.length-2*s,o.length).concat(o,o.slice(0,2*s)):o.concat(o,o)}function r(s,o){return o.length>2*s?2*s:o.length}function a(s,o,l){var c,u=s.currentSlide,f=s.slidesToShow,d=s.itemWidth,h=s.totalItems,p=0,x=0,g=u===0,S=o.length-(o.length-2*f);return o.length<f?(x=p=0,g=c=!1):o.length>2*f?((c=u>=S+o.length)&&(x=-d*(p=u-o.length)),g&&(x=-d*(p=S+(o.length-2*f)))):((c=u>=2*o.length)&&(x=-d*(p=u-o.length)),g&&(x=l.showDots?-d*(p=o.length):-d*(p=h/3))),{isReachingTheEnd:c,isReachingTheStart:g,nextSlide:p,nextPosition:x}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOriginalCounterPart=e,t.getOriginalIndexLookupTableByClones=n,t.getClones=i,t.getInitialSlideInInfiniteMode=r,t.checkClonesPosition=a})(jt);var ot={};Object.defineProperty(ot,"__esModule",{value:!0});function Vi(t,e,n,i){var r=0,a=i||n;return e&&a&&(r=t[a].partialVisibilityGutter||t[a].paritialVisibilityGutter),r}function Hi(t,e){var n;return e[t]&&(n=(100/e[t].items).toFixed(1)),n}function $i(t,e,n){return Math.round(n/(e+(t.centerMode?1:0)))}ot.getPartialVisibilityGutter=Vi,ot.getWidthFromDeviceType=Hi,ot.getItemClientSideWidth=$i;var O={};Object.defineProperty(O,"__esModule",{value:!0});var Zt=ot;function xe(t){var e=t.slidesToShow;return t.totalItems<e}function Xi(t,e){var n,i=t.domLoaded,r=t.slidesToShow,a=t.containerWidth,s=t.itemWidth,o=e.deviceType,l=e.responsive,c=e.ssr,u=e.partialVisbile,f=e.partialVisible,d=!!(i&&r&&a&&s);c&&o&&!d&&(n=Zt.getWidthFromDeviceType(o,l));var h=!!(c&&o&&!d&&n);return{shouldRenderOnSSR:h,flexBisis:n,domFullyLoaded:d,partialVisibilityGutter:Zt.getPartialVisibilityGutter(l,u||f,o,t.deviceType),shouldRenderAtAll:h||d}}function Ki(t,e){var n=e.currentSlide,i=e.slidesToShow;return n<=t&&t<n+i}function Tn(t,e,n){var i=n||t.transform;return!e.infinite&&t.currentSlide===0||xe(t)?i:i+t.itemWidth/2}function Qi(t){return!(0<t.currentSlide)}function wn(t){var e=t.currentSlide,n=t.totalItems;return!(e+t.slidesToShow<n)}function Cn(t,e,n,i){e===void 0&&(e=0);var r=t.currentSlide,a=t.slidesToShow,s=wn(t),o=!n.infinite&&s,l=i||t.transform;if(xe(t))return l;var c=l+r*e;return o?c+(t.containerWidth-(t.itemWidth-e)*a):c}function An(t,e){return t.rtl?-1*e:e}function qi(t,e,n){var i=e.partialVisbile,r=e.partialVisible,a=e.responsive,s=e.deviceType,o=e.centerMode,l=n||t.transform,c=Zt.getPartialVisibilityGutter(a,i||r,s,t.deviceType);return An(e,r||i?Cn(t,c,e,n):o?Tn(t,e,n):l)}function Ji(t,e){var n=t.domLoaded,i=t.slidesToShow,r=t.containerWidth,a=t.itemWidth,s=e.deviceType,o=e.responsive,l=e.slidesToSlide||1,c=!!(n&&i&&r&&a);return e.ssr&&e.deviceType&&!c&&Object.keys(o).forEach(function(u){var f=o[u].slidesToSlide;s===u&&f&&(l=f)}),c&&Object.keys(o).forEach(function(u){var f=o[u],d=f.breakpoint,h=f.slidesToSlide,p=d.max,x=d.min;h&&window.innerWidth>=x&&window.innerWidth<=p&&(l=h)}),l}O.notEnoughChildren=xe,O.getInitialState=Xi,O.getIfSlideIsVisbile=Ki,O.getTransformForCenterMode=Tn,O.isInLeftEnd=Qi,O.isInRightEnd=wn,O.getTransformForPartialVsibile=Cn,O.parsePosition=An,O.getTransform=qi,O.getSlidesToSlide=Ji;var Te={};Object.defineProperty(Te,"__esModule",{value:!0});var Zi=function(t,e,n){var i;return function(){var r=arguments;i||(t.apply(this,r),i=!0,typeof n=="function"&&n(!0),setTimeout(function(){i=!1,typeof n=="function"&&n(!1)},e))}};Te.default=Zi;var En={};(function(t){function e(n,i){var r=i.partialVisbile,a=i.partialVisible,s=i.centerMode,o=i.ssr,l=i.responsive;if((r||a)&&s)throw new Error("center mode can not be used at the same time with partialVisible");if(!l)throw o?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(l&&typeof l!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e})(En);var we={};Object.defineProperty(we,"__esModule",{value:!0});var tr=O;function er(t,e,n){n===void 0&&(n=0);var i,r,a=t.slidesToShow,s=t.currentSlide,o=t.itemWidth,l=t.totalItems,c=tr.getSlidesToSlide(t,e),u=s+1+n+a+(0<n?0:c);return r=u<=l?-o*(i=s+n+(0<n?0:c)):l<u&&s!==l-a?-o*(i=l-a):i=void 0,{nextSlides:i,nextPosition:r}}we.populateNextSlides=er;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});var nr=I,ir=O,rr=O;function ar(t,e,n){n===void 0&&(n=0);var i,r,a=t.currentSlide,s=t.itemWidth,o=t.slidesToShow,l=e.children,c=e.showDots,u=e.infinite,f=ir.getSlidesToSlide(t,e),d=a-n-(0<n?0:f),h=(nr.Children.toArray(l).length-o)%f;return r=0<=d?(i=d,c&&!u&&0<h&&rr.isInRightEnd(t)&&(i=a-h),-s*i):i=d<0&&a!==0?0:void 0,{nextSlides:i,nextPosition:r}}Ce.populatePreviousSlides=ar;var In={};(function(t){function e(n,i,r,a,s,o){var l,c,u=n.itemWidth,f=n.slidesToShow,d=n.totalItems,h=n.currentSlide,p=i.infinite,x=!1,g=Math.round((r-a)/u),S=Math.round((a-r)/u),T=r<s;if(s<r&&g<=f){l="right";var v=Math.abs(-u*(d-f)),k=o-(a-s),C=h===d-f;(Math.abs(k)<=v||C&&p)&&(c=k,x=!0)}return T&&S<=f&&(l="left",((k=o+(s-a))<=0||h===0&&p)&&(x=!0,c=k)),{direction:l,nextPosition:c,canContinue:x}}Object.defineProperty(t,"__esModule",{value:!0}),t.populateSlidesOnMouseTouchMove=e})(In);Object.defineProperty(E,"__esModule",{value:!0});var Ct=jt;E.getOriginalCounterPart=Ct.getOriginalCounterPart,E.getClones=Ct.getClones,E.checkClonesPosition=Ct.checkClonesPosition,E.getInitialSlideInInfiniteMode=Ct.getInitialSlideInInfiniteMode;var Yt=ot;E.getWidthFromDeviceType=Yt.getWidthFromDeviceType,E.getPartialVisibilityGutter=Yt.getPartialVisibilityGutter,E.getItemClientSideWidth=Yt.getItemClientSideWidth;var V=O;E.getInitialState=V.getInitialState,E.getIfSlideIsVisbile=V.getIfSlideIsVisbile,E.getTransformForCenterMode=V.getTransformForCenterMode,E.getTransformForPartialVsibile=V.getTransformForPartialVsibile,E.isInLeftEnd=V.isInLeftEnd,E.isInRightEnd=V.isInRightEnd,E.notEnoughChildren=V.notEnoughChildren,E.getSlidesToSlide=V.getSlidesToSlide;var or=Te;E.throttle=or.default;var sr=En;E.throwError=sr.default;var lr=we;E.populateNextSlides=lr.populateNextSlides;var cr=Ce;E.populatePreviousSlides=cr.populatePreviousSlides;var ur=In;E.populateSlidesOnMouseTouchMove=ur.populateSlidesOnMouseTouchMove;var Ft={},fr=Ot&&Ot.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var a in r)r.hasOwnProperty(a)&&(i[a]=r[a])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(Ft,"__esModule",{value:!0});var dr=I;function mr(t){return"clientY"in t}Ft.isMouseMoveEvent=mr;var hr=function(t){function e(){return t!==null&&t.apply(this,arguments)||this}return fr(e,t),e}(dr.Component);Ft.default=hr;var Ae={},Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});var pr=jt,gr=O;function vr(t,e,n,i){var r={},a=gr.getSlidesToSlide(e,n);return Array(t).fill(0).forEach(function(s,o){var l=pr.getOriginalCounterPart(o,e,i);if(o===0)r[0]=l;else{var c=r[o-1]+a;r[o]=c}}),r}Ee.getLookupTableForNextSlides=vr;Object.defineProperty(Ae,"__esModule",{value:!0});var dt=I,yr=jt,br=Ee,Be=O,Sr=function(t){var e=t.props,n=t.state,i=t.goToSlide,r=t.getState,a=e.showDots,s=e.customDot,o=e.dotListClass,l=e.infinite,c=e.children;if(!a||Be.notEnoughChildren(n))return null;var u,f=n.currentSlide,d=n.slidesToShow,h=Be.getSlidesToSlide(n,e),p=dt.Children.toArray(c);u=l?Math.ceil(p.length/h):Math.ceil((p.length-d)/h)+1;var x=br.getLookupTableForNextSlides(u,n,e,p),g=yr.getOriginalIndexLookupTableByClones(d,p),S=g[f];return dt.createElement("ul",{className:"react-multi-carousel-dot-list "+o},Array(u).fill(0).map(function(T,v){var k,C;if(l){C=x[v];var G=g[C];k=S===G||G<=S&&S<G+h}else{var z=p.length-d,it=v*h;k=(C=z<it?z:it)===f||C<f&&f<C+h&&f<p.length-d}return s?dt.cloneElement(s,{index:v,active:k,key:v,onClick:function(){return i(C)},carouselState:r()}):dt.createElement("li",{"data-index":v,key:v,className:"react-multi-carousel-dot "+(k?"react-multi-carousel-dot--active":"")},dt.createElement("button",{"aria-label":"Go to slide "+(v+1),onClick:function(){return i(C)}}))}))};Ae.default=Sr;var Dt={};Object.defineProperty(Dt,"__esModule",{value:!0});var _t=I,xr=function(t){var e=t.customLeftArrow,n=t.getState,i=t.previous,r=t.disabled,a=t.rtl;if(e)return _t.cloneElement(e,{onClick:function(){return i()},carouselState:n(),disabled:r,rtl:a});var s=a?"rtl":"";return _t.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+s,onClick:function(){return i()},type:"button",disabled:r})};Dt.LeftArrow=xr;var Tr=function(t){var e=t.customRightArrow,n=t.getState,i=t.next,r=t.disabled,a=t.rtl;if(e)return _t.cloneElement(e,{onClick:function(){return i()},carouselState:n(),disabled:r,rtl:a});var s=a?"rtl":"";return _t.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+s,onClick:function(){return i()},type:"button",disabled:r})};Dt.RightArrow=Tr;var Ie={};Object.defineProperty(Ie,"__esModule",{value:!0});var At=I,Gt=E,wr=function(t){var e=t.props,n=t.state,i=t.goToSlide,r=t.clones,a=t.notEnoughChildren,s=n.itemWidth,o=e.children,l=e.infinite,c=e.itemClass,u=e.itemAriaLabel,f=e.partialVisbile,d=e.partialVisible,h=Gt.getInitialState(n,e),p=h.flexBisis,x=h.shouldRenderOnSSR,g=h.domFullyLoaded,S=h.partialVisibilityGutter;return h.shouldRenderAtAll?(f&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),At.createElement(At.Fragment,null,(l?r:At.Children.toArray(o)).map(function(T,v){return At.createElement("li",{key:v,"data-index":v,onClick:function(){e.focusOnSelect&&i(v)},"aria-hidden":Gt.getIfSlideIsVisbile(v,n)?"false":"true","aria-label":u||(T.props.ariaLabel?T.props.ariaLabel:null),style:{flex:x?"1 0 "+p+"%":"auto",position:"relative",width:g?((f||d)&&S&&!a?s-S:s)+"px":"auto"},className:"react-multi-carousel-item "+(Gt.getIfSlideIsVisbile(v,n)?"react-multi-carousel-item--active":"")+" "+c},T)}))):null};Ie.default=wr;var Cr=Ot&&Ot.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var a in r)r.hasOwnProperty(a)&&(i[a]=r[a])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(Se,"__esModule",{value:!0});var _=I,P=E,q=Ft,Ar=Ae,Ue=Dt,Er=Ie,Et=O,R=400,Ye="transform 400ms ease-in-out",Ir=function(t){function e(n){var i=t.call(this,n)||this;return i.containerRef=_.createRef(),i.listRef=_.createRef(),i.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:_.Children.count(n.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},i.onResize=i.onResize.bind(i),i.handleDown=i.handleDown.bind(i),i.handleMove=i.handleMove.bind(i),i.handleOut=i.handleOut.bind(i),i.onKeyUp=i.onKeyUp.bind(i),i.handleEnter=i.handleEnter.bind(i),i.setIsInThrottle=i.setIsInThrottle.bind(i),i.next=P.throttle(i.next.bind(i),n.transitionDuration||R,i.setIsInThrottle),i.previous=P.throttle(i.previous.bind(i),n.transitionDuration||R,i.setIsInThrottle),i.goToSlide=P.throttle(i.goToSlide.bind(i),n.transitionDuration||R,i.setIsInThrottle),i.onMove=!1,i.initialX=0,i.lastX=0,i.isAnimationAllowed=!1,i.direction="",i.initialY=0,i.isInThrottle=!1,i.transformPlaceHolder=0,i}return Cr(e,t),e.prototype.resetTotalItems=function(){var n=this,i=_.Children.count(this.props.children),r=P.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,i));this.setState({totalItems:i,currentSlide:r},function(){n.setContainerAndItemWidth(n.state.slidesToShow,!0)})},e.prototype.setIsInThrottle=function(n){n===void 0&&(n=!1),this.isInThrottle=n},e.prototype.setTransformDirectly=function(n,i){var r=this.props.additionalTransfrom;this.transformPlaceHolder=n;var a=Et.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(i),this.listRef.current.style.transform="translate3d("+(a+r)+"px,0,0)")},e.prototype.setAnimationDirectly=function(n){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=n?this.props.customTransition||Ye:"none")},e.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.setClones=function(n,i,r,a){var s=this;a===void 0&&(a=!1),this.isAnimationAllowed=!1;var o=_.Children.toArray(this.props.children),l=P.getInitialSlideInInfiniteMode(n||this.state.slidesToShow,o),c=P.getClones(this.state.slidesToShow,o),u=o.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:c.length,currentSlide:r&&!a?u:l},function(){s.correctItemsPosition(i||s.state.itemWidth)})},e.prototype.setItemsToShow=function(n,i){var r=this,a=this.props.responsive;Object.keys(a).forEach(function(s){var o=a[s],l=o.breakpoint,c=o.items,u=l.max,f=l.min,d=[window.innerWidth];window.screen&&window.screen.width&&d.push(window.screen.width);var h=Math.min.apply(Math,d);f<=h&&h<=u&&(r.setState({slidesToShow:c,deviceType:s}),r.setContainerAndItemWidth(c,n,i))})},e.prototype.setContainerAndItemWidth=function(n,i,r){var a=this;if(this.containerRef&&this.containerRef.current){var s=this.containerRef.current.offsetWidth,o=P.getItemClientSideWidth(this.props,n,s);this.setState({containerWidth:s,itemWidth:o},function(){a.props.infinite&&a.setClones(n,o,i,r)}),i&&this.correctItemsPosition(o)}},e.prototype.correctItemsPosition=function(n,i,r){i&&(this.isAnimationAllowed=!0),!i&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var a=this.state.totalItems<this.state.slidesToShow?0:-n*this.state.currentSlide;r&&this.setTransformDirectly(a,!0),this.setState({transform:a})},e.prototype.onResize=function(n){var i;i=!!this.props.infinite&&(typeof n!="boolean"||!n),this.setItemsToShow(i)},e.prototype.componentDidUpdate=function(n,i){var r=this,a=n.keyBoardControl,s=n.autoPlay,o=n.children,l=i.containerWidth,c=i.domLoaded,u=i.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==l&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){r.setItemsToShow(!0)},this.props.transitionDuration||R)),a&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!a&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),s&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),s||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),o.length!==this.props.children.length?e.clonesTimeout=setTimeout(function(){r.props.infinite?r.setClones(r.state.slidesToShow,r.state.itemWidth,!0,!0):r.resetTotalItems()},this.props.transitionDuration||R):this.props.infinite&&this.state.currentSlide!==u&&this.correctClonesPosition({domLoaded:c}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&P.isInRightEnd(this.state)){var f=this.props.transitionDuration||R;e.isInThrottleTimeout=setTimeout(function(){r.setIsInThrottle(!1),r.resetAutoplayInterval(),r.goToSlide(0,void 0,!!r.props.rewindWithAnimation)},f+this.props.autoPlaySpeed)}},e.prototype.correctClonesPosition=function(n){var i=this,r=n.domLoaded,a=_.Children.toArray(this.props.children),s=P.checkClonesPosition(this.state,a,this.props),o=s.isReachingTheEnd,l=s.isReachingTheStart,c=s.nextSlide,u=s.nextPosition;this.state.domLoaded&&r&&(o||l)&&(this.isAnimationAllowed=!1,e.transformTimeout=setTimeout(function(){i.setState({transform:u,currentSlide:c})},this.props.transitionDuration||R))},e.prototype.next=function(n){var i=this;n===void 0&&(n=0);var r=this.props,a=r.afterChange,s=r.beforeChange;if(!P.notEnoughChildren(this.state)){var o=P.populateNextSlides(this.state,this.props,n),l=o.nextSlides,c=o.nextPosition,u=this.state.currentSlide;l!==void 0&&c!==void 0&&(typeof s=="function"&&s(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:l},function(){typeof a=="function"&&(e.afterChangeTimeout=setTimeout(function(){a(u,i.getState())},i.props.transitionDuration||R))}))}},e.prototype.previous=function(n){var i=this;n===void 0&&(n=0);var r=this.props,a=r.afterChange,s=r.beforeChange;if(!P.notEnoughChildren(this.state)){var o=P.populatePreviousSlides(this.state,this.props,n),l=o.nextSlides,c=o.nextPosition;if(l!==void 0&&c!==void 0){var u=this.state.currentSlide;typeof s=="function"&&s(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:l},function(){typeof a=="function"&&(e.afterChangeTimeout2=setTimeout(function(){a(u,i.getState())},i.props.transitionDuration||R))})}}},e.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),e.clonesTimeout&&clearTimeout(e.clonesTimeout),e.isInThrottleTimeout&&clearTimeout(e.isInThrottleTimeout),e.transformTimeout&&clearTimeout(e.transformTimeout),e.afterChangeTimeout&&clearTimeout(e.afterChangeTimeout),e.afterChangeTimeout2&&clearTimeout(e.afterChangeTimeout2),e.afterChangeTimeout3&&clearTimeout(e.afterChangeTimeout3)},e.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},e.prototype.getCords=function(n){var i=n.clientX,r=n.clientY;return{clientX:Et.parsePosition(this.props,i),clientY:Et.parsePosition(this.props,r)}},e.prototype.handleDown=function(n){if(!(!q.isMouseMoveEvent(n)&&!this.props.swipeable||q.isMouseMoveEvent(n)&&!this.props.draggable||this.isInThrottle)){var i=this.getCords(q.isMouseMoveEvent(n)?n:n.touches[0]),r=i.clientX,a=i.clientY;this.onMove=!0,this.initialX=r,this.initialY=a,this.lastX=r,this.isAnimationAllowed=!1}},e.prototype.handleMove=function(n){if(!(!q.isMouseMoveEvent(n)&&!this.props.swipeable||q.isMouseMoveEvent(n)&&!this.props.draggable||P.notEnoughChildren(this.state))){var i=this.getCords(q.isMouseMoveEvent(n)?n:n.touches[0]),r=i.clientX,a=i.clientY,s=this.initialX-r,o=this.initialY-a;if(this.onMove){if(!(Math.abs(s)>Math.abs(o)))return;var l=P.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,r,this.transformPlaceHolder),c=l.direction,u=l.nextPosition,f=l.canContinue;c&&(this.direction=c,f&&u!==void 0&&this.setTransformDirectly(u)),this.lastX=r}}},e.prototype.handleOut=function(n){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var i=n.type==="touchend"&&!this.props.swipeable,r=(n.type==="mouseleave"||n.type==="mouseup")&&!this.props.draggable;if(!i&&!r&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var a=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(a)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(a=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(a)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},e.prototype.isInViewport=function(n){var i=n.getBoundingClientRect(),r=i.top,a=r===void 0?0:r,s=i.left,o=s===void 0?0:s,l=i.bottom,c=l===void 0?0:l,u=i.right,f=u===void 0?0:u;return 0<=a&&0<=o&&c<=(window.innerHeight||document.documentElement.clientHeight)&&f<=(window.innerWidth||document.documentElement.clientWidth)},e.prototype.isChildOfCarousel=function(n){return!!(n instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(n)},e.prototype.onKeyUp=function(n){var i=n.target;switch(n.keyCode){case 37:if(this.isChildOfCarousel(i))return this.previous();break;case 39:if(this.isChildOfCarousel(i))return this.next();break;case 9:if(this.isChildOfCarousel(i)&&i instanceof HTMLInputElement&&this.isInViewport(i))return this.next()}},e.prototype.handleEnter=function(n){q.isMouseMoveEvent(n)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},e.prototype.goToSlide=function(n,i,r){var a=this;if(r===void 0&&(r=!0),!this.isInThrottle){var s=this.state.itemWidth,o=this.props,l=o.afterChange,c=o.beforeChange,u=this.state.currentSlide;typeof c!="function"||i&&(typeof i!="object"||i.skipBeforeChange)||c(n,this.getState()),this.isAnimationAllowed=r,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:n,transform:-s*n},function(){a.props.infinite&&a.correctClonesPosition({domLoaded:!0}),typeof l!="function"||i&&(typeof i!="object"||i.skipAfterChange)||(e.afterChangeTimeout3=setTimeout(function(){l(u,a.getState())},a.props.transitionDuration||R))})}},e.prototype.getState=function(){return this.state},e.prototype.renderLeftArrow=function(n){var i=this,r=this.props,a=r.customLeftArrow,s=r.rtl;return _.createElement(Ue.LeftArrow,{customLeftArrow:a,getState:function(){return i.getState()},previous:this.previous,disabled:n,rtl:s})},e.prototype.renderRightArrow=function(n){var i=this,r=this.props,a=r.customRightArrow,s=r.rtl;return _.createElement(Ue.RightArrow,{customRightArrow:a,getState:function(){return i.getState()},next:this.next,disabled:n,rtl:s})},e.prototype.renderButtonGroups=function(){var n=this,i=this.props.customButtonGroup;return i?_.cloneElement(i,{previous:function(){return n.previous()},next:function(){return n.next()},goToSlide:function(r,a){return n.goToSlide(r,a)},carouselState:this.getState()}):null},e.prototype.renderDotsList=function(){var n=this;return _.createElement(Ar.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return n.getState()}})},e.prototype.renderCarouselItems=function(){var n=[];if(this.props.infinite){var i=_.Children.toArray(this.props.children);n=P.getClones(this.state.slidesToShow,i)}return _.createElement(Er.default,{clones:n,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:P.notEnoughChildren(this.state),props:this.props})},e.prototype.render=function(){var n=this.props,i=n.deviceType,r=n.arrows,a=n.renderArrowsWhenDisabled,s=n.removeArrowOnDeviceType,o=n.infinite,l=n.containerClass,c=n.sliderClass,u=n.customTransition,f=n.additionalTransfrom,d=n.renderDotsOutside,h=n.renderButtonGroupOutside,p=n.className,x=n.rtl,g=P.getInitialState(this.state,this.props),S=g.shouldRenderOnSSR,T=g.shouldRenderAtAll,v=P.isInLeftEnd(this.state),k=P.isInRightEnd(this.state),C=r&&!(s&&(i&&-1<s.indexOf(i)||this.state.deviceType&&-1<s.indexOf(this.state.deviceType)))&&!P.notEnoughChildren(this.state)&&T,G=!o&&v,z=!o&&k,it=Et.getTransform(this.state,this.props);return _.createElement(_.Fragment,null,_.createElement("div",{className:"react-multi-carousel-list "+l+" "+p,dir:x?"rtl":"ltr",ref:this.containerRef},_.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+c,style:{transition:this.isAnimationAllowed?u||Ye:"none",overflow:S?"hidden":"unset",transform:"translate3d("+(it+f)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),C&&(!G||a)&&this.renderLeftArrow(G),C&&(!z||a)&&this.renderRightArrow(z),T&&!h&&this.renderButtonGroups(),T&&!d&&this.renderDotsList()),T&&d&&this.renderDotsList(),T&&h&&this.renderButtonGroups())},e.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},e}(_.Component);Se.default=Ir;Object.defineProperty(be,"__esModule",{value:!0});var kr=Se;be.default=kr.default;var Pr=be;const Or=fi(Pr),Ge=()=>{};let ke={},kn={},Pn=null,On={mark:Ge,measure:Ge};try{typeof window<"u"&&(ke=window),typeof document<"u"&&(kn=document),typeof MutationObserver<"u"&&(Pn=MutationObserver),typeof performance<"u"&&(On=performance)}catch{}const{userAgent:Ve=""}=ke.navigator||{},X=ke,w=kn,He=Pn,It=On;X.document;const Y=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",_n=~Ve.indexOf("MSIE")||~Ve.indexOf("Trident/");var A="classic",Mn="duotone",M="sharp",L="sharp-duotone",_r=[A,Mn,M,L],Mr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},$e={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Lr=["kit"],Nr=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Rr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,jr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Fr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Dr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Wr={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},zr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Br={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ln={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Ur=["solid","regular","light","thin","duotone","brands"],Nn=[1,2,3,4,5,6,7,8,9,10],Yr=Nn.concat([11,12,13,14,15,16,17,18,19,20]),mt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gr=[...Object.keys(Wr),...Ur,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mt.GROUP,mt.SWAP_OPACITY,mt.PRIMARY,mt.SECONDARY].concat(Nn.map(t=>"".concat(t,"x"))).concat(Yr.map(t=>"w-".concat(t))),Vr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Hr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},$r={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Xe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const B="___FONT_AWESOME___",te=16,Rn="fa",jn="svg-inline--fa",et="data-fa-i2svg",ee="data-fa-pseudo-element",Xr="data-fa-pseudo-element-pending",Pe="data-prefix",Oe="data-icon",Ke="fontawesome-i2svg",Kr="async",Qr=["HTML","HEAD","STYLE","SCRIPT"],Fn=(()=>{try{return!0}catch{return!1}})(),Dn=[A,M,L];function Tt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const Wn={...Ln};Wn[A]={...Ln[A],...$e.kit,...$e["kit-duotone"]};const Z=Tt(Wn),ne={...Br};ne[A]={...ne[A],...Xe.kit,...Xe["kit-duotone"]};const yt=Tt(ne),ie={...zr};ie[A]={...ie[A],...$r.kit};const tt=Tt(ie),re={...Dr};re[A]={...re[A],...Hr.kit};const qr=Tt(re),Jr=Nr,zn="fa-layers-text",Zr=Rr,ta={...Mr};Tt(ta);const ea=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vt=mt,lt=new Set;Object.keys(yt[A]).map(lt.add.bind(lt));Object.keys(yt[M]).map(lt.add.bind(lt));Object.keys(yt[L]).map(lt.add.bind(lt));const na=[...Lr,...Gr],pt=X.FontAwesomeConfig||{};function ia(t){var e=w.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ra(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}w&&typeof w.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=ra(ia(n));r!=null&&(pt[i]=r)});const Bn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rn,replacementClass:jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pt.familyPrefix&&(pt.cssPrefix=pt.familyPrefix);const ct={...Bn,...pt};ct.autoReplaceSvg||(ct.observeMutations=!1);const m={};Object.keys(Bn).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){ct[t]=e,gt.forEach(n=>n(m))},get:function(){return ct[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){ct.cssPrefix=t,gt.forEach(e=>e(m))},get:function(){return ct.cssPrefix}});X.FontAwesomeConfig=m;const gt=[];function aa(t){return gt.push(t),()=>{gt.splice(gt.indexOf(t),1)}}const H=te,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oa(t){if(!t||!Y)return;const e=w.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=w.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const a=n[r],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=a)}return w.head.insertBefore(e,i),t}const sa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bt(){let t=12,e="";for(;t-- >0;)e+=sa[Math.random()*62|0];return e}function ut(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _e(t){return t.classList?ut(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Un(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function la(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Un(t[n]),'" '),"").trim()}function Wt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Me(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function ca(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(s," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function ua(t){let{transform:e,width:n=te,height:i=te,startCentered:r=!1}=t,a="";return r&&_n?a+="translate(".concat(e.x/H-n/2,"em, ").concat(e.y/H-i/2,"em) "):r?a+="translate(calc(-50% + ".concat(e.x/H,"em), calc(-50% + ").concat(e.y/H,"em)) "):a+="translate(".concat(e.x/H,"em, ").concat(e.y/H,"em) "),a+="scale(".concat(e.size/H*(e.flipX?-1:1),", ").concat(e.size/H*(e.flipY?-1:1),") "),a+="rotate(".concat(e.rotate,"deg) "),a}var fa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Yn(){const t=Rn,e=jn,n=m.cssPrefix,i=m.replacementClass;let r=fa;if(n!==t||i!==e){const a=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(i))}return r}let Qe=!1;function Ht(){m.autoAddCss&&!Qe&&(oa(Yn()),Qe=!0)}var da={mixout(){return{dom:{css:Yn,insertCss:Ht}}},hooks(){return{beforeDOMElementCreation(){Ht()},beforeI2svg(){Ht()}}}};const U=X||{};U[B]||(U[B]={});U[B].styles||(U[B].styles={});U[B].hooks||(U[B].hooks={});U[B].shims||(U[B].shims=[]);var D=U[B];const Gn=[],Vn=function(){w.removeEventListener("DOMContentLoaded",Vn),Mt=1,Gn.map(t=>t())};let Mt=!1;Y&&(Mt=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),Mt||w.addEventListener("DOMContentLoaded",Vn));function ma(t){Y&&(Mt?setTimeout(t,0):Gn.push(t))}function wt(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?Un(t):"<".concat(e," ").concat(la(n),">").concat(i.map(wt).join(""),"</").concat(e,">")}function qe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var $t=function(e,n,i,r){var a=Object.keys(e),s=a.length,o=n,l,c,u;for(i===void 0?(l=1,u=e[a[0]]):(l=0,u=i);l<s;l++)c=a[l],u=o(u,e[c],c,e);return u};function ha(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ae(t){const e=ha(t);return e.length===1?e[0].toString(16):null}function pa(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Je(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function oe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=Je(e);typeof D.hooks.addPack=="function"&&!i?D.hooks.addPack(t,Je(e)):D.styles[t]={...D.styles[t]||{},...r},t==="fas"&&oe("fa",e)}const{styles:J,shims:ga}=D,va={[A]:Object.values(tt[A]),[M]:Object.values(tt[M]),[L]:Object.values(tt[L])};let Le=null,Hn={},$n={},Xn={},Kn={},Qn={};const ya={[A]:Object.keys(Z[A]),[M]:Object.keys(Z[M]),[L]:Object.keys(Z[L])};function ba(t){return~na.indexOf(t)}function Sa(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!ba(r)?r:null}const qn=()=>{const t=i=>$t(J,(r,a,s)=>(r[s]=$t(a,i,{}),r),{});Hn=t((i,r,a)=>(r[3]&&(i[r[3]]=a),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{i[o.toString(16)]=a}),i)),$n=t((i,r,a)=>(i[a]=a,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{i[o]=a}),i)),Qn=t((i,r,a)=>{const s=r[2];return i[a]=a,s.forEach(o=>{i[o]=a}),i});const e="far"in J||m.autoFetchSvg,n=$t(ga,(i,r)=>{const a=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:o}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:o}),i},{names:{},unicodes:{}});Xn=n.names,Kn=n.unicodes,Le=zt(m.styleDefault,{family:m.familyDefault})};aa(t=>{Le=zt(t.styleDefault,{family:m.familyDefault})});qn();function Ne(t,e){return(Hn[t]||{})[e]}function xa(t,e){return($n[t]||{})[e]}function $(t,e){return(Qn[t]||{})[e]}function Jn(t){return Xn[t]||{prefix:null,iconName:null}}function Ta(t){const e=Kn[t],n=Ne("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function K(){return Le}const Re=()=>({prefix:null,iconName:null,rest:[]});function zt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,i=Z[n][t],r=yt[n][t]||yt[n][i],a=t in D.styles?t:null;return r||a||null}const wa={[A]:Object.keys(tt[A]),[M]:Object.keys(tt[M]),[L]:Object.keys(tt[L])};function Bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,i={[A]:"".concat(m.cssPrefix,"-").concat(A),[M]:"".concat(m.cssPrefix,"-").concat(M),[L]:"".concat(m.cssPrefix,"-").concat(L)};let r=null,a=A;const s=_r.filter(l=>l!==Mn);s.forEach(l=>{(t.includes(i[l])||t.some(c=>wa[l].includes(c)))&&(a=l)});const o=t.reduce((l,c)=>{const u=Sa(m.cssPrefix,c);if(J[c]?(c=va[a].includes(c)?qr[a][c]:c,r=c,l.prefix=c):ya[a].indexOf(c)>-1?(r=c,l.prefix=zt(c,{family:a})):u?l.iconName=u:c!==m.replacementClass&&!s.some(f=>c===i[f])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const f=r==="fa"?Jn(l.iconName):{},d=$(l.prefix,l.iconName);f.prefix&&(r=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!J.far&&J.fas&&!m.autoFetchSvg&&(l.prefix="fas")}return l},Re());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&a===M&&(J.fass||m.autoFetchSvg)&&(o.prefix="fass",o.iconName=$(o.prefix,o.iconName)||o.iconName),!o.prefix&&a===L&&(J.fasds||m.autoFetchSvg)&&(o.prefix="fasds",o.iconName=$(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=K()||"fas"),o}let Ca=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(a=>{this.definitions[a]={...this.definitions[a]||{},...r[a]},oe(a,r[a]);const s=tt[A][a];s&&oe(s,r[a]),qn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:a,iconName:s,icon:o}=i[r],l=o[2];e[a]||(e[a]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[a][c]=o)}),e[a][s]=o}),e}},Ze=[],rt={};const st={},Aa=Object.keys(st);function Ea(t,e){let{mixoutsTo:n}=e;return Ze=t,rt={},Object.keys(st).forEach(i=>{Aa.indexOf(i)===-1&&delete st[i]}),Ze.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(a=>{typeof r[a]=="function"&&(n[a]=r[a]),typeof r[a]=="object"&&Object.keys(r[a]).forEach(s=>{n[a]||(n[a]={}),n[a][s]=r[a][s]})}),i.hooks){const a=i.hooks();Object.keys(a).forEach(s=>{rt[s]||(rt[s]=[]),rt[s].push(a[s])})}i.provides&&i.provides(st)}),n}function se(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(rt[t]||[]).forEach(s=>{e=s.apply(null,[e,...i])}),e}function nt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(rt[t]||[]).forEach(a=>{a.apply(null,n)})}function Q(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return st[t]?st[t].apply(null,e):void 0}function le(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||K();if(e)return e=$(n,e)||e,qe(Zn.definitions,n,e)||qe(D.styles,n,e)}const Zn=new Ca,Ia=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,nt("noAuto")},ka={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(nt("beforeI2svg",t),Q("pseudoElements2svg",t),Q("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ma(()=>{Oa({autoReplaceSvgRoot:e}),nt("watch",t)})}},Pa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=zt(t[0]);return{prefix:n,iconName:$(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Jr))){const e=Bt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||K(),iconName:$(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=K();return{prefix:e,iconName:$(e,t)||t}}}},N={noAuto:Ia,config:m,dom:ka,parse:Pa,library:Zn,findIconDefinition:le,toHtml:wt},Oa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=w}=t;(Object.keys(D.styles).length>0||m.autoFetchSvg)&&Y&&m.autoReplaceSvg&&N.dom.i2svg({node:e})};function Ut(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>wt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Y)return;const n=w.createElement("div");return n.innerHTML=t.html,n.children}}),t}function _a(t){let{children:e,main:n,mask:i,attributes:r,styles:a,transform:s}=t;if(Me(s)&&n.found&&!i.found){const{width:o,height:l}=n,c={x:o/l/2,y:.5};r.style=Wt({...a,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Ma(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:a}=t;const s=a===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:s},children:i}]}]}function je(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:a,symbol:s,title:o,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:d,height:h}=n.found?n:e,p=i==="fak",x=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(C=>u.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(u.classes).join(" ");let g={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(h)}};const S=p&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/h*16*.0625,"em")}:{};f&&(g.attributes[et]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||bt())},children:[o]}),delete g.attributes.title);const T={...g,prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:a,symbol:s,styles:{...S,...u.styles}},{children:v,attributes:k}=n.found&&e.found?Q("generateAbstractMask",T)||{children:[],attributes:{}}:Q("generateAbstractIcon",T)||{children:[],attributes:{}};return T.children=v,T.attributes=k,s?Ma(T):_a(T)}function tn(t){const{content:e,width:n,height:i,transform:r,title:a,extra:s,watchable:o=!1}=t,l={...s.attributes,...a?{title:a}:{},class:s.classes.join(" ")};o&&(l[et]="");const c={...s.styles};Me(r)&&(c.transform=ua({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const u=Wt(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),a&&f.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),f}function La(t){const{content:e,title:n,extra:i}=t,r={...i.attributes,...n?{title:n}:{},class:i.classes.join(" ")},a=Wt(i.styles);a.length>0&&(r.style=a);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Xt}=D;function ce(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Vt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Vt.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const Na={found:!1,width:512,height:512};function Ra(t,e){!Fn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ue(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=K()),new Promise((i,r)=>{if(n==="fa"){const a=Jn(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Xt[e]&&Xt[e][t]){const a=Xt[e][t];return i(ce(a))}Ra(t,e),i({...Na,icon:m.showMissingIcons&&t?Q("missingIconAbstract")||{}:{}})})}const en=()=>{},fe=m.measurePerformance&&It&&It.mark&&It.measure?It:{mark:en,measure:en},ht='FA "6.6.0"',ja=t=>(fe.mark("".concat(ht," ").concat(t," begins")),()=>ti(t)),ti=t=>{fe.mark("".concat(ht," ").concat(t," ends")),fe.measure("".concat(ht," ").concat(t),"".concat(ht," ").concat(t," begins"),"".concat(ht," ").concat(t," ends"))};var Fe={begin:ja,end:ti};const kt=()=>{};function nn(t){return typeof(t.getAttribute?t.getAttribute(et):null)=="string"}function Fa(t){const e=t.getAttribute?t.getAttribute(Pe):null,n=t.getAttribute?t.getAttribute(Oe):null;return e&&n}function Da(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Wa(){return m.autoReplaceSvg===!0?Pt.replace:Pt[m.autoReplaceSvg]||Pt.replace}function za(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function Ba(t){return w.createElement(t)}function ei(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?za:Ba}=e;if(typeof t=="string")return w.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(a){i.setAttribute(a,t.attributes[a])}),(t.children||[]).forEach(function(a){i.appendChild(ei(a,{ceFn:n}))}),i}function Ua(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Pt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ei(n),e)}),e.getAttribute(et)===null&&m.keepOriginalSource){let n=w.createComment(Ua(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~_e(e).indexOf(m.replacementClass))return Pt.replace(t);const i=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const a=n[0].attributes.class.split(" ").reduce((s,o)=>(o===m.replacementClass||o.match(i)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}const r=n.map(a=>wt(a)).join(`
`);e.setAttribute(et,""),e.innerHTML=r}};function rn(t){t()}function ni(t,e){const n=typeof e=="function"?e:kt;if(t.length===0)n();else{let i=rn;m.mutateApproach===Kr&&(i=X.requestAnimationFrame||rn),i(()=>{const r=Wa(),a=Fe.begin("mutate");t.map(r),a(),n()})}}let De=!1;function ii(){De=!0}function de(){De=!1}let Lt=null;function an(t){if(!He||!m.observeMutations)return;const{treeCallback:e=kt,nodeCallback:n=kt,pseudoElementsCallback:i=kt,observeMutationsRoot:r=w}=t;Lt=new He(a=>{if(De)return;const s=K();ut(a).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!nn(o.addedNodes[0])&&(m.searchPseudoElements&&i(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&m.searchPseudoElements&&i(o.target.parentNode),o.type==="attributes"&&nn(o.target)&&~ea.indexOf(o.attributeName))if(o.attributeName==="class"&&Fa(o.target)){const{prefix:l,iconName:c}=Bt(_e(o.target));o.target.setAttribute(Pe,l||s),c&&o.target.setAttribute(Oe,c)}else Da(o.target)&&n(o.target)})}),Y&&Lt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ya(){Lt&&Lt.disconnect()}function Ga(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const a=r.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(i[s]=o.join(":").trim()),i},{})),n}function Va(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=Bt(_e(t));return r.prefix||(r.prefix=K()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=xa(r.prefix,t.innerText)||Ne(r.prefix,ae(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ha(t){const e=ut(t.attributes).reduce((r,a)=>(r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(i||bt()):(e["aria-hidden"]="true",e.focusable="false")),e}function $a(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function on(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=Va(t),a=Ha(t),s=se("parseNodeAttributes",{},t);let o=e.styleParser?Ga(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:a},...s}}const{styles:Xa}=D;function ri(t){const e=m.autoReplaceSvg==="nest"?on(t,{styleParser:!1}):on(t);return~e.extra.classes.indexOf(zn)?Q("generateLayersText",t,e):Q("generateSvgReplacementMutation",t,e)}let W=new Set;Dn.map(t=>{W.add("fa-".concat(t))});Object.keys(Z[A]).map(W.add.bind(W));Object.keys(Z[M]).map(W.add.bind(W));Object.keys(Z[L]).map(W.add.bind(W));W=[...W];function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();const n=w.documentElement.classList,i=u=>n.add("".concat(Ke,"-").concat(u)),r=u=>n.remove("".concat(Ke,"-").concat(u)),a=m.autoFetchSvg?W:Dn.map(u=>"fa-".concat(u)).concat(Object.keys(Xa));a.includes("fa")||a.push("fa");const s=[".".concat(zn,":not([").concat(et,"])")].concat(a.map(u=>".".concat(u,":not([").concat(et,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=ut(t.querySelectorAll(s))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();const l=Fe.begin("onTree"),c=o.reduce((u,f)=>{try{const d=ri(f);d&&u.push(d)}catch(d){Fn||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(d=>{ni(d,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),f(d)})})}function Ka(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ri(t).then(n=>{n&&ni([n],e)})}function Qa(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:le(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:le(r||{})),t(i,{...n,mask:r})}}const qa=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,symbol:i=!1,mask:r=null,maskId:a=null,title:s=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:d,icon:h}=t;return Ut({type:"icon",...t},()=>(nt("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(s?c["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(o||bt()):(c["aria-hidden"]="true",c.focusable="false")),je({icons:{main:ce(h),mask:r?ce(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:{...F,...n},symbol:i,title:s,maskId:a,titleId:o,extra:{attributes:c,styles:u,classes:l}})))};var Ja={mixout(){return{icon:Qa(qa)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=sn,t.nodeCallback=Ka,t}}},provides(t){t.i2svg=function(e){const{node:n=w,callback:i=()=>{}}=e;return sn(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:a,prefix:s,transform:o,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((d,h)=>{Promise.all([ue(i,s),c.iconName?ue(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(p=>{let[x,g]=p;d([e,je({icons:{main:x,mask:g},prefix:s,iconName:i,transform:o,symbol:l,maskId:u,title:r,titleId:a,extra:f,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:a,styles:s}=e;const o=Wt(s);o.length>0&&(i.style=o);let l;return Me(a)&&(l=Q("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},Za={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ut({type:"layer"},()=>{nt("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(a=>{i=i.concat(a.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},to={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:a={}}=e;return Ut({type:"counter",content:t},()=>(nt("beforeDOMElementCreation",{content:t,params:e}),La({content:t.toString(),title:n,extra:{attributes:r,styles:a,classes:["".concat(m.cssPrefix,"-layers-counter"),...i]}})))}}}},eo={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,title:i=null,classes:r=[],attributes:a={},styles:s={}}=e;return Ut({type:"text",content:t},()=>(nt("beforeDOMElementCreation",{content:t,params:e}),tn({content:t,transform:{...F,...n},title:i,extra:{attributes:a,styles:s,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:a}=n;let s=null,o=null;if(_n){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/l,o=c.height/l}return m.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,tn({content:e.innerHTML,width:s,height:o,transform:r,title:i,extra:a,watchable:!0})])}}};const no=new RegExp('"',"ug"),ln=[1105920,1112319],cn={FontAwesome:{normal:"fas",400:"fas"},...Fr,...jr,...Vr},me=Object.keys(cn).reduce((t,e)=>(t[e.toLowerCase()]=cn[e],t),{}),io=Object.keys(me).reduce((t,e)=>{const n=me[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ro(t){const e=t.replace(no,""),n=pa(e,0),i=n>=ln[0]&&n<=ln[1],r=e.length===2?e[0]===e[1]:!1;return{value:ae(r?e[0]:e),isSecondary:i||r}}function ao(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(me[n]||{})[r]||io[n]}function un(t,e){const n="".concat(Xr).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const s=ut(t.children).filter(d=>d.getAttribute(ee)===e)[0],o=X.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),c=l.match(Zr),u=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(s&&!c)return t.removeChild(s),i();if(c&&f!=="none"&&f!==""){const d=o.getPropertyValue("content");let h=ao(l,u);const{value:p,isSecondary:x}=ro(d),g=c[0].startsWith("FontAwesome");let S=Ne(h,p),T=S;if(g){const v=Ta(p);v.iconName&&v.prefix&&(S=v.iconName,h=v.prefix)}if(S&&!x&&(!s||s.getAttribute(Pe)!==h||s.getAttribute(Oe)!==T)){t.setAttribute(n,T),s&&t.removeChild(s);const v=$a(),{extra:k}=v;k.attributes[ee]=e,ue(S,h).then(C=>{const G=je({...v,icons:{main:C,mask:Re()},prefix:h,iconName:T,extra:k,watchable:!0}),z=w.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=G.map(it=>wt(it)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function oo(t){return Promise.all([un(t,"::before"),un(t,"::after")])}function so(t){return t.parentNode!==document.head&&!~Qr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ee)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fn(t){if(Y)return new Promise((e,n)=>{const i=ut(t.querySelectorAll("*")).filter(so).map(oo),r=Fe.begin("searchPseudoElements");ii(),Promise.all(i).then(()=>{r(),de(),e()}).catch(()=>{r(),de(),n()})})}var lo={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=w}=e;m.searchPseudoElements&&fn(n)}}};let dn=!1;var co={mixout(){return{dom:{unwatch(){ii(),dn=!0}}}},hooks(){return{bootstrap(){an(se("mutationObserverCallbacks",{}))},noAuto(){Ya()},watch(t){const{observeMutationsRoot:e}=t;dn?de():an(se("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const mn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),a=r[0];let s=r.slice(1).join("-");if(a&&s==="h")return n.flipX=!0,n;if(a&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(a){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var uo={mixout(){return{parse:{transform:t=>mn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=mn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:a}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},f={transform:"translate(".concat(a/2*-1," -256)")},d={outer:s,inner:u,path:f};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Kt={x:0,y:0,width:"100%",height:"100%"};function hn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fo(t){return t.tag==="g"?t.children:[t]}var mo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?Bt(n.split(" ").map(r=>r.trim())):Re();return i.prefix||(i.prefix=K()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:a,maskId:s,transform:o}=e;const{width:l,icon:c}=r,{width:u,icon:f}=a,d=ca({transform:o,containerWidth:u,iconWidth:l}),h={tag:"rect",attributes:{...Kt,fill:"white"}},p=c.children?{children:c.children.map(hn)}:{},x={tag:"g",attributes:{...d.inner},children:[hn({tag:c.tag,attributes:{...c.attributes,...d.path},...p})]},g={tag:"g",attributes:{...d.outer},children:[x]},S="mask-".concat(s||bt()),T="clip-".concat(s||bt()),v={tag:"mask",attributes:{...Kt,id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[h,g]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:fo(f)},v]};return n.push(k,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(S,")"),...Kt}}),{children:n,attributes:i}}}},ho={provides(t){let e=!1;X.matchMedia&&(e=X.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const a={...r,attributeName:"opacity"},s={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...a,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...a,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...a,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},po={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},go=[da,Ja,Za,to,eo,lo,co,uo,mo,ho,po];Ea(go,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;const he=N.parse;N.findIconDefinition;N.toHtml;const vo=N.icon;N.layer;N.text;N.counter;function pn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pn(Object(n),!0).forEach(function(i){at(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pn(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Nt(t){"@babel/helpers - typeof";return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt(t)}function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yo(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function bo(t,e){if(t==null)return{};var n=yo(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function pe(t){return So(t)||xo(t)||To(t)||wo()}function So(t){if(Array.isArray(t))return ge(t)}function xo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function To(t,e){if(t){if(typeof t=="string")return ge(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ge(t,e)}}function ge(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function wo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Co(t){var e,n=t.beat,i=t.fade,r=t.beatFade,a=t.bounce,s=t.shake,o=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,f=t.pulse,d=t.fixedWidth,h=t.inverse,p=t.border,x=t.listItem,g=t.flip,S=t.size,T=t.rotation,v=t.pull,k=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":s,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":d,"fa-inverse":h,"fa-border":p,"fa-li":x,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},at(e,"fa-".concat(S),typeof S<"u"&&S!==null),at(e,"fa-rotate-".concat(T),typeof T<"u"&&T!==null&&T!==0),at(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),at(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(k).map(function(C){return k[C]?C:null}).filter(function(C){return C})}function Ao(t){return t=t-0,t===t}function ai(t){return Ao(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Eo=["style"];function Io(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ko(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=ai(n.slice(0,i)),a=n.slice(i+1).trim();return r.startsWith("webkit")?e[Io(r)]=a:e[r]=a,e},{})}function oi(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return oi(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=ko(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[ai(c)]=u}return l},{attrs:{}}),a=n.style,s=a===void 0?{}:a,o=bo(n,Eo);return r.attrs.style=j(j({},r.attrs.style),s),t.apply(void 0,[e.tag,j(j({},r.attrs),o)].concat(pe(i)))}var si=!1;try{si=!0}catch{}function Po(){if(!si&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function gn(t){if(t&&Nt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(he.icon)return he.icon(t);if(t===null)return null;if(t&&Nt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Qt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?at({},t,e):{}}var vn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},We=bn.forwardRef(function(t,e){var n=j(j({},vn),t),i=n.icon,r=n.mask,a=n.symbol,s=n.className,o=n.title,l=n.titleId,c=n.maskId,u=gn(i),f=Qt("classes",[].concat(pe(Co(n)),pe((s||"").split(" ")))),d=Qt("transform",typeof n.transform=="string"?he.transform(n.transform):n.transform),h=Qt("mask",gn(r)),p=vo(u,j(j(j(j({},f),d),h),{},{symbol:a,title:o,titleId:l,maskId:c}));if(!p)return Po("Could not find icon",u),null;var x=p.abstract,g={ref:e};return Object.keys(n).forEach(function(S){vn.hasOwnProperty(S)||(g[S]=n[S])}),Oo(x[0],g)});We.displayName="FontAwesomeIcon";We.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool};var Oo=oi.bind(null,bn.createElement);const _o={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},qt={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]};function Mo(t){const e=zi("(orientation: landscape)"),{theme:n}=I.useContext(St),{buttonColor:i,buttonTextColor:r,mainBGColor:a,altTextColor:s}=xt(n),o=({onClick:u,icon:f})=>b.jsx("button",{onClick:u,"aria-label":f===qt?"Previous":"Next",style:{position:"absolute",top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0)",border:"none",width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",zIndex:2,[f===qt?"left":"right"]:"10px"},children:b.jsx(We,{icon:f,color:i,size:"lg",width:"100px",height:"40px"})}),l={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:e?1:2},mobile:{breakpoint:{max:464,min:0},items:1}},c=localStorage.getItem(vt)||yn;return b.jsx(Ii,{style:{backgroundColor:a},children:t.slides.map((u,f)=>{var d;return b.jsxs(ki,{children:[b.jsx(Rt,{fontSize:24,textAlign:"left",fontFamily:'"Buenard"',fontWeight:"700",lineHeight:47,color:s,className:"carouselTitle",children:(d=u.library.title)==null?void 0:d[c]}),b.jsx(Pi,{svgstrokecolor:r,children:b.jsx(Or,{arrows:!0,responsive:l,showDots:!1,containerClass:"container",slidesToSlide:1,swipeable:!0,customLeftArrow:b.jsx(o,{icon:qt}),customRightArrow:b.jsx(o,{icon:_o}),children:u.books.map((h,p)=>b.jsx(Yi,{book:h,userHistory:t.userHistory,moveToBook:t.moveToBook},p))})})]},f)})})}const Lo=ye(Sn)({display:"flex"}),No=ye(Lo)({justifyContent:"center",alignItems:"center"}),Ro=ye(No)({width:"100vw",height:"100dvh"});function jo(t){const[e,n]=I.useState(!1),i=ji(),r=_i(),{t:a}=ve();I.useEffect(()=>{var u;(!t.books||t.books.length==0)&&(n(!0),ze.fetchLibrary().then(f=>{t.dispatch({type:ft.SET_BOOKS,payload:{books:f}}),n(!1)}).catch(f=>{Mi.custom(d=>b.jsx(Ni,{text:a(f),visible:d.visible})),n(!1)})),t.currentUser&&((u=t.userHistory)==null?void 0:u.length)==0&&(n(!0),ze.fetchHistories(t.currentUser._id).then(f=>{t.dispatch({type:ft.SET_USER_HISTORY,payload:{userHistories:f}}),n(!1)}).catch(f=>{n(!1)}))},[]);const s=()=>{r("/")},o=u=>{r(`/book?id=${u}`)},l=()=>{t.dispatch({type:ft.RESET_USER}),t.dispatch({type:ft.RESET_BOOK}),t.dispatch({type:ft.RESET_PAGE_STATUS}),Fi.logout(),r("/")},c=()=>{r("/login")};return b.jsxs(Ro,{flexDirection:i?"column":"row",children:[b.jsx(Gi,{isLoggedIn:t.currentUser!=null,onLogoClicked:s,onLoginClicked:t.currentUser?l:c}),b.jsx(Mo,{slides:t.books,userHistory:t.userHistory,moveToBook:o}),e&&b.jsx(Ri,{})]})}function Fo(t){return{currentUser:t.user.currentUser,userHistory:t.books.userHistory,books:t.books.books}}const Qo=Oi(Fo)(jo);export{Qo as default};
