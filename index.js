(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const c="49650448-036e738118328f32db28a86cb",l="https://pixabay.com/api/";async function d(r){const t={key:c,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const n=await window.axios.get(l,{params:t});return console.log("API Response:",n.data),n.data}catch(n){throw console.error("API Error:",n),new Error("Помилка при отриманні даних з Pixabay API")}}function u(r){const t=document.querySelector(".gallery");if(!t){console.error("Gallery container not found!");return}const n=r.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img 
            class="gallery-image" 
            src="${o.webformatURL}" 
            alt="${o.tags}" 
            loading="lazy"
          />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${o.likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${o.views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${o.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${o.downloads}
          </p>
        </div>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",n);try{new window.SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch(o){console.error("Error initializing SimpleLightbox:",o)}}function f(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}function p(){const r=document.querySelector(".loader-wrapper");r&&r.classList.remove("is-hidden")}function a(){const r=document.querySelector(".loader-wrapper");r&&r.classList.add("is-hidden")}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM fully loaded");const r=document.querySelector(".form"),t=document.querySelector(".form button"),n=document.querySelector('input[name="search-text"]');if(console.log("Form element:",r),console.log("Search button:",t),console.log("Search input:",n),!r||!t||!n){console.error("Required elements not found!");return}t.addEventListener("click",async()=>{console.log("Search button clicked");const o=n.value.trim();if(console.log("Search query:",o),!o){window.iziToast.error({title:"Помилка",message:"Будь ласка, введіть пошуковий запит",position:"topRight"});return}f(),p();try{const e=await d(o);if(console.log("Data received:",e),a(),e.hits.length===0){window.iziToast.info({title:"Інформація",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u(e.hits)}catch(e){console.error("Error in search handler:",e),a(),window.iziToast.error({title:"Помилка",message:e.message,position:"topRight"})}}),r.addEventListener("submit",o=>{o.preventDefault(),console.log("Form submitted via Enter key"),t.click()})});
//# sourceMappingURL=index.js.map
