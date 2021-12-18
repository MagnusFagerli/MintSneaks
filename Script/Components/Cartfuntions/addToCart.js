import { getExistingCart } from "../../Components/Cartfuntions/getCart.js";

const cartButton = document.querySelector("#cartbtn");

cartButton.addEventListener("click", handleClick);

export function handleClick() {
  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  const image = this.dataset.image;

  console.log(event);

  const currentCart = getExistingCart();

  const productExists = currentCart.find(function (cart) {
    return cart.id === id;
  });

  if (productExists === undefined) {
    const product = { id: id, title: title, price: price, image: image };
    currentCart.push(product);
    saveCart(currentCart);
  } else {
    const newCart = currentCart.filter((cart) => cart.id !== id);
    saveCart(newCart);
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
