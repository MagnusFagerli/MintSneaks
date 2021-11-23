import { getCartItems } from "./getCart.js";

var cartBtn = document.getElementById(".cartbtn");
if (cartBtn) {
  cartBtn.addEventListener("click", handleClick);
  console.log(cartBtn);
}

export function handleClick() {
  const id = this.id;
  const title = this.title;

  const currentCart = getCartItems();

  const productExists = currentCart.find(function (cart) {
    return cart.id === id;
  });

  if (productExists === undefined) {
    const product = { id: id, title: title };
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
