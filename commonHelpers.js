import{a as p,i as m,S as v}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=()=>{const t=document.querySelector(".loader");t&&t.remove()},q="42275750-ff2dba3de74b1266fbd0f53be";async function f(t,o){const s=new URLSearchParams({key:q,q:t,image_type:"photo",per_page:15,page:o});p.defaults.baseURL="https://pixabay.com";const a="/api/";return await p.get(a,{params:s}).then(e=>{if(e.data.totalHits===0)l(),m.error({position:"topRight",color:"red",message:"Sorry, there are no images matching<br>your search query. Please try again!"});else return e.data})}const P=document.querySelector(".gallery");function E(t){const{largeImageURL:o,webformatURL:s,tags:a,likes:e,views:r,comments:n,downloads:w}=t;return`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${s}" alt="${a}"/>
          </a>
          <div>
            <p><b>Likes </b>${e}</p>
            <p><b>Views </b>${r}</p>
            <p><b>Comments </b>${n}</p>
            <p><b>Downloads </b>${w}</p>
          </div>
        </li>
      `}function y(t){const o=t.map(E).join("");P.insertAdjacentHTML("beforeend",o)}const d=document.querySelector("#form");document.querySelector(".button");const g=document.querySelector(".gallery"),R=document.querySelector(".block"),u=document.querySelector(".btn"),$={captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionSelector:"img",captionDelay:250};let i,c,h,b=new v(".gallery a",$);const L=()=>{const t=document.createElement("span");t.classList.add("loader"),t.textContent="Loading images, please wait...",R.append(t)};d.addEventListener("submit",x);u.addEventListener("click",O);async function x(t){t.preventDefault(),g.innerHTML="",c=d.elements.query.value.trim(),i=1;try{const o=await f(c,i);h=Math.ceil(o.totalHits/15),c===""?(l(),m.error({position:"topRight",color:"red",message:"Sorry, there are no images matching<br>your search query. Please try again!"})):(L(),y(o.hits),b.refresh(),S())}catch(o){console.error("Error fetching data:",o)}d.reset(),l()}async function O(){L(),i+=1;const t=await f(c,i);y(t.hits),l(),S();const o=g.firstElementChild.getBoundingClientRect().height;scrollBy({top:o*2,left:0,behavior:"smooth"}),b.refresh()}function S(){i>=h?(u.style.display="none",m.info({position:"topRight",overlay:!1,color:"blue",message:"We're sorry, but you've reached the end of search results."})):u.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
