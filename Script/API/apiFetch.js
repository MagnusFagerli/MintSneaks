import { baseUrl } from "./apiUrl.js";
import displayMessage from "../Components/DisplayError/displayMessage.js";
import { renderProducts } from "../Components/Products/renderProducts.js";

const productUrl = baseUrl + "products";
const container = document.querySelector(".product-container");

async function fetchProducts() {
  try {
    const response = await fetch(productUrl);
    const products = await response.json();

    renderProducts(products);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
}
fetchProducts();
