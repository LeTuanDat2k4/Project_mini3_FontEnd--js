import { drawProduct } from "./drawProduct.js";
import { buttonSearch, inputSearch, next, number, params, prev } from "./variables.js";

drawProduct();

// Search

function search() {
  params.q = inputSearch.value;
  drawProduct();
}

buttonSearch.addEventListener("click", function () {
  search();
})

inputSearch.addEventListener("keydown", function (e) {
  if (e.key === 'Enter') {
    search();
  }
})
// End Search

// Filter
const filter = document.querySelector("#filter");
filter.addEventListener("change", function (e) {
  switch (e.target.value) {
    case "mac-dinh":
      params._sort = "";
      params._order = "";
      break;

    case "gia-thap-den-cao":
      params._sort = "price";
      params._order = "asc";
      break;

    case "gia-cao-den-thap":
      params._sort = "price";
      params._order = "desc";
      break;

    case "giam-gia-nhieu":
      params._sort = "discountPercentage";
      params._order = "desc";
      break;
    default:
      break;
  }
  drawProduct();
})
// End Filter

// Pagination

next.addEventListener("click", function () {
  params.page = params.page + 1;
  number.innerHTML = params.page;
  drawProduct().then(data => {
    if (data.next === null) {
      next.setAttribute("disabled", "");
      next.style.cursor = "no-drop";
    }
  })
})

prev.addEventListener("click", function () {
  if (params.page > 1) {
    params.page = params.page - 1;
    number.innerHTML = params.page;
    drawProduct().then(data => {
      if (data.next !== null) {
        next.removeAttribute("disabled")
        next.style.cursor = "pointer";
      }
    })
  }
})

// End Pagination