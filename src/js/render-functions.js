
import { gallery } from "../main"

export default function showGallery(data) {
  const markup = data.hits
    .map((item) => {
      const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = item;
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

