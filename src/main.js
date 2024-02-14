import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import searchImages from "./js/pixabay-api"
import showGallery from "./js/render-functions"


const textInput = document.querySelector("#form");
const button = document.querySelector(".button");
const gallery = document.querySelector(".gallery");
const block = document.querySelector(".block");

export { gallery };
textInput.addEventListener("submit", handleSubmit);


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

export { hideLoader };


function handleSubmit(e) {
  e.preventDefault();
  const userSearch = textInput.elements.query.value.trim();

  if (userSearch === "") {
    iziToast.error({
      position: 'topRight',
      overlay: false,
        color: 'red', // blue, red, green, yellow
        message: "Sorry, there are no images matching<br>your search query. Please try again!",
      });
  } else {
    showLoader();
    searchImages(userSearch);
    }; 
  textInput.reset();
  removeGallery();
};


function removeGallery() {
  gallery.innerHTML = '';
};


