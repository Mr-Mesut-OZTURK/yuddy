const __vite__fileDeps=["./YButton.stories-AKztO_K3.js","./index-CDs2tPxN.js","./createTheme-CWUoNYFz.js","./extends-CCbyfPlC.js","./assertThisInitialized-LzcnMJCH.js","./YMainProductCard.stories-Dqw6wp6v.js","./entry-preview-Cr1JrbDA.js","./react-18-BGyF7Xp1.js","./entry-preview-docs-eVh9VKdd.js","./_getPrototype-DtJm8IA_.js","./index-DrFu-skq.js","./preview-TCN6m6T-.js","./index-DXimoRZY.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-CubFikNs.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f="modulepreload",R=function(i,s){return new URL(i,s).href},O={},o=function(s,c,l){let e=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),E=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(c.map(n=>{if(n=R(n,l),n in O)return;O[n]=!0;const u=n.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const m=t[a];if(m.href===n&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${p}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":f,u||(_.as="script",_.crossOrigin=""),_.href=n,E&&_.setAttribute("nonce",E),document.head.appendChild(_),u)return new Promise((a,m)=>{_.addEventListener("load",a),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${n}`)))})}))}return e.then(()=>s()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,d=P({page:"preview"});T.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const L={"./src/components/buttons/YButton.stories.tsx":async()=>o(()=>import("./YButton.stories-AKztO_K3.js").then(i=>i.h),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./src/components/cards/YMainProductCard.stories.tsx":async()=>o(()=>import("./YMainProductCard.stories-Dqw6wp6v.js"),__vite__mapDeps([5,1,0,2,3,4]),import.meta.url)};async function w(i){return L[i]()}const{composeConfigs:h,PreviewWeb:v,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const i=await Promise.all([o(()=>import("./entry-preview-Cr1JrbDA.js"),__vite__mapDeps([6,1,7]),import.meta.url),o(()=>import("./entry-preview-docs-eVh9VKdd.js"),__vite__mapDeps([8,9,1,10]),import.meta.url),o(()=>import("./preview-TCN6m6T-.js"),__vite__mapDeps([11,12]),import.meta.url),o(()=>import("./preview-C9x6IF28.js"),[],import.meta.url),o(()=>import("./preview-UNaZQn6M.js"),[],import.meta.url),o(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([13,10]),import.meta.url),o(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),o(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([14,10]),import.meta.url),o(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),o(()=>import("./preview-BcrGd3F6.js"),[],import.meta.url),o(()=>import("./preview-CubFikNs.js"),__vite__mapDeps([15,1,2,3]),import.meta.url)]);return h(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v(w,A);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};