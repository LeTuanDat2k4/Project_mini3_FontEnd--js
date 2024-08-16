import { fetchApi } from "./fetchApi.js";
import { API_category } from "./constants.js";
import { params } from "./variables.js";
import { drawProduct } from "./drawProduct.js";


let category = document.querySelector("#category");

fetchApi(API_category)
  .then(data => {
    data.forEach(element => {
      let divHtml = document.createElement("div");
      divHtml.classList.add("category__item");
      divHtml.setAttribute("data_category",element.slug)
      divHtml.textContent = element.name;
      category.appendChild(divHtml);
    });

    const listCategory = document.querySelectorAll("#category .category__item");
    listCategory.forEach(item => {
      item.addEventListener("click", function() {
        params.category = item.getAttribute("data_category");
        drawProduct();
      })
    })
  });