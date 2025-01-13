import{a as n,j as d}from"./createTheme-C-1SeyhL.js";import{s as S,B as y,t as $,K as M,u as I,M as K,N as q,w as Y,A as C,H as v,F as z}from"./App-CMR5rSAZ.js";import{U as G,P as J,r as Q,u as W}from"./index-CdF9uT1c.js";import{A as X}from"./index-Dx6t9SDl.js";import{t as Z}from"./translator.services-BtR2jpSJ.js";import"./index-BFVafZVz.js";import"./index-V_NcuuJ3.js";import"./index-BHySfajK.js";import"./TableContainer-De_j0lUn.js";const ee=S(y)({display:"flex"}),re=S(ee)({justifyContent:"center",alignItems:"center"}),te=S(re)({width:"100%",height:"100vh","& >.MuiBox-root:first-of-type":{backgroundColor:"#1B7695","& >.MuiBox-root":{color:"#F6FCFC"}}}),oe=S(y)({width:"90%",height:"calc(100% - 73px)",margin:"auto",marginTop:"73px"});function se(l){const N=M(),j=I(),p=[{label:"English",value:"en"},{label:"Arabic",value:"ar"}],A="Injil",[g,F]=n.useState(p[0].value),[c,P]=n.useState(""),[h,L]=n.useState(null),[u,O]=n.useState(),[E,m]=n.useState([]),[i,B]=n.useState([]),[D,_]=n.useState([]),[R,k]=n.useState("");n.useEffect(()=>{const t=(u==null?void 0:u.target.files)&&(u==null?void 0:u.target.files[0]);t&&L(t)},[u]);const U=t=>{try{const e=new FileReader;e.onload=a=>{var o;const r=(o=a.target)==null?void 0:o.result;if(!r){console.error("Failed to read file");return}J.parse(r,{complete:s=>{if(s.errors.length>0){console.error("CSV parsing errors:",s.errors);return}const b=s.data;B(b)},header:!0,skipEmptyLines:!0,transformHeader:s=>s.trim(),transform:s=>s.trim()})},e.onerror=a=>{console.error("Error reading file:",a)},e.readAsText(t)}catch(e){console.error("Error parsing CSV file:",e)}},w=async t=>{try{const e=new FileReader;e.onload=a=>{var x;const r=(x=a.target)==null?void 0:x.result;if(!r){console.error("Failed to read file");return}const o=Q(r,{type:"array"}),s=o.SheetNames[0],b=o.Sheets[s],T=W.sheet_to_json(b);B(T)},e.onerror=a=>{console.error("Error reading file:",a)},e.readAsArrayBuffer(t)}catch(e){console.error("Error parsing Excel file:",e)}},H=()=>{Z.saveBook({bookInfos:D,bookTitle:A,language:c}).then(()=>{C.success("Saved successfully!",{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})}).catch(t=>{C.success(t,{position:"top-right",draggable:!0,theme:"colored",transition:v,closeOnClick:!0,pauseOnHover:!0,hideProgressBar:!1,autoClose:3e3})})};n.useEffect(()=>{if(m([]),!h)return;const t=h.name,e=t.substr(t.lastIndexOf(".")+1).toLowerCase();e==="csv"?U(h):["xlsx","xls"].includes(e)?w(h):console.error("Unsupported file format")},[h,g]),n.useEffect(()=>{var a;_([]);const t=i[0],e=(a=p.find(r=>r.value==g))==null?void 0:a.label;e!="English"&&m(r=>[...r,"SubBook_English"]),t&&Object.keys(t).forEach(r=>{r=="SubBook_Transliteration"&&m(o=>[...o,r]),e&&r.includes(e)&&m(o=>[...o,r])}),m(r=>[...r,"Chapter_Number","Verse_Number"]),i.forEach(r=>{const o={};o.SubBook_English=r.SubBook_English,Object.keys(r).forEach(s=>{s.includes(e)&&(o[s]=r[s]),s=="SubBook_Transliteration"&&e=="English"&&(o[s]=r[s])}),o.Chapter_Number=r.Chapter_Number,o.Verse_Number=r.Verse_Number,_(s=>[...s,o])})},[i,g]),n.useEffect(()=>{var e;m([]);const t=(e=p.find(a=>a.value==g))==null?void 0:e.label;t&&P(t)},[g]),n.useEffect(()=>{const t=["SubBook_English",`SubBook_${c}`,"Chapter_Number","Verse_Number",`Verse_${c}`].filter((a,r,o)=>a&&o.indexOf(a)===r);let e="";if(i.length>1){const a=Object.keys(i[0]),r=t.filter(f=>!a.includes(f));r.forEach(f=>e+=`${f}, `),e&&(e=`You missed the ${r.length>=2?"fields":"field"}: `+e);const o=i[0][`SubBook_${c}`];i.find(f=>f[`SubBook_${c}`]!=o)&&(e="A file must have only 1 sub book.");const b=i[0].SubBook_Transliteration;i.find(f=>f.SubBook_Transliteration!=b)&&(e="A file must have only 1 transliteration for a sub book."),E.includes("SubBook_Transliteration")&&(e="SubBook_Transliteration field is not required."),k(e)}i.length==0&&(e="Please select the file to upload.",k(e))},[E,c,i]);const V=()=>{localStorage.removeItem(X),l.dispatch({type:z.SET_CURRENT_USER,payload:{user:null}}),j("/admin")};return d.jsxs(d.Fragment,{children:[d.jsx(K,{title:q}),d.jsxs(te,{flexDirection:N?"column":"row",children:[d.jsx(Y,{isAdmin:!!l.currentUser.isAdmin,username:l.currentUser.username,isLoggedIn:!0,onLogOut:V}),d.jsx(oe,{children:d.jsx(G,{language:g,languageLabel:c,languages:p,file:h,parsedData:i,headers:E,error:R,onChangeLanguage:t=>F(t.target.value),onChangeFile:t=>O(t),onUpload:H})})]})]})}function ae(l){return{dispatch:l}}function ne(l){return{currentUser:l.user.currentUser}}const be=$(ne,ae)(se);export{be as default};
