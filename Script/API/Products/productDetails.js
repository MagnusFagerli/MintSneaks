import displayMessage from "../../Components/DisplayError/displayMessage.js";

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

    container.innerHTML = "";

    container.innerHTML = ` 
                            <img class="productimg" src="${apiUploadImg}${product.image.formats.medium.url}" class="card-img-top">
                            <h1>${product.title}</h1>
                            <h4 class="price">$${product.price}</h4>
                            <button class="btn btn-secondary" id="cartbtn" type="submit">Add to cart</button>
                            <p class="description">${product.description}</p>                        
                            `;
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-details");
  }
}

fetchProductDetails();
