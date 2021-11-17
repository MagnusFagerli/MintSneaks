import { baseUrl } from "./apiUrl.js";
import displayMessage from "../Components/DisplayError/displayMessage.js";

const productUrl = baseUrl + "products";
const container = document.querySelector(".product-container");

async function fetchProducts() {
  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    json.forEach(function (products) {
      container.innerHTML += `<h1>${products.title}</h1>`;
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
}
fetchProducts();
