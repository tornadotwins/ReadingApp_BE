import{O as g,j as a}from"./createTheme-BSKTWGbl.js";import{r as c,s as C,B as d,T as n,I as h}from"./App-DgwGRK2q.js";import{A as s,S as r}from"./index-CodpcsN6.js";import"./index-fkf3O8dn.js";import{a as l}from"./images-DS7q_XIW.js";var o={},m=g;Object.defineProperty(o,"__esModule",{value:!0});var f=o.default=void 0,x=m(c()),T=a;f=o.default=(0,x.default)((0,T.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");const u=C(d)({border:"1px solid #1B7695",backgroundColor:"#F0F5FB",boxSizing:"border-box",padding:"20px",margin:"20px 40px","& .MuiAccordionDetails-root":{paddingLeft:"25px !important"},"& .MuiAccordionSummary-content > .MuiBox-root :nth-of-type(2)":{padding:"0px !important"}}),i=C(d)({height:"40px",display:"flex",alignItems:"center",width:"300px","& >.MuiBox-root:first-of-type":{minWidth:"150px",justifyContent:"left"},"& >.MuiBox-root > .MuiBox-root":{justifyContent:"left"},"& >.MuiBox-root >:first-of-type":{minWidth:"150px"},"& >.MuiBox-root >:nth-of-type(2)":{marginLeft:"10px"}});function v(e){return e.isSpecialBook?a.jsx(u,{children:a.jsx(s,{label:`Chapter name (${l(e.currentLanguage)}): `,summaryTitle:e.currentChapterTitle,onChange:t=>e.handleCurrentChapterTitleChange&&e.handleCurrentChapterTitleChange(t.target.value),onCurrentChapterTitleEnterPressed:()=>e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle),detail:a.jsxs(a.Fragment,{children:[a.jsxs(i,{children:[a.jsx(n,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Arabic:"}),e.currentUser.isAdmin?a.jsx(h,{value:e.arabicChapterTitle,onChange:t=>e.handleArabicChapterTitleChange&&e.handleArabicChapterTitleChange(t.target.value),onKeyDown:t=>{t.key=="Enter"&&e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle)}}):a.jsx(n,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#969696",children:e.arabicChapterTitle})]}),a.jsxs(i,{children:[a.jsx(n,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Transliteration:"}),e.currentUser.isAdmin?a.jsx(h,{value:e.transliteration,onChange:t=>e.handleTransliterationChapterTitleChange&&e.handleTransliterationChapterTitleChange(t.target.value),onKeyDown:t=>{t.key=="Enter"&&e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle)}}):a.jsx(n,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#969696",children:e.transliteration})]}),a.jsxs(i,{children:[a.jsx(n,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"English:"}),e.currentUser.isAdmin?a.jsx(h,{value:e.englishChapterTitle,onChange:t=>e.handleEnglishChapterTitleChange&&e.handleEnglishChapterTitleChange(t.target.value),onKeyDown:t=>{t.key=="Enter"&&e.handleUpdateChapterSummary&&e.currentChapterTitle&&e.arabicChapterTitle&&e.transliteration&&e.englishChapterTitle&&e.handleUpdateChapterSummary(e.currentChapterTitle,e.arabicChapterTitle,e.transliteration,e.englishChapterTitle)}}):a.jsx(n,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#969696",children:e.englishChapterTitle})]}),a.jsxs(i,{children:[a.jsx(n,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Ayas filled:"}),a.jsx(n,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#000",children:`${e.languageCountVerse} of ${e.totalCountVerse}`})]}),a.jsx(i,{children:a.jsx(r,{label:"Complete: ",value:e.isComplete,disable:!((e.currentUser.isAdmin||e.currentUser.roles.some(t=>t.language==l(e.currentLanguage)&&(t.role.toLowerCase()=="translator".toLowerCase()||t.role.toLowerCase()=="publisher".toLowerCase())))&&e.languageCountVerse),onChange:t=>e.handleComplete(t)})}),a.jsx(i,{children:a.jsx(r,{label:"Publish: ",value:e.isComplete&&e.isPublish,disable:(e.currentUser.isAdmin||e.currentUser.roles.some(t=>t.language==l(e.currentLanguage)&&t.role.toLowerCase()=="publisher".toLowerCase()))&&!e.isComplete,onChange:t=>e.handlePublish(t)})})]})})}):a.jsxs(u,{children:[a.jsxs(i,{children:[a.jsx(n,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#155D74",children:"Ayas filled:"}),a.jsx(n,{fontFamily:"Inter",fontWeight:"500",fontSize:16,lineHeight:24,color:"#000",children:`${e.languageCountVerse} of ${e.totalCountVerse}`})]}),a.jsx(i,{children:a.jsx(r,{label:"Complete: ",value:e.isComplete,disable:!((e.currentUser.isAdmin||e.currentUser.roles.some(t=>t.language==l(e.currentLanguage)&&(t.role.toLowerCase()=="translator".toLowerCase()||t.role.toLowerCase()=="publisher".toLowerCase())))&&e.languageCountVerse),onChange:t=>e.handleComplete(t)})}),a.jsx(i,{children:a.jsx(r,{label:"Publish: ",value:e.isComplete&&e.isPublish,disable:(e.currentUser.isAdmin||e.currentUser.roles.some(t=>t.language==l(e.currentLanguage)&&t.role.toLowerCase()=="publisher".toLowerCase()))&&!e.isComplete,onChange:t=>e.handlePublish(t)})})]})}export{v as S,f as d};
