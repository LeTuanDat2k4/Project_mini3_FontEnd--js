import { fetchApi } from "./fetchApi.js";
import { API_products } from "./constants.js";
import { params } from "./variables.js";

let products = document.querySelector("#products");

export const drawProduct = () => {
  const api = `${API_products}?q=${params.q}&_sort=${params._sort}&_order=${params._order}&_page=${params.page}&_per_page=${params.per_page}&category=${params.category}`;
  console.log(api);
  const step = fetchApi(api)
    .then(data => {
      let html = data.data.map(item => {
        return `
      <div class="product__item">
        <div class="product__img">
          <img src="${item.thumbnail}" alt="${item.title}">
          <div class="product__percent">
          ${item.discountPercentage}%
          </div>
        </div>

        <div class="product__content">
          <h3 class="product__title">${item.title}</h3>
          <h3 class="product__meta">
            <div class="product__price">${item.price}$</div>
            <div class="product__stock">con lai: ${item.stock}</div>
          </h3>
        </div>
    </div>      
      `
      });

      products.innerHTML = html.join("");
      return data;
    })
  return step;
};

