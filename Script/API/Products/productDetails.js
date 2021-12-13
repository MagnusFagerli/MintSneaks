import displayMessage from "../../Components/DisplayError/displayMessage.js";
import { getExistingFavs } from "../../Components/Cartfuntions/getCart.js";

const apiUploadImg = "http://localhost:1337";
const container = document.querySelector(".product-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const favourites = getExistingFavs();

const url = "http://localhost:1337/products/" + id;

async function fetchProductDetails() {
  try {
    const response = await fetch(url);
    const product = await response.json();
    container.innerHTML = "";

    container.innerHTML = ` <div class="product">
                            <img class="productimg" src="${apiUploadImg}${product.image.formats.small.url}" class="card-img-top">
                            <h1>${product.title}</h1>
                            <h4 class="price">$${product.price}</h4>
                            <button class="btn btn-secondary" id="cartbtn" data-id="${product.id}" data-title="${product.title}">Add To Cart</button>
                            <p class="description">${product.description}</p>                        
                            </div>
                            `;
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-details");
  }
}
fetchProductDetails();

const favButton = document.getElementById("#cartbtn");

if (favButton) {
  favButton.onClick("click", handleClick);
}

function handleClick() {
  const id = this.dataset.id;
  const title = this.dataset.title;

  const currentFavs = getExistingFavs();

  const productExists = currentFavs.find(function (fav) {
    return fav.id === id;
  });

  if (productExists === undefined) {
    const product = { id: id, title: title };
    currentFavs.push(product);
    saveFavs(currentFavs);
  } else {
    const newFavs = currentFavs.filter((fav) => fav.id !== id);
    saveFavs(newFavs);
  }
}

function saveFavs(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
