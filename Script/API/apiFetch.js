import { baseUrl } from "./apiUrl.js";
import displayMessage from "../Components/DisplayError/displayMessage.js";
import { renderProducts } from "./Products/renderProducts.js";
import { searchProducts } from "../Components/SearchProducts/searchProducts.js";
// import { featuredProducts } from "../API/Products/featuredProducts.js";

const productUrl = baseUrl + "products";

async function fetchProducts() {
  try {
    const response = await fetch(productUrl);
    const products = await response.json();

    renderProducts(products);
    searchProducts(products);
    // featuredProducts(products);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
}
fetchProducts();
