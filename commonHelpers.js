import{a as u,i as m,S as p}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const q="42275750-ff2dba3de74b1266fbd0f53be";async function y(t,o){const a=new URLSearchParams({key:q,q:t,image_type:"photo",per_page:15,page:o});u.defaults.baseURL="https://pixabay.com";const s="/api/";return await u.get(s,{params:a}).then(e=>{if(e.data.totalHits===0)hideLoader(),iziToast.error({position:"topRight",color:"red",message:"Sorry, there are no images matching<br>your search query. Please try again!"});else return e.data})}const P=document.querySelector(".gallery");function x(t){const{largeImageURL:o,webformatURL:a,tags:s,likes:e,views:r,comments:n,downloads:v}=t;return`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${a}" alt="${s}"/>
          </a>
          <div>
            <p><b>Likes </b>${e}</p>
            <p><b>Views </b>${r}</p>
            <p><b>Comments </b>${n}</p>
            <p><b>Downloads </b>${v}</p>
          </div>
        </li>
      `}function f(t){const o=t.map(x).join("");P.insertAdjacentHTML("beforeend",o)}const c=document.querySelector("#form");document.querySelector(".button");const g=document.querySelector(".gallery"),$=document.querySelector(".block"),d=document.querySelector(".btn"),h={captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionSelector:"img",captionDelay:250};let i,l,b;const L=()=>{const t=document.createElement("span");t.classList.add("loader"),t.textContent="Loading images, please wait...",$.append(t)},S=()=>{const t=document.querySelector(".loader");t&&t.remove()};c.addEventListener("submit",R);d.addEventListener("click",E);async function R(t){t.preventDefault(),L(),l=c.elements.query.value.trim(),i=1;const o=await y(l,i);b=Math.ceil(o.totalHits/15),g.innerHTML="",l===""?m.error({position:"topRight",color:"red",message:"Sorry, there are no images matching<br>your search query. Please try again!"}):(f(o.hits),new p(".gallery a",h).refresh(),w()),c.reset(),S()}async function E(){L(),i+=1;const t=await y(l,i);f(t.hits),S();const o=g.firstElementChild.getBoundingClientRect().height;scrollBy({top:o*2,left:0,behavior:"smooth"}),lightbox=new p(".gallery a",h),lightbox.refresh(),w()}function w(){i>=b?(d.style.display="none",m.info({position:"topRight",overlay:!1,color:"blue",message:"We're sorry, but you've reached the end of search results."})):d.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
