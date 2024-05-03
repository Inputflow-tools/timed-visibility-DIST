(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function g(i){return Array.from(document.querySelectorAll(i))}function S(i,t){const e=new Date(i),n=e.toLocaleString("en-US",{timeZone:t}),r=new Date(n),s=e.getTime()-r.getTime();return new Date(e.getTime()-s)}class h{constructor(t,e){this.start=t,this.end=e}includes(t){return this.start<=t&&t<=this.end?!0:this.end<this.start?t<=this.end||t>=this.start:!1}}class m{constructor(t,e){this.hour=t,this.minute=e}isEqualTo(t){return this.hour===t.hour&&this.minute===t.minute}toNumber(){return+`${String(this.hour).padStart(2,"0")}${String(this.minute).padStart(2,"0")}`}isWithinRange(t,e){return new h(t.toNumber(),e.toNumber()).includes(this.toNumber())}}function v(i,t){var o;const e=(o=i.getAttribute("ift-visible-dates"))==null?void 0:o.replace(/\s/g,"").replace(/^,+|,+$/g,"");if(!e)return!0;const n=String(t.getMonth()+1),r=String(t.getDate()).padStart(2,"0"),s=Number(n+r),a=[],l=e.split(",");for(const c of l){const p=c.split("-").map(u=>{const y=u.split("/")[0].padStart(2,"0"),w=u.split("/")[1].padStart(2,"0");return`${y}/${w}`});a.push(p.join("-"))}return f(s,a.join(",").replace(/\//g,""))}function D(i,t){var r;const e=(r=i.getAttribute("ift-visible-monthdays"))==null?void 0:r.replace(/\s/g,"").replace(/^,+|,+$/g,"");if(!e)return!0;const n=t.getDate();return f(n,e)}function N(i,t){var n;let e=(n=i.getAttribute("ift-visible-months"))==null?void 0:n.replace(/\s/g,"").toLowerCase();return e?(e=e.replace(/january/g,"jan").replace(/february/g,"feb").replace(/march/g,"mar").replace(/april/g,"apr").replace(/may/g,"may").replace(/june/g,"jun").replace(/july/g,"jul").replace(/august/g,"aug").replace(/bre/g,"ber").replace(/september/g,"sep").replace(/october/g,"oct").replace(/november/g,"nov").replace(/december/g,"dec"),e=e.replace(/jan/g,"1").replace(/feb/g,"2").replace(/mar/g,"3").replace(/apr/g,"4").replace(/may/g,"5").replace(/jun/g,"6").replace(/jul/g,"7").replace(/aug/g,"8").replace(/sep/g,"9").replace(/oct/g,"10").replace(/nov/g,"11").replace(/dec/g,"12"),f(t.getMonth()+1,e)):!0}function R(i,t){var r;let e=(r=i.getAttribute("ift-visible-weekdays"))==null?void 0:r.replace(/\s/g,"").toLowerCase().replace(/^,+|,+$/g,"");if(!e)return!0;e=e.replace(/monday/g,"mon").replace(/tuesday/g,"tue").replace(/wednesday/g,"wed").replace(/thursday/g,"thu").replace(/friday/g,"fri").replace(/saturday/g,"sat").replace(/sunday/g,"sun"),e=e.replace(/mon/g,"1").replace(/tue/g,"2").replace(/wed/g,"3").replace(/thu/g,"4").replace(/fri/g,"5").replace(/sat/g,"6").replace(/sun/g,"7");let n=t.getDay();return n=n===0?7:n,f(n,e)}function $(i,t){var r;const e=(r=i.getAttribute("ift-visible-hours"))==null?void 0:r.replace(/\s/g,"").toLowerCase().replace(/\./g,":").replace(/^,+|,+$/g,"");if(!e)return!0;const n=e.split(",");for(const s of n){if(!(s.split("-").length===2))continue;const l=s.includes("am")||s.includes("pm");let o=s.split("-")[0],c=s.split("-")[1];l&&(o=b(o),c=b(c));const d=new m(Number(o.split(":")[0]),Number(o.split(":")[1])),p=new m(Number(c.split(":")[0]),Number(c.split(":")[1])),u=new m(t.getHours(),t.getMinutes());if(console.log("from:",d,"now:",u,"to:",p,`
`,u.isWithinRange(d,p)),u.isWithinRange(d,p))return!0}return!1}function b(i){const t=i.match(/(\d{1,2}):(\d{2})(am|pm)/i);if(!t)return i;let e=parseInt(t[1],10);const n=t[2],r=t[3].toLowerCase();return r==="pm"&&e<12?e+=12:r==="am"&&e===12&&(e=0),`${e}:${n}`}function f(i,t){const e=t.replace(/\s/g,"").replace(/^,+|,+$/g,"").split(",");for(const n of e){if(Number(n)===i)return!0;if(!/^\d+-\d+$/.test(n))continue;if(new h(Number(n.split("-")[0]),Number(n.split("-")[1])).includes(i))return!0}return!1}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{const i=new Date;[...new Set([...g("[ift-visible-hours]"),...g("[ift-visible-weekdays]"),...g("[ift-visible-monthdays]"),...g("[ift-visible-months]"),...g("[ift-visible-dates]")])].forEach(e=>{var s;const n=(s=e.closest("[ift-visible-timezone]"))==null?void 0:s.getAttribute("ift-visible-timezone"),r=n?S(i,n):new Date(i);if(!$(e,r)||!R(e,r)||!N(e,r)||!D(e,r)||!v(e,r))e.style.display="none";else{if(getComputedStyle(e).display!=="none")return;const l=e.getAttribute("ift-visible-display")||"block";e.style.display=l}})});
