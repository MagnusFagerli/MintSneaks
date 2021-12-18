import displayMessage from "../../Components/DisplayError/displayMessage.js";
import { getExistingCart } from "../../Components/Cartfuntions/getCart.js";
import { handleClick } from "../../Components/Cartfuntions/addToCart.js";

const apiUploadImg = "http://localhost:1337";
const container = document.querySelector(".product-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://localhost:1337/products/" + id;

async function fetchProductDetails() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    getExistingCart();

    const cartBtn = document.querySelector("#cartbtn");
    var id = cartBtn.getAttribute("data-id");
    var title = cartBtn.getAttribute("data-title");
    var price = cartBtn.getAttribute("data-price");
    var image = cartBtn.getAttribute("data-image");

    cartBtn.setAttribute("data-id", product.id);
    cartBtn.setAttribute("data-title", product.title);
    cartBtn.setAttribute("data-price", product.price);
    cartBtn.setAttribute("data-image", product.image.formats.small.url);

    container.innerHTML = ` <div class="product">
                            <img class="productimg" src="${apiUploadImg}${product.image.formats.small.url}" class="card-img-top">
                            <h1>${product.title}</h1>
                            <h4 class="price">$${product.price}</h4>
                            <p class="description">${product.description}</p>                        
                            </div>
                            `;
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-details");
  }
}
fetchProductDetails();
