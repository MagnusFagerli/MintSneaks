import { baseUrl } from "./apiUrl.js";
import displayMessage from "../Components/DisplayError/displayMessage.js";
import { renderProducts } from "./Products/renderProducts.js";
import { searchProducts } from "../Components/SearchProducts/searchProducts.js";

const productUrl = baseUrl + "products";

export async function fetchProducts() {
  try {
    const response = await fetch(productUrl);
    const products = await response.json();

    renderProducts(products);
    searchProducts(products);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
}
fetchProducts();
