var c=Object.defineProperty;var l=(u,e,s)=>e in u?c(u,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[e]=s;var o=(u,e,s)=>l(u,typeof e!="symbol"?e+"":e,s);import{a as n}from"./axios-upsvKRUO.js";import{A as h,au as i}from"./index-8GXEJ_4u.js";class g{constructor(){o(this,"setAxiosInterceptors",e=>{n.interceptors.response.use(s=>s,s=>(s.response&&s.response.status===401&&this.setSession(null),Promise.reject(s)))});o(this,"login",e=>new Promise((s,a)=>{const r=i+"/auth/login";n.post(r,e).then(t=>{t.data.user?(this.setSession(t.data.token),s(t.data.user)):a(t.data.error)}).catch(t=>{a(this.getErrorMessage(t))})}));o(this,"signup",e=>new Promise((s,a)=>{const r=i+"/auth/signup";n.post(r,e).then(t=>{t.data.user?s(t.data.user):a(t.data.error)}).catch(t=>{a(this.getErrorMessage(t))})}));o(this,"verifyEmail",e=>new Promise((s,a)=>{const r=i+"/auth/verify_email";n.post(r,e).then(t=>{s(t.data)}).catch(t=>{a(this.getErrorMessage(t))})}));o(this,"forgotPassword",e=>new Promise((s,a)=>{const r=i+"/auth/forgot_password";n.post(r,e).then(t=>{s(t.data)}).catch(t=>{a(this.getErrorMessage(t))})}));o(this,"resetPassword",e=>new Promise((s,a)=>{const r=i+"/auth/reset_password";n.post(r,e).then(t=>{s(t.data)}).catch(t=>{a(this.getErrorMessage(t))})}));o(this,"updateSettings",e=>new Promise((s,a)=>{const r=i+"/auth/update_settings";n.post(r,e).then(t=>{s(t.data)}).catch(t=>{a(t)})}));o(this,"getAllLanguages",()=>new Promise((e,s)=>{const a=i+"/admin/auth/languages";n.get(a).then(r=>{e(r.data)}).catch(r=>{s(r)})}));o(this,"logout",()=>{this.setSession(null)});o(this,"setSession",e=>{e?(localStorage.setItem(h,e),n.defaults.headers.common.Authorization=`Bearer ${e}`):(localStorage.removeItem(h),delete n.defaults.headers.common.Authorization)});o(this,"getAccessToken",()=>localStorage.getItem(h));o(this,"isValidToken",e=>!!e);o(this,"isAuthenticated",()=>!!this.getAccessToken())}handleAuthentication(){const e=this.getAccessToken();e&&(this.isValidToken(e)?this.setSession(e):this.setSession(null))}verifyRecaptchaToken(e){return new Promise((s,a)=>{const r=i+"/auth/verify_recaptcha_token";n.post(r,e).then(t=>{s(t.data)}).catch(t=>{a(this.getErrorMessage(t))})})}getErrorMessage(e){let s=e.message;return e.response&&e.response.data&&e.response.data.message&&(s=e.response.data.message),s}}const f=new g;export{f as a};
