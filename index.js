import{a as w,S as v,i as m,A as g}from"./assets/vendor-DC4YsHNk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function h(){const t=document.querySelector(".header-menu-button"),e=document.querySelector(".nav-list"),n=document.querySelector(".mobile-menu-container"),s=document.querySelector(".mobile-menu-button"),o=document.querySelector(".mobile-menu-close-button");document.querySelector(".mobile-menu-nav"),document.querySelectorAll(".mobile-menu-nav .nav-link");const r=document.querySelector(".order-button-mobile-menu");t.addEventListener("click",l=>{if(l.preventDefault(),e.classList.contains("menu-visible")){e.classList.remove("menu-visible");return}e.classList.add("menu-visible")}),document.addEventListener("click",l=>{!(n.contains(l.target)||t.contains(l.target))&&e.classList.contains("menu-visible")&&e.classList.remove("menu-visible")}),s.addEventListener("click",a),o.addEventListener("click",d);function a(){n.classList.add("show"),i(),document.body.classList.add("modal-body-lock")}window.addEventListener("resize",()=>{window.innerWidth>=768&&d()});function i(){document.body.classList.contains("modal-body-lock")&&document.body.classList.remove("modal-body-lock")}function d(){n.classList.remove("show"),document.body.classList.remove("modal-body-lock")}document.querySelector("nav").addEventListener("click",l=>{const u=l.target.closest('a[href^="#"]');if(!u)return;l.preventDefault(),d();const p=u.getAttribute("href"),c=document.querySelector(p);c&&c.scrollIntoView({behavior:"smooth"})}),r.addEventListener("click",l=>{d();const u=document.querySelector("#work-together");u&&u.scrollIntoView({behavior:"smooth"})})}const L="https://portfolio-js.b.goit.study/api/reviews";async function S(){return await w.get(L).then(t=>t.data).catch(t=>{throw new Error(t)})}function E(t){return t.map(({author:e,avatar_url:n,review:s})=>`
        <li class="reviews-item swiper-slide">
            <img class="reviews-photo" src="${n}" alt="${e}" width="48" height="48">
            <h3 class="reviews-name">${e}</h3>
            <p class="reviews-content">${s}</p>
        </li>
    `).join("")}function q(t,e){t.insertAdjacentHTML("beforeend",e),new v(".swiper",{slidesPerView:4,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",enabled:!0},keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:1,slidesSizesGrid:343},768:{slidesPerView:2,slidesSizesGrid:344},1440:{slidesPerView:4,slidesSizesGrid:332}}})}function k(){m.error({backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",progressBarColor:"#B51B1B",maxWidth:"432",messageSize:"16",position:"topRight",message:"Error loading reviews: Not found"})}function C(){document.querySelector(".swiper").style.display="none",document.querySelector(".not-found").style.display="block"}function M(){document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".work-together__form"),e=t==null?void 0:t.querySelector('input[name="email"]'),n=t==null?void 0:t.querySelector('input[name="message"]'),s=document.getElementById("popup");if(!t||!e||!n||!s)return;const o=s.querySelector("h3"),r=s.querySelector("p"),a=s.querySelector(".popup__close");[e,n].forEach(i=>{i.addEventListener("blur",()=>{i.value.length>25&&(i.dataset.fullValue=i.value,i.value=i.value.slice(0,25)+"...")})}),t.addEventListener("submit",async i=>{i.preventDefault(),e.dataset.fullValue&&(e.value=e.dataset.fullValue),n.dataset.fullValue&&(n.value=n.dataset.fullValue);const d=e.value.trim(),l=n.value.trim(),u=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!d||!l){m.warning({title:"Warning",message:"Please fill out both fields."});return}if(!u.test(d)){m.warning({title:"Warning",message:"Please enter a valid email address."});return}const p={email:d,comment:l};try{const c=await w.post("https://portfolio-js.b.goit.study/api/requests",p,{headers:{Accept:"application/json"}});if(c.status!==201)return;const y=c.data;o&&(o.textContent=y.title),r&&(r.textContent=y.message),s.classList.add("active"),document.body.classList.add("modal-popup-open"),t.reset();const f=()=>{s.classList.remove("active"),document.body.classList.remove("modal-popup-open")};a==null||a.addEventListener("click",f),s.addEventListener("click",b=>{b.target===s&&f()}),document.addEventListener("keydown",b=>{b.key==="Escape"&&f()})}catch(c){if(!c.response){m.error({title:"Error",message:`Network error: ${c.message}`});return}switch(c.response.status){case 400:m.error({title:"Error",message:"Bad Request: Invalid request body."});break;case 404:m.error({title:"Error",message:"Not Found: Endpoint does not exist."});break;case 500:m.error({title:"Error",message:"Server Error: Please try again later."});break;default:m.error({title:"Error",message:c.response.statusText});break}}})})}function P(){new g(".about-me-ac-container",{openOnInit:[0],elementClass:"about-me-ac-item",panelClass:"about-me-ac-panel"}),new v(".about-me-swiper-container",{keyboard:{enabled:!0},loop:!0,navigation:{nextEl:".about-me-swiper-button-next",enabled:!0},breakpoints:{320:{slidesPerView:2,slidesSizesGrid:343},768:{slidesPerView:3,slidesSizesGrid:600},1440:{slidesPerView:6,slidesSizesGrid:332}}}),document.querySelector(".about-me-ac-container").style.display="block",document.querySelector(".about-me-swiper").style.display="flex"}function x(){document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".covers"),e=document.querySelectorAll(".covers-tiles-line"),n={root:null,rootMargin:"0px",threshold:.1};new IntersectionObserver((o,r)=>{o.forEach(a=>{a.isIntersecting?e.forEach(i=>i.classList.add("animate")):e.forEach(i=>i.classList.remove("animate"))})},n).observe(t)})}function V(){new v(".swiper-projects",{keyboard:{enabled:!0},slidesPerView:"auto",navigation:{nextEl:".project-swiper-button-next",prevEl:".project-swiper-button-prev",enabled:!0}}),document.querySelector(".section-projects").style.display="block"}function I(){document.addEventListener("DOMContentLoaded",function(){new g(".js-accordion",{duration:400,showMultiple:!0,elementClass:"faq-ac-item",triggerClass:"faq-ac-header",panelClass:"faq-ac-panel",activeClass:"is-active"})})}h();x();M();I();V();(async()=>{const t=await S();try{const e=document.querySelector(".reviews-list");q(e,E(t))}catch{k(),C()}})();P();
//# sourceMappingURL=index.js.map
