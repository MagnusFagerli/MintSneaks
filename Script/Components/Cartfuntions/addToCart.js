import getCart from "./getCart.js";
import saveCart from "./saveCart.js";

export default function handleCartClick() {
  const id = this.dataset.id;

  const cart = getCart();

  // find item in cart
  const cartItem = cart.find(function (product) {
    return product.id === id;
  });

  // item is not in the cart
  // add it
  if (cartItem === undefined) {
    const newItem = { id: id };
    cart.push(newItem);
    saveCart(cart);
  }
}
