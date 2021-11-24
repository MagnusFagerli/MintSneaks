import displayMessage from "../../Components/DisplayError/displayMessage.js";

const container = document.querySelector(".featured-container");
const apiUploadImg = "http://localhost:1337";

async function fetchProducts() {
  try {
    const response = await fetch(productUrl);
    const products = await response.json();

    renderProducts(products);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".featured-container");
  }
}
fetchProducts();
