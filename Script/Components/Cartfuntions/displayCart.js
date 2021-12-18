import { getExistingCart } from "../Cartfuntions/getCart.js";

import deleteCartItem from "../Cartfuntions/deleteCart.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const apiUploadImg = "http://localhost:1337";

const products = getExistingCart();

const productContainer = document.querySelector(".product-container");
const totalAmount = document.querySelector(".total-price-container");
const clearBtn = document.querySelector("#remove");

if (products.length === 0) {
  productContainer.innerHTML = `<div class="message">No products added yet.</div>`;
  totalAmount.style.display = "none";
  clearBtn.style.display = "none";
}
if (products.length > 0) {
  clearBtn.style.display = "block";
}

products.forEach((products) => {
  productContainer.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="${apiUploadImg}${products.image}" class="card-img-top">
                                <div class="card-body">
                                <h5 class="card-title">${products.title}</h5>
                                <div class="cart-price-view">
                                <p class="cartprice">$${products.price}</p>
                                <a href="productdetail.html?id=${products.id}" class="btn btn-secondary">View</a></div>
                                </div>
                              </div>    
      
      `;
  const totalAmount = document.querySelector(".total-amount");
  totalAmount.innerHTML = `${products.price}`;
});
deleteCartItem();
