import { baseUrl } from "../../API/apiUrl.js";
import displayMessage from "../DisplayError/displayMessage.js";
const apiUploadImg = "http://localhost:1337";
const productUrl = baseUrl + "products";

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (product) {
      container.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${apiUploadImg}${product.image.formats.small.url}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p>$${product.price}</p>
                                <a href="adminedit.html?id=${product.id}" class="btn btn-secondary">Edit</a>

                            </div>
                            </div>    
                `;
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
})();
