import { baseUrl } from "../";
import displayMessage from "../Components/DisplayError/displayMessage.js";

const bannerUrl = baseUrl + "home";
const container = document.querySelector(".jumboimg");

async function fetchProducts() {
  try {
    const response = await fetch(bannerUrl);
    const banner = await response.json();

    container.innerHTML = `<img src="${hero_banner}">`;
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
}
fetchProducts();
