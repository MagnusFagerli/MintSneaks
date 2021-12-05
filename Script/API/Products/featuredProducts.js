import { baseUrl } from "../apiUrl.js";
import displayMessage from "../../Components/DisplayError/displayMessage.js";
const container = document.querySelector(".featured-container");
const apiUploadImg = "http://localhost:1337";
const productUrl = baseUrl + "products";

async function featuredProducts() {
  try {
    const response = await fetch(productUrl);
    const products = await response.json();

    products.forEach(function (products) {
      if (products.featured === true) {
        container.innerHTML = `<div class="featured-product">
                              <img class="productimg" src="${apiUploadImg}${products.image.formats.small.url}" class="card-img-top">
                              <p></p>
                              <h4 class="featuredtitle">${products.title}</h4>
                              <a href="productdetail.html?id=${products.id}" class="btn btn-secondary" id="viewbtn">View</a>
                              </div>`;
      } else {
        container.innerHTML = `<h6>No featured products to show.</h6>`;
      }
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", error, "featured-container");
  }
}
featuredProducts();
