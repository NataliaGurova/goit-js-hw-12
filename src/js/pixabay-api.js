// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import showGallery from "./render-functions"
// import { hideLoader } from "../main"

// import axios from "axios";
// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });









// export default async function searchImages(userSearch) {
//   const apiKey = "42275750-ff2dba3de74b1266fbd0f53be";
//   const url = `https://pixabay.com/api/?key=${apiKey}&q=${userSearch}&image_type=photo`;
//   await axios.get(url)
//     .then((data) => {
// console.log(data);
//       if (data.hits) {
//         hideLoader();
//         iziToast.error({
//           position: 'topRight',
//           color: 'red',
//           message: `Sorry, there are no images matching<br>your search query. Please try again!`,
//         });
//       } else {
//         showGallery(data);
//       hideLoader();
//       const lightbox = new SimpleLightbox('.gallery a', options);
//       lightbox.refresh();
//       }
    
//   });
// }



// export default async function searchImages(userSearch) {
//   const apiKey = "42275750-ff2dba3de74b1266fbd0f53be";
//   const url = `https://pixabay.com/api/?key=${apiKey}&q=${userSearch}&image_type=photo`
//   return fetch(url)
//     .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//     })
//     .then((data) => {
//       if (data.hits.length === 0) {
//         hideLoader();
//         iziToast.error({
//           position: 'topRight',
//           color: 'red',
//           message: `Sorry, there are no images matching<br>your search query. Please try again!`,
//         });
//       } else {        
//       showGallery(data);
//       hideLoader();
//       const lightbox = new SimpleLightbox('.gallery a', options);
//       lightbox.refresh();
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// };


