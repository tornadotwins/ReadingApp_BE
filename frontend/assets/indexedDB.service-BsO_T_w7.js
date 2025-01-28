var f=Object.defineProperty;var B=(b,t,r)=>t in b?f(b,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):b[t]=r;var I=(b,t,r)=>B(b,typeof t!="symbol"?t+"":t,r);import{aA as S,aB as d,aC as a,aD as c}from"./index-BlVR3GtE.js";const g=1;class m{constructor(){I(this,"db",null);I(this,"isDbInitializing",!1)}async initDB(){if(!(this.db||this.isDbInitializing))return this.isDbInitializing=!0,new Promise((t,r)=>{const s=indexedDB.open(S,g);s.onerror=()=>{this.isDbInitializing=!1,r(s.error)},s.onsuccess=()=>{this.db=s.result,this.isDbInitializing=!1,this.db.onclose=()=>{console.warn("IndexedDB connection closed unexpectedly."),this.db=null},t()},s.onupgradeneeded=o=>{const n=o.target.result;n.objectStoreNames.contains(d)||n.createObjectStore(d,{keyPath:"subBookId"}),n.objectStoreNames.contains(a)||n.createObjectStore(a,{keyPath:"journeyId"}).createIndex("parent","parent",{unique:!1}),n.objectStoreNames.contains(c)||n.createObjectStore(c,{keyPath:"articleIdInJourney"})}})}async saveSubBookInfo(t){return this.db||await this.initDB(),new Promise((r,s)=>{const e=this.db.transaction([d],"readwrite").objectStore(d).put(t);e.onerror=()=>s(e.error),e.onsuccess=()=>r()})}async getSubBookInfo(t){return this.db||await this.initDB(),new Promise((r,s)=>{const e=this.db.transaction([d],"readonly").objectStore(d).get(t);e.onerror=()=>s(e.error),e.onsuccess=()=>r(e.result)})}async removeSubBookInfo(t){return this.db||await this.initDB(),new Promise((r,s)=>{const e=this.db.transaction([d],"readwrite").objectStore(d).delete(t);e.onerror=()=>s(e.error),e.onsuccess=()=>r()})}async saveJourneys(t){return this.db||await this.initDB(),new Promise((r,s)=>{const n=this.db.transaction([a],"readwrite").objectStore(a);let e=0;t.forEach(i=>{const l={...i,journeyId:i._id},u=n.put(l);u.onsuccess=()=>{e++,e===t.length&&r()},u.onerror=()=>s(u.error)})})}async getJourneyCards(t){return this.db||await this.initDB(),new Promise((r,s)=>{const i=this.db.transaction([a],"readonly").objectStore(a).index("parent").getAll(t);i.onerror=()=>s(i.error),i.onsuccess=()=>r(i.result)})}async removeJourneyInfo(t){this.db||await this.initDB();const r=async s=>new Promise((o,n)=>{const i=this.db.transaction([a],"readwrite").objectStore(a),u=i.index("parent").openCursor(IDBKeyRange.only(s));u.onerror=()=>n(u.error),u.onsuccess=async D=>{const h=D.target.result;if(h){const y=h.primaryKey;i.delete(y),await r(y),h.continue()}else o()}});await r(t)}async saveArticleInfo(t){return this.db||await this.initDB(),new Promise((r,s)=>{const n=this.db.transaction([c],"readwrite").objectStore(c);let e=0;t.forEach(i=>{const l=n.put(i);l.onsuccess=()=>{e++,e===t.length&&r(),console.log("article: ",e)},l.onerror=()=>s(l.error)})})}async getArticleInfo(t){return this.db||await this.initDB(),new Promise((r,s)=>{const e=this.db.transaction([c],"readonly").objectStore(c).get(t);e.onerror=()=>s(e.error),e.onsuccess=()=>r(e.result)})}async removeArticleInfo(t){return this.db||await this.initDB(),new Promise((r,s)=>{const e=this.db.transaction([c],"readwrite").objectStore(c).delete(t);e.onerror=()=>s(e.error),e.onsuccess=()=>r()})}async getAllJourneyIds(){return this.db||await this.initDB(),new Promise((t,r)=>{const n=this.db.transaction([a],"readonly").objectStore(a).getAllKeys();n.onerror=()=>r(n.error),n.onsuccess=()=>t(n.result)})}async getAllArticleIds(){return this.db||await this.initDB(),new Promise((t,r)=>{const n=this.db.transaction([c],"readonly").objectStore(c).getAllKeys();n.onerror=()=>r(n.error),n.onsuccess=()=>t(n.result)})}async getAllHierarchicalJourneyCards(t){this.db||await this.initDB();const r=[],s=async o=>new Promise((n,e)=>{const D=this.db.transaction([a],"readonly").objectStore(a).index("parent").openCursor(IDBKeyRange.only(o));D.onerror=()=>e(D.error),D.onsuccess=async h=>{console.log(h.target);const y=h.target.result;if(y){const w=y.value;console.log({journey:w}),r.push(w),await s(w.journeyId),y.continue()}else n()}});return await s(t),r}}const E=new m;export{E as i};
