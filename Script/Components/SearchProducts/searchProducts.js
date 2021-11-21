import { renderProducts } from "../../API/Products/renderProducts.js";

export function searchProducts(products) {
  const search = document.querySelector("#searchbar");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    //console.log("searchValue", searchValue);

    if (searchValue === "") {
      return renderProducts(products);
    }

    const filteredProducts = products.filter(function (product) {
      if (product.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    // console.log(filteredProducts);

    renderProducts(filteredProducts);
  };
}
