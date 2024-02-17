import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

import { searchImages } from "./js/pixabay-api";
import { renderGallery } from "./js/render-functions"


const textInput = document.querySelector("#form");
const button = document.querySelector(".button");
const gallery = document.querySelector(".gallery");
const block = document.querySelector(".block");
const loadMoreBtn = document.querySelector(".btn");

const options = {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionSelector: "img",
  captionDelay: 250,
};

 let page;
let userSearch;
let maxPage; 

// Function to show the loader
const showLoader = () => {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  loader.textContent = "Loading images, please wait...";
  block.append(loader);
};

// Function to hide the loader
const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
};


textInput.addEventListener("submit", handleSubmit);
loadMoreBtn.addEventListener("click", loadMoreClick);

// ===================================
async function handleSubmit(e) {
  e.preventDefault();
  showLoader();

  userSearch = textInput.elements.query.value.trim();
  page = 1;
  const data = await searchImages(userSearch, page);
  maxPage= Math.ceil(data.totalHits / 15);
  gallery.innerHTML = '';

  if (userSearch === "") {
    iziToast.error({
          position: 'topRight',
          color: 'red',
          message: `Sorry, there are no images matching<br>your search query. Please try again!`,
        });
  } else {
    renderGallery(data.hits); 

    let lightbox = new SimpleLightbox('.gallery a', options);
    lightbox.refresh();

    checkBtnStatus();
    console.log(data);
  }
  textInput.reset();
  hideLoader();
};


async function loadMoreClick() {
  showLoader();
  page += 1;
  const data = await searchImages(userSearch, page);
  renderGallery(data.hits);
  hideLoader();

  const height = gallery.firstElementChild.getBoundingClientRect().height;
  scrollBy({ top: height * 2, left: 0, behavior: 'smooth' });
  checkBtnStatus();

  lightbox = new SimpleLightbox('.gallery a', options);
  lightbox.refresh();
};


function checkBtnStatus() {
  if (page >= maxPage) {
    loadMoreBtn.style.display = "none";
    iziToast.info({
      position: 'topRight',
      overlay: false,
      color: 'blue',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {loadMoreBtn.style.display = "block";}
};

