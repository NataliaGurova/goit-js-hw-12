import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { searchImages } from "./js/pixabay-api";
import { renderGallery } from "./js/render-functions"
import { hideLoader } from "./js/hideloader";


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
let lightbox = new SimpleLightbox('.gallery a', options);

// Function to show the loader
const showLoader = () => {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  loader.textContent = "Loading images, please wait...";
  block.append(loader);
};



textInput.addEventListener("submit", handleSubmit);
loadMoreBtn.addEventListener("click", loadMoreClick);


async function handleSubmit(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  userSearch = textInput.elements.query.value.trim();
  page = 1;

  try {
    const data = await searchImages(userSearch, page);
    maxPage = Math.ceil(data.totalHits / 15);

    if (userSearch === "") {
      hideLoader();
      iziToast.error({
        position: 'topRight',
        color: 'red',
        message: `Sorry, there are no images matching<br>your search query. Please try again!`,
      });
    } else {
      showLoader();
      renderGallery(data.hits);

      lightbox.refresh();

      checkBtnStatus();
    }
  } catch(error) {
      console.error("Error fetching data:", error);
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
  checkBtnStatus();

  const height = gallery.firstElementChild.getBoundingClientRect().height;
  scrollBy({ top: height * 2, left: 0, behavior: 'smooth' });

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

