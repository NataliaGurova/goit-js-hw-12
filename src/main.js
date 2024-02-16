import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

// import searchImages from "./js/pixabay-api"
// import showGallery from "./js/render-functions"



const textInput = document.querySelector("#form");
const button = document.querySelector(".button");
const gallery = document.querySelector(".gallery");
const block = document.querySelector(".block");
const loadMoreBtn = document.querySelector(".btn");

textInput.addEventListener("submit", handleSubmit);

const options = {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionSelector: "img",
  captionDelay: 250,
};

const API_KEY = "42275750-ff2dba3de74b1266fbd0f53be";
axios.defaults.baseURL = "https://pixabay.com";
const END_POINT = "/api/";


let page = 1;
let perPage = 15;

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


async function searchImages(userSearch) {
  try {
      const params = new URLSearchParams({
        key: API_KEY,
        q: userSearch,
        image_type: "photo",
        per_page: perPage,
        page: page,
      });
    const response = await axios.get(END_POINT, { params });
    const data = response.data;
    console.log(data);

if (data.totalHits === 0) {
        hideLoader();
        iziToast.error({
          position: 'topRight',
          color: 'red',
          message: `Sorry, there are no images matching<br>your search query. Please try again!`,
        });
      } else {
        await showGallery(data);
        hideLoader();
      const lightbox = new SimpleLightbox('.gallery a', options);
      lightbox.refresh();
  }

  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}



// export { gallery };
// export { hideLoader };


async function handleSubmit(e) {
  e.preventDefault();
  const userSearch = textInput.elements.query.value.trim();

  if (userSearch === "") {
    iziToast.error({
      position: 'topRight',
      overlay: false,
      color: 'red',
      message: "Sorry, there are no images matching<br>your search query. Please try again!",
    });
  } else {
    showLoader();
    await searchImages(userSearch); 
  }
  textInput.reset();
  removeGallery();
}


function removeGallery() {
  gallery.innerHTML = '';
};



function showGallery(data) {
  const markup = data.hits
    .map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
      
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
          </a>
          <div>
            <p><b>Likes </b>${likes}</p>
            <p><b>Views </b>${views}</p>
            <p><b>Comments </b>${comments}</p>
            <p><b>Downloads </b>${downloads}</p>
          </div>
        </li>
      `;
    })
    .join("");
  gallery.insertAdjacentHTML("beforeend", markup);
};


