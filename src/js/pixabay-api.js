import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import { hideLoader } from "./hideloader"

const API_KEY = "42275750-ff2dba3de74b1266fbd0f53be";


export async function searchImages(userSearch, page) {

  const params = new URLSearchParams({
        key: API_KEY,
        q: userSearch,
        image_type: "photo",
        per_page: 15,
        page: page,
      });
    axios.defaults.baseURL = "https://pixabay.com";
    const END_POINT = "/api/";

    return await axios.get(END_POINT, { params })
      .then(response => {
      if (response.data.totalHits === 0) {
        hideLoader();
        iziToast.error({
          position: 'topRight',
          color: 'red',
          message: `Sorry, there are no images matching<br>your search query. Please try again!`,
        });
      } else {
        
        return response.data;
      }
    });
};