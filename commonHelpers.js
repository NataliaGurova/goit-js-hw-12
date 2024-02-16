import{a as l,i as u,S as f}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const i=document.querySelector("#form");document.querySelector(".button");const p=document.querySelector(".gallery"),y=document.querySelector(".block");document.querySelector(".btn");i.addEventListener("submit",P);const g={captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionSelector:"img",captionDelay:250},h="42275750-ff2dba3de74b1266fbd0f53be";l.defaults.baseURL="https://pixabay.com";const b="/api/";let L=1,S=15;const w=()=>{const t=document.createElement("span");t.classList.add("loader"),t.textContent="Loading images, please wait...",y.append(t)},c=()=>{const t=document.querySelector(".loader");t&&t.remove()};async function q(t){try{const r=new URLSearchParams({key:h,q:t,image_type:"photo",per_page:S,page:L}),a=(await l.get(b,{params:r})).data;console.log(a),a.totalHits===0?(c(),u.error({position:"topRight",color:"red",message:"Sorry, there are no images matching<br>your search query. Please try again!"})):(await x(a),c(),new f(".gallery a",g).refresh())}catch(r){throw console.error("Error fetching images:",r),r}}async function P(t){t.preventDefault();const r=i.elements.query.value.trim();r===""?u.error({position:"topRight",overlay:!1,color:"red",message:"Sorry, there are no images matching<br>your search query. Please try again!"}):(w(),await q(r)),i.reset(),v()}function v(){p.innerHTML=""}function x(t){const r=t.hits.map(({largeImageURL:n,webformatURL:a,tags:e,likes:o,views:s,comments:d,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${a}" alt="${e}"/>
          </a>
          <div>
            <p><b>Likes </b>${o}</p>
            <p><b>Views </b>${s}</p>
            <p><b>Comments </b>${d}</p>
            <p><b>Downloads </b>${m}</p>
          </div>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",r)}
//# sourceMappingURL=commonHelpers.js.map
