export var params = {
  q: "",
  _sort: "",
  _order: "",
  page: 1,
  per_page: 8,
  category: ""
};

export var inputSearch = document.querySelector("#search input");
export var buttonSearch = document.querySelector("#search button");

// Pagination
export const prev = document.querySelector('#paginationPrev');
export const number = document.querySelector('#paginationNumber');
export const next = document.querySelector('#paginationNext');