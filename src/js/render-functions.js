const gallery = document.querySelector(".gallery");

function showGallery(hit) {
  const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = hit;
  
  return `<li class="gallery-item">
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
}

export function renderGallery(hits) {
  const markup = hits.map(showGallery).join('');
  gallery.insertAdjacentHTML("beforeend", markup);
}
