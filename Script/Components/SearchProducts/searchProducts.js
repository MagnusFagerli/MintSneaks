import { renderProducts } from "../../API/Products/renderProducts.js";
const container = document.querySelector(".product-container");

export function searchProducts(products) {
  const search = document.querySelector("#searchbar");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    if (searchValue === "") {
      return renderProducts(products);
    }

    const filteredProducts = products.filter(function (product) {
      if (
        product.title.toLowerCase().startsWith(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });

    if (filteredProducts.length === 0) {
      return (container.innerHTML = `<div class="noresult">No products to show.</div>`);
    }

    renderProducts(filteredProducts);
  };
}
