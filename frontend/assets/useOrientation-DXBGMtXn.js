import{b as t}from"./index-Co3tk9z7.js";function n(){return window.innerHeight>window.innerWidth}function s(){const[i,r]=t.useState(n());return t.useEffect(()=>{function e(){r(n())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),i}export{s as u};
